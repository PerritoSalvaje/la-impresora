export const metadata = {
  title: "Programa de Afiliados — La Impresora",
  description: "Ganá comisiones recomendando las herramientas que ya usás. Programa de afiliados curado por La Impresora para la comunidad crypto LATAM.",
};

const comisiones = [
  {
    producto: "Bitget",
    categoria: "Exchange",
    precio: "Gratis",
    comision: "hasta 60%",
    ganas: "De cada fee de trading, para siempre",
    highlight: true,
    badge: "El que más paga",
    badgeTipo: "verde" as const,
  },
  {
    producto: "Bybit",
    categoria: "Exchange",
    precio: "Gratis",
    comision: "hasta 50%",
    ganas: "Fees de spot + derivados, recurrente",
    highlight: true,
    badge: "Fuerte en LATAM",
    badgeTipo: "verde" as const,
  },
  {
    producto: "Binance",
    categoria: "Exchange",
    precio: "Gratis",
    comision: "hasta 50%",
    ganas: "Fees de trading, paga en USDT",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
  {
    producto: "OKX",
    categoria: "Exchange",
    precio: "Gratis",
    comision: "hasta 50%",
    ganas: "Fees de trading, cookie 30 días",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
  {
    producto: "Bitso",
    categoria: "Exchange · México",
    precio: "Gratis",
    comision: "40% / 12 meses",
    ganas: "Líder en México y Argentina",
    highlight: false,
    badge: "Mejor para México",
    badgeTipo: "dorado" as const,
  },
  {
    producto: "TradingView",
    categoria: "Análisis Técnico",
    precio: "Desde $14.95/mes",
    comision: "30% de por vida",
    ganas: "Recurrente permanente — el mejor del mercado",
    highlight: true,
    badge: "Recurrente de por vida",
    badgeTipo: "verde" as const,
  },
  {
    producto: "NordVPN",
    categoria: "VPN",
    precio: "~$3.69/mes",
    comision: "40% recurrente",
    ganas: "VPN esencial para LATAM — alta conversión",
    highlight: true,
    badge: "Oportunidad oculta",
    badgeTipo: "verde" as const,
  },
  {
    producto: "Proton VPN",
    categoria: "VPN",
    precio: "Desde $3.99/mes",
    comision: "100% primer mes",
    ganas: "La comisión más agresiva del mercado",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
  {
    producto: "Beehiiv",
    categoria: "Newsletter",
    precio: "Desde $49/mes",
    comision: "50% / 12 meses",
    ganas: "En planes pagos — muy popular entre creadores",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
  {
    producto: "ElevenLabs",
    categoria: "AI Voz",
    precio: "Desde $22/mes",
    comision: "22% recurrente",
    ganas: "Voces AI — esencial para canales faceless",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
  {
    producto: "InVideo AI",
    categoria: "Video AI",
    precio: "Desde $30/mes",
    comision: "25–30% recurrente",
    ganas: "Videos con AI — muy usado por creadores LATAM",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
  {
    producto: "Canva Pro",
    categoria: "Diseño",
    precio: "$15/mes",
    comision: "hasta 80% primer mes",
    ganas: "Thumbnails y diseño — todos lo usan",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
  {
    producto: "Hotmart",
    categoria: "Cursos Digitales",
    precio: "Variable",
    comision: "40–60% por venta",
    ganas: "Paga en pesos, reales y dólares — nativo LATAM",
    highlight: false,
    badge: "Mejor para LATAM",
    badgeTipo: "dorado" as const,
  },
  {
    producto: "Kit (ConvertKit)",
    categoria: "Email Marketing",
    precio: "Desde $29/mes",
    comision: "30% de por vida",
    ganas: "Recurrente permanente — paga vía PayPal",
    highlight: false,
    badge: null,
    badgeTipo: null,
  },
];

const testimonios = [
  {
    texto: "En 3 meses de recomendar TradingView generé $280 en comisiones recurrentes. Lo recomiendo igual a mis seguidores, el programa de afiliados es solo un bonus.",
    nombre: "Marcos R.",
    rol: "Creador de contenido crypto, Argentina",
  },
  {
    texto: "NordVPN fue una sorpresa. En LATAM muchos exchanges bloquean IPs y todo el mundo necesita una VPN. Tiene una conversión altísima.",
    nombre: "Patricia V.",
    rol: "Newsletter crypto, México",
  },
  {
    texto: "Empecé con Bybit porque lo uso yo mismo. Cuando mis lectores se registran y operan, recibo comisiones de cada trade. Es pasivo real.",
    nombre: "Diego L.",
    rol: "Trader independiente, Colombia",
  },
];

const kitAfiliado = [
  "Links de afiliado personalizados con tracking",
  "Banners y materiales de diseño para redes sociales",
  "Dashboard de comisiones en tiempo real",
  "Soporte prioritario para afiliados activos",
  "Tips de conversión probados por la comunidad",
  "Acceso anticipado a nuevas incorporaciones",
];

export default function AfiliadosPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-4 block">Programa de Afiliados</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Recomendá lo que ya usás.<br />
            <span className="text-verde">Cobrá por eso.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Curated by La Impresora: las mejores comisiones en herramientas crypto, AI y productividad
            que ya le recomendamos a nuestra comunidad. Sin invertir nada, sin inventar nada.
          </p>
        </div>

        {/* Cómo funciona — 3 pasos */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-8">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                paso: "01",
                titulo: "Te registrás",
                desc: "Elegís las herramientas que ya usás o que conocés bien. Te damos el link de afiliado.",
              },
              {
                paso: "02",
                titulo: "Compartís",
                desc: "Lo mencionás en tu newsletter, redes o canal. Sin presión de venta — solo recomendación honesta.",
              },
              {
                paso: "03",
                titulo: "Cobrás",
                desc: "Cada vez que alguien se registra o compra a través de tu link, recibís tu comisión. Automático.",
              },
            ].map((p) => (
              <div key={p.paso} className="card p-6">
                <div className="font-display text-4xl font-bold text-verde/20 mb-4">{p.paso}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{p.titulo}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabla de comisiones */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-2xl font-bold">Tabla de comisiones</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="card overflow-hidden">
            {/* Header tabla */}
            <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-white/5 bg-white/2">
              <div className="col-span-3 text-xs font-semibold text-white/30 uppercase tracking-wider">Producto</div>
              <div className="col-span-2 text-xs font-semibold text-white/30 uppercase tracking-wider">Precio</div>
              <div className="col-span-3 text-xs font-semibold text-white/30 uppercase tracking-wider">Comisión</div>
              <div className="col-span-4 text-xs font-semibold text-white/30 uppercase tracking-wider">Detalle</div>
            </div>

            {/* Filas */}
            {comisiones.map((c, i) => (
              <div
                key={c.producto}
                className={`grid grid-cols-12 gap-4 px-5 py-4 border-b border-white/4 items-center transition-colors hover:bg-white/2 ${
                  i % 2 === 0 ? "" : "bg-white/[0.015]"
                } ${c.highlight ? "border-l-2 border-l-verde/40" : ""}`}
              >
                <div className="col-span-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white text-sm">{c.producto}</span>
                    <span className="badge badge-neutral" style={{ fontSize: "10px", padding: "2px 8px" }}>
                      {c.categoria}
                    </span>
                  </div>
                </div>
                <div className="col-span-2">
                  <span className="text-white/40 text-sm">{c.precio}</span>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-bold text-sm ${c.highlight ? "text-verde" : "text-white"}`}>
                      {c.comision}
                    </span>
                    {c.badge && c.badgeTipo === "verde" && (
                      <span className="badge badge-verde" style={{ fontSize: "9px" }}>{c.badge}</span>
                    )}
                    {c.badge && c.badgeTipo === "dorado" && (
                      <span className="badge badge-dorado" style={{ fontSize: "9px" }}>{c.badge}</span>
                    )}
                  </div>
                </div>
                <div className="col-span-4">
                  <span className="text-white/35 text-sm">{c.ganas}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kit del afiliado */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Kit del afiliado
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Al sumarte al programa recibís todo lo que necesitás para empezar a generar
                comisiones desde el primer día. Sin complicaciones.
              </p>
              <ul className="space-y-3">
                {kitAfiliado.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="text-verde mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6 border border-verde/15 bg-verde/3">
              <p className="text-verde text-xs font-semibold uppercase tracking-widest mb-4">
                Acepta toda LATAM
              </p>
              <h3 className="font-display text-xl font-bold mb-3">
                Pagos en dólares, disponibles para toda la región
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Todos los programas en esta lista aceptan afiliados de Argentina, México,
                Colombia, Chile, Perú y el resto de LATAM. Los pagos se procesan en USD
                vía PayPal, transferencia bancaria o cripto.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Argentina", "México", "Colombia", "Chile", "Perú", "Uruguay"].map((p) => (
                  <span key={p} className="badge badge-neutral">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold">Lo que dicen los afiliados</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonios.map((t) => (
              <div key={t.nombre} className="card p-6 flex flex-col gap-4">
                <p className="text-white/55 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.texto}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.nombre}</p>
                  <p className="text-white/30 text-xs">{t.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card p-10 text-center border border-verde/15">
          <span className="section-label mb-4 block">Sumarte es gratis</span>
          <h2 className="font-display text-3xl font-bold mb-3">
            ¿Querés ser afiliado?
          </h2>
          <p className="text-white/40 text-sm mb-8 max-w-lg mx-auto">
            Escribinos con el asunto "Quiero ser afiliado" y te enviamos el kit completo
            con todos los links y materiales. Respondemos en menos de 48 horas.
          </p>
          <a
            href="mailto:afiliados@laimpresora.io?subject=Quiero%20ser%20afiliado"
            className="btn-primary"
          >
            Escribinos → afiliados@laimpresora.io
          </a>
        </div>

      </div>
    </div>
  );
}
