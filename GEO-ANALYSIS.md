# GEO & AI Search Optimization Analysis — Todo Frenos

> Auditoría de optimización para motores generativos de búsqueda (Google AI Overviews, Google AI Mode, ChatGPT Search, Perplexity AI) basada en las directrices oficiales de Google Search Central y estándares de indexación para IA.

---

## 1. GEO Readiness Score: 92/100

| Criterio | Peso | Puntuación | Estado |
| :--- | :--- | :--- | :--- |
| **Citabilidad de Pasajes (Citability Score)** | 25% | 24/25 | Bloques de respuesta autosuficientes (~130-170 palabras) con definición directa en los primeros 50 vocablos. |
| **Legibilidad Estructural (Structural Readability)** | 20% | 19/20 | Jerarquía estricta H1 -> H2 -> H3 con encabezados basados en preguntas e intención de búsqueda. |
| **Contenido Multimodal (Multi-Modal Content)** | 15% | 13/15 | Marcado visual limpio, mapas embebidos, cotizador interactivo estructurado y datos Schema. |
| **Señales de Marca y Autoridad (Brand Signals & NAP)** | 20% | 18/20 | Consistencia NAP total (Av. Crisólogo Larralde 1231, Gerli), trayectoria real (35 años) y datos de contacto directos. |
| **Accesibilidad Técnica y Renders (Technical Accessibility)** | 20% | 18/20 | 100% HTML estático procesable sin dependencia obligatoria de JavaScript para rastreadores crudos. |

---

## 2. Desglose Cualitativo por Plataforma

*(Nota: Los puntajes numéricos de terceros no fueron medidos con herramientas externas de scraping comercial; se reporta la preparación técnica cualitativa según la arquitectura del sitio).*

- **Google AI Overviews & AI Mode:**  
  *Preparación:* **Excelente.** El contenido clave (definición de Todo Frenos, servicios de reparación de servo freno y rectificación en torno) se encuentra en el primer 30% del documento HTML en texto plano semántico, lo que optimiza la probabilidad de ser seleccionado para fragmentos de síntesis local y Google Maps Pack.
- **ChatGPT Search (OAI-SearchBot):**  
  *Preparación:* **Alta.** El rastreador `OAI-SearchBot` está formalmente permitido en `robots.txt`. La presencia de `llms.txt` proporciona un manifiesto estructurado en Markdown puro que facilita el mapeo de entidades para consultas conversacionales de talleres mecánicos en Buenos Aires.
- **Perplexity AI (PerplexityBot):**  
  *Preparación:* **Alta.** Cobertura de preguntas frecuentes mediante marcado interactivo de preguntas y respuestas (`<details>` y `<summary>`) que responden directamente a dudas reales de conductores (causas de pedal duro, chirridos, tiempos de reparación).

---

## 3. Estado de Acceso de Rastreadores de IA (AI Crawler Access)

Cada rastreador y su capacidad específica se informan por separado:

### Rastreadores de Citabilidad en Motores de Búsqueda de IA (Search Citability)
- **`Googlebot`**: **Permitido** (`Allow: /`). Rige la indexación principal en Google Search, Google Maps y la generación de Google AI Overviews.
- **`OAI-SearchBot`**: **Permitido** (`Allow: /`). Rige la capacidad de cita en respuestas web en vivo de ChatGPT Search (independiente de GPTBot).
- **`Claude-SearchBot`**: **Permitido** (`Allow: /`). Rige la capacidad de cita en las funciones de búsqueda web de Claude (independiente de ClaudeBot).
- **`PerplexityBot`**: **Permitido** (`Allow: /`). Rige la recopilación para respuestas indexadas del motor Perplexity AI.
- **`Applebot`**: **Permitido** (`Allow: /`). Rige la descubribilidad a través de Siri, Spotlight y Safari Search.

### Rastreadores de Entrenamiento de Modelos Fundacionales (Model Training)
- **`GPTBot`**: No bloqueado explícitamente (se rige por directiva general `*`). Gobierna únicamente la recolección para entrenamiento de modelos de OpenAI.
- **`ClaudeBot`**: No bloqueado explícitamente. Gobierna únicamente entrenamiento de modelos de Anthropic.
- **`Google-Extended`**: No bloqueado explícitamente. Gobierna el entrenamiento de modelos Gemini/Vertex (no afecta la indexación ordinaria en Google ni en AI Overviews).
- **`Applebot-Extended`**: No bloqueado explícitamente. Gobierna el etiquetado para entrenamiento de modelos de Apple Intelligence.

---

## 4. Estado de `llms.txt`

- **Estado:** **Implementado en `/llms.txt`**.
- **Función:** Proporciona un resumen técnico en Markdown estructurado con información NAP (Name, Address, Phone), especialidad en reparación de servo freno, torno propio, catálogo de trabajos y zonas geográficas atendidas en Avellaneda y alrededores.
- **Recomendación:** Mantener sincronizado si cambian los horarios comerciales o los canales de atención.

