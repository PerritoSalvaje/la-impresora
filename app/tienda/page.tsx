"use client";
import { useState } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Filtro = "todos" | "gratis" | "micro" | "libros" | "membresias" | "cursos";

// ─── Datos ────────────────────────────────────────────────────────────────────

const FILTROS: { key: Filtro; label: string }[] = [
  { key: "todos",      label: "Todos" },
  { key: "gratis",     label: "Gratis" },
  { key: "micro",      label: "Micro ($0–5)" },
  { key: "libros",     label: "Libros ($10)" },
  { key: "membresias", label: "Membresías" },
  { key: "cursos",     label: "Cursos" },
];

// ─── Sección Gratis ───────────────────────────────────────────────────────────

const NEWSLETTER = {
  nombre:       "Newsletter La Impresora",
  precio:       0,
  precioDisplay:"Gratuito",
  desc:         "El newsletter semanal de crypto, AI y libertad financiera. Más de 12,000 lectores en LATAM. Sin spam, cancelás cuando querés.",
  link:         "/#newsletter",
  badge:        "Gratuito siempre",
  categoria:    "gratis" as Filtro,
};

// ─── Micro-productos ──────────────────────────────────────────────────────────

const MICRO = [
  {
    nombre:       "Checklist Inversor Cripto",
    precio:       0.99,
    precioDisplay:"$0.99",
    desc:         "27 puntos clave para no caer en scams ni proyectos vacíos.",
    tag:          "Checklist",
    link:         "#",
    categoria:    "micro" as Filtro,
  },
  {
    nombre:       "Mini-guía Dolarización",
    precio:       1.99,
    precioDisplay:"$1.99",
    desc:         "Stablecoins, exchanges y billeteras para Argentina, México y Colombia.",
    tag:          "Guía",
    link:         "#",
    categoria:    "micro" as Filtro,
  },
  {
    nombre:       "Pack 30 Prompts AI",
    precio:       2.99,
    precioDisplay:"$2.99",
    desc:         "Los prompts que usamos para automatizar contenido e investigar mercados.",
    tag:          "Prompts",
    link:         "#",
    categoria:    "micro" as Filtro,
  },
];

// ─── Libros ───────────────────────────────────────────────────────────────────

const LIBROS = [
  {
    nombre:       "La Impresora",
    precio:       9.99,
    precioDisplay:"$9.99",
    desc:         "Crypto, AI y tokenización desde cero. Sin jerga, con ejemplos reales de LATAM. 74 páginas accionables.",
    tag:          "Libro",
    link:         "/libros",
    categoria:    "libros" as Filtro,
  },
  {
    nombre:       "AI para Ganar Plata",
    precio:       9.99,
    precioDisplay:"$9.99",
    desc:         "Flujos de trabajo y casos reales de cómo usar IA para automatizar ingresos. 68 páginas sin relleno.",
    tag:          "Libro",
    link:         "/libros",
    categoria:    "libros" as Filtro,
  },
  {
    nombre:       "Tokenización",
    precio:       9.99,
    precioDisplay:"$9.99",
    desc:         "Inmuebles, arte, commodities. Activos reales convertidos en tokens. 61 páginas directas.",
    tag:          "Libro",
    link:         "/libros",
    categoria:    "libros" as Filtro,
  },
  {
    nombre:       "Pack 3 Libros",
    precio:       24.99,
    precioDisplay:"$24.99",
    desc:         "La biblioteca completa de una vez. Ahorrás $5 respecto a comprarlos por separado.",
    tag:          "Pack",
    badge:        "Ahorrás $5",
    link:         "/libros",
    categoria:    "libros" as Filtro,
  },
];

// ─── Membresías y Cursos ──────────────────────────────────────────────────────

const PREMIUM = {
  nombre:       "Membresía Premium",
  precio:       19,
  precioDisplay:"$19 / mes",
  desc:         "Newsletter exclusivo 2x por semana, análisis profundos de mercado, portafolio modelo, alertas y comunidad privada.",
  beneficios:   [
    "Newsletter exclusivo los viernes",
    "Análisis profundos de mercado (1,500+ palabras)",
    "Portafolio modelo actualizado mensual",
    "Comunidad privada de miembros",
    "Alertas de mercado en tiempo real",
    "30% de descuento en todos los productos",
  ],
  link:         "/premium",
  badge:        "Más popular",
  categoria:    "membresias" as Filtro,
};

