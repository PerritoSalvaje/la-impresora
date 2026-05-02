// Catálogo de productos — checkout URLs.
//
// LemonSqueezy hosted checkout: tras crear cada variant en LS dashboard,
// LS te da una URL tipo https://laimpresora.lemonsqueezy.com/checkout/buy/{UUID}.
// Pegá esas URLs en las env vars NEXT_PUBLIC_LS_* y los botones se activan.
//
// Mientras no estén configuradas, los CTAs caen a /precios (graceful).

const FALLBACK = "/precios";

const env = (k: string): string =>
  (typeof process !== "undefined" && process.env[k]) || FALLBACK;

export const CHECKOUT = {
  // Micro-productos
  checklist:        env("NEXT_PUBLIC_LS_CHECKLIST"),         // $0.99
  miniGuia:         env("NEXT_PUBLIC_LS_MINI_GUIA"),         // $1.99
  packPrompts:      env("NEXT_PUBLIC_LS_PACK_PROMPTS"),      // $4.99

  // Libros (PDF + EPUB) — LemonSqueezy
  libroImpresora:   env("NEXT_PUBLIC_LS_LIBRO_IMPRESORA"),   // $9.99
  libroAi:          env("NEXT_PUBLIC_LS_LIBRO_AI"),          // $9.99
  libroTokenizacion: env("NEXT_PUBLIC_LS_LIBRO_TOKEN"),      // $9.99
  pack3Libros:      env("NEXT_PUBLIC_LS_PACK_3_LIBROS"),     // $24.99

  // Bundle premium
  bundleCompleto:   env("NEXT_PUBLIC_LS_BUNDLE"),            // $29

  // Membresías / cursos
  premiumMensual:   env("NEXT_PUBLIC_LS_PREMIUM_MENSUAL") || "/premium",
  premiumAnual:     env("NEXT_PUBLIC_LS_PREMIUM_ANUAL")   || "/premium",
  academy:          env("NEXT_PUBLIC_HOTMART_ACADEMY")    || "/academy",

  // Donaciones
  cafecito:         "https://cafecito.app/laimpresora",
} as const;

export const isConfigured = (url: string): boolean =>
  url !== FALLBACK && url !== "/premium" && url !== "/academy";