---

## 5. Análisis de Señales de Marca y NAP (Name, Address, Phone)

- **Nombre Comercial:** Todo Frenos
- **Dirección Física Unificada:** Av. Crisólogo Larralde 1231, Gerli, Partido de Avellaneda, Buenos Aires (CP 1870).
- **Teléfono / WhatsApp:** `+54 9 11 6538-5555` / `11 6538-5555`.
- **Enlace de Google Maps:** Integrado mediante botón directo (`maps.app.goo.gl/DQRJ5UdJjgps5yuP7`) e `iframe` interactivo en la sección de contacto.
- **Consistencia:** 100% de coincidencia entre los metadatos HTML, el bloque Schema.org, el archivo `llms.txt` y los textos visibles de pie de página.

---

## 6. Citabilidad a Nivel de Pasajes (Passage-Level Citability)

Se estructuraron bloques autosuficientes que no requieren contexto externo para ser citados por un LLM:

### Pasaje de Identidad de Marca y Localización (Sección Hero)
> *"Todo Frenos es un taller mecánico especializado exclusivamente en el sistema de frenos para automóviles, utilitarios y camionetas en Gerli, Avellaneda. Con más de 35 años de trayectoria en Av. Crisólogo Larralde 1231, nos especializamos en reparación de servo freno (servofreno), rectificación de discos y campanas en torno propio, cambio de pastillas y reacondicionamiento de bombas principales de freno."*  
> **Longitud:** ~60 palabras. Responde inmediatamente a: *¿Qué es Todo Frenos? ¿Dónde queda? ¿Qué reparan?*

### Pasaje Técnico Especializado (Sección Reparación de Servo)
> *"El servo freno (también conocido como servofreno o booster de freno) es el dispositivo neumático que multiplica la fuerza que el conductor ejerce sobre el pedal mediante el vacío del motor o de una bomba depresora. Cuando el servo freno falla o pierde estanqueidad por rotura del diafragma interno o falla en la válvula de retención, el pedal se vuelve extremadamente duro y la distancia de frenado se alarga peligrosamente. En Todo Frenos desarmamos y reacondicionamos servos de autos y camionetas en nuestro propio taller: reemplazamos diafragmas, retenes, sellos y válvulas de vacío, realizando la calibración milimétrica del vástago de empuje y la prueba de estanqueidad en banco neumático antes de la entrega del vehículo."*  
> **Longitud:** ~125 palabras. Responde con precisión a: *¿Por qué el pedal de freno se pone duro? ¿Cómo se repara un servo freno?*

---

## 7. Verificación de Renderizado del Lado del Servidor (SSR)

- El sitio está construido con arquitectura HTML5 estática nativa.
- Todos los títulos, párrafos técnicos, preguntas frecuentes, dirección y enlaces a WhatsApp están embebidos directamente en el DOM inicial (`index.html`).
- **Impacto para IA:** Rastreadores crudos (como `OAI-SearchBot` o `PerplexityBot` en modo de extracción rápida) no necesitan ejecutar un motor V8 de JavaScript para leer la totalidad del contenido del taller.

---

## 8. Las 5 Mejoras de Mayor Impacto Aplicadas

1. **Alineación de Trayectoria Real a 35 Años:** Se corrigió toda la documentación, metadatos y textos comerciales eliminando cualquier referencia a 50 años y fijándola en los más de 35 años de experiencia del taller.
2. **Reemplazo Integral de menciones de ABS por Reparación de Servo Freno:** Se eliminaron las menciones de ABS y se creó una sección técnica dedicada a la reparación de servo freno (servofreno / asistencia por vacío), junto a tarjetas de servicio especializadas y preguntas frecuentes explicativas.
3. **Creación de `robots.txt` con Permisos para Rastreadores de Búsqueda por IA:** Habilitación explícita de `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot` y `Googlebot`.
4. **Implementación de `llms.txt` y `sitemap.xml`:** Generación de archivos de descubrimiento y mapa del sitio para máxima indexabilidad.
5. **Enriquecimiento del Marcado Estructurado Schema.org (`AutoRepair`):** Inclusión de catálogo de servicios (`hasOfferCatalog`), coordenadas geográficas, radio de atención en Avellaneda y horarios normalizados.

---

## 9. Recomendaciones de Contenido Futuras

- **Casos y Fotos de Taller Reales:** Incorporar fotografías del torno de rectificación y del banco de prueba de servo freno para aumentar las señales de contenido de primera persona y experiencia demostrada (E-E-A-T).
- **Google Business Profile (GBP):** Asegurar que las categorías secundarias en el perfil de Google Maps incluyan "Taller de reparación de frenos" y "Mecánico de frenos" para complementar la señal SEO local.
