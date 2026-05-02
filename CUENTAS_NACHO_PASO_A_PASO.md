# 🚀 CUENTAS NACHO — Paso a paso (orden óptimo)

**Generado: 2026-05-02 por Wendy (dueña operativa de La Impresora)**
**Tiempo total estimado: ~2.5h tu tiempo**
**Resultado: negocio activado, todo el funnel cobra de verdad**

---

## ORDEN DE EJECUCIÓN (importante: hacé en este orden)

| # | Plataforma | Tu tiempo | Bloquea |
|---|---|---|---|
| 1 | Beehiiv (newsletter) | 10 min | TODO el sistema email |
| 2 | LemonSqueezy (cobros internacionales) | 30 min | Cobros + tienda + libros |
| 3 | Hotmart (cobros LATAM) | 30 min | Curso + Premium tier |
| 4 | Telegram BotFather | 5 min | Bot + comunidad gateada |
| 5 | Cafecito (donaciones AR) | 5 min | Tier Supporter |
| 6 | Dominio laimpresora.io (Namecheap → Vercel) | 15 min | SEO real |
| 7 | Vercel env vars (pegar todo) | 10 min | Activa el código |
| 8 | Google Search Console + token | 5 min | Tracking SEO |
| 9 | Aplicar afiliados (Bybit, Bitget, Binance, TradingView, Bitso) | 20 min | Revenue inmediato |
| 10 | KDP Amazon (cuando te avise yo) | 30 min cada libro | Regalías Amazon |

---

# 1️⃣ BEEHIIV (10 min)

**Por qué primero:** sin esto el form de captura sigue en modo fallback (no pierde emails, pero no manda welcome).

### Pasos exactos:
1. https://beehiiv.com → Sign up → email + password
2. Crear publication: nombre "La Impresora", URL slug "la-impresora", idioma "Spanish"
3. Saltar el onboarding del editor (no me sirve hoy)
4. Settings (engranaje arriba derecha) → **Integrations** → **API**
5. Click **"Create new API key"** → copiar el key (empieza con `bh_`)
6. Settings → Publication → Copy "Publication ID" (formato `pub_xxxxxxxx`)
7. Settings → **Sending email** → poner `hola@laimpresora.io` (necesitás dominio activo después)

**Para pegar en Vercel:**
```
BEEHIIV_API_KEY=bh_xxxxxxxxxxxxxx
BEEHIIV_PUB_ID=pub_xxxxxxxx
```

**Después (cuando tengas tiempo):**
- Settings → Automations → Create new → seguir las 4 secuencias FINAL en `content/email-automation/`
- Settings → Recommendations → activar (gratis, +20-30% subs/mes pasivo)

---

# 2️⃣ LEMONSQUEEZY (30 min)

**Por qué:** cobros internacionales con Merchant of Record (te resuelve IVA EU + Sales Tax US automáticamente).

### Pasos exactos:
1. https://lemonsqueezy.com → Sign up
2. Crear store: "La Impresora" → moneda USD → categoría "Education / Newsletter"
3. KYC: subir DNI/pasaporte + comprobante de residencia (~30 min de aprobación)
4. **Settings → Webhooks → Create webhook:**
   - URL: `https://laimpresora.io/api/webhooks/lemonsqueezy`
   - Signing secret: generá uno random largo (40+ caracteres) — guardalo
   - Events a suscribir (chequear estos):
     - `order_created`
     - `subscription_created`
     - `subscription_cancelled`
     - `subscription_expired`
5. **Settings → API → Create new API key** → copiar
6. Store ID: aparece en la URL del dashboard `app.lemonsqueezy.com/stores/[STORE_ID]/`
7. **Crear los 6 productos:**

| Producto | Precio | Variant Name | Tipo |
|---|---|---|---|
| Libro La Impresora | $9.99 | "PDF + EPUB" | One-time digital |
| Libro Tokenización | $9.99 | "PDF + EPUB" | One-time digital |
| Libro AI para Ganar Plata | $9.99 | "PDF + EPUB" | One-time digital |
| Pack 30 Prompts AI | $4.99 | "PDF + Notion" | One-time digital |
| Mini-guía Dolarización | $1.99 | "PDF" | One-time digital |
| Bundle Completo | $29 | "3 libros + prompts + 30d Telegram" | One-time digital |

