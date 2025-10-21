# 🌟 Proyecto Astro + TailwindCSS + DaisyUI

Este proyecto es un **sitio web estático** construido con [Astro](https://astro.build), estilizado con [TailwindCSS](https://tailwindcss.com) y [DaisyUI](https://daisyui.com).

Diseñado para ser **simple, rápido y moderno**, usando la nueva sintaxis de **Tailwind v4** y sin configuración extra.

---

## 🚀 Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) **v18 o superior**
- [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/)

Comprueba tus versiones:

```bash
node -v
npm -v
```

## Instalación

```sh
npm install
```

## Estructura del proyecto

```text
.
├── public/                 # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── layouts/            # Plantillas reutilizables
│   │   └── MainLayout.astro
│   ├── pages/              # Páginas del sitio
│   │   └── index.astro
│   └── styles/             # Estilos globales
│       └── global.css
├── astro.config.mjs        # Configuración principal de Astro
├── package.json
└── README.md
```

## Configuración de Estilos
```
/* src/styles/global.css */
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}

```

## Modo desarrollo
Se puede iniciar el servidor local de desarrollo de dos maneras equivalentes:
- Usando un script de npm:
```
npm run dev
```
- Usando un comando directo:
```
npx astro dev
```

## Otros comandos


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## Autor
Creado por marckux-dev

## Licencia
Este proyecto está bajo la Licencia MIT

