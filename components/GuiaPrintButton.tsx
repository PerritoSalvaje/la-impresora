"use client";

export default function GuiaPrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-primary"
      aria-label="Imprimir o guardar como PDF"
    >
      📥 Descargar como PDF
    </button>
  );
}
