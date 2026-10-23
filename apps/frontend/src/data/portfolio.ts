import type { PortfolioData } from "@/types/portfolio";

export const portfolioData = {
  profile: {
    brandName: "vilberto®",
    availabilityLabel: "DISPONIBLE PARA COLABORACIONES",
    roleEyebrow: "INGENIERO DE SOFTWARE / DISEÑO Y DESARROLLO WEB",
    heroHeadline: "Más allá de\nla interfaz.",
    heroIntro:
      "Soy Vilberto. Transformo ideas complejas en experiencias digitales intuitivas, desde el primer boceto hasta la última línea de código.",
    heroCtaLabel: "Explora mis proyectos",
    sceneDescription: "DISEÑO CON INTENCIÓN. DESARROLLO CON PRECISIÓN.",
    principles: [
      { index: "01", label: "Diseño con intención" },
      { index: "02", label: "Ingeniería sólida" },
      { index: "03", label: "Experiencias humanas" },
    ],
    workChapterLabel: "01 / PROYECTOS DESTACADOS",
    workHeadline: "Ideas hechas realidad.",
    workIntro:
      "Algunos proyectos que ayudé a crear.\nDiseñados con intención y desarrollados con cuidado.",
    aboutChapterLabel: "02 / LA PERSONA DETRÁS DE LOS PÍXELES",
    manifestoHeading: "Mente de ingeniero.\nVisión de diseñador.",
    manifestoEmphasis: "Un toque humano.",
    aboutLead:
      "Soy Vilberto, ingeniero de software. Me importan tanto la experiencia como el funcionamiento.",
    aboutDescription:
      "Combino diseño de producto y desarrollo web para crear interfaces cuidadas sobre una base técnica sólida. Desde los primeros prototipos hasta las aplicaciones en funcionamiento, aporto claridad en cada etapa.",
    resumeLabel: "Conocer más",
    resumeUrl: "https://www.linkedin.com/in/vilberto-patricio-julca",
    resumeDownloadLabel: "Descargar CV (PDF)",
    resumeDownloadUrl: "/CurriculumVitae-PatricioJulca.pdf",
    contactChapterLabel: "03 / EL SIGUIENTE CAPÍTULO",
    contactEyebrow: "TODO COMIENZA CON UNA CONVERSACIÓN.",
    contactHeadline: "Construyamos\nalgo que importe.",
    email: "albertojulcapatricio@gmail.com",
    copyright: "© 2026 VILBERTO",
    socialLinks: [
      { label: "Correo", url: "mailto:albertojulcapatricio@gmail.com" },
      { label: "GitHub", url: "https://github.com/Vilberto02/" },
      { label: "Figma", url: "https://www.figma.com/@vilbertoalberto" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/vilberto-patricio-julca",
      },
    ],
  },
  projects: [
    {
      id: "vitamia",
      index: "01",
      title: "Vitamia",
      category: "APLICACIÓN WEB · DISEÑO Y DESARROLLO",
      previewAddress: "vitamia / nutrición personalizada",
      href: "https://vitamia-demo-five.vercel.app/",
      image: "/projects/gallery/vitamia-v3.png",
      isFeatured: true,
      stage: "vitamia",
      summary:
        "Un sitio para gestionar el consumo de alimentos balanceados y llegar a tus metas.",
    },
    {
      id: "dumpster-rental",
      index: "02",
      title: "Dumpster Rental",
      category: "EXPERIENCIA WEB · PROTOTIPO",
      href: "https://www.figma.com/community/file/1633497513178071070/website-dumpster-rental",
      image: "/projects/gallery/dumpster-rental-v3.png",
      isFeatured: false,
      stage: "dumpster",
      summary:
        "Un sitio de alquiler de contenedores para explorar tamaños y encontrar la opción ideal para tu proyecto.",
    },
    {
      id: "ezcommerce",
      index: "03",
      title: "Ezcommerce",
      category: "DISEÑO DE PRODUCTO · PROTOTIPO",
      href: "https://www.figma.com/community/file/1633514221150512410/web-application-ezcommerce",
      image: "/projects/gallery/ezcommerce-v2.png",
      isFeatured: false,
      stage: "ezcommerce",
      summary:
        "Un ecommerce hecho para la compra y venta de productos dentro del campus universitario.",
    },
    {
      id: "sicpf",
      index: "04",
      title: "SICPF",
      category: "APLICACION WEB · DESARROLLO DE PRODUCTO",
      href: "https://github.com/Vilberto02/sicpf-demo",
      image: "/projects/gallery/sicpf-v4.png",
      isFeatured: false,
      stage: "sicpf",
      summary:
        "Una plataforma para el gestión de inventario de productos, su venta y manejo de usuarios.",
    },
    {
      id: "ondesanmarcos",
      index: "05",
      title: "OndeSanMarcos",
      category: "APLICACION MOVIL · DISEÑO Y DESARROLLO DE PRODUCTO",
      href: "https://github.com/frank777ch/OndeSanMarcos",
      image: "/projects/gallery/ondesanmarcos-v2.png",
      isFeatured: false,
      stage: "ondesanmarcos",
      summary:
        "Una aplicación móvil para dirigirte de manera rápida al lugar que quieres en el campus universitario y consultar información.",
    },
    {
      id: "lomosoma",
      index: "06",
      title: "Lomosoma",
      category: "APLICACION WEB · DESARROLLO DE PRODUCTO",
      href: "https://github.com/Vilberto02/lomosoma/",
      image: "/projects/gallery/lomosoma-v3.png",
      isFeatured: false,
      stage: "lomosoma",
      summary:
        "Un sitio para planificar una ruta óptima a las lomas de Lima en base a tu presupuesto y disponibilidad.",
    },
  ],
  skills: [
    {
      index: "01",
      title: "disenio",
      summary: "Diseño UI / UX · Figma · Sistemas de diseño",
    },
    {
      index: "02",
      title: "desarrollo",
      summary: "React · Next.js · TypeScript · TailwindCSS",
    },
    {
      index: "03",
      title: "integraciones",
      summary: "APIs · SQL · Django · FastAPI · Git",
    },
    {
      index: "04",
      title: "base_datos",
      summary: "MySQL · PostgreSQL · MongoDB",
    },
    
  ],
} satisfies PortfolioData;
