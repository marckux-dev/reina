# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at localhost:4321 (Keystatic CMS mounted at /keystatic)
npm run build     # Static build to ./dist/
npm run preview   # Preview the production build
npx astro check   # TypeScript type checking (no separate lint/test runner exists)
```

There is no test suite or linter.

## Architecture

**Astro 5** static site for Reina Multiservicios, a Spanish industrial cleaning / floor-treatment
company in Alicante. Deployed static to `https://reinamultiservicios.es` (Cloudflare Pages / Netlify).

### Stack
- Astro 5 (static output) with strict TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`, not an Astro integration) + DaisyUI v5, themes `bumblebee` (light) / `dracula` (dark)
- Integrations: `@astrojs/mdx`, `@astrojs/markdoc`, `@astrojs/react` (React 19), `@astrojs/sitemap`
- `@keystatic/astro` — added to integrations only when `NODE_ENV !== 'production'`
- Galleries: `astro-lightgallery` + `photoswipe`; hero slider: `astro-swiper`

### Internationalization — the dominant architectural concern
Three locales configured in `astro.config.mjs`: `es` (default, **no** URL prefix), `en` (`/en/`), `ru` (`/ru/`).

- **UI strings**: `src/i18n/ui.ts` — `ui` object keyed by locale, `useTranslations(lang)` returns a `t()` lookup that falls back to `es`.
- **Navigation**: `src/data/siteMap.ts` — `getLocalizedSiteMap(lang)` builds a prefixed, translated nav tree; `siteMap` is the plain Spanish version.
- **Content is physically duplicated per locale** across six collections (see below). Translating a page = editing/adding the parallel `.mdx` file in the `-en` / `-ru` collection.
- **Pages are duplicated too**: default (Spanish) routes live in `src/pages/*` and read the base collections; localized routes live in `src/pages/[lang]/*` and read the `-en`/`-ru` collections, with `getStaticPaths` emitting `lang: 'en' | 'ru'`. A change to a page template usually must be mirrored in both files.
- `src/layouts/MainLayout.astro` centralizes SEO: canonical URL, `hreflang` alternates (derived by stripping the `/en|/ru` prefix), Open Graph/Twitter, `noindex` prop. Locale comes from `Astro.currentLocale`.

### Content Collections (`src/content/config.ts`)
Two schemas, each instantiated three times:
- `services`, `services-en`, `services-ru` — one full service page per file (frontmatter: `navItem`, `title`, `h1`, `subtitle`, `description`, `headerImage`, `features[]`, `gallery[]`, `parallaxImage`, `slogan`, `faqs[]`, optional `order`).
- `trabajos`, `trabajos-en`, `trabajos-ru` — case-study pages (frontmatter includes `date`, `city`, optional `lat`/`lng`, `service` slug linking back to a service, `serviceLabel`, `coverImage {src,alt}`, `gallery[] {src,alt,phase?}`, optional `videoUrl`, `tags`).
- The service `[slug]` templates cross-reference `trabajos` by `data.service === entry.slug` to render "related works".

### Images
Referenced from frontmatter as bare paths under `src/assets/images/` (Keystatic writes them with `publicPath: ''`, so values are filenames or nested paths like `pulido-suelo-marmol-altea/coverImage/src.jpg`). Templates resolve them at build time with `import.meta.glob<ImageMetadata>('../../assets/images/**/*.{png,jpg,jpeg,webp,avif}', { eager: true, import: 'default' })` and index by ``../../assets/images/${src}``. Keep the glob path depth correct when adding templates at a new nesting level.

### Keystatic CMS
`keystatic.config.tsx` — `storage: { kind: 'local' }`, dev-only, mounted at `/keystatic`. Currently only the **`trabajos`** (Spanish) collection is wired up; services and translated collections are edited by hand.

### Routing
```
/, /servicios/, /servicios/[slug]/, /trabajos/, /trabajos/[slug]/, /sobre-nosotros/, /contacto/
/gracias/            post-contact redirect (excluded from sitemap)
/legal/*             aviso-legal, politica-privacidad, politica-cookies (excluded from sitemap)
/en/*, /ru/*         localized mirror of all of the above (src/pages/[lang]/)
```
`sitemap()` filters out `/legal/` and `/gracias`. `public/_redirects` holds 301/410 rules for old WordPress URLs (Cloudflare/Netlify format).

### Styles
`src/styles/global.css` — Tailwind v4 (`@import "tailwindcss"`), DaisyUI themes via `@plugin`. Reusable component classes (`.main-header`, `.main-container`, `.service-content`, `.trabajo-content`) and animations (`fadeUp`, `kenburns`) defined in an `@layer components` block. Fade-in images use `img[data-fade]` toggled to `.is-loaded` by client script.

### Other
- `src/data/company.ts` — canonical business contact info (phone, email, WhatsApp, address, CIF).
- `src/data/homeFaqs.ts` — homepage FAQ entries.
- `src/icons/*.svg` — imported directly as Astro components.
- `src/scripts/` — `load-ga.js` (consent-gated Google Analytics), `photoswipe-init.js`.
