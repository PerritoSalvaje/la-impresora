export const metadata = {
  title: "Programa de Afiliados — La Impresora",
  description: "Recomendá La Impresora y ganá hasta 40% por cada venta. Programa de afiliados para lectores del newsletter.",
};

const pasos = [
  { num: "01", titulo: "Te registrás", desc: "Mandanos un email y te enviamos tu link único de afiliado en menos de 24 horas." },
  { num: "02", titulo: "Recomendás", desc: "Usás tu link en redes, newsletter propio, o donde quieras. Te damos materiales listos para usar." },
  { num: "03", titulo: "Cobrás", desc: "40% de cada venta generada por tu link. El pago llega en USDT o transferencia el primer día hábil de cada mes." },
];

const comisiones = [
  { producto: "La Impresora Academy", precio: "$197", comision: "40%", ganancia: "$78.80 por venta" },
  { producto: "Membresía Premium", precio: "$19/mes", comision: "30% recurrente", ganancia: "$5.70/mes por suscriptor activo" },
  { producto: "Pack 3 Libros", precio: "$24.99", comision: "40%", ganancia: "$10 por venta" },
  { producto: "Libros individuales", precio: "$9.99 c/u", comision: "40%", ganancia: "$4 por venta" },
  { producto: "Micro-productos", precio: "$0.99-$4.99", comision: "30%", ganancia: "$0.30-$1.50 por venta" },
];

const kit = [
  "Email de presentación (300 palabras) listo para enviar",
  "10 tweets con diferentes ángulos, listos para copiar",
  "5 posts para LinkedIn adaptados a perfil profesional",
  "3 guiones para historias de Instagram/TikTok",
  "Guión de 60 segundos para reel recomendando el curso",
  "2 imágenes de banner para redes sociales",
  "FAQ con las 10 preguntas más comunes",
  "Acceso a dashboard de comisiones en tiempo real",
];

const testimonios = [
  { nombre: "Camila T.", pais: "🇨🇱 Chile", ganancia: "$234 en el primer mes", texto: "Mencioné el curso en mi newsletter de finanzas y 3 personas lo compraron. No esperaba que fuera tan natural." },
  { nombre: "Sebastián R.", pais: "🇦🇷 Argentina", ganancia: "$156 en comisiones recurrentes", texto: "Tengo 8 suscriptores premium activos que traje el mes pasado. Cobro $45 por mes sin hacer nada más." },
];

export default function AfiliadosProgramaPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Programa de Afiliados
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Recomendás La Impresora.<br />
            <span className="text-verde">Los dos ganamos.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-8">
            Si ya leés el newsletter y creés en lo que hacemos, podés ganar plata real recomendándolo.
            Sin MLM. Sin esquemas raros. Solo una comisión honesta por cada venta que generás.
          </p>
          <a
            href="mailto:afiliados@laimpresora.io?subject=Quiero%20ser%20afiliado"
            className="inline-block bg-verde text-oscuro font-black text-lg px-10 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow"
          >
            Aplicar al programa →
          </a>
        </div>

        {/* Pasos */}
        <div className="mb-20">
          <h2 className="text-2xl font-black mb-8 text-center">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pasos.map((p) => (
              <div key={p.num} className="gradient-border rounded-2xl p-6 text-center">
                <div className="text-5xl font-black text-verde/20 mb-3">{p.num}</div>
                <h3 className="font-black text-lg mb-2">{p.titulo}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comisiones */}
        <div className="mb-20">
          <h2 className="text-2xl font-black mb-8 text-center">Estructura de comisiones</h2>
          <div className="gradient-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/40">
              <div>Producto</div>
              <div className="text-center">Precio</div>
              <div className="text-center">Comisión</div>
              <div className="text-right">Ganás</div>
            </div>
            {comisiones.map((c, i) => (
              <div key={c.producto} className={`grid grid-cols-4 px-6 py-4 items-center ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                <div className="text-sm text-white/70 font-medium">{c.producto}</div>
                <div className="text-center text-sm text-white/40">{c.precio}</div>
                <div className="text-center text-sm text-verde font-bold">{c.comision}</div>
                <div className="text-right text-sm font-black text-white">{c.ganancia}</div>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-3 text-center">Cookie de 60 días. Si alguien hace click en tu link y compra en los próximos 60 días, la comisión es tuya.</p>
        </div>

        {/* Kit del afiliado */}
        <div className="mb-20">
          <h2 className="text-2xl font-black mb-4 text-center">El kit que te damos</h2>
          <p className="text-white/40 text-center mb-8">No tenés que crear contenido desde cero. Todo está listo para usar.</p>
          <div className="gradient-border rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {kit.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="text-verde mt-0.5 shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="mb-20">
          <h2 className="text-2xl font-black mb-8 text-center">Afiliados que ya están ganando</h2>
          <div className="space-y-4">
            {testimonios.map((t) => (
              <div key={t.nombre} className="gradient-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{t.pais.split(" ")[0]}</span>
                  <div>
                    <div className="font-black">{t.nombre}</div>
                    <div className="text-verde text-sm font-bold">{t.ganancia}</div>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">"{t.texto}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="gradient-border rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-black mb-3">¿Listo para empezar?</h2>
          <p className="text-white/40 mb-6 max-w-md mx-auto">
            Mandanos un email y en menos de 24 horas tenés tu link y el kit completo.
            Sin mínimo de ventas, sin permanencia.
          </p>
          <a
            href="mailto:afiliados@laimpresora.io?subject=Quiero%20ser%20afiliado%20de%20La%20Impresora"
            className="inline-block bg-verde text-oscuro font-black px-10 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow"
          >
            afiliados@laimpresora.io →
          </a>
        </div>
      </div>
    </div>
  );
}
