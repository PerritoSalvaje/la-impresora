import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Qué es Bitcoin y cómo funciona: la guía más simple de 2026",
  description:
    "Guía definitiva de Bitcoin para principiantes: historia, cómo funciona la blockchain, cómo comprar Bitcoin en Argentina y LATAM, qué es una wallet y los riesgos reales.",
  openGraph: {
    title: "Qué es Bitcoin y cómo funciona: la guía más simple de 2026",
    description:
      "Guía definitiva de Bitcoin para principiantes: historia, cómo funciona la blockchain, cómo comprar Bitcoin en Argentina y LATAM, qué es una wallet y los riesgos reales.",
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
          <span>Bitcoin</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-dorado/10 text-dorado border-dorado/20">
              Bitcoin
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 13 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Qué es Bitcoin y cómo funciona:{" "}
            <span className="text-dorado">la guía más simple</span> de 2026
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Bitcoin existe desde 2009. En ese tiempo pasó de valer $0.001 a más de $100,000. Fue declarado
            muerto 430 veces por medios de todo el mundo. Y sin embargo, en 2026 es activo de reserva de
            varios estados, está en los balances de empresas Fortune 500 y lo usa gente en Venezuela,
            Argentina y El Salvador para proteger sus ahorros. Esta es la guía que te explica por qué.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Qué es */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es Bitcoin: la definición real
            </h2>
            <p>
              Bitcoin es dinero digital descentralizado. No lo controla ningún banco, empresa, gobierno
              ni persona. Sus reglas están escritas en código de computadora que es público, verificable
              y no puede ser cambiado unilateralmente por nadie.
            </p>
            <p className="mt-4">
              En términos prácticos: podés enviar Bitcoin a cualquier persona del mundo, en cualquier
              momento, sin necesitar permiso de nadie. Sin límites de horario, sin fronteras, sin que
              nadie pueda congelarte la cuenta o pedirte que expliques por qué lo mandás.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Una forma de pensar en Bitcoin: es como el email del dinero. Así como el email te permite
                enviar texto a cualquier persona del mundo sin un intermediario, Bitcoin te permite enviar
                valor sin un banco. La diferencia es que con el email podés crear copias del mensaje;
                con Bitcoin, cuando enviás, no podés enviar el mismo bitcoin dos veces — eso es lo que
                resuelve la blockchain.
              </p>
            </div>
          </section>

          {/* Historia */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              La historia de Bitcoin: de $0 a activo global
            </h2>
            <p>
              Todo empezó en octubre de 2008, en el peor momento de la crisis financiera global.
              Un programador (o grupo de programadores) con el seudónimo Satoshi Nakamoto publicó un
              documento técnico de 9 páginas titulado "Bitcoin: A Peer-to-Peer Electronic Cash System".
              El paper describía un sistema de dinero digital que no necesitaba bancos.
            </p>
            <p className="mt-4">
              En enero de 2009 Satoshi minó el primer bloque de Bitcoin, incluyendo en el código un
              mensaje que decía: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks".
              Un mensaje directo al sistema financiero que estaba siendo rescatado con dinero público.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  año: "2009",
                  evento: "Primer bloque de Bitcoin minado por Satoshi Nakamoto",
                  precio: "$0",
                },
                {
                  año: "2010",
                  evento: "Primera transacción comercial: 10,000 BTC por dos pizzas (hoy valen $1B+)",
                  precio: "$0.003",
                },
                {
                  año: "2013",
                  evento: "Bitcoin llega a $1,000 por primera vez. Primera gran burbuja y caída",
                  precio: "$100–$1,000",
                },
                {
                  año: "2017",
                  evento: "Bull run masivo, Bitcoin llega a $20,000. El mundo descubre crypto",
                  precio: "$1,000–$20,000",
                },
                {
                  año: "2020",
                  evento: "Institucionales entran: MicroStrategy, Tesla, Square compran Bitcoin",
                  precio: "$7,000–$30,000",
                },
                {
                  año: "2021",
                  evento: "Máximo histórico de $69,000. El Salvador lo adopta como moneda legal",
                  precio: "$30,000–$69,000",
                },
                {
                  año: "2024",
                  evento: "ETFs de Bitcoin en EEUU aprobados. Cuarto halving. Nuevo máximo histórico",
                  precio: "$40,000–$100,000+",
                },
                {
                  año: "2026",
                  evento: "Activo de reserva de varios estados, en balances corporativos globales",
                  precio: "Precio actual",
                },
              ].map((h) => (
                <div key={h.año} className="flex gap-4 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-dorado font-black md:w-12 shrink-0">{h.año}</span>
                  <span className="text-white/60 flex-1 text-sm">{h.evento}</span>
                  <span className="text-verde text-xs font-bold shrink-0 text-right">{h.precio}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Cómo funciona la blockchain */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo funciona la blockchain de Bitcoin: sin tecnicismos
            </h2>
            <p>
              Blockchain significa "cadena de bloques". Es la tecnología que hace posible a Bitcoin.
              Para entenderla, imaginá un libro de contabilidad público donde queda registrado cada
              movimiento de Bitcoin que se hace en el mundo.
            </p>
            <p className="mt-4">
              Pero a diferencia del libro de contabilidad de un banco, que está en un solo servidor
              protegido por contraseñas, la blockchain de Bitcoin está copiada exactamente igual en
              más de 50,000 computadoras distribuidas alrededor del mundo simultáneamente.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  concepto: "Los bloques",
                  explicacion: "Cada 10 minutos aproximadamente, todas las transacciones de Bitcoin realizadas en ese período se agrupan en un 'bloque'. Ese bloque se sella con una firma matemática única.",
                },
                {
                  concepto: "La cadena",
                  explicacion: "Cada bloque nuevo incluye la firma del bloque anterior, formando una 'cadena'. Si alguien quisiera modificar una transacción antigua, tendría que modificar ese bloque y todos los que vinieron después — una cantidad de cálculos matemáticamente imposible de hacer más rápido que la red.",
                },
                {
                  concepto: "Los mineros",
                  explicacion: "Son computadoras (en la realidad, centros de datos con hardware especializado) que compiten por ser los primeros en sellar cada bloque nuevo. El ganador recibe Bitcoin como recompensa. Esto es el 'mining'.",
                },
                {
                  concepto: "El consenso",
                  explicacion: "No hay una autoridad central que decida cuál es la versión correcta de la blockchain. Lo deciden las reglas del protocolo y la mayoría de los nodos. Si alguien intentara hacer trampa, la red simplemente ignoraría su versión del registro.",
                },
              ].map((c) => (
                <div key={c.concepto} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold mb-2">{c.concepto}</p>
                  <p className="text-white/60 text-base">{c.explicacion}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Sistema bancario</p>
                <ul className="space-y-2 text-white/50 text-sm">
                  <li>· Registro centralizado en servidores del banco</li>
                  <li>· El banco puede modificar, congelar o bloquear</li>
                  <li>· Opaco: solo el banco ve el libro completo</li>
                  <li>· Depende de la confianza en la institución</li>
                  <li>· Sujeto a decisiones políticas y regulatorias</li>
                </ul>
              </div>
              <div className="p-5 bg-dorado/5 rounded-xl border border-dorado/20">
                <p className="text-dorado text-xs uppercase tracking-widest mb-3 font-bold">Blockchain de Bitcoin</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· 50,000+ copias distribuidas globalmente</li>
                  <li>· Nadie puede modificar sin el 51% de la red</li>
                  <li>· Completamente público y verificable por todos</li>
                  <li>· Las reglas son matemáticas, no institucionales</li>
                  <li>· Resistente a censura y manipulación política</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Por qué tiene valor */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué Bitcoin tiene valor: la pregunta que todos hacen
            </h2>
            <p>
              La pregunta más común de los escépticos: "Bitcoin no tiene nada detrás, ¿por qué vale algo?"
              La respuesta requiere entender qué le da valor a cualquier moneda.
            </p>
            <p className="mt-4">
              El dólar no tiene respaldo en oro desde 1971. Vale porque la gente confía en que otros
              lo van a aceptar, porque el gobierno de EEUU lo respalda y porque es el medio de cambio
              dominante del comercio internacional. El peso argentino vale cada vez menos porque esa
              confianza se erosiona con cada devaluación.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  propiedad: "Escasez absoluta",
                  desc: "Solo van a existir 21 millones de Bitcoin, nunca más. Es el único activo en la historia con un límite de emisión garantizado matemáticamente. No hay presidente ni banco central que pueda cambiar eso.",
                },
                {
                  propiedad: "Descentralización",
                  desc: "Nadie lo controla. No hay CEO de Bitcoin que pueda ser presionado, comprado o encarcelado. El protocolo es autónomo.",
                },
                {
                  propiedad: "Verificabilidad",
                  desc: "Cualquier persona puede descargar el software y verificar cada transacción de la historia. Es la única forma de dinero 100% auditable.",
                },
                {
                  propiedad: "Efecto de red creciente",
                  desc: "Más de 500 millones de personas en el mundo tienen Bitcoin o han tenido. La red crece, la confianza crece, y con ella el valor.",
                },
                {
                  propiedad: "Adopción institucional",
                  desc: "ETFs en EEUU, Europa y Asia. Empresas como MicroStrategy con más de 200,000 BTC en balance. Varios estados con Bitcoin como reserva. La base de demanda es completamente diferente a 2017.",
                },
              ].map((p) => (
                <div key={p.propiedad} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold">{p.propiedad}</p>
                  <p className="text-white/50 text-base mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* El halving */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El halving: la mecánica que controla la inflación de Bitcoin
            </h2>
            <p>
              Cada vez que se minan 210,000 bloques (aproximadamente cada 4 años), la recompensa que
              reciben los mineros por sellar cada bloque se reduce exactamente a la mitad. Esto se
              llama "halving" (o "halving") y es automático — está escrito en el código desde el principio.
            </p>
            <p className="mt-4">
              El resultado es que la cantidad de Bitcoin nuevo que entra al mercado se va reduciendo
              progresivamente hasta llegar a cero alrededor del año 2140. Históricamente, cada halving
              estuvo seguido de un período de aumento significativo de precio, aunque con ciclos de
              corrección importantes.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { halving: "1er Halving (2012)", recompensa: "50 → 25 BTC/bloque", precio_pre: "$12", precio_post: "$1,150 (12 meses después)" },
                { halving: "2do Halving (2016)", recompensa: "25 → 12.5 BTC/bloque", precio_pre: "$650", precio_post: "$20,000 (18 meses después)" },
                { halving: "3er Halving (2020)", recompensa: "12.5 → 6.25 BTC/bloque", precio_pre: "$8,600", precio_post: "$69,000 (18 meses después)" },
                { halving: "4to Halving (2024)", recompensa: "6.25 → 3.125 BTC/bloque", precio_pre: "$65,000", precio_post: "Ciclo actual en desarrollo" },
              ].map((h) => (
                <div key={h.halving} className="p-4 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="text-white font-bold md:w-52 shrink-0">{h.halving}</span>
                    <span className="text-white/40 text-sm flex-1">{h.recompensa}</span>
                    <div className="flex gap-4 text-sm">
                      <span className="text-white/40">{h.precio_pre}</span>
                      <span className="text-verde font-bold">{h.precio_post}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Qué es una wallet */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es una wallet de Bitcoin y cómo funciona
            </h2>
            <p>
              Una wallet (billetera) no guarda tus Bitcoin. Los Bitcoin siempre están en la blockchain.
              Lo que la wallet guarda es tu clave privada — la contraseña matemática que te permite
              demostrar que sos el dueño y autorizar transacciones.
            </p>
            <p className="mt-4">
              Es como el PIN de tu tarjeta de débito: la tarjeta no tiene el dinero (el dinero está
              en el banco), pero sin el PIN no podés acceder. Con Bitcoin, la diferencia es que no hay
              banco — si perdés tu clave privada o tu seed phrase, no hay recuperación posible.
            </p>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                La regla más importante de Bitcoin: "Not your keys, not your coins." Si dejás tus Bitcoin
                en un exchange, técnicamente no son tuyos — son del exchange. Para realmente poseer
                Bitcoin, necesitás tu propia wallet con tu propia clave privada.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  tipo: "Exchange wallet (custodial)",
                  ejemplos: "Lemon, Ripio, Binance, Buenbit",
                  pros: "Fácil de configurar, con recuperación de contraseña, ideal para empezar",
                  cons: "El exchange custodia tus claves. Si cierra o te hackean la cuenta, podés perder acceso.",
                  para: "Principiantes y uso frecuente",
                  color: "border-dorado/20",
                },
                {
                  tipo: "Software wallet (hot wallet)",
                  ejemplos: "Electrum (BTC), MetaMask (ETH/EVM), Phantom (SOL)",
                  pros: "Vos tenés tus claves. Gratis. Acceso a DeFi y apps descentralizadas.",
                  cons: "Si perdés la seed phrase (12-24 palabras), perdés todo. Sin excepciones.",
                  para: "Usuarios intermedios con conocimiento básico",
                  color: "border-verde/20",
                },
                {
                  tipo: "Hardware wallet (cold wallet)",
                  ejemplos: "Ledger Nano S/X, Trezor Model T",
                  pros: "Máxima seguridad. Claves offline, prácticamente imposible de hackear remotamente.",
                  cons: "Cuesta $70-180 USD. Menos conveniente para uso diario.",
                  para: "Ahorros importantes o hodl a largo plazo",
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
                  <p className="mt-3 text-dorado text-sm font-bold">Para: {w.para}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cómo comprar */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo comprar Bitcoin en Argentina y LATAM: guía paso a paso
            </h2>
            <p>
              Comprar Bitcoin en 2026 es más fácil que nunca. Podés empezar con $5 y tener tu primer
              Bitcoin en menos de 20 minutos. Acá el proceso exacto:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  paso: "Paso 1: Elegí un exchange según tu país",
                  detalle: "Argentina: Lemon Cash o Buenbit para empezar. México: Bitso. Colombia, Chile, Perú: Binance o Coinbase. Si sos avanzado y querés más opciones: Binance en toda LATAM vía P2P.",
                  tag: "Setup",
                },
                {
                  paso: "Paso 2: Creá tu cuenta y verificá tu identidad",
                  detalle: "Todo exchange serio requiere KYC (Know Your Customer): foto de tu DNI/cédula y selfie. Es obligatorio y legal. Sin esto, no podés operar. Tarda entre 10 minutos y 48 horas según el exchange.",
                  tag: "KYC",
                },
                {
                  paso: "Paso 3: Depositá dinero",
                  detalle: "Transferencia bancaria (CBU/CVU en Argentina, CLABE en México, cuenta corriente en otros países). Algunos exchanges también aceptan tarjeta de crédito/débito con comisión adicional.",
                  tag: "Fondos",
                },
                {
                  paso: "Paso 4: Comprá Bitcoin",
                  detalle: "En la app, buscá Bitcoin (BTC), ingresá el monto en pesos/dólares que querés convertir y confirmá. No necesitás comprar un Bitcoin entero — podés comprar $1,000 ARS de Bitcoin. La unidad mínima se llama satoshi (0.00000001 BTC).",
                  tag: "Compra",
                },
                {
                  paso: "Paso 5: Decidí dónde guardarlo",
                  detalle: "Para montos pequeños mientras aprendés: dejalo en el exchange. Para montos importantes a largo plazo: retiralo a una wallet propia (Electrum, Ledger). Esta decisión es la más importante de seguridad.",
                  tag: "Seguridad",
                },
              ].map((p, i) => (
                <div key={i} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{p.paso}</p>
                    <span className="text-dorado text-xs font-bold shrink-0 border border-dorado/30 px-2 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <p className="text-white/50 text-base">{p.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Riesgos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los riesgos reales de Bitcoin: sin sugarcoating
            </h2>
            <p>
              Bitcoin no es una inversión sin riesgo. Quien te diga lo contrario está mintiendo.
              Estos son los riesgos que necesitás entender antes de invertir:
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  riesgo: "Volatilidad extrema",
                  nivel: "Muy alto",
                  desc: "Bitcoin puede caer 50–80% en mercados bajistas. En 2022 cayó de $69,000 a $16,000 en menos de 12 meses. Si no podés tolerar ese nivel de caída sin vender en pánico, no pongas dinero que necesitás a corto plazo.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Pérdida de claves privadas",
                  nivel: "Alto e irreversible",
                  desc: "No hay recuperación de contraseña. No hay servicio al cliente. Si perdés tu seed phrase y la wallet, esos Bitcoin se quedan bloqueados para siempre. Se estima que el 20% de todos los Bitcoin están permanentemente perdidos por este motivo.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Riesgo regulatorio",
                  nivel: "Medio",
                  desc: "Los gobiernos pueden gravar, regular o restringir el uso de Bitcoin. En LATAM la tendencia es hacia regulación más clara (no prohibición), pero el marco puede cambiar.",
                  color: "text-dorado",
                },
                {
                  riesgo: "Scams y estafas",
                  nivel: "Muy alto en LATAM",
                  desc: "Plataformas que prometen rendimientos garantizados del 5–10% mensual en BTC son estafas. Exchanges falsos que copian interfaces reales. Siempre verificá URLs, nunca compartas tu seed phrase y usá solo exchanges con historial verificable.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Tecnología en evolución",
                  nivel: "Bajo-medio",
                  desc: "Aunque Bitcoin tiene 15 años de track record, la tecnología sigue evolucionando. Los riesgos técnicos son bajos pero no cero: bugs en implementaciones, mejoras de protocolo, etc.",
                  color: "text-dorado",
                },
              ].map((r) => (
                <div key={r.riesgo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{r.riesgo}</p>
                    <span className={`text-xs font-bold ${r.color}`}>{r.nivel}</span>
                  </div>
                  <p className="text-white/50 text-base">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Las preguntas que nadie se anima a hacer
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "¿Es demasiado tarde para comprar Bitcoin?",
                  a: "Esta pregunta se hace desde 2013 cuando costaba $100. Y desde $1,000 en 2017. Y desde $10,000 en 2020. La respuesta honesta: nadie sabe. Lo que sí sabemos es que Bitcoin en 2026 tiene mayor adopción institucional, mejor infraestructura y más claridad regulatoria que nunca. Si vas a largo plazo (4+ años), el tiempo de entrada importa menos que la convicción.",
                },
                {
                  q: "¿Cuánto Bitcoin debería tener?",
                  a: "La regla general es: nunca más del porcentaje de tu cartera que podás ver caer 80% sin necesitar ese dinero. Para muchos en LATAM, Bitcoin es una cobertura contra devaluación — no una apuesta especulativa. Con ese objetivo, el 5–20% de los ahorros tiene sentido.",
                },
                {
                  q: "¿Puedo perder más de lo que invierto?",
                  a: "No, si comprás Bitcoin directamente (sin apalancamiento). Si comprás $1,000 y baja 100%, perdés $1,000. No hay deuda. El riesgo de perder más surge solo con trading con leverage (futuros, opciones), que no recomendamos para principiantes.",
                },
                {
                  q: "¿Bitcoin es legal en Argentina?",
                  a: "Sí. Comprar, vender y guardar Bitcoin es legal en Argentina. En 2026 hay obligaciones de declaración ante ARCA (ex-AFIP) para activos digitales. No declararlo es evasión fiscal, pero poseerlo en sí mismo es perfectamente legal.",
                },
                {
                  q: "¿Qué pasa si apagan internet?",
                  a: "La red Bitcoin puede operar sin internet convencional (vía satélite, radio). Pero si tu conexión se cae, simplemente no podés realizar transacciones hasta que vuelva — tus Bitcoin siguen existiendo en la blockchain. No desaparecen.",
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
              Bitcoin en 2026: ni la solución a todo ni el engaño que dicen
            </h2>
            <p>
              Bitcoin no es perfecto. Es lento para pagos cotidianos (7 transacciones por segundo vs
              miles del sistema Visa). La volatilidad es real. El consumo energético es polémico.
              Los errores de usuario no tienen segunda oportunidad.
            </p>
            <p className="mt-4">
              Pero también es el único activo en la historia cuya emisión está garantizada matemáticamente.
              El único sistema financiero que funciona igual en Argentina, Venezuela, El Salvador o Japón
              sin necesitar permiso de nadie. Y el único que le da a alguien en Buenos Aires acceso al
              mismo sistema financiero que alguien en Nueva York.
            </p>
            <p className="mt-4">
              Eso no lo hace una apuesta segura. Pero sí lo hace algo que vale entender profundamente
              antes de decidir si querés tenerlo o no. La ignorancia, en ambas direcciones, siempre
              es la peor estrategia financiera.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> cubrimos Bitcoin y el ecosistema
              crypto de LATAM cada semana, sin predicciones de precio ni shilling. Solo los datos y el
              análisis que sirven para tomar mejores decisiones.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">El análisis de Bitcoin que necesitás, sin el ruido que no sirve</p>
          <p className="text-white/50 mb-6">
            Cada semana: lo que importa de Bitcoin y crypto en LATAM. Sin predicciones de precio, sin shilling. Gratis.
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
            <Link href="/blog/bitcoin-halving-que-es" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Bitcoin</span>
              <p className="text-white font-bold mt-2 leading-tight">Bitcoin Halving: qué es y por qué importa para tu inversión</p>
            </Link>
            <Link href="/blog/solana-que-es-como-funciona" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-verde font-bold">Altcoins</span>
              <p className="text-white font-bold mt-2 leading-tight">Solana: qué es, cómo funciona y por qué es importante en 2026</p>
            </Link>
          </div>
        </div>

        {/* FAQ Section con schema FAQPage */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Necesito comprar un Bitcoin entero?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Bitcoin es divisible hasta 8 decimales. La unidad mínima se llama satoshi (0.00000001 BTC). Podés comprar desde $1 USD o $1,000 ARS en cualquier exchange. No necesitás comprar un Bitcoin completo para participar.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Bitcoin es lo mismo que blockchain?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Blockchain es la tecnología subyacente: una base de datos distribuida e inmutable. Bitcoin fue la primera aplicación masiva de esta tecnología para crear dinero digital. Hoy existen miles de blockchains distintas (Ethereum, Solana, etc.), pero Bitcoin fue la primera y sigue siendo la más segura y descentralizada.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Qué es una seed phrase y por qué es tan importante?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Una seed phrase (frase semilla) es un conjunto de 12 o 24 palabras en inglés que sirve como clave maestra de tu wallet. Con esas palabras cualquiera puede acceder a tus fondos desde cualquier dispositivo. Si la perdés, perdés tus crypto para siempre. Si alguien más la obtiene, puede robarte todo. Guardala offline, en papel, en un lugar seguro. Nunca la compartas digitalmente.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Bitcoin consume demasiada energía?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "El consumo energético de Bitcoin es real y polémico. La red consume aproximadamente 120-150 TWh anuales, comparable a países como Argentina. Sin embargo, una proporción creciente (más del 50%) proviene de fuentes renovables. El debate real es si el beneficio de tener un sistema financiero global descentralizado justifica ese costo energético — y es una pregunta legítima sin respuesta única.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Se puede hackear Bitcoin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "La red Bitcoin en sí no ha sido hackeada en 15 años de operación. Un ataque exitoso requeriría controlar más del 51% del poder computacional de la red (costo estimado: miles de millones de dólares). Lo que sí se hackean son los exchanges y las wallets de usuarios con mala seguridad. Por eso la regla 'not your keys, not your coins': si controlás tus claves privadas, nadie puede hackear tu Bitcoin.",
                    },
                  },
                ],
              }),
            }}
          />
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            Preguntas frecuentes sobre Bitcoin
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "¿Necesito comprar un Bitcoin entero?",
                a: "No. Bitcoin es divisible hasta 8 decimales. La unidad mínima se llama satoshi (0.00000001 BTC). Podés comprar desde $1 USD o $1,000 ARS en cualquier exchange. No necesitás comprar un Bitcoin completo para participar.",
              },
              {
                q: "¿Bitcoin es lo mismo que blockchain?",
                a: "No. Blockchain es la tecnología subyacente: una base de datos distribuida e inmutable. Bitcoin fue la primera aplicación masiva de esta tecnología para crear dinero digital. Hoy existen miles de blockchains distintas (Ethereum, Solana, etc.), pero Bitcoin fue la primera y sigue siendo la más segura y descentralizada.",
              },
              {
                q: "¿Qué es una seed phrase y por qué es tan importante?",
                a: "Una seed phrase (frase semilla) es un conjunto de 12 o 24 palabras en inglés que sirve como clave maestra de tu wallet. Con esas palabras cualquiera puede acceder a tus fondos desde cualquier dispositivo. Si la perdés, perdés tus crypto para siempre. Si alguien más la obtiene, puede robarte todo. Guardala offline, en papel, en un lugar seguro. Nunca la compartas digitalmente.",
              },
              {
                q: "¿Bitcoin consume demasiada energía?",
                a: "El consumo energético de Bitcoin es real y polémico. La red consume aproximadamente 120-150 TWh anuales, comparable a países como Argentina. Sin embargo, una proporción creciente (más del 50%) proviene de fuentes renovables. El debate real es si el beneficio de tener un sistema financiero global descentralizado justifica ese costo energético — y es una pregunta legítima sin respuesta única.",
              },
              {
                q: "¿Se puede hackear Bitcoin?",
                a: "La red Bitcoin en sí no ha sido hackeada en 15 años de operación. Un ataque exitoso requeriría controlar más del 51% del poder computacional de la red (costo estimado: miles de millones de dólares). Lo que sí se hackean son los exchanges y las wallets de usuarios con mala seguridad. Por eso la regla 'not your keys, not your coins': si controlás tus claves privadas, nadie puede hackear tu Bitcoin.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/20 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                  <span className="text-white font-bold text-base leading-snug">
                    {faq.q}
                  </span>
                  <span className="text-dorado text-xl shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-white/55 text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>

      <ArticleCTA
        source="blog_que_es_bitcoin"
        hook="¿Querés aprender Bitcoin paso a paso desde cero?"
      />

      <div className="mt-24">
        <Newsletter />
      </div>
    </div>
  );
}
