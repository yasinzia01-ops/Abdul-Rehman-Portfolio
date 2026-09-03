import { bookCallHref } from "../siteData";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="section__inner hero__inner">
        <p className="eyebrow">Meta Ads · Google Ads · Lead Generation</p>
        <h1 className="hero__headline">
          I build ad campaigns that turn budget into booked calls.
        </h1>
        <p className="hero__sub">
          I run performance marketing for founders and service businesses who
          are done guessing. Tracking, targeting, and creative built to
          produce qualified leads — I&apos;m the operator behind the
          campaigns, not a vendor you have to manage.
        </p>
        <div className="hero__ctas">
          <a
            href={bookCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Book a Free 20-min Call
          </a>
          <a href="#work" className="btn btn--ghost">
            See Selected Outcomes
          </a>
        </div>
      </div>
    </section>
  );
}
