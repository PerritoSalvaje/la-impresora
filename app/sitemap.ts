import { MetadataRoute } from "next";
import { readdirSync, existsSync } from "fs";
import { join } from "path";

const BASE_URL = "https://laimpresora.io";

// Rutas estáticas del sitio con sus prioridades y frecuencias
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/empeza`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/nosotros`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/recursos`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/recursos/dolarizar`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/recursos/prompts`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/gracias`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.1,
  },
  {
    url: `${BASE_URL}/guia`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/canal`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/libros`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/premium`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/precios`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/referidos`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/academy`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/agency`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/glosario`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/faq`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/radar`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/roadmap`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/crypto`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/ia`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/tokenizacion`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/libertad-financiera`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/privacidad-defi`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  // Comparativas hub + páginas individuales (prioridad 0.85)
  {
    url: `${BASE_URL}/comparativas`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/comparativas/binance-vs-bybit`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/comparativas/bitcoin-vs-ethereum`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/comparativas/bitcoin-vs-oro`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/comparativas/defi-vs-banco`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/comparativas/ledger-vs-trezor`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/comparativas/solana-vs-ethereum`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/comparativas/usdc-vs-usdt`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  // Calculadoras hub + páginas individuales (prioridad 0.80)
  {
    url: `${BASE_URL}/calculadoras`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/calculadoras/dca`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/calculadoras/inflacion`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/calculadoras/portafolio`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/calculadoras/yield-defi`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  // Hubs de verticales (prioridad 0.75)
  {
    url: `${BASE_URL}/fraudes`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/nomadas`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/geopolitica`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/psicologia-dinero`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  },
  // RSS feed
  {
    url: `${BASE_URL}/feed.xml`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/afiliados`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/sponsors`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    url: `${BASE_URL}/tienda`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/privacidad`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    url: `${BASE_URL}/terminos`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

function getBlogSlugs(): string[] {
  const blogDir = join(process.cwd(), "app", "blog");
  try {
    return readdirSync(blogDir, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          existsSync(join(blogDir, entry.name, "page.tsx"))
      )
      .map((entry) => entry.name);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
