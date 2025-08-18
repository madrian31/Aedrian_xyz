// Timeline data with FIXED dates and logical career progression
const timelineData = [
  {
    date: "January 2025 - Present",
    title: "Junior Programmer",
    company: "Tech Company",
    description: "Started my professional programming career, focusing on web development and software solutions. Working with modern technologies and contributing to various projects.",
    skills: ["Web Development", "Programming", "Problem Solving", "Team Collaboration"]
  },
  {
    date: "August 2024 - December 2024",
    title: "IT Instructor",
    company: "STI College Carmona",
    description: "Taught core IT subjects to college students, focusing on web development, programming logic, and hands-on activities. Encouraged student engagement through interactive lessons and real-world project simulations.",
    skills: ["Teaching", "Web Development", "Programming Logic", "Student Mentoring"]
  },
  {
    date: "February 2024 - July 2024",
    title: "IT Support Internship",
    company: "Unida Christian College",
    description: "Completed internship during final semester, assisting in managing and maintaining the Student Center and providing technical support",
    skills:[
    "Technical Support","Hardware & Software Troubleshooting", "Network Maintenance","Helpdesk Support",  "User Training & Assistance",  "System Configuration"
  ]
  },
  {
    date: "August 2020 - July 2024",
    title: "Graduated College",
    company: "Bachelor of Science in Information Technology",
    description: "Successfully completed a four-year degree in Information Technology with a focus on software development and web technologies. Gained comprehensive knowledge in programming, database design, and system analysis.",
    skills: ["Web Development", "Database Design", "Programming", "System Analysis", "UI/UX", "Software Testing"]
  },
  {
    date: "July 2022 - August 2023",
    title: "Student Center Volunteer",
    company: "Unida Christian Church",
    description: "Volunteered during college years, assisting in managing and maintaining the Student Center, providing technical support and supporting church operations during events and regular services.",
    skills: ["Technical Support","Hardware & Software Troubleshooting", "Network Maintenance", "Community Service", "Volunteer Work",]
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



