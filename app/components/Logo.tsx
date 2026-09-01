import { site } from "../siteData";

export default function Logo() {
  return (
    <span className="logo">
      <span className="logo__mark" aria-hidden="true">
        {site.initials}
        <span className="logo__markDot">.</span>
      </span>
      <span className="logo__divider" aria-hidden="true" />
      <span className="logo__text">
        <span className="logo__name">
          {site.name}
          <span className="logo__nameDot">.</span>
        </span>
        <span className="logo__tagline">{site.tagline}</span>
      </span>
    </span>
  );
}
