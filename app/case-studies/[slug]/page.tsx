import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CaseStudyDetail from "../../components/CaseStudyDetail";
import { caseStudies, getCaseStudy } from "../../caseStudiesData";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/case-studies/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.title} — Case Study`,
    description: study.challenge,
  };
}

export default async function CaseStudyPage(props: PageProps<"/case-studies/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Nav />
      <CaseStudyDetail study={study} />
      <Footer />
    </>
  );
}
