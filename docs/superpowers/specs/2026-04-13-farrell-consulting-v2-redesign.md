# Farrell Consulting Website — V2 Redesign Spec
**Date:** 2026-04-13
**Status:** Approved

---

## Overview

Restructure the existing 4-page Farrell Consulting static site to match the layout pattern of wenonahbookkeeping.com, adapted for Farrell Consulting's brand, content, and services. Key changes:

1. Add a **Pricing page** (new)
2. Redesign **Home** hero to two-column layout with photo placeholder and dual CTAs
3. Update **Services** — swap Tax Preparation card for Training and Consultation
4. Update **About** — remove placeholder bio note, add credentials placeholder
5. Update **Contact** — replace contact details with Farrell Consulting's info
6. Update **nav** — add Pricing link and phone number in header on all pages
7. Remove **Service Areas**, **Testimonials**, and **Blog** (not carried over from reference site)
8. Architecture: **multi-page** (separate HTML files, unchanged from current)

---

## Contact Information

- **Phone:** (954) 821-1678
- **Email:** Christian@farrellconsulting.net

---

## Pages

### 1. Home (`index.html`) — Redesign

**Nav:** Add Pricing link between Services and Contact. Add `(954) 821-1678` as plain text in header right, alongside the "Free Consultation" CTA button.

**Hero — two-column layout:**
- Left column:
  - Eyebrow label: "Bookkeeping & Tax Services"
  - H1: "Your Books Deserve Better — And So Do You"
  - Sub-copy: "Farrell Consulting helps small business owners and freelancers stay organized, compliant, and confident — so you can focus on growing your business."
  - CTA 1 (primary): "Book a Free Consultation" → `contact.html`
  - CTA 2 (secondary/ghost): "View Our Services" → `services.html`
- Right column:
  - Photo placeholder (`role="img"`, `aria-label="..."`) — same style as about.html placeholder (recommended 600×640px)

**Services preview strip** (below hero):
- Section label: "What We Offer"
- H2: "Services Built for Small Businesses"
- 3 cards (condensed, no bullet lists — icon + title + one-line description + "Learn more" link to services.html)
  - Monthly Bookkeeping
  - Catch-Up & Cleanup Bookkeeping
  - Training and Consultation

**Pricing teaser row** (below services strip):
- Background: `--surface`
- Text: "Transparent pricing starting at $300/month"
- CTA link: "See full pricing →" → `pricing.html`

**Trust bar:** update 4 items to: Small Business Specialists · Freelancer-Friendly · Bookkeeping &amp; Training · Year-Round Support (replacing "Tax Prep &amp; Bookkeeping" since Tax Preparation is no longer a listed service)

---

### 2. About (`about.html`) — Update

**Remove:** The `.placeholder-note` paragraph (✏️ "Replace this section with your personal story…")

**Keep:**
- Two-column `.about-layout`: mission text left, photo placeholder right
- Mission heading and intro paragraphs (existing)
- Values strip: Accuracy · Transparency · Accessibility

**Add:** Credentials section below values strip:
- Background: white
- Section label: "Credentials"
- Single credential card: QuickBooks ProAdvisor certification
  - Icon placeholder (image placeholder box, same style as photo placeholder, ~120×120px)
  - Label: "Certified QuickBooks ProAdvisor"
  - Sub-label: "Replace with certification badge image"

---

### 3. Services (`services.html`) — Update card

**Remove:** Tax Preparation card (📋)

**Add:** Training and Consultation card (🎓):
- **Best for:** Business owners who manage their own books and want to learn QuickBooks, set up their system correctly, or get expert guidance when questions arise.
- **Includes:**
  - QuickBooks setup, review & optimization
  - 1-on-1 training tailored to your business
  - Answers to your bookkeeping & accounting questions
  - Ongoing support as your business grows

Card order: Monthly Bookkeeping · Catch-Up & Cleanup · Training and Consultation

---

### 4. Pricing (`pricing.html`) — New page

**Page hero:** "Simple, Transparent Pricing" / "No hidden fees. No surprises. Just clean books at a fair price."

**Three-column pricing card layout** (stacks to single column on mobile):

| Tier | Price | Includes |
|------|-------|----------|
| Essential | $300–$400/mo | Monthly account reconciliation · Transaction categorization · Monthly P&L & Balance Sheet · Email support |
| Professional | $450–$550/mo | Everything in Essential · Chart of accounts review · Quarterly financial review call · Priority response |
| Premium | $600–$800/mo | Everything in Professional · Catch-up bookkeeping (up to 3 months) · Year-round tax planning support · Dedicated point of contact |

**Pricing card design:**
- Each card: tier name, price range, feature list with checkmarks, "Get Started" CTA → `contact.html`
- Professional card: visually highlighted with a gold top border (4px, matching service cards) and a "Most Popular" badge label at the top of the card. All other cards have a navy top border.
- Pricing note below cards: "All plans billed monthly. Pricing based on transaction volume and complexity. Contact us for a custom quote."

**Satisfaction note:** A short trust line below the pricing note — "Not sure which plan fits? We'll help you find the right fit during your free consultation."

**CTA strip at bottom:** "Ready to Get Started?" → "Book a Free Consultation" button → `contact.html`

---

### 5. Contact (`contact.html`) — Update info

**Left panel (`contact-info`):**
- Keep heading: "Free Consultation"
- Keep intro paragraph
- Replace the four `.contact-detail` "we work with" items with contact details:
  - 📞 (954) 821-1678
  - ✉ Christian@farrellconsulting.net
- Keep "respond within one business day" messaging

**Form:** no changes

---

## Navigation (all pages)

```html
<nav class="navbar" aria-label="Main">
  Logo | Home · About · Services · Pricing · Contact | (954) 821-1678 | Free Consultation CTA
</nav>
```

- Add `<li><a href="pricing.html">Pricing</a></li>` between Services and Contact
- Add phone number as a styled `<span class="nav-phone">` or `<a href="tel:+19548211678">` in the navbar-inner, between nav-links and nav-cta
- Update all footer link lists to include Pricing

---

## CSS Changes

**New styles needed:**
- `.nav-phone` — phone number display in header (hide on mobile below hamburger breakpoint)
- `.hero-two-col` — two-column hero grid (60/40 split, stacks on mobile)
- `.hero-photo` — right-column photo placeholder (matching existing `.about-photo` style)
- `.btn-ghost` — secondary ghost CTA button (navy border, transparent background, navy text)
- `.services-preview-grid` — condensed 3-card strip on home page
- `.services-preview-card` — icon + title + one-liner + text link
- `.pricing-teaser` — centered pricing teaser row with background
- `.pricing-grid` — 3-column pricing card layout
- `.pricing-card` — individual tier card with feature list
- `.pricing-card.featured` — highlighted "Most Popular" card variant
- `.pricing-card .feature-list li::before` — checkmark prefix on feature items
- `.credential-card` — small credential display card for About page

**No breaking changes** to existing utility classes, section patterns, or color tokens.

---

## File Changes Summary

| File | Action |
|------|--------|
| `index.html` | Redesign hero, add services preview, add pricing teaser |
| `about.html` | Remove placeholder note, add credentials section |
| `services.html` | Swap Tax Prep card → Training and Consultation |
| `pricing.html` | **Create new** |
| `contact.html` | Update left panel contact details |
| `css/styles.css` | Add new component styles (no removals) |
| `js/main.js` | No changes needed |

---

## Out of Scope

- Backend / form submission handling (stays static thank-you)
- Service Areas page (not built)
- Testimonials section (not built)
- Blog (not built)
- Real photos or certification badge images (placeholders used)
- Social media links
