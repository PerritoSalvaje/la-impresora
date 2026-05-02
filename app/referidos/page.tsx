import Link from "next/link";
import ReferidosForm from "@/components/ReferidosForm";

export const metadata = {
  title: "Programa de referidos — Compartí, ganá",
  description:
    "Invitá a tus amigos a La Impresora y desbloqueá premios reales: 3 referidos = guía premium PDF, 10 = 1 mes Premium gratis, 25 = curso Academy gratis ($197).",
  alternates: { canonical: "https://laimpresora.io/referidos" },
};

const TIERS = [
  {
    refs: 1,
    nombre: "Primer amigo",
    premio: "Acceso a 3 ediciones premium archivadas",
    color: "verde",
    valor: "$15",
  },
  {
    refs: 3,
    nombre: "Embajador novato",
    premio: "Guía PDF: \"50 lecciones del dinero digital\" (60 páginas)",
    color: "verde",
    valor: "$29",
  },
  {
    refs: 10,
    nombre: "Embajador",
    premio: "1 mes de Premium gratis + acceso a la comunidad Telegram",
    color: "dorado",
    valor: "$9",
  },
  {
    refs: 25,
    nombre: "Embajador VIP",
    premio: "Curso Academy completo gratis ($197)",
    color: "dorado",
    valor: "$197",
  },
  {
    refs: 50,
    nombre: "Cofundador",
    premio: "Premium vitalicio + sesión 1:1 30min con el equipo + tu nombre en la página \"Founders\"",
    color: "dorado",
    valor: "$1,000+",
  },
];

const COMO_FUNCIONA = [
  {
    paso: 1,
    titulo: "Suscribite gratis al newsletter",
    desc: "Si todavía no sos parte, sumate. Es gratis para siempre.",
  },
  {
    paso: 2,
    titulo: "Recibís tu link único",
    desc: "Cada suscriptor tiene su propio link de referidos en el footer del newsletter.",
  },
  {
    paso: 3,
    titulo: "Compartilo con quien quieras",
    desc: "Por WhatsApp, por X, por mail. Todo cuenta — siempre que sea email real y se quede 7+ días.",
  },
  {
    paso: 4,
    titulo: "Desbloqueás premios automáticamente",
    desc: "Cuando alcanzás cada nivel, recibís un email con tu premio. Sin trámites.",
  },
];

const FAQS = [
  {
    q: "¿Cómo recibo mi link único?",
    a: "Suscribite primero al newsletter (gratis). En el primer email de bienvenida y en el footer de cada edición vas a tener tu link personal con la forma laimpresora.io/?ref=tu-codigo.",
  },
  {
    q: "¿Cuándo se cuenta un referido?",
    a: "Cuando alguien se suscribe usando tu link, lo confirma con su email y se mantiene activo por 7+ días. Esto previene bots y emails de basura.",
  },
  {
    q: "¿Cómo sé cuántos referidos llevo?",
    a: "En el footer de cada newsletter te mostramos tu contador actualizado. Próximamente vas a tener un dashboard propio en la web.",
  },
  {
    q: "¿Puedo recibir el premio si ya soy Premium?",
    a: "Sí. Si llegás a 10 referidos siendo ya Premium, te extendemos un mes gratis. Si llegás a 25 y ya tenés Academy, te damos $100 en libros + acceso a la comunidad VIP.",
  },
  {
    q: "¿Cuánto tarda el premio?",
    a: "Automático. En cuanto alcanzás el tier, te llega un email con el acceso. Si es físico (sticker, libro firmado), se envía dentro de los 30 días.",
  },
  {
    q: "¿Puedo refer a mi propio email alternativo?",
    a: "No. El sistema detecta IPs duplicadas y emails sospechosos. Pero podés refer a familiares, amigos, colegas — todos suman.",
  },
];

export default function ReferidosPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label block mb-5">Programa de referidos</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Compartí La Impresora.<br />
            <span className="text-verde">Ganá premios reales.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Cada amigo que se suma desbloquea recompensas. Desde una guía PDF (3 referidos)
            hasta acceso vitalicio a Premium (50 referidos). Sin trampas, sin letra chica.
          </p>
          <Link href="#empezar" className="btn-primary inline-flex">
            Empezar a referir →
          </Link>
        </div>
      </section>

      {/* Tiers de premios */}
      <section className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">Premios</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              5 niveles de recompensa
            </h2>
          </div>

          <div className="space-y-3">
            {TIERS.map((tier) => (
              <div
                key={tier.refs}
                className={`card p-6 flex flex-col md:flex-row md:items-center gap-5 ${
                  tier.color === "dorado" ? "ring-1 ring-dorado/30" : ""
                }`}
              >
                <div className="flex items-center gap-4 md:min-w-[140px]">
                  <div
                    className={`font-display font-bold text-[3rem] leading-none ${
                      tier.color === "dorado" ? "text-dorado" : "text-verde"
                    }`}
                  >
                    {tier.refs}
                  </div>
                  <div className="text-text-muted text-xs uppercase tracking-wider">
                    referidos
                  </div>
                </div>

                <div className="flex-1">
                  <p
                    className={`text-xs uppercase tracking-wider font-bold mb-1 ${
                      tier.color === "dorado" ? "text-dorado" : "text-verde"
                    }`}
                  >
                    {tier.nombre}
                  </p>
                  <p className="text-text-primary text-base font-semibold leading-snug">
                    {tier.premio}
                  </p>
                </div>

                <div className="text-right md:min-w-[80px]">
                  <p className="text-text-muted text-xs uppercase tracking-wider">Valor</p>
                  <p className="font-display font-bold text-text-secondary text-lg">{tier.valor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">Cómo funciona</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              4 pasos simples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMO_FUNCIONA.map((step) => (
              <div key={step.paso} className="card p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="font-display font-bold text-verde text-2xl leading-none shrink-0"
                    style={{ minWidth: "32px" }}
                  >
                    {step.paso}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-text-primary text-base mb-2">
                      {step.titulo}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form para empezar */}
      <section id="empezar" className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <span className="section-label block mb-3">Empezá ahora</span>
            <h2 className="font-display font-bold text-display-md text-text-primary mb-3">
              Suscribite y obtené tu link único
            </h2>
            <p className="text-text-secondary text-base">
              Te llega por email apenas confirmes tu suscripción. Después, compartilo donde quieras.
            </p>
          </div>

          <ReferidosForm />
        </div>
      </section>

      {/* FAQ */}
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
              <div key={faq.q} className="card overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-text-primary font-semibold text-sm hover:text-verde transition-colors list-none">
                    <span>{faq.q}</span>
                    <span className="text-verde font-bold ml-4 shrink-0 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
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
