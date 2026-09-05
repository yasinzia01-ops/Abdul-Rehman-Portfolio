import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import CaseStudyGallery from "./components/CaseStudyGallery";
import Philosophy from "./components/Philosophy";
import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ClientPortfolio from "./components/ClientPortfolio";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="content">
        <Hero />
        <About />
        <CaseStudies />
        <CaseStudyGallery />
        <Philosophy />
        <AboutMe />
        <Certifications />
        <Process />
        <Testimonials />
        <ClientPortfolio />
        <ProofStrip />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
