export const metadata = {
  title: "Política de Privacidad — La Impresora",
};

export default function PrivacidadPage() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-2">Política de Privacidad</h1>
        <p className="text-white/30 text-sm mb-12">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-white/60 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-white mb-3">1. Información que recopilamos</h2>
            <p>Cuando te suscribís al newsletter de La Impresora, recopilamos tu dirección de email. No recopilamos nombre, dirección física, ni información de pago (el newsletter es gratuito).</p>
            <p className="mt-3">Si en el futuro ofrecemos contenido de pago, los datos de pago son procesados por terceros (Stripe, Hotmart) y nunca almacenados en nuestros servidores.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">2. Cómo usamos tu información</h2>
            <p>Tu email se usa exclusivamente para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Enviarte el newsletter semanal de La Impresora</li>
              <li>Comunicaciones sobre cambios importantes en el servicio</li>
              <li>Ocasionalmente, información sobre productos o sponsors relevantes</li>
            </ul>
            <p className="mt-3">No vendemos, alquilamos ni compartimos tu email con terceros para sus propios fines de marketing.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">3. Plataforma de newsletter</h2>
            <p>Usamos Beehiiv como plataforma de envío de emails. Tu dirección de email es almacenada en los servidores de Beehiiv. Podés revisar su política de privacidad en beehiiv.com/privacy.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">4. Cookies</h2>
            <p>Este sitio usa cookies mínimas y necesarias para su funcionamiento. No usamos cookies de tracking de terceros ni publicidad basada en comportamiento.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">5. Links de afiliados</h2>
            <p>Algunos links en el sitio y el newsletter son links de afiliados. Cuando hacés una compra a través de ellos, recibimos una comisión sin costo adicional para vos. Siempre lo indicamos claramente.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">6. Tus derechos</h2>
            <p>Podés darte de baja del newsletter en cualquier momento usando el link de desuscripción en cualquier email que recibás. Para solicitar la eliminación completa de tus datos, escribinos a privacidad@laimpresora.io.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">7. Contacto</h2>
            <p>Para consultas sobre esta política: <a href="mailto:privacidad@laimpresora.io" className="text-verde hover:underline">privacidad@laimpresora.io</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
