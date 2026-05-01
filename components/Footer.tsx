"use client";
import Link from "next/link";
import { useState } from "react";

function FooterNewsletter() {
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
    <div className="w-full max-w-sm">
      <p className="text-white/50 text-sm mb-3 font-semibold">
        🖨️ Unite a +2,400 lectores
      </p>
      {status === "success" ? (
        <p className="text-verde text-sm font-bold">¡Estás dentro! Revisá tu email. ✓</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm placeholder-white/25 focus:outline-none focus:border-verde/50 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-verde text-oscuro font-black text-sm px-5 py-2 rounded-full hover:bg-verde/90 transition-all disabled:opacity-50 whitespace-nowrap verde-glow shrink-0"
            >
              {status === "loading" ? "..." : "Entrar →"}
            </button>
          </form>
          {status === "error" && (
            <p className="text-red-400 text-xs mt-2">Algo salió mal. Intentá de nuevo.</p>
          )}
          <p className="text-white/20 text-xs mt-2">Gratis · Sin spam · Cancela cuando quieras</p>
        </>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      {/* CTA newsletter embebido */}
      <div className="max-w-6xl mx-auto mb-12 pb-12 border-b border-white/5">
        <div className="gradient-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-1">
              No te pierdas el próximo número.
            </h3>
            <p className="text-white/40 text-sm">
              Cada jueves, directo a tu inbox. Gratis para siempre.
            </p>
          </div>
          <FooterNewsletter />
        </div>
      </div>

      {/* Links y branding */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-verde font-black text-lg">🖨️ La Impresora</span>
          <p className="text-white/30 text-sm mt-1">
            Crypto · AI · Tokenización · Libertad Financiera
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/40 justify-center">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <Link href="/canal" className="hover:text-verde transition-colors">Canal</Link>
          <Link href="/libros" className="hover:text-verde transition-colors">Libros</Link>
          <Link href="/tienda" className="hover:text-verde transition-colors">Tienda</Link>
          <Link href="/premium" className="hover:text-dorado transition-colors text-dorado/50">Premium</Link>
          <Link href="/recursos" className="hover:text-verde transition-colors">Recursos</Link>
          <Link href="/afiliados-programa" className="hover:text-verde transition-colors">Afiliados</Link>
          <Link href="/sponsors" className="hover:text-verde transition-colors">Sponsors</Link>
          <Link href="/nosotros" className="hover:text-verde transition-colors">Nosotros</Link>
        </div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com/laimpresora"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-gris-medio border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-verde hover:border-verde/30 transition-all"
          >
            𝕏
          </a>
          <a
            href="https://youtube.com/@laimpresora"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-gris-medio border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-verde hover:border-verde/30 transition-all"
          >
            ▶
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs">
        <span>© 2026 La Impresora. Operado por Wendy OS.</span>
        <div className="flex gap-4">
          <a href="/privacidad" className="hover:text-verde transition-colors">Privacidad</a>
          <a href="/terminos" className="hover:text-verde transition-colors">Términos</a>
          <a href="/sponsors" className="hover:text-verde transition-colors">Sponsors</a>
        </div>
      </div>
    </footer>
  );
}
