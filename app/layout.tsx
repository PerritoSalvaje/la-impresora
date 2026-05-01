import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";

const BASE_URL = "https://laimpresora.io";

export const viewport: Viewport = {
  themeColor: "#00FF85",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "La Impresora — Aprendé a imprimir tu propia plata",
    template: "%s | La Impresora",
  },
  description:
    "Crypto, AI, tokenización y libertad financiera. Sin bullshit. El newsletter semanal que te enseña cómo funciona el dinero digital en LATAM.",
  keywords: [
    "crypto argentina",
    "bitcoin latam",
    "inteligencia artificial ganar dinero",
    "tokenizacion activos",
    "libertad financiera",
    "newsletter crypto",
    "defi latam",
    "blockchain argentina",
  ],
  authors: [{ name: "La Impresora", url: BASE_URL }],
  creator: "La Impresora",
  publisher: "La Impresora",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "es-AR": BASE_URL,
    },
  },
  openGraph: {
    title: "La Impresora — Aprendé a imprimir tu propia plata",
    description: "Aprendé a imprimir tu propia plata. Crypto · AI · Tokenización.",
    siteName: "La Impresora",
    locale: "es_AR",
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "La Impresora — Aprendé a imprimir tu propia plata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Impresora — Aprendé a imprimir tu propia plata",
    description: "Aprendé a imprimir tu propia plata. Crypto · AI · Tokenización.",
    images: ["/og-image.png"],
    creator: "@laimpresora_io",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "REEMPLAZAR_CON_TOKEN_GOOGLE_SEARCH_CONSOLE",
  },
  category: "finance",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "La Impresora",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
  },
  description:
    "Newsletter semanal sobre crypto, AI, tokenización y libertad financiera para LATAM. Sin bullshit.",
  sameAs: [
    "https://twitter.com/laimpresora_io",
    "https://instagram.com/laimpresora.io",
  ],
  areaServed: ["AR", "MX", "CO", "CL", "UY", "PY"],
  knowsAbout: [
    "Criptomonedas",
    "Bitcoin",
    "Inteligencia Artificial",
    "Tokenización de activos",
    "DeFi",
    "Libertad financiera",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "La Impresora",
  url: BASE_URL,
  description:
    "Newsletter semanal sobre crypto, AI y tokenización para LATAM.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-oscuro text-white antialiased">
        <NewsTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
