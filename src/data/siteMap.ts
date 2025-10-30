import { services } from "./services";

export interface SitePage {
  url: string;
  label?: string;
  children?: SitePage[];
}

export interface SiteMap {
  [key: string]: SitePage;
}

const servicesMap = Object.values(services)
  .map( (service) => ({
    url: `/servicios/${service.slug}`,
    label: service.navItem,
  }));

export const siteMap: SiteMap = {
  home: {
    url: '/inicio',
    label: 'Inicio',
  },
  about: {
    url: '/sobre-nosotros',
    label: 'Sobre Nosotros',
  },
  services: {
    url: '/servicios',
    label: 'Servicios',
    children: servicesMap,
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

