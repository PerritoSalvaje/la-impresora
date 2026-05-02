import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ArticleCTA from "@/components/ArticleCTA";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Cómo ser nómada digital desde LATAM: la guía completa 2026",
  description:
    "Qué es un nómada digital, los trabajos más comunes, países con visas especiales, cómo manejar ingresos con Wise y USDC, impuestos, seguros de salud y los mejores destinos para hispanohablantes.",
  openGraph: {
    title: "Cómo ser nómada digital desde LATAM: la guía completa 2026",
    description:
      "Qué es un nómada digital, los trabajos más comunes, países con visas especiales, cómo manejar ingresos con Wise y USDC, impuestos, seguros de salud y los mejores destinos para hispanohablantes.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="pt-24 min-h-screen px-6">
      <JsonLd
        id="como-vivir-nomada-digital-desde-latam-article"
        data={[
          articleSchema({
            title: "Cómo ser nómada digital desde LATAM: la guía completa 2026",
            description: "Qué es un nómada digital, los trabajos más comunes, países con visas especiales, cómo manejar ingresos con Wise y USDC, impuestos, seguros de salud y los mejores destinos para hispanohablantes.",
            slug: "como-vivir-nomada-digital-desde-latam",
            publishedAt: "2025-09-01",
          }),
          breadcrumbSchema([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: "Cómo ser nómada digital desde LATAM: la guía completa 2026", url: "/blog/como-vivir-nomada-digital-desde-latam" },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-white/30">
          <Link href="/blog" className="hover:text-verde transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Libertad Financiera</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded-full border bg-dorado/10 text-dorado border-dorado/20">
              Nómada Digital
            </span>
            <span className="text-white/20 text-xs">30 Abril 2026</span>
            <span className="text-white/20 text-xs">· 11 min de lectura</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Cómo ser{" "}
            <span className="text-dorado">nómada digital</span>{" "}
            desde LATAM: la guía completa 2026
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Ganar en dólares o euros mientras vivís en países con costo de vida bajo es una de
            las ventajas más concretas que ofrece la economía digital. En 2026, hay más herramientas,
            más visas y más oportunidades que nunca. Esta es la guía que nadie en LATAM te da.
          </p>
        </div>

        <article className="space-y-10 text-white/75 leading-relaxed text-lg">

          {/* Qué es */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Qué es un nómada digital y por qué es diferente al freelancer
            </h2>
            <p>
              Un nómada digital es alguien que genera ingresos de forma remota y aprovecha esa
              independencia geográfica para vivir en distintos lugares del mundo, generalmente
              maximizando la relación entre lo que gana y lo que gasta.
            </p>
            <p className="mt-4">
              La diferencia con el freelancer sedentario es la estrategia geográfica. Un desarrollador
              argentino que trabaja para una empresa de San Francisco y vive en Buenos Aires es un
              freelancer. El mismo desarrollador que se muda a Georgia (el país, no el estado) o
              Lisboa para vivir con la mitad del costo y pagar menos impuestos — ese es un nómada
              digital.
            </p>
            <p className="mt-4">
              El arbitraje geográfico es el concepto clave: ganar en monedas fuertes y gastar en
              economías más baratas. Con $2,000 mensuales podés vivir muy bien en Medellín,
              Tbilisi o Ciudad de México. Los mismos $2,000 apenas cubren el alquiler en Madrid o Miami.
            </p>

            <div className="my-6 border-l-4 border-dorado pl-6 bg-dorado/5 py-4 pr-4 rounded-r-xl">
              <p className="text-white font-semibold">
                El nomadismo digital no es solo viajes — es una estrategia financiera. Ganar en
                divisas fuertes, gastar en economías baratas y pagar menos impuestos legalmente.
              </p>
            </div>
          </section>

          {/* ArticleCTA — primer tercio */}
          <ArticleCTA />

          {/* Trabajos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los trabajos más comunes entre nómadas digitales desde LATAM
            </h2>

            <div className="space-y-4 mt-4">
              {[
                {
                  categoria: "Desarrollo y tecnología",
                  rango: "$3,000–$12,000/mes",
                  detalle: "Desarrollo web (React, Python, Swift), DevOps, ciberseguridad, datos. La demanda global supera ampliamente la oferta. Plataformas: Toptal, Turing, Andela para posiciones senior. Upwork y Freelancer para proyectos.",
                  color: "border-verde/20",
                  tagColor: "text-verde",
                },
                {
                  categoria: "Marketing de contenidos y SEO",
                  rango: "$1,500–$5,000/mes",
                  detalle: "Copywriting, SEO, gestión de redes sociales, producción de video. El mercado en inglés es 5x más grande que en español. Si sabés escribir bien en inglés, el salto de ingresos es inmediato.",
                  color: "border-dorado/20",
                  tagColor: "text-dorado",
                },
                {
                  categoria: "Diseño y creatividad",
                  rango: "$2,000–$6,000/mes",
                  detalle: "UX/UI, branding, motion graphics, edición de video. Dribbble, 99designs y Behance son portfolios; los clientes vienen de LinkedIn y referidos.",
                  color: "border-purple-400/20",
                  tagColor: "text-purple-400",
                },
                {
                  categoria: "SaaS y productos digitales",
                  rango: "$0–illimitado",
                  detalle: "Construir herramientas, templates, cursos o comunidades de pago. El modelo de ingresos recurrentes es el más escalable. No requiere tiempo por dólar. Ejemplos: Gumroad, Lemon Squeezy, Stripe.",
                  color: "border-blue-400/20",
                  tagColor: "text-blue-400",
                },
                {
                  categoria: "Consultoría y trading",
                  rango: "$2,000–$10,000/mes",
                  detalle: "Consultoría especializada (legal, finanzas, crypto), trading propio. Alta variabilidad. Para el trading: solo con historial probado y capital propio para no depender de terceros.",
                  color: "border-white/10",
                  tagColor: "text-white/50",
                },
              ].map((t) => (
                <div key={t.categoria} className={`p-5 bg-gris-medio rounded-xl border ${t.color}`}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{t.categoria}</p>
                    <span className={`text-sm font-black shrink-0 ${t.tagColor}`}>{t.rango}</span>
                  </div>
                  <p className="text-white/50 text-sm">{t.detalle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Visas */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Países con visas para nómadas digitales en 2026
            </h2>
            <p>
              Más de 60 países tienen programas de visa específicos para nómadas digitales o
              trabajadores remotos. Estos son los más relevantes para latinoamericanos:
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  pais: "Portugal — Visa D8 (Nómada Digital)",
                  requisito: "Demostrar ingresos de €3,040/mes (~$3,300 USD)",
                  duracion: "1 año, renovable. Camino a residencia permanente y ciudadanía europea.",
                  costo: "€83 de tramitación + seguro médico",
                  ventaja: "Acceso a toda la Unión Europea, altísima calidad de vida, comunidad hispana grande.",
                  nivel: "Recomendado",
                  levelColor: "text-verde",
                },
                {
                  pais: "Georgia — Visa de Nómada Digital Remotely From Georgia",
                  requisito: "Demostrar ingresos de $2,000/mes",
                  duracion: "1 año, renovable",
                  costo: "Sin costo de visa. Ciudadanos LATAM entran sin visa 365 días.",
                  ventaja: "0% de impuesto sobre la renta para extranjeros con ingresos del exterior. Tiflis es una de las ciudades más baratas de Europa con excelente internet.",
                  nivel: "Altamente recomendado",
                  levelColor: "text-dorado",
                },
                {
                  pais: "México — Sin visa hasta 180 días",
                  requisito: "No se requiere visa. Declarás en aduana que venís de turismo/trabajo remoto.",
                  duracion: "180 días máximo por estancia (renovable saliendo del país)",
                  costo: "Sin costo de visa",
                  ventaja: "Ciudad de México está entre las top 3 ciudades para nómadas en el mundo. Excelente internet, gastronomía, conectividad aérea y comunidad de expats masiva.",
                  nivel: "Ideal para empezar",
                  levelColor: "text-verde",
                },
                {
                  pais: "Costa Rica — Visa de Rentista/Nómada",
                  requisito: "Ingresos de $2,500/mes demostrables",
                  duracion: "2 años, renovable",
                  costo: "~$250 USD de tramitación",
                  ventaja: "Estabilidad política excepcional en la región, zonas horarias compatibles con clientes de EE.UU., naturaleza, seguridad.",
                  nivel: "Bueno para familias",
                  levelColor: "text-blue-400",
                },
              ].map((v) => (
                <div key={v.pais} className="p-6 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="text-white font-black">{v.pais}</p>
                    <span className={`text-xs font-bold shrink-0 ${v.levelColor}`}>{v.nivel}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-white/50"><span className="text-white/30">Requisito:</span> {v.requisito}</p>
                    <p className="text-white/50"><span className="text-white/30">Duración:</span> {v.duracion}</p>
                    <p className="text-white/50"><span className="text-white/30">Costo:</span> {v.costo}</p>
                    <p className="text-dorado/80 text-sm mt-3">{v.ventaja}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Finanzas del nómada */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Cómo manejar tus ingresos como nómada digital
            </h2>
            <p>
              La infraestructura financiera es el problema más práctico del nomadismo. ¿Cómo cobrar
              de clientes del exterior? ¿Dónde guardar los dólares? ¿Cómo pagar localmente en
              distintos países sin comisiones abusivas?
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-6 bg-gris-medio rounded-xl border border-dorado/20">
                <p className="text-dorado font-black text-lg mb-2">Wise — El stack principal</p>
                <p className="text-white/60 text-sm mb-3">
                  Cuenta multi-moneda con números de cuenta locales en EE.UU., UK, Europa y más.
                  Recibís en USD/EUR como si tuvieras cuenta local. Podés enviar a +80 países con
                  el tipo de cambio real (sin markup). Tarjeta de débito que funciona en cualquier
                  cajero del mundo.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wise.com/invite/la-impresora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block btn-primary text-sm"
                  >
                    Abrir cuenta Wise →
                  </a>
                  <span className="text-white/30 text-xs">Gratuita, sin mínimos</span>
                </div>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-verde/20">
                <p className="text-verde font-black text-lg mb-2">USDC / USDT — Para cobros en crypto</p>
                <p className="text-white/60 text-sm">
                  Muchos clientes de EE.UU. y Europa ya pagan en stablecoins directamente.
                  Cero comisiones internacionales, liquidación instantánea, sin bancos intermediarios.
                  Ideal si trabajás para startups, fondos o empresas tech. Podés convertir a fiat
                  localmente en exchanges de tu país.
                </p>
              </div>

              <div className="p-6 bg-gris-medio rounded-xl border border-white/5">
                <p className="text-white font-black text-lg mb-2">Payoneer — Alternativa para marketplaces</p>
                <p className="text-white/60 text-sm">
                  Integrado nativamente con Upwork, Fiverr, Amazon y otros marketplaces. Permite
                  cobrar en dólares y enviar a cuentas bancarias locales. Tarjeta prepago disponible.
                  Comisiones ligeramente más altas que Wise pero mejor integración con plataformas.
                </p>
              </div>
            </div>

            {/* NordVPN CTA */}
            <div className="mt-6 p-6 bg-gris-medio rounded-xl border border-blue-400/20">
              <p className="text-blue-400 font-black text-lg mb-2">NordVPN — Imprescindible para el nómada</p>
              <p className="text-white/60 text-sm mb-4">
                Algunos exchanges y servicios financieros bloquean acceso desde ciertos países.
                Con una VPN accedés a tu cuenta bancaria, exchanges y servicios con IP del país
                que necesitás. También protege tu conexión en redes públicas (aeropuertos, cafés,
                coworkings) donde los riesgos de interceptación son reales.
              </p>
              <a
                href="https://nordvpn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary text-sm"
                style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.3)" }}
              >
                Ver NordVPN →
              </a>
            </div>
          </section>

          {/* Impuestos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Impuestos como nómada: lo que nadie te cuenta
            </h2>
            <p>
              Los impuestos son el tema más complejo del nomadismo y el más ignorado por quienes
              están empezando. La regla general: sos residente fiscal en el país donde pasás más
              de 183 días al año. Si sos de Argentina, México o Colombia y no establecés
              residencia fiscal en otro país, seguís pagando impuestos en tu país de origen sobre
              tus ingresos globales.
            </p>

            <div className="mt-5 space-y-3">
              {[
                {
                  titulo: "Estrategia 1: Perpetual traveler (bajo de 183 días en todo país)",
                  desc: "No cumplís el criterio de residencia fiscal en ningún país. Legalmente complicado de sostener y requiere documentación exhaustiva. No recomendado sin asesor fiscal especializado.",
                  nivel: "Avanzado",
                  color: "text-red-400",
                },
                {
                  titulo: "Estrategia 2: Residencia fiscal en país favorable (Georgia, Paraguay)",
                  desc: "Georgia aplica 0% de impuesto sobre ingresos del exterior. Paraguay aplica 0% también para no residentes. Establecés residencia legal allí y dejás de ser residente fiscal en tu país de origen. Requiere proceso legal pero es perfectamente legal.",
                  nivel: "Recomendado",
                  color: "text-verde",
                },
                {
                  titulo: "Estrategia 3: Estructura societaria en jurisdicción favorable",
                  desc: "Facturás a través de una empresa en Estonia (e-Residency), EAU, o Delaware EE.UU. con planificación fiscal adecuada. Requiere asesor legal y contable internacional. Rentable desde los $5,000/mes.",
                  nivel: "Para ingresos altos",
                  color: "text-dorado",
                },
              ].map((e) => (
                <div key={e.titulo} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-white font-bold">{e.titulo}</p>
                    <span className={`text-xs font-bold shrink-0 ${e.color}`}>{e.nivel}</span>
                  </div>
                  <p className="text-white/50 text-sm">{e.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-white/40 text-sm">
              Disclaimer: esto no es asesoramiento fiscal. Consultá siempre con un profesional
              especializado en tributación internacional antes de tomar decisiones.
            </p>
          </section>

          {/* Seguros */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Seguro de salud para nómadas: las opciones reales
            </h2>
            <p>
              El seguro de salud es el ítem más subestimado por los nuevos nómadas y el más
              importante. Una hospitalización en EE.UU. sin seguro puede costarte $30,000 en
              una noche. En Europa o Asia, los costos son menores pero siguen siendo significativos.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { nombre: "SafetyWing", desc: "Desde $56 USD/mes. Cobertura global. El más popular entre nómadas principiantes. No cubre todo pero es el punto de entrada ideal.", tag: "Para empezar" },
                { nombre: "Cigna Global", desc: "Cobertura premium internacional. Desde $200/mes. Incluye cobertura en EE.UU. Ideal para viajeros frecuentes a Norteamérica.", tag: "Premium" },
                { nombre: "Nomad Insurance (World Nomads)", desc: "Orientado a aventura y viajes. Cobre actividades de riesgo. Bueno para períodos cortos.", tag: "Por viaje" },
                { nombre: "Seguro local en destino", desc: "En países como México, Georgia o Colombia, el seguro local puede costar $50-100/mes con excelente cobertura local.", tag: "Económico" },
              ].map((s) => (
                <div key={s.nombre} className="p-5 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-bold">{s.nombre}</p>
                    <span className="text-dorado text-xs font-bold">{s.tag}</span>
                  </div>
                  <p className="text-white/50 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mejores destinos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Los mejores destinos para nómadas hispanohablantes en 2026
            </h2>
            <p>
              Criterios: costo de vida, calidad y velocidad de internet, seguridad, comunidad
              de nómadas, facilidad migratoria y calidad de vida general.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  ciudad: "Ciudad de México, México",
                  costo: "$1,200–$2,000/mes",
                  internet: "100–500 Mbps",
                  score: "9.5/10",
                  desc: "La meca de los nómadas en LATAM. Colonia Roma, Condesa y Polanco tienen infraestructura de primer nivel. Coworkings, comunidad masiva de expats, gastronomía extraordinaria y vuelos directos a todo el mundo.",
                },
                {
                  ciudad: "Medellín, Colombia",
                  costo: "$800–$1,500/mes",
                  internet: "50–300 Mbps",
                  score: "9/10",
                  desc: "El Poblado y Laureles son zonas seguras con infraestructura excelente. Clima primaveral todo el año (la Ciudad de la Eterna Primavera). Posiblemente el mejor costo-calidad del continente.",
                },
                {
                  ciudad: "Tiflis, Georgia",
                  costo: "$900–$1,800/mes",
                  internet: "100–1000 Mbps",
                  score: "8.5/10",
                  desc: "0% de impuesto sobre ingresos del exterior, comida increíble, seguridad alta, comunidad de nómadas en crecimiento. El idioma es una barrera inicial pero la comunidad internacional es grande.",
                },
                {
                  ciudad: "Lisboa, Portugal",
                  costo: "$1,800–$3,000/mes",
                  internet: "100–500 Mbps",
                  score: "8/10",
                  desc: "Acceso a la UE, idioma (casi) común, clima mediterráneo. Caro para Portugal histórico, pero accesible comparado con otros destinos europeos. Comunidad latinoamericana enorme.",
                },
                {
                  ciudad: "Playa del Carmen, México",
                  costo: "$1,000–$2,000/mes",
                  internet: "50–200 Mbps",
                  score: "7.5/10",
                  desc: "Para los que quieren el caribe sin sacrificar internet. Buena comunidad de nómadas, clima cálido todo el año, aeropuerto internacional de Cancún a 45 minutos.",
                },
              ].map((d) => (
                <div key={d.ciudad} className="p-6 bg-gris-medio rounded-xl border border-white/5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="text-white font-black text-lg">{d.ciudad}</p>
                    <span className="text-verde font-black text-lg shrink-0">{d.score}</span>
                  </div>
                  <div className="flex gap-4 mb-3 text-sm">
                    <span className="text-dorado font-semibold">{d.costo}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/50">Internet: {d.internet}</span>
                  </div>
                  <p className="text-white/50 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusión */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              El nomadismo digital es la mejor arbitraje que existe hoy
            </h2>
            <p>
              Para alguien en LATAM con habilidades digitales, el nomadismo es posiblemente la
              mejor estrategia financiera disponible. Ganar en dólares o euros mientras vivís en
              economías de costo medio-bajo puede multiplicar tu poder adquisitivo real por 3x-5x
              sin cambiar tus ingresos en absoluto.
            </p>
            <p className="mt-4">
              El primer paso es construir el ingreso remoto — sin eso, no hay nomadismo posible.
              El segundo es elegir la jurisdicción fiscal correcta. El tercero es armar la
              infraestructura financiera (Wise + USDC + VPN). El cuarto es elegir el destino
              con intención, no por moda.
            </p>
            <p className="mt-4">
              El mayor obstáculo no es logístico — es psicológico. La normalización de la vida
              sedentaria hace que la alternativa parezca más difícil de lo que es. Una vez que
              el primer mes funciona, el modelo se sostiene solo.
            </p>
          </section>

        </article>

        {/* CTA Newsletter */}
        <div className="mt-16 p-8 bg-dorado/5 border border-dorado/20 rounded-2xl text-center">
          <p className="text-dorado font-bold text-lg mb-2">Libertad financiera y geográfica para LATAM — cada jueves</p>
          <p className="text-white/50 mb-6">
            Análisis, oportunidades y estrategias concretas. Sin spam. Gratis para siempre.
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
            <Link href="/blog/privacidad-digital-crypto-guia" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-verde font-bold">Seguridad</span>
              <p className="text-white font-bold mt-2 leading-tight">Privacidad digital y crypto: cómo proteger tu identidad en 2026</p>
            </Link>
            <Link href="/blog/psicologia-del-dinero-sesgos-cognitivos" className="p-6 bg-gris-medio rounded-xl border border-white/5 hover:border-dorado/30 transition-colors block">
              <span className="text-xs text-purple-400 font-bold">Psicología</span>
              <p className="text-white font-bold mt-2 leading-tight">Psicología del dinero: los sesgos que te hacen perder en crypto</p>
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
