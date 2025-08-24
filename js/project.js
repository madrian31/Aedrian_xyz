// Enhanced Projects Data with sample images for carousel

// const projectsData = {
  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "uiux",
      description: "A comprehensive dashboard design for an e-commerce platform with analytics, user management, and product catalog features. Focused on creating an intuitive interface for business owners to manage their online store efficiently.",
      image: "img/projects/ecommerce-dashboard.jpg",
      modalImages: [
        "img/projects/ecommerce-dashboard-1.jpg",
        "img/projects/ecommerce-dashboard-2.jpg",
        "img/projects/ecommerce-dashboard-3.jpg",
        "img/projects/ecommerce-dashboard-4.jpg"
      ],
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"],
      liveUrl: "https://example.com/demo1",
      codeUrl: null,
      details: {
        duration: "4 weeks",
        role: "UI/UX Designer",
        challenges: "Creating a complex dashboard that remains user-friendly while displaying vast amounts of data and multiple features",
        solutions: "Implemented progressive disclosure and clear information hierarchy with modular design components",
        fullDescription: "This e-commerce dashboard was designed to provide business owners with a comprehensive view of their online store performance. The design process involved extensive user research, wireframing, and prototyping to ensure the interface would be intuitive for users of varying technical expertise. The dashboard includes modules for sales analytics, inventory management, customer insights, and order processing. Special attention was paid to data visualization, making complex metrics easily digestible through charts and graphs. The design system maintains consistency across all modules while allowing for scalability as new features are added."
      }
    },
    {
      id: 2,
      title: "Restaurant Management System",
      category: "webdev",
      description: "Full-stack web application for restaurant management including order tracking, inventory management, and staff scheduling. Built with modern PHP architecture and responsive design.",
      image: "img/projects/restaurant-system.jpg",
      modalImages: [
        "img/",
        "img/projects/restaurant-system-2.jpg",
        "img/projects/restaurant-system-3.jpg"
      ],
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "MVC Pattern"],
      liveUrl: "https://example.com/demo2",
      codeUrl: "https://github.com/example/restaurant-system",
      details: {
        duration: "8 weeks",
        role: "Full-Stack Developer",
        challenges: "Real-time order tracking and inventory synchronization across multiple restaurant locations",
        solutions: "Implemented AJAX for real-time updates and optimized database queries with proper indexing",
        fullDescription: "A comprehensive restaurant management system built from the ground up to streamline restaurant operations. The application features real-time order tracking, allowing kitchen staff to update order status instantly while customers and management can monitor progress. The inventory management module tracks ingredient usage, alerts for low stock, and generates automated purchase orders. The staff scheduling component helps managers create efficient work schedules while considering staff availability and labor costs. The system includes robust reporting features for sales analysis, popular menu items, and operational efficiency metrics."
      }
    },
    {
      id: 3,
      title: "Brand Identity System",
      category: "logo",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup. Created a cohesive visual language that reflects innovation and reliability.",
      image: "img/projects/brand-identity.jpg",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy", "Typography"],
      liveUrl: "https://example.com/demo3",
      codeUrl: null,
      details: {
        duration: "6 weeks",
        role: "Brand Designer",
        challenges: "Balancing modern aesthetics with professional credibility for a competitive tech market",
        solutions: "Developed multiple concepts and conducted stakeholder feedback sessions with iterative refinements"
      }
    },
    {
      id: 4,
      title: "Mobile Banking App UI",
      category: "uiux",
      description: "User interface design for a mobile banking application focused on simplicity, security, and accessibility. Designed with user-centered approach and extensive usability testing.",
      image: "img/projects/banking-app.jpg",
      modalImages: [
        "img/projects/banking-app-1.jpg",
        "img/projects/banking-app-2.jpg",
        "img/projects/banking-app-3.jpg",
        "img/projects/banking-app-4.jpg",
        "img/projects/banking-app-5.jpg"
      ],
      technologies: ["Figma", "Mobile Design", "User Testing", "Accessibility"],
      liveUrl: "https://example.com/demo4",
      codeUrl: null,
      details: {
        duration: "10 weeks",
        role: "Mobile UI Designer",
        challenges: "Balancing security requirements with user experience while ensuring accessibility for all users",
        solutions: "Implemented biometric authentication and progressive onboarding with comprehensive accessibility features",
        fullDescription: "Designing a mobile banking application required careful consideration of security, usability, and accessibility. The interface was built around the principle of progressive disclosure, presenting users with only the information they need at each step. The app features a clean, minimalist design that reduces cognitive load while maintaining all necessary functionality. Security features like biometric authentication and encrypted transactions are seamlessly integrated without compromising user experience. Extensive usability testing was conducted with diverse user groups to ensure the app works well for users of all ages and technical abilities. The design system includes comprehensive accessibility features, meeting WCAG 2.1 AA standards."
      }
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      category: "webdev",
      description: "Responsive personal portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance and SEO.",
      image: "img/projects/portfolio-website.jpg",
      modalImages: [
        "img/projects/portfolio-1.jpg",
        "img/projects/portfolio-2.jpg",
        "img/projects/portfolio-3.jpg"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
      liveUrl: "https://example.com/demo5",
      codeUrl: "https://github.com/example/portfolio",
      details: {
        duration: "3 weeks",
        role: "Front-End Developer",
        challenges: "Creating smooth animations while maintaining performance across all devices",
        solutions: "Used CSS animations and optimized assets for fast loading with lazy loading implementation",
        fullDescription: "This portfolio website was crafted to showcase creative work while demonstrating technical skills in web development. The site features a modern, responsive design that works seamlessly across all devices. Performance was a key consideration, with optimized images, efficient CSS animations, and minimal JavaScript to ensure fast loading times. The site includes smooth scroll animations, interactive elements, and a dynamic project filtering system. SEO optimization was implemented through semantic HTML structure, meta tags, and structured data markup to improve search engine visibility."
      }
    },
    {
      id: 6,
      title: "Social Media Automation Workflow",
      category: "ai",
      description: "Automated workflow using n8n for social media management, content scheduling, and lead generation. Integrates multiple platforms and APIs for seamless operation.",
      image: "img/projects/automation-workflow.jpg",
      modalImages: [
        "img/projects/automation-1.jpg",
        "img/projects/automation-2.jpg",
        "img/projects/automation-3.jpg"
      ],
      technologies: ["n8n", "API Integration", "Webhooks", "Automation", "Social Media APIs"],
      liveUrl: "https://example.com/demo6",
      codeUrl: null,
      details: {
        duration: "2 weeks",
        role: "Automation Specialist",
        challenges: "Handling rate limits and API changes across multiple social media platforms",
        solutions: "Implemented retry mechanisms and modular workflow design with comprehensive error handling",
        fullDescription: "This automation workflow streamlines social media management by connecting multiple platforms and tools through a centralized system. The workflow automatically schedules posts across different social media platforms, monitors engagement metrics, and generates leads through automated responses and follow-ups. The system handles content curation, hashtag optimization, and audience targeting based on predefined criteria. Advanced features include sentiment analysis of comments and messages, automated customer service responses, and detailed analytics reporting. The modular design allows for easy customization and scaling as business needs grow."
      }
    },
    {
      id: 7,
      title: "Local Coffee Shop Branding",
      category: "logo",
      description: "Modern logo design and brand identity for a local coffee shop. Includes logo variations, color palette, business cards, and signage design.",
      image: "img/projects/coffee-logo.jpg",
      technologies: ["Adobe Illustrator", "Logo Design", "Brand Identity", "Print Design"],
      liveUrl: "https://example.com/demo7",
      codeUrl: null,
      details: {
        duration: "4 weeks",
        role: "Brand Designer",
        challenges: "Creating a unique identity in a saturated coffee shop market",
        solutions: "Focused on local culture and artisanal coffee experience with warm, inviting design elements"
      }
    },
    {
      id: 8,
      title: "Task Management Web App",
      category: "uiux",
      description: "Clean and intuitive task management application design with team collaboration features. Emphasis on productivity and user workflow optimization.",
      image: "img/projects/task-management.jpg",
      modalImages: [
        "img/projects/task-management-1.jpg",
        "img/projects/task-management-2.jpg",
        "img/projects/task-management-3.jpg",
        "img/projects/task-management-4.jpg"
      ],
      technologies: ["Figma", "User Experience", "Wireframing", "Prototyping"],
      liveUrl: "https://example.com/demo8",
      codeUrl: null,
      details: {
        duration: "6 weeks",
        role: "UX/UI Designer",
        challenges: "Organizing complex information without overwhelming users while maintaining team collaboration features",
        solutions: "Implemented card-based layout with smart categorization and intuitive drag-and-drop functionality",
        fullDescription: "This task management application was designed to enhance productivity for both individual users and teams. The interface focuses on clarity and ease of use, with drag-and-drop functionality for task organization and real-time collaboration features. The design includes customizable workflows, priority indicators, and progress tracking visualizations. Special attention was given to the mobile experience, ensuring full functionality across all devices. The application supports multiple project views including Kanban boards, list views, and calendar integration."
      }
    },
    {
      id: 9,
      title: "Customer Support Chatbot",
      category: "ai",
      description: "AI-powered customer support chatbot with natural language processing. Integrated with existing CRM system for seamless customer service automation.",
      image: "img/projects/chatbot.jpg",
      modalImages: [
        "img/projects/chatbot-1.jpg",
        "img/projects/chatbot-2.jpg"
      ],
      technologies: ["Natural Language Processing", "API Integration", "Customer Service Automation"],
      liveUrl: "https://example.com/demo9",
      codeUrl: null,
      details: {
        duration: "5 weeks",
        role: "AI Integration Specialist",
        challenges: "Training the bot to handle diverse customer queries while maintaining human-like interactions",
        solutions: "Created extensive training data and implemented fallback mechanisms with seamless handoff to human agents",
        fullDescription: "This AI-powered chatbot was developed to handle customer support inquiries automatically while maintaining high customer satisfaction. The bot uses natural language processing to understand customer intent and provide relevant responses. It integrates with the existing CRM system to access customer history and provide personalized support. The system includes escalation protocols for complex queries and sentiment analysis to detect frustrated customers who need immediate human assistance."
      }
    },
    {
      id: 10,
      title: "E-Learning Platform",
      category: "webdev",
      description: "Comprehensive e-learning platform with video streaming, progress tracking, and interactive quizzes. Built for educational institutions and online course creators.",
      image: "img/projects/elearning.jpg",
      modalImages: [
        "img/projects/elearning-1.jpg",
        "img/projects/elearning-2.jpg",
        "img/projects/elearning-3.jpg"
      ],
      technologies: ["PHP", "MySQL", "Video Streaming", "Progress Tracking", "Interactive Elements"],
      liveUrl: "https://example.com/demo10",
      codeUrl: "https://github.com/example/elearning-platform",
      details: {
        duration: "12 weeks",
        role: "Full-Stack Developer",
        challenges: "Handling video content delivery and user progress synchronization across multiple devices",
        solutions: "Implemented CDN for video delivery and progressive loading with offline capability",
        fullDescription: "This comprehensive e-learning platform was built to support online education with features including video streaming, interactive quizzes, progress tracking, and course management. The platform supports multiple content types including videos, documents, and interactive elements. Students can track their progress, take assessments, and interact with instructors through integrated communication tools. The admin panel allows course creators to manage content, track student engagement, and generate detailed reports on learning outcomes."
      }
    },
    {
      id: 11,
      title: "Tech Startup Logo",
      category: "logo",
      description: "Minimalist logo design for a technology startup specializing in cloud solutions. Emphasizes innovation, reliability, and scalability.",
      image: "img/projects/tech-startup-logo.jpg",
      technologies: ["Adobe Illustrator", "Minimalist Design", "Brand Strategy"],
      liveUrl: "https://example.com/demo11",
      codeUrl: null,
      details: {
        duration: "3 weeks",
        role: "Logo Designer",
        challenges: "Creating a memorable identity that stands out in the competitive tech industry",
        solutions: "Developed a clean, scalable design with subtle tech references and strong brand recognition"
      }
    },
    {
      id: 12,
      title: "Healthcare Dashboard",
      category: "uiux",
      description: "Medical dashboard interface for healthcare professionals to manage patient records, appointments, and medical data with emphasis on data security and usability.",
      image: "img/projects/healthcare-dashboard.jpg",
      modalImages: [
        "img/projects/healthcare-1.jpg",
        "img/projects/healthcare-2.jpg",
        "img/projects/healthcare-3.jpg",
        "img/projects/healthcare-4.jpg"
      ],
      technologies: ["Figma", "Healthcare UX", "Data Visualization", "Security Design"],
      liveUrl: "https://example.com/demo12",
      codeUrl: null,
      details: {
        duration: "8 weeks",
        role: "Healthcare UX Designer",
        challenges: "Balancing comprehensive medical data display with ease of use while ensuring HIPAA compliance",
        solutions: "Implemented role-based access controls with intuitive data hierarchy and quick access to critical information",
        fullDescription: "This healthcare dashboard was designed specifically for medical professionals to efficiently manage patient information, scheduling, and medical records. The interface prioritizes critical information visibility while maintaining strict security protocols. Features include patient timeline views, medication tracking, appointment scheduling, and integration with medical devices. The design ensures quick access to emergency information while providing comprehensive views for detailed patient care planning."
      }
    }
  ]
};

