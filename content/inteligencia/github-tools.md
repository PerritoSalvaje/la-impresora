# GitHub Tools para La Impresora
*Investigacion realizada: 30 de abril 2026*

Repositorios open source relevantes para mejorar La Impresora — newsletter crypto/AI/finanzas para LATAM. Organizados por categoria, con estrellas verificadas en GitHub.

---

## 1. Plataformas de Newsletter (Self-Hosted)

### Ghost — TryGhost/Ghost
- **Estrellas:** 52,700+
- **Que hace:** Plataforma completa de publishing con memberships, suscripciones pagas, newsletters integrados, tiers de acceso y paywall nativo. El stack mas maduro del ecosistema.
- **Uso en La Impresora:** Reemplazar Beehiiv completamente. Ghost maneja suscriptores, tiers free/pro, cobro con Stripe, envio de emails y portal de miembros. Tiene API para integracion con sistemas propios.
- **Hosting:** Self-hosted (VPS, Railway, Render) o Ghost Pro ($9–$199/mes). Requiere Node.js + MySQL.
- **URL:** https://github.com/TryGhost/Ghost

### listmonk — knadh/listmonk
- **Estrellas:** 19,860+
- **Que hace:** Newsletter y mailing list manager de alto rendimiento. Binario unico (Go), dashboard moderno, segmentacion avanzada, campanias, analitica, SMTP configurable. Sin limite de suscriptores.
- **Uso en La Impresora:** Backend puro de envio de emails. Ideal si se quiere separar la capa de envio de la plataforma de contenido. Mas barato que Ghost para volumen alto. Soporte RSS nativo con el plugin listmonk-rss.
- **Hosting:** Self-hosted obligatorio. Un solo binario + PostgreSQL. Puede correr en VPS de $5/mes.
- **URL:** https://github.com/knadh/listmonk

### BillionMail — Billionmail/BillionMail
- **Estrellas:** 14,614
- **Que hace:** Mail server + newsletter + email marketing completamente self-hosted. Incluye servidor SMTP propio, sin depender de SES/SendGrid. Sin fees mensuales.
- **Uso en La Impresora:** Opcion mas agresiva para independencia total de costos de envio. Util cuando el volumen de emails justifique tener infraestructura SMTP propia.
- **Hosting:** Self-hosted obligatorio. Docker. Requiere VPS dedicado con IP limpia.
- **URL:** https://github.com/Billionmail/BillionMail

### Mailtrain — Mailtrain-org/mailtrain
- **Estrellas:** 5,727
- **Que hace:** Plataforma self-hosted de email marketing con automatizaciones, segmentacion, templates, listas. Mas antiguo que listmonk pero mas features de marketing.
- **Uso en La Impresora:** Alternativa a listmonk con mas enfoque en campanas de marketing y automatizaciones tipo drip.
- **Hosting:** Self-hosted. Node.js + MySQL.
- **URL:** https://github.com/Mailtrain-org/mailtrain

### SendPortal — mettle/sendportal
- **Estrellas:** 2,126
- **Que hace:** Email marketing self-hosted con SMTP propio, segmentacion de listas, campanas, metricas basicas. Stack Laravel.
- **Uso en La Impresora:** Alternativa mas simple que Mailtrain, con UI limpia y soporte multi-workspace.
- **Hosting:** Self-hosted. PHP/Laravel + MySQL/PostgreSQL.
- **URL:** https://github.com/mettle/sendportal

---

## 2. Monetizacion y Memberships

### Ghost (ver arriba)
Ghost tiene el sistema de memberships mas completo con tiers, Stripe integrado y portal de miembros nativo.

### Lago — getlago/lago
- **Estrellas:** 9,606
- **Que hace:** API de metering y billing basado en uso. Maneja suscripciones, tracking de consumo, iteraciones de pricing, orquestacion de pagos y analitica de revenue. La alternativa open source a Stripe Billing.
- **Uso en La Impresora:** Si se quiere implementar un modelo de precios por consumo (ej: acceso a reportes premium por creditos), Lago provee la infraestructura de billing completa sin depender de Stripe Billing.
- **Hosting:** Self-hosted. Docker. Requiere PostgreSQL + Redis.
- **URL:** https://github.com/getlago/lago

