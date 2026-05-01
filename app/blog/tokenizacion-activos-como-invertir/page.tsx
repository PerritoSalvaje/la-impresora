import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Tokenización de activos: invertí desde $50 en 2026",
  description:
    "Qué es la tokenización de activos, cómo funciona, ejemplos reales en LATAM y las mejores plataformas para empezar con $50 hoy.",
  openGraph: {
    title: "Qué es la tokenización de activos y cómo invertir desde $50 en 2026",
    description:
      "Qué es la tokenización de activos, cómo funciona, ejemplos reales en LATAM y las mejores plataformas para empezar con $50 hoy.",
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
          <span>Tokenización</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-blue-400/10 text-blue-400 border-blue-400/20">
              Tokenización
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 8 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Qué es la tokenización de activos y cómo{" "}
            <span className="text-verde">invertir desde $50</span> en 2026
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Un departamento en Buenos Aires cuesta USD 80,000. Hasta hace tres años, si no tenías esa plata
            entera, simplemente no podías invertir en inmuebles. Hoy podés comprar el equivalente a 1m² digital
            desde cincuenta dólares. Eso es la tokenización. Y recién está empezando.
          </p>
        </div>

        {/* Article body */}
        <article className="prose-custom space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es la tokenización de activos (sin rodeos)
            </h2>
            <p>
              La tokenización de activos es el proceso de convertir la propiedad de algo físico —un inmueble,
              un campo, una obra de arte, un bono del gobierno— en tokens digitales que viven en una blockchain.
              Cada token representa una fracción del activo real.
            </p>
            <p className="mt-4">
              Pensalo así: imaginá que un edificio de oficinas vale $1.000.000. En lugar de venderlo a un solo
              comprador con ese capital, el dueño lo divide en 10.000 tokens de $100 cada uno. Vos podés
              comprar 5 tokens por $500 y ser dueño del 0,05% del edificio. Recibís proporcional a tu parte
              los alquileres, la revalorización, todo.
            </p>
            <p className="mt-4">
              El token es simplemente el título de propiedad digital. La blockchain garantiza que nadie puede
              borrarte, falsearte ni quitarte esa propiedad sin tu firma.
            </p>

            <div className="my-6 border-l-4 border-verde pl-6 bg-verde/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Definición sin jerga: tokenizar = fraccionar la propiedad de un activo real y ponerla en la
                blockchain para que cualquiera pueda comprar una parte.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo funciona por dentro: el proceso paso a paso
            </h2>
            <p>
              Acá va el flujo real, sin magia:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  num: "01",
                  title: "El activo se evalúa y legaliza",
                  desc: "Una empresa especializada (llamada tokenizadora) tasa el activo y arma la estructura legal. En la mayoría de los países de LATAM esto se hace a través de un fideicomiso o un vehículo de inversión regulado.",
                },
                {
                  num: "02",
                  title: "Se emiten los tokens en la blockchain",
                  desc: "La tokenizadora despliega un smart contract que emite exactamente N tokens, cada uno representando una fracción del activo. Lo más común hoy es usar Ethereum, Polygon o Stellar para reducir costos.",
                },
                {
                  num: "03",
                  title: "Los inversores compran los tokens",
                  desc: "Podés comprarlos con crypto o en algunos casos con transferencia bancaria. Los tokens llegan a tu wallet y desde ese momento sos co-propietario.",
                },
                {
                  num: "04",
                  title: "Recibís los rendimientos automáticamente",
                  desc: "Los alquileres o ingresos del activo se distribuyen automáticamente vía smart contract a cada wallet proporcional a su tenencia. Sin intermediarios, sin demoras.",
                },
                {
                  num: "05",
                  title: "Podés vender en cualquier momento",
                  desc: "Los tokens se pueden vender en el mercado secundario de la plataforma o en exchanges especializados, a diferencia de un inmueble tradicional que puede tardar meses en venderse.",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-verde font-mono font-black text-sm shrink-0 mt-1">{step.num}</span>
                  <div>
                    <h3 className="text-white font-bold mb-1">{step.title}</h3>
                    <p className="text-white/50 text-base">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Ejemplos reales de tokenización en LATAM
            </h2>
            <p>
              No es ciencia ficción. Esto está pasando ahora mismo en la región:
            </p>

            <div className="mt-6 space-y-6">
              <div className="p-6 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black mb-2">Argentina — campos agropecuarios tokenizados</h3>
                <p className="text-white/50 text-base">
                  Empresas como <strong className="text-white">Agrotoken</strong> permiten tokenizar granos (soja,
                  maíz, trigo) y usarlos como garantía o como inversión. Un productor tokeniza su cosecha,
                  inversores compran fracciones y reciben el rendimiento cuando los granos se venden. Volúmenes
                  operados: más de USD 80 millones desde 2021.
                </p>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black mb-2">México — inmuebles comerciales</h3>
                <p className="text-white/50 text-base">
                  <strong className="text-white">Fibra E Token</strong> y plataformas como{" "}
                  <strong className="text-white">Concreto</strong> permiten invertir en inmuebles comerciales
                  mexicanos desde 500 pesos. Los rendimientos rondan el 8-12% anual en pesos, pagados
                  mensualmente. Ya tienen más de 15,000 inversores activos.
                </p>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black mb-2">Brasil — bonos del gobierno tokenizados</h3>
                <p className="text-white/50 text-base">
                  El Banco Central de Brasil, dentro del proyecto <strong className="text-white">DREX</strong>
                  (el real digital), está tokenizando Tesouro Direto —los bonos del estado—. Esto permite
                  fraccionar la inversión y negociarlos 24/7 con liquidación instantánea.
                </p>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-white/5">
                <h3 className="text-white font-black mb-2">Colombia y Perú — arte y commodities</h3>
                <p className="text-white/50 text-base">
                  Startups locales están tokenizando arte latinoamericano y metales preciosos. En Colombia,
                  plataformas permiten comprar fracciones de obras de artistas emergentes y revenderlas cuando
                  suben de valor. En Perú, hay proyectos de tokenización de oro directo de minería artesanal.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Plataformas para invertir hoy (desde $50)
            </h2>
            <p>
              Estas son las opciones más accesibles para alguien en LATAM que quiera empezar:
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/40 font-normal py-3 pr-4">Plataforma</th>
                    <th className="text-left text-white/40 font-normal py-3 pr-4">País</th>
                    <th className="text-left text-white/40 font-normal py-3 pr-4">Mínimo</th>
                    <th className="text-left text-white/40 font-normal py-3">Tipo de activo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { plat: "Agrotoken", pais: "ARG/BRA/BOL", min: "Variable (granos)", tipo: "Commodities agro" },
                    { plat: "Concreto", pais: "México", min: "$500 MXN (~$25)", tipo: "Inmuebles" },
                    { plat: "RealT", pais: "Global (USD)", min: "$50 USD", tipo: "Propiedades EEUU" },
                    { plat: "Lofty AI", pais: "Global (USD)", min: "$50 USD", tipo: "Propiedades EEUU" },
                    { plat: "Centrifuge", pais: "Global", min: "Variable", tipo: "Deuda real (facturas)" },
                  ].map((row) => (
                    <tr key={row.plat}>
                      <td className="py-3 pr-4 text-verde font-semibold">{row.plat}</td>
                      <td className="py-3 pr-4 text-white/60">{row.pais}</td>
                      <td className="py-3 pr-4 text-white/60">{row.min}</td>
                      <td className="py-3 text-white/60">{row.tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-white/40 text-sm">
              Nota: verificá siempre la regulación vigente en tu país antes de invertir. El panorama legal
              cambia rápido en LATAM.
            </p>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Tokenización inmobiliaria: el caso más popular explicado
            </h2>
            <p>
              La tokenización inmobiliaria es donde más gente está metiendo plata ahora mismo, así que
              merece su propia sección.
            </p>
            <p className="mt-4">
              El modelo clásico funciona así: una empresa desarrolladora tiene un edificio de departamentos
              en construcción. En lugar de pedir un préstamo bancario al 18% anual, tokeniza el proyecto y
              ofrece a inversores individuales un rendimiento del 10-14% anual a cambio de financiarlo.
            </p>
            <p className="mt-4">
              El inversor compra tokens, la obra se construye, los departamentos se alquilan o venden, y
              el inversor recibe su rendimiento. Todo queda registrado en la blockchain, sin escribanos,
              sin intermediarios bancarios, sin papeleo de 200 páginas.
            </p>
            <p className="mt-4">
              Las ventajas sobre el ladrillo tradicional son claras: liquidez (podés vender tu token en
              horas, no en meses), acceso (desde $50 en lugar de $80,000), y transparencia (todos los
              movimientos de plata son visibles on-chain).
            </p>

            <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Liquidez", trad: "Meses", token: "Horas" },
                { label: "Mínimo de entrada", trad: "$50.000+", token: "Desde $50" },
                { label: "Transparencia", trad: "Escrituras físicas", token: "Blockchain pública" },
              ].map((c) => (
                <div key={c.label} className="bg-gris-medio rounded-xl p-4 border border-white/5">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">{c.label}</p>
                  <p className="text-red-400 text-sm line-through">{c.trad}</p>
                  <p className="text-verde font-bold">{c.token}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los riesgos reales (sin sugarcoating)
            </h2>
            <p>
              Acá no te vamos a vender humo. La tokenización tiene riesgos concretos que tenés que entender
              antes de poner un centavo:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Riesgo legal y regulatorio",
                  desc: "En la mayoría de los países de LATAM no existe todavía una ley específica para activos tokenizados. Si la regulación cambia, tu inversión puede quedar en un limbo legal. Siempre verificá que la plataforma opere bajo algún paraguas legal (fideicomiso, sociedad anónima, etc.).",
                  color: "border-red-400/30",
                },
                {
                  title: "Riesgo de la plataforma",
                  desc: "Si la empresa que emitió los tokens quiebra o desaparece, recuperar tu inversión puede ser muy difícil. Preferí plataformas con historial, auditorías públicas y la estructura legal del activo separada de la empresa operadora.",
                  color: "border-red-400/30",
                },
                {
                  title: "Riesgo de liquidez en mercados chicos",
                  desc: "No siempre hay compradores para tus tokens cuando querés vender. Los mercados secundarios de RWA (activos reales tokenizados) todavía son pequeños. Tu inversión puede ser ilíquida por más tiempo del esperado.",
                  color: "border-dorado/30",
                },
                {
                  title: "Riesgo del activo subyacente",
                  desc: "Un token de inmueble sigue siendo tan bueno como el inmueble. Si el mercado inmobiliario cae, cae tu token. La blockchain no te protege de los fundamentos económicos del activo real.",
                  color: "border-dorado/30",
                },
                {
                  title: "Riesgo tecnológico",
                  desc: "Bugs en smart contracts, hacks de plataformas, pérdida de acceso a tu wallet. Son riesgos reales. Nunca pongas toda tu plata en un solo proyecto o plataforma.",
                  color: "border-dorado/30",
                },
              ].map((risk) => (
                <div key={risk.title} className={`p-5 bg-gris-medio rounded-xl border ${risk.color}`}>
                  <h3 className="text-white font-bold mb-2">{risk.title}</h3>
                  <p className="text-white/50 text-base">{risk.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por dónde empezar si tenés $50 y nunca invertiste en tokens
            </h2>
            <p>
              El camino más sano para un principiante en 2026:
            </p>
            <ol className="mt-4 space-y-3 list-none">
              {[
                "Educate primero: leé al menos 3 proyectos de tokenización en detalle antes de invertir en cualquiera. Entendé cómo está estructurado el activo legalmente.",
                "Empezá con plataformas globales probadas: RealT o Lofty AI tienen historial, auditorías públicas y mercado secundario activo. Comprá $50-100 en un token de propiedad y mirá cómo funciona el sistema.",
                "Diversificá por tipo de activo: no pongas todo en inmobiliario. Un poco en granos, un poco en bonos tokenizados, un poco en inmuebles.",
                "Usá una wallet no-custodial: MetaMask o Phantom. Nunca dejes tus tokens en la plataforma si podés evitarlo.",
                "Reinvertí los rendimientos al principio: el interés compuesto en activos tokenizados puede ser brutal si empezás temprano.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <span className="text-verde font-black font-mono shrink-0">{i + 1}.</span>
                  <span className="text-white/60 text-base">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              La tokenización de activos es el cambio más grande en inversiones desde la bolsa de valores
            </h2>
            <p>
              La tokenización no es una moda. Es una transformación estructural de cómo funciona la propiedad
              y el acceso a inversiones. Por primera vez en la historia, una persona en Mendoza, Lima o
              Medellín puede ser co-propietaria de un edificio en Miami, un campo en la pampa húmeda o un
              bono del gobierno alemán — con $50 y desde el teléfono.
            </p>
            <p className="mt-4">
              El mercado global de activos tokenizados ya superó los USD 300 billones en 2026 y los analistas
              de BlackRock, JPMorgan y Citi coinciden: en diez años, la mayor parte de los activos del mundo
              va a estar tokenizada. La pregunta no es si va a pasar. Es si vos vas a estar adentro cuando pase.
            </p>
            <p className="mt-4">
              Cada semana en <strong className="text-verde">La Impresora</strong> analizamos las mejores
              oportunidades de tokenización en LATAM, los proyectos que hay que watchear y los que huelen
              a scam. Sin paywall, sin bullshit.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-verde/5 border border-verde/20 rounded-2xl text-center">
          <p className="text-verde font-bold text-lg mb-2">¿Te quedaste con ganas de más?</p>
          <p className="text-white/50 mb-6">
            Cada jueves analizamos una oportunidad concreta en tokenización, crypto o AI para LATAM.
            Gratis. Siempre.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-verde text-oscuro font-black px-8 py-4 rounded-full hover:bg-verde/90 transition-all"
          >
            Suscribite al newsletter →
          </a>
        </div>

        {/* Más artículos */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-white font-black text-xl mb-6">Seguí leyendo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/herramientas-ai-para-ganar-dinero" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-verde/30 transition-colors block">
              <span className="text-xs text-verde font-bold">AI</span>
              <p className="text-white font-bold mt-2 leading-tight">Las mejores herramientas de AI para ganar dinero en 2026 (probadas)</p>
            </Link>
            <Link href="/blog/como-funciona-el-dinero-crypto" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-verde/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Cómo funciona el dinero crypto: guía para principiantes en LATAM</p>
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
