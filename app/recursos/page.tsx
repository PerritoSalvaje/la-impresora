export const metadata = {
  title: "Herramientas — La Impresora",
  description: "Las mejores herramientas para crypto, AI y libertad financiera en LATAM. Curadas, probadas y con links de afiliado que financian el newsletter.",
};

const recursos = [
  {
    categoria: "Exchanges Crypto",
    subtitulo: "Empezá acá",
    nota: "Usamos links de afiliado. Si te registrás por acá, ganamos una comisión sin costo extra para vos.",
    items: [
      {
        nombre: "Bybit",
        desc: "El mejor exchange para LATAM. Spot, derivados y staking. Interface limpia, excelente soporte.",
        tag: "Exchange",
        afiliado: null,
        gratis: true,
        destacado: true,
        link: "https://www.bybit.com/en/sign-up/",
      },
      {
        nombre: "Bitget",
        desc: "El exchange que más crece en LATAM. Excelente para copy trading y DCA automático.",
        tag: "Exchange",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://www.bitget.com/register",
      },
      {
        nombre: "Binance",
        desc: "El más grande del mundo. Mayor volumen, más pares, más opciones. Ideal si ya sabés lo que hacés.",
        tag: "Exchange",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://accounts.binance.com/register",
      },
      {
        nombre: "Bitso",
        desc: "El exchange líder en México. El mejor para operar en pesos mexicanos.",
        tag: "Exchange · México",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://bitso.com/register",
      },
      {
        nombre: "Lemon Cash",
        desc: "El exchange más simple para Argentina. Para empezar con $10 en minutos.",
        tag: "Exchange · Argentina",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://www.lemon.me/",
      },
    ],
  },
  {
    categoria: "Wallets",
    subtitulo: "Guardá tu crypto bien",
    nota: null,
    items: [
      {
        nombre: "Ledger Nano X",
        desc: "La hardware wallet más confiable del mercado. Si tenés más de $1,000 en crypto, la necesitás.",
        tag: "Hardware Wallet",
        afiliado: null,
        gratis: false,
        precio: "~$149 USD",
        destacado: false,
        link: "https://shop.ledger.com/products/ledger-nano-x",
      },
      {
        nombre: "Tangem",
        desc: "La hardware wallet más accesible. Formato tarjeta, sin cables. Perfecta para LATAM.",
        tag: "Hardware Wallet",
        afiliado: null,
        gratis: false,
        precio: "~$55 USD",
        destacado: false,
        link: "https://tangem.com/en/",
      },
      {
        nombre: "MetaMask",
        desc: "La wallet de software más usada. Esencial para DeFi, swaps y Web3.",
        tag: "Software Wallet",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://metamask.io/download/",
      },
      {
        nombre: "Phantom",
        desc: "La wallet de Solana. Si tenés SOL o tokens en Solana, esta es la que necesitás.",
        tag: "Software Wallet · Solana",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://phantom.app/",
      },
    ],
  },
  {
    categoria: "Análisis & Trading",
    subtitulo: "Las que los pros usan",
    nota: "TradingView tiene el mejor programa de afiliados del mercado: 30% recurrente de por vida.",
    items: [
      {
        nombre: "TradingView",
        desc: "El estándar global para análisis técnico. Gráficos, indicadores, alertas. Gratis funciona, Pro es otro nivel.",
        tag: "Análisis Técnico",
        afiliado: "30% afiliado — de por vida",
        gratis: true,
        precio: "Desde $14.95/mes",
        destacado: true,
        link: "https://www.tradingview.com/",
      },
      {
        nombre: "CoinGecko",
        desc: "El mejor tracker de precios y datos de mercado. Gratis y completo.",
        tag: "Datos de Mercado",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://www.coingecko.com/",
      },
      {
        nombre: "DeFiLlama",
        desc: "El mejor dashboard para datos on-chain: TVL, yields, protocolos. Todo gratis.",
        tag: "DeFi Analytics",
        afiliado: null,
        gratis: true,
        destacado: false,
        link: "https://defillama.com/",
      },
      {
        nombre: "Koinly",
        desc: "Para declarar impuestos sobre crypto. Soporta Argentina, México y Colombia. Cada vez más necesario.",
        tag: "Impuestos Crypto",
        afiliado: "30% afiliado",
        gratis: false,
        precio: "Desde $49/año",
        destacado: false,
        link: "https://koinly.io/",
      },
    ],
  },
  {
    categoria: "VPN & Privacidad",
    subtitulo: "La oportunidad oculta",
    nota: "En LATAM muchos exchanges bloquean IPs. Una VPN es esencial. Y tienen las mejores comisiones de afiliado.",
    items: [
      {
        nombre: "NordVPN",
        desc: "La VPN más popular del mundo. Indispensable para acceder a exchanges sin restricciones en LATAM.",
        tag: "VPN",
        afiliado: "40% afiliado recurrente",
        gratis: false,
        precio: "~$3.69/mes (plan 2 años)",
        destacado: true,
        link: "https://nordvpn.com/",
      },
      {
        nombre: "Proton VPN",
        desc: "El más privado y seguro. Plan gratuito disponible. Recomendado para los más paranóicos (con razón).",
        tag: "VPN",
        afiliado: "100% primer mes",
        gratis: true,
        precio: "Desde $3.99/mes",
        destacado: true,
        link: "https://proton.me/vpn",
      },
      {
        nombre: "1Password",
        desc: "Gestor de contraseñas. Crítico si tenés cuentas en múltiples exchanges. Una contraseña comprometida = pérdida total.",
        tag: "Seguridad",
        afiliado: "25% afiliado",
        gratis: false,
        precio: "$2.99/mes",
        destacado: false,
        link: "https://1password.com/",
      },
    ],
  },
  {
    categoria: "Herramientas AI",
    subtitulo: "Las que usamos para producir",
    nota: null,
    items: [
      {
        nombre: "Claude (Anthropic)",
        desc: "La AI que usamos para todo el contenido de La Impresora. La mejor para análisis extenso y escritura.",
        tag: "AI General",
        afiliado: null,
        gratis: false,
        precio: "$20 USD/mes",
        destacado: false,
        link: "https://claude.ai/",
      },
      {
        nombre: "Perplexity AI",
        desc: "Para research con fuentes verificadas. Reemplaza a Google para búsquedas complejas.",
        tag: "AI Research",
        afiliado: null,
        gratis: false,
        precio: "$20 USD/mes",
        destacado: false,
        link: "https://www.perplexity.ai/",
      },
      {
        nombre: "ElevenLabs",
        desc: "Voces AI en español de altísima calidad. Usada para los videos del canal.",
        tag: "AI Voz",
        afiliado: "22% afiliado",
        gratis: false,
        precio: "Desde $22/mes",
        destacado: false,
        link: "https://elevenlabs.io/",
      },
      {
        nombre: "Make.com",
        desc: "Para automatizar flujos de trabajo entre herramientas. Sin programar.",
        tag: "Automatización",
        afiliado: null,
        gratis: false,
        precio: "Desde $9/mes",
        destacado: false,
        link: "https://www.make.com/",
      },
    ],
  },
  {
    categoria: "Contenido & Newsletter",
    subtitulo: null,
    nota: null,
    items: [
      {
        nombre: "Beehiiv",
        desc: "La mejor plataforma de newsletter. La que usamos para La Impresora. Referral program integrado.",
        tag: "Newsletter",
        afiliado: "50% afiliado 12 meses",
        gratis: true,
        destacado: false,
        link: "https://www.beehiiv.com/",
      },
      {
        nombre: "InVideo AI",
        desc: "Videos completos desde un script. El que usamos para el canal de YouTube.",
        tag: "Video AI",
        afiliado: "30% afiliado",
        gratis: false,
        precio: "Desde $30/mes",
        destacado: false,
        link: "https://invideo.io/",
      },
      {
        nombre: "Canva Pro",
        desc: "Para thumbnails y diseño rápido. Esencial para YouTube y redes sociales.",
        tag: "Diseño",
        afiliado: null,
        gratis: false,
        precio: "$15/mes",
        destacado: false,
        link: "https://www.canva.com/",
      },
    ],
  },
];

