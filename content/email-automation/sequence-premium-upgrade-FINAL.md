# Secuencia Upgrade Premium ($9/mes ó $79/año) — LISTO PARA BEEHIIV

**Trigger:** 30 días desde suscripción + open rate ≥40% + 0 compras
**Filter:** `days_since_signup >= 30 AND open_rate_30d >= 40 AND NOT tagged premium_member`
**Producto:** Beehiiv Premium tiers (Stripe Connect) o redirect a /premium

---

## EMAIL 1 — Día 30 — Soft invite

**Subject:** Algo que preparamos para los más comprometidos
**Preview:** No es un curso. Es un nivel adicional del newsletter.

```
Hola,

Llevás un mes leyendo La Impresora. Gracias.

Hay una capa adicional que arme para los que quieren ir más a fondo. La llamamos Premium.

¿Qué es?

→ Newsletter exclusivo los viernes (1,500+ palabras de análisis profundo de UNA oportunidad concreta esa semana)
→ Portafolio modelo actualizado mensual (cómo está distribuido y por qué)
→ Alertas por email cuando algo importante cambia (no diariamente)
→ Comunidad privada en Telegram con otros miembros operando en serio
→ Sesión Q&A en vivo una vez al mes
→ 30% off en libros, packs y curso

¿Cuánto?

$9/mes ó $79/año (33% off anual).

Mañana te mando los detalles. Si querés mirarlo ahora: laimpresora.io/premium

La Impresora
```

---

## EMAIL 2 — Día 32 — Precio + valor

**Subject:** $9 al mes. Y por qué tiene sentido.
**Preview:** Menos que un café por semana.

```
Ayer te conté de Premium. Hoy el detalle.

PRECIO: $9 USD/mes ó $79 USD/año (te ahorrás $29).

¿Por qué $9 y no más?

Porque el sweet spot LATAM no es $19, es $9. Es el precio donde la decisión es "barato, lo pruebo" en vez de "lo pienso".

¿Por qué no $1 entonces?

Porque a $1 los procesadores de pago se quedan con el 33% en fees fijos. Y porque a $1 nadie le pone valor. $9 es el mínimo donde:
- El cliente lo toma en serio
- Yo puedo cubrir los costos de servidor + tiempo + comunidad
- Vos no sentís que es una decisión grave

¿Qué recibís por mes?

→ 4 newsletters exclusivos los viernes (uno por semana)
→ 1 actualización del portafolio modelo
→ Alertas (típicamente 2-4 por mes — solo cuando importa)
→ Acceso continuo al Telegram
→ 1 sesión Q&A en vivo

Si lo pensás como costo por análisis: $9 por 4 análisis profundos = $2.25 cada uno.
Si lo pensás como costo por hora de tu tiempo ahorrado: probablemente menos de $1/hora.

GARANTÍA

30 días, cero preguntas. Cancelás con un click desde tu cuenta.

→ laimpresora.io/premium

La Impresora
```

---

## EMAIL 3 — Día 35 — Beneficio específico (el preview)

**Subject:** El análisis que sale solo para Premium esta semana
**Preview:** Te paso el primer párrafo gratis

```
Para que sepas qué tipo de cosas mando en el newsletter Premium del viernes, te paso el primer párrafo del de esta semana:

—

"Lo que no se dice de la nueva regulación SEC sobre stablecoins es que afecta MÁS a USDT que a USDC. Eso significa dos cosas para vos si operás desde LATAM: (1) podés ver de-pegging temporal de USDT en exchanges chicos las próximas 4-6 semanas, (2) acumular USDC ahora a $1.000 puede valer la pena vs. USDT a $0.998 por la asimetría regulatoria. Acá las 3 plataformas donde el spread sigue justificable, los 2 escenarios de cómo se resuelve esto, y mi propio movimiento esta semana..."

—

Eso es el tipo de cosas que NO entra en el newsletter gratuito (es muy específico, muy contextual, muy "haz X esta semana").

Si querés acceso al resto + a las próximas 51 ediciones del año:

→ laimpresora.io/premium ($9/mes — 30 días garantía)

Si no es para vos, no pasa nada. El newsletter del jueves sigue gratis.

La Impresora
```

---

## EMAIL 4 — Día 38 — Caso de uso

**Subject:** Lo que Andrés hizo con el análisis del lunes
**Preview:** Resultado concreto de un miembro Premium

```
Andrés (miembro Premium hace 4 meses, vive en Mendoza) me escribió en privado el martes pasado.

Le había mandado el análisis del viernes sobre re-balance de stablecoin yield: pasar de Aave (4.2% APY) a una alternativa que pagaba 6.8% con el mismo nivel de auditoría. La acción era específica: ~15 minutos de bridge + supply.

Andrés tenía $4,200 en Aave. Hizo el cambio el sábado.

A 12 meses (si los rendimientos se mantienen) eso son $108 USD adicionales sin haber tomado más riesgo.

$108 vs los $108 que le costó Premium ese año.

Cubierto.

Y eso es UN análisis. Mando 4 al mes.

—

Esto NO es marketing inflado: el cálculo es matemática (4.2% → 6.8% sobre $4,200). El "riesgo" de la nueva plataforma está en el análisis original (auditorías recientes, TVL, track record).

Si te imaginás algo similar en tu situación:

→ laimpresora.io/premium

La Impresora
```

---

## EMAIL 5 — Día 41 — Última llamada

**Subject:** Última invitación a Premium (después no insisto más)
**Preview:** Si no es ahora, no pasa nada

```
Es el último de esta serie.

Te mandé 5 emails sobre Premium en 2 semanas. Si no es para vos, perfecto — no te voy a mandar más.

Si SÍ es para vos pero lo dejaste pendiente, esta es la oportunidad de empujar el botón.

→ laimpresora.io/premium ($9/mes ó $79/año)

3 razones honestas para suscribirte:
1. Cuesta menos que 1 café por semana
2. Garantía 30 días total — probás un mes, si no, te devuelvo todo
3. Cancelás con un click sin trámites

3 razones honestas para NO suscribirte (te las digo yo):
1. Si todavía no tenés cripto/stablecoins/wallet → primero hacé eso, después volvé
2. Si lees el newsletter del jueves y nunca lo aplicaste → Premium no va a cambiar eso
3. Si esperás "señales de trading" para multiplicar plata rápido → no es lo que hago

Si después de eso querés probar:

→ laimpresora.io/premium

Si no, el newsletter del jueves sigue. Gracias por estar.

La Impresora
```

---

## SETUP EN BEEHIIV

Beehiiv → Automations → New:
- Nombre: "Premium Upgrade Sequence"
- Trigger: "Days since signup >= 30" + "Open rate (30d) >= 40%"
- Filter: NOT tagged "premium_member" AND NOT tagged "academy_purchaser_recent"
- Email × 5 con delays:
  - 1: send immediately
  - 2: +2 days
  - 3: +3 days
  - 4: +3 days
  - 5: +3 days

**Si suscribe a Premium:** webhook → tag "premium_member" → automation se detiene.

---

## MÉTRICAS

| Email | Open target | Conversion target |
|---|---|---|
| 1 (soft invite) | 45%+ | — |
| 2 (precio) | 40%+ | 0.3-0.6% |
| 3 (preview) | 35%+ | 0.5-1% |
| 4 (caso) | 35%+ | 0.5-1% |
| 5 (cierre) | 30%+ | 0.3-0.5% |

**Total esperado:** 1.5-3% de la lista filtrada se convierte a Premium por ciclo.
**A 1,000 subs activos:** 15-30 nuevos Premium × $9/mes = $135-$270 MRR adicional.
