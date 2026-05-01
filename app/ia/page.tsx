import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "AI para Ganar Plata — La Impresora",
  description:
    "Inteligencia artificial aplicada a negocios reales en LATAM. Herramientas, casos de uso y modelos de ingreso con AI. Aprende a usar AI para generar dinero, no para perder tiempo.",
};

const posts = [
  {
    slug: "gap-ai-oportunidad",
    numero: "001",
    titulo: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando",
    desc: "Analizamos el estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. La oportunidad más grande de la década.",
    fecha: "29 Abril 2026",
  },
  {
    slug: "herramientas-ai-para-ganar-dinero",
    numero: "005",
    titulo: "Las mejores herramientas de AI para ganar dinero en 2026 (probadas)",
    desc: "8 herramientas de inteligencia artificial con precio, caso de uso real y cuánto podés cobrar con cada una. Para freelancers y dueños de negocios en LATAM.",
    fecha: "30 Abril 2026",
  },
];

const herramientas = [
  {
    numero: "01",
    nombre: "Claude (Anthropic)",
    desc: "La mejor AI para análisis extenso, escritura de calidad y razonamiento complejo. La que usamos para todo el contenido de La Impresora.",
    uso: "Consultoría, copywriting, análisis",
    precio: "$20 USD/mes",
    link: "#",
    afiliado: true,
  },
  {
    numero: "02",
    nombre: "ChatGPT (OpenAI)",
    desc: "El más conocido. Ideal para automatización de tareas repetitivas, soporte al cliente y generación de contenido masivo.",
    uso: "Automatización, contenido, código",
    precio: "$20 USD/mes",
    link: "#",
    afiliado: false,
  },
  {
    numero: "03",
    nombre: "Perplexity AI",
    desc: "AI con búsqueda en tiempo real y fuentes verificables. Reemplaza a Google para research de negocios.",
    uso: "Research, investigación de mercado",
    precio: "$20 USD/mes",
    link: "#",
    afiliado: true,
  },
  {
    numero: "04",
    nombre: "ElevenLabs",
    desc: "Voces AI en español de calidad broadcasting. Usada para los videos del canal. Escala tu producción de contenido x10.",
    uso: "Podcasts, YouTube, cursos",
    precio: "Desde $22/mes",
    link: "#",
    afiliado: true,
  },
  {
    numero: "05",
    nombre: "Make.com",
    desc: "Automatiza flujos entre herramientas sin programar. Conecta tu CRM, email, redes sociales y más.",
    uso: "Automatización de negocios",
    precio: "Desde $9/mes",
    link: "#",
    afiliado: true,
  },
  {
    numero: "06",
    nombre: "Midjourney",
    desc: "Imágenes generadas por AI de nivel profesional. Para thumbnails, branding y material de marketing.",
    uso: "Diseño, marketing visual",
    precio: "Desde $10/mes",
    link: "#",
    afiliado: false,
  },
  {
    numero: "07",
    nombre: "InVideo AI",
    desc: "Genera videos completos desde un script. El que usamos para YouTube. Sin cámara, sin edición manual.",
    uso: "YouTube, redes sociales, cursos",
    precio: "Desde $30/mes",
    link: "#",
    afiliado: true,
  },
];

const modelos = [
  {
    titulo: "Freelancer AI",
    desc: "Ofrecé servicios de copywriting, análisis de datos o creación de contenido usando AI. Clientes pagan por resultados, vos usás herramientas que cuestan $50/mes.",
    ingreso: "$500–$3,000/mes",
    color: "text-verde",
    bg: "bg-verde/5 border-verde/20",
  },
  {
    titulo: "Agencia de contenido AI",
    desc: "Escalá el modelo freelancer: automatizá la producción y manejá múltiples clientes con el mismo esfuerzo. El volumen es la clave.",
    ingreso: "$2,000–$10,000/mes",
    color: "text-dorado",
    bg: "bg-dorado/5 border-dorado/20",
  },
  {
    titulo: "Info-producto AI",
    desc: "Creá y vendé cursos, guías o templates sobre cómo usar AI en nichos específicos. El conocimiento empaquetado genera ingresos pasivos.",
    ingreso: "$1,000–$5,000/mes",
    color: "text-blue-400",
    bg: "bg-blue-400/5 border-blue-400/20",
  },
];

