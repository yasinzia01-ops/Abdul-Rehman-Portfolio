import Image from "next/image";

const screenshots = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/proof/result-${String(i + 1).padStart(2, "0")}.png`,
  alt: `Client Google Search Console results screenshot ${i + 1}`,
}));

const loopShots = [...screenshots, ...screenshots];

// loading="eager" on every tile: the track is moved purely via a CSS
// transform animation, not real scrolling, so the browser's native lazy-load
// IntersectionObserver never sees off-screen-but-transformed tiles enter the
// viewport and leaves them permanently unfetched (blank tiles).

export default function ProofStrip({ large = false }: { large?: boolean }) {
  return (
    <section className="section proofStrip">
      <div
        className={`carousel${large ? " carousel--large" : ""}`}
        role="region"
        aria-label="Recent client campaign result screenshots"
      >
        <div className="carousel__track carousel__track--images">
          {loopShots.map((shot, i) => (
            <div
              className="carousel__tile carousel__tile--image"
              key={`${shot.src}-${i}`}
              aria-hidden={i >= screenshots.length}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={large ? "640px" : "360px"}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
