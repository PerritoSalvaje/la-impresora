import { NextRequest, NextResponse } from "next/server";
import { createOneShotInviteLink, notifyAdmin, escapeMarkdownV2 as esc } from "@/lib/telegram";

// Hotmart webhook handler.
// Configurar en Hotmart → Tools → Webhook (Postback 2.0):
//   URL: https://laimpresora.io/api/webhooks/hotmart
//   Events: PURCHASE_COMPLETE, PURCHASE_CANCELED, SUBSCRIPTION_CANCELLATION
//   Signature secret: HOTMART_HOTTOK
//
// Hotmart Postback 2.0 manda hottok en query string o header — verificamos.

export const dynamic = "force-dynamic";

type HotmartPayload = {
  event?: string;
  data?: {
    buyer?: { email?: string; name?: string };
    product?: { id?: number; name?: string };
    purchase?: {
      transaction?: string;
      status?: string;
      price?: { value?: number; currency_value?: string };
    };
    subscription?: {
      subscriber?: { code?: string };
      plan?: { name?: string };
    };
  };
  hottok?: string;
};

export async function POST(req: NextRequest) {
  const expectedHottok = process.env.HOTMART_HOTTOK;
  if (!expectedHottok) {
    console.error("[hotmart-webhook] missing HOTMART_HOTTOK");
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const url = new URL(req.url);
  const queryHottok = url.searchParams.get("hottok");
  const headerHottok = req.headers.get("x-hotmart-hottok");

  let payload: HotmartPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const bodyHottok = payload.hottok;
  const provided = queryHottok || headerHottok || bodyHottok;

  if (provided !== expectedHottok) {
    console.error("[hotmart-webhook] hottok mismatch");
    return NextResponse.json({ error: "invalid hottok" }, { status: 401 });
  }

  const event = payload.event;
  const email = payload.data?.buyer?.email;
  const name = payload.data?.buyer?.name || email?.split("@")[0] || "buyer";
  const productName = payload.data?.product?.name || "unknown";
  const status = payload.data?.purchase?.status;
  const priceValue = payload.data?.purchase?.price?.value;
  const priceCurr = payload.data?.purchase?.price?.currency_value || "USD";

  console.log("[hotmart-webhook]", event, status, email, productName);

  if (!event || !email) {
    return NextResponse.json({ error: "missing event/email" }, { status: 400 });
  }

  if (event === "PURCHASE_COMPLETE" || event === "PURCHASE_APPROVED") {
    const isPremium = /premium|membership/i.test(productName);
    const isAcademy = /academy|curso/i.test(productName);

    if (isPremium || isAcademy) {
      const invite = await createOneShotInviteLink(name);
      await notifyAdmin(
        `🎉 *Nueva venta Hotmart*\n` +
        `Email: \`${esc(email)}\`\n` +
        `Producto: ${esc(productName)}\n` +
        `Precio: ${esc(String(priceValue))} ${esc(priceCurr)}\n` +
        `Telegram: ${esc(invite?.invite_link || "—")}`
      );
    } else {
      await notifyAdmin(
        `💰 *Venta Hotmart*\n` +
        `Email: \`${esc(email)}\`\n` +
        `Producto: ${esc(productName)}\n` +
        `Precio: ${esc(String(priceValue))} ${esc(priceCurr)}`
      );
    }
  }

  if (event === "PURCHASE_CANCELED" || event === "SUBSCRIPTION_CANCELLATION") {
    await notifyAdmin(
      `⚠️ *Cancelación Hotmart*\n` +
      `Email: \`${esc(email)}\`\n` +
      `Producto: ${esc(productName)}\n` +
      `Status: ${esc(status || "")}`
    );
  }

  return NextResponse.json({ ok: true });
}
