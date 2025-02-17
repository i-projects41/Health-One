function toggleMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Change the text on the toggle button
    const modeToggleBtn = document.getElementById('mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
      modeToggleBtn.textContent = 'Dark Mode';
    } else {
      modeToggleBtn.textContent = 'Light Mode';
    }
  }
  