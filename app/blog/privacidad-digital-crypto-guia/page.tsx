import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Privacidad digital y crypto: cómo proteger tu identidad y tu dinero en 2026",
  description:
    "Por qué la privacidad importa en crypto, rastreo de wallets y blockchain analytics, VPNs, wallets de privacidad (Monero, Zcash), seguridad operacional, CBDCs y 1Password para exchanges.",
  openGraph: {
    title: "Privacidad digital y crypto: cómo proteger tu identidad y tu dinero en 2026",
    description:
      "Por qué la privacidad importa en crypto, rastreo de wallets y blockchain analytics, VPNs, wallets de privacidad (Monero, Zcash), seguridad operacional, CBDCs y 1Password para exchanges.",
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
          <span>Seguridad</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-verde/10 text-verde border-verde/20">
              Seguridad
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 10 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Privacidad digital y crypto:{" "}
            <span className="text-verde">cómo proteger</span>{" "}
            tu identidad y tu dinero en 2026
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Bitcoin es pseudónimo, no anónimo. Cada transacción que hacés queda grabada para
            siempre en una blockchain pública que cualquier gobierno, empresa o hacker puede
            analizar. Si manejás capital significativo en crypto, la privacidad no es opcional —
            es el primer componente de tu seguridad.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Intro: rastreo */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El mito de la privacidad en crypto: por qué Bitcoin no es anónimo
            </h2>
            <p>
              Cuando le explicás crypto a alguien por primera vez y decís "es descentralizado
              y privado", estás siendo técnicamente incorrecto. Bitcoin es descentralizado.
              Pero es radicalmente transparente: cada transacción, cada saldo, cada movimiento
              entre wallets está grabado en una blockchain pública que cualquiera puede ver.
            </p>
            <p className="mt-4">
              Lo que hace a Bitcoin pseudónimo (no anónimo) es que las wallets son direcciones
              alfanuméricas, no nombres. Pero la pseudonimidad tiene una vida útil: en el
              momento que conectás tu identidad real con una dirección —al comprar en un
              exchange con KYC, recibir pago de un empleador, o pagar con una tarjeta crypto—
              toda la historia de esa dirección se vuelve rastreable hasta vos.
            </p>

            <div className="my-6 p-5 bg-gris-medio rounded-xl border border-white/10">
              <p className="text-white font-bold mb-3">Cómo funciona el rastreo blockchain en la práctica</p>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-start gap-3">
                  <span className="text-verde font-bold shrink-0">Paso 1</span>
                  <span>Comprás BTC en Binance con tu DNI (KYC). Esa dirección queda asociada a tu identidad en los registros de Binance.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-verde font-bold shrink-0">Paso 2</span>
                  <span>Retirás a tu wallet personal. La transacción es pública: de la dirección de Binance a tu dirección.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-verde font-bold shrink-0">Paso 3</span>
                  <span>Mandás a otra wallet. Esa también queda vinculada a tu identidad por el análisis de clustering.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-verde font-bold shrink-0">Paso 4</span>
                  <span>Empresas como Chainalysis pueden reconstruir el grafo completo de transacciones y vincularlo con tu identidad real.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Blockchain analytics */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Blockchain analytics: quién te está mirando y por qué
            </h2>
            <p>
              Chainalysis, Elliptic y TRM Labs son las tres empresas líderes en análisis de
              blockchain. Trabajan con más de 500 clientes institucionales: la DEA, el FBI,
              el IRS, la INTERPOL, y la mayoría de los exchanges regulados del mundo.
            </p>
            <p className="mt-4">
              Sus herramientas pueden rastrear movimientos de crypto a través de miles de
              transacciones, identificar clusters de wallets relacionadas, detectar mezcladoras
              (mixers) y marcar wallets asociadas a actividades ilícitas. Cuando un exchange
              recibe un depósito de una wallet "marcada", puede congelar automáticamente los fondos.
            </p>
            <p className="mt-4">
              Esto no es solo un problema para los criminales. Significa que si recibiste fondos
              de alguien que a su vez recibió de alguien sospechoso —sin que lo supieras— tus
              fondos pueden ser marcados y congelados en un exchange regulado. Se llama
              "contaminación de crypto" y le pasa a usuarios completamente legítimos.
            </p>

            <div className="my-6 border-l-4 border-red-400 pl-6 bg-red-400/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                La privacidad en crypto no es sobre esconder actividades ilegales — es sobre
                preservar la fungibilidad del dinero. Un billete de $100 no tiene historial.
                Un Bitcoin, sin privacidad, sí lo tiene.
              </p>
            </div>
          </section>

          {/* VPNs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              VPNs: la primera capa de privacidad digital
            </h2>
            <p>
              Una VPN (Virtual Private Network) enruta tu tráfico de internet a través de un
              servidor en otro país, ocultando tu IP real y cifrando tus comunicaciones. Para
              los usuarios de crypto, tiene tres usos prácticos concretos:
            </p>

            <div className="mt-5 space-y-4">
              {[
                {
                  uso: "Acceder a exchanges con restricciones geográficas",
                  desc: "Algunos exchanges no están disponibles en ciertos países de LATAM o tienen funcionalidades restringidas. Con una VPN con IP en EE.UU., España o Europa podés acceder sin restricciones. Importante: verificá los términos del exchange para tu jurisdicción.",
                },
                {
                  uso: "Proteger tu conexión en redes públicas",
                  desc: "Aeropuertos, cafés, coworkings, hoteles — las redes WiFi públicas son vectores de ataque conocidos. Sin VPN, un atacante en la misma red puede interceptar tu tráfico y potencialmente acceder a tus sesiones de exchange. Con VPN, el tráfico va cifrado.",
                },
                {
                  uso: "Separar tu identidad online de tu actividad crypto",
                  desc: "Tu proveedor de internet puede ver qué exchanges visitás y cuándo. Con VPN, esa información no está disponible. Para usuarios en países con regulaciones ambiguas o gobiernos autoritarios, esto puede ser relevante.",
                },
              ].map((u) => (
                <div key={u.uso} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-verde font-bold mb-2">{u.uso}</p>
                  <p className="text-white/50 text-sm">{u.desc}</p>
                </div>
              ))}
            </div>

            {/* NordVPN CTA */}
            <div className="mt-6 p-6 bg-gris-medio rounded-xl border border-blue-400/20">
              <p className="text-blue-400 font-black text-lg mb-2">NordVPN — La recomendación para crypto</p>
              <p className="text-white/60 text-sm mb-4">
                6,000+ servidores en 60+ países. Sin registros de actividad (auditoría independiente
                verificada). Integración con Tor para máxima privacidad. Funciona en dispositivos
                móviles, desktop y routers. Con la función "Threat Protection" bloquea malware y
                trackers mientras navegás.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://nordvpn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary text-sm"
                  style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.3)" }}
                >
                  Ver NordVPN →
                </a>
                <span className="text-white/30 text-xs">Desde $3.99/mes (plan anual)</span>
              </div>
            </div>
          </section>

          {/* Wallets de privacidad */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Wallets de privacidad: Monero y Zcash
            </h2>
            <p>
              Si Bitcoin es pseudónimo, Monero y Zcash son las criptomonedas diseñadas desde
              el principio para la privacidad real. No son herramientas marginales — tienen
              casos de uso legítimos en periodismo, negocios confidenciales y protección
              de capital en regímenes autoritarios.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 bg-gris-medio rounded-xl border border-orange-400/20">
                <p className="text-orange-400 font-black text-lg mb-2">Monero (XMR)</p>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Privacidad por defecto</p>
                <div className="space-y-2 text-sm text-white/60">
                  <p>· <span className="text-white/80">Ring Signatures:</span> mezclá automáticamente tu transacción con otras, haciendo imposible identificar el origen</p>
                  <p>· <span className="text-white/80">Stealth Addresses:</span> cada transacción genera una dirección única de un solo uso</p>
                  <p>· <span className="text-white/80">RingCT:</span> oculta el monto de las transacciones</p>
                  <p className="text-orange-400/70 mt-3">Resultado: rastreable por nadie, ni analistas blockchain</p>
                </div>
              </div>
              <div className="p-6 bg-gris-medio rounded-xl border border-blue-400/20">
                <p className="text-blue-400 font-black text-lg mb-2">Zcash (ZEC)</p>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Privacidad opcional</p>
                <div className="space-y-2 text-sm text-white/60">
                  <p>· <span className="text-white/80">zk-SNARKs:</span> pruebas de conocimiento cero que demuestran validez sin revelar datos</p>
                  <p>· <span className="text-white/80">Shielded transactions:</span> opción de transacción completamente privada</p>
                  <p>· <span className="text-white/80">Transparent mode:</span> compatible con exchanges regulados cuando necesitás</p>
                  <p className="text-blue-400/70 mt-3">Respaldado por Electric Coin Company e investigación académica formal</p>
                </div>
              </div>
            </div>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-3">Advertencia importante</p>
              <p className="text-white/60 text-sm">
                Monero está delistado de los principales exchanges regulados por presión de reguladores.
                No podés comprar XMR directamente en Binance o Coinbase en muchos países. Se compra en
                exchanges P2P (LocalMonero, Bisq) o intercambiando BTC/ETH por XMR en exchanges
                no-custodiales. Zcash sí está disponible en exchanges principales.
              </p>
            </div>
          </section>

          {/* Mejores prácticas de OpSec */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Seguridad operacional (OpSec): las prácticas que no son negociables
            </h2>
            <p>
              La mayoría de los hacks y robos en crypto no son ataques técnicos sofisticados —
              son errores humanos evitables. Estas son las prácticas de seguridad operacional
              que cualquier holder serio debe implementar:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  practica: "Separación de wallets por propósito",
                  nivel: "Crítico",
                  desc: "Una wallet para trading activo y exchanges. Una wallet diferente para ahorros long-term. Una wallet fría (hardware) para montos importantes. Nunca mezclés todas las funciones en una sola dirección. Si una se compromete, las otras están intactas.",
                  color: "border-red-400/20",
                  tagColor: "text-red-400",
                },
                {
                  practica: "2FA con app autenticadora, no SMS",
                  nivel: "Crítico",
                  desc: "El 2FA por SMS es vulnerable a SIM-swapping: un atacante convence a tu operadora de clonar tu SIM y recibe tus códigos. Usá siempre Google Authenticator, Authy o un hardware key (YubiKey) para todos los exchanges.",
                  color: "border-red-400/20",
                  tagColor: "text-red-400",
                },
                {
                  practica: "Email dedicado para exchanges",
                  nivel: "Importante",
                  desc: "Usá un email diferente al personal para todos tus exchanges y servicios crypto. Si hackean tu email personal, no tienen acceso automático a tus cuentas de exchange. Con un alias de Proton Mail o SimpleLogin podés crear emails ilimitados.",
                  color: "border-dorado/20",
                  tagColor: "text-dorado",
                },
                {
                  practica: "No hables de tus posiciones en público",
                  nivel: "Importante",
                  desc: "El 'wrench attack' es real: si alguien sabe que tenés $50,000 en crypto, sos un objetivo físico. No postees tus ganancias, no menciones tus posiciones en conversaciones casuales, y nunca conectés tu identidad pública con tus wallets.",
                  color: "border-dorado/20",
                  tagColor: "text-dorado",
                },
                {
                  practica: "Seed phrase física, offline y en dos lugares",
                  nivel: "Fundamental",
                  desc: "Tu seed phrase (12-24 palabras) es tu crypto. Guardala escrita en papel o grabada en metal (más resistente) en dos lugares físicamente separados. Nunca en digital: no en fotos, no en notas de teléfono, no en la nube. Nunca.",
                  color: "border-red-400/20",
                  tagColor: "text-red-400",
                },
              ].map((p) => (
                <div key={p.practica} className={`p-5 bg-gris-medio rounded-xl border ${p.color}`}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{p.practica}</p>
                    <span className={`text-xs font-bold shrink-0 ${p.tagColor}`}>{p.nivel}</span>
                  </div>
                  <p className="text-white/50 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 1Password */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Gestionar múltiples exchange accounts: por qué necesitás un password manager
            </h2>
            <p>
              El usuario promedio de crypto tiene cuentas en 5-10 plataformas diferentes: exchanges,
              DeFi, wallets de software, servicios de staking. Cada una requiere credenciales únicas
              (no reutilices contraseñas) y 2FA. Gestionar esto manualmente es imposible y la
              solución manual —usar contraseñas similares o débiles— es peligrosa.
            </p>
            <p className="mt-4">
              Un gestor de contraseñas resuelve esto: genera contraseñas fuertes y únicas para cada
              plataforma, las guarda cifradas con tu master password, y las completa automáticamente.
              Tu cerebro solo necesita recordar una contraseña fuerte.
            </p>

            {/* 1Password CTA */}
            <div className="mt-6 p-6 bg-gris-medio rounded-xl border border-dorado/20">
              <p className="text-dorado font-black text-lg mb-2">1Password — El estándar para crypto</p>
              <p className="text-white/60 text-sm mb-3">
                Cifrado de conocimiento cero: ni 1Password puede ver tus contraseñas. Funciona en
                todos los dispositivos (iOS, Android, Mac, Windows, Linux). Guardá seeds phrases
                como notas seguras, activá alertas de breach para tus emails, y usá el generador
                de contraseñas para cada exchange. La función Travel Mode te permite ocultar datos
                sensibles al pasar fronteras.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://1password.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary text-sm"
                >
                  Ver 1Password →
                </a>
                <span className="text-white/30 text-xs">Desde $2.99/mes · 14 días de prueba gratis</span>
              </div>
            </div>

            <div className="mt-5 p-5 bg-gris-medio rounded-xl border border-white/5">
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-3">Alternativas gratuitas</p>
              <div className="space-y-2 text-sm text-white/60">
                <p>· <span className="text-white/80">Bitwarden</span> — Open source, gratuito, auditoría independiente. Excelente para usuarios técnicos.</p>
                <p>· <span className="text-white/80">KeePassXC</span> — Local, sin nube, máximo control. Requiere backup manual de la base de datos.</p>
              </div>
            </div>
          </section>

          {/* CBDCs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              CBDCs y el riesgo del dinero programable
            </h2>
            <p>
              Las CBDCs (Central Bank Digital Currencies) son la respuesta de los gobiernos al
              ecosistema crypto. China ya tiene el yuan digital con más de 200 millones de usuarios.
              El Banco Central Europeo está probando el euro digital. El Fed explora el dólar digital.
            </p>
            <p className="mt-4">
              La diferencia fundamental con crypto descentralizado: las CBDCs son dinero
              programable con control total del emisor. Eso significa que el gobierno puede:
            </p>

            <div className="mt-5 space-y-3">
              {[
                { capacidad: "Congelar o confiscar saldos instantáneamente", riesgo: "Muy alto", color: "text-red-400" },
                { capacidad: "Establecer fecha de vencimiento al dinero (para forzar gasto)", riesgo: "Alto", color: "text-red-400" },
                { capacidad: "Restringir categorías de gasto (no podés comprar crypto, armas, etc.)", riesgo: "Alto", color: "text-red-400" },
                { capacidad: "Ver cada transacción y vincularla a tu identidad real", riesgo: "Muy alto", color: "text-red-400" },
                { capacidad: "Implementar impuestos automáticos en cada transacción", riesgo: "Medio", color: "text-dorado" },
              ].map((c) => (
                <div key={c.capacidad} className="flex items-center justify-between gap-4 p-4 bg-gris-medio rounded-xl border border-white/5">
                  <p className="text-white/60 text-sm">{c.capacidad}</p>
                  <span className={`text-xs font-bold shrink-0 ${c.color}`}>{c.riesgo}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-white/60">
              Bitcoin y las criptomonedas privadas son tecnológicamente incompatibles con este nivel
              de control. No por accidente — por diseño deliberado. La privacidad financiera que Bitcoin
              ofrece se vuelve cada vez más valiosa en un mundo donde el dinero digital gubernamental
              implica vigilancia total.
            </p>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              La privacidad no es paranoia. Es soberanía.
            </h2>
            <p>
              La promesa original de Bitcoin fue la de un dinero soberano: sin bancos, sin gobiernos,
              sin intermediarios que puedan congelarte la cuenta. Esa promesa solo se cumple si la
              privacidad es parte de la práctica, no solo de la teoría.
            </p>
            <p className="mt-4">
              No necesitás implementar todo de una vez. El stack mínimo viable: una VPN confiable,
              un gestor de contraseñas, 2FA con app autenticadora (no SMS), y hardware wallet para
              ahorros importantes. Eso solo elimina el 90% de los vectores de ataque más comunes.
            </p>
            <p className="mt-4">
              La privacidad no es sobre esconder actividades ilegales. Es sobre preservar la capacidad
              de operar sin interferencia. En un mundo donde los CBDCs avanzan y la vigilancia
              financiera se normaliza, esa capacidad se vuelve cada vez más escasa y más valiosa.
            </p>
          </section>

        </article>

        {/* CTA Newsletter */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Seguridad, privacidad y crypto — cada jueves en tu email</p>
          <p className="text-white/50 mb-6">
            Lo que necesitás saber para proteger tu capital en la economía digital. Sin spam.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-dorado text-oscuro font-black px-8 py-4 rounded-full hover:bg-dorado/90 transition-all"
          >
            Suscribirme gratis →
          </a>
        </div>

        {/* Afiliados */}
        <div className="mt-10 p-6 bg-gris-medio rounded-2xl border border-white/5">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Herramientas recomendadas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://nordvpn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-colors"
            >
              <div>
                <p className="text-blue-400 font-bold">NordVPN</p>
                <p className="text-white/40 text-xs">VPN para acceso y privacidad</p>
              </div>
              <span className="text-blue-400 ml-auto">→</span>
            </a>
            <a
              href="https://1password.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-dorado/20 hover:border-dorado/40 transition-colors"
            >
              <div>
                <p className="text-dorado font-bold">1Password</p>
                <p className="text-white/40 text-xs">Gestión de credenciales y seeds</p>
              </div>
              <span className="text-dorado ml-auto">→</span>
            </a>
          </div>
        </div>

        {/* Más artículos */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-white font-black text-xl mb-6">Seguí leyendo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/los-mayores-fraudes-crypto-historia" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-red-400 font-bold">Fraudes</span>
              <p className="text-white font-bold mt-2 leading-tight">Los mayores fraudes crypto de la historia: FTX, Luna, OneCoin y más</p>
            </Link>
            <Link href="/blog/geopolitica-y-criptomonedas" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-blue-400 font-bold">Geopolítica</span>
              <p className="text-white font-bold mt-2 leading-tight">Geopolítica y crypto: cómo las guerras y sanciones mueven el mercado</p>
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
