"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Quiz ───────────────────────────────────────────────────────────
const PREGUNTAS = [
  {
    id: 1,
    texto: "¿Cuánto tiempo podés dejar sin tocar el dinero?",
    opciones: [
      { label: "Menos de 1 año", valor: 0 },
      { label: "1 a 3 años", valor: 1 },
      { label: "Más de 3 años", valor: 2 },
    ],
  },
  {
    id: 2,
    texto: "Si tu portafolio baja un 40%, ¿qué hacés?",
    opciones: [
      { label: "Vendo todo antes de que baje más", valor: 0 },
      { label: "No hago nada y espero la recuperación", valor: 1 },
      { label: "Compro más mientras están baratos", valor: 2 },
    ],
  },
  {
    id: 3,
    texto: "¿Cuál es tu objetivo principal?",
    opciones: [
      { label: "Preservar capital, no perder", valor: 0 },
      { label: "Crecer moderado sin demasiado riesgo", valor: 1 },
      { label: "Máximo crecimiento aunque sea volátil", valor: 2 },
    ],
  },
];

// ─── Perfiles ────────────────────────────────────────────────────────
type Perfil = {
  nombre: string;
  descripcion: string;
  color: string;
  distribucion: { label: string; pct: number; color: string }[];
};

const PERFILES: Record<string, Perfil> = {
  conservador: {
    nombre: "Conservador",
    descripcion:
      "Priorizás la estabilidad. Tu portafolio protege el capital con mayoría de stablecoins y una exposición limitada a crypto volátil.",
    color: "#7b8cde",
    distribucion: [
      { label: "Stablecoins", pct: 50, color: "#00e676" },
      { label: "Bitcoin", pct: 30, color: "#f5c842" },
      { label: "Ethereum", pct: 15, color: "#7b8cde" },
      { label: "Altcoins", pct: 5, color: "rgba(240,240,239,0.4)" },
    ],
  },
  moderado: {
    nombre: "Moderado",
    descripcion:
      "Buscás crecer a largo plazo con una exposición balanceada. BTC y ETH son el núcleo, con algo de liquidez en stablecoins.",
    color: "#f5c842",
    distribucion: [
      { label: "Stablecoins", pct: 20, color: "#00e676" },
      { label: "Bitcoin", pct: 40, color: "#f5c842" },
      { label: "Ethereum", pct: 25, color: "#7b8cde" },
      { label: "Altcoins", pct: 15, color: "rgba(240,240,239,0.4)" },
    ],
  },
  agresivo: {
    nombre: "Agresivo",
    descripcion:
      "Tolerás alta volatilidad y buscás máximo crecimiento. Exposición alta a BTC, ETH y altcoins seleccionadas.",
    color: "#ff6b6b",
    distribucion: [
      { label: "Stablecoins", pct: 5, color: "#00e676" },
      { label: "Bitcoin", pct: 35, color: "#f5c842" },
      { label: "Ethereum", pct: 30, color: "#7b8cde" },
      { label: "Altcoins", pct: 30, color: "rgba(240,240,239,0.4)" },
    ],
  },
};

function getPerfil(respuestas: number[]): string {
  const suma = respuestas.reduce((a, b) => a + b, 0);
  if (suma <= 1) return "conservador";
  if (suma <= 3) return "moderado";
  return "agresivo";
}

