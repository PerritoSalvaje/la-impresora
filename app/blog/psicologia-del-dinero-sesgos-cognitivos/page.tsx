import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Psicología del dinero: los sesgos que te hacen perder en crypto y finanzas",
  description:
    "FOMO, FUD, sesgo de confirmación, mentalidad de manada y aversión a la pérdida. Los sesgos cognitivos que destruyen carteras y cómo combatirlos con sistemas predefinidos.",
  openGraph: {
    title: "Psicología del dinero: los sesgos que te hacen perder en crypto y finanzas",
    description:
      "FOMO, FUD, sesgo de confirmación, mentalidad de manada y aversión a la pérdida. Los sesgos cognitivos que destruyen carteras y cómo combatirlos con sistemas predefinidos.",
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
          <span>Finanzas</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-purple-500/10 text-purple-400 border-purple-500/20">
              Psicología
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 10 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Psicología del dinero:{" "}
            <span className="text-purple-400">los sesgos</span>{" "}
            que te hacen perder en crypto y finanzas
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            No perdés dinero porque el mercado es impredecible. Lo perdés porque tu cerebro está
            diseñado evolutivamente para tomar las peores decisiones financieras posibles.
            Conocer estos sesgos cognitivos es la diferencia entre el trader que gana y el que
            siempre llega tarde.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Intro */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué el cerebro humano es un pésimo inversor
            </h2>
            <p>
              El cerebro humano evolucionó para sobrevivir en la sabana africana hace 200,000 años.
              Sus heurísticas —atajos mentales que permitían tomar decisiones rápidas sobre depredadores
              y recursos— son extraordinariamente eficientes para ese entorno. Son desastrosas para
              los mercados financieros.
            </p>
            <p className="mt-4">
              Un estudio de Fidelity Investments analizó qué tipo de cuentas de inversión tenían los
              mejores rendimientos en el tiempo. El resultado fue sorprendente: las cuentas de
              personas que habían olvidado que existían, o que habían fallecido. La inactividad
              superaba consistentemente a la gestión activa.
            </p>
            <p className="mt-4">
              El problema no es la falta de información — es el exceso de reacción a esa información
              guiada por sesgos cognitivos que no podemos desactivar. Pero sí podemos diseñar
              sistemas que los compensen.
            </p>

            <div className="my-6 border-l-4 border-purple-400 pl-6 bg-purple-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Daniel Kahneman, Premio Nobel de Economía: "El principal enemigo de los buenos
                resultados de inversión es el inversor mismo."
              </p>
            </div>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* FOMO */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              1. FOMO: el miedo a quedarse afuera
            </h2>
            <p>
              FOMO (Fear Of Missing Out) es el sesgo más caro del ecosistema crypto. Ocurre cuando
              ves que algo sube y tu cerebro activa los mecanismos evolutivos de "recurso escaso,
              actuar ya". El resultado: comprás en máximos históricos después de una subida parabólica,
              exactamente cuando la probabilidad de corrección es más alta.
            </p>
            <p className="mt-4">
              El patrón es repetitivo y documentado: Bitcoin sube de $30K a $69K en 2021. El
              volumen de búsquedas de "cómo comprar Bitcoin" explota justo en el pico. Los que
              compraron en octubre-noviembre de 2021 por FOMO vieron sus inversiones caer 75%
              en los meses siguientes.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-gris-medio rounded-xl border border-red-400/20">
                <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">Cómo se manifiesta</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Comprar después de subidas del 50%+ sin análisis</li>
                  <li>· Seguir a influencers que muestran ganancias</li>
                  <li>· Cambiar de estrategia cada vez que otro activo sube más</li>
                  <li>· Poner capital en proyectos que "ya subieron mucho"</li>
                </ul>
              </div>
              <div className="p-5 bg-gris-medio rounded-xl border border-verde/20">
                <p className="text-verde text-xs uppercase tracking-widest font-bold mb-3">Sistema para combatirlo</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>· Dollar Cost Averaging: comprás la misma cantidad, siempre, sin importar el precio</li>
                  <li>· Regla: si entrás después de +30%, esperás la corrección</li>
                  <li>· Desactivá alertas de precio en el móvil</li>
                  <li>· Recordá: siempre hay otra oportunidad</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FUD */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              2. FUD: el miedo que te hace vender en el piso
            </h2>
            <p>
              FUD (Fear, Uncertainty and Doubt — Miedo, Incertidumbre y Duda) es el complemento
              del FOMO. Si el FOMO te hace comprar en máximos, el FUD te hace vender en mínimos.
              Opera cuando el mercado cae y tu cerebro activa el modo de "salvar lo que queda".
            </p>
            <p className="mt-4">
              En mayo de 2022, Bitcoin cayó de $40,000 a $26,000 en una semana. Millones de
              pequeños inversores vendieron en pánico entre $25,000 y $30,000. Bitcoin cotizaba
              a $70,000 dieciocho meses después. Los que resistieron el FUD y mantuvieron no solo
              recuperaron sino que más que duplicaron su capital.
            </p>
            <p className="mt-4">
              El FUD también es utilizado como herramienta deliberada de manipulación. Grandes
              tenedores ("whales") generan pánico en redes sociales para comprar barato mientras
              los pequeños inversores venden aterrados. Es una de las razones por las que las
              redes sociales y crypto son una combinación tóxica para la toma de decisiones.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Warren Buffett: "Sé temeroso cuando los demás son codiciosos, y codicioso cuando
                los demás son temerosos." La fórmula más simple para combatir FOMO y FUD.
              </p>
            </div>
          </section>

          {/* Sesgo de confirmación */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              3. Sesgo de confirmación: solo ves lo que querés ver
            </h2>
            <p>
              El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información
              que confirma nuestras creencias previas. En inversión, significa que si compraste
              un activo, inconscientemente descartarás los argumentos en contra y amplificarás
              los argumentos a favor.
            </p>
            <p className="mt-4">
              En crypto es especialmente dañino porque las comunidades de tokens (Twitter/X,
              Discord, Telegram) son cámaras de eco perfectas. Si tenés ETH, seguís a defensores
              de ETH, lees análisis positivos sobre ETH y descartás las críticas. Si tenés BTC,
              hacés lo mismo con Bitcoin. El resultado es que nunca procesás información adversa
              que podría salvarte dinero.
            </p>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-3">Ejercicio práctico</p>
              <p className="text-white/60 text-base">
                Antes de cualquier inversión significativa, busca activamente los mejores
                argumentos en contra. Escribe el "caso bajista" del activo con la misma energía
                que el "caso alcista". Si no podés articularlo, no entendés lo suficiente
                para invertir.
              </p>
            </div>
          </section>

          {/* Mentalidad de manada */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              4. Mentalidad de manada: el peligro del consenso
            </h2>
            <p>
              Los humanos somos animales sociales. Seguir a la manada fue una estrategia de
              supervivencia durante millones de años. En los mercados financieros, seguir a
              la manada es generalmente la estrategia más costosa posible.
            </p>
            <p className="mt-4">
              La mentalidad de manada en crypto se manifiesta como comportamiento de "comunidad":
              defender el proyecto en el que invertiste contra toda evidencia contraria, atacar
              a los críticos, interpretar cada caída como una oportunidad y cada crítica como
              un ataque de los "odiadores". Es el mecanismo psicológico que mantuvo a la gente
              en Terra/LUNA hasta días antes del colapso total.
            </p>
            <p className="mt-4">
              El consenso de mercado es frecuentemente incorrecto en los puntos más importantes:
              los máximos y mínimos. En máximos, todos son alcistas. En mínimos, todos son bajistas.
              Los mejores inversores son contrarians estructurales — no porque disfruten ir en
              contra de la corriente, sino porque entienden que cuando todos piensan lo mismo,
              esa información ya está en el precio.
            </p>
          </section>

          {/* Aversión a la pérdida */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              5. Aversión a la pérdida: por qué duele más perder que ganar
            </h2>
            <p>
              Kahneman y Tversky demostraron experimentalmente que el dolor psicológico de perder
              $100 es aproximadamente el doble de la satisfacción de ganar $100. Esta asimetría
              tiene consecuencias devastadoras en la toma de decisiones financieras.
            </p>

            <div className="mt-5 space-y-3">
              {[
                {
                  problema: "Aguantar posiciones perdedoras demasiado tiempo",
                  causa: "Vender implica 'realizar' la pérdida — mientras no vendés, el cerebro se niega a aceptarla como real",
                  costo: "Pérdidas del 70-90% cuando podrían haberse cortado al 20-30%",
                },
                {
                  problema: "Vender ganadores demasiado rápido",
                  causa: "Asegurar una ganancia elimina el miedo de perderla — el cerebro prefiere certeza pequeña a posibilidad grande",
                  costo: "Perderse los movimientos del 10x que generan riqueza real",
                },
                {
                  problema: "Incapacidad de hacer DCA en caídas",
                  causa: "Comprar más de algo que baja activa el miedo a más pérdidas",
                  costo: "No comprar los mejores puntos de entrada que los mercados ofrecen",
                },
              ].map((item) => (
                <div key={item.problema} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white font-bold mb-1">{item.problema}</p>
                  <p className="text-white/50 text-sm mb-2"><span className="text-white/30">Causa:</span> {item.causa}</p>
                  <p className="text-red-400/70 text-sm"><span className="text-white/30">Costo:</span> {item.costo}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sesgo de disponibilidad */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              6. Sesgo de disponibilidad: lo reciente pesa más de lo que debería
            </h2>
            <p>
              El sesgo de disponibilidad hace que sobreestimemos la probabilidad de eventos que
              recordamos fácilmente — generalmente porque son recientes, dramáticos o emocionales.
              En mercados: después de un crash, creés que los crashes son más probables de lo que
              son. Después de un bull run, creés que el mercado solo puede subir.
            </p>
            <p className="mt-4">
              En 2023, después del colapso de FTX y el bear market brutal de 2022, las encuestas
              mostraban que la mayoría de los inversores retail esperaba que Bitcoin cayera por
              debajo de $10,000. Estaba a $17,000. Subió a $73,000 en los siguientes dieciséis meses.
            </p>
            <p className="mt-4">
              El antídoto es el estudio sistemático de la historia del mercado, no la proyección
              lineal de lo reciente. Los mercados son cíclicos, no lineales. Lo que acaba de pasar
              no predice lo que va a pasar.
            </p>
          </section>

          {/* Cómo combatirlos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo combatir los sesgos: sistemas que funcionan
            </h2>
            <p>
              No podés eliminar los sesgos cognitivos — son parte de tu arquitectura neurológica.
              Pero podés diseñar sistemas que tomen las decisiones por vos antes de que los sesgos
              tengan la oportunidad de operar.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  sistema: "Dollar Cost Averaging (DCA) automático",
                  desc: "Comprar una cantidad fija de BTC o ETH cada semana o mes, independientemente del precio. Elimina el FOMO (no necesitás elegir el momento) y el FUD (comprás igual cuando cae). Es matemáticamente superior al market timing para el 95% de los inversores.",
                  tag: "Anti-FOMO / Anti-FUD",
                },
                {
                  sistema: "Stop-loss predefinidos antes de entrar",
                  desc: "Antes de comprar cualquier activo, definís en qué precio vendés si el mercado se mueve en tu contra. Esa regla se ejecuta automáticamente, sin intervención emocional. El stop-loss no es para protegerte del mercado — es para protegerte de vos mismo.",
                  tag: "Anti-aversión a la pérdida",
                },
                {
                  sistema: "Tesis de inversión escrita",
                  desc: "Antes de invertir, escribís: por qué comprás, qué tendría que pasar para que vendas (tanto al alza como a la baja) y en qué plazo. Cuando el mercado se mueve y el miedo activa los sesgos, volvés a esa tesis. Si nada cambió en los fundamentos, la decisión ya está tomada.",
                  tag: "Anti-sesgo de confirmación",
                },
                {
                  sistema: "Portafolio index / indexado",
                  desc: "Los fondos indexados (ETF de BTC, ETF de SP500) superan al 95% de los gestores activos a largo plazo. No porque los gestores sean estúpidos — sino porque acumulan los mismos sesgos que cualquier humano. Un index no tiene FOMO, no tiene FUD, no tiene ego. Simplemente sigue el mercado.",
                  tag: "Anti-todos los sesgos",
                },
              ].map((s) => (
                <div key={s.sistema} className="p-5 bg-gris-medio rounded-xl border border-purple-400/10">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{s.sistema}</p>
                    <span className="text-purple-400 text-xs font-bold shrink-0 border border-purple-400/30 px-2 py-1 rounded-full whitespace-nowrap">{s.tag}</span>
                  </div>
                  <p className="text-white/50 text-base">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fondos indexados vs traders activos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué los fondos indexados le ganan al 95% de los traders activos
            </h2>
            <p>
              El estudio SPIVA de S&P Global realiza un seguimiento del desempeño de los fondos
              de gestión activa frente a sus índices de referencia. Los resultados son consistentes
              año tras año: el 80-95% de los fondos activos no supera a su índice en períodos de
              10-15 años, después de comisiones.
            </p>
            <p className="mt-4">
              Esto incluye a los gestores profesionales con equipos, algoritmos y acceso a información
              privilegiada que ningún investor retail puede igualar. Si ellos no pueden ganarle al
              mercado de forma consistente, la probabilidad de que un trader individual lo haga
              es extremadamente baja.
            </p>
            <p className="mt-4">
              La razón no es solo técnica — es psicológica. Cada decisión activa es una oportunidad
              para que los sesgos intervengan. Un index que compra automáticamente no tiene esas
              oportunidades. Menos decisiones = menos errores humanos = mejor rendimiento en el tiempo.
            </p>

            <div className="mt-6 p-6 bg-gris-medio rounded-xl border border-dorado/20">
              <p className="text-dorado font-bold mb-3">La estrategia óptima para la mayoría</p>
              <div className="space-y-2 text-white/60 text-sm">
                <div className="flex justify-between">
                  <span>60% portafolio</span>
                  <span className="text-dorado font-semibold">BTC — reserva de valor long-term</span>
                </div>
                <div className="flex justify-between">
                  <span>20% portafolio</span>
                  <span className="text-verde font-semibold">ETH — exposición al ecosistema</span>
                </div>
                <div className="flex justify-between">
                  <span>15% portafolio</span>
                  <span className="text-white/60 font-semibold">USDC — liquidez y oportunidades</span>
                </div>
                <div className="flex justify-between">
                  <span>5% portafolio</span>
                  <span className="text-purple-400 font-semibold">Altcoins — alta convicción únicamente</span>
                </div>
              </div>
              <p className="text-white/30 text-xs mt-4">DCA mensual. Sin trading activo. Sin revisar precio diariamente.</p>
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El mercado no te roba. Vos te robás a vos mismo.
            </h2>
            <p>
              La mayoría de las pérdidas en crypto no vienen del mercado — vienen de comprar en máximos
              por FOMO, vender en mínimos por FUD, aguantar estafas por sesgo de confirmación y
              paniquear por mentalidad de manada.
            </p>
            <p className="mt-4">
              La buena noticia es que entender estos mecanismos es el primer paso para combatirlos.
              La siguiente vez que sientas urgencia de comprar algo porque "está subiendo fuerte",
              o urgencia de vender porque "todos dicen que va a cero", es exactamente el momento
              de pausar, volver a tu tesis de inversión y preguntarte si algo cambió en los
              fundamentos.
            </p>
            <p className="mt-4">
              El inversor más aburrido —el que compra índices de forma automática, nunca mira el
              precio y no tiene opiniones fuertes sobre el "próximo 100x"— consistentemente supera
              al trader activo. No porque sea más inteligente. Porque tiene menos oportunidades
              de equivocarse.
            </p>
          </section>

        </article>

        {/* CTA Newsletter */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Análisis de mercado sin sesgo. Cada jueves.</p>
          <p className="text-white/50 mb-6">
            Psicología, estrategia y noticias que importan. Sin shitcoins, sin promesas de precio.
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
            <Link href="/blog/los-mayores-fraudes-crypto-historia" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-red-400 font-bold">Fraudes</span>
              <p className="text-white font-bold mt-2 leading-tight">Los mayores fraudes crypto de la historia: FTX, Luna, OneCoin y más</p>
            </Link>
            <Link href="/blog/como-funciona-el-dinero-crypto" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Cómo funciona el dinero crypto: guía completa para principiantes</p>
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
