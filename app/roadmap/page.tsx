import Newsletter from "@/components/Newsletter";
import Link from "next/link";

export const metadata = {
  title: "Roadmap — La Impresora",
  description:
    "Construimos en público. Este es el roadmap de La Impresora: lo que ya lanzamos, lo que viene y cómo participás vos.",
};

const timelineItems = [
  {
    status: "done",
    icon: "✅",
    date: "Mayo 2026",
    titulo: "Sitio web + Newsletter + Blog",
    desc: "La base del proyecto: presencia digital, newsletter semanal y producción de contenido.",
  },
  {
    status: "done",
    icon: "✅",
    date: "Mayo 2026",
    titulo: "3 libros en Amazon KDP",
    desc: "Tres libros publicados en Amazon Kindle Direct Publishing sobre crypto, AI y libertad financiera.",
  },
  {
    status: "done",
    icon: "✅",
    date: "Mayo 2026",
    titulo: "Membresía Premium",
    desc: "Acceso a contenido exclusivo, análisis profundos y comunidad de lectores avanzados.",
  },
  {
    status: "in-progress",
    icon: "🔄",
    date: "Junio 2026",
    titulo: "Canal de YouTube — primeros 4 videos",
    desc: "Videos explicando los temas del newsletter en formato visual. El mismo contenido, otro canal.",
  },
  {
    status: "in-progress",
    icon: "🔄",
    date: "Junio 2026",
    titulo: "Micro-productos en Gumroad ($0.99–$4.99)",
    desc: "Guías rápidas, cheat sheets y plantillas accionables para aplicar lo que aprendés.",
  },
  {
    status: "planned",
    icon: "📋",
    date: "Julio 2026",
    titulo: "La Impresora Academy — curso completo",
    desc: "El curso estructurado sobre crypto, AI y tokenización para ir de cero a tomar decisiones reales.",
  },
  {
    status: "planned",
    icon: "📋",
    date: "Julio 2026",
    titulo: "Canal de Telegram Premium",
    desc: "Grupo privado con señales, análisis en tiempo real y acceso directo al equipo.",
  },
  {
    status: "planned",
    icon: "📋",
    date: "Agosto 2026",
    titulo: "Newsletter en inglés — LATAM Crypto Insider",
    desc: "La misma perspectiva latinoamericana pero para audiencia global en inglés.",
  },
  {
    status: "planned",
    icon: "📋",
    date: "Agosto 2026",
    titulo: "La Impresora Agency — servicios para empresas",
    desc: "Consultoría en adopción de AI y crypto para empresas que quieren moverse primero.",
  },
  {
    status: "planned",
    icon: "📋",
    date: "Q4 2026",
    titulo: "Podcast en Spotify y Apple Podcasts",
    desc: "Conversaciones largas, entrevistas y análisis en audio. Para escuchar mientras manejás.",
  },
];

