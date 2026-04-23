export const languages = {
  es: { label: 'Español', flag: '🇪🇸' },
  en: { label: 'English', flag: '🇬🇧' },
  ru: { label: 'Русский', flag: '🇷🇺' },
} as const;

export type Language = keyof typeof languages;

export const defaultLang = 'es' as const;

export const ui = {
  es: {
    // Navegación
    'nav.home':     'Inicio',
    'nav.about':    'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.works':    'Trabajos',
    'nav.contact':  'Contacto',

    // Footer
    'footer.services':    'Servicios',
    'footer.legal':       'Información Legal',
    'footer.privacy':     'Política de privacidad',
    'footer.cookies':     'Política de cookies',
    'footer.legalNotice': 'Aviso legal',
    'footer.contact':     'Contacto',
    'footer.address':     'Dirección:',

    // Componentes de servicio
    'features.title': 'Ofrecemos',
    'features.cta':   'Pide presupuesto',
    'parallax.cta':   'Contáctanos',
    'image.of':       'Imagen de',

    // FAQs
    'faq.title':  'Preguntas Frecuentes',
    'faq.button': 'Pregúntanos',

    // Open Graph
    'og.imageAlt': 'Reina Multiservicios — Limpieza industrial y tratamientos de suelos en Alicante',

    // Cookie banner
    'cookie.text':     'Utilizamos cookies analíticas para mejorar nuestro servicio y analizar el uso del sitio web. Puedes aceptarlas o rechazarlas.',
    'cookie.moreInfo': 'Más información',
    'cookie.reject':   'Rechazar',
    'cookie.accept':   'Aceptar',
  },
  en: {
    'nav.home':     'Home',
    'nav.about':    'About Us',
    'nav.services': 'Services',
    'nav.works':    'Works',
    'nav.contact':  'Contact',

    'footer.services':    'Services',
    'footer.legal':       'Legal Information',
    'footer.privacy':     'Privacy Policy',
    'footer.cookies':     'Cookie Policy',
    'footer.legalNotice': 'Legal Notice',
    'footer.contact':     'Contact',
    'footer.address':     'Address:',

    'features.title': 'We Offer',
    'features.cta':   'Request a quote',
    'parallax.cta':   'Contact us',
    'image.of':       'Image of',

    'faq.title':  'Frequently Asked Questions',
    'faq.button': 'Ask us',

    'og.imageAlt': 'Reina Multiservicios — Industrial cleaning and floor treatments in Alicante',

    'cookie.text':     'We use analytical cookies to improve our service and analyse website usage. You can accept or reject them.',
    'cookie.moreInfo': 'More information',
    'cookie.reject':   'Reject',
    'cookie.accept':   'Accept',
  },
  ru: {
    'nav.home':     'Главная',
    'nav.about':    'О нас',
    'nav.services': 'Услуги',
    'nav.works':    'Работы',
    'nav.contact':  'Контакт',

    'footer.services':    'Услуги',
    'footer.legal':       'Правовая информация',
    'footer.privacy':     'Политика конфиденциальности',
    'footer.cookies':     'Политика cookies',
    'footer.legalNotice': 'Правовое уведомление',
    'footer.contact':     'Контакт',
    'footer.address':     'Адрес:',

    'features.title': 'Предлагаем',
    'features.cta':   'Запросить смету',
    'parallax.cta':   'Связаться с нами',
    'image.of':       'Фото',

    'faq.title':  'Часто задаваемые вопросы',
    'faq.button': 'Задать вопрос',

    'og.imageAlt': 'Reina Multiservicios — Промышленная уборка и обработка полов в Аликанте',

    'cookie.text':     'Мы используем аналитические файлы cookie для улучшения нашего сервиса и анализа использования сайта. Вы можете принять или отклонить их.',
    'cookie.moreInfo': 'Подробнее',
    'cookie.reject':   'Отклонить',
    'cookie.accept':   'Принять',
  },
} satisfies Record<string, Record<string, string>>;

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  }
}
