# La Impresora Syndicate — Propuesta Completa

> Documento interno — Uso confidencial
> Version: 1.0 | Fecha: Abril 2026

---

## AVISO LEGAL IMPORTANTE

Este documento es una propuesta interna de exploración. La Impresora Syndicate opera como club de inversión entre pares, NO como fondo de inversión regulado. Ningún aspecto de este documento constituye asesoramiento financiero, oferta pública de valores, ni captación regulada de fondos. Los participantes deben consultar a su propio asesor legal y fiscal antes de participar. La participación implica riesgo de pérdida total del capital.

---

## 1. EL CONCEPTO

### Qué es La Impresora Syndicate

La Impresora Syndicate es un club de inversión colectivo formado exclusivamente por lectores premium del newsletter La Impresora. Su propósito es agrupar capital de miembros que individualmente no pueden acceder a ciertos tickets mínimos de inversión, permitiéndoles participar en oportunidades de alto potencial que históricamente estaban reservadas para inversores institucionales o ballenas.

**La premisa es simple:** si 100 personas aportan $100 cada una, el grupo puede acceder a una oportunidad que requiere $10,000 de entrada mínima. Las ganancias (y las pérdidas) se distribuyen proporcionalmente.

### Por qué tiene sentido ahora

El modelo existe desde hace décadas en inversiones tradicionales (los "clubes de bolsa" de los años '80 y '90), pero las herramientas de 2026 lo hacen infinitamente más poderoso:

- **Multisigs en Gnosis Safe** eliminan la necesidad de confiar en una sola persona con el dinero
- **Smart contracts** distribuyen rendimientos automáticamente sin intermediarios
- **Stablecoins** permiten operar cross-border sin transferencias bancarias internacionales
- **DeFi** ofrece yields reales, on-chain y verificables, inaccesibles con menos de $5,000–$10,000 de ticket

Los newsletters más respetados del mundo ya lo están haciendo: Not Boring Ventures (Packy McCormick), Bankless Premium, The Generalist. No es experimentación — es la evolución natural de un newsletter de inversiones que tiene la confianza de su comunidad.

### En qué invierte el Syndicate

Las cuatro categorías de oportunidad:

**A. Yield Farming DeFi con tickets altos**
Pools de liquidez en Curve, Pendle, Aave V3, o protocolos en Ethereum/Solana que requieren mínimo $10,000 para que las fees de gas tengan sentido. APY target: 12–25% en stablecoins o ETH.

**B. Rondas privadas de proyectos crypto LATAM**
Pre-seed y seed de equipos de Argentina, México, Colombia, Brasil. Acceso directo por relaciones del newsletter, sin intermediarios de VC. Ticket mínimo típico: $5,000–$25,000.

**C. Nodos de validación compartidos**
Ethereum (32 ETH ~ $80,000 USD), Solana ($50,000 stake mínimo eficiente), u otras redes Proof-of-Stake. El Syndicate comparte un nodo y distribuye el staking yield proporcionalmente. Rendimiento esperado: 4–8% anual en la cripto nativa.

**D. Tokenización de activos del mundo real (RWA)**
Acceso a bonos tokenizados (Ondo Finance, Franklin Templeton on-chain), campos agrícolas tokenizados en Paraguay/Uruguay, inmuebles fraccionados. Tickets mínimos: $10,000–$50,000.

---

## 2. LA ESTRUCTURA LEGAL

### Contexto regulatorio general en LATAM

En Argentina, México y Colombia no existe regulación específica para "clubs de inversión crypto". El riesgo regulatorio principal no es la existencia del club, sino:

1. Captar fondos del público en general (evitable limitando a miembros ya existentes)
2. Prometer rendimientos garantizados (evitable con lenguaje correcto)
3. Operar como exchange sin licencia (no aplica, solo gestionamos fondos propios)
4. Evasión fiscal (mitigable con transparencia on-chain)

### Opción A — Multisig en Gnosis Safe (RECOMENDADA)

**Descripción:** El tesoro del Syndicate vive en una wallet multisig 3-de-5 (requiere 3 firmas de 5 firmantes para mover fondos). Sin entidad legal formal. Los firmantes son el editor del newsletter + 2-4 miembros elegidos por la comunidad.

