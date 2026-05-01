"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-7 left-0 right-0 z-50 border-b border-white/5 bg-oscuro/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-verde text-xl font-black tracking-tight">
            🖨️ La Impresora
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <Link href="/canal" className="hover:text-verde transition-colors">Canal</Link>
          <Link href="/libros" className="hover:text-verde transition-colors">Libros</Link>
          <Link href="/tienda" className="hover:text-verde transition-colors">Tienda</Link>
          <Link href="/recursos" className="hover:text-verde transition-colors">Recursos</Link>
          <Link href="/sponsors" className="hover:text-dorado transition-colors text-dorado/60">Sponsors</Link>
          <Link
            href="#newsletter"
            className="bg-verde text-oscuro font-bold px-4 py-2 rounded-full hover:bg-verde/90 transition-colors text-sm"
          >
            Suscribite gratis →
          </Link>
        </div>

        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gris border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm">
          <Link href="/blog" className="text-white/60 hover:text-verde" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/canal" className="text-white/60 hover:text-verde" onClick={() => setOpen(false)}>Canal</Link>
          <Link href="/libros" className="text-white/60 hover:text-verde" onClick={() => setOpen(false)}>Libros</Link>
          <Link href="/tienda" className="text-white/60 hover:text-verde" onClick={() => setOpen(false)}>Tienda</Link>
          <Link href="/recursos" className="text-white/60 hover:text-verde" onClick={() => setOpen(false)}>Recursos</Link>
          <Link href="#newsletter" className="bg-verde text-oscuro font-bold px-4 py-2 rounded-full text-center" onClick={() => setOpen(false)}>
            Suscribite gratis →
          </Link>
        </div>
      )}
    </nav>
  );
}
