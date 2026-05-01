import Link from "next/link";

export const metadata = {
  title: "Solana vs Ethereum 2026: cuál es mejor para invertir y desarrollar",
  description:
    "Comparativa honesta entre Solana y Ethereum en 2026: velocidad, costos, uptime, ecosistema DeFi y cuál conviene según tu perfil de inversión y desarrollo.",
};

const filas = [
  {
    factor: "Velocidad",
    sol: "~65,000 TPS teóricos (3,000–5,000 en la práctica)",
    eth: "~15–30 TPS en mainnet (+ L2s como Arbitrum/Base)",
  },
  {
    factor: "Costo por transacción",
    sol: "~$0.00025 USD por tx",
    eth: "$0.50–$5 USD en mainnet (L2s: $0.01–$0.10)",
  },
  {
    factor: "Uptime histórico",
    sol: "Ha tenido múltiples outages (2021, 2022, 2023)",
    eth: "~100% desde genesis — nunca ha caído",
  },
  {
    factor: "Mecanismo de consenso",
    sol: "Proof of History + Proof of Stake",
    eth: "Proof of Stake (desde The Merge, 2022)",
  },
  {
    factor: "Ecosistema DeFi",
    sol: "Jito, Raydium, Jupiter, Drift — en fuerte crecimiento",
    eth: "Uniswap, Aave, Compound, Curve — el más grande del mundo",
  },
  {
    factor: "NFTs",
    sol: "Fuerte: Magic Eden, Tensor — fees bajos = volumen alto",
    eth: "Origen histórico del NFT — OpenSea, Blur, alta liquidez",
  },
  {
    factor: "Smart contracts",
    sol: "Rust / C — curva de aprendizaje alta",
    eth: "Solidity — el más popular, más recursos, más devs",
  },
  {
    factor: "Descentralización",
    sol: "Más centralizado: validadores poderosos, Solana Labs tiene influencia",
    eth: "Más descentralizado: miles de validadores en todo el mundo",
  },
  {
    factor: "Adopción institucional",
    sol: "Creciendo: ETF de SOL en discusión, FTX lo lastimó en 2022",
    eth: "ETFs aprobados en USA, la segunda mayor capitalización",
  },
  {
    factor: "Recuperación ante fallas",
    sol: "Varios outages de horas; cada vez mejoran el protocolo",
    eth: "Ningún outage en mainnet desde su lanzamiento",
  },
  {
    factor: "Layer 2 / escalabilidad",
    sol: "Es su propio L1 rápido — no necesita L2 por ahora",
    eth: "Rollups (Arbitrum, Base, Optimism) multiplican la capacidad",
  },
  {
    factor: "Market cap (2026)",
    sol: "~$80B+ (top 5 en capitalización)",
    eth: "~$450B+ (segundo activo del mercado)",
  },
];

