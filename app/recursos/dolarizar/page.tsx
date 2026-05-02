import Link from "next/link";
import GuiaPrintButton from "@/components/GuiaPrintButton";
import DolarizacionCalc from "@/components/DolarizacionCalc";

export const metadata = {
  title: "Mapa de Dolarización LATAM 2026 — PDF + calculadora",
  description:
    "Las 7 vías legales para parar la pérdida de tu peso. Calculadora interactiva: cuánto perdés cada mes en pesos. Para Argentina, México, Colombia, Chile, Perú, Uruguay, Venezuela y España.",
  alternates: { canonical: "https://laimpresora.io/recursos/dolarizar" },
  robots: { index: true, follow: true },
};

const VIAS = [
  {
    n: "01",
    titulo: "USDT/USDC en exchange con KYC",
    desc:
      "La forma más simple. Cuenta en Bybit, Binance, Bitso o Lemon, transferís pesos, comprás USDT. Mismo dólar digital, sin restricciones cambiarias. Riesgo: el exchange puede congelar tu cuenta. Solución: sacalo a wallet propia si pasa de 3 meses.",
    pros: ["Setup en 30 min", "Conviertes ARS a USD sin restricciones", "Spread 1-3% vs MEP"],
    contras: ["Exchange = riesgo de contraparte", "Requiere KYC"],
    ideal: "Empezar con $50-$5,000 USD",
  },
  {
    n: "02",
    titulo: "Self-custody con hot wallet",
    desc:
      "Después de comprar USDT, lo movés a Phantom (Solana), Rabby (EVM) o MetaMask. Vos sos dueño de la seed phrase. Si el exchange muere, tu plata no.",
    pros: ["Vos sos dueño legal", "Funciona offline (la wallet)", "Gratis"],
    contras: ["Si perdés la seed, perdés todo", "Aprende curva 1-2 horas"],
    ideal: "$500-$20,000 USD",
  },
  {
    n: "03",
    titulo: "Hardware wallet (Ledger/Trezor)",
    desc:
      "Para patrimonios mayores. La seed nunca toca internet. Inversión $80-200 una vez. Soporta USDT, USDC, BTC, ETH y prácticamente todo.",
    pros: ["Seed offline (más seguro)", "Una sola inversión", "Funciona 10+ años"],
    contras: ["Cuesta $80-200", "Setup técnico"],
    ideal: "$5,000-$200,000 USD",
  },
  {
    n: "04",
    titulo: "Yield seguro en stablecoins",
    desc:
      "Aave, Compound, Sky (ex-MakerDAO). Prestás tu USDC al protocolo, te paga 4-8% APY. Auditado, sobrevivió 5+ bear markets.",
    pros: ["4-8% APY auditado", "Sin exchange como contraparte", "Liquidez inmediata"],
    contras: ["Riesgo smart contract (~1%)", "Requiere setup wallet + Ethereum básico"],
    ideal: "$1,000-$100,000 USD",
  },
  {
    n: "05",
    titulo: "Wise + Payoneer para freelancers",
    desc:
      "Si facturás afuera, abrís cuenta multi-moneda en USD. Recibís pagos directos en USD, después decidís: dejás en USD, comprás cripto, transferís a banco AR.",
    pros: ["100% legal", "Sin fricción cambiaria", "Visa USD físico"],
    contras: ["Requiere ingresos en USD", "Wise pide verificación residencia"],
    ideal: "Freelancers / consultores",
  },
  {
    n: "06",
    titulo: "Bonos USD argentinos / mexicanos",
    desc:
      "AL30, GD30 (Argentina), CETES en USD (México). Pagás en pesos, recibís USD. Riesgo soberano (default). Para diversificar más allá de cripto.",
    pros: ["Cobra USD reales", "Rendimientos altos por riesgo país"],
    contras: ["Default es real (Argentina lo hizo 9 veces)", "Liquidez moderada"],
    ideal: "$2,000+ con perfil moderado-agresivo",
  },
  {
    n: "07",
    titulo: "Tokenización de propiedades USD",
    desc:
      "Realt, Lofty, Centrifuge: comprás un token que representa una fracción de una propiedad real en USD (típicamente US). Yield 6-10% renta + apreciación.",
    pros: ["Diversificás a real estate sin $200k", "Renta en USDC mensual"],
    contras: ["Riesgo plataforma + propiedad", "Liquidez 1-2 semanas"],
    ideal: "$500-$50,000 USD",
  },
];

