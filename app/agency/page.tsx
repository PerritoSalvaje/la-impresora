export const metadata = {
  title: "Agency — La Impresora",
  description: "Producción de contenido con AI para empresas crypto y fintech LATAM. Newsletter, redes sociales, blog y más.",
};

const paraQuien = [
  { emoji: "🏦", tipo: "Exchanges", desc: "Binance, OKX y sus competidores locales necesitan educar a sus usuarios constantemente. Nosotros producimos ese contenido en español de LATAM." },
  { emoji: "⚙️", tipo: "Proyectos DeFi", desc: "Los mejores protocolos mueren por falta de comunicación clara. Traducimos tu tech en lenguaje que tu comunidad entiende." },
  { emoji: "💳", tipo: "Startups Fintech", desc: "Si tenés un producto financiero innovador, necesitás una narrativa fuerte. Creamos la historia y el contenido que la sostiene." },
  { emoji: "📈", tipo: "Fondos VC y de inversión", desc: "Newsletters de portfolio, reportes de mercado, comunicación con LPs. Contenido institucional con identidad de marca." },
];

const servicios = [
  {
    nombre: "Newsletter semanal",
    precio: "$800",
    periodo: "/mes",
    desc: "Una edición semanal de newsletter con tu branding, voz y audiencia. Redacción, diseño y distribución incluidos.",
    incluye: ["4 ediciones por mes", "Template personalizado", "Copywriting nativo", "Métricas de performance"],
    color: "from-verde/20 to-transparent",
    tagColor: "bg-verde/10 text-verde border-verde/20",
    tag: "Popular",
  },
  {
    nombre: "Gestión Twitter/X",
    precio: "$400",
    periodo: "/mes",
    desc: "Presencia activa en X con contenido que genera engagement real. Sin bots, sin copy-paste. Voz auténtica de tu marca.",
    incluye: ["20 posts por mes", "Hilos educativos", "Respuestas y comunidad", "Calendario editorial"],
    color: "from-blue-400/20 to-transparent",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    tag: "Redes",
  },
  {
    nombre: "Blog mensual",
    precio: "$600",
    periodo: "/mes",
    desc: "4 artículos de 1,000+ palabras por mes, optimizados para SEO y pensados para educar y convertir.",
    incluye: ["4 artículos/mes", "SEO optimizado", "Research incluido", "Imágenes y formato"],
    color: "from-dorado/20 to-transparent",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    tag: "SEO",
  },
  {
    nombre: "Pack completo",
    precio: "$1,500",
    periodo: "/mes",
    desc: "Newsletter + Twitter/X + Blog + coordinación editorial. Todo el contenido de tu marca, un solo punto de contacto.",
    incluye: ["Newsletter semanal", "Gestión Twitter/X", "4 artículos de blog", "Estrategia editorial"],
    color: "from-purple-400/20 to-transparent",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    tag: "Mejor valor",
  },
];

const proceso = [
  {
    numero: "01",
    titulo: "Briefing y estrategia",
    desc: "Una sesión de 60 minutos para entender tu proyecto, audiencia y objetivos. Salimos con un plan editorial claro para los primeros 30 días.",
  },
  {
    numero: "02",
    titulo: "Producción con AI + humano",
    desc: "Nuestro equipo usa AI para acelerar la investigación y el borrador, pero cada pieza pasa por revisión humana con contexto real de LATAM.",
  },
  {
    numero: "03",
    titulo: "Entrega, feedback y escala",
    desc: "Entregamos el contenido listo para publicar. Con el tiempo, nos sintonizamos con tu voz y necesitás cada vez menos feedback.",
  },
];

const metricas = [
  { valor: "80%", label: "Menos costo vs agencia tradicional" },
  { valor: "24-48h", label: "Tiempo de entrega de contenido" },
  { valor: "10x", label: "Más volumen con el mismo presupuesto" },
  { valor: "+60%", label: "Open rate promedio de nuestros newsletters" },
];

