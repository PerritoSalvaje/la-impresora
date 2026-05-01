export const metadata = {
  title: "La Impresora Academy — Curso Completo de Crypto, AI y Finanzas Digitales",
  description:
    "6 módulos para entender cómo funciona el dinero real, generar ingresos en dólares y construir un sistema financiero propio. Acceso de por vida por $197 USD.",
};

// ─── Datos ────────────────────────────────────────────────────────────────────

const MODULOS = [
  {
    numero:      "01",
    titulo:      "Las Reglas del Juego",
    subtitulo:   "Cómo funciona el dinero real y por qué LATAM tiene ventaja",
    descripcion:
      "La mayoría aprende cripto al revés: empieza por el activo sin entender el sistema. Acá arrancamos desde el principio: cómo se crea el dinero, por qué la inflación no es un accidente y cómo LATAM —con su historia de devaluaciones— tiene una ventaja sobre el resto del mundo para entender esto antes que nadie.",
    temas: [
      "El sistema financiero global explicado sin eufemismos",
      "Por qué el dólar no es tan estable como te contaron",
      "La ventaja cultural de vivir en economías volátiles",
      "Mentalidad de preservación de capital vs especulación",
    ],
    tag: "Fundamentos",
  },
  {
    numero:      "02",
    titulo:      "Bitcoin y Crypto sin Bullshit",
    subtitulo:   "Las 5 criptos que importan y cómo comprar sin errores de principiante",
    descripcion:
      "Hay 20,000 criptomonedas. 95% son ruido. Este módulo te enseña a separar señal de basura: qué es Bitcoin realmente, cuáles son las otras 4 que vale la pena conocer, cómo comprar de forma segura desde cualquier país de LATAM y qué errores matan el dinero de los nuevos.",
    temas: [
      "Bitcoin explicado en 20 minutos sin jerga técnica",
      "Las 5 criptos con fundamentos reales",
      "Exchanges confiables y cómo verificar que son seguros",
      "Wallets: custodial vs self-custody, cuándo usar cada una",
      "El error más caro que cometen los nuevos (y cómo evitarlo)",
    ],
    tag: "Cripto",
  },
  {
    numero:      "03",
    titulo:      "AI para Ganar Plata",
    subtitulo:   "7 herramientas concretas para generar tu primer ingreso digital esta semana",
    descripcion:
      "La inteligencia artificial no es el futuro, es el presente. Hay gente en LATAM generando $500, $2,000 y $5,000 al mes usando herramientas disponibles hoy. Este módulo muestra exactamente cuáles usar, cómo combinarlas y qué modelos de negocio ya funcionan.",
    temas: [
      "El mapa del ecosistema AI (lo útil vs el hype)",
      "Las 7 herramientas con ROI demostrado",
      "3 modelos de negocio que podés empezar esta semana",
      "Cómo cotizar servicios de AI en dólares desde LATAM",
      "Automatizaciones que ahorran 10+ horas por semana",
    ],
    tag: "Ingresos",
  },
  {
    numero:      "04",
    titulo:      "DeFi y Rendimiento",
    subtitulo:   "5–10% anual en dólares: qué riesgos son reales y cuáles son cuento",
    descripcion:
      "Las finanzas descentralizadas permiten obtener rendimiento sobre tus dólares sin banco intermediario. Pero también hay proyectos que son estafas directas. Este módulo enseña a navegar DeFi con criterio: protocolos seguros, gestión de riesgo y cómo empezar con montos chicos.",
    temas: [
      "Qué es DeFi y por qué importa para LATAM",
      "Stablecoins: USDC, USDT, DAI — diferencias que importan",
      "Los 5 protocolos de rendimiento más establecidos",
      "Riesgos reales: smart contract, liquidez, regulatorio",
      "Cómo arrancar con $100 y escalar progresivamente",
    ],
    tag: "Rendimiento",
  },
  {
    numero:      "05",
    titulo:      "Tokenización",
    subtitulo:   "Inmuebles desde $50: cómo evaluar proyectos y no caer en el próximo Ponzi",
    descripcion:
      "La tokenización de activos del mundo real (RWA) es una de las tendencias más importantes de los próximos años. Ya podés invertir en inmuebles en Miami, campos en Paraguay o deuda corporativa desde $50. Este módulo enseña a evaluar si un proyecto es legítimo o es el típico esquema que termina mal.",
    temas: [
      "Qué es la tokenización y por qué cambia las reglas",
      "RWA: inmuebles, deuda, materias primas tokenizadas",
      "Cómo leer el whitepaper de un proyecto sin ser técnico",
      "Red flags que predicen el 90% de los rugpulls",
      "Proyectos reales con track record verificable",
    ],
    tag: "RWA",
  },
  {
    numero:      "06",
    titulo:      "El Sistema Completo",
    subtitulo:   "Tu portfolio según tu situación real y la rutina mensual para que todo funcione",
    descripcion:
      "El módulo final integra todo lo anterior en un sistema personalizado según tu situación: cuánto capital tenés, cuánto riesgo podés tolerar, en qué país vivís y cuánto tiempo tenés por semana. Salís con un portfolio armado y una rutina mensual de revisión.",
    temas: [
      "Cómo armar tu portfolio según tu perfil real",
      "Distribución por objetivos: preservación, crecimiento, rendimiento",
      "La rutina mensual de 2 horas que mantiene todo en orden",
      "Cuándo y cómo rebalancear sin pagar impuestos de más",
      "El tablero de seguimiento que usamos en La Impresora",
    ],
    tag: "Sistema",
  },
];

