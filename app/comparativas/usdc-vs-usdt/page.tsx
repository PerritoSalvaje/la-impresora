import Link from "next/link";

export const metadata = {
  title: "USDC vs USDT: cuál stablecoin es más segura en 2026",
  description:
    "Comparativa honesta entre USDC y USDT: respaldo, auditorías, regulación, transparencia y cuál stablecoin conviene usar en 2026 según tu perfil.",
};

const filas = [
  {
    factor: "Emisor",
    usdc: "Circle (USA) — regulado en múltiples jurisdicciones",
    usdt: "Tether Ltd. — radicado en BVI (Islas Vírgenes Británicas)",
  },
  {
    factor: "Respaldo",
    usdc: "100% en cash y bonos del Tesoro USA — auditado mensualmente",
    usdt: "Mix de cash, préstamos, bonos y otros activos — auditado ocasionalmente",
  },
  {
    factor: "Transparencia de reservas",
    usdc: "Informe mensual publicado por Grant Thornton (firma auditora Big Four)",
    usdt: "Attestations periódicas — no son auditorías completas. Composición exacta cuestionada",
  },
  {
    factor: "Regulación",
    usdc: "Regulado bajo leyes de transmisión de dinero en USA. Cumple OFAC.",
    usdt: "Acuerdos con reguladores: pagó $41M a CFTC en 2021. Fuera del perímetro regulatorio pleno",
  },
  {
    factor: "Volumen diario",
    usdc: "~$8–12B USD/día",
    usdt: "~$40–60B USD/día — el más usado globalmente",
  },
  {
    factor: "Disponibilidad en chains",
    usdc: "Ethereum, Solana, Base, Arbitrum, Avalanche, Polygon y más",
    usdt: "Ethereum, Tron (donde más se usa), Solana, BNB Chain y más",
  },
  {
    factor: "Velocidad de acción regulatoria",
    usdc: "Puede congelar direcciones si hay orden judicial — lo ha hecho",
    usdt: "También puede congelar — lo ha hecho en casos de hack",
  },
  {
    factor: "Uso principal",
    usdc: "DeFi en Ethereum/Base, pagos institucionales, remesas LATAM",
    usdt: "Trading global, pagos en mercados emergentes, Tron para P2P",
  },
  {
    factor: "Depegging histórico",
    usdc: "Marzo 2023: llegó a $0.87 durante crisis del SVB. Recuperó en días.",
    usdt: "Mayo 2022: llegó a $0.95 brevemente durante caída de Luna. Recuperó.",
  },
  {
    factor: "Interés generado en DeFi",
    usdc: "4–8% APY en protocolos como Aave, Compound, Morpho",
    usdt: "Similar, aunque algunos protocolos prefieren USDC por transparencia",
  },
];

