import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Residencia fiscal Paraguay 2026: cuánto cuesta y paso a paso",
  description:
    "Guía 2026 para sacar residencia fiscal en Paraguay: costos reales ($1,500-3,500 USD), tiempo (3-6 meses), requisitos, ventajas tributarias para nómadas digitales y traders cripto.",
  openGraph: {
    title: "Residencia fiscal Paraguay 2026: cuánto cuesta y paso a paso",
    description: "Costos reales, tiempos, paso a paso. Para nómadas y traders cripto.",
    type: "article",
  },
};

const COSTOS = [
  { item: "Antecedentes penales (apostillado)", precio: "$50-150 USD" },
  { item: "Visa de turismo (no es necesaria si ingresás)", precio: "$0-50" },
  { item: "Honorarios abogado paraguayo", precio: "$1,200-2,500 USD" },
  { item: "Tasas administrativas Migraciones", precio: "$200-400" },
  { item: "Cédula de identidad paraguaya", precio: "$30" },
  { item: "RUC (Registro Único de Contribuyente)", precio: "$0-100" },
  { item: "Vuelo + estadía 2 visitas", precio: "$800-1,500" },
];

export default function Page() {
  const total = "$2,300-4,700 USD";
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="paraguay-residencia-article"
        data={[
          articleSchema({
            title: "Residencia fiscal Paraguay 2026: cuánto cuesta y paso a paso",
            description: "Guía 2026 con costos reales, tiempos y paso a paso.",
            slug: "residencia-fiscal-paraguay-2026",
            publishedAt: "2026-05-02",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Residencia Paraguay 2026", url: "/blog/residencia-fiscal-paraguay-2026" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Nómadas</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-dorado mb-5 inline-flex">Para nómadas digitales</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Residencia fiscal Paraguay 2026: cuánto cuesta y paso a paso
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Paraguay es el destino más usado por argentinos, brasileños y europeos para obtener
            residencia fiscal con costos bajos, requisitos mínimos y impuestos favorables (10%
            IRP, 0% sobre ganancias offshore).
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <h2>Por qué Paraguay</h2>
          <ul>
            <li><strong>Impuesto a la renta personal: 10%</strong> (vs 35% Argentina, 32% México, 32% España)</li>
            <li><strong>Ganancias offshore: 0%</strong> — si tu plata se genera fuera de Paraguay, no tributa</li>
            <li><strong>Sin requisito de permanencia</strong> mínima anual (basta con 1 visita inicial)</li>
            <li><strong>Costo total: $2,300-4,700 USD</strong> (vs $20k-50k para Portugal NHR)</li>
            <li><strong>Sin idioma extranjero</strong> — castellano</li>
          </ul>

          <h2>Desglose de costos reales 2026</h2>
          <table className="w-full text-sm">
            <thead>
              <tr><th>Item</th><th>Costo</th></tr>
            </thead>
            <tbody>
              {COSTOS.map((c) => (
                <tr key={c.item}>
                  <td>{c.item}</td>
                  <td><strong>{c.precio}</strong></td>
                </tr>
              ))}
              <tr style={{ borderTop: "2px solid rgba(255,255,255,0.15)" }}>
                <td><strong>TOTAL</strong></td>
                <td><strong className="text-verde">{total}</strong></td>
              </tr>
            </tbody>
          </table>

          <h2>Pasos concretos (3-6 meses)</h2>
          <ol>
            <li><strong>Mes 1:</strong> Gestionás antecedentes penales en tu país + apostillado</li>
            <li><strong>Mes 2:</strong> Contratás abogado paraguayo (referencias importantes — hay scams). Mandás documentos digitalizados.</li>
            <li><strong>Mes 3:</strong> Primera visita a Paraguay (5-7 días). Trámites de Migraciones, banco, cédula.</li>
            <li><strong>Mes 4-5:</strong> Esperás resolución (2-4 meses). El abogado hace seguimiento.</li>
            <li><strong>Mes 6:</strong> Segunda visita (2-3 días). Retirás cédula. Hacés el RUC para que quede formalizada la residencia fiscal.</li>
          </ol>

          <h2>Ventajas para traders cripto</h2>
          <p>
            Si tradeás cripto y vivís en Argentina/España, podés estar pagando 35% sobre ganancias.
            Con residencia paraguaya y operando desde wallets propias, las ganancias cripto pueden
            considerarse offshore (0%). <strong>OJO:</strong> esto requiere asesoramiento legal de
            tu país de origen para no caer en residencia fiscal por sustancia.
          </p>

          <h2>Lo que NO te dicen</h2>
          <ul>
            <li>Tu país de origen puede SEGUIR considerándote residente fiscal si pasás &gt;183 días al año ahí (Argentina, España, México son estrictos)</li>
            <li>Romper residencia fiscal de origen es OTRO trámite separado (más caro y largo)</li>
            <li>Bancos paraguayos son lentos y conservadores — no esperés Wise-level</li>
            <li>Si solo querés \"un sello en el pasaporte\", no es la mejor opción — Uruguay ofrece similar con más infraestructura</li>
          </ul>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/como-vivir-nomada-digital-desde-latam">Cómo vivir como nómada digital desde LATAM</Link></li>
            <li><Link href="/blog/impuestos-crypto-por-pais">Impuestos crypto por país</Link></li>
            <li><Link href="/blog/como-declarar-crypto-argentina">Cómo declarar crypto en Argentina</Link></li>
          </ul>
        </div>

        <ArticleCTA
          source="blog_paraguay_residencia"
          hook="¿Querés más guías de residencia fiscal LATAM?"
        />

        <div className="mt-24">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
