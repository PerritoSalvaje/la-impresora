import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Cómo declarar criptomonedas en Argentina 2026: guía completa ARCA",
  description:
    "Guía completa para declarar criptomonedas en Argentina ante ARCA (ex-AFIP): Bienes Personales, Ganancias, cómo valuar los activos, qué exchanges informan y qué pasa si no declarás.",
  openGraph: {
    title: "Cómo declarar criptomonedas en Argentina 2026: guía completa ARCA",
    description:
      "Todo lo que necesitás saber para declarar tus crypto en Argentina: formularios, valuación, exchanges que informan y consecuencias de no declarar.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="como-declarar-crypto-argentina-article"
        data={[
          articleSchema({
            title: "Cómo declarar criptomonedas en Argentina 2026: guía completa ARCA",
            description: "Guía completa para declarar criptomonedas en Argentina ante ARCA (ex-AFIP): Bienes Personales, Ganancias, cómo valuar los activos, qué exchanges informan y qué pasa si no declarás.",
            slug: "como-declarar-crypto-argentina",
            publishedAt: "2025-09-01",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Cómo declarar criptomonedas en Argentina 2026: guía completa ARCA", url: "/blog/como-declarar-crypto-argentina" },
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
            Cómo declarar criptomonedas en Argentina:{" "}
            <span className="text-dorado">guía completa ARCA 2026</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Compraste Bitcoin, guardaste USDT o generaste yield en DeFi. Ahora el fisco quiere saber.
            ARCA (la ex-AFIP) tiene los ojos puestos en el mercado crypto y los exchanges ya están
            informando tus saldos. Esta guía te explica exactamente qué declarar, cuándo, en qué
            formulario y cómo no cometer errores caros. Spoiler: consultá un contador, pero llegá
            preparado.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es ARCA y por qué le importan tus crypto
            </h2>
            <p>
              ARCA (Agencia de Recaudación y Control Aduanero) es el organismo que reemplazó a la AFIP
              en 2024. Su misión es la misma: recaudar impuestos. Y en los últimos años, las
              criptomonedas pasaron a estar en el centro de su radar.
            </p>
            <p className="mt-4">
              El marco legal existe desde 2018: la Ley 27.430 de Reforma Tributaria incorporó las
              criptomonedas al sistema impositivo argentino. Desde entonces, tenés obligaciones concretas
              si tenés saldos en crypto al 31 de diciembre de cada año o si realizaste operaciones con
              ganancias durante el período fiscal.
            </p>
            <p className="mt-4">
              Lo que cambió en los últimos años es la capacidad de control. Los exchanges argentinos
              como Lemon, Ripio, Buenbit y SatoshiTango están obligados a reportar información de sus
              usuarios a ARCA. Binance y otros exchanges internacionales también están bajo presión
              regulatoria creciente. El argumento de "nadie se va a enterar" ya no es válido.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Principio básico: si tenías crypto al 31 de diciembre o hiciste operaciones con ganancia
                durante el año, tenés obligaciones fiscales en Argentina. La pregunta no es si declarar,
                sino cómo hacerlo correctamente.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué hay que declarar: el mapa completo
            </h2>
            <p>
              Las obligaciones fiscales relacionadas con crypto en Argentina caen en dos grandes
              categorías: tenencia de activos (patrimonio) y ganancias por operaciones. Son independientes
              y tienen tratamientos distintos.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  categoria: "Tenencia de crypto al cierre del año",
                  impuesto: "Bienes Personales",
                  detalle: "Si al 31 de diciembre tenías Bitcoin, Ethereum, USDT o cualquier otra criptomoneda, ese saldo forma parte de tu patrimonio y debe declararse en el impuesto a los Bienes Personales. Aplica aunque no hayas vendido nada durante el año.",
                  color: "border-dorado/20",
                },
                {
                  categoria: "Ganancias por venta o swap de crypto",
                  impuesto: "Impuesto a las Ganancias",
                  detalle: "Si compraste Bitcoin a $30,000 y lo vendiste a $60,000, la diferencia es ganancia de capital y está gravada. Lo mismo aplica si swapeaste una crypto por otra (por ejemplo, BTC por ETH): eso es una operación de compraventa a efectos fiscales.",
                  color: "border-verde/20",
                },
                {
                  categoria: "Rendimientos por staking o yield",
                  impuesto: "Impuesto a las Ganancias",
                  detalle: "Los intereses, recompensas de staking y rendimientos de protocolos DeFi son renta de capital y tributan como ganancias. El criterio de ARCA es claro: si generó un rendimiento, es renta gravada.",
                  color: "border-blue-400/20",
                },
                {
                  categoria: "Operaciones en el exterior",
                  impuesto: "Bienes Personales + Ganancias",
                  detalle: "Los activos en exchanges extranjeros (Binance, Kraken, Coinbase) también deben declararse. Argentina grava a sus residentes por renta mundial, no solo por activos locales.",
                  color: "border-red-400/20",
                },
              ].map((item) => (
                <div key={item.categoria} className={`p-6 bg-gris-medio rounded-xl border ${item.color}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-3 mb-3">
                    <p className="text-white font-black flex-1">{item.categoria}</p>
                    <span className="text-dorado text-xs font-bold border border-dorado/30 px-2 py-1 rounded-full shrink-0">{item.impuesto}</span>
                  </div>
                  <p className="text-white/55 text-base">{item.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              En qué formularios declarar: Bienes Personales y Ganancias
            </h2>
            <p>
              Los dos impuestos principales que involucran a las criptomonedas tienen formularios y
              lógicas distintas. Veamos cada uno:
            </p>

            <h3 className="text-white font-black text-xl mb-4 mt-8">
              Bienes Personales (Formulario F. 762/A)
            </h3>
            <p>
              Este impuesto grava el patrimonio neto al 31 de diciembre de cada año. Si superás el
              mínimo no imponible (que varía cada año por actualización), debés declarar. Las
              criptomonedas se incluyen en el rubro "Otros bienes en el país" (si están en exchanges
              locales) o "Bienes en el exterior" (si están en exchanges extranjeros o en wallets
              personales).
            </p>
            <p className="mt-4">
              Las alícuotas de Bienes Personales dependen del total del patrimonio declarado y si los
              activos están en Argentina o en el exterior. Los bienes en el exterior tienen alícuotas
              más altas, lo que es un incentivo implícito para declarar en exchanges locales.
            </p>

            <h3 className="text-white font-black text-xl mb-4 mt-8">
              Impuesto a las Ganancias (Formulario F. 711)
            </h3>
            <p>
              Ganancias se presenta anualmente y grava los ingresos del período fiscal. Las ganancias
              por venta de criptomonedas entran en la Cuarta Categoría como "Resultado por enajenación
              de moneda digital" desde la reforma tributaria de 2018.
            </p>
            <p className="mt-4">
              La alícuota es del 15% para ganancias en moneda extranjera y del 5% para ganancias en
              pesos. Dado que la mayoría de las operaciones crypto se denominan en dólares, en
              la práctica aplica el 15%.
            </p>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Punto crítico: una operación de BTC a USDT no es "mantener dólares", es una venta
                de Bitcoin. ARCA la trata como una enajenación de activo y genera obligación de
                declarar la ganancia o pérdida resultante.
              </p>
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo valuar los activos crypto: el método que usa ARCA
            </h2>
            <p>
              La valuación es uno de los temas más complejos y donde más errores se cometen. ARCA
              tiene criterios específicos que no siempre coinciden con el sentido común.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  titulo: "Para Bienes Personales: valor al cierre del 31/12",
                  desc: "Las criptomonedas se valúan al valor de cotización al último día hábil del año fiscal. Para activos que cotizan en exchanges locales, se usa la cotización del exchange. Para activos sin cotización local, se usa el valor de mercado internacional convertido al tipo de cambio oficial.",
                  icon: "📅",
                },
                {
                  titulo: "Conversión a pesos: tipo de cambio oficial",
                  desc: "ARCA utiliza el tipo de cambio oficial (no el MEP ni el blue) para convertir activos en moneda extranjera. Esto puede generar 'ganancias ficticias' en pesos cuando el dólar oficial sube aunque el precio del activo en USD no haya cambiado.",
                  icon: "💱",
                },
                {
                  titulo: "Costo de adquisición: promedio ponderado",
                  desc: "Para calcular la ganancia en Ganancias, se usa el costo de adquisición promedio ponderado. Si compraste Bitcoin en múltiples operaciones a distintos precios, el costo se calcula como el promedio de todas las compras, ponderado por cantidad.",
                  icon: "📊",
                },
                {
                  titulo: "Pérdidas: sí se pueden compensar",
                  desc: "Si en el mismo período fiscal tuviste pérdidas en crypto, podés compensarlas contra las ganancias de crypto. Las pérdidas de capital en moneda digital no se pueden compensar contra rentas de otras categorías (salarios, por ejemplo), pero sí contra ganancias de la misma categoría.",
                  icon: "📉",
                },
              ].map((item) => (
                <div key={item.titulo} className="flex gap-4 p-5 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-bold mb-2">{item.titulo}</p>
                    <p className="text-white/55 text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6">
              El registro de operaciones es fundamental. Necesitás el historial completo de todas tus
              compras, ventas y swaps con fecha, precio y cantidad. La mayoría de los exchanges permiten
              exportar este historial en CSV. Descargalo periódicamente — algunos exchanges eliminan el
              historial después de cierto tiempo.
            </p>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué exchanges están obligados a informar a ARCA
            </h2>
            <p>
              Aquí está el dato que muchos ignoran: los exchanges locales ya están reportando
              información de sus usuarios al fisco. No es algo que puede pasar — ya está pasando.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-red-400/20">
                <p className="text-red-400 text-xs uppercase tracking-widest mb-3 font-bold">Informan actualmente</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Lemon Cash</li>
                  <li>· Ripio</li>
                  <li>· Buenbit</li>
                  <li>· SatoshiTango</li>
                  <li>· Belo</li>
                  <li>· Bitso Argentina</li>
                  <li>· Decrypto</li>
                </ul>
              </div>
              <div className="p-5 bg-gris-medio rounded-xl border border-dorado/20">
                <p className="text-dorado text-xs uppercase tracking-widest mb-3 font-bold">Exchanges internacionales</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Binance: no reporta directamente pero coopera con solicitudes de ARCA</li>
                  <li>· Coinbase: sujeto a acuerdos de intercambio de información</li>
                  <li>· Kraken: similar a los anteriores</li>
                  <li>· Wallets personales: no hay reporte automático, pero los movimientos on-chain son públicos</li>
                </ul>
              </div>
            </div>

            <p className="mt-6">
              La blockchain es pública. Cualquier transacción on-chain queda registrada permanentemente
              y puede ser auditada. Las herramientas de análisis de blockchain (Chainalysis, Elliptic)
              ya las usan organismos fiscales de todo el mundo, incluyendo los de Argentina.
            </p>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cuándo presentar: el calendario fiscal que necesitás tener claro
            </h2>
            <p>
              Los vencimientos fiscales en Argentina varían cada año y dependen del CUIT del
              contribuyente. Como referencia general para 2026:
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  evento: "Cierre del período fiscal",
                  fecha: "31 de diciembre de 2025",
                  nota: "Fecha de corte para la valuación de tenencias en Bienes Personales",
                },
                {
                  evento: "Presentación Ganancias y Bienes Personales (personas físicas)",
                  fecha: "Junio 2026 (varía por CUIT)",
                  nota: "ARCA publica el cronograma exacto cada año. Verificá en afip.gob.ar con tu número de CUIT",
                },
                {
                  evento: "Anticipo anual de Bienes Personales",
                  fecha: "Junio del año siguiente",
                  nota: "Si debés impuesto, también hay anticipos que se abonan a lo largo del año",
                },
              ].map((item) => (
                <div key={item.evento} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex-1">
                      <p className="text-white font-bold">{item.evento}</p>
                      <p className="text-white/40 text-sm mt-1">{item.nota}</p>
                    </div>
                    <span className="text-dorado text-sm font-bold shrink-0">{item.fecha}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6">
              Los vencimientos se calculan según el penúltimo dígito del CUIT. ARCA publica el
              cronograma completo cada año en su sitio oficial. Configurá un recordatorio — las multas
              por presentación fuera de término son automáticas.
            </p>
          </section>

          {/* Sección 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Consecuencias de no declarar: lo que realmente puede pasar
            </h2>
            <p>
              "Total, nadie se entera" fue una estrategia razonable hasta 2020. En 2026, es una
              apuesta con probabilidades que no te convienen. Estas son las consecuencias concretas:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  consecuencia: "Multa por omisión de declaración",
                  nivel: "Automática",
                  desc: "El artículo 39 de la Ley 11.683 establece multas de $200 a $400 por cada omisión de presentación. Más los intereses resarcitorios del 5% mensual sobre el impuesto no ingresado.",
                  color: "text-dorado",
                },
                {
                  consecuencia: "Ajuste por diferencia de declaración",
                  nivel: "Si te detectan",
                  desc: "Si ARCA detecta inconsistencias entre lo que declaraste y lo que informaron los exchanges, puede hacer una determinación de oficio y ajustar el impuesto más multa del 50% al 150% del gravamen omitido.",
                  color: "text-red-400",
                },
                {
                  consecuencia: "Dificultades para justificar patrimonio",
                  nivel: "A largo plazo",
                  desc: "Si en algún momento querés comprar un inmueble, sacar un crédito o justificar ingresos ante el fisco, las crypto no declaradas se convierten en un problema. No podés justificar patrimonio con activos que 'no existen' fiscalmente.",
                  color: "text-red-400",
                },
                {
                  consecuencia: "Riesgo de evasión fiscal agravada",
                  nivel: "Casos grandes",
                  desc: "Si la diferencia entre lo declarado y lo real supera cierto umbral, puede configurarse el delito de evasión fiscal agravada con penas de prisión de 2 a 6 años. Para montos pequeños esto es improbable, pero para posiciones grandes es un riesgo real.",
                  color: "text-red-400",
                },
              ].map((item) => (
                <div key={item.consecuencia} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{item.consecuencia}</p>
                    <span className={`text-xs font-bold ${item.color}`}>{item.nivel}</span>
                  </div>
                  <p className="text-white/55 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 8 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo prepararte: el checklist antes de ir al contador
            </h2>
            <p>
              El contador es imprescindible para hacer la declaración correctamente. Pero llegás mucho
              mejor preparado — y pagás menos honorarios — si tenés toda la información ordenada de
              antemano. Esto es lo que necesitás juntar:
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Historial completo de operaciones de todos los exchanges que usás (en CSV o PDF)",
                "Saldo de cada activo al 31 de diciembre del año a declarar",
                "Precio de adquisición de cada posición (fecha y precio de compra)",
                "Extractos de wallets personales si tenés activos fuera de exchanges",
                "Registro de rendimientos por staking, yield farming o préstamos",
                "Estado de cuenta de exchanges internacionales si operás en el exterior",
                "Capturas de pantalla de saldos a fecha de cierre (por si el exchange no tiene historial completo)",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-verde font-bold shrink-0">✓</span>
                  <p className="text-white/65 text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="my-6 border-l-4 border-verde pl-6 bg-verde/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Consejo práctico: descargá el historial de operaciones de cada exchange una vez por mes
                o por trimestre. No esperes a diciembre porque algunos exchanges tienen límites de
                exportación histórica o cambian sus sistemas. Una hoja de cálculo simple con fecha,
                tipo de operación, activo, cantidad y precio en USD ya te salva la vida a fin de año.
              </p>
            </div>
          </section>

          {/* Sección 9 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Preguntas frecuentes sobre crypto e impuestos en Argentina
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "¿Tengo que declarar si solo compré y no vendí?",
                  a: "Sí. Si al 31 de diciembre tenías crypto con un valor que supera el mínimo no imponible de Bienes Personales, debés declararlo aunque no hayas vendido nada. Comprar y holdear genera obligación de declaración de patrimonio.",
                },
                {
                  q: "¿Las stablecoins (USDT, USDC) se declaran igual que Bitcoin?",
                  a: "Sí. Las stablecoins son criptomonedas a efectos fiscales. Si tenías $10,000 en USDT al 31/12, eso forma parte de tu patrimonio y debe declararse en Bienes Personales. Que sean pegged al dólar no las exime.",
                },
                {
                  q: "¿Qué pasa con mis crypto en una wallet de hardware (Ledger, Trezor)?",
                  a: "Deben declararse igual. La obligación fiscal depende de la tenencia, no del tipo de custodio. Que estén en tu Ledger no las hace invisibles al fisco — y la blockchain es pública.",
                },
                {
                  q: "¿Puedo deducir los fees de trading?",
                  a: "Las comisiones pagadas en las operaciones pueden computarse como parte del costo de adquisición o reducir la ganancia bruta. Tu contador puede ayudarte a computarlas correctamente según el tipo de operación.",
                },
                {
                  q: "¿Qué pasa si blanqueo ahora? ¿Puedo incluir mis crypto?",
                  a: "Argentina tuvo un régimen de blanqueo en 2024. Para 2026, las reglas pueden haber cambiado. Si tenés activos no declarados de períodos anteriores, consultá con un especialista en derecho tributario sobre las opciones de regularización vigentes.",
                },
              ].map((faq) => (
                <div key={faq.q} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-2">{faq.q}</p>
                  <p className="text-white/55 text-base">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Hablá con un contador, pero llegá preparado
            </h2>
            <p>
              El sistema impositivo argentino es complejo, cambia con frecuencia y la aplicación a
              activos crypto tiene zonas grises reales. Ningún artículo reemplaza al asesoramiento
              profesional de un contador especializado en criptomonedas.
            </p>
            <p className="mt-4">
              Pero hay una diferencia enorme entre llegar al contador con un carpeta de datos ordenados
              y saber las preguntas correctas, versus llegar diciendo "tengo algo de crypto, no sé
              exactamente cuánto, ni cuándo lo compré". El primero paga honorarios razonables y
              declara bien. El segundo paga más y corre el riesgo de hacerlo mal de todas formas.
            </p>
            <p className="mt-4">
              El crypto en Argentina llegó para quedarse. La regulación también. La pregunta no es si
              involucrarse con el sistema fiscal sino cómo hacerlo de la manera más inteligente posible.
              Y para eso, la información es tu primer activo.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> seguimos de cerca los cambios
              regulatorios que afectan al mercado crypto en Argentina y LATAM. Cada semana, lo más
              importante sin ruido.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">El newsletter de crypto para LATAM que te explica lo que importa</p>
          <p className="text-white/50 mb-6">
            Regulación, mercados y oportunidades concretas. Cada jueves. Sin spam. Gratis para siempre.
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
            <Link href="/blog/como-funciona-el-dinero-crypto" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Cómo funciona el dinero crypto: guía completa para principiantes en LATAM</p>
            </Link>
            <Link href="/blog/wallets-crypto-cuales-son-mejores" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Las mejores wallets de crypto en 2026: guía completa para LATAM</p>
            </Link>
          </div>
        </div>

      </div>

      <ArticleCTA
        source="blog_declarar_crypto_argentina"
        hook="¿Más como esto sobre impuestos crypto en LATAM?"
      />

      <div className="mt-24">
        <Newsletter />
      </div>
    </div>
  );
}
