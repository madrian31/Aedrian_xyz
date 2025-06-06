// Timeline Data Object
const timelineData = [
  {
  date: "July 2022 - August 2023",
  title: "Student Center Volunteer",
  company: "Unida Christian Church",
  description: "Assisted in managing and maintaining the Student Center, providing technical support, mentoring youth, and supporting church operations during events and regular services.",
  skills: ["Volunteer Work", "Technical Support", "Youth Mentorship", "Teamwork"],
  //icon: "bi-people"
},
  
    {
  date: "February 2024 - June 2024",
  title: "Student Center Internship",
  company: "Unida Christian College",
  description: "Assisted in managing and maintaining the Student Center, providing technical support, mentoring youth, and supporting church operations during events and regular services.",
  skills: ["Technical Support", "Teamwork", "Collaboration"],
  //icon: "bi-people"
},
  
  {
    date: "August 2021 - July 2024",
    title: "Graduated College",
    company: "Bachelor of Science in Information Technology",
    description: "Successfully completed a four-year degree in Information Technology with a focus on software development and web technologies.",
    skills: ["Web Development", "Database Design", "Programming"],
    //icon: "bi-book"
  },
  
 {
  date: "August 2024 - December 2024",
  title: "IT Instructor",
  company: "STI College Carmona",
  description: "Taught core IT subjects to college students, focusing on web development, programming logic, and hands-on activities. Encouraged student engagement through interactive lessons and real-world project simulations.",
  skills: ["Teaching", "Web Development", "Programming Logic", "Classroom Management"],
  //icon: "bi-mortarboard"
},


  {
    date: "January 2025",
    title: "Started as Junior Programmer",
    company: "Software Company",
    description: "Joined a company as a Junior Programmer focused on backend maintenance and front-end bug fixes.",
    skills: ["MVC", "ASP", "Jquery", "SQL",],
    //icon: "bi-terminal"
  },
 
];

    // DOM Elements
    const timelineContainer = document.getElementById('timelineItems');
    const timelineLine = document.querySelector('.timeline-line');

    // Create DOM elements without HTML strings
    function createElement(tag, className, textContent) {
      const element = document.createElement(tag);
      if (className) element.className = className;
      if (textContent) element.textContent = textContent;
      return element;
    }

    function createTimelineItem(item) {
      // Create timeline item container
      const timelineItem = createElement('div', 'timeline-item');
      
      // Create marker with icon
      const marker = createElement('div', 'timeline-marker');
      const icon = createElement('i', `bi ${item.icon}`);
      marker.appendChild(icon);
      
      // Create content container
      const content = createElement('div', 'timeline-content');
      
      // Add date
      content.appendChild(createElement('div', 'timeline-date', item.date));
      
      // Add title
      content.appendChild(createElement('div', 'timeline-title', item.title));
      
      // Add company
      content.appendChild(createElement('div', 'timeline-company', item.company));
      
      // Add description
      content.appendChild(createElement('div', 'timeline-description', item.description));
      
      // Add skills container
      const skillsContainer = createElement('div', 'timeline-skills');
      item.skills.forEach(skill => {
        skillsContainer.appendChild(createElement('span', 'timeline-skill', skill));
      });
      content.appendChild(skillsContainer);
      
      // Assemble item
      timelineItem.appendChild(marker);
      timelineItem.appendChild(content);
      
      return timelineItem;
    }

    function renderTimeline() {
      // Clear existing items
      while (timelineContainer.firstChild) {
        timelineContainer.removeChild(timelineContainer.firstChild);
      }
      
      // Add new items
      timelineData.forEach(item => {
        timelineContainer.appendChild(createTimelineItem(item));
      });
      
      adjustTimelineLine();
    }

    function adjustTimelineLine() {
      const items = document.querySelectorAll('.timeline-item');
      if (items.length === 0) return;
      
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      
      timelineLine.style.top = `${firstItem.offsetTop}px`;
      timelineLine.style.height = `${lastItem.offsetTop + lastItem.offsetHeight - firstItem.offsetTop}px`;
    }

    // Initialize animations
    function initializeAnimation() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
      });
    }

    // Event listeners
    window.addEventListener('resize', () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(adjustTimelineLine, 250);
    });

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      renderTimeline();
      initializeAnimation();
    });