**Ventajas:**
- Sin burocracia legal ni costo de constitución
- Transparencia total: cualquiera puede verificar el tesoro on-chain
- Descentralizado: ninguna persona puede mover fondos sola
- Setup en 1 hora, costo casi cero
- Auditable en tiempo real en etherscan/solscan

**Desventajas:**
- Sin personalidad jurídica: los participantes no tienen protección legal formal
- Distribución de rendimientos requiere coordinación manual o smart contract adicional
- Si hay pérdidas, no hay marco legal para reclamar

**Riesgo regulatorio:**
- Argentina: bajo. No hay prohibición de clubs de inversión informales entre privados
- México: bajo-moderado. CNBV no regula clubs privados que no capten del público
- Colombia: bajo. SFC solo regula captadores del público, no clubs cerrados

**Conclusión:** Es la estructura más simple, más transparente y suficiente para comenzar.

---

### Opción B — DAO en Snapshot + Gnosis Safe

**Descripción:** Mismo multisig, pero con votación on-chain en Snapshot para cada decisión de inversión. Los miembros reciben tokens de gobernanza (no transferibles, para evitar que sean clasificados como valores).

**Ventajas:**
- Gobernanza real: los miembros votan cada inversión
- Más descentralizado, menos riesgo de decisión unilateral
- Señal de transparencia y profesionalismo para atraer miembros de calidad

**Desventajas:**
- Más complejo de operar: cada decisión requiere votación, lo que puede ser lento
- Los tokens de gobernanza, incluso no transferibles, pueden crear ambigüedad legal en algunos países
- Requiere educación de los miembros para participar en gobernanza

**Riesgo regulatorio:**
- Argentina/México/Colombia: moderado. Si los tokens son interpretados como valores, puede crear problemas con los reguladores de mercado de capitales
- Mitigación: tokens no transferibles, sin valor económico propio, solo derechos de voto

---

### Opción C — Sociedad Civil Simple

**Descripción:** Contrato privado entre los participantes, firmado digitalmente. Regula los aportes, distribución de ganancias y salida. Sin registro público ni constitución formal.

**Ventajas:**
- Tiene soporte legal civil en Argentina, México y Colombia
- Define derechos y obligaciones por escrito
- Puede incluir cláusulas de salida, arbitraje, etc.

**Desventajas:**
- Off-chain: menos transparente que un multisig
- Requiere abogado para redactar correctamente (costo: $500–$2,000 USD)
- En caso de disputas, el proceso legal puede ser costoso y lento
- No es compatible nativamente con DeFi (requiere una entidad o persona física que firme las transacciones)

**Riesgo regulatorio:**
- Más bajo en el papel, pero más difícil de ejecutar on-chain
- Para operaciones DeFi, algún miembro igual termina actuando como custodio, creando el mismo riesgo que la opción A pero sin la transparencia del multisig

---

### Opción D — Club de Inversión Informal (sin estructura)

**Descripción:** Coordinación por Telegram/WhatsApp, pagos por transferencia a una billetera controlada por el editor. Sin contrato, sin multisig.

**Ventajas:**
- Cero fricción para empezar
- Sin costos de setup

**Desventajas:**
- Máximo riesgo de contraparte: toda la confianza está en una sola persona
- Sin mecanismo de auditoria ni transparencia
- En caso de error o desacuerdo, no hay recurso legal ni técnico
- Destruye la reputación del newsletter si algo sale mal

**Conclusión: No recomendada. El riesgo reputacional es demasiado alto.**

---

### Estructura recomendada para La Impresora Syndicate

**Opción A (Multisig Gnosis Safe) como base** con un Acuerdo de Participación simple (documento PDF firmado digitalmente) que establezca:

1. Naturaleza del club: inversión entre pares, no fondo regulado
2. Aporte por participante y proporcionalidad
3. Mecanismo de decisiones (quórum del 60% de participantes para nueva inversión)
4. Comisiones del gestor
5. Proceso de salida y liquidación
6. Renuncia expresa a clasificación como valor o instrumento financiero regulado
7. Reconocimiento de riesgo de pérdida total

---

## 3. EL MODELO FINANCIERO

### Parámetros del Syndicate

