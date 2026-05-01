import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Libertad Financiera — La Impresora",
  description:
    "La libertad financiera no es un mito, es un sistema de 4 pasos. Finanzas personales, crypto, inversiones y el roadmap para que el dinero trabaje para vos. Para LATAM.",
};

const roadmap = [
  {
    paso: "01",
    titulo: "Protegé tu capital",
    subtitulo: "El dinero que perdés en inflación no vuelve",
    desc: "El primer paso no es invertir, es no seguir perdiendo. Stablecoins, dólares digitales y activos en divisas fuertes para que tu plata no se derrita. Aplica para Argentina, México, Venezuela y cualquier economía volátil.",
    color: "text-verde",
    border: "border-verde/30",
    bg: "bg-verde/5",
    icon: "🛡️",
    herramientas: ["USDC / USDT en Binance o Lemon", "Dólares digitales en billeteras crypto", "Ahorrar en BTC como reserva de valor"],
  },
  {
    paso: "02",
    titulo: "Generá ingresos extras",
    subtitulo: "Una sola fuente de ingresos es el riesgo más grande",
    desc: "AI, freelancing digital, contenido, afiliados. Hay formas de generar $500/mes adicionales sin dejar tu trabajo actual. El objetivo es tener al menos dos fuentes de ingreso antes de pensar en inversiones agresivas.",
    color: "text-dorado",
    border: "border-dorado/30",
    bg: "bg-dorado/5",
    icon: "💸",
    herramientas: ["Servicios de AI en dólares", "Afiliados y comisiones digitales", "Newsletter o contenido propio"],
  },
  {
    paso: "03",
    titulo: "Invertí en activos que escalan",
    subtitulo: "Crypto, tokenización y activos que te pagan mientras dormís",
    desc: "Con el capital protegido y los ingresos extras funcionando, llegó el momento de que la plata trabaje. Portafolio en Bitcoin, fracciones de inmuebles tokenizados y rendimiento en DeFi. Riesgo graduado según tu tolerancia.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    icon: "📈",
    herramientas: ["BTC + ETH como base del portafolio", "Activos tokenizados en LATAM", "Yield en stablecoins (5–10% anual)"],
  },
  {
    paso: "04",
    titulo: "Construí el sistema",
    subtitulo: "Cuando los ingresos pasivos superan tus gastos, sos libre",
    desc: "La libertad financiera no es jubilarte. Es tener la opción de no trabajar si no querés. Eso pasa cuando tus inversiones y activos generan más de lo que gastás. No es para ricos: es un sistema que cualquiera puede construir en 3–7 años.",
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/5",
    icon: "🔓",
    herramientas: ["Automatizaciones de ingresos", "Estructura legal/impositiva", "El número que necesitás calcular"],
  },
];

const posts = [
  {
    slug: "banco-tu-peor-enemigo",
    numero: "002",
    titulo: "Por qué tu banco es tu peor enemigo financiero (y qué hacer al respecto)",
    desc: "Te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Te mostramos la salida.",
    fecha: "6 Mayo 2026",
  },
  {
    slug: "stablecoins-latam",
    numero: "007",
    titulo: "Stablecoins en LATAM: cómo guardar dólares digitales sin un banco",
    desc: "USDT, USDC y DAI explicadas. Cómo usarlas para protegerte de la inflación y mover dólares sin restricciones.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "portafolio-cripto-500",
    numero: "008",
    titulo: "Cómo armar un portafolio cripto con $500 en 2026",
    desc: "Distribución concreta, qué comprar primero, cómo diversificar entre Bitcoin, ETH y stablecoins. Para el que empieza con poco.",
    fecha: "30 Abril 2026",
  },
  {
    slug: "gap-ai-oportunidad",
    numero: "001",
    titulo: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando",
    desc: "La oportunidad más grande de la década para generar ingresos extra desde LATAM.",
    fecha: "29 Abril 2026",
  },
];

const herramientasTienda = [
  {
    nombre: "Libro: La Impresora",
    desc: "El sistema completo para entender el dinero digital y construir tu portafolio desde cero.",
    precio: "Gratis",
    link: "/libros",
    cta: "Descargar gratis →",
    color: "bg-verde/10 text-verde border-verde/20",
  },
  {
    nombre: "Libro: AI para Ganar Plata",
    desc: "Cómo usar inteligencia artificial para generar ingresos reales. Herramientas y casos de uso.",
    precio: "Gratis",
    link: "/libros",
    cta: "Descargar gratis →",
    color: "bg-verde/10 text-verde border-verde/20",
  },
  {
    nombre: "Libro: Tokenización",
    desc: "Activos reales tokenizados explicados desde cero. Plataformas, riesgos y oportunidades en LATAM.",
    precio: "Gratis",
    link: "/libros",
    cta: "Descargar gratis →",
    color: "bg-verde/10 text-verde border-verde/20",
  },
  {
    nombre: "La Impresora Academy",
    desc: "6 módulos completos: crypto, AI, tokenización, DeFi, libertad financiera. El curso más completo de LATAM.",
    precio: "$197 USD",
    link: "/academy",
    cta: "Ver el curso →",
    color: "bg-dorado/10 text-dorado border-dorado/20",
  },
];

