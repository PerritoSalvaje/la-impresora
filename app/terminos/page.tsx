export const metadata = {
  title: "Términos y Condiciones — La Impresora",
};

export default function TerminosPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-2">Términos y Condiciones</h1>
        <p className="text-white/30 text-sm mb-12">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-white mb-3">1. Aceptación de los términos</h2>
            <p>Al suscribirte al newsletter o usar el sitio web de La Impresora, aceptás estos términos. Si no estás de acuerdo, por favor no uses nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">2. Naturaleza del contenido</h2>
            <p>El contenido de La Impresora (newsletter, blog, videos, libros) es exclusivamente informativo y educativo. <strong className="text-white">No constituye asesoramiento financiero, de inversión, legal o impositivo.</strong></p>
            <p className="mt-3">Las opiniones expresadas son de carácter general y no tienen en cuenta tu situación financiera personal. Siempre consultá con un profesional calificado antes de tomar decisiones financieras.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">3. Riesgos de inversión</h2>
            <p>Las criptomonedas, DeFi y activos digitales conllevan riesgos significativos incluyendo la pérdida total del capital invertido. El rendimiento pasado no garantiza resultados futuros. La Impresora no se hace responsable de pérdidas derivadas de decisiones tomadas basándose en nuestro contenido.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">4. Links de afiliados y sponsors</h2>
            <p>Podemos recibir compensación económica por recomendaciones de productos y servicios a través de links de afiliados o acuerdos de sponsorship. Esto no afecta nuestra independencia editorial, pero lo divulgamos en cumplimiento de las buenas prácticas de transparencia.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">5. Propiedad intelectual</h2>
            <p>Todo el contenido de La Impresora (textos, diseños, logos) es propiedad de La Impresora / Wendy OS. Podés compartir fragmentos citando la fuente, pero no podés reproducir contenido completo sin autorización expresa.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">6. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios son efectivos desde su publicación en este sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">7. Contacto</h2>
            <p><a href="mailto:hola@laimpresora.io" className="text-verde hover:underline">hola@laimpresora.io</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
