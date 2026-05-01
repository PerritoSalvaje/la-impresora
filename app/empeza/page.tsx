import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empezá por acá — La Impresora",
  description:
    "¿Nuevo en crypto y AI? Elegí tu nivel y te armamos el orden de lectura ideal. Sin jerga, sin relleno.",
};

/* ── Datos de los paths ──────────────────────────────────────────── */

type Articulo = {
  numero: number;
  titulo: string;
  minutos: number;
  slug: string;
};

type Path = {
  id: string;
  icono: string;
  titulo: string;
  descripcion: string;
  color: "verde" | "dorado" | "neutral";
  articulos: Articulo[];
};

const paths: Path[] = [
  {
    id: "A",
    icono: "01",
    titulo: "Soy nuevo en crypto y AI",
    descripcion:
      "Nunca compraste cripto ni usás AI para trabajar. Empezá desde el principio, sin saltear pasos.",
    color: "verde",
    articulos: [
      {
        numero: 1,
        titulo: "Qué es Bitcoin y cómo funciona",
        minutos: 8,
        slug: "que-es-bitcoin-y-como-funciona",
      },
      {
        numero: 2,
        titulo: "Cómo funciona el dinero crypto",
        minutos: 10,
        slug: "como-funciona-el-dinero-crypto",
      },
      {
        numero: 3,
        titulo: "Las mejores wallets de crypto",
        minutos: 9,
        slug: "wallets-crypto-cuales-son-mejores",
      },
      {
        numero: 4,
        titulo: "DeFi para principiantes",
        minutos: 11,
        slug: "que-es-defi-como-funciona",
      },
      {
        numero: 5,
        titulo: "Armar un portafolio cripto desde $500",
        minutos: 7,
        slug: "portafolio-cripto-500",
      },
    ],
  },
  {
    id: "B",
    icono: "02",
    titulo: "Ya entiendo lo básico, quiero profundizar",
    descripcion:
      "Ya sabés qué es una wallet y compraste algo de crypto. Ahora querés entender más a fondo.",
    color: "dorado",
    articulos: [
      {
        numero: 1,
        titulo: "Herramientas AI para ganar dinero",
        minutos: 9,
        slug: "herramientas-ai-para-ganar-dinero",
      },
      {
        numero: 2,
        titulo: "Stablecoins en LATAM",
        minutos: 8,
        slug: "stablecoins-latam",
      },
      {
        numero: 3,
        titulo: "Tokenización de activos: cómo invertir",
        minutos: 10,
        slug: "tokenizacion-activos-como-invertir",
      },
      {
        numero: 4,
        titulo: "Cómo declarar crypto en Argentina",
        minutos: 12,
        slug: "como-declarar-crypto-argentina",
      },
      {
        numero: 5,
        titulo: "Halving de Bitcoin: qué es y por qué importa",
        minutos: 8,
        slug: "bitcoin-halving-que-es",
      },
    ],
  },
  {
    id: "C",
    icono: "03",
    titulo: "Quiero monetizar o generar ingresos",
    descripcion:
      "Tu objetivo es generar plata real usando crypto o AI. Estos artículos son los más accionables.",
    color: "neutral",
    articulos: [
      {
        numero: 1,
        titulo: "Cómo ganar dinero con crypto sin invertir",
        minutos: 9,
        slug: "como-ganar-dinero-con-crypto-sin-invertir",
      },
      {
        numero: 2,
        titulo: "Herramientas AI para ganar dinero",
        minutos: 9,
        slug: "herramientas-ai-para-ganar-dinero",
      },
      {
        numero: 3,
        titulo: "DeFi yields: cómo funciona",
        minutos: 11,
        slug: "que-es-defi-como-funciona",
      },
      {
        numero: 4,
        titulo: "Portafolio cripto desde $500",
        minutos: 7,
        slug: "portafolio-cripto-500",
      },
      {
        numero: 5,
        titulo: "Las mejores wallets de crypto",
        minutos: 9,
        slug: "wallets-crypto-cuales-son-mejores",
      },
    ],
  },
];

/* ── Helpers de color ────────────────────────────────────────────── */

function accentClass(color: Path["color"]) {
  if (color === "verde") return "text-verde";
  if (color === "dorado") return "text-dorado";
  return "text-white/40";
}

function borderAccent(color: Path["color"]) {
  if (color === "verde") return "border-verde/30";
  if (color === "dorado") return "border-dorado/30";
  return "border-white/10";
}

function badgeClass(color: Path["color"]) {
  if (color === "verde") return "badge badge-verde";
  if (color === "dorado") return "badge badge-dorado";
  return "badge badge-neutral";
}

