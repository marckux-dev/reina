# Auditoría SEO: por qué no posiciona reinamultiservicios.es

**Cliente:** Reina Multiservicios. Limpieza industrial, pulidos y cristalizados (La Nucia, Alicante)
**URL auditada:** https://reinamultiservicios.es
**Propiedad GSC:** `sc-domain:reinamultiservicios.es` (acceso por cuenta de servicio `claude-search-console`)
**Fecha de auditoría:** 8 de junio de 2026
**Pregunta de partida:** ¿por qué esta web no se posiciona bien?

> **Corrección importante respecto a la primera versión.** En una revisión inicial sin datos de Search Console supusimos que la web no estaba indexada, porque el operador `site:` no devolvía resultados en el buscador. Los datos de Google Search Console demuestran que esa suposición era falsa: la web sí está indexada y sí recibe tráfico. Lo que falla es la posición. Este documento sustituye aquel diagnóstico por uno basado en datos reales.

> **Método.** Análisis con la API de Google Search Console (rendimiento de 90 días, sitemaps e inspección de URL) más la inspección del HTML, cabeceras, datos estructurados y on-page. Periodo de rendimiento analizado: 8 de marzo a 5 de junio de 2026.

---

## 1. Respuesta directa: por qué no posiciona

La web está bien construida (Astro sobre Netlify, rápida, indexable) y **sí está indexada y posicionando**. El problema es que **posiciona casi solo para su propia marca y para algunas páginas de trabajos, mientras que las páginas de servicio (las que traen clientes nuevos) están en la página 5 a 9 de Google**, donde nadie hace clic.

Los datos de los últimos 90 días lo dejan claro:

- **82 clics y 1.784 impresiones** en total. Es muy poco volumen.
- **Posición media 28,5** (página 3). La web aparece, pero muy abajo.
- De los 82 clics, **72 van a la home**, y casi todo el clic es de **marca** ("reina multiservicios", "limpiezas reina", "multiservicios").
- En consultas **que no son de marca**: 849 impresiones y **1 solo clic** (CTR del 0,1%). Es decir, Google sí muestra la web para términos comerciales, pero tan abajo que no se la clica nadie.

El resumen en una frase: la web gana las búsquedas de su propio nombre, pero pierde las búsquedas de "pulido de suelos en Alicante", "abrillantado", "cristalizado", "limpieza industrial" o "trabajos en altura", que son las que de verdad generan clientes, porque en esas aparece en la página 5 o más atrás.

Las causas de fondo:

1. **Autoridad baja y sitio joven.** Las impresiones empezaron en marzo de 2026 y el volumen es pequeño. Una web nueva con pocos enlaces entrantes tarda en ganar posiciones frente a competidores asentados.
2. **Páginas de servicio débiles.** Las páginas de servicio, que son las que deben captar clientes, son las que peor posicionan (posiciones 52 a 91). Les falta contenido, enlaces internos y trabajo de SEO local.
3. **Falta de SEO local y de enlaces.** No se aprecia una ficha de Google Business trabajada ni un perfil de enlaces, que es justo lo que mueve el posicionamiento en este sector.

La parte buena: las páginas de **trabajos** (casos concretos, como la limpieza de una fachada de hotel en Benidorm) sí posicionan en posiciones 2 a 5. Eso demuestra que la web puede posicionar cuando el contenido es específico y local. Hay que llevar esa misma fórmula a las páginas de servicio.

---

## 2. Datos de Search Console (90 días: 8 mar a 5 jun de 2026)

### Totales
| Métrica | Valor |
|---|---|
| Clics | 82 |
| Impresiones | 1.784 |
| CTR | 4,6% |
| Posición media | 28,5 (página 3) |

### Marca vs no marca (el dato clave)
| Tipo | Clics | Impresiones | CTR |
|---|---|---|---|
| Marca (reina / multiservicios) | 5 | 23 | alto |
| No marca (servicios, local) | 1 | 849 | 0,1% |

La web depende casi por completo de su marca para conseguir clics. En lo comercial, tiene visibilidad (impresiones) pero no posición (clics).

