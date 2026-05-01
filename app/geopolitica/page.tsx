import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Geopolítica & Economía — El dinero nunca es neutral | La Impresora",
  description:
    "Los eventos geopolíticos que más movieron los mercados en los últimos 5 años. Cómo seguir la geopolítica económica y qué significa para tus finanzas. Análisis para LATAM.",
};

const eventos = [
  {
    año: "2020",
    titulo: "COVID-19 y el Gran Reset Monetario",
    impacto: "Cripto +1,200% / Dólar vs emergentes —30%",
    descripcion:
      "Los bancos centrales del mundo imprimieron $9 billones de dólares en 18 meses. La Reserva Federal bajó tasas a 0%. El resultado fue la mayor inflación en 40 años y un bull market histórico en todos los activos. Bitcoin pasó de $5,000 a $69,000.",
    llave: "Cuando los bancos centrales imprimen, los activos escasos (BTC, inmuebles, acciones) se aprecian. La liquidez busca dónde refugiarse.",
    color: "border-blue-400/30 bg-blue-400/5",
    badge: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    año: "2022",
    titulo: "Invasión de Ucrania y la Fractura del Orden Global",
    impacto: "Petróleo +80% / EUR/USD —15% / Trigo +80%",
    descripcion:
      "Rusia invadió Ucrania. Las sanciones occidentales fragmentaron el sistema financiero global: un bloque usa SWIFT, otro usa alternativas chinas. El petróleo y el gas se convirtieron en armas. Europa entró en crisis energética. La inflación se aceleró en todo Occidente.",
    llave: "La geopolítica determina qué rutas toman las materias primas y cuáles monedas se fortalecen. El dólar se beneficia de las crisis globales.",
    color: "border-red-400/30 bg-red-400/5",
    badge: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  {
    año: "2022",
    titulo: "El Ciclo de Suba de Tasas más Agresivo desde 1980",
    impacto: "Tasas 0% → 5.5% / Emergentes —40% / BTC —75%",
    descripcion:
      "Para combatir la inflación post-COVID, la Fed subió las tasas de interés de 0% a 5.5% en 18 meses. El resultado: colapso de todo activo de riesgo (cripto, tech, emergentes), crisis bancaria regional en EE.UU. y deuda soberana de emergentes en problemas.",
    llave: "Las tasas de interés de la Fed mueven el mundo. Tasas altas = dólar fuerte = presión sobre cripto y economías emergentes de LATAM.",
    color: "border-orange-400/30 bg-orange-400/5",
    badge: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  },
  {
    año: "2023–2024",
    titulo: "La Rivalidad EE.UU.–China y la Carrera por el AI",
    impacto: "Nvidia +800% / Chips estratégicos / Yuan vs Dólar",
    descripcion:
      "EE.UU. prohibió exportar chips avanzados a China. La carrera por la inteligencia artificial se convirtió en disputa geopolítica. Nvidia pasó de ser una empresa de gaming a ser la más valiosa del mundo. China aceleró su propia alternativa. El control del AI es poder geopolítico.",
    llave: "La tecnología es geopolítica. Quién controla los chips, el AI y los datos controla la economía de las próximas décadas.",
    color: "border-dorado/30 bg-dorado/5",
    badge: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    año: "2024–2025",
    titulo: "Bitcoin en el Balance de los Estados",
    impacto: "BTC +150% en 12 meses / ETFs: $35,000M en 90 días",
    descripcion:
      "BlackRock, Fidelity y otros lanzaron ETFs de Bitcoin aprobados por la SEC. EE.UU. comenzó a considerar una reserva estratégica de Bitcoin. El Salvador lo adoptó como moneda de curso legal. La narrativa cambió: ya no es solo para cypherpunks — es una decisión de Estado.",
    llave: "Cuando los estados compiten por acumular Bitcoin, la dinámica de oferta y demanda cambia estructuralmente.",
    color: "border-verde/30 bg-verde/5",
    badge: "bg-verde/10 text-verde border-verde/20",
  },
];

const fuentes = [
  {
    nombre: "The Economist",
    tipo: "Análisis global semanal",
    desc: "La referencia para entender la geopolítica económica mundial. Cobertura imparcial y profunda de economías emergentes, incluyendo LATAM.",
    url: "https://economist.com",
    gratis: false,
  },
  {
    nombre: "Bloomberg Línea",
    tipo: "Noticias económicas LATAM",
    desc: "Bloomberg en español, enfocado en América Latina. Noticias de mercados, finanzas y economía de la región en tiempo real.",
    url: "https://bloomberglinea.com",
    gratis: true,
  },
  {
    nombre: "Project Syndicate",
    tipo: "Análisis de expertos globales",
    desc: "Artículos de economistas, ex-ministros y analistas top del mundo. Paul Krugman, Joseph Stiglitz, Mohamed El-Erian. En inglés.",
    url: "https://project-syndicate.org",
    gratis: true,
  },
  {
    nombre: "Geopolitical Futures",
    tipo: "Análisis geopolítico profundo",
    desc: "La publicación más sistemática para entender cómo la geografía, la historia y el poder moldean los mercados globales.",
    url: "https://geopoliticalfutures.com",
    gratis: false,
  },
  {
    nombre: "Real Vision",
    tipo: "Análisis macro y cripto",
    desc: "El canal de Raoul Pal conecta los macro trends globales con las implicancias para cripto y activos alternativos. Excelente para LATAM.",
    url: "https://realvision.com",
    gratis: false,
  },
  {
    nombre: "X / Twitter — Cuentas clave",
    tipo: "Flujo de información en tiempo real",
    desc: "@RaoulGMI, @LukeGromen, @LynAldenContact, @zerohedge, @DarioPerkilas. El mercado se mueve con las noticias antes de que lleguen a los medios.",
    url: "https://x.com",
    gratis: true,
  },
];

const postsBlog = [
  {
    slug: "stablecoins-latam",
    titulo: "Stablecoins en LATAM: la respuesta a la inestabilidad económica",
    desc: "La geopolítica monetaria de LATAM hace que las stablecoins no sean especulación — son protección.",
  },
  {
    slug: "banco-tu-peor-enemigo",
    titulo: "Por qué tu banco es tu peor enemigo financiero",
    desc: "La banca como herramienta de control político y económico. Y cómo salir del sistema.",
  },
  {
    slug: "que-es-bitcoin-y-como-funciona",
    titulo: "Qué es Bitcoin y por qué los estados lo quieren",
    desc: "La narrativa geopolítica detrás de Bitcoin: por qué cada vez más países lo están considerando en su balance.",
  },
];

export default function GeopoliticaPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dorado/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dorado/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-dorado rounded-full animate-pulse-slow" />
            Geopolítica & Economía
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            El dinero nunca<br />
            <span className="text-dorado" style={{ textShadow: "0 0 30px rgba(245,200,66,0.4)" }}>
              es neutral.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Las guerras, las sanciones, las elecciones y las decisiones de los bancos centrales mueven los mercados más que cualquier análisis técnico.{" "}
            <strong className="text-white">
              Entender la geopolítica es entender el dinero.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#eventos"
              className="bg-dorado text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-dorado/90 transition-all"
              style={{ boxShadow: "0 0 30px rgba(245,200,66,0.2)" }}
            >
              Los eventos que movieron los mercados →
            </a>
            <a
              href="#fuentes"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-dorado/30 hover:text-dorado transition-all"
            >
              Cómo seguir la geopolítica
            </a>
          </div>
        </div>
      </section>

      {/* Eventos que movieron los mercados */}
      <section id="eventos" className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Últimos 5 años
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Los eventos geopolíticos que{" "}
              <span className="text-dorado">más movieron los mercados</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Sin contexto político, sin agenda. Solo los hechos, el impacto medible y la lección para el inversor.
            </p>
          </div>

          <div className="space-y-6">
            {eventos.map((evento) => (
              <div key={evento.titulo} className={`rounded-2xl border p-6 md:p-8 ${evento.color}`}>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm text-white/30 border border-white/10 px-3 py-1 rounded-full">{evento.año}</span>
                    <h3 className="text-xl font-black text-white">{evento.titulo}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${evento.badge}`}>
                      {evento.impacto}
                    </span>
                  </div>
                  <p className="text-white/60 leading-relaxed">{evento.descripcion}</p>
                  <div className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-dorado text-sm font-bold shrink-0">Lección:</span>
                    <p className="text-white/50 text-sm leading-relaxed">{evento.llave}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo seguir la geopolítica */}
      <section id="fuentes" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-white/5 border border-white/10 text-white/50 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Fuentes confiables
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Cómo seguir la geopolítica{" "}
              <span className="text-dorado">sin ahogarse en ruido</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              No hace falta leer todo. Hace falta leer bien. Estas son las fuentes que usan los analistas serios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fuentes.map((fuente) => (
              <a
                key={fuente.nombre}
                href={fuente.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border rounded-2xl p-6 hover:scale-[1.02] transition-transform block group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-black text-lg text-white group-hover:text-dorado transition-colors">{fuente.nombre}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border shrink-0 ${fuente.gratis ? "bg-verde/10 text-verde border-verde/20" : "bg-white/5 text-white/40 border-white/10"}`}>
                    {fuente.gratis ? "Gratis" : "Pago"}
                  </span>
                </div>
                <p className="text-dorado text-xs font-semibold mb-2">{fuente.tipo}</p>
                <p className="text-white/50 text-sm leading-relaxed">{fuente.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Marco de análisis */}
      <section className="py-16 px-6 bg-gris border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border rounded-2xl p-8 md:p-10">
            <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Marco de análisis
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-6">
              4 preguntas antes de tomar cualquier{" "}
              <span className="text-dorado">decisión financiera importante</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: "1.",
                  pregunta: "¿Qué están haciendo los bancos centrales?",
                  desc: "Las tasas de interés de la Fed y el BCE determinan el costo del dinero global. Tasas subiendo = activos de riesgo bajo presión. Tasas bajando = liquidez busca rendimiento.",
                },
                {
                  num: "2.",
                  pregunta: "¿Hay conflictos que afectan cadenas de suministro?",
                  desc: "Guerras y sanciones interrumpen rutas de energía, alimentos y semiconductores. Eso genera inflación sectorial que impacta directamente en emergentes como LATAM.",
                },
                {
                  num: "3.",
                  pregunta: "¿Cómo está el dólar?",
                  desc: "El dólar es la moneda de reserva global. Cuando se fortalece, las monedas emergentes se debilitan y la deuda en dólares de los países se encarece. Es el termómetro más claro del stress global.",
                },
                {
                  num: "4.",
                  pregunta: "¿Qué narrativa está siendo adoptada por el capital institucional?",
                  desc: "Los grandes fondos (BlackRock, Vanguard, Bridgewater) marcan tendencias. Cuando empiezan a hablar de un activo o una región, el capital sigue. Estar adelante de esas narrativas es una ventaja.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-5 rounded-xl bg-white/3 border border-white/10">
                  <span className="text-dorado font-mono font-black text-xl shrink-0 mt-0.5">{item.num}</span>
                  <div>
                    <h3 className="font-black text-white mb-2">{item.pregunta}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black mb-2">Artículos relacionados</h2>
              <p className="text-white/40">El análisis concreto aplicado a LATAM.</p>
            </div>
            <Link href="/blog" className="text-dorado text-sm hover:underline shrink-0">
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
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-dorado/10 text-dorado border-dorado/20 shrink-0">
                    Geopolítica
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 leading-tight hover:text-dorado transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 px-6 bg-gris border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Newsletter semanal
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            El contexto geopolítico<br />
            <span className="text-dorado" style={{ textShadow: "0 0 30px rgba(245,200,66,0.4)" }}>
              que mueve los mercados
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Análisis semanal de los eventos globales y qué significan para tus finanzas en LATAM.{" "}
            <strong className="text-white">Gratis, cada jueves.</strong>
          </p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
