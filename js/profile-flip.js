// profile-flip.js - Profile picture flip effect
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
  
  // Add click event to main profile picture
  if (profilePic) {
    profilePic.addEventListener('click', function() {
      flipImage(this);
      
      // Also flip the nav profile pic to keep them in sync
      if (navProfilePic) {
        setTimeout(() => {
          navProfilePic.src = this.src;
        }, 150);
      }
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
  
  // Add click event to nav profile picture (optional)
  if (navProfilePic) {
    navProfilePic.addEventListener('click', function() {
      flipNavImage(this);
      
      // Also flip the main profile pic to keep them in sync
      if (profilePic) {
        setTimeout(() => {
          profilePic.src = this.src;
        }, 150);
      }
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
  `;
  document.head.appendChild(style);
  
  // Optional: Preload the second image for smooth transition
  const preloadImg = new Image();
  preloadImg.src = images.secondary;
  
  // Expose functions for external use (optional)
  window.ProfileFlip = {
    flip: () => {
      if (profilePic) flipImage(profilePic);
    },
    setSecondaryImage: (imagePath) => {
      images.secondary = imagePath;
      // Preload new image
      const newPreload = new Image();
      newPreload.src = imagePath;
    },
    getCurrentImage: () => isFlipped ? images.secondary : images.primary,
    isFlipped: () => isFlipped
  };
});