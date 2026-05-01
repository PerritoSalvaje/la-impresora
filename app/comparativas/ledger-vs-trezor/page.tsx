import Link from "next/link";

export const metadata = {
  title: "Ledger vs Trezor 2026: cuál hardware wallet comprar",
  description:
    "Comparativa completa Ledger vs Trezor 2026: precio, seguridad, monedas soportadas, Bluetooth, open source y reputación. Decidí con datos reales.",
};

const filas = [
  {
    factor: "Precio modelo base",
    ledger: "Ledger Nano S Plus: ~$79 USD",
    trezor: "Trezor Model One: ~$69 USD",
    ganador: "trezor",
  },
  {
    factor: "Precio modelo premium",
    ledger: "Ledger Nano X: ~$149 USD",
    trezor: "Trezor Model T: ~$219 USD / Safe 5: ~$169 USD",
    ganador: "ledger",
  },
  {
    factor: "Monedas soportadas",
    ledger: "5,500+ coins y tokens",
    trezor: "9,000+ coins y tokens",
    ganador: "trezor",
  },
  {
    factor: "Bluetooth / Wireless",
    ledger: "Sí (Nano X y Stax)",
    trezor: "No — solo USB",
    ganador: "ledger",
  },
  {
    factor: "Pantalla",
    ledger: "Pequeña en modelos básicos / Táctil en Stax",
    trezor: "Táctil en Model T / pequeña en Model One",
    ganador: "empate",
  },
  {
    factor: "Open source (firmware)",
    ledger: "Parcialmente — chip seguro propietario",
    trezor: "100% open source",
    ganador: "trezor",
  },
  {
    factor: "Chip de seguridad dedicado",
    ledger: "Sí — Secure Element certificado",
    trezor: "No en modelos básicos (Model One) / Sí en Safe 3 y Safe 5",
    ganador: "ledger",
  },
  {
    factor: "App de escritorio",
    ledger: "Ledger Live — completa e intuitiva",
    trezor: "Trezor Suite — sólida pero menos pulida",
    ganador: "ledger",
  },
  {
    factor: "Compatible con DeFi/Web3",
    ledger: "Sí — integra con MetaMask, WalletConnect",
    trezor: "Sí — integra con MetaMask, WalletConnect",
    ganador: "empate",
  },
  {
    factor: "Reputación y antigüedad",
    ledger: "2014 — líder del mercado, 6M+ unidades",
    trezor: "2013 — el primero en existir, muy respetado",
    ganador: "empate",
  },
  {
    factor: "Incidente de seguridad notable",
    ledger: "2020: filtración de base de datos de clientes (emails y direcciones)",
    trezor: "2023: vulnerabilidad de PIN en Model One antiguo (físico requerido)",
    ganador: "empate",
  },
  {
    factor: "Disponibilidad en LATAM",
    ledger: "Shipping internacional desde shop.ledger.com",
    trezor: "Shipping internacional desde trezor.io",
    ganador: "empate",
  },
];

const paraQuienLedger = [
  "Querés la mayor compatibilidad con apps DeFi y Web3",
  "Necesitás Bluetooth para usar la wallet con el móvil sin cables",
  "Valorás una app (Ledger Live) muy completa y con staking integrado",
  "Tenés un portfolio diverso en muchas redes (EVM, Solana, Cosmos, etc.)",
  "Preferís un diseño compacto y la marca más reconocida globalmente",
];

const paraQuienTrezor = [
  "El open source es una prioridad para vos — querés poder auditar el código",
  "Guardás principalmente Bitcoin y quienes confían en Trezor desde sus inicios",
  "Preferís no depender de un chip propietario cuyo firmware no es 100% auditable",
  "Valorizás la filosofía de transparencia total sobre la conveniencia",
  "Querés la wallet con la historia más larga (primer hardware wallet del mercado)",
];

