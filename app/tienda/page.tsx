"use client";
import { useState } from "react";

type Producto = {
  nombre: string;
  precio: number;
  precioDisplay: string;
  desc: string;
  categoria: string;
  tag: string;
  tagColor: string;
  emoji: string;
  badge?: string;
  badgeColor?: string;
  link: string;
};

const productos: Producto[] = [
  {
    nombre: "Newsletter La Impresora",
    precio: 0,
    precioDisplay: "Gratis",
    desc: "El newsletter semanal de crypto, AI y libertad financiera. Más de 12,000 lectores en LATAM. Sin spam, cancelás cuando querés.",
    categoria: "newsletter",
    tag: "Newsletter",
    tagColor: "bg-verde/10 text-verde border-verde/20",
    emoji: "📩",
    badge: "Gratis",
    badgeColor: "bg-verde/10 text-verde border-verde/20",
    link: "/#newsletter",
  },
  {
    nombre: "Checklist Inversor Cripto",
    precio: 0.99,
    precioDisplay: "$0.99",
    desc: "La checklist que revisamos antes de entrar a cualquier proyecto crypto. 27 puntos clave para no caer en scams ni proyectos vacíos.",
    categoria: "digital",
    tag: "Checklist",
    tagColor: "bg-white/10 text-white/50 border-white/10",
    emoji: "✅",
    link: "#",
  },
  {
    nombre: "Mini-guía Dolarización",
    precio: 1.99,
    precioDisplay: "$1.99",
    desc: "Cómo proteger tus ahorros de la inflación usando stablecoins, exchanges y billeteras digitales. Casos específicos para Argentina, México y Colombia.",
    categoria: "digital",
    tag: "Guía",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    emoji: "💵",
    link: "#",
  },
  {
    nombre: "Pack 30 Prompts AI para ganar plata",
    precio: 2.99,
    precioDisplay: "$2.99",
    desc: "Los 30 prompts que usamos para automatizar contenido, investigar mercados y armar propuestas de negocio con IA. Copiás, pegás y funcionan.",
    categoria: "digital",
    tag: "Prompts",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    emoji: "🤖",
    link: "#",
  },
  {
    nombre: "Membresía Premium",
    precio: 19,
    precioDisplay: "$19/mes",
    desc: "Newsletter exclusivo 2x por semana, análisis profundos, portafolio modelo, comunidad privada y 30% de descuento en todos los productos.",
    categoria: "membresia",
    tag: "Membresía",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    emoji: "⭐",
    badge: "Más popular",
    badgeColor: "bg-dorado/10 text-dorado border-dorado/20",
    link: "/premium",
  },
  {
    nombre: "Libro La Impresora",
    precio: 9.99,
    precioDisplay: "$9.99",
    desc: "La guía completa para entender crypto, AI y tokenización desde cero. Sin jerga, con ejemplos reales de LATAM. 74 páginas accionables.",
    categoria: "libro",
    tag: "Libro",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    emoji: "💰",
    link: "/libros",
  },
  {
    nombre: "Libro AI para Ganar Plata",
    precio: 9.99,
    precioDisplay: "$9.99",
    desc: "Herramientas concretas, flujos de trabajo y casos reales de cómo usar IA para automatizar ingresos. 68 páginas sin relleno.",
    categoria: "libro",
    tag: "Libro",
    tagColor: "bg-verde/10 text-verde border-verde/20",
    emoji: "🤖",
    link: "/libros",
  },
  {
    nombre: "Libro Tokenización",
    precio: 9.99,
    precioDisplay: "$9.99",
    desc: "Inmuebles, arte, commodities. Cómo los activos reales se convierten en tokens y cómo invertir en ellos. 61 páginas directas.",
    categoria: "libro",
    tag: "Libro",
    tagColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    emoji: "🏠",
    link: "/libros",
  },
  {
    nombre: "Pack 3 Libros",
    precio: 24.99,
    precioDisplay: "$24.99",
    desc: "Los tres libros de La Impresora en un solo pack. Ahorrás $5 respecto a comprarlos por separado. La biblioteca completa de una vez.",
    categoria: "libro",
    tag: "Pack",
    tagColor: "bg-dorado/10 text-dorado border-dorado/20",
    emoji: "📚",
    badge: "Ahorrás $5",
    badgeColor: "bg-verde/10 text-verde border-verde/20",
    link: "/libros",
  },
  {
    nombre: "La Impresora Academy",
    precio: 197,
    precioDisplay: "$197",
    desc: "El curso completo de La Impresora. Crypto, AI, tokenización y libertad financiera desde cero hasta avanzado. Con soporte y comunidad incluida.",
    categoria: "curso",
    tag: "Curso",
    tagColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    emoji: "🎓",
    badge: "Acceso de por vida",
    badgeColor: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    link: "#",
  },
];

