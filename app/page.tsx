import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import CaseStudyGallery from "./components/CaseStudyGallery";
import Philosophy from "./components/Philosophy";
import AboutMe from "./components/AboutMe";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="content">
        <Hero />
        <ProofStrip />
        <About />
        <Services />
        <CaseStudies />
        <CaseStudyGallery />
        <Philosophy />
        <AboutMe />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