export default function LibertadFinancieraPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow" />
            Vertical Libertad Financiera
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            La libertad financiera<br />
            <span className="text-purple-400" style={{ textShadow: "0 0 30px rgba(192,132,252,0.4)" }}>
              no es un mito.
            </span><br />
            <span className="text-white text-4xl md:text-5xl">Es un sistema.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            No te lo enseñaron en la escuela.{" "}
            <strong className="text-white">
              Pero hay un roadmap concreto de 4 pasos que cualquier persona en LATAM puede seguir.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#roadmap"
              className="bg-purple-400 text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-purple-300 transition-all"
              style={{ boxShadow: "0 0 30px rgba(192,132,252,0.2)" }}
            >
              Ver el roadmap →
            </a>
            <a
              href="#newsletter"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-purple-400/30 hover:text-purple-400 transition-all"
            >
              Suscribite al newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Roadmap — 4 pasos */}
      <section id="roadmap" className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              El roadmap
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              4 pasos para que el dinero<br />
              <span className="text-purple-400">trabaje para vos</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              No importa cuánto ganás hoy. Importa el sistema que construís de acá para adelante.
            </p>
          </div>

          <div className="space-y-6">
            {roadmap.map((paso, i) => (
              <div key={paso.paso} className="gradient-border rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Número y flecha */}
                  <div className="flex md:flex-col items-center gap-3 md:gap-1">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 ${paso.border} ${paso.bg} shrink-0`}>
                      <span className={`text-2xl font-black ${paso.color}`}>{paso.paso}</span>
                    </div>
                    {i < roadmap.length - 1 && (
                      <div className="hidden md:block w-px h-8 bg-white/10 mt-2" />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{paso.icon}</span>
                      <div>
                        <h3 className={`text-2xl font-black ${paso.color}`}>{paso.titulo}</h3>
                        <p className="text-white/30 text-sm">{paso.subtitulo}</p>
                      </div>
                    </div>
                    <p className="text-white/60 leading-relaxed mb-4">{paso.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {paso.herramientas.map((h) => (
                        <span key={h} className={`text-xs px-3 py-1 rounded-full border ${paso.border} ${paso.bg} ${paso.color}`}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2">
                Artículos sobre{" "}
                <span className="text-purple-400">finanzas personales</span>
              </h2>
              <p className="text-white/40">El conocimiento que el sistema no quiere que tengas.</p>
            </div>
            <Link href="/blog" className="text-purple-400 text-sm hover:underline shrink-0">
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
                      <span className="text-xs font-bold px-2 py-1 rounded-full border bg-purple-400/10 text-purple-400 border-purple-400/20">
                        Libertad Financiera
                      </span>
                      <span className="text-white/20 text-xs">{post.fecha}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1 leading-tight hover:text-purple-400 transition-colors">
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

      {/* CTA Tienda */}
      <section className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Herramientas concretas
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Los libros y el curso que<br />
              <span className="text-purple-400">aceleran el proceso</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              El roadmap es gratis. Las herramientas para ejecutarlo más rápido también están acá.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {herramientasTienda.map((item) => (
              <Link
                key={item.nombre}
                href={item.link}
                className="gradient-border rounded-xl p-6 hover:scale-[1.02] transition-transform block"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-black text-lg leading-tight">{item.nombre}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border shrink-0 ${item.color}`}>
                    {item.precio}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className={`text-sm font-bold ${item.color.split(" ").find((c) => c.startsWith("text-"))}`}>
                  {item.cta}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tienda"
              className="inline-block gradient-border rounded-full px-8 py-4 font-black text-purple-400 hover:bg-purple-400/5 transition-colors"
            >
              Ver toda la tienda →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Newsletter de Libertad Financiera
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            El sistema que<br />
            <span className="text-purple-400" style={{ textShadow: "0 0 30px rgba(192,132,252,0.4)" }}>
              funciona, cada jueves
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Análisis concreto sobre cómo construir tu libertad financiera en LATAM.
            Sin hype, sin promesas vacías.{" "}
            <strong className="text-white">Gratis para siempre.</strong>
          </p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
