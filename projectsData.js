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
    title: "DUPO — Duarte Polanco Bienes Raíces",
    imgSrc: "assets/images/ProyectosRecursos/Logo-de-Duarte-Polanco-Bienes-Raíces.png",
    cardImgSrc: "assets/images/ProyectosRecursos/Logo-de-Duarte-Polanco-Bienes-Raíces.png",
    projectUrl: "https://duarte-polanco-rouge-ten.vercel.app/",
    cardDesc: "Plataforma inmobiliaria Web & Móvil desarrollada para un cliente real. Gestión centralizada de propiedades, usuarios, citas y automatización con WhatsApp.",
    cardTags: ["React", "React Native", "Node.js", "Supabase", "Vercel"],
    overview: "<strong>DUPO (Duarte Polanco Bienes Raíces)</strong> es una solución inmobiliaria integral contratada y desarrollada para un cliente real. Resuelve la necesidad empresarial de centralizar la gestión de propiedades (venta y alquiler), usuarios y agendamiento de citas. La plataforma cuenta con una <strong>aplicación web desplegada en Vercel</strong> y una <strong>aplicación móvil construida en React Native con Expo</strong>, compartiendo la misma infraestructura backend y base de datos relacional en <strong>Supabase (Node.js)</strong>.",
    technologies: [
      { name: "React", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" },
      { name: "React Native / Expo", color: "#ffffff", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.4)" },
      { name: "Node.js", color: "#34d399", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)" },
      { name: "Supabase (PostgreSQL)", color: "#34d399", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)" },
      { name: "Vercel", color: "#ffffff", bg: "rgba(255, 255, 255, 0.12)", border: "rgba(255, 255, 255, 0.3)" }
    ],
    features: [
      {
        title: "Gestión de Propiedades",
        icon: "building-2",
        color: "var(--accent-blue)",
        items: [
          "Catálogo dinámico de propiedades para venta y alquiler",
          "Visualización detallada con galerías e información específica",
          "Creación y edición de inmuebles según requerimientos del cliente"
        ]
      },
      {
        title: "Usuarios y Perfiles",
        icon: "user-check",
        color: "var(--primary-violet)",
        items: [
          "Registro, creación de cuenta e inicio de sesión",
          "Gestión de perfil del cliente",
          "Sincronización en tiempo real entre Web y App Móvil"
        ]
      },
      {
        title: "Sistema de Citas & WhatsApp",
        icon: "calendar-check",
        color: "#facc15",
        items: [
          "Programación de citas para consulta de inmuebles",
          "Integración nativa con WhatsApp",
          "Generación automática de mensajes prediseñados según la acción de la cita"
        ]
      },
      {
        title: "Dashboard Administrativo (CMS)",
        icon: "shield-check",
        color: "var(--accent-emerald)",
        items: [
          "Panel CMS autónomo: modificación de teléfonos, correos y fotos sin tocar código",
          "Gestión completa de citas: Aceptar, Rechazar, Reprogramar o Cancelar",
          "Contacto directo con solicitantes y mensajería automatizada"
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
