import { NextResponse } from "next/server";

// Endpoint interno — devuelve métricas agregadas leyendo APIs externas.
// Si las env vars no están seteadas, devuelve null en cada bloque (UI muestra "Sin datos").

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function getBeehiiv() {
  const key = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUB_ID;
  if (!key || !pubId) return null;

  try {
    const [subsRes, statsRes] = await Promise.all([
      fetch(`https://api.beehiiv.com/v2/publications/${pubId}/subscriptions?status=active&limit=1`, {
        headers: { Authorization: `Bearer ${key}` },
        cache: "no-store",
      }),
      fetch(`https://api.beehiiv.com/v2/publications/${pubId}/stats`, {
        headers: { Authorization: `Bearer ${key}` },
        cache: "no-store",
      }),
    ]);

    const subsData = subsRes.ok ? await subsRes.json() : { total_results: 0 };
    const statsData = statsRes.ok ? await statsRes.json() : { stats: {} };

    return {
      active: subsData.total_results || 0,
      new7d: statsData.stats?.subscriptions_last_7_days || 0,
      openRate: (statsData.stats?.average_open_rate || 0) * 100,
    };
  } catch {
    return null;
  }
}

async function getLemonSqueezy() {
  const key = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  if (!key || !storeId) return null;

  try {
    const res = await fetch(
      `https://api.lemonsqueezy.com/v1/subscriptions?filter[store_id]=${storeId}&filter[status]=active&page[size]=100`,
      {
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${key}`,
        },
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const subs = data?.data || [];

    // MRR estimate: suma price/12 si annual, price si monthly (simplificado)
    let mrr = 0;
    let new7d = 0;
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

    for (const s of subs) {
      const price = parseFloat(s.attributes?.subtotal_in_cents || "0") / 100;
      const isAnnual = /year/i.test(s.attributes?.cadence || "");
      mrr += isAnnual ? price / 12 : price;
      if (new Date(s.attributes?.created_at).getTime() > sevenDaysAgo) new7d++;
    }

    return {
      active: subs.length,
      mrr: Math.round(mrr),
      new7d,
    };
  } catch {
    return null;
  }
}

async function getHotmart() {
  // Hotmart requiere OAuth — versión simplificada
  const clientId = process.env.HOTMART_CLIENT_ID;
  const clientSecret = process.env.HOTMART_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;
  // Skeleton — la implementación real está en lib/hotmart.ts (TODO)
  return null;
}

async function getAmplitude() {
  const key = process.env.AMPLITUDE_API_KEY;
  const secret = process.env.AMPLITUDE_API_SECRET;
  if (!key || !secret) return null;
  // Amplitude Dashboard REST API requiere project + chart IDs configurados
  return null;
}

export async function GET() {
  const [beehiiv, ls, hotmart, amplitude] = await Promise.all([
    getBeehiiv(),
    getLemonSqueezy(),
    getHotmart(),
    getAmplitude(),
  ]);

  return NextResponse.json({
    beehiiv,
    ls,
    hotmart,
    amplitude,
    timestamp: new Date().toISOString(),
  });
}
