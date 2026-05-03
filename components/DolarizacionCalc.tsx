"use client";
import { useState, useMemo } from "react";
import { events } from "@/lib/amplitude";

// Calculadora gated: el resultado completo se muestra después del email opt-in.
// Datos de inflación basados en estadísticas oficiales 2024-2025 (orientativas).

const PAISES = [
  { code: "AR", nombre: "Argentina", moneda: "ARS", inflMensual: 6.5, simbolo: "$" },
  { code: "VE", nombre: "Venezuela", moneda: "VES", inflMensual: 4.8, simbolo: "Bs" },
  { code: "MX", nombre: "México", moneda: "MXN", inflMensual: 0.45, simbolo: "$" },
  { code: "CO", nombre: "Colombia", moneda: "COP", inflMensual: 0.55, simbolo: "$" },
  { code: "CL", nombre: "Chile", moneda: "CLP", inflMensual: 0.40, simbolo: "$" },
  { code: "PE", nombre: "Perú", moneda: "PEN", inflMensual: 0.30, simbolo: "S/" },
  { code: "UY", nombre: "Uruguay", moneda: "UYU", inflMensual: 0.55, simbolo: "$U" },
  { code: "ES", nombre: "España", moneda: "EUR", inflMensual: 0.25, simbolo: "€" },
] as const;

type PaisCode = typeof PAISES[number]["code"];

export default function DolarizacionCalc() {
  const [pais, setPais] = useState<PaisCode>("AR");
  const [monto, setMonto] = useState<number>(500000);
  const [meses, setMeses] = useState<number>(12);
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const paisData = PAISES.find((p) => p.code === pais)!;

  const calc = useMemo(() => {
    const mensual = paisData.inflMensual / 100;
    const factor = Math.pow(1 + mensual, meses);
    const valorFinal = monto / factor;
    const perdida = monto - valorFinal;
    const perdidaPct = (perdida / monto) * 100;
    return {
      valorFinal: Math.round(valorFinal),
      perdida: Math.round(perdida),
      perdidaPct: perdidaPct.toFixed(1),
      perdidaMensual: Math.round((monto * mensual)),
    };
  }, [monto, meses, paisData.inflMensual]);

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "dolarizacion_calc",
          utm_source: "lead_magnet",
          utm_medium: "calculadora",
          utm_campaign: "mapa_dolarizacion",
        }),
      });
      if (res.ok) {
        setUnlocked(true);
        setStatus("success");
        events.leadMagnetUnlock("dolarizacion");
        events.dolarizacionCalc(paisData.code, monto, meses);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fmt = (n: number) =>
    `${paisData.simbolo} ${n.toLocaleString("es-AR")}`;

  return (
    <div className="card p-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="dol-pais" className="text-text-muted text-xs uppercase tracking-wider block mb-2">
            Tu país
          </label>
          <select
            id="dol-pais"
            value={pais}
            onChange={(e) => setPais(e.target.value as PaisCode)}
            className="w-full text-sm px-3 py-2.5 rounded-[8px]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.09)",
              color: "#f0f0ef",
            }}
          >
            {PAISES.map((p) => (
              <option key={p.code} value={p.code}>
                {p.nombre} ({p.moneda})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="dol-monto" className="text-text-muted text-xs uppercase tracking-wider block mb-2">
            Monto en {paisData.moneda}
          </label>
          <input
            id="dol-monto"
            type="number"
            inputMode="numeric"
            min={1000}
            value={monto}
            onChange={(e) => setMonto(Math.max(1000, Number(e.target.value) || 0))}
            className="w-full text-sm px-3 py-2.5 rounded-[8px]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.09)",
              color: "#f0f0ef",
            }}
          />
        </div>
        <div>
          <label htmlFor="dol-meses" className="text-text-muted text-xs uppercase tracking-wider block mb-2">
            Por cuántos meses
          </label>
          <input
            id="dol-meses"
            type="number"
            inputMode="numeric"
            min={1}
            max={120}
            value={meses}
            onChange={(e) => setMeses(Math.max(1, Math.min(120, Number(e.target.value) || 1)))}
            className="w-full text-sm px-3 py-2.5 rounded-[8px]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.09)",
              color: "#f0f0ef",
            }}
          />
        </div>
      </div>

      {/* Resultado parcial siempre visible */}
      <div
        className="rounded-xl p-5 mb-5"
        style={{ background: "rgba(255,69,69,0.06)", border: "1px solid rgba(255,69,69,0.18)" }}
      >
        <p className="text-text-muted text-xs uppercase tracking-wider mb-2">
          En {meses} meses vas a perder
        </p>
        <p className="font-display font-bold text-3xl md:text-4xl" style={{ color: "#ff6464" }}>
          {fmt(calc.perdida)}
        </p>
        <p className="text-text-secondary text-sm mt-1">
          Eso es el {calc.perdidaPct}% de tu plata. Por mes perdés ~{fmt(calc.perdidaMensual)}.
        </p>
      </div>

      {!unlocked ? (
        <div
          className="rounded-xl p-5"
          style={{ background: "rgba(0,230,118,0.04)", border: "1px solid rgba(0,230,118,0.18)" }}
        >
          <p className="font-display font-semibold text-text-primary text-base mb-1">
            Desbloqueá las 7 vías legales para parar esta pérdida
          </p>
          <p className="text-text-secondary text-sm mb-4">
            Recibís: este reporte completo + el "Mapa de Dolarización LATAM 2026" (PDF 14 páginas)
            + plan 90 días para dolarizar el 50% de tus ahorros. Gratis.
          </p>

          <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-2">
            <label htmlFor="dol-email" className="sr-only">Email</label>
            <input
              id="dol-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              aria-label="Email"
              className="flex-1 text-sm px-3 py-2.5 rounded-[8px]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "#f0f0ef",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary whitespace-nowrap"
              style={{ opacity: status === "loading" ? 0.6 : 1 }}
            >
              {status === "loading" ? "Cargando..." : "Desbloquear reporte →"}
            </button>
          </form>
          {status === "error" && (
            <p className="text-xs mt-3 text-red-400">Algo salió mal. Intentá de nuevo.</p>
          )}
        </div>
      ) : (
        <div
          className="rounded-xl p-5 space-y-4"
          style={{ background: "rgba(0,230,118,0.04)", border: "1px solid rgba(0,230,118,0.18)" }}
        >
          <p className="font-display font-bold text-verde text-lg">
            ✓ Desbloqueado. Te lo mandé al email.
          </p>

          <div>
            <p className="text-text-muted text-xs uppercase tracking-wider mb-2">
              Si esos {fmt(calc.perdida)} estuvieran en USDT
            </p>
            <p className="font-display font-bold text-2xl text-verde">{fmt(monto)}</p>
            <p className="text-text-secondary text-xs mt-1">
              Mismo poder de compra. Sin perder valor.
            </p>
          </div>

          <div>
            <p className="text-text-muted text-xs uppercase tracking-wider mb-2">
              Si esos {fmt(calc.perdida)} estuvieran en BTC desde {meses}m atrás (escenario 50% upside)
            </p>
            <p className="font-display font-bold text-2xl text-dorado">
              {fmt(Math.round(monto * 1.5))}
            </p>
            <p className="text-text-secondary text-xs mt-1">
              Volátil, pero históricamente ganás vs. mantener moneda local.
            </p>
          </div>

          <p className="text-text-secondary text-sm pt-2 border-t border-white/5">
            Bajá la guía completa con el botón de arriba (Imprimir / PDF) o esperá el email.
          </p>
        </div>
      )}
    </div>
  );
}
