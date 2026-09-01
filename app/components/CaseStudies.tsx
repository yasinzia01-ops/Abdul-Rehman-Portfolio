const outcomes = [
  { region: "Texas home services", result: "3x qualified leads in 45 days" },
  { region: "UK coaching brand", result: "Cost per lead cut by 62% in 30 days" },
  { region: "UAE consulting firm", result: "$40,000 pipeline in 60 days" },
  { region: "US local service directory", result: "Lead volume tripled after Google Ads rebuild" },
  { region: "Canadian clinic", result: "2x booked calls in 90 days" },
  { region: "12-month e-commerce retainer", result: "2.1x ROAS sustained over 12 months" },
];

export default function CaseStudies() {
  return (
    <section id="work" className="section caseStudies">
      <div className="section__inner">
        <p className="eyebrow">Selected Outcomes</p>
        <h2 className="section__title">Recent results</h2>
        <div className="caseStudies__grid">
          {outcomes.map((item) => (
            <div className="caseCard" key={item.region}>
              <p className="caseCard__region">{item.region}</p>
              <p className="caseCard__result">{item.result}</p>
              <p className="caseCard__verified">
                Verified outcome — reference available on request
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