type Filtro = "todos" | "gratis" | "bajo" | "medio" | "alto";

const filtros: { key: Filtro; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "gratis", label: "Gratis" },
  { key: "bajo", label: "$0 – $5" },
  { key: "medio", label: "$5 – $50" },
  { key: "alto", label: "$50+" },
];

function filtrarProductos(productos: Producto[], filtro: Filtro): Producto[] {
  switch (filtro) {
    case "gratis":
      return productos.filter((p) => p.precio === 0);
    case "bajo":
      return productos.filter((p) => p.precio > 0 && p.precio <= 5);
    case "medio":
      return productos.filter((p) => p.precio > 5 && p.precio <= 50);
    case "alto":
      return productos.filter((p) => p.precio > 50);
    default:
      return productos;
  }
}

export default function TiendaPage() {
  const [filtroActivo, setFiltroActivo] = useState<Filtro>("todos");

  const productosFiltrados = filtrarProductos(
    [...productos].sort((a, b) => a.precio - b.precio),
    filtroActivo
  );

  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-verde/10 border border-verde/20 text-verde text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Tienda
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Todo lo que<br />
            <span className="text-verde">publicamos</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Desde lo gratuito hasta lo avanzado. Cada producto está pensado para
            que lo uses desde el primer día.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filtros.map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltroActivo(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                filtroActivo === f.key
                  ? "bg-verde text-oscuro"
                  : "bg-gris-medio border border-white/10 text-white/50 hover:text-verde hover:border-verde/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        {productosFiltrados.length === 0 ? (
          <div className="text-center py-20 text-white/30">
            <p className="text-2xl mb-2">Sin productos en este rango</p>
            <button
              className="text-verde text-sm hover:underline"
              onClick={() => setFiltroActivo("todos")}
            >
              Ver todos →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((producto) => (
              <div
                key={producto.nombre}
                className={`gradient-border rounded-2xl flex flex-col hover:scale-[1.02] transition-transform ${
                  producto.badge && producto.badgeColor?.includes("dorado")
                    ? "ring-1 ring-dorado/20"
                    : ""
                }`}
              >
                {/* Card top */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 bg-gris-medio border border-white/10 rounded-xl flex items-center justify-center text-2xl">
                      {producto.emoji}
                    </div>
                    {producto.badge && (
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full border shrink-0 ${producto.badgeColor}`}
                      >
                        {producto.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full border ${producto.tagColor}`}
                    >
                      {producto.tag}
                    </span>
                  </div>
                  <h3 className="font-black text-lg leading-tight mb-2">{producto.nombre}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{producto.desc}</p>
                </div>
                {/* Card bottom */}
                <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span
                    className={`font-black text-xl ${
                      producto.precio === 0 ? "text-verde" : "text-white"
                    }`}
                  >
                    {producto.precioDisplay}
                  </span>
                  <a
                    href={producto.link}
                    className={`font-bold px-4 py-2 rounded-full text-sm transition-colors ${
                      producto.precio === 0
                        ? "bg-verde/10 text-verde border border-verde/20 hover:bg-verde/20"
                        : producto.tagColor.includes("dorado")
                        ? "bg-dorado text-oscuro hover:bg-dorado/90"
                        : "bg-verde text-oscuro hover:bg-verde/90"
                    }`}
                  >
                    {producto.precio === 0 ? "Suscribirte →" : "Comprar →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA newsletter */}
        <div className="mt-16 mb-8 text-center gradient-border rounded-2xl p-10">
          <p className="text-white/40 text-sm mb-2">¿No sabés por dónde empezar?</p>
          <p className="text-xl font-bold mb-4">
            El newsletter gratuito te da el 80% del valor. Empezá por ahí.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-verde text-oscuro font-black px-8 py-4 rounded-full hover:bg-verde/90 transition-colors verde-glow"
          >
            Suscribite gratis →
          </a>
        </div>
      </div>
    </div>
  );
}
