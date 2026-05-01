import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Bitcoin Halving: qué es, cuándo ocurre y por qué importa para tu inversión",
  description:
    "Todo sobre el Bitcoin Halving: la mecánica del evento cada 210,000 bloques, el historial de los 4 halvings con datos de precio, el halving de 2024 y cómo posicionarse inteligentemente.",
  openGraph: {
    title: "Bitcoin Halving: qué es, cuándo ocurre y por qué importa para tu inversión",
    description:
      "La guía definitiva sobre el Bitcoin Halving: mecánica, historial de precios, datos del halving 2024 y estrategias de posicionamiento para inversores en LATAM.",
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
            Bitcoin Halving: qué es, cuándo ocurre y{" "}
            <span className="text-dorado">por qué importa</span> para tu inversión
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Cada cuatro años aproximadamente, la cantidad de Bitcoin nuevo que se crea se divide exactamente
            a la mitad. Este evento, escrito en el código original de Satoshi Nakamoto, ha marcado los
            ciclos de precio de Bitcoin desde 2012. No es magia, es matemática. Esta guía explica la
            mecánica, el historial y cómo pensar tu posición antes del próximo ciclo.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es el Bitcoin Halving: la mecánica en detalle
            </h2>
            <p>
              Bitcoin funciona sobre una blockchain mantenida por mineros: computadoras especializadas
              que procesan transacciones y aseguran la red. Como recompensa por este trabajo, los mineros
              reciben Bitcoin nuevo. Esto es la única forma en que Bitcoin nuevo entra en circulación.
            </p>
            <p className="mt-4">
              Satoshi Nakamoto diseñó el sistema con una regla fundamental: cada 210,000 bloques
              procesados, la recompensa por bloque se reduce exactamente a la mitad. Como un bloque se
              mina aproximadamente cada 10 minutos, 210,000 bloques toman alrededor de cuatro años.
            </p>
            <p className="mt-4">
              A este evento de reducción a la mitad se lo llama "halving" (del inglés "to halve",
              dividir por dos). Es automático, predecible y nadie puede modificarlo sin el consenso de
              toda la red.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                La lógica detrás del diseño: con un suministro máximo fijo de 21 millones de BTC y
                una emisión que se reduce a la mitad cada cuatro años, Bitcoin está programado para
                volverse cada vez más escaso con el tiempo. La escasez programada es uno de los
                argumentos más sólidos para su uso como reserva de valor.
              </p>
            </div>

            <h3 className="text-white font-black text-xl mb-4 mt-8">
              La matemática del suministro de Bitcoin
            </h3>
            <div className="space-y-3">
              {[
                { bloque: "Bloques 1 a 210,000 (2009-2012)", recompensa: "50 BTC por bloque", periodo: "Primeros 4 años" },
                { bloque: "Bloques 210,001 a 420,000 (2012-2016)", recompensa: "25 BTC por bloque", periodo: "Primer halving" },
                { bloque: "Bloques 420,001 a 630,000 (2016-2020)", recompensa: "12.5 BTC por bloque", periodo: "Segundo halving" },
                { bloque: "Bloques 630,001 a 840,000 (2020-2024)", recompensa: "6.25 BTC por bloque", periodo: "Tercer halving" },
                { bloque: "Bloques 840,001 a 1,050,000 (2024-2028)", recompensa: "3.125 BTC por bloque", periodo: "Cuarto halving (actual)" },
                { bloque: "Bloques 1,050,001 a 1,260,000 (2028-2032)", recompensa: "1.5625 BTC por bloque", periodo: "Quinto halving (próximo)" },
              ].map((row) => (
                <div key={row.bloque} className="flex flex-col md:flex-row md:items-center gap-3 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-white/40 text-sm flex-1">{row.bloque}</span>
                  <span className="text-dorado font-bold text-sm shrink-0">{row.recompensa}</span>
                  <span className="text-verde text-xs font-bold shrink-0">{row.periodo}</span>
                </div>
              ))}
            </div>

            <p className="mt-6">
              El último Bitcoin será minado alrededor del año 2140. A partir de ese punto, los mineros
              solo recibirán fees de transacción como recompensa. Esta certeza matemática es una de las
              características más únicas de Bitcoin como activo.
            </p>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El historial de los 4 halvings: qué pasó con el precio en cada uno
            </h2>
            <p>
              Bitcoin tuvo cuatro halvings hasta 2026. Los patrones de precio en cada ciclo son
              notablemente similares, aunque con diferencias importantes que hay que entender antes
              de sacar conclusiones.
            </p>

            <div className="mt-6 space-y-6">

              <div className="p-6 bg-gris-medio rounded-xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="shrink-0">
                    <span className="text-white/20 font-mono text-sm">#1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black text-lg">Primer Halving: 28 de noviembre de 2012</h3>
                    <p className="text-white/40 text-sm">Recompensa: de 50 a 25 BTC por bloque</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Precio en el halving</p>
                    <p className="text-white font-bold">~$12</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Máximo del ciclo</p>
                    <p className="text-verde font-bold">~$1,200</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Rendimiento</p>
                    <p className="text-verde font-bold">+9,900%</p>
                  </div>
                </div>
                <p className="text-white/55 text-base">
                  El mercado de Bitcoin era minúsculo. El precio pasó de $12 a $1,200 en el año
                  siguiente al halving, impulsado principalmente por demanda china y el ciclo de
                  medios de comunicación. La correlación con el halving era más anecdótica que
                  causal dado el tamaño del mercado.
                </p>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="shrink-0">
                    <span className="text-white/20 font-mono text-sm">#2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black text-lg">Segundo Halving: 9 de julio de 2016</h3>
                    <p className="text-white/40 text-sm">Recompensa: de 25 a 12.5 BTC por bloque</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Precio en el halving</p>
                    <p className="text-white font-bold">~$650</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Máximo del ciclo</p>
                    <p className="text-verde font-bold">~$20,000</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Rendimiento</p>
                    <p className="text-verde font-bold">+2,970%</p>
                  </div>
                </div>
                <p className="text-white/55 text-base">
                  El máximo de $20,000 llegó en diciembre de 2017, aproximadamente 18 meses después
                  del halving. Este ciclo marcó la entrada masiva de retail a través de exchanges como
                  Coinbase y el surgimiento del fenómeno ICO. El patrón "halving → bull run → corrección"
                  quedó establecido en la mente del mercado.
                </p>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="shrink-0">
                    <span className="text-white/20 font-mono text-sm">#3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black text-lg">Tercer Halving: 11 de mayo de 2020</h3>
                    <p className="text-white/40 text-sm">Recompensa: de 12.5 a 6.25 BTC por bloque</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Precio en el halving</p>
                    <p className="text-white font-bold">~$8,800</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Máximo del ciclo</p>
                    <p className="text-verde font-bold">~$69,000</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Rendimiento</p>
                    <p className="text-verde font-bold">+680%</p>
                  </div>
                </div>
                <p className="text-white/55 text-base">
                  Este ciclo tuvo dos picos: $65,000 en abril 2021 y $69,000 en noviembre 2021. Coincidió
                  con la adopción institucional masiva (MicroStrategy, Tesla, ETFs en Canadá) y el
                  contexto de pandemia con inyección monetaria sin precedentes. El rendimiento fue menor
                  en términos porcentuales, lo que confirma la ley de los grandes números.
                </p>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/20">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="shrink-0">
                    <span className="text-dorado/40 font-mono text-sm">#4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black text-lg">Cuarto Halving: 19 de abril de 2024</h3>
                    <p className="text-white/40 text-sm">Recompensa: de 6.25 a 3.125 BTC por bloque</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Precio en el halving</p>
                    <p className="text-white font-bold">~$63,000</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Máximo a Abr 2026</p>
                    <p className="text-verde font-bold">~$109,000</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg text-center">
                    <p className="text-white/30 text-xs mb-1">Contexto único</p>
                    <p className="text-dorado font-bold">ETFs spot + institucional</p>
                  </div>
                </div>
                <p className="text-white/55 text-base">
                  El cuarto halving fue único porque ocurrió en un contexto sin precedentes: los ETFs
                  spot de Bitcoin en EEUU fueron aprobados en enero de 2024, creando demanda institucional
                  masiva antes del evento. Bitcoin superó sus máximos históricos meses antes del halving,
                  rompiendo el patrón histórico. En enero de 2025, Bitcoin superó los $100,000 por primera
                  vez, con picos que tocaron los $109,000.
                </p>
              </div>

            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué el halving importa: la lógica económica
            </h2>
            <p>
              El halving importa porque cambia la dinámica de oferta y demanda de manera predecible.
              Si la demanda se mantiene constante y la oferta nueva se reduce a la mitad, el precio
              tiende a subir. Es oferta y demanda básica, pero aplicada a un activo con oferta
              programáticamente constrained.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  titulo: "Presión vendedora de mineros se reduce",
                  desc: "Los mineros reciben Bitcoin como recompensa y muchos lo venden para cubrir sus costos operativos (electricidad, hardware). Con el halving, la cantidad de BTC que los mineros pueden vender se reduce a la mitad. Menos presión vendedora estructural.",
                },
                {
                  titulo: "El stock-to-flow ratio aumenta",
                  desc: "El ratio stock-to-flow mide cuántos años de producción actual se necesitarían para duplicar el suministro existente. Después de cada halving, este ratio se duplica, haciendo a Bitcoin más 'escaso' que el oro en términos de este modelo.",
                },
                {
                  titulo: "El evento es predecible y funciona como señal",
                  desc: "El halving genera atención mediática masiva que introduce nueva demanda retail. El efecto reflexivo es real: el anticipar que 'el halving históricamente sube el precio' hace que la gente compre antes, lo cual efectivamente sube el precio.",
                },
                {
                  titulo: "La historia de precios crea narrativa poderosa",
                  desc: "Tres ciclos de bull runs post-halving crearon una narrativa que se auto-cumple parcialmente. Los ciclos de cuatro años se convirtieron en el marco temporal de referencia de miles de inversores y traders institucionales.",
                },
              ].map((item) => (
                <div key={item.titulo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold mb-2">{item.titulo}</p>
                  <p className="text-white/55 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué el halving NO es una predicción mágica
            </h2>
            <p>
              Hay que ser honestos sobre las limitaciones del análisis basado en halvings. El
              patrón histórico es real pero no garantiza nada:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  mito: "Solo tenemos 4 halvings de datos",
                  realidad: "Cuatro puntos de datos no es suficiente para establecer una ley empírica robusta. Cada ciclo ocurrió en condiciones macro muy distintas: crisis financiera global, pandemia, inflación post-pandemia. El contexto importa tanto como el halving.",
                },
                {
                  mito: "Los rendimientos decrecen con cada halving",
                  realidad: "El primer halving generó +9,900%. El cuarto generó +100-200%. Con un mercado de más de $1 trillion, los movimientos del 500-1000% se vuelven matemáticamente imposibles. Cuanto mayor el mercado, menores los retornos potenciales.",
                },
                {
                  mito: "El timing del máximo es impredecible",
                  realidad: "Los máximos de los ciclos anteriores llegaron 12 a 18 meses después del halving. Pero el cuarto ciclo (2024) rompió el patrón: el máximo llegó antes de 12 meses. Los patrones históricos son guías, no calendario.",
                },
                {
                  mito: "Otros factores pueden dominar al halving",
                  realidad: "Regulación adversa, crisis de confianza (como FTX), contexto macro de suba de tasas o recesión global pueden anular o retrasar el efecto del halving. El halving de 2020 ocurrió durante el colapso de los mercados por COVID y tardó meses en impactar.",
                },
              ].map((item) => (
                <div key={item.mito} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-red-400 font-bold text-sm mb-1">Mito común:</p>
                  <p className="text-white font-bold mb-2">{item.mito}</p>
                  <p className="text-verde/70 font-semibold text-sm mb-1">Realidad:</p>
                  <p className="text-white/55 text-base">{item.realidad}</p>
                </div>
              ))}
            </div>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Conclusión honesta: el halving es un catalizador real pero no un oráculo. Es un
                evento positivo para la estructura de oferta/demanda de Bitcoin. No es una garantía
                de que el precio va a subir, y menos en un timeline específico.
              </p>
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El halving de 2024: datos concretos y contexto
            </h2>
            <p>
              El cuarto halving ocurrió el 19 de abril de 2024 en el bloque número 840,000. Fue el
              evento más anticipado de la historia de Bitcoin, transmitido en vivo por miles de canales
              y con cobertura de medios mainstream de todo el mundo.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  dato: "Fecha exacta",
                  valor: "19 de abril de 2024, 00:09 UTC",
                  desc: "Bloque #840,000",
                },
                {
                  dato: "Recompensa anterior",
                  valor: "6.25 BTC por bloque",
                  desc: "~$390,000 por bloque al precio de ese día",
                },
                {
                  dato: "Recompensa actual",
                  valor: "3.125 BTC por bloque",
                  desc: "~$195,000 por bloque al precio de ese día",
                },
                {
                  dato: "Contexto único",
                  valor: "ETFs spot aprobados 3 meses antes",
                  desc: "BlackRock, Fidelity y otros acumulando billones en BTC. Primera vez que el halving coincidió con demanda institucional directa.",
                },
                {
                  dato: "Precio al momento del halving",
                  valor: "~$63,000",
                  desc: "Ya cerca de máximos históricos, rompiendo el patrón habitual de halving en zona de acumulación",
                },
                {
                  dato: "Máximo post-halving",
                  valor: "~$109,000 (enero 2025)",
                  desc: "Aproximadamente 9 meses después del halving. Ciclo más comprimido que los anteriores.",
                },
              ].map((item) => (
                <div key={item.dato} className="flex flex-col md:flex-row md:items-center gap-3 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex-1">
                    <p className="text-white/40 text-xs uppercase tracking-widest">{item.dato}</p>
                    <p className="text-white font-bold">{item.valor}</p>
                  </div>
                  <p className="text-white/40 text-sm md:text-right md:max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo posicionarse: el enfoque inteligente para el ciclo actual
            </h2>
            <p>
              En 2026, estamos en la parte media-tardía del cuarto ciclo post-halving. Las estrategias
              óptimas son muy distintas según el perfil de cada inversor:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  perfil: "Principiante / primera exposición a BTC",
                  estrategia: "Dollar Cost Averaging (DCA)",
                  detalle: "Comprar una cantidad fija de Bitcoin cada semana o mes, independientemente del precio. Elimina la presión de hacer timing del mercado. A largo plazo, el precio de entrada promedio tiende a ser razonable en un activo que históricamente ha tenido tendencia alcista.",
                  horizonte: "12-36 meses",
                  color: "border-verde/20",
                },
                {
                  perfil: "Inversor con algo de experiencia",
                  estrategia: "Core position + reserva para correcciones",
                  detalle: "Mantener un 60-70% de la posición objetivo siempre invertida y guardar el 30-40% para compras de oportunidad en correcciones del 20-30%. En ciclos post-halving, suele haber al menos una corrección significativa antes del máximo.",
                  horizonte: "6-24 meses",
                  color: "border-dorado/20",
                },
                {
                  perfil: "Inversor conservador con enfoque de largo plazo",
                  estrategia: "Hold y no mirar el precio",
                  detalle: "La estrategia más simple históricamente más efectiva: comprar Bitcoin, guardarlo en una wallet de hardware, y no tocarlo por 4-8 años. Evita las decisiones emocionales durante la volatilidad. Requiere convicción en el activo.",
                  horizonte: "48+ meses",
                  color: "border-blue-400/20",
                },
              ].map((item) => (
                <div key={item.perfil} className={`p-6 bg-gris-medio rounded-xl border ${item.color}`}>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{item.perfil}</p>
                  <p className="text-white font-black text-lg mb-3">{item.estrategia}</p>
                  <p className="text-white/55 text-base mb-3">{item.detalle}</p>
                  <p className="text-dorado text-sm font-bold">Horizonte típico: {item.horizonte}</p>
                </div>
              ))}
            </div>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Lo que NO hacer: intentar vender cerca del máximo y recomprar cerca del mínimo.
                Casi nadie lo logra consistentemente. Los estudios muestran que los inversores que
                intentan hacer timing del mercado en Bitcoin obtienen peores resultados que los que
                simplemente compraron y mantuvieron.
              </p>
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El halving es parte de la historia de Bitcoin, no la historia completa
            </h2>
            <p>
              El halving es uno de los eventos más únicos en la historia financiera: un ajuste de
              política monetaria completamente predecible, verificable por cualquiera y que nadie puede
              modificar unilateralmente. No existe ningún banco central que opere con esa transparencia.
            </p>
            <p className="mt-4">
              Pero el halving no es una máquina de hacer dinero automática. El precio de Bitcoin depende
              de la demanda global, del contexto macro, de la regulación, del sentiment del mercado y
              de docenas de factores más. El halving es un viento a favor, no un garantía.
            </p>
            <p className="mt-4">
              La forma más inteligente de incorporar el halving en tu tesis de inversión es como uno de
              varios factores favorables a largo plazo, no como la única razón para comprar ni como un
              calendario preciso de cuándo comprar y vender.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> seguimos los ciclos de Bitcoin
              y las tendencias del mercado crypto para darte el contexto que necesitás para tomar
              decisiones informadas. Cada jueves, sin predicciones de precio y con datos reales.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">El análisis de Bitcoin que no te miente sobre predicciones de precio</p>
          <p className="text-white/50 mb-6">
            Datos, contexto y análisis honesto cada jueves. Sin bombas, sin FOMO, sin predicciones vacías.
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
              <p className="text-white font-bold mt-2 leading-tight">Cómo funciona el dinero crypto: guía completa para principiantes</p>
            </Link>
            <Link href="/blog/wallets-crypto-cuales-son-mejores" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Las mejores wallets de crypto en 2026: guía completa para LATAM</p>
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
