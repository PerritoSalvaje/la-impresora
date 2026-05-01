export const metadata = {
  title: "Glosario de Crypto, AI y Finanzas Digitales — La Impresora",
  description:
    "40+ términos de crypto, AI y finanzas digitales explicados en lenguaje simple para LATAM. Sin jerga innecesaria, con ejemplos prácticos.",
};

type Termino = {
  termino: string;
  definicion: string;
  ejemplo?: string;
  tag?: string;
  tagColor?: string;
};

const terminos: Termino[] = [
  // A
  {
    termino: "Address / Dirección",
    definicion:
      "Una cadena de letras y números que identifica una billetera de cripto en la blockchain. Es como el CBU o IBAN de las criptomonedas: si querés recibir fondos, das tu address.",
    ejemplo:
      "Ejemplo: 0x3fC91A3afd70395Cd496C647d5a6CC9D... (dirección Ethereum). Nunca la confundas con tu clave privada.",
    tag: "A",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  {
    termino: "Altcoin",
    definicion:
      "Cualquier criptomoneda que no es Bitcoin. El nombre viene de 'alternative coin'. ETH, SOL, AVAX, ADA son todas altcoins. Hay más de 20,000, aunque la gran mayoría no tienen valor real.",
    ejemplo:
      "Ejemplo: Si comprás Ethereum, estás comprando una altcoin. Si comprás Bitcoin, no.",
    tag: "A",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  // B
  {
    termino: "Bear Market",
    definicion:
      "Período prolongado de caída generalizada de precios en el mercado cripto. Técnicamente se considera bear market cuando el activo cae más del 20% desde su máximo. En crypto son especialmente brutales: caídas del 70-80% son normales.",
    ejemplo:
      "Ejemplo: El mercado cripto de 2022 fue un bear market clásico: Bitcoin cayó de $69,000 a menos de $16,000.",
    tag: "B",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    termino: "Bitcoin (BTC)",
    definicion:
      "La primera criptomoneda, creada en 2009 por una persona o grupo bajo el seudónimo Satoshi Nakamoto. Es un sistema de dinero digital descentralizado: no hay banco ni gobierno que lo controle. Tiene un límite de 21 millones de monedas, lo que lo hace deflacionario.",
    ejemplo:
      "Ejemplo: Funciona como el oro digital: escaso, divisible y transferible sin intermediarios a cualquier parte del mundo en minutos.",
    tag: "B",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    termino: "Blockchain",
    definicion:
      "Una base de datos distribuida que registra transacciones en bloques encadenados cronológicamente. Una vez que un dato entra a la blockchain, no se puede modificar ni borrar. No hay un servidor central: miles de computadoras guardan copias idénticas.",
    ejemplo:
      "Ejemplo: Cuando enviás Bitcoin a alguien, esa transacción queda registrada para siempre en la blockchain de Bitcoin, visible para cualquiera.",
    tag: "B",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    termino: "Bull Market",
    definicion:
      "Período prolongado de subida generalizada de precios. En crypto, los bull markets suelen ser explosivos: ganancias del 100%, 500% o más en meses. Históricamente ocurren en ciclos, generalmente después del halving de Bitcoin.",
    ejemplo:
      "Ejemplo: 2020-2021 fue un bull market histórico: Bitcoin subió de $10,000 a casi $69,000 en poco más de un año.",
    tag: "B",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  // D
  {
    termino: "DCA (Dollar Cost Averaging)",
    definicion:
      "Estrategia de inversión que consiste en comprar un activo de forma regular con el mismo monto de dinero, independientemente del precio. Reduce el riesgo de comprar todo en el peor momento. Es la estrategia que recomiendan la mayoría de los expertos para activos volátiles.",
    ejemplo:
      "Ejemplo: En vez de poner $1,200 de golpe, comprás $100 de Bitcoin cada primer día del mes durante 12 meses.",
    tag: "D",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    termino: "DeFi (Finanzas Descentralizadas)",
    definicion:
      "Ecosistema de aplicaciones financieras construidas sobre blockchains que permiten prestar, pedir prestado, intercambiar y ganar rendimiento sin bancos ni intermediarios. Todo corre en smart contracts: código que ejecuta reglas automáticamente.",
    ejemplo:
      "Ejemplo: En Aave (un protocolo DeFi) podés depositar USDC y recibir un porcentaje anual en intereses, sin abrir cuenta en ningún banco.",
    tag: "D",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  // E
  {
    termino: "ETH (Ethereum)",
    definicion:
      "La segunda criptomoneda más importante y la blockchain más usada para smart contracts y aplicaciones descentralizadas. ETH es el token nativo que se usa para pagar las comisiones de la red (gas). Es la base de DeFi, NFTs y gran parte de Web3.",
    ejemplo:
      "Ejemplo: Si querés usar una aplicación DeFi en la red Ethereum, necesitás tener algo de ETH para pagar las comisiones, aunque tu transacción sea en USDC.",
    tag: "E",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  // F
  {
    termino: "FOMO (Fear Of Missing Out)",
    definicion:
      "El miedo a perderse una oportunidad. En crypto es una emoción que lleva a comprar activos en sus máximos históricos por presión social o miedo a quedar afuera. Una de las causas más comunes de pérdidas para inversores nuevos.",
    ejemplo:
      "Ejemplo: Ver que Bitcoin subió 40% en una semana y comprar en el pico porque creés que va a seguir subiendo indefinidamente. Suele terminar mal.",
    tag: "F",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  {
    termino: "Fork",
    definicion:
      "Un cambio en las reglas de un protocolo blockchain. Un 'soft fork' es compatible con versiones anteriores. Un 'hard fork' no lo es y puede crear una nueva moneda separada. Los forks pueden ser planificados (actualizaciones) o controvertidos (desacuerdos en la comunidad).",
    ejemplo:
      "Ejemplo: Bitcoin Cash (BCH) nació de un hard fork de Bitcoin en 2017 por un desacuerdo sobre el tamaño de los bloques.",
    tag: "F",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  {
    termino: "FUD (Fear, Uncertainty and Doubt)",
    definicion:
      "Miedo, Incertidumbre y Duda. Información negativa (real o fabricada) que circula para bajar el precio o el sentimiento de un activo. También se usa para describir el estado emocional de los inversores en momentos de caída.",
    ejemplo:
      "Ejemplo: Noticias de que un gobierno va a prohibir Bitcoin circulan regularmente y generan FUD, aunque raramente tengan impacto real a largo plazo.",
    tag: "F",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  // G
  {
    termino: "Gas",
    definicion:
      "La comisión que se paga por ejecutar transacciones o contratos en la blockchain de Ethereum. Se mide en Gwei (una fracción diminuta de ETH). El precio del gas varía según la congestión de la red: cuando hay mucha actividad, el gas sube.",
    ejemplo:
      "Ejemplo: Si querés intercambiar tokens en Uniswap, pagás una comisión en ETH (gas). En momentos de alta demanda puede costar $20-50 USD por transacción.",
    tag: "G",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  // H
  {
    termino: "Halving",
    definicion:
      "Evento programado en Bitcoin que ocurre cada 4 años aproximadamente y reduce a la mitad la cantidad de BTC que reciben los mineros por procesar bloques. Reduce la tasa de emisión de nuevos Bitcoin, haciendo el activo más escaso. Históricamente ha precedido bull markets.",
    ejemplo:
      "Ejemplo: En abril 2024 ocurrió el cuarto halving de Bitcoin: la recompensa pasó de 6.25 BTC a 3.125 BTC por bloque.",
    tag: "H",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    termino: "Hash / Hashrate",
    definicion:
      "Un hash es el resultado de aplicar un algoritmo matemático a datos: siempre produce la misma salida para la misma entrada, pero es imposible hacer el proceso inverso. El hashrate es la capacidad de cómputo total de la red Bitcoin: mide su seguridad y decentralización.",
    ejemplo:
      "Ejemplo: Un hashrate más alto significa que más computadoras protegen la red y es más difícil atacarla.",
    tag: "H",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    termino: "HODL",
    definicion:
      "Estrategia de mantener una criptomoneda a largo plazo sin vender, independientemente de la volatilidad del precio. Nació de un error tipográfico ('hold') en un foro en 2013 y se convirtió en filosofía de inversión. El acrónimo backronym: 'Hold On for Dear Life'.",
    ejemplo:
      "Ejemplo: Un HODLer compró Bitcoin en 2015 a $300 y no vendió durante las caídas de 2018 ni 2022. En 2024 tenía una ganancia del +23,000%.",
    tag: "H",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  // L
  {
    termino: "Layer 2",
    definicion:
      "Redes construidas sobre blockchains principales (Layer 1) para aumentar la velocidad y reducir los costos de transacción. Procesan transacciones fuera de la cadena principal y las comprimen para publicarlas en batch. Polygon, Arbitrum y Optimism son ejemplos sobre Ethereum.",
    ejemplo:
      "Ejemplo: Una transacción en Ethereum puede costar $10 en gas. La misma transacción en Arbitrum (Layer 2) puede costar $0.10, con la misma seguridad.",
    tag: "L",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    termino: "Liquidez",
    definicion:
      "La facilidad con la que un activo puede comprarse o venderse sin mover significativamente su precio. Alta liquidez = podés vender grandes cantidades sin afectar el precio. Baja liquidez = vender puede colapsar el precio o ser imposible en momentos de pánico.",
    ejemplo:
      "Ejemplo: Bitcoin tiene alta liquidez: podés vender $1 millón sin mover mucho el precio. Una altcoin pequeña puede tener tan poca liquidez que vender $5,000 ya derrumba el precio.",
    tag: "L",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  // M
  {
    termino: "Mining / Minería",
    definicion:
      "El proceso de usar poder computacional para validar transacciones en blockchains de Proof of Work (como Bitcoin). Los mineros compiten para resolver puzzles matemáticos: quien lo resuelve primero añade el siguiente bloque y recibe la recompensa en BTC.",
    ejemplo:
      "Ejemplo: Grandes granjas de minería en Argentina o Paraguay usan energía barata para minar Bitcoin y venderlo en dólares.",
    tag: "M",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  // N
  {
    termino: "NFT (Non-Fungible Token)",
    definicion:
      "Token único en una blockchain que representa la propiedad de un activo digital o real. A diferencia de Bitcoin (donde cada unidad es idéntica), cada NFT es único e irrepetible. Pueden representar arte digital, músicas, credenciales, entradas a eventos o cualquier activo.",
    ejemplo:
      "Ejemplo: Un ticket de concierto como NFT puede verificarse en la blockchain, no puede falsificarse y puede revenderse con regalías automáticas al artista.",
    tag: "N",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  // O
  {
    termino: "On-chain",
    definicion:
      "Todo lo que ocurre directamente en la blockchain y queda registrado permanentemente. Las transacciones on-chain son transparentes, verificables por cualquiera e inmutables. Se opone a 'off-chain', que son operaciones que ocurren fuera de la blockchain.",
    ejemplo:
      "Ejemplo: Si enviás ETH desde tu wallet a otra wallet, eso es on-chain. Si movés saldo dentro de Binance entre cuentas, es off-chain: ocurre en la base de datos interna de Binance.",
    tag: "O",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  // P
  {
    termino: "P2P (Peer-to-Peer)",
    definicion:
      "Sistema donde dos partes interactúan directamente sin intermediario. En crypto, las transacciones P2P permiten comprar y vender entre personas sin pasar por un exchange centralizado. También se usa para plataformas de préstamo o intercambio directo.",
    ejemplo:
      "Ejemplo: En LocalBitcoins o Binance P2P podés comprar Bitcoin directamente de otra persona transfiriéndole pesos por Mercado Pago.",
    tag: "P",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    termino: "PoS (Proof of Stake)",
    definicion:
      "Mecanismo de consenso donde los validadores deben 'apostar' (hacer staking) de tokens como garantía para validar transacciones. Consume mucha menos energía que Proof of Work. Ethereum migró a PoS en 2022 en 'The Merge', reduciendo su consumo energético en ~99.95%.",
    ejemplo:
      "Ejemplo: Para ser validador en Ethereum necesitás depositar 32 ETH como garantía. Si actúas maliciosamente, perdés parte de ese depósito.",
    tag: "P",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    termino: "PoW (Proof of Work)",
    definicion:
      "Mecanismo de consenso donde los mineros usan poder computacional para validar transacciones. Consumo energético alto, pero extremadamente seguro y probado. Bitcoin usa PoW desde 2009 y nunca ha sido hackeado a nivel de protocolo.",
    ejemplo:
      "Ejemplo: Para atacar Bitcoin con Proof of Work necesitarías controlar más del 51% del hashrate global, lo que costaría miles de millones de dólares.",
    tag: "P",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    termino: "Private Key / Clave Privada",
    definicion:
      "Una cadena de caracteres que actúa como contraseña maestra de tu wallet. Con ella podés firmar transacciones y mover fondos. Si la perdés, perdés el acceso a tus cripto para siempre. Si alguien más la obtiene, puede robarte todo.",
    ejemplo:
      "Ejemplo: Tu private key es como la llave de una caja de seguridad sin duplicado. No existe un banco que te pueda ayudar a recuperarla si la perdés.",
    tag: "P",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    termino: "Protocol / Protocolo",
    definicion:
      "Conjunto de reglas que definen cómo opera una blockchain o aplicación descentralizada. Bitcoin es un protocolo, Ethereum es un protocolo, Uniswap es un protocolo DeFi. Los protocolos son la infraestructura sobre la que se construyen las aplicaciones.",
    ejemplo:
      "Ejemplo: Uniswap es un protocolo de intercambio descentralizado: nadie lo controla, sus reglas están escritas en código y cualquiera puede usarlo.",
    tag: "P",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  // R
  {
    termino: "Rekt",
    definicion:
      "Jerga de gaming/crypto que significa 'arruinado' o haber perdido mucho dinero en una inversión. Viene del inglés 'wrecked' (destrozado). Se usa para describir pérdidas masivas, ya sea por una mala inversión, por apalancamiento excesivo o por un rugpull.",
    ejemplo:
      "Ejemplo: 'Me rektié comprando Luna justo antes del colapso de $80 a $0 en mayo 2022.'",
    tag: "R",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  {
    termino: "RWA (Real World Assets)",
    definicion:
      "Activos del mundo real —inmuebles, bonos, commodities, arte— tokenizados en una blockchain para poder fraccionarlos e intercambiarlos digitalmente. Es una de las tendencias más importantes de la industria: permite invertir en activos antes reservados para ricos.",
    ejemplo:
      "Ejemplo: Plataformas como Lofty o RealT permiten comprar fracciones de inmuebles en EE.UU. desde $50 y recibir rentas en stablecoins.",
    tag: "R",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  {
    termino: "Rugpull",
    definicion:
      "Estafa en la que los creadores de un proyecto cripto o DeFi retiran toda la liquidez o fondos de repente, dejando a los inversores con tokens sin valor. Es una de las formas de fraude más comunes en el espacio DeFi.",
    ejemplo:
      "Ejemplo: Un proyecto lanza un token, capta $2M en liquidez, y de repente sus creadores retiran todo el dinero y desaparecen. Los inversores se quedan con tokens que valen $0.",
    tag: "R",
    tagColor: "bg-red-400/10 text-red-400 border-red-400/20",
  },
  // S
  {
    termino: "Seed Phrase / Frase Semilla",
    definicion:
      "Una lista de 12 o 24 palabras en inglés que sirve como respaldo maestro de tu wallet de cripto. Con estas palabras podés recuperar el acceso a tu wallet desde cualquier dispositivo. Si alguien más las tiene, tiene control total sobre tus fondos.",
    ejemplo:
      "Ejemplo: 'tiger planet cloud river...' — Estas palabras se escriben en papel físico y se guardan en un lugar seguro. Nunca se fotografían, nunca se guardan digitalmente.",
    tag: "S",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  {
    termino: "Smart Contract",
    definicion:
      "Programa que vive en una blockchain y ejecuta automáticamente reglas predefinidas cuando se cumplen ciertas condiciones. No necesita intermediario: el código es la ley. Son la base de DeFi, NFTs y aplicaciones descentralizadas.",
    ejemplo:
      "Ejemplo: Un smart contract puede liberar un pago automáticamente cuando se confirma la entrega de un producto, sin necesidad de banco, escribano ni abogado.",
    tag: "S",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  {
    termino: "Stablecoin",
    definicion:
      "Criptomoneda diseñada para mantener un valor estable, generalmente anclada al dólar estadounidense en proporción 1:1. Existen tres tipos: respaldadas por dólares reales (USDC, USDT), respaldadas por cripto (DAI) y algorítmicas (históricamente peligrosas).",
    ejemplo:
      "Ejemplo: USDC es una stablecoin respaldada por dólares reales en cuentas bancarias. 1 USDC = 1 USD siempre. Permite operar en DeFi o enviar dólares sin intermediarios.",
    tag: "S",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
  // T
  {
    termino: "Token",
    definicion:
      "Activo digital creado sobre una blockchain existente (a diferencia de una 'coin' que es nativa de su propia blockchain). Los tokens pueden representar valor, derechos de voto, acceso a servicios o cualquier activo. La mayoría de las cripto son tokens sobre Ethereum.",
    ejemplo:
      "Ejemplo: USDC es un token creado sobre Ethereum. UNI (el token de Uniswap) también. En cambio, ETH es una coin: nativa de la blockchain de Ethereum.",
    tag: "T",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  {
    termino: "Tokenización",
    definicion:
      "El proceso de representar derechos sobre un activo del mundo real (inmueble, empresa, deuda, arte) como un token en una blockchain. Permite fraccionar activos que antes eran indivisibles y negociarlos 24/7 sin intermediarios.",
    ejemplo:
      "Ejemplo: Un edificio de $1M puede tokenizarse en 100,000 tokens de $10 cada uno. Cualquier persona puede comprar 5 tokens ($50) y recibir proporcional de la renta mensual.",
    tag: "T",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
  },
  // U
  {
    termino: "USDC",
    definicion:
      "USD Coin, una stablecoin creada por Circle respaldada 1:1 con dólares reales guardados en cuentas bancarias reguladas. Es la stablecoin más transparente del mercado: publica auditorías mensuales. Base de la mayoría de las operaciones DeFi serias.",
    ejemplo:
      "Ejemplo: Podés convertir pesos a USDC en un exchange, retirarlos a tu wallet y ponerlos a trabajar en DeFi ganando 5-8% anual, sin que nadie pueda confiscártelos.",
    tag: "U",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    termino: "USDT (Tether)",
    definicion:
      "La stablecoin más usada por volumen, creada por Tether Limited. También anclada al dólar 1:1, pero con más controversias sobre la calidad de sus reservas comparado con USDC. Sigue siendo la más líquida en exchanges.",
    ejemplo:
      "Ejemplo: USDT es más usada que USDC en exchanges del sudeste asiático y en plataformas con mayor volumen de trading especulativo.",
    tag: "U",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  // W
  {
    termino: "Wallet / Billetera",
    definicion:
      "Software o hardware que almacena las claves privadas que dan acceso a tus cripto. Técnicamente el dinero está en la blockchain, no en la wallet: la wallet solo guarda las claves. Pueden ser custodiales (el exchange las controla) o self-custody (vos tenés las claves).",
    ejemplo:
      "Ejemplo: MetaMask y Phantom son wallets de software. Ledger y Trezor son wallets de hardware (cold wallets), consideradas las más seguras para montos grandes.",
    tag: "W",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  {
    termino: "Web3",
    definicion:
      "Término que describe la visión de una internet descentralizada donde los usuarios controlan sus datos y activos digitales en lugar de las grandes plataformas. Construida sobre blockchains y contratos inteligentes. Opuesta a Web2 (Facebook, Google) donde la empresa controla todo.",
    ejemplo:
      "Ejemplo: En Web2, si Twitter cierra tu cuenta, perdés tus seguidores. En Web3, tus seguidores están en la blockchain y te los llevás a cualquier plataforma.",
    tag: "W",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  {
    termino: "Whale",
    definicion:
      "Inversores o entidades que poseen cantidades masivas de una criptomoneda y cuyas transacciones pueden mover el mercado. En Bitcoin, se considera whale a quienes tienen más de 1,000 BTC. Sus movimientos son monitoreados públicamente por la comunidad.",
    ejemplo:
      "Ejemplo: Cuando una wallet whale transfiere grandes cantidades a un exchange, la comunidad interpreta que puede haber una venta masiva inminente y el precio puede caer.",
    tag: "W",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  },
  // Y
  {
    termino: "Yield Farming",
    definicion:
      "Estrategia DeFi que consiste en mover capital entre diferentes protocolos para maximizar el rendimiento. Puede combinar provisión de liquidez, staking y préstamos. Ofrece rendimientos potencialmente altos pero con riesgos significativos: smart contract risk, impermanent loss y liquidez.",
    ejemplo:
      "Ejemplo: Depositar USDC en Curve Finance para proveer liquidez y recibir CRV como recompensa, mientras el USDC genera intereses. Podés llegar a 10-20% APY, con los riesgos correspondientes.",
    tag: "Y",
    tagColor: "bg-verde/10 text-verde border-verde/20",
  },
];

// Agrupar por letra inicial
const letras = Array.from(new Set(terminos.map((t) => t.tag || t.termino[0]))).sort();

export default function GlosarioPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Glosario
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Crypto y AI:<br />
            <span className="text-verde verde-text-glow">el diccionario que nadie te dio</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            40+ términos de cripto, AI y finanzas digitales explicados en español, en lenguaje simple
            y con ejemplos concretos para la realidad de LATAM.
          </p>
        </div>
      </section>

      {/* Índice de letras */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {letras.map((letra) => (
              <a
                key={letra}
                href={`#letra-${letra}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gris-medio border border-white/10 text-sm font-black hover:border-verde hover:text-verde transition-colors"
              >
                {letra}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Términos */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {letras.map((letra) => {
            const grupo = terminos.filter((t) => (t.tag || t.termino[0]) === letra);
            return (
              <div key={letra} id={`letra-${letra}`}>
                {/* Separador de letra */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gris-medio border border-white/10 flex items-center justify-center text-2xl font-black text-verde">
                    {letra}
                  </div>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {/* Términos de esa letra */}
                <div className="space-y-4">
                  {grupo.map((t) => (
                    <div key={t.termino} className="gradient-border rounded-2xl overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h2 className="text-lg font-black text-white">{t.termino}</h2>
                              {t.tagColor && (
                                <span
                                  className={`text-xs font-bold px-2 py-0.5 rounded-full border ${t.tagColor}`}
                                >
                                  {t.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed mb-3">
                              {t.definicion}
                            </p>
                            {t.ejemplo && (
                              <div className="flex gap-2 mt-2">
                                <span className="text-verde text-xs font-bold shrink-0 mt-0.5">→</span>
                                <p className="text-white/35 text-xs leading-relaxed italic">
                                  {t.ejemplo}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA inferior */}
      <section className="px-6 py-20 bg-gris/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            ¿Querés aprender a usarlo todo en la práctica?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            El glosario es el punto de partida. La Impresora Academy te enseña a implementar cada concepto con un sistema completo de 6 módulos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/academy"
              className="bg-verde text-oscuro font-black px-10 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow"
            >
              Ver La Impresora Academy →
            </a>
            <a
              href="/newsletter"
              className="text-white/40 hover:text-verde transition-colors text-sm"
            >
              O suscribite al newsletter gratuito
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
