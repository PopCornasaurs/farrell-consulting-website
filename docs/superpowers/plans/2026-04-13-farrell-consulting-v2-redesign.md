# Farrell Consulting V2 Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the existing 4-page static site to match the Wenonah Bookkeeping layout pattern — adding a Pricing page, redesigning the Home hero to two-column, adding services preview + pricing teaser sections, updating nav (Pricing link + phone), swapping Tax Prep for Training & Consultation, updating About credentials, and updating Contact details.

**Architecture:** Multi-page static HTML/CSS/JS (no build tools). All pages share `css/styles.css` and `js/main.js`. New CSS classes appended to styles.css; no existing classes removed or modified. JS is unchanged.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox), Vanilla JS ES5 strict-mode (no changes), PowerShell HTTP server on port 3000 for local preview.

---

## File Map

| File | Action | What changes |
|------|--------|-------------|
| `css/styles.css` | Modify (append) | New component classes: nav-phone, hero-two-col, btn-ghost, services-preview, pricing-teaser, pricing-grid, credentials |
| `index.html` | Modify | New nav, redesigned hero, services preview strip, pricing teaser, updated trust bar |
| `about.html` | Modify | New nav, remove placeholder note, add credentials section |
| `services.html` | Modify | New nav, swap Tax Prep card → Training & Consultation |
| `contact.html` | Modify | New nav, replace "we work with" items with phone + email |
| `pricing.html` | Create | Full new page with 3-tier pricing cards |

---

## Task 1: Add new CSS component styles

**Files:**
- Modify: `css/styles.css` (append at end of file, after line 357)

- [ ] **Step 1: Append the following CSS block to the end of `css/styles.css`**

