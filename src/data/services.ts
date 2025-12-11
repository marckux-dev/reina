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
    headerImage: '39-1-scaled-e1747082279507.png',
    features: [
      'Pulidos, Diamantados y Cristalizados de pavimentos de mármol y terrazo.',
      'Restauración de suelos deteriorados por el uso.',
      'Desbaste, Rejuntado y Abrillantado de suelos recién puestos.',
      'Eliminación de manchas, arañazos y desgaste.',
      'Servicios para hoteles, locales comerciales y oficinas.',
      'Brillo duradero sin necesidad de ceras ni productos.',
      'Uso de maquinaria profesional y productos profesionales',
      'Mantenimiento periódico para empresas, hoteles y comunidades en zonas de alta transitabilidad.',
    ],
    gallery: [
      '20-scaled-e1747245527838.png',
      'IMG_7837.jpg',
      '5-scaled-e1747085552234.png',
      '8-scaled-e1747243633304.png',
    ],
    parallaxImage: '39-1-scaled-e1747082279507.png',
    slogan: 'Brillo impecable, resultados duraderos',
    faqs: [
      {
        question: '¿Qué diferencia hay entre pulido, abrillantado y cristalizado?',
        answer: '- Pulido: elimina imperfecciones, arañazos y desniveles para recuperar el aspecto' 
          + ' original del suelo, tanto suelo recién colocado como suelo ya deteriorado con el tiempo.<br />'
          + ' - Abrillantado: aporta brillo mediante máquinas rotativas de velocidad y' 
          + ' cristalizadores químicos de alta durabilidad, ya sea para mantenimiento o renovación' 
          + ' del acabado cristalizado.',
      },
      {
        question: '¿Cada cuánto tiempo es recomendable pulir o abrillantar un suelo?',
        answer: 'Depende del uso. En entornos comerciales o de alto tránsito, puede ser necesario'
          + ' cada 6–12 meses; en viviendas, cada 1–2 años sería lo recomendable. Todo dependerá'
          + ' del desgaste y uso que se le dé a la zona a tratar. El acabado final no tiene'
          + ' caducidad. El deterioro o reducción de brillo del suelo se verá afectado por el'
          + ' tránsito, limpieza o la exposición a condiciones meteorológicas que puedan afectarle.',
      },
      {
        question: '¿Qué tipo de superficies se pueden limpiar o tratar?',
        answer: 'Trabajamos sobre una amplia variedad de superficies: mármol, terrazo, granito,' 
          + ' hormigón, cerámica, barro cocido, PVC, suelos industriales, resinas, superficies' 
          + ' metálicas y más. Adaptamos cada proceso y tratamiento al material y al nivel de desgaste.',
      }
    ]
  },

{
    slug: 'limpieza-cristales',
    navItem: 'Limpieza de Cristales',
    title: 'Limpieza Cristales',
    h1: 'Limpieza de Cristales y Ventanas',
    subtitle: 'Cristales impecables, sin marcas ni residuos, tanto en interior como exterior.',
    headerImage: '14-1-scaled-e1747087271960.png',
    features: [
      'Limpieza de cristales, cristaleras y ventanales de gran tamaño.',
      'Limpieza profesional de ventanales, espejos y cristalería en zonas comunes, espacios de alta transitabilida',
      'Limpieza de todo tipo de superficies vitradas.',
      'Trabajos en altura mediante maquinaria elevadora.',
      'Uso de agua osmotizada para un acabado sin marcas.',
      'Limpieza de marcos, guías y superficies metálicas.',
      'Servicios para hoteles, locales comerciales y oficinas.',
      'Mantenimiento periódico para empresas y comunidades.',
    ],
    gallery: [
      '20-scaled-e1747245527838.png',
      'IMG_7837.jpg',
      '5-scaled-e1747085552234.png',
      '8-scaled-e1747243633304.png',
    ],
    parallaxImage: '14-1-scaled-e1747087271960.png',
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
    headerImage: 'LIMPIEZA-SUELO-e1747239650430.jpg',
    features: [
      'Limpieza profunda de suelos, paredes y techos industriales.',
      'Limpieza de grandes superficies y parkings.',
      'Eliminación de polvo, residuos y restos de materiales de fin de obra.',
      'Servicios de limpieza de moquetas, alfombras modulares y tapices vinílicos.',
      'Desinfección y limpieza de maquinaria y zonas técnicas.',
      'Limpieza osmotizada de placas solares.',
      'Limpiezas técnicas y de alta complejidad.',
      'Uso de productos desengrasantes y desincrustantes.',
      'Uso de maquinaria profesional y productos profesionales.',
      'Realizamos limpieza de riesgo entre otros servicios especializados.',
      'Cumplimiento estricto de normas de seguridad y prevención.',
    ],
    gallery: [
      '20-scaled-e1747245527838.png',
      'IMG_7837.jpg',
      '5-scaled-e1747085552234.png',
      '8-scaled-e1747243633304.png',
    ],
    parallaxImage: 'LIMPIEZA-SUELO-e1747239650430.jpg',
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
    headerImage: 'IMG_7837.jpg',
    features: [
      'Limpieza de fachadas, cristales y paneles en altura.',
      'Trabajos de altura con maquinaria elevadora especializada.',
      'Plataformas, elevadores de tijera y minigrúas articuladas para intervenciones en zonas de difícil acceso.',
      'Personal con formación y certificación en trabajos verticales.',
      'Seguros de responsabilidad civil y cumplimiento normativo.',
    ],
    gallery: [
      '20-scaled-e1747245527838.png',
      'IMG_7837.jpg',
      '5-scaled-e1747085552234.png',
      '8-scaled-e1747243633304.png',
    ],
    parallaxImage: 'IMG_7837.jpg',
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
    headerImage: '7-scaled-e1747087500155.png',
    features: [
      'Pulido, lijado, restauración y tratamiento de superficies de hormigón.',
      'Tratamientos antipolvo, endurecedores y selladores.',
      'Superficies lisas y antideslizantes de alto rendimiento.',
      'Aplicación de tratamientos hidrofugantes y oleofugantes.',
      'Adecuado para naves, parkings, centros logísticos y talleres.',
    ],
    gallery: [
      '20-scaled-e1747245527838.png',
      'IMG_7837.jpg',
      '5-scaled-e1747085552234.png',
      '8-scaled-e1747243633304.png',
    ],
    parallaxImage: '7-scaled-e1747087500155.png',
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
    headerImage: '20-scaled-e1747245527838.png',
    features: [
      'Tratamientos hidrofugantes y oleofugantes para piedras calizas.',
      'Procesos de limpieza, conservación y protección de baldosas de barro y terracota.',
      'Soluciones antideslizantes para suelos resbaladizos.',
      'Protección contra manchas, humedad y desgaste.',
      'Tratamientos específicos para superficies porosas o grasas.',
      'Aumento de la durabilidad ante el desgaste por el uso o las condiciones meteorológicas.',
    ],
    gallery: [
      '20-scaled-e1747245527838.png',
      'IMG_7837.jpg',
      '5-scaled-e1747085552234.png',
      '8-scaled-e1747243633304.png',
    ],
    parallaxImage: '20-scaled-e1747245527838.png',
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
