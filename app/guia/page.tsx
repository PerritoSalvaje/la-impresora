import Link from "next/link";
import GuiaPrintButton from "@/components/GuiaPrintButton";

export const metadata = {
  title: "Guía del Inversor en la Era Digital — PDF gratuito",
  description:
    "La guía completa para entender cripto, AI, DeFi y tokenización desde cero. 24 páginas. Para hispanohablantes en LATAM. Imprimí o guardá como PDF.",
  alternates: { canonical: "https://laimpresora.io/guia" },
  robots: { index: true, follow: true },
};

const SECCIONES = [
  {
    n: "01",
    titulo: "Por qué tu peso pierde valor todos los meses",
    bullets: [
      "Inflación real vs. inflación oficial — cómo medirla en serio",
      "El dólar paralelo no es un cambio: es un termómetro",
      "Por qué \"ahorrar en pesos\" matemáticamente es perder",
      "El experimento de los $1,000 USD desde 2015 en cada moneda LATAM",
    ],
    contenido: `La inflación es un impuesto invisible. En Argentina perdés 6-8% mensual del poder adquisitivo de tu peso. En México y Colombia, 4-7% anual. En Chile y Perú, similar. La diferencia es que los gobiernos lo llaman "estabilidad" y los bancos lo llaman "rendimiento del plazo fijo".

La realidad: si guardás $1,000 USD en pesos argentinos en 2020, hoy te queda el equivalente a $35 USD. En México, $890. En Colombia, $750. En Bitcoin, dependiendo del momento, entre $2,400 y $4,800. La diferencia no es ideología — es matemática.`,
  },
  {
    n: "02",
    titulo: "Las 7 vías legales de dolarizar en LATAM",
    bullets: [
      "USDT/USDC: la stablecoin como cuenta-dolar digital",
      "Cuenta en exchange con KYC (Bybit, Binance, Bitso, Lemon)",
      "Cripto self-custody: Phantom, Rabby, hardware wallet",
      "Yield seguro en stablecoins (Aave, Lido) — riesgos reales",
      "Pagos USD vía Wise/Payoneer para freelancers",
      "Bonos USD argentinos / mexicanos (riesgo soberano)",
      "Propiedades en USD vía tokenización (Realt, Lofty)",
    ],
    contenido: `No existe una sola "manera correcta" de dolarizar. Existe la que se adapta a tu situación: cuánto tenés, cuán líquido lo necesitás, qué riesgo aceptás, en qué país operás.

Para principiantes con menos de $1,000: USDT en un exchange con KYC. Para $1k-$10k: combinación de stablecoin + yield seguro en plataformas auditadas. Para más de $10k: distribución entre stablecoin custodia propia + bonos + tokenización.`,
  },
  {
    n: "03",
    titulo: "Bitcoin vs. Ethereum vs. Stablecoin — qué hace cada uno",
    bullets: [
      "Bitcoin: reserva de valor digital, no sistema de pagos",
      "Ethereum: red de aplicaciones, no \"el oro digital\"",
      "Stablecoins: dólar digital con riesgo de contraparte",
      "Cuándo usar cada una y por qué",
    ],
    contenido: `Confusión típica: "comprar cripto" como si todo fuera lo mismo. No lo es.

Bitcoin es oro digital — escasez programada (21 millones), sin gobierno detrás, sin upgrades arbitrarios. Su tesis: ser el activo de reserva del sistema digital. Volátil en USD, pero estable en "poder adquisitivo a largo plazo".

Ethereum es una computadora global. Donde Bitcoin guarda valor, Ethereum ejecuta lógica. DeFi, NFTs, tokenización — todo corre ahí. Su valor depende del uso de la red, no de la escasez.

Stablecoins (USDT, USDC, DAI) son dólares emitidos por una empresa. Estables al USD, pero dependés de que la empresa tenga las reservas que dice tener. USDC es la más auditada. USDT es la más usada en LATAM.`,
  },
  {
    n: "04",
    titulo: "Custodia: el error que mata más patrimonio que el mercado",
    bullets: [
      "Exchange ≠ tu plata. FTX, Mt. Gox, Voyager: 3 ejemplos",
      "Self-custody: hot wallet vs. hardware wallet",
      "Seed phrase: las 12-24 palabras que valen todo",
      "Multi-sig para patrimonios serios",
      "Plan de herencia digital (lo que nadie quiere pensar)",
    ],
    contenido: `Si tenés más de 3 meses de gastos en un exchange, estás corriendo el mayor riesgo evitable de tu portfolio.

La regla: "Not your keys, not your coins". Cuando la moneda está en Binance, Bybit, Coinbase o el exchange que sea, el exchange es el dueño legal hasta que la retirás. Si quiebra, congela retiros, o lo hackean — perdiste.

Hot wallet (Phantom, Rabby, MetaMask): bueno para uso diario, montos chicos.
Hardware wallet (Ledger, Trezor): bueno para ahorro de mediano plazo. $80-200 una vez.
Multi-sig (Safe, Casa): para patrimonios >$100k. Requiere 2 de 3 firmas.`,
  },
  {
    n: "05",
    titulo: "DeFi en 2026 — qué funciona y qué no",
    bullets: [
      "Lending: Aave + Compound — los únicos que sobrevivieron 5 años",
      "Liquid staking: Lido (ETH), Jito (SOL) — pasivo razonable",
      "Yield farming: 95% es trampa. El 5% que no, cómo identificarlo",
      "Stablecoins yield: 4-8% APY auditado",
      "Rug pulls: las 5 señales que aparecen ANTES",
    ],
    contenido: `DeFi tuvo su exuberancia 2020-2022. La depuración eliminó el 90% de los protocolos. Lo que queda son los que sobrevivieron exploits, hacks y bear markets.

Estables y verificados (auditorías Trail of Bits, OpenZeppelin):
- Aave: lending, $20B+ TVL, 6 años funcionando
- Compound: lending, $3B TVL, 7 años
- Lido: liquid staking ETH, $30B TVL
- MakerDAO/Sky: emisión DAI/USDS, 8 años

Yield realista 2026: 4-8% APY en stablecoins, 3-5% staking ETH, 6-10% staking SOL.`,
  },
  {
    n: "06",
    titulo: "AI para ganar plata desde LATAM",
    bullets: [
      "El cambio de paradigma: vender outputs, no horas",
      "5 servicios automatizables HOY con Claude/GPT/Gemini",
      "Construir un microservicio facturando $500-2k/mes",
      "Agencias one-person: Productized Services + AI",
      "Las herramientas que importan (no las virales)",
    ],
    contenido: `2025-2026 está borrando el trabajo intelectual repetitivo. Lo que antes pagaba a 5 personas, hoy lo hace 1 persona con AI bien usada. Para hispanoparlantes en LATAM, eso significa una ventana de 18-36 meses para construir negocios apalancados antes de que el mercado se sature.

Servicios concretos que funcionan HOY:
1. SEO/contenido para empresas EN/ES (workflow: brief → AI draft → edición humana → publish)
2. Resúmenes de reuniones automáticos para empresas
3. Outbound sales hyper-personalizado (research + first message AI-generated)
4. Code review / migración de código legacy
5. Análisis de documentos legales/contables`,
  },
  {
    n: "07",
    titulo: "Tokenización: el cambio estructural que viene",
    bullets: [
      "Qué es realmente: representación digital de un activo real",
      "Casos LATAM: campos paraguayos, propiedades chilenas",
      "Plataformas auditadas: Realt, Lofty, Centrifuge",
      "Riesgos legales (jurisdicción + regulación cambiante)",
      "Por qué BlackRock metió $10B en esto",
    ],
    contenido: `Tokenización = poner un activo físico (propiedad, campo, factura, bono) en blockchain como un token.

Cambia 3 cosas:
- Liquidez: una propiedad de $200k se vuelve 200,000 tokens de $1. Comprás 100 con $100.
- Acceso: invertís en farmland paraguayo desde Madrid sin abogado.
- Trazabilidad: el dueño cambia en 30 segundos, no en 30 días.

BlackRock lanzó BUIDL ($1B+ AUM) tokenizando T-Bills US. JPMorgan opera $1T/año en tokens privados. La adopción institucional es real — la retail recién empieza.`,
  },
];

