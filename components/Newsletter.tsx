"use client";
import { useState, useEffect } from "react";
import { STATS, formatSubscribers } from "@/lib/stats";

const BULLETS = [
  { icon: "✦", text: "Gratis" },
  { icon: "✦", text: "Cada jueves" },
  { icon: "✦", text: "Sin spam" },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ref, setRef] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const r = params.get("ref") || undefined;
      if (r) setRef(r);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "home_hero",
          ref,
          utm_source: "site",
          utm_medium: "organic",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "#111213",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Badge */}
          <span className="badge badge-verde mb-6 inline-flex">
            🎁 Regalo de bienvenida
          </span>

          {/* Headline */}
          <h2
            className="font-display font-bold text-2xl md:text-3xl leading-tight mb-3"
            style={{ color: "#f0f0ef", letterSpacing: "-0.02em" }}
          >
            Suscribite y recibí gratis:<br />
            <span style={{ color: "#00e676" }}>"La Guía del Inversor en la Era Digital"</span>
          </h2>

          {/* Lead magnet detail */}
          <div className="rounded-xl px-4 py-3 mb-5 flex items-start gap-3" style={{ background: "rgba(0,230,118,0.04)", border: "1px solid rgba(0,230,118,0.1)" }}>
            <span style={{ fontSize: "20px", lineHeight: 1 }}>📘</span>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#f0f0ef" }}>PDF gratuito — 24 páginas</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(240,240,239,0.45)" }}>Crypto, AI, DeFi y tokenización explicados desde cero. Descarga inmediata.</p>
            </div>
          </div>

          {/* Subline */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,240,239,0.5)" }}>
            Más el newsletter cada jueves: análisis de mercados, herramientas y oportunidades para hispanohablantes de todo el mundo.
          </p>

          {/* Bullets */}
          <div className="flex flex-wrap gap-4 mb-7">
            {BULLETS.map(({ icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 text-sm"
                style={{ color: "rgba(240,240,239,0.55)" }}
              >
                <span style={{ color: "#00e676", fontSize: "9px" }}>{icon}</span>
                {text}
              </span>
            ))}
          </div>

          {/* Form / success */}
          {status === "success" ? (
            <div
              className="rounded-xl px-5 py-4"
              style={{
                background: "rgba(0,230,118,0.05)",
                border: "1px solid rgba(0,230,118,0.15)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "#00e676" }}>
                Listo, estás dentro.
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(240,240,239,0.45)" }}>
                Revisá tu email para confirmar la suscripción.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 text-sm px-4 py-3 rounded-[10px] focus:outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "#f0f0ef",
                  }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(0,230,118,0.3)")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.09)")
                  }
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary whitespace-nowrap"
                  style={{
                    padding: "12px 20px",
                    fontSize: "13px",
                    borderRadius: "10px",
                    opacity: status === "loading" ? 0.6 : 1,
                  }}
                >
                  {status === "loading" ? "Enviando..." : "Suscribirme →"}
                </button>
              </form>

              {status === "error" && (
                <p className="text-xs mt-2" style={{ color: "#f87171" }}>
                  Algo salió mal. Intentá de nuevo.
                </p>
              )}
            </>
          )}

          {/* Social proof */}
          <div className="flex items-center gap-2 mt-5">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                background: "#00e676",
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
              aria-hidden="true"
            />
            <span className="text-xs" style={{ color: "rgba(240,240,239,0.35)" }}>
              {formatSubscribers(STATS.subscribers)} lectores activos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
