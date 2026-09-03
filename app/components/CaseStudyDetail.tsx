import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "../caseStudiesData";
import { mailtoHref } from "../siteData";

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <main id="content" className="csDetail">
      <div className="section__inner csDetail__header">
        <Link href="/#case-studies" className="csDetail__back">
          ← Back to case studies
        </Link>
        <p className="eyebrow">{study.industry}</p>
        <h1 className="csDetail__title">{study.title}</h1>
        <p className="csDetail__meta">{study.timeline}</p>
      </div>

      <div className="csDetail__cover">
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(max-width: 1100px) 100vw, 1120px"
          priority
        />
      </div>

      <div className="section__inner">
        <div className="csDetail__results">
          {study.results.map((r) => (
            <div className="csDetail__stat" key={r.label}>
              <span className="csDetail__statValue">{r.value}</span>
              <span className="csDetail__statLabel">{r.label}</span>
            </div>
          ))}
        </div>

        <div className="csDetail__grid">
          <div>
            <h2 className="csDetail__heading">The Challenge</h2>
            <p className="csDetail__body">{study.challenge}</p>
          </div>
          <div>
            <h2 className="csDetail__heading">The Approach</h2>
            <ul className="csDetail__list">
              {study.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="csDetail__deliverables">
          <h2 className="csDetail__heading">What We Delivered</h2>
          <ul className="aboutMe__tools">
            {study.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {study.testimonial && (
          <blockquote className="csDetail__testimonial">
            <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
            <footer>
              <span className="testimonialCard__name">{study.testimonial.name}</span>
              <span className="testimonialCard__role">{study.testimonial.role}</span>
            </footer>
          </blockquote>
        )}

        <div className="csDetail__cta">
          <h2 className="csDetail__heading">Want results like this?</h2>
          <a href={mailtoHref} className="btn btn--primary">
            Book a Free 20-min Call
          </a>
        </div>
      </div>
    </main>
  );
}
