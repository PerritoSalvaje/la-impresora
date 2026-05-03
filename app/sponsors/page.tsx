export const metadata = {
  title: "Sponsors — La Impresora",
  description: "Llegá a +2,412 hispanohablantes que leen sobre crypto, AI y finanzas digitales. Sponsoreá el newsletter o el canal de La Impresora. Q1 2026.",
};

const stats = [
  { numero: "2,412+", label: "Suscriptores activos", sub: "y creciendo cada semana" },
  { numero: "45%", label: "Open rate promedio", sub: "vs. 20% industria" },
  { numero: "71%", label: "Crypto activos", sub: "operan en exchanges reales" },
  { numero: "68%", label: "Rango 25–40 años", sub: "poder de decisión real" },
];

const audiencia = [
  { label: "Crypto activos (operan en exchanges)", pct: "71%", valor: 71, color: "bg-dorado" },
  { label: "Usan herramientas de AI en su trabajo", pct: "64%", valor: 64, color: "bg-verde" },
  { label: "Freelancers o emprendedores", pct: "58%", valor: 58, color: "bg-blue-400" },
  { label: "Ingresos por encima de $1,000 USD/mes", pct: "52%", valor: 52, color: "bg-purple-400" },
];

const paquetes = [
  {
    nombre: "Newsletter",
    precio: "$300",
    por: "por edición",
    descripcion: "Mención directa en nuestra edición semanal. Llegás a los 2,412+ suscriptores más activos de la comunidad.",
    features: [
      "Mención destacada en el newsletter semanal",
      "Link a tu producto o servicio",
      "Incluido en el resumen de la semana",
      "Reach estimado: 2,412+ suscriptores",
      "Open rate del 45% (industria: 20%)",
    ],
    badge: null,
    acento: "border-white/10",
    btnClase: "btn-secondary",
  },
  {
    nombre: "Newsletter + Redes",
    precio: "$500",
    por: "por semana",
    descripcion: "Presencia en newsletter y en Twitter/X. Llegás al feed de tu audiencia de múltiples formas en la misma semana.",
    features: [
      "Todo lo del plan Newsletter",
      "2 posts en Twitter/X @LaImpresora",
      "Mención en el hilo semanal de análisis",
      "Reach combinado estimado: 5,000+ personas",
      "Contenido nativo — no se ve como publicidad",
    ],
    badge: "Más popular",
    acento: "border-verde/25",
    btnClase: "btn-primary",
  },
  {
    nombre: "Pack Completo",
    precio: "$900",
    por: "por semana",
    descripcion: "El paquete máximo. Newsletter, redes y YouTube en una sola campaña coordinada con reporte de métricas.",
    features: [
      "Newsletter + Twitter/X + YouTube",
      "Mención en el video de la semana",
      "Short dedicado a tu producto o servicio",
      "Reach total estimado: 10,000+ personas",
      "Reporte de métricas post-campaña",
      "Contrato mínimo: 4 semanas",
    ],
    badge: "Mejor ROI",
    acento: "border-dorado/25",
    btnClase: "btn-secondary",
  },
];

const marcasQueEncajan = [
  "Exchanges de criptomonedas (Binance, Bybit, Bitget, OKX)",
  "Wallets y hardware wallets (Ledger, Trezor, Tangem)",
  "Herramientas de AI (ElevenLabs, Jasper, Perplexity)",
  "Plataformas de trading y análisis técnico",
  "Cursos y educación financiera online",
  "Plataformas de tokenización de activos reales",
  "Servicios de VPN y privacidad digital",
  "Plataformas de newsletter y marketing digital",
];

const proceso = [
  {
    paso: "01",
    titulo: "Brief",
    desc: "Nos contás tu producto, objetivo y mensaje. En 24h te enviamos disponibilidad y propuesta.",
  },
  {
    paso: "02",
    titulo: "Aprobación",
    desc: "Revisás el borrador del copy antes de publicar. Tenés hasta 2 rondas de cambios incluidas.",
  },
  {
    paso: "03",
    titulo: "Publicación",
    desc: "Tu sponsorship sale en la edición o plataforma acordada, en la fecha pactada.",
  },
  {
    paso: "04",
    titulo: "Reporte",
    desc: "Te enviamos métricas reales: opens, clics y reach por canal. Sin estimaciones vacías.",
  },
];

