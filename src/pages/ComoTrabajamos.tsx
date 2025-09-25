import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Card, CardContent } from '@/components/ui/card';

// Import images
import metodologiaQaudal from '@/assets/metodologia-qaudal.png';
import carouselAgua from '@/assets/carousel-agua.jpg';
import construccionMontaje from '@/assets/construccion-montaje.jpg';
import gestionTecnologica from '@/assets/gestion-tecnologica-it.jpg';
import energiaRenovables from '@/assets/energia-renovables.jpg';
import ambienteSeguridad from '@/assets/ambiente-seguridad.jpg';

const ComoTrabajamos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const casosTypicos = [
    {
      title: "Rediseño/expansión de plantas",
      subtitle: "de tratamiento y redes",
      image: carouselAgua
    },
    {
      title: "Estaciones de bombeo",
      subtitle: "y sistemas de impulsión",
      image: construccionMontaje
    },
    {
      title: "Implementación de SCADA",
      subtitle: "automatización y telemetría",
      image: gestionTecnologica
    },
    {
      title: "Programas de eficiencia energética",
      subtitle: "con M&V",
      image: energiaRenovables
    },
    {
      title: "Monitoreo ambiental",
      subtitle: "(olores, ruido) y gestión de pasivos",
      image: ambienteSeguridad
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
            Como Trabajamos
          </h1>
          <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Metodología integral para proyectos de agua, saneamiento y energía
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Methodology Diagram - Larger */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={metodologiaQaudal} 
                alt="Metodología **Qaudal** - Diagrama de procesos integrados para proyectos de agua, saneamiento y energía"
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
            
            {/* Right: Casos Típicos */}
            <div className="space-y-8">
              <h2 className="text-3xl font-garet font-normal uppercase mb-8" style={{color: '#003249'}}>
                Casos Típicos
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {casosTypicos.map((caso, index) => (
                  <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-32">
                      <img 
                        src={caso.image}
                        alt={`${caso.title} ${caso.subtitle}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm mb-1" style={{color: '#003249'}}>
                        {caso.title}
                      </h3>
                      <p className="text-xs font-light" style={{color: '#737373'}}>
                        {caso.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default ComoTrabajamos;