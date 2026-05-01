import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "La Impresora — Aprendé a imprimir tu propia plata",
  description:
    "Crypto, AI, tokenización y libertad financiera. Sin bullshit. El newsletter semanal que te enseña cómo funciona el dinero digital en LATAM.",
  openGraph: {
    title: "La Impresora",
    description: "Aprendé a imprimir tu propia plata. Crypto · AI · Tokenización.",
    siteName: "La Impresora",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Impresora",
    description: "Aprendé a imprimir tu propia plata. Crypto · AI · Tokenización.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-oscuro text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
