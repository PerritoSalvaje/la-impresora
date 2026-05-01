export const metadata = {
  title: "Recursos & Herramientas — La Impresora",
  description: "Las mejores herramientas para crypto, AI y libertad financiera en LATAM. Curadas, probadas y con links de afiliado que financian el newsletter.",
};

const recursos = [
  {
    categoria: "Exchanges Crypto — Empezar acá",
    emoji: "₿",
    color: "text-dorado",
    nota: "Usamos links de afiliado. Si te registrás por acá, ganamos una comisión sin costo extra para vos.",
    items: [
      {
        nombre: "Bybit",
        desc: "El mejor exchange para LATAM. Spot, derivados y staking. Interface limpia, excelente soporte.",
        tag: "Exchange",
        badge: "Recomendado",
        badgeColor: "bg-verde/10 text-verde",
        gratis: true,
        link: "https://www.bybit.com/en/sign-up/",
      },
      {
        nombre: "Bitget",
        desc: "El exchange que más crece en LATAM. Excelente para copy trading y DCA automático.",
        tag: "Exchange",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://www.bitget.com/register",
      },
      {
        nombre: "Binance",
        desc: "El más grande del mundo. Mayor volumen, más pares, más opciones. Ideal si ya sabés lo que hacés.",
        tag: "Exchange",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://accounts.binance.com/register",
      },
      {
        nombre: "Bitso",
        desc: "El exchange líder en México. El mejor para operar en pesos mexicanos.",
        tag: "Exchange · México",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://bitso.com/register",
      },
      {
        nombre: "Lemon Cash",
        desc: "El exchange más simple para Argentina. Para empezar con $10 en minutos.",
        tag: "Exchange · Argentina",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://www.lemon.me/",
      },
    ],
  },
  {
    categoria: "Wallets — Guardá tu crypto bien",
    emoji: "👛",
    color: "text-blue-400",
    nota: null,
    items: [
      {
        nombre: "Ledger Nano X",
        desc: "La hardware wallet más confiable del mercado. Si tenés más de $1,000 en crypto, la necesitás.",
        tag: "Hardware Wallet",
        badge: "Esencial",
        badgeColor: "bg-dorado/10 text-dorado",
        gratis: false,
        precio: "~$149 USD",
        link: "https://shop.ledger.com/products/ledger-nano-x",
      },
      {
        nombre: "Tangem",
        desc: "La hardware wallet más accesible. Formato tarjeta, sin cables. Perfecta para LATAM.",
        tag: "Hardware Wallet",
        badge: "Más barata",
        badgeColor: "bg-verde/10 text-verde",
        gratis: false,
        precio: "~$55 USD",
        link: "https://tangem.com/en/",
      },
      {
        nombre: "MetaMask",
        desc: "La wallet de software más usada. Esencial para DeFi, swaps y Web3.",
        tag: "Software Wallet",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://metamask.io/download/",
      },
      {
        nombre: "Phantom",
        desc: "La wallet de Solana. Si tenés SOL o tokens en Solana, esta es la que necesitás.",
        tag: "Software Wallet · Solana",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://phantom.app/",
      },
    ],
  },
  {
    categoria: "Análisis & Trading — Las que los pros usan",
    emoji: "📊",
    color: "text-verde",
    nota: "TradingView tiene el mejor programa de afiliados del mercado: 30% recurrente de POR VIDA.",
    items: [
      {
        nombre: "TradingView",
        desc: "El estándar global para análisis técnico. Gráficos, indicadores, alertas. Gratis funciona, Pro es otro nivel.",
        tag: "Análisis Técnico",
        badge: "30% afiliado — de por vida",
        badgeColor: "bg-verde/10 text-verde",
        gratis: true,
        precio: "Desde $14.95/mes",
        link: "https://www.tradingview.com/",
      },
      {
        nombre: "CoinGecko",
        desc: "El mejor tracker de precios y datos de mercado. Gratis y completo.",
        tag: "Datos de Mercado",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://www.coingecko.com/",
      },
      {
        nombre: "DeFiLlama",
        desc: "El mejor dashboard para datos on-chain: TVL, yields, protocolos. Todo gratis.",
        tag: "DeFi Analytics",
        badge: null,
        badgeColor: "",
        gratis: true,
        link: "https://defillama.com/",
      },
      {
        nombre: "Koinly",
        desc: "Para declarar impuestos sobre crypto. Soporta Argentina, México y Colombia. Cada vez más necesario.",
        tag: "Impuestos Crypto",
        badge: "30% afiliado",
        badgeColor: "bg-dorado/10 text-dorado",
        gratis: false,
        precio: "Desde $49/año",
        link: "https://koinly.io/",
      },
    ],
  },
  {
    categoria: "VPN & Privacidad — La oportunidad oculta",
    emoji: "🔒",
    color: "text-purple-400",
    nota: "En LATAM muchos exchanges bloquean IPs. Una VPN es esencial. Y tienen las mejores comisiones de afiliado.",
    items: [
      {
        nombre: "NordVPN",
        desc: "La VPN más popular del mundo. Indispensable para acceder a exchanges sin restricciones en LATAM.",
        tag: "VPN",
        badge: "40% afiliado recurrente",
        badgeColor: "bg-verde/10 text-verde",
        gratis: false,
        precio: "~$3.69/mes (plan 2 años)",
        link: "https://nordvpn.com/",
      },
      {
        nombre: "Proton VPN",
        desc: "El más privado y seguro. Plan gratuito disponible. Recomendado para los más paranóicos (con razón).",
        tag: "VPN",
        badge: "100% primer mes",
        badgeColor: "bg-dorado/10 text-dorado",
        gratis: true,
        precio: "Desde $3.99/mes",
        link: "https://proton.me/vpn",
      },
      {
        nombre: "1Password",
        desc: "Gestor de contraseñas. Crítico si tenés cuentas en múltiples exchanges. Una contraseña comprometida = pérdida total.",
        tag: "Seguridad",
        badge: "25% afiliado",
        badgeColor: "bg-blue-400/10 text-blue-400",
        gratis: false,
        precio: "$2.99/mes",
        link: "https://1password.com/",
      },
    ],
  },
  {
    categoria: "Herramientas AI — Las que usamos para producir",
    emoji: "🤖",
    color: "text-verde",
    nota: null,
    items: [
      {
        nombre: "Claude (Anthropic)",
        desc: "La AI que usamos para todo el contenido de La Impresora. La mejor para análisis extenso y escritura.",
        tag: "AI General",
        badge: null,
        badgeColor: "",
        gratis: false,
        precio: "$20 USD/mes",
        link: "https://claude.ai/",
      },
      {
        nombre: "Perplexity AI",
        desc: "Para research con fuentes verificadas. Reemplaza a Google para búsquedas complejas.",
        tag: "AI Research",
        badge: null,
        badgeColor: "",
        gratis: false,
        precio: "$20 USD/mes",
        link: "https://www.perplexity.ai/",
      },
      {
        nombre: "ElevenLabs",
        desc: "Voces AI en español de altísima calidad. Usada para los videos del canal.",
        tag: "AI Voz",
        badge: "22% afiliado",
        badgeColor: "bg-verde/10 text-verde",
        gratis: false,
        precio: "Desde $22/mes",
        link: "https://elevenlabs.io/",
      },
      {
        nombre: "Make.com",
        desc: "Para automatizar flujos de trabajo entre herramientas. Sin programar.",
        tag: "Automatización",
        badge: null,
        badgeColor: "",
        gratis: false,
        precio: "Desde $9/mes",
        link: "https://www.make.com/",
      },
    ],
  },
  {
    categoria: "Contenido & Newsletter",
    emoji: "✍️",
    color: "text-blue-400",
    nota: null,
    items: [
      {
        nombre: "Beehiiv",
        desc: "La mejor plataforma de newsletter. La que usamos para La Impresora. Referral program integrado.",
        tag: "Newsletter",
        badge: "50% afiliado 12 meses",
        badgeColor: "bg-verde/10 text-verde",
        gratis: true,
        link: "https://www.beehiiv.com/",
      },
      {
        nombre: "InVideo AI",
        desc: "Videos completos desde un script. El que usamos para el canal de YouTube.",
        tag: "Video AI",
        badge: "30% afiliado",
        badgeColor: "bg-dorado/10 text-dorado",
        gratis: false,
        precio: "Desde $30/mes",
        link: "https://invideo.io/",
      },
      {
        nombre: "Canva Pro",
        desc: "Para thumbnails y diseño rápido. Esencial para YouTube y redes sociales.",
        tag: "Diseño",
        badge: null,
        badgeColor: "",
        gratis: false,
        precio: "$15/mes",
        link: "https://www.canva.com/",
      },
    ],
  },
];

