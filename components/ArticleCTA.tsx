"use client";
import { useState, useEffect } from "react";
import { events } from "@/lib/amplitude";

type Props = {
  source?: string;
  variant?: "default" | "compact";
  hook?: string;
};

export default function ArticleCTA({ source = "blog_inline", variant = "default", hook }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [ref, setRef] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const r = new URLSearchParams(window.location.search).get("ref");
      if (r) setRef(r);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    events.newsletterSignup(source, ref);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          ref,
          utm_source: "blog",
          utm_medium: "inline_cta",
          utm_campaign: source,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        events.newsletterSignupSuccess(source, ref);
      }
    } catch { setStatus("loading"); }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="my-8 rounded-xl px-5 py-4" style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.15)" }}>
        <p className="text-sm font-semibold" style={{ color: "#00e676" }}>¡Listo! Revisá tu email para confirmar.</p>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-2xl p-6" style={{ background: "#111213", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-display font-semibold text-base" style={{ color: "#f0f0ef", letterSpacing: "-0.01em" }}>
            {hook || "¿Querés más análisis como este?"}
          </p>
          <p className="text-sm mt-1" style={{ color: "rgba(240,240,239,0.45)" }}>
            Cada jueves en tu email. Gratis. + PDF de bienvenida.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 sm:shrink-0">
          <label htmlFor={`cta-${source}`} className="sr-only">Email</label>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />
          <input
            id={`cta-${source}`}
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            aria-label="Email"
            className="text-sm px-3 py-2.5 rounded-[8px] flex-1 sm:w-44"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "#f0f0ef" }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary text-xs whitespace-nowrap"
            style={{ padding: "10px 16px", borderRadius: "8px" }}
          >
            {status === "loading" ? "..." : "Suscribirme →"}
          </button>
        </form>
      </div>
    </div>
  );
}
