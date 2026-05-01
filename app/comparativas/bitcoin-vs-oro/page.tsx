import Link from "next/link";

export const metadata = {
  title: "Bitcoin vs Oro: cuál es el mejor activo refugio en 2026",
  description:
    "Comparativa completa entre Bitcoin y Oro: portabilidad, escasez, volatilidad, custodia y rendimientos históricos. ¿Cuál es mejor reserva de valor en 2026?",
};

const filas = [
  {
    factor: "Historia",
    btc: "Creado en 2009 — 16 años de track record",
    oro: "Activo de reserva de valor por más de 5,000 años",
  },
  {
    factor: "Escasez",
    btc: "21 millones de BTC — límite programado e inmutable",
    oro: "Oferta creciente pero limitada — ~3,300 toneladas/año se minan",
  },
  {
    factor: "Portabilidad",
    btc: "Podés mover $1,000M en minutos a cualquier país sin fricción",
    oro: "Pesado, costoso de transportar, requiere custodia física o terceros",
  },
  {
    factor: "Liquidez",
    btc: "24/7, mercado global — aunque menos profundo que el oro",
    oro: "Mercado enorme ($13T) y maduro — bancos centrales lo usan",
  },
  {
    factor: "Volatilidad",
    btc: "Alta: puede caer o subir 50–80% en un año",
    oro: "Baja: oscilaciones de 10–20% anuales son habituales",
  },
  {
    factor: "Custodia",
    btc: "Self-custody posible con hardware wallet — sin intermediarios",
    oro: "Requiere bóveda, seguro o custodio — costoso y con riesgo de contraparte",
  },
  {
    factor: "Correlación con acciones",
    btc: "En crisis, a veces cae junto al mercado (aún joven como activo)",
    oro: "Correlación negativa histórica — sube cuando el mercado cae",
  },
  {
    factor: "Regulación",
    btc: "Regulado pero en evolución — ETFs aprobados en USA, Europe",
    oro: "Completamente regulado y aceptado mundialmente como reserva",
  },
  {
    factor: "Divisibilidad",
    btc: "Divisible hasta 8 decimales (satoshis) — podés comprar $5 de BTC",
    oro: "Requiere compra mínima de moneda o fracción — menos accesible",
  },
  {
    factor: "Rendimiento histórico 10 años",
    btc: "+50,000%+ (2014–2024)",
    oro: "+80% (2014–2024) — estable pero modesto",
  },
  {
    factor: "Drawdown máximo histórico",
    btc: "-84% (2018), -77% (2022)",
    oro: "-45% (1980), -29% (2012–2015)",
  },
  {
    factor: "Uso como colateral",
    btc: "En DeFi y exchanges — sin fricción",
    oro: "Bancos centrales lo usan como reserva — pero proceso más lento",
  },
];

const rendimientos = [
  { periodo: "2015", btc: "+35%", oro: "-10%", ganador: "btc" },
  { periodo: "2016", btc: "+120%", oro: "+9%", ganador: "btc" },
  { periodo: "2017", btc: "+1,318%", oro: "+12%", ganador: "btc" },
  { periodo: "2018", btc: "-72%", oro: "-2%", ganador: "oro" },
  { periodo: "2019", btc: "+90%", oro: "+18%", ganador: "btc" },
  { periodo: "2020", btc: "+305%", oro: "+25%", ganador: "btc" },
  { periodo: "2021", btc: "+59%", oro: "-4%", ganador: "btc" },
  { periodo: "2022", btc: "-65%", oro: "-1%", ganador: "oro" },
  { periodo: "2023", btc: "+154%", oro: "+13%", ganador: "btc" },
  { periodo: "2024", btc: "+121%", oro: "+27%", ganador: "btc" },
];