// State management
let currentFilter = 'all';
let isInitialized = false;
let showingAll = false;
let currentImageIndex = 0;
const INITIAL_DISPLAY_COUNT = 3;

// DOM Elements - with null checks
const getDOMElements = () => ({
  projectsGrid: document.getElementById('projectsGrid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  projectModal: document.getElementById('projectModal'),
  modalClose: document.getElementById('modalClose'),
  modalBody: document.getElementById('modalBody')
});

// Utility functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Enhanced error handling
const safeExecute = (func, fallback = () => {}) => {
  try {
    return func();
  } catch (error) {
    console.error('Error executing function:', error);
    return fallback();
  }
};

// Smooth scroll to element
const smoothScrollTo = (element) => {
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

// Initialize projects with error handling
function initializeProjects() {
  if (isInitialized) return;
  
  safeExecute(() => {
    renderProjects();
    setupEventListeners();
    
    // Delay animation to ensure DOM is ready
    setTimeout(() => {
      animateProjectCards();
    }, 100);
    
    isInitialized = true;
    console.log('Projects section initialized successfully');
  }, () => {
    console.error('Failed to initialize projects section');
  });
}

// Render all projects with improved filtering
function renderProjects(filter = 'all') {
  const { projectsGrid } = getDOMElements();
  if (!projectsGrid) return;
  
  safeExecute(() => {
    const filteredProjects = filter === 'all' 
      ? projectsData.projects 
      : projectsData.projects.filter(project => project.category === filter);
    
    if (filteredProjects.length === 0) {
      projectsGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-light);">No projects found for this category</div>';
      removeViewMoreButton();
      return;
    }
    
    // Show only first 3 projects initially, unless showingAll is true
    const projectsToShow = showingAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);
    
    // Add fade out animation for existing cards
    const existingCards = document.querySelectorAll('.project-card');
    existingCards.forEach((card, index) => {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateY(-20px)';
    });
    
    // Update content after fade out
    setTimeout(() => {
      projectsGrid.innerHTML = projectsToShow
        .map(project => createProjectCard(project))
        .join('');
      
      // Add view more button if there are more projects to show
      if (filteredProjects.length > INITIAL_DISPLAY_COUNT) {
        addViewMoreButton(filteredProjects.length);
      } else {
        removeViewMoreButton();
      }
      
      // Re-animate cards with delay
      setTimeout(() => {
        animateProjectCards();
      }, 50);
    }, existingCards.length > 0 ? 300 : 0);
  });
}

