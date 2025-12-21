export interface SitePage {
  url: string;
  label?: string;
  children?: SitePage[];
}

export interface SiteMap {
  [key: string]: SitePage;
}

export const siteMap: SiteMap = {
  home: {
    url: '/',
    label: 'Inicio',
  },
  about: {
    url: '/sobre-nosotros',
    label: 'Sobre Nosotros',
  },
  services: {
    url: '/servicios',
    label: 'Servicios',
    children: [],
  },
  contact: {
    url: '/contacto',
    label: 'Contacto',
  },
  // Esta sección no se mostrará en el NavBar:
  legal: {
    url: '/legal',
    children: [
      {
        url: '/legal/aviso-legal',
        label: 'Aviso Legal',
      },
      {
        url: '/legal/politica-privacidad',
        label: 'Política de Privacidad',
      },
      {
        url: '/legal/politica-cookies',
        label: 'Política de Cookies',
      },
    ],
  }
}

