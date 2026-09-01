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

export default function CaseStudyGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".caseGalleryCard");
    const cardWidth = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;

    const atEnd =
      direction === 1 &&
      track.scrollLeft + track.clientWidth >= track.scrollWidth - cardWidth / 2;
    const atStart = direction === -1 && track.scrollLeft <= cardWidth / 2;

    if (atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
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
        {caseStudies.map((item) => (
          <figure className="caseGalleryCard" key={item.title}>
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
