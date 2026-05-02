import { NextRequest, NextResponse } from "next/server";
import { notifyAdmin } from "@/lib/telegram";

// Cafecito webhook (donaciones AR).
// Cafecito manda webhook al confirmar un pago.
// Doc: https://cafecito.app/p/help → Sección "Webhook"

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const expected = process.env.CAFECITO_WEBHOOK_SECRET;
  if (!expected) {
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const provided = req.headers.get("authorization")?.replace("Bearer ", "");
  if (provided !== expected) {
    return NextResponse.json({ error: "invalid auth" }, { status: 401 });
  }

  const payload = await req.json().catch(() => ({}));
  const supporter = payload.supporter || payload.email || "anónimo";
  const amount = payload.amount || "?";

  await notifyAdmin(
    `☕ *Cafecito recibido*\nDe: \`${supporter}\`\nMonto: ${amount}`
  );

  return NextResponse.json({ ok: true });
}
