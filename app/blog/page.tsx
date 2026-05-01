import Link from "next/link";

const posts = [
  {
    slug: "gap-ai-oportunidad",
    numero: "001",
    titulo: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando",
    desc: "Analizamos el estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. La oportunidad más grande de la década.",
    tag: "AI",
    fecha: "29 Abril 2026",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  {
    slug: "banco-tu-peor-enemigo",
    numero: "002",
    titulo: "Por qué tu banco es tu peor enemigo financiero (y qué hacer al respecto)",
    desc: "Te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Esto es un sistema diseñado en tu contra. Te mostramos la salida.",
    tag: "Crypto & Mercados",
    fecha: "6 Mayo 2026",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    slug: "tokenizacion-campo-paraguay",
    numero: "003",
    titulo: "Tokenización: cómo un campo en Paraguay puede ser tuyo con $50",
    desc: "La tokenización de activos reales permite que cualquier persona invierta en tierra, inmuebles o commodities con tickets mínimos. El acceso democratizado a la inversión real llegó a LATAM.",
    tag: "Tokenización",
    fecha: "13 Mayo 2026",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    slug: "tokenizacion-activos-como-invertir",
    numero: "004",
    titulo: "Qué es la tokenización de activos y cómo invertir desde $50 en 2026",
    desc: "Convertir un departamento, un campo o un bono en tokens digitales ya no es ciencia ficción. Te explicamos cómo funciona, ejemplos reales en LATAM y dónde empezar con $50.",
    tag: "Tokenización",
    fecha: "30 Abril 2026",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    slug: "herramientas-ai-para-ganar-dinero",
    numero: "005",
    titulo: "Las mejores herramientas de AI para ganar dinero en 2026 (probadas)",
    desc: "8 herramientas de inteligencia artificial con precio, caso de uso real y cuánto podés cobrar con cada una. Para freelancers y dueños de negocios en LATAM.",
    tag: "AI para negocios",
    fecha: "30 Abril 2026",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  {
    slug: "como-funciona-el-dinero-crypto",
    numero: "006",
    titulo: "Cómo funciona el dinero crypto: guía completa para principiantes en LATAM",
    desc: "Qué es Bitcoin, cómo funcionan las wallets, cómo comprar crypto en Argentina, México y el resto de LATAM, y cómo empezar con poco dinero. Sin jerga.",
    tag: "Crypto",
    fecha: "30 Abril 2026",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    slug: "como-usar-chatgpt-ganar-dinero",
    numero: "007",
    titulo: "Cómo usar ChatGPT para ganar dinero en 2026: 8 formas reales",
    desc: "8 formas concretas de usar ChatGPT para generar ingresos en LATAM. Con instrucciones reales, prompts probados y precios de mercado. Para freelancers, emprendedores y profesionales.",
    tag: "AI para negocios",
    fecha: "30 Abril 2026",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Blog & Ediciones
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Todo lo que<br />
            <span className="text-verde">necesitás saber</span>
          </h1>
          <p className="text-white/40 text-lg">
            Cada artículo es una edición del newsletter expandida. Sin paywall.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="gradient-border rounded-2xl p-6 md:p-8 hover:scale-[1.01] transition-transform block">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-white/20 font-mono text-sm shrink-0">#{post.numero}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full border ${post.tagColor}`}>
                        {post.tag}
                      </span>
                      <span className="text-white/20 text-xs">{post.fecha}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 leading-tight hover:text-verde transition-colors">
                      {post.titulo}
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed">{post.desc}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/30 text-sm">
            ¿Querés recibirlos antes que nadie?{" "}
            <a href="/#newsletter" className="text-verde hover:underline">
              Suscribite al newsletter gratis →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
