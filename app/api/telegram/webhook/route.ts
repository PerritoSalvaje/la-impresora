import { NextRequest, NextResponse } from "next/server";

// Telegram Bot webhook handler.
//
// Setup:
// 1. Crear bot en @BotFather → /newbot → guarda token en TELEGRAM_BOT_TOKEN
// 2. Setear webhook (una vez):
//    curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://laimpresora.io/api/telegram/webhook&secret_token=<SECRET>"
// 3. Setear TELEGRAM_WEBHOOK_SECRET en .env (cualquier string aleatorio largo)
//
// Comandos soportados:
//   /start    → mensaje de bienvenida + link a /precios
//   /precios  → muestra los tiers
//   /soporte  → contacto humano
//   /whoami   → muestra tu chat_id (debug)
//   /referidos → link al programa de referidos

export const runtime = "edge";
export const dynamic = "force-dynamic";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET;

async function send(chatId: number, text: string, opts: Record<string, unknown> = {}) {
  if (!BOT_TOKEN) return;
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
      disable_web_page_preview: true,
      ...opts,
    }),
  });
}

const REPLIES: Record<string, (name: string) => string> = {
  "/start": (name) =>
    `Hola ${name} 👋\n\n` +
    `Soy el bot de *La Impresora* — newsletter de crypto, AI y finanzas digitales para LATAM.\n\n` +
    `Comandos disponibles:\n` +
    `/precios — Ver tiers\n` +
    `/referidos — Programa de referidos\n` +
    `/soporte — Contactar humano\n\n` +
    `Web: https://laimpresora.io`,

  "/precios": () =>
    `*Precios actuales:*\n\n` +
    `🆓 *Free* — newsletter cada jueves\n` +
    `☕ *Supporter* — donación $5+ vía Cafecito\n` +
    `⭐ *Premium* — $9/mes ó $79/año (33% off)\n` +
    `🎓 *Academy* — $197 una vez (acceso vitalicio)\n` +
    `📦 *Bundle 3 libros + 30d Telegram* — $29\n\n` +
    `Detalles: https://laimpresora.io/precios`,

  "/referidos": () =>
    `*Programa de referidos*\n\n` +
    `Compartí La Impresora y desbloqueá premios:\n` +
    `→ 3 refs: Guía PDF "50 lecciones del dinero digital"\n` +
    `→ 10 refs: 1 mes Premium gratis\n` +
    `→ 25 refs: Academy completo gratis ($197)\n` +
    `→ 50 refs: Premium vitalicio + sesión 1:1\n\n` +
    `Empezá: https://laimpresora.io/referidos`,

  "/soporte": () =>
    `*Soporte*\n\n` +
    `Mandame un email a hola@laimpresora.io con tu duda.\n` +
    `Respondemos en 24-48h hábiles.\n\n` +
    `Para temas técnicos: incluí captura + qué intentaste.`,
};

export async function POST(req: NextRequest) {
  if (!BOT_TOKEN) {
    return NextResponse.json({ error: "bot not configured" }, { status: 503 });
  }

  // Telegram manda secret en el header X-Telegram-Bot-Api-Secret-Token
  if (WEBHOOK_SECRET) {
    const provided = req.headers.get("x-telegram-bot-api-secret-token");
    if (provided !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: "invalid secret" }, { status: 401 });
    }
  }

  const update = await req.json().catch(() => null);
  if (!update) return NextResponse.json({ ok: true });

  const message = update.message;
  if (!message?.text || !message?.chat?.id) {
    return NextResponse.json({ ok: true });
  }

  const chatId = message.chat.id;
  const userName = message.from?.first_name || "amigo";
  const text: string = message.text.trim().toLowerCase().split(" ")[0];

  // Comandos directos
  if (text === "/whoami") {
    await send(chatId, `Tu chat_id es: \`${chatId}\``);
    return NextResponse.json({ ok: true });
  }

  const reply = REPLIES[text];
  if (reply) {
    await send(chatId, reply(userName));
    return NextResponse.json({ ok: true });
  }

  // Mensaje libre — respuesta genérica, después se puede meter AI acá
  await send(
    chatId,
    `Hola 👋 Probá /start para ver qué puedo hacer.\n\n` +
    `Web: https://laimpresora.io`
  );

  return NextResponse.json({ ok: true });
}