| Variable | Valor |
|---|---|
| Tamaño mínimo para operar | $10,000 USD |
| Tamaño objetivo inicial | $25,000–$50,000 USD |
| Ticket mínimo por participante | $100 USD |
| Ticket máximo por participante | $2,500 USD (para evitar concentración) |
| Máximo de participantes | 99 (por debajo del umbral típico de "oferta pública" en LATAM) |
| Moneda de operación | USDC en Ethereum o Solana |

### Estructura de comisiones

**Management Fee (comisión de gestión):** 2% anual sobre el AUM total del Syndicate. Se deduce del tesoro mensualmente (0.167% mensual) antes de distribuir rendimientos.

**Carry (comisión de éxito):** 20% sobre las ganancias netas. Se cobra únicamente cuando un deal se cierra con ganancia y después de recuperar el capital inicial del participante (estructura "hurdle rate" de 0%).

**Ejemplo concreto:**
- Syndicate de $25,000 USD
- Inversión en pool DeFi, APY 18% durante 12 meses
- Rendimiento bruto: $4,500
- Management fee 2%: -$500
- Rendimiento neto: $4,000
- Carry 20%: -$800 (va al editor/gestor)
- Rendimiento neto distribuido a participantes: $3,200
- Si un participante puso $500 (2% del fondo), recibe $64 de ganancia sobre su aporte
- Retorno efectivo para el participante: 12.8% neto

### Distribución de rendimientos

**Modelo A — Distribución trimestral:**
Los rendimientos acumulados se distribuyen en USDC directamente a la wallet de cada participante cada 3 meses. Simple, limpio, predecible.

**Modelo B — Reinversión automática:**
Los rendimientos se reinvierten en el fondo hasta el final del período (6 o 12 meses), maximizando el efecto compuesto. Solo se distribuye al cierre.

**Recomendación:** Modelo A para deals de yield (los miembros ven resultados con frecuencia), Modelo B para rondas privadas y RWA (iliquidez inherente al activo).

### Proceso de salida

Cada deal tiene su propio período de lock-up definido al inicio:

- **DeFi yield pools:** lock-up de 30–90 días, salida posible en cada ventana
- **Nodos de validación:** 12 meses mínimo, salida por traspaso de posición a nuevo miembro
- **Rondas privadas:** ilíquido hasta TGE o evento de liquidez del proyecto (típico: 12–36 meses)
- **RWA tokenizados:** según el término del activo subyacente (típico: 6–24 meses)

**Salida anticipada:** Si un participante necesita salir antes, puede ofrecer su posición a otros miembros actuales o a la lista de espera del Syndicate. El Syndicate no garantiza liquidez.

### Gestión del riesgo

- Nunca más del 30% del tesoro en un solo deal
- Mínimo 20% del tesoro en stablecoins de baja volatilidad en todo momento
- Voto de mayoría (60%) requerido para cualquier nueva inversión
- Límite de posición por deal: $15,000 máximo

---

## 4. LAS PRIMERAS 5 OPORTUNIDADES CONCRETAS

### Deal #1 — Liquidez en Pendle Finance (Ethereum)

**Tipo:** DeFi Yield
**Descripción:** Proveer liquidez al pool de sUSDe/USDC en Pendle Finance en Ethereum mainnet. Pendle permite fijar tasas de yield comprando "Principal Tokens" y recibir el exceso por encima de esa tasa fija.
**Ticket mínimo del deal:** $10,000 (las fees de gas hacen ineficiente tickets menores)
**APY estimado:** 15–22% en USDC/stablecoins (variable según condiciones del mercado)
**Duración:** 3–6 meses (renovable)
**Riesgo principal:** Smart contract risk, depegging de sUSDe, fluctuación del yield
**Auditoría:** Pendle está auditado por múltiples firmas, $2B+ TVL al momento de redactar
**Aporte del Syndicate:** $15,000–$20,000 del tesoro

---

### Deal #2 — Nodo de Validación Compartido en Ethereum

**Tipo:** Staking / Infraestructura
**Descripción:** El Syndicate capitaliza 32 ETH (~$80,000 al precio estimado de $2,500 por ETH en 2026) para operar un validador completo de Ethereum. Los miembros del Syndicate contribuyen proporcionalmente y reciben el staking yield (~4–5% APY en ETH).
**Estructura:** El nodo se opera a través de un proveedor de node-as-a-service (Allnodes, Stakefish, o similar) para eliminar la complejidad técnica de operar el hardware.
**Ticket mínimo del Syndicate:** $500 por participante para este deal
**APY estimado:** 4–5% en ETH (más la apreciación del ETH si ocurre)
**Riesgo principal:** Slashing por mal comportamiento del validador, downtime, precio ETH
**Nota:** Este deal requiere que el Syndicate tenga suficiente capital o combine con Syndicate #2 para completar los 32 ETH. Alternativamente, se puede hacer liquid staking via Rocket Pool (16 ETH mínimo con minipools).

