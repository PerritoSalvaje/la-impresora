"use client";
import { useEffect, useState } from "react";
import { events } from "@/lib/amplitude";

const STORAGE_KEY = "li_exit_intent_shown_v1";
const COOLDOWN_DAYS = 7;

export default function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Cooldown: no mostrar más de 1 vez por semana
    const last = localStorage.getItem(STORAGE_KEY);
    if (last) {
      const days = (Date.now() - parseInt(last, 10)) / (1000 * 60 * 60 * 24);
      if (days < COOLDOWN_DAYS) return;
    }

    // Sólo desktop — en mobile el patrón es agresivo y Google lo penaliza
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 12000); // 12s mínimo en página

    const handler = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY < 5 && !open) {
        setOpen(true);
        events.exitIntentShown();
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
      }
    };

    document.addEventListener("mouseleave", handler);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseleave", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          source: "exit_intent",
          utm_source: "site",
          utm_medium: "exit_intent",
          utm_campaign: "errores_fatales",
        }),
      });
      if (res.ok) {
        setStatus("success");
        events.exitIntentSubscribed();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 no-print"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
    >
      <div
        className="card p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#0f1011" }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ color: "rgba(240,240,239,0.5)", background: "rgba(255,255,255,0.05)" }}
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="font-display font-bold text-text-primary text-lg mb-2">
              Listo, te lo mando ahora.
            </h3>
            <p className="text-text-secondary text-sm">
              Revisá tu inbox en 2 minutos.
            </p>
          </div>
        ) : (
          <>
            <span className="badge badge-dorado inline-flex mb-4">⚠ Antes de irte</span>
            <h3 id="exit-title" className="font-display font-bold text-text-primary text-xl leading-tight mb-3">
              Los 5 errores que te cuestan plata en crypto
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              PDF gratuito de 8 páginas. Es el resumen del error que comete el 90% en su primera
              compra y los 4 que vienen después. Te lo mando ahora.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                autoFocus
                className="text-sm px-4 py-3 rounded-[10px] focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
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
                {status === "loading" ? "Enviando..." : "Mandame el PDF →"}
              </button>
            </form>

            {status === "error" && (
              <p className="text-xs mt-3 text-red-400 text-center">Algo salió mal. Intentá de nuevo.</p>
            )}

            <p className="text-text-muted text-xs text-center mt-4">
              Te suscribís al newsletter gratuito. Cancelás cuando quieras.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
