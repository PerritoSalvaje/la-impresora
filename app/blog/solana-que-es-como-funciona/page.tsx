import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Solana: qué es, cómo funciona y por qué es importante en 2026",
  description:
    "Guía completa de Solana en español: cómo funciona su consenso Proof of History, comparativa con Ethereum, proyectos del ecosistema, cómo comprar SOL y riesgos reales.",
  openGraph: {
    title: "Solana: qué es, cómo funciona y por qué es importante en 2026",
    description:
      "Guía completa de Solana en español: cómo funciona su consenso Proof of History, comparativa con Ethereum, proyectos del ecosistema, cómo comprar SOL y riesgos reales.",
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
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-verde/10 text-verde border-verde/20">
              Altcoins
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 11 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Solana: qué es,{" "}
            <span className="text-verde">cómo funciona</span>{" "}
            y por qué es importante en 2026
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Mientras Ethereum procesaba 15 transacciones por segundo con comisiones de $50, Solana
            procesaba 65,000 con comisiones de $0.00025. Eso resume la propuesta de valor. En 2026,
            Solana es la segunda blockchain más usada del mundo y el ecosistema con mayor actividad
            DeFi y de consumidores después de Ethereum. Esta es la guía que te explica por qué importa.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Qué es */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es Solana: más que "el Ethereum rápido"
            </h2>
            <p>
              Solana es una blockchain de alto rendimiento diseñada desde cero para ser masivamente
              escalable. Fue creada por Anatoly Yakovenko (ex-Qualcomm) en 2017 y lanzada en 2020.
              La idea central: construir una blockchain que pueda procesar el volumen de transacciones
              de una red como Visa sin sacrificar la descentralización ni la seguridad.
            </p>
            <p className="mt-4">
              En términos técnicos, Solana puede procesar hasta 65,000 transacciones por segundo
              con finalidad en menos de 400 milisegundos y comisiones que promedian $0.00025 por
              transacción. Para comparar: Ethereum procesa 15-30 TPS, Bitcoin 7 TPS, Visa 24,000 TPS.
            </p>

            <div className="my-6 border-l-4 border-verde pl-6 bg-verde/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Solana no es simplemente "Ethereum más rápido". Es una arquitectura completamente
                diferente que resuelve el problema de escalabilidad de manera distinta a como lo hacen
                Ethereum (Layer 2s) o Bitcoin (Lightning Network). La velocidad no es un parche — está
                en el diseño original del protocolo.
              </p>
            </div>
          </section>

          {/* Cómo funciona */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo funciona Solana: Proof of History explicado sin tecnicismos
            </h2>
            <p>
              La innovación central de Solana es algo llamado "Proof of History" (PoH), un concepto
              inventado por Yakovenko. Para entenderlo, primero hay que entender el problema que resuelve.
            </p>
            <p className="mt-4">
              En una blockchain tradicional, los nodos necesitan ponerse de acuerdo sobre qué transacciones
              ocurrieron primero. Ese proceso de consenso lleva tiempo — es literalmente el cuello de botella
              que hace que Bitcoin tome 10 minutos por bloque y Ethereum tome 12 segundos.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  concepto: "Proof of History (PoH)",
                  explicacion: "En lugar de que los nodos negocien el orden de las transacciones, Solana tiene un 'reloj criptográfico' integrado. Cada transacción se registra con una marca de tiempo matemáticamente verificable antes de ser incluida en el bloque. Los nodos no necesitan ponerse de acuerdo sobre cuándo pasó algo — el protocolo ya lo establece de forma objetiva.",
                  icono: "⏱",
                },
                {
                  concepto: "Tower BFT (el mecanismo de consenso)",
                  explicacion: "Sobre la base del PoH, Solana usa una variante de Byzantine Fault Tolerance para validar transacciones. El resultado es que la red puede procesar transacciones en paralelo, no secuencialmente, lo que multiplica el throughput por un factor de 10-100x respecto a blockchains tradicionales.",
                  icono: "🏗",
                },
                {
                  concepto: "Sealevel (ejecución paralela)",
                  explicacion: "Solana puede ejecutar múltiples contratos inteligentes al mismo tiempo si no compiten por los mismos datos. Ethereum los procesa de forma secuencial. Esto es como la diferencia entre una autopista de 8 carriles y una de 1 carril.",
                  icono: "🛣",
                },
                {
                  concepto: "Gulf Stream (propagación de transacciones)",
                  explicacion: "En lugar de esperar a que el bloque actual se complete para enviar el siguiente batch, Solana reenvía transacciones pendientes a validadores que probablemente procesen el próximo bloque. Esto reduce la latencia a milisegundos.",
                  icono: "🌊",
                },
              ].map((c) => (
                <div key={c.concepto} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl shrink-0">{c.icono}</span>
                    <div>
                      <p className="text-verde font-bold mb-2">{c.concepto}</p>
                      <p className="text-white/60 text-base">{c.explicacion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparativa con Ethereum */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Solana vs Ethereum: la comparativa honesta
            </h2>
            <p>
              La guerra Solana vs Ethereum es uno de los debates más acalorados del ecosistema crypto.
              La realidad es que son herramientas distintas para casos de uso distintos, y en 2026 ambas
              coexisten con ecosistemas robustos.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  factor: "Velocidad",
                  ethereum: "15–30 TPS en L1 / hasta 2,000+ en L2s como Arbitrum",
                  solana: "65,000 TPS en L1",
                  ganador: "Solana",
                },
                {
                  factor: "Comisiones",
                  ethereum: "$0.01–$5 en L2 / $2–$50+ en L1 en horas pico",
                  solana: "$0.00025 promedio, siempre",
                  ganador: "Solana",
                },
                {
                  factor: "Descentralización",
                  ethereum: "Más de 500,000 validadores activos",
                  solana: "~3,000 validadores (requiere hardware potente)",
                  ganador: "Ethereum",
                },
                {
                  factor: "Madurez del ecosistema",
                  ethereum: "10 años, mayor TVL, más protocolos establecidos",
                  solana: "4 años en mainnet, crecimiento explosivo 2023–2026",
                  ganador: "Ethereum",
                },
                {
                  factor: "Uptime histórico",
                  ethereum: "Prácticamente 100%",
                  solana: "Múltiples caídas en 2021–2022, muy estable desde 2023",
                  ganador: "Ethereum",
                },
                {
                  factor: "UX para usuarios finales",
                  ethereum: "Compleja por el modelo de gas y múltiples L2s",
                  solana: "Simplificada: una red, comisiones fijas y bajas",
                  ganador: "Solana",
                },
              ].map((r) => (
                <div key={r.factor} className="p-4 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{r.factor}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-2">
                    <div>
                      <p className="text-blue-400/60 text-xs mb-1">Ethereum</p>
                      <p className="text-white/60">{r.ethereum}</p>
                    </div>
                    <div>
                      <p className="text-verde/60 text-xs mb-1">Solana</p>
                      <p className="text-white/60">{r.solana}</p>
                    </div>
                  </div>
                  <p className="text-dorado text-xs font-bold">Ventaja: {r.ganador}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-gris-medio rounded-xl border border-white/10">
              <p className="text-white font-bold mb-2">¿Entonces cuál es mejor?</p>
              <p className="text-white/60 text-base">
                Para DeFi institucional, protocolos grandes y máxima seguridad: Ethereum (o sus L2s como Arbitrum y Base).
                Para pagos, gaming, aplicaciones de consumo y NFTs: Solana. En 2026, muchos proyectos eligen Solana
                por la experiencia del usuario final — transacciones instantáneas y gratuitas tienen un impacto real
                en el adoption rate.
              </p>
            </div>
          </section>

          {/* Ecosistema */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El ecosistema de Solana en 2026: proyectos que importan
            </h2>
            <p>
              El ecosistema de Solana explotó entre 2023 y 2026. Después de las caídas de 2022
              (incluyendo el colapso de FTX, que tenía inversión en Solana), la red se recuperó
              con un crecimiento de adopción sin precedentes.
            </p>

            <div className="mt-6 space-y-4">
              <h3 className="text-white font-black text-xl mb-3">DeFi en Solana</h3>
              {[
                {
                  proyecto: "Jupiter Exchange",
                  tipo: "DEX Aggregator",
                  desc: "El mayor aggregator de DEXs en Solana. Encuentra la mejor ruta para cualquier swap entre tokens. Procesó más de $200B en volumen en 2024.",
                  relevancia: "Alta — el punto de entrada estándar a DeFi en Solana",
                },
                {
                  proyecto: "Raydium",
                  tipo: "DEX / AMM",
                  desc: "Uno de los primeros AMMs de Solana. Pool de liquidez, farming y acceso a nuevos tokens antes de listings en exchanges centralizados.",
                  relevancia: "Alta — mayor liquidez en pares de Solana",
                },
                {
                  proyecto: "Marinade Finance",
                  tipo: "Liquid Staking",
                  desc: "Permite hacer staking de SOL y recibir mSOL (SOL en staking que sigue siendo usable en DeFi). Rinde ~7% anual con liquidez completa.",
                  relevancia: "Alta — el estándar de staking descentralizado en Solana",
                },
              ].map((p) => (
                <div key={p.proyecto} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-verde font-bold">{p.proyecto}</p>
                    <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full">{p.tipo}</span>
                  </div>
                  <p className="text-white/60 text-sm mb-2">{p.desc}</p>
                  <p className="text-dorado text-xs font-bold">{p.relevancia}</p>
                </div>
              ))}

              <h3 className="text-white font-black text-xl mb-3 mt-6">NFTs y cultura en Solana</h3>
              {[
                {
                  proyecto: "Magic Eden",
                  tipo: "NFT Marketplace",
                  desc: "El mayor marketplace de NFTs en Solana y uno de los más grandes del mundo. Con comisiones del 2% vs el 2.5% de OpenSea y transacciones instantáneas.",
                  relevancia: "Alta — el estándar de mercado en Solana NFTs",
                },
                {
                  proyecto: "Tensor",
                  tipo: "NFT Trading Pro",
                  desc: "Para traders avanzados de NFTs. Sweep de floors, portfolio tracking y herramientas de análisis que no existen en otros marketplaces.",
                  relevancia: "Media — para traders activos de NFTs",
                },
              ].map((p) => (
                <div key={p.proyecto} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-verde font-bold">{p.proyecto}</p>
                    <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full">{p.tipo}</span>
                  </div>
                  <p className="text-white/60 text-sm mb-2">{p.desc}</p>
                  <p className="text-dorado text-xs font-bold">{p.relevancia}</p>
                </div>
              ))}

              <h3 className="text-white font-black text-xl mb-3 mt-6">Pagos y uso real</h3>
              {[
                {
                  proyecto: "Solana Pay",
                  tipo: "Pagos",
                  desc: "Protocolo de pagos open source sobre Solana. Permite pagos en crypto en comercios con QR. Sin comisiones de red para el comprador, transacción instantánea. Integrado con Shopify y varios POS.",
                  relevancia: "Muy alta — caso de uso real para adopción masiva",
                },
                {
                  proyecto: "Helium (migrado a Solana)",
                  tipo: "IoT / DePIN",
                  desc: "La red de IoT descentralizada migró a Solana en 2023. Prueba de que infraestructura real puede construirse sobre Solana a escala.",
                  relevancia: "Alta — ejemplo de DePIN a gran escala",
                },
              ].map((p) => (
                <div key={p.proyecto} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-verde font-bold">{p.proyecto}</p>
                    <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full">{p.tipo}</span>
                  </div>
                  <p className="text-white/60 text-sm mb-2">{p.desc}</p>
                  <p className="text-dorado text-xs font-bold">{p.relevancia}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cómo comprar SOL */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo comprar SOL en Argentina y LATAM
            </h2>
            <p>
              Comprar Solana (SOL) es tan simple como comprar Bitcoin. Está disponible en todos los
              exchanges importantes y en varios exchanges locales de LATAM.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  exchange: "Lemon Cash (Argentina)",
                  desc: "SOL disponible directamente con pesos. Compra en la app desde $1,000 ARS. Simple para principiantes.",
                  min: "Desde $1,000 ARS",
                },
                {
                  exchange: "Binance",
                  desc: "Mayor liquidez, mejor precio en grandes volúmenes. P2P disponible con ARS. Staking de SOL disponible en la plataforma.",
                  min: "Desde $5 USD equiv.",
                },
                {
                  exchange: "Bybit",
                  desc: "Buena opción para staking de SOL y trading activo. Comisiones bajas en spot.",
                  min: "Desde $1 USD",
                },
                {
                  exchange: "Coinbase (México, Colombia, Chile)",
                  desc: "Compra directa con tarjeta o transferencia bancaria local. Soporte al usuario sólido en español.",
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

            <div className="mt-6">
              <h3 className="text-white font-black text-xl mb-4">Qué hacer con tu SOL después de comprarlo</h3>
              <div className="space-y-3">
                {[
                  {
                    accion: "Dejarlo en el exchange",
                    para: "Quienes empiezan o van a operar frecuentemente",
                    nota: "Conveniente pero no tenés las claves. Máximo lo que podés perder si el exchange cierra.",
                  },
                  {
                    accion: "Transferirlo a Phantom Wallet",
                    para: "Usuarios intermedios que quieren usar el ecosistema Solana",
                    nota: "La wallet estándar de Solana. Compatible con todos los protocolos DeFi, NFTs y pagos. Guardá tu seed phrase offline.",
                  },
                  {
                    accion: "Hacer staking directamente desde Phantom",
                    para: "Inversión a largo plazo con rendimiento pasivo",
                    nota: "6–8% APR directamente en la wallet. Sin plataformas intermedias. Tus claves, tus monedas, tu staking.",
                  },
                  {
                    accion: "Usar Marinade para liquid staking",
                    para: "Usuarios que quieren staking + liquidez en DeFi",
                    nota: "Recibís mSOL que sigue generando rendimiento de staking mientras podés usarlo como colateral en otros protocolos.",
                  },
                ].map((a) => (
                  <div key={a.accion} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                    <p className="text-verde font-bold">{a.accion}</p>
                    <p className="text-white/40 text-xs mt-1 mb-2">Ideal para: {a.para}</p>
                    <p className="text-white/50 text-sm">{a.nota}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Riesgos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los riesgos reales de Solana
            </h2>
            <p>
              Solana tiene ventajas claras pero también riesgos que cualquier inversor debe conocer:
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  riesgo: "Historial de caídas de red",
                  nivel: "Medio",
                  desc: "En 2021 y 2022 Solana sufrió múltiples interrupciones (outages) que detuvieron todas las transacciones por horas. Desde 2023 la estabilidad mejoró significativamente, pero el historial existe y es un argumento legítimo contra Solana para aplicaciones críticas.",
                  color: "text-dorado",
                },
                {
                  riesgo: "Mayor centralización que Ethereum",
                  nivel: "Medio-alto",
                  desc: "Los validadores de Solana requieren hardware muy potente (alta RAM, SSD NVMe, CPU moderna), lo que limita quién puede participar. Esto hace la red más eficiente pero menos descentralizada. Si los grandes validadores se coordinaran, teóricamente podrían influir en el protocolo.",
                  color: "text-dorado",
                },
                {
                  riesgo: "Volatilidad de precio de SOL",
                  nivel: "Alto",
                  desc: "SOL cayó de $260 en noviembre 2021 a $8 en diciembre 2022 — una caída del 97%. Esto fue parcialmente por el colapso de FTX (que era un gran inversor en Solana). En 2026 el precio se recuperó, pero la volatilidad sigue siendo alta.",
                  color: "text-red-400",
                },
                {
                  riesgo: "Dependencia del ecosistema en Solana Labs",
                  nivel: "Bajo-medio",
                  desc: "Solana Labs (la empresa fundadora) tiene más influencia sobre el protocolo que ocurre en Ethereum. Aunque el código es open source y la governance está evolucionando, el nivel de descentralización de la governance aún no es comparable al de Ethereum.",
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

          {/* Solana en LATAM */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué Solana es especialmente relevante para LATAM
            </h2>
            <div className="space-y-4">
              {[
                {
                  razon: "Transacciones instantáneas y gratuitas",
                  desc: "En Argentina, Venezuela o México, poder enviar valor en segundos sin comisión tiene un impacto práctico enorme. No es teoría — hay comunidades en El Salvador y Venezuela usando Solana Pay para comercio cotidiano.",
                },
                {
                  razon: "DeFi accesible para montos pequeños",
                  desc: "En Ethereum, hacer staking o proveer liquidez con $50 no tiene sentido porque las comisiones de gas consumen el retorno. En Solana, $50 pueden hacer staking y generar $3–4 anuales sin que las comisiones lo hagan inviable.",
                },
                {
                  razon: "Remesas más baratas",
                  desc: "Enviar $100 de EEUU a México por Solana cuesta $0.00025. Por Western Union cuesta $7–15 y tarda 2–3 días. Para las familias que dependen de remesas, la diferencia es real y medible.",
                },
                {
                  razon: "NFTs y cultura digital",
                  desc: "El mercado de NFTs en Solana es el más activo después de Ethereum, con proyectos originados en toda LATAM que encuentran en Solana una plataforma accesible por sus bajas comisiones.",
                },
              ].map((r) => (
                <div key={r.razon} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-verde font-bold mb-2">{r.razon}</p>
                  <p className="text-white/60 text-base">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Solana en 2026: ¿inversión o herramienta?
            </h2>
            <p>
              La pregunta equivocada sobre Solana es "¿debería comprar SOL?". La pregunta correcta
              es "¿qué quiero hacer con blockchain?".
            </p>
            <p className="mt-4">
              Si tu objetivo es la máxima seguridad y decentralización para guardar valor a largo
              plazo: Bitcoin. Si querés acceder al ecosistema DeFi más maduro con mayor TVL: Ethereum.
              Si querés transacciones cotidianas sin comisiones, gaming blockchain, NFTs accesibles
              o el ecosistema DeFi que más crece: Solana.
            </p>
            <p className="mt-4">
              En 2026, los tres coexisten y se complementan. El ecosistema crypto no es suma cero:
              el crecimiento de Solana no perjudica a Ethereum ni a Bitcoin. Son capas diferentes
              de la misma infraestructura financiera descentralizada que está siendo construida.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> seguimos el ecosistema Solana
              de cerca — nuevos proyectos, oportunidades de yield y análisis del mercado, cada semana
              en tu email.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Las mejores oportunidades del ecosistema Solana, cada semana</p>
          <p className="text-white/50 mb-6">
            Análisis del mercado crypto en LATAM: proyectos, yield, airdrops y más. Sin spam. Gratis.
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
            <Link href="/blog/que-es-bitcoin-y-como-funciona" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Bitcoin</span>
              <p className="text-white font-bold mt-2 leading-tight">Qué es Bitcoin y cómo funciona: la guía más simple de 2026</p>
            </Link>
            <Link href="/blog/que-es-defi-como-funciona" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-verde font-bold">DeFi</span>
              <p className="text-white font-bold mt-2 leading-tight">Qué es DeFi y cómo funciona: guía completa para principiantes</p>
            </Link>
          </div>
        </div>

      </div>

      <ArticleCTA
        source="blog_solana"
        hook="¿Más análisis de blockchains que importan?"
      />

      <div className="mt-24">
        <Newsletter />
      </div>
    </div>
  );
}
