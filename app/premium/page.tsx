export const metadata = {
  title: "Premium — La Impresora",
  description: "El nivel siguiente de La Impresora. Acceso completo a todo el contenido premium, análisis profundos y comunidad exclusiva por $19/mes.",
};

const comparacion = [
  { feature: "Newsletter semanal", free: true, premium: true },
  { feature: "Artículos del blog", free: true, premium: true },
  { feature: "Videos del canal de YouTube", free: true, premium: true },
  { feature: "Newsletter exclusivo (2x por semana)", free: false, premium: true },
  { feature: "Análisis profundos de mercado", free: false, premium: true },
  { feature: "Acceso anticipado a nuevos libros", free: false, premium: true },
  { feature: "Descuento 30% en todos los productos", free: false, premium: true },
  { feature: "Comunidad privada de miembros", free: false, premium: true },
  { feature: "Sesiones de preguntas en vivo (mensual)", free: false, premium: true },
  { feature: "Portafolio modelo actualizado mensual", free: false, premium: true },
  { feature: "Alertas de mercado por email", free: false, premium: true },
];

const beneficios = [
  {
    emoji: "📊",
    titulo: "Análisis profundos",
    desc: "Cada semana, un análisis de 1,500+ palabras sobre una oportunidad de mercado específica. Macro, micro, riesgo y acción concreta.",
    color: "from-verde/20 to-transparent",
    tagColor: "bg-verde/10 text-verde border-verde/20",
    tag: "Exclusivo",
  },
  {
    emoji: "📩",
    titulo: "Newsletter 2x por semana",
    desc: "El newsletter gratuito sale los martes. Los miembros Premium reciben además una edición especial los viernes con lo que no publicamos en abierto.",
    color: "from-dorado/20 to-transparent",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    tag: "Premium",
  },
  {
    emoji: "💬",
    titulo: "Comunidad privada",
    desc: "Acceso al grupo exclusivo de miembros. Gente que está operando, invirtiendo y construyendo negocios digitales. Preguntas reales, respuestas reales.",
    color: "from-purple-400/20 to-transparent",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    tag: "Comunidad",
  },
  {
    emoji: "🎯",
    titulo: "Portafolio modelo",
    desc: "Cada mes publicamos cómo está asignado el portafolio modelo de La Impresora. Sin promesas de ganancia, con razonamiento claro detrás de cada decisión.",
    color: "from-blue-400/20 to-transparent",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    tag: "Inversión",
  },
  {
    emoji: "🔔",
    titulo: "Alertas de mercado",
    desc: "Cuando pasa algo relevante en crypto o AI que cambia el panorama, te avisamos antes de que sea noticia masiva. Alertas puntuales, sin spam.",
    color: "from-red-400/20 to-transparent",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
    tag: "Tiempo real",
  },
  {
    emoji: "📚",
    titulo: "30% descuento en todo",
    desc: "Membresía Premium incluye descuento permanente del 30% en todos los libros, packs y cursos de La Impresora. Se paga solo en la primera compra.",
    color: "from-dorado/20 to-transparent",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    tag: "Ahorro",
  },
];

const testimonios = [
  {
    nombre: "Rodrigo M.",
    pais: "México",
    emoji: "🇲🇽",
    texto: "Llevo 4 meses en Premium y ya recuperé la inversión con el descuento en los libros y un trade que salió del análisis semanal. El portafolio modelo me ayudó a entender cómo distribuir sin jugarme todo en una moneda.",
    cargo: "Ingeniero, 31 años",
  },
  {
    nombre: "Valentina C.",
    pais: "Colombia",
    emoji: "🇨🇴",
    texto: "La comunidad es lo que más vale. Pregunté sobre cómo declarar cripto en Colombia y en dos horas tenía tres respuestas útiles de gente que ya lo había hecho. El newsletter gratuito está bueno, pero el de los viernes es otro nivel.",
    cargo: "Freelancer, 27 años",
  },
  {
    nombre: "Sebastián L.",
    pais: "Argentina",
    emoji: "🇦🇷",
    texto: "$19 dólares al mes acá parece mucho hasta que hacés el cálculo: es menos de lo que gasté en un café mal hecho en Palermo. Las alertas de mercado me sacaron de una posición antes de que cayera 35%. Ya está.",
    cargo: "Emprendedor, 35 años",
  },
];

const faqs = [
  {
    pregunta: "¿Cuándo se me cobra?",
    respuesta: "El primer cobro es inmediato al suscribirte. Luego se renueva automáticamente cada 30 días. Podés cancelar cuando quieras desde tu panel, sin trámites ni penalidades.",
  },
  {
    pregunta: "¿Puedo cancelar en cualquier momento?",
    respuesta: "Sí. Sin preguntas, sin procesos complicados. Cancelás desde tu cuenta con un clic y no se te vuelve a cobrar. Seguís teniendo acceso hasta que venza el período pagado.",
  },
  {
    pregunta: "¿Qué pasa si no estoy satisfecho?",
    respuesta: "Tenés 30 días de garantía total. Si en el primer mes sentís que no valió la pena, te devolvemos el dinero completo. Sin letra chica.",
  },
  {
    pregunta: "¿El contenido es en español?",
    respuesta: "Todo el contenido de La Impresora es en español. Análisis, newsletter, comunidad y sesiones en vivo. Pensado específicamente para la realidad de LATAM.",
  },
  {
    pregunta: "¿Cómo accedo a la comunidad privada?",
    respuesta: "Después de suscribirte recibís un email con el link de acceso a la comunidad. Está en una plataforma simple, sin apps raras. Funciona desde el navegador.",
  },
];

