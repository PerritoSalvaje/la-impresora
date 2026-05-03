import Link from "next/link";

export const metadata = {
  title: "¡Gracias! · La Impresora",
  description: "Tu compra está confirmada. Lo que viene ahora.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://laimpresora.io/gracias" },
};

const NEXT_STEPS = [
  {
    n: "01",
    titulo: "Revisá tu email",
    desc: "En los próximos 5 minutos te llega el acceso a todo lo que compraste. Si no aparece, revisá la carpeta de spam y marcá como 'No spam' (importante para que no se pierdan los próximos).",
  },
  {
    n: "02",
    titulo: "Para Premium / Academy: link a la comunidad Telegram",
    desc: "El email incluye un link único a la comunidad privada de Telegram. Es de un solo uso, válido 24 horas. Si lo perdés, escribime y te genero otro.",
  },
  {
    n: "03",
    titulo: "Para libros / packs digitales: link de descarga",
    desc: "Los archivos son tuyos para siempre. Guardalos. El link de descarga expira en 7 días por seguridad — bajalos ahora aunque no los vayas a leer hoy.",
  },
];

const RECURSOS_INMEDIATOS = [
  {
    titulo: "La Guía del Inversor",
    desc: "Por si todavía no la leíste — base de todo lo que vas a aprender",
    href: "/guia",
  },
  {
    titulo: "Mapa de Dolarización LATAM",
    desc: "Calculadora + 7 vías legales para parar la pérdida de tu peso",
    href: "/recursos/dolarizar",
  },
  {
    titulo: "30 Prompts AI gratis",
    desc: "Para que arranques a usar AI en serio desde hoy",
    href: "/recursos/prompts",
  },
  {
    titulo: "Programa de referidos",
    desc: "Compartí La Impresora y desbloqueás más beneficios",
    href: "/referidos",
  },
];

export default function GraciasPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-verde inline-flex mb-6">✓ Compra confirmada</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Gracias.<br />
            <span className="text-verde">En serio.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-2xl">
            Cada compra mantiene esto andando — sin sponsors, sin venta de datos, sin ads. Solo
            lectores que pagan por análisis honesto. Eso es lo que estás haciendo posible.
          </p>

          <div className="space-y-3 mb-12">
            {NEXT_STEPS.map((s) => (
              <div key={s.n} className="card p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-bold text-dorado text-2xl">{s.n}</span>
                  <h3 className="font-display font-semibold text-text-primary text-base m-0">
                    {s.titulo}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed pl-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <span className="section-label block mb-3">Mientras tanto</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-3">
            Recursos para empezar ya mismo
          </h2>
          <p className="text-text-secondary text-base mb-10 max-w-2xl">
            Mientras te llega el email, podés ir entrando con estos recursos gratuitos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RECURSOS_INMEDIATOS.map((r) => (
              <Link key={r.href} href={r.href} className="card p-6 hover:bg-white/5 transition-colors">
                <p className="font-display font-semibold text-text-primary text-base mb-2">
                  {r.titulo} →
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto card p-8 text-center">
          <span className="badge badge-dorado inline-flex mb-5">Algo a recordar</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-4">
            ¿Algo no llegó? Escribime.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-7 max-w-md mx-auto">
            Si en 30 minutos el email de acceso no llegó, mandame uno a hola@laimpresora.io con
            tu email de compra. Reviso personal en menos de 12 horas.
          </p>
          <a
            href="mailto:hola@laimpresora.io?subject=Compra%20-%20no%20llegó%20el%20acceso"
            className="btn-secondary inline-flex"
          >
            Escribir a hola@laimpresora.io →
          </a>
        </div>
      </section>
    </div>
  );
}
