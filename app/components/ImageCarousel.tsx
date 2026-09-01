type Props = {
  items: string[];
  ariaLabel: string;
  tileAspect?: string;
};

// Continuous auto-scrolling strip (no arrows/dots — matches the reference
// site's proof-image carousels). Pure CSS animation, pauses on hover.
export default function ImageCarousel({ items, ariaLabel, tileAspect = "3 / 2" }: Props) {
  const loopItems = [...items, ...items];

  return (
    <div className="carousel" role="region" aria-label={ariaLabel}>
      <div className="carousel__track">
        {loopItems.map((label, i) => (
          <div
            className="carousel__tile"
            style={{ aspectRatio: tileAspect }}
            key={`${label}-${i}`}
            aria-hidden={i >= items.length}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
