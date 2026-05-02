import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Geopolítica y crypto: cómo las guerras y sanciones mueven el mercado",
  description:
    "Cómo Rusia usó crypto para evadir sanciones, Bitcoin en El Salvador, el petrodólar y su relación con BTC, los BRICS y la desdolarización, y China y su amor/odio con crypto.",
  openGraph: {
    title: "Geopolítica y crypto: cómo las guerras y sanciones mueven el mercado",
    description:
      "Cómo Rusia usó crypto para evadir sanciones, Bitcoin en El Salvador, el petrodólar y su relación con BTC, los BRICS y la desdolarización, y China y su amor/odio con crypto.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="geopolitica-y-criptomonedas-article"
        data={[
          articleSchema({
            title: "Geopolítica y crypto: cómo las guerras y sanciones mueven el mercado",
            description: "Cómo Rusia usó crypto para evadir sanciones, Bitcoin en El Salvador, el petrodólar y su relación con BTC, los BRICS y la desdolarización, y China y su amor/odio con crypto.",
            slug: "geopolitica-y-criptomonedas",
            publishedAt: "2025-09-01",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Geopolítica y crypto: cómo las guerras y sanciones mueven el mercado", url: "/blog/geopolitica-y-criptomonedas" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Geopolítica</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20">
              Geopolítica
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 10 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Geopolítica y{" "}
            <span className="text-blue-400">crypto</span>:{" "}
            cómo las guerras y sanciones mueven el mercado
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Bitcoin no existe en el vacío. Cada conflicto geopolítico, cada sanción económica,
            cada movimiento de los BRICS y cada decisión de la Reserva Federal impactan directamente
            el precio y la relevancia de las criptomonedas. Entender esta relación es entender
            por qué crypto importa más allá de la especulación.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Intro */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué la geopolítica y las criptomonedas están inevitablemente conectadas
            </h2>
            <p>
              El sistema financiero global fue diseñado alrededor del dólar estadounidense después
              de los acuerdos de Bretton Woods en 1944. El dólar es la moneda de reserva mundial,
              el petróleo se vende en dólares, la deuda soberana se denomina en dólares y el
              sistema SWIFT —la red interbancaria global— opera con el dólar como eje central.
            </p>
            <p className="mt-4">
              Este sistema le da a EE.UU. un poder único: la capacidad de sancionar económicamente
              a cualquier país, empresa o individuo excluyéndolo del sistema financiero global.
              Las sanciones contra Rusia, Irán, Cuba y Venezuela son posibles porque todos
              dependen del dólar y SWIFT para operar en la economía global.
            </p>
            <p className="mt-4">
              Bitcoin y las criptomonedas son la primera tecnología en la historia que permite
              transferir valor globalmente sin necesidad de ese sistema. Esa característica las
              convierte en un actor geopolítico de primer orden —tanto para quienes quieren
              eludir sanciones como para quienes quieren desdolarizarse.
            </p>

            <div className="my-6 border-l-4 border-blue-400 pl-6 bg-blue-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                La pregunta no es si crypto tiene implicaciones geopolíticas. La pregunta es
                cuánto tiempo tardará el sistema financiero global en reorganizarse alrededor
                de esta realidad.
              </p>
            </div>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Rusia */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Rusia y las sanciones: cómo crypto se volvió herramienta de estado
            </h2>
            <p>
              Cuando Rusia invadió Ucrania en febrero de 2022, Occidente respondió con el paquete
              de sanciones más amplio de la historia: exclusión del sistema SWIFT, congelamiento
              de $300 mil millones en reservas del banco central ruso, y restricciones sobre
              importaciones y exportaciones.
            </p>
            <p className="mt-4">
              Lo que siguió fue un experimento en tiempo real sobre el uso de crypto para evadir
              sanciones. Chainalysis y Elliptic —las empresas de análisis blockchain más grandes
              del mundo— documentaron un aumento significativo en el uso de criptomonedas para
              comercio internacional ruso, especialmente con Monero y USDT en blockchains alternativas.
            </p>
            <p className="mt-4">
              Rusia también legalizó el uso de Bitcoin para comercio exterior en agosto de 2023,
              permitiendo que empresas rusas paguen importaciones con criptomonedas. No como
              ideología crypto-libertaria — como necesidad geopolítica pragmática.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-blue-400/10">
                <p className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-3">Lo que funcionó</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Pagos directos entre empresas en USDT</li>
                  <li>· Transferencias a través de exchanges sin KYC en Asia Central</li>
                  <li>· Monero para transacciones que requieren privacidad</li>
                  <li>· Rutas USDT → Tether OTC → yuan chino</li>
                </ul>
              </div>
              <div className="p-5 bg-gris-medio rounded-xl border border-red-400/10">
                <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">Las limitaciones</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Bitcoin y ETH son rastreables en blockchain pública</li>
                  <li>· Los grandes exchanges cooperan con sanciones occidentales</li>
                  <li>· La escala limita la efectividad para macro-economía</li>
                  <li>· Las rutas de conversión a fiat son cuellos de botella</li>
                </ul>
              </div>
            </div>
          </section>

          {/* El Salvador */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El Salvador: Bitcoin como reserva nacional y experimento soberano
            </h2>
            <p>
              En septiembre de 2021, El Salvador se convirtió en el primer país en adoptar Bitcoin
              como moneda de curso legal. El presidente Nayib Bukele lo hizo con dos objetivos
              prácticos: reducir el costo de las remesas (el 24% del PIB salvadoreño proviene
              de remesas) y atraer inversión extranjera.
            </p>
            <p className="mt-4">
              Los resultados han sido mixtos pero instructivos. Las remesas en Bitcoin no alcanzaron
              el volumen esperado — la población rural prefirió seguir usando dólares. Pero el
              turismo "crypto" creció, el gobierno compró consistentemente Bitcoin en caídas
              (acumulando más de 6,000 BTC) y la experiencia demostró que una soberanía monetaria
              alternativa al dólar es técnicamente viable.
            </p>
            <p className="mt-4">
              En 2024, El Salvador acordó con el FMI reducir el uso obligatorio del Bitcoin
              a cambio de un préstamo de $1.4 mil millones. El pragmatismo político se impuso
              sobre el experimento monetario. Pero el precedente —un Estado adoptando Bitcoin
              como reserva— cambió el debate para siempre.
            </p>
          </section>

          {/* Petrodólar y Bitcoin */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El petrodólar y su relación con Bitcoin
            </h2>
            <p>
              El sistema del petrodólar, creado en 1974 cuando EE.UU. acordó con Arabia Saudita
              que el petróleo se vendería exclusivamente en dólares, es la base estructural del
              poder financiero estadounidense. Cualquier país que quiera comprar petróleo necesita
              primero conseguir dólares — lo que crea demanda estructural permanente de la moneda.
            </p>
            <p className="mt-4">
              Este sistema está siendo desafiado desde múltiples ángulos en 2026. China y Arabia
              Saudita ya acuerdan ventas de petróleo en yuan. Rusia vende a India en rupias.
              Brasil y Argentina exploran acuerdos de comercio bilateral sin dólares.
            </p>
            <p className="mt-4">
              Bitcoin emerge en este contexto como el candidato más neutral para ser el estándar
              de reserva del "mundo multipolar": no es la moneda de ningún país, no puede ser
              sancionado por ningún gobierno y su oferta no puede ser manipulada. Michael Saylor,
              CEO de MicroStrategy con $40 mil millones en BTC en balance, argumenta exactamente esto.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                La tesis del "Bitcoin como oro digital" no es solo financiera — es geopolítica.
                En un mundo multipolar donde el dólar pierde hegemonía, Bitcoin es la primera
                alternativa neutra que no pertenece a ningún bloque de poder.
              </p>
            </div>
          </section>

          {/* BRICS */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              BRICS y la desdolarización: ¿Bitcoin como alternativa?
            </h2>
            <p>
              Los BRICS (Brasil, Rusia, India, China, Sudáfrica) ampliados en 2024 representan
              más del 40% del PIB mundial medido por paridad de poder adquisitivo. Su objetivo
              declarado es reducir la dependencia del dólar en el comercio internacional.
            </p>
            <p className="mt-4">
              Las propuestas van desde una moneda común BRICS (técnicamente muy compleja de
              implementar) hasta el uso del yuan chino como alternativa de reserva (problemático
              por la falta de convertibilidad plena del yuan). Ninguna solución tiene consenso.
            </p>
            <p className="mt-4">
              Crypto entra en esta ecuación de forma inesperada: varios países BRICS consideran
              stablecoins respaldadas por materias primas o una criptomoneda multilateral como
              mecanismo de comercio neutro. El debate está abierto. Lo que es claro es que la
              desdolarización no es retórica — es una tendencia estructural que refuerza la
              narrativa de reserva de valor de Bitcoin.
            </p>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-3">Impacto para crypto según escenario</p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-verde font-bold shrink-0">Alcista</span>
                  <span className="text-white/60">Si BRICS adopta BTC como reserva parcial, la demanda institucional es masiva</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-dorado font-bold shrink-0">Neutral</span>
                  <span className="text-white/60">BRICS crea su propia moneda digital — Bitcoin como alternativa para individuos</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-400 font-bold shrink-0">Bajista</span>
                  <span className="text-white/60">BRICS regula crypto duramente para proteger sus monedas nacionales</span>
                </div>
              </div>
            </div>
          </section>

          {/* Crisis geopolítica y precio */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué cuando hay crisis geopolítica el precio de Bitcoin sube
            </h2>
            <p>
              El patrón es consistente: cuando hay incertidumbre geopolítica significativa,
              Bitcoin tiende a subir. No siempre de inmediato — a veces cae junto con el
              resto de activos de riesgo — pero en el período de semanas a meses posteriores
              a una crisis, el patrón alcista se repite.
            </p>
            <p className="mt-4">
              La lógica es simple: las crisis geopolíticas erosionan la confianza en los sistemas
              financieros tradicionales. Cuando la gente duda de la solidez de su banco, su
              moneda o su gobierno, busca activos que no dependan de ninguna de esas instituciones.
              Históricamente era el oro. Hoy es Bitcoin primero.
            </p>

            <div className="mt-5 space-y-3">
              {[
                { evento: "Invasión rusa a Ucrania (Feb 2022)", reaccion: "Bitcoin cayó 10% inmediatamente con los activos de riesgo, luego recuperó 25% en 3 semanas mientras el mercado procesaba las implicaciones de largo plazo" },
                { evento: "Colapso bancario SVB/Signature (Mar 2023)", reaccion: "Bitcoin subió 40% en 3 semanas. Las dudas sobre la solidez bancaria empujaron capital hacia activos no-custodiales" },
                { evento: "Conflicto Israel-Hamas (Oct 2023)", reaccion: "Bitcoin cayó brevemente y luego inició el rally que lo llevó a $73K en marzo de 2024. Máximos históricos en medio de la peor crisis regional en décadas" },
              ].map((e) => (
                <div key={e.evento} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-2">{e.evento}</p>
                  <p className="text-white/50 text-sm">{e.reaccion}</p>
                </div>
              ))}
            </div>
          </section>

          {/* China */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              China y su relación amor/odio con crypto
            </h2>
            <p>
              China ha prohibido Bitcoin cuatro veces desde 2013. Cada prohibición fue seguida
              por una recuperación de precio y un aumento en la adopción global. La relación
              china con crypto es la más compleja y la más instructiva del mundo.
            </p>

            <div className="mt-5 space-y-4">
              {[
                {
                  titulo: "El amor: China minó el 65% de Bitcoin (hasta 2021)",
                  desc: "Antes de la prohibición de minería de 2021, la mayor parte del hashrate de Bitcoin estaba en China, particularmente en provincias como Sichuan con energía hidroeléctrica barata. China fue el corazón del ecosistema Bitcoin durante casi una década.",
                },
                {
                  titulo: "El odio: control de capital y soberanía monetaria",
                  desc: "Bitcoin es incompatible con el control de capitales chino. El gobierno chino no puede controlar quién saca dinero del país si ese dinero es Bitcoin. La prohibición no es ideológica — es una necesidad de control macroeconómico.",
                },
                {
                  titulo: "El yuan digital (e-CNY): la alternativa china",
                  desc: "China es el país más avanzado del mundo en la implementación de un CBDC (Central Bank Digital Currency). El yuan digital le permite al gobierno seguir cada transacción, congelar wallets y programar restricciones de uso. El opuesto exacto de Bitcoin.",
                },
                {
                  titulo: "El efecto rebote de cada prohibición",
                  desc: "Cada ban chino redistribuye el ecosistema: los mineros se mudaron a EE.UU., Kazajistán y Rusia. Los holders chinos usaron exchanges P2P. El resultado neto de las prohibiciones chinas fue descentralizar el ecosistema, haciéndolo más resistente.",
                },
              ].map((c) => (
                <div key={c.titulo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-2">{c.titulo}</p>
                  <p className="text-white/50 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Crypto en el tablero geopolítico global: la perspectiva de largo plazo
            </h2>
            <p>
              La narrativa de Bitcoin como "dinero de internet" evolucionó. En 2026, Bitcoin es
              también una herramienta geopolítica, un activo de reserva emergente, un mecanismo
              de evasión de sanciones y un desafío estructural al sistema del petrodólar.
            </p>
            <p className="mt-4">
              Para los inversores de LATAM, entender estas dinámicas importa porque determinan la
              demanda institucional y soberana de Bitcoin — la más significativa del ecosistema.
              Un país que compra BTC como reserva nacional o una empresa que lo adopta para
              comercio exterior tiene un impacto muy diferente al del retail comprando en un exchange.
            </p>
            <p className="mt-4">
              La conclusión práctica: el contexto geopolítico es uno de los mejores indicadores
              adelantados para la adopción de Bitcoin. Cuando los sistemas de control financiero
              tradicional fallan, Bitcoin emerge como alternativa. Y los sistemas de control
              financiero tradicional están fallando con una frecuencia histórica.
            </p>
          </section>

        </article>

        {/* CTA Newsletter */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Análisis geopolítico y crypto cada jueves</p>
          <p className="text-white/50 mb-6">
            Contexto real para entender el mercado. Sin ruido, sin predicciones de precio vacías.
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
            <Link href="/blog/privacidad-digital-crypto-guia" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-verde font-bold">Seguridad</span>
              <p className="text-white font-bold mt-2 leading-tight">Privacidad digital y crypto: cómo proteger tu identidad en 2026</p>
            </Link>
            <Link href="/blog/como-funciona-el-dinero-crypto" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Cómo funciona el dinero crypto: guía completa para LATAM</p>
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
