# Ghost vs Beehiiv vs Substack — Análisis para La Impresora
**Newsletter crypto/AI en español para LATAM**
*Investigación completa · Abril 2026*

---

## TL;DR ejecutivo

- **Ghost** es la plataforma correcta si el negocio principal son las membresías premium (suscripciones pagadas) y querés cero comisión sobre ingresos.
- **Beehiiv** gana cuando el negocio se financia con sponsors + publicidad y necesitás herramientas de crecimiento de lista (referidos, boosts, ad network propia).
- **Substack** no es relevante para La Impresora salvo para captar audiencia nueva que ya vive ahí. Comisiones de 10% y poca flexibilidad lo hacen ineficiente a escala.
- **Recomendación final:** arrancar en Beehiiv ahora (0-6 meses) y migrar a Ghost cuando los ingresos por membresías superen los ingresos por sponsors. La migración es limpia y la ventana de decisión está bien definida.

---

## 1. Ghost — Análisis completo

### Qué es Ghost y en qué es diferente

Ghost es software open source de publicación creado en 2013 como alternativa a WordPress, enfocado exclusivamente en escritores y publicadores. En 2020-2021 pivotó agresivamente hacia el modelo de membresías, integrando pagos nativos con Stripe. Hoy es la plataforma más usada por newsletters independientes que monetizan principalmente con suscripciones pagadas.

La diferencia estructural con Beehiiv y Substack es filosófica: **Ghost es software, no una red**. No tiene un directorio de newsletters, no tiene una app propia donde los lectores descubren contenido, no tiene un sistema de recomendaciones internas. Es una plataforma de publicación agnóstica que te da control total a cambio de que traigas tu propia audiencia.

Eso lo hace peor para crecer (sin red de distribución) y mejor para monetizar (sin intermediario en la relación con el lector).

### Cómo funciona la monetización en Ghost

Ghost integra Stripe nativamente. El flujo es:

1. Conectás tu cuenta de Stripe (directamente, no una cuenta de Ghost)
2. Definís tiers de membresía con precio libre
3. El lector paga directo a tu Stripe
4. Ghost cobra su fee mensual de plataforma — **0% de comisión sobre ingresos**

Este último punto es el más crítico: Ghost no toca ningún porcentaje de tus ingresos por suscripciones. Si facturás $10,000/mes en membresías, Ghost cobra lo mismo que si facturás $100/mes: solo el plan de hosting.

**Tipos de contenido que podés controlar:**
- Posts públicos (gratis, sin login)
- Posts para miembros gratuitos (requiere email pero gratis)
- Posts para miembros pagos (cualquier tier o solo tiers específicos)
- Paywall por sección dentro de un post (parte visible, parte bloqueada)

El paywall por post es nativo y granular: podés tener un artículo donde los primeros 3 párrafos son públicos y el resto solo para suscriptores pagos. Eso es imposible de hacer en Beehiiv de forma nativa.

### Estructura de tiers en Ghost

Ghost permite múltiples tiers de membresía, cada uno con precio independiente (mensual y/o anual):

- **Tier gratuito:** miembros registrados que no pagan. Reciben newsletters gratis, pueden comentar.
- **Tier pago básico:** acceso a contenido premium. Precio definido por vos.
- **Tier pago avanzado:** acceso a más contenido, comunidad, beneficios adicionales.
- Sin límite de tiers en todos los planes.

Ejemplo aplicado a La Impresora:
- **Free:** newsletter semanal, artículos de análisis básicos
- **Impresora PRO ($9.99/mes):** newsletter diaria, análisis técnico profundo, alertas de mercado
- **Club Inversor ($47/mes):** todo lo anterior + acceso a comunidad privada, calls mensuales, portafolio en tiempo real

Los tres tiers viven dentro de Ghost. Un solo CMS, una sola lista de contactos, control total.

### Precios de Ghost

#### Ghost Pro (hosting gestionado por Ghost)

