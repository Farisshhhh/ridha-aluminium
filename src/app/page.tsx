import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <WhyChoose />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}