const faqs = [
  {
    pregunta: "¿Qué es 'La Radiografía'?",
    respuesta: "Es un análisis profundo one-time de tu proyecto, marca o mercado objetivo. 3,000+ palabras con research on-chain, análisis de competencia y recomendaciones accionables. Precio fijo de $2,500. Entrega en 7 días hábiles.",
  },
  {
    pregunta: "¿Cómo garantizan la calidad sin conocer mi proyecto?",
    respuesta: "Tenemos un proceso de onboarding de 60 minutos donde entendemos a fondo tu proyecto, audiencia y voz. Las primeras dos piezas siempre incluyen rondas de revisión ilimitadas hasta que estés conforme.",
  },
  {
    pregunta: "¿El contenido es genérico o personalizado?",
    respuesta: "Personalizado. Usamos AI para investigación y velocidad, pero cada pieza refleja la voz de tu marca y el contexto real de LATAM. No vendemos templates, vendemos contenido que parece escrito por tu propio equipo.",
  },
  {
    pregunta: "¿Puedo combinar servicios a medida?",
    respuesta: "Sí. Si necesitás newsletter mensual en lugar de semanal, o solo dos artículos de blog por mes, armamos un plan a tu medida. Escribinos y te mandamos una propuesta.",
  },
  {
    pregunta: "¿Con qué anticipación debo confirmar cada mes?",
    respuesta: "Trabajamos con calendario editorial mensual. Lo acordamos en la primera semana del mes y entregamos en los tiempos pactados. Si necesitás urgencias mid-month, tenemos disponibilidad limitada con recargo del 20%.",
  },
];

