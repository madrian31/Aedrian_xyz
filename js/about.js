// About section data
const aboutData = {
  bio: {
  title: "Hello, I'm Marc Adrian",
  paragraphs: [
    "I <span class='highlight'>design and build</span> clean, functional, and meaningful digital experiences.",
    "With a background in Information Technology, I combine development, intuitive design, and AI-assisted workflows to create user-focused solutions.",
    "Always eager to learn, collaborate, and grow through technology."
  ]
}, 

  stats: [
    //ucomment this line in about css /*grid-template-columns: repeat(2, 1fr);*/
    //{ number: 10, label: "Projects Completed", suffix: "+" },
    { number: 1, label: "Years Experience", suffix: "+" },
    { number: 5, label: "Technologies", suffix: "+" },
    { number: 100, label: "Cups of Coffee", suffix: "+" }
  ],
  interests: [
    {
      key: "coding",
      icon: "bi-code-slash",
      title: "Programming",
      description: "Building web applications and exploring new programming languages and frameworks."
    },
    {
      key: "design",
      icon: "bi-palette",
      title: "UI/UX Design",
      description: "Creating user-centered designs that are both beautiful and functional."
    },
    {
      key: "ai",
      icon: "bi-robot",
      title: "AI & Machine Learning",
      description: "Exploring artificial intelligence and integrating AI tools into modern workflows."
    },
    {
      key: "photography",
      icon: "bi-camera",
      title: "Photography",
      description: "Capturing moments and exploring visual composition and storytelling."
    },
    {
      key: "learning",
      icon: "bi-book",
      title: "Learning",
      description: "Continuously expanding knowledge in technology and creative fields."
    },
    
  ]
};

// DOM Elements
const aboutText = document.getElementById('aboutText');
const aboutStats = document.getElementById('aboutStats');
const aboutInterests = document.getElementById('aboutInterests');

// Create bio section
function createBioSection() {
  const bioHTML = `
    <h3>${aboutData.bio.title}</h3>
    ${aboutData.bio.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
  `;
  aboutText.innerHTML = bioHTML;
}

// Create stats section
function createStatsSection() {
  const statsHTML = `
    <div class="stats-grid">
      ${aboutData.stats.map(stat => `
        <div class="stat-item" data-number="${stat.number}">
          <span class="stat-number" data-target="${stat.number}">${stat.suffix}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `).join('')}
    </div>
  `;
  aboutStats.innerHTML = statsHTML;
}

// Create interests section
function createInterestsSection() {
  const VISIBLE_COUNT = 3;
  const hasMore = aboutData.interests.length > VISIBLE_COUNT;

  const interestsHTML = `
    <div class="interests-header">
      <h3>What I'm Passionate About</h3>
      <p>Beyond coding and design, here are some things that inspire and motivate me</p>
    </div>
    <div class="interests-grid">
      ${aboutData.interests.map((interest, index) => `
        <div class="interest-item${index >= VISIBLE_COUNT ? ' interest-extra interest-collapsed' : ''}" data-interest="${interest.key}">
          <i class="${interest.icon} interest-icon"></i>
          <h4 class="interest-title">${interest.title}</h4>
          <p class="interest-description">${interest.description}</p>
        </div>
      `).join('')}
    </div>
    ${hasMore ? `
      <div class="interests-toggle-wrapper">
        <button class="interests-toggle-btn" id="interestsToggleBtn">
          <span>Show More</span>
          <i class="bi bi-chevron-down toggle-icon"></i>
        </button>
      </div>
    ` : ''}
  `;
  aboutInterests.innerHTML = interestsHTML;

  if (hasMore) {
    const toggleBtn = document.getElementById('interestsToggleBtn');
    let expanded = false;

    toggleBtn.addEventListener('click', () => {
      expanded = !expanded;
      document.querySelectorAll('.interest-extra').forEach(item => {
        item.classList.toggle('interest-collapsed', !expanded);
      });
      toggleBtn.querySelector('span').textContent = expanded ? 'Show Less' : 'Show More';
      toggleBtn.querySelector('.toggle-icon').classList.toggle('rotated', expanded);
    });
  }
}

// Animate number counting
function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.dataset.target);
        const suffix = element.textContent.replace(/[0-9]/g, '');
        
        let current = 0;
        const increment = target / 50; // Animation speed
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current) + suffix;
          }
        }, 40);
        
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.5
  });
  
  statNumbers.forEach(number => {
    observer.observe(number);
  });
}

// Add hover effects to interest items
function addInterestInteractions() {
  const interestItems = document.querySelectorAll('.interest-item');
  
  interestItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const icon = item.querySelector('.interest-icon');
      icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    item.addEventListener('mouseleave', () => {
      const icon = item.querySelector('.interest-icon');
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
    
    item.addEventListener('click', () => {
      // Add a subtle click animation
      item.style.transform = 'scale(0.95)';
      setTimeout(() => {
        item.style.transform = '';
      }, 150);
    });
  });
}

// Add stat item interactions
function addStatInteractions() {
  const statItems = document.querySelectorAll('.stat-item');
  
  statItems.forEach(item => {
    item.addEventListener('click', () => {
      // Add pulse animation on click
      const number = item.querySelector('.stat-number');
      number.style.animation = 'none';
      number.offsetHeight; // Trigger reflow
      number.style.animation = 'countUp 0.6s ease';
    });
  });
}

// Initialize animations on scroll
function initializeAboutAnimations() {
  const aboutSection = document.querySelector('.about-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animations
        const aboutText = entry.target.querySelector('.about-text');
        const aboutStats = entry.target.querySelector('.about-stats');
        const aboutInterests = entry.target.querySelector('.about-interests');
        
        // Reset and trigger animations
        if (aboutText) {
          aboutText.style.animation = 'none';
          aboutText.offsetHeight;
          aboutText.style.animation = 'slideInLeft 0.8s ease forwards';
        }
        
        if (aboutStats) {
          aboutStats.style.animation = 'none';
          aboutStats.offsetHeight;
          aboutStats.style.animation = 'slideInRight 0.8s ease forwards 0.2s';
        }
        
        if (aboutInterests) {
          aboutInterests.style.animation = 'none';
          aboutInterests.offsetHeight;
          aboutInterests.style.animation = 'slideInUp 0.8s ease forwards 0.4s';
        }
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  if (aboutSection) {
    observer.observe(aboutSection);
  }
}

// Search functionality for interests (optional)
function searchInterests(query) {
  const interestItems = document.querySelectorAll('.interest-item');
  const lowerQuery = query.toLowerCase();
  
  interestItems.forEach(item => {
    const title = item.querySelector('.interest-title').textContent.toLowerCase();
    const description = item.querySelector('.interest-description').textContent.toLowerCase();
    const isMatch = title.includes(lowerQuery) || description.includes(lowerQuery);
    
    item.style.display = isMatch ? 'block' : 'none';
    
    if (isMatch && query) {
      item.style.borderColor = 'var(--primary-color)';
    } else {
      item.style.borderColor = '';
    }
  });
}

// Initialize about section
function initializeAbout() {
  createBioSection();
  createStatsSection();
  createInterestsSection();
  
  // Add small delay to ensure DOM is ready
  setTimeout(() => {
    animateNumbers();
    addInterestInteractions();
    addStatInteractions();
    initializeAboutAnimations();
  }, 100);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeAbout();
});

// Also initialize if script loads after DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAbout);
} else {
  initializeAbout();
}

// Expose functions for external use
window.AboutSection = {
  search: searchInterests,
  refresh: initializeAbout,
  data: aboutData
};