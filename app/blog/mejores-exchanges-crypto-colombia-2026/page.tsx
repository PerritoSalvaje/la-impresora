import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Mejores exchanges crypto Colombia 2026 — Comparativa real",
  description:
    "Top exchanges para comprar crypto en Colombia 2026: Bitso, Binance, Buda, Panda Exchange, Lemon. Fees, métodos de depósito en pesos colombianos, regulación.",
  openGraph: { title: "Mejores exchanges crypto Colombia 2026", type: "article" },
};

const EXCHANGES = [
  { n: "Bitso", spread: "1-2%", deposito: "PSE / transferencia", pros: "Regulado, app sólida, Bitso Card", contras: "Spread medio" },
  { n: "Binance", spread: "0.5-1%", deposito: "P2P COP", pros: "Mayor liquidez global, P2P amplio", contras: "KYC más lento" },
  { n: "Buda.com", spread: "1.2-2%", deposito: "PSE / transferencia", pros: "Empresa chilena con presencia local", contras: "Comunidad chica" },
  { n: "Panda Exchange", spread: "1-1.5%", deposito: "PSE", pros: "100% colombiano", contras: "Liquidez limitada" },
  { n: "Lemon Cash CO", spread: "2-3%", deposito: "PSE", pros: "App simple, tarjeta crypto", contras: "Spread alto" },
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="exchanges-co-2026-article"
        data={[
          articleSchema({
            title: "Mejores exchanges crypto Colombia 2026",
            description: "Top exchanges para Colombia 2026 con fees, métodos PSE y regulación.",
            slug: "mejores-exchanges-crypto-colombia-2026",
            publishedAt: "2026-05-03",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Exchanges crypto Colombia 2026", url: "/blog/mejores-exchanges-crypto-colombia-2026" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/40">
          <Link href="/blog" className="hover:text-verde">Blog</Link>
          <span className="mx-2">/</span>
          <span>Exchanges</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-verde mb-5 inline-flex">Operativa Colombia</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Mejores exchanges crypto Colombia 2026
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            5 exchanges reales para comprar crypto desde Colombia en 2026, con depósito por PSE en
            pesos colombianos. Fees reales, regulación local y cuál usar según tu situación.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <p>
            La DIAN reconoce las criptomonedas como bien intangible desde 2024, lo que significa
            que están reguladas pero NO prohibidas. Esto cambió el panorama: hoy hay 5+ exchanges
            operando legalmente con depósito en pesos colombianos vía PSE.
          </p>

          <h2>Comparativa</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr><th>Exchange</th><th>Spread</th><th>Depósito</th><th>Pros</th><th>Contras</th></tr>
              </thead>
              <tbody>
                {EXCHANGES.map((e) => (
                  <tr key={e.n}>
                    <td><strong>{e.n}</strong></td>
                    <td>{e.spread}</td>
                    <td>{e.deposito}</td>
                    <td>{e.pros}</td>
                    <td>{e.contras}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Recomendación según monto</h2>
          <ul>
            <li><strong>$0-500 USD:</strong> Bitso. Setup más rápido, regulación clara.</li>
            <li><strong>$500-5,000:</strong> Bitso para principal + Binance P2P para los más grandes (mejor precio).</li>
            <li><strong>$5,000+:</strong> Binance P2P + diversificar entre 2 plataformas. Mover a wallet propia mensual.</li>
          </ul>

          <h2>Impuestos crypto Colombia (DIAN)</h2>
          <p>
            La DIAN exige declarar tenencias y ganancias. Tasa actual sobre ganancias ocasionales
            es del 10-35% según monto. Conservá registro de cada compra/venta para el formulario
            210 anual.
          </p>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/stablecoins-latam">Stablecoins LATAM</Link></li>
            <li><Link href="/blog/impuestos-crypto-por-pais">Impuestos crypto por país</Link></li>
            <li><Link href="/recursos/dolarizar">Mapa Dolarización LATAM</Link></li>
          </ul>
        </div>

        <ArticleCTA source="blog_exchanges_co" hook="¿Más operativa Colombia crypto?" />

        <div className="mt-24"><Newsletter /></div>
      </div>
    </div>
  );
}
