import Image from "next/image";

const badges = [
  { name: "Search", alt: "Google Ads Search — Certified", image: "/images/certifications/google-ads-search.png" },
  { name: "Display", alt: "Google Ads Display — Certified", image: "/images/certifications/google-ads-display.png" },
  { name: "Video", alt: "Google Ads Video — Certified", image: "/images/certifications/google-ads-video.png" },
];

export default function Certifications() {
  return (
    <section className="section certifications">
      <div className="section__inner">
        <div className="certifications__card">
          <div className="certifications__intro">
            <p className="eyebrow">Certifications</p>
            <h2 className="section__title">Certified across Google Ads</h2>
          </div>
          <div className="certifications__divider" aria-hidden="true" />
          <div className="certifications__grid">
            {badges.map((b) => (
              <div className="certBadge" key={b.alt}>
                <div className="certBadge__image">
                  <Image src={b.image} alt={b.alt} fill sizes="72px" />
                </div>
                <span className="certBadge__name">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
