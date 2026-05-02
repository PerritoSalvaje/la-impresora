import Link from "next/link";
import GuiaPrintButton from "@/components/GuiaPrintButton";

export const metadata = {
  title: "30 Prompts AI para emprendedores LATAM — Pack gratuito",
  description:
    "30 prompts probados que uso a diario con Claude/ChatGPT/Gemini para contenido, research, finanzas, código y productividad. Listos para copiar y pegar. Gratis.",
  alternates: { canonical: "https://laimpresora.io/recursos/prompts" },
  robots: { index: true, follow: true },
};

const CATEGORIAS = [
  {
    nombre: "Contenido y marketing",
    color: "verde",
    prompts: [
      {
        titulo: "Newsletter en tu voz",
        prompt: `Actuá como un editor que conoce mi voz. Te pego 3 ejemplos de cómo escribo abajo.

[PEGAR 3 PÁRRAFOS PROPIOS]

Ahora escribime un newsletter de 600 palabras sobre [TEMA] usando exactamente esa voz: misma estructura de frases, mismo nivel de coloquialismo, sin palabras que yo no usaría. Empezá con un hook de 1 línea, después 3 secciones. Cerrá con una pregunta abierta.`,
      },
      {
        titulo: "Hook de 5 variantes",
        prompt: `Generame 5 hooks distintos para un post de redes sociales sobre [TEMA].

Reglas:
- Cada uno máximo 12 palabras
- Cada uno con un ángulo diferente: contrarian, número específico, pregunta, anécdota personal, predicción
- Sin emojis, sin clickbait gurú
- Voz directa, primera persona`,
      },
      {
        titulo: "Refritar contenido viejo",
        prompt: `Te paso un artículo de hace 12 meses. Reescribilo para 2026 actualizando datos, removiendo lo que ya no aplica, agregando 2-3 ejemplos nuevos. Mantené la estructura y la voz original.

[PEGAR ARTÍCULO]`,
      },
      {
        titulo: "20 ideas de tweets",
        prompt: `Generame 20 ideas de tweets sobre [TEMA] para los próximos 20 días. Mezclá:
- 6 contrarian (afirmación que sorprenda)
- 6 educativos (concepto en 1 frase)
- 4 personales (anécdota propia)
- 4 listas/datos (números específicos)

Cada uno en máximo 280 caracteres. No me los publiques — solo enuméralos del 1 al 20.`,
      },
      {
        titulo: "Email de bienvenida",
        prompt: `Escribime un email de bienvenida para un newsletter sobre [TEMA]. Audiencia: [DESCRIBIR]. Tono: directo, sin gurúes. Estructura:
1. Hook de 1 línea
2. Por qué arranqué este newsletter (mi historia)
3. Qué van a recibir cada semana
4. Una pregunta para que respondan (sube deliverability)`,
      },
    ],
  },
  {
    nombre: "Research e investigación",
    color: "dorado",
    prompts: [
      {
        titulo: "Análisis de competencia",
        prompt: `Necesito analizar [PRODUCTO/EMPRESA] vs sus 5 competidores principales en [SECTOR].

Para cada uno, extraé:
1. Modelo de negocio en 1 línea
2. Pricing
3. 3 fortalezas claras
4. 2 debilidades obvias
5. A qué tipo de cliente apunta

Devolveme una tabla comparativa al final.`,
      },
      {
        titulo: "Resumen de paper / artículo largo",
        prompt: `Te paso un texto largo. Devolveme:
1. TL;DR de 3 líneas
2. Las 5 ideas principales (1 frase cada una)
3. Las 3 que más se aplican a mi situación: [DESCRIBIR]
4. 1 acción concreta que puedo tomar esta semana

[PEGAR TEXTO]`,
      },
      {
        titulo: "Pros y contras estructurados",
        prompt: `Estoy decidiendo entre [OPCIÓN A] y [OPCIÓN B]. Mi contexto: [DESCRIBIR].

Hacé un análisis estructurado:
- 5 pros y 5 contras de A
- 5 pros y 5 contras de B
- 3 escenarios donde A gana
- 3 escenarios donde B gana
- Tu recomendación basada en mi contexto`,
      },
      {
        titulo: "Validar una idea de negocio",
        prompt: `Tengo esta idea: [DESCRIBIR EN 2-3 LÍNEAS].

Hacé el rol de inversor escéptico. Preguntame las 10 dudas más duras que tendrías. Después de cada pregunta, calificá del 1-10 cuán riesgosa es esa duda para el éxito de la idea.`,
      },
      {
        titulo: "Mapa mental de un tema",
        prompt: `Soy nuevo en [TEMA]. Hacé un mapa estructurado:
- 4-6 conceptos centrales
- Para cada uno: 2-3 sub-conceptos
- Para cada sub-concepto: 1 recurso recomendado (libro, video, artículo) para profundizar
- Una ruta de aprendizaje sugerida en 30 días`,
      },
    ],
  },
  {
    nombre: "Finanzas y crypto",
    color: "verde",
    prompts: [
      {
        titulo: "Auditar mi portfolio",
        prompt: `Te paso mi portfolio actual:
[LISTAR ACTIVOS Y PORCENTAJES]

Mi situación: [EDAD, INGRESOS, OBJETIVOS, HORIZONTE].

Auditá:
1. Concentración de riesgo (¿más del 30% en algo?)
2. Diversificación geográfica/sectorial
3. Liquidez vs ahorro de largo plazo
4. 3 cambios concretos que recomendarías
5. Qué NO cambiarías y por qué`,
      },
      {
        titulo: "Análisis de un protocolo DeFi",
        prompt: `Necesito decidir si poner stablecoins en [PROTOCOLO].

Investigá:
1. TVL actual y trayectoria 12 meses
2. Auditorías (cuáles, cuándo, qué encontraron)
3. Equipo (anónimo o doxxed)
4. Hacks pasados o exploits
5. Yield ofrecido vs rentabilidad real (después de fees)
6. Riesgos no obvios

Recomendación final: SI / NO / CONDICIONAL.`,
      },
      {
        titulo: "Calcular impuestos crypto",
        prompt: `Soy residente fiscal en [PAÍS]. Operé esto este año:
[LISTAR TRANSACCIONES: fecha, tipo, monto USD, ganancia/pérdida]

1. Cuánto debo declarar y bajo qué categoría
2. Qué deducciones puedo aplicar
3. Cuál es la forma más simple de presentar
4. Qué riesgos tengo si NO declaro

(No es asesoría legal — solo orientación)`,
      },
      {
        titulo: "Evaluar oportunidad de yield",
        prompt: `Me ofrecen [APY%] en [PLATAFORMA] por dejar [STABLECOIN].

Comparalo con:
1. APY similar en plataformas TIER 1 (Aave, Compound, Sky)
2. Riesgos específicos de esta plataforma vs alternativas
3. Costo de oportunidad si me quedo en algo conservador
4. Bandera roja: ¿el APY es sostenible o es un ponzi?

Recomendación: SI / NO / DEPENDE.`,
      },
      {
        titulo: "Plan de salida ante crisis",
        prompt: `Mi portfolio es [LISTA]. Vivo en [PAÍS].

Diseñame un plan en 3 escenarios:
1. Si el peso colapsa 50% en 6 meses
2. Si BTC cae 60%
3. Si el exchange principal que uso quiebra

Para cada uno: qué hago HOY, qué hago el mes 1, qué hago el mes 3.`,
      },
    ],
  },
  {
    nombre: "Productividad y código",
    color: "dorado",
    prompts: [
      {
        titulo: "Plan semanal en 5 min",
        prompt: `Estos son mis objetivos para la semana:
[LISTAR 3-5 OBJETIVOS]

Estos son mis bloqueos/limitaciones:
[LISTAR]

Armame un plan semanal con:
- 3 prioridades del lunes (las más importantes)
- 1 bloque de 90 min cada día para deep work, indicando qué tarea
- 2 ventanas para batch processing (email, mensajes)
- Una "no negociable" del jueves (lo que SÍ o SÍ tiene que pasar)`,
      },
      {
        titulo: "Code review automático",
        prompt: `Te paso este código. Reviewlo como senior eng:

[PEGAR CÓDIGO]

Buscá:
1. Bugs potenciales (no obvios)
2. Performance issues
3. Inseguridad (XSS, injection, auth gaps)
4. Mantenibilidad (¿este código se va a poder leer en 6 meses?)
5. Tests faltantes

Para cada issue: severidad (critical/high/medium/low) + fix sugerido.`,
      },
      {
        titulo: "Refactor explicado",
        prompt: `Refactoreá este código para que sea más legible y mantenible:

[PEGAR]

Restricciones:
- No cambiar el comportamiento (output debe ser igual)
- No agregar dependencias nuevas
- Explicame en 3 líneas qué cambiaste y por qué`,
      },
      {
        titulo: "Convertir entre lenguajes",
        prompt: `Convertí este código de [LENGUAJE ORIGEN] a [LENGUAJE DESTINO]:

[PEGAR]

Manteniendo:
- Mismo comportamiento exacto
- Idioms del lenguaje destino (no solo traducción literal)
- Mismos nombres de funciones/variables si tienen sentido
- Comentarios donde el patrón cambia`,
      },
      {
        titulo: "Debugging en pareja",
        prompt: `Tengo este error: [PEGAR ERROR + STACK TRACE]

Mi código es: [PEGAR]

Stepeame el problema:
1. Qué está pasando exactamente
2. Las 3 causas más probables
3. Cómo lo verifico (qué imprimir, qué chequear)
4. El fix más probable
5. Cómo evitar que vuelva a pasar`,
      },
    ],
  },
  {
    nombre: "Ventas y negocio",
    color: "dorado",
    prompts: [
      {
        titulo: "Email de outreach personalizado",
        prompt: `Escribí un email de outreach a [NOMBRE/ROL] de [EMPRESA].

Contexto:
- Ofrezco: [SERVICIO]
- Sé de ellos que: [INFO RELEVANTE]
- El angle es: [POR QUÉ AHORRA TIEMPO/PLATA]

Reglas:
- Máximo 5 frases
- Sin "espero que estés bien"
- Línea 1: contexto específico que demuestre que investigué
- CTA claro al final (1 acción)`,
      },
      {
        titulo: "Analizar una propuesta de cliente",
        prompt: `Cliente me mandó este brief:
[PEGAR]

Auditá:
1. Qué necesita REALMENTE (vs lo que pide)
2. Las 3 preguntas que tendría que hacerle antes de cotizar
3. Riesgos para mí (scope creep, timeline, pago)
4. Cómo respondo: aceptar, contraproponer o pasar`,
      },
      {
        titulo: "Pricing de servicio",
        prompt: `Estoy ofreciendo [SERVICIO]. Mi mercado es [DESCRIBIR]. Mis competidores cobran entre $X y $Y.

Recomendame:
1. 3 modelos de pricing posibles (hourly, project, retainer, performance)
2. Para cada uno: rango de precio defendible y para qué tipo de cliente
3. El que recomendarías para empezar
4. Cómo subir precio en 6 meses sin perder cliente`,
      },
      {
        titulo: "Manejo de objeción cliente",
        prompt: `Un cliente me dice: "[OBJECIÓN]"

Quiero responder bien. Generame:
1. La respuesta intuitiva (lo primero que sale) — y por qué probablemente NO funciona
2. La respuesta correcta — qué decir, en 3-4 frases
3. La pregunta de vuelta que abre conversación en vez de cerrarla
4. Si insiste, cómo respondo sin perder al cliente Y sin venderme barato`,
      },
      {
        titulo: "Presentación 1-pager",
        prompt: `Necesito un 1-pager para [PRODUCTO/SERVICIO].

Audiencia: [DESCRIBIR].
Lo que les importa: [LISTA].
Mi diferencial: [DESCRIBIR].

Estructura:
- Headline (10 palabras max)
- Subhead que aclara
- 3 bullets de qué hacés (con número/dato concreto en cada uno)
- 1 testimonio o caso
- CTA (lo que querés que pase después de leer)`,
      },
    ],
  },
  {
    nombre: "Personal y mindset",
    color: "verde",
    prompts: [
      {
        titulo: "Reflexión semanal",
        prompt: `Vamos a hacer una reflexión semanal estructurada. Hacéme estas 5 preguntas, una por una. Esperá mi respuesta antes de pasar a la siguiente.

1. ¿Qué fue lo mejor de la semana y por qué?
2. ¿Qué te frustró y qué aprendiste de eso?
3. ¿Qué intentaste por primera vez?
4. ¿Qué pospusiste por miedo o desidia?
5. Para la semana que viene: ¿una decisión clara que vas a tomar?

Después del 5, devolvéme un resumen de 3 frases con lo más importante que dije.`,
      },
      {
        titulo: "Negociar conmigo mismo",
        prompt: `Estoy procrastinando con [TAREA]. La razón "racional" que me digo es [RAZÓN].

Hacé el rol de un coach honesto. Confrontame:
1. ¿Es la razón verdadera o es excusa?
2. ¿Qué miedo está debajo?
3. ¿Qué pasa si NO la hago en 30 días?
4. ¿Qué es lo más chico que puedo hacer en 10 minutos para arrancar?`,
      },
      {
        titulo: "Decisión difícil",
        prompt: `Tengo que decidir entre [A] y [B]. Mi situación: [CONTEXTO].

Ayudame a pensar:
1. ¿Cuál es el "costo de la oportunidad perdida" de elegir A?
2. ¿Cuál de los 2 es más reversible si me equivoco?
3. ¿Cuál vas a estar más tranquilo eligiendo en 5 años, independientemente del resultado?
4. ¿Cuál estoy evitando por miedo, no por análisis?
5. Tu recomendación, asumiendo que no querés que me arrepienta.`,
      },
      {
        titulo: "Carta a mi yo de hace 5 años",
        prompt: `Soy [EDAD ACTUAL], me dedico a [ACTIVIDAD], pasé por [3 EVENTOS IMPORTANTES] estos últimos 5 años.

Escribíle una carta a mi yo de hace 5 años. Mantené el tono cercano, no condescendiente. Que tenga:
- 1 cosa que hizo bien (que probablemente no notó)
- 2 errores caros que pudo evitar
- 1 oportunidad que no vio
- 1 consejo que NO va a entender pero igual le digo
- Un cierre que no sea "todo va a estar bien"`,
      },
      {
        titulo: "Plan de 90 días para un cambio",
        prompt: `Quiero cambiar [HÁBITO/SITUACIÓN]. Intenté antes y fallé porque [RAZÓN].

Diseñame un plan de 90 días con:
- Mes 1: meta MÍNIMA viable (que no falle aunque tenga semanas malas)
- Mes 2: progresión sobre el mes 1
- Mes 3: consolidación + medición de resultados
- Para cada mes: 1 trigger diario + 1 reward semanal + 1 chequeo de honestidad

Sin reglas que sé que no voy a cumplir. Sin "transforma tu vida en 90 días".`,
      },
    ],
  },
];