// Enhanced project card creation
function createProjectCard(project) {
  if (!project) return '';
  
  const imageHtml = project.image ? `
    <img 
      src="${project.image}" 
      alt="${project.title}" 
      class="project-image"
      loading="lazy"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
    >
    <div class="project-placeholder">
      <div style="text-align: center;">
        <i class="bi bi-image" style="font-size: 3rem; margin-bottom: 0.5rem; color: var(--primary-color);"></i>
        <div style="font-size: 0.9rem;">Project Image</div>
      </div>
    </div>
  ` : `
    <div class="project-placeholder" style="display: flex;">
      <div style="text-align: center;">
        <i class="bi bi-image" style="font-size: 3rem; margin-bottom: 0.5rem; color: var(--primary-color);"></i>
        <div style="font-size: 0.9rem;">Project Image</div>
      </div>
    </div>
  `;

  const liveButton = project.liveUrl && isValidUrl(project.liveUrl) ? `
    <a href="${project.liveUrl}" class="project-btn btn-secondary" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-box-arrow-up-right"></i>
      Live Demo
    </a>
  ` : '';

  const codeButton = project.codeUrl && isValidUrl(project.codeUrl) ? `
    <a href="${project.codeUrl}" class="project-btn btn-secondary" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-github"></i>
      Code
    </a>
  ` : '';

  // For logo design category, don't show "View Details" button
  const viewDetailsButton = project.category !== 'logo' ? `
    <button class="project-btn btn-primary" onclick="openProjectModal(${project.id})" aria-label="View project details">
      <i class="bi bi-eye"></i>
      View Details
    </button>
  ` : '';

  return `
    <div class="project-card" data-project-id="${project.id}" data-category="${project.category}">
      ${imageHtml}
      <div class="project-content">
        <div class="project-header">
          <span class="project-category">${getCategoryName(project.category)}</span>
        </div>
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-description">${escapeHtml(project.description)}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
        </div>
        <div class="project-actions">
          ${viewDetailsButton}
          ${liveButton}
          ${codeButton}
        </div>
      </div>
    </div>
  `;
}

