import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Tokenización de Activos — La Impresora",
  description:
    "Invertí en inmuebles, campos y commodities desde $50. La tokenización de activos reales explicada para LATAM. Plataformas disponibles, cómo funciona y dónde empezar.",
};

const posts = [
  {
    slug: "tokenizacion-campo-paraguay",
    numero: "003",
    titulo: "Tokenización: cómo un campo en Paraguay puede ser tuyo con $50",
    desc: "La tokenización de activos reales permite que cualquier persona invierta en tierra, inmuebles o commodities con tickets mínimos. El acceso democratizado a la inversión real llegó a LATAM.",
    fecha: "13 Mayo 2026",
  },
  {
    slug: "tokenizacion-activos-como-invertir",
    numero: "004",
    titulo: "Qué es la tokenización de activos y cómo invertir desde $50 en 2026",
    desc: "Convertir un departamento, un campo o un bono en tokens digitales ya no es ciencia ficción. Te explicamos cómo funciona, ejemplos reales en LATAM y dónde empezar con $50.",
    fecha: "30 Abril 2026",
  },
];

const plataformas = [
  {
    nombre: "Agrotoken",
    pais: "Argentina / LATAM",
    desc: "Tokenización de granos. Convertí soja, maíz y trigo en tokens digitales respaldados por mercadería real. Disponible en Argentina, Brasil y Paraguay.",
    tipo: "Agro & Commodities",
    ticket: "Desde $100 USD",
    link: "#",
  },
  {
    nombre: "Ekuipu",
    pais: "México",
    desc: "Plataforma mexicana de tokenización de activos financieros. Portafolios diversificados en tokens accesibles para el inversor minorista.",
    tipo: "Activos financieros",
    ticket: "Desde $50 USD",
    link: "#",
  },
  {
    nombre: "Partico",
    pais: "Argentina",
    desc: "Fracciones de inmuebles premium en Argentina tokenizadas en la blockchain. Invertís en propiedades y recibís parte del alquiler.",
    tipo: "Real estate",
    ticket: "Desde $100 USD",
    link: "#",
  },
  {
    nombre: "RealT",
    pais: "USA / Global",
    desc: "La plataforma líder de tokenización de propiedades a nivel global. Disponible para inversores de LATAM con USDC.",
    tipo: "Real estate",
    ticket: "Desde $50 USD",
    link: "#",
  },
  {
    nombre: "Ondo Finance",
    pais: "Global",
    desc: "Tokenización de bonos del Tesoro de EE.UU. Rendimiento en dólares con respaldo en activos del gobierno americano.",
    tipo: "Deuda soberana",
    ticket: "Desde $100 USD",
    link: "#",
  },
  {
    nombre: "Centrifuge",
    pais: "Global / DeFi",
    desc: "Protocolo DeFi para tokenizar activos del mundo real: facturas, hipotecas, préstamos. Rendimiento en stablecoins.",
    tipo: "DeFi + RWA",
    ticket: "Variable",
    link: "#",
  },
];