export default function SponsorsPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="mb-20">
          <span className="section-label mb-4 block">Para Sponsors</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
            Llegá a los<br />
            <span className="text-verde">que deciden.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Los lectores de La Impresora no son curiosos. Son personas activas en crypto,
            AI y finanzas digitales — con alto poder de decisión y disposición real a probar
            herramientas nuevas. Solo aceptamos 2 sponsors por edición.
          </p>
        </div>

        {/* Stats de audiencia */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="font-display text-4xl font-bold text-verde mb-1 tracking-tight">
                {s.numero}
              </div>
              <div className="text-white/70 text-sm font-semibold mb-1">{s.label}</div>
              <div className="text-white/25 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Perfil de audiencia */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold">Quién te va a leer</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="card p-8 space-y-6">
            {audiencia.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white/55 text-sm">{a.label}</span>
                  <span className="font-display font-bold text-white tabular-nums">{a.pct}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${a.color}`}
                    style={{ width: a.pct }}
                  />
                </div>
              </div>
            ))}
            <p className="text-white/20 text-xs pt-2 border-t border-white/5">
              Datos basados en encuesta a 420 suscriptores activos · Q1 2026.
            </p>
          </div>
        </div>

        {/* Paquetes */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold">Paquetes disponibles</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {paquetes.map((p) => (
              <div
                key={p.nombre}
                className={`rounded-2xl border flex flex-col p-6 transition-colors ${p.acento}`}
                style={{ background: "var(--surface)" }}
              >
                {/* Badge */}
                <div className="mb-5 min-h-[28px]">
                  {p.badge ? (
                    <span className={`badge ${p.badge === "Mejor ROI" ? "badge-dorado" : "badge-verde"}`}>
                      {p.badge}
                    </span>
                  ) : null}
                </div>

                {/* Nombre y precio */}
                <h3 className="font-display font-bold text-xl mb-1">{p.nombre}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-4xl font-bold text-verde">{p.precio}</span>
                  <span className="text-verde text-sm">USD</span>
                </div>
                <p className="text-white/30 text-xs mb-4">{p.por}</p>

                <p className="text-white/45 text-sm leading-relaxed mb-6">{p.descripcion}</p>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                      <span className="text-verde mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:sponsors@laimpresora.io?subject=Consulta%20de%20sponsorship"
                  className={p.btnClase}
                  style={{ justifyContent: "center" }}
                >
                  Consultar disponibilidad →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold">Cómo trabajamos</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {proceso.map((p) => (
              <div key={p.paso} className="card p-5">
                <div className="font-display text-3xl font-bold text-verde/20 mb-3">{p.paso}</div>
                <h3 className="font-semibold text-white mb-2">{p.titulo}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marcas que encajan */}
        <div className="card p-8 mb-20">
          <h2 className="font-display text-xl font-bold mb-6">
            Qué tipo de marcas funcionan bien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {marcasQueEncajan.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-white/55">
                <span className="text-verde shrink-0 mt-0.5">✓</span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-white/25 text-xs mt-6 pt-5 border-t border-white/5">
            No aceptamos sponsors de: casinos, trading de señales sin evidencia, proyectos sin producto real o marcas que no se alineen con nuestra editorial.
          </p>
        </div>

        {/* CTA final */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, #00e676 0%, transparent 70%)",
            }}
          />
          <div className="relative card p-12 text-center border border-verde/15">
            <span className="section-label mb-4 block">Solo 2 spots por edición</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              ¿Listo para hablar?
            </h2>
            <p className="text-white/40 text-sm mb-10 max-w-md mx-auto leading-relaxed">
              Respondemos en menos de 24 horas. La disponibilidad es limitada
              y suele estar reservada con 2–3 semanas de anticipación.
            </p>
            <a
              href="mailto:sponsors@laimpresora.io?subject=Consulta%20de%20sponsorship"
              className="btn-primary verde-glow"
              style={{ fontSize: "15px", padding: "16px 36px" }}
            >
              Escribinos → sponsors@laimpresora.io
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
