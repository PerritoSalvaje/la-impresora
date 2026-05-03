"use client";
import { useState } from "react";
import { events } from "@/lib/amplitude";

export default function ReferidosForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [refLink, setRefLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function generateRef(email: string): string {
    // Genera código corto desde email — formato laimpresora.io/?ref=xxxx
    const base = email.toLowerCase().split("@")[0].replace(/[^a-z0-9]/g, "");
    return base.slice(0, 8) + Date.now().toString(36).slice(-3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    const code = generateRef(email);
    const link = `https://laimpresora.io/?ref=${code}`;

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "referidos_page",
          utm_source: "referidos",
          utm_medium: "page",
          utm_campaign: "referral_program",
          ref: code,
        }),
      });
      if (res.ok) {
        setRefLink(link);
        setStatus("success");
        setEmail("");
        events.referralLinkGenerated(code);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  async function copyLink() {
    if (!refLink) return;
    await navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (status === "success" && refLink) {
    return (
      <div className="card p-8">
        <div className="mb-6">
          <span className="badge badge-verde inline-flex mb-4">✓ Estás dentro</span>
          <h3 className="font-display font-bold text-text-primary text-xl mb-2">
            Tu link de referidos está listo
          </h3>
          <p className="text-text-secondary text-sm">
            Compartilo y empezá a sumar. Te llega también por email.
          </p>
        </div>

        <div
          className="rounded-xl px-4 py-4 mb-4 flex items-center gap-3 break-all"
          style={{
            background: "rgba(0,230,118,0.04)",
            border: "1px solid rgba(0,230,118,0.15)",
          }}
        >
          <code className="text-verde text-sm flex-1">{refLink}</code>
          <button
            onClick={copyLink}
            className="btn-secondary shrink-0"
            style={{ padding: "6px 14px", fontSize: "12px" }}
          >
            {copied ? "✓ Copiado" : "Copiar"}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Te dejo mi link de La Impresora — el newsletter de crypto y AI para LATAM: ${refLink}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary justify-center text-xs"
            style={{ padding: "10px 12px" }}
          >
            WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Estoy leyendo La Impresora — el newsletter de crypto, AI y finanzas para LATAM. Sumate: ${refLink}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary justify-center text-xs"
            style={{ padding: "10px 12px" }}
          >
            X / Twitter
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(refLink)}&text=${encodeURIComponent("La Impresora — newsletter crypto/AI LATAM")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary justify-center text-xs"
            style={{ padding: "10px 12px" }}
          >
            Telegram
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent("Te recomiendo La Impresora")}&body=${encodeURIComponent(`Te dejo mi link: ${refLink}`)}`}
            className="btn-secondary justify-center text-xs"
            style={{ padding: "10px 12px" }}
          >
            Email
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8">
      <label htmlFor="ref-email" className="text-text-secondary text-sm block mb-3">
        Tu email
      </label>
      <input
        id="ref-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
        aria-label="Email"
        className="w-full text-sm px-4 py-3 rounded-[10px] transition-colors mb-4"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          color: "#f0f0ef",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center"
        style={{ opacity: status === "loading" ? 0.6 : 1 }}
      >
        {status === "loading" ? "Generando link..." : "Suscribirme y generar mi link →"}
      </button>
      {status === "error" && (
        <p className="text-xs mt-3 text-red-400">Algo salió mal. Intentá de nuevo.</p>
      )}
      <p className="text-text-muted text-xs mt-4 text-center">
        El newsletter es gratis. Tu link único se genera al confirmar la suscripción.
      </p>
    </form>
  );
}