export default function TokenizacionPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow" />
            Vertical Tokenización
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            Invertí en activos reales<br />
            <span className="text-blue-400" style={{ textShadow: "0 0 30px rgba(96,165,250,0.4)" }}>
              desde $50
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Inmuebles, campos y bonos convertidos en tokens digitales.{" "}
            <strong className="text-white">El acceso democratizado a la inversión real llegó a LATAM.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#newsletter"
              className="bg-blue-400 text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-blue-300 transition-all"
              style={{ boxShadow: "0 0 30px rgba(96,165,250,0.2)" }}
            >
              Recibir el análisis semanal →
            </a>
            <Link
              href="/blog"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-blue-400/30 hover:text-blue-400 transition-all"
            >
              Leer todos los artículos
            </Link>
          </div>
        </div>
      </section>

      {/* Qué es tokenización — 3 párrafos */}
      <section className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              La explicación simple
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              ¿Qué es la tokenización<br />
              <span className="text-blue-400">y por qué importa?</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="gradient-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-black text-blue-400 mb-3">
                Un activo real convertido en tokens digitales
              </h3>
              <p className="text-white/60 leading-relaxed">
                Imaginate que un campo de 100 hectáreas en Paraguay vale $500,000 USD. Hasta hace poco,
                solo podía comprarlo alguien con medio millón de dólares en la mano. Con tokenización,
                ese campo se divide en 10,000 tokens de $50 cada uno. Cualquier persona desde cualquier
                parte del mundo puede ser dueña de una fracción proporcional del activo y recibir los
                rendimientos que genera: el alquiler, la venta de la cosecha, o la apreciación del inmueble.
              </p>
            </div>

            <div className="gradient-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-black text-blue-400 mb-3">
                La blockchain como registro de propiedad
              </h3>
              <p className="text-white/60 leading-relaxed">
                La diferencia clave con un fondo de inversión tradicional es la transparencia y la liquidez.
                Tu participación queda registrada en una blockchain pública, inmutable y verificable en tiempo
                real. No dependés de un banco que te diga cuánto tenés. No hay intermediarios que se lleven
                el 3% de comisión por gestionarte el activo. Tu token es tuyo, y en muchos casos podés
                venderlo a otro inversor sin esperar años a que el fondo se liquide.
              </p>
            </div>

            <div className="gradient-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-black text-blue-400 mb-3">
                Por qué LATAM lidera esta tendencia
              </h3>
              <p className="text-white/60 leading-relaxed">
                En Argentina, México, Colombia y Paraguay ya operan plataformas de tokenización con activos
                locales. La región tiene dos ventajas únicas: activos reales de altísimo valor (tierra agrícola,
                inmuebles, commodities) y una población con experiencia en operar fuera del sistema financiero
                tradicional. El mundo está despertando a esto. En LATAM ya está pasando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2">
                Artículos sobre <span className="text-blue-400">tokenización</span>
              </h2>
              <p className="text-white/40">Casos reales, plataformas y análisis del mercado.</p>
            </div>
            <Link href="/blog" className="text-blue-400 text-sm hover:underline shrink-0">
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
                      <span className="text-xs font-bold px-2 py-1 rounded-full border bg-blue-400/10 text-blue-400 border-blue-400/20">
                        Tokenización
                      </span>
                      <span className="text-white/20 text-xs">{post.fecha}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1 leading-tight hover:text-blue-400 transition-colors">
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

      {/* Plataformas LATAM */}
      <section className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Plataformas disponibles
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Dónde invertir en activos<br />
              <span className="text-blue-400">tokenizados desde LATAM</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Plataformas activas, con regulación y operativas hoy. Tickets mínimos desde $50 USD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {plataformas.map((p) => (
              <a
                key={p.nombre}
                href={p.link}
                className="gradient-border rounded-xl p-6 hover:scale-[1.02] transition-transform block"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-black text-xl mb-0.5">{p.nombre}</h3>
                    <span className="text-white/30 text-xs">{p.pais}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-blue-400/10 text-blue-400 border-blue-400/20 shrink-0 whitespace-nowrap">
                    {p.tipo}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded-full">
                    Ticket mínimo: {p.ticket}
                  </span>
                  <span className="text-blue-400 text-xs font-bold">Ver plataforma →</span>
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-white/20 text-xs mt-6">
            * Siempre verificá la regulación local antes de invertir. Esto no es asesoramiento financiero.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Newsletter de Tokenización
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Nuevas plataformas,<br />
            <span className="text-blue-400" style={{ textShadow: "0 0 30px rgba(96,165,250,0.4)" }}>
              oportunidades y análisis
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            El mercado de activos tokenizados crece cada semana. Recibí las novedades relevantes para LATAM
            antes que nadie. <strong className="text-white">Gratis, cada jueves.</strong>
          </p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
