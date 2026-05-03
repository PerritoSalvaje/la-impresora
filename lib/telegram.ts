// Telegram Bot helpers — gating de comunidad Premium.
//
// Flujo:
// 1. Usuario paga (LemonSqueezy / Hotmart webhook).
// 2. Llamamos createOneShotInviteLink → link de un solo uso, expira 24h.
// 3. Mandamos email al comprador con el link único.
// 4. Cron diario: kickea a los que cancelaron (sync con DB de pagos).

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const PREMIUM_CHAT_ID = process.env.TELEGRAM_PREMIUM_CHAT_ID;

const BASE = (token: string) => `https://api.telegram.org/bot${token}`;

type InviteLink = {
  invite_link: string;
  creator: { id: number };
  expire_date: number;
  member_limit: number;
};

export async function createOneShotInviteLink(
  name: string
): Promise<InviteLink | null> {
  if (!BOT_TOKEN || !PREMIUM_CHAT_ID) {
    console.warn("[telegram] missing env — bot not configured");
    return null;
  }

  const expireDate = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 24h
  const url = `${BASE(BOT_TOKEN)}/createChatInviteLink`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: PREMIUM_CHAT_ID,
        name: `Premium-${name.slice(0, 20)}`,
        expire_date: expireDate,
        member_limit: 1,
        creates_join_request: false,
      }),
    });
    const data = await res.json();
    if (!data.ok) {
      console.error("[telegram] createInviteLink failed", data);
      return null;
    }
    return data.result as InviteLink;
  } catch (err) {
    console.error("[telegram] createInviteLink exception", err);
    return null;
  }
}

export async function kickMember(userId: number): Promise<boolean> {
  if (!BOT_TOKEN || !PREMIUM_CHAT_ID) return false;

  try {
    // banChatMember + unbanChatMember = "kick" sin ban permanente
    const banRes = await fetch(`${BASE(BOT_TOKEN)}/banChatMember`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: PREMIUM_CHAT_ID,
        user_id: userId,
        until_date: Math.floor(Date.now() / 1000) + 35,
      }),
    });
    const banData = await banRes.json();
    if (!banData.ok) {
      console.error("[telegram] banChatMember failed", banData);
      return false;
    }

    await fetch(`${BASE(BOT_TOKEN)}/unbanChatMember`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: PREMIUM_CHAT_ID,
        user_id: userId,
        only_if_banned: true,
      }),
    });
    return true;
  } catch (err) {
    console.error("[telegram] kick exception", err);
    return false;
  }
}

// MarkdownV2 requiere escape de _ * [ ] ( ) ~ ` > # + - = | { } . !
const MD_V2_ESCAPE = /[_*[\]()~`>#+\-=|{}.!]/g;
export function escapeMarkdownV2(text: string): string {
  return String(text ?? "").replace(MD_V2_ESCAPE, "\\$&");
}

export async function notifyAdmin(message: string): Promise<void> {
  const adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
  if (!BOT_TOKEN || !adminChatId) return;

  try {
    await fetch(`${BASE(BOT_TOKEN)}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: adminChatId,
        text: message,
        parse_mode: "MarkdownV2",
        disable_web_page_preview: true,
      }),
    });
  } catch (err) {
    console.error("[telegram] notifyAdmin exception", err);
  }
}
