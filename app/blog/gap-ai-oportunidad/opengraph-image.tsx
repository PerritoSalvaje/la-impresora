import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "El gap que nadie ve: la AI puede hacer el 80% de tu trabajo | La Impresora #001";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#00FF8520",
              border: "1px solid #00FF8540",
              color: "#00FF85",
              fontSize: "14px",
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: "999px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            AI PARA GANAR PLATA
          </div>
          <span
            style={{
              color: "#ffffff40",
              fontSize: "14px",
              fontFamily: "monospace",
            }}
          >
            #001 — 29 Abril 2026
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            El gap que nadie ve: la AI puede hacer el{" "}
            <span style={{ color: "#00FF85" }}>80%</span> de tu trabajo
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#ffffff60",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            El estudio que muestra la oportunidad más grande de la década —
            y cómo aprovecharlo desde LATAM.
          </div>
        </div>

        {/* Bottom: logo / branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: 900,
              color: "#00FF85",
              letterSpacing: "-0.02em",
            }}
          >
            La Impresora
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#ffffff30",
            }}
          >
            laimpresora.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
