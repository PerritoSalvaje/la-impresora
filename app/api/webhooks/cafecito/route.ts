import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { notifyAdmin, escapeMarkdownV2 as esc } from "@/lib/telegram";

// Cafecito webhook (donaciones AR).
// Cafecito firma con HMAC-SHA256 — header X-Cafecito-Signature.
// Doc: https://cafecito.app/p/help → Sección "Webhook"
//
// Si el header no viene, fallback a Bearer secret simple (útil para test
// con curl). En producción, configurar SIEMPRE con HMAC.

export const dynamic = "force-dynamic";

function timingSafeEq(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const expected = process.env.CAFECITO_WEBHOOK_SECRET;
  if (!expected) {
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const rawBody = await req.text();

  // 1. Intentá HMAC primero (preferido)
  const sigHeader = req.headers.get("x-cafecito-signature");
  if (sigHeader) {
    const computed = crypto
      .createHmac("sha256", expected)
      .update(rawBody)
      .digest("hex");
    if (!timingSafeEq(sigHeader, computed)) {
      return NextResponse.json({ error: "invalid signature" }, { status: 401 });
    }
  } else {
    // 2. Fallback Bearer (solo para test manual)
    const provided = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!provided || !timingSafeEq(provided, expected)) {
      return NextResponse.json({ error: "invalid auth" }, { status: 401 });
    }
  }

  const payload = JSON.parse(rawBody || "{}");
  const supporter = String(payload.supporter || payload.email || "anónimo");
  const amount = String(payload.amount ?? "?");

  await notifyAdmin(
    `☕ *Cafecito recibido*\n` +
    `De: \`${esc(supporter)}\`\n` +
    `Monto: ${esc(amount)}`
  );

  return NextResponse.json({ ok: true });
}