```css
/* =============================================
   V2: Nav phone number
   ============================================= */
.nav-phone {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--navy);
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.01em;
}
.nav-phone:hover { text-decoration: underline; }

/* =============================================
   V2: Hero two-column layout
   ============================================= */
.hero-two-col {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
.hero-two-col .hero-text { text-align: left; }
/* Override auto-centering margins from base .hero h1 / .hero p */
.hero-two-col h1 { margin: 0 0 1.2rem; }
.hero-two-col p  { margin: 0; }
.hero-photo {
  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed rgba(255, 255, 255, 0.35);
  border-radius: var(--radius-lg);
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem;
}
.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.75rem;
}
.btn-ghost {
  display: inline-block;
  padding: 0.85rem 2rem;
  border: 2px solid rgba(255, 255, 255, 0.75);
  color: var(--white);
  background: transparent;
  border-radius: var(--radius);
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  cursor: pointer;
}
.btn-ghost:hover {
  background: var(--white);
  color: var(--navy);
  border-color: var(--white);
}

/* =============================================
   V2: Services preview strip (home page)
   ============================================= */
.services-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.services-preview-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border-top: 4px solid var(--gold);
  box-shadow: var(--shadow-sm);
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.services-preview-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
.services-preview-card .card-icon {
  font-size: 2rem;
  line-height: 1;
}
.services-preview-card h3 {
  font-size: 1.05rem;
  color: var(--navy);
  margin: 0;
}
.services-preview-card p {
  font-size: 0.9rem;
  color: var(--text);
  margin: 0;
  flex: 1;
  line-height: 1.5;
}
.card-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  margin-top: 0.5rem;
}
.card-link:hover { text-decoration: underline; }

/* =============================================
   V2: Pricing teaser row (home page)
   ============================================= */
.pricing-teaser {
  text-align: center;
  padding: 2.5rem 1.5rem;
}
.pricing-teaser p {
  font-size: 1.1rem;
  color: var(--navy);
  font-weight: 500;
  margin: 0 0 0.75rem;
}
.pricing-teaser a {
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
}
.pricing-teaser a:hover { text-decoration: underline; }

/* =============================================
   V2: Pricing page cards
   ============================================= */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}
.pricing-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border-top: 4px solid var(--navy);
  box-shadow: var(--shadow-sm);
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.pricing-card.featured {
  border-top-color: var(--gold);
  box-shadow: var(--shadow-md);
}
.most-popular {
  display: inline-block;
  background: var(--gold);
  color: var(--white);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 0.2rem 0.65rem;
  border-radius: 99px;
  align-self: flex-start;
}
.pricing-card h3 {
  font-size: 1.3rem;
  color: var(--navy);
  margin: 0;
}
.pricing-price {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.1;
}
.pricing-price span {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--text);
}
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}
.feature-list li {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.4;
}
.feature-list li::before {
  content: "✓";
  color: var(--green);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.05em;
}
.pricing-card .btn-secondary {
  display: block;
  text-align: center;
  margin-top: 0.5rem;
}
.pricing-note {
  text-align: center;
  font-size: 0.875rem;
  color: var(--text);
  margin-top: 2rem;
  opacity: 0.75;
  line-height: 1.6;
}

/* =============================================
   V2: Credentials section (about page)
   ============================================= */
.credential-section {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.credential-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  text-align: center;
  max-width: 220px;
}
.credential-placeholder {
  width: 120px;
  height: 120px;
  background: var(--surface);
  border: 2px dashed rgba(27, 47, 94, 0.4);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--navy);
  text-align: center;
  padding: 0.5rem;
  line-height: 1.4;
}
.credential-card h4 {
  font-size: 0.95rem;
  color: var(--navy);
  font-weight: 600;
  margin: 0;
}
.credential-card p {
  font-size: 0.8rem;
  color: var(--text);
  opacity: 0.65;
  margin: 0;
}

/* =============================================
   V2: Responsive overrides (appended to existing @media block)
   ============================================= */
@media (max-width: 768px) {
  .nav-phone           { display: none; }
  .hero-two-col        { grid-template-columns: 1fr; }
  .hero-two-col .hero-text { text-align: center; }
  .hero-ctas           { justify-content: center; }
  .hero-photo          { display: none; }
  .services-preview-grid { grid-template-columns: 1fr; }
  .pricing-grid        { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Verify no regressions**

Start preview server (`http://localhost:3000/`) and confirm the existing home page renders identically to before — no layout shifts, no broken styles.

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: add V2 CSS — nav-phone, hero-two-col, btn-ghost, pricing grid, credential card"
```

---

## Task 2: Update navigation and footer on all existing pages

**Files:**
- Modify: `index.html`
- Modify: `about.html`
- Modify: `services.html`
- Modify: `contact.html`

The new nav adds: (1) About before Services, (2) Pricing link between Services and Contact, (3) phone number link between nav-links and nav-cta.

- [ ] **Step 1: Replace `<div class="navbar-inner">…</div>` in `index.html`**

```html
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="tel:+19548211678" class="nav-phone">(954) 821-1678</a>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
```

- [ ] **Step 2: Replace `<div class="navbar-inner">…</div>` in `about.html`**

```html
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html" class="active">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="tel:+19548211678" class="nav-phone">(954) 821-1678</a>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
```

- [ ] **Step 3: Replace `<div class="navbar-inner">…</div>` in `services.html`**

```html
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html" class="active">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="tel:+19548211678" class="nav-phone">(954) 821-1678</a>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
```

- [ ] **Step 4: Replace `<div class="navbar-inner">…</div>` in `contact.html`**

```html
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html" class="active">Contact</a></li>
        </ul>
        <a href="tel:+19548211678" class="nav-phone">(954) 821-1678</a>
        <a href="contact.html" class="nav-cta">Free Consultation</a>
        <button class="nav-hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
```

- [ ] **Step 5: Update footer `<ul class="footer-links">` on all 4 pages**

Replace each footer links list with:
```html
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
```

- [ ] **Step 6: Verify in preview**

Open `http://localhost:3000/`. Nav should show: Home · About · Services · Pricing · Contact + `(954) 821-1678` phone link. Pricing link will 404 until Task 5 — that's expected.

