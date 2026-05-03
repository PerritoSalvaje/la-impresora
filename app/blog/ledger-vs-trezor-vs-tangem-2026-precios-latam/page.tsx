import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Ledger vs Trezor vs Tangem 2026: comparativa con precios LATAM",
  description:
    "Hardware wallets en 2026: Ledger Nano S Plus ($79), Trezor Safe 3 ($79), Tangem ($55). Comparativa completa con precios LATAM, ventajas/desventajas, cuál elegir según uso.",
  openGraph: { title: "Ledger vs Trezor vs Tangem 2026 LATAM", type: "article" },
};

const WALLETS = [
  {
    n: "Ledger Nano S Plus",
    precio: "$79 USD",
    pros: ["Soporte 5,000+ cryptos", "App muy madura (Ledger Live)", "Reputación de 10+ años"],
    contras: ["Closed source firmware (controvertido)", "Hack 2020 leak datos clientes (no claves)", "Requiere computadora para inicializar"],
    ideal: "Mayoría de usuarios, principiantes a intermedios",
  },
  {
    n: "Trezor Safe 3",
    precio: "$79 USD",
    pros: ["100% open source", "Sin antecedentes de hack", "Pantalla a color"],
    contras: ["Soporta menos cryptos que Ledger", "App menos pulida", "PIN entry más lento"],
    ideal: "Usuarios técnicos que priorizan transparencia",
  },
  {
    n: "Tangem (3 cards)",
    precio: "$55 USD",
    pros: ["Setup en 3 minutos", "Sin cables, NFC al celular", "3 tarjetas (backup nativo)"],
    contras: ["Requiere apoyar la card al celular cada operación", "Sin pantalla propia", "Más nuevo (menos battle-tested)"],
    ideal: "Usuarios mobile-first, primera hardware wallet",
  },
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="ledger-trezor-tangem-article"
        data={[
          articleSchema({
            title: "Ledger vs Trezor vs Tangem 2026 (precios LATAM)",
            description: "Comparativa hardware wallets 2026 con precios LATAM.",
            slug: "ledger-vs-trezor-vs-tangem-2026-precios-latam",
            publishedAt: "2026-05-03",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Ledger vs Trezor vs Tangem 2026", url: "/blog/ledger-vs-trezor-vs-tangem-2026-precios-latam" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/40">
          <Link href="/blog" className="hover:text-verde">Blog</Link>
          <span className="mx-2">/</span>
          <span>Hardware wallets</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-dorado mb-5 inline-flex">Comparativa 2026</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Ledger vs Trezor vs Tangem 2026
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Las 3 hardware wallets que tienen sentido en 2026, con precios reales LATAM, ventajas
            y contras técnicas, y a quién le conviene cada una.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <p>
            Si tenés más de $1,000 USD en cripto y todavía está en wallet móvil (Phantom, Trust),
            es hora de hardware wallet. La diferencia: en hot wallet la seed touch internet en algún
            momento del ciclo. En hardware, NUNCA — la firma de transacciones se hace dentro del
            chip, offline.
          </p>

          <h2>Las 3 opciones</h2>
          {WALLETS.map((w) => (
            <div key={w.n} className="card p-6 mb-4">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display font-bold text-text-primary text-lg m-0">{w.n}</h3>
                <span className="font-display font-bold text-dorado">{w.precio}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <p className="text-verde font-bold text-xs uppercase mb-1">Pros</p>
                  <ul className="m-0 pl-0">{w.pros.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 font-bold" style={{ color: "#ff8080" }}>Contras</p>
                  <ul className="m-0 pl-0">{w.contras.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              </div>
              <p className="text-text-muted text-sm m-0"><strong>Ideal para:</strong> {w.ideal}</p>
            </div>
          ))}

          <h2>Cómo conseguirlas en LATAM</h2>
          <ul>
            <li><strong>Ledger:</strong> ledger.com (envío internacional, $25-40 USD shipping). Argentina: revendedores en MercadoLibre con markup 30-50%.</li>
            <li><strong>Trezor:</strong> trezor.io (similar). En LATAM hay menos revendedores oficiales — desconfiar de los muy baratos.</li>
            <li><strong>Tangem:</strong> tangem.com. Mejor opción para LATAM por shipping desde Suiza más rápido.</li>
          </ul>

          <h2>NUNCA comprar:</h2>
          <ul>
            <li>Hardware wallet usada (la seed puede estar comprometida)</li>
            <li>En Amazon/MercadoLibre de revendedor desconocido (devices intervenidos)</li>
            <li>Sin sello original anti-tamper intacto</li>
            <li>Si ya viene con seed phrase impresa (es scam: ya conocen tu seed)</li>
          </ul>

          <h2>Mi recomendación honesta</h2>
          <p>
            Si nunca tuviste hardware wallet: <strong>Tangem</strong>. El setup más simple y barato.
            Si valorás 10 años de trayectoria: <strong>Ledger</strong>. Si querés open source: <strong>Trezor</strong>.
          </p>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/que-pasa-si-perdi-mi-seed-phrase">¿Qué pasa si perdí mi seed phrase?</Link></li>
            <li><Link href="/blog/mejores-wallets-crypto-2026">Mejores wallets crypto 2026</Link></li>
            <li><Link href="/blog/comparativas/ledger-vs-trezor">Comparativa Ledger vs Trezor (más larga)</Link></li>
          </ul>
        </div>

        <ArticleCTA source="blog_ledger_trezor_tangem" hook="¿Más comparativas hardware wallets?" />

        <div className="mt-24"><Newsletter /></div>
      </div>
    </div>
  );
}
