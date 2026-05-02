import Link from "next/link";

export const metadata = {
  title: "Precios — Free, Premium $9, Academy $197",
  description:
    "La Impresora tiene 4 niveles: gratis (newsletter + blog), apoyo desde $5, Premium $9/mes ó $79/año, Academy $197 y libros desde $4.99. Elegí el que se adapta a vos.",
  alternates: { canonical: "https://laimpresora.io/precios" },
};

const TIERS = [
  {
    id: "free",
    nombre: "Free",
    precio: "$0",
    sub: "para siempre",
    pitch: "Empezá acá. El newsletter, todos los artículos y todas las herramientas son gratis.",
    cta: { label: "Suscribirme gratis →", href: "/#newsletter" },
    incluye: [
      "Newsletter cada jueves",
      "Acceso a 28 artículos del blog",
      "4 calculadoras (DCA, yield DeFi, inflación, portfolio)",
      "Glosario de 200+ términos",
      "RSS y archivo público",
    ],
    badge: null,
    destacado: false,
  },
  {
    id: "supporter",
    nombre: "Supporter",
    precio: "$5+",
    sub: "única vez",
    pitch: "¿Querés apoyar lo que hacemos sin comprometerte a nada? Una donación única.",
    cta: {
      label: "Apoyar con $5 / $10 / $25 →",
      href: "https://cafecito.app/laimpresora",
      external: true,
    },
    incluye: [
      "Todo lo del plan Free",
      "Acceso a 3 ediciones premium archivadas",
      "Tu nombre en la sección \"Made possible by\" del newsletter",
      "Sin compromiso, sin renovación",
    ],
    badge: "Sin recurrencia",
    destacado: false,
  },
  {
    id: "premium",
    nombre: "Premium",
    precio: "$9",
    sub: "por mes · o $79/año (33% OFF)",
    pitch: "Para los que quieren ir más a fondo. Análisis profundos, comunidad y alertas.",
    cta: { label: "Probar Premium →", href: "/premium" },
    incluye: [
      "Todo lo del plan Free",
      "Newsletter exclusivo de los viernes",
      "Análisis profundos de mercado (1,500+ palabras)",
      "Portafolio modelo actualizado mensual",
      "Alertas de mercado por email",
      "Comunidad privada en Telegram",
      "Q&A en vivo mensual",
      "30% de descuento en cursos y libros",
    ],
    badge: "Más popular",
    destacado: true,
  },
  {
    id: "academy",
    nombre: "Academy",
    precio: "$197",
    sub: "una vez · acceso de por vida",
    pitch: "El curso completo: 6 módulos sobre crypto, AI, tokenización y libertad financiera.",
    cta: { label: "Ver Academy →", href: "/academy" },
    incluye: [
      "Curso de 6 módulos en video",
      "PDFs descargables de cada módulo",
      "Acceso vitalicio + actualizaciones",
      "Comunidad privada de alumnos",
      "Sesiones Q&A mensual con el equipo",
      "Certificado de finalización",
      "Garantía 30 días, sin preguntas",
    ],
    badge: "Acceso vitalicio",
    destacado: false,
  },
];

const COMPARACION = [
  { feature: "Newsletter semanal (jueves)", free: true, supporter: true, premium: true, academy: true },
  { feature: "Artículos del blog y calculadoras", free: true, supporter: true, premium: true, academy: true },
  { feature: "Newsletter premium (viernes)", free: false, supporter: false, premium: true, academy: true },
  { feature: "Análisis profundos semanales", free: false, supporter: false, premium: true, academy: true },
  { feature: "Portafolio modelo mensual", free: false, supporter: false, premium: true, academy: true },
  { feature: "Alertas de mercado por email", free: false, supporter: false, premium: true, academy: true },
  { feature: "Comunidad privada Telegram", free: false, supporter: "1 mes", premium: true, academy: true },
  { feature: "Curso 6 módulos completo", free: false, supporter: false, premium: false, academy: true },
  { feature: "Sesiones Q&A en vivo", free: false, supporter: false, premium: "mensual", academy: "mensual" },
  { feature: "30% off en libros y packs", free: false, supporter: false, premium: true, academy: true },
];

const FAQS = [
  {
    pregunta: "¿Por qué hay tantos niveles?",
    respuesta:
      "Porque no todos buscan lo mismo. Algunos quieren leer el newsletter y nada más (Free). Otros quieren apoyar sin comprometerse (Supporter). Los que operan en serio quieren análisis y comunidad (Premium). Y los que quieren aprender desde cero quieren un curso estructurado (Academy). Elegí el que se adapta a vos.",
  },
  {
    pregunta: "¿Por qué un Supporter de $5 si el newsletter es gratis?",
    respuesta:
      "Porque hay gente que quiere apoyar lo que hacemos sin comprometerse a una suscripción mensual. Es una forma de decir gracias y, a cambio, te abrimos 3 ediciones premium archivadas. Sin recurrencia.",
  },
  {
    pregunta: "¿Premium o Academy? ¿Cuál me sirve?",
    respuesta:
      "Premium es para los que ya saben de qué va el tema y quieren análisis recurrente + comunidad. Academy es para los que quieren aprender el sistema completo de cero. Si tenés dudas, empezá con Premium ($9). Podés sumar Academy después con 30% off como miembro.",
  },
  {
    pregunta: "¿Puedo cancelar Premium en cualquier momento?",
    respuesta:
      "Sí. Sin trámites, sin penalidades. Cancelás desde tu cuenta y no se te vuelve a cobrar. Seguís con acceso hasta que termine el período pagado.",
  },
  {
    pregunta: "¿Qué pasa si pago Academy y no me gusta?",
    respuesta:
      "Tenés 30 días de garantía total. Si en el primer mes sentís que no valió la pena, te devolvemos el dinero completo. Sin formularios, sin letra chica.",
  },
  {
    pregunta: "¿En qué moneda se cobra?",
    respuesta:
      "Los precios están en USD, pero podés pagar con tarjeta local en pesos argentinos, mexicanos, colombianos, chilenos, etc. — la conversión la hace tu banco al cambio del día. En Argentina aceptamos también MercadoPago.",
  },
  {
    pregunta: "¿Hay descuentos por pagar el año completo?",
    respuesta:
      "Sí. Premium anual cuesta $79/año en lugar de $108 ($9 × 12) — eso es 33% de descuento. Equivale a $6.58/mes.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Tarjeta de crédito y débito (todas las marcas), MercadoPago en Argentina, transferencia para Academy, criptomonedas (USDT/USDC) para pagos anuales. Todo procesado vía LemonSqueezy/Hotmart con factura legal.",
  },
];

