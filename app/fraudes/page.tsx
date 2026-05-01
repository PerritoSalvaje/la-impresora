import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Fraudes & Rug Pulls — El directorio de fraudes crypto en español | La Impresora",
  description:
    "FTX, Luna, OneCoin, Bitconnect: los grandes fraudes crypto documentados. Aprende a identificar estafas y proteger tu inversión. Guía completa en español para LATAM.",
};

const fraudes = [
  {
    nombre: "FTX",
    año: "2022",
    perdida: "$8,000M",
    tipo: "Exchange centralizado",
    resumen:
      "El segundo exchange de crypto más grande del mundo colapsó en días. Sam Bankman-Fried usó los fondos de clientes para financiar apuestas especulativas a través de Alameda Research. 1 millón de acreedores afectados.",
    leccion: "Nunca dejés grandes montos en un exchange. Self-custody es la única protección real.",
    color: "border-red-500/30 bg-red-500/5",
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    nombre: "Terra / Luna",
    año: "2022",
    perdida: "$40,000M",
    tipo: "Stablecoin algorítmica",
    resumen:
      "UST era una stablecoin 'algorítmica' que mantenía su valor a $1 a través de un mecanismo con LUNA. En mayo de 2022, el mecanismo colapsó en espiral de muerte: UST perdió su peg y LUNA cayó de $80 a fracciones de centavo en 72 horas.",
    leccion: "Las stablecoins algorítmicas no están respaldadas por nada real. Son un experimento con tu dinero.",
    color: "border-red-500/30 bg-red-500/5",
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    nombre: "OneCoin",
    año: "2014–2019",
    perdida: "$25,000M",
    tipo: "Pirámide / Cripto falsa",
    resumen:
      "La estafa crypto más grande de la historia. Ruja Ignatova ('La Cryptoqueen') vendió una criptomoneda que nunca existió en ninguna blockchain real. Operó como pirámide multinivel en más de 175 países. Ignatova permanece prófuga.",
    leccion: "Si no podés verificar la moneda en un explorador de blockchain público, no existe.",
    color: "border-orange-500/30 bg-orange-500/5",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    nombre: "Bitconnect",
    año: "2016–2018",
    perdida: "$3,500M",
    tipo: "Ponzi / Lending platform",
    resumen:
      "Prometía rendimientos del 40% mensual con un 'trading bot secreto'. Era un esquema Ponzi clásico: los primeros inversores cobraban con el dinero de los nuevos. Colapsó cuando los reguladores de EE.UU. y UK actuaron simultáneamente.",
    leccion: "Cualquier proyecto que prometa rendimientos garantizados absurdos es una señal de alarma inmediata.",
    color: "border-orange-500/30 bg-orange-500/5",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
];

const reglas = [
  {
    numero: "01",
    titulo: "Verificá siempre en blockchain",
    desc: "Cualquier token o proyecto legítimo tiene una dirección verificable en Etherscan, Solscan o el explorador correspondiente. Si no está on-chain, no existe.",
    icono: "🔍",
  },
  {
    numero: "02",
    titulo: "Desconfiá de los rendimientos garantizados",
    desc: "Bitcoin a lo largo de 15 años promedia ~60% anual con alta volatilidad. Cualquier proyecto que prometa 5% mensual fijo es matemáticamente un Ponzi.",
    icono: "⚠️",
  },
  {
    numero: "03",
    titulo: "Investigá al equipo",
    desc: "¿El equipo es público y verificable? ¿Tienen historial? Los proyectos anónimos sin track record son de alto riesgo. Buscá sus nombres en LinkedIn, Twitter y GitHub.",
    icono: "👥",
  },
  {
    numero: "04",
    titulo: "Revisá la liquidez y el contrato",
    desc: "Usá DeFiLlama y Token Sniffer antes de invertir en cualquier token nuevo. Revisá si la liquidez está bloqueada y si el contrato tiene funciones que permitan al team robarte.",
    icono: "📊",
  },
  {
    numero: "05",
    titulo: "Usá self-custody para montos grandes",
    desc: "Si tenés más de $1,000 en crypto, necesitás una hardware wallet. Ledger o Trezor. Los exchanges quiebran, son hackeados o congelan fondos: tu custodia, tu cripto.",
    icono: "🔐",
  },
];

const postsBlog = [
  {
    slug: "que-es-bitcoin-y-como-funciona",
    titulo: "Qué es Bitcoin y cómo funciona: la guía definitiva",
    desc: "Antes de invertir en cualquier cosa, entendé la base. Bitcoin es el único activo crypto que lleva 15 años sin ser hackeado.",
  },
  {
    slug: "wallets-crypto-cuales-son-mejores",
    titulo: "Las mejores wallets de crypto en 2026",
    desc: "Self-custody es la única protección real. Comparativa entre Ledger, Trezor y wallets de software.",
  },
  {
    slug: "stablecoins-latam",
    titulo: "Stablecoins en LATAM: cuáles son seguras y cuáles no",
    desc: "La diferencia entre USDC y UST marcó la diferencia entre proteger capital y perderlo todo.",
  },
];

export default function FraudesPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-400 rounded-full" />
            Protección del Inversor
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            El directorio de<br />
            <span className="text-red-400" style={{ textShadow: "0 0 30px rgba(248,113,113,0.4)" }}>
              fraudes crypto
            </span><br />
            <span className="text-white text-4xl md:text-5xl">en español.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Los grandes colapsos documentados, sin sensacionalismo.{" "}
            <strong className="text-white">
              Porque la mejor protección es entender exactamente qué pasó y por qué.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#fraudes"
              className="bg-red-500 text-white font-black text-lg px-8 py-4 rounded-full hover:bg-red-400 transition-all"
              style={{ boxShadow: "0 0 30px rgba(239,68,68,0.2)" }}
            >
              Ver los casos documentados →
            </a>
            <a
              href="#proteccion"
              className="border border-white/10 text-white/70 font-semibold text-lg px-8 py-4 rounded-full hover:border-red-400/30 hover:text-red-400 transition-all"
            >
              Cómo protegerte
            </a>
          </div>
        </div>
      </section>

      {/* Casos documentados */}
      <section id="fraudes" className="py-20 px-6 bg-gris border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Casos documentados
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Los fraudes que{" "}
              <span className="text-red-400">destruyeron más capital</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Analizados con frialdad. Sin drama. Para que no te pase a vos.
            </p>
          </div>

          <div className="space-y-6">
            {fraudes.map((fraude) => (
              <div key={fraude.nombre} className={`rounded-2xl border p-6 md:p-8 ${fraude.color}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-black text-white">{fraude.nombre}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${fraude.badge}`}>
                        {fraude.tipo}
                      </span>
                      <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded-full">
                        {fraude.año}
                      </span>
                      <span className="text-xs font-bold text-red-400">
                        Pérdida estimada: {fraude.perdida}
                      </span>
                    </div>
                    <p className="text-white/60 leading-relaxed mb-5">{fraude.resumen}</p>
                    <div className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-verde text-sm font-bold shrink-0">Lección:</span>
                      <p className="text-white/50 text-sm leading-relaxed">{fraude.leccion}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 reglas de protección */}
      <section id="proteccion" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Cómo protegerte
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              5 reglas para no ser la{" "}
              <span className="text-verde verde-text-glow">próxima víctima</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              No hace falta ser un experto. Alcanza con aplicar estos principios básicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reglas.map((regla) => (
              <div key={regla.numero} className="gradient-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-verde/10 border border-verde/20 flex items-center justify-center text-xl shrink-0">
                    {regla.icono}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-verde font-mono text-xs font-bold">{regla.numero}</span>
                      <h3 className="font-black text-base text-white">{regla.titulo}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{regla.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protección recomendada — Ledger / Trezor */}
      <section className="py-16 px-6 bg-gris border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-white/5 border border-white/10 text-white/50 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Protección recomendada
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              La única forma de saber que nadie puede robarte:{" "}
              <span className="text-verde verde-text-glow">self-custody</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm">
              Hardware wallets verificadas. Usadas por los inversores serios. Sin afiliado oculto — enlace transparente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href="https://www.ledger.com/?r=la-impresora"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="gradient-border rounded-2xl p-6 hover:scale-[1.02] transition-transform block group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-black text-xl text-white group-hover:text-verde transition-colors">Ledger Nano X</h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full border bg-verde/10 text-verde border-verde/20 shrink-0">
                  ~$149 USD
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                La hardware wallet más popular del mundo. Soporta 5,500+ activos. Bluetooth para mobile. Fabricada en Francia. La usamos nosotros.
              </p>
              <span className="text-verde text-sm font-bold">Ver Ledger →</span>
            </a>

            <a
              href="https://trezor.io/?r=la-impresora"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="gradient-border rounded-2xl p-6 hover:scale-[1.02] transition-transform block group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-black text-xl text-white group-hover:text-verde transition-colors">Trezor Model T</h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full border bg-verde/10 text-verde border-verde/20 shrink-0">
                  ~$169 USD
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Open source al 100%. Pantalla táctil. La preferida por quienes priorizan transparencia sobre todo. Auditada públicamente.
              </p>
              <span className="text-verde text-sm font-bold">Ver Trezor →</span>
            </a>
          </div>

          <p className="text-center text-white/20 text-xs mt-4">
            * Los enlaces anteriores son de afiliado. Eso no cambia el precio ni nuestra opinión honesta.
          </p>
        </div>
      </section>

      {/* Artículos del blog */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black mb-2">
                Artículos para{" "}
                <span className="text-verde verde-text-glow">protegerte</span>
              </h2>
              <p className="text-white/40">El conocimiento concreto que reduce el riesgo.</p>
            </div>
            <Link href="/blog" className="text-verde text-sm hover:underline shrink-0">
              Ver todos →
            </Link>
          </div>

          <div className="space-y-4">
            {postsBlog.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="gradient-border rounded-2xl p-6 hover:scale-[1.01] transition-transform block"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full border bg-red-500/10 text-red-400 border-red-500/20 shrink-0">
                    Protección
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 leading-tight hover:text-verde transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 px-6 bg-gris border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Newsletter de protección
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Aprendé a identificar estafas<br />
            <span className="text-verde verde-text-glow">antes de que te cuesten caro</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Análisis semanal de proyectos, red flags del mercado y educación financiera real.{" "}
            <strong className="text-white">Gratis, cada jueves.</strong>
          </p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
