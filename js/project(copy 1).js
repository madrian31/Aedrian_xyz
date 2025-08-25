// Theme Toggle Functionality
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  // Theme state storage (in-memory for Claude artifacts compatibility)
  window.themeState = window.themeState || 'light';
  
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    if (themeIcon) themeIcon.className = 'fas fa-moon';
    window.themeState = 'light';
    // localStorage.setItem('theme', 'light'); // Uncomment for real implementation
  } else {
    body.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
    window.themeState = 'dark';
    // localStorage.setItem('theme', 'dark'); // Uncomment for real implementation
  }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
  // For real implementation, uncomment these lines:
  // const savedTheme = localStorage.getItem('theme');
  // if (savedTheme === 'dark') {
  //   document.body.setAttribute('data-theme', 'dark');
  //   const themeIcon = document.getElementById('theme-icon');
  //   if (themeIcon) themeIcon.className = 'fas fa-sun';
  // }
});

// Namespaced Image Gallery - Complete Implementation with Multiple Categories
const ImageGalleryApp = {
  // Configuration
  config: {
    containerSelector: '.img-gallery-container',
    modalId: 'imgGalleryModal',
    zIndex: 10000,
    animationDelay: 50,
    swipeThreshold: 50
  },

  // Separate logos data collection
  logosData: [
    {
      title: "Luna Logo",
      description: "Logo design for Luna e-wallet application with modern minimalist approach",
      image: "img/projects/luna/luna.jpg",
      project: "Luna"
    },
    {
      title: "Hiraya Logo", 
      description: "Creative logo design for Hiraya project featuring cultural elements",
      image: "img/projects/Hiraya/hiraya logo.png",
      project: "Hiraya"
    },
    {
      title: "Invictus Logo",
      description: "Professional logo design for Invictus project with bold typography", 
      image: "img/projects/invictus.png",
      project: "Invictus"
    },
    {
      title: "Mellowdy Logo",
      description: "Playful logo design for Mellowdy sound learning application targeting preschool children",
      image: "img/projects/mellowdy/melolog2.png",
      project: "Mellowdy"
    }
  ],

  // Main gallery data with multiple categories support
  galleryData: [
    {
      title: "Luna",
      category: ["UI/UX Design"], 
      description: "Designed a mobile e-wallet application with integrated expense tracking features. Created wireframes, high-fidelity UI designs, and interactive prototypes using Figma. Developed user flows based on user research and feedback to ensure optimal user experience.",
      images: [
        "img/projects/luna/luna.jpg",
        "img/projects/luna/Cards Dashboard.png",
        "img/projects/luna/Login Screen.png",
        "img/projects/luna/Expenses Tracker.png",
        "img/projects/luna/Screenshot 2025-08-24 203759.png",
      ],
      hasLogo: true,
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      year: "2024"
    },
    {
      title: "Mellowdy",
      category: ["UI/UX Design", "Software Development"],
      description: "An intuitive UI/UX design crafted for Mellowdy, a SoundLearning tool that enhances digital learning for Superior Smart Educator Academe of Carmona Inc. Developed a user-friendly UI for a preschool-targeted sound learning application using Figma and conducted functional and usability testing, identifying bugs and improving user experience.",
      images: [
        "img/projects/mellowdy/melolog2.png",
        "img/projects/mellowdy/Custom Size – 1.png",
        "img/projects/mellowdy/Web 1366 – 1.png",
        "img/projects/mellowdy/Web 1366 – 2.png",
        "img/projects/mellowdy/Web 1366 – 3.png",
        "img/projects/mellowdy/Web 1366 – 4.png", 
      ],
      hasLogo: true,
      technologies: ["Figma", "React", "JavaScript", "Testing"],
      year: "2024"
    },
    {
      title: "Aurelia",
      category: ["UI/UX Design"],
      description: "A modern UI/UX design for E-Wallet application featuring contemporary design principles and user-centered approach. Focus on accessibility, usability, and visual appeal with seamless user interactions.",
      images: [
        "img/projects/Aurelia/Vector (3).png", 
        "img/projects/Aurelia/home.png", 
        "img/projects/Aurelia/lockscreen.png", 
        "img/projects/Aurelia/savings.png", 
        "img/projects/Aurelia/wallet.png", 
      ],
      technologies: ["Figma", "Design Systems", "User Research"],
      year: "2024"
    },
    {
      title: "Student Research Center",
      category: ["Networks", "System Administration"],
      description: "Comprehensive network infrastructure project involving installation and configuration of computers and networking hardware for a student research facility. Designed and implemented LAN setup across multiple rooms and buildings to ensure stable connectivity, security, and scalability.",
      images: [
        "img/projects/StudentCenter/src.jpg", 
        "img/projects/StudentCenter/src1.png", 
        "img/projects/StudentCenter/src2.png", 
        "img/projects/StudentCenter/src3.jpg", 
        "img/projects/StudentCenter/src topo.jpg", 
      ],
      technologies: ["Cisco", "Network Topology", "LAN Setup", "Hardware Configuration"],
      year: "2024"
    },
  ],

  // Logo management methods
  getLogosData() {
    return this.logosData;
  },

  getLogoByProject(projectName) {
    return this.logosData.find(logo => 
      logo.project.toLowerCase() === projectName.toLowerCase()
    );
  },

  getAllLogos() {
    return this.logosData.map(logo => ({
      title: logo.title,
      category: ["Logo"],
      description: logo.description,
      images: [logo.image],
      year: "2024"
    }));
  },

  // Data combination and filtering methods
  getCombinedData(includeLogos = false) {
    let combinedData = [...this.galleryData];
    
    if (includeLogos) {
      const logos = this.getAllLogos();
      const existingTitles = this.galleryData.map(item => item.title.toLowerCase());
      
      // Only add logos that don't have corresponding projects in galleryData
      const uniqueLogos = logos.filter(logo => {
        const logoProjectName = logo.title.replace(' Logo', '').toLowerCase();
        return !existingTitles.includes(logoProjectName);
      });
      
      combinedData = [...combinedData, ...uniqueLogos];
    }
    
    return combinedData;
  },

  // Category management methods
  getProjectsByCategory(category) {
    return this.galleryData.filter(item => {
      if (Array.isArray(item.category)) {
        return item.category.some(cat => 
          cat.toLowerCase() === category.toLowerCase()
        );
      } else {
        return item.category.toLowerCase() === category.toLowerCase();
      }
    });
  },

  getProjectByTitle(title) {
    const combinedData = this.getCombinedData(this.includeLogos);
    return combinedData.find(item => 
      item.title.toLowerCase() === title.toLowerCase()
    );
  },

  getAllCategories() {
    const categories = new Set();
    
    // Get categories from gallery data
    this.galleryData.forEach(item => {
      if (Array.isArray(item.category)) {
        item.category.forEach(cat => categories.add(cat));
      } else {
        categories.add(item.category);
      }
    });
    
    // Add Logo category if including logos
    if (this.includeLogos) {
      categories.add("Logo");
    }
    
    return [...categories].sort();
  },

  // Search functionality with enhanced matching
  searchProjects(query) {
    if (!query || query.trim() === '') {
      return this.getCombinedData(this.includeLogos);
    }
    
    const lowercaseQuery = query.toLowerCase().trim();
    const combinedData = this.getCombinedData(this.includeLogos);
    
    return combinedData.filter(item => {
      // Title matching
      const titleMatch = item.title.toLowerCase().includes(lowercaseQuery);
      
      // Description matching
      const descriptionMatch = item.description.toLowerCase().includes(lowercaseQuery);
      
      // Category matching
      let categoryMatch = false;
      if (Array.isArray(item.category)) {
        categoryMatch = item.category.some(cat => 
          cat.toLowerCase().includes(lowercaseQuery)
        );
      } else {
        categoryMatch = item.category.toLowerCase().includes(lowercaseQuery);
      }
      
      // Technology matching (if available)
      let techMatch = false;
      if (item.technologies && Array.isArray(item.technologies)) {
        techMatch = item.technologies.some(tech => 
          tech.toLowerCase().includes(lowercaseQuery)
        );
      }
      
      // Year matching (if available)
      let yearMatch = false;
      if (item.year) {
        yearMatch = item.year.toString().includes(lowercaseQuery);
      }
      
      return titleMatch || descriptionMatch || categoryMatch || techMatch || yearMatch;
    });
  },

  // Application state
  currentGalleryIndex: 0,
  currentImageIndex: 0,
  includeLogos: false,
  isInitialized: false,

  // DOM Elements cache
  elements: {},

  // Main initialization method
  init(includeLogos = true) {
    if (this.isInitialized) {
      console.warn('ImageGalleryApp already initialized');
      return;
    }
    
    this.includeLogos = includeLogos;
    
    try {
      this.cacheElements();
      this.generateFilters();
      this.generateGallery();
      this.bindEvents();
      this.setupSearch();
      this.isInitialized = true;
      
      console.log('ImageGalleryApp initialized successfully');
    } catch (error) {
      console.error('Failed to initialize ImageGalleryApp:', error);
    }
  },

  // Cache DOM elements for performance
  cacheElements() {
    this.elements = {
      categoryFilters: document.getElementById("imgGalleryFilters"),
      gallery: document.getElementById("imgGalleryGrid"),
      modal: document.getElementById("imgGalleryModal"),
      modalTitle: document.getElementById("imgGalleryModalTitle"),
      modalDescription: document.getElementById("imgGalleryModalDescription"),
      carouselImage: document.getElementById("imgGalleryCarouselImage"),
      carouselDots: document.getElementById("imgGalleryCarouselDots"),
      closeBtn: document.querySelector(".img-gallery-close"),
      searchInput: document.getElementById("imgGallerySearch"),
      prevBtn: document.querySelector(".img-gallery-prev"),
      nextBtn: document.querySelector(".img-gallery-next")
    };
    
    // Validate required elements
    const requiredElements = ['gallery'];
    const missingElements = requiredElements.filter(key => !this.elements[key]);
    
    if (missingElements.length > 0) {
      console.warn('Missing required elements:', missingElements);
    }
  },

  // Generate category filter buttons
  generateFilters() {
    if (!this.elements.categoryFilters) {
      console.warn('Category filters container not found');
      return;
    }
    
    const categories = this.getAllCategories();
    
    // Setup "All" button if it exists
    const allButton = this.elements.categoryFilters.querySelector('[data-category="all"]');
    if (allButton) {
      allButton.addEventListener("click", () => this.filterGallery("all"));
      allButton.classList.add("img-gallery-active"); // Set as default active
    }
    
    // Generate category buttons
    categories.forEach(category => {
      // Skip if button already exists
      if (this.elements.categoryFilters.querySelector(`[data-category="${category}"]`)) {
        return;
      }
      
      const button = document.createElement("button");
      button.className = "img-gallery-filter-btn";
      button.dataset.category = category;
      
      // Category icons mapping
      const icons = {
        'UI/UX Design': 'fas fa-palette',
        'Web Development': 'fas fa-code',
        'Web Applications': 'fas fa-globe',
        'Software Development': 'fas fa-laptop-code',
        'Mobile Development': 'fas fa-mobile-alt',
        'Logo': 'fas fa-trademark',
        'Branding': 'fas fa-copyright',
        'Networks': 'fas fa-network-wired',
        'System Administration': 'fas fa-server',
        'AI & Automation': 'fas fa-robot',
        'Data Analysis': 'fas fa-chart-bar',
        'Database': 'fas fa-database',
        'API Development': 'fas fa-plug'
      };
      
      const icon = icons[category] || 'fas fa-folder';
      button.innerHTML = `<i class="${icon}" style="margin-right: 5px;"></i>${category}`;
      button.addEventListener("click", () => this.filterGallery(category));
      this.elements.categoryFilters.appendChild(button);
    });
  },

  // Generate gallery grid items
  generateGallery() {
    if (!this.elements.gallery) {
      console.error('Gallery container not found');
      return;
    }
    
    // Clear existing gallery
    this.elements.gallery.innerHTML = "";
    
    const dataToUse = this.getCombinedData(this.includeLogos);
    
    if (dataToUse.length === 0) {
      this.elements.gallery.innerHTML = '<p class="no-items">No projects found.</p>';
      return;
    }
    
    dataToUse.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "img-gallery-item";
      
      // Handle multiple categories for data attributes
      if (Array.isArray(item.category)) {
        div.dataset.category = item.category[0]; // Primary category
        div.dataset.categories = item.category.join(','); // All categories
      } else {
        div.dataset.category = item.category;
        div.dataset.categories = item.category;
      }
      
      // Additional data attributes for searching
      div.dataset.title = item.title.toLowerCase();
      div.dataset.description = item.description.toLowerCase();
      if (item.technologies) {
        div.dataset.technologies = item.technologies.join(',').toLowerCase();
      }
      if (item.year) {
        div.dataset.year = item.year.toString();
      }
      
      div.addEventListener("click", () => this.openModal(index));
      
      // Create image element
      const img = document.createElement("img");
      img.src = item.images[0];
      img.alt = item.title;
      img.loading = "lazy";
      img.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
      };
      
      // Create overlay
      const overlay = document.createElement("div");
      overlay.className = "img-gallery-overlay";
      
      // Project title
      const title = document.createElement("h3");
      title.textContent = item.title;
      
      // Categories display
      const category = document.createElement("p");
      if (Array.isArray(item.category)) {
        category.textContent = item.category.join(' • ');
      } else {
        category.textContent = item.category;
      }
      category.className = "img-gallery-category";
      
      // Additional info (year, tech count)
      const info = document.createElement("div");
      info.className = "img-gallery-info";
      
      if (item.year) {
        const yearSpan = document.createElement("span");
        yearSpan.textContent = item.year;
        yearSpan.className = "img-gallery-year";
        info.appendChild(yearSpan);
      }
      
      if (item.images && item.images.length > 1) {
        const imageCount = document.createElement("span");
        imageCount.innerHTML = `<i class="fas fa-images"></i> ${item.images.length}`;
        imageCount.className = "img-gallery-count";
        info.appendChild(imageCount);
      }
      
      // Append elements
      overlay.appendChild(title);
      overlay.appendChild(category);
      if (info.children.length > 0) {
        overlay.appendChild(info);
      }
      
      div.appendChild(img);
      div.appendChild(overlay);
      
      this.elements.gallery.appendChild(div);
    });
  },

  // Setup search functionality
  setupSearch() {
    if (!this.elements.searchInput) {
      console.warn('Search input not found');
      return;
    }
    
    let searchTimeout;
    
    this.elements.searchInput.addEventListener("input", (e) => {
      // Debounce search for better performance
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.searchGallery(e.target.value);
      }, 300);
    });
    
    // Clear search on escape key
    this.elements.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.target.value = "";
        this.searchGallery("");
      }
    });
  },

  // Enhanced search with visual feedback
  searchGallery(query) {
    const items = this.elements.gallery.querySelectorAll(".img-gallery-item");
    const lowercaseQuery = query.toLowerCase().trim();
    
    let visibleCount = 0;
    
    items.forEach((item, index) => {
      const title = item.dataset.title || "";
      const description = item.dataset.description || "";
      const categories = item.dataset.categories || "";
      const technologies = item.dataset.technologies || "";
      const year = item.dataset.year || "";
      
      const matches = !lowercaseQuery || 
        title.includes(lowercaseQuery) || 
        description.includes(lowercaseQuery) || 
        categories.includes(lowercaseQuery) ||
        technologies.includes(lowercaseQuery) ||
        year.includes(lowercaseQuery);
      
      if (matches) {
        item.classList.remove("img-gallery-hidden");
        visibleCount++;
        
        // Staggered reveal animation
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 50);
      } else {
        item.classList.add("img-gallery-hidden");
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
      }
    });
    
    // Show/hide no results message
    this.updateNoResultsMessage(visibleCount, query);
    
    // Reset category filter visual state if searching
    if (lowercaseQuery) {
      this.elements.categoryFilters?.querySelectorAll(".img-gallery-filter-btn").forEach(btn => {
        btn.classList.remove("img-gallery-active");
      });
    }
  },

  // Update no results message
  updateNoResultsMessage(visibleCount, query) {
    const existingMessage = this.elements.gallery.querySelector('.no-results');
    
    if (visibleCount === 0 && query.trim()) {
      if (!existingMessage) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #666;">
            <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
            <h3>No projects found</h3>
            <p>Try adjusting your search terms or browse by category</p>
          </div>
        `;
        this.elements.gallery.appendChild(noResults);
      }
    } else if (existingMessage) {
      existingMessage.remove();
    }
  },

  // Filter gallery by category with enhanced animations
  filterGallery(category) {
    // Clear search
    if (this.elements.searchInput) {
      this.elements.searchInput.value = "";
    }
    
    // Update active button state
    this.elements.categoryFilters?.querySelectorAll(".img-gallery-filter-btn").forEach(btn => {
      btn.classList.remove("img-gallery-active");
    });
    
    const activeBtn = this.elements.categoryFilters?.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
      activeBtn.classList.add("img-gallery-active");
    }
    
    // Filter gallery items with staggered animation
    const items = this.elements.gallery.querySelectorAll(".img-gallery-item");
    let visibleCount = 0;
    
    items.forEach((item, index) => {
      const itemCategories = item.dataset.categories ? 
        item.dataset.categories.split(',').map(cat => cat.trim()) : 
        [item.dataset.category];
      
      const shouldShow = category === "all" || itemCategories.includes(category);
      
      setTimeout(() => {
        if (shouldShow) {
          item.classList.remove("img-gallery-hidden");
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
          visibleCount++;
        } else {
          item.classList.add("img-gallery-hidden");
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
        }
      }, index * this.config.animationDelay);
    });
    
    // Remove no results message when filtering
    setTimeout(() => {
      const noResults = this.elements.gallery.querySelector('.no-results');
      if (noResults) noResults.remove();
    }, items.length * this.config.animationDelay);
  },

  // Open modal with project details
  openModal(galleryIndex) {
    this.currentGalleryIndex = galleryIndex;
    this.currentImageIndex = 0;
    
    const dataToUse = this.getCombinedData(this.includeLogos);
    const item = dataToUse[galleryIndex];
    
    if (!item) {
      console.error('Project not found at index:', galleryIndex);
      return;
    }
    
    // Update modal content
    if (this.elements.modalTitle) {
      this.elements.modalTitle.textContent = item.title;
    }
    
    if (this.elements.modalDescription) {
      let description = item.description;
      
      // Add additional info if available
      if (item.technologies && item.technologies.length > 0) {
        description += `\n\nTechnologies used: ${item.technologies.join(', ')}`;
      }
      
      if (item.year) {
        description += `\n\nYear: ${item.year}`;
      }
      
      this.elements.modalDescription.textContent = description;
    }
    
    // Setup image carousel
    this.setupCarousel(item.images);
    
    // Show modal
    if (this.elements.modal) {
      this.elements.modal.style.display = "block";
      document.body.style.overflow = "hidden";
      
      // Add fade in animation
      requestAnimationFrame(() => {
        this.elements.modal.classList.add("img-gallery-modal-open");
      });
    }
  },

  // Setup image carousel in modal
  setupCarousel(images) {
    if (!images || images.length === 0) {
      console.error('No images provided for carousel');
      return;
    }
    
    // Setup navigation dots
    if (this.elements.carouselDots) {
      this.elements.carouselDots.innerHTML = "";
      
      if (images.length > 1) {
        images.forEach((_, index) => {
          const dot = document.createElement("span");
          dot.className = "img-gallery-dot";
          dot.setAttribute('aria-label', `Go to image ${index + 1}`);
          if (index === 0) dot.classList.add("img-gallery-active");
          dot.addEventListener("click", () => this.showImage(index));
          this.elements.carouselDots.appendChild(dot);
        });
      }
    }
    
    // Show/hide navigation buttons
    const showNavButtons = images.length > 1;
    if (this.elements.prevBtn) {
      this.elements.prevBtn.style.display = showNavButtons ? "block" : "none";
    }
    if (this.elements.nextBtn) {
      this.elements.nextBtn.style.display = showNavButtons ? "block" : "none";
    }
    
    // Show first image
    this.showImage(0);
  },

  // Show specific image in carousel
  showImage(imageIndex) {
    const dataToUse = this.getCombinedData(this.includeLogos);
    const item = dataToUse[this.currentGalleryIndex];
    
    if (!item || !item.images || imageIndex < 0 || imageIndex >= item.images.length) {
      console.error('Invalid image index or missing images');
      return;
    }
    
    this.currentImageIndex = imageIndex;
    
    if (this.elements.carouselImage) {
      // Add loading state
      this.elements.carouselImage.style.opacity = "0.5";
      this.elements.carouselImage.style.transform = "scale(0.95)";
      
      // Preload image
      const img = new Image();
      img.onload = () => {
        this.elements.carouselImage.src = img.src;
        this.elements.carouselImage.alt = `${item.title} - Image ${imageIndex + 1}`;
        
        // Restore opacity and scale
        this.elements.carouselImage.style.opacity = "1";
        this.elements.carouselImage.style.transform = "scale(1)";
      };
      
      img.onerror = () => {
        console.error('Failed to load image:', item.images[imageIndex]);
        this.elements.carouselImage.style.opacity = "1";
        this.elements.carouselImage.style.transform = "scale(1)";
      };
      
      img.src = item.images[imageIndex];
    }
    
    // Update active dot
    if (this.elements.carouselDots) {
      this.elements.carouselDots.querySelectorAll(".img-gallery-dot").forEach((dot, index) => {
        dot.classList.toggle("img-gallery-active", index === imageIndex);
      });
    }
  },

  // Navigate to previous image
  previousImage() {
    const dataToUse = this.getCombinedData(this.includeLogos);
    const item = dataToUse[this.currentGalleryIndex];
    
    if (!item || !item.images) return;
    
    const totalImages = item.images.length;
    const prevIndex = (this.currentImageIndex - 1 + totalImages) % totalImages;
    this.showImage(prevIndex);
  },

  // Navigate to next image
  nextImage() {
    const dataToUse = this.getCombinedData(this.includeLogos);
    const item = dataToUse[this.currentGalleryIndex];
    
    if (!item || !item.images) return;
    
    const totalImages = item.images.length;
    const nextIndex = (this.currentImageIndex + 1) % totalImages;
    this.showImage(nextIndex);
  },

  // Close modal
  closeModal() {
    if (this.elements.modal) {
      this.elements.modal.classList.remove("img-gallery-modal-open");
      
      setTimeout(() => {
        this.elements.modal.style.display = "none";
        document.body.style.overflow = "auto";
      }, 300);
    }
  },

  // Bind all event listeners
  bindEvents() {
    // Modal close button
    if (this.elements.closeBtn) {
      this.elements.closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.closeModal();
      });
    }

    // Navigation buttons
    if (this.elements.prevBtn) {
      this.elements.prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.previousImage();
      });
    }
    
    if (this.elements.nextBtn) {
      this.elements.nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.nextImage();
      });
    }

    // Click outside modal to close
    if (this.elements.modal) {
      this.elements.modal.addEventListener("click", (event) => {
        if (event.target === this.elements.modal) {
          this.closeModal();
        }
      });
    }
