export const metadata = {
  title: "Radar — La Impresora",
  description: "Señales premium semanales: watchlist curada, análisis on-chain y oportunidades DeFi. Por $25/mes.",
};

const beneficios = [
  {
    emoji: "📋",
    titulo: "Watchlist de 5 activos cada lunes",
    desc: "Cada inicio de semana recibís una lista de 5 activos con contexto: por qué los miramos, qué estamos esperando y dónde está el riesgo.",
    color: "from-verde/20 to-transparent",
    tagColor: "bg-verde/10 text-verde border-verde/20",
    tag: "Semanal",
  },
  {
    emoji: "🔬",
    titulo: "Análisis on-chain semanal",
    desc: "Métricas de blockchain que los medios no cubren: flujos de exchanges, acumulación de ballenas, actividad de contratos. Data cruda convertida en señal clara.",
    color: "from-blue-400/20 to-transparent",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    tag: "On-chain",
  },
  {
    emoji: "⚡",
    titulo: "Oportunidades DeFi curadas",
    desc: "No todas las oportunidades en DeFi valen el riesgo. Filtramos protocolos, auditamos rendimientos y te presentamos solo las que tienen sentido esta semana.",
    color: "from-dorado/20 to-transparent",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    tag: "DeFi",
  },
  {
    emoji: "⚠️",
    titulo: "Riesgos que nadie está viendo",
    desc: "Regulación que viene, proyectos con señales de alerta, narrativas que están muriendo. Lo que el mercado todavía no precio pero debería.",
    color: "from-red-400/20 to-transparent",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
    tag: "Riesgo",
  },
  {
    emoji: "🗂️",
    titulo: "Historial completo de ediciones",
    desc: "Acceso inmediato a todas las ediciones anteriores del Radar. Podés ver qué dijimos, qué pasó y aprender del track record real.",
    color: "from-purple-400/20 to-transparent",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    tag: "Historial",
  },
  {
    emoji: "💬",
    titulo: "Canal Telegram privado",
    desc: "Actualizaciones mid-week cuando algo cambia. Sin ruido, sin spam. Solo cuando hay algo que vale la pena comunicar antes del próximo Radar.",
    color: "from-verde/20 to-transparent",
    tagColor: "bg-verde/10 text-verde border-verde/20",
    tag: "Comunidad",
  },
];

const testimonios = [
  {
    nombre: "Martín V.",
    pais: "Uruguay",
    emoji: "🇺🇾",
    texto: "El Radar me cambió la forma de preparar la semana. En lugar de pasar horas viendo Twitter y YouTube, el lunes a la mañana ya sé en qué concentrarme. Los riesgos que señalan son los que realmente importan.",
    cargo: "Trader freelance, 29 años",
  },
  {
    nombre: "Camila R.",
    pais: "Chile",
    emoji: "🇨🇱",
    texto: "Llevo 3 meses en el Radar y ya pagué los $75 con una sola oportunidad DeFi que encontraron antes que todo el mundo. El análisis on-chain es serio, no es el típico contenido de influencers.",
    cargo: "Analista financiera, 33 años",
  },
  {
    nombre: "Diego P.",
    pais: "Argentina",
    emoji: "🇦🇷",
    texto: "Lo que más valoro es el historial. Fui para atrás a ver ediciones viejas para entender cómo razonan y el hit rate es impresionante. No aciertan todo, pero cuando se equivocan explican por qué.",
    cargo: "Emprendedor crypto, 38 años",
  },
];

