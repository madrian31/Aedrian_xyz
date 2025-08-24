// Enhanced Projects Data with proper error handling and modern features
const projectsData = {
  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "uiux",
      description: "A comprehensive dashboard design for an e-commerce platform with analytics, user management, and product catalog features. Focused on creating an intuitive interface for business owners to manage their online store efficiently.",
      image: "img/projects/ecommerce-dashboard.jpg",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"],
      liveUrl: "https://example.com/demo1", // Replace with actual URL
      codeUrl: null, // No GitHub repository yet
      details: {
        duration: "4 weeks",
        role: "UI/UX Designer",
        challenges: "Creating a complex dashboard that remains user-friendly",
        solutions: "Implemented progressive disclosure and clear information hierarchy"
      }
    },
    {
      id: 2,
      title: "Restaurant Management System",
      category: "webdev",
      description: "Full-stack web application for restaurant management including order tracking, inventory management, and staff scheduling. Built with modern PHP architecture and responsive design.",
      image: "img/projects/restaurant-system.jpg",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "MVC Pattern"],
      liveUrl: "https://example.com/demo2",
      codeUrl: null, // No GitHub repository yet
      details: {
        duration: "8 weeks",
        role: "Full-Stack Developer",
        challenges: "Real-time order tracking and inventory synchronization",
        solutions: "Implemented AJAX for real-time updates and optimized database queries"
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
        challenges: "Balancing modern aesthetics with professional credibility",
        solutions: "Developed multiple concepts and conducted stakeholder feedback sessions"
      }
    },
    {
      id: 4,
      title: "Mobile Banking App UI",
      category: "uiux",
      description: "User interface design for a mobile banking application focused on simplicity, security, and accessibility. Designed with user-centered approach and extensive usability testing.",
      image: "img/projects/banking-app.jpg",
      technologies: ["Figma", "Mobile Design", "User Testing", "Accessibility"],
      liveUrl: "https://example.com/demo4",
      codeUrl: null,
      details: {
        duration: "10 weeks",
        role: "Mobile UI Designer",
        challenges: "Balancing security requirements with user experience",
        solutions: "Implemented biometric authentication and progressive onboarding"
      }
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      category: "webdev",
      description: "Responsive personal portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance and SEO.",
      image: "img/projects/portfolio-website.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
      liveUrl: "https://example.com/demo5",
      codeUrl: null, // No GitHub repository yet
      details: {
        duration: "3 weeks",
        role: "Front-End Developer",
        challenges: "Creating smooth animations while maintaining performance",
        solutions: "Used CSS animations and optimized assets for fast loading"
      }
    },
    {
      id: 6,
      title: "Social Media Automation Workflow",
      category: "ai",
      description: "Automated workflow using n8n for social media management, content scheduling, and lead generation. Integrates multiple platforms and APIs for seamless operation.",
      image: "img/projects/automation-workflow.jpg",
      technologies: ["n8n", "API Integration", "Webhooks", "Automation", "Social Media APIs"],
      liveUrl: "https://example.com/demo6",
      codeUrl: null,
      details: {
        duration: "2 weeks",
        role: "Automation Specialist",
        challenges: "Handling rate limits and API changes across platforms",
        solutions: "Implemented retry mechanisms and modular workflow design"
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
        challenges: "Creating a unique identity in a saturated market",
        solutions: "Focused on local culture and artisanal coffee experience"
      }
    },
    {
      id: 8,
      title: "Task Management Web App",
      category: "uiux",
      description: "Clean and intuitive task management application design with team collaboration features. Emphasis on productivity and user workflow optimization.",
      image: "img/projects/task-management.jpg",
      technologies: ["Figma", "User Experience", "Wireframing", "Prototyping"],
      liveUrl: "https://example.com/demo8",
      codeUrl: null,
      details: {
        duration: "6 weeks",
        role: "UX/UI Designer",
        challenges: "Organizing complex information without overwhelming users",
        solutions: "Implemented card-based layout with smart categorization"
      }
    },
    {
      id: 9,
      title: "Customer Support Chatbot",
      category: "ai",
      description: "AI-powered customer support chatbot with natural language processing. Integrated with existing CRM system for seamless customer service automation.",
      image: "img/projects/chatbot.jpg",
      technologies: ["Natural Language Processing", "API Integration", "Customer Service Automation"],
      liveUrl: "https://example.com/demo9",
      codeUrl: null,
      details: {
        duration: "5 weeks",
        role: "AI Integration Specialist",
        challenges: "Training the bot to handle diverse customer queries",
        solutions: "Created extensive training data and fallback mechanisms"
      }
    },
    {
      id: 10,
      title: "E-Learning Platform",
      category: "webdev",
      description: "Comprehensive e-learning platform with video streaming, progress tracking, and interactive quizzes. Built for educational institutions and online course creators.",
      image: "img/projects/elearning.jpg",
      technologies: ["PHP", "MySQL", "Video Streaming", "Progress Tracking", "Interactive Elements"],
      liveUrl: "https://example.com/demo10",
      codeUrl: null, // No GitHub repository yet
      details: {
        duration: "12 weeks",
        role: "Full-Stack Developer",
        challenges: "Handling video content delivery and user progress synchronization",
        solutions: "Implemented CDN for video delivery and progressive loading"
      }
    }
  ]
};

