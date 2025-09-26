import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const Noticias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
            Noticias
          </h1>
          <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Mantente al día con las últimas novedades de <strong>**Qaudal**</strong>
          </p>
        </div>
      </section>

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