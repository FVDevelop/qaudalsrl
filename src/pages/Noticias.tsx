import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import renewableEnergyBackground from '@/assets/renewable-energy-background.png';

const Noticias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-36 pb-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={renewableEnergyBackground}
            alt="Renewable Energy Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet uppercase font-normal text-white">
            Noticias
          </h1>
        </div>
      </section>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-5 pb-5">
        <div className="text-center">
          <p className="text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Últimas novedades y actualizaciones del sector
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-light" style={{color: '#737373'}}>
            Contenido próximamente disponible.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Noticias;