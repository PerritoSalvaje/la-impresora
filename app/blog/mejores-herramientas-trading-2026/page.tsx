import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Las mejores herramientas para hacer trading de crypto en 2026",
  description:
    "Guía completa de herramientas de trading crypto en 2026: TradingView, Glassnode, Nansen, CryptoQuant, Delta, CoinStats y Koinly para taxes. Precios, usos y comisiones de afiliado.",
  openGraph: {
    title: "Las mejores herramientas para hacer trading de crypto en 2026",
    description:
      "TradingView para análisis técnico, Glassnode y Nansen para on-chain, Delta para portfolio, Koinly para impuestos. La caja de herramientas completa del trader de crypto en 2026.",
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
            Las mejores{" "}
            <span className="text-dorado">herramientas para trading</span>{" "}
            de crypto en 2026
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Los mejores traders de crypto no trabajan con más información — trabajan con mejores
            herramientas para interpretar la que ya existe. Esta guía cubre las herramientas
            más efectivas de análisis técnico, on-chain, portfolio y taxes para 2026.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* TradingView */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Herramientas de análisis técnico: TradingView
            </h2>
            <p>
              Si solo vas a usar una herramienta de análisis para crypto, que sea TradingView.
              Es el estándar de la industria y no tiene competidor real en 2026: más de 50 millones
              de traders activos, la comunidad de ideas de trading más grande del mundo, y una
              plataforma de gráficos que se integra directamente con los principales exchanges
              para operar desde ahí.
            </p>

            <div className="mt-6 p-6 bg-gris-medio rounded-xl border border-dorado/30">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-white font-black text-xl">TradingView</h3>
                  <p className="text-dorado text-sm font-bold">Análisis técnico · Plan gratis + premium desde $14.95/mes</p>
                </div>
                <a
                  href="https://www.tradingview.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm shrink-0"
                >
                  Ir a TradingView →
                </a>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-bold mb-3">Qué es y para qué sirve</h4>
                <p className="text-white/65">
                  TradingView es una plataforma de análisis de gráficos y datos de mercado disponible
                  en web y app móvil. Permite ver gráficos de precios de cualquier activo (crypto,
                  acciones, forex, commodities) con más de 100 indicadores técnicos incorporados,
                  dibujar líneas de tendencia y niveles de soporte/resistencia, y escribir scripts
                  propios en Pine Script para crear indicadores personalizados.
                </p>
                <p className="text-white/65 mt-4">
                  Para crypto específicamente, TradingView tiene los pares de todos los exchanges
                  principales (Binance, Bybit, Coinbase, Kraken) con datos en tiempo real. Podés
                  conectar tu cuenta del exchange y operar directamente desde los gráficos de
                  TradingView sin salir de la plataforma.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-bold mb-3">Cómo usarlo para crypto</h4>
                <div className="space-y-3">
                  {[
                    { uso: "Análisis técnico básico", desc: "Usá los indicadores RSI, MACD, Bollinger Bands y medias móviles para identificar tendencias, zonas de sobrecompra/sobreventa y señales de entrada y salida. Están todos disponibles en el plan gratuito." },
                    { uso: "Ideas de trading de la comunidad", desc: "La sección de Ideas de TradingView tiene millones de análisis publicados por traders de todo el mundo. Podés seguir a analistas específicos, ver sus ideas históricas y evaluar la calidad de sus predicciones." },
                    { uso: "Alertas de precio", desc: "Configurá alertas para recibir una notificación cuando un activo llegue a un precio específico, cruce una media móvil o active un indicador. En el plan gratuito tenés hasta 1 alerta activa; en el Essential ($14.95/mes) tenés alertas ilimitadas." },
                    { uso: "Screening de criptomonedas", desc: "El Crypto Screener de TradingView permite filtrar todas las criptomonedas por indicadores técnicos. Por ejemplo: 'mostrame todas las crypto en temporalidad diaria con RSI por debajo de 30 y que estén por encima de su media de 200 días'." },
                  ].map((u) => (
                    <div key={u.uso} className="p-4 bg-black/20 rounded-xl">
                      <p className="text-white font-bold text-sm mb-1">{u.uso}</p>
                      <p className="text-white/55 text-sm">{u.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-bold mb-3">Pricing</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { plan: "Free", precio: "$0/mes", features: "3 indicadores, 1 alerta, gráficos básicos" },
                    { plan: "Essential", precio: "$14.95/mes", features: "5 indicadores, alertas ilimitadas, sin ads" },
                    { plan: "Plus", precio: "$29.95/mes", features: "10 indicadores, múltiples layouts, exportación" },
                  ].map((p) => (
                    <div key={p.plan} className="p-4 bg-black/20 rounded-xl text-center">
                      <p className="text-dorado font-black">{p.plan}</p>
                      <p className="text-white font-bold text-lg">{p.precio}</p>
                      <p className="text-white/40 text-xs mt-1">{p.features}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-4 bg-dorado/5 border border-dorado/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge badge-dorado text-xs">30% comisión de por vida</span>
                  <span className="text-white/40 text-xs">Programa de afiliados</span>
                </div>
                <p className="text-white/60 text-sm">TradingView ofrece un 30% de comisión recurrente de por vida por cada usuario referido que se suscribe a un plan de pago.</p>
              </div>
            </div>
          </section>

          {/* Herramientas on-chain */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Herramientas on-chain: Glassnode, CryptoQuant y Nansen
            </h2>
            <p>
              El análisis on-chain es lo que diferencia a los traders de crypto de los traders
              tradicionales: podés ver directamente lo que está pasando en la blockchain —
              cuánto Bitcoin están moviendo los whales, cuándo la gente está capitulando o
              acumulando, qué están haciendo los fondos institucionales. Esta información
              no existe en los mercados de acciones.
            </p>

            <div className="mt-6 space-y-6">

              {/* Glassnode */}
              <div className="p-6 bg-gris-medio rounded-xl border border-verde/20">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-white font-black text-xl">Glassnode</h3>
                    <p className="text-verde text-sm font-bold">On-chain analytics · Plan gratis + desde $29/mes</p>
                  </div>
                </div>
                <p className="text-white/65 mb-4">
                  Glassnode es la plataforma de análisis on-chain más completa del mercado. Provee
                  métricas como SOPR (Spent Output Profit Ratio, que indica si los holders están
                  vendiendo con ganancia o pérdida), NVT (Network Value to Transactions, que compara
                  el valor de la red con su uso real), y cientos de métricas de actividad en Bitcoin
                  y Ethereum. Es la referencia citada por analistas de macro crypto como Willy Woo,
                  PlanB o Lyn Alden.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Para qué sirve</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Ver si los holders están acumulando o distribuyendo</li>
                      <li>· Identificar zonas de capitulación del mercado</li>
                      <li>· Seguir el comportamiento de large holders (whales)</li>
                      <li>· Métricas de actividad de red vs precio</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-2">A tener en cuenta</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Las mejores métricas están en el plan pago</li>
                      <li>· Curva de aprendizaje para interpretar los datos</li>
                      <li>· El plan gratis tiene métricas con 24hs de delay</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CryptoQuant */}
              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/20">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-white font-black text-xl">CryptoQuant</h3>
                    <p className="text-dorado text-sm font-bold">Exchange flows y on-chain · Plan gratis + desde $29/mes</p>
                  </div>
                </div>
                <p className="text-white/65 mb-4">
                  CryptoQuant se especializa en el análisis de flujos de exchanges: cuánto Bitcoin
                  entra y sale de los exchanges, lo cual es un indicador poderoso de presión de
                  venta (mucho BTC entrando = posible venta inminente) o acumulación (mucho BTC
                  saliendo de exchanges = los holders lo mueven a wallets propias para guardar a
                  largo plazo). También tiene métricas de mineros y métricas de stablecoins.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Para qué sirve</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Exchange inflow/outflow de Bitcoin</li>
                      <li>· Actividad de mineros (señal de presión de venta)</li>
                      <li>· Métricas de stablecoins (señal de liquidez nueva)</li>
                      <li>· Análisis de posiciones en exchanges derivados</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-2">A tener en cuenta</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Más enfocado en Bitcoin y Ethereum que en altcoins</li>
                      <li>· Requiere tiempo para aprender a interpretar los flujos</li>
                      <li>· La comunidad de análisis en el sitio es muy activa</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Nansen */}
              <div className="p-6 bg-gris-medio rounded-xl border border-purple-400/20">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-white font-black text-xl">Nansen</h3>
                    <p className="text-purple-400 text-sm font-bold">Smart money analytics · Desde $150/mes</p>
                  </div>
                </div>
                <p className="text-white/65 mb-4">
                  Nansen es la herramienta más avanzada del segmento: combina datos on-chain con
                  una base de datos de más de 300 millones de wallets etiquetadas. Podés ver qué
                  están comprando los "smart money" — wallets históricamente exitosas de fondos,
                  VCs crypto y traders whale — antes de que los movimientos sean públicos. Es la
                  herramienta de referencia de fondos institucionales y traders profesionales.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Para qué sirve</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Seguir wallets de "smart money" etiquetadas</li>
                      <li>· Ver qué tokens están acumulando los mejores traders</li>
                      <li>· Análisis de tokens nuevos y actividad DeFi</li>
                      <li>· NFT analytics y seguimiento de colecciones</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-2">A tener en cuenta</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· El plan más barato es $150/mes — para usuarios serios</li>
                      <li>· Principalmente para Ethereum y EVM chains</li>
                      <li>· La curva de aprendizaje es la más alta del segmento</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-6 p-5 bg-gris-medio rounded-xl border border-white/10">
              <p className="text-white font-bold mb-2">¿Cuál usar según tu nivel?</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>· <strong className="text-white">Empezando con on-chain:</strong> Glassnode plan gratis o CryptoQuant gratuito. Las métricas básicas gratuitas ya dan ventaja sobre el 95% del mercado.</li>
                <li>· <strong className="text-white">Trader activo:</strong> CryptoQuant básico ($29/mes) para flujos de exchanges.</li>
                <li>· <strong className="text-white">Trader profesional o fondo:</strong> Nansen para smart money tracking.</li>
              </ul>
            </div>
          </section>

          {/* Portfolio */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Herramientas de seguimiento de portfolio: Delta, CoinStats y CoinGecko
            </h2>
            <p>
              Si operás en múltiples exchanges y tenés posiciones en diferentes wallets, necesitás
              una herramienta que consolide todo en un solo dashboard. Calculá tu P&amp;L real,
              el rendimiento histórico y el peso de cada activo en tu portfolio.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  nombre: "Delta",
                  tipo: "App móvil · Plan gratis + Pro desde $9.99/mes",
                  desc: "Delta es la app de seguimiento de portfolio más completa y con mejor diseño del mercado. Conecta con más de 50 exchanges via API (sin permisos de retiro), importa wallets por dirección pública y muestra tu portfolio consolidado en tiempo real. Tiene gráficos de evolución histórica, P&L diario, semanal y total, y alertas de precio. El plan gratuito es suficiente para la mayoría de usuarios.",
                  border: "border-dorado/20",
                  tagColor: "text-dorado",
                },
                {
                  nombre: "CoinStats",
                  tipo: "App y web · Plan gratis + Pro desde $7/mes",
                  desc: "CoinStats es similar a Delta con algunas funciones adicionales interesantes: tiene un feed de noticias de crypto integrado filtrado por los activos que tenés en tu portfolio, y un DeFi tracker que muestra automáticamente tus posiciones en protocolos como Uniswap, Aave o Compound. Si usás DeFi activamente, CoinStats tiene ventaja sobre Delta en este aspecto.",
                  border: "border-blue-400/20",
                  tagColor: "text-blue-400",
                },
                {
                  nombre: "CoinGecko Portfolio",
                  tipo: "Web y app · Completamente gratuito",
                  desc: "La opción gratuita más funcional del mercado. CoinGecko Portfolio permite seguir cualquier cantidad de activos, calcular el precio promedio de compra y el P&L, y comparar el rendimiento vs Bitcoin o Ethereum. La única limitación es que es manual — tenés que ingresar las transacciones vos mismo, sin integración automática con exchanges.",
                  border: "border-verde/20",
                  tagColor: "text-verde",
                },
              ].map((h) => (
                <div key={h.nombre} className={`p-6 bg-gris-medio rounded-xl border ${h.border}`}>
                  <h3 className="text-white font-black text-lg mb-1">{h.nombre}</h3>
                  <p className={`text-sm font-bold mb-4 ${h.tagColor}`}>{h.tipo}</p>
                  <p className="text-white/65">{h.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tax / Impuestos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Herramientas de tax e impuestos: Koinly
            </h2>
            <p>
              El tema que pocos quieren ver hasta que es obligatorio: la declaración impositiva de
              operaciones crypto. En 2026, esto ya no es opcional en Argentina (ARCA), México (SAT),
              Colombia, España y Estados Unidos. Calcular manualmente miles de transacciones entre
              exchanges, wallets y protocolos DeFi es prácticamente imposible. Koinly lo automatiza.
            </p>

            <div className="mt-6 p-6 bg-gris-medio rounded-xl border border-dorado/30">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-white font-black text-xl">Koinly</h3>
                  <p className="text-dorado text-sm font-bold">Crypto tax software · Plan gratis (100 tx) + desde $49/año</p>
                </div>
                <a
                  href="https://koinly.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm shrink-0"
                >
                  Ir a Koinly →
                </a>
              </div>

              <p className="text-white/65 mb-6">
                Koinly importa automáticamente todas tus transacciones de exchanges (Binance, Bybit,
                Coinbase, Kraken y 700+ más) y wallets, calcula las ganancias y pérdidas en cada
                operación aplicando el método FIFO o LIFO según corresponda a tu jurisdicción, y
                genera un reporte de impuestos listo para presentar al organismo correspondiente.
                Soporta las regulaciones de más de 20 países incluyendo Argentina, México, España
                y Colombia.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Qué hace</p>
                  <ul className="space-y-1 text-white/55 text-sm">
                    <li>· Importa transacciones de 700+ exchanges y wallets</li>
                    <li>· Calcula P&L de cada operación automáticamente</li>
                    <li>· Soporta DeFi, staking y yield farming</li>
                    <li>· Genera reportes para ARCA (AR), SAT (MX), IRPF (ES)</li>
                    <li>· Detecta y elimina duplicados automáticamente</li>
                    <li>· Exporta en formato compatible con software contable</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Precios</p>
                  <ul className="space-y-2 text-white/55 text-sm">
                    <li><span className="text-white">Gratis:</span> hasta 100 transacciones</li>
                    <li><span className="text-white">Newbie ($49/año):</span> 100 tx — ideal si recién empezás</li>
                    <li><span className="text-white">Hodler ($99/año):</span> 1,000 tx</li>
                    <li><span className="text-white">Trader ($179/año):</span> 10,000 tx — para traders activos</li>
                    <li><span className="text-white">Oracle ($279/año):</span> transacciones ilimitadas</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-dorado/5 border border-dorado/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-dorado text-xs">30% comisión</span>
                  <span className="text-white/40 text-xs">Programa de afiliados</span>
                </div>
                <p className="text-white/60 text-sm">
                  Koinly tiene un programa de afiliados con comisión del 30% por cada usuario que
                  se suscribe a través de tu link. Dado que los planes son anuales y la mayoría de
                  usuarios renueva año a año, es una de las comisiones más atractivas del espacio crypto.
                </p>
              </div>
            </div>

            <div className="mt-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                ¿Por qué Koinly y no hacer el cálculo manual?
              </p>
              <p className="text-white/60 mt-2 text-base">
                Si hiciste 500 transacciones en un año (comprás y vendés regularmente, usás DeFi,
                recibís staking rewards), calcular cada una manualmente llevaría semanas. Un error en
                la declaración puede costar más que la suscripción anual de Koinly. El ROI de la
                herramienta es inmediato.
              </p>
            </div>
          </section>

          {/* Resumen / Stack recomendado */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El stack de herramientas recomendado según tu nivel
            </h2>

            <div className="space-y-4">
              {[
                {
                  nivel: "Principiante (menos de $2,000 en crypto)",
                  herramientas: [
                    "TradingView Free — para ver gráficos y aprender análisis técnico",
                    "CoinGecko Portfolio — seguimiento gratuito de tu portfolio",
                    "Koinly Free — hasta 100 transacciones sin costo",
                  ],
                  costo: "$0/mes",
                  color: "border-verde/20",
                },
                {
                  nivel: "Trader activo (trading regular, +1,000 txs/año)",
                  herramientas: [
                    "TradingView Essential ($14.95/mes) — alertas ilimitadas y sin límite de indicadores",
                    "CryptoQuant básico ($29/mes) — flujos de exchanges para BTC y ETH",
                    "Delta Pro ($9.99/mes) — portfolio tracker con integración de exchanges",
                    "Koinly Trader ($179/año) — hasta 10,000 transacciones",
                  ],
                  costo: "~$55/mes + $179/año",
                  color: "border-dorado/20",
                },
                {
                  nivel: "Trader profesional o fondo",
                  herramientas: [
                    "TradingView Plus o Premium — máximas funciones y layouts simultáneos",
                    "Glassnode Intermediate o Advanced — suite completa de métricas on-chain",
                    "Nansen ($150/mes) — smart money tracking con wallets etiquetadas",
                    "Koinly Oracle ($279/año) — transacciones ilimitadas",
                  ],
                  costo: "$300+/mes",
                  color: "border-purple-400/20",
                },
              ].map((s) => (
                <div key={s.nivel} className={`p-6 bg-gris-medio rounded-xl border ${s.color}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="text-white font-bold">{s.nivel}</p>
                    <span className="badge text-xs shrink-0">{s.costo}</span>
                  </div>
                  <ul className="space-y-2">
                    {s.herramientas.map((h) => (
                      <li key={h} className="text-white/60 text-sm flex gap-2">
                        <span className="text-verde shrink-0">·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              La conclusión práctica
            </h2>
            <p>
              No necesitás todas las herramientas desde el principio. El camino natural es:
              empezar con TradingView gratuito para aprender a leer gráficos, CoinGecko para
              seguir tu portfolio y Koinly gratuito para las primeras transacciones. A medida
              que crecés y tu volumen de operaciones aumenta, vas agregando herramientas según
              la necesidad específica.
            </p>
            <p className="mt-4">
              Lo que no tiene sentido es pagar $150/mes por Nansen si estás empezando con $500.
              Y lo que tampoco tiene sentido es hacer trading serio sin al menos TradingView
              para ver los gráficos correctamente.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> cubrimos las novedades en
              herramientas de análisis crypto cada vez que hay cambios de pricing, funciones nuevas
              o alternativas que valga la pena considerar.
            </p>
          </section>

        </article>

        {/* CTAs afiliados */}
        <div className="mt-16">
          <h3 className="text-white font-black text-xl mb-6">Las herramientas que usamos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.tradingview.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-gris-medio rounded-xl border border-dorado/20 hover:border-dorado/40 transition-colors block group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-black">TradingView</span>
                <span className="badge badge-dorado text-xs">30% comisión de por vida</span>
              </div>
              <p className="text-white/50 text-sm mb-3">El estándar de análisis técnico. Gratis para empezar, esencial para escalar.</p>
              <span className="text-verde text-sm font-bold group-hover:underline">Ir a TradingView →</span>
            </a>

            <a
              href="https://koinly.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-gris-medio rounded-xl border border-dorado/20 hover:border-dorado/40 transition-colors block group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-black">Koinly</span>
                <span className="badge badge-dorado text-xs">30% comisión</span>
              </div>
              <p className="text-white/50 text-sm mb-3">Calculá y declarás tus impuestos crypto en minutos. Soporta Argentina, México y España.</p>
              <span className="text-verde text-sm font-bold group-hover:underline">Ir a Koinly →</span>
            </a>
          </div>
        </div>

        {/* Más artículos */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-white font-black text-xl mb-6">Seguí leyendo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/mejores-exchanges-crypto-2026" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Exchanges</span>
              <p className="text-white font-bold mt-2 leading-tight">Los mejores exchanges de crypto en 2026: ranking para hispanohablantes</p>
            </Link>
            <Link href="/blog/mejores-wallets-crypto-2026" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Wallets</span>
              <p className="text-white font-bold mt-2 leading-tight">Las mejores wallets de crypto en 2026: guía completa y comparativa</p>
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
