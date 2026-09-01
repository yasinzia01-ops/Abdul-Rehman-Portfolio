import ImageCarousel from "./ImageCarousel";

const items = Array.from(
  { length: 12 },
  (_, i) => `Campaign result ${i + 1} — replace with real screenshot`
);

export default function ProofStrip() {
  return (
    <section className="section proofStrip">
      <ImageCarousel items={items} ariaLabel="Recent campaign result screenshots" />
    </section>
  );
}
