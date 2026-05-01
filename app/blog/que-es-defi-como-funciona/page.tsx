import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Qué es DeFi y cómo funciona: guía completa para principiantes en español",
  description:
    "Guía completa sobre DeFi (Finanzas Descentralizadas): qué es, cómo funciona, los protocolos más importantes como Aave, Uniswap y Compound, cómo generar yield y cómo empezar desde $50.",
  openGraph: {
    title: "Qué es DeFi y cómo funciona: guía completa para principiantes en español",
    description:
      "Finanzas sin banco: qué es DeFi, cómo funciona Uniswap, Aave y Compound, cómo generar yield y los riesgos reales. Para principiantes en LATAM.",
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
          <span>DeFi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-verde/10 text-verde border-verde/20">
              DeFi
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 13 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Qué es DeFi y cómo funciona:{" "}
            <span className="text-verde">guía completa</span> para principiantes
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            DeFi es finanzas sin banco. Sin formularios, sin historial crediticio, sin horarios de
            atención y sin un gerente de sucursal que decida si te mereces un préstamo. Un argentino,
            un colombiano o un venezolano con $50 y un teléfono puede acceder exactamente a los mismos
            servicios financieros que un fondo de inversión en Nueva York. Esta guía explica cómo.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              DeFi en una oración: finanzas sin intermediarios
            </h2>
            <p>
              DeFi significa "Decentralized Finance" o Finanzas Descentralizadas. La idea es
              reproducir los servicios financieros clásicos — préstamos, intercambio de activos,
              ahorro con rendimiento — pero sin ninguna empresa o institución en el medio.
            </p>
            <p className="mt-4">
              En el sistema tradicional, un banco toma tu depósito, lo presta a alguien más y se
              queda con la diferencia entre la tasa que te paga a vos (casi nada) y la que cobra
              al deudor (mucho). El banco es el intermediario que se lleva el spread.
            </p>
            <p className="mt-4">
              DeFi elimina al banco. Las reglas del juego — quién puede pedir prestado, a qué tasa,
              con qué garantía — están escritas en código que corre automáticamente en la blockchain.
              Estos programas se llaman <strong className="text-white">smart contracts</strong>
              (contratos inteligentes) y se ejecutan sin que ningún humano tenga que aprobarlos.
            </p>

            <div className="my-6 border-l-4 border-verde pl-6 bg-verde/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Definición práctica: DeFi es el conjunto de protocolos financieros que corren en
                blockchains públicas (principalmente Ethereum) y permiten prestar, pedir prestado,
                intercambiar y generar rendimientos sobre activos digitales sin ningún intermediario.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Banco tradicional vs DeFi: la comparación que lo explica todo
            </h2>
            <p>
              Para entender DeFi, lo más útil es compararlo punto a punto con el sistema bancario
              tradicional. No para decir que uno es mejor en todo — cada uno tiene sus ventajas —
              sino para entender exactamente qué cambia.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              {[
                {
                  aspecto: "Quién decide si te prestan",
                  banco: "Un analista de riesgo crediticio que evalúa tu historial",
                  defi: "Un smart contract: si tenés suficiente colateral, el préstamo es automático",
                },
                {
                  aspecto: "Tasas de interés",
                  banco: "Las fija el banco según sus costos y margen de ganancia",
                  defi: "Las determina el mercado en tiempo real: oferta y demanda de capital",
                },
                {
                  aspecto: "Quién recibe los rendimientos",
                  banco: "El banco retiene la mayor parte del spread",
                  defi: "Los proveedores de liquidez reciben directamente los rendimientos menos un fee mínimo de protocolo",
                },
                {
                  aspecto: "Horario de funcionamiento",
                  banco: "Lunes a viernes, 10 a 15hs, con excepciones",
                  defi: "24/7, 365 días, sin feriados, sin cortes de sistema",
                },
                {
                  aspecto: "Acceso requerido",
                  banco: "DNI, domicilio comprobable, historial crediticio, a veces hasta ingresos demostrables",
                  defi: "Una wallet crypto. Nada más.",
                },
                {
                  aspecto: "Transparencia",
                  banco: "El código de riesgo interno es secreto. No sabés cómo calculan tus posibilidades",
                  defi: "El código de los smart contracts es público y auditado. Cualquiera puede leer las reglas",
                },
              ].map((row) => (
                <div key={row.aspecto} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold text-sm mb-3">{row.aspecto}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Banco tradicional</p>
                      <p className="text-white/55 text-sm">{row.banco}</p>
                    </div>
                    <div>
                      <p className="text-verde/60 text-xs uppercase tracking-widest mb-1">DeFi</p>
                      <p className="text-white/65 text-sm">{row.defi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los protocolos más importantes: Aave, Uniswap y Compound
            </h2>
            <p>
              El ecosistema DeFi tiene decenas de protocolos, pero la mayor parte del volumen y la
              liquidez se concentra en unos pocos. Estos son los tres que necesitás conocer primero:
            </p>

            <div className="mt-6 space-y-6">

              <div className="p-6 bg-gris-medio rounded-xl border border-verde/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-verde/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-verde font-black text-sm">UNI</span>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl">Uniswap</h3>
                    <p className="text-white/40 text-sm">El exchange descentralizado más grande del mundo</p>
                  </div>
                </div>
                <p className="text-white/65 mb-4">
                  Uniswap es un DEX (exchange descentralizado). Permite intercambiar cualquier token
                  ERC-20 contra otro sin un exchange centralizado de por medio. No hay libro de órdenes:
                  usa un sistema de <strong className="text-white">Automated Market Maker (AMM)</strong>,
                  donde los precios se determinan matemáticamente según la proporción de activos en pools
                  de liquidez.
                </p>
                <p className="text-white/65 mb-4">
                  Cualquier persona puede aportar liquidez a Uniswap (depositar pares de tokens) y recibir
                  a cambio una parte de los fees de trading que genera ese pool. Es la base del concepto
                  de "yield farming".
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-negro/30 rounded-lg">
                    <p className="text-white/30 text-xs mb-1">Volumen promedio diario</p>
                    <p className="text-white font-bold">$1-3 mil millones USD</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg">
                    <p className="text-white/30 text-xs mb-1">Fee típico por swap</p>
                    <p className="text-white font-bold">0.05% a 1%</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-dorado/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-dorado font-black text-sm">AAVE</span>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl">Aave</h3>
                    <p className="text-white/40 text-sm">El protocolo de préstamos descentralizados líder</p>
                  </div>
                </div>
                <p className="text-white/65 mb-4">
                  Aave es un protocolo de lending (préstamos). Funciona como un banco de préstamos pero
                  sin el banco: los depositantes proveen capital y reciben intereses; los prestatarios
                  ponen colateral (generalmente más del 100% del préstamo, lo que se llama
                  <strong className="text-white"> préstamo sobrecolateralizado</strong>) y pagan intereses.
                </p>
                <p className="text-white/65 mb-4">
                  El caso de uso más común en LATAM: depositás USDC o USDT y recibís rendimientos del
                  3-8% anual en dólares, muy por encima de cualquier caja de ahorro bancaria. Sin
                  plazos fijos, sin burocracia, sin límites.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-negro/30 rounded-lg">
                    <p className="text-white/30 text-xs mb-1">TVL (valor bloqueado)</p>
                    <p className="text-white font-bold">+$10 mil millones USD</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg">
                    <p className="text-white/30 text-xs mb-1">Rendimiento USDC típico</p>
                    <p className="text-white font-bold">3-8% APY</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-blue-400/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-400/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-black text-sm">COMP</span>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl">Compound</h3>
                    <p className="text-white/40 text-sm">El protocolo que inventó el yield farming moderno</p>
                  </div>
                </div>
                <p className="text-white/65 mb-4">
                  Compound fue el primer protocolo de lending descentralizado a gran escala y el que
                  popularizó el concepto de "yield farming" en el verano DeFi de 2020. Funciona de manera
                  similar a Aave: depositás activos, recibís intereses, podés usar tus depósitos como
                  colateral para pedir prestado otros activos.
                </p>
                <p className="text-white/65 mb-4">
                  Compound también distribuye tokens COMP a sus usuarios como incentivo adicional, lo
                  que puede aumentar el rendimiento efectivo más allá de los intereses base.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-negro/30 rounded-lg">
                    <p className="text-white/30 text-xs mb-1">Activos soportados</p>
                    <p className="text-white font-bold">ETH, USDC, USDT, WBTC y más</p>
                  </div>
                  <div className="p-3 bg-negro/30 rounded-lg">
                    <p className="text-white/30 text-xs mb-1">Tiempo en el mercado</p>
                    <p className="text-white font-bold">Desde 2018, auditado</p>
                  </div>
                </div>
              </div>

            </div>

            <p className="mt-6">
              Más allá de estos tres, existen docenas de protocolos especializados: Curve Finance
              (especializado en stablecoins), MakerDAO (emisor de DAI), Lido (staking de ETH),
              y muchos otros. Pero si entendés cómo funcionan Uniswap, Aave y Compound, tenés la
              base para entender cualquier protocolo DeFi.
            </p>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo generar yield en DeFi: las estrategias principales
            </h2>
            <p>
              "Yield" es la tasa de retorno que generan tus activos en DeFi. Hay varias formas
              de generarlo, con distintos niveles de complejidad y riesgo:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  estrategia: "Lending de stablecoins",
                  riesgo: "Bajo",
                  rendimiento: "3-8% APY",
                  desc: "Depositás USDC o USDT en Aave o Compound y recibís intereses. El riesgo de precio es mínimo porque las stablecoins están pegged al dólar. El riesgo principal es el smart contract (si hay un bug, podés perder fondos).",
                  ideal: "Principiantes que quieren rendimientos en dólares",
                },
                {
                  estrategia: "Provisión de liquidez (LP)",
                  riesgo: "Medio",
                  rendimiento: "5-50% APY variable",
                  desc: "Depositás un par de tokens en un pool de Uniswap (por ejemplo, ETH/USDC). Recibís fees de los traders. El riesgo adicional es el 'impermanent loss': si los precios divergen mucho, podés terminar con menos valor que si solo hubieran holdado.",
                  ideal: "Usuarios intermedios que entienden el impermanent loss",
                },
                {
                  estrategia: "Staking de tokens de protocolo",
                  riesgo: "Medio-Alto",
                  rendimiento: "Variable según el protocolo",
                  desc: "Algunos protocolos permiten stakear sus tokens de gobernanza (como AAVE o COMP) para recibir recompensas adicionales. El riesgo de precio del token de protocolo es significativo — los tokens de governance pueden perder mucho valor.",
                  ideal: "Usuarios con convicción en el protocolo específico",
                },
                {
                  estrategia: "Yield farming multi-protocolo",
                  riesgo: "Alto",
                  rendimiento: "20-200%+ APY (pero variable)",
                  desc: "Estrategias complejas que mueven capital entre múltiples protocolos para maximizar rendimientos. Alta complejidad técnica, múltiples riesgos de smart contract y de mercado. Los rendimientos ultra-altos raramente son sostenibles.",
                  ideal: "Usuarios avanzados con mucho tiempo para monitorear posiciones",
                },
              ].map((item) => (
                <div key={item.estrategia} className="p-6 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex flex-col md:flex-row md:items-start gap-3 mb-3">
                    <p className="text-white font-black flex-1">{item.estrategia}</p>
                    <div className="flex gap-2 shrink-0">
                      <span className="text-verde text-xs font-bold border border-verde/30 px-2 py-1 rounded-full">{item.rendimiento}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.riesgo === "Bajo" ? "text-verde border-verde/30 border" : item.riesgo === "Medio" ? "text-dorado border-dorado/30 border" : "text-red-400 border-red-400/30 border"}`}>{item.riesgo}</span>
                    </div>
                  </div>
                  <p className="text-white/55 text-base mb-3">{item.desc}</p>
                  <p className="text-dorado text-sm font-bold">Ideal para: {item.ideal}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los riesgos reales de DeFi: sin sugarcoating
            </h2>
            <p>
              DeFi tiene oportunidades reales, pero también riesgos que el sistema bancario no tiene.
              Antes de depositar un centavo, estos son los riesgos que tenés que entender:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  riesgo: "Riesgo de smart contract (el más importante)",
                  nivel: "Siempre presente",
                  desc: "Si el código del smart contract tiene un bug, un atacante puede robar todos los fondos del protocolo. Esto ha pasado: en 2022 y 2023 hubo exploits de cientos de millones de dólares. Solo usá protocolos auditados y con mucho historial (Aave, Uniswap, Compound tienen más track record que protocolos nuevos).",
                  color: "text-red-400",
                },
                {
                  riesgo: "Impermanent Loss",
                  nivel: "En pools de liquidez",
                  desc: "Si proveés liquidez a un pool ETH/USDC en Uniswap y el precio de ETH sube mucho, terminás con menos ETH que si lo hubieras holdado. El AMM rebalancea automáticamente y 'vendés' el activo que sube. Los fees deben compensar este costo.",
                  color: "text-dorado",
                },
                {
                  riesgo: "Riesgo de oráculo",
                  nivel: "En protocolos de lending",
                  desc: "Los protocolos DeFi necesitan saber los precios de los activos en tiempo real. Los 'oráculos' proveen estos datos desde el mundo exterior a la blockchain. Si un oráculo es manipulado, puede haber liquidaciones masivas incorrectas o vaciado de pools.",
                  color: "text-dorado",
                },
                {
                  riesgo: "Liquidación de colateral",
                  nivel: "Al pedir prestado",
                  desc: "Si pedís prestado contra colateral en Aave y el valor de tu colateral cae por debajo del ratio mínimo, tu posición se liquida automáticamente. El sistema vende tu colateral para cubrir el préstamo. Sin aviso, sin apelación.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Rug pulls y proyectos fraudulentos",
                  nivel: "Fuera del ecosistema establecido",
                  desc: "Protocolos nuevos prometiendo rendimientos del 1,000% APY que un día desaparecen con todos los fondos. Regla: si no podés leer el código, si no tiene auditoría independiente, si lleva menos de 6 meses en el mercado con poco TVL, es una apuesta especulativa, no DeFi.",
                  color: "text-red-400",
                },
              ].map((item) => (
                <div key={item.riesgo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{item.riesgo}</p>
                    <span className={`text-xs font-bold ${item.color}`}>{item.nivel}</span>
                  </div>
                  <p className="text-white/55 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo empezar en DeFi desde $50: el plan paso a paso
            </h2>
            <p>
              La buena noticia es que podés empezar a explorar DeFi con montos muy pequeños. La mala:
              los fees de gas en Ethereum pueden ser caros para montos bajos. La solución: empezar en
              redes Layer 2 que tienen las mismas aplicaciones pero con costos de transacción mucho menores.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  paso: "Paso 1: Instalá MetaMask",
                  tiempo: "15 minutos",
                  detalle: "MetaMask es la wallet más compatible con protocolos DeFi. Descargala de metamask.io (verificá que sea el sitio oficial). Guardá tu seed phrase de 12 palabras OFFLINE, en papel, en un lugar seguro. Esta frase es el acceso a todos tus fondos.",
                  tag: "Setup",
                },
                {
                  paso: "Paso 2: Configurá Arbitrum o Polygon (Layer 2)",
                  tiempo: "5 minutos",
                  detalle: "Arbitrum y Polygon son redes compatibles con Ethereum pero con fees de centavos en lugar de dólares. Ideal para montos pequeños. MetaMask te permite agregar estas redes en la sección de configuración de red.",
                  tag: "Red",
                },
                {
                  paso: "Paso 3: Comprá ETH o USDC en un exchange",
                  tiempo: "30 minutos",
                  detalle: "Comprá $50-100 de ETH o USDC en un exchange local (Lemon, Ripio) o en Binance. Necesitás un poco de ETH para pagar los fees de transacción, incluso en Layer 2. El resto puede ser USDC si querés evitar volatilidad de precio.",
                  tag: "Capital",
                },
                {
                  paso: "Paso 4: Transferí a tu MetaMask en Arbitrum",
                  tiempo: "10 minutos",
                  detalle: "Desde el exchange, retirá a tu dirección de MetaMask especificando la red Arbitrum. Verificá dos veces la dirección de destino. Empezá con una cantidad pequeña para testear el flujo antes de mover todo el capital.",
                  tag: "Transferencia",
                },
                {
                  paso: "Paso 5: Tu primera operación DeFi — supply en Aave",
                  tiempo: "5 minutos",
                  detalle: "Entrá a app.aave.com, conectá tu MetaMask, seleccioná la red Arbitrum y depositá tu USDC. Inmediatamente empezás a acumular intereses que se reflejan en tu balance en tiempo real. Es literalmente tu primer dólar ganado en DeFi.",
                  tag: "Primera operación",
                },
                {
                  paso: "Paso 6: Monitoreá y aprendé",
                  tiempo: "Continuo",
                  detalle: "Usá DeFiLlama.com para ver el TVL y los rendimientos de los principales protocolos. Dune Analytics para estadísticas on-chain. Mantenete informado sobre cambios en las tasas y auditorías de seguridad. El aprendizaje continuo es parte del juego en DeFi.",
                  tag: "Monitoreo",
                },
              ].map((p, i) => (
                <div key={i} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{p.paso}</p>
                    <span className="text-verde text-xs font-bold shrink-0 border border-verde/30 px-2 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <p className="text-verde text-xs mb-2">{p.tiempo}</p>
                  <p className="text-white/55 text-base">{p.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              DeFi no es perfecta. Pero es la primera vez en la historia que el acceso al sistema financiero no depende de quién sos
            </h2>
            <p>
              El sistema financiero tradicional fue construido para servir a los que ya tienen capital
              y acceso. DeFi es la primera infraestructura financiera genuinamente permissionless:
              no te pide nombre, no te evalúa, no te discrimina.
            </p>
            <p className="mt-4">
              Eso tiene costos reales: es complejo, tiene riesgos técnicos importantes y la
              responsabilidad de la custodia es completamente tuya. No hay seguro de depósitos, no
              hay número de atención al cliente. Si cometés un error, es tu problema.
            </p>
            <p className="mt-4">
              Pero para alguien en LATAM que quiere acceder a rendimientos en dólares, pedir prestado
              sin burocracia o simplemente participar en el sistema financiero global — DeFi es la
              herramienta más poderosa que existe hoy. Y a diferencia de hace cinco años, hoy es
              accesible desde $50 y con interfaces que cualquiera puede usar.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> cubrimos las novedades de DeFi
              que importan en LATAM. Cada semana, sin jerga innecesaria y con contexto real.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-verde/5 border border-verde/20 rounded-2xl text-center">
          <p className="text-verde font-bold text-lg mb-2">Finanzas descentralizadas, explicadas para LATAM</p>
          <p className="text-white/50 mb-6">
            Cada jueves: lo mejor de DeFi, crypto y AI para hacer crecer tu plata. Sin spam. Gratis.
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
            <Link href="/blog/bitcoin-halving-que-es" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Bitcoin</span>
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
