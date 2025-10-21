export const siteMap.ts {
  home: {
    url: '/',
    label: 'Inicio',
    h1: 'Empresa de limpieza y pulido profesional en Alicante',
  },
  about: {
    url: '/sobre-nosotros/',
    label: 'Sobre Nosotros',
    h1: 'Más de 20 años ofreciendo limpieza profesional'
  },
  services: {
    url: '/servicios/'
    label: 'Servicios',
    h1: 'Nuestros servicios de limpieza y mantenimiento',
    children: [
      {
        url: '/servicios/pulido-cristalizado-superficies/',
        label: 'Pulido y Cristalizado',
        h1: 'Pulido y Cristalizado de Mármol y Terrazo',
      },
      {
        url: '/servicios/limpieza-cristales',
        label: 'Limpieza de Cristales',
        h1: 'Limpieza de Cristales',
      },
      {
        url: '/servicios/limpieza-industrial/',
        label: 'Limpieza Industrial',
        h1: 'Limpieza de grandes superficies y fin de obra',
      },
      {
        url: '/trabajos-altura/',
        label: 'Trabajos de altura',
        h1: 'Limpieza y mantenimiento en altura',
      },
      {
        url: '/pulido-hormigon/',
        label: 'Pulido de Hormigón',
        h1: 'Tratamiento y pulido de superficies de hormigón',
      },
      {
        url: '/servicios/tratamientos-superficies/',
        label: 'Tratamientos específicos',
        h1: 'Tratamientos hidrofugantes y antideslizantes',
      },
    ],
  },
  contact: {
    url: '/contacto/',
    label: 'Contacto',
    h1: 'Solicita información o presupuesto',
  },
  // Esta sección no se mostrará en el NavBar:
  legal: {
    children: [
    {
      url: '/legal/aviso-legal/',
        label: 'Aviso Legal',
        h1: 'Aviso legal y condiciones de uso',
    },
      {
        url: '/legal/politica-privacidad/',
        label: 'Política de Privacidad',
        h1: 'Protección de datos personales',
      },
      {
        url: '/legal/politica-cookies/',
        label: 'Política de Cookies',
        h1: 'Uso de cookies en nuestro sitio web',
      },
    ],
  }
}
