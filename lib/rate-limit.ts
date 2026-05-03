// Rate limiting in-memory (best-effort sin Vercel KV).
// Funciona bien en single-instance y en cold-warm dentro de la misma región.
// Para multi-region replication, migrar a Upstash (@upstash/ratelimit).

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const MAX_KEYS = 10_000; // memory cap

function gc() {
  if (buckets.size < MAX_KEYS) return;
  const now = Date.now();
  for (const [key, b] of buckets) {
    if (b.resetAt < now) buckets.delete(key);
  }
}

export function checkRate(
  key: string,
  limit: number,
  windowMs: number
): { ok: boolean; remaining: number; resetAt: number } {
  gc();
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt < now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { ok: true, remaining: limit - 1, resetAt };
  }

  existing.count += 1;
  if (existing.count > limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }
  return {
    ok: true,
    remaining: limit - existing.count,
    resetAt: existing.resetAt,
  };
}

export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

const ALLOWED_ORIGINS = [
  "https://laimpresora.io",
  "https://www.laimpresora.io",
  "https://la-impresora.vercel.app",
];

export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  // Same-origin requests no envían Origin → permitirlas (server-to-server o native form)
  if (!origin) return true;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Permitir vercel preview URLs
  if (/^https:\/\/la-impresora-[a-z0-9-]+\.vercel\.app$/.test(origin)) return true;
  return false;
}
