import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Process from "@/sections/Process";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import Insights from "@/sections/Insights";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <About />
        <Testimonials />
        <Pricing />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
