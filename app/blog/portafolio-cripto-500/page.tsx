import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata = {
  title: "Cómo armar un portafolio cripto con $500 en LATAM (guía 2026)",
  description: "Paso a paso para construir tu primer portafolio de criptomonedas con $500 desde Argentina, México o Colombia. Qué comprar, cuánto, y por qué.",
};

export default function PortafolioCripto500() {
  return (
    <article className="pt-24 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-verde/10 text-verde border-verde/20">Libertad Financiera</span>
            <span className="text-white/20 text-xs">19 Mayo 2026</span>
            <span className="text-white/20 text-xs">· 10 min lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Cómo armar un portafolio cripto con $500 en LATAM
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            $500 no es mucho. Pero es suficiente para empezar bien, aprender con dinero real, y construir el hábito que en 5 años puede cambiar completamente tu situación financiera.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-white/70 leading-relaxed">

          <h2 className="text-2xl font-black text-white">Primero, la mentalidad correcta</h2>
          <p>
            Con $500 no vas a hacerte millonario. Eso está claro. Pero hay algo que sí podés lograr: aprender cómo funciona este mundo con dinero real, sin el riesgo de perder algo que te afecte significativamente.
          </p>
          <p>
            La diferencia entre el que empieza con $500 hoy y el que espera tener $10,000 "para hacer algo en serio"... es que el primero va a llegar a 2028 con experiencia real y el segundo va a llegar sin ninguna.
          </p>
          <p>El objetivo de este portafolio no es maximizar ganancias a corto plazo. Es construir base, generar experiencia, y no perder el dinero en el proceso.</p>

          <h2 className="text-2xl font-black text-white">La distribución recomendada para $500</h2>

          <div className="gradient-border rounded-2xl p-6 my-8">
            <div className="space-y-4">
              {[
                { asset: "Bitcoin (BTC)", pct: "50%", monto: "$250", razon: "La base de cualquier portafolio cripto. El activo más probado, más líquido, y el que mejor resiste los mercados bajistas." },
                { asset: "Ethereum (ETH)", pct: "25%", monto: "$125", razon: "La plataforma donde vive DeFi, NFTs, tokenización y la mayoría de las apps del ecosistema. Segunda posición indiscutida." },
                { asset: "Stablecoins (USDC)", pct: "20%", monto: "$100", razon: "Tu reserva de oportunidad. Cuando el mercado caiga, estas son las balas que usás para comprar más barato." },
                { asset: "Una altcoin selectiva", pct: "5%", monto: "$25", razon: "El slot de aprendizaje. Elegí algo que entiendas, investigalo bien, y asumí que podés perder ese 5%." },
              ].map((item) => (
                <div key={item.asset} className="flex flex-col md:flex-row gap-3">
                  <div className="md:w-40 shrink-0">
                    <div className="text-verde font-black">{item.pct}</div>
                    <div className="font-bold text-white">{item.asset}</div>
                    <div className="text-white/30 text-sm">{item.monto}</div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{item.razon}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-black text-white">Por qué esta distribución y no otra</h2>
          <p>
            El error más común del principiante es diversificar demasiado. Compran 10 altcoins distintas pensando que si alguna explota, la ganancia compensa las pérdidas de las otras. Lo que realmente pasa: las altcoins tienden a correlacionarse, bajan todas juntas en los mercados bajistas, y es muy difícil seguirles el pulso a todas.
          </p>
          <p>
            El 75% en BTC y ETH no es falta de ambición. Es reconocer que los activos más establecidos tienen mejor ratio riesgo/recompensa para alguien que recién empieza. Si BTC sube 3x en el próximo ciclo, tu $250 se convierte en $750. No está mal.
          </p>
          <p>
            El 20% en USDC es la parte que más gente ignora y más debería valorar. Tener reserva en stablecoins significa que cuando el mercado caiga un 40% (y en algún momento lo va a hacer), tenés munición para comprar más. Los que entraron con todo y no tienen reserva solo pueden ver cómo baja sin poder aprovechar.
          </p>

          <h2 className="text-2xl font-black text-white">El proceso paso a paso</h2>

          <h3 className="text-xl font-bold text-white">Paso 1: Elegí tu exchange</h3>
          <p>
            <strong className="text-verde">Argentina:</strong> Lemon Cash para empezar simple, Binance para más opciones.<br/>
            <strong className="text-verde">México:</strong> Bitso para operaciones en pesos, Binance para volumen mayor.<br/>
            <strong className="text-verde">Colombia/Chile/Perú:</strong> Buda.com es la opción local más confiable, complementada con Binance.
          </p>

          <h3 className="text-xl font-bold text-white">Paso 2: Configurá la seguridad</h3>
          <p>Antes de poner un peso: activá el 2FA (autenticación de dos factores) en el exchange. Usá Google Authenticator, no SMS. Esto solo ya te protege del 90% de los ataques más comunes.</p>

          <h3 className="text-xl font-bold text-white">Paso 3: Comprá gradualmente</h3>
          <p>
            No pongas los $500 de una sola vez. Dividí en 4 compras durante 4 semanas. Esto se llama Dollar Cost Averaging (DCA) y te protege de comprar exactamente en el pico. El primer día comprás $125, la semana siguiente otros $125, y así.
          </p>

          <h3 className="text-xl font-bold text-white">Paso 4: Considerá una wallet propia</h3>
          <p>
            Si vas a mantener crypto por más de 6 meses, pensá en mover parte a una wallet que solo vos controlás. MetaMask para Ethereum y tokens ERC-20. Una hardware wallet como Ledger si el monto crece significativamente.
          </p>

          <h2 className="text-2xl font-black text-white">Lo que no hacer (es igual de importante)</h2>
          <ul className="space-y-3">
            <li><strong className="text-white">No uses apalancamiento.</strong> Con $500 y apalancamiento, podés perder todo en horas si el mercado se mueve en tu contra. Nada de futuros, nada de margin.</li>
            <li><strong className="text-white">No compres porque alguien en Twitter dijo que va a 10x.</strong> Si alguien tiene esa información, no te la va a dar gratis.</li>
            <li><strong className="text-white">No vendas en pánico.</strong> Los mercados cripto pueden caer 50-70% en un mercado bajista. Si eso te va a hacer vender, tu exposición es demasiado alta.</li>
            <li><strong className="text-white">No pongas plata que necesitás en los próximos 2 años.</strong> Este dinero tiene que poder estar bloqueado sin que te afecte la vida cotidiana.</li>
          </ul>

          <h2 className="text-2xl font-black text-white">La revisión mensual que sí tiene sentido</h2>
          <p>
            Una vez por mes, revisá tu portafolio. No para hacer trading, sino para chequear tres cosas: ¿la distribución sigue siendo la que querés? ¿Hay noticias importantes sobre alguno de tus activos? ¿Tenés capacidad de poner algo más?
          </p>
          <p>
            Si podés sumar $50 o $100 por mes al portafolio, hacelo sistemáticamente en BTC. En 12 meses, tu $500 inicial se convierte en $1,100-1,700 dependiendo del precio. Y la experiencia que vas a tener es invaluable.
          </p>
          <p className="text-verde font-bold">
            El mejor portafolio no es el que maximiza el retorno en papel. Es el que te permite dormir bien y seguir aprendiendo. Con $500, podés construir exactamente eso.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <Newsletter />
        </div>
      </div>
    </article>
  );
}
