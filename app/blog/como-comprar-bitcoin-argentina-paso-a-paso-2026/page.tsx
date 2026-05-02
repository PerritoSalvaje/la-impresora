import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Cómo comprar Bitcoin en Argentina paso a paso 2026",
  description:
    "Guía 2026 para comprar Bitcoin desde Argentina sin caer en estafas. Mejores exchanges (Lemon, Bybit, Binance, Bitso, Belo, Ripio), métodos de pago, KYC, sacarlo a wallet propia.",
  openGraph: {
    title: "Cómo comprar Bitcoin en Argentina paso a paso 2026",
    description: "Guía completa: exchange, KYC, transferencia, compra y custodia propia. Sin trampas, sin gurúes.",
    type: "article",
  },
};

const PASOS = [
  {
    n: "01",
    titulo: "Elegir exchange (no es lo mismo todos)",
    contenido: "En Argentina los más usados son Lemon, Bybit, Binance, Bitso, Belo y Ripio. Lemon y Belo cobran en pesos directo, son simples para principiantes pero tienen spread alto (3-5%). Bybit, Binance y Bitso tienen mejor precio (spread 0.5-1.5%) pero requieren más pasos. Para empezar con $50-500: Lemon. Para $500+: Bybit o Bitso.",
  },
  {
    n: "02",
    titulo: "Verificar identidad (KYC)",
    contenido: "Todos los exchanges legales requieren foto del DNI + selfie. Tarda 5 minutos a 24 horas según el exchange. Sin KYC no podés operar montos serios. NO uses exchanges sin KYC — son trampas o tienen riesgo regulatorio alto.",
  },
  {
    n: "03",
    titulo: "Cargar pesos (transferencia bancaria o DEBIN)",
    contenido: "Generás un CBU/CVU del exchange, transferís desde tu banco. DEBIN es más rápido (2 minutos), transferencia común tarda 1-24h. Algunos exchanges aceptan tarjeta de crédito (con recargo 5-10%) — evitalo, es caro.",
  },
  {
    n: "04",
    titulo: "Comprar Bitcoin (orden a mercado)",
    contenido: "En la pantalla del exchange: \"Comprar BTC\". Elegís cuánto en pesos o cuánto BTC. Orden a mercado = compra al precio actual. NO compres todo de una vez — DCA (compras de a poco cada 2 semanas) reduce el riesgo del timing.",
  },
  {
    n: "05",
    titulo: "Sacar de exchange a wallet propia",
    contenido: "Si vas a tener BTC más de 1 mes, sacalo del exchange. Para hasta $5,000: wallet móvil (Phantom, Trust Wallet, Muun). Para $5,000+: hardware wallet (Ledger Nano S Plus $80, Trezor One $90). Los pasos: crear wallet → anotar seed phrase EN PAPEL → enviar BTC del exchange a tu wallet.",
  },
  {
    n: "06",
    titulo: "Documentar para impuestos",
    contenido: "ARCA (ex-AFIP) considera Bitcoin como bien personal + activo financiero. Conviene guardar capturas de cada compra (fecha, monto, precio BTC) para el momento de declarar. Si tenés más de ~$3,000 USD en cripto, vas a tener que declarar Bienes Personales.",
  },
];

const ERRORES_COMUNES = [
  "Comprar todo de una vez con miedo a \"perder el tren\" — usá DCA",
  "Dejar BTC en el exchange más de 1 mes (FTX quebró con $9B)",
  "Anotar la seed phrase en una foto, iCloud o Drive (la pueden robar)",
  "Comprar BTC con tarjeta de crédito (5-10% de fee + intereses)",
  "Caer en \"oportunidades\" de WhatsApp/Telegram (siempre son scams)",
  "No declarar pensando que ARCA no se entera (los exchanges informan)",
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="comprar-btc-ar-2026-article"
        data={[
          articleSchema({
            title: "Cómo comprar Bitcoin en Argentina paso a paso 2026",
            description: "Guía 2026 para comprar Bitcoin desde Argentina sin caer en estafas.",
            slug: "como-comprar-bitcoin-argentina-paso-a-paso-2026",
            publishedAt: "2026-05-02",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Comprar Bitcoin Argentina 2026", url: "/blog/como-comprar-bitcoin-argentina-paso-a-paso-2026" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Crypto</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-verde mb-5 inline-flex">Guía paso a paso</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Cómo comprar Bitcoin en Argentina paso a paso 2026
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Lo que tenés que hacer concretamente — sin gurúes, sin terminología innecesaria, sin
            anuncios de \"el próximo BTC va a 1M\". 6 pasos. 1 hora de trabajo total.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <p>
            Comprar Bitcoin desde Argentina en 2026 es más simple que nunca: hay 6+ exchanges
            argentinos legales, KYC en minutos, y métodos de pago en pesos. Lo difícil no es
            comprar — es no caer en errores caros (dejar todo en exchange, comprar todo de golpe,
            usar tarjeta de crédito). Esta guía cubre los 6 pasos concretos.
          </p>

          <h2>Los 6 pasos</h2>
          {PASOS.map((p) => (
            <div key={p.n} className="card p-5 mb-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display font-bold text-dorado text-xl">{p.n}</span>
                <h3 className="font-display font-semibold text-text-primary text-base m-0">
                  {p.titulo}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed m-0">{p.contenido}</p>
            </div>
          ))}

          <h2>6 errores que tenés que evitar</h2>
          <ul>
            {ERRORES_COMUNES.map((e) => <li key={e}>{e}</li>)}
          </ul>

          <h2>Cuánto comprar para empezar</h2>
          <p>
            Recomendación honesta: empezá con lo que estarías dispuesto a perder sin angustia. Para
            la mayoría eso es 1-3% de los ingresos mensuales. Si ganás $1,000 USD/mes, $20-30 USD
            en BTC el primer mes está bien. Lo importante es el HÁBITO de comprar mensual, no el
            monto inicial.
          </p>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/que-es-bitcoin-y-como-funciona">Qué es Bitcoin y cómo funciona</Link></li>
            <li><Link href="/blog/mejores-exchanges-crypto-argentina-2026">Mejores exchanges crypto Argentina 2026</Link></li>
            <li><Link href="/blog/mejores-wallets-crypto-2026">Mejores wallets crypto 2026</Link></li>
            <li><Link href="/blog/como-declarar-crypto-argentina">Cómo declarar crypto en Argentina</Link></li>
            <li><Link href="/calculadoras/dca">Calculadora DCA Bitcoin</Link></li>
          </ul>
        </div>

        <ArticleCTA
          source="blog_comprar_btc_ar_2026"
          hook="¿Querés que te avise cada vez que sale una guía paso a paso?"
        />

        <div className="mt-24">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
