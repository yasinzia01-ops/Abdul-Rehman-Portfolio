# Abdul Rehman — Portfolio Website — Solution Plan

Standalone new project. Not connected to any existing repo/codebase.

## 1. Purpose
Personal brand/showcase single-page site for **Abdul Rehman**, niche: **Meta Ads, Lead Generation, Google Ads**. Modeled closely on https://shaheryarkhan.com/ (structure, copy skeleton, visual style), with content adapted to Abdul Rehman's niche and no hero stats row.

## 2. Tech Stack
- **React + Next.js** (single page, no routing needed beyond one route)
- Plain CSS / CSS Modules (or Tailwind — TBD at build time) for styling
- Static export / no backend — contact is a `mailto:` link, no server or DB needed
- Deployable as a static site (Vercel, Netlify, or any static host)

## 3. Page Sections (top to bottom)

1. **Nav bar** — Logo/name ("Abdul Rehman") left, "Book a Free Call" CTA (mailto) right, skip-to-content link.
2. **Hero** — Bold headline + supporting copy establishing Abdul Rehman as a hands-on operator in Meta Ads / Google Ads / Lead Gen. **No stats row** (per decision).
3. **About/Philosophy** — Short positioning statement ("Builder · Operator · Growth Architect" style), optional video/thumbnail placeholder ("How I think about running campaigns").
4. **Services — "How I Work"** — Two paths reframed to niche:
   - **Path 01:** Ads Launch / Campaign Setup (Meta + Google Ads build, targeting, creative, tracking/pixel setup, launch)
   - **Path 02:** Growth Retainer (ongoing ad management, lead gen funnel optimization, reporting, monthly optimization)
   - Exact pricing/timeline left as placeholder text for Abdul Rehman to fill in.
5. **Case Studies — "Selected Outcomes"** — Same structure as reference (industry + result headline, e.g. "3x qualified leads in 45 days"), placeholder entries reframed toward ads/lead-gen results. Result numbers **kept** (only hero stats row removed).
6. **Operating Philosophy** — 3 principles, adapted wording (e.g. "Targeting determines scale," "Systems over spend," "Growth without tracking is expensive noise").
7. **About Me** — Bio paragraph (8 years placeholder → adjust), tools/platforms highlighted (Meta Ads Manager, Google Ads, GA4/Tag Manager, Zapier/CRM tools, landing page builders, etc. — placeholder, to be finalized), credentials row (Upwork/LinkedIn/Fiverr-style badges, placeholder).
8. **Process — "How It Works"** — Same 4-step flow: Strategy call → Campaign/Architecture brief → Build & launch → Launch & handoff/optimize.
9. **Testimonials** — Same layout (quote cards), placeholder names/quotes for Abdul Rehman to replace.
10. **Portfolio/Results Gallery** — Grid of campaign/work screenshots grouped by category (placeholder categories: Lead Gen, E-commerce Ads, Local Business, Startups).
11. **FAQ — "Before You Book, Read This"** — ~10 Q&As, reframed for ads/lead-gen service model (ad spend handling, account ownership, minimum retainer, reporting cadence, etc.).
12. **Final CTA** — "Let's talk about your project" + mailto CTA, capacity note placeholder (e.g. "Taking on N new clients this month").
13. **Footer** — Name/logo, social links (LinkedIn, Instagram — placeholder URLs), email (mailto), copyright line.

## 4. Visual Style
- Match reference site: monochrome/light background, dark text, **blue accent** for CTA buttons.
- Clean sans-serif typography, single-column responsive layout, generous whitespace.
- Minimal animation — subtle transitions only, no heavy motion effects.

## 5. Content Strategy
- Reuse the reference site's content structure/copy as a skeleton.
- Replace all name references with **Abdul Rehman**.
- Reframe services/FAQ/philosophy copy from "MVP Development / web+SaaS" toward **Meta Ads / Google Ads / Lead Generation**.
- Placeholder text used for: pricing, case study specifics, testimonial quotes/names, bio details, credentials, social links, portfolio images — Abdul Rehman will edit these directly after build.

## 6. Contact / CTA Behavior
- All "Book a free call" buttons and footer email link use a simple `mailto:` link (no Calendly/booking tool, no form backend).

## 7. Out of Scope (for now)
- No CMS, no backend, no contact form submission handling.
- No real images/videos/testimonials — placeholders only until Abdul Rehman supplies real assets.
- No analytics/tracking setup unless requested later.

## 8. Next Steps (not started until explicitly requested)
1. Confirm section copy/placeholders are acceptable.
2. Scaffold Next.js project.
3. Build sections per above in order.
4. Style pass (monochrome + blue accent).
5. Abdul Rehman replaces placeholder content/images/links.
