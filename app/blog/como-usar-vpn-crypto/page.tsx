import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Por qué necesitás una VPN para crypto: guía completa 2026",
  description:
    "Por qué los exchanges bloquean IPs según el país, cómo funciona una VPN, comparativa de NordVPN vs ProtonVPN vs ExpressVPN y cómo configurarla correctamente para crypto.",
  openGraph: {
    title: "Por qué necesitás una VPN para crypto: guía completa 2026",
    description:
      "Exchanges que bloquean tu país, DNS leaks, privacidad real: todo lo que necesitás saber sobre VPNs para usar crypto de forma segura en LATAM.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Crypto</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-dorado/10 text-dorado border-dorado/20">
              Crypto
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 13 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Por qué necesitás una VPN para crypto:{" "}
            <span className="text-dorado">guía completa 2026</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Un exchange que te bloquea por tu IP. Una transacción rechazada sin explicación. Tu proveedor
            de internet monitoreando cada sitio que visitás. Estos no son problemas teóricos: son la
            realidad diaria de millones de usuarios de crypto en LATAM. Una VPN bien configurada los
            resuelve todos. Pero mal configurada, te da una falsa sensación de seguridad que puede
            costarte caro.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Por qué los exchanges bloquean IPs según el país
            </h2>
            <p>
              Bybit, BitMEX, Binance Futures, Kraken Futures — todos tienen una lista de países desde
              los que directamente bloquean el acceso. No es capricho: es cumplimiento regulatorio
              obligatorio. Si un exchange opera bajo una licencia estadounidense o europea, tiene
              prohibido ofrecer ciertos productos financieros (como futuros o derivados con apalancamiento)
              a usuarios de determinados países.
            </p>
            <p className="mt-4">
              El método más sencillo de cumplir esa restricción es bloquear por IP geográfica. Tu
              dirección IP revela tu país aproximado. Si tu IP aparece como Argentina, Venezuela, Cuba
              o cualquier otro país en la lista negra de ese exchange, el acceso se deniega
              automáticamente — a veces con un mensaje de error genérico, a veces directamente sin
              explicación.
            </p>
            <p className="mt-4">
              Más allá de los exchanges, hay otros escenarios donde tu IP trabaja en tu contra:
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  caso: "Acceso a herramientas de análisis",
                  detalle: "Plataformas como Glassnode o Nansen tienen restricciones geográficas en algunos de sus planes.",
                },
                {
                  caso: "Prevención de vigilancia del ISP",
                  detalle: "Tu proveedor de internet puede ver qué sitios visitás. En algunos países, eso es información que puede ser solicitada por autoridades.",
                },
                {
                  caso: "Protección en redes Wi-Fi públicas",
                  detalle: "Aeropuertos, cafés, hoteles: redes donde alguien en la misma red puede interceptar tu tráfico no cifrado.",
                },
                {
                  caso: "Gestión de múltiples cuentas",
                  detalle: "Algunos traders profesionales necesitan IPs distintas para cuentas en diferentes jurisdicciones.",
                },
              ].map((item) => (
                <div key={item.caso} className="flex gap-4 p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div>
                    <p className="text-white font-bold mb-1">{item.caso}</p>
                    <p className="text-white/55 text-base">{item.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es una VPN y cómo funciona exactamente
            </h2>
            <p>
              VPN son las siglas de <strong className="text-white">Virtual Private Network</strong> —
              Red Privada Virtual. Cuando activás una VPN, todo tu tráfico de internet pasa por un
              servidor intermedio operado por la empresa de VPN, antes de llegar al destino final.
            </p>
            <p className="mt-4">
              El proceso técnico tiene tres pasos clave:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  paso: "1. Cifrado del tráfico en tu dispositivo",
                  detalle: "Antes de salir de tu computadora o teléfono, todo el tráfico se cifra con protocolos como AES-256 o ChaCha20. Tu ISP ve que enviás datos, pero no puede leer qué son.",
                },
                {
                  paso: "2. Ruteo por el servidor VPN",
                  detalle: "Tu tráfico llega cifrado al servidor VPN (que puede estar en otro país). El servidor lo descifra, lo envía a destino, recibe la respuesta, la cifra y te la manda de vuelta.",
                },
                {
                  paso: "3. IP del servidor como tu IP pública",
                  detalle: "El exchange, la plataforma o el sitio al que te conectás ve la IP del servidor VPN, no tu IP real. Si el servidor está en Países Bajos, aparecés como usuario de Países Bajos.",
                },
              ].map((p, i) => (
                <div key={i} className="p-5 bg-gris-medio rounded-xl border border-dorado/20">
                  <p className="text-dorado font-bold mb-2">{p.paso}</p>
                  <p className="text-white/55 text-base">{p.detalle}</p>
                </div>
              ))}
            </div>
            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                Importante: una VPN no te hace anónimo en internet. Te da privacidad ante tu ISP y
                cambia tu IP geográfica. El proveedor de VPN sí puede ver tu tráfico (por eso
                importa elegir uno de confianza). Y los sitios aún pueden rastrearte por cookies,
                fingerprinting y cuentas logueadas.
              </p>
            </div>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Las mejores VPNs para crypto: comparativa 2026
            </h2>
            <p>
              No todas las VPNs son iguales. Para uso en crypto, los factores que más importan son:
              política de no-logs verificada, velocidad de conexión (para que los trades no se retrasen),
              servidores en los países que necesitás y historial de privacidad comprobado.
            </p>

            <div className="mt-8 space-y-6">

              {/* NordVPN */}
              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/30">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">NordVPN</h3>
                    <p className="text-dorado text-sm font-bold">La opción más popular · Auditorías independientes</p>
                  </div>
                  <span className="text-white/20 text-sm">Desde ~$3.99/mes</span>
                </div>
                <p className="text-white/65 mb-4">
                  NordVPN es el líder del mercado con más de 6,400 servidores en 111 países. Tiene
                  política no-logs auditada de forma independiente por Deloitte, lo que la distingue de
                  muchos competidores que solo hacen la promesa sin verificación externa. Ofrece
                  servidores "Double VPN" (tu tráfico pasa por dos servidores encadenados) para máxima
                  privacidad.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Puntos fuertes</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· No-logs auditado por Deloitte</li>
                      <li>· Kill switch confiable (corta internet si cae la VPN)</li>
                      <li>· Obfuscated servers para países con censura fuerte</li>
                      <li>· Apps para todos los sistemas operativos</li>
                      <li>· 6 dispositivos simultáneos</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Puntos débiles</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· En 2018 tuvieron un incidente de seguridad menor (ya resuelto)</li>
                      <li>· Precio más alto que alternativas open source</li>
                      <li>· Empresa con sede en Panamá (fuera de 5/9/14 Eyes)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <p className="text-dorado text-sm font-bold">Ideal para: uso diario, exchanges con bloqueo geográfico, crypto trading</p>
                  <a
                    href="https://nordvpn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold bg-dorado text-oscuro px-4 py-2 rounded-full hover:bg-dorado/90 transition-colors shrink-0"
                  >
                    Ver NordVPN →
                  </a>
                </div>
              </div>

              {/* ProtonVPN */}
              <div className="p-6 bg-gris-medio rounded-xl border border-verde/30">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">ProtonVPN</h3>
                    <p className="text-verde text-sm font-bold">Open Source · La opción más transparente</p>
                  </div>
                  <span className="text-white/20 text-sm">Gratis / desde $4.99/mes</span>
                </div>
                <p className="text-white/65 mb-4">
                  ProtonVPN es desarrollada por el mismo equipo de ProtonMail, con sede en Suiza y
                  protegida por las leyes de privacidad suizas (una de las jurisdicciones más protectoras
                  del mundo). Lo que la distingue: todo su código es open source y auditado públicamente.
                  Cualquier persona puede revisar el código para verificar que no hay backdoors ni
                  vulnerabilidades ocultas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Puntos fuertes</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Completamente open source y auditado</li>
                      <li>· Sede en Suiza (fuera de 5/9/14 Eyes)</li>
                      <li>· Plan gratuito ilimitado (sin logs de ancho de banda)</li>
                      <li>· Servidores Secure Core (doble VPN con servidores propios)</li>
                      <li>· Tor sobre VPN integrado</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Puntos débiles</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· Menos servidores que NordVPN (~5,000 vs 6,400)</li>
                      <li>· Velocidad en el plan gratuito puede ser lenta en horas pico</li>
                      <li>· App más técnica, curva de aprendizaje mayor</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <p className="text-verde text-sm font-bold">Ideal para: usuarios que priorizan privacidad real y open source sobre comodidad</p>
                  <a
                    href="https://proton.me/vpn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold bg-verde text-oscuro px-4 py-2 rounded-full hover:bg-verde/90 transition-colors shrink-0"
                  >
                    Ver ProtonVPN →
                  </a>
                </div>
              </div>

              {/* ExpressVPN */}
              <div className="p-6 bg-gris-medio rounded-xl border border-white/20">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">ExpressVPN</h3>
                    <p className="text-white/50 text-sm font-bold">Velocidad máxima · La más rápida del mercado</p>
                  </div>
                  <span className="text-white/20 text-sm">Desde $6.67/mes</span>
                </div>
                <p className="text-white/65 mb-4">
                  ExpressVPN tiene reputación de ser la VPN más rápida del mercado, especialmente
                  importante si hacés trading activo donde la latencia importa. Tiene servidores en
                  105 países y su propio protocolo Lightway (basado en WireGuard) optimizado para
                  velocidad. Sin embargo, fue adquirida por Kape Technologies en 2021, lo que generó
                  cuestionamientos de parte de la comunidad de privacidad.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-verde/60 text-xs uppercase tracking-widest mb-2">Puntos fuertes</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· La velocidad más alta del mercado</li>
                      <li>· Protocolo Lightway propio, muy eficiente</li>
                      <li>· 105 países disponibles</li>
                      <li>· Muy buena app en móvil</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400/60 text-xs uppercase tracking-widest mb-2">Puntos débiles</p>
                    <ul className="space-y-1 text-white/55 text-sm">
                      <li>· La más cara del mercado</li>
                      <li>· Adquirida por Kape Technologies (historial controvertido en ad-tech)</li>
                      <li>· Código no es open source</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/60 text-sm font-bold">Ideal para: traders que priorizan velocidad y rendimiento sobre privacidad máxima</p>
              </div>

            </div>

            {/* Tabla comparativa */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white/40 font-semibold">VPN</th>
                    <th className="text-center py-3 px-3 text-white/40 font-semibold">No-logs</th>
                    <th className="text-center py-3 px-3 text-white/40 font-semibold">Open Source</th>
                    <th className="text-center py-3 px-3 text-white/40 font-semibold">Velocidad</th>
                    <th className="text-right py-3 pl-3 text-white/40 font-semibold">Precio/mes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { nombre: "NordVPN", logs: "Auditado", open: "No", vel: "Muy alta", precio: "$3.99" },
                    { nombre: "ProtonVPN", logs: "Auditado", open: "Sí", vel: "Alta", precio: "$4.99 / Gratis" },
                    { nombre: "ExpressVPN", logs: "Verificado", open: "No", vel: "Máxima", precio: "$6.67" },
                  ].map((row) => (
                    <tr key={row.nombre}>
                      <td className="py-3 pr-4 text-white font-semibold">{row.nombre}</td>
                      <td className="text-center py-3 px-3 text-verde/80">{row.logs}</td>
                      <td className="text-center py-3 px-3 text-white/60">{row.open}</td>
                      <td className="text-center py-3 px-3 text-white/60">{row.vel}</td>
                      <td className="text-right py-3 pl-3 text-dorado font-semibold">{row.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo configurar una VPN para crypto: paso a paso
            </h2>
            <p>
              Instalar una VPN toma 5 minutos. Configurarla correctamente para usarla con crypto requiere
              prestar atención a unos pocos detalles extra:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  paso: "1. Elegí el servidor correcto",
                  detalle: "Para acceder a exchanges con bloqueo geográfico, elegí un servidor en un país donde el exchange opera libremente: Países Bajos, Alemania, Suiza o Singapur son buenas opciones.",
                  alerta: false,
                },
                {
                  paso: "2. Activá el Kill Switch antes de conectarte",
                  detalle: "El Kill Switch es la función más crítica para crypto: si la conexión VPN cae por algún motivo, el Kill Switch corta automáticamente todo el tráfico de internet. Sin esto, tu IP real podría exponerse brevemente sin que te des cuenta.",
                  alerta: true,
                },
                {
                  paso: "3. Usá el protocolo WireGuard o el equivalente del proveedor",
                  detalle: "WireGuard es el protocolo más moderno y eficiente disponible. NordVPN lo llama NordLynx, ExpressVPN usa Lightway. Evitá OpenVPN (más lento) y PPTP (inseguro).",
                  alerta: false,
                },
                {
                  paso: "4. Verificá que tu DNS no se filtre",
                  detalle: "Antes de usar el exchange, visitá dnsleaktest.com o ipleak.net. Deberías ver la IP del servidor VPN y servidores DNS de tu proveedor VPN. Si ves tu IP real o los DNS de tu ISP, hay una filtración.",
                  alerta: true,
                },
                {
                  paso: "5. Mantené la misma IP durante toda la sesión",
                  detalle: "Los exchanges tienen sistemas antifraude que detectan cambios de IP durante la misma sesión. Si la VPN cambia tu servidor automáticamente, el exchange podría bloquear temporalmente tu cuenta. Desactivá la rotación automática de servidores.",
                  alerta: false,
                },
              ].map((p, i) => (
                <div key={i} className={`p-5 bg-gris-medio rounded-xl border ${p.alerta ? "border-red-400/30" : "border-white/5"}`}>
                  <p className={`font-bold mb-2 ${p.alerta ? "text-red-400" : "text-white"}`}>{p.paso}</p>
                  <p className="text-white/55 text-base">{p.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los riesgos de usar VPN mal configurada: DNS leaks y otros problemas
            </h2>
            <p>
              Una VPN mal configurada puede ser peor que no usar VPN: te da una sensación de seguridad
              que no existe. Los problemas más comunes:
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  problema: "DNS Leak (filtración de DNS)",
                  descripcion: "Cuando tu computadora usa los servidores DNS de tu ISP en lugar de los del proveedor VPN. Aunque tu tráfico va por la VPN, las consultas DNS (básicamente: 'qué IP corresponde a este dominio') revelan qué sitios visitás a tu proveedor de internet.",
                  solucion: "Verificar en dnsleaktest.com. Si hay filtración, activar 'DNS Leak Protection' en la configuración de la VPN o configurar manualmente los DNS del proveedor (ProtonVPN tiene sus propios DNS).",
                },
                {
                  problema: "WebRTC Leak",
                  descripcion: "Los navegadores tienen una tecnología llamada WebRTC que puede revelar tu IP real aunque tengas una VPN activa. Afecta principalmente a Chrome y Firefox.",
                  solucion: "Instalar la extensión 'WebRTC Leak Prevent' en tu navegador, o usar Brave (que bloquea WebRTC por defecto). Verificar en browserleaks.com/webrtc.",
                },
                {
                  problema: "VPN que registra tus logs",
                  descripcion: "Muchas VPNs gratuitas (y algunas pagas) guardan logs de tu actividad que pueden ser solicitados por autoridades legales o vendidos a terceros. Hay casos documentados de VPNs 'sin logs' que entregaron datos a la justicia.",
                  solucion: "Usar solo VPNs con política no-logs auditada externamente: NordVPN (Deloitte), ProtonVPN (auditoría pública). Si la VPN no tiene auditoría externa, no confiés solo en su palabra.",
                },
                {
                  problema: "VPN que cae sin Kill Switch",
                  descripcion: "Las conexiones VPN pueden caerse por actualizaciones del sistema, cambios de red o inestabilidades del proveedor. Sin Kill Switch, tu tráfico real se expone durante esos segundos sin que veas ninguna advertencia.",
                  solucion: "Activar Kill Switch siempre antes de conectarte. Testear que funciona: activar la VPN, activar Kill Switch, desactivar la VPN manualmente — deberías perder conexión a internet hasta reconectarte.",
                },
              ].map((item) => (
                <div key={item.problema} className="p-5 bg-gris-medio rounded-xl border border-red-400/20">
                  <p className="text-white font-bold mb-2">{item.problema}</p>
                  <p className="text-white/55 text-sm mb-3">{item.descripcion}</p>
                  <p className="text-verde/70 text-sm">
                    <strong className="text-verde/90">Solución:</strong> {item.solucion}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              VPN y privacidad general: más allá de los exchanges
            </h2>
            <p>
              La privacidad en crypto no termina en el exchange. Una VPN mejora tu perfil de privacidad
              en múltiples dimensiones que afectan directamente a quienes manejan activos digitales:
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  titulo: "Protección en Wi-Fi públicos",
                  desc: "Nunca accedas a tu exchange o wallet desde una red pública sin VPN. Con herramientas básicas disponibles en GitHub, alguien en la misma red puede interceptar tráfico no cifrado.",
                },
                {
                  titulo: "Privacidad ante tu ISP",
                  desc: "Tu proveedor de internet sabe exactamente qué sitios visitás. Esa información puede ser vendida a anunciantes o solicitada por autoridades. Una VPN cifra el contenido de tu tráfico, aunque el ISP sí ve que usás una VPN.",
                },
                {
                  titulo: "Reducción de fingerprinting",
                  desc: "Cambiar tu IP hace más difícil que los brokers de datos construyan un perfil detallado de tus hábitos de navegación vinculados a tu ubicación real.",
                },
                {
                  titulo: "Acceso a investigación sin restricciones",
                  desc: "Algunas publicaciones y herramientas de análisis de crypto tienen contenido geo-restringido. Una VPN da acceso a la información más completa disponible.",
                },
              ].map((item) => (
                <div key={item.titulo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-dorado font-bold mb-2">{item.titulo}</p>
                  <p className="text-white/55 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              La VPN no es opcional en 2026
            </h2>
            <p>
              Si usás crypto de forma regular — exchanges, DeFi, wallets, análisis de mercado — una
              VPN bien configurada es una parte básica de tu setup de seguridad. No es una herramienta
              para hacer cosas ilegales: es una herramienta para mantener la privacidad de tus finanzas
              en un entorno donde la vigilancia digital es la norma.
            </p>
            <p className="mt-4">
              La recomendación práctica: si querés la opción más sencilla y confiable, empezá con
              NordVPN. Si valorás el open source y la máxima transparencia sobre todo, ProtonVPN
              (incluso con el plan gratuito) es la mejor opción del mercado.
            </p>
            <p className="mt-4">
              En cualquier caso, configurá el Kill Switch desde el primer día y verificá que no haya
              DNS leaks antes de usarla con crypto. Esos dos pasos convierten una VPN mediocre en una
              herramienta de privacidad real.
            </p>
            <p className="mt-4">
              En <strong className="text-dorado">La Impresora</strong> cubrimos seguridad, privacidad
              y crypto para que tomes decisiones informadas con tus activos digitales.
            </p>
          </section>

        </article>

        {/* CTA interno */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Crypto y privacidad explicados para LATAM</p>
          <p className="text-white/50 mb-6">
            Cada jueves: seguridad, educación y oportunidades en crypto. Sin spam. Gratis para siempre.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-dorado text-oscuro font-black px-8 py-4 rounded-full hover:bg-dorado/90 transition-all"
          >
            Suscribirme gratis →
          </a>
        </div>

        {/* Más artículos */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-white font-black text-xl mb-6">Seguí leyendo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/wallets-crypto-cuales-son-mejores" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Las mejores wallets de crypto en 2026: guía completa para LATAM</p>
            </Link>
            <Link href="/blog/impuestos-crypto-por-pais" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-dorado font-bold">Crypto</span>
              <p className="text-white font-bold mt-2 leading-tight">Impuestos sobre crypto por país: Argentina, México, Colombia y España 2026</p>
            </Link>
          </div>
        </div>

      </div>

      <div className="mt-24">
        <Newsletter />
      </div>
    </div>
  );
}
