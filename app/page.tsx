import Newsletter from "@/components/Newsletter";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { numero: "2,400+", label: "Suscriptores activos", sub: "y creciendo" },
  { numero: "45%", label: "Tasa de apertura", sub: "vs 21% industria" },
  { numero: "30", label: "Ediciones publicadas", sub: "sin saltear una" },
  { numero: "0", label: "Artículos patrocinados", sub: "independencia editorial" },
];

const verticales = [
  {
    icon: "₿",
    title: "Crypto & Mercados",
    desc: "Análisis de ciclos, on-chain data y movimientos de capital institucional. Lo que mueve el mercado, explicado con rigor.",
  },
  {
    icon: "⬡",
    title: "DeFi & Protocolos",
    desc: "Yields reales, liquidez profunda y riesgos que la mayoría ignora. Research de protocolos antes de que sean mainstream.",
  },
  {
    icon: "◈",
    title: "Tokenización de Activos",
    desc: "Real estate, commodities y deuda tokenizada. El mercado de $16T que se está construyendo ahora mismo en LATAM.",
  },
  {
    icon: "∞",
    title: "AI & Economía Digital",
    desc: "Cómo la inteligencia artificial está redistribuyendo valor. Casos concretos, no hype. Herramientas que ya funcionan.",
  },
];

const ultimasEdiciones = [
  {
    slug: "gap-ai-oportunidad",
    numero: "030",
    titulo: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando",
    excerpt:
      "Analizamos el estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa en finanzas, legal y negocios en LATAM.",
    tag: "AI",
    tagVariant: "badge-verde",
    fecha: "24 abr 2026",
    featured: true,
  },
  {
    slug: "banco-tu-peor-enemigo",
    numero: "029",
    titulo: "Por qué tu banco es tu peor enemigo financiero",
    excerpt:
      "Te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Existe una salida.",
    tag: "Crypto",
    tagVariant: "badge-dorado",
    fecha: "17 abr 2026",
    featured: false,
  },
  {
    slug: "tokenizacion-campo-paraguay",
    numero: "028",
    titulo: "Tokenización: cómo un campo en Paraguay puede ser tuyo con $50",
    excerpt:
      "Los activos reales tokenizados permiten tickets mínimos que democratizan el acceso a clases de activos históricamente cerradas.",
    tag: "Tokenización",
    tagVariant: "badge-neutral",
    fecha: "10 abr 2026",
    featured: false,
  },
];

/* ─── Preview cards (stack hero) ────────────────────────────────────── */

const previewCards = [
  { numero: "030", tag: "AI", titulo: "El gap que nadie ve en AI", color: "border-verde/20" },
  { numero: "029", tag: "Crypto", titulo: "Tu banco vs las alternativas", color: "border-dorado/15" },
  { numero: "028", tag: "RWA", titulo: "Tokenización de activos reales", color: "border-white/8" },
];

/* ─── Logos (social proof tickers) ──────────────────────────────────── */

