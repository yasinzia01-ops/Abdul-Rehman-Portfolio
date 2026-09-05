"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    headline: "The Best Growth Partner I've Worked With",
    quote:
      "Over the past decade, Hamza is the best growth partner I've worked with. He delivered a complex MVP fast, understood vague requirements, communicated clearly, and built a scalable complex system beyond expectations.",
    name: "Frida Brunetti",
    role: "Founder, Veya",
    image: "/images/testimonials/Frida01.jpeg",
  },
  {
    headline: "System Application Developer/Analyst",
    quote:
      "Hamza is a team player who works hard to deliver. Not calculative about the time needed to perfect things — he ensures the project is completed successfully. Always willing to help when required.",
    name: "Angela Tan",
    role: "Programme Director (Digital), Public Sector · GCC",
    image: "/images/testimonials/Tan02.jpeg",
  },
  {
    headline: "Outstanding Across Design, Dev And Marketing.",
    quote:
      "Hamza's expertise in website design, development, and social media marketing is simply outstanding. Exceptional communication and unwavering commitment to deadlines. Invaluable to any project. I wholeheartedly recommend him.",
    name: "Matthew Palmer",
    role: "CEO, ITK Technologies",
    image: "/images/testimonials/Matthew03.jpeg",
  },
  {
    headline: "Mauritania National Statistics & Open Data Portal",
    quote:
      "This was not a standard website project. We required structured data architecture, backend logic, automated workflows and real time reporting dashboards. Hamza and his team delivered exceptionally.",
    name: "Aly Saghir",
    role: "Programme Director (Digital), Public Sector · GCC",
    image: "/images/testimonials/Aly04.jpeg",
  },
];

// Rendered twice so "next" can always scroll forward — once the track
// scrolls into the duplicated half, we silently jump back by exactly one
// set-width (no animation) to the equivalent spot in the first half. The
// content is identical there, so the reset is invisible and motion only
// ever goes forward.
const loopTestimonials = [...testimonials, ...testimonials];

const AUTOPLAY_MS = 5000;
const RESET_CHECK_DELAY_MS = 500;

function Stars() {
  return (
    <span className="testimonialCard__stars" aria-hidden="true">
      ★★★★★
    </span>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const maybeLoopReset = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".testimonialCard");
    const firstDuplicate = cards[testimonials.length];
    if (!firstDuplicate) return;

    const setWidth = firstDuplicate.offsetLeft - cards[0].offsetLeft;
    if (track.scrollLeft >= setWidth - 4) {
      track.scrollTo({ left: track.scrollLeft - setWidth, behavior: "auto" });
    }
  };

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".testimonialCard");
    const cardWidth = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;

    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });

    if (direction === 1) {
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(maybeLoopReset, RESET_CHECK_DELAY_MS);
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
      if (resetTimer.current) clearTimeout(resetTimer.current);
      track.removeEventListener("mouseenter", stop);
      track.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <section className="section testimonials">
      <div className="section__inner">
        <div className="testimonials__head">
          <div>
            <p className="eyebrow">What Clients Say</p>
            <h2 className="section__title testimonials__title">
              Real Words.
              <br />
              <span className="testimonials__titleAccent">Real Outcomes.</span>
            </h2>
            <p className="testimonials__subtitle">
              <Stars /> 4.9 average · 50+ reviews across Upwork, LinkedIn
            </p>
          </div>
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
        {loopTestimonials.map((t, i) => (
          <blockquote
            className="testimonialCard"
            key={`${t.name}-${i}`}
            aria-hidden={i >= testimonials.length}
          >
            <div className="testimonialCard__image">
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="(max-width: 700px) 85vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <div className="testimonialCard__body">
              <Stars />
              <h3 className="testimonialCard__headline">{t.headline}</h3>
              <p className="testimonialCard__quote">&ldquo;{t.quote}&rdquo;</p>
            </div>
            <hr className="testimonialCard__divider" />
            <footer>
              <span className="testimonialCard__name">{t.name}</span>
              <span className="testimonialCard__role">{t.role}</span>
              <span className="testimonialCard__verified">✓ Verified</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
