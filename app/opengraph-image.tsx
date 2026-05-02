import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "La Impresora — Aprendé a imprimir tu propia plata";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(0,230,118,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,184,0,0.1) 0%, transparent 50%)",
          padding: "80px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div style={{ fontSize: 56 }}>🖨️</div>
          <div
            style={{
              color: "#f0f0ef",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            La Impresora
          </div>
        </div>

        <div
          style={{
            color: "#f0f0ef",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "1000px",
          }}
        >
          Aprendé a imprimir
          <div style={{ color: "#00e676" }}>tu propia plata.</div>
        </div>

        <div
          style={{
            color: "rgba(240,240,239,0.6)",
            fontSize: 28,
            marginTop: "32px",
            display: "flex",
            gap: "16px",
          }}
        >
          <span>Crypto</span>
          <span style={{ color: "rgba(240,240,239,0.3)" }}>·</span>
          <span>AI</span>
          <span style={{ color: "rgba(240,240,239,0.3)" }}>·</span>
          <span>Tokenización</span>
          <span style={{ color: "rgba(240,240,239,0.3)" }}>·</span>
          <span>LATAM</span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            color: "rgba(240,240,239,0.4)",
            fontSize: 22,
          }}
        >
          laimpresora.io
        </div>
      </div>
    ),
    { ...size }
  );
}
