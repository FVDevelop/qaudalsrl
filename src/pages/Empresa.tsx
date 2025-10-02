import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import EmpresaContent from "@/components/EmpresaContent";
import waterTreatmentBackground from '@/assets/water-treatment-background.png';

const Empresa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Header Section with Gradient Background */}
      <section className="relative pt-36 pb-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={waterTreatmentBackground}
            alt="Water Treatment Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet uppercase font-normal text-white">
            Quienes Somos
          </h1>
        </div>
      </section>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-5 pb-5">
        <div className="text-center">
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#007EA7'}}>
            Un flujo constante de soluciones para la gestión del agua, saneamiento y energía
          </p>
        </div>
      </div>

      <EmpresaContent />

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Empresa;