// State management
let currentFilter = 'all';
let isInitialized = false;
let showingAll = false;
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
          <button class="project-btn btn-primary" onclick="openProjectModal(${project.id})" aria-label="View project details">
            <i class="bi bi-eye"></i>
            View Details
          </button>
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
  });

  // Project card click handling
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card && !e.target.closest('.project-actions')) {
      const projectId = parseInt(card.dataset.projectId);
      if (!isNaN(projectId)) {
        openProjectModal(projectId);
      }
    }
  });
}

// Enhanced modal functionality
function openProjectModal(projectId) {
  const { projectModal, modalBody } = getDOMElements();
  const project = projectsData.projects.find(p => p.id === projectId);
  
  if (!project || !projectModal || !modalBody) {
    console.error('Unable to open modal: missing project or DOM elements');
    return;
  }

  safeExecute(() => {
    const imageHtml = project.image ? `
      <img 
        src="${project.image}" 
        alt="${project.title}" 
        style="width: 100%; max-width: 600px; height: auto; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: var(--shadow);"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
      >
      <div style="display: none; height: 300px; background: var(--bg-higher); border-radius: 12px; align-items: center; justify-content: center; color: var(--text-muted); margin-bottom: 1.5rem;">
        <div style="text-align: center;">
          <i class="bi bi-image" style="font-size: 4rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
          <div style="font-size: 1.1rem;">Project Image</div>
        </div>
      </div>
    ` : `
      <div style="height: 300px; background: var(--bg-higher); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); margin-bottom: 1.5rem;">
        <div style="text-align: center;">
          <i class="bi bi-image" style="font-size: 4rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
          <div style="font-size: 1.1rem;">Project Image</div>
        </div>
      </div>
    `;

    const liveButton = project.liveUrl && isValidUrl(project.liveUrl) ? `
      <a href="${project.liveUrl}" class="project-btn btn-primary" target="_blank" rel="noopener noreferrer">
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
      <div style="text-align: center;">
        ${imageHtml}
        <span class="project-category" style="margin-bottom: 1rem;">${getCategoryName(project.category)}</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: var(--text-color); margin-bottom: 1rem;">${escapeHtml(project.title)}</h2>
        <div style="color: var(--text-light); line-height: 1.7; margin-bottom: 1.5rem; text-align: left;">
          <p>${escapeHtml(project.description)}</p>
          ${project.details ? createProjectDetails(project.details) : ''}
        </div>
        <div class="project-tech" style="justify-content: center; margin-bottom: 2rem;">
          ${project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
        </div>
        <div class="project-actions" style="justify-content: center;">
          ${liveButton}
          ${codeButton}
        </div>
      </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalClose.focus();
  });
}

function createProjectDetails(details) {
  if (!details) return '';
  
  return `
    <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-higher); border-radius: 8px;">
      <h4 style="color: var(--text-color); margin-bottom: 0.8rem;">Project Details</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; font-size: 0.9rem;">
        ${details.duration ? `<div><strong>Duration:</strong> ${escapeHtml(details.duration)}</div>` : ''}
        ${details.role ? `<div><strong>Role:</strong> ${escapeHtml(details.role)}</div>` : ''}
      </div>
      ${details.challenges ? `<div style="margin-top: 1rem;"><strong>Challenges:</strong> ${escapeHtml(details.challenges)}</div>` : ''}
      ${details.solutions ? `<div style="margin-top: 0.5rem;"><strong>Solutions:</strong> ${escapeHtml(details.solutions)}</div>` : ''}
    </div>
  `;
}

// Close project modal
function closeProjectModal() {
  const { projectModal } = getDOMElements();
  if (!projectModal) return;
  
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
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

console.log('Projects module loaded successfully');