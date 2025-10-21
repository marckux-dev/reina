export interface SitePage {
  url: string;
  title: string;
  label?: string;
  h1: string;
  children?: SitePage[];
}

export interface SiteMap {
  [key: string]: SitePage;
}


export const siteMap: SiteMap = {
  home: {
    url: '/inicio',
    title: 'Inicio',
    label: 'Inicio',
    h1: 'Empresa de limpieza y pulido profesional en Alicante',
  },
  about: {
    url: '/sobre-nosotros',
    title: 'Sobre Nosotros',
    label: 'Sobre Nosotros',
    h1: 'Más de 20 años ofreciendo limpieza profesional'
  },
  services: {
    url: '/servicios',
    title: 'Servicios',
    label: 'Servicios',
    h1: 'Nuestros servicios de limpieza y mantenimiento',
    children: [
      {
        url: '/servicios/pulido-cristalizado-superficies',
        title: 'Pulidos',
        label: 'Pulido y Cristalizado',
        h1: 'Pulido y Cristalizado de Mármol y Terrazo',
      },
      {
        url: '/servicios/limpieza-cristales',
        title: 'Cristales',
        label: 'Limpieza de Cristales',
        h1: 'Limpieza de Cristales',
      },
      {
        url: '/servicios/limpieza-industrial',
        title: 'Limpieza',
        label: 'Limpieza Industrial',
        h1: 'Limpieza de grandes superficies y fin de obra',
      },
      {
        url: '/servicios/trabajos-altura',
        title: 'Altura',
        label: 'Trabajos de altura',
        h1: 'Limpieza y mantenimiento en altura',
      },
      {
        url: '/servicios/pulido-hormigon',
        title: 'Hormigon',
        label: 'Pulido de Hormigón',
        h1: 'Tratamiento y pulido de superficies de hormigón',
      },
      {
        url: '/servicios/tratamientos-superficies',
        title: 'Tratamientos',
        label: 'Tratamientos específicos',
        h1: 'Tratamientos hidrofugantes y antideslizantes',
      },
    ],
  },
  contact: {
    url: '/contacto',
    title: 'Contacto',
    label: 'Contacto',
    h1: 'Solicita información o presupuesto',
  },
  // Esta sección no se mostrará en el NavBar:
  legal: {
    url: '/legal',
    title: 'Legal',
    h1: 'Información legal de Reina Multiservicios',
    children: [
      {
        url: '/legal/aviso-legal',
        title: 'Aviso Legal',
        label: 'Aviso Legal',
        h1: 'Aviso legal y condiciones de uso',
      },
      {
        url: '/legal/politica-privacidad',
        title: 'Privacidad',
        label: 'Política de Privacidad',
        h1: 'Protección de datos personales',
      },
      {
        url: '/legal/politica-cookies',
        title: 'Cookies',
        label: 'Política de Cookies',
        h1: 'Uso de cookies en nuestro sitio web',
      },
    ],
  }
}

export const findPageByUrl = (url: string): SitePage | null => {
  const cleanUrl = url.replace(/\/$/, '')
  for (const key in siteMap) {
    const section = siteMap[key];
    if (section && section.url === cleanUrl) return section;
    if (section && section.children) {
      const found = section.children.find(c => c.url === cleanUrl);
      if (found) return found;
    }
  }
  return null;
}
