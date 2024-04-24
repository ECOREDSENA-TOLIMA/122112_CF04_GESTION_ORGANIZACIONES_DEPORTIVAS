export default {
  global: {
    componenteFormativo:
      'Mecanismos de seguimiento, control, evaluación y mejora de un proyecto deportivo',
    descripcionCurso:
      'En este componente se abordan elementos generales para realizar el seguimiento, control, evaluación y mejora de los proyectos enfocados a las organizaciones del sector deportivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mecanismos de control y evaluación del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de las actividades del proyecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Control de costos del proyecto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control del riesgo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Control de la calidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Informes de gestión',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Evaluación del proyecto',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de mejora',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_04_122112.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actividad',
      significado:
        'parte de un proyecto que requiere de tiempo de inicio, tiempo final y recursos determinados. Pueden tener diversos fines, como lo son: administrativas, operativas entre otros que en su conjunto cumplen el plan del proyecto.',
    },
    {
      termino: 'Primera fecha de inicio',
      significado:
        'es la fecha más temprana en la que se puede iniciar una actividad.',
    },
    {
      termino: 'Última fecha de inicio',
      significado:
        'es el inicio más tardío en el que se puede iniciar una actividad dentro del plazo establecido.',
    },
    {
      termino: 'Primera fecha de terminación',
      significado: 'fecha más temprana en la que puede terminar una actividad.',
    },
    {
      termino: 'Última fecha de terminación',
      significado:
        'fecha más tardía en la que puede terminar una actividad dentro del plazo establecido.',
    },
    {
      termino: 'Margen de holgura',
      significado:
        'margen de retraso del que dispone una actividad, lo que puede retrasarse en su inicio o final sin que afecte la duración del proyecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'IPMA - International Project Management Association. (2006). <em>ICB Competence Baseline Version 3.0.</em> IPMA.',
      link: '',
    },
    {
      referencia:
        'PMI - Project Management Institute. (2008). <em>Organizational Project Management Maturity Model.</em> Project Management Institute',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Metodológico y Pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Tatiana Cristina Vargas',
          cargo: 'Experta Temático',
          centro: 'Centro de servicios de salud - Regional Antioquia',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Bogotá',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro:
            'Centro para la Industria de las Artes Gráficas - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación Instruccional-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría Metodológica y Pedagógica',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del Equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte Organizacional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Carlos Tapias Rueda',
          cargo: 'Diseño Web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollo Front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andres Mauricio Santaella Ochoa',
          cargo: 'Soporte Front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción Audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Caceres',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ludwyng Corzo García',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Isabel Román Rueda',
          cargo: 'Validación de Diseño y Contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseño Web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
