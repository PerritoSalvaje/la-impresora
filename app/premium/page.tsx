export const metadata = {
  title: "Premium — La Impresora",
  description:
    "El nivel siguiente de La Impresora. Acceso completo a análisis profundos, portafolio modelo, alertas y comunidad exclusiva por $9/mes ó $79/año.",
};

// ─── Datos ────────────────────────────────────────────────────────────────────

const PROPUESTA = [
  {
    titulo: "Análisis que no encontrás en ningún otro lado",
    desc:
      "Cada semana, 1,500+ palabras sobre una oportunidad concreta: macro, micro, riesgo y acción. No titulares, no hype. Análisis con el que podés tomar decisiones.",
  },
  {
    titulo: "Portafolio modelo + alertas en tiempo real",
    desc:
      "Publicamos cómo está asignado el portafolio modelo cada mes, con el razonamiento detrás de cada decisión. Cuando algo importante cambia, recibís una alerta antes de que sea noticia masiva.",
  },
  {
    titulo: "Comunidad de gente que está haciendo lo mismo",
    desc:
      "Acceso al grupo privado donde los miembros comparten operaciones, dudas y oportunidades. Preguntas reales, respuestas reales de gente que ya operó el mismo problema.",
  },
];

const COMPARACION = [
  { feature: "Newsletter semanal",                       free: true,  premium: true },
  { feature: "Artículos del blog",                       free: true,  premium: true },
  { feature: "Videos del canal de YouTube",              free: true,  premium: true },
  { feature: "Newsletter exclusivo (viernes)",           free: false, premium: true },
  { feature: "Análisis profundos de mercado",            free: false, premium: true },
  { feature: "Acceso anticipado a nuevos libros",        free: false, premium: true },
  { feature: "30% descuento en todos los productos",     free: false, premium: true },
  { feature: "Comunidad privada de miembros",            free: false, premium: true },
  { feature: "Sesiones de preguntas en vivo (mensual)",  free: false, premium: true },
  { feature: "Portafolio modelo actualizado mensual",    free: false, premium: true },
  { feature: "Alertas de mercado por email",             free: false, premium: true },
];

const TESTIMONIOS = [
  {
    nombre: "Rodrigo M.",
    cargo:  "Ingeniero · México",
    cita:
      "Llevo 4 meses en Premium y ya recuperé la inversión con el descuento en los libros y un trade que salió del análisis semanal. El portafolio modelo me ayudó a distribuir sin jugarme todo en una sola moneda.",
  },
  {
    nombre: "Valentina C.",
    cargo:  "Freelancer · Colombia",
    cita:
      "La comunidad es lo que más vale. Pregunté sobre cómo declarar cripto en Colombia y en dos horas tenía tres respuestas útiles de gente que ya lo había hecho. El newsletter de los viernes es otro nivel.",
  },
  {
    nombre: "Sebastián L.",
    cargo:  "Emprendedor · Argentina",
    cita:
      "$9 al mes es un café. Las alertas de mercado me sacaron de una posición antes de que cayera 35%. El análisis del viernes pasado solo ya lo justificó.",
  },
];

