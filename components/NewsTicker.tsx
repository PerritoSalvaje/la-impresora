"use client";

const noticias = [
  "Bitcoin supera los $100K por tercera vez en 2026 🚀",
  "El 72% de los bancos centrales ya estudian monedas digitales (CBDCs)",
  "La tokenización de activos reales supera los $50B en volumen global",
  "ChatGPT alcanza 500 millones de usuarios activos mensuales",
  "Argentina avanza en regulación cripto: nuevo marco legal aprobado",
  "Ethereum procesa más transacciones que Visa en Q1 2026",
  "El 15% de los freelancers en LATAM ya cobra en crypto",
  "BlackRock lanza su tercer fondo tokenizado de Real World Assets",
  "La AI generó $2.6 trillones en valor económico en 2025",
  "SOL rompe $300: la red Solana procesa 65,000 TPS",
];

export default function NewsTicker() {
  const tickerText = noticias.join("   ·   ");

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
      style={{ backgroundColor: "#021a0e", borderBottom: "1px solid rgba(0,255,135,0.15)" }}
    >
      <div className="flex items-center h-7">
        <div
          className="shrink-0 px-3 text-[10px] font-black uppercase tracking-widest border-r"
          style={{ color: "#00ff87", borderColor: "rgba(0,255,135,0.2)", whiteSpace: "nowrap" }}
        >
          EN VIVO
        </div>
        <div className="overflow-hidden flex-1 relative">
          <div
            className="ticker-track flex gap-0 whitespace-nowrap text-[11px]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <span className="inline-block px-8">{tickerText}</span>
            <span className="inline-block px-8" aria-hidden="true">{tickerText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