const PARA_VOS = [
  "Tenés ahorros en pesos o dólares que se te están devaluando y no sabés bien qué hacer con ellos",
  "Escuchaste hablar de crypto o AI pero te perdés con la jerga y no sabés por dónde empezar",
  "Querés generar ingresos en dólares desde LATAM usando habilidades digitales",
  "Ya compraste alguna cripto pero lo hiciste a ciegas y querés entender qué estás haciendo",
  "Tenés claro que el sistema financiero tradicional no te va a salvar y buscás alternativas reales",
];

const NO_ES_PARA_VOS = [
  "Buscás un esquema para hacerte rico rápido sin trabajar ni aprender nada",
  "Esperás señales de trading o tips de qué comprar mañana",
  "No estás dispuesto a dedicar al menos 2 horas por semana a implementar lo que aprendés",
];

const INCLUYE = [
  { titulo: "8+ horas de video",              desc: "Clases grabadas en HD, sin relleno. Cada minuto cuenta." },
  { titulo: "Recursos descargables",           desc: "Plantillas, checklists y guías de referencia por módulo." },
  { titulo: "Acceso de por vida",              desc: "Pagás una vez y el curso es tuyo para siempre. Sin suscripción." },
  { titulo: "Actualizaciones incluidas",       desc: "El mundo cambia. El curso también. Sin costo adicional." },
  { titulo: "Comunidad de alumnos",            desc: "Acceso al grupo privado donde los alumnos comparten experiencias." },
  { titulo: "Acceso multiplataforma",          desc: "Computadora, tablet o celular. Sin apps adicionales." },
];

const TESTIMONIOS = [
  {
    nombre: "Andrés F.",
    cargo:  "Diseñador gráfico · Venezuela",
    cita:
      "Con el módulo 3 armé un servicio de automatización de marketing con AI. En 3 semanas ya tenía 2 clientes y $800 en el bolsillo. El módulo de DeFi lo implementé con $200 y estoy generando un 8% anual en USDC. El curso se pagó solo en el primer mes.",
  },
  {
    nombre: "Camila R.",
    cargo:  "Contadora · Chile",
    cita:
      "Venía de perder plata comprando criptos sin entender nada. El módulo 2 me hizo entender exactamente qué había hecho mal. Ahora tengo una estrategia clara, sin FOMO, sin pánico. Llevo 6 meses con mi portfolio y duermo tranquila por primera vez.",
  },
  {
    nombre: "Mateo V.",
    cargo:  "Contador · Colombia",
    cita:
      "Lo que más me sorprendió fue el módulo de tokenización. Tenía prejuicio de que era para ricos. Entré a mi primera inversión en inmuebles tokenizados con $150. Es el primer activo real que tengo fuera del sistema bancario colombiano.",
  },
];