const PLAN_90 = [
  {
    semana: "1",
    titulo: "Setup + primer movimiento",
    acciones: [
      "Abrir cuenta en exchange con KYC (Bybit, Binance, Bitso o Lemon — el que ya uses)",
      "Verificar identidad (24-48h)",
      "Transferir el 10% de tu ahorro y comprar USDC",
    ],
  },
  {
    semana: "2-4",
    titulo: "Construir hábito DCA",
    acciones: [
      "Configurar compra recurrente cada 15 días (puede ser $50-$500)",
      "Crear wallet propia (Phantom o Rabby)",
      "Mover el USDC del exchange a tu wallet",
    ],
  },
  {
    semana: "5-8",
    titulo: "Diversificar dentro del USD digital",
    acciones: [
      "Si superás $1,000: explorar yield en Aave (4-7% APY)",
      "Considerar 10-20% en BTC para ahorro >5 años (no para mirar)",
      "Documentar todo en una hoja de cálculo (importante para impuestos)",
    ],
  },
  {
    semana: "9-12",
    titulo: "Consolidación + plan personal",
    acciones: [
      "Revisar cuánto del ahorro está dolarizado vs. en moneda local",
      "Meta: 50% mínimo en USD digital",
      "Si llegás a $5,000+: comprar hardware wallet",
    ],
  },
];

export default function DolarizarPage() {
  return (
    <div className="pt-24 min-h-screen guia-print-root">
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-dorado inline-flex mb-5 print-keep-color">📊 Recurso gratuito</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Mapa de Dolarización<br />LATAM 2026
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
            7 vías legales para parar la pérdida de tu peso. Para Argentina, México, Colombia,
            Chile, Perú, Uruguay, Venezuela y España. Calculadora interactiva abajo.
          </p>

          <div className="flex flex-wrap gap-3 no-print">
            <GuiaPrintButton />
            <Link href="/#newsletter" className="btn-secondary">
              Recibir actualizaciones →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 print-section" style={{ background: "var(--surface)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label block mb-3 print-keep-color">Calculadora</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-2">
            ¿Cuánto perdés por mes en tu moneda?
          </h2>
          <p className="text-text-secondary text-base mb-8">
            Datos basados en inflación oficial 2024-2025. Conservador: la inflación real suele ser mayor.
          </p>
          <DolarizacionCalc />
        </div>
      </section>

      <section className="px-6 py-16 print-section">
        <div className="max-w-3xl mx-auto">
          <span className="section-label block mb-3 print-keep-color">Las 7 vías</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-4">
            Cómo dolarizar (legal, en LATAM)
          </h2>
          <p className="text-text-secondary text-base mb-10">
            No hay una sola manera correcta — depende de cuánto tenés, cuán líquido lo necesitás
            y qué riesgo aceptás. Estas son las 7 que funcionan en 2026.
          </p>

          <div className="space-y-5">
            {VIAS.map((v) => (
              <div key={v.n} className="card p-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display font-bold text-dorado text-3xl shrink-0 print-keep-color">{v.n}</span>
                  <h3 className="font-display font-bold text-text-primary text-xl leading-snug">
                    {v.titulo}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{v.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-verde text-xs uppercase tracking-wider mb-2 font-bold print-keep-color">Pros</p>
                    <ul className="space-y-1">
                      {v.pros.map((p) => (
                        <li key={p} className="flex gap-2 text-text-secondary">
                          <span className="text-verde shrink-0 print-keep-color">+</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold print-keep-color" style={{ color: "#ff8080" }}>Contras</p>
                    <ul className="space-y-1">
                      {v.contras.map((c) => (
                        <li key={c} className="flex gap-2 text-text-secondary">
                          <span className="shrink-0 print-keep-color" style={{ color: "#ff8080" }}>−</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-2 font-bold print-keep-color">Ideal para</p>
                    <p className="text-text-secondary">{v.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 print-section" style={{ background: "var(--surface)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label block mb-3 print-keep-color">Plan 90 días</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-4">
            De 0% a 50% dolarizado en 12 semanas
          </h2>
          <p className="text-text-secondary text-base mb-10">
            Sin saltar pasos. Con sumas chicas. Lo importante es construir el hábito antes que el monto.
          </p>

          <div className="space-y-4">
            {PLAN_90.map((s) => (
              <div key={s.semana} className="card p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="badge badge-dorado print-keep-color">Semana {s.semana}</span>
                  <h3 className="font-display font-semibold text-text-primary text-base">{s.titulo}</h3>
                </div>
                <ul className="space-y-2">
                  {s.acciones.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-text-secondary">
                      <span className="text-verde shrink-0 mt-0.5 print-keep-color">→</span>
                      <span className="leading-snug">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 no-print">
        <div className="max-w-2xl mx-auto card p-8 text-center">
          <span className="badge badge-verde inline-flex mb-5">Más recursos</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-4">
            Cada jueves, un análisis nuevo.
          </h2>
          <p className="text-text-secondary text-base mb-7 max-w-md mx-auto">
            Newsletter gratuito sobre crypto, AI y finanzas digitales. Para hispanohablantes
            en LATAM. Sin spam, cancelás cuando querés.
          </p>
          <Link href="/#newsletter" className="btn-primary inline-flex">
            Suscribirme gratis →
          </Link>
        </div>
      </section>
    </div>
  );
}
