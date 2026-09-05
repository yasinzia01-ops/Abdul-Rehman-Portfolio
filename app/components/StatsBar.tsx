const stats = [
  { value: "1,000+", label: "projects delivered" },
  { value: "$1M+", label: "client revenue generated" },
  { value: "8", label: "years of execution" },
  { value: "50+", label: "global clients served" },
  { value: "4.9★", label: "average rating" },
];

export default function StatsBar() {
  return (
    <section className="section statsBar">
      <div className="section__inner aboutMe__stats">
        {stats.map((s) => (
          <div className="aboutMe__stat" key={s.label}>
            <span className="aboutMe__statValue">{s.value}</span>
            <span className="aboutMe__statLabel">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
