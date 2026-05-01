import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Cómo ganar dinero con crypto sin invertir dinero: 7 métodos reales",
  description:
    "7 métodos reales para ganar criptomonedas sin poner dinero de tu bolsillo: airdrops, staking, bounties, learn-to-earn, mining con PC y más. Sin promesas vacías.",
  openGraph: {
    title: "Cómo ganar dinero con crypto sin invertir dinero: 7 métodos reales",
    description:
      "7 métodos reales para ganar criptomonedas sin poner dinero de tu bolsillo: airdrops, staking, bounties, learn-to-earn, mining con PC y más. Sin promesas vacías.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Crypto</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-dorado/10 text-dorado border-dorado/20">
              Crypto
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 10 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Cómo ganar dinero con crypto{" "}
            <span className="text-dorado">sin invertir dinero:</span> 7 métodos reales
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            La mayoría de artículos sobre "ganar crypto gratis" son basura: faucets que pagan centavos
            por hora, esquemas que no existen o scams disfrazados de oportunidad. Esta guía es diferente.
            Acá te explicamos qué funciona, qué no vale la pena, y qué requiere tiempo real vs capital.
            Sin promesas de hacerse rico.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Intro */}
          <section>
            <p>
              Primero lo honesto: casi ningún método de "ganar crypto sin invertir" te va a hacer rico.
              Lo que sí pueden hacer es darte exposición al ecosistema, acumular pequeñas posiciones
              mientras aprendés, y en algunos casos generar ingresos reales si tenés habilidades
              específicas. Con esa claridad, empecemos.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                La regla de oro: si algo promete "ganar mucho crypto sin hacer nada", es un scam.
                Los métodos reales requieren tiempo, habilidad o recursos computacionales. No existe el almuerzo gratis en crypto.
              </p>
            </div>
          </section>

          {/* Método 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Método 1: Airdrops — la forma más efectiva si llegás a tiempo
            </h2>
            <p>
              Un airdrop es cuando un proyecto nuevo distribuye tokens gratis a usuarios que completaron
              ciertas acciones: usar su plataforma, votar en su gobernanza, proveer liquidez o simplemente
              haber usado protocolos relacionados en fecha determinada.
            </p>
            <p className="mt-4">
              Los mejores airdrops de los últimos años pagaron miles de dólares a usuarios que simplemente
              habían usado las plataformas antes de que anunciaran el token. Uniswap regaló UNI valuados
              en $1,200 por usuario en 2020. Arbitrum repartió tokens que llegaron a valer $2,000–10,000
              por wallet en 2023. Optimism, dYdX, ENS — todos tuvieron airdrops masivos para early users.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  titulo: "Cómo posicionarte para airdrops futuros",
                  desc: "Usá protocolos DeFi nuevos en Ethereum, Arbitrum, Base y Solana. Hacé transacciones reales, no simuladas. Interactuá con gobernanza cuando podés. Mantené tus wallets activas con actividad auténtica.",
                },
                {
                  titulo: "Dónde seguir airdrops confirmados y especulativos",
                  desc: "Airdrops.io, DefiLlama Airdrops, y Twitter/X crypto son tus mejores fuentes. Muchos proyectos anuncian criterios de elegibilidad semanas antes del snapshot.",
                },
                {
                  titulo: "El riesgo real",
                  desc: "Pasás tiempo usando protocolos que pueden tener bugs o ser scams. Nunca pongas fondos importantes en protocolos nuevos solo por cazar un airdrop. El tiempo invertido puede no tener retorno.",
                },
              ].map((item) => (
                <div key={item.titulo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold">{item.titulo}</p>
                  <p className="text-white/50 text-base mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-verde/5 border border-verde/20 rounded-xl">
              <p className="text-verde font-bold text-sm">Potencial real:</p>
              <p className="text-white/60 text-sm mt-1">Desde $0 hasta miles de dólares. La varianza es enorme. No contés con esto como ingreso predecible.</p>
            </div>
          </section>

          {/* Método 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Método 2: Staking con lo que ya tenés
            </h2>
            <p>
              Si ya tenés crypto — aunque sea poco — el staking te permite hacerlo rendir sin venderlo.
              El staking consiste en bloquear tus tokens en un protocolo para ayudar a validar transacciones
              y recibís recompensas en más tokens del mismo tipo.
            </p>
            <p className="mt-4">
              Esto no es "ganar sin invertir" en el sentido estricto, pero sí es ganar más con lo que
              ya tenés. Si tenés $100 en ETH y los pones en staking, podés ganar 3-4% anual sin hacer nada
              más. En Solana los rendimientos son del 6-8%. En algunos protocolos DeFi, mucho más.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Staking centralizado (exchange)</p>
                <ul className="space-y-2 text-white/50 text-sm">
                  <li>· Lemon: hasta 8% en stablecoins</li>
                  <li>· Binance Earn: ETH, BNB, SOL</li>
                  <li>· Ripio: staking de ETH y BTC</li>
                  <li>· Fácil de configurar, sin wallet propia</li>
                  <li>· Riesgo: el exchange custodia tus fondos</li>
                </ul>
              </div>
              <div className="p-5 bg-dorado/5 rounded-xl border border-dorado/20">
                <p className="text-dorado text-xs uppercase tracking-widest mb-3 font-bold">Staking descentralizado</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Lido: staking de ETH (4% APR)</li>
                  <li>· Marinade: staking de SOL (7% APR)</li>
                  <li>· Phantom wallet: SOL nativo</li>
                  <li>· Vos tenés tus claves</li>
                  <li>· Requiere más conocimiento técnico</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-verde/5 border border-verde/20 rounded-xl">
              <p className="text-verde font-bold text-sm">Potencial real:</p>
              <p className="text-white/60 text-sm mt-1">3–15% anual sobre lo que ya tenés. Predecible, sin volatilidad adicional. El método más sostenible de los 7.</p>
            </div>
          </section>

          {/* Método 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Método 3: Bounties de proyectos crypto
            </h2>
            <p>
              Los proyectos crypto pagan en sus propios tokens a personas que realizan tareas específicas:
              encontrar bugs en su código, traducir documentación, crear contenido educativo, moderar
              comunidades, desarrollar funcionalidades o testear sus plataformas.
            </p>
            <p className="mt-4">
              Esto requiere habilidades reales. Si sos desarrollador, diseñador, traductor, escritor o
              community manager, hay trabajo real pagado en crypto. Plataformas como Gitcoin, Immunefi
              (bug bounties de seguridad) y los Discord de proyectos grandes publican bounties regularmente.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  tipo: "Bug bounties (seguridad)",
                  plataforma: "Immunefi, HackerOne",
                  pago: "$1,000 – $10M+ por vulnerabilidad crítica",
                  requiere: "Programación, conocimiento de seguridad web3",
                },
                {
                  tipo: "Desarrollo de código",
                  plataforma: "Gitcoin, Bountycaster",
                  pago: "$100 – $10,000 por tarea",
                  requiere: "Solidity, Rust, TypeScript, React",
                },
                {
                  tipo: "Traducción y localización",
                  plataforma: "Discord de proyectos grandes",
                  pago: "$50 – $500 por documento",
                  requiere: "Español fluido, inglés técnico",
                },
                {
                  tipo: "Creación de contenido",
                  plataforma: "Mirror, Paragraph, redes sociales",
                  pago: "$50 – $2,000 por artículo o video",
                  requiere: "Escritura, diseño, video editing",
                },
              ].map((b) => (
                <div key={b.tipo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-white font-bold">{b.tipo}</p>
                    <span className="text-verde text-xs font-bold shrink-0">{b.pago}</span>
                  </div>
                  <p className="text-white/40 text-xs mb-1">Plataforma: {b.plataforma}</p>
                  <p className="text-white/50 text-sm">Requiere: {b.requiere}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-verde/5 border border-verde/20 rounded-xl">
              <p className="text-verde font-bold text-sm">Potencial real:</p>
              <p className="text-white/60 text-sm mt-1">El método con mayor upside si tenés habilidades técnicas. Un desarrollador Solidity puede ganar $3,000–$15,000/mes solo en bounties.</p>
            </div>
          </section>

          {/* Método 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Método 4: Crypto faucets — la verdad sin filtros
            </h2>
            <p>
              Los faucets son páginas que distribuyen pequeñísimas cantidades de crypto gratis a cambio
              de ver publicidad o completar captchas. Existieron desde los primeros días de Bitcoin.
              En 2010, el primer faucet regalaba 5 BTC por resolver un captcha. Hoy eso valdría $400,000.
            </p>
            <p className="mt-4">
              En 2026, la realidad es esta: los faucets modernos pagan tan poco que el tiempo invertido
              no justifica el esfuerzo. Hablamos de satoshis (fracciones de BTC) que pueden tardar
              semanas en acumular el mínimo de retiro. No es un método viable como ingreso.
            </p>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Honestidad brutal: los faucets no valen tu tiempo. Si en el mismo tiempo estudiás
                una skill de crypto o contribuís a un proyecto open source, el retorno es 100x mayor.
                Los incluimos porque muchos los buscan, pero no los recomendamos como estrategia real.
              </p>
            </div>

            <p>
              La única excepción son los testnet faucets: dan tokens de redes de prueba (sin valor real)
              para que puedas practicar transacciones, deploying de contratos y uso de DeFi sin costo.
              Estos sí tienen valor educativo.
            </p>

            <div className="mt-4 p-4 bg-verde/5 border border-verde/20 rounded-xl">
              <p className="text-verde font-bold text-sm">Potencial real:</p>
              <p className="text-white/60 text-sm mt-1">Minúsculo. Solo útiles para aprender cómo funcionan las transacciones. No como fuente de ingresos.</p>
            </div>
          </section>

          {/* Método 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Método 5: Mining con tu PC actual
            </h2>
            <p>
              El mining de Bitcoin con PC hogareña es prácticamente inviable en 2026 — las ASICs
              industriales lo dominan por completo. Pero hay otras criptomonedas que aún se pueden
              minar con GPU o CPU, y dependiendo de tu equipo y el costo de electricidad, puede
              ser rentable.
            </p>
            <p className="mt-4">
              Monero (XMR) está diseñado específicamente para resistir las ASICs y puede minarse
              con CPU regular. Con una PC moderna (Ryzen 7 o i7 reciente) podés generar $5–30 por
              mes según el precio del XMR y tu tarifa eléctrica. No es mucho, pero es pasivo una
              vez configurado.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  crypto: "Monero (XMR)",
                  hardware: "CPU — cualquier PC moderna",
                  ganancia: "$5–30/mes (varía con precio y electricidad)",
                  software: "XMRig — gratuito y open source",
                  nota: "La opción más honesta para mining doméstico. XMR está diseñado para CPU.",
                },
                {
                  crypto: "Ethereum Classic (ETC), Ravencoin (RVN)",
                  hardware: "GPU — tarjeta dedicada (AMD o NVIDIA)",
                  ganancia: "$20–80/mes con GPU mid-range",
                  software: "Unmineable, NiceHash",
                  nota: "Requiere GPU dedicada. Si ya la tenés para gaming, puede ser rentable. Prestá atención al consumo eléctrico.",
                },
                {
                  crypto: "Helium (HNT) / IoT mining",
                  hardware: "Hotspot dedicado ($300–500 de inversión inicial)",
                  ganancia: "$10–500/mes según ubicación y densidad de red",
                  software: "App de Helium",
                  nota: "Técnicamente requiere inversión inicial en hardware. Pero una vez instalado es completamente pasivo.",
                },
              ].map((m) => (
                <div key={m.crypto} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold mb-1">{m.crypto}</p>
                  <p className="text-white/40 text-xs mb-2">Hardware: {m.hardware}</p>
                  <p className="text-verde text-sm font-bold mb-2">{m.ganancia}</p>
                  <p className="text-white/50 text-sm">{m.nota}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-verde/5 border border-verde/20 rounded-xl">
              <p className="text-verde font-bold text-sm">Potencial real:</p>
              <p className="text-white/60 text-sm mt-1">$5–80/mes con hardware que ya tenés. La clave es el costo eléctrico — calculá primero con whattomine.com antes de empezar.</p>
            </div>
          </section>

          {/* Método 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Método 6: Learn-to-earn — que te paguen por aprender
            </h2>
            <p>
              Algunas plataformas pagan en crypto a usuarios que completan cursos educativos, toman
              quizzes o aprenden sobre proyectos específicos. Es el modelo "learn-to-earn" y tiene
              sentido desde el punto de vista del proyecto: pagan a futuros usuarios para que conozcan
              su ecosistema.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  plataforma: "Coinbase Learning Rewards",
                  como: "Completás micro-cursos de 2-3 minutos sobre criptomonedas específicas y recibís pequeñas cantidades de esos tokens.",
                  pago: "$3–15 por curso completado",
                  disponible: "Disponible según país — Argentina con limitaciones, México y Chile sin restricciones.",
                },
                {
                  plataforma: "Binance Learn & Earn",
                  como: "Similar a Coinbase. Completás videos cortos, aprobás quizzes y recibís tokens del proyecto estudiado.",
                  pago: "$5–30 por campaña",
                  disponible: "Disponible en toda LATAM con cuenta verificada.",
                },
                {
                  plataforma: "RabbitHole / Galxe",
                  como: "Completás tareas on-chain (usar un protocolo, hacer una transacción específica) y ganás credenciales NFT que pueden tener valor o servir para airdrops futuros.",
                  pago: "Variable — desde $0 hasta sorpresas importantes",
                  disponible: "Global, sin restricciones geográficas.",
                },
              ].map((p) => (
                <div key={p.plataforma} className="p-6 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-black mb-2">{p.plataforma}</p>
                  <p className="text-white/50 text-sm mb-3">{p.como}</p>
                  <div className="flex flex-col md:flex-row gap-2 text-sm">
                    <span className="text-verde font-bold">{p.pago}</span>
                    <span className="text-white/30 hidden md:block">·</span>
                    <span className="text-white/40">{p.disponible}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-verde/5 border border-verde/20 rounded-xl">
              <p className="text-verde font-bold text-sm">Potencial real:</p>
              <p className="text-white/60 text-sm mt-1">$50–200 por mes si sos activo en múltiples plataformas. El mayor beneficio no es el dinero sino el conocimiento acumulado.</p>
            </div>
          </section>

          {/* Método 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Método 7: Crear contenido sobre crypto
            </h2>
            <p>
              Si tenés capacidad de comunicar conceptos de crypto de forma clara — en texto, video
              o audio — hay un mercado enorme y creciente para eso. La mayoría de la gente en LATAM
              necesita educación financiera sobre crypto en español, y los creadores que lo hacen bien
              tienen negocios sólidos.
            </p>
            <p className="mt-4">
              Esto no es "sin esfuerzo" — requiere tiempo, consistencia y conocimiento real. Pero
              es un método donde el retorno puede ser mucho mayor que los anteriores.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  formato: "Newsletter en español",
                  plataforma: "Substack, Beehiiv",
                  modelo: "Gratis + premium suscripción. Con 500 suscriptores pagos a $10/mes = $5,000/mes.",
                  tiempo: "3-6 meses para tener tracción real",
                },
                {
                  formato: "Canal de YouTube educativo",
                  plataforma: "YouTube",
                  modelo: "AdSense + sponsors de proyectos crypto. Canales de nicho en español con 10k subs ganan $500–2,000/mes.",
                  tiempo: "6-12 meses para monetizar",
                },
                {
                  formato: "Tweets/hilos de crypto en español",
                  plataforma: "Twitter/X",
                  modelo: "Monetización de X + sponsors + ventas de cursos. Cuentas con 5k–20k seguidores pueden ganar $500–3,000/mes.",
                  tiempo: "3-6 meses de contenido consistente",
                },
                {
                  formato: "Artículos en Mirror o Paragraph",
                  plataforma: "Mirror.xyz, Paragraph.xyz",
                  modelo: "Se puede cobrar en crypto directamente. Artículos de calidad pueden generar tips y suscripciones.",
                  tiempo: "Inmediato si tenés una audiencia preexistente",
                },
              ].map((c) => (
                <div key={c.formato} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-1">{c.formato}</p>
                  <p className="text-white/40 text-xs mb-2">{c.plataforma}</p>
                  <p className="text-white/50 text-sm mb-2">{c.modelo}</p>
                  <p className="text-verde text-xs font-bold">{c.tiempo}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-verde/5 border border-verde/20 rounded-xl">
              <p className="text-verde font-bold text-sm">Potencial real:</p>
              <p className="text-white/60 text-sm mt-1">El mayor upside de todos los métodos. $500–$10,000+/mes con consistencia. Pero también el que más tiempo y esfuerzo requiere para arrancar.</p>
            </div>
          </section>

          {/* Resumen comparativo */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Comparativa rápida: qué método es mejor para tu situación
            </h2>
            <div className="space-y-3">
              {[
                { metodo: "Airdrops", mejor_si: "Tenés tiempo para explorar protocolos DeFi nuevos", potencial: "Alto pero impredecible", dificultad: "Media" },
                { metodo: "Staking", mejor_si: "Ya tenés crypto y querés rendimiento pasivo", potencial: "3–15% anual", dificultad: "Baja" },
                { metodo: "Bounties", mejor_si: "Tenés habilidades técnicas (dev, diseño, escritura)", potencial: "El más alto si aplicás bien", dificultad: "Alta" },
                { metodo: "Faucets", mejor_si: "Querés aprender cómo funciona una transacción (testnet)", potencial: "Mínimo", dificultad: "Muy baja" },
                { metodo: "Mining", mejor_si: "Tenés GPU o CPU potente y electricidad barata", potencial: "$5–80/mes", dificultad: "Media" },
                { metodo: "Learn-to-earn", mejor_si: "Estás empezando y querés aprender mientras ganás", potencial: "$50–200/mes", dificultad: "Baja" },
                { metodo: "Contenido", mejor_si: "Podés comunicar bien y tenés paciencia para construir audiencia", potencial: "$500–$10,000+/mes", dificultad: "Alta pero sostenible" },
              ].map((r) => (
                <div key={r.metodo} className="flex flex-col md:flex-row md:items-center gap-2 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-dorado font-bold md:w-32 shrink-0">{r.metodo}</span>
                  <span className="text-white/60 text-sm flex-1">{r.mejor_si}</span>
                  <span className="text-verde text-sm font-semibold md:text-right shrink-0">{r.potencial}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              La conclusión honesta sobre ganar crypto sin invertir
            </h2>
            <p>
              Ninguno de estos métodos te va a hacer millonario sin esfuerzo. Pero eso tampoco significa
              que sean inútiles. Los airdrops son la mayor oportunidad asimétrica — poco tiempo por
              potencialmente mucho retorno. El staking convierte lo que ya tenés en más. Los bounties
              pagan skills reales con crypto real.
            </p>
            <p className="mt-4">
              La mentalidad correcta no es "quiero crypto gratis" sino "quiero participar del ecosistema
              sin capital inicial". Eso es válido y hay formas reales de hacerlo. Lo que no tiene lugar
              es la búsqueda de atajos que no existen.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> cubrimos semanalmente las mejores
              oportunidades de airdrops, staking y bounties en LATAM. Sin spam, sin shilling, con los
              números reales.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Las mejores oportunidades de airdrops y bounties, cada semana en tu email</p>
          <p className="text-white/50 mb-6">
            Cubrimos el ecosistema crypto de LATAM con los datos que importan. Gratis, sin spam.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-dorado text-oscuro font-black px-8 py-4 rounded-full hover:bg-dorado/90 transition-all"
          >
            Suscribirme gratis →
          </a>
        </div>

        {/* Más artículos */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-white font-black text-xl mb-6">Seguí leyendo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/mejores-exchanges-crypto-argentina-2026" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Los mejores exchanges de criptomonedas en Argentina en 2026</p>
            </Link>
            <Link href="/blog/que-es-defi-como-funciona" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-verde font-bold">DeFi</span>
              <p className="text-white font-bold mt-2 leading-tight">Qué es DeFi y cómo funciona: guía completa para principiantes</p>
            </Link>
          </div>
        </div>

      </div>

      <div className="mt-24">
        <Newsletter />
      </div>
    </div>
  );
}
