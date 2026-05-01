"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

const APYS = [4, 6, 8, 10, 12];
const PERIODOS = [
  { value: "1m", label: "1 mes", meses: 1 },
  { value: "3m", label: "3 meses", meses: 3 },
  { value: "6m", label: "6 meses", meses: 6 },
  { value: "1a", label: "1 año", meses: 12 },
  { value: "2a", label: "2 años", meses: 24 },
  { value: "3a", label: "3 años", meses: 36 },
];

const APY_PLAZO_FIJO = 3; // % anual equivalente de plazo fijo conservador

function fmt(n: number, decimals = 2) {
  return n.toLocaleString("es-AR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function calcular(capital: number, apyPct: number, meses: number, reinvertir: boolean) {
  const apyDecimal = apyPct / 100;
  const tasaMensual = apyDecimal / 12;

  let saldo = capital;
  const filas: { mes: number; interesMes: number; saldo: number }[] = [];

  for (let i = 1; i <= meses; i++) {
    const interesMes = reinvertir ? saldo * tasaMensual : capital * tasaMensual;
    if (reinvertir) saldo += interesMes;
    else saldo += interesMes;
    if (i <= 12) filas.push({ mes: i, interesMes, saldo });
  }

  const interesTotal = saldo - capital;
  return { saldo, interesTotal, filas };
}

function calcularPlazoFijo(capital: number, meses: number) {
  const tasaMensual = APY_PLAZO_FIJO / 100 / 12;
  let saldo = capital;
  for (let i = 0; i < meses; i++) saldo += capital * tasaMensual; // sin reinversion
  return saldo;
}

export default function CalculadoraYieldDeFi() {
  const [capital, setCapital] = useState<string>("1000");
  const [apy, setApy] = useState(8);
  const [periodo, setPeriodo] = useState("1a");
  const [reinvertir, setReinvertir] = useState(true);

  const capitalNum = parseFloat(capital) || 0;
  const periodoInfo = PERIODOS.find((p) => p.value === periodo)!;

  const resultado = useMemo(
    () => calcular(capitalNum, apy, periodoInfo.meses, reinvertir),
    [capitalNum, apy, periodoInfo.meses, reinvertir]
  );

  const plazoFijo = useMemo(
    () => calcularPlazoFijo(capitalNum, periodoInfo.meses),
    [capitalNum, periodoInfo.meses]
  );

  const ventajaDeFi = resultado.saldo - plazoFijo;

  return (
    <main className="min-h-screen" style={{ paddingTop: "104px" }}>
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs" style={{ color: "rgba(240,240,239,0.3)" }}>
          <Link href="/calculadoras" style={{ color: "rgba(240,240,239,0.3)", textDecoration: "none" }}>
            Calculadoras
          </Link>
          <span>/</span>
          <span>Yield DeFi</span>
        </div>

        {/* Header */}
        <span className="section-label">Yield DeFi</span>
        <h1
          className="font-display font-bold mt-3 mb-3"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", color: "#f0f0ef" }}
        >
          ¿Cuánto generarías con tus stablecoins en DeFi?
        </h1>
        <p className="mb-10 text-sm" style={{ color: "rgba(240,240,239,0.5)", lineHeight: "1.7" }}>
          Calculá el rendimiento de depositar USDT, USDC o DAI en protocolos DeFi como Aave.
          Comparamos con y sin reinversión, y contra el plazo fijo tradicional.
        </p>

        {/* Controles */}
        <div className="card p-6 flex flex-col gap-6">
          {/* Capital */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(240,240,239,0.35)" }}>
              Capital inicial (USD)
            </label>
            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-sm"
                style={{ color: "rgba(240,240,239,0.3)" }}
              >
                $
              </span>
              <input
                type="number"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
                placeholder="1000"
                className="w-full text-sm pl-7 pr-3 py-2.5 rounded-lg focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: capital ? "1.5px solid var(--verde)" : "1.5px solid rgba(255,255,255,0.08)",
                  color: "#f0f0ef",
                }}
              />
            </div>
            {/* Sugerencias rápidas */}
            <div className="flex gap-2 mt-2 flex-wrap">
              {[500, 1000, 5000, 10000, 50000].map((v) => (
                <button
                  key={v}
                  onClick={() => setCapital(String(v))}
                  className="text-xs px-2.5 py-1 rounded-lg transition-all"
                  style={{
                    border: capital === String(v) ? "1px solid var(--verde)" : "1px solid rgba(255,255,255,0.08)",
                    background: capital === String(v) ? "rgba(0,230,118,0.06)" : "transparent",
                    color: capital === String(v) ? "var(--verde)" : "rgba(240,240,239,0.35)",
                    cursor: "pointer",
                  }}
                >
                  ${v.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* APY */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(240,240,239,0.35)" }}>
              APY estimado
            </label>
            <div className="flex gap-2 flex-wrap">
              {APYS.map((a) => (
                <button
                  key={a}
                  onClick={() => setApy(a)}
                  className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150"
                  style={{
                    border: apy === a ? "1.5px solid var(--verde)" : "1.5px solid rgba(255,255,255,0.08)",
                    background: apy === a ? "rgba(0,230,118,0.08)" : "transparent",
                    color: apy === a ? "var(--verde)" : "rgba(240,240,239,0.5)",
                    cursor: "pointer",
                  }}
                >
                  {a}%
                </button>
              ))}
            </div>
            <p className="text-xs mt-2" style={{ color: "rgba(240,240,239,0.25)" }}>
              Aave actualmente ofrece entre 4% y 8% en USDC/USDT según demanda del mercado.
            </p>
          </div>

          {/* Período */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(240,240,239,0.35)" }}>
              Período
            </label>
            <div className="flex gap-2 flex-wrap">
              {PERIODOS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPeriodo(p.value)}
                  className="text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-150"
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

          {/* Reinversión */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "rgba(240,240,239,0.35)" }}>
              Reinvertir intereses (compounding)
            </label>
            <div className="flex gap-3">
              {[true, false].map((v) => (
                <button
                  key={String(v)}
                  onClick={() => setReinvertir(v)}
                  className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-150"
                  style={{
                    border: reinvertir === v ? "1.5px solid var(--verde)" : "1.5px solid rgba(255,255,255,0.08)",
                    background: reinvertir === v ? "rgba(0,230,118,0.08)" : "transparent",
                    color: reinvertir === v ? "var(--verde)" : "rgba(240,240,239,0.5)",
                    cursor: "pointer",
                  }}
                >
                  {v ? "Sí" : "No"}
                </button>
              ))}
            </div>
            {reinvertir && (
              <p className="text-xs mt-2" style={{ color: "rgba(0,230,118,0.5)" }}>
                Con compounding: los intereses generan más intereses cada mes.
              </p>
            )}
          </div>
        </div>

        {/* Resultado principal */}
        {capitalNum > 0 && (
          <>
            <div className="mt-6 card p-7" style={{ border: "1.5px solid rgba(0,230,118,0.2)" }}>
              <div className="text-center mb-7">
                <p className="text-sm mb-2" style={{ color: "rgba(240,240,239,0.4)" }}>
                  Capital total después de {periodoInfo.label}
                </p>
                <p
                  className="font-display font-bold"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--verde)", letterSpacing: "-0.03em" }}
                >
                  ${fmt(resultado.saldo)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs mb-1" style={{ color: "rgba(240,240,239,0.35)" }}>Capital inicial</p>
                  <p className="font-display font-bold text-xl" style={{ color: "#f0f0ef", letterSpacing: "-0.02em" }}>
                    ${fmt(capitalNum)}
                  </p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.12)" }}>
                  <p className="text-xs mb-1" style={{ color: "rgba(240,240,239,0.35)" }}>Interés generado</p>
                  <p className="font-display font-bold text-xl" style={{ color: "var(--verde)", letterSpacing: "-0.02em" }}>
                    +${fmt(resultado.interesTotal)}
                  </p>
                </div>
              </div>

              {/* Comparativa plazo fijo */}
              <div className="rounded-xl p-4" style={{ background: "rgba(245,200,66,0.05)", border: "1px solid rgba(245,200,66,0.15)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--dorado)" }}>
                  vs Plazo fijo (3% anual)
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs mb-1" style={{ color: "rgba(240,240,239,0.35)" }}>Plazo fijo</p>
                    <p className="font-display font-bold text-lg" style={{ color: "rgba(240,240,239,0.55)", letterSpacing: "-0.02em" }}>
                      ${fmt(plazoFijo)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs mb-1" style={{ color: "rgba(240,240,239,0.2)" }}>diferencia</p>
                    <p className="font-display font-bold text-xl" style={{ color: ventajaDeFi > 0 ? "var(--dorado)" : "#f87171", letterSpacing: "-0.02em" }}>
                      {ventajaDeFi > 0 ? "+" : ""}${fmt(ventajaDeFi)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1 text-right" style={{ color: "rgba(240,240,239,0.35)" }}>DeFi ({apy}%)</p>
                    <p className="font-display font-bold text-lg text-right" style={{ color: "var(--verde)", letterSpacing: "-0.02em" }}>
                      ${fmt(resultado.saldo)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabla mes a mes */}
            {resultado.filas.length > 0 && (
              <div className="mt-6 card p-6">
                <h3 className="font-semibold text-sm mb-4" style={{ color: "#f0f0ef" }}>
                  Evolución mes a mes (primeros {resultado.filas.length} meses)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <th className="text-left py-2 pr-4" style={{ color: "rgba(240,240,239,0.3)" }}>Mes</th>
                        <th className="text-right py-2 pr-4" style={{ color: "rgba(240,240,239,0.3)" }}>Interés del mes</th>
                        <th className="text-right py-2" style={{ color: "rgba(240,240,239,0.3)" }}>Saldo acumulado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultado.filas.map((fila) => (
                        <tr
                          key={fila.mes}
                          style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                        >
                          <td className="py-2 pr-4" style={{ color: "rgba(240,240,239,0.4)" }}>
                            Mes {fila.mes}
                          </td>
                          <td className="py-2 pr-4 text-right" style={{ color: "var(--verde)" }}>
                            +${fmt(fila.interesMes)}
                          </td>
                          <td className="py-2 text-right font-semibold" style={{ color: "#f0f0ef" }}>
                            ${fmt(fila.saldo)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div
          className="mt-6 card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ border: "1px solid rgba(0,230,118,0.15)" }}
        >
          <div>
            <p className="font-semibold text-sm mb-1" style={{ color: "#f0f0ef" }}>
              Empezá con Aave u otro protocolo DeFi
            </p>
            <p className="text-xs" style={{ color: "rgba(240,240,239,0.4)" }}>
              Mirá nuestra sección de herramientas DeFi curadas para LATAM.
            </p>
          </div>
          <Link href="/recursos" className="btn-primary whitespace-nowrap" style={{ fontSize: "13px", padding: "10px 20px" }}>
            Ver herramientas DeFi
          </Link>
        </div>

        <p className="text-xs text-center mt-6" style={{ color: "rgba(240,240,239,0.2)" }}>
          APY variable según mercado. No es asesoramiento financiero. Rendimientos pasados no garantizan resultados futuros.
        </p>
      </div>
    </main>
  );
}
