export const metadata = {
  title: "Sponsors — La Impresora",
  description: "Llegá a +2,400 hispanohablantes que leen sobre crypto, AI y finanzas digitales. Sponsoreá el newsletter o el canal de La Impresora.",
};

const stats = [
  { numero: "2,400+", label: "Suscriptores activos" },
  { numero: "45%", label: "Open rate promedio" },
  { numero: "68%", label: "Lectores 25-40 años" },
  { numero: "LATAM", label: "Argentina · México · Colombia · Chile" },
];

const paquetes = [
  {
    nombre: "Solo Newsletter",
    precio: "$300 USD",
    por: "por envío",
    features: [
      "Mención destacada en el newsletter semanal",
      "Link a tu producto/servicio",
      "Incluido en el resumen de la semana",
      "Reach estimado: 2,400+ suscriptores",
      "Open rate: 45% (promedio industria: 20%)",
    ],
    color: "border-white/10",
    badge: null,
  },
  {
    nombre: "Newsletter + Twitter",
    precio: "$500 USD",
    por: "por semana",
    features: [
      "Todo lo del plan Newsletter",
      "2 tweets promocionales en @LaImpresora",
      "Mención en el hilo semanal",
      "Reach combinado: 5,000+ personas",
      "Contenido nativo, no publicitario",
    ],
    color: "border-verde/30",
    badge: "Más popular",
  },
  {
    nombre: "Paquete Completo",
    precio: "$900 USD",
    por: "por semana",
    features: [
      "Newsletter + Twitter + YouTube",
      "Mención en el video de la semana",
      "Short dedicado a tu producto",
      "Reach total: 10,000+ personas",
      "Reporte de métricas post-campaña",
      "Contrato mínimo: 4 semanas",
    ],
    color: "border-dorado/30",
    badge: "Mejor ROI",
  },
];

const audiencia = [
  { label: "Crypto activos", pct: "71%", color: "bg-dorado" },
  { label: "Usan herramientas AI", pct: "64%", color: "bg-verde" },
  { label: "Freelancers / emprendedores", pct: "58%", color: "bg-blue-400" },
  { label: "Ingresos > $1,000 USD/mes", pct: "52%", color: "bg-purple-400" },
];

export default function SponsorsPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="mb-20 text-center">
          <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Para Sponsors
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Llegá a los que<br />
            <span className="text-verde">ya están comprando</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Los lectores de La Impresora no son curiosos. Son personas activas
            en crypto, AI y finanzas digitales. Con alto poder de decisión y
            disposición a probar herramientas nuevas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="gradient-border rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-verde mb-1">{s.numero}</div>
              <div className="text-white/40 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Audiencia */}
        <div className="mb-20">
          <h2 className="text-2xl font-black mb-8 text-center">Quién te va a leer</h2>
          <div className="gradient-border rounded-2xl p-8 space-y-5">
            {audiencia.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/60">{a.label}</span>
                  <span className="font-bold text-white">{a.pct}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${a.color}`}
                    style={{ width: a.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paquetes */}
        <div className="mb-20">
          <h2 className="text-2xl font-black mb-8 text-center">Paquetes disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paquetes.map((p) => (
              <div key={p.nombre} className={`rounded-2xl border p-6 flex flex-col ${p.color}`} style={{ background: '#111111' }}>
                {p.badge && (
                  <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-2 py-1 rounded-full mb-4 self-start">
                    {p.badge}
                  </div>
                )}
                <h3 className="font-black text-lg mb-1">{p.nombre}</h3>
                <div className="text-3xl font-black text-verde mb-1">{p.precio}</div>
                <div className="text-white/30 text-sm mb-6">{p.por}</div>
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-verde mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:sponsors@laimpresora.io?subject=Consulta%20de%20sponsorship"
                  className="mt-6 block text-center bg-verde text-oscuro font-bold py-3 rounded-full hover:bg-verde/90 transition-colors text-sm"
                >
                  Consultar disponibilidad →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Marcas que encajan */}
        <div className="gradient-border rounded-2xl p-8 mb-20">
          <h2 className="text-xl font-black mb-6">Qué tipo de marcas funcionan bien</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/60">
            {[
              "Exchanges de criptomonedas (Binance, Bybit, Bitget, OKX)",
              "Wallets y hardware wallets (Ledger, Trezor)",
              "Herramientas de AI (Copy.ai, Jasper, ElevenLabs)",
              "Plataformas de trading y análisis",
              "Cursos y educación financiera",
              "Plataformas de tokenización de activos",
              "Servicios de VPN y privacidad digital",
              "Plataformas de newsletter y marketing (Beehiiv, Kit)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-verde">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black mb-4">¿Listo para hablar?</h2>
          <p className="text-white/40 mb-8">
            Respondemos en menos de 24 horas. Disponibilidad limitada — solo 2 sponsors por edición.
          </p>
          <a
            href="mailto:sponsors@laimpresora.io?subject=Consulta%20de%20sponsorship"
            className="inline-block bg-verde text-oscuro font-black px-10 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow text-lg"
          >
            Escribinos → sponsors@laimpresora.io
          </a>
        </div>
      </div>
    </div>
  );
}
