import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Cómo funciona el dinero crypto: guía para principiantes",
  description:
    "Explicación simple de cómo funciona el dinero crypto, qué es Bitcoin, cómo abrir una wallet y cómo comprar crypto en Argentina, México y LATAM desde poco dinero.",
  openGraph: {
    title: "Cómo funciona el dinero crypto: guía completa para principiantes en LATAM",
    description:
      "Explicación simple de cómo funciona el dinero crypto, qué es Bitcoin, cómo abrir una wallet y cómo comprar crypto en Argentina, México y LATAM desde poco dinero.",
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
            <span className="text-white/20 text-xs">· 12 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Cómo funciona el dinero crypto:{" "}
            <span className="text-dorado">guía completa</span> para principiantes en LATAM
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            En Argentina el peso perdió el 90% de su valor en cinco años. En Venezuela, los billetes
            sirven para hacer artesanías. En México, el sistema bancario excluye a 47 millones de personas.
            El dinero crypto no es moda — es la respuesta más directa a problemas que LATAM viene
            arrastrando hace décadas. Esta es la guía que nadie te dio.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es el dinero crypto y por qué existe
            </h2>
            <p>
              Las criptomonedas son dinero digital que funciona sin bancos, sin gobiernos y sin ningún
              intermediario que pueda congelarte la cuenta, limitar tus transferencias o devaluar lo
              que tenés ahorrado.
            </p>
            <p className="mt-4">
              Nacieron en 2008, después de la crisis financiera global, cuando un programador anónimo que
              se hacía llamar Satoshi Nakamoto publicó un documento de 9 páginas explicando cómo crear
              dinero digital sin necesidad de un banco central. Ese sistema se llamó Bitcoin.
            </p>
            <p className="mt-4">
              La idea central es brutal en su simplicidad: ¿y si en lugar de confiar en un banco para
              que no te robe, el sistema entero fuera transparente, matemático y verificable por cualquiera?
              Eso es exactamente lo que hace la blockchain.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Definición sin rodeos: una criptomoneda es dinero cuyas reglas están escritas en código
                y nadie puede cambiarlas unilateralmente. Ni el presidente, ni el banco central, ni nadie.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es la blockchain: la explicación que sí se entiende
            </h2>

            <ArticleCTA />

            <p>
              La blockchain es el libro de contabilidad donde queda registrada cada transacción de
              criptomonedas. Pero a diferencia del libro de un banco, este no está en un solo servidor
              en algún edificio en Manhattan. Está copiado exactamente igual en decenas de miles de
              computadoras alrededor del mundo simultáneamente.
            </p>
            <p className="mt-4">
              Cuando mandás Bitcoin a alguien, esa transacción queda registrada en todos esos libros al
              mismo tiempo. Para falsificarla, tendrías que hackear el 51% de todos esos nodos al mismo
              tiempo, lo cual es prácticamente imposible con el nivel de red que tienen Bitcoin y Ethereum.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Sistema bancario tradicional</p>
                <ul className="space-y-2 text-white/50 text-sm">
                  <li>· Un solo libro de contabilidad (el banco)</li>
                  <li>· El banco puede congelar tu cuenta</li>
                  <li>· Horario de atención: lunes a viernes</li>
                  <li>· Comisiones por transferir tu propio dinero</li>
                  <li>· El gobierno puede ordenar bloquear fondos</li>
                </ul>
              </div>
              <div className="p-5 bg-dorado/5 rounded-xl border border-dorado/20">
                <p className="text-dorado text-xs uppercase tracking-widest mb-3 font-bold">Sistema crypto / blockchain</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Miles de copias del mismo libro</li>
                  <li>· Nadie puede congelar tu wallet sin tu clave</li>
                  <li>· 24/7, sin días feriados</li>
                  <li>· Comisiones fijas y bajas (o cero)</li>
                  <li>· No hay autoridad central que pueda bloquearte</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es Bitcoin y en qué se diferencia de otras criptomonedas
            </h2>
            <p>
              Bitcoin (BTC) es la primera y más conocida criptomoneda. Es lo que la gente imagina cuando
              piensa en "crypto". Sus características fundamentales:
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Suministro fijo de 21 millones",
                  desc: "Nunca van a existir más de 21 millones de Bitcoin. A diferencia del peso o el dólar, nadie puede crear más. Esto lo hace deflacionario por diseño: con el tiempo, si la demanda sube y la oferta es fija, el precio tiende a subir.",
                },
                {
                  title: "El halving",
                  desc: "Cada cuatro años aproximadamente, la cantidad de Bitcoin nuevo que se genera se reduce a la mitad. Esto es matemático, no político. El último halving fue en 2024 y redujo la emisión a 3.125 BTC por bloque.",
                },
                {
                  title: "Es la reserva de valor del ecosistema",
                  desc: "Los otros crypto (llamados 'altcoins') sirven para cosas distintas: Ethereum para contratos inteligentes, Solana para velocidad, stablecoins para evitar la volatilidad. Bitcoin es el 'oro digital': reserva de valor más que medio de pago.",
                },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold">{item.title}</p>
                  <p className="text-white/50 text-base mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-white font-black text-xl mb-4">
                El mapa del ecosistema crypto simplificado
              </h3>
              <div className="space-y-3">
                {[
                  { nombre: "Bitcoin (BTC)", rol: "Reserva de valor, 'oro digital'", caso: "Ahorrar a largo plazo" },
                  { nombre: "Ethereum (ETH)", rol: "Plataforma para apps descentralizadas y smart contracts", caso: "DeFi, NFTs, tokenización" },
                  { nombre: "Solana (SOL)", rol: "Blockchain ultra-rápida y barata", caso: "Transacciones frecuentes, DeFi" },
                  { nombre: "USDT / USDC", rol: "Stablecoins: 1 token = 1 dólar siempre", caso: "Ahorrar en dólares sin banco" },
                  { nombre: "DAI", rol: "Stablecoin descentralizada (no depende de empresa)", caso: "Dólares sin custodia centralizada" },
                ].map((row) => (
                  <div key={row.nombre} className="flex flex-col md:flex-row md:items-center gap-2 p-4 bg-gris-medio rounded-xl border border-white/5">
                    <span className="text-dorado font-bold md:w-36 shrink-0">{row.nombre}</span>
                    <span className="text-white/60 text-sm flex-1">{row.rol}</span>
                    <span className="text-verde text-sm font-semibold md:text-right">{row.caso}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es una wallet crypto y cómo funciona
            </h2>
            <p>
              Una wallet (billetera) crypto no guarda tus monedas. Las monedas siempre están en la
              blockchain. La wallet guarda las claves privadas que te permiten firmar transacciones,
              es decir, demostrar que sos el dueño y autorizar movimientos.
            </p>
            <p className="mt-4">
              Es como la diferencia entre tu tarjeta de débito y el dinero en tu cuenta bancaria.
              La tarjeta no tiene la plata, solo te da acceso a ella.
            </p>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Regla de oro: "Not your keys, not your coins." Si no tenés las claves privadas de tu wallet,
                técnicamente no son tus crypto. Son las del exchange o plataforma que los custodia.
              </p>
            </div>

            <h3 className="text-white font-black text-xl mb-4 mt-6">
              Tipos de wallet: cuál usar según tu situación
            </h3>
            <div className="space-y-4">
              {[
                {
                  tipo: "Exchange wallet (custodial)",
                  ejemplos: "Binance, Ripio, Lemon, Bitso",
                  pros: "Fácil de usar, recuperable si olvidás contraseña, ideal para comenzar",
                  cons: "El exchange custodia tus claves. Si cierra o te congela la cuenta, perdiste acceso.",
                  para: "Principiantes y operaciones frecuentes",
                  color: "border-dorado/20",
                },
                {
                  tipo: "Hot wallet (software, no-custodial)",
                  ejemplos: "MetaMask, Phantom, Trust Wallet",
                  pros: "Vos tenés tus claves, gratuitas, acceso a DeFi y apps descentralizadas",
                  cons: "Si perdés la seed phrase (12 palabras), perdés todo para siempre",
                  para: "Usuarios intermedios, DeFi, staking",
                  color: "border-verde/20",
                },
                {
                  tipo: "Cold wallet (hardware, no-custodial)",
                  ejemplos: "Ledger, Trezor",
                  pros: "Máxima seguridad, claves offline, prácticamente inhackeable",
                  cons: "Cuesta $70-150 USD, menos conveniente para uso diario",
                  para: "Ahorros importantes, hodl a largo plazo",
                  color: "border-blue-400/20",
                },
              ].map((w) => (
                <div key={w.tipo} className={`p-6 bg-gris-medio rounded-xl border ${w.color}`}>
                  <p className="text-white font-black mb-1">{w.tipo}</p>
                  <p className="text-white/40 text-sm mb-3">Ej: {w.ejemplos}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-verde/60 text-xs uppercase tracking-widest mb-1">Ventajas</p>
                      <p className="text-white/60">{w.pros}</p>
                    </div>
                    <div>
                      <p className="text-red-400/60 text-xs uppercase tracking-widest mb-1">Desventajas</p>
                      <p className="text-white/60">{w.cons}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-dorado text-sm font-bold">Ideal para: {w.para}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo comprar crypto en Argentina, México y el resto de LATAM
            </h2>
            <p>
              La forma de comprar crypto varía según el país, pero el proceso básico es el mismo:
              elegís un exchange, verificás tu identidad (KYC), cargás pesos/dólares y comprás. Acá van
              las mejores opciones por región:
            </p>

            <div className="mt-6 space-y-6">

              <div>
                <h3 className="text-white font-bold text-lg mb-3">Argentina</h3>
                <div className="space-y-3">
                  {[
                    {
                      exchange: "Lemon Cash",
                      desc: "La app más popular en ARG. Comprás con pesos, te dan la mejor cotización del mercado. Tienen tarjeta de débito crypto. Ideal para comenzar.",
                      min: "Desde $1,000 ARS",
                    },
                    {
                      exchange: "Ripio",
                      desc: "Exchange local con más de 5 años de historia. Buenas opciones de staking y billetera integrada.",
                      min: "Desde $1,000 ARS",
                    },
                    {
                      exchange: "Binance P2P",
                      desc: "Comprás directamente a otra persona usando transferencia bancaria. Sin límites oficiales, cotización competitiva.",
                      min: "Desde $5 USD equiv.",
                    },
                    {
                      exchange: "Buenbit",
                      desc: "Especializado en stablecoins. Excelente para ahorrar en DAI o USDC con rendimientos automáticos.",
                      min: "Desde $500 ARS",
                    },
                  ].map((ex) => (
                    <div key={ex.exchange} className="flex gap-4 p-4 bg-gris-medio rounded-xl border border-white/5">
                      <div className="flex-1">
                        <p className="text-dorado font-bold">{ex.exchange}</p>
                        <p className="text-white/50 text-sm mt-1">{ex.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-verde text-xs font-bold">{ex.min}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-3">México</h3>
                <div className="space-y-3">
                  {[
                    {
                      exchange: "Bitso",
                      desc: "El mayor exchange de México y LATAM por volumen. Regulado, con más de 6 millones de usuarios. Comprás con SPEI desde cualquier banco.",
                      min: "Desde $10 MXN",
                    },
                    {
                      exchange: "Volabit",
                      desc: "Alternativa local más simple, bueno para principiantes absolutos.",
                      min: "Desde $50 MXN",
                    },
                    {
                      exchange: "Binance México",
                      desc: "Mayor variedad de criptomonedas, buen para usuarios más avanzados.",
                      min: "Desde $50 MXN",
                    },
                  ].map((ex) => (
                    <div key={ex.exchange} className="flex gap-4 p-4 bg-gris-medio rounded-xl border border-white/5">
                      <div className="flex-1">
                        <p className="text-dorado font-bold">{ex.exchange}</p>
                        <p className="text-white/50 text-sm mt-1">{ex.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-verde text-xs font-bold">{ex.min}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-3">Colombia, Chile, Perú y resto de LATAM</h3>
                <div className="space-y-3">
                  {[
                    {
                      exchange: "Binance",
                      desc: "Disponible en casi todo LATAM. P2P permite comprar con transferencia bancaria local en cualquier país. Mayor liquidez del mundo.",
                      min: "Desde $10 USD equiv.",
                    },
                    {
                      exchange: "Kraken",
                      desc: "Exchange global de máxima confianza. Soporte en español, ideal para montos más grandes.",
                      min: "Desde $10 USD",
                    },
                    {
                      exchange: "Coinbase",
                      desc: "La más regulada y conocida globalmente. Fácil de usar, buena para principiantes.",
                      min: "Desde $2 USD",
                    },
                  ].map((ex) => (
                    <div key={ex.exchange} className="flex gap-4 p-4 bg-gris-medio rounded-xl border border-white/5">
                      <div className="flex-1">
                        <p className="text-dorado font-bold">{ex.exchange}</p>
                        <p className="text-white/50 text-sm mt-1">{ex.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-verde text-xs font-bold">{ex.min}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo empezar con poco dinero: el plan paso a paso
            </h2>
            <p>
              Este es el plan exacto para alguien que nunca tuvo crypto y quiere empezar con $20-50 dólares
              de forma segura:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  paso: "Paso 1: Entendé qué comprás antes de comprar",
                  tiempo: "1-2 días",
                  detalle: "Leé sobre Bitcoin y Ethereum. Entendé la diferencia entre un exchange y una wallet. No metas un centavo hasta tener esto claro. La ignorancia en crypto es cara.",
                  tag: "Educación",
                },
                {
                  paso: "Paso 2: Abrí cuenta en un exchange de tu país",
                  tiempo: "30 minutos",
                  detalle: "Argentina: Lemon o Ripio. México: Bitso. Resto: Binance o Coinbase. Completá la verificación de identidad (KYC). Es molesto pero necesario y legal.",
                  tag: "Setup",
                },
                {
                  paso: "Paso 3: Tu primera compra — stablecoins, no BTC",
                  tiempo: "5 minutos",
                  detalle: "Para el primer mes, comprá USDT o USDC (equivalen a 1 dólar siempre). Sin volatilidad. Te familiarizás con cómo funciona el sistema sin riesgo de precio.",
                  tag: "Primera compra",
                },
                {
                  paso: "Paso 4: Aprendé a mover tus fondos",
                  tiempo: "Un fin de semana",
                  detalle: "Creá una wallet de MetaMask o Trust Wallet. Transferí una pequeña cantidad desde el exchange a tu wallet. Verificá que llegó. Practicá esto antes de manejar montos grandes.",
                  tag: "Práctica",
                },
                {
                  paso: "Paso 5: Tu primera posición en Bitcoin",
                  tiempo: "Cuando te sentís cómodo",
                  detalle: "Una vez que entendés el flujo, comprá BTC o ETH. Empezá con el 50-70% de lo que querés invertir y el resto lo dejás en stablecoins. No pongas lo que no podés perder.",
                  tag: "Inversión",
                },
                {
                  paso: "Paso 6: Seguridad — lo más importante de todo",
                  tiempo: "Continuo",
                  detalle: "Activá 2FA en todos los exchanges. Nunca compartas tu seed phrase con nadie. Guardala física, offline, en dos lugares distintos. Un error de seguridad puede costarte todo.",
                  tag: "Seguridad",
                },
              ].map((p, i) => (
                <div key={i} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{p.paso}</p>
                    <span className="text-dorado text-xs font-bold shrink-0 border border-dorado/30 px-2 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <p className="text-verde text-xs mb-2">{p.tiempo}</p>
                  <p className="text-white/50 text-base">{p.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Casos de uso reales en LATAM: por qué la gente en la región usa crypto
            </h2>
            <p>
              En Silicon Valley usan crypto para especular. En LATAM lo usan para sobrevivir y prosperar.
              Estos son los casos más comunes en la región:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  caso: "Dolarización informal (Argentina, Venezuela, Bolivia)",
                  desc: "Millones de personas guardan sus ahorros en USDT en lugar de pesos o bolívares. No para especular — para no perder poder adquisitivo. Un argentino que pasó sus ahorros a USDT en 2020 conservó su poder de compra. Uno que los dejó en pesos los vio caer un 90%.",
                  icono: "🇦🇷",
                },
                {
                  caso: "Remesas (México, El Salvador, Guatemala)",
                  desc: "Enviar $200 por Western Union cuesta $15-20 en comisiones y tarda 2-3 días. Con crypto (especialmente en Stellar o Lightning Network): llega en segundos y cuesta menos de $0.01. El Salvador adoptó Bitcoin como moneda legal precisamente por esto.",
                  icono: "💸",
                },
                {
                  caso: "Cobrar en el exterior como freelancer",
                  desc: "Un diseñador colombiano o un programador uruguayo que trabaja para empresas de EEUU o Europa cobra en USDC o ETH directamente a su wallet, sin comisiones de Paypal ni restricciones bancarias. Luego vende en el exchange local.",
                  icono: "💻",
                },
                {
                  caso: "Acceso a servicios financieros sin banco",
                  desc: "Un agricultor en zonas rurales de Perú o Ecuador puede recibir pagos en crypto con solo un teléfono y conexión a internet. No necesita cuenta bancaria, historial crediticio ni dirección fija.",
                  icono: "📱",
                },
                {
                  caso: "Inversión y generación de yield (toda LATAM)",
                  desc: "Plataformas DeFi permiten 'hacer rendir' tus stablecoins a tasas del 4-15% anual en dólares, muy por encima de cualquier caja de ahorro bancaria. Sin bancos, sin intermediarios, sin horarios.",
                  icono: "📈",
                },
              ].map((c) => (
                <div key={c.caso} className="p-6 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl shrink-0">{c.icono}</span>
                    <div>
                      <p className="text-white font-bold mb-2">{c.caso}</p>
                      <p className="text-white/50 text-base">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 8 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los riesgos que tenés que conocer antes de meter plata
            </h2>
            <p>
              Crypto no es una cuenta de ahorros. Estos son los riesgos reales, sin sugarcoating:
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  riesgo: "Volatilidad extrema",
                  nivel: "Alto",
                  desc: "Bitcoin puede caer 50-80% en un ciclo bajista. En 2022 cayó de $69,000 a $16,000. Si no podés bancarte eso psicológicamente (y financieramente), solo usá stablecoins.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Scams y estafas",
                  nivel: "Muy alto en LATAM",
                  desc: "Piramides disfrazadas de 'proyectos DeFi', exchanges falsos, phishing. Regla: si alguien te promete retornos fijos y garantizados en crypto, es un scam. Siempre.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Error humano (perder claves)",
                  nivel: "Alto",
                  desc: "No hay recuperación de contraseña en crypto no-custodial. Perdiste tu seed phrase = perdiste tu plata para siempre. Sin excepciones.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Riesgo regulatorio",
                  nivel: "Medio",
                  desc: "Algunos países de LATAM pueden restringir el uso de crypto o gravar las ganancias. Mantené un registro de tus operaciones por si acaso.",
                  color: "text-dorado",
                },
                {
                  riesgo: "Riesgo de exchanges",
                  nivel: "Medio",
                  desc: "FTX colapsó en 2022 y miles de personas perdieron sus fondos. Usá exchanges con historial, regulados si es posible, y no dejes grandes montos allí. Retirá a tu wallet propia.",
                  color: "text-dorado",
                },
              ].map((r) => (
                <div key={r.riesgo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{r.riesgo}</p>
                    <span className={`text-xs font-bold ${r.color}`}>Nivel: {r.nivel}</span>
                  </div>
                  <p className="text-white/50 text-base">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 9 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Preguntas frecuentes de principiantes (las que da vergüenza googlear)
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "¿Puedo perder más de lo que invierto?",
                  a: "No. Si comprás $100 en Bitcoin y cae 100%, perdés $100. No te van a cobrar deudas. A menos que uses leverage (apalancamiento), que nunca recomendamos para principiantes.",
                },
                {
                  q: "¿Es legal comprar crypto en mi país?",
                  a: "En la mayoría de LATAM sí es legal comprar, vender y usar crypto. Algunos países (como Bolivia en el pasado) tuvieron restricciones. Verificá la situación actual de tu país, pero en general los exchanges operan legalmente en la región.",
                },
                {
                  q: "¿Tengo que declarar mis ganancias en crypto al fisco?",
                  a: "En la mayoría de los países sí. Argentina, México, Chile y Colombia tienen regulaciones de declaración de ganancias de capital. No hacerlo es evasión fiscal. Guardá registro de todas tus operaciones.",
                },
                {
                  q: "¿Qué pasa si el exchange cierra?",
                  a: "Si tenés tus crypto en una wallet no-custodial (MetaMask, Ledger), el exchange puede cerrar y vos seguís teniendo tus fondos. Si los dejaste en el exchange, dependés de que el proceso de liquidación sea correcto. Por eso: no más de lo necesario en exchanges.",
                },
                {
                  q: "¿Cuánto tengo que invertir para empezar a ganar algo?",
                  a: "No hay mínimo real. Podés comprar $10 de Bitcoin y ver cómo funciona. El objetivo del principio no es ganar — es aprender. Ganás cuando entendés lo que hacés y tenés capital para hacerlo crecer.",
                },
              ].map((faq) => (
                <div key={faq.q} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-2">{faq.q}</p>
                  <p className="text-white/50 text-base">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El sistema financiero actual no fue diseñado para que ganes. Crypto tampoco es perfecto. Pero es la mejor herramienta que existe hoy.
            </h2>
            <p>
              El dinero crypto no es la solución a todos los problemas financieros de LATAM. Tiene
              riesgos reales, requiere educación y responsabilidad personal. Nadie va a rescatarte si
              perdés tu seed phrase.
            </p>
            <p className="mt-4">
              Pero tampoco hay otro sistema que te permita ser tu propio banco, enviar dinero a cualquier
              parte del mundo en segundos, proteger tus ahorros de la inflación y acceder a inversiones
              que antes estaban reservadas para los ricos — todo desde el teléfono.
            </p>
            <p className="mt-4">
              El camino correcto no es "meter todo en Bitcoin" ni "es todo una estafa". Es educarte,
              empezar de a poco, cometer errores baratos y escalar cuando entendés lo que hacés.
            </p>
            <p className="mt-4">
              Para eso existe <strong className="text-dorado">La Impresora</strong>: cada semana te
              mandamos lo que necesitás saber sobre crypto en LATAM. Sin teoría vacía, sin predicciones
              de precio, sin shitcoins. Solo lo que sirve. Para el próximo paso, mirá
              nuestra <Link href="/blog/wallets-crypto-cuales-son-mejores" className="text-verde hover:underline">guía de wallets crypto</Link> y
              aprendé <Link href="/blog/que-es-defi-como-funciona" className="text-verde hover:underline">cómo funciona DeFi para hacer rendir tus stablecoins</Link>.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">El newsletter de crypto para LATAM que no te da consejo de inversión, te da educación real</p>
          <p className="text-white/50 mb-6">
            Cada jueves: análisis de mercado, oportunidades concretas y noticias que importan. Sin spam.
            Gratis para siempre.
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
            <Link href="/blog/tokenizacion-activos-como-invertir" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-blue-400 font-bold">Tokenización</span>
              <p className="text-white font-bold mt-2 leading-tight">Qué es la tokenización de activos y cómo invertir desde $50 en 2026</p>
            </Link>
            <Link href="/blog/herramientas-ai-para-ganar-dinero" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-verde font-bold">AI</span>
              <p className="text-white font-bold mt-2 leading-tight">Las mejores herramientas de AI para ganar dinero en 2026 (probadas)</p>
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
