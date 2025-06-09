// theme.js - Fixed version without localStorage
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Check system preference for initial theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme based on system preference
  if (!prefersDark) {
    body.classList.add('light-theme');
    themeToggle.checked = true;
  } else {
    body.classList.remove('light-theme');
    themeToggle.checked = false;
  }
  
  // Theme toggle event listener
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('light-theme');
      console.log('Switched to light theme');
    } else {
      body.classList.remove('light-theme');
      console.log('Switched to dark theme');
    }
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!themeToggle.checked && e.matches) {
      body.classList.remove('light-theme');
    } else if (themeToggle.checked && !e.matches) {
      body.classList.add('light-theme');
    }
  });
});