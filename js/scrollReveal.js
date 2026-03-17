/**
 * scrollReveal.js
 * Animates elements with class="reveal" when they enter the viewport.
 * Uses IntersectionObserver for performance.
 */

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
