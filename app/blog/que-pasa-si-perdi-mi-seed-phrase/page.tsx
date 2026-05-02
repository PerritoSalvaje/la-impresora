import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "¿Qué pasa si perdí mi seed phrase? Verdad incómoda + plan B",
  description:
    "Si perdiste la seed phrase de tu wallet crypto y no tenés acceso a la wallet, los fondos están perdidos. Sin excepciones. Acá: por qué, qué se puede recuperar y cómo evitar que pase de nuevo.",
  openGraph: {
    title: "¿Qué pasa si perdí mi seed phrase? Verdad incómoda",
    description: "Sin seed = sin acceso. Por qué, qué se puede recuperar, plan B.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="perdi-seed-article"
        data={[
          articleSchema({
            title: "¿Qué pasa si perdí mi seed phrase? Verdad incómoda + plan B",
            description: "Sin seed phrase y sin acceso a la wallet, los fondos están perdidos. Sin excepciones.",
            slug: "que-pasa-si-perdi-mi-seed-phrase",
            publishedAt: "2026-05-02",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Perdí mi seed phrase", url: "/blog/que-pasa-si-perdi-mi-seed-phrase" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Seguridad</span>
        </div>

        <div className="mb-12">
          <span className="badge mb-5 inline-flex" style={{ background: "rgba(255,69,69,0.1)", color: "#ff8080", border: "1px solid rgba(255,69,69,0.3)" }}>⚠️ Importante</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            Perdí mi seed phrase. ¿Qué hago?
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            La verdad incómoda primero, después qué se puede hacer.
          </p>
        </div>

        <div className="prose-impresora text-text-secondary mb-16">
          <h2>La verdad: no hay rescate</h2>
          <p>
            Si <strong>perdiste la seed phrase</strong> Y <strong>no tenés acceso a la wallet</strong>
            (porque borraste la app, perdiste el celular sin backup, etc.), los fondos están
            perdidos. <strong>Sin excepciones.</strong>
          </p>
          <p>
            Esto es así por diseño. La crypto se basa en criptografía: las 12-24 palabras de tu
            seed son la única forma de generar las claves privadas que controlan tus fondos. Sin
            seed, sin acceso. No hay un \"recuperar contraseña\". No hay un \"hablar con soporte
            de blockchain\". Bitcoin no tiene CEO, Ethereum no tiene atención al cliente.
          </p>
          <p>
            El estimado: <strong>3-4 millones de BTC están perdidos para siempre</strong> por seeds
            perdidas. Eso son ~$200-400 mil millones de dólares evaporados. Vos no sos especial.
            Si la perdiste, está perdida.
          </p>

          <h2>Lo que NO va a funcionar</h2>
          <ul>
            <li>Llamar a Binance / Coinbase / cualquier exchange — ellos no controlan tu wallet auto-custodiada</li>
            <li>Pagarle a un \"hacker\" que dice recuperar seeds — son scams, sin excepciones</li>
            <li>\"Servicios de recuperación\" que aparecen en X/Telegram — phishing al 100%</li>
            <li>Pedir ayuda al equipo del proyecto (Phantom, MetaMask, Ledger) — pueden ayudar con UI, no con tus fondos</li>
            <li>Rezar — no funciona</li>
          </ul>

          <h2>Lo que SÍ podés hacer</h2>
          <p>Solo si tenés ALGÚN remanente. Casos específicos:</p>

          <h3>Caso 1: Tenés acceso a la wallet pero perdiste la seed</h3>
          <p>
            <strong>Movélo TODO ahora a una wallet nueva</strong> de la cual sí tenés la seed
            anotada. Tu seed actual perdida = tu wallet actual está expuesta a no-recuperación si
            algo le pasa al dispositivo (formato, pérdida, hack).
          </p>

          <h3>Caso 2: Tenés algunas palabras, no todas</h3>
          <p>
            Si recordás 18-23 de las 24 palabras, hay tools (BTCRecover, BIP39 Tool offline) que
            pueden hacer fuerza bruta sobre las palabras faltantes. Requiere conocimiento técnico
            o un servicio profesional verificado (Wallet Recovery Services, Crypto Asset Recovery
            son los más serios — pero cobran 20% de lo recuperado y nunca al 100%). NUNCA pagues
            por adelantado.
          </p>

          <h3>Caso 3: Tenés la seed pero no recordás el password</h3>
          <p>
            Si tu wallet usaba password adicional sobre la seed (Ledger, Trezor avanzado), hay
            similar bruteforce posible si recordás el formato general.
          </p>

          <h2>Cómo evitar que vuelva a pasar</h2>
          <ol>
            <li><strong>2 copias en papel</strong>, en lugares físicamente separados</li>
            <li><strong>1 copia stamping en metal</strong> (Cryptosteel, Coldcard) si es &gt;$5k USD</li>
            <li><strong>Plan de herencia documentado</strong>: que un familiar de confianza sepa DÓNDE están las copias (no QUÉ son, solo el procedimiento)</li>
            <li><strong>NUNCA</strong> en iCloud, Drive, foto, captura, email, Notas, Telegram</li>
            <li><strong>Verificá cada 6 meses</strong> que las copias siguen legibles e intactas</li>
            <li>Para &gt;$50k: considerá <strong>multi-sig</strong> (Safe, Casa) — necesitás 2 de 3 firmas, una sola seed perdida no destruye nada</li>
          </ol>

          <h2>Ejercicio: ¿qué pasaría si te morís hoy?</h2>
          <p>
            Si tu pareja, familia o quien sea querés que herede tu cripto, hoy mismo tendría que
            poder hacerlo. Si la respuesta es no, es lo más urgente que tenés que arreglar.
          </p>

          <h2>Lecturas relacionadas</h2>
          <ul>
            <li><Link href="/blog/mejores-wallets-crypto-2026">Mejores wallets crypto 2026</Link></li>
            <li><Link href="/blog/privacidad-digital-crypto-guia">Privacidad digital crypto: guía</Link></li>
            <li><Link href="/blog/los-mayores-fraudes-crypto-historia">Los mayores fraudes crypto de la historia</Link></li>
          </ul>
        </div>

        <ArticleCTA
          source="blog_perdi_seed"
          hook="¿Querés más sobre seguridad y custodia crypto?"
        />

        <div className="mt-24">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
