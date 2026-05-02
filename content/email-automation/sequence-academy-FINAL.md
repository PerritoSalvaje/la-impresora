# Secuencia Venta Academy ($197) — LISTO PARA BEEHIIV

**Trigger:** Suscriptor completó welcome sequence (día 14) Y abrió ≥3 de los 7 emails.
**Filter Beehiiv:** `engagement_score > 30 AND days_since_signup >= 14`
**Producto:** Hotmart product URL para Academy ($197 USD)
**Garantía:** 30 días, cero preguntas

---

## EMAIL 1 — Día 14 — Teaser

**Subject:** Algo grande viene (y quiero que lo sepas primero)
**Preview:** No quería que te enteraras por la web

```
Hola,

Vengo trabajando hace 8 meses en algo que se llama La Impresora Academy. La idea es simple: tomar TODO lo que mandamos en el newsletter (200+ ediciones, miles de horas de research) y empaquetarlo en un sistema que se pueda aprender en 6 módulos.

No es un curso de "compra esta moneda". Es el sistema completo:

→ Módulo 1: Cómo funciona el dinero (fiat, oro, crypto, AI). El marco mental.
→ Módulo 2: Custodia, seguridad, protección de patrimonio en LATAM
→ Módulo 3: DeFi en serio. Yield, riesgos, qué funciona en 2026
→ Módulo 4: Tokenización de activos reales
→ Módulo 5: AI para generar ingresos pasivos en LATAM
→ Módulo 6: Estructura tu vida financiera + plan de 90 días

Sale el viernes próximo. Si querés que te avise antes que abra al público (con descuento por ser parte de la lista), respondé a este email con la palabra "lista".

Si no, no pasa nada. Sigue gratis el newsletter del jueves.

La Impresora
```

---

## EMAIL 2 — Día 17 — Reveal + Lista de espera

**Subject:** Te cuento qué es lo que viene
**Preview:** Academy. 6 módulos. Acceso de por vida.

```
Hace 3 días te conté que estaba armando algo. Acá el detalle.

LA IMPRESORA ACADEMY

6 módulos completos. 8+ horas de video. PDFs descargables de cada módulo. Comunidad privada de alumnos. Q&A en vivo una vez al mes.

¿Para quién es?
- Para el que lee el newsletter y quiere ir al siguiente nivel
- Para el que quiere ENTENDER el sistema completo, no solo titulares
- Para el que prefiere aprender 1 sistema bien antes de mover plata

¿Para quién NO es?
- Para el que busca señales diarias de trading
- Para el que quiere "el próximo memecoin"
- Para el que cree que va a hacer click y entender DeFi en una hora

PRECIO

Lista pública: $297
Para vos (lista de espera): $197 (33% off, 48 horas desde apertura)

ABRE: viernes 9am ART

Te avisaría 1 hora antes.

GARANTÍA: 30 días, cero preguntas. Si en el primer mes no valió la pena, te devolvemos todo.

Sigue gratis el newsletter pase lo que pase.

La Impresora
```

---

## EMAIL 3 — Día 21 — Apertura

**Subject:** Las puertas están abiertas
**Preview:** Academy abre por 48 horas con descuento

```
Está abierto.

→ laimpresora.io/academy

48 horas a $197. Después sube a $297 y se queda ahí.

Acceso de por vida (incluido updates futuros). Comunidad privada (Telegram). Q&A en vivo.

30 días de garantía sin preguntas.

Si tenés dudas concretas (técnicas, de pago, de contenido), respondé a este email. Te respondo personal en menos de 12 horas.

La Impresora

PD: el viernes a esta hora cierra el descuento.
```

---

## EMAIL 4 — Día 23 — Objeciones + testimonios

**Subject:** Lo que me están preguntando
**Preview:** Las 5 dudas que más me llegan

```
Llevamos 36 horas con Academy abierto. Te paso las preguntas reales que me están llegando, por si tenés las mismas:

1. "¿Es para principiantes o avanzados?"
Para los dos. Módulo 1 arranca de cero (qué es el dinero). Módulo 5 es sofisticado (operativa AI para ganar plata). El que ya sabe puede saltearse el inicio.

2. "¿Vale la pena $197?"
Si te ahorra UN error de seguridad: sí. Si lográs poner aunque sea $100 en stablecoins después de mirarlo: sí. El módulo 4 solo (tokenización) explica oportunidades que el 99% del mercado en español no entiende todavía.

3. "¿Tengo que ser de Argentina?"
No. Hay alumnos en MX, CO, CL, PE, UY, ES. El contenido cubre los 5 países principales. Lo que es específico AR está marcado.

4. "¿Cuánto dura?"
A tu ritmo. Lectura/video estimado 8 horas. Pero la mayoría lo va revisitando — es referencia, no Netflix.

5. "¿Y la comunidad?"
Telegram privado. Otros alumnos compartiendo qué hacen. Yo paso 2-3 veces por semana. Q&A en vivo el primer viernes de cada mes.

→ laimpresora.io/academy ($197 hasta mañana 9am)

La Impresora
```

---

## EMAIL 5 — Día 25 — Cierre 24h

**Subject:** Últimas 24 horas. Después cierra el carrito.
**Preview:** Mañana 9am sube a $297

```
24 horas. Después Academy se queda en $297.

Si lo pensaste y dijiste "después" — es ahora.

→ laimpresora.io/academy

$197. Acceso de por vida. 30 días de garantía total (te devolvemos todo, sin preguntas, si no valió la pena).

Tres cosas que pasan después de mañana:
1. El precio sube a $297 (no es marketing — es el precio de lista)
2. La comunidad nueva se cierra hasta el próximo lanzamiento
3. Si esperás al próximo lanzamiento, va a ser en marzo

Si lo querés, esta es la mejor ventana.
Si no, gracias por leer hasta acá. El newsletter sigue gratis.

La Impresora
```

---

## SETUP EN BEEHIIV

Beehiiv → Automations → New:
- Nombre: "Academy Sales Sequence"
- Trigger: "Subscriber engagement score > 30" + "Days since signup >= 14"
- Filter: NOT tagged "academy_purchaser"
- Add Email × 5 con delays:
  - Email 1: Send immediately
  - Email 2: Wait 3 days
  - Email 3: Wait 4 days (este es el día de apertura — coordinar con Hotmart)
  - Email 4: Wait 2 days
  - Email 5: Wait 2 days

**Después de Email 5:** auto-tag "academy_attempt_finished" para evitar enviar la secuencia 2 veces.

**Si compra:** webhook Hotmart → tag "academy_purchaser" → secuencia se detiene.

---

## MÉTRICAS

| Email | Open target | Click target | Conversion target |
|---|---|---|---|
| 1 (teaser) | 50%+ | 8%+ | — |
| 2 (reveal) | 45%+ | 12%+ | — |
| 3 (apertura) | 50%+ | 18%+ | 1.5-3% compra |
| 4 (objeciones) | 35%+ | 10%+ | 0.5-1% compra |
| 5 (cierre) | 40%+ | 15%+ | 1-2% compra |

**Total esperado:** 3-6% de la lista filtrada compra Academy en cada lanzamiento.
**A 1,000 subs activos:** 30-60 ventas × $197 = $5,910-$11,820 por lanzamiento.
