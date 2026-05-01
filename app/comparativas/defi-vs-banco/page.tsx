import Link from "next/link";

export const metadata = {
  title: "DeFi vs Banco Tradicional: comparativa completa 2026",
  description:
    "DeFi vs banco tradicional en LATAM: comisiones, rendimientos, control de fondos, privacidad y riesgo. La comparativa más honesta del mercado.",
};

const filas = [
  {
    factor: "Tasa de rendimiento sobre ahorros",
    banco: "1–3% anual (en dólares, en los mejores casos)",
    defi: "4–12% anual en stablecoins (USDC, DAI)",
    ganador: "defi",
  },
  {
    factor: "Control de tus fondos",
    banco: "El banco decide cuándo y cómo podés moverlos",
    defi: "100% tuyo. Ninguna entidad puede congelarlos",
    ganador: "defi",
  },
  {
    factor: "Transparencia",
    banco: "Opaco. No sabés qué hacen con tu plata",
    defi: "Código abierto. Cualquiera puede auditar los contratos",
    ganador: "defi",
  },
  {
    factor: "Horario de operación",
    banco: "Lun–Vie, horario bancario",
    defi: "24/7/365, sin cierres ni feriados",
    ganador: "defi",
  },
  {
    factor: "Comisiones por transferencia",
    banco: "$5–50 USD por transferencia internacional (SWIFT)",
    defi: "$0.10–5 USD dependiendo de la red usada",
    ganador: "defi",
  },
  {
    factor: "Acceso sin requisitos",
    banco: "Requiere documento, historial crediticio, domicilio",
    defi: "Solo necesitás un teléfono y conexión a internet",
    ganador: "defi",
  },
  {
    factor: "Riesgo de contraparte",
    banco: "Riesgo del banco (rescates, corralito, quiebras)",
    defi: "Riesgo del smart contract (bugs, hacks, exploits)",
    ganador: "empate",
  },
  {
    factor: "Seguro sobre depósitos",
    banco: "Sí (SEDESA en ARG, IPAB en MX, según país)",
    defi: "No — sin seguro gubernamental",
    ganador: "banco",
  },
  {
    factor: "Privacidad",
    banco: "Datos compartidos con gobierno y terceros",
    defi: "Pseudónimo — solo tu address es pública",
    ganador: "defi",
  },
  {
    factor: "Acceso a crédito",
    banco: "Historial crediticio necesario. Proceso largo",
    defi: "Crédito colateralizado en minutos, sin checks",
    ganador: "empate",
  },
  {
    factor: "Complejidad para el usuario",
    banco: "Simple. Cualquiera sabe usar un banco",
    defi: "Curva de aprendizaje real. Requiere educación",
    ganador: "banco",
  },
  {
    factor: "Regulación y respaldo legal",
    banco: "Regulado, con marco legal claro",
    defi: "Gris legal en la mayoría de los países",
    ganador: "banco",
  },
];

const casosConcretosBanco = [
  {
    titulo: "Ahorro en cuenta bancaria — Argentina",
    detalle:
      "Tasa en caja de ahorro: 0–3% anual en pesos (perdés contra inflación del 100%+). En dólares: los bancos argentinos no pagan interés sobre depósitos en USD. Tu plata literalmente pierde valor cada día.",
  },
  {
    titulo: "Transferencia internacional SWIFT",
    detalle:
      "Enviar $1,000 USD desde México a España: $25–40 USD en comisiones, 2–5 días hábiles, tipo de cambio desfavorable. Un banco intermedio puede demorar el proceso o cobrar una comisión adicional.",
  },
  {
    titulo: "Acceso durante crisis",
    detalle:
      "Argentina 2001: el corralito congeló los depósitos bancarios durante meses. Chipre 2013: el gobierno tomó hasta el 40% de los depósitos superiores a €100,000. Esto no puede pasar con fondos self-custody en DeFi.",
  },
];

const casosConcretos = [
  {
    titulo: "USDC en Aave — protocolo DeFi líder",
    detalle:
      "Depositás $1,000 USDC en Aave (red Ethereum o Polygon). Recibís ~4–7% APY dependiendo de la demanda del mercado. El rendimiento se acumula por segundo, sin plazo fijo. Podés retirar en cualquier momento.",
  },
  {
    titulo: "Curve Finance — stablecoin pools",
    detalle:
      "Proveer liquidez en pools de USDC/USDT/DAI en Curve genera ~4–6% APY base, más incentivos adicionales en CRV. Ideal para capital que querés tener en dólares pero generando rendimiento.",
  },
  {
    titulo: "Staking de ETH via Lido",
    detalle:
      "Hacés staking de ETH mediante Lido (sin necesitar los 32 ETH mínimos) y recibís ~3.5% APY en ETH. Si el precio del ETH sube, tu rendimiento en dólares puede ser mucho mayor.",
  },
];

