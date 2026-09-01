const categories = [
  { title: "Lead Generation", desc: "Service businesses & local lead gen" },
  { title: "E-commerce Ads", desc: "Meta + Google shopping campaigns" },
  { title: "Local Business", desc: "Clinics, contractors, professional services" },
  { title: "B2B / Coaching", desc: "Consultants, coaches, B2B pipelines" },
];

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <div className="section__inner">
        <p className="eyebrow">Every industry</p>
        <h2 className="section__title">A range of campaigns and results</h2>
        <div className="portfolio__grid">
          {categories.map((c) => (
            <div className="portfolioCard" key={c.title}>
              <div className="portfolioCard__image" aria-hidden="true">
                <span>Screenshot placeholder</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