### Paylix — JanoTheDev/paylix
- **Estrellas:** 1
- **Que hace:** Pagos crypto gasless. Billing one-time y recurrente en 7 chains EVM (USDC/USDT/WETH/WBTC/DAI via EIP-2612 y Permit2). Tambien soporte scaffoldeado para Solana/Bitcoin. Non-custodial, self-hostable.
- **Uso en La Impresora:** Habilitar suscripciones pagas con USDC/USDT directamente desde wallet del usuario. Sin intermediario, sin KYC obligatorio. Ideal para lectores de LATAM que prefieren crypto sobre tarjeta.
- **Hosting:** Self-hosted. Muy nuevo (pocos usuarios), usar con cuidado en produccion.
- **URL:** https://github.com/JanoTheDev/paylix

### Auto-Pay Protocol — apeoverflow/Auto-Pay-Protocol
- **Estrellas:** 2
- **Que hace:** Protocolo de pagos de suscripcion no custodial en USDC. Permite a usuarios pagar newsletters, SaaS y membresías directamente desde su wallet. Sin tarjetas de credito ni intermediarios.
- **Uso en La Impresora:** Capa de pago crypto para suscripciones Pro. Se puede integrar junto con Lago para manejo de billing y este protocolo para el procesamiento on-chain.
- **Hosting:** Smart contracts en cadena (EVM). Frontend self-hosted.
- **URL:** https://github.com/apeoverflow/Auto-Pay-Protocol

### Zoneless — zonelessdev/zoneless
- **Estrellas:** 275
- **Que hace:** Alternativa open source a Stripe Connect. API identica a Stripe. Payouts instantaneos globales en USDC a ~$0.002 por payout.
- **Uso en La Impresora:** Para el programa de afiliados: pagar comisiones a referidos en USDC instantaneamente sin los delays y fees de Stripe o transferencias bancarias en LATAM.
- **Hosting:** Self-hosted.
- **URL:** https://github.com/zonelessdev/zoneless

---

## 3. Curación de Contenido con AI

### AI News Bot — giftedunicorn/ai-news-bot
- **Estrellas:** 14
- **Que hace:** Generador automatizado de digest de noticias AI con Claude/DeepSeek. Procesa RSS feeds, genera HTML de email y tiene soporte multilenguaje.
- **Uso en La Impresora:** Base para el pipeline de curación automatica. Consume feeds de fuentes crypto/AI, genera resumen en español con LLM y lo formatea como email listo para enviar por listmonk.
- **Hosting:** Self-hosted o serverless (cron job). Python.
- **URL:** https://github.com/giftedunicorn/ai-news-bot

### AI Content Automation — asadcs/ai-content-automation-system
- **Estrellas:** 1
- **Que hace:** Pipeline end-to-end de newsletter con AI. Investiga topicos, genera HTML con Claude, crea infograficos AI, entrega por Gmail API. Tiene arquitectura RAG-ready.
- **Uso en La Impresora:** Plantilla de arquitectura para el sistema de generacion de newsletter semanal. El componente RAG permite mantener contexto de ediciones anteriores y estilo editorial.
- **Hosting:** Self-hosted. Python + APIs externas.
- **URL:** https://github.com/asadcs/ai-content-automation-system

### Awesome AI News — taielab/awesome-ai-news
- **Estrellas:** 6
- **Que hace:** Lista curada de herramientas AI para agregacion de noticias, manejo de RSS y automatizacion de contenido.
- **Uso en La Impresora:** Directorio de referencia para descubrir mas tools del ecosistema.
- **URL:** https://github.com/taielab/awesome-ai-news

### Medium Curator — willianpinho/medium-curator
- **Estrellas:** 0 (proyecto reciente)
- **Que hace:** Curación automatizada de contenido de Medium con scoring por AI, RSS parsing y entrega por email. Usa Anthropic API + Python.
- **Uso en La Impresora:** Referencia de implementacion para curar articulos de Medium relevantes sobre crypto/AI para incluir en el newsletter.
- **Hosting:** Self-hosted. Python.
- **URL:** https://github.com/willianpinho/medium-curator

### Multi-Agent Marketing System — yumik20/multi-agent-orchestration
- **Estrellas:** 2
- **Que hace:** Sistema multi-agente para operaciones de marketing: inteligencia diaria, creacion de contenido y publicacion. 6 agentes especializados, 16k lineas, sin dependencias externas.
- **Uso en La Impresora:** Arquitectura de referencia para construir el pipeline de produccion de La Impresora con agentes especializados (research, redaccion, edicion, publicacion).
- **Hosting:** Self-hosted.
- **URL:** https://github.com/yumik20/multi-agent-orchestration

