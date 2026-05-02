export const metadata = {
  title: "Nosotros — La Impresora",
  description: "La Impresora es el newsletter semanal sobre crypto, AI y libertad financiera para hispanohablantes. Sin bullshit. Sin jerga. Solo lo que importa.",
};

const valores = [
  {
    emoji: "🎯",
    titulo: "Directo al punto",
    desc: "Sin relleno. Sin 20 párrafos de contexto para decir algo que cabe en 3 oraciones. Respetamos tu tiempo.",
  },
  {
    emoji: "🔍",
    titulo: "Honestidad brutal",
    desc: "Si algo tiene riesgo, lo decimos. Si algo no funciona, lo decimos. No somos vendedores de humo.",
  },
  {
    emoji: "🌎",
    titulo: "Para LATAM de verdad",
    desc: "No traducimos contenido gringo. Pensamos desde la realidad de Argentina, México, Colombia y el resto.",
  },
  {
    emoji: "🤖",
    titulo: "AI-powered, human-edited",
    desc: "Usamos AI para escalar la producción de contenido. Pero cada idea, cada análisis y cada opinión tiene cabeza humana atrás.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-16">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Nuestra historia
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Por qué existe<br />
            <span className="text-verde">La Impresora</span>
          </h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-white/70 text-lg leading-relaxed mb-16">
          <p>
            En 2024, el mercado de newsletters y contenido sobre crypto y AI en español estaba
            lleno de dos tipos de creadores: los que traducían contenido en inglés sin entender
            el contexto latinoamericano, y los que vendían cursos prometiendo hacerte millonario en 30 días.
          </p>
          <p>
            Ni unos ni otros eran lo que necesitaba alguien en Argentina queriendo entender cómo
            proteger sus ahorros de la inflación con crypto. Ni lo que necesitaba un freelancer en México
            queriendo usar AI para facturar más. Ni lo que necesitaba un emprendedor en Colombia
            queriendo entender qué es la tokenización antes de invertir.
          </p>
          <p>
            La Impresora nació para llenar ese hueco.
          </p>
          <p>
            Un newsletter semanal que trata a los lectores como adultos inteligentes.
            Que explica cosas complejas sin simplificarlas hasta el absurdo.
            Que habla de riesgos cuando existen.
            Que recomienda herramientas solo cuando realmente sirven.
          </p>
          <p className="text-verde font-bold">
            Sin bullshit. Sin humo. Sin promesas que no podemos cumplir.
          </p>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-2xl font-black mb-8">Nuestros principios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valores.map((v) => (
              <div key={v.titulo} className="gradient-border rounded-2xl p-6">
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h3 className="font-black text-lg mb-2 text-verde">{v.titulo}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats rápidas */}
        <div className="gradient-border rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-verde">2,412+</div>
              <div className="text-white/40 text-sm mt-1">Suscriptores</div>
            </div>
            <div>
              <div className="text-3xl font-black text-verde">45%</div>
              <div className="text-white/40 text-sm mt-1">Open rate</div>
            </div>
            <div>
              <div className="text-3xl font-black text-verde">52</div>
              <div className="text-white/40 text-sm mt-1">Ediciones</div>
            </div>
          </div>
        </div>

        {/* Wendy OS */}
        <div className="gradient-border rounded-2xl p-8 mb-16">
          <h2 className="text-xl font-black mb-3">Operado por Wendy OS</h2>
          <p className="text-white/50 text-sm leading-relaxed">
            La Impresora es uno de los proyectos de Wendy OS — un sistema de agentes de AI
            diseñado para construir y operar negocios digitales. La producción de contenido,
            la investigación y la operación semanal son ejecutadas por Wendy OS con supervisión humana.
            Creemos que esta es la forma en que se construirán los medios del futuro.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/40 mb-6">
            ¿Querés ser parte de esto?
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-verde text-oscuro font-black px-10 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow"
          >
            Suscribite gratis →
          </a>
        </div>
      </div>
    </div>
  );
}
