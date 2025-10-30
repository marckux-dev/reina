export interface ServiceData {
  slug: string;
  navItem: string;
  title: string;
  h1: string;
  subtitle: string;
  headerImage: string;
  features: string[];
  gallery: string[];
  parallaxImage: string;
  slogan: string;
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [

  /* Pulido y Cristalizado */
  {
    slug: 'pulido-cristalizado-superficies',
    navItem: 'Pulido y cristalizado',
    title: 'Pulido',
    h1: 'Pulido y Cristalizado de Superficies',
    subtitle: 'Recupera el brillo original de tu mármol y terrazo con acabado profesional',
    headerImage: '/slider01/39-1-scaled-e1747082279507.png',
    features: [
      'Pulido y cristalizado de mármol, terrazo y granito.',
      'Restauración de suelos deteriorados por el uso.',
      'Eliminación de manchas, arañazos, desgaste superficial.',
      'Brillo duradero sin necesidad de ceras ni productos.',
      'Uso de maquinaria profesional y productos respetuosos con el medio ambiente.',
    ],
    gallery: [
      '/slider01/20-scaled-e1747245527838.png',
      '/slider01/IMG_7837.jpg',
      '/slider01/5-scaled-e1747085552234.png',
      '/slider01/8-scaled-e1747243633304.png',
    ],
    parallaxImage: '/slider01/39-1-scaled-e1747082279507.png',
    slogan: 'Brillo impecable, resultados duraderos',
    faqs: [
      {
        question: '¿Cada cuanto tiempo se debe pulir o cristalizar un suelo?',
        answer: 'Depende del tránsito y del tipo de superficie. En zonas de mucho uso se recomienda cada 6 - 12 meses.',
      },
      {
        question: '¿Se puede pulir un suelo sin retirar los muebles?',
        answer: 'En la mayoría de los casos sí. Aunque para obtener resultados óptimos se recomienda retirar los muebles antes de realizar el trabajo.',
      }
    ]
  },

{
    slug: 'limpieza-cristales',
    navItem: 'Limpieza de Cristales',
    title: 'Limpieza Cristales',
    h1: 'Limpieza de Cristales y Ventanas',
    subtitle: 'Cristales impecables, sin marcas ni residuos, tanto en interior como exterior.',
    headerImage: '/slider01/14-1-scaled-e1747087271960.png',
    features: [
      'Limpieza de cristales, escaparates y ventanales de gran tamaño.',
      'Trabajos en altura mediante pértigas o plataformas elevadoras.',
      'Uso de agua osmotizada para un acabado sin marcas.',
      'Limpieza de marcos, guías y superficies metálicas.',
      'Servicios para viviendas, locales comerciales y oficinas.',
      'Mantenimiento periódico para empresas o comunidades.'
    ],
    gallery: [
      '/slider01/20-scaled-e1747245527838.png',
      '/slider01/IMG_7837.jpg',
      '/slider01/5-scaled-e1747085552234.png',
      '/slider01/8-scaled-e1747243633304.png',
    ],
    parallaxImage: '/slider01/14-1-scaled-e1747087271960.png',
    slogan: 'Claridad total, sin esfuerzo',
    faqs: [
      {
        question: '¿Qué diferencia hay entre limpiar con agua normal y agua osmotizada?',
        answer: 'El agua osmotizada elimina minerales y evita marcas o velos, dejando los cristales más limpios por más tiempo.'
      },
      {
        question: '¿Podéis limpiar en fachadas o grandes alturas?',
        answer: 'Sí, contamos con pértigas de hasta 20 metros y plataformas elevadoras homologadas.'
      },
      {
        question: '¿Ofrecéis contratos de mantenimiento periódico?',
        answer: 'Sí, podemos programar limpiezas semanales, mensuales o trimestrales según tus necesidades.'
      }
    ]
  },

  {
    slug: 'limpieza-industrial',
    navItem: 'Limpieza Industrial',
    title: 'Limpieza Industrial',
    h1: 'Limpieza Industrial y Fin de Obra',
    subtitle: 'Servicios integrales de limpieza para naves, talleres, obras y grandes superficies.',
    headerImage: '/slider01/LIMPIEZA-SUELO-e1747239650430.jpg',
    features: [
      'Limpieza profunda de suelos, paredes y techos industriales.',
      'Eliminación de polvo, residuos y restos de materiales de obra.',
      'Desinfección y limpieza de maquinaria y zonas técnicas.',
      'Tratamientos específicos para superficies porosas o grasas.',
      'Uso de productos desengrasantes y maquinaria industrial.',
      'Cumplimiento estricto de normas de seguridad y prevención.'
    ],
    gallery: [
      '/slider01/20-scaled-e1747245527838.png',
      '/slider01/IMG_7837.jpg',
      '/slider01/5-scaled-e1747085552234.png',
      '/slider01/8-scaled-e1747243633304.png',
    ],
    parallaxImage: '/slider01/LIMPIEZA-SUELO-e1747239650430.jpg',
    slogan: 'Limpieza a fondo, sin interrupciones',
    faqs: [
      {
        question: '¿Realizáis limpiezas en horario nocturno o fines de semana?',
        answer: 'Sí, adaptamos nuestros horarios para no interferir con la actividad de la empresa.'
      },
      {
        question: '¿Podéis retirar residuos de obra o escombros?',
        answer: 'Sí, gestionamos la retirada y transporte de residuos según normativa.'
      },
      {
        question: '¿Qué tipo de maquinaria utilizáis?',
        answer: 'Usamos aspiradores industriales, fregadoras automáticas y equipos de presión controlada.'
      }
    ]
  },

  {
    slug: 'trabajos-altura',
    navItem: 'Trabajos de Altura',
    title: 'Trabajos altura',
    h1: 'Trabajos en Altura y Fachadas',
    subtitle: 'Limpieza y mantenimiento en altura con total seguridad y resultados garantizados.',
    headerImage: '/slider01/IMG_7837.jpg',
    features: [
      'Limpieza de fachadas, cristales y paneles en altura.',
      'Uso de técnicas de acceso mediante cuerda o góndola.',
      'Reparación de juntas, sellados y pequeñas restauraciones.',
      'Aplicación de tratamientos hidrofugantes o anti-moho.',
      'Personal con formación y certificación en trabajos verticales.',
      'Seguros de responsabilidad civil y cumplimiento normativo.'
    ],
    gallery: [
      '/slider01/20-scaled-e1747245527838.png',
      '/slider01/IMG_7837.jpg',
      '/slider01/5-scaled-e1747085552234.png',
      '/slider01/8-scaled-e1747243633304.png',
    ],
    parallaxImage: '/slider01/IMG_7837.jpg',
    slogan: 'Altura y precisión, sin riesgos',
    faqs: [
      {
        question: '¿Qué sistemas de seguridad utilizáis?',
        answer: 'Cumplimos la normativa UNE-EN de trabajos verticales y usamos equipos certificados de anclaje y línea de vida.'
      },
      {
        question: '¿Podéis limpiar fachadas de vidrio o composite?',
        answer: 'Sí, realizamos limpieza de todo tipo de superficies con productos específicos para cada material.'
      },
      {
        question: '¿Realizáis trabajos de reparación además de limpieza?',
        answer: 'Sí, también sellamos juntas, reparamos fisuras y aplicamos tratamientos protectores.'
      }
    ]
  },

  {
    slug: 'pulido-hormigon',
    navItem: 'Pulido de Hormigón',
    title: 'Pulido Hormigón',
    h1: 'Pulido y Tratamiento de Hormigón',
    subtitle: 'Mejora la resistencia y el aspecto del pavimento con un acabado liso, brillante y fácil de mantener.',
    headerImage: '/slider01/7-scaled-e1747087500155.png',
    features: [
      'Pulido y abrillantado de pavimentos de hormigón.',
      'Tratamientos antipolvo, endurecedores y selladores.',
      'Superficies lisas y reflectantes con alto rendimiento.',
      'Aplicación de resinas o recubrimientos protectores.',
      'Adecuado para naves, garajes, centros logísticos y talleres.',
      'Soluciones duraderas con bajo mantenimiento.'
    ],
    gallery: [
      '/slider01/20-scaled-e1747245527838.png',
      '/slider01/IMG_7837.jpg',
      '/slider01/5-scaled-e1747085552234.png',
      '/slider01/8-scaled-e1747243633304.png',
    ],
    parallaxImage: '/slider01/7-scaled-e1747087500155.png',
    slogan: 'Suelo industrial, brillo profesional',
    faqs: [
      {
        question: '¿Qué diferencia hay entre un suelo pulido y uno tratado?',
        answer: 'El pulido alisa y abrillanta; el tratamiento endurece y sella para evitar polvo y manchas.'
      },
      {
        question: '¿Se puede aplicar en exteriores?',
        answer: 'Sí, siempre que se usen productos resistentes a la intemperie y a los rayos UV.'
      },
      {
        question: '¿Cuánto tiempo tarda en realizarse el proceso?',
        answer: 'Depende de la superficie; una nave de 500 m² puede completarse en 1–2 días.'
      }
    ]
  },

  {
    slug: 'tratamientos-superficies',
    navItem: 'Tratamientos Específicos',
    title: 'Tratamientos Superficies',
    h1: 'Tratamientos Específicos de Superficies',
    subtitle: 'Protege y mejora la durabilidad de tus suelos y revestimientos con tratamientos profesionales.',
    headerImage: '/slider01/20-scaled-e1747245527838.png',
    features: [
      'Aplicación de tratamientos hidrofugantes y oleofugantes.',
      'Soluciones antideslizantes para suelos resbaladizos.',
      'Protección contra manchas, humedad y desgaste.',
      'Aumenta la durabilidad y reduce el mantenimiento.',
      'Productos ecológicos y compatibles con cualquier material.',
      'Ideal para piedra natural, cerámica, hormigón o madera.'
    ],
    gallery: [
      '/slider01/20-scaled-e1747245527838.png',
      '/slider01/IMG_7837.jpg',
      '/slider01/5-scaled-e1747085552234.png',
      '/slider01/8-scaled-e1747243633304.png',
    ],
    parallaxImage: '/slider01/20-scaled-e1747245527838.png',
    slogan: 'Protege tus superficies, mejora su vida útil',
    faqs: [
      {
        question: '¿Qué es un tratamiento hidrofugante?',
        answer: 'Es un producto que impermeabiliza el material sin alterar su color ni textura, evitando filtraciones de agua.'
      },
      {
        question: '¿Los tratamientos antideslizantes cambian el aspecto del suelo?',
        answer: 'No, son transparentes y mantienen el acabado original mientras mejoran la seguridad.'
      },
      {
        question: '¿Cuánto duran los efectos del tratamiento?',
        answer: 'Depende del uso y exposición, pero suelen durar entre 3 y 5 años con mantenimiento adecuado.'
      }
    ]
  },

];