const FAQS = [
  {
    pregunta: "¿Necesito saber algo de crypto o tecnología para entrar?",
    respuesta:
      "No. El módulo 1 explica los fundamentos del sistema financiero antes de tocar cualquier aspecto técnico. Si ya sabés algo, avanzás más rápido.",
  },
  {
    pregunta: "¿El acceso es realmente de por vida?",
    respuesta:
      "Sí. Pagás una vez y el contenido es tuyo para siempre. Cada vez que actualicemos el material —al menos una vez por año— lo recibís sin costo adicional.",
  },
  {
    pregunta: "¿Qué pasa si en 30 días no me gustó?",
    respuesta:
      "Te devolvemos el 100% del dinero sin preguntas. Mandás un email, procesamos el reembolso en 5 días hábiles. Sin letra chica, sin trámites complicados.",
  },
  {
    pregunta: "¿Puedo acceder desde cualquier país de LATAM?",
    respuesta:
      "Sí. El pago acepta tarjeta de débito, crédito o crypto en dólares. No necesitás PayPal ni cuenta bancaria internacional.",
  },
  {
    pregunta: "¿Cuánto tiempo tengo que dedicarle por semana?",
    respuesta:
      "Con 3–4 horas por semana terminás el curso en un mes. El acceso es de por vida: podés ir a tu ritmo, pausar y volver cuando tengas tiempo. No hay fechas límite.",
  },
  {
    pregunta: "¿El curso recomienda qué comprar o son señales de trading?",
    respuesta:
      "No. La Impresora Academy enseña frameworks para tomar decisiones propias. No somos asesores financieros. El objetivo es que puedas pensar por vos mismo.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AcademyPage() {
  return (
    <div className="pt-24 min-h-screen">

      {/* ── Hero ── */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="section-label block mb-5">La Impresora Academy</span>

          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Seis módulos para que el dinero<br />
            deje de trabajar en tu contra.
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-10">
            Crypto, AI y tokenización desde cero hasta avanzado. Sin promesas de
            hacerse rico. Con un sistema que podés implementar esta semana.
          </p>

          {/* Precio + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-text-muted text-lg line-through">$297</span>
                <span className="font-display font-bold text-[3rem] text-text-primary leading-none">$197</span>
                <span className="badge badge-verde">Oferta de lanzamiento</span>
              </div>
              <p className="text-text-muted text-sm">USD · pago único · acceso de por vida</p>
            </div>

            <div className="flex flex-col gap-2">
              <a href="#" className="btn-primary">
                Entrar al curso — $197 →
              </a>
              <a href="#modulos" className="btn-secondary text-center text-sm py-2.5">
                Ver los 6 módulos ↓
              </a>
            </div>
          </div>

          <p className="text-text-muted text-xs mt-5">
            Garantía de 30 días · Pago único · Actualizaciones gratuitas incluidas
          </p>
        </div>
      </section>

      {/* ── Para quién es / Para quién no ── */}
      <section className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">Honestidad</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Para quién es esto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Para vos */}
            <div className="card p-8">
              <h3 className="font-display font-semibold text-verde text-lg mb-6">
                Esto es para vos si...
              </h3>
              <ul className="space-y-4">
                {PARA_VOS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                    <span className="text-verde font-bold shrink-0 mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No es para vos */}
            <div className="card p-8">
              <h3 className="font-display font-semibold text-text-secondary text-lg mb-6">
                No es para vos si...
              </h3>
              <ul className="space-y-4">
                {NO_ES_PARA_VOS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="text-white/25 font-bold shrink-0 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-text-muted text-xs leading-relaxed">
                  Preferimos ser honestos ahora a que te decepciones después.
                  Si buscás señales de trading, hay mil canales de Telegram para eso.
                  Acá enseñamos a pensar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Módulos ── */}
      <section id="modulos" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="section-label block mb-3">Contenido</span>
            <h2 className="font-display font-bold text-display-md text-text-primary mb-2">
              Los 6 módulos
            </h2>
            <p className="text-text-secondary text-sm">
              Un sistema completo, no una colección de videos sin conexión.
            </p>
          </div>

          <div className="space-y-3">
            {MODULOS.map((mod) => (
              <div key={mod.numero} className="card overflow-hidden">
                <details className="group">
                  <summary className="flex items-center gap-6 px-7 py-6 cursor-pointer list-none hover:bg-white/[0.02] transition-colors">
                    <span className="font-display font-bold text-3xl text-white/10 shrink-0 w-10">
                      {mod.numero}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display font-semibold text-text-primary text-base">
                          {mod.titulo}
                        </h3>
                        <span className="badge badge-neutral">{mod.tag}</span>
                      </div>
                      <p className="text-text-muted text-sm">{mod.subtitulo}</p>
                    </div>
                    <span className="text-verde font-bold text-xl group-open:rotate-45 transition-transform shrink-0 ml-2">
                      +
                    </span>
                  </summary>
                  <div className="px-7 pb-7 pt-1 border-t border-white/5">
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {mod.descripcion}
                    </p>
                    <ul className="space-y-2">
                      {mod.temas.map((tema, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="text-verde shrink-0">→</span>
                          <span>{tema}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué incluye ── */}
      <section className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="section-label block mb-3">Todo incluido</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Lo que recibís al entrar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INCLUYE.map((item) => (
              <div key={item.titulo} className="card p-6">
                <span className="text-verde text-sm font-bold block mb-3">✦</span>
                <h3 className="font-display font-semibold text-text-primary text-sm mb-1">
                  {item.titulo}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">Alumnos</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Lo que dicen los alumnos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIOS.map((t) => (
              <div key={t.nombre} className="card p-6 flex flex-col gap-4">
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  &ldquo;{t.cita}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="font-semibold text-text-primary text-sm">{t.nombre}</p>
                  <p className="text-text-muted text-xs mt-0.5">{t.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Garantía ── */}
      <section className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="card p-10">
            <span className="section-label block mb-4">Garantía</span>
            <h2 className="font-display font-bold text-display-sm text-text-primary mb-4">
              30 días o te devolvemos el dinero
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Si en los primeros 30 días sentís que el curso no valió la pena, te devolvemos el 100%
              del dinero. Mandás un email, procesamos el reembolso en 5 días hábiles.
              Sin formularios, sin preguntas, sin trampas.
            </p>
            <p className="text-text-muted text-xs">
              Apostamos al contenido, no a que te olvides de pedir el reembolso.
              Preferimos que vuelvas convencido a que te quedes desconforme.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq) => (
              <div key={faq.pregunta} className="card overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-text-primary font-semibold text-sm hover:text-verde transition-colors list-none">
                    <span>{faq.pregunta}</span>
                    <span className="text-verde font-bold ml-4 shrink-0 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-text-secondary text-sm leading-relaxed">{faq.respuesta}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="px-6 py-24">
        <div className="max-w-xl mx-auto">
          <div className="card p-10 text-center">
            <span className="badge badge-verde mb-6 inline-flex">Acceso de por vida</span>

            <h2 className="font-display font-bold text-display-sm text-text-primary mb-3 leading-tight">
              Empezá hoy.<br />No el lunes.
            </h2>
            <p className="text-text-muted text-sm mb-8">
              El mercado no espera. La próxima oportunidad tampoco.
            </p>

            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-text-muted text-lg line-through">$297</span>
              <span className="font-display font-bold text-[3.5rem] text-text-primary leading-none">$197</span>
            </div>
            <p className="text-text-muted text-xs mb-8">USD · pago único</p>

            <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
              {[
                "6 módulos completos",
                "8+ horas de video",
                "Recursos descargables",
                "Comunidad de alumnos",
                "Actualizaciones gratuitas",
                "Acceso de por vida",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-verde shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="btn-primary w-full justify-center text-base mb-4">
              Entrar al curso — $197 →
            </a>

            <div className="pt-5 border-t border-white/5">
              <p className="text-text-muted text-xs leading-relaxed">
                <span className="text-verde font-semibold">Garantía de 30 días.</span>{" "}
                Reembolso completo si no valió la pena. Sin preguntas, sin letra chica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA sticky mobile ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-3 md:hidden"
           style={{ background: "linear-gradient(to top, var(--bg) 70%, transparent)" }}>
        <a href="#" className="btn-primary w-full justify-center">
          Entrar al curso — $197 →
        </a>
      </div>
      {/* Spacer para que el CTA sticky no tape el footer */}
      <div className="h-20 md:hidden" />

    </div>
  );
}
