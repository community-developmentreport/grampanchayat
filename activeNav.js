/**
 * activeNav.js
 * Highlights the nav link corresponding to the currently visible section.
 * Fires on scroll using requestAnimationFrame for throttling.
 */

export function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
    10
  ) || 58;

  let ticking = false;

  function updateActiveLink() {
    let current = '';

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - navHeight - 10) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveLink);
      ticking = true;
    }
  });

  // Run once on load
  updateActiveLink();
}
