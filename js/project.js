// Theme Toggle Functionality
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeIcon.className = 'fas fa-moon';
    // Note: localStorage not available in Claude artifacts
    // localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fas fa-sun';
    // localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme - Modified for Claude artifacts
document.addEventListener('DOMContentLoaded', function() {
  // Note: localStorage not available in Claude artifacts
  // const savedTheme = localStorage.getItem('theme');
  // if (savedTheme === 'dark') {
  //   document.body.setAttribute('data-theme', 'dark');
  //   document.getElementById('theme-icon').className = 'fas fa-sun';
  // }
});

// Namespaced Image Gallery - Object-based approach with Multiple Categories Support
const ImageGalleryApp = {
  // Configuration
  config: {
    containerSelector: '.img-gallery-container',
    modalId: 'imgGalleryModal',
    zIndex: 10000
  },

  // Separate logos data - pwede mo i-call separately
  logosData: [
    {
      title: "Luna Logo",
      description: "Logo design for Luna e-wallet application",
      image: "img/projects/luna/luna.jpg",
      project: "Luna"
    },
    {
      title: "Hiraya Logo", 
      description: "Logo design for Hiraya project",
      image: "img/projects/Hiraya/hiraya logo.png",
      project: "Hiraya"
    },
    {
      title: "Invictus Logo",
      description: "Logo design for Invictus project", 
      image: "img/projects/invictus.png",
      project: "Invictus"
    },
    {
      title: "Mellowdy Logo",
      description: "Logo design for Mellowdy sound learning application",
      image: "img/projects/mellowdy/melolog2.png",
      project: "Mellowdy"
    }
  ],

  // Main gallery data - with multiple categories support
  galleryData: [
    {
      title: "Luna",
      category: ["UI/UX Design"], 
      description: "Designed a mobile e-wallet application with integrated expense tracking features, Created wireframes, high-fidelity UI designs, and interactive prototypes using Figma and Developed user flows based on user research and feedback",
      images: [
        "img/projects/luna/luna.jpg",
        "img/projects/luna/Cards Dashboard.png",
        "img/projects/luna/Login Screen.png",
        "img/projects/luna/Expenses Tracker.png",
        "img/projects/luna/Screenshot 2025-08-24 203759.png",
      ],
      hasLogo: true
    },
    {
      title: "Mellowdy",
      category: ["UI/UX Design", "Software Development"],
      description: "An intuitive UI/UX design crafted for Mellowdy, a SoundLearning tool that enhances digital learning for Superior Smart Educator Academe of Carmona Inc. Developed a user-friendly UI for a preschool-targeted sound learning application using Figma and Conducted functional and usability testing, identifying bugs and improving user experience",
      images: [
        "img/projects/mellowdy/melolog2.png",
        "img/projects/mellowdy/Custom Size – 1.png",
        "img/projects/mellowdy/Web 1366 – 1.png",
        "img/projects/mellowdy/Web 1366 – 2.png",
        "img/projects/mellowdy/Web 1366 – 3.png",
        "img/projects/mellowdy/Web 1366 – 4.png", 
      ],
      hasLogo: true
    },
    {
      title: "Aurelia",
      category: ["UI/UX Design"],
      description: "An UI/UX for E-Wallet App with modern design principles and user-centered approach",
      images: [
        "img/projects/Aurelia/Vector (3).png", 
        "img/projects/Aurelia/home.png", 
        "img/projects/Aurelia/lockscreen.png", 
        "img/projects/Aurelia/savings.png", 
        "img/projects/Aurelia/wallet.png", 
      ]
    },
    {
      title: "Student Research Center",
      category: ["Networks"],
      description: "Installed and configured computers and networking hardware for a student research facility. Designed and implemented LAN setup across multiple rooms/buildings to ensure stable connectivity.",
      images: [
        "img/projects/StudentCenter/src.jpg", 
        "img/projects/StudentCenter/src1.png", 
        "img/projects/StudentCenter/src2.png", 
        "img/projects/StudentCenter/src3.jpg", 
        "img/projects/StudentCenter/src topo.jpg", 
      ]
    },
  ],

  // Helper methods para sa logos
  getLogosData() {
    return this.logosData;
  },

  getLogoByProject(projectName) {
    return this.logosData.find(logo => logo.project === projectName);
  },

  getAllLogos() {
    return this.logosData.map(logo => ({
      title: logo.title,
      category: ["Logo"],
      description: logo.description,
      images: [logo.image]
    }));
  },

  // Method to combine gallery data with logos if needed - removes duplicates
  getCombinedData(includeLogos = false) {
    if (includeLogos) {
      const logos = this.getAllLogos();
      const existingTitles = this.galleryData.map(item => item.title.toLowerCase());
      
      // Only add logos that don't have corresponding projects in galleryData
      const uniqueLogos = logos.filter(logo => {
        const logoProjectName = logo.title.replace(' Logo', '').toLowerCase();
        return !existingTitles.includes(logoProjectName);
      });
      
      return [...this.galleryData, ...uniqueLogos];
    }
    return this.galleryData;
  },

  // Updated methods to handle multiple categories
  getProjectsByCategory(category) {
    return this.galleryData.filter(item => {
      if (Array.isArray(item.category)) {
        return item.category.includes(category);
      } else {
        return item.category === category;
      }
    });
  },

  getProjectByTitle(title) {
    return this.galleryData.find(item => item.title === title);
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
    
    return [...categories];
  },

  // Search functionality - updated for multiple categories
  searchProjects(query) {
    const lowercaseQuery = query.toLowerCase();
    return this.galleryData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowercaseQuery);
      const descriptionMatch = item.description.toLowerCase().includes(lowercaseQuery);
      
      let categoryMatch = false;
      if (Array.isArray(item.category)) {
        categoryMatch = item.category.some(cat => cat.toLowerCase().includes(lowercaseQuery));
      } else {
        categoryMatch = item.category.toLowerCase().includes(lowercaseQuery);
      }
      
      return titleMatch || descriptionMatch || categoryMatch;
    });
  },

  // State
  currentGalleryIndex: 0,
  currentImageIndex: 0,
  includeLogos: false,

  // DOM Elements
  elements: {},

  // Initialize
  init(includeLogos = true) {
    this.includeLogos = includeLogos;
    this.cacheElements();
    this.generateFilters();
    this.generateGallery();
    this.bindEvents();
    this.setupSearch();
  },

  // Cache DOM elements
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
  },

  // Generate category filters - updated for multiple categories
  generateFilters() {
    const categories = this.getAllCategories();
    
    const allButton = this.elements.categoryFilters.querySelector('[data-category="all"]');
    if (allButton) {
      allButton.addEventListener("click", () => this.filterGallery("all"));
    }
      
    categories.forEach(category => {
      // Skip if button already exists
      if (this.elements.categoryFilters.querySelector(`[data-category="${category}"]`)) {
        return;
      }
      
      const button = document.createElement("button");
      button.className = "img-gallery-filter-btn";
      button.dataset.category = category;
      
      // Add icons for different categories
      const icons = {
        'UI/UX Design': 'fas fa-palette',
        'Web Development': 'fas fa-code',
        'Web Applications': 'fas fa-globe',
        'Software Development': 'fas fa-laptop-code',
        'Logo': 'fas fa-trademark',
        'Networks': 'fas fa-network-wired',
        'AI & Automation': 'fas fa-robot'
      };
      
      const icon = icons[category] || 'fas fa-folder';
      button.innerHTML = `<i class="${icon}" style="margin-right: 5px;"></i>${category}`;
      button.addEventListener("click", () => this.filterGallery(category));
      this.elements.categoryFilters.appendChild(button);
    });
  },

  // Generate gallery items - updated for multiple categories
  generateGallery() {
    // Clear existing gallery
    if (this.elements.gallery) {
      this.elements.gallery.innerHTML = "";
    }
    
    const dataToUse = this.getCombinedData(this.includeLogos);
    
    dataToUse.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "img-gallery-item";
      
      // Handle multiple categories
      if (Array.isArray(item.category)) {
        div.dataset.category = item.category[0]; // Primary category for backward compatibility
        div.dataset.categories = item.category.join(','); // All categories
      } else {
        div.dataset.category = item.category;
        div.dataset.categories = item.category;
      }
      
      div.dataset.title = item.title.toLowerCase();
      div.dataset.description = item.description.toLowerCase();
      div.addEventListener("click", () => this.openModal(index));
      
      const img = document.createElement("img");
      img.src = item.images[0];
      img.alt = item.title;
      img.loading = "lazy";
      img.onerror = function() {
        this.src = 'img/placeholder.jpg'; // Fallback image
      };
      
      const overlay = document.createElement("div");
      overlay.className = "img-gallery-overlay";
      
      const title = document.createElement("h3");
      title.textContent = item.title;
      
      const category = document.createElement("p");
      // Display all categories with separator
      if (Array.isArray(item.category)) {
        category.textContent = item.category.join(' • ');
      } else {
        category.textContent = item.category;
      }
      category.className = "img-gallery-category";
      
      overlay.appendChild(title);
      overlay.appendChild(category);
      
      div.appendChild(img);
      div.appendChild(overlay);
      
      if (this.elements.gallery) {
        this.elements.gallery.appendChild(div);
      }
    });
  },

  // Setup search functionality - updated for multiple categories
  setupSearch() {
    if (this.elements.searchInput) {
      this.elements.searchInput.addEventListener("input", (e) => {
        this.searchGallery(e.target.value);
      });
    }
  },

  // Search gallery - updated for multiple categories
  searchGallery(query) {
    const items = this.elements.gallery.querySelectorAll(".img-gallery-item");
    const lowercaseQuery = query.toLowerCase();
    
    items.forEach(item => {
      const title = item.dataset.title;
      const description = item.dataset.description;
      const categories = item.dataset.categories.toLowerCase();
      
      if (title.includes(lowercaseQuery) || 
          description.includes(lowercaseQuery) || 
          categories.includes(lowercaseQuery)) {
        item.classList.remove("img-gallery-hidden");
      } else {
        item.classList.add("img-gallery-hidden");
      }
    });
  },

  // Filter gallery by category - updated for multiple categories
  filterGallery(category) {
    // Clear search
    if (this.elements.searchInput) {
      this.elements.searchInput.value = "";
    }
    
    // Update active button
    this.elements.categoryFilters.querySelectorAll(".img-gallery-filter-btn").forEach(btn => {
      btn.classList.remove("img-gallery-active");
    });
    
    const activeBtn = this.elements.categoryFilters.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
      activeBtn.classList.add("img-gallery-active");
    }
    
    // Filter gallery items with staggered animation
    const items = this.elements.gallery.querySelectorAll(".img-gallery-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        const itemCategories = item.dataset.categories ? 
          item.dataset.categories.split(',') : 
          [item.dataset.category];
          
        if (category === "all" || itemCategories.includes(category)) {
          item.classList.remove("img-gallery-hidden");
        } else {
          item.classList.add("img-gallery-hidden");
        }
      }, index * 50);
    });
  },

  // Open modal
  openModal(galleryIndex) {
    this.currentGalleryIndex = galleryIndex;
    this.currentImageIndex = 0;
    
    const dataToUse = this.getCombinedData(this.includeLogos);
    const item = dataToUse[galleryIndex];
    
    if (this.elements.modalTitle) {
      this.elements.modalTitle.textContent = item.title;
    }
    if (this.elements.modalDescription) {
      this.elements.modalDescription.textContent = item.description;
    }
    
    this.setupCarousel(item.images);
    
    if (this.elements.modal) {
      this.elements.modal.style.display = "block";
      document.body.style.overflow = "hidden";
      
      // Add fade in animation
      setTimeout(() => {
        this.elements.modal.classList.add("img-gallery-modal-open");
      }, 10);
    }
  },

  // Setup carousel
  setupCarousel(images) {
    // Setup dots
    if (this.elements.carouselDots) {
      this.elements.carouselDots.innerHTML = "";
      
      if (images.length > 1) {
        images.forEach((_, index) => {
          const dot = document.createElement("span");
          dot.className = "img-gallery-dot";
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
    this.currentImageIndex = imageIndex;
    
    if (this.elements.carouselImage) {
      // Add loading state
      this.elements.carouselImage.style.opacity = "0.5";
      
      this.elements.carouselImage.onload = () => {
        this.elements.carouselImage.style.opacity = "1";
      };
      
      this.elements.carouselImage.src = item.images[imageIndex];
      this.elements.carouselImage.alt = item.title;
    }
    
    // Update dots
    if (this.elements.carouselDots) {
      this.elements.carouselDots.querySelectorAll(".img-gallery-dot").forEach((dot, index) => {
        dot.classList.toggle("img-gallery-active", index === imageIndex);
      });
    }
  },

  // Navigate carousel
  previousImage() {
    const dataToUse = this.getCombinedData(this.includeLogos);
    const totalImages = dataToUse[this.currentGalleryIndex].images.length;
    const prevIndex = (this.currentImageIndex - 1 + totalImages) % totalImages;
    this.showImage(prevIndex);
  },

  nextImage() {
    const dataToUse = this.getCombinedData(this.includeLogos);
    const totalImages = dataToUse[this.currentGalleryIndex].images.length;
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

  // Bind events
  bindEvents() {
    // Close button
    if (this.elements.closeBtn) {
      this.elements.closeBtn.addEventListener("click", () => this.closeModal());
    }

    // Navigation buttons
    if (this.elements.prevBtn) {
      this.elements.prevBtn.addEventListener("click", () => this.previousImage());
    }
    
    if (this.elements.nextBtn) {
      this.elements.nextBtn.addEventListener("click", () => this.nextImage());
    }

    // Click outside modal
    window.addEventListener("click", (event) => {
      if (event.target === this.elements.modal) {
        this.closeModal();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (event) => {
      if (this.elements.modal && this.elements.modal.style.display === "block") {
        event.preventDefault();
        
        switch(event.key) {
          case "Escape":
            this.closeModal();
            break;
          case "ArrowLeft":
            this.previousImage();
            break;
          case "ArrowRight":
            this.nextImage();
            break;
          case " ": // Spacebar
            this.nextImage();
            break;
        }
      }
    });

    // Touch/swipe support for mobile
    this.setupTouchNavigation();
  },

  // Setup touch navigation for mobile
  setupTouchNavigation() {
    let startX = 0;
    let endX = 0;
    
    if (this.elements.carouselImage) {
      this.elements.carouselImage.addEventListener("touchstart", (e) => {
        startX = e.changedTouches[0].screenX;
      });
      
      this.elements.carouselImage.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].screenX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
          if (diff > 0) {
            this.nextImage(); // Swipe left - next image
          } else {
            this.previousImage(); // Swipe right - previous image
          }
        }
      });
    }
  },

  // Utility method to refresh gallery
  refresh() {
    this.elements.gallery.innerHTML = "";
    this.generateGallery();
  },

  // Method to add new project dynamically
  addProject(project) {
    // Ensure category is an array
    if (!Array.isArray(project.category)) {
      project.category = [project.category];
    }
    
    this.galleryData.push(project);
    this.refresh();
    this.generateFilters();
  },

  // Method to add new logo dynamically
  addLogo(logo) {
    this.logosData.push(logo);
  },

  // Get project statistics - updated for multiple categories
  getStats() {
    const allCategories = this.getAllCategories();
    const categoryCount = {};
    
    // Count projects per category
    allCategories.forEach(category => {
      categoryCount[category] = this.getProjectsByCategory(category).length;
    });
    
    return {
      totalProjects: this.galleryData.length,
      totalLogos: this.logosData.length,
      categories: allCategories,
      categoryCount: categoryCount,
      projectsWithLogos: this.galleryData.filter(p => p.hasLogo).length,
      projectsWithMultipleCategories: this.galleryData.filter(p => 
        Array.isArray(p.category) && p.category.length > 1
      ).length
    };
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize gallery with logos included by default
  ImageGalleryApp.init(true);
  
  // Optional: Log statistics
  console.log('Gallery Stats:', ImageGalleryApp.getStats());
  
  // Optional: Make it globally accessible for debugging
  window.Gallery = ImageGalleryApp;
});

// Export for use in other modules (if using ES6 modules)
// export default ImageGalleryApp;