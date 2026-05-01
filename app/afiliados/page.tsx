const afiliados = [
  {
    categoria: "Exchanges Crypto",
    emoji: "₿",
    color: "text-dorado",
    bg: "bg-dorado/5 border-dorado/20",
    items: [
      {
        nombre: "Bitget",
        comision: "hasta 60%",
        tipo: "De cada fee de trading — para siempre",
        latam: true,
        destaca: true,
        badge: "El que más paga",
        badgeColor: "bg-verde/10 text-verde border-verde/20",
      },
      {
        nombre: "Bybit",
        comision: "hasta 50%",
        tipo: "Fees de spot + derivados — recurrente",
        latam: true,
        destaca: true,
        badge: "Fuerte en LATAM",
        badgeColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
      },
      {
        nombre: "Binance",
        comision: "hasta 50%",
        tipo: "Fees de trading, paga en USDT",
        latam: true,
        destaca: false,
        badge: null,
        badgeColor: "",
      },
      {
        nombre: "OKX",
        comision: "hasta 50%",
        tipo: "Fees de trading — cookie 30 días",
        latam: true,
        destaca: false,
        badge: null,
        badgeColor: "",
      },
      {
        nombre: "Bitso",
        comision: "40% por 12 meses",
        tipo: "Líder en México y Argentina",
        latam: true,
        destaca: false,
        badge: "Mejor para México",
        badgeColor: "bg-dorado/10 text-dorado border-dorado/20",
      },
    ],
  },
  {
    categoria: "Herramientas AI",
    emoji: "🤖",
    color: "text-verde",
    bg: "bg-verde/5 border-verde/20",
    items: [
      {
        nombre: "Copy.ai",
        comision: "45% por 12 meses",
        tipo: "Recurrente — paga vía PayPal",
        latam: true,
        destaca: true,
        badge: "Mejor AI afiliado",
        badgeColor: "bg-verde/10 text-verde border-verde/20",
      },
      {
        nombre: "ElevenLabs",
        comision: "22% recurrente",
        tipo: "Voces AI — muy popular en creadores",
        latam: true,
        destaca: false,
        badge: null,
        badgeColor: "",
      },
      {
        nombre: "Jasper AI",
        comision: "25% recurrente",
        tipo: "Vía Impact — paga PayPal",
        latam: true,
        destaca: false,
        badge: null,
        badgeColor: "",
      },
      {
        nombre: "Surfer SEO",
        comision: "25% recurrente",
        tipo: "SEO con AI — muy popular en español",
        latam: true,
        destaca: false,
        badge: null,
        badgeColor: "",
      },
    ],
  },
  {
    categoria: "Newsletter & Marketing",
    emoji: "📩",
    color: "text-purple-400",
    bg: "bg-purple-400/5 border-purple-400/20",
    items: [
      {
        nombre: "Beehiiv",
        comision: "50% por 12 meses",
        tipo: "En planes pagos desde $49/mes",
        latam: true,
        destaca: true,
        badge: "Para creadores",
        badgeColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
      },
      {
        nombre: "Kit (ConvertKit)",
        comision: "30% de por vida",
        tipo: "Recurrente permanente — paga PayPal",
        latam: true,
        destaca: false,
        badge: null,
        badgeColor: "",
      },
      {
        nombre: "Systeme.io",
        comision: "40% de por vida",
        tipo: "Muy popular en LATAM — interfaz en español",
        latam: true,
        destaca: false,
        badge: "Fácil de recomendar",
        badgeColor: "bg-verde/10 text-verde border-verde/20",
      },
    ],
  },
  {
    categoria: "Cursos & Productos Digitales",
    emoji: "📚",
    color: "text-blue-400",
    bg: "bg-blue-400/5 border-blue-400/20",
    items: [
      {
        nombre: "Hotmart",
        comision: "40–60% por venta",
        tipo: "Paga en pesos, reales y dólares — nativo LATAM",
        latam: true,
        destaca: true,
        badge: "Mejor para LATAM",
        badgeColor: "bg-dorado/10 text-dorado border-dorado/20",
      },
      {
        nombre: "Udemy",
        comision: "hasta 97%",
        tipo: "Con tu propio cupón — marketplace enorme",
        latam: true,
        destaca: false,
        badge: null,
        badgeColor: "",
      },
    ],
  },
];

export default function AfiliadosPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Programa de Afiliados
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Las herramientas que<br />
            <span className="text-verde">usamos y recomendamos</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Si usás alguna de estas herramientas a través de nuestros links,
            recibimos una comisión sin costo extra para vos. Así financiamos el
            newsletter gratuito. Solo recomendamos lo que realmente sirve.
          </p>
        </div>

        <div className="space-y-12">
          {afiliados.map((cat) => (
            <div key={cat.categoria}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.emoji}</span>
                <h2 className={`text-2xl font-black ${cat.color}`}>{cat.categoria}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.nombre}
                    className={`gradient-border rounded-xl p-5 ${item.destaca ? "ring-1 ring-verde/20" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-black text-lg">{item.nombre}</h3>
                      {item.badge && (
                        <span className={`text-xs font-bold px-2 py-1 rounded-full border shrink-0 ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className={`text-2xl font-black mb-1 ${cat.color}`}>
                      {item.comision}
                    </div>
                    <p className="text-white/40 text-sm">{item.tipo}</p>
                    {item.latam && (
                      <span className="inline-block mt-3 text-xs text-verde/60 border border-verde/10 px-2 py-0.5 rounded-full">
                        ✓ Acepta LATAM
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 gradient-border rounded-2xl p-8 text-center">
          <p className="text-white/40 text-sm mb-2">¿No encontrás lo que buscás?</p>
          <p className="text-xl font-bold mb-4">
            Cada semana en el newsletter analizamos nuevas herramientas.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-verde text-oscuro font-black px-8 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow"
          >
            Suscribite gratis →
          </a>
        </div>
      </div>
    </div>
  );
}
