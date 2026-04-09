# Farrell Consulting Website — Design Spec
**Date:** 2026-04-09  
**Status:** Approved

---

## Overview

A professional, multi-page static website for Farrell Consulting, a bookkeeping and tax services firm serving small business owners and freelancers. Built with plain HTML, CSS, and JavaScript — no frameworks. Hosted at farrellconsulting.net.

---

## File Structure

```
H:/Farrell Consulting/
├── index.html           # Home page
├── services.html        # Services page
├── about.html           # About page
├── contact.html         # Contact page
├── css/
│   └── styles.css       # Shared stylesheet for all pages
├── js/
│   └── main.js          # Sticky nav behavior, mobile menu toggle, form thank-you logic
├── favicon.ico          # Placeholder favicon
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-04-09-farrell-consulting-website-design.md
└── .claude/
    └── launch.json      # Dev server config (npx serve, port 3000)
```

---

## Architecture

- **Multi-page:** Each of the four pages is a separate `.html` file with full `<head>`, shared `<nav>`, page content, shared `<footer>`.
- **Shared nav and footer** are copy-pasted across all four HTML files (no build tool).
- **One stylesheet** (`css/styles.css`) imported by all pages — no inline styles in the final build.
- **One JS file** (`js/main.js`) handles: sticky nav shadow on scroll, hamburger menu toggle on mobile, contact form thank-you swap.
- **No external JS libraries.** Google Fonts loaded via `<link>` in `<head>`.

---

## Design System

### Colors
| Token       | Hex       | Usage                                      |
|-------------|-----------|---------------------------------------------|
| `--navy`    | `#1B2F5E` | Navbar, footer background, headings, buttons |
| `--gold`    | `#C9A84C` | CTA buttons, card accents, active nav indicator, hover highlights |
| `--green`   | `#4A7C59` | Trust bar checkmarks, subtle icon accents   |
| `--white`   | `#FFFFFF` | Page backgrounds, card backgrounds, nav bg  |
| `--surface` | `#F5F7FA` | Alternate section backgrounds, card bg      |
| `--text`    | `#2D2D2D` | Body copy                                   |

### Typography
- **Headings:** Playfair Display (Google Fonts), weights 600 & 700
- **Body / UI:** Inter (Google Fonts), weights 400, 500, 600
- Base font size: 16px; body line-height: 1.7

### Component Patterns
- **Navbar:** Sticky, white bg, navy logo + links, gold underline on active/hover, gold "Free Consultation" pill CTA. Collapses to hamburger on mobile (≤768px).
- **Buttons (primary):** Gold bg, navy text, 6px radius, shadow, hover darkens to `#b5923f`.
- **Buttons (secondary/dark):** Navy bg, white text — used on contact form submit.
- **Service cards:** White bg, gold 4px top border, 10px radius, subtle box shadow, hover lifts with `translateY(-4px)`.
- **Footer:** Navy bg, white text, gold hover on links, 4-link row + copyright line.

---

## Pages

### 1. Home (`index.html`)
- **Sticky navbar** (shared)
- **Hero section:** Navy-to-dark-navy gradient background. Eyebrow label ("Bookkeeping & Tax Services"), H1 headline ("Take the Stress Out of Your Books"), short value proposition paragraph, "Get a Free Consultation" gold CTA button.
- **Trust bar:** Light gray strip with 4 checkmark items: "Small Business Specialists", "Freelancer-Friendly", "Tax Prep & Bookkeeping", "Year-Round Support".
- **Footer** (shared)
- SEO: title "Farrell Consulting | Bookkeeping & Tax Services", meta description focused on small business bookkeeping and tax prep.

### 2. Services (`services.html`)
- **Sticky navbar** (shared)
- **Page hero:** Smaller than home, navy bg, H1 "Our Services", short intro line.
- **3-card grid** (auto-fit, min 260px):
  1. **Monthly Bookkeeping** — icon, description of who it's for, what's included (reconciliation, categorization, monthly reports).
  2. **Catch-Up & Cleanup Bookkeeping** — icon, description for businesses that are behind, what's included (backlog reconciliation, error correction).
  3. **Tax Preparation** — icon, description for self-employed/small biz, what's included (federal + state filing, deduction review).
- Each card has a gold top-border accent and hover lift effect.
- **CTA section:** Centered strip — "Not sure which service you need? Let's talk." + "Get a Free Consultation" button linking to contact.html.
- **Footer** (shared)
- SEO: title "Services | Farrell Consulting", meta description covering each service type.

### 3. About (`about.html`)
- **Sticky navbar** (shared)
- **Two-column layout** (text left, photo placeholder right): Mission statement, values, placeholder bio text (clearly marked for the client to replace).
- **Values strip:** 3 short value statements (e.g., Accuracy, Transparency, Accessibility) with gold icon/accent.
- **Footer** (shared)
- SEO: title "About | Farrell Consulting", meta description.

### 4. Contact (`contact.html`)
- **Sticky navbar** (shared)
- **Intro copy:** "We serve small business owners and freelancers. Fill out the form and we'll be in touch within one business day."
- **Form fields:** Full Name, Email Address, Business Type (dropdown: Freelancer/Self-Employed, LLC/S-Corp, Sole Proprietor, Other), Message (textarea).
- **Submission behavior:** On submit, JS hides the form and shows an inline thank-you message ("Thanks! We'll be in touch within one business day."). No backend — purely client-side.
- **Footer** (shared)
- SEO: title "Contact | Farrell Consulting", meta description.

---

## SEO & Technical Requirements

- `<meta charset="UTF-8">` and `<meta name="viewport">` on every page.
- Unique `<title>` and `<meta name="description">` per page.
- `<meta property="og:title">` and `<meta property="og:description">` on every page (Open Graph basics).
- `<link rel="canonical">` on every page.
- `<link rel="icon" href="/favicon.ico">` on every page.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` where appropriate.
- All images (including placeholder) have `alt` attributes.

---

## Responsive Behavior

- Breakpoint: `768px`
- Below 768px: nav collapses to hamburger; service card grid goes to 1 column; about two-column stacks vertically; hero text scales down via `clamp()`.
- Touch targets (buttons, nav links) minimum 44px height on mobile.

---

## JavaScript (`main.js`)

Three behaviors, no dependencies:
1. **Sticky nav shadow:** Adds `.scrolled` class to `<nav>` on scroll > 10px, which adds a stronger box-shadow.
2. **Hamburger menu:** Toggles `.open` class on mobile nav menu; closes on outside click.
3. **Contact form thank-you:** Intercepts `submit` event, prevents default, hides `<form>`, shows `#thank-you` `<div>`.

---

## Out of Scope

- Backend form submission (Formspree or similar) — static thank-you only for now.
- CMS or admin panel.
- Blog or news section.
- Client portal or login.
- Animations beyond CSS transitions and hover effects.