export default function UsdcVsUsdtPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <span className="section-label">Comparativas</span>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Stablecoins
          </span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            USDC vs USDT 2026
          </h1>

          {/* Resumen */}
          <div
            className="card p-6 border-l-2 mb-8"
            style={{ borderLeftColor: "var(--verde)" }}
          >
            <p className="section-label mb-2">En una línea</p>
            <p className="font-display text-lg font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--verde)" }}>USDC</span> es la stablecoin más transparente y regulada.{" "}
              <span style={{ color: "var(--dorado)" }}>USDT</span> es la más usada y con más liquidez global.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
              Ambas valen $1 USD. Pero la forma en que lo garantizan, y qué pasa cuando hay una crisis,
              es muy diferente. Esta comparativa explica exactamente eso.
            </p>
          </div>
        </div>

        {/* Tabla comparativa */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Comparativa completa
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="text-left py-4 px-5 font-semibold"
                    style={{ color: "var(--text-muted)", width: "28%" }}
                  >
                    Factor
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--verde)", width: "36%" }}
                  >
                    USDC (Circle)
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--dorado)", width: "36%" }}
                  >
                    USDT (Tether)
                  </th>
                </tr>
              </thead>
              <tbody>
                {filas.map((fila, i) => (
                  <tr
                    key={fila.factor}
                    style={{
                      borderBottom: "1px solid var(--border)",
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                    }}
                  >
                    <td className="py-4 px-5 font-medium" style={{ color: "var(--text-primary)" }}>
                      {fila.factor}
                    </td>
                    <td className="py-4 px-5" style={{ color: "var(--text-secondary)" }}>
                      {fila.usdc}
                    </td>
                    <td className="py-4 px-5" style={{ color: "var(--text-secondary)" }}>
                      {fila.usdt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* El incidente del SVB */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            El incidente de USDC con Silicon Valley Bank (2023)
          </h2>

          <div className="card p-6 mb-4">
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              En marzo de 2023, Circle reveló que tenía $3,300 millones de las reservas de USDC
              depositados en Silicon Valley Bank (SVB), que acababa de colapsar. En cuestión de horas,
              USDC cayó a $0.87 — un depeg del 13%.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              El pánico fue real. Más de $7,000M salieron de USDC en 72 horas. La recuperación llegó
              cuando el gobierno de USA garantizó todos los depósitos de SVB —un evento extraordinario
              que no tiene garantía de repetirse.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              La lección: incluso una stablecoin transparente y regulada puede despegarse si sus reservas
              bancarias están en riesgo. Circle diversificó sus custodios tras el incidente. Hoy la mayoría
              de las reservas están en fondos del mercado monetario del Tesoro USA.
            </p>
          </div>
        </section>

        {/* El misterio de Tether */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            El misterio de las reservas de Tether
          </h2>

          <div className="card p-6 mb-4">
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Tether lleva años siendo cuestionado por la composición de sus reservas. Durante años
              afirmó que cada USDT estaba respaldado 1:1 con dólares en efectivo. En 2021, una
              investigación de la CFTC reveló que esto era falso: gran parte eran préstamos comerciales,
              bonos corporativos y otros activos de riesgo.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Tether pagó $41 millones en multas y desde entonces publica reportes trimestrales más
              detallados. Hoy afirma que la mayoría de las reservas son bonos del Tesoro USA —
              pero no permite una auditoría completa de una firma Big Four.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A pesar de esto, USDT sobrevivió: la Luna/UST, el colapso de FTX, la caída de SVB.
              Irónicamente, Tether generó más de $6,000M en ganancias en 2023 — tiene incentivos
              para mantener la paridad. Pero el riesgo sistémico existe y nadie lo puede cuantificar con certeza.
            </p>
          </div>
        </section>

        {/* Veredicto */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Veredicto: ¿cuál usar según tu caso?
          </h2>

          <div className="space-y-4">
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-verde shrink-0 mt-0.5">Para DeFi</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    USDC es la stablecoin preferida en el ecosistema DeFi de Ethereum
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Aave, Compound, Morpho, Curve — todos usan USDC como activo base. La transparencia
                    de reservas da más confianza a los protocolos y sus usuarios. Si vas a generar
                    yield en DeFi, empezá con USDC.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-dorado shrink-0 mt-0.5">Para trading</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    USDT tiene más liquidez en exchanges y mercados emergentes
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Si operás en Binance, Bybit u otros exchanges CEX, USDT tiene más pares y mayor
                    liquidez. En mercados P2P de LATAM (Argentina, Venezuela), USDT en Tron es el
                    estándar por las fees casi cero.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-neutral shrink-0 mt-0.5">Para ahorrar</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    USDC para ahorros de largo plazo — USDT para operativa cotidiana
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Si tu objetivo es dolarizar ahorros y preservar valor, la mayor transparencia
                    de USDC vale la pena. Para mover dinero frecuentemente o hacer P2P, USDT
                    en Tron sigue siendo el más práctico por costo y velocidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nota final */}
        <div
          className="rounded-2xl px-6 py-5 mb-16"
          style={{ background: "rgba(0,230,118,0.04)", border: "1px solid rgba(0,230,118,0.1)" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <strong style={{ color: "var(--verde)" }}>Consejo práctico:</strong>{" "}
            No dependas de una sola stablecoin para tus ahorros. Diversificar entre USDC y USDT
            (y eventualmente DAI u otras) reduce el riesgo de emisor. Ninguna stablecoin centralizada
            está exenta de riesgo regulatorio o de contraparte.
          </p>
        </div>

        {/* CTA */}
        <section className="card p-8 text-center mb-8">
          <p className="section-label mb-2">Aprendé a usar stablecoins</p>
          <p className="font-display text-xl font-bold mb-3" style={{ letterSpacing: "-0.01em" }}>
            Calculá cuánto podrías ganar con tu USDC en DeFi
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            Usá nuestra calculadora de yield para ver cuánto generarían tus stablecoins
            en protocolos DeFi versus un plazo fijo tradicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/calculadoras/yield-defi" className="btn-primary">
              Calcular yield en DeFi →
            </Link>
            <Link href="/comparativas/defi-vs-banco" className="btn-secondary">
              DeFi vs Banco tradicional
            </Link>
          </div>
        </section>

        {/* Nav */}
        <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <Link
            href="/comparativas"
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--verde)" }}
          >
            ← Ver todas las comparativas
          </Link>
        </div>

      </div>
    </div>
  );
}