const ACADEMY = {
  nombre:       "La Impresora Academy",
  precio:       197,
  precioDisplay:"$197",
  precioTachado:"$297",
  desc:         "6 módulos. Crypto, AI, tokenización y libertad financiera desde cero hasta avanzado. Acceso de por vida, pago único.",
  beneficios:   [
    "6 módulos completos (8+ horas de video)",
    "Recursos descargables para cada módulo",
    "Comunidad de alumnos incluida",
    "Actualizaciones gratuitas de por vida",
    "Garantía de 30 días sin preguntas",
  ],
  link:         "/academy",
  badge:        "Acceso de por vida",
  categoria:    "cursos" as Filtro,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function seccionVisible(filtro: Filtro, cat: Filtro) {
  return filtro === "todos" || filtro === cat;
}

// ─── Componentes locales ──────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="section-label">{label}</span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}

function MicroCard({ p }: { p: typeof MICRO[number] }) {
  return (
    <div className="card p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="badge badge-neutral">{p.tag}</span>
        <span className="font-display font-bold text-xl text-text-primary">{p.precioDisplay}</span>
      </div>
      <div>
        <h3 className="font-display font-semibold text-base text-text-primary mb-1 leading-snug">
          {p.nombre}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
      </div>
      <a href={p.link} className="btn-primary w-full justify-center mt-auto">
        Comprar — {p.precioDisplay}
      </a>
    </div>
  );
}

function LibroCard({ p }: { p: typeof LIBROS[number] }) {
  return (
    <div className="card p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="badge badge-dorado mb-3 inline-flex">{p.tag}</span>
          <h3 className="font-display font-semibold text-base text-text-primary leading-snug">
            {p.nombre}
          </h3>
        </div>
        {"badge" in p && p.badge && (
          <span className="badge badge-verde shrink-0">{p.badge}</span>
        )}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed flex-1">{p.desc}</p>
      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <span className="font-display font-bold text-lg text-text-primary">{p.precioDisplay}</span>
        <a
          href={p.link}
          className="btn-secondary py-2 px-4 text-sm"
        >
          Comprar en Amazon →
        </a>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TiendaPage() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-14 max-w-2xl">
          <span className="section-label block mb-4">Tienda</span>
          <h1 className="font-display text-display-xl font-bold text-text-primary mb-4 leading-tight">
            Todos los productos
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Desde lo gratuito hasta lo avanzado. Cada producto está hecho para que lo uses
            desde el primer día, sin curva de aprendizaje ni relleno.
          </p>
        </div>

        {/* ── Filtros ── */}
        <div className="flex flex-wrap gap-2 mb-14">
          {FILTROS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltro(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
                filtro === f.key
                  ? "bg-verde text-oscuro border-verde shadow-verde"
                  : "bg-surface-2 border-white/8 text-text-secondary hover:text-text-primary hover:border-white/15"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ════════ SECCIÓN GRATIS ════════ */}
        {seccionVisible(filtro, "gratis") && (
          <section className="mb-16">
            <SectionHeader label="Gratis" title="Newsletter" />
            <div className="card p-8 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge badge-verde">Gratuito siempre</span>
                  <span className="badge badge-neutral">Newsletter</span>
                </div>
                <h2 className="font-display font-bold text-display-sm text-text-primary mb-3 leading-tight">
                  {NEWSLETTER.nombre}
                </h2>
                <p className="text-text-secondary leading-relaxed max-w-xl">
                  {NEWSLETTER.desc}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
                <span className="font-display font-bold text-3xl text-verde">Gratis</span>
                <a href={NEWSLETTER.link} className="btn-primary">
                  Suscribirte gratis →
                </a>
                <span className="text-text-muted text-xs">Sin spam · Cancelás cuando querés</span>
              </div>
            </div>
          </section>
        )}

        {/* ════════ SECCIÓN MICRO-PRODUCTOS ════════ */}
        {seccionVisible(filtro, "micro") && (
          <section className="mb-16">
            <SectionHeader label="$0.99 – $4.99" title="Micro-productos" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MICRO.map((p) => <MicroCard key={p.nombre} p={p} />)}
            </div>
          </section>
        )}

        {/* ════════ SECCIÓN LIBROS ════════ */}
        {seccionVisible(filtro, "libros") && (
          <section className="mb-16">
            <SectionHeader label="$9.99" title="Libros" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {LIBROS.map((p) => <LibroCard key={p.nombre} p={p} />)}
            </div>
          </section>
        )}

        {/* ════════ SECCIÓN MEMBRESÍAS + CURSOS ════════ */}
        {(seccionVisible(filtro, "membresias") || seccionVisible(filtro, "cursos")) && (
          <section className="mb-16">
            <SectionHeader label="Premium" title="Membresías y Cursos" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Premium */}
              {seccionVisible(filtro, "membresias") && (
                <div className="card p-8 flex flex-col gap-6 border-dorado/15">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="badge badge-dorado">Membresía</span>
                      <span className="badge badge-neutral">{PREMIUM.badge}</span>
                    </div>
                    <h2 className="font-display font-bold text-display-sm text-text-primary mb-2 leading-tight">
                      {PREMIUM.nombre}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">{PREMIUM.desc}</p>
                  </div>

                  <ul className="space-y-2.5">
                    {PREMIUM.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-verde shrink-0 mt-0.5">✦</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="font-display font-bold text-2xl text-dorado">{PREMIUM.precioDisplay}</span>
                      <p className="text-text-muted text-xs mt-0.5">Cancelá cuando querás</p>
                    </div>
                    <a href={PREMIUM.link} className="btn-primary">
                      Ver membresía →
                    </a>
                  </div>
                </div>
              )}

              {/* Academy */}
              {seccionVisible(filtro, "cursos") && (
                <div className="card p-8 flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="badge badge-verde">Curso</span>
                      <span className="badge badge-neutral">{ACADEMY.badge}</span>
                    </div>
                    <h2 className="font-display font-bold text-display-sm text-text-primary mb-2 leading-tight">
                      {ACADEMY.nombre}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">{ACADEMY.desc}</p>
                  </div>

                  <ul className="space-y-2.5">
                    {ACADEMY.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-verde shrink-0 mt-0.5">✦</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-text-muted text-sm line-through">{ACADEMY.precioTachado}</span>
                        <span className="font-display font-bold text-2xl text-text-primary">{ACADEMY.precioDisplay}</span>
                      </div>
                      <p className="text-text-muted text-xs mt-0.5">Pago único · acceso de por vida</p>
                    </div>
                    <a href={ACADEMY.link} className="btn-primary">
                      Ver curso →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── Disclaimer ── */}
        <div className="border-t border-white/5 py-8 mb-8">
          <p className="text-text-muted text-xs text-center">
            Precios en USD. Aceptamos tarjeta de débito, crédito y crypto.
            Los precios pueden cambiar sin previo aviso.
          </p>
        </div>

      </div>
    </div>
  );
}