const faqs = [
  {
    pregunta: "¿Cuándo recibo el Radar cada semana?",
    respuesta: "El Radar llega a tu email todos los lunes antes de las 9am (hora de Buenos Aires). Así podés arrancar la semana ya con la watchlist y el análisis listos.",
  },
  {
    pregunta: "¿Esto es una recomendación de inversión?",
    respuesta: "No. El Radar es research educativo y análisis de mercado. Todo lo que publicamos tiene el disclaimer claro: esto no es asesoramiento financiero. Las decisiones de inversión son tuyas.",
  },
  {
    pregunta: "¿Puedo cancelar cuando quiero?",
    respuesta: "Sí, sin trámites ni penalidades. Cancelás desde tu cuenta con un clic y no se te vuelve a cobrar. Seguís teniendo acceso al canal y al historial hasta que venza el mes pagado.",
  },
  {
    pregunta: "¿El Radar incluye todo lo de Premium ($19)?",
    respuesta: "No. El Radar ($25/mes) es un servicio independiente enfocado en señales y watchlist. Premium ($19/mes) incluye comunidad, portafolio modelo y newsletter exclusivo. Son productos distintos con enfoques distintos.",
  },
  {
    pregunta: "¿Hay garantía si no me convence?",
    respuesta: "Tenés 14 días para probar la primera edición. Si no te cierra el enfoque, te devolvemos el dinero sin preguntas.",
  },
];

