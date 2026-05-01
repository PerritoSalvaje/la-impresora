import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Qué es DeFi: guía completa para principiantes en español 2026",
  description:
    "DeFi explicado sin jerga: cómo funcionan los protocolos descentralizados, Aave, Uniswap, yield farming, los riesgos reales, cómo empezar con $50 y las 5 reglas de oro.",
  openGraph: {
    title: "Qué es DeFi: guía completa para principiantes en español 2026",
    description:
      "Finanzas descentralizadas desde cero: lending, DEX, yield farming. Diferencia con CeFi. Las 5 reglas para no perder dinero en DeFi. Cómo empezar con $50.",
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
            <span className="text-white/20 text-xs">· 15 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Qué es DeFi:{" "}
            <span className="text-dorado">guía completa para principiantes</span>{" "}
            en español 2026
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Imaginate poder prestar dinero y cobrar intereses sin un banco de por medio. Cambiar una
            moneda por otra sin pedirle permiso a nadie. Acceder a servicios financieros complejos con
            solo una wallet y conexión a internet. Eso es DeFi — y no es ciencia ficción: hoy mismo
            hay más de $100 mil millones de dólares bloqueados en estos protocolos. Esta guía te explica
            cómo funciona sin jerga.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              DeFi: el banco eliminado de la ecuación
            </h2>
            <p>
              DeFi es la abreviatura de <strong className="text-white">Decentralized Finance</strong>
              {" "}— Finanzas Descentralizadas. La idea central es simple pero radical: reemplazar
              los intermediarios financieros (bancos, brokers, casas de cambio, aseguradoras) con
              código que se ejecuta automáticamente en una blockchain.
            </p>
            <p className="mt-4">
              Cuando pedís un préstamo en un banco, el banco decide si te lo da, a qué tasa y con qué
              condiciones. En DeFi, un contrato inteligente maneja esa lógica. Si cumplís las
              condiciones programadas en el contrato (por ejemplo, depositar suficiente garantía), el
              préstamo se otorga automáticamente. Sin reuniones, sin aprobación manual, sin
              discriminación y sin que el banco se quede con la mayor parte del margen.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                ¿Qué es un contrato inteligente? Es un programa que vive en la blockchain y se
                ejecuta automáticamente cuando se cumplen ciertas condiciones. Nadie puede detenerlo,
                modificarlo o censurarlo una vez desplegado. Es código que actúa como árbitro imparcial.
              </p>
            </div>

            <p>
              La primera blockchain en hacer esto posible a escala fue Ethereum. Hoy también existe
              DeFi en Solana, Arbitrum, Polygon, Avalanche y docenas de otras redes. El ecosistema
              creció de prácticamente cero en 2019 a más de $100B en TVL (Total Value Locked — el
              equivalente a "activos bajo gestión") en el pico de 2021, y se mantiene como una de
              las áreas más dinámicas del ecosistema crypto.
            </p>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Sección 2 — CeFi vs DeFi */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              CeFi vs DeFi: cuál es la diferencia real
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gris-medio rounded-xl border border-white/10">
                <h3 className="text-white/60 font-black text-lg mb-3">CeFi — Finanzas Centralizadas</h3>
                <p className="text-white/60 text-sm mb-4">Exchanges como Binance, Coinbase, Kraken</p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Una empresa custodia tus fondos</li>
                  <li>· Requiere KYC (verificación de identidad)</li>
                  <li>· La empresa puede congelar tu cuenta</li>
                  <li>· Si la empresa quiebra (FTX), podés perder todo</li>
                  <li>· Interfaz más simple y amigable</li>
                  <li>· Soporte al cliente si algo sale mal</li>
                  <li>· Generalmente con cumplimiento regulatorio</li>
                </ul>
              </div>
              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/20">
                <h3 className="text-dorado font-black text-lg mb-3">DeFi — Finanzas Descentralizadas</h3>
                <p className="text-white/60 text-sm mb-4">Protocolos como Uniswap, Aave, Compound</p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Vos custodias tus fondos (en tu wallet)</li>
                  <li>· Sin KYC: solo necesitás una wallet</li>
                  <li>· Nadie puede congelarte ni censurate</li>
                  <li>· El riesgo es el contrato inteligente (bugs, exploits)</li>
                  <li>· Curva de aprendizaje más alta</li>
                  <li>· Sin soporte: si cometés un error, es irreversible</li>
                  <li>· Sin regulación formal en la mayoría de países</li>
                </ul>
              </div>
            </div>
            <p className="mt-6">
              La elección entre CeFi y DeFi no es binaria. La mayoría de usuarios de crypto usa
              ambos: CeFi para comprar crypto con fiat (moneda local) y DeFi para trabajar con esa
              crypto de formas que ningún banco ofrece.
            </p>
          </section>

          {/* Sección 3 — Cómo funcionan los protocolos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo funcionan los protocolos DeFi: los tres pilares
            </h2>

            {/* DEX */}
            <div className="p-6 bg-gris-medio rounded-xl border border-dorado/30 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-white font-black text-xl">DEX — Intercambios Descentralizados</h3>
                  <p className="text-dorado text-sm font-bold mt-1">Ejemplo principal: Uniswap</p>
                </div>
              </div>
              <p className="text-white/65 mb-4">
                Un DEX (Decentralized Exchange) te permite intercambiar una crypto por otra sin que
                ninguna empresa intermedie. En lugar de un libro de órdenes (como en Binance), los DEX
                usan un mecanismo llamado <strong className="text-white">Automated Market Maker (AMM)</strong>:
                hay "piscinas de liquidez" con pares de tokens (por ejemplo, ETH-USDC). Cuando hacés un
                swap, estás intercambiando con esa piscina, no con otro trader.
              </p>
              <p className="text-white/65 mb-4">
                Uniswap es el DEX más grande del mundo. En su momento de mayor actividad procesó más
                volumen diario que Coinbase. Funciona en Ethereum y múltiples Layer 2. No tenés que
                crear cuenta, pasar KYC ni confiar en ninguna empresa — solo conectás tu wallet y
                hacés el swap.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Ventajas</p>
                  <ul className="space-y-1 text-white/55 text-sm">
                    <li>· Sin KYC ni cuentas</li>
                    <li>· Acceso a miles de tokens no listados en CEX</li>
                    <li>· Vos controlás tus fondos siempre</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Riesgos</p>
                  <ul className="space-y-1 text-white/55 text-sm">
                    <li>· Slippage (diferencia entre precio esperado y ejecutado)</li>
                    <li>· Gas fees pueden ser altos en Ethereum mainnet</li>
                    <li>· Tokens scam mezclados con legítimos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lending */}
            <div className="p-6 bg-gris-medio rounded-xl border border-verde/30 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-white font-black text-xl">Lending y Borrowing</h3>
                  <p className="text-verde text-sm font-bold mt-1">Ejemplo principal: Aave</p>
                </div>
              </div>
              <p className="text-white/65 mb-4">
                Aave es el protocolo de lending descentralizado más grande. Funciona como un banco pero
                sin banco: depositás crypto (por ejemplo, USDC) y ganás intereses. Otros usuarios
                depositan garantías (colateral) y toman prestado contra esa garantía. Si el colateral
                cae por debajo de cierto umbral, el protocolo lo liquida automáticamente para proteger
                a los depositantes.
              </p>
              <p className="text-white/65 mb-4">
                Las tasas en Aave fluctúan en tiempo real según la oferta y demanda. En momentos de
                alta demanda de préstamos, los que depositan ganan tasas de interés muy superiores a
                las de cualquier banco. En momentos de baja demanda, las tasas bajan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Ventajas</p>
                  <ul className="space-y-1 text-white/55 text-sm">
                    <li>· Acceso instantáneo a liquidez sin vender tu crypto</li>
                    <li>· Tasas de interés en depósitos superiores a bancos</li>
                    <li>· Sin trámites ni aprobaciones</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Riesgos</p>
                  <ul className="space-y-1 text-white/55 text-sm">
                    <li>· Liquidación si el colateral cae (deuda sobrecolateralizada)</li>
                    <li>· Bugs en contratos inteligentes</li>
                    <li>· Tasas variables que pueden cambiar rápido</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Yield Farming */}
            <div className="p-6 bg-gris-medio rounded-xl border border-white/10 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h3 className="text-white font-black text-xl">Yield Farming y Liquidity Mining</h3>
                  <p className="text-white/50 text-sm font-bold mt-1">La estrategia avanzada de DeFi</p>
                </div>
              </div>
              <p className="text-white/65 mb-4">
                Yield farming es la práctica de mover activos entre diferentes protocolos DeFi para
                maximizar el rendimiento. En su forma más simple: depositás liquidez en un DEX (por ejemplo,
                el par ETH-USDC en Uniswap), recibís comisiones de los traders que usan esa liquidez
                y, además, podés recibir tokens del protocolo como recompensa adicional.
              </p>
              <p className="text-white/65">
                El rendimiento se mide en APR (tasa anual) o APY (tasa anual compuesta). Porcentajes
                de 5%, 15% o más son comunes en DeFi — pero vienen con riesgos proporcionales que no
                existen en productos bancarios tradicionales.
              </p>
            </div>
          </section>

          {/* Sección 4 — Los riesgos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los riesgos reales de DeFi (que muchos ignoran)
            </h2>
            <p>
              DeFi no es magia. Cada rendimiento tiene un riesgo detrás. Estos son los más importantes
              que debés entender antes de poner un solo dólar:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  riesgo: "Bugs en contratos inteligentes",
                  descripcion: "Si el código de un protocolo tiene una vulnerabilidad, un hacker puede drenar todos los fondos del protocolo en minutos. Ha pasado decenas de veces: Ronin Network ($600M), Poly Network ($610M), Euler Finance ($197M). El código es auditado, pero no hay garantía de perfección.",
                  nivel: "Crítico",
                },
                {
                  riesgo: "Impermanent Loss (pérdida impermanente)",
                  descripcion: "Si proveés liquidez en un DEX y el precio de los tokens cambia mucho, terminás con menos valor en dólares que si simplemente hubiera holdado los tokens. Es un riesgo específico de ser liquidity provider que mucha gente descubre después de perder dinero.",
                  nivel: "Alto",
                },
                {
                  riesgo: "Liquidación en lending",
                  descripcion: "Si pedís prestado con colateral y el precio del colateral cae rápidamente, el protocolo liquida automáticamente tu posición para cubrir la deuda. En un mercado bajista violento, esto puede pasar más rápido de lo que podés reaccionar.",
                  nivel: "Alto",
                },
                {
                  riesgo: "Rug pull y protocolos fraudulentos",
                  descripcion: "Algunos protocolos son directamente fraudes: los desarrolladores crean un token, generan hype, acumulan liquidez y desaparecen con los fondos. Es más común en protocolos nuevos no auditados con rendimientos absurdamente altos (1000% APY debería ser una señal de alarma).",
                  nivel: "Muy alto en protocolos nuevos",
                },
                {
                  riesgo: "Errores del usuario",
                  descripcion: "A diferencia de CeFi, en DeFi no hay botón de deshacer. Enviar fondos a la dirección equivocada, interactuar con un contrato malicioso o aprobar permisos sin leer — son errores irreversibles. El código es la ley, y el código no perdona.",
                  nivel: "Depende del usuario",
                },
              ].map((item) => (
                <div key={item.riesgo} className="p-5 bg-gris-medio rounded-xl border border-red-400/20">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{item.riesgo}</p>
                    <span className="text-xs font-bold text-red-400 shrink-0">{item.nivel}</span>
                  </div>
                  <p className="text-white/55 text-base">{item.descripcion}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 5 — Cómo empezar con $50 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo empezar en DeFi con $50: el camino más seguro
            </h2>
            <p>
              La barrera de entrada en DeFi es mucho más baja de lo que parece. Con $50 y una tarde
              de aprendizaje, podés tener tu primera experiencia real en el ecosistema. Este es el
              camino más seguro para empezar:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  paso: "1. Creá una wallet no-custodial",
                  detalle: "MetaMask es el estándar para Ethereum y Layer 2. Para Solana, Phantom. Descargalas solo desde los sitios oficiales. Guardá tu seed phrase en papel. Esta wallet es tu identidad en DeFi.",
                  alerta: false,
                },
                {
                  paso: "2. Comprá crypto en un exchange",
                  detalle: "Comprá ETH o USDC en un exchange local (Lemon, Ripio, Bitso según tu país) o en Binance. Empezá con el monto con el que te sentís cómodo perder — los errores de principiante son parte del aprendizaje.",
                  alerta: false,
                },
                {
                  paso: "3. Usá una Layer 2 para evitar fees altos",
                  detalle: "Los fees en Ethereum mainnet pueden ser de $5-$50 por transacción. En Arbitrum o Polygon, los mismos protocolos cuestan centavos. Mandá tu ETH a Arbitrum a través del bridge oficial de Arbitrum (arbitrum.io).",
                  alerta: false,
                },
                {
                  paso: "4. Tu primera experiencia: un swap en Uniswap",
                  detalle: "Entrá a app.uniswap.org, conectá tu MetaMask, seleccioná el par (ETH a USDC por ejemplo), verificá el slippage y ejecutá el swap. Esta experiencia te enseña cómo funciona un DEX en la práctica.",
                  alerta: false,
                },
                {
                  paso: "5. Si querés más: depositá USDC en Aave",
                  detalle: "Entrá a app.aave.com, conectá tu wallet, seleccioná USDC en Arbitrum y depositá. Vas a ver tu saldo crecer en tiempo real con los intereses. Es la forma más segura de tener tu primera experiencia con lending DeFi.",
                  alerta: false,
                },
                {
                  paso: "NUNCA pongas más del 5% de tu capital en un solo protocolo nuevo",
                  detalle: "Empezá con montos pequeños. Si un protocolo que no conocés bien promete 50% APY, es una señal de alarma. Los protocolos con track record (Aave, Uniswap, Compound) tienen años de historia sin hacks mayores.",
                  alerta: true,
                },
              ].map((p, i) => (
                <div key={i} className={`p-5 bg-gris-medio rounded-xl border ${p.alerta ? "border-red-400/30" : "border-white/5"}`}>
                  <p className={`font-bold mb-2 ${p.alerta ? "text-red-400" : "text-white"}`}>{p.paso}</p>
                  <p className="text-white/55 text-base">{p.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6 — Las 5 reglas de oro */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Las 5 reglas de oro para no perder dinero en DeFi
            </h2>
            <div className="mt-6 space-y-3">
              {[
                {
                  numero: "01",
                  regla: "Solo ponés lo que estás dispuesto a perder",
                  explicacion: "DeFi es un entorno de alto riesgo. Bugs, exploits, errores propios — cualquier cosa puede pasar. Nunca metas en DeFi dinero que necesitás para gastos esenciales.",
                },
                {
                  numero: "02",
                  regla: "Protocolo viejo y auditado > protocolo nuevo con alto APY",
                  explicacion: "Si un protocolo lanzado hace dos semanas promete 500% de rendimiento anual, el riesgo es enorme. Aave, Uniswap, Compound tienen años operando sin hacks mayores. Eso vale más que cualquier rendimiento.",
                },
                {
                  numero: "03",
                  regla: "Nunca apruebes permisos sin entender qué estás aprobando",
                  explicacion: "Cuando conectás tu wallet a una dApp, revisá exactamente qué permiso te pide. Una aprobación ilimitada a un contrato malicioso les da acceso total a tus tokens. Usá revoke.cash periódicamente para revocar aprobaciones antiguas.",
                },
                {
                  numero: "04",
                  regla: "Diversificá entre protocolos, no concentres todo en uno",
                  explicacion: "Si ponés todo en un solo protocolo y ese protocolo tiene un exploit, perdés todo. Distribuir entre Aave, Uniswap, Compound reduce el riesgo de un evento catastrófico.",
                },
                {
                  numero: "05",
                  regla: "Entendé exactamente cómo generás el rendimiento",
                  explicacion: "Si no podés explicar de dónde viene el rendimiento, no deberías estar en ese protocolo. Los rendimientos altos en DeFi vienen de algún lugar: comisiones de trading, tasas de interés de prestatarios, o emisión de tokens del protocolo (el más arriesgado).",
                },
              ].map((item) => (
                <div key={item.numero} className="flex gap-4 p-5 bg-gris-medio rounded-xl border border-dorado/10">
                  <span className="font-mono text-3xl font-bold text-dorado/30 leading-none shrink-0 select-none">{item.numero}</span>
                  <div>
                    <p className="text-dorado font-bold mb-2">{item.regla}</p>
                    <p className="text-white/55 text-base">{item.explicacion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              DeFi no es para todos — pero sí es para quien se educa primero
            </h2>
            <p>
              DeFi representa algo genuinamente nuevo: acceso a servicios financieros sin pedir permiso
              a nadie. Para personas en países con sistemas bancarios débiles, monedas inflacionarias o
              acceso limitado a mercados de capitales — y LATAM tiene muchos de esos casos — DeFi no
              es solo una curiosidad tecnológica. Es una herramienta real de soberanía financiera.
            </p>
            <p className="mt-4">
              Pero DeFi también puede destruir capital rápidamente si se entra sin educación. Los
              errores no se deshacen. Los protocolos nuevos pueden ser fraudulentos. Los mercados
              pueden ser violentos.
            </p>
            <p className="mt-4">
              La secuencia correcta: empezar con montos pequeños, en protocolos con historial, en
              redes con fees bajos (Layer 2), y con una comprensión clara de los riesgos de cada
              posición. Cuando hayas aprendido con $50, sabés cómo manejar $500. Cuando sabés cómo
              manejar $500, sabés cómo manejar $5,000.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> seguimos de cerca el ecosistema
              DeFi — los protocolos que funcionan, los que son riesgosos y las oportunidades reales
              para el inversor hispanohablante.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">DeFi y crypto explicados para LATAM</p>
          <p className="text-white/50 mb-6">
            Cada jueves: análisis, estrategias y oportunidades en DeFi. Sin spam. Gratis para siempre.
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
            <Link href="/blog/que-es-defi-como-funciona" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Qué es DeFi y cómo funciona: guía completa para principiantes en español</p>
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