export default function BitcoinVsOroPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <span className="section-label">Comparativas</span>
          <span style={{ color: "var(--text-muted)" }}>/</span>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Activos Refugio
          </span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Bitcoin vs Oro 2026
          </h1>

          {/* Resumen */}
          <div
            className="card p-6 border-l-2 mb-8"
            style={{ borderLeftColor: "var(--dorado)" }}
          >
            <p className="section-label mb-2">En una línea</p>
            <p className="font-display text-lg font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--dorado)" }}>El oro</span> tiene 5,000 años de historia como reserva de valor.{" "}
              <span style={{ color: "var(--verde)" }}>Bitcoin</span> es oro digital con mayor portabilidad,
              escasez verificable y 50x más rendimiento en la última década.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
              La discusión no es cuál es mejor activo — es qué rol cumple cada uno en tu portafolio.
              Muchos inversores sofisticados tienen ambos.
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
                    Bitcoin (BTC)
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--dorado)", width: "36%" }}
                  >
                    Oro (XAU)
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
                      {fila.oro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Por qué llaman a Bitcoin "oro digital" */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Por qué algunos llaman a Bitcoin &quot;oro digital&quot;
          </h2>

          <div className="card p-6 mb-4">
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              La comparación no es accidental. Bitcoin fue diseñado explícitamente para ser un activo
              de reserva de valor con propiedades similares al oro: escasez verificable, resistencia
              a la censura, portabilidad y fungibilidad.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Donde Bitcoin supera al oro: sus 21M de monedas son verificables por cualquiera en cualquier
              momento. El oro requiere fe en los reportes de reservas de bancos y gobiernos —
              reportes que históricamente han sido cuestionados.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Donde el oro supera a Bitcoin: tiene 5,000 años de track record como reserva de valor.
              Ha sobrevivido guerras, revoluciones y colapsos de imperios. Bitcoin tiene 16 años.
              La historia importa cuando hablamos de reservas de valor.
            </p>
          </div>
        </section>

        {/* Rendimientos históricos */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Rendimientos año a año (2015–2024)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th className="text-left py-3 px-5 font-semibold" style={{ color: "var(--text-muted)" }}>
                    Año
                  </th>
                  <th className="text-left py-3 px-5 font-bold" style={{ color: "var(--verde)" }}>
                    Bitcoin
                  </th>
                  <th className="text-left py-3 px-5 font-bold" style={{ color: "var(--dorado)" }}>
                    Oro
                  </th>
                  <th className="text-left py-3 px-5 font-semibold" style={{ color: "var(--text-muted)" }}>
                    Ganador
                  </th>
                </tr>
              </thead>
              <tbody>
                {rendimientos.map((row, i) => (
                  <tr
                    key={row.periodo}
                    style={{
                      borderBottom: "1px solid var(--border)",
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
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
                        color: row.oro.startsWith("+") ? "var(--verde)" : row.oro.startsWith("-") ? "#ef4444" : "var(--text-secondary)",
                      }}
                    >
                      {row.oro}
                    </td>
                    <td className="py-3 px-5">
                      {row.ganador === "btc" ? (
                        <span className="badge badge-verde">BTC</span>
                      ) : row.ganador === "oro" ? (
                        <span className="badge badge-dorado">Oro</span>
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

        {/* El caso de tener ambos */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            El caso de tener ambos
          </h2>

          <div className="card p-6 mb-6">
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Muchos gestores de patrimonio con perfil moderno incluyen ambos en el portafolio.
              La lógica: el oro reduce la volatilidad y aporta estabilidad histórica comprobada.
              Bitcoin aporta el upside asimétrico y la portabilidad digital.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Una asignación posible para alguien que quiere exposición a activos refugio sin depender
              del sistema financiero tradicional: 5–10% oro (ETF o físico), 2–5% Bitcoin.
              Esto ya representa un portafolio más diversificado que el 95% de los inversores de LATAM.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              El punto no es elegir uno — es entender para qué sirve cada uno y usarlos en consecuencia.
            </p>
          </div>
        </section>

        {/* Veredicto */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Veredicto según tu perfil
          </h2>

          <div className="space-y-4">
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-dorado shrink-0 mt-0.5">Conservador</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Oro — para quien prioriza estabilidad y track record
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Si dormís mal con caídas del 50%, el oro es tu activo refugio. ETFs de oro
                    (GLD, IAU) son la forma más accesible. Menor rendimiento esperado, pero menor
                    volatilidad y 5,000 años de historia respaldando la decisión.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-verde shrink-0 mt-0.5">Moderado/Agresivo</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Bitcoin — para quien acepta volatilidad a cambio de upside
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Con horizonte de 4+ años, Bitcoin históricamente ha superado al oro en todos
                    los períodos salvo los de baja del mercado crypto. La clave es no necesitar
                    el dinero en el corto plazo y poder aguantar drawdowns del 50–80%.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="badge badge-neutral shrink-0 mt-0.5">Para LATAM</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Bitcoin primero — por portabilidad y acceso
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Comprar oro físico en Argentina o Venezuela tiene fricciones enormes.
                    Bitcoin es accesible desde $10 USD, en cualquier exchange, sin bancos.
                    Para protegerse de la inflación local con activo refugio, BTC es
                    la opción más práctica para la mayoría en la región.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="card p-8 text-center mb-8">
          <p className="section-label mb-2">Empezá con Bitcoin hoy</p>
          <p className="font-display text-xl font-bold mb-3" style={{ letterSpacing: "-0.01em" }}>
            Simulá cuánto tendrías si hubieras comprado antes
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            Usá nuestro simulador DCA para ver cómo habría crecido una inversión periódica
            en Bitcoin versus mantener pesos o dólares sin invertir.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/calculadoras/dca" className="btn-primary">
              Simular DCA en Bitcoin →
            </Link>
            <Link href="/calculadoras/inflacion" className="btn-secondary">
              Calculadora de inflación
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
