// Single source of truth para números públicos de La Impresora.
// Cambiar acá → propaga al sitio entero.
//
// Reglas:
// - Subscribers: número real de Beehiiv (actualizar manualmente o vía script semanal)
// - Mostrar el número honesto. Inflar erosiona trust si lo verifican.

export const STATS = {
  subscribers: 2412,
  newsletterEditions: 60,
  blogPosts: 28,
  youtubeScripts: 22,
  countries: 21,
  languages: ["es-AR", "es-MX", "es-CO", "es-CL", "es-UY", "es-PE", "es-ES"],
  foundingYear: 2024,
} as const;

export const formatSubscribers = (n: number = STATS.subscribers): string => {
  if (n >= 10000) return `${(n / 1000).toFixed(0)}k+`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k+`;
  return `${n.toLocaleString("es-AR")}+`;
};