// Utility functions
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Get category display name
function getCategoryName(category) {
  const categoryNames = {
    'uiux': 'UI/UX Design',
    'webdev': 'Web Development',
    'logo': 'Logo Design',
    'ai': 'AI Automation'
  };
  return categoryNames[category] || category.toUpperCase();
}

// Enhanced event listeners setup
function setupEventListeners() {
  const { filterButtons, modalClose, projectModal } = getDOMElements();
  
  // Filter buttons with improved handling
  if (filterButtons) {
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const category = button.dataset.category;
        
        if (currentFilter === category) return; // Avoid unnecessary re-renders
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        currentFilter = category;
        showingAll = false; // Reset to show only first 3 when changing filter
        renderProjects(category);
      });
    });
  }

  // Modal close events with improved handling
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeProjectModal();
    });
  }
  
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal || e.target.classList.contains('modal-overlay')) {
        closeProjectModal();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
    
    // Arrow key navigation for carousel
    if (projectModal && projectModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    }
  });

  // Project card click handling (skip for logo designs)
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card && !e.target.closest('.project-actions')) {
      const projectId = parseInt(card.dataset.projectId);
      const project = projectsData.projects.find(p => p.id === projectId);
      
      // Don't open modal for logo design category
      if (project && project.category !== 'logo' && !isNaN(projectId)) {
        openProjectModal(projectId);
      }
    }
  });
}

