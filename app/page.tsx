import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Industries from "@/sections/Industries";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Process from "@/sections/Process";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import Insights from "@/sections/Insights";
import CtaBand from "@/sections/CtaBand";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Process />
        <About />
        <Testimonials />
        <Insights />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