export default function IAPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-verde/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-verde/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-verde rounded-full animate-pulse-slow" />
            Vertical AI & Negocios
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            AI para hacer más plata,<br />
            <span className="text-verde verde-text-glow">no para perder tiempo</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Herramientas concretas, casos de uso reales y modelos de negocio que ya funcionan.{" "}
            <strong className="text-white">Para LATAM, en 2026.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#newsletter"
              className="bg-verde text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-verde/90 transition-all verde-glow"
            >
              Recibir el análisis semanal →
            </a>
            <Link
              href="/academy"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-verde/30 hover:text-verde transition-all"
            >
              Ver el módulo de AI →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats rápidos */}
      <section className="py-10 px-6 border-y border-white/5" style={{ background: "rgba(0,255,135,0.02)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "80%", label: "de las tareas de negocios automatizables hoy" },
            { num: "<10%", label: "de personas en LATAM lo saben usar para ganar" },
            { num: "7", label: "herramientas esenciales curadas" },
            { num: "3", label: "modelos de ingreso probados" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black text-verde verde-text-glow">{stat.num}</div>
              <div className="text-white/40 text-xs mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6 bg-gris">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2">
                Artículos sobre <span className="text-verde">AI</span>
              </h2>
              <p className="text-white/40">Casos reales, herramientas y análisis. Sin hype.</p>
            </div>
            <Link href="/blog" className="text-verde text-sm hover:underline shrink-0">
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
                      <span className="text-xs font-bold px-2 py-1 rounded-full border bg-verde/10 text-verde border-verde/20">
                        AI & Negocios
                      </span>
                      <span className="text-white/20 text-xs">{post.fecha}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1 leading-tight hover:text-verde transition-colors">
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

      {/* Las 7 herramientas esenciales */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Recursos curados
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Las 7 herramientas esenciales<br />
              <span className="text-verde">con links de afiliado</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Solo listamos lo que usamos y probamos. Si comprás a través de nuestros links,
              nos llevamos una pequeña comisión sin costo extra para vos.
              Así financiamos el newsletter gratuito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {herramientas.map((item) => (
              <a
                key={item.nombre}
                href={item.link}
                className="gradient-border rounded-xl p-5 hover:scale-[1.02] transition-transform block"
              >
                <div className="flex items-start gap-4">
                  <span className="text-verde font-black font-mono text-lg shrink-0">{item.numero}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-black text-lg leading-tight">{item.nombre}</h3>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full border bg-white/5 text-white/40 border-white/10 whitespace-nowrap">
                          {item.precio}
                        </span>
                        {item.afiliado && (
                          <span className="text-xs text-verde/50">afiliado</span>
                        )}
                      </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-2">{item.desc}</p>
                    <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded-full">
                      {item.uso}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos de negocio */}
      <section className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              3 modelos de negocio<br />
              <span className="text-verde">que ya funcionan en LATAM</span>
            </h2>
            <p className="text-white/40">No teoría. Casos reales con números reales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modelos.map((m) => (
              <div key={m.titulo} className="gradient-border rounded-2xl p-6">
                <h3 className={`text-xl font-black mb-3 ${m.color}`}>{m.titulo}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${m.bg} ${m.color}`}>
                  {m.ingreso}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/academy"
              className="inline-block gradient-border rounded-full px-8 py-4 font-black text-verde hover:bg-verde/5 transition-colors"
            >
              Ver el módulo 3 del curso — AI para ganar plata →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Academy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Academy — Módulo 3
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Las 7 herramientas con ROI demostrado.<br />
              <span className="text-verde">Aplicadas paso a paso.</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              El módulo 3 de La Impresora Academy cubre exactamente esto: las herramientas,
              los modelos de negocio y cómo cotizar servicios de AI en dólares desde LATAM.
            </p>
            <Link
              href="/academy"
              className="inline-block bg-verde text-oscuro font-black px-10 py-4 rounded-full hover:bg-verde/90 transition-all verde-glow"
            >
              Ver el curso completo →
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
