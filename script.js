/**
 * SRIHARI S - PORTFOLIO INTERACTIVITY SCRIPT
 * Vanilla JavaScript (ES6+) - Zero External Dependencies
 * Features: Theme switching, mobile menu, scrollspy, reveal animations,
 *           role typing effect, project modal, skills filter, form validation,
 *           clipboard copy, toast alerts, back to top.
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. PROJECT DATA DICTIONARY (Faithfully extracted from resume)
  // =========================================================================
  const projectsData = {
    'style-kart': {
      title: 'Style Kart – Home Boutique Online Store',
      category: 'Full-Stack E-Commerce Web Application',
      stack: ['React.js', 'Node.js', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      period: 'Academic & Client Prototype',
      overview: 'Developed a full-stack e-commerce web application for a home-based boutique to sell ethnic wear products such as sarees, dress materials, and kurtis through a structured online platform.',
      problemSolved: 'Before Style Kart, the boutique relied exclusively on manual WhatsApp status posts, leading to missed inquiries, chaotic order tracking, and limited customer reach. Style Kart transitioned them to a centralized digital catalog and storefront.',
      keyFeatures: [
        'Customer registration, authentication, and secure profile management.',
        'Product browsing with category-wise product display, dynamic price range filtering, and detailed descriptions.',
        'Address management for streamlined customer delivery workflows.',
        'Comprehensive Admin Dashboard for inventory management, order processing, and status tracking.',
        'Secure multi-format image upload validation supporting JPG, JPEG, and PNG formats.',
        'Integrated MySQL relational database with Node.js backend for high-efficiency querying.'
      ],
      outcome: 'Successfully replaced manual WhatsApp-based selling with an automated digital platform, drastically improving product visibility, streamlining order handling, and elevating the customer shopping experience.',
      githubUrl: 'https://github.com/sriharis18',
      demoUrl: null
    },
    'cbs-portal': {
      title: 'CBS College Website Redesign with AI Chatbot',
      category: 'Java Enterprise Full-Stack & AI',
      stack: ['Java', 'JSP', 'Servlets', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Apache Tomcat'],
      period: 'Chetan Business School Project',
      overview: 'Engineered a modern full-stack web application for Chetan Business School featuring online student admissions, contact management, intelligent FAQ chatbot support, and administrative record management.',
      problemSolved: 'Prospective students and parents faced delays getting answers to recurring questions on admissions, fee structures, courses, and campus placements. This solution unified web services and automated admissions support 24/7.',
      keyFeatures: [
        'Responsive UI tailored for desktop, tablet, and mobile browsers.',
        'Secure user authentication, session state management, and server-side form validation using Java Servlets & JSP.',
        'Built-in AI-powered FAQ Chatbot capable of handling admission, fee, placement, and course-related queries with zero human intervention.',
        'Designed normalized MySQL schema with robust JDBC connectivity for student enrollments, inquiries, and chatbot knowledge base.',
        'Admin records management portal deployed on Apache Tomcat application server.'
      ],
      outcome: 'Improved institutional information accessibility, streamlined admission workflows, eliminated manual processing bottlenecks, and delivered a centralized digital platform for students, parents, and college staff.',
      githubUrl: 'https://github.com/sriharis18',
      demoUrl: null
    },
    'analytics-system': {
      title: 'Online Shopping Behaviour Analysis System',
      category: 'Data Analytics & Predictive Mining',
      stack: ['Python', 'Flask', 'MySQL', 'Redis', 'Celery', 'Pandas', 'Chart.js'],
      period: 'Mini Project / Data Science System',
      overview: 'Developed an end-to-end e-commerce analytics platform to ingest, process, and analyze customer purchasing behavior, sales velocity, and product affinity patterns.',
      problemSolved: 'Raw e-commerce transaction logs are often too voluminous and disconnected to extract immediate business value. This platform automated ingestion, mining, and visual reporting for actionable decision support.',
      keyFeatures: [
        'Engineered high-speed data ingestion pipeline processing 100,000+ transaction records using optimized MySQL bulk loading.',
        'Implemented Redis caching and Celery asynchronous task workers for low-latency background calculation.',
        'Interactive real-time visualization dashboards for revenue, sales velocity, customer cohorts, and payment breakdowns with Chart.js.',
        'Applied Apriori Association Rules to discover basket affinities (frequently bought together items).',
        'Built RFM (Recency, Frequency, Monetary) Analysis and automated Customer Segmentation algorithms to identify high-value vs. churn-risk buyers.'
      ],
      outcome: 'Enabled data-driven decision-making through automated visual reporting and real-time analytical insights on large-scale e-commerce datasets.',
      githubUrl: 'https://github.com/sriharis18',
      demoUrl: null
    },
    'nivratech': {
      title: 'NivraTech Client Production Website',
      category: 'Commercial Web Studio Delivery',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI/UX', 'SEO'],
      period: '2026 Client Project',
      overview: 'Co-founded NivraTech and successfully architected, developed, and delivered a high-impact commercial client website project from initial requirements to live production deployment.',
      problemSolved: 'Client required a modern, mobile-responsive, lightning-fast digital storefront with custom interactive showcases to convert visitors into qualified leads.',
      keyFeatures: [
        'Clean modern semantic HTML5 and CSS3 styling with zero bloat.',
        'Fluid layout and typography adapting smoothly across smartphones, tablets, and wide displays.',
        'Interactive service showcases, client testimonials, and dynamic lead capture inquiry forms.',
        'Strict adherence to web accessibility standards and fast page load speeds.'
      ],
      outcome: 'Delivered project on schedule with stellar client feedback, establishing the foundation of NivraTech as a technology venture.',
      githubUrl: 'https://github.com/sriharis18',
      demoUrl: '#contact'
    },
    'cafeteria-pwa': {
      title: 'CBS Cafeteria Management System (PWA)',
      category: 'Progressive Web App (PWA)',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Service Workers', 'Local Storage'],
      period: 'Campus Demonstration System',
      overview: 'Developed an installable Progressive Web Application (PWA) for Chetan Business School to demonstrate digital cafeteria ordering, contactless token generation, and real-time menu management.',
      problemSolved: 'Replaced long physical queues and paper order slips at the college cafeteria during peak hours with an instant mobile-friendly token queue.',
      keyFeatures: [
        'Progressive Web App capabilities with offline caching via Service Workers.',
        'Add-to-cart ordering with real-time bill calculation and item availability indicators.',
        'Automated unique digital order token generator for counter collection.',
        'Lightweight, responsive interface requiring no native app installation.'
      ],
      outcome: 'Currently utilized across Chetan Business School for live academic demonstrations and technology showcases.',
      githubUrl: 'https://github.com/sriharis18',
      demoUrl: null
    }
  };

  // =========================================================================
  // 2. THEME SWITCHING (DARK / LIGHT WITH LOCALSTORAGE & SYSTEM FALLBACK)
  // =========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;
  const STORAGE_KEY = 'srihari_portfolio_theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Check OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark'; // Default to sophisticated dark navy
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    if (themeToggle) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
      themeToggle.setAttribute('title', `Switch to ${nextTheme} theme`);
    }
  }

  // Initial theme application
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Toggle button event
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      applyTheme(target);
      localStorage.setItem(STORAGE_KEY, target);
      showToast(`Switched to ${target.toUpperCase()} mode`);
    });
  }

  // Listen to OS theme changes if user has not explicitly set preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // =========================================================================
  // 3. RESPONSIVE MOBILE NAVIGATION & DRAWER
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileMenu() {
    if (!navMenu || !menuToggle) return;
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!navMenu || !menuToggle) return;
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close drawer when any nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // =========================================================================
  // 4. STICKY HEADER & SCROLLSPY
  // =========================================================================
  const siteHeader = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky header background
    if (siteHeader) {
      if (scrollPos > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  // ScrollSpy with IntersectionObserver
  const spyObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, spyObserverOptions);

  sections.forEach(sec => spyObserver.observe(sec));

  // =========================================================================
  // 5. SCROLL REVEAL ANIMATIONS
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('revealed'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // =========================================================================
  // 6. DYNAMIC ROLE ROTATOR / TYPING EFFECT
  // =========================================================================
  const typedRoleElement = document.getElementById('typedRole');
  const roles = [
    'Front-End Developer',
    'Software Developer',
    'MCA Scholar @ CBS Hubli',
    'Full-Stack Web Builder',
    'React & Python Enthusiast',
    'NivraTech Co-Founder'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeRole() {
    if (!typedRoleElement) return;

    if (prefersReducedMotion) {
      typedRoleElement.textContent = 'Front-End Developer & Software Engineer';
      return;
    }

    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typedRoleElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      typedRoleElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(typeRole, typingSpeed);
  }

  // Initiate typing effect
  typeRole();

  // =========================================================================
  // 7. SKILLS MATRIX FILTER TABS
  // =========================================================================
  const skillTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetCategory = tab.getAttribute('data-category');

      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCat === targetCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 8. PROJECTS FILTER
  // =========================================================================
  const projectTabs = document.querySelectorAll('.project-tab');
  const projectCards = document.querySelectorAll('.project-card');

  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-pfilter');

      projectCards.forEach(card => {
        const pcat = card.getAttribute('data-pcategory');
        if (filter === 'all' || pcat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 9. PROJECT DETAILS MODAL
  // =========================================================================
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalFooter = document.getElementById('modalFooter');
  const viewDetailBtns = document.querySelectorAll('.view-details-btn');

  let lastFocusedElement = null;

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !projectModal) return;

    lastFocusedElement = document.activeElement;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;

    // Build modal body
    const techTagsHtml = data.stack.map(tag => `<span class="tech-tag">${tag}</span>`).join(' ');
    const featuresListHtml = data.keyFeatures.map(f => `<li>${f}</li>`).join('');

    modalBody.innerHTML = `
      <div class="modal-meta-box">
        <div>
          <span class="meta-label">Project Domain:</span>
          <p><strong>${data.category}</strong></p>
        </div>
        <div>
          <span class="meta-label">Context / Role:</span>
          <p><strong>${data.period}</strong></p>
        </div>
      </div>

      <h4>Problem Solved &amp; Architecture</h4>
      <p>${data.problemSolved}</p>

      <h4>Key Engineering Features</h4>
      <ul>${featuresListHtml}</ul>

      <h4>Technologies Leveraged</h4>
      <div class="project-tech-tags" style="margin-bottom: 20px;">
        ${techTagsHtml}
      </div>

      <h4>Tangible Project Outcome</h4>
      <p><strong>${data.outcome}</strong></p>
    `;

    // Build modal footer buttons
    let footerHtml = '';
    if (data.githubUrl) {
      footerHtml += `
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span>View on GitHub</span>
        </a>
      `;
    }
    footerHtml += `
      <button class="btn btn-primary btn-sm" id="modalCloseActionBtn" type="button">Close Window</button>
    `;

    modalFooter.innerHTML = footerHtml;

    const actionCloseBtn = document.getElementById('modalCloseActionBtn');
    if (actionCloseBtn) {
      actionCloseBtn.addEventListener('click', closeProjectModal);
    }

    // Show modal
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-project');
      openProjectModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Close modal when clicking on backdrop
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // =========================================================================
  // 10. CONTACT FORM CLIENT-SIDE VALIDATION & LOGIC
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const senderName = document.getElementById('senderName');
  const senderEmail = document.getElementById('senderEmail');
  const messageSubject = document.getElementById('messageSubject');
  const messageBody = document.getElementById('messageBody');
  const charCount = document.getElementById('charCount');
  const formStatusBanner = document.getElementById('formStatusBanner');
  const mailtoFallbackBtn = document.getElementById('mailtoFallbackBtn');

  // Live character counter for message
  if (messageBody && charCount) {
    messageBody.addEventListener('input', () => {
      const len = messageBody.value.length;
      charCount.textContent = `${len} / 500`;
      if (len > 500) {
        charCount.style.color = '#ef4444';
      } else {
        charCount.style.color = 'var(--text-muted)';
      }
    });
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).trim().toLowerCase());
  }

  function validateField(input, errorElement, validatorFn, errorMessage) {
    const val = input.value.trim();
    const isValid = validatorFn(val);

    if (!isValid) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      if (errorElement) errorElement.textContent = errorMessage;
      return false;
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      if (errorElement) errorElement.textContent = '';
      return true;
    }
  }

  // Attach live blur validations
  if (senderName) {
    senderName.addEventListener('blur', () => {
      validateField(
        senderName,
        document.getElementById('nameError'),
        val => val.length >= 2,
        'Please enter your name (at least 2 characters).'
      );
    });
  }

  if (senderEmail) {
    senderEmail.addEventListener('blur', () => {
      validateField(
        senderEmail,
        document.getElementById('emailError'),
        validateEmail,
        'Please enter a valid email address.'
      );
    });
  }

  if (messageSubject) {
    messageSubject.addEventListener('blur', () => {
      validateField(
        messageSubject,
        document.getElementById('subjectError'),
        val => val.length >= 4,
        'Please enter a subject (at least 4 characters).'
      );
    });
  }

  if (messageBody) {
    messageBody.addEventListener('blur', () => {
      validateField(
        messageBody,
        document.getElementById('messageError'),
        val => val.length >= 15,
        'Please enter a message of at least 15 characters.'
      );
    });
  }

  // Handle Form Submit
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(
        senderName,
        document.getElementById('nameError'),
        val => val.length >= 2,
        'Please enter your name (at least 2 characters).'
      );
      const isEmailValid = validateField(
        senderEmail,
        document.getElementById('emailError'),
        validateEmail,
        'Please enter a valid email address.'
      );
      const isSubjectValid = validateField(
        messageSubject,
        document.getElementById('subjectError'),
        val => val.length >= 4,
        'Please enter a subject (at least 4 characters).'
      );
      const isMessageValid = validateField(
        messageBody,
        document.getElementById('messageError'),
        val => val.length >= 15,
        'Please enter a message of at least 15 characters.'
      );

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        if (formStatusBanner) {
          formStatusBanner.className = 'form-status-banner error';
          formStatusBanner.style.display = 'block';
          formStatusBanner.textContent = 'Please correct the highlighted errors before submitting.';
        }
        return;
      }

      // Collect data
      const messagePayload = {
        name: senderName.value.trim(),
        email: senderEmail.value.trim(),
        subject: messageSubject.value.trim(),
        message: messageBody.value.trim(),
        timestamp: new Date().toISOString()
      };

      // Store in localStorage demo queue
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        stored.push(messagePayload);
        localStorage.setItem('portfolio_messages', JSON.stringify(stored));
      } catch (err) {
        console.error('Storage error:', err);
      }

      // Display clear transparent explanation as required by prompt
      if (formStatusBanner) {
        formStatusBanner.className = 'form-status-banner success';
        formStatusBanner.style.display = 'block';
        formStatusBanner.innerHTML = `
          <strong>Thank you, ${messagePayload.name}!</strong> Your message has been validated and recorded locally.
          Since this is a client-side portfolio build without a live backend email gateway, you can also launch your email client with your prefilled message using the button below.
        `;
      }

      showToast('Message validated & logged successfully!');

      // Reset fields
      contactForm.reset();
      senderName.classList.remove('is-valid');
      senderEmail.classList.remove('is-valid');
      messageSubject.classList.remove('is-valid');
      messageBody.classList.remove('is-valid');
      if (charCount) charCount.textContent = '0 / 500';
    });
  }

  // Mailto fallback button logic
  if (mailtoFallbackBtn) {
    mailtoFallbackBtn.addEventListener('click', () => {
      const name = senderName ? senderName.value.trim() : '';
      const email = senderEmail ? senderEmail.value.trim() : '';
      const subj = messageSubject && messageSubject.value.trim() ? messageSubject.value.trim() : 'Portfolio Inquiry for Srihari S';
      const msg = messageBody ? messageBody.value.trim() : '';

      const fullBody = `Hello Srihari,%0D%0A%0D%0A${encodeURIComponent(msg)}%0D%0A%0D%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
      const mailtoUrl = `mailto:sriharis.mca@gmail.com?subject=${encodeURIComponent(subj)}&body=${fullBody}`;

      window.location.href = mailtoUrl;
    });
  }

  // =========================================================================
  // 11. CLIPBOARD COPY UTILITY & TOAST ALERTS
  // =========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');

  function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }).catch(() => {
        fallbackCopy(text, successMessage);
      });
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (err) {
      showToast('Could not copy to clipboard.');
    }
    document.body.removeChild(tempInput);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('sriharis.mca@gmail.com', 'Email copied to clipboard!');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('+918073754161', 'Phone number copied to clipboard!');
    });
  }

  // Toast Functionality
  const toastContainer = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout = null;

  function showToast(message) {
    if (!toastContainer || !toastMessage) return;
    toastMessage.textContent = message;
    toastContainer.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastContainer.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // 12. BACK TO TOP BUTTON
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 13. DYNAMIC COPYRIGHT YEAR
  // =========================================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
