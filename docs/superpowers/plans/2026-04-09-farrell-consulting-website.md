# Farrell Consulting Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional 4-page static website (Home, Services, About, Contact) for Farrell Consulting using plain HTML, CSS, and JavaScript.

**Architecture:** Multi-page site — one `.html` file per page, all sharing a single `css/styles.css` and `js/main.js`. No build tools or frameworks. Nav and footer HTML blocks are copy-pasted across all four pages with only the `active` class changing per page.

**Tech Stack:** HTML5, CSS3 (custom properties, CSS Grid, Flexbox), Vanilla JS (ES5 IIFE), Google Fonts (Playfair Display + Inter), `npx html-validate` for HTML linting, `npx serve` for local preview.

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | Home page — hero, trust bar, nav, footer |
| `services.html` | Services page — page hero, 3 cards, CTA strip |
| `about.html` | About page — two-column layout, values strip |
| `contact.html` | Contact page — form with JS thank-you swap |
| `css/styles.css` | All styles — tokens, reset, typography, every component |
| `js/main.js` | Three behaviors: scroll shadow, hamburger menu, form swap |
| `favicon.svg` | SVG favicon (navy bg, gold "FC" monogram) |
| `.claude/launch.json` | Already exists — `npx serve` on port 3000 |

---

## Task 1: Initialize Git and Directory Structure

**Files:**
- Create: `css/styles.css` (empty)
- Create: `js/main.js` (empty)
- Create: `.gitignore`

- [ ] **Step 1: Initialize git repo**

```bash
cd "H:/Farrell Consulting"
git init
```

Expected output: `Initialized empty Git repository in H:/Farrell Consulting/.git/`

- [ ] **Step 2: Create directories and placeholder files**

```bash
mkdir -p css js
touch css/styles.css js/main.js
```

- [ ] **Step 3: Create .gitignore**

Write to `H:/Farrell Consulting/.gitignore`:

```
node_modules/
.DS_Store
Thumbs.db
```

- [ ] **Step 4: Stage and commit**

```bash
git add .gitignore css/styles.css js/main.js .claude/launch.json docs/
git commit -m "chore: initialize project structure"
```

Expected: commit succeeds, shows new files added.

---

## Task 2: Create the Shared Stylesheet

**Files:**
- Write: `css/styles.css`

This is the complete stylesheet used by all four pages. Write the full content in one shot.

- [ ] **Step 1: Write `css/styles.css`**

Write the entire file to `H:/Farrell Consulting/css/styles.css`:

