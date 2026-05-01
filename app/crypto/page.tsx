import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Crypto & Mercados — La Impresora",
  description:
    "Todo sobre crypto sin bullshit. Análisis de mercado, guías para principiantes, stablecoins, DeFi y exchanges explicados para LATAM. Cada jueves en tu email.",
};

const posts = [
  {
    slug: "banco-tu-peor-enemigo",
    numero: "002",
    titulo: "Por qué tu banco es tu peor enemigo financiero (y qué hacer al respecto)",
    desc: "Te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Esto es un sistema diseñado en tu contra. Te mostramos la salida.",
    fecha: "6 Mayo 2026",
  },
  {
    slug: "como-funciona-el-dinero-crypto",
    numero: "006",
    titulo: "Cómo funciona el dinero crypto: guía completa para principiantes en LATAM",
    desc: "Qué es Bitcoin, cómo funcionan las wallets, cómo comprar crypto en Argentina, México y el resto de LATAM, y cómo empezar con poco dinero. Sin jerga.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "stablecoins-latam",
    numero: "007",
    titulo: "Stablecoins en LATAM: cómo guardar dólares digitales sin un banco",
    desc: "USDT, USDC y DAI explicadas. Cómo usarlas para protegerte de la inflación y mover dólares sin restricciones en Argentina, México y Colombia.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "portafolio-cripto-500",
    numero: "008",
    titulo: "Cómo armar un portafolio cripto con $500 en 2026",
    desc: "Distribución concreta, qué comprar primero, cómo diversificar entre Bitcoin, ETH y stablecoins. Para el que empieza con poco y quiere hacerlo bien.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "como-declarar-crypto-argentina",
    numero: "009",
    titulo: "Cómo declarar crypto en Argentina: guía 2026",
    desc: "Todo lo que necesitás saber para no quedar expuesto ante la AFIP. Bienes personales, ganancias, el tratamiento impositivo de las stablecoins y los exchanges.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "que-es-defi-como-funciona",
    numero: "010",
    titulo: "Qué es DeFi y cómo funciona: guía completa sin tecnicismos",
    desc: "Finanzas descentralizadas explicadas desde cero. Yield farming, lending, DEXs y cómo generar rendimiento con tu crypto sin depender de ningún exchange.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "bitcoin-halving-que-es",
    numero: "011",
    titulo: "Bitcoin Halving: qué es y por qué importa para el precio",
    desc: "Cada cuatro años el ritmo de emisión de Bitcoin se corta a la mitad. Qué pasó después de los halvings anteriores y qué dice la historia sobre lo que viene.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "wallets-crypto-cuales-son-mejores",
    numero: "012",
    titulo: "Las mejores wallets de crypto en 2026: cuál usar según tu caso",
    desc: "MetaMask, Ledger, Trust Wallet y más. Comparativa honesta entre wallets custodiales y self-custody. Cuándo necesitás hardware y cuándo no.",
    fecha: "30 Abril 2026",
  },
];

const exchanges = [
  {
    nombre: "Binance",
    desc: "El exchange más grande del mundo. Disponible en toda LATAM. Ideal para empezar.",
    tag: "Exchange global",
    link: "#",
  },
  {
    nombre: "Bybit",
    desc: "Excelente para trading spot y derivados. Interface más limpia que Binance.",
    tag: "Exchange global",
    link: "#",
  },
  {
    nombre: "Bitso",
    desc: "El exchange líder en México. Perfecto si operás en pesos mexicanos.",
    tag: "México",
    link: "#",
  },
  {
    nombre: "Lemon Cash",
    desc: "El más simple para Argentina. Ideal para el primer paso con crypto.",
    tag: "Argentina",
    link: "#",
  },
];

const wallets = [
  {
    nombre: "Ledger Nano X",
    desc: "La hardware wallet más confiable. Si tenés más de $1,000 en crypto, la necesitás.",
    tag: "Hardware wallet",
    precio: "~$149 USD",
    link: "#",
  },
  {
    nombre: "MetaMask",
    desc: "La wallet de software más usada. Esencial para DeFi y web3.",
    tag: "Software wallet",
    precio: "Gratis",
    link: "#",
  },
  {
    nombre: "Trust Wallet",
    desc: "Alternativa a MetaMask, más amigable para principiantes.",
    tag: "Software wallet",
    precio: "Gratis",
    link: "#",
  },
];

const herramientas = [
  {
    nombre: "CoinMarketCap",
    desc: "El índice de referencia para precios, volumen y capitalización de mercado de todas las cryptos.",
    tag: "Análisis de mercado",
    precio: "Gratis",
    link: "#",
  },
  {
    nombre: "TradingView",
    desc: "Los mejores gráficos del mercado. El estándar profesional para análisis técnico.",
    tag: "Gráficos y análisis",
    precio: "Plan gratis disponible",
    link: "#",
  },
  {
    nombre: "Glassnode",
    desc: "On-chain analytics. Para entender qué están haciendo las ballenas y los holders.",
    tag: "On-chain data",
    precio: "Desde $29/mes",
    link: "#",
  },
  {
    nombre: "DeFiLlama",
    desc: "El tracker de TVL (Total Value Locked) en DeFi más usado. Gratis y sin bullshit.",
    tag: "DeFi analytics",
    precio: "Gratis",
    link: "#",
  },
];

export default function CryptoPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dorado/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dorado/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-dorado rounded-full animate-pulse-slow" />
            Vertical Crypto & Mercados
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            Todo sobre crypto.<br />
            <span className="text-dorado" style={{ textShadow: "0 0 30px rgba(255,215,0,0.4)" }}>
              Sin bullshit.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Análisis de mercado, guías para empezar y oportunidades reales.{" "}
            <strong className="text-white">Sin hype, sin gurúes, sin promesas vacías.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#newsletter"
              className="bg-dorado text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-dorado/90 transition-all"
              style={{ boxShadow: "0 0 30px rgba(255,215,0,0.2)" }}
            >
              El análisis cripto del jueves →
            </a>
            <Link
              href="/blog"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-dorado/30 hover:text-dorado transition-all"
            >
              Leer todos los artículos
            </Link>
          </div>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6 bg-gris">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2">
                Artículos de <span className="text-dorado">Crypto</span>
              </h2>
              <p className="text-white/40">Todo lo que necesitás saber, sin el ruido del mercado.</p>
            </div>
            <Link href="/blog" className="text-dorado text-sm hover:underline shrink-0">
              Ver todos →
            </Link>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="gradient-border rounded-2xl p-6 hover:scale-[1.01] transition-transform block"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-white/20 font-mono text-sm shrink-0">#{post.numero}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-2 py-1 rounded-full border bg-dorado/10 text-dorado border-dorado/20">
                        Crypto
                      </span>
                      <span className="text-white/20 text-xs">{post.fecha}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1 leading-tight hover:text-dorado transition-colors">
                      {post.titulo}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{post.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exchanges */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Recursos curados
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              Los mejores <span className="text-dorado">exchanges</span> para LATAM
            </h2>
            <p className="text-white/40">
              Probados. Sin comisiones ocultas. Con disponibilidad en Argentina, México, Colombia y más.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {exchanges.map((item) => (
              <a
                key={item.nombre}
                href={item.link}
                className="gradient-border rounded-xl p-5 hover:scale-[1.02] transition-transform block"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-black text-lg">{item.nombre}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-dorado/10 text-dorado border-dorado/20 shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Wallets */}
          <div className="mb-10">
            <h2 className="text-3xl font-black mb-2">
              Wallets <span className="text-dorado">recomendadas</span>
            </h2>
            <p className="text-white/40">Tu crypto, tu custodia. Comparativa honesta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {wallets.map((item) => (
              <a
                key={item.nombre}
                href={item.link}
                className="gradient-border rounded-xl p-5 hover:scale-[1.02] transition-transform block"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-black text-base">{item.nombre}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-white/5 text-white/40 border-white/10 shrink-0">
                    {item.precio}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-2">{item.desc}</p>
                <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </a>
            ))}
          </div>

          {/* Herramientas de análisis */}
          <div className="mb-10">
            <h2 className="text-3xl font-black mb-2">
              Herramientas de <span className="text-dorado">análisis</span>
            </h2>
            <p className="text-white/40">Las que usan los traders serios. Algunas son gratis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {herramientas.map((item) => (
              <a
                key={item.nombre}
                href={item.link}
                className="gradient-border rounded-xl p-5 hover:scale-[1.02] transition-transform block"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-black text-lg">{item.nombre}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-white/5 text-white/40 border-white/10 shrink-0">
                    {item.precio}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-2">{item.desc}</p>
                <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Links relacionados */}
      <section className="py-16 px-6 bg-gris border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8 text-center">
            Seguí aprendiendo sobre <span className="text-dorado">crypto</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: "Libro: La Impresora", href: "/libros" },
              { label: "Recursos completos", href: "/recursos" },
              { label: "Academy — Módulo Crypto", href: "/academy" },
              { label: "Canal de YouTube", href: "/canal" },
              { label: "Programa de afiliados", href: "/afiliados" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="gradient-border rounded-full px-5 py-2.5 text-sm font-semibold text-white/60 hover:text-dorado transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Newsletter de Crypto
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            El análisis cripto<br />
            <span className="text-dorado" style={{ textShadow: "0 0 30px rgba(255,215,0,0.4)" }}>
              de la semana, cada jueves
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Mercados, oportunidades y noticias que importan. Nada de hype.{" "}
            <strong className="text-white">Gratis para siempre.</strong>
          </p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