8. Para cada producto: **Variants → Copy "Buy URL"** (formato `https://laimpresora.lemonsqueezy.com/checkout/buy/UUID`)

**Para pegar en Vercel (las 6 buy URLs + las 3 keys):**
```
LEMONSQUEEZY_API_KEY=lemon_xxxxxxxxxxxxxx
LEMONSQUEEZY_STORE_ID=12345
LEMONSQUEEZY_WEBHOOK_SECRET=tu_secret_random_largo

NEXT_PUBLIC_LS_LIBRO_IMPRESORA=https://laimpresora.lemonsqueezy.com/checkout/buy/UUID-1
NEXT_PUBLIC_LS_LIBRO_TOKEN=https://laimpresora.lemonsqueezy.com/checkout/buy/UUID-2
NEXT_PUBLIC_LS_LIBRO_AI=https://laimpresora.lemonsqueezy.com/checkout/buy/UUID-3
NEXT_PUBLIC_LS_PACK_PROMPTS=https://laimpresora.lemonsqueezy.com/checkout/buy/UUID-4
NEXT_PUBLIC_LS_MINI_GUIA=https://laimpresora.lemonsqueezy.com/checkout/buy/UUID-5
NEXT_PUBLIC_LS_BUNDLE=https://laimpresora.lemonsqueezy.com/checkout/buy/UUID-6
```

---

# 3️⃣ HOTMART (30 min)

**Por qué:** cobros LATAM con cuotas, OXXO, PIX, MercadoPago. Crítico para AR/MX/CO/CL/PE.

### Pasos exactos:
1. https://hotmart.com → Sign up como **Productor**
2. Verificar email + DNI/pasaporte
3. **Productos → Crear Producto:**

**Producto A: La Impresora Academy**
- Tipo: Curso online
- Precio: $197 USD (con cuotas hasta 12 sin interés en LATAM)
- Garantía: 30 días
- Descripción: copiar del archivo `content/curso/guion-modulos-1-2-3.md`
- Comisión afiliados: 40% (atrae afiliados rápido)
- Subir: portada (1280x720), 3 imágenes laterales, video preview

**Producto B: Premium Membership**
- Tipo: Suscripción mensual
- Precio: $9 USD/mes ó $79 USD/año
- Auto-renovación: SI
- Trial gratis: 7 días (opcional)

4. **Tools → Webhook (Postback 2.0):**
   - URL: `https://laimpresora.io/api/webhooks/hotmart`
   - Hottok: copiar el que te genera (string largo)
   - Eventos: `PURCHASE_COMPLETE`, `PURCHASE_APPROVED`, `PURCHASE_CANCELED`, `SUBSCRIPTION_CANCELLATION`
5. **Tools → API → Generar credentials** → copiar Client ID + Client Secret
6. Para cada producto: **copiar el Hotlink de pago** (`https://pay.hotmart.com/[CODE]`)

**Para pegar en Vercel:**
```
HOTMART_HOTTOK=tu_hottok_largo
HOTMART_CLIENT_ID=xxxxxxxxx
HOTMART_CLIENT_SECRET=xxxxxxxxx

NEXT_PUBLIC_HOTMART_ACADEMY=https://pay.hotmart.com/CODE_ACADEMY
NEXT_PUBLIC_LS_PREMIUM_MENSUAL=https://pay.hotmart.com/CODE_PREMIUM_MENSUAL
NEXT_PUBLIC_LS_PREMIUM_ANUAL=https://pay.hotmart.com/CODE_PREMIUM_ANUAL
```

---

# 4️⃣ TELEGRAM (5 min)

**Por qué:** comunidad Premium gateada por bot que verifica pagos.

