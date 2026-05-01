import Link from "next/link";

export const metadata = {
  title: "Comparativas Crypto 2026 — La Impresora",
  description:
    "Comparativas honestas de exchanges, activos y herramientas crypto para LATAM. Binance vs Bybit, Bitcoin vs Ethereum, DeFi vs banco, Ledger vs Trezor.",
};

const comparativas = [
  {
    slug: "binance-vs-bybit",
    titulo: "Binance vs Bybit",
    subtitulo: "Exchanges",
    resumen:
      "Cuál elegir para operar en LATAM. Comisiones, disponibilidad, copy trading y diferencias reales entre los dos exchanges más usados.",
    veredicto: "Bybit para principiantes · Binance para volumen",
    tag: "Exchanges",
    tagVariant: "badge-dorado",
    icono: "⇄",
  },
  {
    slug: "bitcoin-vs-ethereum",
    titulo: "Bitcoin vs Ethereum",
    subtitulo: "Activos",
    resumen:
      "Diferencias reales en suministro, velocidad, usos y rendimientos históricos. Respondemos cuál comprar según tu perfil en 2026.",
    veredicto: "BTC para reserva de valor · ETH para DeFi",
    tag: "Activos",
    tagVariant: "badge-verde",
    icono: "₿",
  },
  {
    slug: "solana-vs-ethereum",
    titulo: "Solana vs Ethereum",
    subtitulo: "Activos",
    resumen:
      "65K TPS vs 15-30 TPS. $0.00025 vs $0.50–5 por tx. Uptime, ecosistema DeFi, NFTs y cuál elegir para invertir o desarrollar en 2026.",
    veredicto: "ETH para seguridad · SOL para velocidad y DeFi emergente",
    tag: "Activos",
    tagVariant: "badge-verde",
    icono: "◎",
  },
  {
    slug: "usdc-vs-usdt",
    titulo: "USDC vs USDT",
    subtitulo: "Stablecoins",
    resumen:
      "Respaldo, auditorías, regulación y transparencia. El incidente de SVB. El misterio de las reservas de Tether. Cuál stablecoin usar en 2026.",
    veredicto: "USDC para DeFi y ahorros · USDT para trading y P2P",
    tag: "Stablecoins",
    tagVariant: "badge-neutral",
    icono: "◈",
  },
  {
    slug: "bitcoin-vs-oro",
    titulo: "Bitcoin vs Oro",
    subtitulo: "Activos Refugio",
    resumen:
      "Portabilidad, escasez programada, volatilidad, custodia y rendimientos históricos. Por qué muchos inversores tienen ambos en su portafolio.",
    veredicto: "Oro para estabilidad · BTC para upside y portabilidad",
    tag: "Refugio",
    tagVariant: "badge-dorado",
    icono: "◆",
  },
  {
    slug: "defi-vs-banco",
    titulo: "DeFi vs Banco Tradicional",
    subtitulo: "Finanzas",
    resumen:
      "El contraste más dramático: 1–3% del banco vs 4–12% en DeFi. Control de fondos, comisiones, riesgo y cuándo usar cada uno.",
    veredicto: "DeFi gana en rendimiento · Banco gana en simplicidad",
    tag: "DeFi",
    tagVariant: "badge-verde",
    icono: "⬡",
  },
  {
    slug: "ledger-vs-trezor",
    titulo: "Ledger vs Trezor",
    subtitulo: "Hardware Wallets",
    resumen:
      "Precio, seguridad, monedas soportadas, Bluetooth y open source. La guía definitiva para elegir tu primera hardware wallet.",
    veredicto: "Ledger para versatilidad · Trezor para open source",
    tag: "Seguridad",
    tagVariant: "badge-neutral",
    icono: "🔒",
  },
];

export default function ComparativasPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-4 block">Comparativas</span>
          <h1
            className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Compará antes de decidir
          </h1>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Las preguntas que hace todo el mundo antes de invertir, con respuestas
            honestas y datos reales. Sin sponsor. Sin venderle a nadie.
          </p>
        </div>

        {/* Grid de comparativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {comparativas.map((c) => (
            <Link
              key={c.slug}
              href={`/comparativas/${c.slug}`}
              className="card p-7 block group no-underline"
              style={{ borderRadius: "14px" }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xl font-mono leading-none"
                    style={{ color: "var(--verde)" }}
                  >
                    {c.icono}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {c.subtitulo}
                    </p>
                  </div>
                </div>
                <span className={`badge ${c.tagVariant} shrink-0`}>{c.tag}</span>
              </div>

              {/* Título */}
              <h2
                className="font-display text-2xl font-bold mb-3 group-hover:text-verde transition-colors"
                style={{ letterSpacing: "-0.02em" }}
              >
                {c.titulo}
              </h2>

              {/* Resumen */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {c.resumen}
              </p>

              {/* Veredicto rápido */}
              <div
                className="rounded-lg px-4 py-2.5 text-xs font-medium mb-5"
                style={{
                  background: "rgba(0,230,118,0.06)",
                  border: "1px solid rgba(0,230,118,0.12)",
                  color: "var(--verde)",
                }}
              >
                {c.veredicto}
              </div>

              {/* CTA inline */}
              <div
                className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all"
                style={{ color: "var(--verde)" }}
              >
                Ver comparativa completa
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Por qué existen estas páginas */}
        <div
          className="rounded-2xl px-8 py-8 mb-16"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="section-label mb-3">Sobre estas comparativas</p>
          <p className="font-display text-xl font-bold mb-3" style={{ letterSpacing: "-0.01em" }}>
            Investigación honesta, sin presión de ventas
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Algunas páginas tienen links de afiliado — cuando hacés click y comprás o te registrás,
            recibimos una comisión sin costo extra para vos. Eso financia el newsletter gratuito.
            Pero el análisis es nuestro: no recomendamos algo que no usaríamos o que no consideramos
            genuinamente útil. Si un producto tiene problemas, los decimos.
          </p>
        </div>

        {/* CTA newsletter */}
        <div className="card p-10 text-center">
          <p className="section-label mb-3">Cada semana</p>
          <p className="font-display text-2xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
            Más análisis como estos en el newsletter
          </p>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
            Crypto, DeFi, AI y tokenización — explicados para LATAM. Un email por semana.
            Gratis. Sin spam.
          </p>
          <a href="/#newsletter" className="btn-primary">
            Suscribite gratis →
          </a>
        </div>

      </div>
    </div>
  );
}
