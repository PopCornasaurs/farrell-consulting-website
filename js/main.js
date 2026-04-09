(function () {
  'use strict';

  // ── 1. Sticky nav enhanced shadow on scroll ──────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ── 2. Hamburger menu toggle ──────────────────────────────────────────────
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (navbar && !navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when a nav link is clicked (mobile navigation)
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── 3. Contact form — static thank-you swap ───────────────────────────────
  var contactForm = document.querySelector('#contact-form');
  var thankYou    = document.querySelector('#thank-you');

  if (contactForm && thankYou) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      thankYou.classList.add('visible');
    });
  }

}());
