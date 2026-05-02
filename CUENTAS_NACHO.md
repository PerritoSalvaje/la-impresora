# 🚨 CUENTAS QUE NACHO TIENE QUE CREAR — Prioridad P0

**Generado: 2026-05-02 por Wendy (dueña de La Impresora)**
**Filosofía: yo construyo todo, vos solo creás cuentas y pegás keys.**

---

## 🔴 BLOQUEANTES — Sin estas el dinero NO entra

### 1. Beehiiv (newsletter — la base de todo)
- **URL:** https://beehiiv.com → Sign up
- **Plan:** Free hasta 2,500 subs (después Scale $42/mes a 10k)
- **Lo que necesito de vos:**
  - `BEEHIIV_API_KEY` → Settings → Integrations → API
  - `BEEHIIV_PUB_ID` → Settings → Publication → Copy ID
- **Dónde van:** Vercel → la-impresora project → Settings → Environment Variables
- **Tiempo: 10 min**

### 2. LemonSqueezy (cobros internacionales — clave para $1 supporter y micro-productos)
- **URL:** https://lemonsqueezy.com → Sign up
- **Por qué LemonSqueezy y no Stripe:**
  - Stripe cobra $0.30 fijo + 2.9% → en $1 te quedan $0.67 (33% de pérdida)
  - LemonSqueezy es 5% + $0.50 pero acepta merchant of record → declara IVA por vos en 100+ países
  - Mejor para LATAM porque acepta MercadoPago/OXXO/PIX
- **Lo que necesito:**
  - `LEMONSQUEEZY_API_KEY`
  - `LEMONSQUEEZY_STORE_ID`
  - `LEMONSQUEEZY_WEBHOOK_SECRET`
- **Tiempo: 20 min** (incluye verificación KYC)

### 3. Hotmart (curso $97 + membresía premium — gateway LATAM)
- **URL:** https://hotmart.com (ya tenés cuenta según research)
- **Lo que necesito:**
  - Crear producto "La Impresora Academy" — $97 USD
  - Crear producto "Premium Membership" — $9/mes ó $79/año
  - Pegarme los **product URLs** de checkout de Hotmart
- **Tiempo: 30 min**

### 4. Dominio laimpresora.io (Namecheap → Vercel)
- **URL:** https://www.namecheap.com/domains/registration/results/?domain=laimpresora.io
- **Costo:** ~$15-30/año (dominio .io)
- **Pasos:**
  1. Comprar el dominio
  2. En Namecheap → Domain List → Manage → Nameservers → Custom DNS → poner los de Vercel
  3. En Vercel → la-impresora → Settings → Domains → Add → laimpresora.io
- **Por qué:** todo el código y schema.org ya apunta a `https://laimpresora.io` (layout.tsx:9). Sin esto, SEO no rankea.
- **Tiempo: 15 min**

---

## 🟡 SEGUNDA OLA — Para acelerar growth (después de las P0)

### 5. X / Twitter — @laimpresora_io
- Ya está hardcoded como `creator: "@laimpresora_io"` en layout.tsx
- Solo crear el handle. Yo después armo el contenido.

### 6. Telegram — bot privado para comunidad Premium
- **URL:** @BotFather en Telegram → `/newbot` → "La Impresora Premium Bot"
- Pegarme el token → yo armo el bot que verifica pagos con webhook de LemonSqueezy/Hotmart y agrega al canal privado
- **Tiempo: 5 min**

### 7. YouTube — canal "La Impresora"
- Crear canal con email Google que vayas a usar
- Los 22 scripts ya están escritos en `content/youtube/`
- Activar monetización cuando tengas 1,000 subs (puede tardar)

### 8. Instagram + TikTok — @laimpresora.io
- Sólo handles, contenido lo armo yo

---

## 💰 AFILIADOS — Aplicar HOY (no esperan, se cobra de día 1)

Como ya tenés KYC verificado en estos exchanges (research detectado en `content/inteligencia/cuentas-y-afiliados-nacho.md`), aplicá YA:

| Programa | URL para aplicar | Comisión |
|---|---|---|
| **Bitget** | bitget.com/en/partner/affiliate | hasta 60% fees |
| **Bybit** | bybit.com/en-US/affiliates | hasta 50% fees |
| **Binance** | binance.com/en/activity/affiliate | hasta 50% fees |
| **TradingView** | tradingview.com/affiliate-program | 30% recurrente |
| **Bitso** | bitso.com/affiliates | 40% por 12 meses |
| **MEXC** | mexc.com/affiliate | hasta 70% fees |
| **Ledger** | ledger.com/affiliates | 10% por venta |
| **Beehiiv** | beehiiv.com/affiliate | 50% por 12 meses |
| **Hotmart** | app.hotmart.com/market | 40-60% por venta |
| **LemonSqueezy** | lemonsqueezy.com/partners | 25% por 12 meses |

**Cuando tengas los links:** pegámelos en este archivo y yo los enchufo en todas las páginas relevantes (comparativas, recursos, blog posts mencionando exchanges).

---

## 📦 KDP Amazon — Subir 3 libros (genera regalías de día 1)

Los 3 libros ya están escritos:
- `LIBRO_LA_IMPRESORA.md` (1,451 líneas)
- `LIBRO_TOKENIZACION.md` (1,423 líneas)
- `LIBRO_AI_PARA_GANAR_PLATA.md` (2,049 líneas)

**Qué necesito de vos:**
1. Crear cuenta en https://kdp.amazon.com (20 min, requiere TIN/CUIT)
2. Avisame y yo te genero los 3 PDFs formateados + portadas + descripciones SEO + categorías + keywords listas para subir
3. Tiempo total tuyo después de avisarme: ~30 min los 3 libros

**Pricing recomendado:**
- Edición Kindle: $4.99-$9.99
- Edición Paperback: $14.99
- KDP Select (90 días exclusividad Kindle Unlimited) → más visibilidad

---

## 🟢 LO QUE YO HAGO MIENTRAS TANTO (no necesito tu input)

- Construir página `/precios` con stack monetización completo
- Crear sistema de referidos (motor viral)
- Mejorar captura de email (popup, sticky bar, formulario en cada artículo)
- Poblar `/tienda` con micro-productos $1.99-$9.99
- Mejorar API de subscripción con tags y UTM tracking
- SEO: agregar metadata únicos, JSON-LD por artículo, internal linking
- Welcome sequence email (7 emails) lista para Beehiiv
- Esperar resultados de 6 agentes de research que están corriendo

---

## ⏱️ TIMELINE SUGERIDO

| Cuándo | Quién | Qué |
|---|---|---|
| HOY | Vos | Crear Beehiiv + LemonSqueezy + comprar dominio (~45 min total) |
| HOY | Yo | Página /precios + sistema referidos + lead magnets |
| Mañana | Vos | Aplicar a 5 afiliados prioritarios + KDP cuenta |
| Mañana | Yo | Integrar APIs + welcome sequence + popup captura |
| Esta semana | Ambos | First soft launch — invitar 50 personas tu red, verificar funnel completo |

**Meta concreta semana 1: 100 suscriptores reales pagando algo (puede ser $1).**