/* ── Componente de artículo ─────────────────────────────────────── */

function ArticuloRow({
  art,
  color,
}: {
  art: Articulo;
  color: Path["color"];
}) {
  return (
    <Link
      href={`/blog/${art.slug}`}
      className="group flex items-start gap-4 py-4 border-b border-white/5 last:border-0 hover:no-underline"
    >
      {/* Número */}
      <span
        className={`font-mono text-2xl font-bold leading-none shrink-0 w-8 pt-0.5 ${accentClass(color)} opacity-40 group-hover:opacity-80 transition-opacity duration-150`}
      >
        {art.numero}
      </span>

      {/* Contenido */}
      <div className="flex-1 min-w-0">
        <p className="text-white/80 font-semibold text-sm leading-snug group-hover:text-white transition-colors duration-150">
          {art.titulo}
        </p>
        <p className="font-mono text-white/25 text-xs mt-1">
          {art.minutos} min de lectura
        </p>
      </div>

      {/* Flecha */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        className={`shrink-0 mt-1 ${accentClass(color)} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150`}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

/* ── Newsletter inline (sin "use client" → link externo) ─────────── */

function NewsletterInline() {
  return (
    <section className="px-6 mb-24">
      <div className="max-w-6xl mx-auto">
        <div className="border border-verde/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Glow de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-verde/5 to-transparent pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="max-w-lg">
              <span className="section-label mb-3 block">Newsletter</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                Después de leer, suscribite.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed">
                Una vez por semana. Crypto, AI y libertad financiera para
                LATAM. Sin spam, sin paywall.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="badge badge-verde">Gratis</span>
                <span className="badge badge-neutral">Cada jueves</span>
                <span className="badge badge-neutral">2,412 lectores</span>
              </div>
            </div>

            <a href="/#newsletter" className="btn-primary shrink-0 whitespace-nowrap">
              Suscribirme gratis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Página principal ────────────────────────────────────────────── */

export default function EmpezaPage() {
  return (
    <div className="pt-24 min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <span className="section-label mb-4 block">Onboarding editorial</span>
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight leading-none text-white mb-6">
            Nuevo por acá.
            <br />
            <span className="text-verde">Por dónde empezar.</span>
          </h1>
          <p className="text-white/45 text-lg leading-relaxed max-w-xl">
            Elegí el nivel que mejor te describe y te armamos el orden de
            lectura ideal. Sin rodeos, sin contenido de relleno.
          </p>
        </div>
      </div>

      {/* ── Paths ────────────────────────────────────────────────── */}
      <div className="px-6 mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className={`card rounded-2xl p-7 flex flex-col border ${borderAccent(path.color)}`}
            >
              {/* Encabezado del path */}
              <div className="flex items-start gap-4 mb-6">
                <span
                  className={`font-mono text-4xl font-bold leading-none ${accentClass(path.color)} opacity-50 select-none`}
                >
                  {path.icono}
                </span>
                <div className="flex-1">
                  <span className={badgeClass(path.color)}>
                    Path {path.id}
                  </span>
                  <h2 className="font-display font-black text-base text-white mt-2 leading-snug">
                    {path.titulo}
                  </h2>
                  <p className="text-white/35 text-xs leading-relaxed mt-2">
                    {path.descripcion}
                  </p>
                </div>
              </div>

              {/* Divisor */}
              <hr className="divider mb-1" />

              {/* Lista de artículos */}
              <div className="flex-1">
                {path.articulos.map((art) => (
                  <ArticuloRow key={art.slug} art={art} color={path.color} />
                ))}
              </div>

              {/* CTA del path */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <Link
                  href={`/blog/${path.articulos[0].slug}`}
                  className={`btn-secondary text-sm w-full justify-center`}
                  style={{ padding: "10px 16px", fontSize: "13px" }}
                >
                  Empezar desde el #1 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Nota editorial ──────────────────────────────────────── */}
      <div className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="card rounded-2xl p-6 flex items-start gap-4">
            <span className="font-mono text-verde text-xl shrink-0">→</span>
            <div>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white/80 font-semibold">
                  ¿Querés ver todo el archivo?
                </strong>{" "}
                En el{" "}
                <Link href="/blog" className="text-verde hover:underline">
                  Blog
                </Link>{" "}
                están todas las ediciones publicadas. Sin paywall, sin
                registro. También podés explorar por categoría: Crypto, AI,
                Tokenización, Libertad Financiera.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Newsletter ──────────────────────────────────────────── */}
      <NewsletterInline />

    </div>
  );
}
