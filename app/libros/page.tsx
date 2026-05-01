const libros = [
  {
    titulo: "La Impresora: Cómo funciona el dinero digital",
    desc: "La guía completa para entender crypto, AI y tokenización desde cero. Sin jerga, con ejemplos reales de LATAM.",
    precio: "$9.99",
    paginas: "74 páginas",
    tag: "Bestseller",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    color: "from-dorado/20 to-transparent",
    emoji: "💰",
  },
  {
    titulo: "AI para ganar plata sin trabajar todo el día",
    desc: "Herramientas concretas, flujos de trabajo y casos reales de cómo usar IA para automatizar ingresos.",
    precio: "$9.99",
    paginas: "68 páginas",
    tag: "AI",
    tagColor: "bg-verde/10 text-verde border-verde/20",
    color: "from-verde/20 to-transparent",
    emoji: "🤖",
  },
  {
    titulo: "Tokenización: El negocio que nadie te explicó",
    desc: "Inmuebles, arte, commodities. Cómo los activos reales se están convirtiendo en tokens y cómo invertir en ellos.",
    precio: "$9.99",
    paginas: "61 páginas",
    tag: "Tokenización",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    color: "from-blue-400/20 to-transparent",
    emoji: "🏠",
  },
];

export default function LibrosPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Biblioteca
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Guías que van<br />
            <span className="text-verde">al punto</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Sin relleno. Sin 400 páginas para decir algo que cabe en 70.
            Cada libro es accionable desde la primera página.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {libros.map((libro) => (
            <div key={libro.titulo} className="gradient-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
              <div className={`bg-gradient-to-b ${libro.color} p-8 text-center`}>
                <div className="text-6xl mb-4">{libro.emoji}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${libro.tagColor}`}>
                    {libro.tag}
                  </span>
                  <span className="text-white/20 text-xs">{libro.paginas}</span>
                </div>
                <h3 className="font-black text-lg leading-tight mb-3">{libro.titulo}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{libro.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-verde font-black text-xl">{libro.precio}</span>
                  <button className="bg-verde text-oscuro font-bold px-4 py-2 rounded-full text-sm hover:bg-verde/90 transition-colors">
                    Comprar →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center gradient-border rounded-2xl p-8">
          <p className="text-white/50 mb-2">¿Preferís empezar gratis?</p>
          <p className="text-lg font-bold">
            El newsletter semanal te da el 80% del valor.{" "}
            <a href="/#newsletter" className="text-verde hover:underline">
              Suscribite acá →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
