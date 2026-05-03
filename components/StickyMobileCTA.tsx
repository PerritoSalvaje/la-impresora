"use client";
import { useEffect, useState } from "react";
import { events } from "@/lib/amplitude";

const DISMISSED_KEY = "li_sticky_mobile_dismissed_v1";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    let trackedShown = false;

    // Hide cuando el form Newsletter es visible (no compitan)
    const newsletterEl = document.getElementById("newsletter");
    let newsletterVisible = false;
    let observer: IntersectionObserver | null = null;
    if (newsletterEl && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          newsletterVisible = entry.isIntersecting;
          if (newsletterVisible) setShow(false);
        },
        { threshold: 0.1 }
      );
      observer.observe(newsletterEl);
    }

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.3 && !newsletterVisible) {
        setShow(true);
        if (!trackedShown) {
          events.stickyMobileShown();
          trackedShown = true;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
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
          source: "sticky_mobile",
          utm_source: "site",
          utm_medium: "sticky_mobile",
        }),
      });
      if (res.ok) {
        setStatus("success");
        events.stickyMobileSubscribed();
      }
    } catch {
      // Mantener idle silencioso, no mostrar error en mobile bar
    }
  }

  function dismiss() {
    setShow(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden no-print"
      style={{
        background: "rgba(8,9,10,0.95)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(0,230,118,0.25)",
        padding: "10px 12px env(safe-area-inset-bottom, 10px)",
      }}
    >
      {status === "success" ? (
        <div className="flex items-center justify-between gap-3 px-2 py-1">
          <p className="text-sm font-semibold" style={{ color: "#00e676" }}>
            ✓ Listo. Confirmá en tu email.
          </p>
          <button
            onClick={dismiss}
            aria-label="Cerrar"
            className="w-8 h-8 flex items-center justify-center"
            style={{ color: "rgba(240,240,239,0.5)" }}
          >
            ✕
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <label htmlFor="sticky-email" className="sr-only">Email</label>
          <input
            id="sticky-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Recibí La Impresora gratis"
            required
            aria-label="Email para suscribirse"
            className="flex-1 text-sm px-3 py-2.5 rounded-[8px]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#f0f0ef",
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary shrink-0"
            style={{ padding: "10px 14px", fontSize: "12px", borderRadius: "8px" }}
          >
            {status === "loading" ? "..." : "Suscribirme"}
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Cerrar"
            className="shrink-0 w-8 h-8 flex items-center justify-center"
            style={{ color: "rgba(240,240,239,0.5)", background: "transparent" }}
          >
            ✕
          </button>
        </form>
      )}
    </div>
  );
}