| Plan | Precio mensual | Suscriptores | Comisión ingresos |
|------|---------------|--------------|-------------------|
| Starter | $9/mes | hasta 500 | 0% |
| Creator | $25/mes | hasta 1,000 | 0% |
| Team | $50/mes | hasta 10,000 | 0% |
| Business | $199/mes | hasta 100,000 | 0% |

*Precios en USD. Facturación anual da aproximadamente 20% de descuento.*

**Nota importante sobre el plan Starter ($9/mes):** El límite es de 500 miembros en total (pagos + gratuitos). Para un newsletter con lista de 5,000 suscriptores pero solo 100 pagos, el Starter no funciona. Se necesita el plan Team ($50/mes) si superás 1,000 miembros totales.

Para La Impresora en fase de crecimiento (1,000-10,000 suscriptores), el plan más realista es **Team a $50/mes**.

#### Ghost Self-Hosted (hosting propio)

Ghost es open source. Podés instalarlo vos mismo en un VPS y pagar solo el hosting:
- DigitalOcean / Hetzner / Vultr: $6-12/mes para tráfico moderado
- Costo total: $6-12/mes en lugar de $50-199/mes
- Costo real: requiere conocimiento técnico o tiempo de configuración

Para un newsletter que factura $2,000+/mes en membresías, vale la pena el self-hosting. Para fases tempranas, Ghost Pro es más práctico.

**La gran ventaja del self-hosting:** cuando crecés, no hay un plan que te limite ni un precio que suba. Pagás el servidor según uso real de recursos, no según cantidad de suscriptores.

### Comisión que cobra Ghost vs competencia

| Plataforma | Comisión sobre ingresos | Costo fijo mensual |
|------------|------------------------|-------------------|
| **Ghost Pro** | **0%** | $9–$199/mes |
| **Ghost Self-Hosted** | **0%** | $6–12/mes (VPS) |
| **Beehiiv** | **0%** (planes pagos) | $39–$99/mes |
| **Substack** | **10%** de todos los ingresos | Gratis |
| **Patreon** | 5–12% | Variable |
| **Memberful** | 0% (plan Pro) | $49/mes |

A escala, la diferencia Substack vs Ghost es brutal. Si La Impresora factura $5,000/mes en membresías:
- **Substack:** pagás $500/mes en comisiones + nada fijo = **$6,000/año** perdido
- **Ghost Pro Team:** pagás $0 en comisiones + $50/mes fijo = **$600/año** total
- **Ghost Self-Hosted:** pagás $0 en comisiones + $10/mes VPS = **$120/año** total

### Por qué Rekt Capital eligió Ghost

Rekt Capital es el newsletter y cuenta de Twitter/X de análisis técnico de Bitcoin y criptomonedas más seguido en inglés. Rekt Capital migró a Ghost porque:

**1. Modelo de negocio 100% membresías.** Rekt Capital no depende de sponsors ni publicidad. Su ingreso es 100% suscripciones de lectores que pagan por análisis premium. En ese modelo, la comisión 0% de Ghost frente al 10% de Substack es la diferencia entre el negocio siendo viable o no.

**2. Control total del contenido y la lista.** Rekt Capital publica análisis de activos financieros. En Substack, si mañana Substack cambia las reglas sobre contenido financiero, podría perder su newsletter de un día para el otro. En Ghost, nadie puede quitarte el contenido ni la lista de emails.

**3. Diseño y experiencia premium.** Ghost permite personalización completa del tema visual, integraciones con herramientas externas, y una experiencia de lectura limpia que refuerza la percepción de calidad del producto. Los análisis técnicos de Rekt Capital tienen gráficos, tablas, annotaciones — Ghost los muestra mejor que Beehiiv o Substack.

**4. Paywall granular para el modelo de análisis técnico.** Rekt Capital publica parcialmente: contexto gratis, análisis profundo y niveles de precio específicos detrás del paywall. Eso convierte a lectores gratuitos en potenciales suscriptores pagos dentro del mismo post. Ghost lo hace nativamente.

**5. Stripe directo sin intermediario.** Los pagos de suscriptores van directo a la cuenta Stripe de Rekt Capital. No hay un tercero con acceso a esos fondos ni riesgo de que congelen la cuenta por razones de plataforma.

