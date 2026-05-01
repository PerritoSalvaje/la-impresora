const videos = [
  {
    titulo: "El gap que nadie ve: AI puede hacer el 80% de tu trabajo",
    desc: "Analizamos el estudio que muestra la brecha entre lo que la AI puede hacer y lo que realmente se usa. La mayor oportunidad de la década.",
    duracion: "14:32",
    fecha: "Hace 3 días",
    tag: "AI",
    tagColor: "text-verde",
  },
  {
    titulo: "Tokenización explicada en 10 minutos (con ejemplos reales)",
    desc: "Cómo un campo en Paraguay puede convertirse en tokens que cualquier persona del mundo puede comprar.",
    duracion: "11:47",
    fecha: "Hace 10 días",
    tag: "Tokenización",
    tagColor: "text-blue-400",
  },
  {
    titulo: "Bot de WhatsApp para tu negocio: tutorial completo",
    desc: "Paso a paso cómo configurar un bot que atiende clientes, califica leads y cierra ventas mientras dormís.",
    duracion: "18:20",
    fecha: "Hace 17 días",
    tag: "AI para negocios",
    tagColor: "text-verde",
  },
];

export default function CanalPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Canal de YouTube
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Video cuando el texto<br />
            <span className="text-verde">no alcanza</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Dos videos por semana. Uno largo para entender, uno corto para actuar.
          </p>
          <a
            href="https://youtube.com/@laimpresora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-500 transition-colors"
          >
            ▶ Suscribirse al canal
          </a>
        </div>

        <div className="space-y-6">
          {videos.map((video) => (
            <div key={video.titulo} className="gradient-border rounded-2xl p-6 md:p-8 hover:scale-[1.01] transition-transform">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-48 h-28 bg-gris-medio rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                  <div className="w-12 h-12 bg-verde/20 rounded-full flex items-center justify-center">
                    <span className="text-verde text-xl">▶</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold ${video.tagColor}`}>{video.tag}</span>
                    <span className="text-white/20 text-xs">{video.duracion}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-white/20 text-xs">{video.fecha}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 leading-tight">{video.titulo}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{video.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 gradient-border rounded-2xl p-8 text-center">
          <p className="text-2xl font-black mb-2">
            ¿Preferís recibirlo por email?
          </p>
          <p className="text-white/40 mb-6">
            Cada jueves te llega un resumen de todo lo nuevo, más contenido exclusivo del newsletter.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-verde text-oscuro font-black px-8 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow"
          >
            Suscribite gratis →
          </a>
        </div>
      </div>
    </div>
  );
}
