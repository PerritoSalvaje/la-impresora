import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-verde font-black text-lg">🖨️ La Impresora</span>
          <p className="text-white/30 text-sm mt-1">
            Crypto · AI · Tokenización · Libertad Financiera
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/40">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <Link href="/canal" className="hover:text-verde transition-colors">Canal</Link>
          <Link href="/libros" className="hover:text-verde transition-colors">Libros</Link>
          <Link href="/recursos" className="hover:text-verde transition-colors">Recursos</Link>
          <Link href="/sponsors" className="hover:text-verde transition-colors">Sponsors</Link>
          <Link href="/nosotros" className="hover:text-verde transition-colors">Nosotros</Link>
        </div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com/laimpresora"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-gris-medio border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-verde hover:border-verde/30 transition-all"
          >
            𝕏
          </a>
          <a
            href="https://youtube.com/@laimpresora"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-gris-medio border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-verde hover:border-verde/30 transition-all"
          >
            ▶
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
        © 2026 La Impresora. Operado por Wendy OS.
      </div>
    </footer>
  );
}
