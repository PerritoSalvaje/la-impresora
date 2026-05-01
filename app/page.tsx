import Newsletter from "@/components/Newsletter";
import Link from "next/link";

const verticales = [
  {
    icon: "₿",
    title: "Crypto & Mercados",
    desc: "Drama, análisis y oportunidades reales. Lo que pasa en el mercado explicado sin tecnicismos.",
    color: "text-dorado",
    bg: "bg-dorado/5 border-dorado/20",
  },
  {
    icon: "🤖",
    title: "AI para ganar plata",
    desc: "Casos reales de cómo la inteligencia artificial está creando negocios nuevos. Herramientas concretas.",
    color: "text-verde",
    bg: "bg-verde/5 border-verde/20",
  },
  {
    icon: "🏠",
    title: "Tokenización",
    desc: "Inmuebles, arte, commodities. El mundo real se está convirtiendo en crypto y la mayoría no lo ve.",
    color: "text-blue-400",
    bg: "bg-blue-400/5 border-blue-400/20",
  },
  {
    icon: "🔓",
    title: "Libertad Financiera",
    desc: "Cómo estructurar tu dinero para que trabaje sin vos. El sistema que no te enseñaron en la escuela.",
    color: "text-purple-400",
    bg: "bg-purple-400/5 border-purple-400/20",
  },
];

const stats = [
  { numero: "+2,400", label: "suscriptores" },
  { numero: "100%", label: "gratis siempre" },
  { numero: "1 vez", label: "por semana, jueves" },
  { numero: "0", label: "bullshit" },
];

const ultimasEdiciones = [
  {
    slug: "gap-ai-oportunidad",
    numero: "001",
    titulo: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando",
    desc: "Analizamos el estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. La oportunidad más grande de la década.",
    tag: "AI",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  {
    slug: "banco-tu-peor-enemigo",
    numero: "002",
    titulo: "Por qué tu banco es tu peor enemigo financiero (y qué hacer al respecto)",
    desc: "Te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Te mostramos la salida.",
    tag: "Crypto & Mercados",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    slug: "tokenizacion-campo-paraguay",
    numero: "003",
    titulo: "Tokenización: cómo un campo en Paraguay puede ser tuyo con $50",
    desc: "La tokenización de activos reales permite que cualquier persona invierta en tierra, inmuebles o commodities con tickets mínimos.",
    tag: "Tokenización",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-verde/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-verde/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-verde rounded-full animate-pulse-slow" />
            Nuevo número cada jueves
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight">
            Aprendé a imprimir<br />
            <span className="text-verde verde-text-glow">tu propia plata</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            El newsletter semanal sobre <strong className="text-white">crypto, AI y tokenización</strong> que
            te explica cómo funciona el dinero digital. Sin jerga. Sin bullshit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#newsletter"
              className="bg-verde text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-verde/90 transition-all verde-glow"
            >
              Suscribite gratis →
            </a>
            <Link
              href="/blog"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-verde/30 hover:text-verde transition-all"
            >
              Leer el blog
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-sm animate-bounce">
          ↓
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-black text-verde verde-text-glow">{s.numero}</div>
              <div className="text-white/40 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Verticales */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Cuatro temas.<br />
              <span className="text-verde">Un solo objetivo: que ganes plata.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Cada edición cubre uno o más de estos universos. Siempre con casos reales, siempre accionable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticales.map((v) => (
              <div
                key={v.title}
                className={`gradient-border rounded-2xl p-8 hover:scale-[1.02] transition-transform`}
              >
                <div className={`text-4xl mb-4`}>{v.icon}</div>
                <h3 className={`text-xl font-black mb-2 ${v.color}`}>{v.title}</h3>
                <p className="text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Últimas ediciones */}
      <section className="py-24 px-6 bg-gris">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black">Últimas ediciones</h2>
            <Link href="/blog" className="text-verde text-sm hover:underline">
              Ver todas →
            </Link>
          </div>

          <div className="space-y-6">
            {ultimasEdiciones.map((e) => (
              <Link
                key={e.numero}
                href={`/blog/${e.slug}`}
                className="gradient-border rounded-2xl p-6 md:p-8 hover:scale-[1.01] transition-transform block"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="text-white/20 font-mono text-sm shrink-0">#{e.numero}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full border ${e.tagColor}`}>
                        {e.tag}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight hover:text-verde transition-colors">{e.titulo}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why now — el gráfico */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            El gap más grande<br />
            <span className="text-verde">en la historia del dinero</span>
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Hay un estudio que muestra que la AI <strong className="text-white">teóricamente puede hacer</strong> el
            80% del trabajo en finanzas, legal y negocios. Pero menos del 10% lo está usando.
            Ese gap es exactamente dónde está la oportunidad. <strong className="text-verde">La Impresora existe para que vos llegues primero.</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { pct: "80%", label: "de las tareas de negocios pueden hacerse con AI hoy", color: "text-verde" },
              { pct: "<10%", label: "de las personas en LATAM saben cómo usarla para ganar plata", color: "text-dorado" },
              { pct: "∞", label: "ventaja para los que entiendan esto antes que el resto", color: "text-purple-400" },
            ].map((item) => (
              <div key={item.label} className="gradient-border rounded-2xl p-6">
                <div className={`text-5xl font-black mb-3 ${item.color}`}>{item.pct}</div>
                <p className="text-white/50 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