const votoOpciones = [
  {
    numero: "01",
    titulo: "Señales de mercado premium",
    precio: "$25/mes",
    desc: "Análisis técnico semanal + alertas de entrada/salida en los activos que seguimos. Para el que ya invierte y quiere contexto.",
    color: "text-dorado",
    bg: "bg-dorado/5 border-dorado/20",
    badge: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    numero: "02",
    titulo: "Mentoring grupal mensual",
    precio: "$97/mes",
    desc: "Una sesión grupal en vivo por mes. Hacés preguntas, nosotros respondemos. Revisamos portfolios, estrategias y casos reales.",
    color: "text-verde",
    bg: "bg-verde/5 border-verde/20",
    badge: "bg-verde/10 text-verde border-verde/20",
  },
  {
    numero: "03",
    titulo: "Curso acelerado 2 horas",
    precio: "$47 pago único",
    desc: "Todo lo que necesitás saber sobre crypto + AI para tomar tu primera decisión en menos de una tarde.",
    color: "text-purple-400",
    bg: "bg-purple-400/5 border-purple-400/20",
    badge: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
];

const statusStyles: Record<string, string> = {
  done: "text-verde",
  "in-progress": "text-dorado",
  planned: "text-white/30",
};

const lineStyles: Record<string, string> = {
  done: "bg-verde",
  "in-progress": "bg-dorado",
  planned: "bg-white/10",
};

export default function RoadmapPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">

        {/* Hero */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-verde rounded-full animate-pulse" />
            Actualizado Mayo 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            Construimos en público.<br />
            <span className="text-verde verde-text-glow">Esto es lo que viene.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            La Impresora es un proyecto de media brand construido con AI.{" "}
            <strong className="text-white">Este es nuestro roadmap.</strong>{" "}
            Sin filtros, sin PR corporativo — lo que planeamos, cuándo y cómo.
          </p>
        </div>

        {/* Leyenda */}
        <div className="flex flex-wrap items-center gap-6 mb-12 text-sm text-white/50 justify-center">
          <span className="flex items-center gap-2">
            <span className="text-verde font-bold">✅</span> Lanzado
          </span>
          <span className="flex items-center gap-2">
            <span className="text-dorado font-bold">🔄</span> En progreso
          </span>
          <span className="flex items-center gap-2">
            <span className="text-white/30 font-bold">📋</span> Planificado
          </span>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Línea vertical */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-white/5" />

          <div className="space-y-2">
            {timelineItems.map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-8">
                {/* Dot */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 ${
                      item.status === "done"
                        ? "bg-verde/10 border-verde/40"
                        : item.status === "in-progress"
                        ? "bg-dorado/10 border-dorado/40"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    {item.icon}
                  </div>
                  {/* Conector vertical entre dots */}
                  {i < timelineItems.length - 1 && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-10 w-0.5 h-full ${lineStyles[item.status]}`}
                      style={{ opacity: 0.25 }}
                    />
                  )}
                </div>

                {/* Contenido */}
                <div className="flex-1 pt-1.5">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${statusStyles[item.status]}`}
                    >
                      {item.date}
                    </span>
                  </div>
                  <h3
                    className={`text-lg font-black mb-1 ${
                      item.status === "done"
                        ? "text-white"
                        : item.status === "in-progress"
                        ? "text-white"
                        : "text-white/40"
                    }`}
                  >
                    {item.titulo}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      item.status === "planned" ? "text-white/25" : "text-white/50"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección "Votá lo que viene primero" */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Voz del lector
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Votá lo que<br />
              <span className="text-dorado">viene primero</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Tenemos capacidad para lanzar una cosa a la vez. ¿Qué querés que construyamos antes?
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {votoOpciones.map((op) => (
              <div
                key={op.numero}
                className={`gradient-border rounded-2xl p-6 md:p-8 transition-transform hover:scale-[1.01]`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border shrink-0 ${op.bg}`}
                  >
                    <span className={`font-black text-sm ${op.color}`}>{op.numero}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className={`text-lg font-black ${op.color}`}>{op.titulo}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full border ${op.badge}`}>
                        {op.precio}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{op.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gradient-border rounded-2xl p-8 text-center">
            <p className="text-white/70 text-lg mb-2">
              Los miembros <strong className="text-dorado">Premium</strong> votan primero.
            </p>
            <p className="text-white/40 text-sm mb-6">
              Suscribite y decidís qué construimos. Tu voto cuenta.
            </p>
            <Link
              href="/premium"
              className="inline-block bg-dorado text-oscuro font-black px-8 py-4 rounded-full hover:bg-dorado/90 transition-all"
              style={{ boxShadow: "0 0 30px rgba(255,215,0,0.15)" }}
            >
              Quiero ser Premium →
            </Link>
          </div>
        </div>

        {/* Sección "Construido con AI" */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Transparencia total
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Construido<br />
              <span className="text-verde verde-text-glow">con AI</span>
            </h2>
          </div>

          <div className="gradient-border rounded-2xl p-8 md:p-10 space-y-5 text-white/60 text-lg leading-relaxed">
            <p>
              La Impresora no esconde que usa AI para producir contenido. Al contrario:{" "}
              <strong className="text-white">lo usamos como diferencial.</strong>
            </p>
            <p>
              El sistema que opera el proyecto se llama{" "}
              <strong className="text-verde">Wendy OS</strong> — un conjunto de agentes de AI
              diseñados para investigar, redactar, editar y distribuir contenido a escala. No
              reemplaza la inteligencia humana: la{" "}
              <strong className="text-white">amplifica</strong>.
            </p>
            <p>
              Cada edición del newsletter pasa por supervisión humana antes de salir. Cada análisis
              tiene una perspectiva real detrás. La AI hace el trabajo pesado de investigación y
              primer borrador. La edición y las ideas son humanas.
            </p>
            <p>
              Creemos que esta es la forma en que se van a construir los medios del futuro. Y lo
              estamos haciendo ahora, en LATAM, en español.{" "}
              <strong className="text-verde">Ese es el experimento.</strong>
            </p>
            <div className="pt-4 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {[
                  { valor: "Wendy OS", label: "Sistema de agentes propietario" },
                  { valor: "AI + humano", label: "Modelo de producción" },
                  { valor: "100%", label: "Transparencia sobre cómo funciona" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xl font-black text-verde mb-1">{item.valor}</div>
                    <div className="text-white/30 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Newsletter */}
        <Newsletter />
      </div>
    </div>
  );
}
