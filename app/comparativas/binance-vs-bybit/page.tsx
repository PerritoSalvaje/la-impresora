import Link from "next/link";

export const metadata = {
  title: "Binance vs Bybit 2026: cuál es mejor para LATAM (comparativa honesta)",
  description:
    "Comparativa completa Binance vs Bybit para LATAM: comisiones, disponibilidad, copy trading, staking y interfaz. Respondemos sin rodeos cuál te conviene más.",
};

const filas = [
  {
    factor: "Comisiones spot",
    binance: "0.10%",
    bybit: "0.10%",
    ganador: "empate",
  },
  {
    factor: "Comisiones futuros (maker/taker)",
    binance: "0.02% / 0.05%",
    bybit: "0.02% / 0.055%",
    ganador: "binance",
  },
  {
    factor: "Disponibilidad LATAM",
    binance: "Sí (restricciones en algunos países)",
    bybit: "Sí, sin restricciones",
    ganador: "bybit",
  },
  {
    factor: "KYC requerido",
    binance: "Sí",
    bybit: "Sí",
    ganador: "empate",
  },
  {
    factor: "Copy trading",
    binance: "Sí",
    bybit: "Sí (mejor interfaz)",
    ganador: "bybit",
  },
  {
    factor: "Staking",
    binance: "Sí",
    bybit: "Sí",
    ganador: "empate",
  },
  {
    factor: "Interfaz",
    binance: "Compleja",
    bybit: "Más limpia",
    ganador: "bybit",
  },
  {
    factor: "Soporte en español",
    binance: "Sí",
    bybit: "Sí",
    ganador: "empate",
  },
  {
    factor: "App móvil",
    binance: "Excelente",
    bybit: "Excelente",
    ganador: "empate",
  },
  {
    factor: "Monedas disponibles",
    binance: "350+",
    bybit: "300+",
    ganador: "binance",
  },
];

const paraQuienBinance = [
  "Ya tenés experiencia en trading y querés el mayor número de pares disponibles",
  "Necesitás acceso a productos muy específicos: futuros de altcoins pequeñas, opciones, P2P avanzado",
  "Operás volúmenes altos y el 0.005% de diferencia en futuros te importa",
  "Vivís en un país donde Bybit tiene alguna restricción puntual",
];

const paraQuienBybit = [
  "Estás empezando en crypto y querés una plataforma intuitiva",
  "Te interesa el copy trading y querés seguir a traders con buenos resultados",
  "Preferís una interfaz limpia sin ruido visual",
  "Vivís en LATAM y querés evitar sorpresas con restricciones regionales",
  "Querés hacer staking o earn de forma sencilla",
];

