import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Card, CardContent } from "@/components/ui/card";

// Import images and components
import MethodologyDiagram from "@/components/MethodologyDiagram";
import architecturalPlanBackground from "@/assets/architectural-plan-background.png";
import carouselAgua from "@/assets/carousel-agua.jpg";
import construccionMontaje from "@/assets/construccion-montaje.jpg";
import gestionTecnologica from "@/assets/gestion-tecnologica-it.jpg";
import energiaRenovables from "@/assets/energia-renovables.jpg";
import ambienteSeguridad from "@/assets/ambiente-seguridad.jpg";

const ComoTrabajamos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const casosTypicos = [
    {
      title: "Optimización y ampliación de plantas",
      subtitle: "de tratamiento y redes",
      image: carouselAgua,
    },
    {
      title: "Estaciones de bombeo",
      subtitle: "y sistemas de impulsión",
      image: construccionMontaje,
    },
    {
      title: "Implementación de SCADA",
      subtitle: "automatización y telemetría",
      image: gestionTecnologica,
    },
    {
      title: "Programas de eficiencia energética",
      subtitle: "con M&V",
      image: energiaRenovables,
    },
    {
      title: "Gestión y monitoreo ambiental",
      subtitle: "<strong>Pasivos ambientales</strong>, olores y ruidos",
      image: ambienteSeguridad,
    },
    {
      title: "Economía circular",
      subtitle: "Gestión de barros y reuso de aguas residuales",
      image: carouselAgua,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={architecturalPlanBackground}
            alt="Architectural Plan Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-6 uppercase font-normal text-white">
            Como Trabajamos
          </h1>
          <p className="text-xl max-w-5xl mx-auto font-light leading-relaxed text-white/90">
            En Qaudal aplicamos una metodología integral que nos permite abordar cada proyecto desde una perspectiva
            360°. Y creemos que cada proyecto es una oportunidad para generar impacto positivo y valor agregado.
            Nuestra metodología combina análisis técnico, innovación y trabajo en equipo, integrando sostenibilidad, eficiencia
            y calidad en cada etapa.
          </p>
          <p className="text-xl max-w-5xl mx-auto font-semibold italic leading-relaxed mt-3" style={{ color: "#007EA7" }}>
            El resultado: proyectos que funcionan hoy y siguen aportando valor en el futuro.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>
      </section>

      {/* Diagrama de Metodología */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-garet font-normal uppercase mb-4" style={{ color: "#003249" }}>
              Nuestra Metodología
            </h2>
            <p className="text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: "#737373" }}>
              Proceso integral que garantiza la excelencia en cada etapa del proyecto
            </p>
          </div>
          <div className="flex justify-center">
            <MethodologyDiagram />
          </div>
        </div>
      </section>

      {/* Casos Típicos */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-garet font-normal uppercase mb-4" style={{ color: "#003249" }}>
              Casos Típicos
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: "#737373" }}>
              Ejemplos representativos de nuestras soluciones especializadas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casosTypicos.map((caso, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-md hover:shadow-lg transition-shadow rounded-none border-0"
              >
                <div className="relative h-40">
                  <img src={caso.image} alt={`${caso.title} ${caso.subtitle}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "#003249" }}>
                    {caso.title}
                  </h3>
                  <p 
                    className="text-sm font-light" 
                    style={{ color: "#737373" }}
                    dangerouslySetInnerHTML={{ __html: caso.subtitle }}
                  />
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
