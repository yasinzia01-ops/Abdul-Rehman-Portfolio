import Image from "next/image";

const badges = [
  { alt: "Google Ads Search — Certified", image: "/images/certifications/google-ads-search.png" },
  { alt: "Google Ads Display — Certified", image: "/images/certifications/google-ads-display.png" },
  { alt: "Google Ads Video — Certified", image: "/images/certifications/google-ads-video.png" },
];

export default function Certifications() {
  return (
    <section className="section certifications">
      <div className="section__inner certifications__layout">
        <div className="certifications__intro">
          <p className="eyebrow">Certifications</p>
          <h2 className="section__title">Certified across Google Ads</h2>
        </div>
        <div className="certifications__grid">
          {badges.map((b) => (
            <div className="certBadge__image" key={b.alt}>
              <Image src={b.image} alt={b.alt} fill sizes="70px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
