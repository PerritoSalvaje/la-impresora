import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Cómo comprar USDT en México sin Binance — Guía 2026",
  description:
    "5 alternativas reales a Binance para comprar USDT en México: Bitso, Volabit, Lemon, P2P locales y SPEI directo. Comparativa fees, KYC y métodos de pago 2026.",
  openGraph: { title: "Cómo comprar USDT en México sin Binance 2026", type: "article" },
};

const PLATAFORMAS = [
  {
    n: "Bitso",
    spread: "1-2%",
    deposito: "SPEI gratis (clave)",
    pros: ["Empresa mexicana regulada CNBV", "SPEI directo en pesos", "Bitso Card Visa para gastar USDT"],
    contras: ["Spread más alto que P2P", "App pesada"],
  },
  {
    n: "Volabit",
    spread: "0.8-1.5%",
    deposito: "SPEI + tarjeta",
    pros: ["Fees bajos", "Setup en 10 min"],
    contras: ["Comunidad chica", "Soporte lento"],
  },
  {
    n: "Lemon Cash México",
    spread: "2-3%",
    deposito: "SPEI",
    pros: ["UX simple", "Tarjeta crypto LATAM"],
    contras: ["Spread alto", "Limites bajos sin KYC pleno"],
  },
  {
    n: "P2P Bybit / OKX",
    spread: "0.3-1%",
    deposito: "SPEI / OXXO / transferencias",
    pros: ["El precio más bajo", "Acepta OXXO en efectivo"],
    contras: ["Riesgo de contraparte", "Curva técnica"],
  },
  {
    n: "Mercado Bitcoin (Brasil-MX bridge)",
    spread: "1-1.5%",
    deposito: "SPEI vía broker partner",
    pros: ["Liquidez profunda", "Reputación"],
    contras: ["Más vueltas", "No siempre disponible"],
  },
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="comprar-usdt-mx-article"
        data={[
          articleSchema({
            title: "Cómo comprar USDT en México sin Binance — Guía 2026",
            description: "5 alternativas reales a Binance para comprar USDT en México.",
            slug: "como-comprar-usdt-en-mexico-sin-binance-2026",
            publishedAt: "2026-05-03",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Comprar USDT México sin Binance", url: "/blog/como-comprar-usdt-en-mexico-sin-binance-2026" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/40">
          <Link href="/blog" className="hover:text-verde">Blog</Link>
          <span className="mx-2">/</span>
          <span>Operativa MX</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-verde mb-5 inline-flex">Operativa México</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Cómo comprar USDT en México sin Binance
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Si Binance México te genera fricción (KYC lento, spread alto, restricciones recientes),
            estas son las 5 vías reales para comprar USDT en pesos mexicanos en 2026.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <p>
            Binance sigue siendo el más grande, pero en 2025-2026 cambió varias políticas en
            México (KYC más estricto, límites para algunos métodos de pago, spread variable).
            Para muchos mexicanos no es la mejor opción operativa hoy.
          </p>

          <h2>Las 5 alternativas comparadas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr><th>Plataforma</th><th>Spread</th><th>Depósito</th></tr>
              </thead>
              <tbody>
                {PLATAFORMAS.map((p) => (
                  <tr key={p.n}>
                    <td><strong>{p.n}</strong></td>
                    <td>{p.spread}</td>
                    <td>{p.deposito}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Recomendación según uso</h2>
          <ul>
            <li><strong>$50-500 USD/mes:</strong> Bitso. Simplicidad + regulación CNBV.</li>
            <li><strong>$500-2,000/mes:</strong> Bitso + P2P Bybit para los montos más grandes.</li>
            <li><strong>$2,000+/mes:</strong> P2P Bybit (mejor spread). Diversificá entre 2 exchanges.</li>
            <li><strong>Sin tarjeta de crédito:</strong> P2P Bybit con OXXO en efectivo.</li>
          </ul>

          <h2>Errores caros que evitar</h2>
          <ol>
            <li>NO comprar con tarjeta de crédito (5-10% extra de fee + interés)</li>
            <li>NO dejar más de $2k USD en exchange más de 1 mes</li>
            <li>NO usar exchanges sin licencia CNBV para montos &gt;$5k</li>
            <li>SAT (México) considera cripto activo virtual — guardá registro de cada compra</li>
          </ol>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/recursos/dolarizar">Mapa de Dolarización LATAM</Link></li>
            <li><Link href="/blog/stablecoins-latam">Stablecoins en LATAM: USDT vs USDC</Link></li>
            <li><Link href="/blog/mejores-wallets-crypto-2026">Mejores wallets crypto 2026</Link></li>
          </ul>
        </div>

        <ArticleCTA source="blog_usdt_mexico" hook="¿Más operativa México crypto sin gurúes?" />

        <div className="mt-24"><Newsletter /></div>
      </div>
    </div>
  );
}
