import ImageCarousel from "./ImageCarousel";

const categories = ["Lead Generation", "E-commerce Ads", "Local Business", "B2B / Coaching"];

const items = Array.from(
  { length: 14 },
  (_, i) => `Project screenshot ${i + 1} — replace with real image`
);

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <div className="section__inner">
        <p className="eyebrow">Every industry</p>
        <h2 className="section__title">A range of campaigns and results</h2>
        <ul className="portfolio__categories">
          {categories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <ImageCarousel
        items={items}
        ariaLabel="Portfolio screenshots across industries"
        tileAspect="16 / 9"
      />
    </section>
  );
}
