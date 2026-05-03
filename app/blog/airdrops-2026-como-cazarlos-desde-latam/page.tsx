import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Airdrops 2026: cómo cazarlos desde LATAM (sin perder plata)",
  description:
    "Guía 2026 de airdrops: qué buscar, cómo no caer en scams, las 5 plataformas más prometedoras del año, costos reales (gas) y por qué la mayoría termina perdiendo plata.",
  openGraph: {
    title: "Airdrops 2026: cómo cazarlos desde LATAM",
    description: "Las 5 plataformas que pueden hacer airdrop en 2026. Cómo prepararte sin perder plata en gas.",
    type: "article",
  },
};

const PROYECTOS = [
  { nombre: "MegaETH", chain: "ETH L2", probabilidad: "Alta", costo: "$50-200 gas" },
  { nombre: "Monad", chain: "Standalone L1", probabilidad: "Alta", costo: "Gratis testnet" },
  { nombre: "Hyperliquid", chain: "Standalone", probabilidad: "Media (ya hizo 1 grande)", costo: "Trading volume" },
  { nombre: "Berachain", chain: "Standalone L1", probabilidad: "Media (post-mainnet)", costo: "$100-500 testnet/mainnet" },
  { nombre: "Linea", chain: "ETH L2", probabilidad: "Media-baja", costo: "$30-100 gas" },
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="airdrops-2026-article"
        data={[
          articleSchema({
            title: "Airdrops 2026: cómo cazarlos desde LATAM (sin perder plata)",
            description: "Guía 2026 de airdrops: qué buscar, cómo no caer en scams, costos reales.",
            slug: "airdrops-2026-como-cazarlos-desde-latam",
            publishedAt: "2026-05-02",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Airdrops 2026 LATAM", url: "/blog/airdrops-2026-como-cazarlos-desde-latam" },
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
          <span className="badge badge-verde mb-5 inline-flex">Estrategia 2026</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Airdrops 2026: cómo cazarlos desde LATAM
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            La mayoría de los que cazan airdrops pierden plata neta. Esta guía es para que no te
            pase a vos. Qué buscar, qué evitar, las 5 oportunidades que valen.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <p>
            Un airdrop es cuando un protocolo crypto regala tokens a usuarios que cumplen ciertos
            criterios (haber usado la plataforma, holdear cierto NFT, etc.). En 2024, Hyperliquid
            airdropeó ~$2,000 promedio a usuarios elegibles. ZkSync airdropeó &lt;$200. Arbitrum,
            ~$1,800. La diferencia: criterios y cuánto trabajo daba calificar.
          </p>

          <h2>Por qué la mayoría pierde plata</h2>
          <ul>
            <li><strong>Gas fees:</strong> hacer 50 transacciones en Ethereum L1 puede costar $200-500. Si el airdrop te da $300, pierdes.</li>
            <li><strong>Sybil filtering:</strong> los protocolos detectan a los que abren 50 wallets. Te terminás quedando sin nada.</li>
            <li><strong>Tiempo:</strong> calificar a 10 airdrops = 40-60h de trabajo. Si te dan $1,000 entre todos, ganaste $20/h.</li>
            <li><strong>Scams:</strong> 90% de los \"airdrops gratis\" en X/Telegram son phishing.</li>
          </ul>

          <h2>Cómo cazar airdrops bien</h2>
          <ol>
            <li><strong>Solo proyectos con TVL &gt;$100M y backing sólido</strong> (a16z, Paradigm, Sequoia)</li>
            <li><strong>Hacé las acciones que harías de todos modos</strong>: si vas a hacer DeFi, hacelo en chains que pueden airdropear</li>
            <li><strong>Usá L2s baratos</strong>: Base, Arbitrum, Linea — gas $0.10 vs $50 en L1</li>
            <li><strong>Una wallet por proyecto, máximo 2</strong>. Más es Sybil-bait</li>
            <li><strong>Documentá todo</strong>: hoja de cálculo con fechas, montos, chains</li>
          </ol>

          <h2>Top 5 oportunidades 2026 (estimación)</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm">
            <thead>
              <tr><th>Proyecto</th><th>Chain</th><th>Probabilidad</th><th>Costo entrada</th></tr>
            </thead>
            <tbody>
              {PROYECTOS.map((p) => (
                <tr key={p.nombre}>
                  <td><strong>{p.nombre}</strong></td>
                  <td>{p.chain}</td>
                  <td>{p.probabilidad}</td>
                  <td>{p.costo}</td>
                </tr>
              ))}
            </tbody>
          </table></div>

          <h2>Si vas a hacerlo, regla de oro</h2>
          <p>
            Tratá los airdrops como una <strong>cola larga</strong>: no apuestes a 1, hacé 5-10 con
            poca interacción cada uno. La mayoría no va a pagar. 1-2 sí. Y aceptá que el 80% del
            tiempo pierdes vs. el costo de gas.
          </p>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/defi-principiantes-2026">DeFi para principiantes 2026</Link></li>
            <li><Link href="/blog/mejores-wallets-crypto-2026">Mejores wallets 2026</Link></li>
            <li><Link href="/blog/como-ganar-dinero-con-crypto-sin-invertir">Cómo ganar dinero con crypto sin invertir</Link></li>
          </ul>
        </div>

        <ArticleCTA
          source="blog_airdrops_2026"
          hook="¿Querés alertas cuando aparece un airdrop interesante?"
        />

        <div className="mt-24">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