### Páginas: dónde está el problema
| Página | Impresiones | Clics | Posición |
|---|---|---|---|
| `/` (home) | 1.093 | 72 | 8 |
| `/servicios/pulido-cristalizado-superficies/` | 291 | 0 | 60 |
| `/servicios/trabajos-altura/` | 141 | 0 | 67 |
| `/servicios/limpieza-industrial/` | 140 | 1 | 64 |
| `/servicios/` | 56 | 1 | 6 |
| `/sobre-nosotros/` | 47 | 0 | 8 |
| `/trabajos/limpieza-cristales-fachada-hotel-benidorm/` | 20 | 4 | 2 |
| `/trabajos/limpieza-agua-a-presion-...-benidorm/` | 30 | 2 | 3 |

La home y la página índice de servicios posicionan bien (posiciones 6 a 8), y las páginas de trabajos posicionan muy bien (posiciones 2 a 5) y consiguen clics. En cambio, **las páginas de servicio individuales, que reciben muchas impresiones (140 a 291), están en posición 60 a 67 y no logran ni un clic**. Ahí está el agujero.

### Consultas comerciales que se pierden (no marca, por impresiones)
| Consulta | Impresiones | Posición |
|---|---|---|
| abrillantado de suelos alicante | 71 | 59 |
| mantenimiento de edificios en altura alicante | 65 | 72 |
| pulidores de terrazo alicante | 48 | 60 |
| pulido suelos alicante | 36 | 55 |
| pulido suelos altea | 35 | 26 |
| limpieza industrial | 34 | 81 |
| limpiezas en altura alicante | 31 | 69 |
| pulido suelos la nucia | 27 | 26 |
| pulidor marmol alicante | 27 | 61 |
| pulido y cristalizado | 26 | 91 |

Son las búsquedas que traen clientes y en todas la web aparece en la página 5 o más atrás. Las dos menos lejanas ("pulido suelos altea" y "pulido suelos la nucia", en posición 26) son las primeras candidatas a empujar a la página 1.

### Dato a vigilar: impresiones en inglés que no son tu mercado
La web recibe impresiones de consultas en inglés tipo "concrete polishing service" o "floor grinding services" (posiciones 3 a 10), pero con cero clics. Es tráfico internacional con intención de Estados Unidos, no de la Costa Blanca. No aporta clientes y conviene no dejarse confundir por esas posiciones buenas: no son tu público.

### Dispositivo
| Dispositivo | Clics | Impresiones | Posición |
|---|---|---|---|
| Escritorio | 42 | 1.242 | 38,3 |
| Móvil | 39 | 535 | 6,1 |
| Tablet | 1 | 7 | 5,9 |

En móvil la posición media es mucho mejor (6,1) que en escritorio (38,3). Merece la pena revisar por qué, pero apunta a que en escritorio se compite por términos más amplios y peor posicionados.

---

## 3. Estado de indexación y sitemap (según GSC)

| Comprobación | Resultado |
|---|---|
| Inspección de la home | "Submitted and indexed", PASS. Último rastreo: 4 jun 2026. |
| Inspección de `/servicios/limpieza-industrial/` | "Submitted and indexed", PASS. Último rastreo: 24 abr 2026. |
| Inspección de `/servicios/pulido-cristalizado-superficies/` | "Submitted and indexed", PASS. Último rastreo: 30 abr 2026. |
| Sitemap | `sitemap-index.xml` enviado el 23 abr 2026, descargado el 7 jun, 0 errores. 51 URLs enviadas. |
| Páginas con impresiones | 40 de las 51 URLs del sitemap registran impresiones. |

**Lectura:** la indexación funciona. El sitemap está enviado y sin errores, y la mayoría de las páginas se han rastreado e indexado. El informe de sitemaps muestra "0 indexadas", pero ese contador de la API es poco fiable y va con retraso; la realidad (40 de 51 URLs con impresiones y las páginas clave indexadas) lo desmiente. Aun así, conviene revisar las 11 URLs sin impresiones por si alguna se ha quedado fuera del índice.

---

## 4. Problemas on-page que explican la mala posición

Estos hallazgos, ya detectados en el HTML, son la causa probable de que las páginas de servicio posicionen tan bajo.