---

### Deal #3 — Pre-compra de Tokenización de Campo Agrícola en Paraguay

**Tipo:** Real World Asset (RWA)
**Descripción:** Participación en la tokenización de un campo de soja en el Chaco paraguayo a través de una plataforma de RWA (Agrotoken o equivalente). El campo produce rendimiento agrícola que se distribuye en stablecoins. La tokenización permite liquidez secundaria en el mercado on-chain.
**Ticket mínimo del deal:** $10,000 USD
**Rendimiento estimado:** 8–14% anual en stablecoins (basado en precio internacional de soja y yield agrícola histórico de Paraguay)
**Duración:** 12–24 meses
**Riesgo principal:** Riesgo agrícola (clima, precio commodities), riesgo regulatorio Paraguay, smart contract risk de la plataforma de tokenización
**Due diligence requerido:** Verificar la plataforma de tokenización, el título de propiedad del campo, el historial del operador agrícola
**Nota:** Este deal requiere research adicional para identificar la plataforma específica activa en 2026. Agrotoken (Argentina/Brasil) y Landtoken (Paraguay) son candidatos a evaluar.

---

### Deal #4 — Ronda Seed de Proyecto Crypto LATAM

**Tipo:** Venture / Ronda Privada
**Descripción:** Acceso a la ronda seed de un equipo de la región (Argentina, México, Colombia, Brasil) con tracción real. El newsletter La Impresora tiene acceso directo a fundadores por su posición editorial, lo que permite deal flow que no está disponible en plataformas abiertas.
**Criterios de selección del proyecto:**
- Equipo con track record verificable
- Producto en mainnet o testnet avanzado
- Problema real en LATAM (remesas, acceso a dólares, infraestructura DeFi regional)
- Valoración de entrada razonable (FDV <$10M en seed)
**Ticket mínimo del deal:** $5,000–$25,000 según el proyecto
**Upside potencial:** 5x–20x si el proyecto tiene éxito (altamente especulativo)
**Riesgo principal:** Pérdida total del capital. La mayoría de proyectos seed fallan.
**Lock-up típico:** 12–36 meses hasta TGE o evento de liquidez
**Nota:** Este tipo de deal debe limitarse al 10–15% del tesoro total del Syndicate dada su naturaleza especulativa.

---

### Deal #5 — Bono Tokenizado de Gobierno LATAM en Ondo Finance

**Tipo:** RWA / Fixed Income
**Descripción:** Ondo Finance ofrece acceso a Treasuries de EE.UU. tokenizados (USDY) y productos equivalentes que generan 4.5–5.5% en stablecoins respaldados por instrumentos de renta fija. Es el deal de más bajo riesgo del portfolio: renta fija real, on-chain, con liquidez diaria en la mayoría de productos.
**Por qué es relevante para LATAM:** Inversores de Argentina, México y Colombia no pueden acceder directamente a Treasuries americanos fácilmente. El Syndicate los democratiza.
**Ticket mínimo de Ondo:** $5,000 USD en USDY
**APY estimado:** 4.5–5.5% en USDC (según tasa de la Reserva Federal en 2026)
**Riesgo principal:** Riesgo regulatorio de Ondo Finance, riesgo de contraparte del custodio de los Treasuries, smart contract risk
**Liquidez:** Alta — USDY tiene mercado secundario activo
**Este deal sirve como:** Reserva de liquidez del Syndicate que genera yield mientras espera mejores oportunidades

---

## 5. LA PÁGINA DE VENTAS DEL SYNDICATE

*Copy completo para laimpresora.io/syndicate*

---

### HERO SECTION

**Headline:**
> Las mejores oportunidades de inversión crypto nunca estuvieron disponibles para vos.
> Hasta ahora.

**Sub-headline:**
> La Impresora Syndicate agrupa lectores para acceder juntos a deals de $10,000–$100,000 que individualmente están fuera de alcance. Yields DeFi reales, rondas privadas, nodos de validación. Capital colectivo, oportunidades de nivel institucional.

**CTA:** Solicitar acceso a la whitelist

---

### PARA QUIÉN ES

**La Impresora Syndicate es para vos si:**

- Sos lector premium activo de La Impresora (condición necesaria, no suficiente)
- Podés invertir entre $100 y $2,500 que no necesitás en los próximos 6–12 meses
- Entendés que crypto implica riesgo de pérdida total y aun así querés exposure
- Preferís tener acceso verificado y transparente a oportunidades de nicho antes que jugártela solo en exchanges retail
- Querés aprender cómo se analizan e instrumentan deals de DeFi y venture crypto mientras participás

**No hace falta que seas experto técnico.** El equipo del Syndicate hace el análisis, los contratos y la ejecución. Vos decidís si entrás o no en cada deal con información completa.

---

### PARA QUIÉN NO ES

**La Impresora Syndicate NO es para vos si:**

- Necesitás el dinero que estás considerando aportar en menos de 12 meses
- Esperás rendimientos garantizados o "ganancias seguras" (eso no existe en crypto)
- No podés tolerar ver tu capital caer 30–50% sin vender en pánico
- Buscás un reemplazo a un plazo fijo o inversión de bajo riesgo
- No sos lector activo del newsletter y no tenés contexto de las oportunidades que analizamos
- Vivís en una jurisdicción donde participar en estructuras de este tipo está prohibido (consultá con un asesor local)
- Querés invertir más del 10–20% de tu patrimonio total en un vehículo de este riesgo

---

### CÓMO FUNCIONA

**Paso 1 — Whitelist**
Completás un formulario de interés. El equipo revisa que seas lector premium activo y que tu perfil encaje con el Syndicate. Hay cupo limitado (máximo 99 participantes en la primera cohorte).

**Paso 2 — Onboarding**
Si tu solicitud es aprobada, recibís el Acuerdo de Participación para firmar digitalmente. El acuerdo explica en lenguaje claro tus derechos, obligaciones y riesgos. Tenés 7 días para revisarlo (con tu propio asesor si querés).

**Paso 3 — Aporte inicial**
Enviás tu aporte en USDC a la wallet multisig del Syndicate (Gnosis Safe). La wallet es pública, auditable por cualquiera. Nadie puede mover fondos sin 3 firmas de 5 firmantes.

**Paso 4 — Deals y votaciones**
Cuando surge una oportunidad, el equipo publica un memo de inversión completo (riesgo, retorno, estructura, due diligence). Los miembros votan si participar. Si 60% vota a favor, el Syndicate avanza. Si no, el capital queda en la reserva.

**Paso 5 — Rendimientos**
Los yields se distribuyen trimestralmente en USDC directamente a tu wallet. Para deals de venture/RWA con lock-up, la distribución ocurre al cierre del deal.

**Transparencia total:** El tesoro del Syndicate es on-chain y público. En cualquier momento podés ver exactamente cuánto hay, dónde está invertido y cuánto generó.

---

### LOS RIESGOS (en serio, leer esto)

**Riesgo de pérdida total:** Crypto es altamente volátil. DeFi tiene riesgos de smart contract. Las rondas privadas tienen altísima tasa de fracaso. Podés perder el 100% de lo que aportás. Esto no es una hipótesis pesimista — es una posibilidad real que debés aceptar antes de participar.

**Riesgo de liquidez:** La mayoría de los deals tienen lock-up. Si necesitás el dinero antes de que el deal cierre, no hay garantía de poder salir. No hay "rescate" de tu posición.

**Riesgo de smart contract:** Incluso protocolos auditados pueden ser hackeados o exploiteados. El Syndicate hace due diligence pero no puede eliminar este riesgo.

**Riesgo regulatorio:** La regulación de crypto en LATAM está en evolución. Lo que hoy es legal y no regulado puede cambiar. El Syndicate no puede garantizar que tu participación no genere obligaciones fiscales o legales en tu jurisdicción. Consultá con un contador y/o abogado local.

**Riesgo de gestión:** El Syndicate está gestionado por el equipo de La Impresora. Podemos equivocarnos en el análisis de un deal. Podemos sobrestimar el APY de un pool. Podemos no anticipar un evento regulatorio. La transparencia on-chain y el multisig reducen el riesgo de fraude, pero no eliminan el riesgo de error.

