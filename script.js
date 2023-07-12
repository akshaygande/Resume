function switchTheme() {
    var root = document.documentElement;

    // Get the current background color
    var currentBackground = getComputedStyle(root).getPropertyValue('--background').trim();

    // Switch to dark theme if current theme is light, and vice versa
    if (currentBackground === getComputedStyle(root).getPropertyValue('--light-background').trim()) {
      root.style.setProperty('--background', getComputedStyle(root).getPropertyValue('--dark-background').trim());
      root.style.setProperty('--text', getComputedStyle(root).getPropertyValue('--dark-text').trim());
      root.style.setProperty('--secondary', getComputedStyle(root).getPropertyValue('--dark-secondary').trim());
      root.style.setProperty('--accent', getComputedStyle(root).getPropertyValue('--dark-accent').trim());
      root.style.setProperty('--accent-secondary', getComputedStyle(root).getPropertyValue('--dark-accent-secondary').trim());
      root.style.setProperty('--border', getComputedStyle(root).getPropertyValue('--dark-border').trim());
    } else {
      root.style.setProperty('--background', getComputedStyle(root).getPropertyValue('--light-background').trim());
      root.style.setProperty('--text', getComputedStyle(root).getPropertyValue('--light-text').trim());
      root.style.setProperty('--secondary', getComputedStyle(root).getPropertyValue('--light-secondary').trim());
      root.style.setProperty('--accent', getComputedStyle(root).getPropertyValue('--light-accent').trim());
      root.style.setProperty('--accent-secondary', getComputedStyle(root).getPropertyValue('--light-accent-secondary').trim());
      root.style.setProperty('--border', getComputedStyle(root).getPropertyValue('--light-border').trim());
    }
  }
