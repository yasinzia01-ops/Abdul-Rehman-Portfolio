const outcomes = [
  {
    region: "Luxembourg dental clinic (talpadent.lu)",
    result: "Organic clicks up 297% in 6 months",
  },
  {
    region: "Czech B2B software company (autoerp.cz)",
    result: "8x more organic clicks — page 3 to page 1",
  },
  {
    region: "New client site — SEO from launch",
    result: "0 to 119 clicks with a 23.4% CTR in 6 months",
  },
  {
    region: "New client site — SEO from launch",
    result: "0 to 1,390 organic clicks in 6 months",
  },
  {
    region: "New client site — SEO from launch",
    result: "0 to 2,100+ impressions in first 6 months",
  },
  {
    region: "Established client site",
    result: "Organic impressions up 35% with stronger rankings",
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
              <p className="caseCard__verified">Source: Google Search Console</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
