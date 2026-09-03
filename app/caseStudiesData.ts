export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  timeline: string;
  image: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
  deliverables: string[];
  testimonial?: { quote: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "talpadent",
    title: "Talpadent — From Invisible to Found by Thousands in Six Months",
    industry: "Dental Practice · Steinfort, Luxembourg",
    timeline: "6-month SEO programme",
    image: "/images/case-studies/webpage.webp",
    challenge:
      "Talpadent offered strong dental care but had almost no visibility in Google search — ranking on page two for the searches that mattered, and losing patient inquiries to more visible competitors despite equivalent service quality.",
    approach: [
      "Foundation: fixed indexation and site structure so Google could properly crawl and rank the practice",
      "Patient content: rebuilt all nine treatment pages around the questions patients actually search for",
      "Local dominance: built Steinfort-specific landing pages to capture high-intent, ready-to-book searches",
    ],
    results: [
      { label: "Google visits", value: "+2,539%" },
      { label: "Search impressions", value: "+2,296%" },
      { label: "Keywords ranking #1", value: "11" },
      { label: "Local ranking", value: "#2 in Luxembourg" },
    ],
    deliverables: [
      "Full technical SEO audit & fixes",
      "Nine rewritten treatment pages",
      "Steinfort-specific local landing pages",
      "Ongoing patient-focused content",
    ],
  },
  {
    slug: "non-detect-mushrooms",
    title: "Non Detect Mushrooms — $575,973 in Sales From Zero Ad Spend",
    industry: "E-commerce · Functional Mushrooms",
    timeline: "8-month SEO programme",
    image: "/images/case-studies/mashroom-feature-mockup-1.webp",
    challenge:
      "A mushroom e-commerce store with lab-tested, ready-to-ship products was nearly invisible in search — just 84 clicks and 576 impressions over 8 months, missing the exact buyers searching for its products every day.",
    approach: [
      "Built a dedicated, search-optimized page for every product and category instead of one general page",
      "Turned buyer questions (legality, dosage, effects, shipping) into comprehensive guide content",
      "Structured pages to surface in Google's AI answers, not just traditional results",
    ],
    results: [
      { label: "Clicks from Google", value: "45x" },
      { label: "Search impressions", value: "40x" },
      { label: "Revenue, zero ad spend", value: "$575,973" },
      { label: "Orders placed", value: "1,917" },
    ],
    deliverables: [
      "Repeatable product/category page templates",
      "Buyer-question guide content",
      "AI-answer-ready page structure",
      "Conversion-focused store pages",
    ],
  },
  {
    slug: "first-medical-consultants",
    title: "First Medical Consultants — From Invisible to Page 1 Across 14 Locations",
    industry: "Private Medical Services · UK · 14 locations",
    timeline: "12-month SEO programme",
    image: "/images/case-studies/web-page-fmc-compressed.webp",
    challenge:
      "First Medical ran 14 clinic locations but was nearly invisible in search — its best-ranking location page sat at position #35, costing an estimated 200–300 high-intent patient appointments a year.",
    approach: [
      "Months 1–4: technical SEO foundation — audit, fixes, reusable page templates with schema markup",
      "Month 5: proof of concept on one location (Stoke-on-Trent) before scaling",
      "Months 6–12: rolled the proven template out across all 14 locations plus service pages",
    ],
    results: [
      { label: "Organic clicks (YoY)", value: "+2,345%" },
      { label: "Search impressions (YoY)", value: "+8,640%" },
      { label: "Keywords on page 1", value: "50+" },
      { label: "Stoke-on-Trent ranking", value: "#35 → #6" },
    ],
    deliverables: [
      "14 location page templates with schema markup",
      "Full technical SEO remediation",
      "Dedicated service category pages",
      "Monthly blog content programme",
    ],
  },
  {
    slug: "ansade",
    title: "Modernizing Africa's Statistical Hub: Digital Transformation",
    industry: "Government · Public Data · Africa",
    timeline: "7-week enterprise engagement",
    image: "/images/case-studies/Gemini_Generated_Image_4bdezk4bdezk4bde.webp",
    challenge:
      "ANSADE's legacy statistics platform loaded in 8–12 seconds, trapped data in unusable formats, excluded 60% of mobile traffic, and ran on an outdated, non-compliant CMS — risking researchers migrating to competing data sources.",
    approach: [
      "Frontend rebuild on Next.js + React with bilingual (French/Arabic) routing and RTL support",
      "Headless WordPress backend with REST + GraphQL APIs and hardened security",
      "Data-first design: open data standards, CSV/JSON/SDMX export, interactive visualizations, Algolia search",
    ],
    results: [
      { label: "Page load time", value: "1.8s" },
      { label: "Monthly data downloads", value: "+145%" },
      { label: "Accessibility", value: "WCAG 2.1 AA" },
      { label: "Support tickets", value: "-40%" },
    ],
    deliverables: [
      "Bilingual Next.js frontend",
      "Headless WordPress + public API",
      "Algolia-powered advanced search",
      "AI bilingual support chatbot",
      "Enterprise security infrastructure",
    ],
    testimonial: {
      quote:
        "The team didn't just redesign our website. They transformed how ANSADE serves the nation. The platform is fast, secure, and intuitive — our researchers can access data in minutes instead of hours.",
      name: "Dr. Amina Hassan",
      role: "Director of ANSADE",
    },
  },
  {
    slug: "brookfield-municipal",
    title: "Modernizing Municipal Government: Brookfield's Community-Focused Website Redesign",
    industry: "Government · Municipal Services · Massachusetts",
    timeline: "4-month platform migration",
    image: "/images/case-studies/504shots_so.webp",
    challenge:
      "Brookfield's municipal website ran on a deprecated platform with no vendor support, high per-feature costs, and no path to WCAG 2.1 AA accessibility compliance ahead of an April 2027 deadline.",
    approach: [
      "Assessed 352 Massachusetts municipalities' platforms and shortlisted vendors for hands-on testing",
      "Defined 14 essential features, cutting costly nice-to-have vendor add-ons",
      "Gathered feedback from departments, boards, and residents to shape the final build",
    ],
    results: [
      { label: "Cost savings vs legacy", value: "60%" },
      { label: "Accessibility", value: "WCAG 2.1 AA" },
      { label: "Core features shipped", value: "14" },
      { label: "Staff training completed", value: "100%" },
    ],
    deliverables: [
      "Mobile-first responsive website",
      "Meetings & events management system",
      "Centralized document management",
      "Forms with CAPTCHA protection",
      "Department & board pages",
    ],
    testimonial: {
      quote:
        "The Communications Committee thoroughly researched our options. This new platform is affordable, sustainable, and puts Brookfield in a strong position for years to come.",
      name: "Steve Karrmann",
      role: "Communications Committee Clerk, Town of Brookfield",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
