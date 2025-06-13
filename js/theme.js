// theme.js - Fixed version with correct icon handling
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Check system preference for initial theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (prefersDark) {
    body.classList.remove('light-theme');
    themeToggle.checked = false; // Switch OFF for dark mode
    updateIcons(false); // Show moon icon
  } else {
    body.classList.add('light-theme');
    themeToggle.checked = true; // Switch ON for light mode
    updateIcons(true); // Show sun icon
  }
  
  // Theme toggle event listener
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('light-theme');
      updateIcons(true); // Show sun icon
    } else {
      body.classList.remove('light-theme');
      updateIcons(false); // Show moon icon
    }
  });
  
  // Function to update icons visibility
  function updateIcons(isLight) {
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    
    if (isLight) {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (e.matches) {
      body.classList.remove('light-theme');
      themeToggle.checked = false;
      updateIcons(false);
    } else {
      body.classList.add('light-theme');
      themeToggle.checked = true;
      updateIcons(true);
    }
  });
});