export default function RecursosPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Recursos curados
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Las herramientas que<br />
            <span className="text-verde">realmente usamos</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Solo listamos lo que probamos. Algunos links son de afiliados —
            si comprás a través de ellos, recibimos una comisión sin costo extra para vos.
            Así financiamos el newsletter gratuito.
          </p>
        </div>

        <div className="space-y-16">
          {recursos.map((cat) => (
            <div key={cat.categoria}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{cat.emoji}</span>
                <h2 className={`text-2xl font-black ${cat.color}`}>{cat.categoria}</h2>
              </div>
              {cat.nota && (
                <p className="text-white/30 text-sm mb-6 ml-10 italic">{cat.nota}</p>
              )}
              {!cat.nota && <div className="mb-6" />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <a
                    key={item.nombre}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="gradient-border rounded-xl p-5 hover:scale-[1.02] transition-transform block group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-black text-lg group-hover:text-verde transition-colors">{item.nombre}</h3>
                      {item.badge && (
                        <span className={`text-xs font-bold px-2 py-1 rounded-full shrink-0 ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                      <span className={`text-sm font-bold ${item.gratis ? "text-verde" : "text-white/40"}`}>
                        {item.gratis ? "Gratis" : item.precio || "Pago"}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 gradient-border rounded-2xl p-8 text-center">
          <p className="text-white/40 text-sm mb-2">¿Falta alguna herramienta?</p>
          <p className="text-lg font-bold mb-4">
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
