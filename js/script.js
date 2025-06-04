    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Hide nav on scroll down, show on scroll up
    let lastScrollTop = 0;
    const nav = document.querySelector('.main-nav');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });

    // Update active nav link based on scroll position
    const sections = ['home', 'about', 'portfolio', 'contact'];
    const navLinksArray = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      
      // Simple logic - you can make this more sophisticated
      const scrollPosition = window.scrollY + 100;
      
      if (scrollPosition < 300) current = 'home';
      else if (scrollPosition < 600) current = 'about';
      else if (scrollPosition < 900) current = 'portfolio';
      else current = 'contact';

      navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });