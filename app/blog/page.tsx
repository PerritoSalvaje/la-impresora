import Link from "next/link";

const posts = [
  {
    slug: "gap-ai-oportunidad",
    numero: "001",
    titulo: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando",
    desc: "Analizamos el estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. La oportunidad más grande de la década.",
    tag: "AI",
    fecha: "29 Abril 2026",
    tagClass: "badge badge-verde",
    categoria: "AI",
  },
  {
    slug: "banco-tu-peor-enemigo",
    numero: "002",
    titulo: "Por qué tu banco es tu peor enemigo financiero (y qué hacer al respecto)",
    desc: "Te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Esto es un sistema diseñado en tu contra.",
    tag: "Libertad Financiera",
    fecha: "6 Mayo 2026",
    tagClass: "badge badge-dorado",
    categoria: "Libertad Financiera",
  },
  {
    slug: "tokenizacion-campo-paraguay",
    numero: "003",
    titulo: "Tokenización: cómo un campo en Paraguay puede ser tuyo con $50",
    desc: "La tokenización de activos reales permite que cualquier persona invierta en tierra, inmuebles o commodities con tickets mínimos.",
    tag: "Tokenización",
    fecha: "13 Mayo 2026",
    tagClass: "badge badge-neutral",
    categoria: "Tokenización",
  },
  {
    slug: "tokenizacion-activos-como-invertir",
    numero: "004",
    titulo: "Qué es la tokenización de activos y cómo invertir desde $50 en 2026",
    desc: "Convertir un departamento, un campo o un bono en tokens digitales ya no es ciencia ficción. Te explicamos cómo funciona y dónde empezar.",
    tag: "Tokenización",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-neutral",
    categoria: "Tokenización",
  },
  {
    slug: "herramientas-ai-para-ganar-dinero",
    numero: "005",
    titulo: "Las mejores herramientas de AI para ganar dinero en 2026 (probadas)",
    desc: "8 herramientas de inteligencia artificial con precio, caso de uso real y cuánto podés cobrar con cada una.",
    tag: "AI",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-verde",
    categoria: "AI",
  },
  {
    slug: "como-funciona-el-dinero-crypto",
    numero: "006",
    titulo: "Cómo funciona el dinero crypto: guía completa para principiantes en LATAM",
    desc: "Qué es Bitcoin, cómo funcionan las wallets, cómo comprar crypto en Argentina, México y el resto de LATAM. Sin jerga.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "como-usar-chatgpt-ganar-dinero",
    numero: "007",
    titulo: "Cómo usar ChatGPT para ganar dinero en 2026: 8 formas reales",
    desc: "8 formas concretas de usar ChatGPT para generar ingresos en LATAM. Con instrucciones reales, prompts probados y precios de mercado.",
    tag: "AI",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-verde",
    categoria: "AI",
  },
  {
    slug: "como-declarar-crypto-argentina",
    numero: "008",
    titulo: "Cómo declarar criptomonedas en Argentina 2026: guía completa ARCA",
    desc: "Todo lo que necesitás saber para declarar tus crypto en Argentina: Bienes Personales, Ganancias, cómo valuar activos y qué exchanges informan.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "que-es-defi-como-funciona",
    numero: "009",
    titulo: "Qué es DeFi y cómo funciona: guía completa para principiantes en español",
    desc: "Finanzas sin banco: qué es DeFi, cómo funciona Uniswap, Aave y Compound, cómo generar yield desde $50 y los riesgos reales.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "bitcoin-halving-que-es",
    numero: "010",
    titulo: "Bitcoin Halving: qué es, cuándo ocurre y por qué importa para tu inversión",
    desc: "La mecánica del halving explicada desde cero: historial de los 4 halvings con datos de precio y cómo posicionarse en el ciclo actual.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "wallets-crypto-cuales-son-mejores",
    numero: "011",
    titulo: "Las mejores wallets de crypto en 2026: guía completa para LATAM",
    desc: "MetaMask vs Trust Wallet vs Ledger vs Trezor: cuándo usar cada una, cómo proteger tu seed phrase y los errores fatales que cuestan fortunas.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "como-ganar-dinero-con-crypto-sin-invertir",
    numero: "012",
    titulo: "Cómo ganar dinero con crypto sin invertir dinero: 7 métodos reales",
    desc: "Airdrops, staking, bounties de proyectos, learn-to-earn, mining con PC y contenido sobre crypto. La guía honesta sin promesas vacías.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "mejores-exchanges-crypto-argentina-2026",
    numero: "013",
    titulo: "Los mejores exchanges de criptomonedas en Argentina en 2026",
    desc: "Comparativa completa de Lemon vs Ripio vs Buenbit vs Binance vs Bybit: comisiones reales, límites y cuál usar según tu objetivo.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "que-es-bitcoin-y-como-funciona",
    numero: "014",
    titulo: "Qué es Bitcoin y cómo funciona: la guía más simple de 2026",
    desc: "Historia, cómo funciona la blockchain, cómo comprar en LATAM, qué es una wallet y los riesgos reales. Sin jerga.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "solana-que-es-como-funciona",
    numero: "015",
    titulo: "Solana: qué es, cómo funciona y por qué es importante en 2026",
    desc: "Cómo funciona el Proof of History de Solana, comparativa con Ethereum, proyectos del ecosistema y cómo comprar SOL en LATAM.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "mejores-wallets-crypto-2026",
    numero: "016",
    titulo: "Las mejores wallets de crypto en 2026: guía completa y comparativa",
    desc: "MetaMask, Phantom, Trust Wallet, Ledger Nano X, Trezor y Tangem. Precios, pros, contras y cuál elegir según tu situación. Con links de compra.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "mejores-exchanges-crypto-2026",
    numero: "017",
    titulo: "Los mejores exchanges de crypto en 2026: ranking completo para hispanohablantes",
    desc: "Bybit, Binance, Bitget, OKX, Kraken + Bitso, Lemon Cash y Buda. Tabla comparativa de fees, KYC y cuál usar según tu país.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
  {
    slug: "mejores-herramientas-trading-2026",
    numero: "018",
    titulo: "Las mejores herramientas para hacer trading de crypto en 2026",
    desc: "TradingView, Glassnode, Nansen, CryptoQuant, Delta, CoinStats y Koinly para impuestos. La caja de herramientas completa del trader crypto.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagClass: "badge badge-dorado",
    categoria: "Crypto",
  },
];

const categorias = ["Todos", "Crypto", "AI", "Tokenización", "Libertad Financiera"];

const [featured, ...rest] = posts;

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen">

      {/* ── Header ───────────────────────────────────────────────── */}
      <div className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <span className="section-label mb-4 block">Publicaciones</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight leading-none text-white">
                Archivo
              </h1>
              <p className="text-white/40 text-lg mt-4 max-w-lg">
                Todo el análisis de La Impresora, en un solo lugar.
              </p>
            </div>
            <div className="font-mono text-white/20 text-sm text-right hidden md:block">
              <div>{posts.length} ediciones</div>
              <div>Sin paywall</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filtros de categoría ──────────────────────────────────── */}
      <div className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-hide">
            {categorias.map((cat, i) => (
              <span
                key={cat}
                className={`
                  shrink-0 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors
                  ${i === 0
                    ? "bg-verde text-[#08090a]"
                    : "text-white/40 hover:text-white/70 border border-white/10 hover:border-white/20"
                  }
                `}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lo más leído ──────────────────────────────────────────── */}
      <div className="px-6 mb-14">
        <div className="max-w-6xl mx-auto">
          <span className="section-label mb-5 block">Lo más leído</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* #1 */}
            <Link href="/blog/que-es-bitcoin-y-como-funciona" className="block group">
              <article className="card rounded-2xl p-6 flex items-start gap-5 h-full">
                <span className="font-mono text-5xl font-bold leading-none text-verde/20 select-none shrink-0 group-hover:text-verde/40 transition-colors duration-200">
                  1
                </span>
                <div className="flex-1 min-w-0">
                  <span className="badge badge-dorado mb-3">Crypto</span>
                  <h3 className="font-display font-black text-sm leading-snug text-white group-hover:text-verde transition-colors duration-150">
                    Qué es Bitcoin y cómo funciona
                  </h3>
                </div>
              </article>
            </Link>

            {/* #2 */}
            <Link href="/blog/herramientas-ai-para-ganar-dinero" className="block group">
              <article className="card rounded-2xl p-6 flex items-start gap-5 h-full">
                <span className="font-mono text-5xl font-bold leading-none text-verde/20 select-none shrink-0 group-hover:text-verde/40 transition-colors duration-200">
                  2
                </span>
                <div className="flex-1 min-w-0">
                  <span className="badge badge-verde mb-3">AI</span>
                  <h3 className="font-display font-black text-sm leading-snug text-white group-hover:text-verde transition-colors duration-150">
                    Las mejores herramientas AI para ganar dinero
                  </h3>
                </div>
              </article>
            </Link>

            {/* #3 */}
            <Link href="/blog/como-funciona-el-dinero-crypto" className="block group">
              <article className="card rounded-2xl p-6 flex items-start gap-5 h-full">
                <span className="font-mono text-5xl font-bold leading-none text-verde/20 select-none shrink-0 group-hover:text-verde/40 transition-colors duration-200">
                  3
                </span>
                <div className="flex-1 min-w-0">
                  <span className="badge badge-dorado mb-3">Crypto</span>
                  <h3 className="font-display font-black text-sm leading-snug text-white group-hover:text-verde transition-colors duration-150">
                    Cómo funciona el dinero crypto
                  </h3>
                </div>
              </article>
            </Link>

          </div>
        </div>
      </div>

      {/* ── Banner "Nuevo en La Impresora?" ───────────────────────── */}
      <div className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 justify-between relative overflow-hidden">
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-verde/0 via-verde/30 to-verde/0" />
            <div>
              <span className="section-label mb-2 block">Para nuevos lectores</span>
              <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                <strong className="text-white font-semibold">¿Primera vez por acá?</strong>{" "}
                Tenemos una guía de por dónde empezar según tu nivel.
              </p>
            </div>
            <Link
              href="/empeza"
              className="btn-secondary shrink-0 whitespace-nowrap"
              style={{ padding: "10px 20px", fontSize: "13px" }}
            >
              Ver la guía →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Featured post ─────────────────────────────────────────── */}
      <div className="px-6 mb-10">
        <div className="max-w-6xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="block group">
            <article className="card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Verde accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-verde/0 via-verde/40 to-verde/0" />

              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Número de edición */}
                <div className="shrink-0">
                  <span className="font-mono text-verde text-5xl md:text-7xl font-bold leading-none opacity-60 select-none">
                    #{featured.numero}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={featured.tagClass}>{featured.tag}</span>
                    <span className="text-white/25 text-xs font-mono">{featured.fecha}</span>
                    <span className="badge badge-neutral ml-auto hidden md:inline-flex">Destacado</span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-black leading-tight text-white mb-4 group-hover:text-verde transition-colors duration-200">
                    {featured.titulo}
                  </h2>

                  <p className="text-white/50 text-base leading-relaxed mb-8 max-w-2xl">
                    {featured.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-verde font-semibold text-sm">
                    Leer edición
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-150">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </div>

      {/* ── Grid de artículos ─────────────────────────────────────── */}
      <div className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="card rounded-2xl p-6 h-full flex flex-col">
                  {/* Número en mono verde */}
                  <div className="mb-4">
                    <span className="font-mono text-verde/50 text-2xl font-bold leading-none">
                      #{post.numero}
                    </span>
                  </div>

                  {/* Tags y fecha */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={post.tagClass}>{post.tag}</span>
                    <span className="text-white/20 text-xs font-mono ml-auto">{post.fecha}</span>
                  </div>

                  {/* Título */}
                  <h2 className="font-display font-bold text-base leading-snug text-white mb-3 group-hover:text-verde transition-colors duration-150 flex-1">
                    {post.titulo}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/35 text-sm leading-relaxed mb-5 line-clamp-2">
                    {post.desc}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-1.5 text-verde/70 text-xs font-semibold group-hover:text-verde transition-colors duration-150">
                    Leer
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-150">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Newsletter ────────────────────────────────────────── */}
      <div className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="border border-verde/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-verde/5 to-transparent pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center gap-6 justify-between">
              <div>
                <span className="section-label mb-2 block">Newsletter</span>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-2">
                  Recibí cada edición antes que nadie.
                </h3>
                <p className="text-white/40 text-sm max-w-md">
                  Una vez por semana. Sin spam. Crypto, AI y libertad financiera para LATAM.
                </p>
              </div>
              <a href="/#newsletter" className="btn-primary shrink-0 whitespace-nowrap">
                Suscribirme gratis
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