export default function RadarPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Señales Premium
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Qué estamos mirando<br />
            esta semana.<br />
            <span className="text-verde verde-text-glow">Por $25.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cada lunes, una watchlist curada de 5 activos, análisis on-chain y las oportunidades
            DeFi que vale la pena mirar. Sin ruido. Sin hype. Solo lo que importa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="bg-verde text-oscuro font-black px-10 py-5 rounded-full hover:bg-verde/90 transition-colors verde-glow text-lg"
            >
              Suscribirte al Radar — $25/mes →
            </a>
            <a href="#que-incluye" className="text-white/40 hover:text-verde transition-colors text-sm">
              Ver qué incluye ↓
            </a>
          </div>
          <p className="text-white/20 text-xs mt-4">Cancelá cuando quieras · Garantía de 14 días</p>

          {/* Disclaimer hero */}
          <div className="mt-8 inline-block bg-white/5 border border-white/10 rounded-xl px-5 py-3">
            <p className="text-white/30 text-xs">
              ⚠️ <span className="font-bold text-white/50">Esto NO es asesoramiento financiero.</span> Es research y análisis educativo.
            </p>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="que-incluye" className="px-6 py-20 bg-gris/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Qué incluye el <span className="text-verde">Radar</span>
            </h2>
            <p className="text-white/40">Seis cosas que recibís cada semana por $25</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b) => (
              <div
                key={b.titulo}
                className="gradient-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
              >
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

      {/* Muestra de contenido */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Así se ve una <span className="text-dorado">edición del Radar</span>
            </h2>
            <p className="text-white/40">Ejemplo real del formato que recibís cada lunes</p>
          </div>

          <div className="gradient-border rounded-2xl overflow-hidden">
            {/* Header edición */}
            <div className="bg-gris-medio px-8 py-5 border-b border-white/5 flex items-center justify-between">
              <div>
                <span className="text-verde text-xs font-bold uppercase tracking-widest">Radar #47</span>
                <p className="text-white/40 text-xs mt-0.5">Lunes 28 de abril · Edición semanal</p>
              </div>
              <div className="bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full">
                Premium
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Watchlist */}
              <div>
                <h3 className="text-verde font-black text-sm uppercase tracking-widest mb-4">📋 Watchlist esta semana</h3>
                <div className="space-y-3">
                  {[
                    { ticker: "ETH", razon: "Acumulación de ballenas en zona $2,800–$3,100. Volumen de opciones creciendo.", nivel: "Alto interés" },
                    { ticker: "ARB", razon: "Upgrade de protocolo el jueves. Históricamente mueve ±15% alrededor de estos eventos.", nivel: "Evento catalizador" },
                    { ticker: "BTC", razon: "Rompimiento de resistencia $65k con volumen. Buscamos confirmación de cierre semanal.", nivel: "Seguimiento" },
                  ].map((item) => (
                    <div key={item.ticker} className="flex items-start gap-4 bg-white/3 rounded-xl px-5 py-4 border border-white/5">
                      <span className="text-dorado font-black text-lg w-12 shrink-0">{item.ticker}</span>
                      <div>
                        <p className="text-white/70 text-sm">{item.razon}</p>
                        <span className="text-verde/60 text-xs mt-1 inline-block">{item.nivel}</span>
                      </div>
                    </div>
                  ))}
                  <div className="text-center py-3">
                    <span className="text-white/20 text-sm">+ 2 activos más en la edición completa...</span>
                  </div>
                </div>
              </div>

              {/* On-chain destacado */}
              <div>
                <h3 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4">🔬 Señal on-chain destacada</h3>
                <div className="bg-blue-400/5 border border-blue-400/20 rounded-xl px-5 py-4">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Las entradas netas a exchanges de BTC cayeron a mínimos de 6 meses esta semana.
                    Cuando este indicador baja, históricamente coincide con reducción de presión vendedora.
                    Combinado con el dato de hash rate en máximos históricos, la lectura de corto plazo es constructiva.
                  </p>
                </div>
              </div>

              {/* Riesgo */}
              <div>
                <h3 className="text-red-400 font-black text-sm uppercase tracking-widest mb-4">⚠️ Riesgo de la semana</h3>
                <div className="bg-red-400/5 border border-red-400/20 rounded-xl px-5 py-4">
                  <p className="text-white/60 text-sm leading-relaxed">
                    El Senado de EE.UU. vota el martes un proyecto que podría afectar stablecoins
                    algorítmicas. Si pasa, esperen volatilidad en el sector DeFi antes del cierre del
                    viernes. Atención especial a posiciones en protocolos dependientes de FRAX y DAI.
                  </p>
                </div>
              </div>

              {/* Blur CTA */}
              <div className="relative">
                <div className="blur-sm pointer-events-none space-y-3">
                  <h3 className="text-dorado font-black text-sm uppercase tracking-widest mb-4">⚡ DeFi esta semana</h3>
                  <div className="bg-dorado/5 border border-dorado/20 rounded-xl px-5 py-4">
                    <p className="text-white/60 text-sm">Protocolo X en Arbitrum ofrece 18% APY en...</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="#precio"
                    className="bg-verde text-oscuro font-black px-6 py-3 rounded-full hover:bg-verde/90 transition-colors verde-glow text-sm"
                  >
                    Ver edición completa — $25/mes →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer legal */}
      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-6 py-5">
            <p className="text-yellow-500/80 text-sm font-bold mb-1">Aviso legal importante</p>
            <p className="text-white/40 text-sm leading-relaxed">
              Esto NO es asesoramiento financiero. El Radar de La Impresora es un servicio de
              research y análisis educativo. Ningún contenido publicado constituye recomendación
              de compra, venta o tenencia de activos financieros. Las decisiones de inversión son
              de exclusiva responsabilidad del lector. Los mercados de criptomonedas son
              altamente volátiles y pueden resultar en pérdida total del capital invertido.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-6 py-20 bg-gris/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-3">
              Lo que dicen los <span className="text-verde">suscriptores</span>
            </h2>
            <p className="text-white/40">Gente de LATAM que ya recibe el Radar cada semana</p>
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

      {/* Precio CTA */}
      <section id="precio" className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-border rounded-3xl p-12">
            <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Radar Premium
            </div>
            <div className="text-7xl font-black text-verde mb-2">$25</div>
            <div className="text-white/40 mb-8">por mes · cancelá cuando quieras</div>
            <ul className="text-left text-sm text-white/60 space-y-3 mb-10 max-w-xs mx-auto">
              <li className="flex gap-2"><span className="text-verde">✓</span> Watchlist de 5 activos cada lunes</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Análisis on-chain semanal</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Oportunidades DeFi curadas</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Riesgos del mercado que nadie ve</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Historial completo de ediciones</li>
              <li className="flex gap-2"><span className="text-verde">✓</span> Canal Telegram privado</li>
            </ul>
            <a
              href="#"
              className="block bg-verde text-oscuro font-black px-10 py-5 rounded-full hover:bg-verde/90 transition-colors verde-glow text-lg mb-4"
            >
              Suscribirte al Radar →
            </a>
            <div className="flex items-center justify-center gap-2 text-white/30 text-xs">
              <span className="text-2xl">🛡️</span>
              <span>Garantía de 14 días · Si no te convence, te devolvemos el dinero</span>
            </div>
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
