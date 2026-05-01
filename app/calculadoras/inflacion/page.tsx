"use client";

import { useState, useMemo } from "react";

type PaisKey = "argentina" | "mexico" | "colombia" | "espana" | "venezuela" | "global";
type PeriodoKey = "1" | "3" | "5" | "10";

const TASAS: Record<PaisKey, Record<PeriodoKey, number>> = {
  argentina: { "1": 211, "3": 450, "5": 900, "10": 3000 },
  mexico: { "1": 5, "3": 16, "5": 28, "10": 65 },
  colombia: { "1": 9, "3": 28, "5": 50, "10": 120 },
  espana: { "1": 3, "3": 10, "5": 18, "10": 40 },
  venezuela: { "1": 200, "3": 1000, "5": 5000, "10": 50000 },
  global: { "1": 4, "3": 13, "5": 22, "10": 50 },
};

// Retornos históricos aproximados de BTC y USDC para los períodos
const RETORNOS_BTC: Record<PeriodoKey, number> = {
  "1": 100,   // +100% promedio anual aprox en ciclo alcista
  "3": 400,   // aprox 2021-2024
  "5": 900,   // aprox 2019-2024
  "10": 5000, // aprox 2014-2024
};

const RETORNOS_USDC: Record<PeriodoKey, number> = {
  "1": 6,    // ~6% APY en DeFi
  "3": 19,   // compuesto 3 años
  "5": 34,   // compuesto 5 años
  "10": 79,  // compuesto 10 años
};

const PAISES: { key: PaisKey; label: string; emoji: string }[] = [
  { key: "argentina", label: "Argentina (ARS)", emoji: "🇦🇷" },
  { key: "mexico", label: "México (MXN)", emoji: "🇲🇽" },
  { key: "colombia", label: "Colombia (COP)", emoji: "🇨🇴" },
  { key: "espana", label: "España (EUR)", emoji: "🇪🇸" },
  { key: "venezuela", label: "Venezuela (VES)", emoji: "🇻🇪" },
  { key: "global", label: "Global (USD)", emoji: "🌐" },
];

const PERIODOS: { key: PeriodoKey; label: string }[] = [
  { key: "1", label: "1 año" },
  { key: "3", label: "3 años" },
  { key: "5", label: "5 años" },
  { key: "10", label: "10 años" },
];

