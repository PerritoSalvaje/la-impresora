"use client";
import Link from "next/link";
import { useState } from "react";

const COL_CONTENIDO = [
  { href: "/blog", label: "Blog" },
  { href: "/canal", label: "Canal" },
  { href: "/calculadoras", label: "Herramientas" },
  { href: "/libros", label: "Libros" },
  { href: "/glosario", label: "Glosario" },
  { href: "/faq", label: "FAQ" },
];

const COL_PRODUCTOS = [
  { href: "/tienda", label: "Tienda" },
  { href: "/premium", label: "Premium" },
  { href: "/radar", label: "Radar" },
  { href: "/academy", label: "Academy" },
  { href: "/agency", label: "Agency" },
];

const COL_EMPRESA = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/afiliados-programa", label: "Afiliados" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
];

function MiniNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm" style={{ color: "#00e676" }}>
        Suscripción confirmada. Revisá tu email.
      </p>
    );
  }

  return (
    <div>
      <p className="text-xs font-semibold mb-2" style={{ color: "rgba(240,240,239,0.4)" }}>
        Recibí el newsletter gratuito
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          className="flex-1 min-w-0 text-sm px-3 py-2 rounded-lg focus:outline-none transition-colors"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#f0f0ef",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary whitespace-nowrap"
          style={{ padding: "8px 14px", fontSize: "12px", borderRadius: "8px", opacity: status === "loading" ? 0.5 : 1 }}
        >
          {status === "loading" ? "..." : "Entrar"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs mt-1" style={{ color: "#f87171" }}>
          Algo salió mal. Intentá de nuevo.
        </p>
      )}
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p
        className="text-xs font-bold uppercase tracking-widest mb-4"
        style={{ color: "rgba(240,240,239,0.3)" }}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm transition-colors duration-150"
              style={{ color: "rgba(240,240,239,0.5)", textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#f0f0ef")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(240,240,239,0.5)")
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111213",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className="font-display font-bold text-base" style={{ color: "#f0f0ef" }}>
                🖨️ La Impresora
              </span>
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,239,0.4)" }}>
              Análisis independiente sobre cripto, finanzas e inversiones.
              Sin ruido, sin agenda ajena.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://twitter.com/laimpresora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(240,240,239,0.4)",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
                aria-label="Twitter / X"
              >
                𝕏
              </a>
              <a
                href="https://youtube.com/@laimpresora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(240,240,239,0.4)",
                  fontSize: "11px",
                  textDecoration: "none",
                }}
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>

            {/* Mini newsletter */}
            <div
              className="rounded-xl p-4 mt-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <MiniNewsletter />
            </div>
          </div>

          {/* Col 2: Contenido */}
          <FooterCol title="Contenido" links={COL_CONTENIDO} />

          {/* Col 3: Productos */}
          <FooterCol title="Productos" links={COL_PRODUCTOS} />

          {/* Col 4: Empresa */}
          <FooterCol title="Empresa" links={COL_EMPRESA} />
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <span className="text-xs" style={{ color: "rgba(240,240,239,0.22)" }}>
          © 2026 La Impresora · Operado por Wendy OS
        </span>
        <span className="text-xs" style={{ color: "rgba(240,240,239,0.2)" }}>
          No es asesoramiento financiero
        </span>
      </div>
    </footer>
  );
}