- [ ] **Step 7: Commit**

```bash
git add index.html about.html services.html contact.html
git commit -m "feat: update nav and footer on all pages — add Pricing link and phone number"
```

---

## Task 3: Redesign home hero to two-column layout

**Files:**
- Modify: `index.html` (hero section and trust bar only)

- [ ] **Step 1: Replace the `<!-- Hero -->` section in `index.html`**

Find:
```html
    <!-- Hero -->
    <section class="hero">
      <p class="hero-eyebrow">Bookkeeping &amp; Tax Services</p>
      <h1>Take the Stress Out of Your Books</h1>
      <p>Farrell Consulting helps small business owners and freelancers stay organized, compliant, and confident — so you can focus on growing your business.</p>
      <a href="contact.html" class="btn-primary">Get a Free Consultation</a>
    </section>
```

Replace with:
```html
    <!-- Hero -->
    <section class="hero">
      <div class="hero-two-col">
        <div class="hero-text">
          <p class="hero-eyebrow">Bookkeeping &amp; Tax Services</p>
          <h1>Your Books Deserve Better — And So Do You</h1>
          <p>Farrell Consulting helps small business owners and freelancers stay organized, compliant, and confident — so you can focus on growing your business.</p>
          <div class="hero-ctas">
            <a href="contact.html" class="btn-primary">Book a Free Consultation</a>
            <a href="services.html" class="btn-ghost">View Our Services</a>
          </div>
        </div>
        <div class="hero-photo" role="img" aria-label="Photo placeholder — replace with a professional photo of the Farrell Consulting founder (recommended: 600×640px)">
          <p aria-hidden="true">📷<br /><br />Replace with your photo<br />(recommended: 600×640px)</p>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Update trust bar — replace "Tax Prep &amp; Bookkeeping" with "Bookkeeping &amp; Training"**

Find:
```html
      <div class="trust-item" role="listitem">Tax Prep &amp; Bookkeeping</div>
```

Replace with:
```html
      <div class="trust-item" role="listitem">Bookkeeping &amp; Training</div>
```

- [ ] **Step 3: Verify in preview at `http://localhost:3000/`**

Expected: Left column has eyebrow, new headline, sub-copy, and two CTAs side by side ("Book a Free Consultation" gold + "View Our Services" ghost outline). Right column shows dashed photo placeholder box. Trust bar shows updated "Bookkeeping & Training" item.

At mobile width (< 768px): single column, photo hidden, text centered, CTAs centered.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: redesign home hero — two-column layout, dual CTAs, updated trust bar"
```

---

## Task 4: Add services preview strip and pricing teaser to home page

**Files:**
- Modify: `index.html`

- [ ] **Step 1: In `index.html`, find the closing `</main>` tag and insert the following two sections immediately before it**

```html
    <!-- Services preview -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-label text-center">What We Offer</div>
        <h2 class="section-title text-center">Services Built for Small Businesses</h2>
        <div class="services-preview-grid">

          <div class="services-preview-card">
            <div class="card-icon" aria-hidden="true">📒</div>
            <h3>Monthly Bookkeeping</h3>
            <p>Accurate, up-to-date books every month — so you always know where your business stands.</p>
            <a href="services.html" class="card-link">Learn more →</a>
          </div>

          <div class="services-preview-card">
            <div class="card-icon" aria-hidden="true">🔍</div>
            <h3>Catch-Up &amp; Cleanup</h3>
            <p>Behind on your books? We'll get you caught up — whether it's months or years.</p>
            <a href="services.html" class="card-link">Learn more →</a>
          </div>

          <div class="services-preview-card">
            <div class="card-icon" aria-hidden="true">🎓</div>
            <h3>Training &amp; Consultation</h3>
            <p>Learn QuickBooks, set up your system correctly, and get expert guidance when you need it.</p>
            <a href="services.html" class="card-link">Learn more →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Pricing teaser -->
    <section class="pricing-teaser bg-surface">
      <p>Transparent pricing starting at $300/month</p>
      <a href="pricing.html">See full pricing →</a>
    </section>
