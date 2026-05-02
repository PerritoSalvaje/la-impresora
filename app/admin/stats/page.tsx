import StatsDashboard from "@/components/StatsDashboard";

export const metadata = {
  title: "Stats — Admin La Impresora",
  description: "Dashboard interno",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

// Página interna — no indexable. El gating real lo hace robots+noindex,
// y la URL no aparece en navbar/sitemap. Para auth real, usar middleware.

export default function AdminStatsPage() {
  return (
    <div className="pt-24 min-h-screen px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <span className="section-label block mb-3">Admin · interno</span>
        <h1 className="font-display text-display-xl font-bold text-text-primary mb-2">
          Stats
        </h1>
        <p className="text-text-secondary text-sm mb-10">
          Vista interna. No indexada. Refresca cada vez que entrás.
        </p>

        <StatsDashboard />
      </div>
    </div>
  );
}
