import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "P2P Binance Argentina 2026: guía paso a paso sin que te estafen",
  description:
    "Cómo usar Binance P2P en Argentina sin caer en estafas: filtros para elegir contraparte, cómo verificar pagos, qué hacer si algo sale mal, y los errores que matan plata.",
  openGraph: { title: "P2P Binance Argentina sin estafas 2026", type: "article" },
};

const FILTROS = [
  "Completed orders mayor a 500 (no operes con cuentas nuevas)",
  "Completion rate mayor a 95% (los que cancelan son sospechosos)",
  "Avg release time menor a 15 min (los lentos son scam o automatizados)",
  "Verified merchant (badge azul) cuando sea posible",
  "Métodos de pago locales reales (Mercado Pago, transferencia CBU)",
];

const REGLAS = [
  "Confirmá QUE LA PLATA YA ESTÁ EN TU CUENTA antes de liberar el USDT",
  "NUNCA liberes basado en captura de pantalla del comprador",
  'NUNCA salgas del chat de Binance ("hablamos por WhatsApp" = scam)',
  'Si te llaman desde "Binance soporte" pidiendo claves, es scam (Binance NUNCA llama)',
  "Operá en horarios bancarios (9-18) — fuera de eso los DEBINs/transferencias se traban",
];

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="p2p-binance-ar-article"
        data={[
          articleSchema({
            title: "P2P Binance Argentina 2026: guía sin estafas",
            description: "Cómo usar P2P Binance en Argentina sin caer en estafas.",
            slug: "p2p-binance-argentina-guia-sin-estafas",
            publishedAt: "2026-05-03",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "P2P Binance Argentina sin estafas", url: "/blog/p2p-binance-argentina-guia-sin-estafas" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/40">
          <Link href="/blog" className="hover:text-verde">Blog</Link>
          <span className="mx-2">/</span>
          <span>Operativa AR</span>
        </div>

        <div className="mb-12">
          <span className="badge badge-verde mb-5 inline-flex">Operativa Argentina</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            P2P Binance Argentina: guía sin que te estafen
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Binance P2P es la forma más eficiente de comprar/vender USDT en Argentina (spread
            ~0.5-1.5% vs 2-4% en exchanges directos). Pero también la más usada por scammers.
            Esta guía te dice cómo no caer.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <h2>Cómo funciona el P2P</h2>
          <p>
            Binance no compra ni vende cripto directamente vos contra Binance. Pone en contacto a
            dos personas: vos y otro usuario. Mientras se procesa la operación, Binance retiene el
            USDT en escrow. Una vez que vos confirmás recibir la plata, Binance libera el USDT al
            comprador.
          </p>

          <h2>Filtros para elegir contraparte (NO te saltees ninguno)</h2>
          <ul>{FILTROS.map((f) => <li key={f}>{f}</li>)}</ul>

          <h2>Las 5 reglas de oro</h2>
          <ol>{REGLAS.map((r) => <li key={r}>{r}</li>)}</ol>

          <h2>Si algo sale mal</h2>
          <p>
            Botón &quot;Disputa&quot; arriba a la derecha del chat de la operación. Binance escala a un
            mediador en 24-48 horas. Tener:
          </p>
          <ul>
            <li>Captura de pantalla del chat completo</li>
            <li>Captura del estado de tu cuenta bancaria (que NO recibiste plata)</li>
            <li>Captura de la operación P2P en Binance</li>
          </ul>

          <h2>Estafas más comunes 2026</h2>
          <ul>
            <li><strong>Comprobante falso:</strong> te mandan &quot;captura&quot; del DEBIN, vos liberás, nunca llegó la plata</li>
            <li><strong>Triangulación:</strong> 3 personas, una paga con plata robada → te bloquean la cuenta</li>
            <li><strong>&quot;Soporte falso&quot;:</strong> alguien te escribe por WhatsApp diciendo ser Binance</li>
            <li><strong>Override de release:</strong> &quot;soy de soporte, libera ya el USDT que solucionamos después&quot;</li>
          </ul>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/como-pasar-pesos-a-usdt-sin-comisiones">Cómo pasar pesos a USDT sin comisiones</Link></li>
            <li><Link href="/blog/los-mayores-fraudes-crypto-historia">Los mayores fraudes crypto de la historia</Link></li>
            <li><Link href="/blog/mejores-exchanges-crypto-argentina-2026">Mejores exchanges Argentina 2026</Link></li>
          </ul>
        </div>

        <ArticleCTA source="blog_p2p_binance_ar" hook="¿Querés que te avise cuando hay scams nuevos?" />

        <div className="mt-24"><Newsletter /></div>
      </div>
    </div>
  );
}
