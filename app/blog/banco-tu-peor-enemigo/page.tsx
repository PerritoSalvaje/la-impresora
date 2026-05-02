import Link from "next/link";
import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Por qué tu banco es tu peor enemigo financiero (y qué hacer) | La Impresora #002",
  description:
    "Tu banco te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Esto es un sistema diseñado en tu contra. Te mostramos la salida.",
  openGraph: {
    title: "Por qué tu banco es tu peor enemigo financiero (y qué hacer)",
    description:
      "Tu banco te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Esto es un sistema diseñado en tu contra.",
    type: "article",
  },
};

export default function EdicionBancoEnemigo() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="banco-tu-peor-enemigo-article"
        data={[
          articleSchema({
            title: "Por qué tu banco es tu peor enemigo financiero (y qué hacer) | La Impresora #002",
            description: "Tu banco te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover tu propio dinero. Esto es un sistema diseñado en tu contra. Te mostramos la salida.",
            slug: "banco-tu-peor-enemigo",
            publishedAt: "2025-09-01",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Por qué tu banco es tu peor enemigo financiero (y qué hacer)", url: "/blog/banco-tu-peor-enemigo" },
          ]),
        ]}
      />

      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-10">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-white/50">Edición #002</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Crypto & Mercados
            </span>
            <span className="text-white/20 text-xs font-mono">#002 — 6 Mayo 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Por qué tu banco es tu peor enemigo financiero (y qué hacer al respecto)
          </h1>

          <p className="text-white/50 text-lg leading-relaxed">
            Te cobra por guardar tu plata, te paga menos que la inflación y te pone límites para mover
            tu propio dinero. El sistema bancario no está roto: está funcionando exactamente para quienes
            fue diseñado. Spoiler: no sos vos.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Subject line preview box */}
        <div className="bg-gris-medio border border-white/10 rounded-2xl p-5 mb-12 font-mono text-sm">
          <div className="text-white/30 text-xs mb-2 uppercase tracking-widest">Email original</div>
          <div className="mb-1">
            <span className="text-white/40">Asunto: </span>
            <span className="text-white font-bold">Tu banco te cobra por guardar tu plata. Esto es una estafa legal.</span>
          </div>
          <div>
            <span className="text-white/40">Preview: </span>
            <span className="text-white/60">Los números que el banco no quiere que veas (y la alternativa que sí funciona).</span>
          </div>
        </div>

        {/* Tema principal */}
        <article className="prose prose-invert max-w-none">

          <div className="bg-dorado/5 border-l-4 border-dorado px-6 py-5 rounded-r-2xl mb-10">
            <p className="text-dorado font-bold text-sm uppercase tracking-widest mb-1">Tema principal</p>
            <p className="text-white/80 text-base leading-relaxed m-0">
              Si tu plata está parada en una cuenta bancaria tradicional en Argentina, México o Colombia,
              estás perdiendo dinero todos los días. No es metáfora. Es matemática.
              La inflación comes tu capital, las comisiones te la afanan por arriba,
              y la tasa de interés que te ofrecen es una broma. El banco no es tu aliado financiero.
              Es el intermediario que vive de tu ignorancia.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">Los números que el banco no te muestra</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            Hagamos el ejercicio con Argentina porque es el caso más extremo, pero la lógica aplica en toda la región.
            Tenés $1.000.000 de pesos en una caja de ahorro. El banco te paga, en el mejor escenario,
            un 30% anual de interés. La inflación anual ronda el 50%. Resultado: en 12 meses
            tu poder adquisitivo bajó un 20%. Guardaste plata y te hiciste más pobre.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            Ahora sumale las comisiones: mantenimiento de cuenta, tarjeta de débito, transferencias fuera del banco,
            extracción en cajeros de otras redes. En promedio, una cuenta bancaria en LATAM tiene
            entre 8 y 14 lineas de cobro mensual que muchos ni leen porque están enterradas en el resumen.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            En México, el Banco de México publicó que las comisiones bancarias representan
            el equivalente al 1.2% del PBI anual. En plata: la banca está extrayendo
            miles de millones de la economia real, año a año, legalmente.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">¿Por qué seguimos usando bancos?</h2>

          <ArticleCTA />

          <p className="text-white/70 leading-relaxed mb-5">
            Porque durante décadas no habia alternativa real. Tenias que cobrar en banco,
            pagar impuestos por banco, recibir tu sueldo en banco. El sistema estaba diseñado
            para forzarte a entrar. Y una vez adentro, te queda muy complicado salir del todo.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            Pero eso cambió. No de golpe. Silenciosamente.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            Las stablecoins (criptomonedas que valen siempre $1 dolar) te permiten hoy guardar
            valor en dólares sin necesitar una cuenta en un banco americano.
            Los protocolos DeFi te pagan entre 4% y 12% anual en dólares por prestar esa liquidez,
            sin burocracia, sin papeles, sin turno previo.
            Las billeteras crypto te dejan mover plata a cualquier parte del mundo en minutos,
            con comisiones de centavos.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-4">La estrategia híbrida que funciona hoy</h2>

          <p className="text-white/70 leading-relaxed mb-5">
            No te decimos que cierres tu cuenta bancaria. Te decimos que dejes en el banco
            solo lo que necesitás para operar: pagar servicios, recibir tu sueldo, retirar efectivo.
            El resto, lo movés a un sistema paralelo que trabaja para vos.
          </p>

          <p className="text-white/70 leading-relaxed mb-5">
            El modelo básico tiene tres capas. Primera: una billetera digital como Lemon, Belo o Ripio
            donde guardás tus pesos y los convertís a USDT o USDC automaticamente.
            Segunda: una fracción de eso en protocolos de rendimiento donde generás 6-10% anual en dolares.
            Tercera: el banco para lo que el banco todavia es necesario (cobrar, pagar facturas, ATM).
          </p>

          <p className="text-white/70 leading-relaxed mb-8">
            No es para hacerse rico de golpe. Es para dejar de hacerse pobre de a poco.
            La diferencia entre alguien que entiende esto y alguien que no,
            en diez años, es enorme. Si querés entender mejor cómo funcionan las stablecoins y DeFi,
            leé nuestra guía de <Link href="/blog/stablecoins-latam" className="text-verde hover:underline">stablecoins en LATAM</Link> y la
            explicación completa de <Link href="/blog/que-es-defi-como-funciona" className="text-verde hover:underline">cómo funciona DeFi para principiantes</Link>.
          </p>

        </article>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* 3 Noticias rapidas */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-dorado/10 border border-dorado/20 text-dorado text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Noticias rapidas
            </span>
          </div>

          <div className="space-y-5">

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">01</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    USDC supera los $60.000 millones en circulacion y bate su record historico
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Circle, el emisor de USDC, anuncio que la stablecoin supero su maximo historico
                    de capitalizacion. El crecimiento vino principalmente de mercados emergentes:
                    Brasil, Argentina, Nigeria y Vietnam lideran la adopcion.
                    <span className="text-verde font-semibold"> Por qué importa:</span> la gente en LATAM ya esta votando con sus billeteras. El dolar digital gana terreno al bancario.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">02</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Nubank llega a 100 millones de clientes en America Latina
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    El banco digital brasileño se convirtio en el mayor banco digital del mundo fuera de Asia.
                    Su modelo: cero sucursales fisicas, cero comisiones visibles, app impecable.
                    Mas del 60% de sus clientes nunca habian tenido acceso a servicios financieros formales.
                    <span className="text-verde font-semibold"> Por qué importa:</span> la bancarizacion tradicional no llego donde llego Nubank. La alternativa digital gana.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <span className="text-dorado font-black text-lg leading-none mt-0.5">03</span>
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Bitcoin rompe los $100K nuevamente: institucionales siguen comprando
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Los ETFs de Bitcoin de BlackRock y Fidelity sumaron mas de $2.000 millones
                    en las ultimas dos semanas. No son especuladores: son fondos de pension,
                    family offices y tesorerías corporativas que mueven su cash fuera del sistema bancario.
                    <span className="text-verde font-semibold"> Por qué importa:</span> cuando los institucionales hacen lo mismo que te decimos a vos, algo esta claro.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Oportunidad concreta */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Oportunidad concreta
            </span>
          </div>

          <div className="bg-verde/5 border border-verde/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-black text-verde mb-4">
              Staking de USDC en Aave: 5-8% anual en dolares, liquido en cualquier momento
            </h3>
            <p className="text-white/70 leading-relaxed mb-5">
              Aave es el protocolo de lending mas auditado y usado del ecosistema DeFi.
              Podes depositar USDC (el dolar digital de Circle) y ganar entre 5% y 8% anual
              en ese mismo dolar. Sin bloqueo de fondos. Retiras cuando queres.
              Sin papeles. Sin banco.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">5-8%</div>
                <div className="text-white/40 text-xs mt-1">rendimiento anual en USD</div>
              </div>
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">0</div>
                <div className="text-white/40 text-xs mt-1">dias de bloqueo</div>
              </div>
              <div className="bg-oscuro/50 rounded-xl p-4 text-center">
                <div className="text-verde font-black text-2xl">$50</div>
                <div className="text-white/40 text-xs mt-1">minimo para empezar</div>
              </div>
            </div>
            <p className="text-white/50 text-sm">
              <span className="text-verde font-semibold">Como empezar:</span> crea una cuenta en Lemon (Argentina) o Bitso (Mexico), compra USDC,
              conecta con MetaMask y deposita en Aave v3 en la red Polygon para minimizar
              comisiones de gas. En 10 minutos estas generando rendimiento.
            </p>
            <p className="text-white/40 text-xs mt-3">
              Disclaimer: DeFi tiene riesgos tecnologicos. Nunca pongas mas de lo que estas dispuesto a aprender a manejar primero.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Dato curioso */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-400/10 border border-purple-400/20 text-purple-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Dato / Meme
            </span>
          </div>

          <div className="bg-gris-medio border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">🏦</div>
            <p className="text-white font-bold text-lg mb-3">
              "Un banco es un lugar que te presta un paraguas cuando hace sol y te lo pide de vuelta cuando empieza a llover."
            </p>
            <p className="text-white/40 text-sm mb-4">— Robert Frost (1874-1963). Hace 150 años esto ya era asi.</p>
            <div className="bg-oscuro rounded-xl p-4 text-left font-mono text-sm text-white/60">
              <span className="text-dorado">comparativa rapida (Argentina 2026):</span>
              <br />
              Plazo fijo bancario: ~30% anual en pesos
              <br />
              Inflacion: ~50% anual
              <br />
              USDC en DeFi: 6% anual en <span className="text-verde">dolares reales</span>
              <br />
              <span className="text-verde">Conclusion: matematica, no opinion.</span>
            </div>
          </div>
        </section>

        {/* Nav between posts */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 justify-between mb-16">
          <Link
            href="/blog/gap-ai-oportunidad"
            className="bg-white/5 border border-white/10 text-white/60 font-bold px-5 py-3 rounded-full hover:bg-white/10 transition-colors text-sm text-center"
          >
            ← #001 El gap de AI
          </Link>
          <Link
            href="/blog/tokenizacion-campo-paraguay"
            className="bg-verde/10 border border-verde/20 text-verde font-bold px-5 py-3 rounded-full hover:bg-verde/20 transition-colors text-sm text-center"
          >
            Siguiente: #003 Tokenizacion →
          </Link>
        </div>

      </div>

      <Newsletter />
    </div>
  );
}
