"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

// Retornos históricos aproximados (% de ganancia total sobre el capital invertido)
const RETORNOS: Record<string, Record<string, number>> = {
  bitcoin: { "1": 85, "2": 180, "3": 320, "5": 1200, "10": 8000 },
  ethereum: { "1": 70, "2": 150, "3": 280, "5": 900, "10": 5000 },
  sp500: { "1": 22, "2": 45, "3": 70, "5": 120, "10": 280 },
};

const ACTIVOS = [
  { id: "bitcoin", label: "Bitcoin", simbolo: "BTC", color: "#f5c842" },
  { id: "ethereum", label: "Ethereum", simbolo: "ETH", color: "#7b8cde" },
  { id: "sp500", label: "S&P 500", simbolo: "SPX", color: "#00e676" },
];

const MONTOS = [10, 25, 50, 100, 250, 500];
const PERIODOS = [
  { value: "1", label: "1 año" },
  { value: "2", label: "2 años" },
  { value: "3", label: "3 años" },
  { value: "5", label: "5 años" },
  { value: "10", label: "10 años" },
];

function fmt(n: number) {
  return n.toLocaleString("es-AR", { maximumFractionDigits: 0 });
}

function fmtUSD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`;
  return `$${fmt(n)}`;
}

export default function CalculadoraDCA() {
  const [monto, setMonto] = useState(100);
  const [montoCustom, setMontoCustom] = useState("");
  const [periodo, setPeriodo] = useState("3");
  const [activo, setActivo] = useState("bitcoin");

  const montoFinal = montoCustom ? parseFloat(montoCustom) || 0 : monto;

  const resultado = useMemo(() => {
    const meses = parseInt(periodo) * 12;
    const totalInvertido = montoFinal * meses;
    const retorno = RETORNOS[activo][periodo] / 100;
    const valorActual = totalInvertido * (1 + retorno);
    const ganancia = valorActual - totalInvertido;
    const pct = retorno * 100;
    return { totalInvertido, valorActual, ganancia, pct };
  }, [montoFinal, periodo, activo]);

  const activoInfo = ACTIVOS.find((a) => a.id === activo)!;

  return (
    <main className="min-h-screen" style={{ paddingTop: "104px" }}>
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs" style={{ color: "rgba(240,240,239,0.3)" }}>
          <Link href="/calculadoras" style={{ color: "rgba(240,240,239,0.3)", textDecoration: "none" }}>
            Calculadoras
          </Link>
          <span>/</span>
          <span>Simulador DCA</span>
        </div>

        {/* Header */}
        <span className="section-label">Simulador DCA</span>
        <h1
          className="font-display font-bold mt-3 mb-3"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", color: "#f0f0ef" }}
        >
          ¿Cuánto tendrías hoy si hubieras hecho DCA?
        </h1>
        <p className="mb-10 text-sm" style={{ color: "rgba(240,240,239,0.5)", lineHeight: "1.7" }}>
          DCA (Dollar Cost Averaging) es invertir un monto fijo cada mes sin importar el precio.
          Usamos rendimientos históricos reales para mostrarte el poder de la constancia.
        </p>

        {/* Controles */}
        <div className="card p-6 flex flex-col gap-6">
          {/* Activo */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(240,240,239,0.35)" }}>
              Activo
            </label>
            <div className="flex gap-3 flex-wrap">
              {ACTIVOS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setActivo(a.id)}
                  className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150"
                  style={{
                    border: activo === a.id ? `1.5px solid ${a.color}` : "1.5px solid rgba(255,255,255,0.08)",
                    background: activo === a.id ? `rgba(${hexToRgb(a.color)},0.1)` : "transparent",
                    color: activo === a.id ? a.color : "rgba(240,240,239,0.5)",
                    cursor: "pointer",
                  }}
                >
                  {a.label}
                  <span className="ml-1.5 text-xs opacity-60">{a.simbolo}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Monto mensual */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(240,240,239,0.35)" }}>
              Monto mensual (USD)
            </label>
            <div className="flex gap-2 flex-wrap mb-3">
              {MONTOS.map((m) => (
                <button
                  key={m}
                  onClick={() => { setMonto(m); setMontoCustom(""); }}
                  className="text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-150"
                  style={{
                    border: monto === m && !montoCustom ? "1.5px solid var(--verde)" : "1.5px solid rgba(255,255,255,0.08)",
                    background: monto === m && !montoCustom ? "rgba(0,230,118,0.08)" : "transparent",
                    color: monto === m && !montoCustom ? "var(--verde)" : "rgba(240,240,239,0.5)",
                    cursor: "pointer",
                  }}
                >
                  ${m}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="O ingresá un monto personalizado..."
              value={montoCustom}
              onChange={(e) => setMontoCustom(e.target.value)}
              className="w-full text-sm px-3 py-2 rounded-lg focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: montoCustom ? "1.5px solid var(--verde)" : "1.5px solid rgba(255,255,255,0.08)",
                color: "#f0f0ef",
              }}
            />
          </div>

          {/* Período */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(240,240,239,0.35)" }}>
              Período de inversión
            </label>
            <div className="flex gap-2 flex-wrap">
              {PERIODOS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPeriodo(p.value)}
                  className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150"
                  style={{
                    border: periodo === p.value ? "1.5px solid var(--dorado)" : "1.5px solid rgba(255,255,255,0.08)",
                    background: periodo === p.value ? "rgba(245,200,66,0.08)" : "transparent",
                    color: periodo === p.value ? "var(--dorado)" : "rgba(240,240,239,0.5)",
                    cursor: "pointer",
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resultado */}
        {montoFinal > 0 && (
          <div className="mt-6 card p-7" style={{ border: "1.5px solid rgba(0,230,118,0.2)" }}>
            {/* Headline */}
            <div className="text-center mb-8">
              <p className="text-sm mb-2" style={{ color: "rgba(240,240,239,0.4)" }}>
                Hubieras convertido
              </p>
              <p className="font-display font-bold" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#f0f0ef", letterSpacing: "-0.03em" }}>
                {fmtUSD(resultado.totalInvertido)}
                <span className="mx-3" style={{ color: "rgba(240,240,239,0.2)" }}>→</span>
                <span style={{ color: "var(--verde)" }}>{fmtUSD(resultado.valorActual)}</span>
              </p>
              <p className="text-xs mt-2" style={{ color: "rgba(240,240,239,0.3)" }}>
                Invirtiendo ${fmt(montoFinal)}/mes en {activoInfo.label} durante {PERIODOS.find(p => p.value === periodo)?.label}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <StatBox label="Total invertido" value={fmtUSD(resultado.totalInvertido)} color="rgba(240,240,239,0.6)" />
              <StatBox label="Valor estimado" value={fmtUSD(resultado.valorActual)} color="var(--verde)" />
              <StatBox label="Retorno total" value={`+${fmt(resultado.pct)}%`} color="var(--dorado)" />
            </div>

            {/* Ganancia */}
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.12)" }}
            >
              <p className="text-xs mb-1" style={{ color: "rgba(240,240,239,0.35)" }}>Ganancia estimada</p>
              <p className="font-display font-bold text-2xl" style={{ color: "var(--verde)", letterSpacing: "-0.02em" }}>
                {fmtUSD(resultado.ganancia)}
              </p>
            </div>

            {/* Disclaimer */}
            <p className="text-xs mt-5 text-center" style={{ color: "rgba(240,240,239,0.22)" }}>
              Rendimientos históricos no garantizan resultados futuros. Calculadora con fines educativos.
            </p>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-6 card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ border: "1px solid rgba(245,200,66,0.15)" }}
        >
          <div>
            <p className="font-semibold text-sm mb-1" style={{ color: "#f0f0ef" }}>
              ¿Listo para empezar tu DCA?
            </p>
            <p className="text-xs" style={{ color: "rgba(240,240,239,0.4)" }}>
              Mirá los exchanges que recomendamos para LATAM, con y sin KYC.
            </p>
          </div>
          <Link href="/recursos" className="btn-primary whitespace-nowrap" style={{ fontSize: "13px", padding: "10px 20px" }}>
            Ver exchanges recomendados
          </Link>
        </div>
      </div>
    </main>
  );
}

function StatBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      className="rounded-xl p-4 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <p className="text-xs mb-1.5" style={{ color: "rgba(240,240,239,0.35)" }}>{label}</p>
      <p className="font-display font-bold text-lg" style={{ color, letterSpacing: "-0.02em" }}>{value}</p>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
