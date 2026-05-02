import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createOneShotInviteLink, notifyAdmin } from "@/lib/telegram";

// LemonSqueezy webhook handler.
// Configurar en LS Dashboard → Settings → Webhooks:
//   URL: https://laimpresora.io/api/webhooks/lemonsqueezy
//   Events: order_created, subscription_created, subscription_cancelled
//   Signing secret: LEMONSQUEEZY_WEBHOOK_SECRET (en .env)
//
// Verifica firma HMAC-SHA256 del header X-Signature.

export const dynamic = "force-dynamic";

function verifySignature(rawBody: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(rawBody).digest("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(digest, "hex")
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[ls-webhook] missing LEMONSQUEEZY_WEBHOOK_SECRET");
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const signature = req.headers.get("x-signature") || "";
  const rawBody = await req.text();

  if (!verifySignature(rawBody, signature, secret)) {
    console.error("[ls-webhook] signature mismatch");
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  let payload: {
    meta?: { event_name?: string; custom_data?: Record<string, unknown> };
    data?: {
      attributes?: {
        user_email?: string;
        user_name?: string;
        product_name?: string;
        variant_name?: string;
        total_formatted?: string;
        status?: string;
      };
    };
  };
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const event = payload.meta?.event_name;
  const attrs = payload.data?.attributes;
  const email = attrs?.user_email;
  const name = attrs?.user_name || email?.split("@")[0] || "buyer";
  const productName = attrs?.product_name || "unknown";

  console.log("[ls-webhook]", event, email, productName);

  if (!event || !email) {
    return NextResponse.json({ error: "missing event/email" }, { status: 400 });
  }

  // Subscription_created → premium membership → invite Telegram
  if (event === "subscription_created" || event === "order_created") {
    const isPremium = /premium|membership/i.test(productName);

    if (isPremium) {
      const invite = await createOneShotInviteLink(name);
      // Acá iría: enviar email al comprador con invite.invite_link
      // Por ahora notificamos al admin para alta manual mientras Beehiiv/Resend no esté.
      await notifyAdmin(
        `🎉 *Nuevo Premium* (LS)\n` +
        `Email: \`${email}\`\n` +
        `Producto: ${productName}\n` +
        `Total: ${attrs?.total_formatted || "?"}\n` +
        `Telegram invite: ${invite?.invite_link || "FAILED — crear manual"}`
      );
    } else {
      await notifyAdmin(
        `💰 *Nueva venta* (LS)\n` +
        `Email: \`${email}\`\n` +
        `Producto: ${productName}\n` +
        `Total: ${attrs?.total_formatted || "?"}`
      );
    }
  }

  if (event === "subscription_cancelled" || event === "subscription_expired") {
    await notifyAdmin(
      `⚠️ *Premium cancelado* (LS)\n` +
      `Email: \`${email}\`\n` +
      `Status: ${attrs?.status}\n` +
      `Acción: kickear de Telegram al fin del período pagado`
    );
  }

  return NextResponse.json({ ok: true });
}