export default function PremiumPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            La Impresora Premium
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            El nivel siguiente de<br />
            <span className="text-verde verde-text-glow">La Impresora</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Para los que ya leen el newsletter y quieren más: análisis profundos, portafolio modelo,
            comunidad privada y alertas de mercado. Todo por menos de lo que cuesta un café por semana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="bg-verde text-oscuro font-black px-10 py-5 rounded-full hover:bg-verde/90 transition-colors verde-glow text-lg"
            >
              Suscribirte ahora — $19/mes →
            </a>
            <a href="#comparacion" className="text-white/40 hover:text-verde transition-colors text-sm">
              Ver qué incluye ↓
            </a>
          </div>
          <p className="text-white/20 text-xs mt-4">Garantía de 30 días · Cancelá cuando quieras</p>
        </div>
      </section>

      {/* Comparación Free vs Premium */}
      <section id="comparacion" className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Free vs <span className="text-dorado">Premium</span>
            </h2>
            <p className="text-white/40">Lo que obtenés con cada plan</p>
          </div>

          <div className="gradient-border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gris-medio px-6 py-4 text-sm font-bold">
              <div className="col-span-1 text-white/40">Contenido</div>
              <div className="text-center text-white/40">Gratis</div>
              <div className="text-center text-dorado">Premium</div>
            </div>
            {/* Rows */}
            {comparacion.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 text-sm border-t border-white/5 ${
                  i % 2 === 0 ? "bg-gris" : "bg-gris/50"
                }`}
              >
                <div className="col-span-1 text-white/70">{row.feature}</div>
                <div className="text-center">
                  {row.free ? (
                    <span className="text-verde font-bold">✓</span>
                  ) : (
                    <span className="text-white/20">—</span>
                  )}
                </div>
                <div className="text-center">
                  <span className="text-dorado font-bold">✓</span>
                </div>
              </div>
            ))}
            {/* Footer CTA */}
            <div className="grid grid-cols-3 px-6 py-6 border-t border-white/10 bg-gris-medio">
              <div className="col-span-1 text-white/40 text-sm flex items-center">Precio mensual</div>
              <div className="text-center text-white/40 text-sm flex items-center justify-center">Gratis</div>
              <div className="text-center flex items-center justify-center">
                <a
                  href="#"
                  className="bg-dorado text-oscuro font-black px-5 py-2 rounded-full text-sm hover:bg-dorado/90 transition-colors"
                >
                  $19/mes →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-6 py-20 bg-gris/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Todo lo que <span className="text-verde">incluye</span>
            </h2>
            <p className="text-white/40">Seis razones para actualizarte hoy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b) => (
              <div key={b.titulo} className="gradient-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
                <div className={`bg-gradient-to-b ${b.color} p-6 text-center`}>
                  <div className="text-5xl">{b.emoji}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full border ${b.tagColor}`}>
                      {b.tag}
                    </span>
                  </div>
                  <h3 className="font-black text-lg mb-2">{b.titulo}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Lo que dicen los <span className="text-verde">miembros</span>
            </h2>
            <p className="text-white/40">Gente real de LATAM que ya está adentro</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div key={t.nombre} className="gradient-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-verde/10 border border-verde/20 rounded-full flex items-center justify-center text-lg">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="font-black text-sm">{t.nombre}</p>
                    <p className="text-white/30 text-xs">{t.cargo} · {t.pais}</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">&ldquo;{t.texto}&rdquo;</p>
              </div>
            ))}
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

      {/* Pricing CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-border rounded-3xl p-12">
            <div className="inline-block bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Premium
            </div>
            <div className="text-7xl font-black text-dorado mb-2">$19</div>
            <div className="text-white/40 mb-8">por mes · cancelá cuando quieras</div>
            <ul className="text-left text-sm text-white/60 space-y-3 mb-10 max-w-xs mx-auto">
              <li className="flex gap-2"><span className="text-verde">✓</span> Newsletter exclusivo 2x por semana</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Análisis profundos de mercado</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Portafolio modelo mensual</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Comunidad privada de miembros</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Alertas de mercado</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> 30% descuento en todos los productos</li>
            </ul>
            <a
              href="#"
              className="block bg-verde text-oscuro font-black px-10 py-5 rounded-full hover:bg-verde/90 transition-colors verde-glow text-lg mb-4"
            >
              Suscribirte ahora →
            </a>

            {/* Garantía */}
            <div className="flex items-center justify-center gap-2 text-white/30 text-xs">
              <span className="text-2xl">🛡️</span>
              <span>Garantía de 30 días · Si no te convence, te devolvemos el dinero sin preguntas</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