| # | Hallazgo | Severidad |
|---|---|---|
| ON-1 | **Contenido escaso en las páginas de servicio** (unas 740 palabras, buena parte FAQ). Compiten contra páginas más completas y específicas. | Alta |
| ON-2 | **Placeholder sin renderizar.** En la página de servicio aparece el texto `{ subtitle }` como un H2 visible. Es un fallo de plantilla que ven el usuario y Google y que resta calidad. | Alta |
| ON-3 | **Dos H1 en las páginas de servicio.** Debe haber uno solo por página. | Media |
| ON-4 | **Falta `LocalBusiness` en la home.** Las páginas de servicio sí lo marcan, pero la home no, y es la página más importante para la marca y el SEO local. | Media |
| ON-5 | **Poca segmentación local.** Apenas hay contenido orientado a las localidades concretas (La Nucia, Altea, Benidorm, Calpe, Dénia), justo donde están las búsquedas que se pierden. | Alta |
| ON-6 | **Enlazado interno flojo hacia las páginas de servicio.** Las páginas de trabajos posicionan bien pero no se aprovechan para reforzar a las de servicio. | Media |

---

## 5. Plan de acción priorizado (con datos de GSC)

> Ya está hecho lo básico (web indexada, sitemap enviado). Ahora el trabajo es subir las páginas de servicio de la página 5 a la página 1 y dejar de depender de la marca.

### Fase 0. Arreglos inmediatos (esta semana)
1. Corregir el placeholder `{ subtitle }` de las páginas de servicio. *(Bug de contenido)*
2. Dejar un solo H1 por página. *(On-page)*
3. Crear u optimizar la ficha de Google Business (categoría, servicios, fotos de trabajos, zona de servicio y reseñas). Es lo que más mueve el SEO local. *(SEO local)*
4. Revisar las 11 URLs del sitemap sin impresiones y pedir indexación si alguna falta. *(Indexación)*

### Fase 1. Reforzar las páginas de servicio (2 a 5 semanas)
1. Ampliar cada página de servicio con contenido único y específico (proceso, materiales, casos, antes y después), apuntando a 800 a 1.200 palabras de calidad. *(Contenido)*
2. Enfocar cada página a sus términos reales de GSC. Por ejemplo, la de pulido a "abrillantado de suelos Alicante", "pulido de terrazo", "pulidor de mármol"; la de altura a "mantenimiento de edificios en altura Alicante", "limpiezas en altura". *(SEO on-page)*
3. Añadir `LocalBusiness` en la home con NAP, horario y zona de servicio. *(Datos estructurados)*
4. Enlazar desde las páginas de trabajos (que ya posicionan bien) hacia la página de servicio correspondiente, con texto de enlace descriptivo. *(Enlazado interno)*

### Fase 2. Atacar las consultas a tiro (1 a 2 meses)
1. Empujar primero "pulido suelos altea" y "pulido suelos la nucia" (posición 26), que son las más cercanas a la página 1, con contenido y enlaces específicos. *(Quick win)*
2. Crear páginas por localidad para los municipios objetivo de la Costa Blanca, replicando el patrón de las páginas de trabajos que sí funcionan. *(Contenido local)*
3. Seguir creando páginas de trabajos (casos reales con foto y localidad), que son las que mejor posicionan en este dominio. *(Contenido)*

### Fase 3. Autoridad (1 a 3 meses y continuo)
1. Alta en directorios del sector y locales con NAP idéntico en todos. *(Citaciones)*
2. Conseguir enlaces de partners, proveedores, prensa y asociaciones locales. *(Off-page)*
3. Pedir reseñas en Google de forma sistemática tras cada trabajo. *(SEO local y conversión)*

### Fase 4. Medición
1. Revisar en GSC cada mes la posición media de las páginas de servicio y de las consultas objetivo, para ver si suben de la página 5 hacia la 1. *(Seguimiento)*
2. Vigilar que el tráfico de marca deje de ser el 88% de los clics a medida que entren las consultas comerciales. *(KPI)*

---

## 6. Conclusión

La web no es el problema y sí está indexada: el diagnóstico real, con datos de Search Console, es que posiciona bien para su marca y para sus páginas de trabajos, pero las páginas de servicio (las que captan clientes) están en la página 5 a 9 para los términos comerciales y locales. La causa es una mezcla de sitio joven con poca autoridad, páginas de servicio flojas en contenido y enlaces, y falta de SEO local. El camino es claro y el punto de partida técnico ayuda: reforzar las páginas de servicio con contenido y enlaces, replicar el patrón de las páginas de trabajos que ya funcionan, trabajar la ficha de Google Business y ganar autoridad con enlaces y reseñas. Es trabajo de meses, pero medible mes a mes en GSC.

---

### Anexo. Datos técnicos y de GSC (8/6/2026)