export default function PromptsPage() {
  return (
    <div className="pt-24 min-h-screen guia-print-root">
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <span className="badge badge-dorado inline-flex mb-5 print-keep-color">🤖 30 Prompts AI</span>
          <h1 className="font-display text-display-2xl font-bold text-text-primary leading-tight mb-5">
            30 Prompts AI para emprendedores LATAM
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
            Los 30 prompts que uso a diario con Claude, ChatGPT y Gemini. Listos para copiar y
            pegar. Para contenido, research, finanzas, código y mindset.
          </p>

          <div className="flex flex-wrap gap-3 no-print">
            <GuiaPrintButton />
            <Link href="/#newsletter" className="btn-secondary">
              Recibir nuevos prompts cada mes →
            </Link>
          </div>
        </div>
      </section>

      {CATEGORIAS.map((cat, ci) => (
        <section
          key={cat.nombre}
          className="px-6 py-12 print-section"
          style={ci % 2 === 0 ? { background: "var(--surface)" } : {}}
        >
          <div className="max-w-3xl mx-auto">
            <span
              className={`section-label block mb-3 print-keep-color ${cat.color === "dorado" ? "text-dorado" : "text-verde"}`}
            >
              {cat.nombre}
            </span>
            <h2 className="font-display font-bold text-display-md text-text-primary mb-8">
              {cat.prompts.length} prompts
            </h2>

            <div className="space-y-5">
              {cat.prompts.map((p, i) => (
                <div key={p.titulo} className="card p-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className={`font-display font-bold text-2xl shrink-0 print-keep-color ${cat.color === "dorado" ? "text-dorado" : "text-verde"}`}>
                      {String(ci * 5 + i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display font-semibold text-text-primary text-lg leading-snug">
                      {p.titulo}
                    </h3>
                  </div>
                  <pre
                    className="text-sm leading-relaxed whitespace-pre-wrap font-mono p-4 rounded-lg overflow-x-auto"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(240,240,239,0.85)",
                    }}
                  >
                    {p.prompt}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-20 no-print">
        <div className="max-w-2xl mx-auto card p-8 text-center">
          <span className="badge badge-verde inline-flex mb-5">Pack premium</span>
          <h2 className="font-display font-bold text-display-md text-text-primary mb-4">
            ¿Querés 100 prompts más + plantilla Notion?
          </h2>
          <p className="text-text-secondary text-base mb-7 max-w-md mx-auto">
            Pack completo: 130 prompts categorizados + plantilla Notion lista para usar +
            actualizaciones cuando salen modelos nuevos. $4.99.
          </p>
          <Link href="/tienda" className="btn-primary inline-flex">
            Ver pack en la tienda →
          </Link>
        </div>
      </section>
    </div>
  );
}
