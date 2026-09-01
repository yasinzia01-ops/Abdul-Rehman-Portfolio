const paths = [
  {
    label: "PATH 01",
    title: "Ads Launch",
    price: "$1,500+",
    timeline: "2–3 weeks",
    items: [
      "Account audit & setup (Meta + Google Ads)",
      "Tracking: Pixel, Conversions API, GA4, Tag Manager",
      "Campaign structure & audience targeting",
      "Ad creative direction & copywriting",
      "Landing page conversion review",
      "Launch + first-week optimization",
    ],
  },
  {
    label: "PATH 02",
    title: "Growth Retainer",
    price: "$1,200/month",
    timeline: "3-month minimum",
    items: [
      "Ongoing campaign management (Meta + Google)",
      "Weekly optimization & budget pacing",
      "Creative testing & refresh",
      "Lead quality tracking, not just clicks",
      "Monthly reporting with direct access",
      "Funnel & landing page recommendations",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section__inner">
        <p className="eyebrow">How I Work</p>
        <h2 className="section__title">Two ways to work together</h2>
        <div className="services__grid">
          {paths.map((path) => (
            <div className="serviceCard" key={path.title}>
              <p className="serviceCard__label">{path.label}</p>
              <h3 className="serviceCard__title">{path.title}</h3>
              <p className="serviceCard__price">
                {path.price} <span>· {path.timeline}</span>
              </p>
              <ul className="serviceCard__list">
                {path.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
