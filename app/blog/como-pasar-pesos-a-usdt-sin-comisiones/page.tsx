import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Cómo pasar pesos a USDT sin comisiones (o casi) 2026",
  description:
    "5 vías reales para convertir pesos argentinos a USDT minimizando spread y fees: P2P Binance, Bybit, Lemon, Bitso, MEP+OTC. Comparativa de fees reales en 2026.",
  openGraph: {
    title: "Cómo pasar pesos a USDT sin comisiones (o casi) 2026",
    description: "5 vías reales: P2P, Bybit, Lemon, Bitso, MEP. Spread real de cada una.",
    type: "article",
  },
};

const VIAS = [
  {
    nombre: "Binance P2P",
    spread: "0.1-1.5%",
    velocidad: "5-30 min",
    pros: ["El spread más bajo en LATAM", "Sin KYC adicional al de Binance", "Múltiples métodos: transferencia, Mercado Pago, Western Union"],
    contras: ["Riesgo de contraparte (la persona puede no pagar)", "Curva de aprendizaje", "Requiere tener Binance verificada"],
    cuando: "Para montos $200+ y si querés el mejor precio",
  },
  {
    nombre: "Bybit (compra directa)",
    spread: "0.5-1.5%",
    velocidad: "Instantáneo",
    pros: ["Fácil, 1 click", "Buena interfaz", "Bajo spread"],
    contras: ["Requiere DEBIN o transferencia", "KYC obligatorio"],
    cuando: "Para principiantes que prefieren simplicidad",
  },
  {
    nombre: "Lemon",
    spread: "2-4%",
    velocidad: "Instantáneo",
    pros: ["App argentina, todo en pesos", "Tarjeta Lemon Visa para gastar USDT directo"],
    contras: ["Spread más alto", "Limites más bajos para no-verificados"],
    cuando: "Si recién empezás y querés todo en una app simple",
  },
  {
    nombre: "Bitso",
    spread: "1-2.5%",
    velocidad: "5-10 min",
    pros: ["Argentino, regulado", "Bitso Card", "Buena reputación"],
    contras: ["Spread medio", "Tiempos de transferencia variables"],
    cuando: "Por confianza institucional y si valorás KYC argentino",
  },
  {
    nombre: "MEP + OTC cripto",
    spread: "0.3-1%",
    velocidad: "1-3 días",
    pros: ["El método más eficiente para >$5k USD", "Casi sin spread"],
    contras: ["Lento", "Requiere cuenta de valores y broker", "Más burocracia"],
    cuando: "Para montos >$5,000 USD",
  },
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="pesos-a-usdt-article"
        data={[
          articleSchema({
            title: "Cómo pasar pesos a USDT sin comisiones (o casi) 2026",
            description: "5 vías reales para convertir pesos argentinos a USDT con bajo spread.",
            slug: "como-pasar-pesos-a-usdt-sin-comisiones",
            publishedAt: "2026-05-02",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Pesos a USDT sin comisiones", url: "/blog/como-pasar-pesos-a-usdt-sin-comisiones" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Operativa</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-verde mb-5 inline-flex">Operativa LATAM</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Cómo pasar pesos a USDT sin comisiones (o casi) en 2026
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            5 vías reales con su spread + velocidad + cuándo usar cada una. La diferencia entre
            la mejor y la peor: 4% — eso son $40 USD por cada $1,000 que muevas.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <p>
            \"Sin comisiones\" no existe. Pero hay vías de 0.3% spread y vías de 4-5%. La
            diferencia para alguien que mueve $1,000/mes son $40-50 USD al mes — $480-600 al año.
            Esta guía te muestra las 5 que valen la pena.
          </p>

          <h2>Las 5 vías comparadas</h2>
          {VIAS.map((v) => (
            <div key={v.nombre} className="card p-5 mb-4">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display font-bold text-text-primary text-lg m-0">{v.nombre}</h3>
                <div className="flex gap-3 text-xs text-text-muted">
                  <span>Spread: <span className="text-verde font-bold">{v.spread}</span></span>
                  <span>Tiempo: {v.velocidad}</span>
                </div>
              </div>
              <p className="text-sm m-0 mb-3"><strong>Cuándo usar:</strong> {v.cuando}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-verde font-bold text-xs uppercase mb-1">Pros</p>
                  <ul className="m-0 pl-0">
                    {v.pros.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 font-bold" style={{ color: "#ff8080" }}>Contras</p>
                  <ul className="m-0 pl-0">
                    {v.contras.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <h2>Recomendación según monto</h2>
          <ul>
            <li><strong>$50-200/mes:</strong> Lemon o Bybit. Simplicidad &gt; spread.</li>
            <li><strong>$200-2,000/mes:</strong> Binance P2P. La mejor relación spread/velocidad.</li>
            <li><strong>$2,000-5,000/mes:</strong> Combinación de Bybit + Binance P2P según urgencia.</li>
            <li><strong>$5,000+/mes:</strong> MEP + OTC cripto. Spread mínimo, vale la espera.</li>
          </ul>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/recursos/dolarizar">Mapa de Dolarización LATAM 2026</Link></li>
            <li><Link href="/blog/mejores-exchanges-crypto-argentina-2026">Mejores exchanges Argentina</Link></li>
            <li><Link href="/blog/stablecoins-latam">Stablecoins en LATAM: USDT vs USDC</Link></li>
            <li><Link href="/blog/como-declarar-crypto-argentina">Cómo declarar crypto en Argentina</Link></li>
          </ul>
        </div>

        <ArticleCTA
          source="blog_pesos_a_usdt"
          hook="¿Más operativa LATAM cripto sin gurúes?"
        />

        <div className="mt-24">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