```css
/* ============================================================
   FARRELL CONSULTING — Shared Stylesheet
   ============================================================ */

/* === DESIGN TOKENS === */
:root {
  --navy:      #1B2F5E;
  --gold:      #C9A84C;
  --gold-dark: #b5923f;
  --green:     #4A7C59;
  --white:     #FFFFFF;
  --surface:   #F5F7FA;
  --text:      #2D2D2D;
  --navy-dark: #243d7a;
  --shadow-sm: 0 2px 8px rgba(27,47,94,.07);
  --shadow-md: 0 4px 16px rgba(27,47,94,.12);
  --shadow-lg: 0 8px 24px rgba(27,47,94,.16);
  --radius:    6px;
  --radius-lg: 10px;
}

/* === RESET & BASE === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text);
  background: var(--white);
}
img { max-width: 100%; display: block; }
a { text-decoration: none; }
ul { list-style: none; }

/* === TYPOGRAPHY === */
h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  color: var(--navy);
  line-height: 1.15;
}
h1 { font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 700; }
h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 600; }
h3 { font-size: 1.2rem; font-weight: 600; }

/* === LAYOUT === */
.container { max-width: 1100px; margin: 0 auto; padding: 0 2.5rem; }
.section    { padding: 5rem 0; }
.bg-surface { background: var(--surface); }
.text-center { text-align: center; }
.text-center .section-sub { margin-left: auto; margin-right: auto; }

/* === SECTION LABELS === */
.section-label {
  font-size: .8rem; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--gold); margin-bottom: .7rem;
}
.section-title { margin-bottom: 1rem; }
.section-sub   { font-size: 1rem; color: #555; max-width: 600px; }

/* === BUTTONS === */
.btn-primary {
  display: inline-block;
  background: var(--gold); color: var(--navy);
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1rem;
  padding: .85rem 2.2rem; border-radius: var(--radius);
  box-shadow: 0 4px 16px rgba(201,168,76,.35);
  transition: background .2s, transform .15s;
  border: none; cursor: pointer;
}
.btn-primary:hover { background: var(--gold-dark); transform: translateY(-1px); color: var(--navy); }

.btn-secondary {
  display: inline-block;
  background: var(--navy); color: var(--white);
  font-family: 'Inter', sans-serif; font-weight: 600; font-size: .95rem;
  padding: .8rem 2rem; border-radius: var(--radius);
  transition: background .2s; border: none; cursor: pointer;
}
.btn-secondary:hover { background: var(--navy-dark); color: var(--white); }

/* === NAVBAR === */
.navbar {
  position: sticky; top: 0; z-index: 100;
  background: var(--white);
  border-bottom: 1px solid #e2e6ef;
  box-shadow: var(--shadow-sm);
  transition: box-shadow .3s;
}
.navbar.scrolled { box-shadow: var(--shadow-md); }
.navbar-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2.5rem; height: 68px;
}
.nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem; font-weight: 700;
  color: var(--navy); letter-spacing: .01em;
}
.nav-logo span { color: var(--gold); }
.nav-links {
  display: flex; gap: 2rem;
  list-style: none; align-items: center;
}
.nav-links a {
  color: var(--navy); font-size: .95rem; font-weight: 500;
  padding-bottom: 2px; border-bottom: 2px solid transparent;
  transition: border-color .2s;
}
.nav-links a:hover,
.nav-links a.active { border-bottom-color: var(--gold); }
.nav-cta {
  background: var(--gold); color: var(--navy) !important;
  font-weight: 600; font-size: .9rem;
  padding: .55rem 1.3rem !important;
  border-radius: var(--radius);
  border-bottom: none !important;
  transition: background .2s;
}
.nav-cta:hover { background: var(--gold-dark); }

/* Hamburger */
.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
  min-height: 44px; min-width: 44px;
  align-items: center; justify-content: center;
}
.nav-hamburger span {
  display: block; width: 24px; height: 2px;
  background: var(--navy); border-radius: 2px;
  transition: transform .25s, opacity .25s;
}
.nav-hamburger[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-hamburger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* === HERO (Home) === */
.hero {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
  color: var(--white); padding: 7rem 2.5rem 6rem; text-align: center;
}
.hero-eyebrow {
  font-size: .85rem; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 1.2rem;
}
.hero h1   { color: var(--white); max-width: 700px; margin: 0 auto 1.5rem; }
.hero p    { font-size: 1.1rem; max-width: 560px; margin: 0 auto 2.5rem; opacity: .88; color: var(--white); }

/* Page hero (inner pages — shorter) */
.page-hero {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
  color: var(--white); padding: 4rem 2.5rem; text-align: center;
}
.page-hero h1 { color: var(--white); margin-bottom: .75rem; }
.page-hero p  { color: rgba(255,255,255,.85); font-size: 1rem; max-width: 520px; margin: 0 auto; }

/* === TRUST BAR === */
.trust-bar {
  background: var(--surface); padding: 1.4rem 2.5rem;
  display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap;
  border-bottom: 1px solid #e2e6ef;
}
.trust-item {
  display: flex; align-items: center; gap: .5rem;
  font-size: .88rem; font-weight: 500; color: var(--navy);
}
.trust-item::before { content: '✓'; color: var(--green); font-weight: 700; font-size: 1rem; }

/* === SERVICE CARDS === */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.8rem; margin-top: 3rem;
}
.service-card {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 2rem 1.8rem; box-shadow: var(--shadow-sm);
  border-top: 4px solid var(--gold);
  transition: transform .2s, box-shadow .2s;
}
.service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.card-icon {
  width: 44px; height: 44px; background: #eef1f8;
  border-radius: 8px; display: flex; align-items: center;
  justify-content: center; margin-bottom: 1.2rem; font-size: 1.3rem;
}
.service-card h3 { margin-bottom: .6rem; }
.service-card > p { font-size: .92rem; color: #555; }
.card-includes {
  list-style: none; margin-top: .85rem;
  display: flex; flex-direction: column; gap: .4rem;
}
.card-includes li {
  font-size: .88rem; color: #555;
  display: flex; align-items: flex-start; gap: .4rem;
}
.card-includes li::before {
  content: '→'; color: var(--gold);
  font-size: .85rem; flex-shrink: 0; margin-top: 2px;
}

/* === CTA STRIP === */
.cta-strip {
  background: var(--navy); color: var(--white);
  padding: 4.5rem 2.5rem; text-align: center;
}
.cta-strip h2 { color: var(--white); margin-bottom: .75rem; }
.cta-strip p  { color: rgba(255,255,255,.8); margin-bottom: 2rem; font-size: 1rem; }

/* === ABOUT === */
.about-layout {
  display: flex; align-items: flex-start;
  gap: 4rem; flex-wrap: wrap;
}
.about-text           { flex: 1; min-width: 260px; }
.about-text p         { margin-bottom: 1rem; color: #444; }
.about-text .placeholder-note {
  font-size: .85rem; color: #888; font-style: italic;
  border-left: 3px solid var(--gold); padding-left: .75rem;
  margin-top: 1.5rem;
}
.about-photo {
  flex: 0 0 340px; height: 360px;
  background: linear-gradient(135deg, #e8ecf5 0%, #d4daea 100%);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: #8896b3; font-size: .9rem;
  border: 2px dashed #c0c8dc; text-align: center; padding: 1.5rem;
}
.values-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem; margin-top: 3rem;
}
.value-item { text-align: center; padding: 2rem 1.5rem; }
.value-icon {
  width: 52px; height: 52px; background: #eef1f8; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1rem; font-size: 1.4rem;
  border: 2px solid var(--gold);
}
.value-item h3  { margin-bottom: .5rem; }
.value-item p   { font-size: .9rem; color: #555; }

/* === CONTACT === */
.contact-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: start;
}
.contact-info h2      { margin-bottom: 1rem; }
.contact-info > p     { color: #555; margin-bottom: 1.5rem; font-size: .95rem; line-height: 1.7; }
.contact-detail {
  display: flex; align-items: center; gap: .6rem;
  margin-bottom: .6rem; font-size: .9rem;
  color: var(--navy); font-weight: 500;
}
.contact-detail span  { font-size: 1rem; }
.form-group           { margin-bottom: 1.3rem; }
.form-group label {
  display: block; font-size: .88rem; font-weight: 600;
  color: var(--navy); margin-bottom: .4rem;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%; padding: .72rem 1rem;
  border: 1.5px solid #d0d6e4; border-radius: var(--radius);
  font-family: 'Inter', sans-serif; font-size: .95rem; color: var(--text);
  background: var(--white); transition: border-color .2s;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { outline: none; border-color: var(--navy); }
.form-group textarea  { resize: vertical; min-height: 120px; }

#thank-you            { display: none; }
#thank-you.visible    { display: block; }
.thank-you-box {
  background: #f0faf3; border: 2px solid var(--green);
  border-radius: var(--radius-lg); padding: 2.5rem; text-align: center;
}
.thank-you-box h3     { color: var(--green); margin-bottom: .5rem; font-size: 1.4rem; }
.thank-you-box p      { color: #555; font-size: .95rem; }

/* === FOOTER === */
.footer { background: var(--navy); color: var(--white); padding: 2.5rem 0; }
.footer-inner {
  max-width: 1100px; margin: 0 auto; padding: 0 2.5rem;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem;
}
.footer-logo          { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; }
.footer-logo span     { color: var(--gold); }
.footer-links         { display: flex; gap: 1.8rem; }
.footer-links a       { color: rgba(255,255,255,.75); font-size: .88rem; transition: color .2s; }
.footer-links a:hover { color: var(--gold); }
.footer-copy {
  font-size: .82rem; opacity: .55; width: 100%; text-align: center;
  padding-top: .75rem; border-top: 1px solid rgba(255,255,255,.1); margin-top: .25rem;
}

/* === RESPONSIVE (≤ 768px) === */
@media (max-width: 768px) {

  /* Nav — collapse to hamburger */
  .nav-links {
    display: none; flex-direction: column; gap: 0;
    position: absolute; top: 68px; left: 0; right: 0;
    background: var(--white); border-bottom: 1px solid #e2e6ef;
    box-shadow: var(--shadow-md); padding: .5rem 0;
  }
  .nav-links.open   { display: flex; }
  .nav-links a {
    display: flex; align-items: center;
    padding: .85rem 2rem; border-bottom: none;
    font-size: 1rem; min-height: 44px; width: 100%;
  }
  .nav-links a:hover  { background: var(--surface); }
  .nav-cta            { display: none !important; }
  .nav-hamburger      { display: flex; }

  /* Hero */
  .hero               { padding: 4rem 1.5rem 3.5rem; }
  .page-hero          { padding: 3rem 1.5rem; }

  /* Trust bar */
  .trust-bar          { gap: 1.2rem; padding: 1rem 1.5rem; }

  /* Service cards — single column */
  .services-grid      { grid-template-columns: 1fr; }

  /* About — stack vertically */
  .about-layout       { flex-direction: column; }
  .about-photo        { flex: none; width: 100%; height: 200px; }

  /* Contact — single column */
  .contact-layout     { grid-template-columns: 1fr; gap: 2rem; }

  /* Footer */
  .footer-inner       { flex-direction: column; align-items: flex-start; }
  .footer-links       { flex-wrap: wrap; gap: 1rem; }

  /* Touch targets */
  .btn-primary,
  .btn-secondary      { min-height: 44px; width: 100%; text-align: center; display: block; }
  .cta-strip .btn-primary { width: auto; display: inline-block; }
}
```

