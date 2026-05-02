import Script from "next/script";

// Wrapper para inyectar JSON-LD structured data via next/script.
// Usa Script con type="application/ld+json" y children string — patrón
// recomendado por Next.js para schema.org sin riesgo de XSS porque el
// contenido viene tipado de lib/schemas.ts (no de input externo).

type Props = {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ id, data }: Props) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data]);
  return (
    <Script
      id={`ld-${id}`}
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {json}
    </Script>
  );
}
