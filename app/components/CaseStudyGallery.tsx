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
  return (
    <section className="section caseGallery">
      <div className="section__inner">
        <p className="eyebrow">Case Studies</p>
        <h2 className="section__title">The work behind the results</h2>
        <div className="caseGallery__grid">
          {caseStudies.map((item) => (
            <figure className="caseGalleryCard" key={item.title}>
              <div className="caseGalleryCard__image">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </div>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