```

- [ ] **Step 2: Verify in preview at `http://localhost:3000/`**

Scroll below the trust bar. Expected: services preview strip with 3 cards (gold top border, hover lift). Below that, a centered pricing teaser row with green "See full pricing →" link.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add services preview strip and pricing teaser to home page"
```

---

## Task 5: Create pricing.html — new Pricing page

**Files:**
- Create: `pricing.html`

- [ ] **Step 1: Create `pricing.html` with the following content**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pricing | Farrell Consulting</title>
  <meta name="description" content="Simple, transparent bookkeeping pricing for small businesses and freelancers. Plans starting at $300/month. No hidden fees." />
  <meta property="og:title" content="Pricing | Farrell Consulting" />
  <meta property="og:description" content="Transparent bookkeeping pricing starting at $300/month. No hidden fees, no surprises." />
  <link rel="canonical" href="https://farrellconsulting.net/pricing.html" />
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <header>
    <nav class="navbar" aria-label="Main">
      <div class="navbar-inner">
        <a href="index.html" class="nav-logo">Farrell<span>.</span>Consulting</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html" class="active">Pricing</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <a href="tel:+19548211678" class="nav-phone">(954) 821-1678</a>
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
      <h1>Simple, Transparent Pricing</h1>
      <p>No hidden fees. No surprises. Just clean books at a fair price.</p>
    </section>

    <!-- Pricing cards -->
    <section class="section">
      <div class="container">
        <div class="pricing-grid">

          <!-- Essential -->
          <div class="pricing-card">
            <h3>Essential</h3>
            <div class="pricing-price">$300–$400<span>/month</span></div>
            <ul class="feature-list">
              <li>Monthly account reconciliation</li>
              <li>Transaction categorization</li>
              <li>Monthly P&amp;L &amp; Balance Sheet</li>
              <li>Email support</li>
            </ul>
            <a href="contact.html" class="btn-secondary">Get Started</a>
          </div>

          <!-- Professional (featured) -->
          <div class="pricing-card featured">
            <span class="most-popular">Most Popular</span>
            <h3>Professional</h3>
            <div class="pricing-price">$450–$550<span>/month</span></div>
            <ul class="feature-list">
              <li>Everything in Essential</li>
              <li>Chart of accounts review</li>
              <li>Quarterly financial review call</li>
              <li>Priority response</li>
            </ul>
            <a href="contact.html" class="btn-secondary">Get Started</a>
          </div>

          <!-- Premium -->
          <div class="pricing-card">
            <h3>Premium</h3>
            <div class="pricing-price">$600–$800<span>/month</span></div>
            <ul class="feature-list">
              <li>Everything in Professional</li>
              <li>Catch-up bookkeeping (up to 3 months)</li>
              <li>Year-round tax planning support</li>
              <li>Dedicated point of contact</li>
            </ul>
            <a href="contact.html" class="btn-secondary">Get Started</a>
          </div>

        </div>

        <p class="pricing-note">
          All plans billed monthly. Pricing based on transaction volume and complexity.<br />
          Not sure which plan fits? We'll help you find the right fit during your free consultation.
        </p>

      </div>
    </section>

    <!-- CTA strip -->
    <section class="cta-strip">
      <h2>Ready to Get Started?</h2>
      <p>Let's find the right plan for your business — no pressure, no obligation.</p>
      <a href="contact.html" class="btn-primary">Book a Free Consultation</a>
    </section>

  </main>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">Farrell<span>.</span>Consulting</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <p class="footer-copy">&copy; 2026 Farrell Consulting. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify in preview at `http://localhost:3000/pricing.html`**

Expected: Page hero "Simple, Transparent Pricing". Three-column pricing grid: Essential (navy top border), Professional (gold top border + "Most Popular" gold badge), Premium (navy top border). Each card has price range in Playfair Display font, checkmark feature list, navy "Get Started" button. Pricing note below. Navy CTA strip at bottom. Nav shows Pricing as active link (gold underline).

- [ ] **Step 3: Confirm home page "See full pricing →" link now works**

Navigate to `http://localhost:3000/` and click "See full pricing →" — should land on pricing.html.

- [ ] **Step 4: Commit**

```bash
git add pricing.html
git commit -m "feat: create pricing page — Essential, Professional, Premium tiers"
```

---

## Task 6: Update services.html — swap Tax Preparation for Training and Consultation

**Files:**
- Modify: `services.html`

- [ ] **Step 1: Replace the Tax Preparation card in `services.html`**

Find and remove this entire block:
```html
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
```

Replace with:
```html
          <!-- Card 3: Training and Consultation -->
          <article class="service-card">
            <div class="card-icon" aria-hidden="true">🎓</div>
            <h3>Training &amp; Consultation</h3>
            <p><strong>Best for:</strong> Business owners who manage their own books and want to learn QuickBooks, set up their system correctly, or get expert guidance when questions arise.</p>
            <ul class="card-includes">
              <li>QuickBooks setup, review &amp; optimization</li>
              <li>1-on-1 training tailored to your business</li>
              <li>Answers to your bookkeeping &amp; accounting questions</li>
              <li>Ongoing support as your business grows</li>
            </ul>
          </article>
```

- [ ] **Step 2: Verify in preview at `http://localhost:3000/services.html`**

Expected: Three service cards — Monthly Bookkeeping (📒), Catch-Up & Cleanup (🔍), Training & Consultation (🎓). Tax Preparation card is gone.

- [ ] **Step 3: Commit**

```bash
git add services.html
git commit -m "feat: swap Tax Preparation card for Training and Consultation on services page"
```

---

## Task 7: Update about.html — remove placeholder note, add credentials section

**Files:**
- Modify: `about.html`

- [ ] **Step 1: Remove the placeholder note paragraph from `about.html`**

Find and delete this entire block:
```html
            <p class="placeholder-note">
              <span aria-hidden="true">✏️</span> <strong>Placeholder:</strong> Replace this section with your personal story — how you got started, your background, credentials, and what sets Farrell Consulting apart. This is a great place to build trust with potential clients.
            </p>
```

- [ ] **Step 2: Add credentials section after the closing `</section>` of the values strip**

The values strip section ends with `</section>` (the one containing `class="values-strip"`). Insert this new section immediately after it, before `</main>`:

```html
    <!-- Credentials -->
    <section class="section">
      <div class="container">
        <div class="section-label text-center">Credentials</div>
        <h2 class="section-title text-center">Certified &amp; Qualified</h2>
        <div class="credential-section">
          <div class="credential-card">
            <div class="credential-placeholder" role="img" aria-label="QuickBooks ProAdvisor certification badge placeholder — replace with actual badge image">
              Replace with<br />certification<br />badge image
            </div>
            <h4>Certified QuickBooks ProAdvisor</h4>
            <p>Replace with certification badge image</p>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 3: Verify in preview at `http://localhost:3000/about.html`**

Expected: Mission section with no ✏️ placeholder paragraph. Values strip (Accuracy · Transparency · Accessibility) unchanged. New "Credentials" section below with centered dashed placeholder box labeled "Certified QuickBooks ProAdvisor".

- [ ] **Step 4: Commit**

```bash
git add about.html
git commit -m "feat: update about page — remove placeholder note, add credentials section"
```

---

## Task 8: Update contact.html — replace "we work with" list with contact details

**Files:**
- Modify: `contact.html`

- [ ] **Step 1: Replace the "we work with" block in `contact.html`**

Find:
```html
            <p>We work with:</p>
            <div class="contact-detail"><span aria-hidden="true">✓</span> Freelancers &amp; independent contractors</div>
            <div class="contact-detail"><span aria-hidden="true">✓</span> Sole proprietors &amp; self-employed individuals</div>
            <div class="contact-detail"><span aria-hidden="true">✓</span> LLCs and S-Corps</div>
            <div class="contact-detail"><span aria-hidden="true">✓</span> Side businesses &amp; new startups</div>
```

Replace with:
```html
            <div class="contact-detail"><span aria-hidden="true">📞</span> <a href="tel:+19548211678">(954) 821-1678</a></div>
            <div class="contact-detail"><span aria-hidden="true">✉</span> <a href="mailto:Christian@farrellconsulting.net">Christian@farrellconsulting.net</a></div>
```

- [ ] **Step 2: Verify in preview at `http://localhost:3000/contact.html`**

Expected: Left panel shows "Free Consultation" heading, intro paragraph, then two clickable contact items — phone number and email address. The "We work with:" list is gone. Form on the right is unchanged.

- [ ] **Step 3: Commit**

```bash
git add contact.html
git commit -m "feat: update contact page — replace client list with phone and email"
```

---

## Task 9: Final verification and push

- [ ] **Step 1: Check all nav links work across all 5 pages**

Visit each page and verify:
- Home (`/`) — "Home" link has gold underline, Pricing link goes to pricing.html
- About — "About" link has gold underline
- Services — "Services" link has gold underline, Tax Prep card is absent
- Pricing — "Pricing" link has gold underline, 3-tier cards visible
- Contact — "Contact" link has gold underline, phone + email in left panel

- [ ] **Step 2: Check CTA link chains**

- Home hero "Book a Free Consultation" → contact.html ✓
- Home hero "View Our Services" → services.html ✓
- Home "See full pricing →" → pricing.html ✓
- Pricing "Get Started" buttons → contact.html ✓
- Pricing CTA strip "Book a Free Consultation" → contact.html ✓

- [ ] **Step 3: Take a screenshot of each page for the record**

Use preview_screenshot to capture: index.html, pricing.html, services.html, about.html, contact.html.

- [ ] **Step 4: Push to GitHub**

```bash
git push origin master
```

---

## Self-Review Notes

**Spec coverage check:**
- ✅ New Pricing page (Task 5)
- ✅ Home hero redesigned — two-column, new headline, dual CTAs, photo placeholder (Task 3)
- ✅ Services preview strip on home (Task 4)
- ✅ Pricing teaser on home (Task 4)
- ✅ Trust bar updated — "Tax Prep & Bookkeeping" → "Bookkeeping & Training" (Task 3)
- ✅ About — placeholder note removed, credentials section added (Task 7)
- ✅ Services — Tax Prep → Training & Consultation (Task 6)
- ✅ Contact — phone + email replacing "we work with" list (Task 8)
- ✅ Nav — Pricing link + phone on all pages + footer (Tasks 2, 5)
- ✅ All new CSS classes defined before first use (Task 1 runs first)

**Type/class consistency:**
- `.hero-two-col`, `.hero-text`, `.hero-photo`, `.hero-ctas` — defined Task 1, used Task 3 ✓
- `.btn-ghost` — defined Task 1, used Task 3 ✓
- `.services-preview-grid`, `.services-preview-card`, `.card-link` — defined Task 1, used Task 4 ✓
- `.pricing-teaser` — defined Task 1, used Task 4 ✓
- `.pricing-grid`, `.pricing-card`, `.pricing-card.featured`, `.most-popular`, `.pricing-price`, `.feature-list`, `.pricing-note` — defined Task 1, used Task 5 ✓
- `.credential-section`, `.credential-card`, `.credential-placeholder` — defined Task 1, used Task 7 ✓
- `.nav-phone` — defined Task 1, used Tasks 2 & 5 ✓
- `.btn-secondary` — already exists in base CSS, used in pricing cards (Task 5) ✓
