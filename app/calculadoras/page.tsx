import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadoras — La Impresora",
  description:
    "Calculadoras interactivas para cripto e inversiones: DCA en Bitcoin, yield en DeFi y perfil de portafolio. Tomá mejores decisiones financieras.",
};

const CALCULADORAS = [
  {
    href: "/calculadoras/dca",
    badge: "DCA",
    badgeClass: "badge-dorado",
    titulo: "Simulador DCA",
    descripcion:
      "¿Cuánto tendrías hoy si hubieras invertido $X por mes en Bitcoin, Ethereum o el S&P 500? Usá rendimientos históricos reales.",
    emoji: "📈",
    cta: "Calcular mi DCA",
    stats: ["Bitcoin · Ethereum · S&P 500", "Hasta 10 años de historial"],
  },
  {
    href: "/calculadoras/yield-defi",
    badge: "DeFi",
    badgeClass: "badge-verde",
    titulo: "Yield DeFi",
    descripcion:
      "Calculá cuánto generarías poniendo tus stablecoins en protocolos DeFi. Compará con y sin reinversión, y contra el plazo fijo tradicional.",
    emoji: "💰",
    cta: "Calcular mi yield",
    stats: ["APY del 4% al 12%", "Tabla mes a mes incluida"],
  },
  {
    href: "/calculadoras/portafolio",
    badge: "Perfil",
    badgeClass: "badge-neutral",
    titulo: "Perfil de Portafolio",
    descripcion:
      "3 preguntas para descubrir qué distribución cripto se adapta a tu tolerancia al riesgo: conservador, moderado o agresivo.",
    emoji: "🎯",
    cta: "Descubrir mi perfil",
    stats: ["Quiz de 3 preguntas", "Distribución personalizada"],
  },
];

export default function CalculadorasHub() {
  return (
    <main className="min-h-screen" style={{ paddingTop: "104px" }}>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <span className="section-label">Herramientas</span>
        <h1
          className="font-display font-bold mt-4 mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.03em", color: "#f0f0ef" }}
        >
          Calculadoras para tomar mejores{" "}
          <span style={{ color: "var(--verde)" }}>decisiones financieras</span>
        </h1>
        <p className="text-base mx-auto" style={{ color: "rgba(240,240,239,0.5)", maxWidth: "560px", lineHeight: "1.7" }}>
          Sin registros, sin humo. Calculadoras interactivas basadas en datos reales
          para que entiendas el poder del tiempo y el interés compuesto.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CALCULADORAS.map((calc) => (
            <div key={calc.href} className="card p-7 flex flex-col gap-5">
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className={`badge ${calc.badgeClass}`}>{calc.badge}</span>
                <span style={{ fontSize: "1.75rem" }} aria-hidden="true">{calc.emoji}</span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="font-display font-bold text-lg" style={{ color: "#f0f0ef", letterSpacing: "-0.02em" }}>
                  {calc.titulo}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,240,239,0.5)" }}>
                  {calc.descripcion}
                </p>
              </div>

              {/* Stats chips */}
              <div className="flex flex-col gap-1.5">
                {calc.stats.map((s) => (
                  <span
                    key={s}
                    className="text-xs"
                    style={{
                      color: "rgba(240,240,239,0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "99px",
                        background: "var(--verde)",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link href={calc.href} className="btn-primary justify-center text-center" style={{ fontSize: "13px", padding: "10px 16px" }}>
                {calc.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-xs text-center mt-10"
          style={{ color: "rgba(240,240,239,0.2)" }}
        >
          Las calculadoras usan datos históricos y proyecciones aproximadas. No constituyen asesoramiento financiero.
        </p>
      </section>
    </main>
  );
}