export default function AgencyPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            B2B
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Nosotros producimos<br />
            tu contenido.<br />
            <span className="text-verde verde-text-glow">Vos crecés.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Producción de contenido con AI para empresas crypto y fintech de LATAM.
            Newsletter, Twitter/X, blog y análisis profundos. Velocidad de AI, calidad humana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:agencia@laimpresora.co?subject=Consulta%20Agency%20La%20Impresora"
              className="bg-verde text-oscuro font-black px-10 py-5 rounded-full hover:bg-verde/90 transition-colors verde-glow text-lg"
            >
              Consultá disponibilidad →
            </a>
            <a href="#servicios" className="text-white/40 hover:text-verde transition-colors text-sm">
              Ver servicios y precios ↓
            </a>
          </div>

          {/* Stats rápidos */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {metricas.map((m) => (
              <div key={m.label} className="gradient-border rounded-2xl p-5">
                <div className="text-3xl font-black text-verde mb-1">{m.valor}</div>
                <div className="text-white/40 text-xs">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="px-6 py-20 bg-gris/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Para <span className="text-dorado">quién</span> es
            </h2>
            <p className="text-white/40">Trabajamos con empresas que tienen algo serio para decir en LATAM</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paraQuien.map((p) => (
              <div key={p.tipo} className="gradient-border rounded-2xl p-6 flex gap-5">
                <div className="text-4xl shrink-0">{p.emoji}</div>
                <div>
                  <h3 className="font-black text-lg mb-2">{p.tipo}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios con precios */}
      <section id="servicios" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Servicios y <span className="text-verde">precios</span>
            </h2>
            <p className="text-white/40">Sin letra chica. Lo que ves es lo que pagás.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {servicios.map((s) => (
              <div key={s.nombre} className="gradient-border rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform">
                <div className={`bg-gradient-to-b ${s.color} px-6 pt-6 pb-4`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full border ${s.tagColor}`}>
                      {s.tag}
                    </span>
                    <div className="text-right">
                      <span className="text-3xl font-black text-white">{s.precio}</span>
                      <span className="text-white/40 text-sm">{s.periodo}</span>
                    </div>
                  </div>
                  <h3 className="font-black text-xl mt-3">{s.nombre}</h3>
                </div>
                <div className="p-6">
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.incluye.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-white/60">
                        <span className="text-verde shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* La Radiografía */}
          <div className="gradient-border rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-dorado/10 to-transparent px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🔭</span>
                  <div>
                    <span className="bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-2 py-1 rounded-full">One-time</span>
                  </div>
                </div>
                <h3 className="font-black text-2xl mb-2">La Radiografía</h3>
                <p className="text-white/50 text-sm max-w-xl leading-relaxed">
                  Análisis profundo de tu proyecto, mercado o competencia. 3,000+ palabras con research on-chain,
                  análisis de narrativa y recomendaciones concretas. Entrega en 7 días hábiles.
                </p>
                <ul className="mt-4 flex flex-wrap gap-4">
                  {["Research on-chain", "Análisis competitivo", "Estrategia de contenido", "Recomendaciones accionables"].map((item) => (
                    <li key={item} className="flex gap-1.5 text-sm text-white/50">
                      <span className="text-dorado">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 text-center">
                <div className="text-5xl font-black text-dorado">$2,500</div>
                <div className="text-white/40 text-sm mb-4">pago único</div>
                <a
                  href="mailto:agencia@laimpresora.co?subject=La%20Radiografía"
                  className="block bg-dorado text-oscuro font-black px-6 py-3 rounded-full hover:bg-dorado/90 transition-colors text-sm"
                >
                  Solicitá tu Radiografía →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué AI + La Impresora */}
      <section className="px-6 py-20 bg-gris/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Por qué <span className="text-verde">AI + La Impresora</span>
            </h2>
            <p className="text-white/40">La combinación que ninguna agencia tradicional puede replicar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-border rounded-2xl p-6 text-center">
              <div className="text-5xl font-black text-verde mb-3">80%</div>
              <h3 className="font-black text-lg mb-2">Menos costo</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Una agencia tradicional cobra $8,000–$15,000/mes por los mismos servicios.
                Nosotros hacemos lo mismo con AI y expertise real, sin el overhead.
              </p>
            </div>
            <div className="gradient-border rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-dorado mb-3">24-48h</div>
              <h3 className="font-black text-lg mb-2">Velocidad real</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                En cripto, el timing es todo. Cuando hay una noticia que impacta tu mercado,
                tenemos el contenido listo antes de que tu competencia empiece a escribir.
              </p>
            </div>
            <div className="gradient-border rounded-2xl p-6 text-center">
              <div className="text-5xl font-black text-purple-400 mb-3">10x</div>
              <h3 className="font-black text-lg mb-2">Escala sin fricción</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Producir 1 pieza cuesta lo mismo que producir 10. Si tu negocio crece
                y necesitás más volumen, escalamos sin contratar más personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El proceso */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              El <span className="text-verde">proceso</span>
            </h2>
            <p className="text-white/40">Tres pasos para que tu contenido esté listo esta semana</p>
          </div>
          <div className="space-y-6">
            {proceso.map((paso, i) => (
              <div key={paso.numero} className="gradient-border rounded-2xl p-8 flex gap-8 items-start">
                <div className="text-5xl font-black text-verde/20 shrink-0 leading-none">{paso.numero}</div>
                <div>
                  <h3 className="font-black text-xl mb-2">{paso.titulo}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{paso.desc}</p>
                </div>
                {i < proceso.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-full text-verde/30 text-2xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas de ejemplo */}
      <section className="px-6 py-20 bg-gris/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Resultados <span className="text-dorado">reales</span>
            </h2>
            <p className="text-white/40">Benchmarks de proyectos que gestionamos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">📩</span>
                <h3 className="font-black">Newsletter — Exchange regional</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/40">Open rate</span>
                    <span className="text-verde font-bold">62%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-verde rounded-full" style={{ width: "62%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/40">Click-through rate</span>
                    <span className="text-verde font-bold">14%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-verde rounded-full" style={{ width: "14%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/40">Crecimiento de lista (3 meses)</span>
                    <span className="text-verde font-bold">+38%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-verde rounded-full" style={{ width: "38%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">𝕏</span>
                <h3 className="font-black">Twitter/X — Protocolo DeFi</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/40">Crecimiento de seguidores (mes)</span>
                    <span className="text-dorado font-bold">+2,100</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-dorado rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/40">Engagement rate</span>
                    <span className="text-dorado font-bold">4.8%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-dorado rounded-full" style={{ width: "48%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/40">Impresiones mensuales</span>
                    <span className="text-dorado font-bold">480k</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-dorado rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white/20 text-xs text-center mt-6">* Datos de clientes reales. Los resultados pueden variar según industria, audiencia y contexto de mercado.</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-border rounded-3xl p-12">
            <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Agency B2B
            </div>
            <h2 className="text-4xl font-black mb-4">
              ¿Tu empresa tiene algo<br /> para decir?
            </h2>
            <p className="text-white/40 text-lg mb-10 leading-relaxed">
              Trabajamos con un número limitado de clientes por vez para garantizar calidad.
              Consultá disponibilidad y te respondemos en 24 horas.
            </p>
            <a
              href="mailto:agencia@laimpresora.co?subject=Consulta%20Agency%20La%20Impresora"
              className="block bg-verde text-oscuro font-black px-10 py-5 rounded-full hover:bg-verde/90 transition-colors verde-glow text-lg mb-4"
            >
              Consultá disponibilidad →
            </a>
            <p className="text-white/30 text-sm">
              O escribinos directo a{" "}
              <a href="mailto:agencia@laimpresora.co" className="text-verde hover:underline">
                agencia@laimpresora.co
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-gris/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Preguntas <span className="text-verde">frecuentes</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.pregunta} className="gradient-border rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-white/90 hover:text-verde transition-colors list-none">
                    <span>{faq.pregunta}</span>
                    <span className="text-verde text-xl font-black group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-white/50 text-sm leading-relaxed">{faq.respuesta}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
