import { NextRequest, NextResponse } from "next/server";

// Fallback persistente: si Beehiiv aún no está conectado, los emails se
// guardan en KV (Vercel KV o Upstash) o se reportan vía webhook a un canal
// privado para no perder ninguno. Hoy reportamos a un webhook si existe.

async function persistFallback(email: string, source: string, ref?: string) {
  const url = process.env.SUBSCRIBE_FALLBACK_WEBHOOK;
  if (!url) {
    console.error("[subscribe] PERDIDO sin fallback:", email, source, ref);
    return false;
  }
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source,
        ref,
        timestamp: new Date().toISOString(),
        provider_pending: true,
      }),
    });
    return true;
  } catch (err) {
    console.error("[subscribe] fallback webhook failed", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, source = "website", utm_source, utm_medium, utm_campaign, ref } = body;

  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
  const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUB_ID;

  if (!BEEHIIV_API_KEY || !BEEHIIV_PUB_ID) {
    const persisted = await persistFallback(email, source, ref);
    return NextResponse.json(
      {
        ok: true,
        provider: "fallback",
        persisted,
        message:
          "Te anotamos. La cuenta de newsletter se está finalizando — recibirás el email de confirmación en cuanto active.",
      },
      { status: 202 }
    );
  }

  try {
    const tags = ["website"];
    if (ref) tags.push(`ref:${ref}`);
    if (source !== "website") tags.push(`source:${source}`);

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: utm_source || "website",
          utm_medium: utm_medium || "organic",
          utm_campaign: utm_campaign || source,
          referring_site: ref ? `referral:${ref}` : undefined,
          custom_fields: ref ? [{ name: "referrer", value: ref }] : undefined,
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[subscribe] beehiiv error", res.status, text);
      // Beehiiv falló — guardamos en fallback para no perder el email
      await persistFallback(email, source, ref);
      return NextResponse.json(
        { ok: true, provider: "fallback", note: "queued" },
        { status: 202 }
      );
    }

    return NextResponse.json({ ok: true, provider: "beehiiv" });
  } catch (err) {
    console.error("[subscribe] exception", err);
    await persistFallback(email, source, ref);
    return NextResponse.json(
      { ok: true, provider: "fallback", note: "queued" },
      { status: 202 }
    );
  }
}
