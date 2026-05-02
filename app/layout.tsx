import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";
import AmplitudeProvider from "@/components/AmplitudeProvider";
import ExitIntent from "@/components/ExitIntent";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Suspense } from "react";

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
      "es-MX": BASE_URL,
      "es-CO": BASE_URL,
      "es-CL": BASE_URL,
      "es-PE": BASE_URL,
      "es-UY": BASE_URL,
      "es-VE": BASE_URL,
      "es-ES": BASE_URL,
      "es": BASE_URL,
      "x-default": BASE_URL,
    },
    types: {
      "application/rss+xml": `${BASE_URL}/feed.xml`,
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
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
    : undefined,
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
    width: 512,
    height: 512,
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
  contactPoint: {
    "@type": "ContactPoint",
    email: "hola@laimpresora.io",
    contactType: "customer support",
    availableLanguage: "Spanish",
  },
  founder: {
    "@type": "Person",
    name: "La Impresora",
    url: BASE_URL,
  },
};

const newsMediaOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "La Impresora",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    "Medio de comunicación digital especializado en crypto, inteligencia artificial, tokenización y libertad financiera para América Latina.",
  sameAs: [
    "https://twitter.com/laimpresora_io",
    "https://instagram.com/laimpresora.io",
  ],
  publishingPrinciples: `${BASE_URL}/nosotros`,
  missionCoveragePrioritiesPolicy: `${BASE_URL}/nosotros`,
  masthead: `${BASE_URL}/nosotros`,
  diversityPolicy: `${BASE_URL}/nosotros`,
  ethicsPolicy: `${BASE_URL}/nosotros`,
  actionableFeedbackPolicy: `${BASE_URL}/nosotros`,
  correctionsPolicy: `${BASE_URL}/nosotros`,
  noBylinesPolicy: `${BASE_URL}/nosotros`,
  verificationFactCheckingPolicy: `${BASE_URL}/nosotros`,
  foundingDate: "2023",
  areaServed: ["AR", "MX", "CO", "CL", "UY", "PY"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(newsMediaOrganizationSchema) }}
        />
      </head>
      <body className="bg-oscuro text-white antialiased">
        <Suspense>
          <AmplitudeProvider>
            <NewsTicker />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ExitIntent />
            <StickyMobileCTA />
          </AmplitudeProvider>
        </Suspense>
      </body>
    </html>
  );
}
