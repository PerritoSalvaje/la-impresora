import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Las mejores wallets de crypto en 2026: guía completa para LATAM",
  description:
    "Guía completa de wallets crypto para 2026: MetaMask vs Trust Wallet vs Ledger vs Trezor, hot vs cold wallets, cómo proteger tu seed phrase y los errores fatales que hay que evitar.",
  openGraph: {
    title: "Las mejores wallets de crypto en 2026: guía completa para LATAM",
    description:
      "MetaMask, Trust Wallet, Ledger o Trezor: cuál elegir, cómo hacer el setup inicial, qué es la seed phrase y los errores que cuestan fortunas. La guía definitiva para LATAM.",
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
            <span className="text-white/20 text-xs">· 14 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Las mejores wallets de crypto en 2026:{" "}
            <span className="text-dorado">guía completa</span> para LATAM
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Una wallet crypto no es solo una app. Es la diferencia entre ser dueño real de tus
            activos digitales o depender de que otro los custodie. En Argentina, Venezuela o México,
            donde el riesgo de confiscación y la inestabilidad son reales, elegir la wallet correcta
            no es un detalle técnico — es una decisión financiera fundamental. Esta guía te dice
            exactamente cuál usar y cuándo.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es una wallet crypto: la confusión más común
            </h2>
            <p>
              El error más frecuente es pensar que una wallet "guarda" tus criptomonedas. No es así.
              Tus Bitcoin, Ethereum o cualquier otro activo siempre están en la blockchain, no en
              ningún dispositivo. Lo que guarda una wallet son las <strong className="text-white">
              claves privadas</strong> que te permiten firmar transacciones y demostrar que sos el
              dueño de esos activos.
            </p>
            <p className="mt-4">
              Es la analogía del llavero: las llaves de tu casa no contienen tu casa. Solo te dan
              acceso a ella. Si perdés las llaves, no podés entrar. Si alguien más tiene una copia
              de tus llaves, también puede entrar.
            </p>
            <p className="mt-4">
              Con las claves privadas de una wallet crypto ocurre exactamente lo mismo: quien tiene
              las claves controla los fondos. Por eso la frase más importante del ecosistema es:
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold text-xl">
                "Not your keys, not your coins."
              </p>
              <p className="text-white/60 mt-2">
                Si un exchange u otra plataforma custodia tus claves privadas, técnicamente no son
                tus crypto. Son los de ellos. FTX lo demostró en 2022 cuando colapsó y miles de
                personas perdieron todos sus fondos.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Hot vs Cold wallets: la diferencia que define tu seguridad
            </h2>

            <ArticleCTA />

            <p>
              La clasificación más importante en wallets crypto es hot vs cold. No tiene que ver con
              temperatura — tiene que ver con conectividad a internet.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/20">
                <h3 className="text-dorado font-black text-lg mb-3">Hot Wallets</h3>
                <p className="text-white/60 text-sm mb-4">Conectadas a internet en algún momento</p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Software en tu teléfono o computadora</li>
                  <li>· Convenientes para uso frecuente</li>
                  <li>· Acceso a DeFi y apps descentralizadas</li>
                  <li>· Mayor superficie de ataque (hackeos, malware)</li>
                  <li>· Gratuitas en su mayoría</li>
                  <li>· Ideales para montos que usás activamente</li>
                </ul>
                <p className="text-dorado text-sm font-bold mt-4">Ejemplos: MetaMask, Trust Wallet, Phantom</p>
              </div>
              <div className="p-6 bg-gris-medio rounded-xl border border-verde/20">
                <h3 className="text-verde font-black text-lg mb-3">Cold Wallets</h3>
                <p className="text-white/60 text-sm mb-4">Claves nunca expuestas a internet</p>
                <ul className="space-y-2 text-white/55 text-sm">
                  <li>· Hardware físico (parecido a un USB)</li>
                  <li>· Máxima seguridad posible</li>
                  <li>· La clave privada nunca sale del dispositivo</li>
                  <li>· Requieren confirmación física en el dispositivo</li>
                  <li>· Cuestan $70-200 USD</li>
                  <li>· Ideales para ahorros a largo plazo</li>
                </ul>
                <p className="text-verde text-sm font-bold mt-4">Ejemplos: Ledger, Trezor, Coldcard</p>
              </div>
            </div>

            <p className="mt-6">
              La estrategia óptima es usar ambas: una hot wallet para el día a día (DeFi, pagos,
              operaciones frecuentes) y una cold wallet para la mayor parte de tus ahorros. Lo que
              usás activamente en hot; lo que guardás a largo plazo en cold.
            </p>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              MetaMask vs Trust Wallet vs Ledger vs Trezor: la comparación completa
            </h2>

            <div className="mt-6 space-y-6">

              {/* MetaMask */}
              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/30">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">MetaMask</h3>
                    <p className="text-dorado text-sm font-bold">Hot Wallet · Software · Gratuita</p>
                  </div>
                  <span className="text-white/20 text-sm">Desde 2016</span>
                </div>
                <p className="text-white/65 mb-4">
                  La wallet más utilizada del ecosistema Ethereum y compatible con todas las redes EVM
                  (Arbitrum, Polygon, Optimism, BNB Chain, Avalanche). Es el estándar de facto para
                  acceder a aplicaciones DeFi. Disponible como extensión de navegador y como app móvil.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Puntos fuertes</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Compatible con casi todos los protocolos DeFi</li>
                      <li>· Funciona en múltiples redes con un click</li>
                      <li>· Integración con hardware wallets (Ledger/Trezor)</li>
                      <li>· La más testeada y auditada del mercado</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Puntos débiles</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Solo para redes Ethereum-compatibles (no Bitcoin nativo)</li>
                      <li>· La extensión del navegador puede ser vectores de phishing</li>
                      <li>· La UI puede confundir a principiantes</li>
                      <li>· Requiere configurar cada red manualmente</li>
                    </ul>
                  </div>
                </div>
                <p className="text-dorado text-sm font-bold">Ideal para: usuarios de DeFi, NFTs, Ethereum y Layer 2</p>
              </div>

              {/* Trust Wallet */}
              <div className="p-6 bg-gris-medio rounded-xl border border-blue-400/30">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">Trust Wallet</h3>
                    <p className="text-blue-400 text-sm font-bold">Hot Wallet · Mobile-first · Gratuita</p>
                  </div>
                  <span className="text-white/20 text-sm">Comprada por Binance 2018</span>
                </div>
                <p className="text-white/65 mb-4">
                  Trust Wallet es la wallet oficial de Binance, con soporte multi-chain nativo. A
                  diferencia de MetaMask, tiene soporte incorporado para Bitcoin, Solana, BNB Chain,
                  Ethereum y decenas de otras redes sin configuración adicional. Más amigable para
                  principiantes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Puntos fuertes</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Soporte multi-chain sin configuración</li>
                      <li>· Interfaz más intuitiva que MetaMask</li>
                      <li>· Staking incorporado para varios activos</li>
                      <li>· Buena app móvil para gestión de portfolio</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Puntos débiles</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Conexión a dApps menos fluida que MetaMask</li>
                      <li>· Asociación con Binance genera dudas de centralización para puristas</li>
                      <li>· Menos integración con protocolos DeFi avanzados</li>
                    </ul>
                  </div>
                </div>
                <p className="text-blue-400 text-sm font-bold">Ideal para: principiantes, usuarios multi-chain, holders que no usan DeFi activamente</p>
              </div>

              {/* Ledger */}
              <div className="p-6 bg-gris-medio rounded-xl border border-verde/30">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">Ledger</h3>
                    <p className="text-verde text-sm font-bold">Cold Wallet · Hardware · $79-$249 USD</p>
                  </div>
                  <span className="text-white/20 text-sm">Empresa francesa</span>
                </div>
                <p className="text-white/65 mb-4">
                  Ledger es el fabricante de wallets de hardware más popular del mundo. Sus modelos
                  principales son el Nano S Plus ($79 aprox.) y el Flex ($149 aprox.). Las claves
                  privadas se generan y almacenan dentro de un chip de seguridad certificado y
                  nunca salen del dispositivo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Puntos fuertes</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Chip de seguridad certificado CC EAL6+</li>
                      <li>· Compatible con MetaMask, DeFi y miles de tokens</li>
                      <li>· La interfaz Ledger Live es clara y funcional</li>
                      <li>· Mayor adopción = mayor soporte comunitario</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Puntos débiles</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· En 2023 intentaron lanzar un servicio de backup de seed en la nube (luego cancelado), lo que generó controversia sobre si el firmware puede exponer claves</li>
                      <li>· En 2020 filtraron datos personales de clientes (emails y direcciones)</li>
                      <li>· El software Ledger Live es closed source</li>
                    </ul>
                  </div>
                </div>
                <p className="text-verde text-sm font-bold">Ideal para: usuarios que quieren cold storage con buena UX y compatibilidad amplia</p>
              </div>

              {/* Trezor */}
              <div className="p-6 bg-gris-medio rounded-xl border border-white/20">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">Trezor</h3>
                    <p className="text-white/50 text-sm font-bold">Cold Wallet · Hardware · $69-$219 USD</p>
                  </div>
                  <span className="text-white/20 text-sm">Empresa checa, desde 2014</span>
                </div>
                <p className="text-white/65 mb-4">
                  Trezor es el primer fabricante de wallets de hardware del mundo. Sus modelos principales
                  son el Model One ($69 aprox.) y el Model T ($219 aprox.). La ventaja clave de Trezor
                  sobre Ledger para los puristas: todo su software es open source y puede ser auditado
                  por cualquiera.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Puntos fuertes</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Completamente open source (firmware y software)</li>
                      <li>· Sin chip propietario cerrado: más auditado</li>
                      <li>· Pasphrase adicional (25ª palabra) para seguridad extra</li>
                      <li>· Compatible con gran cantidad de tokens y redes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Puntos débiles</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Sin chip de seguridad certificado: físicamente más vulnerable si alguien tiene el dispositivo</li>
                      <li>· Menos compatible con DeFi avanzado que Ledger</li>
                      <li>· La interfaz es más básica que la de Ledger</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/60 text-sm font-bold">Ideal para: usuarios que priorizan open source y máxima verificabilidad del código</p>
              </div>

            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cuándo usar cada tipo de wallet
            </h2>
            <p>
              La respuesta depende de tres factores: qué cantidad de fondos manejás, con qué frecuencia
              accedés a ellos y cuál es tu tolerancia al riesgo de pérdida vs inconveniencia.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  situacion: "Estás empezando con menos de $500",
                  recomendacion: "Trust Wallet o MetaMask",
                  razon: "El costo de una hardware wallet no está justificado todavía. Una hot wallet bien configurada es suficiente para montos pequeños.",
                  icono: "🌱",
                },
                {
                  situacion: "Usás DeFi activamente (swaps, lending, yield farming)",
                  recomendacion: "MetaMask (hot) + Ledger (cold para el resto)",
                  razon: "MetaMask es el estándar para DeFi. Pero dejá el mínimo necesario en la hot wallet. Los ahorros que no estás usando van al Ledger.",
                  icono: "⚡",
                },
                {
                  situacion: "Guardás más de $2,000 en crypto",
                  recomendacion: "Hardware wallet obligatoria",
                  razon: "A ese monto, el costo de un Ledger ($79) es trivial comparado con el riesgo de perder todo por un malware en tu computadora o teléfono.",
                  icono: "🔒",
                },
                {
                  situacion: "Tenés ahorros a largo plazo (Bitcoin principalmente)",
                  recomendacion: "Trezor o Ledger + sin conexión habitual",
                  razon: "La configuración óptima para hodlers: configurar el hardware wallet una vez, mover los fondos, y guardarlo en un lugar seguro. No necesitás conectarlo cada semana.",
                  icono: "🏦",
                },
                {
                  situacion: "Recibís pagos frecuentes en crypto (freelancer)",
                  recomendacion: "Hot wallet para recibir, cold wallet para ahorrar",
                  razon: "Recibí los pagos en tu MetaMask o Trust Wallet. Periódicamente mové la mayor parte a tu hardware wallet. Flujo eficiente sin sacrificar seguridad.",
                  icono: "💼",
                },
              ].map((item) => (
                <div key={item.situacion} className="flex gap-4 p-5 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-2xl shrink-0">{item.icono}</span>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.situacion}</p>
                    <p className="text-dorado font-bold mb-2">{item.recomendacion}</p>
                    <p className="text-white/55 text-base">{item.razon}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es la seed phrase y cómo protegerla: lo más importante de esta guía
            </h2>
            <p>
              La seed phrase (también llamada "frase semilla", "mnemónica" o "frase de recuperación")
              es una secuencia de 12 o 24 palabras en inglés que se genera cuando creás una wallet
              no-custodial. Estas palabras son la representación legible de tu clave privada.
            </p>
            <p className="mt-4">
              Si tenés estas palabras, tenés todo. Si perdés estas palabras y perdés acceso a tu wallet
              (teléfono roto, computadora muerta, hardware wallet dañada), perdés todos los fondos para
              siempre. No hay recuperación de contraseña. No hay servicio de atención al cliente. No hay
              excepción.
            </p>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Esta no es hipérbole: se estima que el 20% de todos los Bitcoin existentes —
                aproximadamente $100 mil millones de dólares — están permanentemente perdidos porque
                sus dueños perdieron acceso a sus claves privadas. La seed phrase es el activo
                más crítico que vas a custodiar.
              </p>
            </div>

            <h3 className="text-white font-black text-xl mb-4 mt-8">
              Cómo proteger tu seed phrase correctamente
            </h3>
            <div className="space-y-3">
              {[
                {
                  accion: "Escribila a mano, en papel",
                  detalle: "Nunca en digital. Nunca en un documento de Google Drive, en Notion, en el mail, en un screenshot. Si está en un dispositivo conectado a internet, puede ser robada. Papel, lápiz, letra legible.",
                  tipo: "Obligatorio",
                  color: "text-verde",
                },
                {
                  accion: "Hacé dos copias y guardalas en lugares distintos",
                  detalle: "Una copia en tu casa, otra en otro lugar (casa de un familiar de confianza, caja de seguridad bancaria). Si hay un incendio o robo en un lugar, la segunda copia te salva.",
                  tipo: "Muy recomendado",
                  color: "text-verde",
                },
                {
                  accion: "Considerá una placa de acero",
                  detalle: "Existen productos (Cryptosteel, Bilodex) que te permiten grabar tu seed phrase en acero inoxidable. Resisten fuego, agua y golpes. Para montos importantes, vale la inversión de $30-80.",
                  tipo: "Para montos grandes",
                  color: "text-dorado",
                },
                {
                  accion: "Nunca la digas a nadie",
                  detalle: "Ningún exchange, ningún soporte técnico, ningún 'experto en crypto' necesita tu seed phrase para ayudarte. Si alguien te la pide, es una estafa 100% del tiempo, sin excepción.",
                  tipo: "Obligatorio",
                  color: "text-red-400",
                },
                {
                  accion: "Nunca la ingreses en sitios web",
                  detalle: "Las seed phrases solo se ingresan en la wallet oficial o en el hardware wallet físico. Cualquier sitio que te pida tu seed phrase es un sitio de phishing diseñado para robarte los fondos.",
                  tipo: "Obligatorio",
                  color: "text-red-400",
                },
              ].map((item) => (
                <div key={item.accion} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{item.accion}</p>
                    <span className={`text-xs font-bold ${item.color}`}>{item.tipo}</span>
                  </div>
                  <p className="text-white/55 text-base">{item.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo hacer el setup inicial de MetaMask: paso a paso
            </h2>
            <p>
              MetaMask es la wallet más utilizada del ecosistema y el mejor punto de partida para
              usuarios intermedios. Este es el proceso completo de configuración:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  paso: "1. Descargá MetaMask del sitio oficial",
                  detalle: "Entrá a metamask.io desde tu navegador. VERIFICÁ que la URL sea exactamente metamask.io — hay decenas de sitios de phishing con nombres similares. Instalá la extensión para Chrome, Firefox o Brave. O la app desde App Store / Google Play buscando 'MetaMask'.",
                  alerta: false,
                },
                {
                  paso: "2. Creá una nueva wallet",
                  detalle: "Seleccioná 'Crear una nueva wallet'. Establecé una contraseña fuerte — esta contraseña desbloquea MetaMask en tu dispositivo, pero NO es tu seed phrase. Si olvidás la contraseña, podés recuperar el acceso con la seed phrase.",
                  alerta: false,
                },
                {
                  paso: "3. ESCRIBÍ TU SEED PHRASE AHORA",
                  detalle: "MetaMask te mostrará tus 12 palabras. Escribilas en orden exacto en papel. Confirmalas en el paso siguiente. Esta es la parte más crítica del proceso. Tomate el tiempo necesario. No sigas hasta tener la seed phrase guardada en papel.",
                  alerta: true,
                },
                {
                  paso: "4. Confirmá la seed phrase",
                  detalle: "MetaMask te pedirá seleccionar las palabras en orden para confirmar que las guardaste. Completá este paso con las palabras de tu papel. Si las confirmás de memoria y después perdés el papel, estás en problemas.",
                  alerta: false,
                },
                {
                  paso: "5. Configurá las redes que necesitás",
                  detalle: "Por defecto, MetaMask conecta con Ethereum Mainnet. Para agregar Arbitrum, Polygon u otras redes, entrá a chainlist.org, conectá tu MetaMask y agregá las redes con un click. Esta es la forma más segura de agregar redes sin errores de configuración manual.",
                  alerta: false,
                },
                {
                  paso: "6. Activá la verificación de transacciones",
                  detalle: "En la configuración de MetaMask, asegurate de que las alertas de phishing y la verificación de contratos están activadas. MetaMask puede alertarte si intentás conectarte a un sitio conocido como malicioso.",
                  alerta: false,
                },
              ].map((p, i) => (
                <div key={i} className={`p-5 bg-gris-medio rounded-xl border ${p.alerta ? "border-red-400/30" : "border-white/5"}`}>
                  <p className={`font-bold mb-2 ${p.alerta ? "text-red-400" : "text-white"}`}>{p.paso}</p>
                  <p className="text-white/55 text-base">{p.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los errores fatales que hay que evitar
            </h2>
            <p>
              Estos son los errores que han costado fortunas reales a personas reales. No son
              hipotéticos. Pasaron miles de veces y siguen pasando cada semana:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  error: "Guardar la seed phrase en una foto o screenshot",
                  consecuencia: "Si hackean tu iCloud, Google Photos o tu teléfono, la seed phrase está disponible. Millones de dollars en crypto se han perdido así.",
                  nivel: "Fatal",
                },
                {
                  error: "Hacer clic en links de 'soporte técnico' en Discord o Telegram",
                  consecuencia: "Los scammers crean bots y cuentas falsas en comunidades de crypto que se hacen pasar por soporte oficial. Te piden que 'conectes' tu wallet a un sitio fraudulento que les da permiso de vaciar tus fondos.",
                  nivel: "Fatal",
                },
                {
                  error: "Aprobar transacciones sin leer qué estás aprobando",
                  consecuencia: "Cuando conectás una wallet a una dApp, a veces se te pide 'aprobar' el gasto de tokens. Algunos contratos maliciosos piden aprobación ilimitada para todos tus tokens. Si aprobás, el contrato puede vaciar tu wallet cuando quiera.",
                  nivel: "Fatal",
                },
                {
                  error: "Comprar hardware wallets en Mercado Libre o tiendas no oficiales",
                  consecuencia: "Los hardware wallets comprados de revendedores pueden haber sido manipulados con malware antes de llegar a tus manos. Solo comprá directamente del fabricante: ledger.com, trezor.io.",
                  nivel: "Muy alto",
                },
                {
                  error: "Tener una sola copia de la seed phrase",
                  consecuencia: "Una inundación, un incendio, o simplemente perder el papel significa perder todo para siempre. Dos copias en lugares distintos es el mínimo razonable.",
                  nivel: "Muy alto",
                },
                {
                  error: "Dejar todos tus fondos en un exchange",
                  consecuencia: "FTX, Celsius, Voyager, Mt. Gox. Todos eran 'seguros' hasta que dejaron de serlo. Los exchanges son para operar, no para guardar ahorros a largo plazo.",
                  nivel: "Alto",
                },
              ].map((item) => (
                <div key={item.error} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{item.error}</p>
                    <span className={`text-xs font-bold shrink-0 ${item.nivel === "Fatal" ? "text-red-400" : item.nivel === "Muy alto" ? "text-dorado" : "text-white/40"}`}>{item.nivel}</span>
                  </div>
                  <p className="text-white/55 text-base">{item.consecuencia}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Tu wallet es tan segura como las decisiones que tomás
            </h2>
            <p>
              La tecnología de las wallets crypto es sólida. MetaMask no tiene bugs críticos conocidos.
              Ledger y Trezor hacen su trabajo. El eslabón más débil de la cadena de seguridad no es
              el software ni el hardware — sos vos.
            </p>
            <p className="mt-4">
              La mayoría de los robos de crypto ocurren por ingeniería social (alguien te convence de
              entregar tu seed phrase o aprobar una transacción maliciosa), no por hackeos sofisticados.
              La defensa más efectiva es educación y skepticismo: si algo parece demasiado bueno, urgente
              o sospechoso, probablemente lo sea.
            </p>
            <p className="mt-4">
              Para LATAM, tener el control total de tus activos no es un lujo — es una necesidad.
              El sistema financiero de la región ha demostrado repetidamente que los intermediarios pueden
              fallar, congelar o confiscar. Una wallet bien configurada y una seed phrase bien custodiada
              son las herramientas más poderosas de soberanía financiera que existen hoy.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> seguimos de cerca las novedades
              en seguridad y herramientas de crypto para que tomes las mejores decisiones con tu dinero.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Crypto explicado para que puedas ser dueño real de tu dinero</p>
          <p className="text-white/50 mb-6">
            Cada jueves: educación, seguridad y oportunidades en crypto para LATAM. Sin spam. Gratis para siempre.
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
            <Link href="/blog/como-declarar-crypto-argentina" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Cómo declarar criptomonedas en Argentina 2026: guía completa ARCA</p>
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
