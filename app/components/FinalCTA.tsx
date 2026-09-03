import { bookCallHref, site } from "../siteData";

export default function FinalCTA() {
  return (
    <section className="section finalCta">
      <div className="section__inner finalCta__inner">
        <h2>Let&apos;s talk about your project</h2>
        <p>
          A free 20-minute call — no pitch deck, no proposal until we&apos;ve
          spoken.
        </p>
        <a
          href={bookCallHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Book a Free 20-min Call
        </a>
        <p className="finalCta__capacity">{site.capacityNote}</p>
      </div>
    </section>
  );
}