export default function DeFiVsBancoPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="section-label">Comparativas</span>
            <span style={{ color: "var(--text-muted)" }}>/</span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Finanzas
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            DeFi vs Banco Tradicional 2026
          </h1>

          {/* Resumen */}
          <div
            className="card p-6 border-l-2 mb-8"
            style={{ borderLeftColor: "var(--verde)" }}
          >
            <p className="section-label mb-2">El contraste más importante del momento</p>
            <p className="font-display text-lg font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              Tu banco te paga <span style={{ color: "#ef4444" }}>1–3%</span> y controla tu dinero.{" "}
              DeFi te paga <span style={{ color: "var(--verde)" }}>4–12%</span> y vos tenés el control.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
              La diferencia es real y documentable. Pero DeFi tiene riesgos que el banco no tiene.
              Esta comparativa es honesta con ambos lados.
            </p>
          </div>
        </div>

        {/* Tabla */}
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
                    style={{ color: "var(--text-muted)", width: "30%" }}
                  >
                    Factor
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--dorado)", width: "32%" }}
                  >
                    Banco Tradicional
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--verde)", width: "32%" }}
                  >
                    DeFi
                  </th>
                  <th className="py-4 px-3 text-center" style={{ width: "6%" }} />
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
                    <td
                      className="py-4 px-5"
                      style={{
                        color: fila.ganador === "banco" ? "var(--dorado)" : "var(--text-secondary)",
                        fontWeight: fila.ganador === "banco" ? 600 : 400,
                      }}
                    >
                      {fila.banco}
                    </td>
                    <td
                      className="py-4 px-5"
                      style={{
                        color: fila.ganador === "defi" ? "var(--verde)" : "var(--text-secondary)",
                        fontWeight: fila.ganador === "defi" ? 600 : 400,
                      }}
                    >
                      {fila.defi}
                    </td>
                    <td className="py-4 px-3 text-center">
                      {fila.ganador === "empate" ? (
                        <span className="badge badge-neutral text-xs">—</span>
                      ) : fila.ganador === "banco" ? (
                        <span className="badge badge-dorado text-xs">Banco</span>
                      ) : (
                        <span className="badge badge-verde text-xs">DeFi</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Casos concretos — Banco */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Números reales — lo que el banco te cobra (y no te dice)
          </h2>

          <div className="space-y-4">
            {casosConcretosBanco.map((caso) => (
              <div key={caso.titulo} className="card p-5">
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5" style={{ color: "#ef4444" }}>✗</span>
                  <div>
                    <p className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                      {caso.titulo}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {caso.detalle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casos concretos — DeFi */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Números reales — lo que DeFi ofrece hoy
          </h2>

          <div className="space-y-4">
            {casosConcretos.map((caso) => (
              <div key={caso.titulo} className="card p-5">
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5" style={{ color: "var(--verde)" }}>✓</span>
                  <div>
                    <p className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                      {caso.titulo}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {caso.detalle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            Los rendimientos en DeFi varían constantemente. Los valores indicados son rangos históricos,
            no garantías de rendimiento futuro. Siempre investigá los riesgos antes de depositar.
          </p>
        </section>

        {/* Cuándo usar cada uno */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            ¿Cuándo usar cada uno? Respuesta balanceada
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--dorado)" }} />
                <h3 className="font-display text-base font-bold" style={{ letterSpacing: "-0.01em" }}>
                  Seguí usando el banco para…
                </h3>
              </div>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--dorado)" }} className="shrink-0">→</span>
                  Cobrar tu sueldo o ingresos recurrentes
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--dorado)" }} className="shrink-0">→</span>
                  Pagar servicios, tarjetas e impuestos locales
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--dorado)" }} className="shrink-0">→</span>
                  Fondos de emergencia que necesitás acceder rápido
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--dorado)" }} className="shrink-0">→</span>
                  Tramitar créditos hipotecarios o prendarios
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--dorado)" }} className="shrink-0">→</span>
                  Cuando no estás dispuesto a aprender DeFi aún
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--verde)" }} />
                <h3 className="font-display text-base font-bold" style={{ letterSpacing: "-0.01em" }}>
                  Moví a DeFi para…
                </h3>
              </div>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--verde)" }} className="shrink-0">→</span>
                  Ahorros a mediano plazo en dólares (USDC) con rendimiento real
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--verde)" }} className="shrink-0">→</span>
                  Transferir dinero al exterior sin comisiones abusivas
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--verde)" }} className="shrink-0">→</span>
                  Capital que no necesitás por 6+ meses y querés que trabaje
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--verde)" }} className="shrink-0">→</span>
                  Proteger fondos de corralitos o restricciones gubernamentales
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--verde)" }} className="shrink-0">→</span>
                  Acceder a servicios financieros negados por historial o ubicación
                </li>
              </ul>
            </div>

          </div>

          <div
            className="rounded-xl px-5 py-4"
            style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.15)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--verde)" }}>Conclusión honesta:</strong> No se trata de elegir uno.
              Lo inteligente es usar el banco para lo que sigue siendo mejor (operativa cotidiana y crédito)
              y DeFi para preservar y hacer crecer el capital que el banco te destruye con inflación y comisiones.
              Empezá chico, aprendé los riesgos, y escalá gradualmente.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="card p-8 text-center">
          <p className="section-label mb-2">Empezá con DeFi</p>
          <p className="font-display text-xl font-bold mb-3" style={{ letterSpacing: "-0.01em" }}>
            Aave — el protocolo DeFi más grande del mundo
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            Aave es el protocolo líder en préstamos y depósitos DeFi. TVL de $20B+.
            Podés empezar con $100 USDC y retirar cuando quieras.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.aave.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ir a Aave →
            </a>
            <Link href="/recursos" className="btn-secondary">
              Ver más herramientas DeFi
            </Link>
          </div>
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
