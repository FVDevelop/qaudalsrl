import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Methodology from "@/components/Methodology";
import ContactForm from "@/components/ContactForm";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 64; // header offset
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="homepage-content">
        <Services />
        <Benefits />
        <Methodology />
        <ContactForm />
        <Footer />
        <WhatsAppCTA />
      </div>
    </div>
  );
};

export default Index;
