    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navProfilePic = document.getElementById('navProfilePic');

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

    // Show/hide profile pic in nav based on scroll position
    let lastScrollTop = 0;
    const nav = document.querySelector('.main-nav');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Show profile pic in nav when scrolled past the main profile pic
      if (scrollTop > 200) {
        navProfilePic.classList.add('visible');
        nav.classList.add('sticky');
        // Keep nav always visible when profile pic is shown
        nav.style.transform = 'translateY(0)';
      } else {
        navProfilePic.classList.remove('visible');
        nav.classList.remove('sticky');
        
        // Original hide/show behavior when profile pic is not visible
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          nav.style.transform = 'translateY(-100%)';
        } else {
          nav.style.transform = 'translateY(0)';
        }
      }
      
      lastScrollTop = scrollTop;
    });

    // Update active nav link based on scroll position
    const sections = ['home', 'about', 'contact'];
    const navLinksArray = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      
      const scrollPosition = window.scrollY + 100;
      
      if (scrollPosition < 400) current = 'home';
      else if (scrollPosition < 800) current = 'about';
      else current = 'contact';

      navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });