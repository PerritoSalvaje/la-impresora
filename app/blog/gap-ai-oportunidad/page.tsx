import Link from "next/link";
import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema as liArticleSchema, breadcrumbSchema as liBreadcrumbSchema } from "@/lib/schemas";

const BASE_URL = "https://laimpresora.io";
const ARTICLE_URL = `${BASE_URL}/blog/gap-ai-oportunidad`;

export const metadata: Metadata = {
  title: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo",
  description:
    "Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. Ese gap es la oportunidad más grande de la década. Te explicamos cómo aprovecharlo.",
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo",
    description:
      "Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. Ese gap es la oportunidad más grande de la década.",
    type: "article",
    url: ARTICLE_URL,
    publishedTime: "2026-04-29T00:00:00Z",
    authors: ["La Impresora"],
    tags: ["AI", "inteligencia artificial", "productividad", "LATAM", "crypto"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando",
  description:
    "Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. Ese gap es la oportunidad más grande de la década.",
  url: ARTICLE_URL,
  datePublished: "2026-04-29T00:00:00Z",
  dateModified: "2026-04-29T00:00:00Z",
  author: {
    "@type": "Organization",
    name: "La Impresora",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "La Impresora",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
  },
  image: {
    "@type": "ImageObject",
    url: `${ARTICLE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": ARTICLE_URL,
  },
  keywords: "AI, inteligencia artificial, productividad, LATAM, oportunidad, gap",
  articleSection: "AI para ganar plata",
  inLanguage: "es-AR",
};

const relacionados = [
  {
    slug: "herramientas-ai-para-ganar-dinero",
    numero: "005",
    titulo: "Las mejores herramientas de AI para ganar dinero en 2026",
    tag: "AI",
    tagClass: "badge badge-verde",
  },
  {
    slug: "como-usar-chatgpt-ganar-dinero",
    numero: "007",
    titulo: "Cómo usar ChatGPT para ganar dinero en 2026: 8 formas reales",
    tag: "AI",
    tagClass: "badge badge-verde",
  },
  {
    slug: "banco-tu-peor-enemigo",
    numero: "002",
    titulo: "Por qué tu banco es tu peor enemigo financiero",
    tag: "Libertad Financiera",
    tagClass: "badge badge-dorado",
  },
];

export default function EdicionGapAI() {
  return (
    <div className="pt-24 min-h-screen">
      <JsonLd
        id="gap-ai-oportunidad-article"
        data={[
          liArticleSchema({
            title: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo",
            description: "Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa. Ese gap es la oportunidad más grande de la década. Te explicamos cómo aprovecharlo.",
            slug: "gap-ai-oportunidad",
            publishedAt: "2025-09-01",
          }),
          liBreadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo", url: "/blog/gap-ai-oportunidad" },
          ]),
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-16 lg:items-start">

            {/* ── Columna principal ──────────────────────────────── */}
            <div className="max-w-[700px]">

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white/30 mb-10">
                <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-white/50">AI</span>
              </div>

              {/* Header del artículo */}
              <header className="mb-12">
                {/* Número de edición */}
                <div className="font-mono text-verde text-sm font-bold mb-4 tracking-widest">
                  #001
                </div>

                {/* Título */}
                <h1 className="font-display text-4xl md:text-5xl font-black leading-tight text-white mb-6 tracking-tight">
                  El gap que nadie ve: la AI puede hacer el 80% de tu trabajo y nadie la está usando
                </h1>

                {/* Subtítulo/excerpt */}
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Hay un estudio que muestra la diferencia entre lo que la AI puede hacer y lo que realmente se usa.
                  Ese gap es exactamente donde está la plata. Y la mayoría lo está ignorando.
                </p>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="badge badge-verde">AI para ganar plata</span>
                  <span className="text-white/30 text-xs font-mono">29 Abril 2026</span>
                  <span className="text-white/30 text-xs font-mono">·</span>
                  <span className="text-white/30 text-xs font-mono">8 min de lectura</span>
                </div>

                {/* Línea divisoria */}
                <div className="mt-8 border-t border-white/10" />
              </header>

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

              {/* ── Contenido del artículo ────────────────────── */}
              <div className="prose-impresora">

                <div className="bg-verde/5 border-l-4 border-verde px-6 py-5 rounded-r-2xl mb-10">
                  <p className="section-label mb-2">Tema principal</p>
                  <p className="text-white/80 text-base leading-relaxed m-0">
                    Existe un estudio publicado por investigadores de MIT y Stanford que mapeó, tarea por tarea,
                    qué porcentaje del trabajo humano la AI puede hacer <em>hoy</em>. No en 2030. Hoy.
                    El número promedio en categorías como finanzas, legal, marketing y servicios al cliente:
                    entre el 70% y el 85%. El porcentaje de personas que lo usa productivamente: menos del 10%.
                    Esa brecha tiene un nombre. Nosotros la llamamos: <strong className="text-verde">la ventana</strong>.
                  </p>
                </div>

                <h2>¿Qué dice exactamente el estudio?</h2>

                <p>
                  Los investigadores no analizaron si la AI va a reemplazar trabajos "en el futuro". Analizaron las tareas
                  concretas de cada categoría laboral y las cruzaron con lo que los modelos actuales pueden hacer.
                  El resultado fue un gráfico de dos líneas que no se tocan: la línea de "capacidad teórica de la AI"
                  va arriba, muy arriba. La línea de "uso real observado" va pegada al piso.
                </p>

                <p>
                  En finanzas, la AI puede redactar informes, analizar balances, detectar anomalías en transacciones
                  y automatizar reportes regulatorios. ¿Cuántos analistas financieros lo usan? Pocos.
                  En marketing, puede crear contenido, segmentar audiencias, A/B testear copy y optimizar campañas
                  en tiempo real. ¿Cuántas agencias lo implementaron de verdad? Menos.
                </p>

                <p>
                  La razón no es tecnológica. La razón es de adopción. La gente no sabe cómo usarla.
                  O tiene miedo. O espera que "alguien le explique". Y mientras esperan, otros están
                  automatizando su trabajo, triplicando su output y cobrando el doble.
                </p>

                <h2>¿Por qué esto importa para vos?</h2>

                <ArticleCTA />

                <p>
                  Porque en LATAM el gap es todavía más grande. En Argentina, México, Colombia y Chile,
                  la adopción de AI en contextos laborales productivos está entre 5 y 8 puntos porcentuales
                  por debajo del promedio global. Lo que en el resto del mundo ya es "norma",
                  acá todavía es "el pibe raro que usa ChatGPT".
                </p>

                <p>
                  Eso no es un problema. Es una ventaja. Enorme.
                </p>

                <p>
                  Si vos aprendés hoy a usar AI para hacer en 2 horas lo que antes te llevaba 8,
                  no solo sos más productivo: podés cobrar más, hacer más clientes, lanzar más proyectos,
                  o simplemente recuperar 6 horas de tu vida. La ecuación es absurdamente favorable.
                  Mirá las <Link href="/blog/herramientas-ai-para-ganar-dinero" className="text-verde hover:underline">herramientas concretas de AI para monetizar</Link> que ya están funcionando en LATAM.
                </p>

                <h2>Por dónde empezar (en serio)</h2>

                <p>
                  No te decimos "usá ChatGPT". Te decimos: identificá las 3 tareas más repetitivas de tu semana.
                  Las que hacés con el piloto automático. Las que te aburren. Esas son las primeras candidatas
                  a ser automatizadas. Un buen prompt, bien estructurado, puede encargarse de ellas.
                </p>

                <p>
                  La ventana está abierta. No es para siempre. Cuando la mayoría adopte AI,
                  la ventaja se achica. Pero ahora mismo, estar un paso adelante es
                  literalmente gratuito y está al alcance de cualquiera con internet.
                </p>

                <p>
                  La pregunta no es si la AI va a cambiar tu trabajo. Ya lo está cambiando.
                  La pregunta es si vas a ser de los que lo usaron para ganar o de los que
                  "esperaban a ver qué pasaba". Y mientras resolvés eso, el sistema financiero tradicional
                  sigue extrayendo valor de tus ahorros: entendé <Link href="/blog/banco-tu-peor-enemigo" className="text-verde hover:underline">por qué tu banco es tu peor enemigo financiero</Link>.
                </p>

              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-12" />

              {/* Noticias rápidas */}
              <section className="mb-12">
                <span className="section-label mb-6 block">Noticias rápidas</span>

                <div className="space-y-4">
                  {[
                    {
                      n: "01",
                      titulo: "OpenAI lanzó GPT-4o con \"memory\" activa por defecto para todos los planes",
                      texto: "Ahora el modelo recuerda tus preferencias, proyectos y contexto entre conversaciones. Para los que usan AI en el trabajo esto cambia todo: ya no tenés que explicar de cero quién sos cada vez que abrís una nueva pestaña.",
                      why: "La fricción de adopción baja drásticamente cuando la AI \"te conoce\".",
                    },
                    {
                      n: "02",
                      titulo: "Goldman Sachs: la AI va a automatizar el 28% de las tareas de sus propios analistas",
                      texto: "El banco más poderoso del mundo publicó un reporte interno donde admite que ya está reemplazando trabajo junior con herramientas de AI. No es ciencia ficción: es la estrategia de contratación de 2026.",
                      why: "Si lo hacen los grandes, los medianos los van a seguir en 18 meses.",
                    },
                    {
                      n: "03",
                      titulo: "Freelancers en Argentina reportan 3x más ingresos usando AI para escalar servicios",
                      texto: "Una encuesta de Workana entre 2.000 freelancers latinoamericanos mostró que quienes integran AI en su flujo de trabajo facturan en promedio 2.8 veces más que los que no.",
                      why: "El piso sube para todos. Los que no se adapten quedan afuera del mercado.",
                    },
                  ].map((item) => (
                    <div key={item.n} className="card rounded-2xl p-5">
                      <div className="flex items-start gap-4">
                        <span className="text-dorado font-black text-lg leading-none mt-0.5 shrink-0 font-mono">{item.n}</span>
                        <div>
                          <h3 className="font-bold text-white mb-2 text-sm leading-snug">{item.titulo}</h3>
                          <p className="text-white/50 text-sm leading-relaxed">
                            {item.texto}{" "}
                            <span className="text-verde font-semibold">Por qué importa:</span>{" "}
                            {item.why}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div className="border-t border-white/10 my-12" />

              {/* Oportunidad concreta */}
              <section className="mb-12">
                <span className="section-label mb-6 block">Oportunidad concreta</span>

                <div className="bg-verde/5 border border-verde/20 rounded-2xl p-6 md:p-8">
                  <h3 className="font-display text-xl font-black text-verde mb-4">
                    Ofrecé "AI audit" a pequeñas empresas: $300-500 USD por proyecto
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Miles de PyMEs en LATAM saben que "deberían usar AI" pero no saben por dónde empezar.
                    Vos podés cobrar por resolver exactamente eso. Un "AI audit" es simple:
                    analizás los procesos del negocio, identificás cuáles se pueden automatizar y entregás
                    un plan concreto de herramientas y prompts.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { valor: "4-6h", label: "de trabajo por cliente" },
                      { valor: "$400", label: "precio promedio de mercado" },
                      { valor: "$0", label: "inversión inicial necesaria" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-oscuro/60 rounded-xl p-4 text-center">
                        <div className="text-verde font-black text-2xl font-display">{stat.valor}</div>
                        <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/50 text-sm">
                    <span className="text-verde font-semibold">Cómo empezar:</span>{" "}
                    Ofrecé el primero gratis o a precio simbólico para conseguir un caso de éxito.
                    Con un testimonio real, el segundo cliente sale a precio completo.
                    LinkedIn, Instagram y grupos de WhatsApp de empresarios son el canal perfecto.
                  </p>
                </div>
              </section>

              {/* Divider */}
              <div className="border-t border-white/10 my-12" />

              {/* Dato curioso */}
              <section className="mb-12">
                <span className="section-label mb-6 block">Dato / Estadística</span>

                <div className="bg-gris-medio border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="font-display font-black text-xl text-white mb-3 leading-snug">
                    "La AI no va a reemplazar humanos. Los humanos que usen AI van a reemplazar a los que no."
                  </p>
                  <p className="text-white/30 text-sm mb-6">— La frase que todos comparten pero nadie ejecuta</p>
                  <div className="bg-oscuro rounded-xl p-4 font-mono text-sm text-white/60">
                    <span className="text-verde">estado actual de LATAM:</span>
                    <br />
                    Sabe que debería usar AI: <span className="text-white">87%</span>
                    <br />
                    La usa productivamente: <span className="text-white">9%</span>
                    <br />
                    <span className="text-dorado">Gap de oportunidad: enorme</span>
                  </div>
                </div>
              </section>

              {/* Nav entre posts */}
              <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 justify-between mb-16">
                <div />
                <Link
                  href="/blog/banco-tu-peor-enemigo"
                  className="btn-secondary text-sm text-center"
                >
                  Siguiente: #002 Tu banco es tu peor enemigo →
                </Link>
              </div>

              {/* Seguí leyendo */}
              <section className="mb-16">
                <span className="section-label mb-6 block">Seguí leyendo</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relacionados.map((art) => (
                    <Link key={art.slug} href={`/blog/${art.slug}`} className="group block">
                      <article className="card rounded-2xl p-5 h-full flex flex-col">
                        <span className="font-mono text-verde/40 text-lg font-bold mb-3">#{art.numero}</span>
                        <div className="mb-2">
                          <span className={art.tagClass}>{art.tag}</span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-white leading-snug group-hover:text-verde transition-colors flex-1">
                          {art.titulo}
                        </h4>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>

            </div>

            {/* ── Sidebar newsletter (desktop) ──────────────────── */}
            <aside className="hidden lg:block lg:sticky lg:top-28 self-start">
              <div className="card rounded-2xl p-6">
                <span className="section-label mb-3 block">Newsletter</span>
                <h3 className="font-display font-black text-lg text-white mb-2 leading-snug">
                  Recibí cada edición antes que nadie.
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">
                  Una vez por semana. Sin spam. Crypto, AI y libertad financiera para LATAM.
                </p>
                <a href="/#newsletter" className="btn-primary w-full justify-center text-sm">
                  Suscribirme gratis
                </a>
              </div>

              {/* Info edición */}
              <div className="mt-4 rounded-2xl border border-white/6 p-5">
                <div className="font-mono text-white/25 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span>Edición</span>
                    <span className="text-white/50">#001</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fecha</span>
                    <span className="text-white/50">29 Abr 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lectura</span>
                    <span className="text-white/50">8 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Categoría</span>
                    <span className="text-verde/70">AI</span>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* Newsletter mobile (al final del artículo) */}
      <div className="lg:hidden">
        <Newsletter />
      </div>

    </div>
  );
}
