import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Cómo declarar criptomonedas en México (SAT 2026)",
  description:
    "Guía 2026 para declarar criptomonedas ante el SAT México: ISR, formato D-126, valuación de activos, qué exchanges informan, plazos y consecuencias de no declarar.",
  openGraph: { title: "Declarar crypto México SAT 2026", type: "article" },
};

const PASOS = [
  { n: "01", t: "Identificar qué eventos tributan", d: "Compra-venta con ganancia, intercambio entre criptos, recibir crypto por servicios (sí, también esto), staking rewards, airdrops valuados al recibir." },
  { n: "02", t: "Calcular la base", d: "Ganancia = precio de venta - precio de compra (FIFO o costo promedio, elegí uno y mantenelo). En MXN al tipo de cambio del día de cada operación." },
  { n: "03", t: "Aplicar ISR sobre ganancias", d: "Personas físicas: tasa marginal del 1.92% al 35% según ingresos totales del año. Si vendiste a pérdida, podés deducir contra ganancias futuras." },
  { n: "04", t: "Declaración anual (abril)", d: "Anexar las ganancias en el apartado de \"otros ingresos\" del formato anual. Conservá CSVs del exchange como respaldo (Bitso te los exporta)." },
  { n: "05", t: "Si tradeás profesionalmente", d: "Régimen de actividad empresarial. Necesitás factura electrónica + contador. SAT lo trata como actividad comercial habitual." },
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="sat-mx-crypto-article"
        data={[
          articleSchema({
            title: "Cómo declarar criptomonedas en México (SAT 2026)",
            description: "Guía 2026 para declarar crypto ante el SAT México.",
            slug: "como-declarar-crypto-en-mexico-sat-2026",
            publishedAt: "2026-05-03",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Declarar crypto México 2026", url: "/blog/como-declarar-crypto-en-mexico-sat-2026" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/40">
          <Link href="/blog" className="hover:text-verde">Blog</Link>
          <span className="mx-2">/</span>
          <span>Impuestos México</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-dorado mb-5 inline-flex">Impuestos México 2026</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Cómo declarar criptomonedas en México (SAT 2026)
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Si tradeaste, vendiste, recibiste crypto por servicios o stakeas — el SAT te quiere
            ver. Esta es la guía con los 5 pasos concretos para declarar bien y dormir tranquilo.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <p>
            <strong>Importante:</strong> esto es información orientativa, no asesoramiento legal.
            Para casos complejos consultá con un contador especialista en cripto.
          </p>

          <h2>Los 5 pasos</h2>
          {PASOS.map((p) => (
            <div key={p.n} className="card p-5 mb-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display font-bold text-dorado text-xl">{p.n}</span>
                <h3 className="font-display font-semibold text-text-primary text-base m-0">{p.t}</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed m-0">{p.d}</p>
            </div>
          ))}

          <h2>¿Qué pasa si NO declaro?</h2>
          <ul>
            <li>SAT cruza datos con Bitso, Volabit y exchanges regulados — informa automáticamente.</li>
            <li>Multa por omisión: 55-75% del impuesto omitido + recargos + actualización.</li>
            <li>En casos graves: defraudación fiscal (3 meses a 9 años de prisión según monto).</li>
            <li>El SAT tiene 5 años para auditar cada declaración. No "se les escapa".</li>
          </ul>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/como-comprar-usdt-en-mexico-sin-binance-2026">Cómo comprar USDT en México</Link></li>
            <li><Link href="/blog/impuestos-crypto-por-pais">Impuestos crypto por país</Link></li>
            <li><Link href="/blog/residencia-fiscal-paraguay-2026">Residencia fiscal Paraguay</Link></li>
          </ul>
        </div>

        <ArticleCTA source="blog_sat_mx" hook="¿Más sobre impuestos crypto LATAM?" />

        <div className="mt-24"><Newsletter /></div>
      </div>
    </div>
  );
}
