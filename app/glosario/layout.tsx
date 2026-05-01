import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glosario de Crypto, AI y Finanzas Digitales — La Impresora",
  description:
    "40+ términos de crypto, AI y finanzas digitales explicados en lenguaje simple para LATAM. Sin jerga innecesaria, con ejemplos prácticos.",
};

export default function GlosarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
