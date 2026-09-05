const outcomes = [
  {
    region: "Luxembourg dental clinic (talpadent.lu)",
    result: "Organic clicks up 297% in 6 months",
    description:
      "Rebuilt technical SEO foundations and treatment pages to capture local, high-intent search traffic.",
  },
  {
    region: "Czech B2B software company (autoerp.cz)",
    result: "8x more organic clicks — page 3 to page 1",
    description:
      "Ongoing SEO work moved core commercial keywords from page three of Google to page one.",
  },
  {
    region: "New client site — SEO from launch",
    result: "0 to 119 clicks with a 23.4% CTR in 6 months",
    description:
      "Full technical SEO and content foundation launched from day one, ranking inside the top 5 within six months.",
  },
  {
    region: "New client site — SEO from launch",
    result: "0 to 1,390 organic clicks in 6 months",
    description:
      "Built out site architecture and content to go from zero visibility to steady organic traffic.",
  },
  {
    region: "New client site — SEO from launch",
    result: "0 to 2,100+ impressions in first 6 months",
    description:
      "Early-stage SEO foundation work already surfacing in search within the first two quarters.",
  },
  {
    region: "Established client site",
    result: "Organic impressions up 35% with stronger rankings",
    description:
      "Ongoing optimization work lifted both visibility and average ranking position over the period.",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="section caseStudies">
      <div className="section__inner">
        <p className="eyebrow">Selected Outcomes</p>
        <h2 className="section__title">Recent results</h2>
        <div className="caseStudies__grid">
          {outcomes.map((item, i) => (
            <div className="caseCard" key={item.region + i}>
              <p className="caseCard__region">{item.region}</p>
              <p className="caseCard__result">{item.result}</p>
              <p className="caseCard__description">{item.description}</p>
              <p className="caseCard__verified">Source: Google Search Console</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
