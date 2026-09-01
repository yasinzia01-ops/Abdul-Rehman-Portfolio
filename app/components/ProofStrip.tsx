import Image from "next/image";

const screenshots = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/proof/result-${String(i + 1).padStart(2, "0")}.png`,
  alt: `Client Google Search Console results screenshot ${i + 1}`,
}));

const loopShots = [...screenshots, ...screenshots];

export default function ProofStrip() {
  return (
    <section className="section proofStrip">
      <div className="carousel" role="region" aria-label="Recent client campaign result screenshots">
        <div className="carousel__track carousel__track--images">
          {loopShots.map((shot, i) => (
            <div
              className="carousel__tile carousel__tile--image"
              key={`${shot.src}-${i}`}
              aria-hidden={i >= screenshots.length}
            >
              <Image src={shot.src} alt={shot.alt} fill sizes="360px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
