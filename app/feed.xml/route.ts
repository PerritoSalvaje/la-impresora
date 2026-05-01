import { NextResponse } from "next/server";

const BASE_URL = "https://laimpresora.io";

const articles = [
  {
    slug: "que-es-bitcoin-y-como-funciona",
    title: "Qué es Bitcoin y cómo funciona",
    description:
      "Guía definitiva de Bitcoin para principiantes: historia, cómo funciona la blockchain, cómo comprar Bitcoin en Argentina y LATAM, qué es una wallet y los riesgos reales.",
    pubDate: new Date("2026-04-30"),
  },
  {
    slug: "herramientas-ai-para-ganar-dinero",
    title: "Las mejores herramientas AI para ganar dinero",
    description:
      "Las herramientas de inteligencia artificial más efectivas para generar ingresos en 2026: automatización, creación de contenido y freelancing con AI.",
    pubDate: new Date("2026-04-23"),
  },
  {
    slug: "como-funciona-el-dinero-crypto",
    title: "Cómo funciona el dinero crypto",
    description:
      "Explicación clara de cómo funciona el dinero en el ecosistema cripto: transacciones, wallets, blockchains y por qué es diferente al sistema financiero tradicional.",
    pubDate: new Date("2026-04-16"),
  },
  {
    slug: "wallets-crypto-cuales-son-mejores",
    title: "Las mejores wallets de crypto",
    description:
      "Comparativa completa de wallets cripto en 2026: hardware wallets, software wallets y exchanges custodiales. Cuál elegir según tu perfil.",
    pubDate: new Date("2026-04-09"),
  },
  {
    slug: "stablecoins-latam",
    title: "Stablecoins en LATAM",
    description:
      "Todo sobre stablecoins en América Latina: USDT, USDC y DAI como herramientas de ahorro y protección contra la inflación y devaluación.",
    pubDate: new Date("2026-04-02"),
  },
  {
    slug: "portafolio-cripto-500",
    title: "Cómo armar un portafolio cripto con $500",
    description:
      "Guía práctica para construir un portafolio cripto desde cero con $500: diversificación, estrategia DCA y gestión de riesgo para principiantes en LATAM.",
    pubDate: new Date("2026-03-26"),
  },
  {
    slug: "que-es-defi-como-funciona",
    title: "Qué es DeFi y cómo funciona",
    description:
      "DeFi (finanzas descentralizadas) explicado sin tecnicismos: protocolos, liquidez, yield farming y cómo acceder desde Argentina y LATAM.",
    pubDate: new Date("2026-03-19"),
  },
  {
    slug: "bitcoin-halving-que-es",
    title: "Bitcoin Halving: qué es y por qué importa",
    description:
      "Qué es el halving de Bitcoin, cuándo ocurre, cómo impacta en el precio y qué debería hacer un inversor antes, durante y después del evento.",
    pubDate: new Date("2026-03-12"),
  },
  {
    slug: "como-declarar-crypto-argentina",
    title: "Cómo declarar crypto en Argentina",
    description:
      "Guía actualizada 2026 sobre cómo declarar criptomonedas en Argentina ante ARCA (ex-AFIP): bienes personales, ganancias y obligaciones fiscales.",
    pubDate: new Date("2026-03-05"),
  },
  {
    slug: "gap-ai-oportunidad",
    title: "El gap de AI que nadie ve",
    description:
      "Por qué la mayor oportunidad de la inteligencia artificial no está en las grandes empresas sino en quienes aprenden a usarla en LATAM antes que todos.",
    pubDate: new Date("2026-02-26"),
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = articles
    .slice(0, 20)
    .map((article) => {
      const link = `${BASE_URL}/blog/${article.slug}`;
      const pubDate = article.pubDate.toUTCString();
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>La Impresora — Aprendé a imprimir tu propia plata</title>
    <link>${BASE_URL}</link>
    <description>Crypto, AI, tokenización y libertad financiera. Sin bullshit. El newsletter semanal que te enseña cómo funciona el dinero digital en LATAM.</description>
    <language>es-ar</language>
    <managingEditor>hola@laimpresora.io (La Impresora)</managingEditor>
    <webMaster>hola@laimpresora.io (La Impresora)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>10080</ttl>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/og-image.png</url>
      <title>La Impresora</title>
      <link>${BASE_URL}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
