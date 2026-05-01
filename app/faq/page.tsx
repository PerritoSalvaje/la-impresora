import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://laimpresora.io";
const PAGE_URL = `${BASE_URL}/faq`;

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — La Impresora",
  description:
    "Todo lo que necesitás saber sobre La Impresora, crypto, DeFi, AI y membresía. Respuestas concretas, sin rodeos.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Preguntas Frecuentes — La Impresora",
    description:
      "Todo lo que necesitás saber sobre La Impresora, crypto, DeFi, AI y membresía.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es La Impresora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Impresora es un newsletter semanal gratuito sobre crypto, inteligencia artificial, tokenización y libertad financiera para LATAM. Sin jerga, sin bullshit. Cada edición incluye análisis de mercado, herramientas concretas y oportunidades reales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia sale el newsletter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todos los jueves. Una edición por semana, consistente, sin saltear fechas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es realmente gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, 100% gratis. El newsletter, el blog y la mayoría del contenido son gratuitos. Existen productos premium opcionales, pero el newsletter nunca va a tener paywall.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por dónde empiezo si nunca toqué crypto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Empezá por entender qué es Bitcoin y cómo funcionan las wallets. Luego abrí cuenta en un exchange regulado como Binance o Lemon, comprá una cantidad pequeña con la que te sintás cómodo perdiendo (en serio) y aprendé moviendo fondos reales.",
      },
    },
  ],
};

type FaqItem = {
  q: string;
  a: string;
};

type FaqCategory = {
  categoria: string;
  color: string;
  borderColor: string;
  items: FaqItem[];
};