// ─── Componente barra ────────────────────────────────────────────────
function BarraDistribucion({
  label,
  pct,
  color,
}: {
  label: string;
  pct: number;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "99px",
              background: color,
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span className="text-sm font-medium" style={{ color: "rgba(240,240,239,0.7)" }}>
            {label}
          </span>
        </div>
        <span className="font-display font-bold text-sm" style={{ color }}>
          {pct}%
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: "8px", background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

// ─── Página ───────────────────────────────────────────────────────────
export default function CalculadoraPortafolio() {
  const [respuestas, setRespuestas] = useState<(number | null)[]>([null, null, null]);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const todasRespondidas = respuestas.every((r) => r !== null);

  function responder(pregIdx: number, valor: number) {
    const nuevas = [...respuestas];
    nuevas[pregIdx] = valor;
    setRespuestas(nuevas);
    setMostrarResultado(false); // reset al cambiar respuesta
  }

  function calcular() {
    setMostrarResultado(true);
    setTimeout(() => {
      document.getElementById("resultado-portafolio")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function resetear() {
    setRespuestas([null, null, null]);
    setMostrarResultado(false);
  }

  const perfil = todasRespondidas
    ? PERFILES[getPerfil(respuestas as number[])]
    : null;

  return (
    <main className="min-h-screen" style={{ paddingTop: "104px" }}>
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs" style={{ color: "rgba(240,240,239,0.3)" }}>
          <Link href="/calculadoras" style={{ color: "rgba(240,240,239,0.3)", textDecoration: "none" }}>
            Calculadoras
          </Link>
          <span>/</span>
          <span>Perfil de portafolio</span>
        </div>

        {/* Header */}
        <span className="section-label">Perfil de inversión</span>
        <h1
          className="font-display font-bold mt-3 mb-3"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", color: "#f0f0ef" }}
        >
          ¿Cuál es la distribución ideal para tu perfil?
        </h1>
        <p className="mb-10 text-sm" style={{ color: "rgba(240,240,239,0.5)", lineHeight: "1.7" }}>
          Respondé 3 preguntas honestas sobre tu situación y tolerancia al riesgo.
          Te decimos qué distribución de portafolio se ajusta mejor a vos.
        </p>

        {/* Progreso */}
        <div className="flex gap-2 mb-8">
          {PREGUNTAS.map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-300"
              style={{
                height: "3px",
                background: respuestas[i] !== null ? "var(--verde)" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>

        {/* Quiz */}
        <div className="flex flex-col gap-6">
          {PREGUNTAS.map((pregunta, pregIdx) => (
            <div
              key={pregunta.id}
              className="card p-6 transition-all duration-200"
              style={{
                border: respuestas[pregIdx] !== null
                  ? "1.5px solid rgba(0,230,118,0.2)"
                  : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Número + Texto */}
              <div className="flex items-start gap-3 mb-5">
                <span
                  className="font-display font-bold text-sm flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
                  style={{
                    background: respuestas[pregIdx] !== null ? "var(--verde)" : "rgba(255,255,255,0.08)",
                    color: respuestas[pregIdx] !== null ? "#08090a" : "rgba(240,240,239,0.4)",
                  }}
                >
                  {pregunta.id}
                </span>
                <h2 className="font-semibold text-base leading-snug" style={{ color: "#f0f0ef" }}>
                  {pregunta.texto}
                </h2>
              </div>

              {/* Opciones */}
              <div className="flex flex-col gap-2.5">
                {pregunta.opciones.map((opcion) => {
                  const seleccionada = respuestas[pregIdx] === opcion.valor;
                  return (
                    <button
                      key={opcion.valor}
                      onClick={() => responder(pregIdx, opcion.valor)}
                      className="text-left text-sm px-4 py-3 rounded-xl transition-all duration-150"
                      style={{
                        border: seleccionada
                          ? "1.5px solid var(--verde)"
                          : "1.5px solid rgba(255,255,255,0.08)",
                        background: seleccionada
                          ? "rgba(0,230,118,0.06)"
                          : "rgba(255,255,255,0.02)",
                        color: seleccionada ? "var(--verde)" : "rgba(240,240,239,0.6)",
                        cursor: "pointer",
                        fontWeight: seleccionada ? 600 : 400,
                      }}
                    >
                      <span className="mr-2" style={{ opacity: 0.4 }}>
                        {seleccionada ? "✓" : "○"}
                      </span>
                      {opcion.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Botón calcular */}
        <div className="mt-8">
          {todasRespondidas ? (
            <button
              onClick={calcular}
              className="btn-primary w-full justify-center"
              style={{ fontSize: "15px", padding: "14px 24px" }}
            >
              Ver mi perfil de inversión
            </button>
          ) : (
            <div
              className="text-center text-sm py-3"
              style={{ color: "rgba(240,240,239,0.25)" }}
            >
              Respondé las {PREGUNTAS.length} preguntas para ver tu perfil
            </div>
          )}
        </div>

        {/* Resultado */}
        {mostrarResultado && perfil && (
          <div id="resultado-portafolio" className="mt-10">
            {/* Badge perfil */}
            <div className="text-center mb-7">
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
                style={{
                  background: `${perfil.color}15`,
                  border: `1.5px solid ${perfil.color}40`,
                  color: perfil.color,
                }}
              >
                Tu perfil: {perfil.nombre}
              </span>
              <p className="text-sm mt-4 mx-auto" style={{ color: "rgba(240,240,239,0.5)", maxWidth: "480px", lineHeight: "1.7" }}>
                {perfil.descripcion}
              </p>
            </div>

            {/* Distribución */}
            <div
              className="card p-7"
              style={{ border: `1.5px solid ${perfil.color}25` }}
            >
              <h3 className="font-display font-bold text-base mb-6" style={{ color: "#f0f0ef" }}>
                Distribución recomendada
              </h3>
              <div className="flex flex-col gap-5">
                {perfil.distribucion.map((item) => (
                  <BarraDistribucion
                    key={item.label}
                    label={item.label}
                    pct={item.pct}
                    color={item.color}
                  />
                ))}
              </div>

              {/* Pie chart visual simple */}
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                {perfil.distribucion.map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "3px",
                        background: item.color,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    <span className="text-xs" style={{ color: "rgba(240,240,239,0.4)" }}>
                      {item.label} {item.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notas clave */}
            <div className="mt-4 card p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(240,240,239,0.25)" }}>
                Recordá siempre
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Rebalanceá tu portafolio cada 3–6 meses según los movimientos del mercado.",
                  "No inviertas más de lo que podés permitirte perder.",
                  "DCA mensual reduce el impacto de la volatilidad a largo plazo.",
                  "Las stablecoins generan yield en DeFi: no dejés idle tu liquidez.",
                ].map((nota) => (
                  <li key={nota} className="flex items-start gap-2 text-xs" style={{ color: "rgba(240,240,239,0.4)", lineHeight: "1.6" }}>
                    <span style={{ color: "var(--verde)", flexShrink: 0, marginTop: "2px" }}>→</span>
                    {nota}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón reset */}
            <button
              onClick={resetear}
              className="btn-secondary w-full justify-center mt-4"
              style={{ fontSize: "13px", padding: "10px 20px" }}
            >
              Volver a hacer el quiz
            </button>

            {/* CTA */}
            <div
              className="mt-6 card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ border: "1px solid rgba(0,230,118,0.15)" }}
            >
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "#f0f0ef" }}>
                  ¿Listo para construir tu portafolio {perfil.nombre.toLowerCase()}?
                </p>
                <p className="text-xs" style={{ color: "rgba(240,240,239,0.4)" }}>
                  Exchanges, wallets y herramientas DeFi curadas para LATAM.
                </p>
              </div>
              <Link href="/recursos" className="btn-primary whitespace-nowrap" style={{ fontSize: "13px", padding: "10px 20px" }}>
                Ver herramientas
              </Link>
            </div>
          </div>
        )}

        <p className="text-xs text-center mt-10" style={{ color: "rgba(240,240,239,0.2)" }}>
          Quiz educativo. No constituye asesoramiento financiero personalizado.
        </p>
      </div>
    </main>
  );
}
