import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Card, CardContent } from '@/components/ui/card';

// Import images and components
import MethodologyDiagram from '@/components/MethodologyDiagram';
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
      <section className="relative pt-32 pb-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-6 uppercase font-normal" style={{color: '#737373'}}>
            Como Trabajamos
          </h1>
          <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed mb-8" style={{color: '#737373'}}>
            Metodología integral para proyectos de agua, saneamiento y energía
          </p>
        </div>
      </section>

      {/* Descripción General */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl font-light leading-relaxed mb-4" style={{color: '#737373'}}>
            En Qaudal aplicamos una metodología integral que nos permite abordar cada proyecto 
            desde una perspectiva 360°. Nuestro enfoque combina experiencia técnica multidisciplinaria 
            con las mejores prácticas de la industria, garantizando soluciones eficientes y sostenibles 
            en agua, saneamiento, energía y obras civiles.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007EA7] to-[#003249] mx-auto"></div>
        </div>
      </section>

      {/* Diagrama de Metodología */}
      <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-garet font-normal uppercase mb-4" style={{color: '#003249'}}>
              Nuestra Metodología
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
              Proceso integral que garantiza la excelencia en cada etapa del proyecto
            </p>
          </div>
          <div className="flex justify-center">
            <MethodologyDiagram />
          </div>
        </div>
      </section>

      {/* Casos Típicos */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-garet font-normal uppercase mb-4" style={{color: '#003249'}}>
              Casos Típicos
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
              Ejemplos representativos de nuestras soluciones especializadas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {casosTypicos.map((caso, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow rounded-none border-0">
                <div className="relative h-40">
                  <img 
                    src={caso.image}
                    alt={`${caso.title} ${caso.subtitle}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2" style={{color: '#003249'}}>
                    {caso.title}
                  </h3>
                  <p className="text-sm font-light" style={{color: '#737373'}}>
                    {caso.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default ComoTrabajamos;