function formatMoney(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${n.toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;
  return `$${n.toFixed(2)}`;
}

export default function CalculadoraInflacionPage() {
  const [pais, setPais] = useState<PaisKey>("argentina");
  const [monto, setMonto] = useState<string>("10000");
  const [periodo, setPeriodo] = useState<PeriodoKey>("5");

  const montoNum = useMemo(() => {
    const n = parseFloat(monto.replace(/[^0-9.]/g, ""));
    return isNaN(n) || n <= 0 ? 0 : n;
  }, [monto]);

  const resultado = useMemo(() => {
    if (montoNum <= 0) return null;

    const tasaInflacion = TASAS[pais][periodo];
    const tasaBtc = RETORNOS_BTC[periodo];
    const tasaUsdc = RETORNOS_USDC[periodo];

    // Poder adquisitivo restante: monto / (1 + inflacion/100)
    const poderRestante = montoNum / (1 + tasaInflacion / 100);
    const perdido = montoNum - poderRestante;
    const porcentajePerdido = (perdido / montoNum) * 100;

    // En Bitcoin (hipotético)
    const enBtc = montoNum * (1 + tasaBtc / 100);

    // En USDC DeFi (hipotético)
    const enUsdc = montoNum * (1 + tasaUsdc / 100);

    return {
      montoOriginal: montoNum,
      poderRestante,
      perdido,
      porcentajePerdido,
      tasaInflacion,
      enBtc,
      enUsdc,
    };
  }, [montoNum, pais, periodo]);

  const paisInfo = PAISES.find((p) => p.key === pais)!;

  const getMensajeImpacto = () => {
    if (!resultado) return "";
    const { porcentajePerdido, tasaInflacion } = resultado;
    const periodoLabel = PERIODOS.find((p) => p.key === periodo)?.label ?? "";
    if (porcentajePerdido >= 95) {
      return `Tu dinero perdió el ${porcentajePerdido.toFixed(0)}% de su valor real en ${periodoLabel}. Con ${tasaInflacion}% de inflación acumulada, $100 de hoy valen menos de $${(10000 / (1 + tasaInflacion / 100)).toFixed(0)} mañana.`;
    }
    if (porcentajePerdido >= 70) {
      return `Con ${tasaInflacion}% de inflación acumulada en ${periodoLabel}, tu dinero perdió más de dos tercios de su poder adquisitivo real.`;
    }
    if (porcentajePerdido >= 40) {
      return `Casi la mitad del poder adquisitivo de tu dinero desapareció por la inflación en ${periodoLabel}.`;
    }
    return `La inflación acumulada de ${tasaInflacion}% en ${periodoLabel} erosionó ${porcentajePerdido.toFixed(1)}% del valor real de tu dinero.`;
  };

  return (
    <main className="min-h-screen" style={{ paddingTop: "104px" }}>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <span className="section-label">Calculadora</span>
        <h1
          className="font-display font-bold mt-4 mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em", color: "#f0f0ef" }}
        >
          ¿Cuánto perdió tu dinero por{" "}
          <span style={{ color: "#ef4444" }}>la inflación</span>?
        </h1>
        <p className="text-base mx-auto" style={{ color: "rgba(240,240,239,0.5)", maxWidth: "520px", lineHeight: "1.7" }}>
          Ingresá tu país, monto y período para ver cuánto poder adquisitivo real perdiste —
          y cómo hubiera sido con Bitcoin o stablecoins.
        </p>
      </section>

      {/* Calculadora */}
      <section className="max-w-3xl mx-auto px-6 pb-24">

        {/* Inputs */}
        <div className="card p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* País */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(240,240,239,0.4)" }}
              >
                País
              </label>
              <select
                value={pais}
                onChange={(e) => setPais(e.target.value as PaisKey)}
                className="rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f0f0ef",
                  cursor: "pointer",
                }}
              >
                {PAISES.map((p) => (
                  <option key={p.key} value={p.key} style={{ background: "#18191a" }}>
                    {p.emoji} {p.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Monto */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(240,240,239,0.4)" }}
              >
                Monto inicial (USD equiv.)
              </label>
              <div className="relative">
                <span
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold"
                  style={{ color: "rgba(240,240,239,0.3)" }}
                >
                  $
                </span>
                <input
                  type="number"
                  value={monto}
                  min="1"
                  onChange={(e) => setMonto(e.target.value)}
                  className="w-full rounded-xl pl-8 pr-4 py-3 text-sm font-medium outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#f0f0ef",
                  }}
                  placeholder="10000"
                />
              </div>
            </div>

            {/* Período */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(240,240,239,0.4)" }}
              >
                Período
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {PERIODOS.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setPeriodo(p.key)}
                    className="rounded-lg py-3 text-xs font-semibold transition-all"
                    style={{
                      background: periodo === p.key ? "var(--verde)" : "rgba(255,255,255,0.05)",
                      color: periodo === p.key ? "#000" : "rgba(240,240,239,0.5)",
                      border: periodo === p.key ? "none" : "1px solid rgba(255,255,255,0.08)",
                      cursor: "pointer",
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Resultados */}
        {resultado && montoNum > 0 ? (
          <>
            {/* Mensaje impacto */}
            <div
              className="rounded-2xl px-6 py-5 mb-6"
              style={{
                background: "rgba(239,68,68,0.06)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <p
                className="font-display text-base font-semibold leading-snug"
                style={{ color: "#ef4444", letterSpacing: "-0.01em" }}
              >
                {getMensajeImpacto()}
              </p>
            </div>

            {/* Cards de resultado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

              {/* Poder adquisitivo restante */}
              <div className="card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(240,240,239,0.4)" }}>
                  Valor real al final del período
                </p>
                <p
                  className="font-display text-3xl font-bold mb-1"
                  style={{ color: "#f0f0ef", letterSpacing: "-0.03em" }}
                >
                  {formatMoney(resultado.poderRestante)}
                </p>
                <p className="text-sm" style={{ color: "rgba(240,240,239,0.4)" }}>
                  de los {formatMoney(resultado.montoOriginal)} originales
                </p>
                <div
                  className="mt-4 rounded-lg px-3 py-2 text-xs font-medium"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    color: "#ef4444",
                  }}
                >
                  Inflación acumulada: {resultado.tasaInflacion.toLocaleString()}%
                </div>
              </div>

              {/* Lo que perdiste */}
              <div className="card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(240,240,239,0.4)" }}>
                  Poder adquisitivo perdido
                </p>
                <p
                  className="font-display text-3xl font-bold mb-1"
                  style={{ color: "#ef4444", letterSpacing: "-0.03em" }}
                >
                  {formatMoney(resultado.perdido)}
                </p>
                <p className="text-sm" style={{ color: "rgba(240,240,239,0.4)" }}>
                  en términos reales
                </p>
                <div
                  className="mt-4 rounded-lg px-3 py-2 text-xs font-medium"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    color: "#ef4444",
                  }}
                >
                  {resultado.porcentajePerdido.toFixed(1)}% del valor original
                </div>
              </div>

            </div>

            {/* Alternativas */}
            <div
              className="rounded-2xl px-6 py-5 mb-6"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(240,240,239,0.35)" }}>
                ¿Qué hubiera pasado si en vez de guardar efectivo...?
              </p>
              <p className="text-xs mb-5" style={{ color: "rgba(240,240,239,0.25)" }}>
                * Datos hipotéticos basados en rendimientos históricos aproximados. No constituyen asesoramiento financiero.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Bitcoin */}
                <div
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: "rgba(0,230,118,0.04)",
                    border: "1px solid rgba(0,230,118,0.1)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">₿</span>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--verde)" }}>
                      Bitcoin (BTC)
                    </p>
                  </div>
                  <p
                    className="font-display text-2xl font-bold mb-1"
                    style={{ color: "var(--verde)", letterSpacing: "-0.02em" }}
                  >
                    {formatMoney(resultado.enBtc)}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(240,240,239,0.4)" }}>
                    +{RETORNOS_BTC[periodo]}% retorno histórico aprox. ({periodo === "1" ? "1 año" : periodo === "3" ? "3 años" : periodo === "5" ? "5 años" : "10 años"})
                  </p>
                </div>

                {/* USDC DeFi */}
                <div
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: "rgba(96,165,250,0.04)",
                    border: "1px solid rgba(96,165,250,0.1)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg" style={{ color: "#60a5fa" }}>◈</span>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#60a5fa" }}>
                      USDC en DeFi
                    </p>
                  </div>
                  <p
                    className="font-display text-2xl font-bold mb-1"
                    style={{ color: "#60a5fa", letterSpacing: "-0.02em" }}
                  >
                    {formatMoney(resultado.enUsdc)}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(240,240,239,0.4)" }}>
                    ~6% APY compuesto en protocolos DeFi
                  </p>
                </div>

              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-center" style={{ color: "rgba(240,240,239,0.2)" }}>
              Las tasas de inflación son aproximadas y acumuladas para el período. Los retornos de BTC y USDC son hipotéticos basados en datos históricos.
              Rendimientos pasados no garantizan resultados futuros. No es asesoramiento financiero.
            </p>
          </>
        ) : (
          <div
            className="rounded-2xl px-6 py-12 text-center"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p className="text-3xl mb-3">📊</p>
            <p className="text-sm" style={{ color: "rgba(240,240,239,0.4)" }}>
              Ingresá un monto para ver el resultado
            </p>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/calculadoras/dca"
            className="card p-5 block group no-underline"
            style={{ borderRadius: "14px" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(240,240,239,0.4)" }}>
              Siguiente calculadora
            </p>
            <p className="font-display font-bold mb-1" style={{ color: "#f0f0ef", letterSpacing: "-0.01em" }}>
              Simulador DCA →
            </p>
            <p className="text-sm" style={{ color: "rgba(240,240,239,0.4)" }}>
              ¿Cuánto tendrías si hubieras comprado BTC cada mes?
            </p>
          </a>
          <a
            href="/calculadoras/yield-defi"
            className="card p-5 block group no-underline"
            style={{ borderRadius: "14px" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(240,240,239,0.4)" }}>
              Más herramientas
            </p>
            <p className="font-display font-bold mb-1" style={{ color: "#f0f0ef", letterSpacing: "-0.01em" }}>
              Yield en DeFi →
            </p>
            <p className="text-sm" style={{ color: "rgba(240,240,239,0.4)" }}>
              Calculá cuánto generarían tus stablecoins en DeFi
            </p>
          </a>
        </div>

      </section>
    </main>
  );
}
