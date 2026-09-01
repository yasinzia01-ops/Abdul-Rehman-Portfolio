const steps = [
  {
    title: "Strategy call",
    meta: "30 minutes",
    body: "We talk through your offer, funnel, and goals to see if it's a fit — no pitch, no pressure.",
  },
  {
    title: "Campaign brief",
    meta: "Written scope",
    body: "You get a written plan covering audience, tracking, budget, fixed pricing, and timeline.",
  },
  {
    title: "Build & launch",
    meta: "Weekly updates",
    body: "Tracking and campaigns get built, reviewed, and launched with weekly video updates.",
  },
  {
    title: "Optimize & report",
    meta: "Ongoing",
    body: "Monthly reporting, optimization, and documentation — plus the option to move to a retainer.",
  },
];

export default function Process() {
  return (
    <section className="section process">
      <div className="section__inner">
        <p className="eyebrow">How It Works</p>
        <h2 className="section__title">A simple, four-step process</h2>
        <ol className="process__list">
          {steps.map((step, i) => (
            <li className="processStep" key={step.title}>
              <span className="processStep__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>
                  {step.title} <span className="processStep__meta">— {step.meta}</span>
                </h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
