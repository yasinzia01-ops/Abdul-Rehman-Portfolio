import Image from "next/image";

export default function About() {
  return (
    <section className="section about">
      <div className="section__inner">
        <p className="eyebrow">Marketer · Operator · Growth Partner</p>
        <div className="about__grid">
          <div className="about__copy">
            <h2 className="section__title about__title">
              How I think about running profitable campaigns
            </h2>
            <ul className="about__points">
              <li>Why most ad accounts burn budget before they find a winner</li>
              <li>How I scope a campaign before spending a single dollar</li>
              <li>Why I work on fixed-scope launches, not open-ended hours</li>
            </ul>
          </div>
          <div className="about__image">
            <Image
              src="/images/Marketer/dashboard-screenshot.webp"
              alt="Campaign dashboard overview"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