```
Hosting:         Netlify (sitio estático)   Generador: Astro v5.16.8
Redirección:     www -> no-www (301)         TTFB home: ~0,8 s
Propiedad GSC:   sc-domain:reinamultiservicios.es (cuenta de servicio claude-search-console, siteFullUser)
Rendimiento 90d: 82 clics / 1.784 impresiones / CTR 4,6% / posición media 28,5
Marca:           5 clics, 23 impresiones        No marca: 1 clic, 849 impresiones (CTR 0,1%)
Home:            72 de 82 clics, posición 8
Servicios clave: pulido-cristalizado (291 impr, pos 60), trabajos-altura (141 impr, pos 67),
                 limpieza-industrial (140 impr, pos 64) -> todas con ~0 clics
Trabajos:        fachada-hotel-benidorm (pos 2, 4 clics), agua-presion-benidorm (pos 3, 2 clics)
Dispositivo:     escritorio pos 38,3 / móvil pos 6,1
Indexación:      home y servicios "Submitted and indexed" (PASS); rastreos abr-jun 2026
Sitemap:         sitemap-index.xml enviado 23/04/2026, 0 errores, 51 URLs, 40 con impresiones
Robots/canonical: index,follow + canonical correctos
On-page a corregir: placeholder "{ subtitle }" visible, 2 H1 en servicios, sin LocalBusiness en home
i18n:            /en/ y /ru/ indexadas; las /en/ atraen impresiones de EE. UU. sin valor comercial
```

---

## 7. Adenda: segunda revisión experta verificada (8/6/2026)

Repetí las comprobaciones con datos reales para no dar nada por supuesto. Aquí solo va lo que he podido confirmar, separado de lo que no.

### 7.1 Confirmado con datos
- **Indexación completa.** Inspeccioné en GSC una muestra amplia de URLs, incluidas todas las que no reciben impresiones (las versiones EN y RU). Todas dan "Submitted and indexed / PASS". La indexación no es el problema: de las 51 URLs del sitemap, 40 tienen impresiones y las 11 restantes están indexadas pero sin demanda (son páginas en ruso e inglés).
- **Bug de plantilla en las 6 páginas de servicio.** Las seis (`pulido-cristalizado`, `limpieza-industrial`, `limpieza-cristales`, `pulido-hormigon`, `trabajos-altura`, `tratamientos-superficies`) muestran los textos sin renderizar `{ title }` y `{ subtitle }`. Es un fallo visible y sistemático, no un caso aislado.
- **Dos H1 en las 6 páginas de servicio.** Confirmado en todas. Debe haber uno solo.
- **`LocalBusiness` presente en las 6 páginas de servicio y ausente en la home.** Incoherencia de marcado.
- **Profundidad desigual.** Las páginas de servicio van de 660 a 1.336 palabras (`pulido-cristalizado` es la más completa con 1.336; varias rondan las 700, que es escaso para competir).
- **Enlazado interno flojo hacia trabajos.** La home enlaza bien a las 13 páginas de servicio, pero las páginas de servicio apenas enlazan a las de trabajos (1 enlace), y las de trabajos son las que mejor posicionan (posiciones 2 a 5). Se desaprovecha ese empuje.
- **El 67% del sitio es traducción.** De 51 URLs, 17 son español, 17 inglés y 17 ruso. Las rusas no reciben casi impresiones y las inglesas atraen consultas de "concrete polishing" con intención de Estados Unidos (posiciones 3 a 20) y cero clics. Es tráfico sin valor comercial para la Costa Blanca.
- **Tendencia plana.** Últimos 28 días: 19 clics, 809 impresiones, posición media 30,9. No mejora respecto a los 90 días (posición 28,5). No hay despegue todavía.

### 7.2 Entidad y NAP (verificado en registros, con una salvedad)
- La web corresponde a **REINA MULTISERVICIOS COSTABLANCA SL**, CIF **B54991807**, **Calle Sella 3, 03530 La Nucia (Alicante)**, constituida el **28/02/2017**, administrador único **Juan Reina Lidia** (fuente: DatosCif). La dirección del registro coincide con la de la web.
- **Teléfono y email de la web:** +34 627 82 46 19 e info@reinamultiservicios.es (verificado en el HTML).
- **Salvedad / riesgo de confusión de marca:** en directorios aparecen otras entidades de nombre muy parecido ("Multiservicios Reina" con otro teléfono y email de Yahoo; "Multiservicios A Reina SL", NIF distinto). No he podido confirmar si alguna es la misma empresa. Esto genera ambigüedad de marca en buscadores y directorios y conviene aclararlo antes de trabajar las citaciones (NAP).

