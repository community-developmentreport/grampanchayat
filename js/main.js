/**
 * main.js
 * Entry point — initialises all interactive features.
 */

import { initScrollReveal } from './scrollReveal.js';
import { initActiveNav }    from './activeNav.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initActiveNav();
});