export default function SolanaVsEthereumPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <span className="section-label">Comparativas</span>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Activos
          </span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Solana vs Ethereum 2026
          </h1>

          {/* Resumen */}
          <div
            className="card p-6 border-l-2 mb-8"
            style={{ borderLeftColor: "var(--verde)" }}
          >
            <p className="section-label mb-2">En una línea</p>
            <p className="font-display text-lg font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--dorado)" }}>Ethereum</span> es la red más segura y descentralizada.{" "}
              <span style={{ color: "var(--verde)" }}>Solana</span> es la más rápida y barata para el usuario final.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
              No compiten directamente por el mismo nicho. Ethereum prioriza seguridad y descentralización.
              Solana prioriza velocidad y costos bajos. Cada elección implica trade-offs.
            </p>
          </div>
        </div>

        {/* Tabla comparativa */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Comparativa técnica y de ecosistema
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
                    Solana (SOL)
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--dorado)", width: "36%" }}
                  >
                    Ethereum (ETH)
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
                      {fila.sol}
                    </td>
                    <td className="py-4 px-5" style={{ color: "var(--text-secondary)" }}>
                      {fila.eth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* El tema del uptime */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            El problema del uptime de Solana
          </h2>

          <div className="card p-6 mb-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Solana ha tenido al menos 5 outages significativos entre 2021 y 2023. El más famoso duró más de 17 horas
              en septiembre de 2021. Otro en enero de 2022. Otro en mayo de 2022 durante el colapso de Luna/UST.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              El equipo de Solana Labs trabajó activamente en mejorar la resiliencia. Desde 2024, la red
              ha demostrado mayor estabilidad. Pero el historial existe y es relevante si pensás construir
              o confiar fondos a largo plazo en la red.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Ethereum, en contraste, nunca ha caído desde su lanzamiento en 2015. Once años sin downtime.
              Para aplicaciones financieras donde el uptime es crítico, eso pesa.
            </p>
          </div>
        </section>

        {/* Para qué sirve cada uno */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            ¿Cuándo usar cada uno?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-display text-2xl" style={{ color: "var(--verde)" }}>◎</span>
                <h3 className="font-display text-lg font-bold" style={{ color: "var(--verde)", letterSpacing: "-0.01em" }}>
                  Solana — Usalo cuando
                </h3>
              </div>
              <div className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>DeFi de alta frecuencia:</strong>{" "}
                  Swaps, trading con apalancamiento, perps. En Solana las fees son irrelevantes —
                  en Ethereum te comen la ganancia.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>NFTs y gaming:</strong>{" "}
                  Con fees de centavos, mintear NFTs y transaccionar activos de juego es viable.
                  En Ethereum cuesta $20–50 USD por mint.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Usuarios nuevos:</strong>{" "}
                  La experiencia es más fluida. Phantom Wallet es intuitiva. Las txs son instantáneas.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Desarrolladores que priorizan UX:</strong>{" "}
                  Si construís apps consumer donde la velocidad y el costo son UX crítica.
                </p>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-display text-2xl" style={{ color: "var(--dorado)" }}>⬡</span>
                <h3 className="font-display text-lg font-bold" style={{ color: "var(--dorado)", letterSpacing: "-0.01em" }}>
                  Ethereum — Usalo cuando
                </h3>
              </div>
              <div className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Seguridad es prioridad:</strong>{" "}
                  Custodia de fondos grandes, contratos que manejan millones. El historial
                  de uptime y la madurez del código importan.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Protocolos DeFi establecidos:</strong>{" "}
                  Aave, Compound, Uniswap — la liquidez más profunda y el código más auditado
                  está en Ethereum o sus L2.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Tokenización de activos reales:</strong>{" "}
                  La mayoría de los RWA tokens y stablecoins institucionales van sobre Ethereum.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Contratos complejos:</strong>{" "}
                  Solidity tiene más herramientas, auditorías, forks y recursos para construir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Veredicto */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Veredicto: ¿cuál comprar en 2026?
          </h2>

          <div className="space-y-4">
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-dorado shrink-0 mt-0.5">Para invertir</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Ethereum para reserva de valor y seguridad
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    ETH tiene mayor adopción institucional, ETFs aprobados y el ecosistema más maduro.
                    Si buscás exposición crypto con menos incertidumbre técnica, ETH es el segundo activo
                    más establecido después de Bitcoin.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-verde shrink-0 mt-0.5">Para DeFi emergente</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Solana para velocidad, costos bajos y DeFi activo
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Si vas a operar activamente en DeFi, Jupiter, Jito o Drift — Solana tiene
                    la mejor UX y los menores costos. El riesgo del historial de outages bajó
                    notablemente desde 2024. El potencial upside sigue siendo mayor por su posición.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-neutral shrink-0 mt-0.5">Para desarrollar</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Depende de tus usuarios y el tipo de app
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Apps consumer de alta frecuencia: Solana. Protocolos financieros serios con grandes
                    capitales en juego: Ethereum (o sus L2). Muchos proyectos despliegan en ambas cadenas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA exchanges */}
        <section className="card p-8 text-center mb-16">
          <p className="section-label mb-2">¿Listo para comprar SOL o ETH?</p>
          <p className="font-display text-xl font-bold mb-3" style={{ letterSpacing: "-0.01em" }}>
            Los exchanges que usamos en LATAM
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            Binance y Bybit tienen SOL y ETH disponibles para LATAM con pares en ARS, MXN, COP y más.
            Revisá nuestra comparativa de exchanges para elegir el que más te conviene.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/comparativas/binance-vs-bybit" className="btn-primary">
              Ver exchanges recomendados →
            </Link>
            <Link href="/recursos" className="btn-secondary">
              Ver todos los recursos
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