### Casos de éxito de newsletters crypto en Ghost

**Rekt Capital** — análisis técnico BTC/ETH:
- Estimado: 15,000-25,000 suscriptores totales, ~2,000-4,000 pagos
- Tiers: plan gratuito + premium ~$10-15/mes
- MRR estimado: $20,000-$60,000/mes (rangos conservadores basados en métricas públicas)
- Usa Ghost Self-Hosted

**Bankless** (fase inicial) — también usó Ghost antes de escalar a su propio stack tecnológico. Demostraron el modelo: newsletter gratuita para distribucion + membresía paga para acceso profundo.

**The Defiant** — newsletter DeFi en Ghost:
- Una de las publicaciones DeFi más respetadas
- Modelo: artículos gratuitos + suscripción $10/mes para acceso completo
- Ghost les permite manejar tanto la publicación web como el newsletter desde una sola herramienta

**Por qué los newsletters crypto prefieren Ghost:**
El análisis de crypto genera contenido naturalmente segmentado entre "educación básica" (gratis, para atraer) y "señales y análisis profundo" (pago, para monetizar). Ghost es la única plataforma donde ese paywall puede vivir dentro del mismo post de forma elegante.

---

## 2. Comparativa directa para monetización

### Tabla maestra

| Factor | Beehiiv | Ghost | Substack |
|--------|---------|-------|----------|
| **Comisión por suscripción** | 0% (planes pagos) | 0% | 10% |
| **Membresías nativas** | Sí (desde Scale $99/mes) | Sí (todos los planes) | Sí |
| **Tiers múltiples** | Limitado (1 nivel) | Ilimitado | 1 nivel |
| **Paywall por post** | No nativo | Sí, granular | Sí, pero todo-o-nada |
| **Paywall por sección** | No | Sí | No |
| **Programa de referidos nativo** | Sí (best-in-class) | No (requiere plugin) | No |
| **Ad Network propia** | Sí (Boosts + Ad Network) | No | No |
| **Precio mensual (mínimo útil)** | $39-99/mes | $25-50/mes | Gratis |
| **Control de datos/lista** | Parcial | Total | Limitado |
| **Exportar lista** | Sí | Sí | Sí |
| **Diseño personalizable** | Moderado | Total | Mínimo |
| **Integración Stripe** | Sí (via Beehiiv) | Sí (directo) | No (via Substack) |
| **Self-hosting posible** | No | Sí (open source) | No |
| **Web pública tipo blog** | Limitado | Excelente | Moderado |
| **SEO** | Moderado | Excelente | Moderado |
| **Analytics avanzado** | Excelente | Básico-moderado | Básico |
| **A/B testing** | Sí | No nativo | No |
| **Segmentación de audiencia** | Avanzada | Básica | Básica |
| **API acceso** | Sí | Sí | No |
| **Integraciones (Zapier, etc.)** | Muchas | Muchas | Pocas |

### Monetización: el cálculo concreto

**Escenario A: 500 suscriptores pagos a $9.99/mes = $4,995 MRR**

| Plataforma | Costo plataforma | Comisión | Total perdido | Neto |
|------------|-----------------|----------|---------------|------|
| Ghost Pro Team | $50/mes | $0 | $50 | **$4,945** |
| Beehiiv Scale | $99/mes | $0 | $99 | **$4,896** |
| Substack | $0 | $499.50 | $499.50 | **$4,495.50** |

A este nivel, Ghost y Beehiiv son similares. Substack ya pierde casi $500/mes frente a los otros.

**Escenario B: 2,000 suscriptores pagos a $9.99/mes = $19,980 MRR**

| Plataforma | Costo plataforma | Comisión | Total perdido | Neto |
|------------|-----------------|----------|---------------|------|
| Ghost Self-Hosted | $12/mes | $0 | $12 | **$19,968** |
| Ghost Pro Business | $199/mes | $0 | $199 | **$19,781** |
| Beehiiv Scale | $99/mes | $0 | $99 | **$19,881** |
| Substack | $0 | $1,998 | $1,998 | **$17,982** |

A esta escala, Substack te cuesta casi $24,000 más por año que Ghost. La decisión se vuelve obvia.

---

## 3. ¿Ghost supera a Beehiiv o viceversa?

### Cuándo Ghost es mejor que Beehiiv

1. **El ingreso principal son membresías (>60% del revenue total).** Ghost tiene 0% de comisión y tiers múltiples nativos. Beehiiv limita membresías a un solo nivel y las tiene bien integradas solo en el plan Scale ($99/mes).

2. **Necesitás paywall por sección dentro de un post.** El "content access card" de Ghost es único: podés tener en el mismo artículo el contexto gratis y el análisis concreto detrás del paywall. Para un newsletter de análisis técnico como La Impresora, esto convierte lectores gratuitos en pagos sin que abandonen el contenido.

3. **Querés construir un sitio web completo además del newsletter.** Ghost funciona como CMS completo: blog, páginas estáticas, landing pages, documentación. Beehiiv es principalmente un sistema de email con una web básica.

4. **SEO es prioridad.** Ghost genera HTML limpio, carga rápido, maneja correctamente los metadatos, y tiene schema markup nativo. Los artículos de Ghost ranquean bien en Google. En Beehiiv, el SEO es limitado y el web archive de newsletters no es tan indexable.

5. **Escalás a $5,000+/mes en membresías.** A esa escala, la comisión 0% de Ghost vs el costo fijo de Beehiiv empieza a favorecerte dependiendo del mix.

6. **Necesitás control total de datos y cero riesgo de plataforma.** Ghost open source significa que podés correr tu propio servidor. Nadie puede cerrar tu cuenta ni cambiar las reglas de juego.

### Cuándo Beehiiv es mejor que Ghost

1. **El ingreso principal son sponsors y publicidad.** La Ad Network de Beehiiv (Boosts) conecta newsletters con anunciantes que pagan por insertar contenido. Ghost no tiene esto. Si tu modelo es newsletters gratuitas financiadas por sponsors, Beehiiv es claramente superior.

2. **Crecimiento de lista es la prioridad #1.** El programa de referidos de Beehiiv es el mejor del mercado: automatizado, con recompensas configurables, con tracking de conversiones. Ghost no tiene referidos nativos.

3. **No tenés skills técnicas y querés algo que funcione el día 1.** Beehiiv es más fácil de configurar para alguien sin experiencia técnica, especialmente en la parte de email.

4. **Necesitás analytics avanzados de email.** Beehiiv tiene mapas de calor de clicks, análisis de segmentos, A/B testing de asuntos, y dashboards de crecimiento que Ghost no tiene.

5. **Querés monetizar pronto con poco volumen.** El plan free de Beehiiv ($0/mes con hasta 2,500 suscriptores) es más accesible para empezar que Ghost ($25+/mes). Podés crecer la lista gratis y solo pagar cuando monetizás.

6. **Querés integrar boosts de crecimiento pagado.** Beehiiv permite que otros newsletters te recomienden a sus lectores a cambio de un costo por suscriptor. Ghost no tiene esto.

### ¿Estrategia híbrida? ¿Se puede usar ambas?

Técnicamente sí, operativamente es complicado. Algunas publicaciones tienen:
- **Beehiiv para el newsletter** (email, referidos, sponsors, ad network)
- **Ghost para la web y membresías** (sitio principal, paywall, suscripciones pagas)

El problema: mantener dos listas sincronizadas es trabajo manual o requiere automatizaciones (Zapier, Make), y el lector tiene experiencias distintas según dónde interactúa. No recomendado para una operación de una o dos personas.

La estrategia más práctica es **elegir una y usarla bien**. Los newsletters más exitosos no mezclan plataformas de email: eligen la que mejor sirve su modelo de negocio principal.

---

## 4. El modelo específico de Rekt Capital en Ghost

### Arquitectura de contenido

Rekt Capital publica en dos capas:

**Capa gratuita (lead magnet y descubrimiento):**
- Análisis de mercado general: "Bitcoin está en zona de consolidación"
- Contexto histórico: "Así se comportó el mercado en ciclos anteriores"
- Conceptos educativos: "Qué es el halving y por qué importa"
- Publicaciones en X/Twitter que linkean al artículo en Ghost

**Capa de pago (valor diferencial):**
- Niveles de precio específicos: "El soporte crítico está en $X, la resistencia en $Y"
- Alertas de entrada/salida: "Si rompe $X hacia abajo, es señal de..."
- Análisis de altcoins específicas con targets
- Seguimiento de setups en evolución semana a semana

**El mecanismo que hace funcionar el modelo:**
El lector gratuito llega a un artículo de Rekt Capital atraído por el contexto general. Lee los primeros párrafos (gratis) y cuando llega al análisis concreto con números específicos, encuentra el paywall de Ghost: "Para ver los niveles exactos, suscribite a Rekt Capital PRO."

El lector que llegó ahí ya tiene suficiente contexto para entender el valor del análisis. La conversión de gratuito a pago es alta porque el producto se vende solo dentro del contenido.

### Por qué funciona específicamente para análisis técnico de crypto

El análisis técnico tiene una característica única: **los datos genéricos son gratis en cualquier lado, pero la interpretación experta tiene valor**. Cualquiera puede ver el precio de Bitcoin. No cualquiera puede interpretar qué significa un determinado patrón de velas en el contexto del ciclo de mercado.

Ghost permite que Rekt Capital publique:
- El gráfico (gratis — cualquiera lo puede ver en TradingView)
- El patrón que el gráfico muestra (gratis — contexto educativo)
- La interpretación de Rekt Capital y los niveles específicos (pago — el valor real)

Esta estructura de "contexto gratis / análisis pago" es exactamente cómo debería estructurar La Impresora su contenido premium.

### Estructura editorial aplicada a La Impresora

Adaptando el modelo de Rekt Capital al posicionamiento de La Impresora (crypto + AI para LATAM):

**Post tipo "análisis semanal de mercado" (modelo Rekt Capital):**
```
Párrafo 1-3: Contexto del mercado esta semana [PÚBLICO]
Párrafo 4-6: Los 3 factores que determinan la dirección [PÚBLICO]
--- PAYWALL GHOST ---
Párrafo 7-9: Los niveles concretos de soporte/resistencia [PRO]
Párrafo 10-12: Setup específico que estoy siguiendo [PRO]
Párrafo 13: Las 2 altcoins mejor posicionadas esta semana [PRO]
```

**Post tipo "oportunidad de AI" (propio de La Impresora):**
```
El problema que resuelve [PÚBLICO]
Por qué es relevante para LATAM ahora [PÚBLICO]
--- PAYWALL GHOST ---
El setup técnico paso a paso [PRO]
Los ingresos realistas que podés esperar [PRO]
Las 3 herramientas específicas que usar y cómo usarlas [PRO]
```

---

## 5. Oportunidades que Ghost habilita que Beehiiv no tiene

### Paywall por post (cobrar por artículo individual)

Ghost permite configurar posts individuales como de pago sin que el lector necesite suscripción mensual. Esto se llama "single-issue purchase" y se puede implementar con:
- Ghost nativo + Stripe (compra única que da acceso al post permanentemente)
- Integración con Gumroad donde el link de acceso abre el post en Ghost

Aplicación para La Impresora: un informe especial "Portafolio DeFi para 2026 — La guía completa" a $15 de pago único, además de la suscripción mensual. Lectores que no quieren comprometerse con membresía mensual pueden comprar análisis específicos.

### Tiers múltiples de membresía sin límite

Ghost no limita la cantidad de tiers. Podés tener:

**Tier 1 — La Impresora Free:**
- Newsletter semanal
- Artículos de contexto general
- Acceso a la web con posts públicos

**Tier 2 — La Impresora PRO ($9.99/mes):**
- Newsletter diaria
- Análisis técnico profundo con niveles específicos
- Alertas de mercado vía email
- Acceso completo a archivo de artículos PRO