- [ ] **Step 2: Commit**

```bash
git add css/styles.css
git commit -m "feat: add complete shared stylesheet with design tokens, components, and responsive styles"
```

---

## Task 3: Create the JavaScript File

**Files:**
- Write: `js/main.js`

- [ ] **Step 1: Write `js/main.js`**

Write the entire file to `H:/Farrell Consulting/js/main.js`:

```javascript
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
```

- [ ] **Step 2: Commit**

```bash
git add js/main.js
git commit -m "feat: add JS for sticky nav shadow, hamburger menu, and contact form thank-you"
```

---

## Task 4: Create the Favicon

**Files:**
- Create: `favicon.svg`

- [ ] **Step 1: Write `favicon.svg`**

Write the entire file to `H:/Farrell Consulting/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1B2F5E"/>
  <text x="16" y="23" font-family="Georgia, serif" font-size="18" font-weight="bold"
        fill="#C9A84C" text-anchor="middle">FC</text>
</svg>
```

- [ ] **Step 2: Commit**

```bash
git add favicon.svg
git commit -m "feat: add SVG favicon placeholder"
```

---

## Task 5: Build the Home Page

**Files:**
- Write: `index.html`

- [ ] **Step 1: Write `index.html`**

Write the entire file to `H:/Farrell Consulting/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Farrell Consulting | Bookkeeping &amp; Tax Services</title>
  <meta name="description" content="Farrell Consulting offers professional bookkeeping and tax preparation for small business owners and freelancers. Stay organized, compliant, and confident." />
  <meta property="og:title" content="Farrell Consulting | Bookkeeping &amp; Tax Services" />
  <meta property="og:description" content="Professional bookkeeping and tax services for small business owners and freelancers." />
  <link rel="canonical" href="https://farrellconsulting.net/" />
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <header>
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <main>

    <!-- Hero -->
    <section class="hero">
      <p class="hero-eyebrow">Bookkeeping &amp; Tax Services</p>
      <h1>Take the Stress Out of Your Books</h1>
      <p>Farrell Consulting helps small business owners and freelancers stay organized, compliant, and confident — so you can focus on growing your business.</p>
      <a href="contact.html" class="btn-primary">Get a Free Consultation</a>
    </section>

    <!-- Trust bar -->
    <div class="trust-bar" role="list">
      <div class="trust-item" role="listitem">Small Business Specialists</div>
      <div class="trust-item" role="listitem">Freelancer-Friendly</div>
      <div class="trust-item" role="listitem">Tax Prep &amp; Bookkeeping</div>
      <div class="trust-item" role="listitem">Year-Round Support</div>
    </div>

  </main>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">Farrell<span>.</span>Consulting</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <p class="footer-copy">&copy; 2026 Farrell Consulting. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Validate HTML**

```bash
cd "H:/Farrell Consulting"
npx --yes html-validate index.html
```

Expected: `index.html: 0 errors`

If errors appear, fix them before proceeding.

- [ ] **Step 3: Start preview server and verify visually**

Start preview server named "Farrell Consulting" (from `.claude/launch.json`). Take a screenshot. Verify:
- Sticky nav visible with logo, links, gold "Free Consultation" button
- Navy gradient hero with gold eyebrow text, white H1, gold CTA button
- Light gray trust bar with 4 green checkmark items
- Navy footer with 4 links

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add home page with hero and trust bar"
```

