import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Impuestos sobre crypto por país: Argentina, México, Colombia y España 2026",
  description:
    "Guía completa de impuestos crypto en Argentina (ARCA), México (SAT), Colombia (DIAN) y España (IRPF). Cuándo declarar, qué declarar y herramientas para llevar el registro.",
  openGraph: {
    title: "Impuestos sobre crypto por país: Argentina, México, Colombia y España 2026",
    description:
      "Cómo tributa crypto en los 4 principales países hispanohablantes: Argentina, México, Colombia y España. Con tabla comparativa y herramientas prácticas.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="impuestos-crypto-por-pais-article"
        data={[
          articleSchema({
            title: "Impuestos sobre crypto por país: Argentina, México, Colombia y España 2026",
            description: "Guía completa de impuestos crypto en Argentina (ARCA), México (SAT), Colombia (DIAN) y España (IRPF). Cuándo declarar, qué declarar y herramientas para llevar el registro.",
            slug: "impuestos-crypto-por-pais",
            publishedAt: "2025-09-01",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Impuestos sobre crypto por país: Argentina, México, Colombia y Espa…", url: "/blog/impuestos-crypto-por-pais" },
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
            <span className="text-white/20 text-xs">· 15 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Impuestos sobre crypto por país:{" "}
            <span className="text-dorado">Argentina, México, Colombia y España 2026</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            "¿Tengo que declarar mi crypto?" es la pregunta que más evitan hacerse los holders de
            criptomonedas en el mundo hispanohablante. La respuesta es casi siempre sí — con matices
            importantes según el país donde vivís. Esta guía desglosa la realidad fiscal de los cuatro
            principales mercados hispanohablantes con información actualizada a 2026.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 — Introducción */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué declarar crypto ya no es opcional
            </h2>
            <p>
              El argumento de "las crypto son anónimas y nadie sabe" murió con la regulación. Los
              exchanges con KYC (identificación de usuario) están obligados a reportar información
              a las autoridades fiscales. En Europa, la directiva DAC8 obliga a los exchanges a
              compartir datos de sus usuarios con los fiscos de la UE desde 2026. En LATAM, Argentina,
              México y Colombia ya tienen marcos legales que incluyen crypto en su regulación.
            </p>
            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Importante: este artículo tiene fines educativos e informativos. No constituye
                asesoramiento fiscal. Para tu situación específica, consultá con un contador especializado
                en criptomonedas en tu país.
              </p>
            </div>
            <p>
              Lo que sí podés hacer con esta guía: entender el marco general, saber qué preguntas
              hacerle a tu contador y preparar la documentación necesaria antes de la declaración.
            </p>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Sección 2 — Tabla comparativa */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Tabla comparativa: cómo tributa crypto en cada país
            </h2>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white/40 font-semibold">País</th>
                    <th className="text-left py-3 px-3 text-white/40 font-semibold">Organismo</th>
                    <th className="text-left py-3 px-3 text-white/40 font-semibold">Impuesto principal</th>
                    <th className="text-left py-3 pl-3 text-white/40 font-semibold">Tasa aproximada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { pais: "Argentina", org: "ARCA", imp: "Bienes Personales + Ganancias", tasa: "1.25–2.25% / 5–35%" },
                    { pais: "México", org: "SAT", imp: "ISR (Ingreso ordinario)", tasa: "1.92–35%" },
                    { pais: "Colombia", org: "DIAN", imp: "Renta + Ganancias Ocasionales", tasa: "10–39% / 15%" },
                    { pais: "España", org: "AEAT", imp: "IRPF (Ganancia Patrimonial)", tasa: "19–30%" },
                  ].map((row) => (
                    <tr key={row.pais}>
                      <td className="py-3 pr-4 text-white font-bold">{row.pais}</td>
                      <td className="py-3 px-3 text-dorado font-semibold">{row.org}</td>
                      <td className="py-3 px-3 text-white/60">{row.imp}</td>
                      <td className="py-3 pl-3 text-verde/80 font-semibold">{row.tasa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-white/40 text-sm">* Las tasas son orientativas. Las tasas exactas dependen de tu situación individual y los montos involucrados.</p>
          </section>

          {/* Sección 3 — Argentina */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-dorado/10 text-dorado border-dorado/20 uppercase tracking-widest">
                Argentina
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Argentina: ARCA, Bienes Personales y Ganancias
            </h2>
            <p>
              Argentina tiene uno de los marcos legales más complejos de la región para crypto.
              La Administración Federal de Ingresos Públicos fue reemplazada por <strong className="text-white">ARCA</strong>
              {" "}(Agencia de Recaudación y Control Aduanero) en 2024, pero las obligaciones
              impositivas son esencialmente las mismas.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-dorado/20">
                <h3 className="text-dorado font-black text-lg mb-3">Bienes Personales</h3>
                <p className="text-white/65 text-base mb-3">
                  Las criptomonedas son bienes que se declaran en el impuesto a los Bienes Personales
                  al 31 de diciembre de cada año. Se valúan en pesos al tipo de cambio oficial de esa fecha.
                  El impuesto aplica sobre el patrimonio total (no solo crypto) que supere el mínimo no imponible.
                </p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Alícuota: 1.25% a 2.25% sobre el excedente del mínimo no imponible</li>
                  <li>· Se declaran incluso si no hubo ventas durante el año</li>
                  <li>· Los bienes en el exterior tienen tasas superiores</li>
                  <li>· Se valúan en pesos al tipo de cambio oficial del Banco Nación al 31/12</li>
                </ul>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-dorado/20">
                <h3 className="text-dorado font-black text-lg mb-3">Impuesto a las Ganancias</h3>
                <p className="text-white/65 text-base mb-3">
                  Cuando vendés crypto y obtenés una ganancia, esa ganancia queda sujeta al Impuesto
                  a las Ganancias. Desde la reforma de 2023, los rendimientos financieros (incluidas
                  ganancias en activos digitales) tributan en la cedular de la 4ta categoría.
                </p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Las ganancias en pesos tributan al 5%</li>
                  <li>· Las ganancias en moneda dura (dólar, crypto que funcione como reserva) tributan al 15%</li>
                  <li>· El costo se actualiza por inflación (ajuste por inflación impositivo)</li>
                  <li>· Las pérdidas en un año se pueden compensar con ganancias futuras del mismo tipo</li>
                </ul>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black text-lg mb-3">Qué declarar en Argentina</h3>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Todas las criptomonedas que tengas al 31/12 (para Bienes Personales)</li>
                  <li>· Todas las ventas, swaps y conversiones (evento gravado en Ganancias)</li>
                  <li>· Rendimientos de staking, lending y yield farming</li>
                  <li>· Airdrops con valor de mercado significativo (criterio discutido)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 4 — México */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-verde/10 text-verde border-verde/20 uppercase tracking-widest">
                México
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              México: SAT e Impuesto Sobre la Renta (ISR)
            </h2>
            <p>
              En México, la Ley Fintech de 2018 fue pionera en regular los activos virtuales. El
              <strong className="text-white"> Servicio de Administración Tributaria (SAT)</strong> trata
              a las criptomonedas como activos de carácter no-financiero, y las ganancias generadas
              por su compra-venta tributan bajo el Impuesto Sobre la Renta (ISR).
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-verde/20">
                <h3 className="text-verde font-black text-lg mb-3">Cómo tributan las ganancias en México</h3>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Las ganancias de crypto se suman al ingreso ordinario</li>
                  <li>· La tasa del ISR en México va de 1.92% a 35% según el nivel de ingresos</li>
                  <li>· El costo de adquisición se puede deducir de la ganancia (costo promedio)</li>
                  <li>· Las pérdidas se pueden deducir contra otras ganancias del mismo tipo en el año</li>
                  <li>· Los exchanges con operación en México están obligados a reportar operaciones al SAT</li>
                </ul>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black text-lg mb-3">Eventos que generan obligación fiscal en México</h3>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Venta de crypto por pesos o dólares</li>
                  <li>· Intercambio de una crypto por otra (swap)</li>
                  <li>· Uso de crypto para pagar bienes o servicios</li>
                  <li>· Minería (se tributa como ingreso el valor de mercado al momento de recibir)</li>
                  <li>· Staking y rendimientos (criterio en construcción)</li>
                </ul>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black text-lg mb-3">Declaración anual en México</h3>
                <p className="text-white/55 text-sm">
                  La declaración anual del ISR se presenta entre abril y mayo del año siguiente al ejercicio.
                  Si trabajás de forma independiente o tenés ingresos superiores a 400,000 pesos al año,
                  estás obligado a presentarla. Para crypto, es fundamental llevar un registro detallado
                  de todas las operaciones con fecha, precio de compra, precio de venta y monto.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 5 — Colombia */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-dorado/10 text-dorado border-dorado/20 uppercase tracking-widest">
                Colombia
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Colombia: DIAN y Ganancias Ocasionales
            </h2>
            <p>
              Colombia tiene un tratamiento fiscal interesante para crypto: las ganancias se pueden
              clasificar como <strong className="text-white">renta ordinaria</strong> o como
              <strong className="text-white"> ganancias ocasionales</strong> dependiendo de si se
              trata de una actividad habitual (trading activo) o una ganancia esporádica (holding y venta).
              Esta distinción importa porque tienen tasas muy distintas.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-dorado/20">
                <h3 className="text-dorado font-black text-lg mb-3">Ganancias Ocasionales — 15%</h3>
                <p className="text-white/65 text-base mb-3">
                  Si la actividad con crypto no es habitual (compraste, sostuviste y vendiste),
                  la ganancia califica como ganancia ocasional con una tasa del 15% sobre la ganancia.
                  Esta es la categoría más favorable para la mayoría de los holders.
                </p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Aplica a activos mantenidos por más de 2 años (criterio en revisión para crypto)</li>
                  <li>· Tasa fija del 15% sobre la ganancia neta</li>
                  <li>· Las pérdidas ocasionales solo se pueden compensar con ganancias ocasionales</li>
                </ul>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-dorado/20">
                <h3 className="text-dorado font-black text-lg mb-3">Renta Ordinaria — hasta 39%</h3>
                <p className="text-white/65 text-base mb-3">
                  Si la actividad en crypto es habitual o constituye el negocio principal, se tributa
                  como renta ordinaria con las tasas progresivas del impuesto de renta colombiano.
                </p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Tasas progresivas: 0% hasta $47M COP, luego 19%, 28%, 33%, 35%, 37%, 39%</li>
                  <li>· Aplica si el trading crypto es actividad económica habitual</li>
                  <li>· Los ingresos de staking y minería suelen caer en esta categoría</li>
                </ul>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black text-lg mb-3">Patrimonio y declaración en Colombia</h3>
                <p className="text-white/55 text-sm">
                  Si tu patrimonio bruto supera las 4,500 UVT (aprox. $235M COP en 2026) o tus ingresos
                  brutos superan las 1,400 UVT (aprox. $73M COP), estás obligado a declarar. Las crypto
                  se incluyen como activos patrimoniales. La DIAN ha incrementado el cruce de información
                  con exchanges que operan en el país.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 6 — España */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-white/10 text-white/70 border-white/20 uppercase tracking-widest">
                España
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              España: IRPF y Ganancias Patrimoniales
            </h2>
            <p>
              España tiene uno de los marcos regulatorios más avanzados de Europa para crypto. La
              Agencia Tributaria (AEAT) clasifica las ganancias en criptomonedas como
              <strong className="text-white"> ganancias patrimoniales</strong> en el IRPF, con tasas
              que van del 19% al 30% según el monto de la ganancia.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-white/20">
                <h3 className="text-white font-black text-lg mb-3">Escala del IRPF para ganancias patrimoniales en 2026</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm mt-2">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 pr-4 text-white/40 font-semibold">Ganancia</th>
                        <th className="text-right py-2 text-white/40 font-semibold">Tasa IRPF</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { rango: "Hasta 6,000 €", tasa: "19%" },
                        { rango: "6,000 € – 50,000 €", tasa: "21%" },
                        { rango: "50,000 € – 200,000 €", tasa: "23%" },
                        { rango: "200,000 € – 300,000 €", tasa: "27%" },
                        { rango: "Más de 300,000 €", tasa: "30%" },
                      ].map((row) => (
                        <tr key={row.rango}>
                          <td className="py-2 pr-4 text-white/60">{row.rango}</td>
                          <td className="text-right py-2 text-verde/80 font-semibold">{row.tasa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black text-lg mb-3">Obligaciones específicas en España</h3>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Modelo 721: declaración informativa de criptomonedas en el extranjero (obligatoria si superan 50,000 €)</li>
                  <li>· Modelo 100 (IRPF): donde se incluyen las ganancias y pérdidas de crypto</li>
                  <li>· Los exchanges radicados en la UE reportan a la AEAT desde 2026 (DAC8)</li>
                  <li>· El método FIFO es el requerido para calcular coste de adquisición</li>
                  <li>· Las pérdidas se pueden compensar con ganancias de la misma naturaleza en ese año y los 4 siguientes</li>
                </ul>
              </div>

              <div className="p-5 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black text-lg mb-3">Cuándo no se genera hecho imponible en España</h3>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Mover crypto entre tus propias wallets (mismo titular)</li>
                  <li>· Tener crypto sin vender (solo tenencia)</li>
                  <li>· Los airdrops recibidos no tributan en el momento de recibirlos (solo cuando se venden)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 7 — Herramientas */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Herramientas para calcular y declarar tus impuestos crypto
            </h2>
            <p>
              El desafío práctico de declarar crypto no es conceptual — es operativo. Si operaste
              en múltiples exchanges y wallets, calcular tus ganancias y pérdidas manualmente es
              casi imposible. Para eso existen herramientas especializadas:
            </p>

            <div className="mt-6 p-6 bg-gris-medio rounded-xl border border-dorado/30">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-white font-black text-xl">Koinly</h3>
                  <p className="text-dorado text-sm font-bold">La herramienta que usamos para llevar el registro</p>
                </div>
              </div>
              <p className="text-white/65 mb-4">
                Koinly conecta con más de 700 exchanges y blockchains vía API. Importa automáticamente
                todas tus transacciones, aplica el método de coste correcto para tu país (FIFO, LIFO,
                coste medio), identifica los eventos imponibles y genera informes listos para presentar
                a la autoridad fiscal de tu país. Tiene soporte específico para Argentina, México,
                Colombia y España con los formularios correspondientes.
              </p>
              <ul className="space-y-2 text-white/55 text-sm mb-5">
                <li>· Importación automática desde Binance, Coinbase, Bybit, Bitso, Lemon y más de 700 fuentes</li>
                <li>· Soporte para wallets (MetaMask, Trust Wallet, wallets de hardware)</li>
                <li>· Informes para Argentina, México, Colombia y España</li>
                <li>· Plan gratuito hasta 10,000 transacciones (revisar en el momento)</li>
                <li>· Ahorra decenas de horas vs. llevar el registro a mano</li>
              </ul>
              <a
                href="https://koinly.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-dorado text-oscuro font-black px-6 py-3 rounded-full hover:bg-dorado/90 transition-colors text-sm"
              >
                Probar Koinly →
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  nombre: "CoinTracking",
                  desc: "Alternativa con historial extenso. Más complejo pero muy poderoso para traders profesionales.",
                },
                {
                  nombre: "CryptoTaxCalculator",
                  desc: "Buena opción con soporte para LATAM. Interfaz más amigable para usuarios no técnicos.",
                },
                {
                  nombre: "Planilla manual",
                  desc: "Si operás en pocos exchanges y tenés pocas transacciones, una planilla Google Sheets puede alcanzar.",
                },
                {
                  nombre: "Contador especializado",
                  desc: "Para montos significativos, la inversión en un profesional especializado en crypto vale la pena.",
                },
              ].map((item) => (
                <div key={item.nombre} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-2">{item.nombre}</p>
                  <p className="text-white/55 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El costo de no declarar es mayor que el impuesto
            </h2>
            <p>
              La tentación de ignorar los impuestos crypto es comprensible. Pero los riesgos de hacerlo
              son significativos: multas por no declarar, intereses acumulados, y en casos de montos
              importantes, posibles consecuencias penales por evasión.
            </p>
            <p className="mt-4">
              La buena noticia: la mayoría de los países tiene mecanismos de regularización voluntaria
              que permiten ponerse al día con penalidades reducidas. Y si empezás a llevar el registro
              desde ahora, el problema de las declaraciones futuras es mucho más manejable.
            </p>
            <p className="mt-4">
              La regla práctica más simple: tratá cada venta, swap o conversión de crypto como un
              evento que puede generar obligación fiscal, y registralo en el momento. Reconstruir el
              historial después es mucho más costoso que llevarlo desde el principio.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> seguimos de cerca los cambios
              regulatorios en crypto para LATAM y España. El marco legal sigue evolucionando — y estar
              informado es la mejor protección.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Crypto y finanzas para el mundo hispanohablante</p>
          <p className="text-white/50 mb-6">
            Cada jueves: regulación, educación y estrategias en crypto. Sin spam. Gratis para siempre.
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
            <Link href="/blog/como-declarar-crypto-argentina" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Cómo declarar criptomonedas en Argentina 2026: guía completa ARCA</p>
            </Link>
            <Link href="/blog/como-usar-vpn-crypto" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Por qué necesitás una VPN para crypto: guía completa 2026</p>
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
