/* ==========================================================================
   CONFIGURACIÓN DEL PORTAFOLIO DE ISMAEL JOSÉ BATISTA
   --------------------------------------------------------------------------
   Edita los valores en este objeto para actualizar automáticamente tus enlaces
   de contacto, redes sociales, teléfono/WhatsApp, la clave de Web3Forms y el CV.
   ========================================================================== */
const PORTFOLIO_CONFIG = {
  // Información de Contacto & Redes Sociales
  contact: {
    email: {
      text: "ismaelfw2005@gmail.com",
      link: "mailto:ismaelfw2005@gmail.com"
    },
    whatsapp: {
      text: "+1 (849) 453-0903",
      link: "https://wa.me/18494530903"
    },
    linkedin: {
      text: "linkedin.com/in/ismael-jose-batista",
      link: "https://www.linkedin.com/in/ismael-jose-batista-4ba71322a"
    },
    github: {
      text: "github.com/TheYisusCry",
      link: "https://github.com/TheYisusCry"
    }
  },

  // Clave de acceso de Web3Forms (Consigue la tuya GRATIS en https://web3forms.com en 1 minuto)
  web3formsAccessKey: "d0650249-afed-4eaa-97b2-c1775121b5ce",

  // Ruta del archivo PDF para la vista previa y descarga del CV
  cvFilePath: "assets/archivos/CV-Ismael-Jose-Batista.pdf"
};


/* ==========================================================================
   LÓGICA JAVASCRIPT DEL SITIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Aplicar la configuración centralizada de contactos y enlaces
  applyPortfolioConfig();

  // 2. Inicializar Iconos Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  /* ------------------------------------------------------------------------
     3. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHTER
     ------------------------------------------------------------------------ */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Observador de intersección para enlace activo del menú
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  /* ------------------------------------------------------------------------
     4. MENÚ RESPONSIVO (HAMBURGUESA)
     ------------------------------------------------------------------------ */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. MODAL DE CURRICULUM VITAE
     ------------------------------------------------------------------------ */
  const cvModal = document.getElementById('cv-modal');
  const openCvBtn = document.getElementById('open-cv-btn');
  const closeCvBtn = document.getElementById('close-cv-btn');

  if (openCvBtn && cvModal) {
    openCvBtn.addEventListener('click', () => {
      cvModal.classList.add('active');
    });
  }

  if (closeCvBtn && cvModal) {
    closeCvBtn.addEventListener('click', () => {
      cvModal.classList.remove('active');
    });
  }

  // Cerrar modales al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === cvModal) {
      cvModal.classList.remove('active');
    }
    const projectModal = document.getElementById('project-modal');
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
    }
  });

  /* ------------------------------------------------------------------------
     6. FORMULARIO DE CONTACTO (INTEGRADO CON WEB3FORMS & TOAST)
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const accessKey = PORTFOLIO_CONFIG.web3formsAccessKey;

      if (!accessKey || accessKey.includes("PON_TU")) {
        showToast('d0650249-afed-4eaa-97b2-c1775121b5ce', 'error');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando...';
      }

      try {
        const formData = new FormData(contactForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();

        if (data.success) {
          showToast('¡Gracias! Tu mensaje ha sido enviado correctamente.', 'success');
          contactForm.reset();
        } else {
          showToast('⚠️ Ocurrió un error al enviar el mensaje.', 'error');
        }
      } catch (err) {
        showToast('⚠️ Error de conexión al enviar el mensaje.', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Enviar mensaje <i data-lucide="send"></i>';
          if (window.lucide) lucide.createIcons();
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. CARRUSEL MANUAL DE PROYECTOS (SIN TEMPORIZADOR)
     ------------------------------------------------------------------------ */
  const projectsTrack = document.getElementById('projects-track');
  const prevBtn = document.getElementById('projects-prev-btn');
  const nextBtn = document.getElementById('projects-next-btn');

  if (projectsTrack && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      const cardWidth = projectsTrack.querySelector('.project-card')?.offsetWidth || 340;
      projectsTrack.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      const cardWidth = projectsTrack.querySelector('.project-card')?.offsetWidth || 340;
      projectsTrack.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
    });
  }
});

/* ------------------------------------------------------------------------
   MOSTRAR NOTIFICACIÓN TOAST
   ------------------------------------------------------------------------ */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.innerText = message;
    if (type === 'error') {
      toast.classList.add('error');
    } else {
      toast.classList.remove('error');
    }
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/* ------------------------------------------------------------------------
   FUNCIÓN DE CONFIGURACIÓN DINÁMICA
   Sincroniza el objeto PORTFOLIO_CONFIG con el HTML automáticamente
   ------------------------------------------------------------------------ */
function applyPortfolioConfig() {
  const cfg = PORTFOLIO_CONFIG;
  if (!cfg) return;

  // Actualizar Enlaces por atributo data-config-link
  document.querySelectorAll('[data-config-link]').forEach(el => {
    const key = el.getAttribute('data-config-link');
    if (cfg.contact[key] && cfg.contact[key].link) {
      el.href = cfg.contact[key].link;
    }
  });

  // Actualizar Textos por atributo data-config-text
  document.querySelectorAll('[data-config-text]').forEach(el => {
    const key = el.getAttribute('data-config-text');
    if (cfg.contact[key] && cfg.contact[key].text) {
      el.textContent = cfg.contact[key].text;
    }
  });

  // Actualizar la clave de Web3Forms en el input oculto
  const web3KeyInput = document.getElementById('web3forms-key-input');
  if (web3KeyInput && cfg.web3formsAccessKey) {
    web3KeyInput.value = cfg.web3formsAccessKey;
  }

  // Actualizar enlaces del CV (PDF al hacer clic en la imagen y botón de descarga)
  const cvPdfLink = document.getElementById('cv-pdf-link');
  if (cvPdfLink && cfg.cvFilePath) {
    cvPdfLink.href = cfg.cvFilePath;
  }
  const cvDownload = document.getElementById('cv-download-link');
  if (cvDownload && cfg.cvFilePath) {
    cvDownload.href = cfg.cvFilePath;
  }
}

/* ------------------------------------------------------------------------
   CONTROLADOR MODAL DE PROYECTOS
   ------------------------------------------------------------------------ */
function openProjectModal(title, description, imgSrc) {
  const projectModal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalImg = document.getElementById('modal-project-img');

  if (projectModal && modalTitle && modalDesc && modalImg) {
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    modalImg.src = imgSrc;
    projectModal.classList.add('active');
  }
}

function closeProjectModal() {
  const projectModal = document.getElementById('project-modal');
  if (projectModal) {
    projectModal.classList.remove('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const closeProjectBtn = document.getElementById('close-project-btn');
  if (closeProjectBtn) {
    closeProjectBtn.addEventListener('click', closeProjectModal);
  }
});
