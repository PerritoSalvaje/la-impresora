import Link from "next/link";
import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo | La Impresora #001",
  description:
    "Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. Ese gap es la oportunidad más grande de la década. Te explicamos cómo aprovecharlo.",
  openGraph: {
    title: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo",
    description:
      "Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. Ese gap es la oportunidad más grande de la década.",
    type: "article",
  },
};

export default function EdicionGapAI() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-10">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-white/50">Edición #001</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              AI para ganar plata
            </span>
            <span className="text-white/20 text-xs font-mono">#001 — 29 Abril 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando
          </h1>

          <p className="text-white/50 text-lg leading-relaxed">
            Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa.
            Ese gap es exactamente donde está la plata. Y la mayoría lo está ignorando.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Subject line preview box */}
        <div className="bg-gris-medio border border-white/10 rounded-2xl p-5 mb-12 font-mono text-sm">
          <div className="text-white/30 text-xs mb-2 uppercase tracking-widest">Email original</div>
          <div className="mb-1">
            <span className="text-white/40">Asunto: </span>
            <span className="text-white font-bold">Tu jefe sabe que la AI puede hacer tu trabajo. ¿Lo sabés vos?</span>
          </div>
          <div>
            <span className="text-white/40">Preview: </span>
            <span className="text-white/60">El estudio que ningún headhunter va a compartirte (pero que cambia todo).</span>
          </div>
        </div>

        {/* Tema principal */}
        <article className="prose prose-invert max-w-none">

          <div className="bg-verde/5 border-l-4 border-verde px-6 py-5 rounded-r-2xl mb-10">
            <p className="text-verde font-bold text-sm uppercase tracking-widest mb-1">Tema principal</p>
            <p className="text-white/80 text-base leading-relaxed m-0">
              Existe un estudio publicado por investigadores de MIT y Stanford que mapeó, tarea por tarea,
              qué porcentaje del trabajo humano la AI puede hacer <em>hoy</em>. No en 2030. Hoy.
              El número promedio en categorías como finanzas, legal, marketing y servicios al cliente:
              entre el 70% y el 85%. El porcentaje de personas que lo usa productivamente: menos del 10%.
              Esa brecha tiene un nombre. Nosotros la llamamos: <strong className="text-verde">la ventana</strong>.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">¿Qué dice exactamente el estudio?</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            Los investigadores no analizaron si la AI va a reemplazar trabajos "en el futuro". Analizaron las tareas
            concretas de cada categoría laboral y las cruzaron con lo que los modelos actuales pueden hacer.
            El resultado fue un gráfico de dos líneas que no se tocan: la línea de "capacidad teórica de la AI"
            va arriba, muy arriba. La línea de "uso real observado" va pegada al piso.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            En finanzas, la AI puede redactar informes, analizar balances, detectar anomalías en transacciones
            y automatizar reportes regulatorios. ¿Cuántos analistas financieros lo usan? Pocos.
            En marketing, puede crear contenido, segmentar audiencias, A/B testear copy y optimizar campañas
            en tiempo real. ¿Cuántas agencias lo implementaron de verdad? Menos.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            La razón no es tecnológica. La razón es de adopción. La gente no sabe cómo usarla.
            O tiene miedo. O espera que "alguien le explique". Y mientras esperan, otros están
            automatizando su trabajo, triplicando su output y cobrando el doble.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">¿Por qué esto importa para vos?</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            Porque en LATAM el gap es todavía más grande. En Argentina, México, Colombia y Chile,
            la adopción de AI en contextos laborales productivos está entre 5 y 8 puntos porcentuales
            por debajo del promedio global. Lo que en el resto del mundo ya es "norma",
            acá todavía es "el pibe raro que usa ChatGPT".
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            Eso no es un problema. Es una ventaja. Enorme.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            Si vos aprendés hoy a usar AI para hacer en 2 horas lo que antes te llevaba 8,
            no solo sos más productivo: podés cobrar más, hacer más clientes, lanzar más proyectos,
            o simplemente recuperar 6 horas de tu vida. La ecuación es absurdamente favorable.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">Por dónde empezar (en serio)</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            No te decimos "usá ChatGPT". Te decimos: identificá las 3 tareas más repetitivas de tu semana.
            Las que hacés con el piloto automático. Las que te aburren. Esas son las primeras candidatas
            a ser automatizadas. Un buen prompt, bien estructurado, puede encargarse de ellas.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            La ventana está abierta. No es para siempre. Cuando la mayoría adopte AI,
            la ventaja se achica. Pero ahora mismo, estar un paso adelante es
            literalmente gratuito y está al alcance de cualquiera con internet.
          </p>

          <p className="text-white/70 leading-relaxed mb-8">
            La pregunta no es si la AI va a cambiar tu trabajo. Ya lo está cambiando.
            La pregunta es si vas a ser de los que lo usaron para ganar o de los que
            "esperaban a ver qué pasaba".
          </p>

        </article>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* 3 Noticias rapidas */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Noticias rapidas
            </span>
          </div>

          <div className="space-y-5">

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">01</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    OpenAI lanzó GPT-4o con "memory" activa por defecto para todos los planes
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Ahora el modelo recuerda tus preferencias, proyectos y contexto entre conversaciones.
                    Para los que usan AI en el trabajo esto cambia todo: ya no tenés que explicar
                    de cero quién sos cada vez que abrís una nueva pestaña.
                    <span className="text-verde font-semibold"> Por qué importa:</span> la friccion de adopcion baja drasticamente cuando la AI "te conoce".
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">02</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Goldman Sachs: la AI va a automatizar el 28% de las tareas de sus propios analistas
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    El banco más poderoso del mundo publicó un reporte interno donde admite que
                    ya esta reemplazando trabajo junior con herramientas de AI. No es ciencia ficcion:
                    es la estrategia de contratacion de 2026.
                    <span className="text-verde font-semibold"> Por qué importa:</span> si lo hacen los grandes, los medianos los van a seguir en 18 meses.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">03</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Freelancers en Argentina reportan 3x más ingresos usando AI para escalar servicios
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Una encuesta de Workana entre 2.000 freelancers latinoamericanos mostró que
                    quienes integran AI en su flujo de trabajo facturan en promedio 2.8 veces más
                    que los que no. La diferencia no es de habilidad: es de herramientas.
                    <span className="text-verde font-semibold"> Por qué importa:</span> el piso sube para todos. Los que no se adapten quedan afuera del mercado.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Oportunidad concreta */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Oportunidad concreta
            </span>
          </div>

          <div className="bg-verde/5 border border-verde/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-black text-verde mb-4">
              Ofrece "AI audit" a pequeñas empresas: $300-500 USD por proyecto
            </h3>
            <p className="text-white/70 leading-relaxed mb-5">
              Miles de PyMEs en LATAM saben que "deberian usar AI" pero no saben por donde empezar.
              Vos podés cobrar por resolver exactamente eso. Un "AI audit" es simple:
              analizás los procesos del negocio, identificás cuales se pueden automatizar y entregás
              un plan concreto de herramientas y prompts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">4-6h</div>
                <div className="text-white/40 text-xs mt-1">de trabajo por cliente</div>
              </div>
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">$400</div>
                <div className="text-white/40 text-xs mt-1">precio promedio de mercado</div>
              </div>
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">0</div>
                <div className="text-white/40 text-xs mt-1">inversion inicial necesaria</div>
              </div>
            </div>
            <p className="text-white/50 text-sm">
              <span className="text-verde font-semibold">Como empezar:</span> ofrecé el primero gratis o a precio simbolico para conseguir un caso de exito.
              Con un testimonio real, el segundo cliente sale a precio completo.
              LinkedIn, Instagram y grupos de WhatsApp de empresarios son el canal perfecto.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Dato curioso */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Dato / Meme
            </span>
          </div>

          <div className="bg-gris-medio border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">🤖</div>
            <p className="text-white font-bold text-lg mb-3">
              "La AI no va a reemplazar humanos. Los humanos que usen AI van a reemplazar a los que no."
            </p>
            <p className="text-white/40 text-sm mb-4">— La frase que todos comparten pero nadie ejecuta</p>
            <div className="bg-oscuro rounded-xl p-4 text-left font-mono text-sm text-white/60">
              <span className="text-verde">estado actual de LATAM:</span>
              <br />
              Sabe que deberia usar AI: 87%
              <br />
              La usa productivamente: 9%
              <br />
              <span className="text-dorado">Gap de oportunidad: enorme</span>
            </div>
          </div>
        </section>

        {/* Nav between posts */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 justify-between mb-16">
          <div />
          <Link
            href="/blog/banco-tu-peor-enemigo"
            className="bg-verde/10 border border-verde/20 text-verde font-bold px-5 py-3 rounded-full hover:bg-verde/20 transition-colors text-sm text-center"
          >
            Siguiente: #002 Tu banco es tu peor enemigo →
          </Link>
        </div>

      </div>

      <Newsletter />
    </div>
  );
}
