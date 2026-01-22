import Hero from "../../src/app/components/sections/Hero";
import IndiaMap from "../../src/app//components/sections/IndiaMap";
import Services from "../../src/app//components/sections/Services";
import HowItWorks from "../../src/app//components/sections/HowItWorks";
import Pricing from "../../src/app//components/sections/Pricing";
import MobileApp from "../../src/app//components/sections/MobileApp";
import Team from "../../src/app//components/sections/Team";
import Testimonials from "../../src/app//components/sections/Testimonials";
import Contact from "../../src/app//components/sections/Contact";
import Footer from "../../src/app//components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndiaMap />
      <Services />
      <HowItWorks />
      <Pricing />
      <MobileApp />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
