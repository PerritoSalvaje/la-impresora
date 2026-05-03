/** @type {import('next').NextConfig} */

const CSP = [
  "default-src 'self'",
  // 'unsafe-inline' en script-src es necesario por JSON-LD inline. TODO: migrar a nonce per-request.
  "script-src 'self' 'unsafe-inline' https://cdn.amplitude.com https://*.amplitude.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://api2.amplitude.com https://*.amplitude.com https://api.beehiiv.com https://api.lemonsqueezy.com https://api.telegram.org https://api-sec-vlc.hotmart.com https://developers.hotmart.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Restringido a hosts específicos para prevenir SSRF vía next/image.
    remotePatterns: [
      { protocol: "https", hostname: "laimpresora.io" },
      { protocol: "https", hostname: "la-impresora.vercel.app" },
      { protocol: "https", hostname: "**.beehiiv.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "Content-Security-Policy", value: CSP },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Slugs duplicados detectados por auditor SEO
      {
        source: "/blog/que-es-y-como-funciona-defi",
        destination: "/blog/que-es-defi-como-funciona",
        permanent: true,
      },
      {
        source: "/blog/como-declarar-crypto",
        destination: "/blog/como-declarar-crypto-argentina",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
