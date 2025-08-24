// profile-flip.js - Profile picture flip effect with auto-flip
document.addEventListener('DOMContentLoaded', function() {
  const profilePic = document.querySelector('.profile-pic');
  const navProfilePic = document.getElementById('navProfilePic');
  
  // Configuration - Change these paths to your actual images
  const images = {
    primary: 'img/profile.jpeg',    // Your current image
    secondary: 'img/profile2.jpg'  // Your second image (add this to your img folder)
  };
  
  let isFlipped = false;
  let isAnimating = false;
  let autoFlipInterval = null;
  
  // Function to flip image with 3D effect
  function flipImage(imageElement) {
    if (isAnimating) return;
    
    isAnimating = true;
    
    // Add flip animation class
    imageElement.style.transform = 'translateX(-50%) rotateY(90deg) scale(1.05)';
    imageElement.style.transition = 'transform 0.3s ease-in-out';
    
    // Change image source at halfway point
    setTimeout(() => {
      if (!isFlipped) {
        imageElement.src = images.secondary;
        isFlipped = true;
      } else {
        imageElement.src = images.primary;
        isFlipped = false;
      }
      
      // Complete the flip
      imageElement.style.transform = 'translateX(-50%) rotateY(0deg) scale(1)';
    }, 150);
    
    // Reset animation flag
    setTimeout(() => {
      isAnimating = false;
      imageElement.style.transition = 'var(--transition)';
    }, 300);
  }
  
  // Function to flip nav profile pic
  function flipNavImage(imageElement) {
    if (isAnimating) return;
    
    isAnimating = true;
    
    // Add flip animation class for nav pic
    imageElement.style.transform = 'translateX(0) rotateY(90deg) scale(1.1)';
    imageElement.style.transition = 'transform 0.3s ease-in-out';
    
    // Change image source at halfway point
    setTimeout(() => {
      if (!isFlipped) {
        imageElement.src = images.secondary;
        isFlipped = true;
      } else {
        imageElement.src = images.primary;
        isFlipped = false;
      }
      
      // Complete the flip
      imageElement.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
    }, 150);
    
    // Reset animation flag
    setTimeout(() => {
      isAnimating = false;
      imageElement.style.transition = 'var(--transition)';
    }, 300);
  }
  
  // Auto-flip function for nav profile pic
  function startAutoFlip() {
    if (navProfilePic && autoFlipInterval === null) {
      autoFlipInterval = setInterval(() => {
        flipNavImage(navProfilePic);
        
        // Also sync the main profile pic
        if (profilePic) {
          setTimeout(() => {
            profilePic.src = navProfilePic.src;
          }, 150);
        }
      }, 3000); // Flip every 3 seconds
    }
  }
  
  // Stop auto-flip function
  function stopAutoFlip() {
    if (autoFlipInterval) {
      clearInterval(autoFlipInterval);
      autoFlipInterval = null;
    }
  }
  
  // Pause auto-flip when user hovers over nav profile pic
  function pauseAutoFlipOnHover() {
    if (navProfilePic) {
      navProfilePic.addEventListener('mouseenter', stopAutoFlip);
      navProfilePic.addEventListener('mouseleave', () => {
        // Resume auto-flip after a short delay
        setTimeout(startAutoFlip, 1000);
      });
    }
  }
  
  // Add click event to main profile picture
  if (profilePic) {
    profilePic.addEventListener('click', function() {
      // Temporarily stop auto-flip when user manually flips
      stopAutoFlip();
      
      flipImage(this);
      
      // Also flip the nav profile pic to keep them in sync
      if (navProfilePic) {
        setTimeout(() => {
          navProfilePic.src = this.src;
        }, 150);
      }
      
      // Resume auto-flip after 5 seconds
      setTimeout(startAutoFlip, 5000);
    });
    
    // Add hover effect for better UX
    profilePic.addEventListener('mouseenter', function() {
      if (!isAnimating) {
        this.style.cursor = 'pointer';
        this.style.transform = 'translateX(-50%) scale(1.05)';
      }
    });
    
    profilePic.addEventListener('mouseleave', function() {
      if (!isAnimating) {
        this.style.transform = 'translateX(-50%) scale(1)';
      }
    });
  }
  
  // Add click event to nav profile picture
  if (navProfilePic) {
    navProfilePic.addEventListener('click', function() {
      // Temporarily stop auto-flip when user manually clicks
      stopAutoFlip();
      
      flipNavImage(this);
      
      // Also flip the main profile pic to keep them in sync
      if (profilePic) {
        setTimeout(() => {
          profilePic.src = this.src;
        }, 150);
      }
      
      // Resume auto-flip after 5 seconds
      setTimeout(startAutoFlip, 5000);
    });
    
    // Add hover effect for nav pic
    navProfilePic.addEventListener('mouseenter', function() {
      if (!isAnimating) {
        this.style.cursor = 'pointer';
        this.style.transform = 'translateX(0) scale(1.1)';
      }
    });
    
    navProfilePic.addEventListener('mouseleave', function() {
      if (!isAnimating) {
        this.style.transform = 'translateX(0) scale(1)';
      }
    });
  }
  
  // Add some CSS for smooth animations (in case not defined)
  const style = document.createElement('style');
  style.textContent = `
    .profile-pic, .nav-profile-pic {
      transition: var(--transition);
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }
    
    .profile-pic:active {
      transform: translateX(-50%) scale(0.95) !important;
    }
    
    .nav-profile-pic:active {
      transform: translateX(0) scale(0.95) !important;
    }
    
    /* Add a subtle glow effect during auto-flip */
    .nav-profile-pic {
      position: relative;
    }
    
    .nav-profile-pic::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
      border-radius: 50%;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
    }
    
    @keyframes autoFlipGlow {
      0%, 100% { opacity: 0; }
      50% { opacity: 0.3; }
    }
  `;
  document.head.appendChild(style);
  
  // Optional: Preload the second image for smooth transition
  const preloadImg = new Image();
  preloadImg.src = images.secondary;
  
  // Initialize auto-flip and hover pause functionality
  pauseAutoFlipOnHover();
  
  // Start auto-flip after a short delay to let the page load
  setTimeout(startAutoFlip, 2000);
  
  // Pause auto-flip when page becomes hidden (user switches tabs)
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopAutoFlip();
    } else {
      // Resume auto-flip when user returns to the tab
      setTimeout(startAutoFlip, 1000);
    }
  });
  
  // Expose functions for external use (optional)
  window.ProfileFlip = {
    flip: () => {
      if (profilePic) {
        stopAutoFlip();
        flipImage(profilePic);
        setTimeout(startAutoFlip, 2500);
      }
    },
    startAutoFlip: startAutoFlip,
    stopAutoFlip: stopAutoFlip,
    setSecondaryImage: (imagePath) => {
      images.secondary = imagePath;
      // Preload new image
      const newPreload = new Image();
      newPreload.src = imagePath;
    },
    getCurrentImage: () => isFlipped ? images.secondary : images.primary,
    isFlipped: () => isFlipped,
    setAutoFlipInterval: (milliseconds) => {
      stopAutoFlip();
      setTimeout(() => {
        autoFlipInterval = setInterval(() => {
          flipNavImage(navProfilePic);
          if (profilePic) {
            setTimeout(() => {
              profilePic.src = navProfilePic.src;
            }, 150);
          }
        }, milliseconds);
      }, 100);
    }
  };
});