---

## 4. Datos Crypto y DeFi

### OpenBB — OpenBB-finance/OpenBB
- **Estrellas:** 66,807
- **Que hace:** Plataforma de datos financieros para analistas, quants y agentes AI. Stocks, crypto, macro, opciones, forex. Acceso a cientos de fuentes de datos con una API unificada. El "Bloomberg Terminal libre".
- **Uso en La Impresora:** Fuente de datos financieros para reportes de mercado semanales. Se puede correr como backend para extraer precios, volumen, datos macro de LATAM y formatear en tablas para el newsletter.
- **Hosting:** Self-hosted o local. Python. Tambien disponible como plataforma cloud.
- **URL:** https://github.com/OpenBB-finance/OpenBB

### pycoingecko — man-c/pycoingecko
- **Estrellas:** 1,094
- **Que hace:** Wrapper Python para la API de CoinGecko. Acceso a precios, volumen, market cap, datos historicos, trending, DeFi data.
- **Uso en La Impresora:** Obtener datos de mercado automaticamente para el bloque "Precios de la Semana" del newsletter. Sin costo para uso basico (API publica).
- **Hosting:** Serverless / script. No requiere servidor.
- **URL:** https://github.com/man-c/pycoingecko

### GeckoTerminal API — dineshpinto/geckoterminal-api
- **Estrellas:** 44
- **Que hace:** Wrapper Python para GeckoTerminal. Datos de DEX y DeFi: pools, swaps, OHLCV, trending tokens, liquidez.
- **Uso en La Impresora:** Monitorear tokens y pools DeFi en tiempo real para detectar movimientos interesantes para reportar. Util para la seccion DeFi del newsletter.
- **Hosting:** Serverless / script.
- **URL:** https://github.com/dineshpinto/geckoterminal-api

### DeFiLlama Wrapper — boulderbytes/defillama-api
- **Estrellas:** 15
- **Que hace:** Wrapper de la API de DeFiLlama. TVL por protocolo, yields, stablecoins, bridges, volumen DEX.
- **Uso en La Impresora:** Automatizar el reporte de TVL semanal por cadena y protocolo. Datos esenciales para el contexto DeFi del newsletter.
- **Hosting:** Serverless / script. Python.
- **URL:** https://github.com/boulderbytes/defillama-api

### DeFiLlama MCP — Picaro-00/defillama-api-wrapper
- **Estrellas:** 1
- **Que hace:** Wrapper de DeFiLlama disenado especificamente para uso con Claude MCP (Model Context Protocol).
- **Uso en La Impresora:** Integrar datos DeFiLlama directamente en el flujo de Claude para que el LLM tenga contexto de mercado al redactar el newsletter.
- **Hosting:** Local / MCP server.
- **URL:** https://github.com/Picaro-00/defillama-api-wrapper

### AI Crypto Trader (microservicios) — zd87pl/ai-crypto-trader
- **Estrellas:** 69
- **Que hace:** Sistema experimental de trading crypto con AI. Incluye microservicios de monitoreo de mercado, analisis de sentimiento social, senales AI y ejecucion automatizada.
- **Uso en La Impresora:** Los modulos de monitoreo de mercado y analisis de sentimiento social son utiles como fuente de datos para el newsletter, aunque no para trading automatico.
- **Hosting:** Self-hosted. Docker + microservicios.
- **URL:** https://github.com/zd87pl/ai-crypto-trader

### Cryptofolio — Xtrendence/Cryptofolio
- **Estrellas:** 369
- **Que hace:** App de tracking de portfolio crypto. Web, mobile y desktop. API RESTful self-hosted. Soporta multiples exchanges.
- **Uso en La Impresora:** Dashboard interno para seguimiento del portfolio de ejemplo que La Impresora podria usar como "cartera modelo" publica para suscriptores Pro.
- **Hosting:** Self-hosted (API) + apps nativas.
- **URL:** https://github.com/Xtrendence/Cryptofolio

