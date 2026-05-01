# La Impresora — Pipeline de Automatización Completo
## Stack: Make.com + Claude API + Beehiiv + Perplexity API

> **Regla de oro:** NO se usa n8n. Toda la orquestación es Make.com como capa visual,
> y Wendy OS (Flow Engine propio) para lógica interna cuando aplica.

---

## ÍNDICE

1. [Pipeline 1 — Research → Newsletter → Publicación](#pipeline-1)
2. [Pipeline 2 — Newsletter → Redes Sociales](#pipeline-2)
3. [Pipeline 3 — Monitoreo de Mercado → Alertas](#pipeline-3)
4. [Pipeline 4 — Nuevo Suscriptor → Bienvenida](#pipeline-4)
5. [Costos del Stack](#costos)
6. [Setup Paso a Paso (Pipeline 1 en menos de 2 horas)](#setup)

---

## PIPELINE 1 — Research → Newsletter → Publicación {#pipeline-1}

### Visión general del flujo

```
Lunes 8am           Lunes 9am           Martes              Miércoles           Jueves 8am
[TRIGGER]     →     [RESEARCH]    →     [BORRADOR]    →     [FINALIZAR]   →     [PUBLICAR]
Schedule            Perplexity API      Claude API          Claude API          Beehiiv API
                    + Claude API        Notion/GDoc         (si no hay edits)
```

---

### Módulos Make.com — JSON de configuración

#### ESCENARIO 1A: Lunes 8am — Research de Topics

```json
{
  "name": "La Impresora — Research Semanal",
  "scheduling": {
    "type": "weekly",
    "day": 1,
    "time": "08:00",
    "timezone": "America/Argentina/Buenos_Aires"
  },
  "modules": [
    {
      "id": 1,
      "type": "builtin:BasicTrigger",
      "name": "Trigger Lunes 8am",
      "parameters": {}
    },
    {
      "id": 2,
      "type": "http:ActionSendData",
      "name": "Perplexity — Buscar trending topics",
      "parameters": {
        "url": "https://api.perplexity.ai/chat/completions",
        "method": "POST",
        "headers": [
          { "name": "Authorization", "value": "Bearer {{PERPLEXITY_API_KEY}}" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "model": "sonar-pro",
          "messages": [
            {
              "role": "system",
              "content": "Eres un investigador de mercados cripto y finanzas para LATAM. Responde siempre en español."
            },
            {
              "role": "user",
              "content": "Dame los 5 temas más importantes de crypto, Bitcoin y finanzas digitales de esta semana. Para cada tema: (1) título del tema, (2) resumen de 2-3 oraciones, (3) por qué le importa al inversor latinoamericano, (4) datos o cifras concretas si los hay. Formato JSON array."
            }
          ],
          "max_tokens": 2000,
          "search_recency_filter": "week"
        }
      }
    },
    {
      "id": 3,
      "type": "http:ActionSendData",
      "name": "Claude — Elegir el mejor topic",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 500,
          "messages": [
            {
              "role": "user",
              "content": "De estos topics de la semana: {{2.body.choices[0].message.content}}\n\nElige el MÁS relevante para el newsletter 'La Impresora' (audiencia: inversores latinoamericanos de 25-45 años, crypto + finanzas personales). Devuelve solo el topic elegido en JSON con campos: titulo, resumen, angulo_latam, datos_clave."
            }
          ]
        }
      }
    },
    {
      "id": 4,
      "type": "google-sheets:ActionAddRow",
      "name": "Guardar topic en Google Sheets (log semanal)",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Topics Semanales",
        "values": {
          "Fecha": "{{formatDate(now; 'YYYY-MM-DD')}}",
          "Semana": "{{formatDate(now; 'WW')}}",
          "Topic Elegido": "{{3.body.content[0].text}}",
          "Estado": "Pendiente borrador"
        }
      }
    }
  ]
}
```

---

#### ESCENARIO 1B: Lunes 9am — Generar Borrador del Newsletter

```json
{
  "name": "La Impresora — Generar Borrador Newsletter",
  "scheduling": {
    "type": "weekly",
    "day": 1,
    "time": "09:00",
    "timezone": "America/Argentina/Buenos_Aires"
  },
  "modules": [
    {
      "id": 1,
      "type": "builtin:BasicTrigger",
      "name": "Trigger Lunes 9am"
    },
    {
      "id": 2,
      "type": "google-sheets:SearchRows",
      "name": "Leer topic de esta semana",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Topics Semanales",
        "filter": {
          "column": "Semana",
          "value": "{{formatDate(now; 'WW')}}"
        },
        "limit": 1
      }
    },
    {
      "id": 3,
      "type": "http:ActionSendData",
      "name": "Claude Haiku — Generar borrador completo",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 4000,
          "system": "Eres el escritor de 'La Impresora', el newsletter de crypto y finanzas para LATAM. Tu voz es: directa, práctica, sin tecnicismos innecesarios, con humor ocasional, siempre orientada a que el lector gane dinero o evite perderlo. Audiencia: inversores latinoamericanos, 25-45 años. Largo ideal: 600-900 palabras.",
          "messages": [
            {
              "role": "user",
              "content": "Escribe el newsletter completo de esta semana sobre: {{2.rows[0].Topic Elegido}}\n\nEstructura obligatoria:\n1. ASUNTO del email (gancho, max 50 chars)\n2. PREHEADER (complementa el asunto, max 90 chars)\n3. INTRO (2-3 párrafos, engancha, presenta el problema)\n4. EL ANÁLISIS (el cuerpo principal, explica qué pasó, por qué importa, qué hacer)\n5. LO QUE NADIE TE DICE (insight diferencial de La Impresora)\n6. ACCIÓN CONCRETA (qué hacer esta semana con esta info)\n7. CIERRE (breve, con personalidad)\n\nDevuelve el newsletter completo, listo para publicar."
            }
          ]
        }
      }
    },
    {
      "id": 4,
      "type": "google-docs:ActionCreateDocument",
      "name": "Crear documento en Google Docs para revisión",
      "parameters": {
        "title": "BORRADOR Newsletter — Semana {{formatDate(now; 'WW')}} — {{formatDate(now; 'DD/MM/YYYY')}}",
        "content": "{{3.body.content[0].text}}",
        "folderId": "{{GOOGLE_DRIVE_NEWSLETTER_FOLDER_ID}}"
      }
    },
    {
      "id": 5,
      "type": "google-sheets:ActionUpdateRow",
      "name": "Actualizar estado en Sheets",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Topics Semanales",
        "rowId": "{{2.rows[0].__id}}",
        "values": {
          "Estado": "Borrador en GDocs",
          "Doc URL": "{{4.webViewLink}}"
        }
      }
    },
    {
      "id": 6,
      "type": "slack:CreateMessage",
      "name": "Notificar a Nacho en Slack/Telegram",
      "parameters": {
        "channelId": "{{SLACK_CHANNEL_ID}}",
        "text": "Newsletter de esta semana listo para revisar. Tenes hasta el martes 11pm para editarlo. Si no tocas nada, Claude lo finaliza el miércoles automáticamente.\n\nVer borrador: {{4.webViewLink}}"
      }
    }
  ]
}
```

---

#### ESCENARIO 1C: Miércoles 10am — Finalizar Newsletter

```json
{
  "name": "La Impresora — Finalizar Newsletter",
  "scheduling": {
    "type": "weekly",
    "day": 3,
    "time": "10:00",
    "timezone": "America/Argentina/Buenos_Aires"
  },
  "modules": [
    {
      "id": 1,
      "type": "builtin:BasicTrigger",
      "name": "Trigger Miércoles 10am"
    },
    {
      "id": 2,
      "type": "google-sheets:SearchRows",
      "name": "Leer estado del newsletter",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Topics Semanales",
        "filter": {
          "column": "Semana",
          "value": "{{formatDate(now; 'WW')}}"
        }
      }
    },
    {
      "id": 3,
      "type": "google-docs:GetDocumentContent",
      "name": "Leer versión final del doc (con edits de Nacho si las hay)",
      "parameters": {
        "documentId": "{{extractDocId(2.rows[0].Doc URL)}}"
      }
    },
    {
      "id": 4,
      "type": "http:ActionSendData",
      "name": "Claude — Pulir y formatear para Beehiiv",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 5000,
          "messages": [
            {
              "role": "user",
              "content": "Toma este borrador de newsletter y devuélvelo listo para publicar en Beehiiv. Corrije errores mínimos sin cambiar el estilo ni el contenido de fondo. Extrae por separado: (1) subject_line, (2) preview_text, (3) content_html en formato HTML limpio para email. Devuelve JSON con esos 3 campos.\n\nBorrador:\n{{3.content}}"
            }
          ]
        }
      }
    },
    {
      "id": 5,
      "type": "google-sheets:ActionUpdateRow",
      "name": "Guardar versión final en Sheets",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Topics Semanales",
        "rowId": "{{2.rows[0].__id}}",
        "values": {
          "Estado": "Listo para publicar",
          "Subject Line": "{{parseJson(4.body.content[0].text).subject_line}}",
          "Preview Text": "{{parseJson(4.body.content[0].text).preview_text}}"
        }
      }
    }
  ]
}
```

---

#### ESCENARIO 1D: Jueves 8am — Publicar en Beehiiv

```json
{
  "name": "La Impresora — Publicar Newsletter en Beehiiv",
  "scheduling": {
    "type": "weekly",
    "day": 4,
    "time": "08:00",
    "timezone": "America/Argentina/Buenos_Aires"
  },
  "modules": [
    {
      "id": 1,
      "type": "builtin:BasicTrigger",
      "name": "Trigger Jueves 8am"
    },
    {
      "id": 2,
      "type": "google-sheets:SearchRows",
      "name": "Leer newsletter listo para publicar",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Topics Semanales",
        "filter": {
          "column": "Semana",
          "value": "{{formatDate(now; 'WW')}}"
        }
      }
    },
    {
      "id": 3,
      "type": "google-docs:GetDocumentContent",
      "name": "Leer contenido HTML final"
    },
    {
      "id": 4,
      "type": "http:ActionSendData",
      "name": "Beehiiv API — Crear y publicar post",
      "parameters": {
        "url": "https://api.beehiiv.com/v2/publications/{{BEEHIIV_PUBLICATION_ID}}/posts",
        "method": "POST",
        "headers": [
          { "name": "Authorization", "value": "Bearer {{BEEHIIV_API_KEY}}" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "subject_line": "{{2.rows[0].Subject Line}}",
          "preview_text": "{{2.rows[0].Preview Text}}",
          "content_json": "{{3.content}}",
          "status": "confirmed",
          "send_at": "{{formatDate(now; 'YYYY-MM-DDTHH:mm:ssZ')}}",
          "audience": "free"
        }
      }
    },
    {
      "id": 5,
      "type": "google-sheets:ActionUpdateRow",
      "name": "Marcar como publicado",
      "parameters": {
        "values": {
          "Estado": "PUBLICADO",
          "Beehiiv Post ID": "{{4.body.data.id}}",
          "Publicado el": "{{formatDate(now; 'DD/MM/YYYY HH:mm')}}"
        }
      }
    }
  ]
}
```

---

## PIPELINE 2 — Newsletter → Redes Sociales {#pipeline-2}

Se dispara automáticamente cuando el Escenario 1D completa (webhook interno) o a las 9am del jueves como backup.

```json
{
  "name": "La Impresora — Newsletter a Redes Sociales",
  "trigger": {
    "type": "webhook",
    "description": "Se activa cuando Beehiiv confirma publicación"
  },
  "modules": [
    {
      "id": 1,
      "type": "http:ActionSendData",
      "name": "Claude — Generar 3 tweets",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 800,
          "messages": [
            {
              "role": "user",
              "content": "Del siguiente newsletter, genera 3 tweets diferentes. Cada tweet max 280 chars. Uno enfocado en el dato sorprendente, otro en la acción concreta, otro en el insight diferencial. Incluye el link al newsletter al final de cada uno. Devuelve JSON array con 3 objetos {tweet, tipo}.\n\nNewsletter:\n{{newsletter_content}}\n\nLink: {{beehiiv_post_url}}"
            }
          ]
        }
      }
    },
    {
      "id": 2,
      "type": "http:ActionSendData",
      "name": "Claude — Generar post LinkedIn",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 1000,
          "messages": [
            {
              "role": "user",
              "content": "Del siguiente newsletter, genera un post de LinkedIn de 300 palabras. Tono profesional pero accesible. Estructura: gancho en la primera línea (sin 'En el mundo de' ni clichés), desarrollo del insight, datos concretos, llamado a la acción para suscribirse al newsletter. Usa saltos de línea frecuentes (estilo LinkedIn). Incluye 5 hashtags relevantes al final.\n\nNewsletter:\n{{newsletter_content}}\n\nLink: {{beehiiv_post_url}}"
            }
          ]
        }
      }
    },
    {
      "id": 3,
      "type": "http:ActionSendData",
      "name": "Claude — Generar guión Short YouTube",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 800,
          "messages": [
            {
              "role": "user",
              "content": "Del siguiente newsletter, genera un guión para un Short de YouTube de 45-60 segundos. Estructura obligatoria:\n- Hook (0-3s): pregunta o dato impactante que para el scroll\n- Contexto (3-10s): qué está pasando\n- Insight (10-40s): el dato más valioso, explicado simple\n- CTA (40-60s): suscribirse al newsletter para el análisis completo\n\nIncluye indicaciones de [PAUSA], [GRÁFICO] o [TEXTO EN PANTALLA] donde aplique.\n\nNewsletter:\n{{newsletter_content}}"
            }
          ]
        }
      }
    },
    {
      "id": 4,
      "type": "http:ActionSendData",
      "name": "Claude — Generar post Instagram",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 600,
          "messages": [
            {
              "role": "user",
              "content": "Del siguiente newsletter, genera un caption para Instagram. Max 150 palabras en el caption (Instagram penaliza los largos). Primera línea = gancho para el 'ver más'. Termina con CTA a la bio para el link del newsletter. Incluye 10 hashtags en español sobre crypto/finanzas/LATAM separados del caption.\n\nTambién sugiere el concepto visual para la imagen/carousel en 1-2 oraciones.\n\nNewsletter:\n{{newsletter_content}}"
            }
          ]
        }
      }
    },
    {
      "id": 5,
      "type": "google-sheets:ActionAddRow",
      "name": "Guardar todo el contenido generado",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Contenido Redes",
        "values": {
          "Fecha": "{{formatDate(now; 'DD/MM/YYYY')}}",
          "Semana": "{{formatDate(now; 'WW')}}",
          "Tweet 1": "{{parseJson(1.body.content[0].text)[0].tweet}}",
          "Tweet 2": "{{parseJson(1.body.content[0].text)[1].tweet}}",
          "Tweet 3": "{{parseJson(1.body.content[0].text)[2].tweet}}",
          "LinkedIn": "{{2.body.content[0].text}}",
          "Guion Short": "{{3.body.content[0].text}}",
          "Instagram": "{{4.body.content[0].text}}",
          "Estado": "Listo para revisar/publicar"
        }
      }
    }
  ]
}
```

**Nota:** Para publicación automática en Twitter/X usar la API v2 con módulo HTTP en Make.com. Para LinkedIn, usar la conexión nativa de Make.com (app LinkedIn).

---

## PIPELINE 3 — Monitoreo de Mercado → Alertas {#pipeline-3}

### Módulo 3A: Alerta Bitcoin ±5% (cada hora)

```json
{
  "name": "La Impresora — Monitor Bitcoin Precio",
  "scheduling": {
    "type": "interval",
    "interval": 60,
    "unit": "minutes"
  },
  "modules": [
    {
      "id": 1,
      "type": "http:ActionSendData",
      "name": "CoinGecko — Precio actual BTC",
      "parameters": {
        "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true",
        "method": "GET"
      }
    },
    {
      "id": 2,
      "type": "builtin:BasicRouter",
      "name": "¿Movió más del 5%?",
      "routes": [
        {
          "label": "SI — movió > 5%",
          "condition": "{{abs(1.body.bitcoin.usd_24h_change) > 5}}"
        },
        {
          "label": "NO — movimiento normal",
          "condition": "{{abs(1.body.bitcoin.usd_24h_change) <= 5}}"
        }
      ]
    },
    {
      "id": 3,
      "type": "http:ActionSendData",
      "name": "Claude Haiku — Tweet de análisis rápido",
      "route": "SI — movió > 5%",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 300,
          "messages": [
            {
              "role": "user",
              "content": "Bitcoin acaba de {{1.body.bitcoin.usd_24h_change > 0 ? 'subir' : 'caer'}} un {{abs(round(1.body.bitcoin.usd_24h_change; 1))}}% en las últimas 24h. Precio actual: ${{formatNumber(1.body.bitcoin.usd; 0; '.'; ',')}} USD.\n\nEscribe un tweet de análisis rápido para La Impresora (cuenta crypto LATAM). Max 280 chars. Tono: informativo, directo, sin pánico ni FOMO exagerado. Incluye el dato del precio y el % de movimiento."
            }
          ]
        }
      }
    },
    {
      "id": 4,
      "type": "google-sheets:SearchRows",
      "name": "Verificar si ya tweeteamos en las últimas 4h",
      "route": "SI — movió > 5%",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Alertas BTC",
        "filter": {
          "column": "Timestamp",
          "operator": "greaterThan",
          "value": "{{formatDate(addHours(now; -4); 'YYYY-MM-DDTHH:mm:ss')}}"
        }
      }
    },
    {
      "id": 5,
      "type": "builtin:BasicRouter",
      "name": "¿Ya tweeteamos hace menos de 4h?",
      "route": "SI — movió > 5%",
      "routes": [
        {
          "label": "No publicar (ya tweeteamos)",
          "condition": "{{4.totalResults > 0}}"
        },
        {
          "label": "Publicar tweet",
          "condition": "{{4.totalResults == 0}}"
        }
      ]
    },
    {
      "id": 6,
      "type": "http:ActionSendData",
      "name": "Twitter API v2 — Publicar tweet",
      "route": "Publicar tweet",
      "parameters": {
        "url": "https://api.twitter.com/2/tweets",
        "method": "POST",
        "headers": [
          { "name": "Authorization", "value": "Bearer {{TWITTER_BEARER_TOKEN}}" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "text": "{{3.body.content[0].text}}"
        }
      }
    },
    {
      "id": 7,
      "type": "google-sheets:ActionAddRow",
      "name": "Log de alerta enviada",
      "route": "Publicar tweet",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Alertas BTC",
        "values": {
          "Timestamp": "{{formatDate(now; 'YYYY-MM-DDTHH:mm:ss')}}",
          "Precio BTC": "{{1.body.bitcoin.usd}}",
          "Cambio 24h %": "{{1.body.bitcoin.usd_24h_change}}",
          "Tweet publicado": "{{3.body.content[0].text}}"
        }
      }
    }
  ]
}
```

### Módulo 3B: Noticias Crypto LATAM (diario 7am)

```json
{
  "name": "La Impresora — Noticias Crypto LATAM",
  "scheduling": {
    "type": "daily",
    "time": "07:00",
    "timezone": "America/Argentina/Buenos_Aires"
  },
  "modules": [
    {
      "id": 1,
      "type": "http:ActionSendData",
      "name": "Perplexity — Noticias crypto LATAM últimas 24h",
      "parameters": {
        "url": "https://api.perplexity.ai/chat/completions",
        "method": "POST",
        "headers": [
          { "name": "Authorization", "value": "Bearer {{PERPLEXITY_API_KEY}}" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "model": "sonar",
          "messages": [
            {
              "role": "user",
              "content": "Noticias más importantes de crypto y Bitcoin en América Latina de las últimas 24 horas. Países: Argentina, México, Brasil, Colombia, Venezuela, Perú. Incluye solo noticias realmente significativas (regulaciones, adopción masiva, exchanges locales, etc.). Si no hay nada importante, responde 'SIN_NOTICIAS'. Máximo 3 noticias, en JSON array con campos: titulo, resumen, pais, relevancia (1-10)."
            }
          ],
          "search_recency_filter": "day"
        }
      }
    },
    {
      "id": 2,
      "type": "builtin:BasicRouter",
      "name": "¿Hay noticias importantes?",
      "routes": [
        {
          "label": "Sin noticias relevantes",
          "condition": "{{contains(1.body.choices[0].message.content; 'SIN_NOTICIAS')}}"
        },
        {
          "label": "Hay noticias — generar post",
          "condition": "{{not(contains(1.body.choices[0].message.content; 'SIN_NOTICIAS'))}}"
        }
      ]
    },
    {
      "id": 3,
      "type": "http:ActionSendData",
      "name": "Claude — Generar post sobre la noticia más relevante",
      "route": "Hay noticias — generar post",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 500,
          "messages": [
            {
              "role": "user",
              "content": "De estas noticias crypto LATAM: {{1.body.choices[0].message.content}}\n\nElige la de mayor relevancia y genera:\n1. Un tweet de 280 chars max\n2. Un post corto para Telegram (max 200 palabras)\n\nDevuelve JSON con campos: tweet, telegram_post."
            }
          ]
        }
      }
    },
    {
      "id": 4,
      "type": "google-sheets:ActionAddRow",
      "name": "Guardar en cola de publicación",
      "route": "Hay noticias — generar post",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Cola Publicación",
        "values": {
          "Fecha": "{{formatDate(now; 'DD/MM/YYYY')}}",
          "Tipo": "Noticia LATAM",
          "Tweet": "{{parseJson(3.body.content[0].text).tweet}}",
          "Telegram": "{{parseJson(3.body.content[0].text).telegram_post}}",
          "Estado": "Pendiente revisión Nacho"
        }
      }
    }
  ]
}
```

---

## PIPELINE 4 — Nuevo Suscriptor → Bienvenida {#pipeline-4}

```json
{
  "name": "La Impresora — Bienvenida a Nuevo Suscriptor",
  "trigger": {
    "type": "webhook",
    "description": "Beehiiv webhook: evento subscriber.created"
  },
  "modules": [
    {
      "id": 1,
      "type": "builtin:Webhook",
      "name": "Beehiiv — Nuevo suscriptor",
      "parameters": {
        "webhookUrl": "{{MAKE_WEBHOOK_URL_SUBSCRIPTORES}}"
      }
    },
    {
      "id": 2,
      "type": "builtin:BasicRouter",
      "name": "¿Tiene dominio corporativo?",
      "routes": [
        {
          "label": "Email corporativo (posible B2B)",
          "condition": "{{not(contains(1.body.email; '@gmail')) and not(contains(1.body.email; '@hotmail')) and not(contains(1.body.email; '@yahoo')) and not(contains(1.body.email; '@outlook')) and not(contains(1.body.email; '@icloud'))}}"
        },
        {
          "label": "Email personal",
          "condition": "{{contains(1.body.email; '@gmail') or contains(1.body.email; '@hotmail') or contains(1.body.email; '@yahoo') or contains(1.body.email; '@outlook') or contains(1.body.email; '@icloud')}}"
        }
      ]
    },
    {
      "id": 3,
      "type": "http:ActionSendData",
      "name": "Claude — Email bienvenida personalizado (corporativo)",
      "route": "Email corporativo (posible B2B)",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 600,
          "messages": [
            {
              "role": "user",
              "content": "Escribe un email de bienvenida para un nuevo suscriptor de 'La Impresora' con email corporativo {{1.body.email}}. El dominio {{split(1.body.email; '@')[1]}} sugiere que trabaja en una empresa. Tono: más profesional que con usuarios normales, menciona brevemente que también ofrecemos servicios B2B para empresas que quieren entender crypto y blockchain. No seas vendedor agresivo. Max 200 palabras. Devuelve JSON con: subject, body."
            }
          ]
        }
      }
    },
    {
      "id": 4,
      "type": "http:ActionSendData",
      "name": "Claude — Email bienvenida estándar",
      "route": "Email personal",
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": [
          { "name": "x-api-key", "value": "{{ANTHROPIC_API_KEY}}" },
          { "name": "anthropic-version", "value": "2023-06-01" }
        ],
        "body": {
          "model": "claude-haiku-4-5",
          "max_tokens": 500,
          "messages": [
            {
              "role": "user",
              "content": "Escribe un email de bienvenida cálido y directo para un nuevo suscriptor de 'La Impresora', el newsletter de crypto y finanzas para LATAM. Nombre del suscriptor: {{1.body.name or 'amigo/a'}}. Incluye: qué van a recibir (newsletter semanal los jueves), dónde encontrarnos (Twitter/Instagram/YouTube), un tip de cripto gratuito como regalo de bienvenida. Tono: como habla un amigo que sabe de crypto, no un robot. Max 180 palabras. Devuelve JSON con: subject, body."
            }
          ]
        }
      }
    },
    {
      "id": 5,
      "type": "http:ActionSendData",
      "name": "Beehiiv API — Enviar email de bienvenida",
      "parameters": {
        "url": "https://api.beehiiv.com/v2/publications/{{BEEHIIV_PUBLICATION_ID}}/emails",
        "method": "POST",
        "headers": [
          { "name": "Authorization", "value": "Bearer {{BEEHIIV_API_KEY}}" },
          { "name": "Content-Type", "value": "application/json" }
        ],
        "body": {
          "to": "{{1.body.email}}",
          "subject": "{{parseJson(ifempty(3.body.content[0].text; 4.body.content[0].text)).subject}}",
          "content": "{{parseJson(ifempty(3.body.content[0].text; 4.body.content[0].text)).body}}"
        }
      }
    },
    {
      "id": 6,
      "type": "slack:CreateMessage",
      "name": "Alerta a Nacho — Cliente B2B potencial",
      "route": "Email corporativo (posible B2B)",
      "parameters": {
        "channelId": "{{SLACK_CHANNEL_ID}}",
        "text": "POSIBLE CLIENTE B2B\n\nEmail: {{1.body.email}}\nDominio: {{split(1.body.email; '@')[1]}}\nNombre: {{1.body.name or 'No disponible'}}\n\nSe suscribió a La Impresora. Vale la pena hacer seguimiento manual."
      }
    },
    {
      "id": 7,
      "type": "google-sheets:ActionAddRow",
      "name": "Log de nuevos suscriptores",
      "parameters": {
        "spreadsheetId": "{{GOOGLE_SHEET_ID}}",
        "sheetName": "Suscriptores",
        "values": {
          "Fecha": "{{formatDate(now; 'DD/MM/YYYY HH:mm')}}",
          "Email": "{{1.body.email}}",
          "Nombre": "{{1.body.name}}",
          "Tipo": "{{2.routes[0].label}}",
          "Email bienvenida enviado": "Si"
        }
      }
    }
  ]
}
```

---

## COSTOS DEL STACK {#costos}

### Tabla de precios (Abril 2026)

| Servicio | Plan | Costo/mes | Qué incluye |
|---------|------|-----------|-------------|
| **Make.com** | Core | $9 USD | 10.000 operaciones/mes — suficiente para los 4 pipelines |
| **Make.com** | Pro | $16 USD | 10.000 ops + módulos avanzados. Recomendado para escalar. |
| **Claude API (Haiku)** | Pay-per-use | ~$3–8 USD | $0.80/M tokens entrada, $4/M tokens salida. ~500K tokens/mes estimado |
| **Perplexity API** | Pay-per-use | ~$2–5 USD | $5/1000 requests (sonar-pro). ~500 requests/mes |
| **Beehiiv** | Launch | $0 | Gratis hasta 2.500 subs. Webhooks incluidos. |
| **Beehiiv** | Scale | $39 | Para cuando superes 2.500 subs. API completa + automations. |
| **CoinGecko API** | Free | $0 | Tier gratuito: suficiente para monitoreo horario. |
| **Google Workspace** | Personal | $0 | Google Docs + Sheets gratis con cuenta personal. |
| **Twitter/X API** | Free | $0 | 1.500 tweets/mes gratis (Basic tier). |

### Costo total estimado

| Escenario | Costo/mes | Condición |
|-----------|-----------|-----------|
| **Arranque (<500 subs)** | **$14–18 USD** | Make Core + Claude + Perplexity |
| **Crecimiento (500–2.500 subs)** | **$20–28 USD** | Make Pro + Claude + Perplexity |
| **Escala (>2.500 subs)** | **$58–68 USD** | Make Pro + Claude + Perplexity + Beehiiv Scale |

### ROI esperado

```
Supuesto conservador con 1.000 suscriptores activos:

Ingresos potenciales/mes:
- Afiliados crypto (2% conversión, ticket $100 avg)   → $200 USD
- Sponsors newsletter (1 sponsor @ $300)              → $300 USD
- Curso/producto propio (3 ventas @ $97)              → $291 USD
- Consultoría B2B (1 cliente @ $500)                  → $500 USD
                                              TOTAL:   $1.291 USD

Costo automatización:                                 $  28 USD
ROI mensual:                                       4.600%+
```

---

## SETUP PASO A PASO — Pipeline 1 en menos de 2 horas {#setup}

### Prerrequisitos (30 minutos)

Antes de abrir Make.com, tener listos estos 5 items:

```
1. API Key de Anthropic (claude)
   → platform.anthropic.com → API Keys → Create Key
   → Guardar en lugar seguro. Formato: sk-ant-...

2. API Key de Beehiiv
   → app.beehiiv.com → Settings → API → Generate Key
   → Anotar también el Publication ID (pub_xxxxxx)

3. API Key de Perplexity
   → perplexity.ai/settings/api → Generate
   → Formato: pplx-...

4. Google Sheet preparado
   → Crear una hoja nueva en Google Drive
   → Crear 4 pestañas: "Topics Semanales", "Contenido Redes", "Alertas BTC", "Suscriptores"
   → Copiar el Sheet ID de la URL (el string largo entre /d/ y /edit)

5. Carpeta Google Drive para borradores
   → Crear carpeta "La Impresora — Newsletters"
   → Compartir con tu email de Make.com cuando lo configures
   → Copiar el Folder ID de la URL
```

---

### PASO 1: Crear cuenta Make.com (5 min)

1. Ir a `make.com` → **Start for free**
2. Registrarse con tu email `ignacio@allintokengroup.com`
3. Elegir plan **Core** ($9/mes) para arrancar
4. Ir a **Connections** → conectar **Google** (autorizar Drive + Sheets + Docs)

---

### PASO 2: Crear el primer Escenario (Lunes 8am Research) — 25 min

1. Click **Create a new scenario**
2. Nombrar: `La Impresora — Research Semanal`

**Agregar módulos en orden:**

**Módulo 1 — Schedule Trigger:**
- Click en el círculo de inicio → **Schedule**
- Configurar: Every week → Monday → 08:00 → Argentina/Buenos_Aires

**Módulo 2 — HTTP Request (Perplexity):**
- Click `+` → buscar **HTTP** → **Make a request**
- URL: `https://api.perplexity.ai/chat/completions`
- Method: POST
- Headers: agregar `Authorization: Bearer TU_KEY_PERPLEXITY`
- Body type: Raw → JSON
- Pegar el body del JSON de Perplexity del Escenario 1A de arriba

**Módulo 3 — HTTP Request (Claude):**
- Click `+` → **HTTP** → **Make a request**
- URL: `https://api.anthropic.com/v1/messages`
- Method: POST
- Headers:
  - `x-api-key: TU_ANTHROPIC_KEY`
  - `anthropic-version: 2023-06-01`
  - `Content-Type: application/json`
- Body: usar el del Escenario 1A, referenciar output del módulo 2 con `{{2.body.choices[0].message.content}}`

**Módulo 4 — Google Sheets:**
- Click `+` → buscar **Google Sheets** → **Add a Row**
- Conectar tu cuenta Google
- Seleccionar el Sheet ID y pestaña "Topics Semanales"
- Mapear los campos como en el JSON

3. Click **Save** (Ctrl+S)
4. Click **Run once** para testear → verificar que aparece una fila en el Sheet

---

### PASO 3: Crear Escenario Lunes 9am (Borrador) — 20 min

1. **Create new scenario** → `La Impresora — Borrador Newsletter`
2. Repetir el proceso con los módulos del Escenario 1B
3. En el módulo de Google Docs, conectar Drive y seleccionar la carpeta de borradores
4. En el módulo de Slack: si usas Telegram en vez de Slack, usar **HTTP Request** a la API de Telegram Bot

**Alternativa a Slack para notificaciones:**
```
Telegram Bot API:
URL: https://api.telegram.org/bot{{BOT_TOKEN}}/sendMessage
Body: {
  "chat_id": "{{TU_CHAT_ID}}",
  "text": "Newsletter listo: {{doc_url}}"
}
```

---

### PASO 4: Escenario Miércoles y Jueves — 20 min cada uno

Seguir el mismo patrón con los JSON del Escenario 1C y 1D.

**Tip para el módulo de Beehiiv:**
- Beehiiv no tiene módulo nativo en Make → usar siempre HTTP Request
- Testear primero con `status: "draft"` antes de usar `status: "confirmed"`

---

### PASO 5: Activar y verificar — 10 min

1. En cada escenario, toggle el switch de **OFF → ON**
2. Configurar **Error handling**: en cada escenario, click derecho en cualquier módulo → **Add error handler** → Send email a `ignacio@allintokengroup.com`
3. Ir a **Scenario History** para ver los logs de ejecución

---

### Variables de entorno — Centralizar en Make.com

En Make.com ir a **Scenarios** → **Data Stores** o usar **Custom Variables**:

```
ANTHROPIC_API_KEY       = sk-ant-...
BEEHIIV_API_KEY         = ...
BEEHIIV_PUBLICATION_ID  = pub_...
PERPLEXITY_API_KEY      = pplx-...
GOOGLE_SHEET_ID         = 1BxiMVs0XRA...
GOOGLE_DRIVE_FOLDER_ID  = 1a2b3c...
SLACK_CHANNEL_ID        = C0...  (o usar Telegram)
TWITTER_BEARER_TOKEN    = ...
```

---

### Orden recomendado de implementación

| Semana | Qué activar | Por qué |
|--------|-------------|---------|
| **Semana 1** | Pipeline 1 completo | El más importante. Newsletter = base de todo. |
| **Semana 2** | Pipeline 4 (bienvenida) | Cada suscriptor nuevo importa desde el día 1. |
| **Semana 3** | Pipeline 2 (redes sociales) | Distribuir el newsletter que ya está funcionando. |
| **Semana 4** | Pipeline 3 (alertas BTC) | Monitoreo como capa adicional, no crítica. |

---

### Checklist de validación antes de activar

```
[ ] Testeé manualmente el Escenario 1A (Research) → aparece fila en Sheets
[ ] Testeé manualmente el Escenario 1B (Borrador) → aparece doc en Google Drive
[ ] El doc de borrador tiene contenido real del newsletter
[ ] Recibí la notificación de Slack/Telegram con el link
[ ] Testeé el Escenario 1D con status "draft" en Beehiiv (sin publicar)
[ ] Configuré error handlers en todos los escenarios
[ ] Las API keys están guardadas en un gestor de contraseñas
```

---

*Archivo generado: 2026-04-30*
*Stack: Make.com + Claude API (Haiku) + Perplexity API (Sonar) + Beehiiv API + Google Workspace*
*NO usa n8n. Orquestación visual en Make.com, lógica avanzada en Wendy OS cuando aplica.*