const temas = [
  "Bitcoin", "Ethereum", "DeFi", "Tokenización", "AI & Finanzas",
  "LATAM Crypto", "Stablecoins", "On-Chain Data", "RWA", "Mercados",
  "Bitcoin", "Ethereum", "DeFi", "Tokenización", "AI & Finanzas",
  "LATAM Crypto", "Stablecoins", "On-Chain Data", "RWA", "Mercados",
];

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="pt-[92px]">

      {/* ── SECCIÓN 1: HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-92px)] flex items-center px-6 overflow-hidden">

        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, var(--verde) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03]"
            style={{ background: "radial-gradient(circle, var(--dorado) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              {/* Badge */}
              <div className="mb-8">
                <span className="badge badge-verde">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--verde)" }}
                  />
                  Nuevo número cada jueves
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-tight mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                La Impresora
              </h1>
              <p
                className="font-display text-2xl md:text-3xl font-semibold mb-6 leading-snug"
                style={{ color: "var(--text-secondary)", letterSpacing: "-0.01em" }}
              >
                El research financiero que{" "}
                <span style={{ color: "var(--verde)" }}>LATAM</span>{" "}
                merece.
              </p>

              {/* Sub */}
              <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)", maxWidth: "480px" }}>
                Cada semana analizamos crypto, DeFi, AI y tokenización con el rigor
                de un research desk institucional — accesible para cualquier persona
                que quiera entender hacia dónde va el dinero.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="#newsletter" className="btn-primary">
                  Suscribite gratis →
                </a>
                <Link href="/blog" className="btn-secondary">
                  Leer el blog
                </Link>
              </div>

              {/* Trust line */}
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                2,400+ lectores · Gratis · Un email por semana · Sin spam
              </p>
            </div>

            {/* Right — edition stack */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[340px] h-[420px]">
                {previewCards.map((card, i) => (
                  <div
                    key={card.numero}
                    className="card absolute w-full"
                    style={{
                      top: `${i * 28}px`,
                      left: `${i * -10}px`,
                      zIndex: previewCards.length - i,
                      opacity: 1 - i * 0.15,
                      transform: `rotate(${(i - 1) * 1.5}deg)`,
                      padding: "28px",
                    }}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        #{card.numero}
                      </span>
                      <span className="badge badge-neutral" style={{ fontSize: "10px" }}>
                        {card.tag}
                      </span>
                    </div>
                    <p
                      className="font-display font-semibold text-base leading-snug mb-4"
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {card.titulo}
                    </p>
                    <div
                      className="h-1 rounded-full"
                      style={{ background: "var(--border)", width: "60%" }}
                    />
                    <div
                      className="h-1 rounded-full mt-2"
                      style={{ background: "var(--border)", width: "40%" }}
                    />
                    <div className="mt-6 flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ background: "rgba(0,230,118,0.12)", color: "var(--verde)" }}
                      >
                        🖨️
                      </div>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        La Impresora
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2: TOPICS TICKER ────────────────────────────────── */}
      <section
        className="py-4 border-y overflow-hidden"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <div className="flex items-center gap-0">
          {/* Label fijo */}
          <div
            className="shrink-0 px-6 py-3 border-r text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
              background: "var(--surface)",
              zIndex: 2,
            }}
          >
            Cubrimos
          </div>

          {/* Ticker */}
          <div className="overflow-hidden flex-1 relative">
            {/* Fade edges */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}
            />

            <div className="ticker-track flex items-center gap-0 py-3">
              {temas.map((tema, i) => (
                <span key={`${tema}-${i}`} className="flex items-center shrink-0">
                  <span
                    className="text-sm font-medium px-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tema}
                  </span>
                  <span style={{ color: "var(--border)" }}>·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: MÉTRICAS ─────────────────────────────────────── */}
      <section className="py-20 px-6 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-center mb-12">Por los números</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center py-10 px-6"
                style={{ background: "var(--bg)" }}
              >
                <span className="stat-number mb-1">{s.numero}</span>
                <span
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.label}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: VERTICALES ───────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="section-label mb-4">Cobertura editorial</p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ letterSpacing: "-0.02em" }}
            >
              Cuatro temas. Un solo objetivo.
            </h2>
            <p className="mt-3 text-base" style={{ color: "var(--text-secondary)", maxWidth: "520px" }}>
              Cada edición profundiza uno o más de estos universos con datos verificables y análisis original.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verticales.map((v) => (
              <div
                key={v.title}
                className="card group p-8 cursor-default"
                style={{ borderRadius: "12px" }}
              >
                <div
                  className="text-2xl mb-5 font-mono leading-none"
                  style={{ color: "var(--text-muted)" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-display text-lg font-semibold mb-3"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: ÚLTIMAS EDICIONES ────────────────────────────── */}
      <section className="py-24 px-6 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header row */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Editorial</p>
              <h2
                className="font-display text-3xl md:text-4xl font-bold"
                style={{ letterSpacing: "-0.02em" }}
              >
                Últimas publicaciones
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hidden sm:inline-flex items-center gap-1.5"
              style={{ color: "var(--verde)" }}
            >
              Ver archivo →
            </Link>
          </div>

          {/* Grid editorial: 1 featured + 2 small */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Featured — toma 2 columnas */}
            {ultimasEdiciones.filter((e) => e.featured).map((e) => (
              <Link
                key={e.numero}
                href={`/blog/${e.slug}`}
                className="card lg:col-span-2 p-8 block group"
                style={{ borderRadius: "12px" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                    #{e.numero}
                  </span>
                  <span className={`badge ${e.tagVariant}`}>{e.tag}</span>
                  <span className="text-xs ml-auto" style={{ color: "var(--text-muted)" }}>
                    {e.fecha}
                  </span>
                </div>
                <h3
                  className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-verde transition-colors"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {e.titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {e.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs font-medium" style={{ color: "var(--verde)" }}>
                  Leer edición completa →
                </div>
              </Link>
            ))}

            {/* Columna con 2 cards pequeñas */}
            <div className="flex flex-col gap-4">
              {ultimasEdiciones.filter((e) => !e.featured).map((e) => (
                <Link
                  key={e.numero}
                  href={`/blog/${e.slug}`}
                  className="card flex-1 p-6 block group"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      #{e.numero}
                    </span>
                    <span className={`badge ${e.tagVariant}`}>{e.tag}</span>
                  </div>
                  <h3
                    className="font-display text-base font-semibold leading-snug mb-3 group-hover:text-verde transition-colors"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {e.titulo}
                  </h3>
                  <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "var(--text-secondary)" }}>
                    {e.excerpt}
                  </p>
                  <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
                    {e.fecha}
                  </p>
                </Link>
              ))}
            </div>

          </div>

          {/* Mobile link */}
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-medium" style={{ color: "var(--verde)" }}>
              Ver archivo completo →
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 6: NEWSLETTER CTA ───────────────────────────────── */}
      <Newsletter />

    </div>
  );
}