export default function PreciosPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label block mb-5">Precios</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Elegí cómo querés sumarte.
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Newsletter gratis para siempre. Premium para los que quieren ir más a fondo. Academy
            para los que quieren aprender el sistema completo. Sin trampas, sin upsells agresivos.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`card p-7 flex flex-col ${
                tier.destacado ? "ring-1 ring-dorado/40" : ""
              }`}
              style={tier.destacado ? { background: "var(--surface-2)" } : {}}
            >
              {tier.badge && (
                <span
                  className={`badge ${
                    tier.destacado ? "badge-dorado" : "badge-neutral"
                  } mb-4 inline-flex w-fit`}
                >
                  {tier.badge}
                </span>
              )}
              <h3 className="font-display font-bold text-text-primary text-xl mb-1">
                {tier.nombre}
              </h3>
              <div className="mb-3">
                <span className="font-display font-bold text-[2.5rem] text-text-primary leading-none">
                  {tier.precio}
                </span>
              </div>
              <p className="text-text-muted text-xs mb-5">{tier.sub}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">{tier.pitch}</p>

              <ul className="space-y-2.5 mb-7 flex-1">
                {tier.incluye.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-verde shrink-0 mt-0.5">✦</span>
                    <span className="leading-snug">{it}</span>
                  </li>
                ))}
              </ul>

              {tier.cta.external ? (
                <a
                  href={tier.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tier.destacado ? "btn-primary justify-center" : "btn-secondary justify-center"}
                >
                  {tier.cta.label}
                </a>
              ) : (
                <Link
                  href={tier.cta.href}
                  className={tier.destacado ? "btn-primary justify-center" : "btn-secondary justify-center"}
                >
                  {tier.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">Comparativa</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Qué incluye cada plan
            </h2>
          </div>

          <div className="card overflow-hidden">
            <div className="grid grid-cols-5 px-6 py-4 border-b border-white/5"
                 style={{ background: "var(--surface-2)" }}>
              <div className="col-span-1 text-text-muted text-xs uppercase tracking-wider">Feature</div>
              <div className="text-center text-text-muted text-xs uppercase tracking-wider">Free</div>
              <div className="text-center text-text-muted text-xs uppercase tracking-wider">Supporter</div>
              <div className="text-center text-dorado text-xs uppercase tracking-wider font-bold">Premium</div>
              <div className="text-center text-text-muted text-xs uppercase tracking-wider">Academy</div>
            </div>

            {COMPARACION.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-5 px-6 py-3.5 border-b border-white/4 text-sm ${
                  i % 2 === 0 ? "" : "bg-white/[0.015]"
                }`}
              >
                <div className="col-span-1 text-text-secondary pr-4">{row.feature}</div>
                {(["free", "supporter", "premium", "academy"] as const).map((tier) => {
                  const v = row[tier];
                  return (
                    <div key={tier} className="text-center">
                      {v === true ? (
                        <span className={tier === "premium" ? "text-dorado font-bold" : "text-verde font-bold"}>✓</span>
                      ) : v === false ? (
                        <span className="text-white/15">—</span>
                      ) : (
                        <span className="text-text-secondary text-xs">{v}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="section-label block mb-3">Otra forma de empezar</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-5">
            Productos sueltos desde $4.99
          </h2>
          <p className="text-text-secondary text-base mb-10 max-w-2xl">
            Si no querés suscribirte, podés comprar piezas individuales. Libros, plantillas,
            packs de prompts. Una vez, te quedás con el contenido para siempre.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { titulo: "3 libros (PDF + EPUB)", precio: "$14.99", desc: "La Impresora · Tokenización · AI para ganar plata", href: "/tienda" },
              { titulo: "Pack 30 prompts AI", precio: "$4.99", desc: "Para emprendedores LATAM. Notion + PDF.", href: "/tienda" },
              { titulo: "Bundle completo", precio: "$29", desc: "Los 3 libros + 30 prompts + 30 días Telegram premium", href: "/tienda" },
            ].map((p) => (
              <Link key={p.titulo} href={p.href} className="card p-6 hover:bg-white/5 transition-colors">
                <p className="font-display font-bold text-dorado text-2xl mb-2">{p.precio}</p>
                <h3 className="font-display font-semibold text-text-primary text-base mb-2">{p.titulo}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="section-label block mb-3">FAQ</span>
            <h2 className="font-display font-bold text-display-md text-text-primary">
              Preguntas frecuentes sobre precios
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

      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-display-md text-text-primary mb-5">
            Empezá gratis. Subí cuando quieras.
          </h2>
          <p className="text-text-secondary text-base mb-8">
            El newsletter es gratis para siempre. Si en algún momento querés más, vas a saberlo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#newsletter" className="btn-primary justify-center">
              Suscribirme gratis →
            </Link>
            <Link href="/premium" className="btn-secondary justify-center">
              Ver Premium →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
