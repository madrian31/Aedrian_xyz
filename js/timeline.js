// Timeline data with FIXED dates and logical career progression
// Timeline data with FIXED dates and logical career progression
const timelineData = [
  {
    date: "Jan 2025 - Present",
    title: "Junior Programmer",
    company: "Tech Company",
    description: "Kickstarted my programming career, focusing on web apps and software solutions using modern technologies.",
    skills: ["Web Development", "C#.net", "Software Testing", "UI/UX", "Problem Solving", "Collaboration"]
  },
  {
    date: "Aug 2024 - Dec 2024",
    title: "IT Instructor",
    company: "STI College Carmona",
    description: "Taught core IT subjects, emphasizing web development, programming, and real-world projects to engage students.",
    skills: ["Teaching", "Web Development", "Programming Logic", "Mentoring"]
  },
  {
    date: "Feb 2024 - Jul 2024",
    title: "IT Support Intern",
    company: "Unida Christian College",
    description: "Assisted in maintaining systems, troubleshooting hardware/software issues, and providing user support.",
    skills: ["Technical Support", "Troubleshooting", "Network Maintenance", "Helpdesk"]
  },
  {
    date: "Aug 2020 - Jul 2024",
    title: "BSIT Graduate",
    company: "STI College Carmona",
    description: "Earned a degree in IT, specializing in software development, database design, and UI/UX principles.",
    skills: ["Web Dev", "Database Design", "Programming", "UI/UX", "Testing"]
  },
  {
    date: "Jul 2022 - Aug 2023",
    title: "Student Center Volunteer",
    company: "Unida Christian Church",
    description: "Supported tech operations and events through system maintenance and troubleshooting.",
    skills: ["Tech Support", "Network Management", "Troubleshooting", "Network Maintenance", "Community Service"]
  }
];


// Function to create timeline HTML
function createTimelineHTML() {
  const timelineContainer = document.getElementById('timelineItems');
  if (!timelineContainer) return;

  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    timelineItem.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <h4 class="timeline-company">${item.company}</h4>
        <p class="timeline-description">${item.description}</p>
        <div class="timeline-skills">
          ${item.skills.map(skill => `<span class="timeline-skill">${skill}</span>`).join('')}
        </div>
      </div>
    `;
    
    timelineContainer.appendChild(timelineItem);
  });
}

// Function to animate timeline items on scroll
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createTimelineHTML();
  
  // Add a small delay to ensure elements are rendered
  setTimeout(() => {
    animateTimeline();
  }, 100);
});

// Also initialize if script loads after DOM
/*
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    createTimelineHTML();
    setTimeout(() => {
      animateTimeline();
    }, 100);
  });
} else {
  createTimelineHTML();
  setTimeout(() => {
    animateTimeline();
  }, 100);
}
*/

// Function to create timeline HTML
function createTimelineHTML() {
  const timelineContainer = document.getElementById('timelineItems');
  if (!timelineContainer) return;

  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    timelineItem.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <h4 class="timeline-company">${item.company}</h4>
        <p class="timeline-description">${item.description}</p>
        <div class="timeline-skills">
          ${item.skills.map(skill => `<span class="timeline-skill">${skill}</span>`).join('')}
        </div>
      </div>
    `;
    
    timelineContainer.appendChild(timelineItem);
  });
}

// Function to animate timeline items on scroll
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createTimelineHTML();
  
  // Add a small delay to ensure elements are rendered
  setTimeout(() => {
    animateTimeline();
  }, 100);
});

// Also initialize if script loads after DOM
/*
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    createTimelineHTML();
    setTimeout(() => {
      animateTimeline();
    }, 100);
  });
} else {
  createTimelineHTML();
  setTimeout(() => {
    animateTimeline();
  }, 100);
}
*/