**Tier 3 — Club Inversor ($47/mes):**
- Todo PRO +
- Comunidad privada en Discord/Telegram
- Call mensual grupal con Nacho
- Portafolio modelo en tiempo real

**Tier 4 — Inner Circle ($197/mes, limitado a 20 miembros):**
- Todo Club +
- Acceso directo por DM
- Review mensual de portafolio personal
- Contenido exclusivo no publicado en ningún otro tier

En Beehiiv, este esquema requiere herramientas externas para los tiers 3 y 4. En Ghost, vive dentro de una sola plataforma.

### Integración con Stripe nativa sin intermediario

La diferencia no es solo técnica, es financiera y de control:

**Con Ghost + Stripe directo:**
- Los pagos llegan a tu cuenta Stripe inmediatamente
- Podés mover el dinero cuando querés
- Stripe te da acceso a herramientas avanzadas (Radar para fraude, Billing para gestión, Dashboard completo)
- Si cambiás de plataforma mañana, Stripe sigue siendo tuyo con todos los datos de facturación
- Podés aceptar pagos con crypto via Stripe (USDC en Ethereum/Solana/Polygon disponible en Stripe)

**Con Beehiiv Paid:**
- Los pagos pasan por Beehiiv primero, que usa Stripe en el backend
- El acceso a la cuenta Stripe es limitado o gestionado por Beehiiv
- Si cancelás Beehiiv, la relación con el suscriptor pagante queda en el limbo

Para LATAM específicamente, el Stripe directo importa porque Stripe permite configurar monedas de pago, manejar impuestos locales, y eventualmente aceptar stablecoins — algo que Beehiiv no puede configurar a ese nivel.

### SEO como canal de adquisición

Ghost genera las URLs más limpias, el HTML más semántico, y tiene el mejor rendimiento de carga entre las tres plataformas. Esto no es menor para La Impresora:

Un artículo bien escrito sobre "cómo comprar Bitcoin en Argentina 2026" en Ghost puede ranquear en primera página de Google en 2-3 meses con trabajo de SEO. Ese artículo captura suscriptores nuevos de forma orgánica sin costo de adquisición.

Beehiiv tiene capacidades SEO limitadas. Substack es directamente pobre en SEO.

Para una publicación en crecimiento sin presupuesto de ads, Ghost + SEO es el mejor canal de adquisición de largo plazo.

---

## 6. Recomendación final: ¿Beehiiv ahora y Ghost después, o Ghost desde el día 1?

### El argumento para arrancar en Beehiiv

**Fase 0-6 meses (0-5,000 suscriptores):**
Beehiiv tiene un plan gratis hasta 2,500 suscriptores con funciones suficientes para empezar. El foco en esta etapa es crecer la lista, no monetizar con membresías. Beehiiv gana aquí porque:
- Costo $0 hasta 2,500 suscriptores
- Programa de referidos nativo para acelerar crecimiento
- Boosts para captar suscriptores de otros newsletters del ecosistema
- Ad Network para primeros ingresos con sponsors mientras la lista es pequeña
- Analytics detallados para entender qué contenido funciona

En esta fase, el 0% de comisión de Ghost no importa porque los ingresos por membresías son bajos. Importa más crecer rápido.

**Trigger de migración a Ghost:**
Cuando los ingresos por membresías superen los ingresos por sponsors, y cuando el programa de referidos de Beehiiv ya no sea la principal palanca de crecimiento (porque ya tenés marca y SEO orgánico).

Señales concretas para migrar:
- Lista de 5,000+ suscriptores activos
- 200+ suscriptores pagos (MRR > $2,000)
- Sponsors representan menos del 40% del revenue total
- Necesitás múltiples tiers de membresía

### El argumento para arrancar directo en Ghost

Si el modelo de negocio desde el día 1 es **100% membresías** (sin sponsors, sin ad network), Ghost desde el principio tiene sentido porque:
- No perdés tiempo migrando cuando las cosas funcionen
- Evitás la "dependencia de referidos" de Beehiiv que puede inflar la lista con suscriptores de baja calidad
- Construís SEO desde el inicio (Ghost rankea mejor que Beehiiv)
- El plan Creator de Ghost a $25/mes es más barato que el plan Grow de Beehiiv a $42/mes

