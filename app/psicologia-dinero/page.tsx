import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Psicología del Dinero — Por qué tu cerebro sabotea tus finanzas | La Impresora",
  description:
    "FOMO, FUD, loss aversion, sesgo de confirmación: los 6 principales sesgos cognitivos que destruyen portafolios. Finanzas conductuales explicadas para LATAM.",
};

const sesgos = [
  {
    nombre: "FOMO",
    completo: "Fear Of Missing Out",
    emoji: "📈",
    descripcion:
      "El miedo a quedarse afuera empuja a comprar activos en sus máximos históricos, exactamente cuando el riesgo es mayor. Es la razón por la que la mayoría compra caro y vende barato.",
    ejemplo:
      "Bitcoin sube 40% en una semana. Twitter explota. Comprás en el pico. Cae 30%. Vendés con pérdida.",
    antidoto: "Tené una estrategia de entrada preestablecida (DCA) y nunca cambies el plan por presión social.",
    color: "text-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/5",
    badge: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  {
    nombre: "FUD",
    completo: "Fear, Uncertainty & Doubt",
    emoji: "😰",
    descripcion:
      "El miedo a las malas noticias lleva a vender activos buenos en los momentos más baratos. La prensa amplifica el FUD porque el drama genera clicks. Los inversores que resisten el FUD son los que ganan.",
    ejemplo:
      "Un gobierno anuncia 'prohibición de crypto'. Todos venden. La noticia resulta exagerada. El precio se recupera y sube más.",
    antidoto: "Diferenciá entre ruido de corto plazo y cambios fundamentales reales en el activo.",
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
    badge: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  },
  {
    nombre: "Loss Aversion",
    completo: "Aversión a las pérdidas",
    emoji: "🧠",
    descripcion:
      "Psicológicamente, perder $100 duele casi el doble que ganar $100 genera placer. Esto lleva a cortar ganancias demasiado rápido y a mantener posiciones perdedoras demasiado tiempo ('para no hacer pérdida').",
    ejemplo:
      "ETH bajó 30%. No vendés 'porque no querés hacer la pérdida'. Baja otro 40%. La pérdida ya no 'hacerla' no la hace inexistente.",
    antidoto: "Las pérdidas ya ocurrieron en el momento que el precio bajó. La decisión es si querés seguir expuesto o no.",
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/5",
    badge: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  {
    nombre: "Confirmation Bias",
    completo: "Sesgo de confirmación",
    emoji: "🔍",
    descripcion:
      "Buscamos información que confirme lo que ya creemos e ignoramos la que lo contradice. En inversiones, esto lleva a construir una narrativa que justifica decisiones ya tomadas en lugar de evaluar con objetividad.",
    ejemplo:
      "Compraste SOL. Solo seguís cuentas pro-SOL en Twitter. Ignorás análisis que dicen lo contrario. Tu tesis te parece cada vez más sólida.",
    antidoto: "Buscá activamente el mejor argumento en contra de cada posición que tenés. Si no podés refutarlo, reconsiderá.",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    badge: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    nombre: "Herd Mentality",
    completo: "Mentalidad de manada",
    emoji: "🐑",
    descripcion:
      "Seguimos lo que hace la mayoría porque asumir que 'tanta gente no puede estar equivocada'. En mercados financieros, la mayoría suele estar equivocada en los momentos más importantes: en los picos y en los fondos.",
    ejemplo:
      "2021: todos compran NFTs porque todos compran NFTs. 2022: todos venden porque todos venden. Los que siguieron a la manada perdieron en ambas direcciones.",
    antidoto: "El pensamiento contrarian no significa siempre ir contra la corriente, sino no seguirla ciegamente.",
    color: "text-dorado",
    border: "border-dorado/30",
    bg: "bg-dorado/5",
    badge: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    nombre: "Overconfidence",
    completo: "Exceso de confianza",
    emoji: "🎯",
    descripcion:
      "Después de algunos éxitos, los inversores sobrestiman su capacidad de predecir el mercado. Aumentan el tamaño de las posiciones, reducen la diversificación y asumen más riesgo del que corresponde.",
    ejemplo:
      "Ganaste 3x con Bitcoin en 2020. En 2021 metiste todo el ahorro en altcoins 'convencido'. El bear market de 2022 te borró el 80%.",
    antidoto: "Los mercados tienen componentes aleatorios que ningún análisis puede predecir. La humildad es una ventaja competitiva.",
    color: "text-verde",
    border: "border-verde/30",
    bg: "bg-verde/5",
    badge: "bg-verde/10 text-verde border-verde/20",
  },
];

const postsBlog = [
  {
    slug: "portafolio-cripto-500",
    titulo: "Cómo armar un portafolio cripto con $500 en 2026",
    desc: "La estrategia sistemática que elimina las decisiones emocionales del proceso de inversión.",
  },
  {
    slug: "que-es-bitcoin-y-como-funciona",
    titulo: "Qué es Bitcoin y cómo funciona",
    desc: "Entender el activo profundamente reduce el pánico ante la volatilidad.",
  },
  {
    slug: "banco-tu-peor-enemigo",
    titulo: "Por qué tu banco es tu peor enemigo financiero",
    desc: "El sistema financiero tradicional explota exactamente estos sesgos en tu contra.",
  },
];

export default function PsicologiaDineroPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow" />
            Psicología del Dinero
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            Por qué tu cerebro<br />
            <span className="text-purple-400" style={{ textShadow: "0 0 30px rgba(192,132,252,0.4)" }}>
              sabotea tus finanzas
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            No perdés dinero por falta de información.{" "}
            <strong className="text-white">
              Lo perdés porque tu cerebro está cableado para tomar malas decisiones financieras.
            </strong>{" "}
            Entendé los 6 sesgos que destruyen portafolios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#sesgos"
              className="bg-purple-400 text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-purple-300 transition-all"
              style={{ boxShadow: "0 0 30px rgba(192,132,252,0.2)" }}
            >
              Ver los 6 sesgos →
            </a>
            <a
              href="#libro"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-purple-400/30 hover:text-purple-400 transition-all"
            >
              El libro que explica todo
            </a>
          </div>
        </div>
      </section>

      {/* Los 6 sesgos */}
      <section id="sesgos" className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Finanzas conductuales
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Los 6 sesgos que{" "}
              <span className="text-purple-400">destruyen portafolios</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Identificarlos no los elimina. Pero sí te da la posibilidad de diseñar sistemas que los neutralicen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sesgos.map((sesgo) => (
              <div key={sesgo.nombre} className={`rounded-2xl border p-6 ${sesgo.border} ${sesgo.bg}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border ${sesgo.border} ${sesgo.bg}`}>
                    {sesgo.emoji}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className={`text-xl font-black ${sesgo.color}`}>{sesgo.nombre}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${sesgo.badge}`}>
                        {sesgo.completo}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{sesgo.descripcion}</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-white/30 text-xs font-bold mb-1 uppercase tracking-wider">Caso real</p>
                    <p className="text-white/50 text-xs leading-relaxed italic">{sesgo.ejemplo}</p>
                  </div>
                  <div className={`p-3 rounded-lg border ${sesgo.border} ${sesgo.bg}`}>
                    <p className={`text-xs font-bold mb-1 uppercase tracking-wider ${sesgo.color}`}>Antídoto</p>
                    <p className="text-white/60 text-xs leading-relaxed">{sesgo.antidoto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El libro — Morgan Housel */}
      <section id="libro" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-48 flex-shrink-0">
                <div className="rounded-xl bg-gris-medio border border-white/10 p-6 text-center">
                  <div className="text-6xl mb-3">📚</div>
                  <p className="text-white/30 text-xs">Morgan Housel</p>
                  <p className="font-black text-sm text-white mt-1">2020</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                  El libro que cambió cómo pensamos sobre el dinero
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                  "The Psychology of Money"
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Morgan Housel, ex columnista de The Wall Street Journal, documentó 19 historias cortas sobre la relación extraña y contradictoria que tienen las personas con el dinero. No es un libro de estrategias de inversión — es un libro sobre comportamiento humano.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Por qué ser razonablemente bueno es mejor que ser brillante pero inconsistente",
                    "La diferencia entre ser rico y aparentar serlo",
                    "Por qué el control sobre tu tiempo es la forma más alta de riqueza",
                    "Cómo el azar se confunde con habilidad en los mercados",
                  ].map((punto) => (
                    <div key={punto} className="flex items-start gap-3">
                      <span className="text-purple-400 text-sm font-bold shrink-0 mt-0.5">→</span>
                      <p className="text-white/60 text-sm">{punto}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-400 text-oscuro font-black px-6 py-3 rounded-full hover:bg-purple-300 transition-all text-sm"
                  >
                    Ver en Amazon →
                  </a>
                  <Link
                    href="/libros"
                    className="border border-white/10 text-white/60 font-semibold px-6 py-3 rounded-full hover:border-purple-400/30 hover:text-purple-400 transition-all text-sm"
                  >
                    Ver todos los libros recomendados
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black mb-2">
                Artículos relacionados
              </h2>
              <p className="text-white/40">Para construir el sistema que neutraliza los sesgos.</p>
            </div>
            <Link href="/blog" className="text-purple-400 text-sm hover:underline shrink-0">
              Ver todos →
            </Link>
          </div>

          <div className="space-y-4">
            {postsBlog.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="gradient-border rounded-2xl p-6 hover:scale-[1.01] transition-transform block"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-purple-400/10 text-purple-400 border-purple-400/20 shrink-0">
                    Psicología
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 leading-tight hover:text-purple-400 transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Newsletter semanal
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Finanzas que funcionan<br />
            <span className="text-purple-400" style={{ textShadow: "0 0 30px rgba(192,132,252,0.4)" }}>
              con tu cerebro, no contra él
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Análisis semanal sobre mercados, psicología del inversor y estrategias que resisten la volatilidad.{" "}
            <strong className="text-white">Gratis, cada jueves.</strong>
          </p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
