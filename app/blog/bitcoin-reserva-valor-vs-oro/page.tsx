import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Bitcoin como reserva de valor: ¿puede reemplazar al oro en 2026?",
  description:
    "El caso de Bitcoin vs oro como reserva de valor: historia del oro, qué hace similar a Bitcoin (escasez, portabilidad), Michael Saylor, El Salvador y cómo posicionarte como inversor.",
  openGraph: {
    title: "Bitcoin como reserva de valor: ¿puede reemplazar al oro en 2026?",
    description:
      "Bitcoin vs oro: escasez, divisibilidad, portabilidad. El caso de MicroStrategy, El Salvador y los bancos centrales. Cómo posicionarse como inversor retail.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="bitcoin-reserva-valor-vs-oro-article"
        data={[
          articleSchema({
            title: "Bitcoin como reserva de valor: ¿puede reemplazar al oro en 2026?",
            description: "El caso de Bitcoin vs oro como reserva de valor: historia del oro, qué hace similar a Bitcoin (escasez, portabilidad), Michael Saylor, El Salvador y cómo posicionarte como inversor.",
            slug: "bitcoin-reserva-valor-vs-oro",
            publishedAt: "2025-09-01",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Bitcoin como reserva de valor: ¿puede reemplazar al oro en 2026?", url: "/blog/bitcoin-reserva-valor-vs-oro" },
          ]),
        ]}
      />

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
            <span className="text-white/20 text-xs">· 14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Bitcoin como reserva de valor:{" "}
            <span className="text-dorado">¿puede reemplazar al oro en 2026?</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Durante 5,000 años, el oro fue la respuesta a una pregunta fundamental: ¿cómo protejo
            mi riqueza del tiempo, los gobiernos y la inflación? En los últimos quince años, Bitcoin
            apareció con la misma promesa — pero con propiedades que el oro nunca pudo tener. Esta
            no es una comparación entre lo viejo y lo nuevo. Es una pregunta sobre qué forma de
            escasez funciona mejor en el mundo digital del siglo XXI.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El oro como reserva de valor: 5,000 años de historia
            </h2>
            <p>
              El oro no se convirtió en reserva de valor por decisión de ningún gobierno o institución.
              Surgió como dinero porque cumplía mejor que cualquier otra cosa un conjunto de propiedades
              críticas: es escaso, durable, divisible, fungible (cada gramo es igual a cualquier otro
              gramo) y difícil de falsificar.
            </p>
            <p className="mt-4">
              La escasez del oro no es arbitraria. El metal existe en la Tierra en cantidades limitadas.
              Extraerlo cuesta energía, tiempo y capital. Ese costo de producción es lo que le dio
              históricamente su valor: nadie puede crear oro de la nada, al contrario de lo que los
              gobiernos hacen constantemente con el papel moneda.
            </p>
            <p className="mt-4">
              El abandono del patrón oro en 1971 —cuando Nixon desvinculó el dólar del oro— marcó el
              inicio de la era del dinero fiat puro. Desde entonces, todos los bancos centrales del
              mundo pueden crear dinero sin restricción. El resultado: inflación estructural que erosiona
              el poder adquisitivo de quienes guardan efectivo.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "$16 trillones", label: "Capitalización de mercado del oro en 2026", color: "text-dorado" },
                { stat: "3,500+ años", label: "Historia del oro como dinero y reserva de valor", color: "text-dorado" },
                { stat: "~3,300 ton", label: "Oro extraído anualmente (crecimiento de oferta ~1.5%/año)", color: "text-dorado" },
              ].map((item) => (
                <div key={item.label} className="p-5 bg-gris-medio rounded-xl border border-dorado/10 text-center">
                  <p className={`text-2xl font-black ${item.color} mb-2`}>{item.stat}</p>
                  <p className="text-white/50 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué hace similar a Bitcoin y al oro: las propiedades que importan
            </h2>
            <p>
              El argumento de Bitcoin como "oro digital" no es marketing. Se basa en propiedades
              técnicas concretas que comparte con el metal precioso — y en varios casos las supera:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  propiedad: "Escasez verificable",
                  oro: "La oferta de oro crece aproximadamente 1.5% anual con nueva minería. Es difícil de crear más, pero no imposible.",
                  bitcoin: "Bitcoin tiene un límite máximo de 21 millones de monedas codificado en el protocolo. Nadie — ni Satoshi, ni ningún gobierno — puede cambiar ese número. La escasez de Bitcoin es más verificable que la del oro.",
                  ventaja: "Bitcoin",
                },
                {
                  propiedad: "Portabilidad",
                  oro: "El oro es físicamente pesado. Trasladar $1 millón en oro requiere transporte especializado, seguridad y logística costosa.",
                  bitcoin: "Un millón de dólares en Bitcoin se mueve a cualquier lugar del mundo en segundos con una transacción en la blockchain. Solo necesitás tu seed phrase — que pueden ser 24 palabras en tu cabeza.",
                  ventaja: "Bitcoin",
                },
                {
                  propiedad: "Divisibilidad",
                  oro: "El oro puede dividirse, pero hay costos prácticos. Fracciones muy pequeñas de oro físico son difíciles de usar.",
                  bitcoin: "Bitcoin se divide hasta en 100 millones de satoshis por Bitcoin. Podés enviar $0.01 en Bitcoin (aunque el fee puede ser mayor en mainnet; en Lightning, no).",
                  ventaja: "Bitcoin",
                },
                {
                  propiedad: "Verificabilidad y durabilidad",
                  oro: "El oro es durable pero verificar su pureza requiere equipos especializados. El oro puede ser falsificado con metales similares.",
                  bitcoin: "Cualquier nodo de Bitcoin puede verificar que una transacción y un UTXO son válidos sin confiar en nadie. No hay Bitcoin falso posible.",
                  ventaja: "Bitcoin",
                },
                {
                  propiedad: "Historia y aceptación institucional",
                  oro: "Miles de años de historia. Aceptado universalmente. Los bancos centrales guardan reservas en oro. La confianza es cultural y profunda.",
                  bitcoin: "Solo 15 años. La adopción institucional creció enormemente con los ETF de Bitcoin en 2024, pero sigue siendo un activo joven. La confianza todavía se construye.",
                  ventaja: "Oro",
                },
                {
                  propiedad: "Volatilidad",
                  oro: "El precio del oro es relativamente estable comparado con activos de riesgo. Su volatilidad anual ronda el 15-20%.",
                  bitcoin: "Bitcoin puede subir o bajar 50-80% en un año. Esa volatilidad lo hace problemático como reserva de valor para horizontes cortos.",
                  ventaja: "Oro",
                },
              ].map((item) => (
                <div key={item.propiedad} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white font-black text-lg">{item.propiedad}</p>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.ventaja === "Bitcoin" ? "text-dorado bg-dorado/10" : "text-white/60 bg-white/5"}`}>
                      Ventaja: {item.ventaja}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Oro</p>
                      <p className="text-white/55 text-sm">{item.oro}</p>
                    </div>
                    <div>
                      <p className="text-dorado/60 text-xs uppercase tracking-widest mb-2">Bitcoin</p>
                      <p className="text-white/55 text-sm">{item.bitcoin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 3 — Saylor y MicroStrategy */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El caso de Michael Saylor y MicroStrategy: el experimento más audaz
            </h2>
            <p>
              En agosto de 2020, Michael Saylor, CEO de MicroStrategy, tomó una decisión que muchos
              consideraron demencial: convertir la tesorería corporativa de su empresa de software en
              Bitcoin. La justificación fue directa — el dólar pierde valor con el tiempo, Bitcoin no.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold text-xl">
                "Bitcoin es un banco en el ciberespacio, gestionado por software incorruptible."
              </p>
              <p className="text-white/60 mt-2">— Michael Saylor, CEO de MicroStrategy</p>
            </div>

            <p>
              Lo que empezó como una inversión corporativa controversial se convirtió en el caso de
              estudio más citado del Bitcoin como reserva de valor institucional. MicroStrategy
              acumuló más de 400,000 Bitcoin y renombró la empresa a Strategy, con Bitcoin como
              activo estratégico central.
            </p>
            <p className="mt-4">
              El rendimiento fue dramático en ambas direcciones: durante el bull market de 2020-2021,
              la apuesta generó ganancias extraordinarias. Durante el bear market de 2022, las pérdidas
              en papel fueron devastadoras. Pero Saylor no vendió en ningún momento — su tesis es de
              largo plazo, con horizonte de décadas.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "400,000+", label: "Bitcoin en posesión de Strategy (ex-MicroStrategy)", color: "text-dorado" },
                { stat: "~$40B+", label: "Valor estimado de la posición en 2026", color: "text-verde" },
                { stat: "2020", label: "Año en que empezaron a acumular Bitcoin como reserva", color: "text-white/60" },
              ].map((item) => (
                <div key={item.label} className="p-5 bg-gris-medio rounded-xl border border-dorado/10 text-center">
                  <p className={`text-2xl font-black ${item.color} mb-2`}>{item.stat}</p>
                  <p className="text-white/50 text-xs">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6">
              MicroStrategy no fue la única empresa. Tesla, Square, Marathon Digital y decenas de otras
              empresas públicas y privadas siguieron el mismo camino. Los ETF de Bitcoin spot aprobados
              en enero de 2024 en EEUU abrieron la compuerta para que fondos de pensiones,
              administradoras de activos y fondos soberanos también pudieran tomar exposición a Bitcoin.
            </p>
          </section>

          {/* Sección 4 — El Salvador */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El Salvador: el primer país que adoptó Bitcoin como reserva
            </h2>
            <p>
              En 2021, El Salvador se convirtió en el primer país del mundo en declarar a Bitcoin como
              moneda de curso legal. En 2023, fue más lejos: comenzó a acumular Bitcoin como reserva
              de estado. La decisión del presidente Nayib Bukele generó aplausos en la comunidad crypto
              y críticas del FMI y el Banco Mundial.
            </p>
            <p className="mt-4">
              El contexto importa: El Salvador usa el dólar estadounidense como moneda (dolarización
              completa). No tiene banco central propio. La remesas representan más del 20% de su PIB.
              El sistema financiero tradicional dejaba a más del 70% de la población sin acceso a
              servicios bancarios. Bitcoin, en ese contexto, no era solo ideología — era una apuesta
              práctica por la inclusión financiera y la soberanía.
            </p>
            <p className="mt-4">
              Los resultados en 2026 son mixtos: la adopción popular de la Lightning Network para pagos
              fue limitada, pero las reservas de Bitcoin del gobierno mostraron ganancias significativas
              con el bull market de 2024-2025. Otros países de LATAM y África miraron el experimento
              con atención.
            </p>
          </section>

          {/* Sección 5 — Bancos centrales */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué los bancos centrales observan Bitcoin (aunque no lo digan)
            </h2>
            <p>
              En público, la mayoría de los bancos centrales del mundo mantiene una posición oficial
              de escepticismo o neutralidad ante Bitcoin. En privado, varios tienen informes internos
              sobre los escenarios en los que Bitcoin podría convertirse en un competidor real al dólar
              o al euro como reserva global.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  caso: "Reservas de Bitcoin como diversificación",
                  desc: "Algunos países emergentes empezaron a considerar Bitcoin como diversificación de sus reservas internacionales, fuera del sistema del dólar. No como reemplazo, sino como un activo sin riesgo de contraparte.",
                },
                {
                  caso: "El impacto de los ETF en instituciones reguladas",
                  desc: "La aprobación de los ETF de Bitcoin spot en EEUU en 2024 permitió que fondos de pensiones y aseguradoras tomaran exposición. Eso trajo volumen institucional masivo y legitimidad regulatoria.",
                },
                {
                  caso: "La narrativa 'Digital Gold' en los fondos macro",
                  desc: "Grandes fondos macro (Ray Dalio de Bridgewater, Paul Tudor Jones, Stanley Druckenmiller) declararon públicamente posiciones en Bitcoin como hedge contra la devaluación del dólar — la misma razón por la que tenían oro.",
                },
                {
                  caso: "La reserva estratégica de Bitcoin de EEUU",
                  desc: "En 2025, EEUU estableció una reserva estratégica de Bitcoin con los fondos confiscados en causas penales. Aunque limitada, fue el reconocimiento más explícito de Bitcoin como activo de reserva por parte de la mayor potencia mundial.",
                },
              ].map((item) => (
                <div key={item.caso} className="p-5 bg-gris-medio rounded-xl border border-dorado/10">
                  <p className="text-dorado font-bold mb-2">{item.caso}</p>
                  <p className="text-white/55 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6 — Cómo posicionarse */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo el inversor retail puede posicionarse en Bitcoin como reserva de valor
            </h2>
            <p>
              Si la tesis de Bitcoin como reserva de valor te convence, la estrategia de posicionamiento
              es más simple de lo que parece. No requiere analizar candlestick charts ni predecir el
              mercado:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  estrategia: "DCA (Dollar Cost Averaging) — la más recomendada",
                  detalle: "Comprar una cantidad fija de Bitcoin en intervalos regulares (semanal, mensual) independientemente del precio. Esta estrategia elimina el problema de 'cuándo entrar', reduce el impacto de la volatilidad y es históricamente la forma más efectiva de acumular Bitcoin a largo plazo.",
                  nivel: "Para todos",
                },
                {
                  estrategia: "Cold storage para el largo plazo",
                  detalle: "Si tu horizonte es de 3-5+ años, sacá el Bitcoin del exchange y guardalo en un hardware wallet (Ledger o Trezor). No es para usar ni para ver el precio cada día — es para olvidarlo en un lugar seguro. Así lo tratan los holders más disciplinados.",
                  nivel: "Recomendado para +$2,000",
                },
                {
                  estrategia: "ETF de Bitcoin para cuentas reguladas",
                  detalle: "Si tenés acceso a mercados de valores (por ejemplo, cuentas en brokers internacionales), los ETF de Bitcoin de BlackRock (IBIT) o Fidelity (FBTC) ofrecen exposición sin tener que manejar wallets ni claves privadas. Pueden ser convenientes dentro de un portafolio de inversión más amplio.",
                  nivel: "Inversores con broker",
                },
                {
                  estrategia: "Porcentaje del portafolio, no todo",
                  detalle: "La asignación recomendada por la mayoría de los analistas institucionales para Bitcoin como reserva de valor es 1-10% del portafolio total. La volatilidad de Bitcoin es real — un 10% de asignación puede mover significativamente tu portafolio en ambas direcciones.",
                  nivel: "Principio general",
                },
              ].map((item) => (
                <div key={item.estrategia} className="p-5 bg-gris-medio rounded-xl border border-dorado/20">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{item.estrategia}</p>
                    <span className="text-xs font-bold text-dorado/70 shrink-0">{item.nivel}</span>
                  </div>
                  <p className="text-white/55 text-base">{item.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Bitcoin no reemplaza al oro — lo complementa
            </h2>
            <p>
              La pregunta del titular tiene una respuesta honesta: Bitcoin probablemente no va a
              reemplazar al oro en el corto plazo. El oro tiene 5,000 años de historia, aceptación
              universal y la confianza profunda de instituciones y culturas en todo el mundo. Eso no
              se construye en 15 años.
            </p>
            <p className="mt-4">
              Pero Bitcoin sí está capturando una parte de la demanda que históricamente iba al oro —
              especialmente entre los inversores más jóvenes y en los mercados emergentes. Y tiene
              propiedades (portabilidad, divisibilidad, verificabilidad, oferta fija codificada) que
              superan al oro en el contexto del mundo digital.
            </p>
            <p className="mt-4">
              La posición más sensata no es elegir uno de los dos — es entender qué función cumple
              cada activo en tu estrategia. El oro para la estabilidad histórica y la desconexión
              del sistema digital. Bitcoin para la escasez digital y la exposición a una tecnología
              que todavía está en sus etapas tempranas de adopción institucional.
            </p>
            <p className="mt-4">
              Para el inversor en LATAM con una moneda local inestable, la pregunta no es "oro o
              Bitcoin" sino "qué proporción de cada uno protege mejor mi capital frente a la inflación
              y la inestabilidad del sistema financiero local".
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> analizamos Bitcoin, macro y
              finanzas alternativas para el inversor hispanohablante que quiere construir riqueza fuera
              del sistema tradicional.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Bitcoin, macro y libertad financiera para LATAM</p>
          <p className="text-white/50 mb-6">
            Cada jueves: análisis de Bitcoin, oro y estrategias de protección del capital. Sin spam. Gratis.
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
            <Link href="/blog/que-es-bitcoin-y-como-funciona" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Qué es Bitcoin y cómo funciona: la guía más simple de 2026</p>
            </Link>
            <Link href="/blog/bitcoin-halving-que-es" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Bitcoin Halving: qué es, cuándo ocurre y por qué importa para tu inversión</p>
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