const faqs: FaqCategory[] = [
  {
    categoria: "Sobre La Impresora",
    color: "text-verde",
    borderColor: "border-verde/20",
    items: [
      {
        q: "¿Qué es La Impresora?",
        a: "La Impresora es un newsletter semanal gratuito sobre crypto, inteligencia artificial, tokenización y libertad financiera para LATAM. Sin jerga, sin bullshit. Cada edición incluye análisis de mercado, herramientas concretas y oportunidades reales para freelancers, emprendedores y profesionales que quieren entender cómo funciona el dinero digital.",
      },
      {
        q: "¿Con qué frecuencia sale el newsletter?",
        a: "Todos los jueves. Una edición por semana, consistente, sin saltear fechas. Si hay algo urgente de mercado, mandamos un extra —pero el ritmo base es jueves.",
      },
      {
        q: "¿Es realmente gratis?",
        a: "Sí, 100% gratis. El newsletter, el blog y la mayoría del contenido son gratuitos y siempre lo van a ser. Existen productos premium opcionales como cursos y membresía, pero suscribirte al newsletter no cuesta nada y nunca va a tener paywall.",
      },
      {
        q: "¿Quién está detrás de La Impresora?",
        a: "Un equipo en LATAM obsesionado con hacer que el conocimiento financiero y tecnológico sea accesible para todos, no solo para los que ya tienen plata o viven en Silicon Valley. Operamos bajo Wendy OS. Podés escribirnos a hola@laimpresora.io.",
      },
      {
        q: "¿Están en alguna red social?",
        a: "Sí. Nos encontrás en Instagram y Twitter/X como @laimpresora.io y @laimpresora_io. El canal principal sigue siendo el newsletter —las redes son secundarias.",
      },
    ],
  },
  {
    categoria: "Sobre Crypto",
    color: "text-dorado",
    borderColor: "border-dorado/20",
    items: [
      {
        q: "¿Por dónde empiezo si nunca toqué crypto?",
        a: "Empezá por leer nuestro artículo 'Cómo funciona el dinero crypto'. Luego abrí cuenta en un exchange regulado (Binance, Lemon o Buenbit según tu país), comprá una cantidad pequeña con la que te sintás cómodo perdiendo —en serio— y aprendé moviendo fondos reales. La teoría sin práctica no sirve.",
      },
      {
        q: "¿Es seguro invertir en crypto?",
        a: "Crypto es un activo de alto riesgo y alta volatilidad. Bitcoin puede bajar 50% en meses o subir 300% en un año. No es 'seguro' en el sentido bancario, pero tampoco es un casino si entendés lo que estás haciendo. La regla: no invertís lo que no podés perder. Diversificación y tiempo en el mercado son tus mejores aliados.",
      },
      {
        q: "¿Cuánto dinero necesito para empezar?",
        a: "Con $20-50 USD ya podés comprar fracciones de Bitcoin o Ethereum y aprender. La mayoría de los exchanges no tienen mínimos altos. Lo importante no es el monto inicial sino entender el proceso: comprar, guardar, transferir.",
      },
      {
        q: "¿Qué exchange me recomiendan?",
        a: "Depende de tu país. Para Argentina: Lemon, Buenbit o Bitso. Para México y el resto de LATAM: Binance o Bitso. Para los más avanzados que quieren más productos: Binance o Bybit. Siempre usá exchanges con licencia operativa en tu país.",
      },
      {
        q: "¿Cómo guardo mis crypto de forma segura?",
        a: "Para montos chicos, un exchange regulado alcanza. Para montos mayores ($500+), usá una wallet de autocustodia como MetaMask (software) o Ledger/Trezor (hardware). La regla de oro: not your keys, not your coins. Si el exchange tiene las llaves, no es tuyo del todo.",
      },
      {
        q: "¿Qué pasa si pierdo mi seed phrase?",
        a: "Si perdés tu seed phrase y no tenés acceso al dispositivo, perdés el acceso a tus fondos para siempre. No hay recuperación, no hay soporte técnico que pueda ayudarte. Por eso es crítico guardar la seed phrase en papel (nunca digital), en dos lugares físicos distintos, y nunca compartirla con nadie.",
      },
      {
        q: "¿Tengo que declarar mis crypto?",
        a: "En la mayoría de los países de LATAM sí, aunque la regulación varía. En Argentina los criptoactivos se declaran en Bienes Personales. En México están gravados en ISR al momento de la venta. Siempre consultá con un contador de tu país. En el blog tenemos un artículo sobre cómo declarar crypto en Argentina.",
      },
      {
        q: "¿Qué crypto me recomiendan comprar?",
        a: "No damos asesoramiento financiero individual, pero en general: Bitcoin (BTC) y Ethereum (ETH) son el punto de entrada más razonable para empezar. Representan el 60%+ del mercado, tienen liquidez alta y llevan más de una década funcionando. Todo lo demás tiene mayor riesgo y requiere más investigación.",
      },
    ],
  },
  {
    categoria: "Sobre DeFi",
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    items: [
      {
        q: "¿Qué es DeFi?",
        a: "DeFi (Finanzas Descentralizadas) son protocolos financieros que funcionan en blockchain sin bancos ni intermediarios. Podés prestar, pedir prestado, hacer trading o generar rendimientos sobre tus crypto directamente desde tu wallet, 24/7, sin que nadie te pida permiso ni te ponga límites.",
      },
      {
        q: "¿Es seguro el DeFi?",
        a: "DeFi tiene riesgos específicos: bugs en los contratos inteligentes, hacks de protocolos, rug pulls en proyectos nuevos e impermanent loss en liquidity pools. Solo usá protocolos auditados con historial probado (Aave, Uniswap, Compound, Curve). Empezá con montos chicos hasta que entiendas bien cómo funciona cada protocolo.",
      },
      {
        q: "¿Cuánto puedo ganar en DeFi?",
        a: "Los rendimientos varían mucho. Stablecoins en protocolos establecidos: 3-8% APY. Liquidity pools con mayor riesgo: 10-40% APY. Estrategias avanzadas o protocolos nuevos: más alto pero con riesgo proporcional. Desconfiá de cualquier cosa que prometa rendimientos fijos muy altos sin explicar el origen de esos retornos.",
      },
      {
        q: "¿Cuánto dinero necesito para empezar en DeFi?",
        a: "Técnicamente podés empezar con $100, pero las fees de gas en Ethereum hacen que sea poco práctico. En redes como Polygon, Arbitrum o Optimism las fees son mínimas y podés operar con $50-200 cómodamente. Para estrategias más sofisticadas, $500-1,000 es un mínimo más razonable para que los rendimientos valgan el tiempo.",
      },
      {
        q: "¿Qué protocolos recomiendan?",
        a: "Para empezar: Aave (lending), Uniswap (trading), Curve (stablecoins). En redes más baratas que Ethereum: los mismos protocolos sobre Arbitrum u Optimism. Para staking de ETH: Lido o Rocket Pool. Antes de depositar en cualquier protocolo, verificá que haya sido auditado y que tenga un historial sin hacks.",
      },
    ],
  },
  {
    categoria: "Sobre AI",
    color: "text-purple-400",
    borderColor: "border-purple-400/20",
    items: [
      {
        q: "¿Qué herramientas de AI me recomiendan para empezar?",
        a: "Para texto y análisis: Claude (Anthropic) o ChatGPT (OpenAI). Para imágenes: Midjourney. Para voz: ElevenLabs. Para automatización: Make (ex-Integromat). Empezá con una sola, hacete experto, y luego sumás. El error más común es probar cinco herramientas superficialmente y no dominar ninguna.",
      },
      {
        q: "¿Necesito saber programar para usar AI?",
        a: "No. La mayoría de las herramientas de AI tienen interfaces visuales. Con saber escribir buenos prompts (instrucciones claras) ya podés hacer el 80% de lo que hacen los 'expertos'. Dicho eso, si sabés o aprendés lo básico de código, tu capacidad de generar valor se multiplica por 10.",
      },
      {
        q: "¿Cuánto cuesta armar un stack de AI básico?",
        a: "Un stack útil para freelancers: Claude Pro ($20 USD/mes) + Perplexity Pro ($20 USD/mes) = $40 USD/mes total. Si agregás Midjourney son $10-30 USD más. En LATAM eso representa $40-70 USD/mes para tener acceso a herramientas que pueden fácilmente generar $500-2,000 USD extras al mes si las usás bien.",
      },
      {
        q: "¿Cómo genero mis primeros ingresos con AI?",
        a: "El camino más rápido: elegí un servicio que ya sabés hacer (escribir, diseñar, analizar datos, editar video), aprendé a hacerlo 3-5x más rápido con AI, y ofrecelo al mismo precio. Esa diferencia de tiempo es tu ganancia. En nuestro blog hay artículos con 8 formas concretas de ganar dinero con ChatGPT y herramientas de AI.",
      },
      {
        q: "¿Claude o ChatGPT?",
        a: "Para trabajo de texto profundo, análisis largo y código: Claude. Para uso general, integración con apps y acceso a plugins: ChatGPT. En la práctica, muchos profesionales usan ambos dependiendo de la tarea. Si tenés que elegir uno para empezar: Claude Pro tiene el contexto más largo y produce textos más naturales para español.",
      },
    ],
  },
  {
    categoria: "Sobre la Membresía y Productos",
    color: "text-verde",
    borderColor: "border-verde/20",
    items: [
      {
        q: "¿Qué incluye la membresía Premium?",
        a: "La membresía Premium incluye acceso a cursos completos sobre crypto, DeFi y AI para negocios, análisis de mercado más profundos, acceso a la comunidad privada, sesiones en vivo y contenido exclusivo que no publicamos en el newsletter gratuito. Los detalles actualizados están en la página de Premium.",
      },
      {
        q: "¿Puedo cancelar la membresía cuando quiero?",
        a: "Sí. Podés cancelar en cualquier momento desde tu panel de usuario, sin burocracia ni cargos adicionales. El acceso se mantiene hasta el final del período ya pagado.",
      },
      {
        q: "¿Cómo pago desde LATAM?",
        a: "Aceptamos tarjetas de crédito y débito internacionales (Visa, Mastercard), PayPal y en algunos países cripto (USDC/USDT). Si tenés problemas con el pago desde tu país escribinos a hola@laimpresora.io y buscamos la solución.",
      },
      {
        q: "¿Tienen garantía?",
        a: "Sí. Los cursos tienen garantía de devolución de 7 días desde la compra, sin preguntas. Si el contenido no cumple tus expectativas, te devolvemos el dinero. La membresía mensual se puede cancelar antes de que se renueve.",
      },
      {
        q: "¿El curso es actualizado cuando cambia el mercado?",
        a: "Sí. Crypto y AI son mercados que cambian rápido. Los módulos se actualizan cuando hay cambios relevantes —no todos los meses por cambiar, sino cuando el contenido anterior deja de ser preciso o aparece algo nuevo que vale la pena incluir.",
      },
      {
        q: "¿Puedo acceder al curso desde el celular?",
        a: "Sí. La plataforma está optimizada para mobile. Podés ver las lecciones desde cualquier dispositivo —celular, tablet o computadora— y retomás desde donde dejaste.",
      },
      {
        q: "¿Cómo funciona el programa de afiliados?",
        a: "Podés recomendar La Impresora con tu link único y recibir una comisión por cada venta de productos premium que generes. No tiene costo unirse. Los detalles completos del programa, comisiones y condiciones están en la página de Afiliados.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-24 min-h-screen px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Preguntas Frecuentes
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Todo lo que<br />
              <span className="text-verde">querés saber</span>
            </h1>
            <p className="text-white/40 text-lg">
              Respuestas concretas sobre La Impresora, crypto, DeFi, AI y membresía. Sin rodeos.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-14">
            {faqs.map((cat) => (
              <section key={cat.categoria}>
                <h2 className={`text-xs font-black uppercase tracking-widest mb-6 ${cat.color}`}>
                  {cat.categoria}
                </h2>
                <div className={`space-y-3`}>
                  {cat.items.map((item, idx) => (
                    <details
                      key={idx}
                      className={`group rounded-2xl border ${cat.borderColor} bg-gris-medio overflow-hidden`}
                    >
                      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                        <span className="text-white font-bold text-base leading-snug pr-4">
                          {item.q}
                        </span>
                        <span className={`shrink-0 w-6 h-6 rounded-full border ${cat.borderColor} flex items-center justify-center transition-transform duration-200 group-open:rotate-45 ${cat.color}`}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-white/55 leading-relaxed text-base">
                          {item.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA final */}
          <div className="mt-20 p-8 bg-verde/5 border border-verde/20 rounded-2xl text-center">
            <p className="text-verde font-bold text-lg mb-2">
              ¿No encontraste lo que buscabas?
            </p>
            <p className="text-white/50 mb-6">
              Escribinos directamente. Respondemos todos los mensajes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:hola@laimpresora.io"
                className="inline-block bg-verde text-oscuro font-black px-8 py-4 rounded-full hover:bg-verde/90 transition-all"
              >
                Escribinos →
              </a>
              <Link
                href="/#newsletter"
                className="inline-block border border-verde/30 text-verde font-bold px-8 py-4 rounded-full hover:bg-verde/5 transition-all"
              >
                Suscribite gratis
              </Link>
            </div>
          </div>

          {/* Links útiles */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-white/30 text-sm text-center mb-6">Páginas relacionadas</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { href: "/premium", label: "Membresía Premium" },
                { href: "/blog", label: "Blog & Ediciones" },
                { href: "/afiliados-programa", label: "Programa Afiliados" },
                { href: "/terminos", label: "Términos y condiciones" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-center p-4 bg-gris-medio rounded-xl border border-white/5 text-white/50 text-sm hover:text-verde hover:border-verde/20 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