El riesgo: Ghost no tiene herramientas de crecimiento nativas. En fase temprana, el crecimiento de lista depende 100% de vos: SEO, redes sociales, partnerships manuales.

### Decisión recomendada para La Impresora

**Empezar en Beehiiv, con fecha de migración planificada a Ghost.**

**Razones específicas para La Impresora:**

1. **El mix de monetización está diseñado como híbrido.** La arquitectura actual tiene sponsors, ebooks, cursos, y membresías. Beehiiv sirve mejor ese ecosistema en las fases tempranas.

2. **LATAM necesita volumen de lista antes de pagar.** La conversión de lista a membresía en LATAM es más baja que en mercados anglófonos (menor poder adquisitivo, mayor resistencia al pago mensual recurrente). Necesitás 10,000-20,000 suscriptores para tener 300-500 pagantes. Beehiiv acelera llegar a ese volumen.

3. **Los sponsors son la monetización más accesible al inicio.** Con 1,000-3,000 suscriptores activos y buenas métricas de apertura, La Impresora puede vender sponsors antes de tener escala para membresías. Beehiiv tiene una Ad Network que simplifica eso.

4. **Migración es técnicamente simple cuando llegue el momento.** Ghost importa listas de CSV directamente. El contenido puede redirigirse con 301s. La migración de Beehiiv a Ghost se puede hacer en un weekend sin perder suscriptores si se ejecuta bien.

**Cronograma sugerido:**

| Fase | Periodo | Plataforma | Foco |
|------|---------|------------|------|
| Lanzamiento | Mes 1-3 | Beehiiv Free | Crecer lista, experimentar contenido |
| Tracción | Mes 4-9 | Beehiiv Scale ($99) | Activar referidos, primeros sponsors |
| Monetización | Mes 10-18 | Beehiiv | Membresías básicas, cursos, sponsors |
| Migración | Mes 18-24 | Ghost Pro / Self-Hosted | Cuando MRR membresías > $3,000/mes |

---

## 7. Checklist de migración Beehiiv → Ghost (cuando llegue el momento)

Para no perder tracción en la migración:

- [ ] Exportar lista completa de Beehiiv (CSV con todos los campos)
- [ ] Documentar segmentos activos en Beehiiv antes de migrar
- [ ] Configurar Ghost con mismo dominio (o subdominio newsletter.la-impresora.com)
- [ ] Importar lista a Ghost vía CSV
- [ ] Configurar tiers de membresía en Ghost + Stripe
- [ ] Redirigir el archivo de posts de Beehiiv a Ghost con 301s
- [ ] Comunicar el cambio a suscriptores antes de hacerlo (genera expectativa positiva si se enmarca como "mejora")
- [ ] Migrar primero los suscriptores pagos (alta prioridad: no perder facturación)
- [ ] Período de transición de 30 días con ambas plataformas activas
- [ ] Notificar a sponsors activos del cambio de plataforma (no afecta el deal, solo el link de tracking)

---

## Fuentes y referencias

- Ghost Foundation — ghost.org/pricing (precios verificados abril 2026)
- Ghost.org/docs — documentación oficial de membresías y tiers
- Beehiiv — beehiiv.com/pricing (plan Scale verificado)
- Rekt Capital — rektcapital.com (Ghost self-hosted, verificado)
- The Defiant — thedefiant.io (Ghost, verificado)
- Stripe — stripe.com/docs/crypto (aceptación de stablecoins)
- Creator Economy Report 2025 — ConvertKit (benchmarks de conversión)

*Nota: Los ingresos estimados de newsletters mencionados son proyecciones basadas en métricas públicas y comparables del sector, no cifras confirmadas por los creadores.*

---

*Documento generado para La Impresora · Actualizar cuando Ghost anuncie cambios en pricing o cuando Beehiiv agregue funciones de tiers múltiples*
