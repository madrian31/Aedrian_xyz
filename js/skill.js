// Enhanced Skills Data with New Technologies
const skillsData = {
  primary: {
    title: "Core Technologies",
    description: "My primary programming languages and technologies",
    skills: [
      { name: "HTML5", icon: "bi-filetype-html", key: "html" },
      { name: "CSS3", icon: "bi-filetype-css", key: "css" },
      { name: "JavaScript", icon: "bi-filetype-js", key: "javascript" },
      { name: "PHP", icon: "bi-filetype-php", key: "php" },
      { name: "C#", icon: "bi-file-code", key: "csharp" }, // NEW
      { name: "Python", icon: "bi-filetype-py", key: "python" },
      { name: "SQL", icon: "bi-database", key: "mysql" }
    ]
  },
  frameworks: {
    title: "Frameworks & Patterns",
    description: "Architectural patterns and frameworks I work with",
    skills: [
      { name: "React", icon: "bi-bootstrap", key: "react" },
      { name: "MVC Pattern", icon: "bi-diagram-3", key: "mvc" }, // NEW
      { name: ".NET", icon: "bi-microsoft", key: "dotnet" }, // NEW (pairs with C#)
      { name: "Bootstrap", icon: "bi-bootstrap-fill", key: "bootstrap" },
      { name: "jQuery", icon: "bi-code-square", key: "jquery" }
    ]
  },
  tools: {
    title: "Tools & Platforms",
    description: "Development tools and software I use daily",
    skills: [
      { name: "GitHub", icon: "bi-github", key: "github" },
      { name: "VS Code", icon: "bi-code-slash", key: "vscode" },
      { name: "Jira", icon: "bi-kanban", key: "jira" }, // NEW
      { name: "Figma", icon: "bi-ui-radios", key: "figma" },
      { name: "Photoshop", icon: "bi-image", key: "photoshop" },
      { name: "Illustrator", icon: "bi-vector-pen", key: "illustrator" },
      { name: "Xampp", icon: "bi-server", key: "xampp" }
    ]
  },
  automation: { // NEW SECTION
    title: "Automation & Integration",
    description: "Workflow automation and system integration tools",
    skills: [
      { name: "n8n", icon: "bi-workflow", key: "n8n" },
      { name: "API Integration", icon: "bi-plug", key: "api" },
      { name: "Webhooks", icon: "bi-arrow-left-right", key: "webhooks" }
    ]
  }
};

// Updated CSS additions for new skills
const additionalSkillColors = `
/* New Skill Colors */
.skill-item[data-skill="csharp"] .skill-icon { color: #239120; }
.skill-item[data-skill="mvc"] .skill-icon { color: #512BD4; }
.skill-item[data-skill="dotnet"] .skill-icon { color: #512BD4; }
.skill-item[data-skill="jira"] .skill-icon { color: #0052CC; }
.skill-item[data-skill="n8n"] .skill-icon { color: #EA4B71; }
.skill-item[data-skill="api"] .skill-icon { color: #FF6B35; }
.skill-item[data-skill="webhooks"] .skill-icon { color: #4ECDC4; }

/* New automation tier styling */
.tier-automation .skills-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}
`;

// Function to inject additional styles
function addNewSkillStyles() {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = additionalSkillColors;
  document.head.appendChild(styleSheet);
}

// DOM Elements
const skillsContent = document.getElementById('skillsContent');

// Create skill item element
function createSkillItem(skill) {
  const skillItem = document.createElement('div');
  skillItem.className = 'skill-item';
  skillItem.setAttribute('data-skill', skill.key);
  
  skillItem.innerHTML = `
    <i class="${skill.icon} skill-icon"></i>
    <h4 class="skill-name">${skill.name}</h4>
  `;
  
  // Add hover effects
  skillItem.addEventListener('mouseenter', () => {
    skillItem.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  skillItem.addEventListener('mouseleave', () => {
    skillItem.style.transform = 'translateY(0) scale(1)';
  });
  
  return skillItem;
}

// Create skills tier section
function createSkillsTier(tierKey, tierData) {
  const tierSection = document.createElement('div');
  tierSection.className = `skills-tier tier-${tierKey}`;
  
  // Create header
  const tierHeader = document.createElement('div');
  tierHeader.className = 'tier-header';
  tierHeader.innerHTML = `
    <h3 class="tier-title">${tierData.title}</h3>
    <p class="tier-description">${tierData.description}</p>
  `;
  
  // Create skills grid
  const skillsGrid = document.createElement('div');
  skillsGrid.className = 'skills-grid';
  
  // Add skills to grid
  tierData.skills.forEach(skill => {
    const skillItem = createSkillItem(skill);
    skillsGrid.appendChild(skillItem);
  });
  
  tierSection.appendChild(tierHeader);
  tierSection.appendChild(skillsGrid);
  
  return tierSection;
}

// Initialize skills section
function initializeSkills() {
  // Add new styles
  addNewSkillStyles();
  
  // Clear existing content
  skillsContent.innerHTML = '';
  
  // Create and append each tier
  Object.keys(skillsData).forEach(tierKey => {
    const tierSection = createSkillsTier(tierKey, skillsData[tierKey]);
    skillsContent.appendChild(tierSection);
  });
  
  // Initialize animations
  initializeSkillAnimations();
}

// Animation on scroll (keeping existing function)
function initializeSkillAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillItems = entry.target.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Set initial state and observe
  document.querySelectorAll('.skills-tier').forEach(tier => {
    const skillItems = tier.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
    });
    observer.observe(tier);
  });
}

// Search functionality (keeping existing)
function searchSkills(query) {
  const skillItems = document.querySelectorAll('.skill-item');
  const lowerQuery = query.toLowerCase();
  
  skillItems.forEach(item => {
    const skillName = item.querySelector('.skill-name').textContent.toLowerCase();
    const isMatch = skillName.includes(lowerQuery);
    
    item.style.display = isMatch ? 'flex' : 'none';
    
    if (isMatch && query) {
      item.style.borderColor = 'var(--primary-color)';
      item.style.transform = 'translateY(-4px)';
    } else {
      item.style.borderColor = '';
      item.style.transform = '';
    }
  });
}

// Filter by tier (keeping existing)
function filterByTier(tierName) {
  const tiers = document.querySelectorAll('.skills-tier');
  
  tiers.forEach(tier => {
    if (tierName === 'all' || tier.classList.contains(`tier-${tierName}`)) {
      tier.style.display = 'block';
    } else {
      tier.style.display = 'none';
    }
  });
}

// Add skill click interaction (keeping existing)
function addSkillInteractions() {
  document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
      const skillName = item.querySelector('.skill-name').textContent;
      // You can add more interaction here
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeSkills();
  
  // Add skill interactions after initialization
  setTimeout(() => {
    addSkillInteractions();
  }, 100);
});

// Expose functions for external use
window.SkillsSection = {
  search: searchSkills,
  filter: filterByTier,
  refresh: initializeSkills
};