---

## Task 6: Build the Services Page

**Files:**
- Write: `services.html`

- [ ] **Step 1: Write `services.html`**

Write the entire file to `H:/Farrell Consulting/services.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Services | Farrell Consulting</title>
  <meta name="description" content="Farrell Consulting offers monthly bookkeeping, catch-up and cleanup bookkeeping, and tax preparation for small businesses and freelancers." />
  <meta property="og:title" content="Services | Farrell Consulting" />
  <meta property="og:description" content="Monthly bookkeeping, catch-up bookkeeping, and tax preparation services for small business owners and freelancers." />
  <link rel="canonical" href="https://farrellconsulting.net/services.html" />
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <header>
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html" class="active">Services</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <main>

    <!-- Page hero -->
    <section class="page-hero">
      <h1>Our Services</h1>
      <p>Whether you need ongoing bookkeeping, help catching up, or expert tax filing — we have a solution built for your business.</p>
    </section>

    <!-- Service cards -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-label text-center">What We Offer</div>
        <h2 class="section-title text-center">Services Built for Small Businesses</h2>
        <div class="services-grid">

          <!-- Card 1: Monthly Bookkeeping -->
          <article class="service-card">
            <div class="card-icon" aria-hidden="true">📒</div>
            <h3>Monthly Bookkeeping</h3>
            <p><strong>Best for:</strong> Established businesses that want accurate, up-to-date books every month without the stress.</p>
            <ul class="card-includes">
              <li>Monthly account reconciliation</li>
              <li>Transaction categorization</li>
              <li>Monthly financial reports (P&amp;L, Balance Sheet)</li>
              <li>Ongoing communication &amp; support</li>
            </ul>
          </article>

          <!-- Card 2: Catch-Up & Cleanup -->
          <article class="service-card">
            <div class="card-icon" aria-hidden="true">🔍</div>
            <h3>Catch-Up &amp; Cleanup Bookkeeping</h3>
            <p><strong>Best for:</strong> Businesses that are behind on their books — whether it's a few months or a few years.</p>
            <ul class="card-includes">
              <li>Backlog reconciliation (any timeframe)</li>
              <li>Error identification &amp; correction</li>
              <li>Chart of accounts clean-up</li>
              <li>Handoff to monthly bookkeeping when ready</li>
            </ul>
          </article>

          <!-- Card 3: Tax Preparation -->
          <article class="service-card">
            <div class="card-icon" aria-hidden="true">📋</div>
            <h3>Tax Preparation</h3>
            <p><strong>Best for:</strong> Self-employed individuals and small business owners who want accurate, stress-free tax filing.</p>
            <ul class="card-includes">
              <li>Federal &amp; state income tax filing</li>
              <li>Self-employment tax calculation</li>
              <li>Deduction review to minimize liability</li>
              <li>Year-round tax planning support</li>
            </ul>
          </article>

        </div>
      </div>
    </section>

    <!-- CTA strip -->
    <section class="cta-strip">
      <h2>Not Sure Which Service You Need?</h2>
      <p>Let's talk through your situation — no pressure, no obligation.</p>
      <a href="contact.html" class="btn-primary">Get a Free Consultation</a>
    </section>

  </main>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">Farrell<span>.</span>Consulting</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <p class="footer-copy">&copy; 2026 Farrell Consulting. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Validate HTML**

```bash
npx html-validate services.html
```

Expected: `services.html: 0 errors`

- [ ] **Step 3: Preview and verify**

Navigate to `/services.html` in the preview. Verify:
- "Services" nav link has the gold underline active state
- 3 service cards visible in a row (desktop) with gold top border
- Each card has an icon, title, bold "Best for:" line, and arrow-bullet list
- Navy CTA strip at bottom with gold button

- [ ] **Step 4: Commit**

```bash
git add services.html
git commit -m "feat: add services page with 3 service cards and CTA strip"
```

---

## Task 7: Build the About Page

**Files:**
- Write: `about.html`

- [ ] **Step 1: Write `about.html`**

Write the entire file to `H:/Farrell Consulting/about.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About | Farrell Consulting</title>
  <meta name="description" content="Learn about Farrell Consulting — our mission, values, and commitment to helping small business owners and freelancers achieve financial clarity." />
  <meta property="og:title" content="About | Farrell Consulting" />
  <meta property="og:description" content="Farrell Consulting's mission is to give small business owners and freelancers the financial clarity they deserve." />
  <link rel="canonical" href="https://farrellconsulting.net/about.html" />
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <header>
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="about.html" class="active">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <main>

    <!-- Page hero -->
    <section class="page-hero">
      <h1>About Farrell Consulting</h1>
      <p>We believe every small business owner deserves financial clarity — without the complexity or the big-firm price tag.</p>
    </section>

    <!-- Mission & Bio -->
    <section class="section">
      <div class="container">
        <div class="about-layout">

          <div class="about-text">
            <div class="section-label">Our Mission</div>
            <h2 class="section-title">Numbers You Can Trust</h2>
            <p>Farrell Consulting was founded with one mission: to give small business owners and freelancers the financial clarity they deserve. We handle the books so you can handle your business.</p>
            <p>We work with sole proprietors, LLCs, S-Corps, and independent contractors across a wide range of industries. Whether you need ongoing monthly bookkeeping, help getting caught up, or a trusted partner at tax time — we're here.</p>
            <p class="placeholder-note">
              ✏️ <strong>Placeholder:</strong> Replace this section with your personal story — how you got started, your background, credentials, and what sets Farrell Consulting apart. This is a great place to build trust with potential clients.
            </p>
          </div>

          <div class="about-photo" role="img" aria-label="Photo placeholder — replace with a professional photo of the Farrell Consulting team or founder">
            <p>📷<br /><br />Replace with your photo<br />(recommended: 680×720px)</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Values strip -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-label text-center">What We Stand For</div>
        <h2 class="section-title text-center">Our Core Values</h2>
        <div class="values-strip">

          <div class="value-item">
            <div class="value-icon" aria-hidden="true">🎯</div>
            <h3>Accuracy</h3>
            <p>Every number matters. We take meticulous care with your books so you can make confident decisions.</p>
          </div>

          <div class="value-item">
            <div class="value-icon" aria-hidden="true">🤝</div>
            <h3>Transparency</h3>
            <p>No surprises. We communicate clearly, explain our work, and keep you informed every step of the way.</p>
          </div>

          <div class="value-item">
            <div class="value-icon" aria-hidden="true">💡</div>
            <h3>Accessibility</h3>
            <p>Professional financial support shouldn't be out of reach. We offer fair, straightforward pricing for small businesses.</p>
          </div>

        </div>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">Farrell<span>.</span>Consulting</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <p class="footer-copy">&copy; 2026 Farrell Consulting. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Validate HTML**

