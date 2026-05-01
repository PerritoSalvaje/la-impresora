export const metadata = {
  title: "Recursos — La Impresora",
  description: "Las mejores herramientas para crypto, AI y libertad financiera en LATAM. Curadas y probadas por La Impresora.",
};

const recursos = [
  {
    categoria: "Para empezar en crypto",
    emoji: "₿",
    color: "text-dorado",
    items: [
      {
        nombre: "Binance",
        desc: "El exchange más grande del mundo. Disponible en toda LATAM. Bueno para empezar.",
        tag: "Exchange",
        gratis: true,
        link: "#",
      },
      {
        nombre: "Bybit",
        desc: "Excelente para trading spot y derivados. Interface más limpia que Binance.",
        tag: "Exchange",
        gratis: true,
        link: "#",
      },
      {
        nombre: "Bitso",
        desc: "El exchange líder en México. Perfecto si operás en pesos mexicanos.",
        tag: "Exchange · México",
        gratis: true,
        link: "#",
      },
      {
        nombre: "Lemon Cash",
        desc: "El exchange más simple para Argentina. Ideal para el primer paso.",
        tag: "Exchange · Argentina",
        gratis: true,
        link: "#",
      },
    ],
  },
  {
    categoria: "Wallets (guardar tu crypto)",
    emoji: "👛",
    color: "text-blue-400",
    items: [
      {
        nombre: "Ledger Nano X",
        desc: "La hardware wallet más confiable del mercado. Si tenés más de $1,000 en crypto, la necesitás.",
        tag: "Hardware Wallet",
        gratis: false,
        precio: "~$149 USD",
        link: "#",
      },
      {
        nombre: "MetaMask",
        desc: "La wallet de software más usada. Esencial para DeFi y web3.",
        tag: "Software Wallet",
        gratis: true,
        link: "#",
      },
      {
        nombre: "Trust Wallet",
        desc: "Alternativa a MetaMask, más amigable para principiantes.",
        tag: "Software Wallet",
        gratis: true,
        link: "#",
      },
    ],
  },
  {
    categoria: "Herramientas AI que usamos",
    emoji: "🤖",
    color: "text-verde",
    items: [
      {
        nombre: "Claude (Anthropic)",
        desc: "La AI que usamos para todo el contenido de La Impresora. La mejor para análisis extenso y escritura.",
        tag: "AI General",
        gratis: false,
        precio: "$20 USD/mes",
        link: "#",
      },
      {
        nombre: "Perplexity AI",
        desc: "Para research e investigación con fuentes. Reemplaza a Google para búsquedas complejas.",
        tag: "AI Research",
        gratis: false,
        precio: "$20 USD/mes",
        link: "#",
      },
      {
        nombre: "ElevenLabs",
        desc: "Voces AI en español de altísima calidad. Usada para los videos del canal.",
        tag: "AI Voz",
        gratis: false,
        precio: "Desde $22/mes",
        link: "#",
      },
      {
        nombre: "Make.com",
        desc: "Para automatizar flujos de trabajo entre herramientas. No requiere programar.",
        tag: "Automatización",
        gratis: false,
        precio: "Desde $9/mes",
        link: "#",
      },
    ],
  },
  {
    categoria: "Para DeFi y rendimiento",
    emoji: "📈",
    color: "text-purple-400",
    items: [
      {
        nombre: "Aave",
        desc: "El protocolo DeFi más confiable para generar yield en stablecoins. 5-8% anual en USDC.",
        tag: "DeFi Lending",
        gratis: true,
        link: "#",
      },
      {
        nombre: "Uniswap",
        desc: "El exchange descentralizado líder. Para hacer swap entre tokens sin intermediarios.",
        tag: "DEX",
        gratis: true,
        link: "#",
      },
    ],
  },
  {
    categoria: "Para crear contenido con AI",
    emoji: "✍️",
    color: "text-blue-400",
    items: [
      {
        nombre: "InVideo AI",
        desc: "Genera videos completos desde un script. El que usamos para el canal de YouTube.",
        tag: "Video AI",
        gratis: false,
        precio: "Desde $30/mes",
        link: "#",
      },
      {
        nombre: "Beehiiv",
        desc: "La mejor plataforma de newsletter. La que usamos para La Impresora.",
        tag: "Newsletter",
        gratis: true,
        link: "#",
      },
      {
        nombre: "Canva Pro",
        desc: "Para thumbnails y diseño rápido. Esencial para YouTube.",
        tag: "Diseño",
        gratis: false,
        precio: "$15/mes",
        link: "#",
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
            Solo listamos lo que probamos. Algunos links son de afiliados — si comprás
            a través de ellos, nos llevamos una pequeña comisión sin costo extra para vos.
            Así financiamos el newsletter gratuito.
          </p>
        </div>

        <div className="space-y-16">
          {recursos.map((cat) => (
            <div key={cat.categoria}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.emoji}</span>
                <h2 className={`text-2xl font-black ${cat.color}`}>{cat.categoria}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <a
                    key={item.nombre}
                    href={item.link}
                    className="gradient-border rounded-xl p-5 hover:scale-[1.02] transition-transform block"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-black text-lg">{item.nombre}</h3>
                      {item.gratis ? (
                        <span className="text-xs font-bold px-2 py-1 rounded-full border bg-verde/10 text-verde border-verde/20 shrink-0">
                          Gratis
                        </span>
                      ) : (
                        <span className="text-xs font-bold px-2 py-1 rounded-full border bg-white/5 text-white/40 border-white/10 shrink-0">
                          {item.precio}
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-3">{item.desc}</p>
                    <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 gradient-border rounded-2xl p-8 text-center">
          <p className="text-white/40 mb-2">¿Falta alguna herramienta?</p>
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
