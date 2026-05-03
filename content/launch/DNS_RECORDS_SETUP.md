# DNS Records Setup — Namecheap (laimpresora.io)

**Cuando compres laimpresora.io en Namecheap, antes de cargar nada en Vercel,
configurá estos records DNS para que Beehiiv pueda enviar emails sin que terminen en spam.**

Beehiiv te genera los CNAMEs DKIM exactos cuando agregues "Custom Sending Domain" en Settings.
El resto los podés cargar ahora.

---

## SPF (un solo TXT en root @, NUNCA dos SPF separados)

```
Type:  TXT
Host:  @
Value: "v=spf1 include:_spf.beehiiv.com include:_spf.google.com ~all"
TTL:   300
```

(Si NO usás Google Workspace, sacá el include de google.com)

---

## DKIM (3 CNAMEs — Beehiiv los genera, copiá-pegá)

```
Type:  CNAME
Host:  bh1._domainkey
Value: bh1._domainkey.laimpresora.io.dkim.beehiiv.com.

Type:  CNAME
Host:  bh2._domainkey
Value: bh2._domainkey.laimpresora.io.dkim.beehiiv.com.

Type:  CNAME
Host:  bh3._domainkey
Value: bh3._domainkey.laimpresora.io.dkim.beehiiv.com.
```

(Los hostnames exactos los da Beehiiv en Settings → Custom Domain → Verify)

---

## DMARC (CRÍTICO — empezar suave, escalar gradualmente)

### Día 1-14: política "none" (solo monitoreo, no afecta entrega)
```
Type:  TXT
Host:  _dmarc
Value: "v=DMARC1; p=none; rua=mailto:dmarc@laimpresora.io; ruf=mailto:dmarc@laimpresora.io; fo=1; adkim=r; aspf=r; pct=100"
TTL:   300
```

### Día 15+ (si SPF/DKIM 100% pass en Postmaster Tools):
```
Value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@laimpresora.io; pct=25"
```

### Día 45+ (con metrics estables):
```
Value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@laimpresora.io; pct=100"
```

### Día 90+ (deliverability comprobada):
```
Value: "v=DMARC1; p=reject; rua=mailto:dmarc@laimpresora.io"
```

**NUNCA empezar en p=reject — bouncearías legítimos los primeros días.**

---

## MX (para recibir replies en hola@laimpresora.io)

### Opción A: Google Workspace ($7/mes/user — recomendado)
```
Type: MX  Host: @  Priority: 1   Value: smtp.google.com
```

### Opción B: Zoho Mail Free (1 user, 5GB — gratis)
```
Type: MX  Host: @  Priority: 10  Value: mx.zoho.com
Type: MX  Host: @  Priority: 20  Value: mx2.zoho.com
Type: MX  Host: @  Priority: 50  Value: mx3.zoho.com
```

(Sin esto NO podés recibir replies — y los CTAs del welcome piden "respondeme")

---

## Subdominio de tracking Beehiiv

```
Type:  CNAME
Host:  email
Value: tracking.beehiiv.com
```

Mejora CTR aparente (no muestra "via beehiiv.com" en la URL del click).

---

## Dominio principal → Vercel

```
Type:  A
Host:  @
Value: 76.76.21.21

Type:  CNAME
Host:  www
Value: cname.vercel-dns.com
```

(Vercel te da los valores exactos en Project → Settings → Domains)

---

## Opcionales (mejora score Google +5-10pp)

### MTA-STS
```
Type:  TXT
Host:  _mta-sts
Value: "v=STSv1; id=20260502"
```

### TLS-RPT
```
Type:  TXT
Host:  _smtp._tls
Value: "v=TLSRPTv1; rua=mailto:tls@laimpresora.io"
```

---

## VERIFICACIONES POST-SETUP (5 minutos)

```bash
# 1. SPF correcto
dig TXT laimpresora.io +short

# 2. DKIM activo (los 3)
dig CNAME bh1._domainkey.laimpresora.io +short
dig CNAME bh2._domainkey.laimpresora.io +short
dig CNAME bh3._domainkey.laimpresora.io +short

# 3. DMARC presente
dig TXT _dmarc.laimpresora.io +short

# 4. MX configurado
dig MX laimpresora.io +short

# 5. Score completo (debería dar 9+/10)
# https://www.mail-tester.com/ — mandate un email a la dirección que te da
```

---

## SI ALGO FALLA

| Síntoma | Causa probable | Fix |
|---|---|---|
| Beehiiv "Domain not verified" | DKIM no propagó | Esperar 30-60 min, retry |
| Mail-tester score &lt; 7 | SPF mal o DMARC muy estricto desde día 1 | Bajar DMARC a p=none |
| Inbox placement Gmail bajo | Reputación de IP shared baja | Warmup gradual (50→200→400 subs/día) |
| "Via beehiiv.com" visible en clicks | CNAME tracking no seteado | Agregar `email.laimpresora.io` |
| Replies no llegan a hola@ | MX no configurado o Workspace no activo | Verificar MX records |

---

## TIMELINE RECOMENDADO

| Cuándo | Acción |
|---|---|
| Día 0 (compra dominio) | A record + CNAME www → Vercel |
| Día 0 (mismo) | SPF + DMARC p=none + Workspace MX |
| Día 1 | Beehiiv → Custom Domain → pegar 3 DKIM CNAMEs |
| Día 2-3 | Verificar con dig + mail-tester |
| Día 4 | Importar primeros 5 amigos manualmente |
| Día 8-14 | Importar 50/día |
| Día 15 | DMARC → p=quarantine pct=25 |
| Día 30 | Cambiar a Vercel KV / Upstash si rate limit a escala |
| Día 45 | DMARC → p=quarantine pct=100 |
| Día 90 | DMARC → p=reject |

---

**Si se traba algo: mandame el output de los `dig` y screenshot del error de Beehiiv.**
