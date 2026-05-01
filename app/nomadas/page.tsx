import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Nómadas Digitales & FIRE — Trabajar desde cualquier lugar | La Impresora",
  description:
    "La guía para hispanoablantes: ingresos en dólares, gastos en moneda local, libertad geográfica. Top destinos, herramientas esenciales y el roadmap FIRE para LATAM.",
};

const pilares = [
  {
    numero: "01",
    titulo: "Ingresos en dólares",
    desc: "La clave es cobrar en la moneda más fuerte posible. Freelancing, servicios digitales, afiliados, SaaS, contenido. El diferencial cambiario hace que $2,000 USD/mes sean equivalentes a $6,000–$10,000 en poder adquisitivo local en muchos destinos.",
    herramientas: ["Freelancing: Upwork, Toptal, Contra", "Servicios de AI: automatizaciones y contenido", "Afiliados: crypto, SaaS, viaje"],
    color: "text-verde",
    border: "border-verde/30",
    bg: "bg-verde/5",
    icono: "💵",
  },
  {
    numero: "02",
    titulo: "Gastos en moneda local",
    desc: "El arbitraje geográfico es la ventaja más poderosa: vivir en países donde el costo de vida es una fracción del de EE.UU. o Europa, mientras cobrás precios globales. $1,500/mes cubre un estilo de vida excelente en la mayoría de destinos LATAM o del Sudeste Asiático.",
    herramientas: ["Airbnb para estancias largas (10–30% descuento)", "Tarjetas sin comisión en el exterior (Wise, Revolut)", "Stablecoins para ahorros"],
    color: "text-dorado",
    border: "border-dorado/30",
    bg: "bg-dorado/5",
    icono: "🌍",
  },
  {
    numero: "03",
    titulo: "Libertad geográfica",
    desc: "No es solo trabajar remoto. Es diseñar la vida activamente: elegir dónde vivir según calidad de vida, costo, clima, comunidad e impuestos, no por donde naciste. Eso requiere sistemas claros de trabajo, herramientas correctas y una estructura financiera sólida.",
    herramientas: ["VPN confiable para trabajo remoto seguro", "Herramientas de productividad async", "Estructura legal: autónomo, LLC o sociedad"],
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    icono: "✈️",
  },
];

