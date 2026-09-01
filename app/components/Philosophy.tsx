const principles = [
  {
    title: "Targeting determines scale",
    body: "Audiences and tracking are built for growth from day one, not patched together after the budget is already spent.",
  },
  {
    title: "Systems over spend",
    body: "I fix the funnel — tracking, landing pages, offer — before I recommend scaling the budget.",
  },
  {
    title: "Growth without tracking is expensive noise",
    body: "Conversion tracking and reporting come before scaling, so every dollar spent is measurable.",
  },
];

export default function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="section__inner">
        <p className="eyebrow">Operating Philosophy</p>
        <h2 className="section__title">What I believe about growth.</h2>
        <div className="philosophy__grid">
          {principles.map((p, i) => (
            <div className="philosophyCard" key={p.title}>
              <span className="philosophyCard__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