// Enhanced modal functionality with new layout
function openProjectModal(projectId) {
  const { projectModal, modalBody } = getDOMElements();
  const project = projectsData.projects.find(p => p.id === projectId);
  
  if (!project || !projectModal || !modalBody) {
    console.error('Unable to open modal: missing project or DOM elements');
    return;
  }

  // Skip modal for logo design category
  if (project.category === 'logo') {
    return;
  }

  safeExecute(() => {
    currentImageIndex = 0; // Reset image index
    const images = project.modalImages || [project.image].filter(Boolean);
    
    const liveButton = project.liveUrl && isValidUrl(project.liveUrl) ? `
      <a href="${project.liveUrl}" class="project-btn btn-primary" target="_blank" rel="noopener noreferrer" style="margin-right: 1rem;">
        <i class="bi bi-box-arrow-up-right"></i>
        View Live Demo
      </a>
    ` : '';

    const codeButton = project.codeUrl && isValidUrl(project.codeUrl) ? `
      <a href="${project.codeUrl}" class="project-btn btn-secondary" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github"></i>
        View Code
      </a>
    ` : '';

    modalBody.innerHTML = `
      <div style="display: flex; gap: 3rem; max-width: 1200px; margin: 0 auto;">
        <!-- Left Side: Content -->
        <div style="flex: 1; min-width: 0;">
          <div style="margin-bottom: 1.5rem;">
            <span class="project-category" style="margin-bottom: 1rem; display: inline-block;">${getCategoryName(project.category)}</span>
            <h2 style="font-size: 2.5rem; font-weight: 700; color: var(--text-color); margin-bottom: 1.5rem; line-height: 1.2;">${escapeHtml(project.title)}</h2>
          </div>
          
          <div style="color: var(--text-light); line-height: 1.7; margin-bottom: 2rem; font-size: 1.1rem;">
            <p style="margin-bottom: 1.5rem;">${escapeHtml(project.description)}</p>
            ${project.details && project.details.fullDescription ? `
              <p>${escapeHtml(project.details.fullDescription)}</p>
            ` : ''}
          </div>

          ${project.details ? createProjectDetails(project.details) : ''}
          
          <div class="project-tech" style="margin-bottom: 2rem;">
            ${project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
          </div>
          
          <div style="display: flex; align-items: center;">
            ${liveButton}
            ${codeButton}
          </div>
        </div>
        
        <!-- Right Side: Image Carousel -->
        <div style="flex: 1; min-width: 0;">
          ${createImageCarousel(images, project.title)}
        </div>
      </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize carousel
    initializeCarousel();
    
    // Focus management for accessibility
    modalClose.focus();
  });
}

// Create image carousel HTML
function createImageCarousel(images, projectTitle) {
  if (!images || images.length === 0) {
    return `
      <div style="height: 400px; background: var(--bg-higher); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
        <div style="text-align: center;">
          <i class="bi bi-image" style="font-size: 4rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
          <div style="font-size: 1.1rem;">Project Images</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="image-carousel" style="position: relative; height: 500px; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow);">
      <!-- Main Image Display -->
      <div class="carousel-main" style="position: relative; width: 100%; height: 400px; overflow: hidden; border-radius: 12px;">
        ${images.map((image, index) => `
          <img 
            src="${image}" 
            alt="${projectTitle} - Image ${index + 1}" 
            class="carousel-image ${index === 0 ? 'active' : ''}"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              opacity: ${index === 0 ? '1' : '0'};
              transition: opacity 0.5s ease;
            "
            loading="lazy"
            onerror="this.style.display='none'"
          >
        `).join('')}
        
        <!-- Navigation Arrows -->
        ${images.length > 1 ? `
          <button 
            class="carousel-nav prev" 
            onclick="previousImage()"
            style="
              position: absolute;
              left: 1rem;
              top: 50%;
              transform: translateY(-50%);
              background: rgba(0, 0, 0, 0.7);
              color: white;
              border: none;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              transition: all 0.3s ease;
              z-index: 10;
            "
            onmouseover="this.style.background='rgba(0, 0, 0, 0.9)'"
            onmouseout="this.style.background='rgba(0, 0, 0, 0.7)'"
          >
            <i class="bi bi-chevron-left"></i>
          </button>
          
          <button 
            class="carousel-nav next" 
            onclick="nextImage()"
            style="
              position: absolute;
              right: 1rem;
              top: 50%;
              transform: translateY(-50%);
              background: rgba(0, 0, 0, 0.7);
              color: white;
              border: none;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              transition: all 0.3s ease;
              z-index: 10;
            "
            onmouseover="this.style.background='rgba(0, 0, 0, 0.9)'"
            onmouseout="this.style.background='rgba(0, 0, 0, 0.7)'"
          >
            <i class="bi bi-chevron-right"></i>
          </button>
        ` : ''}
      </div>
      
      <!-- Thumbnail Navigation -->
      ${images.length > 1 ? `
        <div class="carousel-thumbnails" style="
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
          padding: 0 0.5rem;
          overflow-x: auto;
          scrollbar-width: thin;
        ">
          ${images.map((image, index) => `
            <img 
              src="${image}" 
              alt="Thumbnail ${index + 1}"
              class="carousel-thumbnail ${index === 0 ? 'active' : ''}"
              onclick="goToImage(${index})"
              style="
                width: 80px;
                height: 60px;
                object-fit: cover;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 2px solid ${index === 0 ? 'var(--primary-color)' : 'transparent'};
                opacity: ${index === 0 ? '1' : '0.7'};
                flex-shrink: 0;
              "
              onmouseover="this.style.opacity='1'"
              onmouseout="this.style.opacity='${index === currentImageIndex ? '1' : '0.7'}'"
              loading="lazy"
              onerror="this.style.display='none'"
            >
          `).join('')}
        </div>
      ` : ''}
      
      <!-- Image Counter -->
      ${images.length > 1 ? `
        <div style="
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          z-index: 10;
        ">
          <span id="imageCounter">1</span> / ${images.length}
        </div>
      ` : ''}
    </div>
  `;
}

// Initialize carousel functionality
function initializeCarousel() {
  // Auto-play functionality (optional)
  // Uncomment if you want auto-play
  /*
  setInterval(() => {
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 1) {
      nextImage();
    }
  }, 5000); // Change image every 5 seconds
  */
}

// Carousel navigation functions
function nextImage() {
  const images = document.querySelectorAll('.carousel-image');
  const thumbnails = document.querySelectorAll('.carousel-thumbnail');
  const counter = document.getElementById('imageCounter');
  
  if (images.length <= 1) return;
  
  // Hide current image
  images[currentImageIndex].style.opacity = '0';
  if (thumbnails[currentImageIndex]) {
    thumbnails[currentImageIndex].style.border = '2px solid transparent';
    thumbnails[currentImageIndex].style.opacity = '0.7';
    thumbnails[currentImageIndex].classList.remove('active');
  }
  
  // Move to next image
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  // Show new image
  setTimeout(() => {
    images[currentImageIndex].style.opacity = '1';
    if (thumbnails[currentImageIndex]) {
      thumbnails[currentImageIndex].style.border = '2px solid var(--primary-color)';
      thumbnails[currentImageIndex].style.opacity = '1';
      thumbnails[currentImageIndex].classList.add('active');
    }
    if (counter) {
      counter.textContent = currentImageIndex + 1;
    }
  }, 250);
}

function previousImage() {
  const images = document.querySelectorAll('.carousel-image');
  const thumbnails = document.querySelectorAll('.carousel-thumbnail');
  const counter = document.getElementById('imageCounter');
  
  if (images.length <= 1) return;
  
  // Hide current image
  images[currentImageIndex].style.opacity = '0';
  if (thumbnails[currentImageIndex]) {
    thumbnails[currentImageIndex].style.border = '2px solid transparent';
    thumbnails[currentImageIndex].style.opacity = '0.7';
    thumbnails[currentImageIndex].classList.remove('active');
  }
  
  // Move to previous image
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  
  // Show new image
  setTimeout(() => {
    images[currentImageIndex].style.opacity = '1';
    if (thumbnails[currentImageIndex]) {
      thumbnails[currentImageIndex].style.border = '2px solid var(--primary-color)';
      thumbnails[currentImageIndex].style.opacity = '1';
      thumbnails[currentImageIndex].classList.add('active');
    }
    if (counter) {
      counter.textContent = currentImageIndex + 1;
    }
  }, 250);
}

function goToImage(index) {
  const images = document.querySelectorAll('.carousel-image');
  const thumbnails = document.querySelectorAll('.carousel-thumbnail');
  const counter = document.getElementById('imageCounter');
  
  if (index === currentImageIndex || !images[index]) return;
  
  // Hide current image
  images[currentImageIndex].style.opacity = '0';
  if (thumbnails[currentImageIndex]) {
    thumbnails[currentImageIndex].style.border = '2px solid transparent';
    thumbnails[currentImageIndex].style.opacity = '0.7';
    thumbnails[currentImageIndex].classList.remove('active');
  }
  
  // Set new index
  currentImageIndex = index;
  
  // Show new image
  setTimeout(() => {
    images[currentImageIndex].style.opacity = '1';
    if (thumbnails[currentImageIndex]) {
      thumbnails[currentImageIndex].style.border = '2px solid var(--primary-color)';
      thumbnails[currentImageIndex].style.opacity = '1';
      thumbnails[currentImageIndex].classList.add('active');
    }
    if (counter) {
      counter.textContent = currentImageIndex + 1;
    }
  }, 250);
}

function createProjectDetails(details) {
  if (!details) return '';
  
  return `
    <div style="margin-bottom: 2rem; padding: 1.5rem; background: var(--bg-higher); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.05);">
      <h4 style="color: var(--text-color); margin-bottom: 1.2rem; font-size: 1.2rem; font-weight: 600;">Project Details</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.2rem; font-size: 0.95rem; margin-bottom: 1rem;">
        ${details.duration ? `<div style="padding: 0.8rem; background: var(--bg-elevated); border-radius: 8px;"><strong style="color: var(--primary-color);">Duration:</strong><br>${escapeHtml(details.duration)}</div>` : ''}
        ${details.role ? `<div style="padding: 0.8rem; background: var(--bg-elevated); border-radius: 8px;"><strong style="color: var(--primary-color);">Role:</strong><br>${escapeHtml(details.role)}</div>` : ''}
      </div>
      ${details.challenges ? `
        <div style="margin-bottom: 1rem; padding: 1rem; background: var(--bg-elevated); border-radius: 8px;">
          <strong style="color: var(--primary-color);">Key Challenges:</strong>
          <p style="margin: 0.5rem 0 0 0; line-height: 1.6;">${escapeHtml(details.challenges)}</p>
        </div>
      ` : ''}
      ${details.solutions ? `
        <div style="padding: 1rem; background: var(--bg-elevated); border-radius: 8px;">
          <strong style="color: var(--primary-color);">Solutions Implemented:</strong>
          <p style="margin: 0.5rem 0 0 0; line-height: 1.6;">${escapeHtml(details.solutions)}</p>
        </div>
      ` : ''}
    </div>
  `;
}

// Close project modal
function closeProjectModal() {
  const { projectModal } = getDOMElements();
  if (!projectModal) return;
  
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
  currentImageIndex = 0; // Reset image index
}

// Add view more button
function addViewMoreButton(totalCount) {
  // Remove existing button first
  removeViewMoreButton();
  
  const projectsSection = document.querySelector('.projects-section');
  if (!projectsSection) return;
  
  const viewMoreContainer = document.createElement('div');
  viewMoreContainer.className = 'view-more-container';
  viewMoreContainer.id = 'viewMoreContainer';
  viewMoreContainer.style.cssText = `
    text-align: center;
    margin-top: 3rem;
    opacity: 0;
    animation: slideInUp 0.5s ease forwards;
  `;
  
  const remainingCount = totalCount - INITIAL_DISPLAY_COUNT;
  
  viewMoreContainer.innerHTML = `
    <button class="view-more-btn" id="viewMoreBtn" onclick="toggleViewMore()" style="
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0 auto;
      box-shadow: 0 4px 15px rgba(138, 99, 255, 0.3);
    ">
      <span class="btn-text">${showingAll ? 'Show Less' : `View ${remainingCount} More Projects`}</span>
      <i class="bi ${showingAll ? 'bi-chevron-up' : 'bi-chevron-down'} btn-icon" style="transition: transform 0.3s ease;"></i>
    </button>
  `;
  
  projectsSection.appendChild(viewMoreContainer);
  
  // Add hover effect
  const btnElement = viewMoreContainer.querySelector('.view-more-btn');
  if (btnElement) {
    btnElement.addEventListener('mouseenter', () => {
      btnElement.style.background = 'var(--secondary-color)';
      btnElement.style.transform = 'translateY(-2px)';
      btnElement.style.boxShadow = '0 8px 25px rgba(138, 99, 255, 0.4)';
    });
    
    btnElement.addEventListener('mouseleave', () => {
      btnElement.style.background = 'var(--primary-color)';
      btnElement.style.transform = 'translateY(0)';
      btnElement.style.boxShadow = '0 4px 15px rgba(138, 99, 255, 0.3)';
    });
  }
}

// Remove view more button
function removeViewMoreButton() {
  const existingContainer = document.getElementById('viewMoreContainer');
  if (existingContainer) {
    // Add fade out animation
    existingContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    existingContainer.style.opacity = '0';
    existingContainer.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      existingContainer.remove();
    }, 300);
  }
}

// Enhanced toggle view more functionality with smooth scrolling
function toggleViewMore() {
  const projectsSection = document.querySelector('.projects-section');
  const projectsGrid = document.getElementById('projectsGrid');
  
  // Add loading state to button
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  if (viewMoreBtn) {
    viewMoreBtn.style.opacity = '0.7';
    viewMoreBtn.style.pointerEvents = 'none';
  }
  
  // If we're showing all and clicking "Show Less", scroll to projects section first
  if (showingAll) {
    // Smooth scroll to projects section
    if (projectsSection) {
      smoothScrollTo(projectsSection);
    }
    
    // Wait for scroll to complete before collapsing
    setTimeout(() => {
      showingAll = false;
      renderProjects(currentFilter);
      
      // Restore button state after animation
      setTimeout(() => {
        if (viewMoreBtn) {
          viewMoreBtn.style.opacity = '1';
          viewMoreBtn.style.pointerEvents = 'auto';
        }
      }, 300);
    }, 500); // Wait for scroll animation
  } else {
    // If expanding, show more projects
    showingAll = true;
    renderProjects(currentFilter);
    
    // After projects are rendered, scroll to show the new projects
    setTimeout(() => {
      // Find the 4th project card (index 3) to scroll to
      const fourthCard = document.querySelector('.project-card:nth-child(4)');
      if (fourthCard) {
        // Smooth scroll to show the newly displayed projects
        fourthCard.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
      
      // Restore button state after animation
      if (viewMoreBtn) {
        viewMoreBtn.style.opacity = '1';
        viewMoreBtn.style.pointerEvents = 'auto';
      }
    }, 600); // Wait for cards to animate in
  }
}

// Enhanced animation system
function animateProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach((card, index) => {
    // Reset animation state
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Force reflow
    card.offsetHeight;
    
    // Apply staggered animation
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Enhanced scroll animations
function initializeProjectsAnimations() {
  const projectsSection = document.querySelector('.projects-section');
  if (!projectsSection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('.projects-title');
        const subtitle = entry.target.querySelector('.projects-subtitle');
        
        if (title) {
          title.style.opacity = '0';
          title.style.transform = 'translateY(30px)';
          title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
          }, 100);
        }
        
        if (subtitle) {
          subtitle.style.opacity = '0';
          subtitle.style.transform = 'translateY(30px)';
          subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          setTimeout(() => {
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
          }, 300);
        }
        
        // Trigger card animations after title animation
        setTimeout(() => {
          animateProjectCards();
        }, 500);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  observer.observe(projectsSection);
}

// Public API for external access
const ProjectsAPI = {
  filter: (category) => {
    const button = document.querySelector(`[data-category="${category}"]`);
    if (button) button.click();
  },
  
  search: debounce((query) => {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) {
      renderProjects(currentFilter);
      return;
    }
    
    const matchingProjects = projectsData.projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
      getCategoryName(project.category).toLowerCase().includes(searchTerm)
    );
    
    const { projectsGrid } = getDOMElements();
    if (projectsGrid) {
      if (matchingProjects.length === 0) {
        projectsGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-light);">No projects found matching your search</div>';
      } else {
        projectsGrid.innerHTML = matchingProjects.map(project => createProjectCard(project)).join('');
        animateProjectCards();
      }
    }
  }, 300),
  
  refresh: () => {
    isInitialized = false;
    initializeProjects();
  },
  
  addProject: (project) => {
    if (!project || typeof project !== 'object') return false;
    
    project.id = Math.max(...projectsData.projects.map(p => p.id), 0) + 1;
    projectsData.projects.push(project);
    renderProjects(currentFilter);
    return true;
  },
  
  removeProject: (projectId) => {
    const index = projectsData.projects.findIndex(p => p.id === projectId);
    if (index > -1) {
      projectsData.projects.splice(index, 1);
      renderProjects(currentFilter);
      return true;
    }
    return false;
  },
  
  getProject: (projectId) => {
    return projectsData.projects.find(p => p.id === projectId);
  },
  
  getAllProjects: () => {
    return [...projectsData.projects];
  },
  
  data: projectsData
};

// Make functions globally accessible
window.openProjectModal = openProjectModal;
window.toggleViewMore = toggleViewMore;
window.nextImage = nextImage;
window.previousImage = previousImage;
window.goToImage = goToImage;
window.ProjectsSection = ProjectsAPI;

// Initialize based on document state
const initializeWhenReady = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeProjects();
      initializeProjectsAnimations();
    });
  } else {
    // DOM is already loaded
    setTimeout(() => {
      initializeProjects();
      initializeProjectsAnimations();
    }, 0);
  }
};

// Start initialization
initializeWhenReady();

console.log('Enhanced Projects module with modal layout loaded successfully');