const destinos = [
  {
    pais: "Colombia — Medellín",
    bandera: "🇨🇴",
    costo: "$1,200–1,800 USD/mes",
    internet: "Excelente (500 Mbps promedio)",
    comunidad: "La mayor comunidad nomade de LATAM",
    pros: ["Visa nómada digital disponible", "Clima de eterna primavera", "Vuelos directos a EE.UU. y Europa", "Comunidad tech muy activa"],
    contras: ["Seguridad requiere zonas específicas", "Temporada de lluvia mayo–noviembre"],
    color: "border-yellow-500/30 bg-yellow-500/5",
    badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    pais: "México — Ciudad de México",
    bandera: "🇲🇽",
    costo: "$1,400–2,200 USD/mes",
    internet: "Muy bueno en Condesa / Roma / Polanco",
    comunidad: "La más grande de habla hispana",
    pros: ["Hub tech latinoamericano", "Vuelos a todas partes", "Gastronomía mundial", "Barrios coloniales únicos"],
    contras: ["Costo subió mucho post-pandemia", "Tráfico y contaminación en algunas zonas"],
    color: "border-green-500/30 bg-green-500/5",
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    pais: "Portugal — Lisboa / Oporto",
    bandera: "🇵🇹",
    costo: "$2,000–3,000 USD/mes",
    internet: "Excelente en todo el país",
    comunidad: "La puerta a Europa para latinoamericanos",
    pros: ["Visa D8 para nómadas digitales", "Acceso a toda la Unión Europea", "Idioma cercano al español", "Seguridad muy alta"],
    contras: ["Costo más alto que LATAM", "Clima gris en invierno"],
    color: "border-blue-500/30 bg-blue-500/5",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    pais: "Paraguay — Asunción",
    bandera: "🇵🇾",
    costo: "$800–1,400 USD/mes",
    internet: "Bueno en zonas céntricas",
    comunidad: "Creciendo rápido en cripto/tech",
    pros: ["Impuestos muy bajos (0% ISR sobre ingresos extranjeros)", "Fácil residencia para latinoamericanos", "Excelente para armado de estructura legal", "Costo de vida más bajo de la lista"],
    contras: ["Menos opciones culturales", "Infraestructura en desarrollo"],
    color: "border-red-500/30 bg-red-500/5",
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    pais: "Argentina — Buenos Aires",
    bandera: "🇦🇷",
    costo: "$900–1,600 USD/mes (con dólar blue)",
    internet: "Muy bueno en capital y GBA",
    comunidad: "Tremenda cantidad de talent tech",
    pros: ["La mejor gastronomía y cultura de LATAM", "Talento tech de altísima calidad", "Arquitectura europea única", "Precios muy convenientes en USD"],
    contras: ["Inestabilidad política y económica", "Restricciones bancarias para extranjeros"],
    color: "border-cyan-500/30 bg-cyan-500/5",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
];

const herramientas = [
  {
    nombre: "NordVPN",
    desc: "VPN esencial para trabajo remoto seguro. Protege conexiones en WiFi público, accede a servicios por ubicación y protege tu actividad bancaria desde el exterior.",
    categoria: "Seguridad",
    precio: "~$3.5/mes (plan anual)",
    link: "https://nordvpn.com/?aff=la-impresora",
    afiliado: true,
    color: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    nombre: "Wise",
    desc: "La cuenta bancaria del nómada. Recibís pagos en USD, EUR o GBP con una cuenta real. Tarjeta débito internacional sin comisiones ocultas. Mueve plata entre países al tipo real.",
    categoria: "Finanzas",
    precio: "Gratis (tarjeta con costo único)",
    link: "https://wise.com/invite/la-impresora",
    afiliado: true,
    color: "bg-verde/10 text-verde border-verde/20",
  },
  {
    nombre: "Notion",
    desc: "Sistema de productividad personal. Para nómadas es la base de operaciones: proyectos, clientes, CRM, wiki personal y notas. La mejor relación precio-funcionalidad disponible.",
    categoria: "Productividad",
    precio: "Plan gratis generoso",
    link: "https://notion.so",
    afiliado: false,
    color: "bg-white/5 text-white/40 border-white/10",
  },
  {
    nombre: "Nomad List",
    desc: "El directorio de destinos para nómadas. Costo de vida real, velocidad de internet, seguridad, clima y reviews de la comunidad. Datos actualizados por 100k+ nómadas reales.",
    categoria: "Destinos",
    precio: "$100 (acceso de por vida)",
    link: "https://nomadlist.com",
    afiliado: false,
    color: "bg-dorado/10 text-dorado border-dorado/20",
  },
];

const postsBlog = [
  {
    slug: "gap-ai-oportunidad",
    titulo: "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo",
    desc: "Cómo generar ingresos en dólares usando AI. El punto de partida para el modelo nómada.",
  },
  {
    slug: "banco-tu-peor-enemigo",
    titulo: "Por qué tu banco es tu peor enemigo financiero",
    desc: "Los bancos locales son el mayor obstáculo para el modelo nómada. Cómo evitarlos.",
  },
];

export default function NomadasPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-verde/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-verde/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-verde rounded-full animate-pulse-slow" />
            Nómadas Digitales & FIRE
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            Trabajar desde<br />
            <span className="text-verde verde-text-glow">cualquier lugar.</span><br />
            <span className="text-white text-4xl md:text-5xl">Vivir en tus términos.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            No es un sueño de Instagram.{" "}
            <strong className="text-white">
              Es un modelo económico concreto basado en tres pilares: ingresos en dólares, gastos en moneda local y libertad geográfica.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pilares"
              className="bg-verde text-oscuro font-black text-lg px-8 py-4 rounded-full hover:bg-verde/90 transition-all verde-glow"
            >
              Los 3 pilares del modelo →
            </a>
            <a
              href="#destinos"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-verde/30 hover:text-verde transition-all"
            >
              Top 5 destinos para hispanos
            </a>
          </div>
        </div>
      </section>

      {/* 3 pilares */}
      <section id="pilares" className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              El modelo
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              3 pilares para vivir{" "}
              <span className="text-verde verde-text-glow">en cualquier lugar</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              No necesitás ser millonario. Necesitás el arbitraje correcto.
            </p>
          </div>

          <div className="space-y-6">
            {pilares.map((pilar) => (
              <div key={pilar.numero} className={`rounded-2xl border p-6 md:p-8 ${pilar.border} ${pilar.bg}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 ${pilar.border} ${pilar.bg} shrink-0`}>
                      {pilar.icono}
                    </div>
                    <span className={`font-mono text-xs font-bold ${pilar.color}`}>{pilar.numero}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-black mb-3 ${pilar.color}`}>{pilar.titulo}</h3>
                    <p className="text-white/60 leading-relaxed mb-5">{pilar.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {pilar.herramientas.map((h) => (
                        <span key={h} className={`text-xs px-3 py-1 rounded-full border ${pilar.border} ${pilar.bg} ${pilar.color}`}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 5 destinos */}
      <section id="destinos" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Destinos curados
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Top 5 destinos para{" "}
              <span className="text-dorado">hispanohablantes</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Seleccionados por costo de vida, calidad de internet, comunidad y barreras de entrada para latinoamericanos.
            </p>
          </div>

          <div className="space-y-5">
            {destinos.map((destino, i) => (
              <div key={destino.pais} className={`rounded-2xl border p-6 md:p-8 ${destino.color}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-1 md:w-16 md:shrink-0">
                    <span className="text-4xl">{destino.bandera}</span>
                    <span className="text-white/20 font-mono text-xs">#{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-black text-white">{destino.pais}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${destino.badge}`}>
                        {destino.costo}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-white/30 text-xs font-bold mb-1 uppercase tracking-wider">Internet</p>
                        <p className="text-white/60 text-xs">{destino.internet}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 md:col-span-2">
                        <p className="text-white/30 text-xs font-bold mb-1 uppercase tracking-wider">Comunidad</p>
                        <p className="text-white/60 text-xs">{destino.comunidad}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-verde text-xs font-bold mb-2 uppercase tracking-wider">Pros</p>
                        <ul className="space-y-1">
                          {destino.pros.map((pro) => (
                            <li key={pro} className="text-white/50 text-xs flex items-start gap-2">
                              <span className="text-verde shrink-0">+</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-white/30 text-xs font-bold mb-2 uppercase tracking-wider">Contras</p>
                        <ul className="space-y-1">
                          {destino.contras.map((contra) => (
                            <li key={contra} className="text-white/50 text-xs flex items-start gap-2">
                              <span className="text-white/30 shrink-0">-</span>
                              {contra}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas esenciales */}
      <section className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/5 border border-white/10 text-white/50 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Stack esencial
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Herramientas para el{" "}
              <span className="text-verde verde-text-glow">modo nómada</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm">
              Las que usamos. Algunas tienen links de afiliado marcados — eso no cambia nuestra opinión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {herramientas.map((h) => (
              <a
                key={h.nombre}
                href={h.link}
                target="_blank"
                rel={h.afiliado ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                className="gradient-border rounded-2xl p-6 hover:scale-[1.02] transition-transform block group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-black text-lg text-white group-hover:text-verde transition-colors">{h.nombre}</h3>
                      {h.afiliado && (
                        <span className="text-xs text-white/20 border border-white/10 px-1.5 py-0.5 rounded-full">afiliado</span>
                      )}
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${h.color}`}>
                      {h.categoria}
                    </span>
                  </div>
                  <span className="text-xs text-white/30 border border-white/10 px-2 py-1 rounded-full shrink-0">
                    {h.precio}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{h.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black mb-2">Artículos relacionados</h2>
              <p className="text-white/40">El conocimiento base para el modelo nómada.</p>
            </div>
            <Link href="/blog" className="text-verde text-sm hover:underline shrink-0">
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
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-verde/10 text-verde border-verde/20 shrink-0">
                    Nómadas
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 leading-tight hover:text-verde transition-colors">
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
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Newsletter semanal
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            El modelo nómada,<br />
            <span className="text-verde verde-text-glow">explicado cada jueves</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Destinos, herramientas, ingresos digitales y finanzas internacionales para hispanohablantes.{" "}
            <strong className="text-white">Gratis, cada jueves.</strong>
          </p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
