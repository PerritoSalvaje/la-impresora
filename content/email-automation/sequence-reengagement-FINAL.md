# Secuencia Re-engagement Inactivos 60d — LISTO PARA BEEHIIV

**Trigger:** 0 opens en últimos 60 días Y suscriptor hace 90+ días
**Filter:** `last_open_days >= 60 AND days_since_signup >= 90 AND NOT tagged premium_member`
**Objetivo:** Recuperar inactivos O sunset (limpia lista, sube deliverability)

---

## EMAIL 1 — Día 60 (sin abrir) — Soft check

**Subject:** ¿Sigue siendo útil esto para vos?
**Preview:** Dos minutos para decirme

```
Hola,

Hace 2 meses que no abrís un email. Puede ser que:
- Estés ocupado, sin problema
- Ya no te interese el tema, también está bien
- Te metés a la web pero no abrís el mail
- Te llegan a spam (a veces pasa)

Te dejo 3 best-of recientes por si querés re-conectar:

→ El error de la primera compra cripto (90% lo comete) — laimpresora.io/blog/que-es-bitcoin-y-como-funciona
→ Cómo dolarizar pesos sin trámites — laimpresora.io/recursos/dolarizar
→ AI para ganar plata desde LATAM — laimpresora.io/blog/como-usar-chatgpt-ganar-dinero

Si abrís uno, vuelvo a mandarte el newsletter normal.

Si no, te mando UN email más y te doy de baja para no molestarte.

La Impresora
```

---

## EMAIL 2 — Día 64 — Regalo + segunda chance

**Subject:** Te guardé algo
**Preview:** El Mapa de Dolarización LATAM, completo

```
No querés más emails — entiendo.

Antes de irte, te dejo algo que vale.

El "Mapa de Dolarización LATAM 2026". 14 páginas con las 7 vías legales para parar la pérdida de tu peso. Calculadora interactiva. Plan 90 días.

→ laimpresora.io/recursos/dolarizar

No te pido nada a cambio. Es público.

Si en algún momento querés volver al newsletter, sabés dónde encontrarme.

Si no, te doy de baja en 5 días sin hacer ruido.

La Impresora
```

---

## EMAIL 3 — Día 70 — Sunset clause

**Subject:** ¿Querés seguir en la lista? (sino te doy de baja)
**Preview:** Última pregunta. Responder o ignorar.

```
Última.

Si querés seguir recibiendo La Impresora, hacé click en este link:
→ laimpresora.io/?ref=keep_me_in

Si no hacés click en 7 días, te doy de baja automáticamente. Sin drama.

¿Por qué hago esto?

Porque mantenerte en la lista cuando no leés perjudica a los demás:
- Sube los costos del newsletter
- Baja la "tasa de apertura" promedio
- Hace que más correos vayan a spam de los que SÍ leen

Por eso lo limpio cada cierto tiempo.

Gracias por el tiempo que sí estuviste.

La Impresora
```

---

## ACCIÓN AUTOMÁTICA — Día 77

Beehiiv → Automation → "If no click on link in last 7 days":
- Move to "Cold archive" segment (no recibe envíos regulares)
- Tag: "sunsetted_2026"
- Re-activación posible 1 vez por trimestre con "best-of" suelto

**Importante:** NO borrar el suscriptor. Solo mover a segmento que NO recibe envíos. Eso preserva la posibilidad de re-engagement futuro y mantiene historial.

---

## SETUP EN BEEHIIV

Beehiiv → Automations → New:
- Nombre: "Re-engagement / Sunset"
- Trigger: "Days since last open >= 60" + "Days since signup >= 90"
- Filter: NOT tagged "premium_member"
- Email × 3 con delays:
  - 1: send immediately (al cumplir trigger)
  - 2: +4 days
  - 3: +6 days
- Action al final: "If no click in 7 days → move to segment 'cold_archive'"

---

## MÉTRICAS

| Email | Open target | Click "keep me" target |
|---|---|---|
| 1 (soft check) | 15-25% | — |
| 2 (regalo) | 10-18% | 5-10% reactivan |
| 3 (sunset) | 8-15% | 3-7% click "keep me" |

**Esperable:** 10-20% de inactivos re-engagement. El resto a sunset.
**Beneficio:** sube open rate global +5-10pp en 60 días post-sunset, mejora deliverability hacia activos reales.

---

## NOTA IMPORTANTE — POR QUÉ HACER ESTO

Una lista de email con 50% inactivos no vale 50% — vale menos del 30%, porque:
1. Gmail/Outlook penalizan baja interacción → mandan al spam a TODOS, incluso a los activos
2. Beehiiv cobra por suscriptor (cada inactivo te cuesta plata sin generar valor)
3. Las métricas se distorsionan (no sabes si tu contenido funciona)

Hacer sunset cada 60-90 días es higiene básica. Las grandes newsletters (Morning Brew, The Hustle) lo hacen religiosamente.