### Pasos exactos:
1. Abrir Telegram → buscar `@BotFather` → `/start`
2. `/newbot` → nombre: "La Impresora Premium" → username: `LaImpresoraPremiumBot` (debe terminar en Bot)
3. **Copiar el token** (formato `123456789:ABCdefGHI...`)
4. `/mybots` → seleccioná el bot → **Bot Settings → Group Privacy → Disable** (importante para que lea mensajes)
5. Crear un canal/grupo privado: nombre "La Impresora Premium", **agregá tu bot como admin** con permisos de invitar usuarios
6. **Para obtener TELEGRAM_PREMIUM_CHAT_ID:**
   - Mandá un mensaje cualquiera al canal
   - Andá a `https://api.telegram.org/bot<TU_TOKEN>/getUpdates`
   - Buscá `"chat":{"id":-100xxxxxxxxxx}` — copiá ese número (incluye el `-100`)
7. **Para tu chat ID personal (admin notifications):**
   - Mandale `/whoami` al bot — te responde con tu chat_id
8. **Configurar el webhook:**
   ```bash
   curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://laimpresora.io/api/telegram/webhook&secret_token=<RANDOM_STRING>"
   ```

**Para pegar en Vercel:**
```
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjkl
TELEGRAM_PREMIUM_CHAT_ID=-1001234567890
TELEGRAM_ADMIN_CHAT_ID=tu_chat_id_personal
TELEGRAM_WEBHOOK_SECRET=string_random_de_40_caracteres
```

---

# 5️⃣ CAFECITO (5 min)

**Por qué:** donaciones one-shot AR. Más conveniente que Stripe para montos chicos.

### Pasos exactos:
1. https://cafecito.app → Sign up con email
2. Username: `laimpresora` (verificá disponibilidad)
3. Settings → Webhook URL: `https://laimpresora.io/api/webhooks/cafecito`
4. Generar Webhook Secret → copiarlo

**Para pegar en Vercel:**
```
CAFECITO_WEBHOOK_SECRET=tu_secret
```

