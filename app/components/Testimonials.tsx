const testimonials = [
  {
    quote:
      "Structured, data-driven, and easy to work with — the campaign architecture was exactly what our team needed.",
    name: "Placeholder Name",
    role: "Director, Placeholder Organization",
  },
  {
    quote:
      "Exceptional communication and unwavering commitment to the results we agreed on from day one.",
    name: "Placeholder Name",
    role: "CEO, Placeholder Company",
  },
  {
    quote:
      "One of the best growth partners I've worked with across the last decade.",
    name: "Placeholder Name",
    role: "Founder, Placeholder Brand",
  },
  {
    quote:
      "Great teamwork and a real commitment to quality throughout the whole engagement.",
    name: "Placeholder Name",
    role: "Programme Director, Placeholder Org",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section__inner">
        <p className="eyebrow">Testimonials</p>
        <h2 className="section__title">What clients say</h2>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <blockquote className="testimonialCard" key={t.name + t.role}>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <span className="testimonialCard__name">{t.name}</span>
                <span className="testimonialCard__role">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
