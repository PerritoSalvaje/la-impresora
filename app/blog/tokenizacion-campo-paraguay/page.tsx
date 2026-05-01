import Link from "next/link";
import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Tokenización: cómo un campo en Paraguay puede ser tuyo con $50 | La Impresora #003",
  description:
    "La tokenización de activos reales permite que cualquier persona invierta en tierra, inmuebles o commodities con tickets mínimos. El acceso democratizado a la inversión real llegó a LATAM.",
  openGraph: {
    title: "Tokenización: cómo un campo en Paraguay puede ser tuyo con $50",
    description:
      "La tokenización de activos reales permite que cualquier persona invierta en tierra, inmuebles o commodities con tickets mínimos.",
    type: "article",
  },
};

export default function EdicionTokenizacion() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-10">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-white/50">Edición #003</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-400/10 border border-blue-400/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Tokenizacion
            </span>
            <span className="text-white/20 text-xs font-mono">#003 — 13 Mayo 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Tokenización: cómo un campo en Paraguay puede ser tuyo con $50
          </h1>

          <p className="text-white/50 text-lg leading-relaxed">
            Durante generaciones, invertir en tierra fue privilegio de los que ya tenian tierra o plata.
            La tokenizacion cambio eso. Hoy podes ser dueño de una fraccion de un campo productivo
            en Paraguay, Argentina o Colombia con lo que gastas en una cena.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Subject line preview box */}
        <div className="bg-gris-medio border border-white/10 rounded-2xl p-5 mb-12 font-mono text-sm">
          <div className="text-white/30 text-xs mb-2 uppercase tracking-widest">Email original</div>
          <div className="mb-1">
            <span className="text-white/40">Asunto: </span>
            <span className="text-white font-bold">$50 para ser dueño de un campo. No, no es chiste.</span>
          </div>
          <div>
            <span className="text-white/40">Preview: </span>
            <span className="text-white/60">La tokenización llegó a LATAM y cambia quién puede invertir en qué.</span>
          </div>
        </div>

        {/* Tema principal */}
        <article className="prose prose-invert max-w-none">

          <div className="bg-blue-400/5 border-l-4 border-blue-400 px-6 py-5 rounded-r-2xl mb-10">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-1">Tema principal</p>
            <p className="text-white/80 text-base leading-relaxed m-0">
              En Paraguay hay campos que producen soja, maiz y trigo. Son activos reales,
              con flujo de caja real, que históricamente solo podian comprar personas con decenas
              o cientos de miles de dolares. Hoy, gracias a la tokenizacion, esos campos
              se dividen en miles de fracciones digitales. Cada fraccion es un token.
              Vos compras $50 de tokens y sos dueño de esa fraccion.
              Los rindimientos del campo te llegan a tu billetera.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">¿Qué es tokenizar un activo real?</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            Tokenizar es representar la propiedad (o una fraccion de ella) de un activo real
            —un campo, un departamento, una planta solar, un camion de soja—
            en forma de un token en la blockchain. Ese token es transferible, divisible y auditables
            en tiempo real.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            El proceso es relativamente simple: una empresa especializada adquiere o gestiona el activo,
            crea un vehículo legal que lo respalda, emite tokens proporcionales al valor total
            y los vende a inversores. El smart contract (el codigo que vive en la blockchain)
            distribuye automaticamente los rendimientos a los holders de tokens.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            No hay intermediarios que se lleven comision. No hay gerente que decida si sos
            "elegible" para invertir. No hay ticket minimo de $100.000.
            Cualquiera con internet y $50 puede participar.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">¿Por qué tierra en LATAM?</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            Porque la tierra productiva en América del Sur es de las inversiones mas sólidas del mundo.
            Paraguay, por ejemplo, es el cuarto exportador mundial de soja y el tercer exportador de carne bovina.
            Sus campos tienen rendimientos anuales de entre 6% y 12% sobre el valor de la tierra,
            dependiendo del commodity y la temporada.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            El precio de la tierra agrícola en Paraguay subió un promedio del 8% anual en los ultimos diez años.
            Es un activo que genera flujo de caja (por el arrendamiento o la produccion)
            y que ademas se valoriza con el tiempo. La combinacion perfecta para un inversor minorista.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            Plataformas como Lirium (Argentina) y AgroToken ya tokenizaron granos y activos agricolas
            por decenas de millones de dólares. La regulacion está evolucionando positivamente:
            Paraguay tiene un marco cripto favorable, Argentina está avanzando en regulacion RWA
            (Real World Assets) y Colombia lanzó un sandbox regulatorio para tokenizacion de inmuebles.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">¿Cuál es el riesgo real?</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            Honestidad ante todo: la tokenizacion de activos reales es una industria joven.
            Los riesgos existen y hay que conocerlos. El principal: el riesgo de contraparte.
            Si la empresa que gestiona el campo quiebra o actua de mala fe, recuperar tu inversion
            es complicado. Por eso importa mucho con quien invertis.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            El segundo riesgo es la liquidez: a diferencia de Bitcoin o Ethereum, un token
            que representa un campo no tiene mercado secundario tan activo. Si querés salir antes
            del plazo pactado, puede ser difícil encontrar comprador.
          </p>

          <p className="text-white/70 leading-relaxed mb-8">
            La estrategia: empeza con montos que podas "olvidar" por 12-24 meses.
            Investigá la empresa emisora, su estructura legal, sus auditorias.
            Diversificá entre distintos activos y plataformas.
            Y entrá a aprender, no solo a ganar: el que entiende el mecanismo
            va a saber reconocer las buenas oportunidades cuando escalen.
          </p>

        </article>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* 3 Noticias rapidas */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Noticias rapidas
            </span>
          </div>

          <div className="space-y-5">

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">01</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    BlackRock tokenizo un fondo de $10.000 millones en Ethereum
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    El fondo de inversion mas grande del mundo lanzo BUIDL, su fondo tokenizado
                    en Ethereum. Ya supera los $10.000 millones en activos bajo gestion.
                    El activo subyacente son bonos del Tesoro de EEUU. Rentabilidad: 5% anual.
                    <span className="text-verde font-semibold"> Por qué importa:</span> cuando BlackRock valida la tokenizacion, el mercado global lo sigue. Lo que parecia nicho se vuelve estandar.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">02</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    AgroToken cierra ronda de $10M para expandir tokenizacion agricola en LATAM
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    La startup argentina que tokeniza granos (soja, maiz, trigo) consiguio su mayor
                    ronda de financiamiento para expandirse a Brasil, Paraguay y Colombia.
                    Ya procesaron mas de $200M en transacciones con granos tokenizados.
                    <span className="text-verde font-semibold"> Por qué importa:</span> el capital mas sofisticado del mundo está apostando por esto en LATAM. Temprano.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">03</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Colombia lanza sandbox regulatorio para tokenizacion de inmuebles urbanos
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    La Superintendencia Financiera de Colombia abrio un programa de pruebas regulatorias
                    para que empresas puedan tokenizar departamentos y oficinas bajo supervision estatal.
                    Ya hay 6 proyectos piloto activos en Bogota y Medellin.
                    <span className="text-verde font-semibold"> Por qué importa:</span> cuando la regulacion avanza, la adopcion masiva sigue. Colombia puede ser el laboratorio de LATAM.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Oportunidad concreta */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Oportunidad concreta
            </span>
          </div>

          <div className="bg-verde/5 border border-verde/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-black text-verde mb-4">
              AgroToken SOYA3: invertir en soja tokenizada desde $50, rendimientos en dólares
            </h3>
            <p className="text-white/70 leading-relaxed mb-5">
              AgroToken emite tokens respaldados por soja fisica almacenada en silos auditados.
              El token SOYA3 representa 1 tonelada de soja y su valor sube y baja con el precio
              internacional del commodity. Podés comprar fracciones de token desde $50 USD.
              Cuando vendés, recibís USDT equivalente al valor de mercado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">$50</div>
                <div className="text-white/40 text-xs mt-1">minimo de inversion</div>
              </div>
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">+8%</div>
                <div className="text-white/40 text-xs mt-1">apreciacion historica anual del activo</div>
              </div>
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">USD</div>
                <div className="text-white/40 text-xs mt-1">rendimientos en dolares reales</div>
              </div>
            </div>
            <p className="text-white/50 text-sm">
              <span className="text-verde font-semibold">Como empezar:</span> registrate en agrotoken.io, completa el KYC (5 minutos con DNI),
              conecta tu billetera o usa la custodia de ellos, y compra tu primera fraccion.
              El silo donde esta almacenada tu soja es auditable online en tiempo real.
            </p>
            <p className="text-white/40 text-xs mt-3">
              Disclaimer: los commodities tienen volatilidad de precio. Inversion sujeta a riesgos de mercado. Investiga antes de invertir.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Dato curioso */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Dato / Meme
            </span>
          </div>

          <div className="bg-gris-medio border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">🌾</div>
            <p className="text-white font-bold text-lg mb-3">
              La tierra agrícola de América del Sur produce alimento para 800 millones de personas en el mundo.
              Hasta hoy, solo unos pocos miles podían ser dueños de ella.
            </p>
            <p className="text-white/40 text-sm mb-4">— Con tokenizacion, ese club se esta abriendo por primera vez en la historia.</p>
            <div className="bg-oscuro rounded-xl p-4 text-left font-mono text-sm text-white/60">
              <span className="text-blue-400">mercado global de RWA tokenizados (2026):</span>
              <br />
              Tamaño actual: ~$15.000 millones
              <br />
              Proyeccion 2030: $16 billones (segun McKinsey)
              <br />
              <span className="text-verde">Crecimiento esperado: 1.000x en 4 años</span>
            </div>
          </div>
        </section>

        {/* Nav between posts */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 justify-between mb-16">
          <Link
            href="/blog/banco-tu-peor-enemigo"
            className="bg-white/5 border border-white/10 text-white/60 font-bold px-5 py-3 rounded-full hover:bg-white/10 transition-colors text-sm text-center"
          >
            ← #002 Tu banco es tu enemigo
          </Link>
          <Link
            href="/blog"
            className="bg-verde/10 border border-verde/20 text-verde font-bold px-5 py-3 rounded-full hover:bg-verde/20 transition-colors text-sm text-center"
          >
            Ver todas las ediciones →
          </Link>
        </div>

      </div>

      <Newsletter />
    </div>
  );
}