```bash
npx html-validate about.html
```

Expected: `about.html: 0 errors`

- [ ] **Step 3: Preview and verify**

Navigate to `/about.html` in the preview. Verify:
- "About" nav link has gold underline active state
- Two-column layout: mission text on left, dashed photo placeholder on right
- Italic placeholder note with gold left-border visible in the text column
- 3 value items in a grid below with gold-bordered circular icons

- [ ] **Step 4: Commit**

```bash
git add about.html
git commit -m "feat: add about page with mission section and values strip"
```

---

## Task 8: Build the Contact Page

**Files:**
- Write: `contact.html`

- [ ] **Step 1: Write `contact.html`**

Write the entire file to `H:/Farrell Consulting/contact.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact | Farrell Consulting</title>
  <meta name="description" content="Get in touch with Farrell Consulting. We serve small business owners and freelancers. Request a free consultation today." />
  <meta property="og:title" content="Contact | Farrell Consulting" />
  <meta property="og:description" content="Contact Farrell Consulting to get a free consultation for bookkeeping or tax services." />
  <link rel="canonical" href="https://farrellconsulting.net/contact.html" />
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <header>
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html" class="active">Contact</a></li>
        </ul>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <main>

    <!-- Page hero -->
    <section class="page-hero">
      <h1>Let's Talk About Your Books</h1>
      <p>We serve small business owners and freelancers. Reach out and we'll respond within one business day.</p>
    </section>

    <!-- Contact layout -->
    <section class="section">
      <div class="container">
        <div class="contact-layout">

          <!-- Left: info -->
          <div class="contact-info">
            <div class="section-label">Get in Touch</div>
            <h2 class="section-title">Free Consultation</h2>
            <p>Not sure what you need? That's okay — just fill out the form and tell us a bit about your business. We'll reach out to schedule a free, no-obligation consultation.</p>
            <p>We work with:</p>
            <div class="contact-detail"><span aria-hidden="true">✓</span> Freelancers &amp; independent contractors</div>
            <div class="contact-detail"><span aria-hidden="true">✓</span> Sole proprietors &amp; self-employed individuals</div>
            <div class="contact-detail"><span aria-hidden="true">✓</span> LLCs and S-Corps</div>
            <div class="contact-detail"><span aria-hidden="true">✓</span> Side businesses &amp; new startups</div>
          </div>

          <!-- Right: form -->
          <div>
            <form id="contact-form" novalidate>
              <div class="form-group">
                <label for="name">Full Name <span aria-hidden="true">*</span></label>
                <input type="text" id="name" name="name" placeholder="Jane Smith" required autocomplete="name" />
              </div>
              <div class="form-group">
                <label for="email">Email Address <span aria-hidden="true">*</span></label>
                <input type="email" id="email" name="email" placeholder="jane@example.com" required autocomplete="email" />
              </div>
              <div class="form-group">
                <label for="business-type">Business Type <span aria-hidden="true">*</span></label>
                <select id="business-type" name="business-type" required>
                  <option value="">Select one…</option>
                  <option value="freelancer">Freelancer / Self-Employed</option>
                  <option value="llc">LLC / S-Corp</option>
                  <option value="sole-prop">Sole Proprietor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message <span aria-hidden="true">*</span></label>
                <textarea id="message" name="message" placeholder="Tell us a bit about what you need — we're here to help." required></textarea>
              </div>
              <button type="submit" class="btn-secondary">Send Message</button>
            </form>

            <div id="thank-you" role="alert">
              <div class="thank-you-box">
                <h3>Message Received!</h3>
                <p>Thanks for reaching out. We'll be in touch within one business day.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">Farrell<span>.</span>Consulting</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <p class="footer-copy">&copy; 2026 Farrell Consulting. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Validate HTML**

```bash
npx html-validate contact.html
```

Expected: `contact.html: 0 errors`

- [ ] **Step 3: Preview and verify**

Navigate to `/contact.html` in the preview. Verify:
- "Contact" nav link has gold underline active state
- Two-column layout: info panel left, form right
- Form has 4 fields: name, email, select dropdown, textarea
- Submit button is navy with white text
- Submit the form — form should disappear and green thank-you box should appear

- [ ] **Step 4: Commit**

```bash
git add contact.html
git commit -m "feat: add contact page with form and JS thank-you swap"
```

---

## Task 9: Final Cleanup and Full Site Review

**Files:**
- Delete: `mockup.html`

- [ ] **Step 1: Remove mockup file**

```bash
cd "H:/Farrell Consulting"
rm mockup.html
```

- [ ] **Step 2: Validate all HTML files**

```bash
npx html-validate index.html services.html about.html contact.html
```

Expected: `4 file(s) linted successfully, 0 error(s)`

- [ ] **Step 3: Full site review in preview**

Start the preview server. Walk through every page and verify:

| Check | Page |
|---|---|
| Sticky nav stays at top on scroll | All pages |
| Active nav link has gold underline | All pages (correct per page) |
| "Free Consultation" gold button in nav | All pages (desktop) |
| Hamburger appears at ≤768px, opens mobile menu | All pages |
| Hero gradient and gold CTA button render correctly | index.html |
| Trust bar with green checkmarks renders | index.html |
| 3 service cards in a row with gold top border | services.html |
| Card hover lifts (translateY) | services.html |
| Navy CTA strip with gold button at bottom | services.html |
| Two-column about layout (text + photo placeholder) | about.html |
| 3 values in grid below | about.html |
| Contact form two-column layout | contact.html |
| Form submits → thank-you green box appears | contact.html |
| Footer navy bg, 4 links, gold hover | All pages |
| Footer copyright line visible | All pages |

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: remove mockup file, site complete and ready for review"
```

- [ ] **Step 5: Confirm preview is running for client review**

The preview server (`npx serve .` on port 3000) should be running. Share the local URL with the client for review before deployment.