export default function LedgerVsTrezorPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="section-label">Comparativas</span>
            <span style={{ color: "var(--text-muted)" }}>/</span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Hardware Wallets
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ledger vs Trezor 2026
          </h1>

          {/* Resumen ejecutivo */}
          <div
            className="card p-6 border-l-2 mb-8"
            style={{ borderLeftColor: "var(--verde)" }}
          >
            <p className="section-label mb-2">Veredicto rápido</p>
            <p className="font-display text-lg font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--dorado)" }}>Ledger</span> para versatilidad, DeFi y facilidad de uso.{" "}
              <span style={{ color: "var(--verde)" }}>Trezor</span> para puristas del open source y máxima transparencia.
            </p>
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)" }}>
              Ambas son excelentes hardware wallets y mucho mejores que no tener ninguna.
              Si tenés más de $1,000 en crypto, necesitás una. La pregunta es cuál se ajusta
              mejor a tu perfil.
            </p>
          </div>

          {/* Por qué importa */}
          <div
            className="rounded-xl px-5 py-4 mb-10"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-secondary)" }}>¿Por qué importa?</strong>{" "}
              Las exchanges pueden ser hackeadas (Mt.Gox, FTX), congeladas por reguladores o quebrar.
              Una hardware wallet guarda tus claves privadas offline — sin conexión a internet,
              inaccesibles para cualquier atacante remoto. Es la diferencia entre custodiar tu cripto
              o depender de que un tercero lo haga por vos.
            </p>
          </div>
        </div>

        {/* Tabla */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Comparativa técnica completa
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
                    style={{ color: "var(--dorado)", width: "32%" }}
                  >
                    Ledger
                  </th>
                  <th
                    className="text-left py-4 px-5 font-bold"
                    style={{ color: "var(--verde)", width: "32%" }}
                  >
                    Trezor
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
                        color: fila.ganador === "ledger" ? "var(--dorado)" : "var(--text-secondary)",
                        fontWeight: fila.ganador === "ledger" ? 600 : 400,
                      }}
                    >
                      {fila.ledger}
                    </td>
                    <td
                      className="py-4 px-5"
                      style={{
                        color: fila.ganador === "trezor" ? "var(--verde)" : "var(--text-secondary)",
                        fontWeight: fila.ganador === "trezor" ? 600 : 400,
                      }}
                    >
                      {fila.trezor}
                    </td>
                    <td className="py-4 px-3 text-center">
                      {fila.ganador === "empate" ? (
                        <span className="badge badge-neutral text-xs">—</span>
                      ) : fila.ganador === "ledger" ? (
                        <span className="badge badge-dorado text-xs">Ledger</span>
                      ) : (
                        <span className="badge badge-verde text-xs">Trezor</span>
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
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--dorado)" }} />
              <h2 className="font-display text-lg font-bold" style={{ letterSpacing: "-0.01em" }}>
                Elegí Ledger si…
              </h2>
            </div>
            <ul className="space-y-3">
              {paraQuienLedger.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--dorado)" }} className="mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--verde)" }} />
              <h2 className="font-display text-lg font-bold" style={{ letterSpacing: "-0.01em" }}>
                Elegí Trezor si…
              </h2>
            </div>
            <ul className="space-y-3">
              {paraQuienTrezor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--verde)" }} className="mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </section>

        {/* Nota sobre la filtración de datos Ledger */}
        <section className="mb-16">
          <h2
            className="font-display text-2xl font-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Sobre los incidentes de seguridad
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>
              <strong style={{ color: "var(--text-primary)" }}>Ledger (2020):</strong> Hubo una filtración de
              datos de clientes — no del hardware en sí ni de las claves privadas — sino de la
              base de datos de emails y domicilios de compradores. Esto llevó a ataques de phishing
              dirigidos. Las claves privadas nunca estuvieron comprometidas si el dispositivo fue
              usado correctamente.
            </p>
            <p>
              <strong style={{ color: "var(--text-primary)" }}>Trezor (2023):</strong> Se descubrió una
              vulnerabilidad en el Model One antiguo que permitía extraer la seed phrase con acceso
              físico al dispositivo y equipamiento especializado. Requería tener el dispositivo en
              mano por varios minutos. No es un ataque remoto posible.
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              En ambos casos, un usuario que siguió las prácticas correctas (seed phrase guardada
              offline en papel, fuera del alcance físico) no sufrió pérdida de fondos.
              Los ataques reales más comunes son phishing y social engineering, no exploits del hardware.
            </p>
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
          <div
            className="rounded-xl px-5 py-5"
            style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.15)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Para la mayoría de los lectores de LATAM que quieren su primera hardware wallet,
              recomendamos el <strong style={{ color: "var(--dorado)" }}>Ledger Nano S Plus (~$79)</strong> como
              punto de entrada: excelente soporte, app completa y el mayor ecosistema de integraciones.
              Si el precio no es obstáculo y la versatilidad te importa, el{" "}
              <strong style={{ color: "var(--dorado)" }}>Ledger Nano X</strong> agrega Bluetooth y mayor capacidad.
            </p>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
              Si sos un Bitcoin maxi o un desarrollador que valora el open source total,{" "}
              <strong style={{ color: "var(--verde)" }}>Trezor</strong> es la elección natural.
              El <strong style={{ color: "var(--verde)" }}>Model T o Safe 5</strong> con pantalla táctil
              dan la mejor experiencia del ecosistema Trezor.
            </p>
          </div>
        </section>

        {/* CTAs */}
        <section>
          <h2
            className="font-display text-xl font-bold mb-6"
            style={{ letterSpacing: "-0.01em" }}
          >
            Comprá tu hardware wallet
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="card p-6 text-center">
              <p className="section-label mb-2">Versatilidad y ecosistema</p>
              <p className="font-display text-xl font-bold mb-1" style={{ color: "var(--dorado)" }}>
                Ledger
              </p>
              <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                Nano S Plus (~$79) · Nano X (~$149) · Stax (~$399)
              </p>
              <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>
                5,500+ activos · Bluetooth en Nano X · Ledger Live integrado
              </p>
              <a
                href="https://shop.ledger.com"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-primary w-full text-center block"
              >
                Ver en shop.ledger.com →
              </a>
            </div>

            <div className="card p-6 text-center">
              <p className="section-label mb-2">Open source total</p>
              <p className="font-display text-xl font-bold mb-1" style={{ color: "var(--verde)" }}>
                Trezor
              </p>
              <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                Model One (~$69) · Safe 3 (~$79) · Safe 5 (~$169)
              </p>
              <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>
                9,000+ activos · 100% open source · El primer hardware wallet
              </p>
              <a
                href="https://trezor.io/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-secondary w-full text-center block"
              >
                Ver en trezor.io →
              </a>
            </div>

          </div>

          <p className="text-xs text-center mt-4" style={{ color: "var(--text-muted)" }}>
            Links de afiliado — si comprás por acá, recibimos una comisión sin costo extra para vos.
            Solo recomendamos lo que vale la pena.
          </p>
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
