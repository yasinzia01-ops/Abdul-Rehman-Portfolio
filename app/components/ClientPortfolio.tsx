const categories = [
  {
    label: "SaaS & Tech",
    tags: [
      "B2B Directory Platform · USA",
      "Enterprise ERP System · Manufacturing",
      "Real-time Analytics Dashboard · UAE",
      "Automated Workflow Platform · GCC",
      "Custom CRM · Professional Services",
    ],
  },
  {
    label: "Professional Services",
    tags: [
      "Law Firm Lead Gen · USA",
      "Consulting Firm Funnel · $40k pipeline",
      "Accounting SEO · Page 1 in 90 days",
      "Healthcare · Patient Acquisition",
      "Financial Advisory · Web Build",
    ],
  },
  {
    label: "Growth & Ads",
    tags: [
      "Google Ads · 5x ROAS · USA",
      "40% Efficiency Gain · Enterprise",
      "18-month retainer · 2.4x revenue",
      "Meta + Google · E-commerce Australia",
      "SEO + CRO · Singapore B2B",
    ],
  },
];

export default function ClientPortfolio() {
  return (
    <section className="section clientPortfolio">
      <div className="section__inner">
        <p className="eyebrow">Every Industry</p>
        <h2 className="section__title">Client portfolio</h2>
        <div className="clientPortfolio__table">
          {categories.map((c) => (
            <div className="clientPortfolio__row" key={c.label}>
              <span className="clientPortfolio__label">{c.label}</span>
              <div className="clientPortfolio__tags">
                {c.tags.map((tag) => (
                  <span className="clientPortfolio__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