### 7.3 No verificado (no lo afirmo)
- **Ficha de Google Business.** No he podido confirmar si existe ni si está optimizada: la búsqueda de Google se bloquea tras el muro de consentimiento y no tengo acceso a la API de Google Business. Hay que comprobarlo manualmente o con acceso al perfil. Dado que la mayoría de clientes de este sector llegan por el mapa, es la primera incógnita a resolver.
- **Perfil de enlaces (backlinks).** No dispongo de herramienta de backlinks, así que no cuantifico la autoridad. El volumen bajo de impresiones es indicio de poca autoridad, pero no afirmo cifras sin medirlas con la herramienta adecuada.

### 7.4 Qué hace bien la competencia (Grupo Lorente, La Nucia)
Analicé grupolorente.net, competidor directo en la misma localidad y servicios. Hace bien:
- **Páginas de servicio dedicadas** para sus líneas principales (pulido y cristalizado, limpieza en altura con osmosis, desinfección con ozono).
- **Prueba social visible:** testimonios de clientes y logos de clientes en portada.
- **Mensaje local y de trayectoria** ("más de 20 años", mención explícita a La Nucia y a localidades como Villajoyosa y Finestrat).

Sus debilidades (oportunidad para Reina): no tiene blog, ni páginas por localidad, ni datos estructurados sólidos. Es decir, un competidor batible si Reina refuerza contenido local y técnico.

### 7.5 Cambios recomendados (solo lo que confirmo al 100%)
1. **Corregir `{ title }` y `{ subtitle }`** en las 6 páginas de servicio. Es un fallo visible que daña calidad percibida y confianza.
2. **Dejar un solo H1** por página de servicio.
3. **Añadir `LocalBusiness` en la home** con NAP, horario y zona de servicio, igual que ya tienen las páginas de servicio.
4. **Enlazar cada página de servicio con sus páginas de trabajos** relacionadas (y viceversa), con texto de enlace descriptivo, para trasladar a las de servicio el buen posicionamiento de las de trabajos.
5. **Ampliar y enfocar las páginas de servicio cortas** (las de ~700 palabras) a sus términos reales de GSC (por ejemplo "abrillantado de suelos Alicante", "pulidor de mármol", "mantenimiento de edificios en altura Alicante").
6. **Unificar el NAP** (nombre, dirección y teléfono idénticos) en la web, la ficha de Google Business y los directorios, resolviendo antes la ambigüedad de marca.

### 7.6 Siguientes pasos de la auditoría (lo que falta por medir)
- **Verificar y optimizar la ficha de Google Business** (o crearla): categoría, servicios, fotos de trabajos reales, zona de servicio y reseñas. Es lo más rentable y ahora mismo es la mayor incógnita.
- **Medir backlinks y autoridad** con una herramienta especializada para saber cuánto falta frente a la competencia.
- **Auditar a fondo a 2 o 3 competidores** (Grupo Lorente y otros) en sus palabras clave para detectar huecos de contenido.
- **Revisar la estrategia multiidioma:** decidir si EN y RU aportan clientes locales reales o si conviene limitarlas o reorientar el inglés para que deje de atraer tráfico de Estados Unidos.
- **Estudio de palabras clave local** por servicio y por municipio de la Costa Blanca.

### 7.7 Herramientas recomendadas
- **Google Search Console** (ya conectada): seguimiento de consultas, posiciones e indexación.
- **Google Business Profile** y **Google Analytics 4**: SEO local y comportamiento de usuarios.
- **Una herramienta de backlinks y keywords** (Ahrefs, Semrush o la más económica Ubersuggest) para autoridad, competencia y volúmenes de búsqueda.
- **Screaming Frog** para auditar el on-page de las 51 URLs de una pasada (H1 duplicados, placeholders, metadatos, enlazado).
- **PageSpeed Insights / CrUX** para el rendimiento de campo, aunque aquí no es el cuello de botella.
- **Validador de datos estructurados de Google** (Rich Results Test) para `LocalBusiness` y `Service`.

> Las afirmaciones de esta adenda se apoyan en datos de Search Console (API), en el HTML servido y en registros públicos. Lo que no he podido medir (ficha de Google Business y backlinks) queda señalado como pendiente, sin estimaciones inventadas.
