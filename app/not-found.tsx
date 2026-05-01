import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl font-black text-verde/20 mb-4">404</div>
      <h1 className="text-4xl font-black mb-4">
        Esta página no existe.<br />
        <span className="text-verde">Pero el newsletter sí.</span>
      </h1>
      <p className="text-white/40 text-lg mb-8 max-w-md">
        Puede que movimos algo o el link está roto.
        Mientras tanto, suscribite al newsletter y no te perdés nada.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-verde text-oscuro font-black px-8 py-4 rounded-full hover:bg-verde/90 transition-colors"
        >
          Ir al inicio →
        </Link>
        <Link
          href="/blog"
          className="border border-white/10 text-white/70 font-semibold px-8 py-4 rounded-full hover:border-verde/30 hover:text-verde transition-all"
        >
          Ver el blog
        </Link>
      </div>
    </div>
  );
}