const FAQS = [
  {
    pregunta: "¿Cuándo se me cobra?",
    respuesta:
      "El primer cobro es inmediato al suscribirte. Luego se renueva automáticamente cada 30 días. Podés cancelar desde tu panel con un clic, sin trámites ni penalidades.",
  },
  {
    pregunta: "¿Puedo cancelar en cualquier momento?",
    respuesta:
      "Sí. Sin preguntas, sin procesos complicados. Cancelás desde tu cuenta y no se te vuelve a cobrar. Seguís teniendo acceso hasta que venza el período ya pagado.",
  },
  {
    pregunta: "¿Qué pasa si no estoy satisfecho?",
    respuesta:
      "Tenés 30 días de garantía total. Si en el primer mes sentís que no valió la pena, te devolvemos el dinero completo. Sin letra chica, sin trámites.",
  },
  {
    pregunta: "¿El contenido es en español?",
    respuesta:
      "Todo: análisis, newsletter, comunidad y sesiones en vivo. Pensado específicamente para la realidad económica de LATAM.",
  },
  {
    pregunta: "¿Cómo accedo a la comunidad privada?",
    respuesta:
      "Al suscribirte recibís un email con el link de acceso. Funciona desde el navegador, sin apps adicionales.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PremiumPage() {
  return (
    <div className="pt-24 min-h-screen">

      {/* ── Hero ── */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="section-label block mb-5">La Impresora Premium</span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
            <div className="flex-1">
              <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
                El análisis que el<br />
                newsletter no puede dar.
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                Para los que ya leen el newsletter gratuito y quieren ir más a fondo:
                análisis profundos, portafolio modelo, alertas y una comunidad que opera en serio.
              </p>
            </div>

            {/* Precio destacado */}
            <div className="card p-8 shrink-0 min-w-[260px]">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-3">Membresía mensual</p>
              <div className="font-display font-bold text-[3.5rem] text-dorado leading-none mb-1">$9</div>
              <p className="text-text-secondary text-sm mb-6">por mes · ó $79/año (33% off)</p>
              <a href="#" className="btn-primary w-full justify-center">
                Suscribirte ahora →
              </a>
              <p className="text-text-muted text-xs mt-3 text-center">
                Garantía de 30 días · Sin preguntas
              </p>
            </div>
          </div>

          {/* Propuesta de valor — 3 bullets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROPUESTA.map((item, i) => (
              <div key={i} className="card p-6">
                <span className="text-verde text-lg font-bold block mb-3">→</span>
                <h3 className="font-display font-semibold text-text-primary text-base mb-2 leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tabla comparativa ── */}
      <section id="comparacion" className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">Comparativa</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Gratis vs Premium
            </h2>
          </div>

          <div className="card overflow-hidden">
            {/* Header tabla */}
            <div className="grid grid-cols-3 px-6 py-4 border-b border-white/5" style={{ background: "var(--surface-2)" }}>
              <div className="col-span-1 text-text-muted text-xs uppercase tracking-wider">Contenido</div>
              <div className="text-center text-text-muted text-xs uppercase tracking-wider">Gratis</div>
              <div className="text-center text-dorado text-xs uppercase tracking-wider font-bold">Premium</div>
            </div>

            {/* Filas */}
            {COMPARACION.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-3.5 border-b border-white/4 text-sm ${
                  i % 2 === 0 ? "" : "bg-white/[0.015]"
                }`}
              >
                <div className="col-span-1 text-text-secondary pr-4">{row.feature}</div>
                <div className="text-center">
                  {row.free
                    ? <span className="text-verde font-bold">✓</span>
                    : <span className="text-white/15">—</span>}
                </div>
                <div className="text-center">
                  <span className="text-dorado font-bold">✓</span>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="grid grid-cols-3 px-6 py-5 border-t border-white/8" style={{ background: "var(--surface-2)" }}>
              <div className="col-span-1 text-text-muted text-sm flex items-center">Precio mensual</div>
              <div className="text-center text-text-muted text-sm flex items-center justify-center">Gratis</div>
              <div className="flex items-center justify-center">
                <a href="#" className="btn-primary py-2 px-5 text-sm">
                  $9/mes →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">Miembros</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Lo que dicen los miembros
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

      {/* ── FAQ ── */}
      <section className="px-6 py-20" style={{ background: "var(--surface)" }}>
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

      {/* ── CTA Final con garantía ── */}
      <section className="px-6 py-24">
        <div className="max-w-xl mx-auto">
          <div className="card p-10 text-center">
            <span className="badge badge-dorado mb-6 inline-flex">Premium</span>

            <div className="font-display font-bold text-[4rem] text-dorado leading-none mb-1">$9</div>
            <p className="text-text-muted text-sm mb-8">por mes · ó $79/año · cancelá cuando querás</p>

            <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
              {[
                "Newsletter exclusivo 2x por semana",
                "Análisis profundos de mercado",
                "Portafolio modelo mensual",
                "Comunidad privada de miembros",
                "Alertas de mercado",
                "30% descuento en todos los productos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-verde shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="btn-primary w-full justify-center text-base mb-4">
              Suscribirte ahora →
            </a>

            {/* Garantía */}
            <div className="pt-5 border-t border-white/5">
              <p className="text-text-muted text-xs leading-relaxed">
                <span className="text-verde font-semibold">Garantía de 30 días.</span>{" "}
                Si en el primer mes no valió la pena, te devolvemos el dinero completo.
                Sin formularios, sin letra chica.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