const RECURSOS = [
  { titulo: "Calculadora DCA Bitcoin", desc: "Simulá inversiones recurrentes desde 2015", href: "/calculadoras/dca" },
  { titulo: "Calculadora de inflación", desc: "Cuánto perdiste vs. el USD/BTC", href: "/calculadoras/inflacion" },
  { titulo: "Glosario crypto + AI", desc: "200+ términos explicados en 1 párrafo", href: "/glosario" },
  { titulo: "Comparativa Binance vs Bybit", desc: "Para LATAM, con KYC y métodos locales", href: "/comparativas/binance-vs-bybit" },
  { titulo: "Mejores wallets 2026", desc: "Hot, hardware y multi-sig comparadas", href: "/blog/mejores-wallets-crypto-2026" },
  { titulo: "Cómo declarar crypto en Argentina", desc: "Guía AFIP 2026 paso a paso", href: "/blog/como-declarar-crypto-argentina" },
];

export default function GuiaPage() {
  return (
    <div className="pt-24 min-h-screen guia-print-root">
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-verde inline-flex mb-5 print-keep-color">📘 Guía del Inversor</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            La Guía del Inversor<br />en la Era Digital
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
            Crypto, AI, DeFi y tokenización explicados desde cero. Para hispanohablantes
            en LATAM que quieren entender de qué va el cambio sin perder plata en el camino.
          </p>

          <div className="flex flex-wrap gap-3 no-print">
            <GuiaPrintButton />
            <Link href="/#newsletter" className="btn-secondary">
              Recibir actualizaciones semanales →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 print-section" style={{ background: "var(--surface)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label block mb-3 print-keep-color">Contenidos</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-8">
            7 secciones · 1 hora de lectura
          </h2>
          <ol className="space-y-3">
            {SECCIONES.map((s) => (
              <li key={s.n} className="flex items-start gap-4 card p-5">
                <span className="font-display font-bold text-dorado text-2xl shrink-0 print-keep-color">{s.n}</span>
                <div>
                  <p className="font-display font-semibold text-text-primary text-base mb-1">{s.titulo}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {s.bullets.length} puntos clave
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {SECCIONES.map((s) => (
        <section key={s.n} className="px-6 py-16 print-section">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display font-bold text-dorado text-5xl print-keep-color">{s.n}</span>
              <h2 className="font-display font-bold text-display-md text-text-primary leading-tight">
                {s.titulo}
              </h2>
            </div>

            <div className="text-text-secondary text-base leading-relaxed mb-8 whitespace-pre-line">
              {s.contenido}
            </div>

            <div className="card p-6">
              <p className="text-xs uppercase tracking-wider text-text-muted mb-4 print-keep-color">Qué vas a aprender</p>
              <ul className="space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-verde shrink-0 mt-0.5 print-keep-color">✦</span>
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-16 print-section" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <span className="section-label block mb-3 print-keep-color">Recursos para profundizar</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-8">
            Calculadoras, comparativas y artículos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RECURSOS.map((r) => (
              <Link key={r.href} href={r.href} className="card p-5 hover:bg-white/5 transition-colors">
                <p className="font-display font-semibold text-text-primary text-base mb-1">
                  {r.titulo} →
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 no-print">
        <div className="max-w-2xl mx-auto card p-8 text-center">
          <span className="badge badge-verde inline-flex mb-5">Próxima edición</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-4">
            Cada jueves, una nueva sección.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-7 max-w-md mx-auto">
            La guía es la base. El newsletter es el complemento: actualizaciones,
            casos reales, oportunidades concretas. Gratis.
          </p>
          <Link href="/#newsletter" className="btn-primary inline-flex">
            Suscribirme gratis →
          </Link>
        </div>
      </section>
    </div>
  );
}
