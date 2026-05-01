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
    slug: "bot-whatsapp-negocio",
    numero: "003",
    titulo: "El bot que atiende clientes 24/7 y cuesta menos que un café por día",
    desc: "WhatsApp + AI = el empleado más barato y eficiente que vas a tener. Cómo empresas en Argentina lo están usando para triplicar conversiones.",
    tag: "AI para negocios",
    fecha: "15 Abril 2026",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  {
    slug: "crypto-vs-banco",
    numero: "004",
    titulo: "Tu banco te cobra por guardar tu plata. Esto es una locura (y hay salida).",
    desc: "Comisiones, inflación, límites de transferencia. El sistema bancario tradicional juega en contra tuyo. Cómo salir sin quedarte afuera del sistema.",
    tag: "Crypto",
    fecha: "8 Abril 2026",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
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
