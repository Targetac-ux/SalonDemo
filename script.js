// ===========================
// STATE & INITIALIZATION
// ===========================

const state = {
  activeTab: 'el',
  currentTestimonial: 0,
  menuOpen: false,
  navScrolled: false,
  formSubmitted: false,
};

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
  setupNavbar();
  setupMobileMenu();
  setupServiceTabs();
  setupTestimonialCarousel();
  setupContactForm();
  setupScrollReveal();
  setupSmoothScroll();
}

// ===========================
// NAVBAR
// ===========================

function setupNavbar() {
  const navbar = document.querySelector('.navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 60;
        if (scrolled !== state.navScrolled) {
          state.navScrolled = scrolled;
          navbar.classList.toggle('nav-scrolled', scrolled);
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ===========================
// MOBILE MENU
// ===========================

function setupMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  // Toggle menu
  hamburgerBtn.addEventListener('click', () => {
    state.menuOpen = !state.menuOpen;
    mobileMenu.classList.toggle('open', state.menuOpen);
  });

  // Close menu on button click
  closeMenuBtn.addEventListener('click', () => {
    state.menuOpen = false;
    mobileMenu.classList.remove('open');
  });

  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      state.menuOpen = false;
      mobileMenu.classList.remove('open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      if (state.menuOpen) {
        state.menuOpen = false;
        mobileMenu.classList.remove('open');
      }
    }
  });
}

// ===========================
// SERVICE TABS
// ===========================

function setupServiceTabs() {
  const tabs = document.querySelectorAll('.service-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabType = tab.dataset.tab;

      // Update active tab button
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active services list
      const services = document.querySelectorAll('.services-list');
      services.forEach(service => service.classList.remove('active'));

      const activeServices = document.getElementById(`services-${tabType}`);
      if (activeServices) {
        activeServices.classList.add('active');
      }

      state.activeTab = tabType;
    });
  });
}

// ===========================
// TESTIMONIAL CAROUSEL
// ===========================

function setupTestimonialCarousel() {
  const testimonialTrack = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.getElementById('testimonial-dots');
  const totalTestimonials = document.querySelectorAll('.testimonial-slide').length;

  // Create dots
  for (let i = 0; i < totalTestimonials; i++) {
    const dot = document.createElement('button');
    dot.classList.add('testimonial-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.testimonial-dot');

  function updateCarousel() {
    const offset = -state.currentTestimonial * 100;
    testimonialTrack.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === state.currentTestimonial);
    });
  }

  function goToTestimonial(index) {
    state.currentTestimonial = index % totalTestimonials;
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => {
    state.currentTestimonial = (state.currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    state.currentTestimonial = (state.currentTestimonial + 1) % totalTestimonials;
    updateCarousel();
  });

  // Auto advance every 5200ms
  setInterval(() => {
    state.currentTestimonial = (state.currentTestimonial + 1) % totalTestimonials;
    updateCarousel();
  }, 5200);
}

// ===========================
// CONTACT FORM
// ===========================

function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const resetBtn = document.getElementById('reset-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Hide form and show success message
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';

    state.formSubmitted = true;
  });

  resetBtn.addEventListener('click', () => {
    // Reset form
    contactForm.reset();

    // Show form and hide success message
    contactForm.style.display = 'flex';
    formSuccess.style.display = 'none';

    state.formSubmitted = false;

    // Focus on first input
    contactForm.querySelector('input').focus();
  });
}

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

function setupScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-24px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add delay based on element index
        setTimeout(() => {
          entry.target.setAttribute('data-visible', '');
        }, index * 40);
      }
    });
  }, observerOptions);

  // Observe all data-animate elements
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

// ===========================
// SMOOTH SCROLL
// ===========================

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (href === '#' || href === '') return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Close mobile menu on desktop resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && state.menuOpen) {
    state.menuOpen = false;
    document.getElementById('mobile-menu').classList.remove('open');
  }
});