**Riesgo de concentración:** Si aportás una porción significativa de tu patrimonio al Syndicate, amplificás todos los riesgos anteriores. El Syndicate no debería representar más del 5–10% de tu portfolio total.

**Sin garantía de rendimientos:** Todas las proyecciones de APY en este documento son estimaciones basadas en condiciones históricas. No son garantías. Los mercados cambian.

---

### CÓMO APLICAR

1. Ser lector premium activo de La Impresora (si no lo sos, [suscribite acá])
2. Completar el formulario de whitelist (10 minutos)
3. Esperar confirmación del equipo (hasta 7 días hábiles)
4. Firmar el Acuerdo de Participación si tu solicitud es aprobada
5. Enviar tu aporte en USDC a la dirección del multisig

**La primera cohorte es de máximo 50 participantes.** Damos prioridad a lectores activos de más de 3 meses. Los primeros en completar el proceso de onboarding tienen garantía de lugar.

[BOTÓN: Quiero estar en la whitelist]

---

### PREGUNTAS FRECUENTES

**¿Es legal?**
El Syndicate opera como club de inversión privado entre pares, no como fondo de inversión regulado. No captamos del público en general — solo de lectores activos del newsletter. Esto es legal en Argentina, México y Colombia para estructuras privadas que no ofrecen públicamente sus servicios. Sin embargo, las leyes varían y cambian. Consultá con un asesor en tu jurisdicción.

**¿Por qué USDC y no pesos/pesos mexicanos?**
Las oportunidades en las que invierte el Syndicate son en dólares o crypto. Operar en USDC elimina el riesgo cambiario dentro del Syndicate y permite operar cross-border sin transferencias bancarias internacionales.

**¿Puedo aportar más de $100?**
Sí, hasta $2,500 por participante. El límite existe para mantener la diversidad del Syndicate y evitar que un participante tenga poder desproporcionado.

**¿Qué pasa si el Syndicate quiere hacer un deal y yo no quiero participar?**
El Syndicate invierte como un todo. Si el 60% vota a favor de un deal, todos los fondos del tesoro participan. No hay "opt-out" por deal individual. Si esto no te resulta cómodo, el Syndicate probablemente no es para vos.

**¿Cómo sé que el dinero está seguro?**
El tesoro vive en una wallet multisig (Gnosis Safe) que requiere 3 de 5 firmas para mover fondos. La dirección de la wallet es pública. Podés verificar el balance en cualquier momento en etherscan o el explorador de la red correspondiente.

---

## 6. EL PROCESO DE SELECCIÓN DE PARTICIPANTES

### Filosofía de selección

El Syndicate no es para todos. La selección no es exclusiva por exclusiva — es para asegurarnos de que cada participante entiende lo que está haciendo, puede permitirse el riesgo, y agrega valor a la comunidad. Un Syndicate con 50 participantes bien elegidos funciona infinitamente mejor que uno con 99 participantes mal informados.

### Criterios de elegibilidad (no negociables)

**1. Ser lector premium activo del newsletter**
- Suscripción paga activa por al menos 90 días antes de aplicar
- Verificado via email registrado en la plataforma del newsletter
- Razón: los lectores activos tienen el contexto para evaluar los deals. Un participante que no lee el newsletter votará a ciegas, lo cual es malo para el Syndicate y para él mismo.

**2. KYC básico (transparencia, no regulación)**
El KYC del Syndicate no es regulatorio — no somos un exchange ni un banco. Es para:
- Verificar que la persona existe y es quien dice ser
- Prevenir que una sola persona cree múltiples cuentas para tener más votos
- Construir confianza entre los miembros

Datos requeridos:
- Nombre completo
- País de residencia
- Wallet address (que usarán para recibir distribuciones)
- Email de la suscripción newsletter
- Foto de DNI/pasaporte (solo para verificación interna, nunca publicada)

**3. Declaración de idoneidad**
El solicitante debe declarar por escrito que:
- Puede perder el 100% del capital aportado sin impacto material en su vida
- El aporte representa menos del 20% de su capital total disponible para inversión
- Entiende que esto no es un depósito bancario ni tiene garantía de ningún tipo
- Es mayor de 18 años y tiene capacidad legal para contratar en su jurisdicción

