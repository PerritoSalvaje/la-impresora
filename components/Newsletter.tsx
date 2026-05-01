"use client";
import { useState } from "react";

export default function Newsletter() {
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
    <section id="newsletter" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Newsletter Gratuito
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          La edición de esta semana<br />
          <span className="text-verde verde-text-glow">ya está esperándote</span>
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Cada jueves: 1 tema que te va a cambiar cómo pensás el dinero,
          3 noticias que importan y 1 oportunidad concreta. Sin spam.
        </p>

        {status === "success" ? (
          <div className="bg-verde/10 border border-verde/30 rounded-2xl p-8">
            <p className="text-verde text-xl font-bold">¡Estás dentro! 🖨️</p>
            <p className="text-white/50 mt-2">Revisá tu email para confirmar la suscripción.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 bg-gris-medio border border-white/10 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-verde transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-verde text-oscuro font-black px-8 py-4 rounded-full hover:bg-verde/90 transition-all disabled:opacity-50 whitespace-nowrap verde-glow"
            >
              {status === "loading" ? "..." : "Quiero entrar →"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">Algo salió mal. Intentá de nuevo.</p>
        )}

        <p className="text-white/20 text-xs mt-6">
          +2,400 personas ya están imprimiendo. Gratis. Siempre.
        </p>
      </div>
    </section>
  );
}
