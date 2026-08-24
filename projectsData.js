/* ==========================================================================
   DATOS ESTRUCTURADOS DE PROYECTOS DEL PORTAFOLIO
   ==========================================================================
   Agrega o edita tus proyectos en este archivo de datos puro.
   script.js se encargará de renderizar automáticamente el modal interactivo.
   ========================================================================== */

const PROJECTS_DATA = {
  saga: {
    id: "saga",
    title: "SAGA — Tienda Web de Videojuegos",
    imgSrc: "assets/images/ProyectosRecursos/SAGALobby.png",
    cardImgSrc: "assets/images/ProyectosRecursos/saga-logo.png",
    projectUrl: "https://yisuscry.pythonanywhere.com/",
    cardDesc: "Tienda web Full Stack de videojuegos con catálogo dinámico, autenticación de usuarios, carrito de compras, pagos con Stripe y panel de administración.",
    cardTags: ["Django", "Python", "JavaScript", "SQLite", "Stripe"],
    overview: "<strong>SAGA</strong> es una tienda web de videojuegos completamente funcional desarrollada como una plataforma de comercio electrónico integral. Combina una interfaz moderna en el frontend con una arquitectura backend robusta basada en <strong>Django y Python</strong>, gestionando usuarios, catálogo dinámico, pagos en línea en entorno de prueba con <strong>Stripe</strong>, facturación y reportes comerciales.",
    technologies: [
      { name: "HTML5 & CSS3", color: "#ffffff", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.4)" },
      { name: "JavaScript", color: "#ffffff", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.4)" },
      { name: "Python", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" },
      { name: "Django", color: "#34d399", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)" },
      { name: "SQLite", color: "#facc15", bg: "rgba(234, 179, 8, 0.15)", border: "rgba(234, 179, 8, 0.4)" },
      { name: "Stripe API (Test)", color: "#c084fc", bg: "rgba(168, 85, 247, 0.15)", border: "rgba(168, 85, 247, 0.4)" }
    ],
    features: [
      {
        title: "Funcionalidades Principales",
        icon: "layout-grid",
        color: "var(--accent-blue)",
        items: [
          "Buscador de videojuegos integrado",
          "Filtros para navegación por el catálogo",
          "Diseño 100% responsive y adaptable"
        ]
      },
      {
        title: "Usuarios y Perfiles",
        icon: "user-check",
        color: "var(--primary-violet)",
        items: [
          "Registro e inicio de sesión seguro",
          "Gestión de perfil y edición de datos",
          "Cambio de contraseña e historial de compras"
        ]
      },
      {
        title: "Comercio y Pagos",
        icon: "shopping-cart",
        color: "#facc15",
        items: [
          "Carrito de compras funcional en tiempo real",
          "Pasarela Stripe integrada en modo prueba",
          "Generación automática de facturas"
        ]
      },
      {
        title: "Administración y Reportes",
        icon: "bar-chart-3",
        color: "var(--accent-emerald)",
        items: [
          "Dashboard de gestión de contenidos",
          "Reportes de videojuegos vendidos y facturas",
          "Gestión básica de clientes"
        ]
      }
    ]
  },

  dupo: {
    id: "dupo",
    title: "Dupo — Plataforma Inmobiliaria",
    imgSrc: "assets/images/realestate.jpg",
    cardImgSrc: "assets/images/realestate.jpg",
    projectUrl: "https://github.com/TheYisusCry",
    cardDesc: "Plataforma inmobiliaria integral para gestión de propiedades en alquiler y venta con mapa interactivo y filtros avanzados.",
    cardTags: ["React", "Expo", "Supabase", "PostgreSQL"],
    overview: "<strong>Dupo</strong> es una plataforma inmobiliaria integral desarrollada para la gestión eficiente de propiedades en alquiler y venta. Incluye mapa interactivo, filtros dinámicos, favoritos y autenticación de usuarios sobre una arquitectura relacional altamente optimizada.",
    technologies: [
      { name: "React", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" },
      { name: "Expo", color: "#ffffff", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.4)" },
      { name: "Supabase", color: "#34d399", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)" },
      { name: "PostgreSQL", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" }
    ],
    features: [
      {
        title: "Características Clave",
        icon: "layout-grid",
        color: "var(--accent-blue)",
        items: [
          "Mapa interactivo con geolocalización",
          "Filtros de búsqueda avanzada por tipo y zona",
          "Gestión de favoritos e historial de navegación",
          "Autenticación segura y persistencia relacional"
        ]
      }
    ]
  },

  monitor: {
    id: "monitor",
    title: "Monitor — Sistema de Monitoreo de Infraestructura",
    imgSrc: "assets/images/monitor.jpg",
    cardImgSrc: "assets/images/monitor.jpg",
    projectUrl: "https://github.com/TheYisusCry",
    cardDesc: "Dashboard analítico en tiempo real para monitoreo de métricas de red, servidores y rendimiento de aplicaciones.",
    cardTags: ["Node.js", "JavaScript", "Chart.js", "Express"],
    overview: "<strong>Monitor App</strong> es un dashboard analítico centralizado en tiempo real diseñado para vigilar la salud de servidores y red. Permite la transmisión de datos vía WebSockets, graficar carga de CPU/RAM y activar alertas inmediatas ante eventos críticos.",
    technologies: [
      { name: "Node.js", color: "#34d399", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)" },
      { name: "JavaScript", color: "#ffffff", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.4)" },
      { name: "Chart.js", color: "#c084fc", bg: "rgba(168, 85, 247, 0.15)", border: "rgba(168, 85, 247, 0.4)" },
      { name: "Express", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" }
    ],
    features: [
      {
        title: "Características Clave",
        icon: "activity",
        color: "var(--accent-emerald)",
        items: [
          "Transmisión de métricas vía WebSockets",
          "Gráficos dinámicos de rendimiento CPU/RAM",
          "Logs centralizados de infraestructura",
          "Sistema de alertas tempranas automatizadas"
        ]
      }
    ]
  }
};
