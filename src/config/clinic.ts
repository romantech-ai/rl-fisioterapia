export const clinic = {
  name: "RL Fisioterapia®️",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en las mejores manos en Granada",
  description: "RL Fisioterapia® es tu clínica de fisioterapia de confianza en Granada, Álava. Con 5 estrellas en Google y 335 reseñas, ofrecemos tratamientos personalizados de fisioterapia manual, deportiva, rehabilitación y punción seca. Instalaciones modernas, ambiente relajante y un equipo que se preocupa de verdad por tu recuperación desde la primera sesión.",
  colors: {
    primary: "#4abdbb",
    secondary: "#163938",
    accent: "#e7e8ee",
    neutral: "#f1fafa"
  },
  phone: "622 25 07 48",
  whatsapp: "+34622250748",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "59RQ+G7W, Calle Rector José Vida, Beiro, 18014 Soria, Granada, España",
    city: "Granada",
    province: "Álava",
    postalCode: "18014",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=6033256076376008733&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=RL%20Fisioterapia%C2%AE%EF%B8%8F%20%4037.1913%2C-3.61181&z=16&output=embed",
  coordinates: {
    lat: 37.1913,
    lng: -3.61181
  },
  schedule: [
    {
      days: "lunes - jueves",
      hours: "9:00–13:00, 16:00–20:00"
    },
    {
      days: "viernes",
      hours: "8:00–20:00"
    },
    {
      days: "sábado",
      hours: "9:00–13:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 335,
    url: "https://maps.google.com/?cid=6033256076376008733&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
    featured: [
      {
        author: "Rosa Revueltas",
        rating: 5,
        text: "La clínica de fisioterapia me ha encantado. El trato del personal es cercano y muy profesional, se nota que se preocupan de verdad por la recuperación de cada paciente. Desde la primera sesión me explicaron todo con claridad y adaptaron el tratamiento a mis necesidades. Las instalaciones son modernas y cómodas, lo que hace que la experiencia sea aún mejor. Gracias a su ayuda he notado una gran mejoría en poco tiempo. ¡Totalmente recomendable!",
        date: "Hace 5 meses"
      },
      {
        author: "Daniela Carmona",
        rating: 5,
        text: "Desde el primer momento me he sentido como en casa, el trato es maravilloso y el personal aún más. Dispone de unas instalaciones y maquinarias bastante completas, literalmente sales nuevo de ahí!!! El ambiente es muy calmado y la música de fondo hace que te relajes un montón. Muchísimas gracias por todo 🤗",
        date: "Hace 3 meses"
      },
      {
        author: "Carmen Villanueva Lazaro",
        rating: 5,
        text: "Muy recomendable. En RL Fisioterapia en Granada me atendieron con profesionalidad y cercanía, explicando cada paso del tratamiento y adaptándolo a mis necesidades. Instalaciones limpias, trato excelente y resultados desde las primeras sesiones. Sin duda un centro de confianza al que volveré",
        date: "Hace 4 meses"
      },
      {
        author: "María Sánchez Valenzuela",
        rating: 5,
        text: "Un trato de 10, son increíbles, súper profesionales y además muy atentos. Me hicieron sentir cómoda desde el primer día y noté resultados rapidísimo. Se nota que les apasiona lo que hacen y eso da muchísima confianza. ¡Recomendadísimos!",
        date: "Hace 4 meses"
      },
      {
        author: "Lidia Mb",
        rating: 5,
        text: "Excelentes profesionales. He notado una gran mejoría en poco tiempo. Son muy implicados en su trabajo y se preocupan de verdad en que mejores. Lo recomiendo sin duda.",
        date: "Hace 2 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas que aplicamos con precisión para aliviar tu dolor y mejorar la movilidad articular. Cada sesión se adapta completamente a tu estado y evolución, explicándote cada paso del proceso para que te sientas seguro y acompañado en tu recuperación.",
      benefits: [
        "Alivio del dolor desde las primeras sesiones",
        "Mejora significativa de la movilidad articular",
        "Tratamiento personalizado adaptado a ti"
      ],
      icon: "Hand"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Tratamiento especializado para deportistas que buscan recuperarse de lesiones o prevenir futuras molestias. Utilizamos técnicas avanzadas y maquinaria completa para que vuelvas a tu actividad deportiva en las mejores condiciones físicas posibles.",
      benefits: [
        "Recuperación rápida de lesiones deportivas",
        "Prevención de futuras lesiones",
        "Vuelta al deporte con total seguridad"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación",
      description: "Programas de rehabilitación totalmente personalizados para recuperar tu funcionalidad tras lesiones, cirugías o procesos de dolor crónico. Seguimiento continuo y ajustes constantes del tratamiento según tu evolución para garantizar los mejores resultados.",
      benefits: [
        "Recuperación funcional completa",
        "Seguimiento continuo hasta tu alta",
        "Programas adaptados a tu ritmo"
      ],
      icon: "Activity"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Técnica efectiva para el tratamiento de puntos gatillo miofasciales que causan dolor y contracturas. Especialmente indicada para dolores crónicos y tensiones musculares persistentes, con resultados notables en pocas sesiones.",
      benefits: [
        "Eliminación de contracturas profundas",
        "Alivio de dolor crónico muscular",
        "Resultados duraderos y efectivos"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia",
      description: "Disponemos de maquinaria avanzada que utiliza corrientes eléctricas terapéuticas para acelerar tu proceso de recuperación. Tecnología de última generación que complementa perfectamente los tratamientos manuales para obtener resultados más rápidos y efectivos.",
      benefits: [
        "Aceleración del proceso de curación",
        "Reducción de inflamación y dolor",
        "Tecnología de última generación"
      ],
      icon: "Zap"
    },
    {
      id: "suelo-pelvico",
      name: "Suelo Pélvico",
      description: "Tratamiento especializado y discreto para disfunciones del suelo pélvico en hombres y mujeres. Abordamos con profesionalidad y cercanía problemas como incontinencia, dolor pélvico o recuperación postparto en un ambiente cómodo y relajante.",
      benefits: [
        "Tratamiento discreto y profesional",
        "Mejora de la calidad de vida",
        "Atención personalizada y respetuosa"
      ],
      icon: "Heart"
    },
    {
      id: "terapia-manual-avanzada",
      name: "Terapia Manual Avanzada",
      description: "Combinación de técnicas manuales especializadas que aplicamos según tus necesidades específicas. Nuestros fisioterapeutas están en constante formación para ofrecerte los tratamientos más efectivos y actualizados del sector.",
      benefits: [
        "Técnicas especializadas y actualizadas",
        "Profesionales en formación continua",
        "Tratamientos personalizados y efectivos"
      ],
      icon: "Hand"
    },
    {
      id: "tratamiento-dolor-cronico",
      name: "Tratamiento de Dolor Crónico",
      description: "Abordaje integral para dolores persistentes que afectan tu día a día. Nos implicamos de verdad en tu recuperación, diseñando estrategias terapéuticas combinadas que atacan el origen del dolor para que notes mejoría real en poco tiempo.",
      benefits: [
        "Reducción significativa del dolor persistente",
        "Enfoque integral y personalizado",
        "Mejoría notable en pocas sesiones"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 622 25 07 48 o escríbenos por WhatsApp. Te atenderemos con cercanía y resolveremos todas tus dudas para agendar tu primera cita de valoración en el horario que mejor te venga."
    },
    {
      step: 2,
      title: "Valoración Inicial Personalizada",
      description: "En tu primera visita a RL Fisioterapia® evaluaremos tu estado físico con detalle. Te explicaremos todo con claridad y diseñaremos un plan de tratamiento completamente adaptado a tus necesidades y objetivos de recuperación."
    },
    {
      step: 3,
      title: "Tratamiento en Instalaciones Modernas",
      description: "Aplicamos las técnicas y tecnología más adecuadas para tu caso en un ambiente relajante con música de fondo. Cada sesión se ajusta según tu evolución, y te sentirás cómodo y bien atendido desde el primer momento."
    },
    {
      step: 4,
      title: "Seguimiento Hasta tu Recuperación",
      description: "Nos preocupamos de verdad por tu mejoría. Hacemos seguimiento continuo de tu progreso, ajustamos el tratamiento si es necesario y te acompañamos hasta que recuperes completamente tu bienestar y funcionalidad."
    }
  ],
  whyUs: [
    {
      title: "Excelencia Avalada por 335 Reseñas",
      description: "Contamos con 5 estrellas en Google y 335 reseñas reales de pacientes satisfechos. Esta valoración excepcional refleja nuestro compromiso con la calidad, el trato cercano y los resultados efectivos que obtenemos en cada tratamiento.",
      icon: "Award"
    },
    {
      title: "Instalaciones Modernas y Ambiente Relajante",
      description: "Disponemos de instalaciones limpias y modernas con maquinaria completa de última generación. Creamos un ambiente calmado con música de fondo para que te relajes y te sientas cómodo durante todo el tratamiento.",
      icon: "Building"
    },
    {
      title: "Tratamiento Personalizado y Explicado",
      description: "Desde la primera sesión te explicamos todo con claridad y adaptamos el tratamiento a tus necesidades específicas. No aplicamos protocolos genéricos: cada plan es único y se ajusta según tu evolución personal.",
      icon: "Users"
    },
    {
      title: "Resultados Desde las Primeras Sesiones",
      description: "Nuestros pacientes destacan que notan mejoría significativa en poco tiempo, incluso desde las primeras visitas. Nos implicamos de verdad en tu recuperación y aplicamos las técnicas más efectivas para que alcances tus objetivos rápidamente.",
      icon: "TrendingUp"
    }
  ],
  team: [
    {
      name: "Equipo de RL Fisioterapia®️",
      role: "Fisioterapeutas Colegiados",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En RL Fisioterapia®️ nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "RL Fisioterapia®️ - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "RL Fisioterapia®️ - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "RL Fisioterapia®️ - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "RL Fisioterapia®️ - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "RL Fisioterapia®️ - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "RL Fisioterapia®️ - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "RL Fisioterapia®️ - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "RL Fisioterapia®️ - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "RL Fisioterapia®️ - Imagen 9"
    }
  ],
  faq: [
    {
      question: "¿Qué hace diferente a RL Fisioterapia® de otras clínicas?",
      answer: "En RL Fisioterapia® combinamos profesionalidad con un trato cercano y humano. Contamos con 5 estrellas en Google y 335 reseñas que avalan nuestro trabajo. Nuestras instalaciones son modernas y cómodas, disponemos de maquinaria completa y creamos un ambiente relajante con música de fondo. Pero sobre todo, nos preocupamos de verdad por tu recuperación y notarás resultados desde las primeras sesiones."
    },
    {
      question: "¿Cuánto dura una sesión de fisioterapia?",
      answer: "Las sesiones en RL Fisioterapia® suelen durar entre 45 y 60 minutos, dependiendo del tipo de tratamiento y tus necesidades específicas. Durante la primera visita dedicamos más tiempo para hacer una valoración completa y explicarte todo el plan de tratamiento con claridad. Cada sesión se adapta a tu evolución para garantizar los mejores resultados."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "El número de sesiones varía según cada caso, tipo de lesión y evolución personal. En RL Fisioterapia® diseñamos un plan personalizado tras la valoración inicial. Muchos de nuestros pacientes notan mejoría significativa en poco tiempo, incluso desde las primeras sesiones. Durante el tratamiento hacemos seguimiento continuo y ajustamos el plan según tu progreso para optimizar tu recuperación."
    },
    {
      question: "¿Ofrecéis tratamiento de punción seca?",
      answer: "Sí, en RL Fisioterapia® aplicamos punción seca como técnica especializada para tratar puntos gatillo miofasciales, contracturas profundas y dolor crónico muscular. Es una técnica muy efectiva que realizan nuestros fisioterapeutas especializados. Te explicaremos en qué consiste y si es adecuada para tu caso durante la valoración inicial."
    },
    {
      question: "¿Tratáis lesiones deportivas?",
      answer: "Por supuesto. En RL Fisioterapia® ofrecemos fisioterapia deportiva especializada tanto para recuperación de lesiones como para prevención. Utilizamos técnicas avanzadas y maquinaria completa para que los deportistas puedan volver a su actividad en las mejores condiciones. Trabajamos con deportistas de todos los niveles con excelentes resultados."
    },
    {
      question: "¿Cómo puedo pedir cita en RL Fisioterapia®?",
      answer: "Pedir cita es muy sencillo. Puedes llamarnos directamente al 622 25 07 48 o escribirnos por WhatsApp al mismo número. Te atenderemos de forma cercana, resolveremos todas tus dudas y agendaremos tu cita de valoración en el horario que mejor te convenga. Estamos en Granada, Álava, y te esperamos para ayudarte en tu recuperación."
    },
    {
      question: "¿Tenéis tratamiento para suelo pélvico?",
      answer: "Sí, en RL Fisioterapia® ofrecemos tratamiento especializado de suelo pélvico para hombres y mujeres. Abordamos con profesionalidad y discreción problemas como incontinencia, dolor pélvico, recuperación postparto y otras disfunciones. Te atenderemos en un ambiente cómodo y relajante, explicándote todo el proceso con claridad y respeto."
    },
    {
      question: "¿Qué opinan vuestros pacientes?",
      answer: "Estamos muy orgullosos de contar con 5 estrellas en Google y 335 reseñas de pacientes reales. Nuestros pacientes destacan el trato cercano y profesional, las instalaciones modernas, el ambiente relajante y sobre todo los resultados rápidos que obtienen. Muchos mencionan que se sienten cómodos desde el primer día y que notamos nos implicamos de verdad en su recuperación. Te invitamos a leer las reseñas para conocer experiencias reales."
    }
  ],
  seo: {
    titleTemplate: "%s | RL Fisioterapia®️",
    defaultTitle: "RL Fisioterapia® Granada | Fisioterapia y Rehabilitación",
    defaultDescription: "Clínica de fisioterapia en Granada con 5⭐ y 335 reseñas. Fisioterapia manual, deportiva, punción seca y rehabilitación. Instalaciones modernas. Pide cita: 622 25 07 48",
    keywords: [
      "fisioterapia Granada",
      "RL Fisioterapia Granada",
      "fisioterapeuta Granada Álava",
      "rehabilitación Granada",
      "fisioterapia deportiva Granada",
      "punción seca Granada",
      "tratamiento suelo pélvico Granada",
      "clínica fisioterapia Granada",
      "fisioterapia manual Granada",
      "mejor fisioterapia Granada",
      "fisio Granada",
      "electroterapia Granada"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "RL Fisioterapia®️",
    cif: "",
    registeredAddress: "59RQ+G7W, Calle Rector José Vida, Beiro, 18014 Soria, Granada, España, Granada, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Granada"
  ],
  heroDescription: "En RL Fisioterapia® combinamos profesionalidad y cercanía para tu recuperación completa. Con instalaciones modernas, tecnología avanzada y un ambiente relajante, notarás resultados desde las primeras sesiones. Más de 335 pacientes nos avalan con 5 estrellas.",
  specialty: "Fisioterapia Personalizada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita de valoración y descubre por qué somos la clínica mejor valorada de Granada. Te explicaremos tu tratamiento con claridad y lo adaptaremos a tus necesidades específicas.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
