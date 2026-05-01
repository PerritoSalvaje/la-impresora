import Link from "next/link";

export const metadata = {
  title: "Bitcoin vs Ethereum: diferencias, usos y cuál comprar en 2026",
  description:
    "Bitcoin vs Ethereum: diferencias reales en creación, suministro, velocidad y usos. Guía honesta para decidir cuál comprar según tu perfil en 2026.",
};

const filas = [
  {
    factor: "Creación",
    btc: "2009 — Satoshi Nakamoto",
    eth: "2015 — Vitalik Buterin",
  },
  {
    factor: "Suministro máximo",
    btc: "21 millones (fijo para siempre)",
    eth: "Sin límite fijo (deflacionario por burns)",
  },
  {
    factor: "Mecanismo de consenso",
    btc: "Proof of Work (minería)",
    eth: "Proof of Stake (desde 2022)",
  },
  {
    factor: "Velocidad de transacción",
    btc: "~10 min por bloque",
    eth: "~12 segundos por bloque",
  },
  {
    factor: "Comisiones promedio",
    btc: "$1–5 USD por tx",
    eth: "$2–30 USD por tx (varía con demanda)",
  },
  {
    factor: "Uso principal",
    btc: "Reserva de valor / oro digital",
    eth: "Plataforma para DeFi, NFTs, dApps",
  },
  {
    factor: "Smart contracts",
    btc: "No (limitados)",
    eth: "Sí — es su función principal",
  },
  {
    factor: "Staking disponible",
    btc: "No",
    eth: "Sí (~3–4% APY directo)",
  },
  {
    factor: "Consumo energético",
    btc: "Alto (minería intensiva)",
    eth: "Bajo (redujo 99.95% con Proof of Stake)",
  },
  {
    factor: "Market cap (2026)",
    btc: "$1.8T+ (dominancia ~55%)",
    eth: "$450B+ (dominancia ~15%)",
  },
  {
    factor: "Adopción institucional",
    btc: "ETFs aprobados, mayor liquidez",
    eth: "ETFs aprobados, creciendo rápido",
  },
];

const rendimientosHistoricos = [
  { periodo: "2020", btc: "+305%", eth: "+469%", ganador: "eth" },
  { periodo: "2021", btc: "+59%", eth: "+399%", ganador: "eth" },
  { periodo: "2022", btc: "-65%", eth: "-68%", ganador: "empate" },
  { periodo: "2023", btc: "+154%", eth: "+90%", ganador: "btc" },
  { periodo: "2024", btc: "+121%", eth: "+46%", ganador: "btc" },
  { periodo: "2020–2024 (acumulado)", btc: "+1,800%+", eth: "+2,200%+", ganador: "eth" },
];

