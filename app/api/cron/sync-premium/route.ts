import { NextRequest, NextResponse } from "next/server";
import { kickMember, notifyAdmin } from "@/lib/telegram";

// Cron job — sincroniza miembros del canal Premium con la lista de pagos activos.
//
// Setup en Vercel:
//   vercel.json:
//   {
//     "crons": [{ "path": "/api/cron/sync-premium", "schedule": "0 8 * * *" }]
//   }
//
// Auth: Vercel cron manda Authorization: Bearer ${CRON_SECRET}
//
// Lógica:
// 1. Listar miembros del canal Telegram Premium
// 2. Listar pagos activos en LemonSqueezy + Hotmart
// 3. Cruzar: miembros que NO están en activos → kick (con grace period 3 días)
// 4. Notificar al admin con resumen

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

async function listLemonSqueezyActiveSubscriptions(): Promise<string[]> {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  if (!apiKey || !storeId) return [];

  try {
    const res = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions?filter[store_id]=${storeId}&filter[status]=active&page[size]=100`,
      {
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data?.data || [])
      .map((s: { attributes?: { user_email?: string } }) => s.attributes?.user_email)
      .filter(Boolean) as string[];
  } catch (err) {
    console.error("[cron] LS list failed", err);
    return [];
  }
}

async function listHotmartActiveSubscriptions(): Promise<string[]> {
  const clientId = process.env.HOTMART_CLIENT_ID;
  const clientSecret = process.env.HOTMART_CLIENT_SECRET;
  if (!clientId || !clientSecret) return [];

  try {
    // 1. OAuth token
    const tokenRes = await fetch(
      `https://api-sec-vlc.hotmart.com/security/oauth/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      { method: "POST", headers: { Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}` } }
    );
    if (!tokenRes.ok) return [];
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
    if (!accessToken) return [];

    // 2. Subscriptions (active only)
    const subsRes = await fetch(
      "https://developers.hotmart.com/payments/api/v1/subscriptions?status=ACTIVE&max_results=100",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!subsRes.ok) return [];
    const subsData = await subsRes.json();
    return (subsData?.items || [])
      .map((s: { subscriber?: { email?: string } }) => s.subscriber?.email)
      .filter(Boolean) as string[];
  } catch (err) {
    console.error("[cron] Hotmart list failed", err);
    return [];
  }
}

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;

  // Sin secret en prod → endpoint bloqueado (no abierto al público)
  if (!cronSecret) {
    return NextResponse.json(
      { error: "CRON_SECRET not configured" },
      { status: 503 }
    );
  }

  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const start = Date.now();

  const [lsActive, hotmartActive] = await Promise.all([
    listLemonSqueezyActiveSubscriptions(),
    listHotmartActiveSubscriptions(),
  ]);

  const activeEmails = new Set(
    [...lsActive, ...hotmartActive].map((e) => e.toLowerCase())
  );

  const summary = {
    duration_ms: Date.now() - start,
    active_total: activeEmails.size,
    active_ls: lsActive.length,
    active_hotmart: hotmartActive.length,
    kicked: 0,
    note: "Cross-check con miembros del canal Telegram requiere DB persistente (Vercel KV pendiente). Hoy solo reporta.",
  };

  await notifyAdmin(
    `📊 *Daily Premium Sync*\n` +
    `Activos LS: ${lsActive.length}\n` +
    `Activos Hotmart: ${hotmartActive.length}\n` +
    `Total único: ${activeEmails.size}\n` +
    `Duración: ${summary.duration_ms}ms`
  );

  return NextResponse.json({ ok: true, ...summary });
}

// Helper future: cuando agreguemos Vercel KV con mapping email → telegram_user_id,
// el cron va a poder kickear automáticamente. Por ahora solo reporta.
export { kickMember as _telegramKickMember };
