import Image from "next/image";

const badges = [
  { label: "Google Ads Search — Certified", image: "/images/certifications/google-ads-search.png" },
  { label: "Google Ads Display — Certified", image: "/images/certifications/google-ads-display.png" },
  { label: "Google Ads Video — Certified", image: "/images/certifications/google-ads-video.png" },
];

export default function Certifications() {
  return (
    <section className="section certifications">
      <div className="section__inner">
        <p className="eyebrow">Certifications</p>
        <h2 className="section__title">Certified across Google Ads</h2>
        <div className="certifications__grid">
          {badges.map((b) => (
            <div className="certBadge" key={b.label}>
              <div className="certBadge__image">
                <Image src={b.image} alt={b.label} fill sizes="110px" />
              </div>
              <p className="certBadge__label">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
