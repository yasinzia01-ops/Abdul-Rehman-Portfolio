"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Structured, data-driven, and easy to work with — the campaign architecture was exactly what our team needed.",
    name: "Placeholder Name",
    role: "Director, Placeholder Organization",
  },
  {
    quote:
      "Exceptional communication and unwavering commitment to the results we agreed on from day one.",
    name: "Placeholder Name",
    role: "CEO, Placeholder Company",
  },
  {
    quote:
      "One of the best growth partners I've worked with across the last decade.",
    name: "Placeholder Name",
    role: "Founder, Placeholder Brand",
  },
  {
    quote:
      "Great teamwork and a real commitment to quality throughout the whole engagement.",
    name: "Placeholder Name",
    role: "Programme Director, Placeholder Org",
  },
  {
    quote:
      "Clear reporting and honest updates every step of the way — always knew where the budget was going.",
    name: "Placeholder Name",
    role: "Owner, Placeholder Business",
  },
  {
    quote:
      "Took the time to understand the offer before touching the ad account. Results followed quickly.",
    name: "Placeholder Name",
    role: "Marketing Lead, Placeholder Co",
  },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".testimonialCard");
    const cardWidth = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      timer = setInterval(() => scrollByCard(1), AUTOPLAY_MS);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
    };

    start();
    track.addEventListener("mouseenter", stop);
    track.addEventListener("mouseleave", start);
    return () => {
      stop();
      track.removeEventListener("mouseenter", stop);
      track.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <section className="section testimonials">
      <div className="section__inner">
        <p className="eyebrow">Testimonials</p>
        <div className="testimonials__head">
          <h2 className="section__title">What clients say</h2>
          <div className="testimonials__arrows">
            <button
              type="button"
              className="carouselArrow"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              className="carouselArrow"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div className="testimonials__track" ref={trackRef}>
        {testimonials.map((t) => (
          <blockquote className="testimonialCard" key={t.name + t.role + t.quote}>
            <p>&ldquo;{t.quote}&rdquo;</p>
            <hr className="testimonialCard__divider" />
            <footer>
              <span className="testimonialCard__name">{t.name}</span>
              <span className="testimonialCard__role">{t.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
