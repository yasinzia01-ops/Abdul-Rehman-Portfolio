"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Over the past decade, Abdul is the best growth partner I've worked with. He delivered a complex MVP fast, understood vague requirements, communicated clearly, and built a scalable complex system beyond expectations.",
    name: "Frida Brunetti",
    role: "Founder, Veya",
    image: "/images/testimonials/Frida01.jpeg",
  },
  {
    quote:
      "Abdul is a team player who works hard to deliver. Not calculative about the time needed to perfect things — he ensures the project is completed successfully. Always willing to help when required.",
    name: "Angela Tan",
    role: "Programme Director (Digital), Public Sector · GCC",
    image: "/images/testimonials/Tan02.jpeg",
  },
  {
    quote:
      "Abdul's expertise in website design, development, and social media marketing is simply outstanding. Exceptional communication and unwavering commitment to deadlines. Invaluable to any project. I wholeheartedly recommend him.",
    name: "Matthew Palmer",
    role: "CEO, ITK Technologies",
    image: "/images/testimonials/Matthew03.jpeg",
  },
  {
    quote:
      "This was not a standard website project. We required structured data architecture, backend logic, automated workflows and real time reporting dashboards. Abdul and his team delivered exceptionally.",
    name: "Aly Saghir",
    role: "Programme Director (Digital), Public Sector · GCC",
    image: "/images/testimonials/Aly04.jpeg",
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
          <blockquote className="testimonialCard" key={t.name}>
            <p>&ldquo;{t.quote}&rdquo;</p>
            <hr className="testimonialCard__divider" />
            <footer>
              <Image
                src={t.image}
                alt={t.name}
                width={44}
                height={44}
                className="testimonialCard__avatar"
              />
              <span className="testimonialCard__meta">
                <span className="testimonialCard__name">{t.name}</span>
                <span className="testimonialCard__role">{t.role}</span>
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
