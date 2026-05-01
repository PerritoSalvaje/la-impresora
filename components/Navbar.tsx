"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/empeza", label: "Empezá" },
  { href: "/blog", label: "Blog" },
  { href: "/canal", label: "Canal" },
  { href: "/calculadoras", label: "Herramientas" },
  { href: "/comparativas", label: "Comparativas" },
  { href: "/tienda", label: "Tienda" },
  { href: "/radar", label: "Radar" },
  { href: "/agency", label: "Agency" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-7 left-0 right-0 z-50"
      style={{
        background: "rgba(8,9,10,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
          style={{ textDecoration: "none" }}
        >
          <span className="text-lg" aria-hidden="true">🖨️</span>
          <span
            className="font-display font-bold text-base tracking-tight"
            style={{ color: "#f0f0ef" }}
          >
            La Impresora
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors duration-200"
              style={{ color: "rgba(240,240,239,0.5)", textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#f0f0ef")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(240,240,239,0.5)")
              }
            >
              {label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="#newsletter"
            className="btn-primary"
            style={{ padding: "8px 16px", fontSize: "13px", borderRadius: "10px" }}
          >
            Suscribirse
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
          style={{ color: "rgba(240,240,239,0.5)", background: "transparent", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-200"
        style={{
          maxHeight: open ? "320px" : "0px",
          opacity: open ? 1 : 0,
          borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="px-6 py-5 flex flex-col gap-5" style={{ background: "#111213" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm"
              style={{ color: "rgba(240,240,239,0.55)", textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#newsletter"
            className="btn-primary text-center"
            style={{ padding: "10px 16px", fontSize: "13px", borderRadius: "10px", justifyContent: "center" }}
            onClick={() => setOpen(false)}
          >
            Suscribirse
          </Link>
        </div>
      </div>
    </nav>
  );
}