### On-Chain Analytics Dashboard — Prok0pchik/On-Chain-Analytics-Dashboard
- **Estrellas:** 1
- **Que hace:** Dashboard de analytics on-chain. Fetching de balances, token transfers y holders via Etherscan, Covalent y viem. UI en Next.js + Tailwind + Recharts.
- **Uso en La Impresora:** Base para construir un dashboard de analisis on-chain publico para suscriptores Pro. Muestra movimientos de wallets grandes, distribuccion de holders.
- **Hosting:** Self-hosted. Next.js.
- **URL:** https://github.com/Prok0pchik/On-Chain-Analytics-Dashboard

---

## 5. Publicacion Multi-Canal

### Tube Forge Agents — fracabu/tube-forge-agents-team
- **Estrellas:** 3
- **Que hace:** Sistema multi-agente con Claude Code para produccion de contenido YouTube: desde research de mercado hasta publicacion. 6 agentes especializados.
- **Uso en La Impresora:** Referencia para adaptar el pipeline al canal de YouTube/TikTok de La Impresora. Los agentes de research y scripting son directamente aplicables.
- **Hosting:** Self-hosted. Python + Claude API.
- **URL:** https://github.com/fracabu/tube-forge-agents-team

### LoopIn LinkedIn Content Engine — kyundos/LoopIn-n8n-Linkedin-Content-Engine
- **Estrellas:** 0 (reciente)
- **Que hace:** Micro-servicios para curar y publicar contenido en LinkedIn. Lee RSS, usa Claude AI para generar posts optimizados, aprobacion via Telegram antes de publicar en LinkedIn API.
- **Uso en La Impresora:** El patron "human-in-the-loop via Telegram" es exactamente lo que se necesita para aprobar posts antes de publicar en LinkedIn/Twitter. Adaptable sin n8n.
- **Hosting:** Self-hosted (sin n8n si se reimplementa).
- **URL:** https://github.com/kyundos/LoopIn-n8n-Linkedin-Content-Engine

---

## 6. Infraestructura y APIs Utiles

### Lago (ver Monetizacion)
La API de metering de Lago tambien aplica como infraestructura para trackear consumo de features premium.

### listmonk-rss — ping13/listmonk-rss
- **Estrellas:** 33
- **Que hace:** Plugin de integracion RSS para listmonk. Automatiza el envio de newsletters basados en feeds RSS.
- **Uso en La Impresora:** Conectar listmonk con el feed RSS de La Impresora para enviar automaticamente cada nueva edicion a suscriptores.
- **Hosting:** Self-hosted con listmonk.
- **URL:** https://github.com/ping13/listmonk-rss

---

## Resumen: Stack Recomendado para La Impresora

### Opcion A — Maxima independencia (self-hosted completo)
| Capa | Herramienta | Costo estimado |
|------|-------------|----------------|
| Newsletter + Memberships | Ghost (self-hosted) | ~$10/mes VPS |
| Envio de emails | listmonk | Incluido en VPS |
| Billing | Lago | ~$20/mes VPS |
| Pagos crypto | Paylix o Auto-Pay Protocol | Costo de gas |
| Datos crypto | OpenBB + pycoingecko + DeFiLlama | Gratis (API publica) |
| Pipeline AI | ai-news-bot + claude API | ~$20-50/mes segun volumen |
| Pagos afiliados | Zoneless (USDC) | ~$0.002 por payout |

**Total estimado:** $50–$100/mes vs $300–$500/mes con stacks SaaS equivalentes.

### Opcion B — Hibrida (Ghost Pro + herramientas propias)
| Capa | Herramienta | Costo estimado |
|------|-------------|----------------|
| Newsletter + Memberships | Ghost Pro | $9–$49/mes |
| Pipeline de datos | pycoingecko + DeFiLlama | Gratis |
| Pipeline AI curación | ai-news-bot (self-hosted) | $5/mes VPS |
| Datos financieros | OpenBB (local) | Gratis |
| Pagos crypto (add-on) | Paylix | Costo de gas |

**Total estimado:** $14–$60/mes. Menor mantenimiento, menos control.

---

## Proximos Pasos Sugeridos

1. **Probar listmonk** en un VPS de $5 — evaluar si puede reemplazar el envio de emails actual.
2. **Integrar pycoingecko + DeFiLlama** para automatizar el bloque de datos de mercado del newsletter.
3. **Implementar ai-news-bot** adaptado al espanol y fuentes crypto LATAM para curación automatica de noticias.
4. **Evaluar Ghost** como plataforma completa si se quiere paywall y memberships sin desarrollo custom.
5. **Pilotear Paylix** con un grupo de suscriptores crypto-nativos para suscripciones en USDC.
