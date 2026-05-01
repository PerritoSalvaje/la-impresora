import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Los mayores fraudes crypto de la historia: FTX, Luna, OneCoin y más",
  description:
    "Historia completa de los 5 mayores fraudes crypto: OneCoin ($4B), Bitconnect ($3.4B), Luna/TerraUST ($40B), FTX ($8B) y Squid Game Token. Señales de alerta y cómo protegerte.",
  openGraph: {
    title: "Los mayores fraudes crypto de la historia: FTX, Luna, OneCoin y más",
    description:
      "Historia completa de los 5 mayores fraudes crypto: OneCoin ($4B), Bitconnect ($3.4B), Luna/TerraUST ($40B), FTX ($8B) y Squid Game Token. Señales de alerta y cómo protegerte.",
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
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-red-500/10 text-red-400 border-red-500/20">
              Fraudes
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 11 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Los mayores{" "}
            <span className="text-red-400">fraudes crypto</span>{" "}
            de la historia: FTX, Luna, OneCoin y más
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Más de 50 mil millones de dólares evaporados. Millones de personas que lo perdieron todo.
            Los fraudes más grandes del ecosistema crypto no son accidentes — siguieron el mismo patrón
            una y otra vez. Aprender a reconocerlos puede ser la diferencia entre preservar tu capital
            y perderlo todo.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué los fraudes crypto son tan devastadores
            </h2>
            <p>
              Los fraudes en el ecosistema crypto tienen una característica que los hace especialmente
              peligrosos: combinan la complejidad técnica suficiente para que la gente no entienda
              lo que está pasando, con la promesa de retornos que ningún activo legítimo puede generar.
              El resultado es que las víctimas no solo pierden dinero — pierden la confianza en el
              sistema completo.
            </p>
            <p className="mt-4">
              Los cinco casos que vas a leer a continuación suman más de 56 mil millones de dólares
              en pérdidas. En cada uno, hubo señales de alerta visibles desde antes. Nadie las escuchó.
            </p>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Regla de oro: en finanzas, si algo suena demasiado bueno para ser verdad, es porque
                no lo es. En crypto, esto aplica al cuadrado.
              </p>
            </div>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Sección 2: OneCoin */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-black text-red-400/20 font-mono">01</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                OneCoin: la reina de las estafas ($4.000 millones)
              </h2>
            </div>

            <div className="p-5 bg-gris-medio rounded-xl border border-red-400/20 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-red-400 font-black text-2xl">$4B</p>
                  <p className="text-white/40 text-xs">Robado</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">3.5M</p>
                  <p className="text-white/40 text-xs">Víctimas</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">2014–2019</p>
                  <p className="text-white/40 text-xs">Período activo</p>
                </div>
              </div>
            </div>

            <p>
              Ruja Ignatova se hacía llamar la "Criptoreina". Doctora en derecho, oratoria impecable,
              capaz de llenar estadios en toda Europa con presentaciones de OneCoin. El problema era
              simple: OneCoin nunca tuvo una blockchain real.
            </p>
            <p className="mt-4">
              Era una pirámide disfrazada de criptomoneda. Los usuarios compraban "paquetes educativos"
              que venían con tokens de OneCoin. Esos tokens no existían en ninguna red descentralizada —
              estaban en una base de datos de Excel que los administradores de OneCoin podían modificar
              a voluntad. La "blockchain" era literalmente una hoja de cálculo privada.
            </p>
            <p className="mt-4">
              En 2017, Ignatova abordó un vuelo de Frankfurt a Atenas y desapareció. Sigue prófuga.
              Su hermano Konstantin Ignatov fue arrestado en 2019 y se declaró culpable. La operación
              captó fondos en más de 175 países, con especial penetración en LATAM, Bulgaria y el sudeste
              asiático.
            </p>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">Señales de alerta que nadie escuchó</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>· La blockchain nunca fue auditable públicamente</li>
                <li>· Los retornos prometidos eran fijos y garantizados (imposible en un mercado real)</li>
                <li>· El modelo de compensación dependía de reclutar nuevos miembros</li>
                <li>· Ningún exchange externo cotizaba OneCoin</li>
                <li>· Los fundadores tenían historial de esquemas piramidales previos</li>
              </ul>
            </div>
          </section>

          {/* Sección 3: Bitconnect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-black text-red-400/20 font-mono">02</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Bitconnect: el meme que destruyó $3.400 millones
              </h2>
            </div>

            <div className="p-5 bg-gris-medio rounded-xl border border-red-400/20 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-red-400 font-black text-2xl">$3.4B</p>
                  <p className="text-white/40 text-xs">Pérdidas estimadas</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">120%</p>
                  <p className="text-white/40 text-xs">Retorno anual prometido</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">2016–2018</p>
                  <p className="text-white/40 text-xs">Período activo</p>
                </div>
              </div>
            </div>

            <p>
              Bitconnect prometía hasta el 120% de retorno anual a través de un supuesto "bot de trading"
              secreto. Los usuarios prestaban su Bitcoin a la plataforma y recibían tokens BCC a cambio.
              Los intereses se pagaban con el dinero de los nuevos participantes — el esquema Ponzi
              más clásico de la historia, con una capa de tecnología blockchain para que pareciera
              legítimo.
            </p>
            <p className="mt-4">
              El colapso llegó en enero de 2018 cuando Texas y Carolina del Norte emitieron órdenes de
              cese. En 24 horas, BCC pasó de $400 a $0. El video del promotor venezolano gritando
              "¡BITCOOOONECT!" en una conferencia se volvió uno de los memes más famosos de la historia
              crypto — pero representaba los ahorros de vida de miles de personas.
            </p>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">Señales de alerta que nadie escuchó</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>· Retornos diarios de 0.25–1% prometidos como garantizados</li>
                <li>· El "bot de trading" era completamente opaco, sin auditorías</li>
                <li>· Sistema de referidos agresivo con comisiones por múltiples niveles</li>
                <li>· Prohibición de retiro inmediato del capital (locks de 299 días)</li>
                <li>· Economistas y traders veteranos lo llamaron Ponzi desde el día uno</li>
              </ul>
            </div>
          </section>

          {/* Sección 4: Luna/TerraUST */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-black text-red-400/20 font-mono">03</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Luna / TerraUST: el colapso de $40.000 millones en 72 horas
              </h2>
            </div>

            <div className="p-5 bg-gris-medio rounded-xl border border-red-400/20 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-red-400 font-black text-2xl">$40B</p>
                  <p className="text-white/40 text-xs">Capitalización perdida</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">99.9%</p>
                  <p className="text-white/40 text-xs">Caída del precio de LUNA</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">Mayo 2022</p>
                  <p className="text-white/40 text-xs">Fecha del colapso</p>
                </div>
              </div>
            </div>

            <p>
              TerraUST era diferente a los fraudes anteriores: tenía tecnología real, un equipo
              brillante y respaldo de fondos de inversión de primer nivel. Do Kwon, su fundador,
              era arrogante en público y despreciaba a los críticos. El problema era el diseño
              algorítmico de la stablecoin.
            </p>
            <p className="mt-4">
              UST mantenía su paridad de 1 dólar mediante un mecanismo algorítmico con LUNA: cuando
              UST perdía valor, se quemaba UST y se creaba LUNA para restaurar el equilibrio. En
              teoría elegante. En la práctica, una espiral de muerte perfecta: cuando el mercado
              perdió confianza, el mecanismo generó hiperinflación de LUNA, que devaluó más UST, que
              generó más LUNA, que devaluó más UST... y así hasta cero.
            </p>
            <p className="mt-4">
              El Anchor Protocol, el producto estrella de Terra, ofrecía 19.5% de rendimiento anual
              sobre UST — un número insostenible que se pagaba con reservas menguantes. Era el
              principal motor de adopción. Cuando colapsó, arrastró a todo el ecosistema.
            </p>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">Señales de alerta que nadie escuchó</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>· 19.5% de retorno anual "garantizado" en una stablecoin — matemáticamente insostenible</li>
                <li>· El mecanismo de estabilización no había sido probado en condiciones de pánico extremo</li>
                <li>· Do Kwon ridiculizó públicamente a cada analista que señaló los riesgos</li>
                <li>· Las reservas de BTC para "defender" la paridad eran insuficientes para el volumen</li>
                <li>· La circularidad LUNA/UST era conocida y documentada por la comunidad técnica</li>
              </ul>
            </div>
          </section>

          {/* Sección 5: FTX */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-black text-red-400/20 font-mono">04</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                FTX: el fraude más sofisticado de la historia crypto ($8.000 millones)
              </h2>
            </div>

            <div className="p-5 bg-gris-medio rounded-xl border border-red-400/20 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-red-400 font-black text-2xl">$8B</p>
                  <p className="text-white/40 text-xs">Fondos de clientes robados</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">1M+</p>
                  <p className="text-white/40 text-xs">Acreedores afectados</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">Nov 2022</p>
                  <p className="text-white/40 text-xs">Colapso</p>
                </div>
              </div>
            </div>

            <p>
              Sam Bankman-Fried construyó la segunda plataforma de trading de crypto del mundo en
              apenas tres años. Era el rostro amigable del ecosistema: donaba millones a causas
              progresistas, comparecía ante el Congreso de EE.UU. como el adulto responsable del
              sector, y prometía que FTX era el exchange "seguro y regulado".
            </p>
            <p className="mt-4">
              Por debajo, FTX prestaba silenciosamente los fondos de sus clientes a Alameda Research,
              el fondo de trading de SBF, para cubrir apuestas fallidas. Cuando Coindesk publicó
              el balance de Alameda en noviembre de 2022 —mostrando que estaba construido sobre
              tokens FTT (la moneda nativa de FTX) en lugar de activos reales— Binance anunció
              que liquidaría sus posiciones en FTT. El banco run fue instantáneo.
            </p>
            <p className="mt-4">
              En 72 horas, FTX colapsó. SBF fue arrestado en diciembre de 2022 y condenado a 25 años
              de prisión en 2024. Su caso es el fraude financiero más grande desde Bernie Madoff.
            </p>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">Señales de alerta que nadie escuchó</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>· Las reservas de FTX nunca fueron auditadas de forma independiente</li>
                <li>· Alameda y FTX compartían liderazgo — conflicto de interés flagrante</li>
                <li>· El token FTT era el principal "activo" del balance de Alameda</li>
                <li>· No había separación real entre fondos de clientes y fondos del exchange</li>
                <li>· Las herramientas de transparencia prometidas (proof of reserves) nunca materializaron</li>
              </ul>
            </div>
          </section>

          {/* Sección 6: Squid Game Token */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-black text-red-400/20 font-mono">05</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Squid Game Token: el rug pull de 3.4 millones en 5 minutos
              </h2>
            </div>

            <div className="p-5 bg-gris-medio rounded-xl border border-red-400/20 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-red-400 font-black text-2xl">$3.4M</p>
                  <p className="text-white/40 text-xs">Robado</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">2,861%</p>
                  <p className="text-white/40 text-xs">Subida antes del colapso</p>
                </div>
                <div>
                  <p className="text-red-400 font-black text-2xl">Oct 2021</p>
                  <p className="text-white/40 text-xs">El rug pull</p>
                </div>
              </div>
            </div>

            <p>
              Octubre de 2021. La serie Squid Game de Netflix era un fenómeno global. Alguien creó
              un token llamado SQUID capitalizando el nombre, afirmando que sería la moneda de un
              juego online basado en la serie. El token subió 2,861% en días mientras CNN, Forbes
              y BBC lo cubrían como historia de interés.
            </p>
            <p className="mt-4">
              El problema era visible desde el código: el contrato inteligente tenía una restricción
              que impedía a los compradores vender sus tokens. Solo los creadores podían hacerlo.
              Cuando llegaron a $2,856 por token, los desarrolladores anónimos vaciaron la liquidez
              del pool y desaparecieron. El precio cayó a cero en segundos.
            </p>
            <p className="mt-4">
              Este tipo de estafa se llama "rug pull" — literalmente, jalar la alfombra. Es el
              fraude más común en el ecosistema DeFi y ocurre cientos de veces por semana con tokens
              menores. La versión SQUID fue notable solo por su escala y por el nivel de cobertura
              mediática que recibió antes de colapsar.
            </p>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">Señales de alerta que nadie escuchó</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>· Los usuarios reportaron que no podían vender — información ignorada</li>
                <li>· Sin auditoría del smart contract publicada</li>
                <li>· Equipo completamente anónimo sin historial verificable</li>
                <li>· Ninguna relación oficial con Netflix o la IP de Squid Game</li>
                <li>· La subida parabólica sin uso real era el patrón clásico de manipulación</li>
              </ul>
            </div>
          </section>

          {/* Sección 7: Cómo protegerse */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              5 red flags que siempre aparecen antes de un fraude
            </h2>
            <p>
              Después de analizar decenas de fraudes crypto, emerge un patrón consistente. Estos cinco
              indicadores aparecen en prácticamente todos los casos antes del colapso:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  numero: "01",
                  flag: "Retornos garantizados y fijos",
                  desc: "Ningún mercado financiero legítimo puede garantizar retornos. Si alguien te promete 1% diario, 20% mensual o cualquier número fijo, es un fraude. Los mercados son volátiles por naturaleza — quien promete lo contrario está mintiendo o usando el dinero de los nuevos participantes para pagar a los anteriores.",
                },
                {
                  numero: "02",
                  flag: "Opacidad técnica o financiera",
                  desc: "Los proyectos legítimos tienen código abierto (open source), auditorías publicadas y balances verificables. Si la tecnología es secreta ('nuestro algoritmo propietario'), si no hay auditorías independientes o si los balances no son verificables en cadena, hay algo que ocultar.",
                },
                {
                  numero: "03",
                  flag: "Modelo de referidos agresivo",
                  desc: "Cuando el principal incentivo es traer nuevos participantes y no el valor real del producto, el modelo es una pirámide. El crecimiento orgánico basado en valor real no requiere comisiones por reclutar.",
                },
                {
                  numero: "04",
                  flag: "Equipo anónimo o no verificable",
                  desc: "La pseudonimidad es válida en crypto (Satoshi). Pero cuando el equipo de una plataforma que maneja tu dinero es anónimo, sin historial verificable, sin huella digital profesional — el riesgo de que desaparezcan con los fondos es real y documentado.",
                },
                {
                  numero: "05",
                  flag: "Presión para invertir rápido",
                  desc: "La urgencia artificial es una táctica de manipulación. 'El precio sube mañana', 'solo quedan X lugares', 'si no entrás ahora perdés la oportunidad' — todas señales de alarma. Las inversiones legítimas no desaparecen si te tomás tiempo para investigar.",
                },
              ].map((item) => (
                <div key={item.numero} className="p-5 bg-gris-medio rounded-xl border border-red-400/10">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-red-400/40 text-2xl font-bold shrink-0">{item.numero}</span>
                    <div>
                      <p className="text-red-400 font-bold mb-2">{item.flag}</p>
                      <p className="text-white/50 text-base">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 8: Hardware wallets */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo proteger tu cripto: la solución definitiva
            </h2>
            <p>
              La protección más efectiva contra fraudes no es adivinar qué proyectos son legítimos —
              es no depositar tus activos en plataformas que puedan hacer lo que FTX hizo con los fondos
              de sus clientes. La solución es la autocustodia con hardware wallets.
            </p>
            <p className="mt-4">
              Si no controlás las claves privadas, no son tus crypto. Un exchange puede colapsar,
              ser hackeado o simplemente robarte. Una hardware wallet elimina ese riesgo: tus claves
              nunca salen del dispositivo físico y nadie puede acceder a ellas sin el dispositivo
              y el PIN.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/20">
                <p className="text-dorado font-black text-lg mb-2">Ledger Nano X</p>
                <p className="text-white/50 text-sm mb-4">
                  La hardware wallet más popular del mundo. Soporte para +5,500 criptomonedas,
                  Bluetooth para uso móvil, pantalla propia para verificar transacciones.
                  Precio: ~$149 USD.
                </p>
                <a
                  href="https://shop.ledger.com/?r=la-impresora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary text-sm"
                >
                  Ver Ledger →
                </a>
              </div>
              <div className="p-6 bg-gris-medio rounded-xl border border-verde/20">
                <p className="text-verde font-black text-lg mb-2">Trezor Model T</p>
                <p className="text-white/50 text-sm mb-4">
                  Open source, pantalla táctil, máxima transparencia. El favorito de los
                  más técnicos del ecosistema. Compatible con las principales wallets de software.
                  Precio: ~$179 USD.
                </p>
                <a
                  href="https://trezor.io/?r=la-impresora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary text-sm"
                  style={{ background: "rgba(0,230,118,0.15)", color: "#00e676", border: "1px solid rgba(0,230,118,0.3)" }}
                >
                  Ver Trezor →
                </a>
              </div>
            </div>

            <div className="mt-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Regla práctica: cualquier cantidad de crypto que no querrías perder debería estar
                en una hardware wallet. Para trading y uso diario, los exchanges están bien.
                Para ahorros, nunca.
              </p>
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El fraude más grande es no aprender de la historia
            </h2>
            <p>
              Cada uno de estos casos fue señalado por analistas, técnicos y periodistas antes
              del colapso. Las señales estaban ahí. Pero la promesa de retornos extraordinarios
              desactiva el pensamiento crítico de manera extraordinariamente eficiente.
            </p>
            <p className="mt-4">
              El ecosistema crypto tiene tecnología genuinamente revolucionaria. Bitcoin, Ethereum,
              la tokenización de activos reales, DeFi — todo eso existe y funciona. Pero también
              atrae a los mejores estafadores del mundo, porque combina la posibilidad real de
              retornos extraordinarios con la suficiente complejidad técnica para que la gente
              deje de hacer preguntas.
            </p>
            <p className="mt-4">
              Las preguntas que nunca tenés que dejar de hacer: ¿Dónde están mis claves?
              ¿Quién custodia mis fondos? ¿Puede alguien auditar esto independientemente?
              ¿Este retorno es matemáticamente posible sin usar el dinero de otros?
            </p>
            <p className="mt-4">
              Si las respuestas no son satisfactorias, el dinero se queda en el bolsillo.
            </p>
          </section>

        </article>

        {/* CTA Newsletter */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Cada semana analizamos el ecosistema crypto para que no te sorprendan</p>
          <p className="text-white/50 mb-6">
            Señales de alerta, proyectos reales y noticias que importan. Sin spam. Gratis para siempre.
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
              <p className="text-white font-bold mt-2 leading-tight">Privacidad digital y crypto: cómo proteger tu identidad y tu dinero en 2026</p>
            </Link>
            <Link href="/blog/como-funciona-el-dinero-crypto" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Cómo funciona el dinero crypto: guía completa para principiantes en LATAM</p>
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
