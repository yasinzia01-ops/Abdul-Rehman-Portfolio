"use client";

import { useRef } from "react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Talpadent — From Invisible to Found by Thousands in Six Months",
    image: "/images/case-studies/webpage.webp",
  },
  {
    title: "Non Detect Mushrooms — $575,973 in Sales From Zero Ad Spend",
    image: "/images/case-studies/mashroom-feature-mockup-1.webp",
  },
  {
    title: "First Medical Consultants — From Invisible to Page 1 Across 14 Locations",
    image: "/images/case-studies/web-page-fmc-compressed.webp",
  },
  {
    title: "Modernizing Africa's Statistical Hub: Digital Transformation",
    image: "/images/case-studies/Gemini_Generated_Image_4bdezk4bdezk4bde.webp",
  },
  {
    title: "Modernizing Municipal Government: Brookfield's Community-Focused Website Redesign",
    image: "/images/case-studies/504shots_so.webp",
  },
];

// Rendered twice so "next" can always scroll forward — once the track
// scrolls into the duplicated half, we silently jump back by exactly one
// set-width (no animation) to the equivalent spot in the first half. The
// content is identical there, so the reset is invisible and motion only
// ever goes forward.
const loopCaseStudies = [...caseStudies, ...caseStudies];

const RESET_CHECK_DELAY_MS = 500;

export default function CaseStudyGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const maybeLoopReset = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".caseGalleryCard");
    const firstDuplicate = cards[caseStudies.length];
    if (!firstDuplicate) return;

    const setWidth = firstDuplicate.offsetLeft - cards[0].offsetLeft;
    if (track.scrollLeft >= setWidth - 4) {
      track.scrollTo({ left: track.scrollLeft - setWidth, behavior: "auto" });
    }
  };

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".caseGalleryCard");
    const cardWidth = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;

    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });

    if (direction === 1) {
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(maybeLoopReset, RESET_CHECK_DELAY_MS);
    }
  };

  return (
    <section className="section caseGallery">
      <div className="section__inner">
        <div className="caseGallery__head">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2 className="section__title">The work behind the results</h2>
          </div>
          <div className="testimonials__arrows">
            <button
              type="button"
              className="carouselArrow"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous case study"
            >
              ←
            </button>
            <button
              type="button"
              className="carouselArrow"
              onClick={() => scrollByCard(1)}
              aria-label="Next case study"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div className="caseGallery__track" ref={trackRef}>
        {loopCaseStudies.map((item, i) => (
          <figure
            className="caseGalleryCard"
            key={`${item.title}-${i}`}
            aria-hidden={i >= caseStudies.length}
          >
            <div className="caseGalleryCard__image">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 700px) 85vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
