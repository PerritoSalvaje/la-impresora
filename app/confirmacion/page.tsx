import Link from "next/link";

export const metadata = {
  title: "Confirmá tu suscripción · La Impresora",
  description: "Tu suscripción está casi lista. Mientras confirmás tu email, mirá esto.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://laimpresora.io/confirmacion" },
};

const QUICK_ACCESS = [
  {
    titulo: "Bundle 3 libros + Pack Prompts",
    desc: "$27. Solo HOY (mientras confirmás tu suscripción) con $5 off — código WELCOME5",
    badge: "Solo hoy",
    href: "/tienda",
    accent: "dorado",
  },
  {
    titulo: "Mapa de Dolarización LATAM",
    desc: "Calculadora + 7 vías legales para parar la pérdida de tu peso. Gratis.",
    badge: "Gratis",
    href: "/recursos/dolarizar",
    accent: "verde",
  },
  {
    titulo: "30 Prompts AI",
    desc: "Pack gratuito que armé para emprendedores LATAM.",
    badge: "Gratis",
    href: "/recursos/prompts",
    accent: "verde",
  },
];

export default function ConfirmacionPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-verde inline-flex mb-6">
            ✓ Casi listo
          </span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Revisá tu email para confirmar.
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-3 max-w-2xl">
            Te mandé un email a confirmar la suscripción. Es para chequear que vos sos vos
            (no un bot) y para que lleguen los próximos emails al inbox, no a spam.
          </p>
          <p className="text-text-secondary text-base mb-10 max-w-2xl">
            Si en 5 minutos no llega, mirá la carpeta de spam y marcá "No es spam" — eso
            ayuda a que los próximos lleguen donde tienen que llegar.
          </p>

          <div className="card p-6 max-w-xl mb-12">
            <p className="text-text-muted text-xs uppercase tracking-wider mb-3">Mientras tanto</p>
            <p className="font-display font-semibold text-text-primary text-lg mb-2">
              ¿Querés algo ya?
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              No hace falta esperar al primer email del jueves. Acá tres cosas para empezar
              ahora.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {QUICK_ACCESS.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className={`card p-6 hover:bg-white/5 transition-colors ${q.accent === "dorado" ? "ring-1 ring-dorado/40" : ""}`}
              style={q.accent === "dorado" ? { background: "var(--surface-2)" } : {}}
            >
              <span className={`badge mb-4 inline-flex ${q.accent === "dorado" ? "badge-dorado" : "badge-verde"}`}>
                {q.badge}
              </span>
              <h3 className="font-display font-semibold text-text-primary text-base mb-2 leading-snug">
                {q.titulo} →
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{q.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16" style={{ background: "var(--surface)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-display-md text-text-primary mb-4">
            ¿Qué viene después?
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-7">
            En cuanto confirmes el email, te llega la "Guía del Inversor en la Era Digital"
            (24 páginas). Después, cada jueves a las 9am ART, te llega el newsletter.
          </p>
          <p className="text-text-muted text-sm">
            Si querés más, sabés dónde encontrarme. Si no, no pasa nada — el jueves nos vemos.
          </p>
        </div>
      </section>
    </div>
  );
}
