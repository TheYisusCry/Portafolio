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
    overview: "SAGA es una tienda web de videojuegos completamente funcional desarrollada como una plataforma de comercio electrónico integral. Combina una interfaz moderna en el frontend con una arquitectura backend robusta basada en Django y Python, gestionando usuarios, catálogo dinámico, pagos en línea en entorno de prueba con Stripe, facturación y reportes comerciales.",
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
    overview: "DUPO (Duarte Polanco Bienes Raíces) es una solución inmobiliaria integral contratada y desarrollada para un cliente real. Resuelve la necesidad empresarial de centralizar la gestión de propiedades (venta y alquiler), usuarios y agendamiento de citas. La plataforma cuenta con una aplicación web desplegada en Vercel y una aplicación móvil construida en React Native con Expo, compartiendo la misma infraestructura backend y base de datos relacional en Supabase (Node.js).",
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
    title: "Monitor — Finanzas Personales & Escenarios 'What If'",
    imgSrc: "assets/images/ProyectosRecursos/monitorICon.png",
    cardImgSrc: "assets/images/ProyectosRecursos/monitorICon.png",
    projectUrl: "",
    cardDesc: "Aplicación móvil de finanzas personales que permite gestionar la situación financiera real y simular decisiones futuras mediante escenarios 'What If'.",
    cardTags: ["React Native", "Expo", "TypeScript", "SQLite", "NativeWind"],
    overview: "Monitor es una aplicación móvil de finanzas personales desarrollada bajo un enfoque Offline-First con SQLite local. Diseñada para ayudar a controlar el dinero, registrar movimientos y analizar el flujo de caja, su gran diferenciador es el sistema de escenarios 'What If': permite simular y experimentar decisiones futuras (compras, viajes, gastos extraordinarios) sin alterar la situación financiera real hasta que el usuario decida aplicarla.",
    technologies: [
      { name: "React Native", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" },
      { name: "Expo", color: "#ffffff", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.4)" },
      { name: "TypeScript", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" },
      { name: "SQLite (Offline-First)", color: "#facc15", bg: "rgba(234, 179, 8, 0.15)", border: "rgba(234, 179, 8, 0.4)" },
      { name: "NativeWind", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.15)", border: "rgba(56, 189, 248, 0.4)" }
    ],
    features: [
      {
        title: "Escenarios 'What If' vs. Realidad",
        icon: "git-branch",
        color: "var(--primary-violet)",
        items: [
          "Diferenciador principal: evalúa cómo afectarán tus decisiones antes de comprometer tu dinero",
          "Simulación de posibles gastos, viajes o compras en escenarios independientes",
          "Conversión opcional de un escenario en Realidad cuando el usuario decide aplicarlo"
        ]
      },
      {
        title: "Cuentas & Gestión Financiera",
        icon: "wallet",
        color: "var(--accent-blue)",
        items: [
          "Manejo de efectivo, cuentas bancarias, de ahorro y tarjetas de crédito",
          "Registro de ingresos, gastos fijos/recurrentes, categorías y beneficiarios",
          "Transferencias entre cuentas sin alterar el patrimonio total"
        ]
      },
      {
        title: "Tarjetas de Crédito & Ahorro",
        icon: "credit-card",
        color: "#facc15",
        items: [
          "Compras con tarjeta generan deuda y sus pagos se procesan como transferencias sin duplicar gastos",
          "Objetivos de ahorro con seguimiento de progreso y asignación automática por % de ingresos"
        ]
      },
      {
        title: "Reportes & Análisis de Flujo de Caja",
        icon: "pie-chart",
        color: "var(--accent-emerald)",
        items: [
          "Cálculo continuo del patrimonio neto (Activos vs Pasivos)",
          "Análisis visual de gastos por categoría, cuenta y evolución temporal basados en la Realidad"
        ]
      }
    ]
  },

  watchwheel: {
    id: "watchwheel",
    title: "WatchWheel — Decide qué anime ver",
    imgSrc: "assets/images/ProyectosRecursos/watchwheel-preview.png",
    cardImgSrc: "assets/images/ProyectosRecursos/watchwheel-logo.png",
    projectUrl: "https://watchwheel-sigma.vercel.app",
    cardDesc: "Aplicación para decidir qué anime ver mediante una ruleta animada. Conecta tus pendientes de MyAnimeList o crea una selección personalizada con filtros avanzados.",
    cardTags: ["React Native", "Expo", "TypeScript", "Supabase", "APIs"],
    overview: "WatchWheel ayuda a resolver la indecisión al elegir el próximo anime. Desarrollada con React Native, Expo y TypeScript, combina una interfaz adaptable a móviles y web con una ruleta animada y un sistema de selección que reduce las repeticiones recientes. Permite explorar el catálogo, construir una ruleta personalizada sin registrarse o conectar MyAnimeList para importar los títulos pendientes de Plan to Watch. Utiliza Supabase para autenticación, perfiles y funciones backend, e incluye acceso con Google y una interfaz disponible en español e inglés.",
    technologies: [
      { name: "React Native / Expo", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" },
      { name: "TypeScript", color: "#60a5fa", bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.4)" },
      { name: "Supabase (PostgreSQL / Auth)", color: "#34d399", bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.4)" },
      { name: "MyAnimeList API / OAuth 2.0", color: "#c084fc", bg: "rgba(168, 85, 247, 0.15)", border: "rgba(168, 85, 247, 0.4)" },
      { name: "AniList API / GraphQL", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.15)", border: "rgba(56, 189, 248, 0.4)" },
      { name: "AsyncStorage", color: "#facc15", bg: "rgba(234, 179, 8, 0.15)", border: "rgba(234, 179, 8, 0.4)" },
      { name: "Vercel", color: "#ffffff", bg: "rgba(255, 255, 255, 0.12)", border: "rgba(255, 255, 255, 0.3)" }
    ],
    features: [
      {
        title: "Ruleta para Decidir Qué Ver",
        icon: "shuffle",
        color: "var(--primary-violet)",
        items: [
          "Carrusel animado con selección aleatoria de anime",
          "Memoria de ganadores recientes para reducir repeticiones",
          "Velocidad de giro y efectos de sonido configurables"
        ]
      },
      {
        title: "Catálogo y Selección Personalizada",
        icon: "search",
        color: "var(--accent-blue)",
        items: [
          "Búsqueda por título y filtros por género, temática, demografía y puntuación",
          "Creación de una ruleta propia sin necesidad de registrarse",
          "Selección individual o por lotes y guardado local de la ruleta"
        ]
      },
      {
        title: "Integración con MyAnimeList",
        icon: "link",
        color: "#facc15",
        items: [
          "Vinculación de cuenta mediante OAuth 2.0 con PKCE",
          "Importación de animes pendientes de la lista Plan to Watch",
          "Renovación de tokens gestionada mediante funciones backend"
        ]
      },
      {
        title: "Cuentas y Experiencia de Usuario",
        icon: "user-check",
        color: "var(--accent-emerald)",
        items: [
          "Registro e inicio de sesión con credenciales o Google",
          "Recuperación de contraseña y gestión de sesiones activas",
          "Interfaz adaptable a móviles y web, disponible en español e inglés"
        ]
      }
    ]
  }
};
