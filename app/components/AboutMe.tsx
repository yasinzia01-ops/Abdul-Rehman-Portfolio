import { site } from "../siteData";

const tools = [
  "Meta Ads Manager",
  "Google Ads",
  "GA4",
  "Google Tag Manager",
  "Zapier",
  "CRM / HubSpot",
  "Landing Page Builders",
  "Figma",
];

const credentials = [
  { label: "Upwork", value: "Top Rated (placeholder)" },
  { label: "LinkedIn", value: "10+ recommendations (placeholder)" },
  { label: "Google Ads", value: "Certified (placeholder)" },
  { label: "Meta Blueprint", value: "Certified (placeholder)" },
];

export default function AboutMe() {
  return (
    <section id="about" className="section aboutMe">
      <div className="section__inner aboutMe__grid">
        <div className="aboutMe__portrait" aria-hidden="true">
          <span>Photo placeholder</span>
        </div>
        <div className="aboutMe__copy">
          <p className="eyebrow">About {site.name}</p>
          <h2 className="section__title">
            Several years running paid acquisition for founders who need
            results, not reports.
          </h2>
          <p>
            I plan, launch, and manage Meta and Google Ads campaigns across
            service businesses, e-commerce, and B2B lead gen — handling
            tracking, targeting, creative direction, and reporting end to
            end. No account managers, no hand-offs.
          </p>
          <ul className="aboutMe__tools">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <div className="aboutMe__credentials">
            {credentials.map((c) => (
              <div key={c.label} className="credential">
                <span className="credential__label">{c.label}</span>
                <span className="credential__value">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
