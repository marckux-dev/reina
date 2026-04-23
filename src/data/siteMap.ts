import { useTranslations, defaultLang, type Language } from '../i18n/ui';

export interface SitePage {
  url: string;
  label?: string;
  children?: SitePage[];
}

export interface SiteMap {
  [key: string]: SitePage;
}

export function getLocalizedSiteMap(lang: Language): SiteMap {
  const t = useTranslations(lang);
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const url = (path: string) => `${prefix}${path}`;

  return {
    home:     { url: url('/'),               label: t('nav.home') },
    about:    { url: url('/sobre-nosotros/'), label: t('nav.about') },
    services: { url: url('/servicios/'),      label: t('nav.services'), children: [] },
    trabajos: { url: url('/trabajos/'),       label: t('nav.works') },
    contact:  { url: url('/contacto/'),       label: t('nav.contact') },
    legal:    { url: url('/legal/'),          children: siteMap.legal.children },
  };
}

export const siteMap: SiteMap = {
  home: {
    url: '/',
    label: 'Inicio',
  },
  about: {
    url: '/sobre-nosotros/',
    label: 'Sobre Nosotros',
  },
  services: {
    url: '/servicios/',
    label: 'Servicios',
    children: [],
  },
  trabajos: {
    url: '/trabajos/',
    label: 'Trabajos',
  },
  contact: {
    url: '/contacto/',
    label: 'Contacto',
  },
  legal: {
    url: '/legal/',
    children: [
      { url: '/legal/aviso-legal/',          label: 'Aviso Legal' },
      { url: '/legal/politica-privacidad/',   label: 'Política de Privacidad' },
      { url: '/legal/politica-cookies/',      label: 'Política de Cookies' },
    ],
  },
};