(El link público https://cafecito.app/laimpresora ya está hardcoded en el código.)

---

# 6️⃣ DOMINIO laimpresora.io (15 min)

**Por qué:** todo el código tiene `BASE_URL = "https://laimpresora.io"` hardcoded. Sin esto, schema.org y canonical apuntan a un dominio que no existe → SEO sufre.

### Pasos exactos:
1. https://www.namecheap.com → Buscar `laimpresora.io` → comprar (~$30/año)
2. Esperar verificación email (5 min)
3. **Vercel:**
   - Ir a https://vercel.com → la-impresora project → Settings → **Domains**
   - Add Domain → `laimpresora.io`
   - Vercel te da nameservers (4 strings tipo `ns1.vercel-dns.com`)
4. **Namecheap:**
   - Domain List → Manage `laimpresora.io` → **Nameservers** → Custom DNS
   - Pegar los 4 de Vercel
5. **Esperar 30-60 min** para propagación DNS
6. Verificar en https://www.whatsmydns.net/ que `laimpresora.io` apunte a Vercel

(También configurá `www.laimpresora.io` con redirect a `laimpresora.io`)

---

# 7️⃣ VERCEL ENV VARS (10 min)

Pegar TODO lo de arriba en:
**vercel.com → la-impresora → Settings → Environment Variables**

Para cada variable: Add → name + value → **Production + Preview + Development** (las 3 marcadas).

Después de agregar todas, Vercel auto-redeploya.

**Verificá que esté todo OK:**
```bash
curl https://laimpresora.io/api/admin/stats
```
Debería devolver datos reales en `beehiiv` y `ls`.

---

# 8️⃣ GOOGLE SEARCH CONSOLE (5 min)

### Pasos:
1. https://search.google.com/search-console → Add Property
2. Tipo: **URL prefix** → `https://laimpresora.io`
3. Verification: HTML tag → copiar el meta token (formato `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
4. **Pegar en Vercel:**
```
NEXT_PUBLIC_GOOGLE_VERIFICATION=tu_token_aca
```
5. Después de redeploy, volvé a SC y dale "Verify"
6. Sitemap → Submit `https://laimpresora.io/sitemap.xml`

---

# 9️⃣ AFILIADOS (20 min — todos en paralelo)

Ya tenés KYC verificado en estos exchanges según research, así que la aplicación es rápida:

| Exchange | URL | Comisión | Tiempo aprobación |
|---|---|---|---|
| **Bybit** | https://www.bybit.com/en-US/affiliates | 30-50% lifetime | Instant |
| **Bitget** | https://www.bitget.com/en/partner/affiliate | 50% + bonos | 24h |
| **Binance** | https://www.binance.com/en/activity/affiliate | 20-40% | 24-48h (selectivo) |
| **MEXC** | https://www.mexc.com/affiliate | hasta 70% | Instant |
| **Bitso** | https://bitso.com/affiliates | 40% por 12m | Manual contact |
| **TradingView** | https://www.tradingview.com/affiliate-program | 30% recurrente | 24h |
| **Ledger** | https://shop.ledger.com/pages/affiliates | 10% | 48h |
| **Trezor** | https://trezor.io/affiliate | 12-15% | 48h |

**Cuando tengas los links de afiliado:** mandámelos en un mensaje y los enchufo en `lib/affiliates.ts` (lo creo cuando los tengas) — el código los va a usar en blog posts, comparativas, hubs.

---

# 🔟 KDP AMAZON (30 min cada libro — cuando yo te avise)

Ya tenés los 3 libros escritos:
- `LIBRO_LA_IMPRESORA.md` (1,451 líneas)
- `LIBRO_TOKENIZACION.md` (1,423 líneas)
- `LIBRO_AI_PARA_GANAR_PLATA.md` (2,049 líneas)

**Yo me ocupo de:**
1. Convertir cada uno a PDF profesional (formato 6x9 KDP)
2. Diseñar portada (1880x2500 px, JPG)
3. Generar descripción SEO (4,000 chars max)
4. Sugerir 7 keywords por libro + 2 categorías
5. Pricing strategy (KDP Select 90 días → wide release)

**Vos:**
1. Crear cuenta https://kdp.amazon.com (necesitás CUIT/RFC + tarjeta para tax info)
2. Subir cada libro (yo te paso el bundle)
3. Aprobar pricing y publicar

---

# ✅ CHECKLIST FINAL

Marca cada uno cuando esté hecho:

- [ ] Beehiiv → API_KEY + PUB_ID en Vercel
- [ ] LemonSqueezy → 3 keys + 6 buy URLs en Vercel
- [ ] Hotmart → 3 credentials + 3 hotlinks en Vercel
- [ ] Telegram → 4 vars en Vercel + webhook configurado
- [ ] Cafecito → WEBHOOK_SECRET en Vercel
- [ ] Dominio `laimpresora.io` → activo en Vercel
- [ ] Google Search Console → token + sitemap submit
- [ ] Afiliados → links pegados a Wendy
- [ ] KDP → cuenta creada (libros vienen después)

---

# 🧪 VERIFICACIONES POST-SETUP

Después de pegar todo, verificá que funcione:

```bash
# 1. Subscribe (debe devolver provider:"beehiiv", no "fallback")
curl -X POST https://laimpresora.io/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test+real@tu-email.com","source":"verify"}'

# 2. Dashboard interno (debe mostrar números reales)
curl https://laimpresora.io/api/admin/stats

# 3. Sitemap (debe ser >85 URLs)
curl https://laimpresora.io/sitemap.xml | grep -c "<loc>"

# 4. Telegram bot (mandale /start, debe responder)
```

---

# ⚠️ COSAS QUE PUEDEN SALIR MAL

| Error | Causa | Fix |
|---|---|---|
| Subscribe devuelve "fallback" | BEEHIIV_API_KEY incorrecta o pub_id mal | Re-copiar de Beehiiv Settings |
| Dominio "Invalid configuration" en Vercel | DNS no propagó | Esperar 1h, reintentar |
| Webhook LemonSqueezy 401 | LEMONSQUEEZY_WEBHOOK_SECRET no coincide | Re-generar y pegar en ambos lados |
| Bot Telegram no responde | Webhook no seteado o secret no coincide | Re-correr el setWebhook con el secret correcto |
| Cobros LATAM con error | Hotmart product no aprobado | Esperar moderación Hotmart (24-48h) |

---

# 📞 SI TE TRABA ALGO

Mandame por chat el error exacto + screenshot del paso. Yo voy a estar acá para destrabarte.

**Plan B:** si una plataforma se complica, hay alternativas:
- LemonSqueezy → Stripe + manual tax handling
- Hotmart → Gumroad (peor margen pero más simple)
- Beehiiv → Resend + DB propia (más trabajo pero más control)