### El formulario de interés

**Preguntas del formulario:**

1. ¿Hace cuánto sos lector premium de La Impresora? (verificado automáticamente)
2. ¿Cuánto querés aportar al Syndicate? ($100 / $250 / $500 / $1,000 / $2,500)
3. ¿Tenés experiencia previa en DeFi? (Sí, avanzado / Sí, básica / No, pero quiero aprender)
4. ¿Tenés wallet propia en Ethereum o Solana? (Sí / No, necesito ayuda para crearla)
5. ¿Qué categoría de deals te interesa más? (DeFi yield / Nodos / Rondas privadas / RWA / Todos)
6. ¿Por qué querés participar en el Syndicate? (respuesta abierta, 2–3 oraciones)
7. ¿Entendés que podés perder el 100% del capital? (checkbox obligatorio)
8. ¿Consultaste con un asesor legal/fiscal sobre tu participación en un club de inversión? (Sí / No / Pienso hacerlo antes de firmar)

### Proceso de revisión

**Timeline:**
- Semana 1–2: Período de recepción de formularios (lista de espera abierta)
- Semana 3: Revisión del equipo. Se priorizan: tiempo de suscripción, experiencia declarada con crypto, monto de aporte (mayor aporte = mayor commitment)
- Semana 4: Notificación de aprobados. Envío del Acuerdo de Participación
- Semana 5–6: Período de firma y aporte inicial
- Semana 7: Cierre de la primera cohorte, primera reunión de Syndicate, presentación del primer deal

**Cupos:**
- Primera cohorte: 50 participantes máximo
- Cupos reservados para lectores con más de 12 meses de suscripción: 20
- Cupos abiertos por orden de llegada: 30

### Comunicación interna del Syndicate

Una vez admitidos, los miembros tienen acceso a:
- Canal privado de Telegram del Syndicate (solo miembros verificados)
- Memos de inversión antes de cada votación (PDF detallado)
- Dashboard en tiempo real del tesoro (link público a Gnosis Safe)
- Reporte mensual de performance (email)
- Reunión trimestral de Syndicate (Zoom, opcional)

---

## ROADMAP DE LANZAMIENTO

**Mes 1 (Mayo 2026):**
- Publicar la página de whitelist en laimpresora.io/syndicate
- Anunciar en el newsletter el lanzamiento del Syndicate
- Abrir el formulario de interés
- Configurar el Gnosis Safe multisig
- Redactar el Acuerdo de Participación (con revisión legal básica)

**Mes 2 (Junio 2026):**
- Cerrar el proceso de selección de la primera cohorte (50 participantes)
- Completar el KYC y firma del acuerdo
- Recibir aportes iniciales en USDC
- Publicar el primer memo de inversión (Deal #5 — Ondo Finance como deal ancla de bajo riesgo)
- Votación y ejecución del primer deal

**Mes 3 (Julio 2026):**
- Presentar Deal #1 (Pendle Finance yield pool)
- Primera distribución de rendimientos del Deal #5
- Abrir la lista de espera para la segunda cohorte

**Mes 6 (Octubre 2026):**
- Evaluación interna del Syndicate: performance, procesos, feedback de miembros
- Decisión sobre expansion (segunda cohorte, nuevas categorías de deals)
- Publicación de reporte semestral completo (transparencia total)

---

## METRICAS DE EXITO

**Corto plazo (6 meses):**
- 50 participantes en primera cohorte
- $25,000–$50,000 en el tesoro
- 2–3 deals ejecutados
- 0 incidentes de seguridad
- NPS de miembros > 7/10

**Mediano plazo (12 meses):**
- Rendimiento promedio del tesoro > 12% neto para los miembros
- Lista de espera activa para segunda cohorte (demanda > oferta)
- Reconocimiento como referente de club de inversión crypto en LATAM

**Largo plazo (24–36 meses):**
- Syndicate como servicio diferencial que justifica la suscripción premium del newsletter
- Deal flow propio (proyectos buscan al Syndicate, no al revés)
- Posible evolución a estructura legal más formal si el tamaño lo justifica

---

*Documento preparado por el equipo de La Impresora | Abril 2026*
*Este documento es confidencial y para uso interno. No distribuir sin autorización.*
