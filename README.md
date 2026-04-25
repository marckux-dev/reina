# Reina Multiservicios — Sitio Web Corporativo

Sitio web estático para **Reina Multiservicios Costablanca**, empresa de limpieza industrial y tratamientos de suelos con sede en La Nucia (Alicante). Construido con Astro 5 y optimizado para SEO local.

Web en producción: [reinamultiservicios.es](https://reinamultiservicios.es)

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Astro 5 (modo estático) |
| Estilos | Tailwind CSS v4 + DaisyUI v5 |
| Contenido | MDX + Markdoc |
| CMS (dev) | Keystatic |
| Galerías | astro-lightgallery + PhotoSwipe |
| Slider | astro-swiper |
| Lenguaje | TypeScript (strict) |

---

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo en localhost:4321
npm run build        # Build de producción en ./dist/
npm run preview      # Previsualizar el build
npx astro check      # Comprobación de tipos TypeScript
```

---

## Estructura del proyecto

```text
src/
├── assets/images/        # Imágenes optimizadas (webp/jpg)
├── components/           # Componentes Astro reutilizables
├── content/
│   ├── services/         # Servicios en español (MDX)
│   ├── services-en/      # Servicios en inglés (MDX)
│   ├── services-ru/      # Servicios en ruso (MDX)
│   ├── trabajos/         # Casos de trabajo en español (MDX)
│   ├── trabajos-en/      # Casos de trabajo en inglés (MDX)
│   └── trabajos-ru/      # Casos de trabajo en ruso (MDX)
├── data/
│   ├── company.ts        # Datos de contacto y empresa
│   ├── siteMap.ts        # Estructura de navegación
│   └── homeFaqs.ts       # FAQs de la página de inicio
├── i18n/
│   └── ui.ts             # Traducciones (es/en/ru) + helper useTranslations()
├── icons/                # SVGs importados como componentes Astro
├── layouts/
│   └── MainLayout.astro  # Layout principal (SEO, meta, scripts)
├── pages/
│   ├── index.astro
│   ├── servicios/        # Rutas en español (por defecto)
│   ├── trabajos/
│   ├── sobre-nosotros.astro
│   ├── contacto.astro
│   ├── gracias.astro
│   ├── legal/
│   └── [lang]/           # Rutas internacionales (en / ru)
│       ├── servicios/
│       └── trabajos/
├── scripts/
│   ├── load-ga.js        # Carga condicional de Google Analytics
│   └── photoswipe-init.js
└── styles/
    └── global.css        # Tailwind v4 + animaciones personalizadas
```

---

## Internacionalización (i18n)

El sitio soporta tres idiomas con la i18n nativa de Astro:

| Idioma | Locale | Prefijo de ruta |
|---|---|---|
| Español | `es` | sin prefijo (por defecto) |
| English | `en` | `/en/` |
| Русский | `ru` | `/ru/` |

Las traducciones de la UI se gestionan en `src/i18n/ui.ts`. El contenido (servicios y trabajos) se duplica en colecciones separadas por idioma.

---

## Colecciones de contenido

### Servicios (`src/content/services*.mdx`)

Cada archivo define una página de servicio completa vía frontmatter:

```yaml
title:        # Meta title SEO
h1:           # Encabezado visible
subtitle:     # Subtítulo del hero
headerImage:  # Imagen de cabecera
features:     # Lista de características
gallery:      # Imágenes de la galería
faqs:         # Preguntas frecuentes
parallaxImage: # Imagen del bloque parallax
slogan:       # Texto del bloque parallax
```

Servicios disponibles: `limpieza-cristales`, `limpieza-industrial`, `pulido-cristalizado-superficies`, `pulido-hormigon`, `trabajos-altura`, `tratamientos-superficies`.

### Trabajos (`src/content/trabajos*.mdx`)

Casos de trabajo reales con galería fotográfica, generados como rutas dinámicas en `/trabajos/[slug]/`.

---

## Rutas

```
/                          → Inicio
/servicios/                → Listado de servicios
/servicios/[slug]/         → Página de servicio (colección MDX)
/trabajos/                 → Listado de trabajos
/trabajos/[slug]/          → Página de trabajo (colección MDX)
/sobre-nosotros/           → Página corporativa
/contacto/                 → Formulario de contacto
/gracias/                  → Redirección post-formulario (excluida del sitemap)
/legal/                    → Aviso legal, privacidad, cookies (excluidas del sitemap)
/en/*                      → Versión en inglés de todas las rutas
/ru/*                      → Versión en ruso de todas las rutas
```

---

## Componentes principales

| Componente | Descripción |
|---|---|
| `Navbar.astro` | Barra de navegación con selector de idioma |
| `LangSelector.astro` | Selector de idioma |
| `HeroSlider.astro` | Slider de la portada (astro-swiper) |
| `HeroService.astro` | Hero para páginas de servicio |
| `FeaturesService.astro` | Bloque de características del servicio |
| `Gallery.astro` | Galería con lightbox (PhotoSwipe) |
| `ParallaxService.astro` | Sección parallax con CTA |
| `FaqService.astro` | Acordeón de preguntas frecuentes |
| `Card.astro` | Tarjeta de servicio/trabajo |
| `Breadcrumb.astro` | Migas de pan con schema JSON-LD |
| `LocalSEO.astro` | Schema JSON-LD para SEO local |
| `CookieBanner.astro` | Banner de consentimiento de cookies |
| `ContactButton.astro` | Botón flotante de contacto |
| `Footer.astro` | Pie de página |

---

## CMS (Keystatic)

En entorno de desarrollo, Keystatic está disponible en `/keystatic` para editar el contenido MDX sin tocar el código directamente. En producción se excluye del build.

```bash
npm run dev   # Keystatic disponible en http://localhost:4321/keystatic
```

---

## Estilos

Tailwind CSS v4 se integra vía plugin de Vite. El archivo `src/styles/global.css` define:

- Clases reutilizables: `.main-header`, `.main-container`
- Animaciones: `fadeUp`, `kenburns`
- Atributo `data-fade` para efectos de entrada en imágenes

Temas DaisyUI configurados: `bumblebee` (claro) / `dracula` (oscuro).

---

## Datos de la empresa

```ts
// src/data/company.ts
name:    'Reina Multiservicios Costablanca'
phone:   +34 627 82 46 19
email:   info@reinamultiservicios.es
address: Calle Sella, 3. Polígono Alberca, Nave 2. 03530 La Nucia (Alicante)
CIF:     B54991807
```

---

## Despliegue

El sitio se despliega como sitio estático. El archivo `public/_redirects` gestiona redirecciones (compatible con Cloudflare Pages / Netlify).

```bash
npm run build   # Genera ./dist/ listo para desplegar
```

---

## Autor

Desarrollado por [marckux-dev](https://github.com/marckux)