export default function BitcoinVsEthereumPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="section-label">Comparativas</span>
            <span style={{ color: "var(--text-muted)" }}>/</span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Activos
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Bitcoin vs Ethereum 2026
          </h1>

          {/* Resumen */}
          <div
            className="card p-6 border-l-2 mb-8"
            style={{ borderLeftColor: "var(--dorado)" }}
          >
            <p className="section-label mb-2">En una línea</p>
            <p className="font-display text-lg font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--dorado)" }}>Bitcoin</span> es reserva de valor digital.{" "}
              <span style={{ color: "var(--verde)" }}>Ethereum</span> es la infraestructura de la economía descentralizada.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
              No son competidores directos — resuelven problemas distintos. La pregunta no es
              cuál es mejor, sino cuál encaja más con tus objetivos.
            </p>
          </div>
        </div>

        {/* Tabla comparativa */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Diferencias técnicas y de uso
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="text-left py-4 px-5 font-semibold"
                    style={{ color: "var(--text-muted)", width: "30%" }}
                  >
                    Factor
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--dorado)", width: "35%" }}
                  >
                    Bitcoin (BTC)
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--verde)", width: "35%" }}
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
                      {fila.btc}
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

        {/* Para qué sirve cada uno */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            ¿Para qué sirve cada uno?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-display text-2xl">₿</span>
                <h3 className="font-display text-lg font-bold" style={{ color: "var(--dorado)", letterSpacing: "-0.01em" }}>
                  Bitcoin
                </h3>
              </div>
              <div className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Reserva de valor:</strong>{" "}
                  Como el oro digital. Compras para preservar poder adquisitivo a largo plazo,
                  no para usarlo activamente.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Cobertura inflacionaria:</strong>{" "}
                  Suministro fijo de 21M hace imposible devaluarlo mediante emisión. Ideal para
                  quienes viven en economías con inflación alta.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Transferencias internacionales:</strong>{" "}
                  Enviás cualquier cantidad al mundo en minutos sin bancos, sin límites, sin explicaciones.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Activo institucional:</strong>{" "}
                  ETFs de Bitcoin ya mueven miles de millones diarios. Es el activo crypto más adoptado
                  por fondos, empresas y gobiernos.
                </p>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-display text-2xl" style={{ color: "var(--verde)" }}>⬡</span>
                <h3 className="font-display text-lg font-bold" style={{ color: "var(--verde)", letterSpacing: "-0.01em" }}>
                  Ethereum
                </h3>
              </div>
              <div className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>DeFi:</strong>{" "}
                  Para acceder a préstamos, yields y exchanges descentralizados necesitás ETH
                  para pagar las comisiones de red (gas).
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Staking:</strong>{" "}
                  Podés hacer staking de ETH y ganar ~3–4% anual. Si usás protocolos como Lido,
                  podés hacer staking con menos de 32 ETH.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Tokenización de activos:</strong>{" "}
                  La mayoría de los tokens de activos reales, NFTs y stablecoins corren sobre Ethereum
                  o sus Layer 2.
                </p>
                <p>
                  <strong style={{ color: "var(--text-primary)" }}>Ecosistema activo:</strong>{" "}
                  Miles de dApps, protocolos y proyectos se construyen sobre Ethereum. Es la red con
                  más developers del espacio crypto.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Rendimientos históricos */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Rendimientos históricos
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th className="text-left py-3 px-5 font-semibold" style={{ color: "var(--text-muted)" }}>
                    Año
                  </th>
                  <th className="text-left py-3 px-5 font-bold" style={{ color: "var(--dorado)" }}>
                    BTC
                  </th>
                  <th className="text-left py-3 px-5 font-bold" style={{ color: "var(--verde)" }}>
                    ETH
                  </th>
                  <th className="text-left py-3 px-5 font-semibold" style={{ color: "var(--text-muted)" }}>
                    Ganador
                  </th>
                </tr>
              </thead>
              <tbody>
                {rendimientosHistoricos.map((row, i) => (
                  <tr
                    key={row.periodo}
                    style={{
                      borderBottom: "1px solid var(--border)",
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                      fontWeight: row.periodo.includes("acumulado") ? 600 : 400,
                    }}
                  >
                    <td className="py-3 px-5" style={{ color: "var(--text-primary)" }}>
                      {row.periodo}
                    </td>
                    <td
                      className="py-3 px-5"
                      style={{
                        color: row.btc.startsWith("+") ? "var(--verde)" : row.btc.startsWith("-") ? "#ef4444" : "var(--text-secondary)",
                      }}
                    >
                      {row.btc}
                    </td>
                    <td
                      className="py-3 px-5"
                      style={{
                        color: row.eth.startsWith("+") ? "var(--verde)" : row.eth.startsWith("-") ? "#ef4444" : "var(--text-secondary)",
                      }}
                    >
                      {row.eth}
                    </td>
                    <td className="py-3 px-5">
                      {row.ganador === "btc" ? (
                        <span className="badge badge-dorado">BTC</span>
                      ) : row.ganador === "eth" ? (
                        <span className="badge badge-verde">ETH</span>
                      ) : (
                        <span className="badge badge-neutral">Empate</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            Rendimientos pasados no garantizan rendimientos futuros. Datos aproximados según precio de cierre anual.
          </p>
        </section>

        {/* ¿Cuál comprar? */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            ¿Cuál comprar? Respuesta honesta según tu perfil
          </h2>

          <div className="space-y-4">

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-neutral shrink-0 mt-0.5">Perfil 1</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Primera inversión en crypto, querés preservar capital
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--dorado)" }}>Bitcoin (BTC)</strong> — Mayor adopción institucional,
                    mayor liquidez, menor volatilidad relativa dentro del mercado crypto. El activo más "seguro"
                    del espacio si existe tal cosa.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-neutral shrink-0 mt-0.5">Perfil 2</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Querés participar en DeFi o ganar rendimientos
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--verde)" }}>Ethereum (ETH)</strong> — Lo necesitás para interactuar
                    con la mayoría de los protocolos DeFi, hacer staking nativo o usar aplicaciones descentralizadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-neutral shrink-0 mt-0.5">Perfil 3</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Inversor a largo plazo con horizonte 5+ años
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>Ambos, en alguna proporción.</strong>{" "}
                    Una cartera clásica para LATAM: 60-70% BTC, 20-30% ETH, el resto en altcoins selectas.
                    Diversificás dentro del espacio crypto sin sobreexponerte.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-neutral shrink-0 mt-0.5">Perfil 4</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Vivís en un país con inflación alta (Argentina, Venezuela, etc.)
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--dorado)" }}>Bitcoin primero</strong> como cobertura de largo plazo,
                    pero considerá también stablecoins (USDC) para liquidez inmediata. El ETH suma
                    si querés empezar a usar DeFi para generar rendimiento en dólares.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA recursos */}
        <section className="card p-8 text-center">
          <p className="section-label mb-2">¿Listo para comprar?</p>
          <p className="font-display text-xl font-bold mb-3" style={{ letterSpacing: "-0.01em" }}>
            Encontrá los mejores exchanges y herramientas
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            En nuestra página de recursos tenés los exchanges curados, wallets recomendadas
            y herramientas de análisis que usamos nosotros mismos.
          </p>
          <Link href="/recursos" className="btn-primary">
            Ver recursos recomendados →
          </Link>
        </section>

        {/* Nav */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
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
