// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const navProfilePic = document.getElementById('navProfilePic');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Show/hide profile pic in nav based on scroll position
let lastScrollTop = 0;
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Show profile pic in nav when scrolled past the main profile pic
  if (scrollTop > headerHeight * 0.7) {
    navProfilePic.classList.add('visible');
    
    // Always show nav when profile pic is visible
    nav.style.transform = 'translateY(0)';
    nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    navProfilePic.classList.remove('visible');
    
    // Original hide/show behavior when profile pic is not visible
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      nav.style.transform = 'translateY(-100%)';
      nav.style.boxShadow = 'none';
    } else {
      nav.style.transform = 'translateY(0)';
      nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
  }
  
  lastScrollTop = scrollTop;
});

// Update active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinksArray.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});