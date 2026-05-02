"use client";
import { useEffect, useState } from "react";

type Stats = {
  loading: boolean;
  beehiiv?: { active: number; new7d: number; openRate: number } | null;
  ls?: { active: number; mrr: number; new7d: number } | null;
  hotmart?: { active: number; sales7d: number } | null;
  amplitude?: { sessions7d: number; users7d: number } | null;
  error?: string;
};

export default function StatsDashboard() {
  const [stats, setStats] = useState<Stats>({ loading: true });

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then((data) => setStats({ loading: false, ...data }))
      .catch(() => setStats({ loading: false, error: "fetch failed" }));
  }, []);

  if (stats.loading) {
    return (
      <div className="card p-8 text-center">
        <p className="text-text-secondary">Cargando datos...</p>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className="card p-6">
        <p className="text-red-400">Error: {stats.error}</p>
      </div>
    );
  }

  const blocks = [
    {
      titulo: "Newsletter (Beehiiv)",
      data: stats.beehiiv,
      campos: stats.beehiiv && [
        { label: "Suscriptores activos", valor: stats.beehiiv.active.toLocaleString() },
        { label: "Nuevos últimos 7d", valor: `+${stats.beehiiv.new7d}` },
        { label: "Open rate", valor: `${stats.beehiiv.openRate.toFixed(1)}%` },
      ],
    },
    {
      titulo: "Cobros (LemonSqueezy)",
      data: stats.ls,
      campos: stats.ls && [
        { label: "Suscriptores Premium", valor: stats.ls.active.toLocaleString() },
        { label: "MRR estimado", valor: `$${stats.ls.mrr.toLocaleString()}` },
        { label: "Nuevos 7d", valor: `+${stats.ls.new7d}` },
      ],
    },
    {
      titulo: "Cobros (Hotmart)",
      data: stats.hotmart,
      campos: stats.hotmart && [
        { label: "Activos", valor: stats.hotmart.active.toLocaleString() },
        { label: "Ventas 7d", valor: `+${stats.hotmart.sales7d}` },
      ],
    },
    {
      titulo: "Tráfico (Amplitude)",
      data: stats.amplitude,
      campos: stats.amplitude && [
        { label: "Sesiones 7d", valor: stats.amplitude.sessions7d.toLocaleString() },
        { label: "Users únicos 7d", valor: stats.amplitude.users7d.toLocaleString() },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {blocks.map((b) => (
        <div key={b.titulo} className="card p-6">
          <p className="text-text-muted text-xs uppercase tracking-wider mb-4">{b.titulo}</p>
          {b.data && b.campos ? (
            <div className="space-y-3">
              {b.campos.map((c) => (
                <div key={c.label} className="flex items-baseline justify-between">
                  <span className="text-text-secondary text-sm">{c.label}</span>
                  <span className="font-display font-bold text-text-primary text-xl">{c.valor}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-muted text-sm">
              Sin datos. Configurá las API keys en .env para ver métricas reales.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