export default function RecursosPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-4 block">Recursos curados</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Herramientas
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Solo listamos lo que probamos y usamos. Algunos links son de afiliados —
            si comprás a través de ellos, recibimos una comisión sin costo extra para vos.
            Así financiamos el newsletter gratuito.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 bg-verde/5 border border-verde/15 rounded-xl px-5 py-4 mb-14">
          <span className="text-verde text-lg mt-0.5">ℹ</span>
          <p className="text-white/50 text-sm leading-relaxed">
            <span className="text-verde font-semibold">Links de afiliado</span> — nos ayudan a financiar el newsletter.
            Solo recomendamos herramientas que usamos nosotros mismos o que consideramos genuinamente útiles para la comunidad.
          </p>
        </div>

        {/* Categorías */}
        <div className="space-y-16">
          {recursos.map((cat) => (
            <div key={cat.categoria}>

              {/* Separador de categoría */}
              <div className="flex items-center gap-4 mb-2">
                <div>
                  <h2 className="font-display text-xl font-bold text-white">
                    {cat.categoria}
                    {cat.subtitulo && (
                      <span className="text-white/30 font-normal ml-2 text-base">— {cat.subtitulo}</span>
                    )}
                  </h2>
                </div>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {cat.nota && (
                <p className="text-white/30 text-sm mb-6 italic">{cat.nota}</p>
              )}
              {!cat.nota && <div className="mb-6" />}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.items.map((item) => (
                  <a
                    key={item.nombre}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="card p-5 flex flex-col gap-3 group no-underline"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <h3 className="font-semibold text-white group-hover:text-verde transition-colors truncate">
                          {item.nombre}
                        </h3>
                        {item.destacado && (
                          <span className="badge badge-dorado shrink-0">Recomendado</span>
                        )}
                      </div>
                      <span className="text-white/20 group-hover:text-verde/60 transition-colors text-lg shrink-0">→</span>
                    </div>

                    {/* Descripción */}
                    <p className="text-white/45 text-sm leading-relaxed flex-1">
                      {item.desc}
                    </p>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="badge badge-neutral">{item.tag}</span>
                        {item.afiliado && (
                          <span className="badge badge-verde">{item.afiliado}</span>
                        )}
                      </div>
                      <span className={`text-sm font-semibold shrink-0 ${item.gratis ? "text-verde" : "text-white/35"}`}>
                        {item.gratis
                          ? "Gratis"
                          : ("precio" in item && item.precio)
                            ? (item as { precio?: string }).precio
                            : "Pago"}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA suscripción */}
        <div className="mt-20 card p-10 text-center">
          <p className="text-white/35 text-sm mb-2 uppercase tracking-wider font-semibold text-xs">
            Cada semana
          </p>
          <p className="font-display text-2xl font-bold mb-2">
            Analizamos nuevas herramientas en el newsletter
          </p>
          <p className="text-white/40 text-sm mb-8">
            Gratis. Sin spam. Solo lo que vale la pena.
          </p>
          <a href="/#newsletter" className="btn-primary">
            Suscribite gratis →
          </a>
        </div>

      </div>
    </div>
  );
}
