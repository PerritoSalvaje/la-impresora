// JSON-LD Schema.org helpers — generan structured data para SEO/Rich Results.

const BASE_URL = "https://laimpresora.io";

type BreadcrumbItem = { name: string; url: string };

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url.startsWith("http") ? it.url : `${BASE_URL}${it.url}`,
  })),
});

type ArticleArgs = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  author?: string;
};

export const articleSchema = (a: ArticleArgs) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  image: a.image ? `${BASE_URL}${a.image}` : `${BASE_URL}/og-image.png`,
  datePublished: a.publishedAt,
  dateModified: a.updatedAt || a.publishedAt,
  author: {
    "@type": "Organization",
    name: a.author || "La Impresora",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "La Impresora",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/blog/${a.slug}`,
  },
  inLanguage: "es",
});

type FAQItem = { question: string; answer: string };

export const faqSchema = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: it.answer,
    },
  })),
});

type HowToStep = { name: string; text: string; image?: string };

export const howToSchema = (
  name: string,
  description: string,
  steps: HowToStep[]
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    ...(s.image && { image: `${BASE_URL}${s.image}` }),
  })),
});

export const productSchema = (p: {
  name: string;
  description: string;
  price: number;
  currency?: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: p.name,
  description: p.description,
  image: p.image ? `${BASE_URL}${p.image}` : `${BASE_URL}/og-image.png`,
  brand: { "@type": "Brand", name: "La Impresora" },
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}${p.url}`,
    priceCurrency: p.currency || "USD",
    price: p.price.toFixed(2),
    availability: "https://schema.org/InStock",
  },
});

type JsonLd = Record<string, unknown>;

export const renderJsonLd = (schema: JsonLd | JsonLd[]) => ({
  __html: JSON.stringify(Array.isArray(schema) ? schema : [schema]),
});