export default function BinanceVsBybitPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="section-label">Comparativas</span>
            <span style={{ color: "var(--text-muted)" }}>/</span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Exchanges
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Binance vs Bybit 2026
          </h1>

          {/* Resumen ejecutivo */}
          <div
            className="card p-6 border-l-2 mb-8"
            style={{ borderLeftColor: "var(--verde)" }}
          >
            <p className="section-label mb-2">Veredicto rápido</p>
            <p className="font-display text-lg font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--verde)" }}>Bybit</span> para principiantes y copy trading.{" "}
              <span style={{ color: "var(--dorado)" }}>Binance</span> para mayor volumen y más pares.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
              Ambos son exchanges serios y regulados. La diferencia real está en la experiencia
              de uso y en la amplitud de productos. Para el 90% de los usuarios de LATAM, Bybit es la mejor entrada.
            </p>
          </div>

          {/* Disclaimer afiliado */}
          <div
            className="flex items-start gap-3 rounded-xl px-5 py-4 mb-10"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}
          >
            <span style={{ color: "var(--text-muted)" }} className="text-lg mt-0.5">ℹ</span>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>Transparencia:</span>{" "}
              Los links a los exchanges son de afiliado. Si te registrás por acá, recibimos una comisión
              sin costo extra para vos. Esto no afecta nuestra opinión — usamos ambas plataformas.
            </p>
          </div>
        </div>

        {/* Tabla comparativa */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Tabla comparativa completa
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="text-left py-4 px-5 font-semibold"
                    style={{ color: "var(--text-muted)", width: "36%" }}
                  >
                    Factor
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--dorado)", width: "28%" }}
                  >
                    Binance
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--verde)", width: "28%" }}
                  >
                    Bybit
                  </th>
                  <th className="py-4 px-3 text-center" style={{ width: "8%" }} />
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
                        color: fila.ganador === "binance" ? "var(--dorado)" : "var(--text-secondary)",
                        fontWeight: fila.ganador === "binance" ? 600 : 400,
                      }}
                    >
                      {fila.binance}
                    </td>
                    <td
                      className="py-4 px-5"
                      style={{
                        color: fila.ganador === "bybit" ? "var(--verde)" : "var(--text-secondary)",
                        fontWeight: fila.ganador === "bybit" ? 600 : 400,
                      }}
                    >
                      {fila.bybit}
                    </td>
                    <td className="py-4 px-3 text-center">
                      {fila.ganador === "empate" ? (
                        <span className="badge badge-neutral text-xs">Empate</span>
                      ) : fila.ganador === "binance" ? (
                        <span className="badge badge-dorado text-xs">▲ BNB</span>
                      ) : (
                        <span className="badge badge-verde text-xs">▲ BYB</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Para quién */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--dorado)" }}
              />
              <h2 className="font-display text-lg font-bold" style={{ letterSpacing: "-0.01em" }}>
                Elegí Binance si…
              </h2>
            </div>
            <ul className="space-y-3">
              {paraQuienBinance.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--dorado)" }} className="mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--verde)" }}
              />
              <h2 className="font-display text-lg font-bold" style={{ letterSpacing: "-0.01em" }}>
                Elegí Bybit si…
              </h2>
            </div>
            <ul className="space-y-3">
              {paraQuienBybit.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--verde)" }} className="mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </section>

        {/* Veredicto */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Veredicto final
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>
              La realidad es que ninguno de los dos es objetivamente "mejor". Son dos exchanges
              de primer nivel con liquidez profunda, buena seguridad y soporte en español.
              La elección depende de tu perfil.
            </p>
            <p>
              Para la mayoría de los lectores de LATAM que están empezando o que operan
              a escala retail, <strong style={{ color: "var(--verde)" }}>Bybit gana</strong> por su interfaz más limpia,
              mejor experiencia de copy trading y ausencia total de restricciones regionales.
            </p>
            <p>
              Si ya sos un trader con experiencia y necesitás el catálogo más amplio de pares y productos,{" "}
              <strong style={{ color: "var(--dorado)" }}>Binance tiene sentido</strong>. También si ya estás en el ecosistema
              BNB y aprovechás sus descuentos.
            </p>
            <p style={{ color: "var(--text-muted)" }} className="text-sm">
              Nuestra recomendación para traders activos: tener cuenta en ambos y usar el que
              tenga mejor liquidez para el par específico que operás.
            </p>
          </div>
        </section>

        {/* CTAs */}
        <section>
          <h2
            className="font-display text-xl font-bold mb-6"
            style={{ letterSpacing: "-0.01em" }}
          >
            Abrí tu cuenta
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="card p-6 text-center">
              <p className="section-label mb-2">Recomendado para LATAM</p>
              <p className="font-display text-xl font-bold mb-1" style={{ color: "var(--verde)" }}>
                Bybit
              </p>
              <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
                Interfaz limpia · Sin restricciones · Copy trading top
              </p>
              <a
                href="https://www.bybit.com/en/sign-up/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-primary w-full text-center block"
              >
                Crear cuenta en Bybit →
              </a>
            </div>

            <div className="card p-6 text-center">
              <p className="section-label mb-2">Mayor catálogo</p>
              <p className="font-display text-xl font-bold mb-1" style={{ color: "var(--dorado)" }}>
                Binance
              </p>
              <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
                350+ pares · Mayor volumen · Ecosistema BNB
              </p>
              <a
                href="https://accounts.binance.com/register"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-secondary w-full text-center block"
              >
                Crear cuenta en Binance →
              </a>
            </div>

          </div>

          <p className="text-xs text-center mt-4" style={{ color: "var(--text-muted)" }}>
            Links de afiliado — si te registrás, recibimos una comisión sin costo para vos.
          </p>
        </section>

        {/* Nav al hub */}
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
