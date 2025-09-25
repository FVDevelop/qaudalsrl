import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import workersImage from "@/assets/workers-engineering-team.jpg";
import carouselAgua from "@/assets/carousel-agua.jpg";
import carouselSaneamiento from "@/assets/carousel-saneamiento.jpg";
import carouselEnergia from "@/assets/carousel-energia.jpg";
import carouselObras from "@/assets/carousel-obras.jpg";

const Empresa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselImages = [
    {
      src: carouselAgua,
      alt: "Infraestructura de tratamiento de agua",
      title: "Agua"
    },
    {
      src: carouselSaneamiento,
      alt: "Sistemas de saneamiento y tratamiento",
      title: "Saneamiento"
    },
    {
      src: carouselEnergia,
      alt: "Energías renovables y sostenibles",
      title: "Energía"
    },
    {
      src: carouselObras,
      alt: "Obras de infraestructura y construcción",
      title: "Obras"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Header Section */}
      <div className="relative pt-28 md:pt-32 pb-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
              Nuestra Empresa
            </h1>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed mb-2" style={{color: '#737373'}}>
              Integramos experiencia técnica y tecnologías inteligentes para diseñar soluciones sostenibles e innovadoras que generan impacto real.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-0 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Tu proyecto. Nuestro caudal Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={workersImage} 
                alt="Equipo profesional de Qaudal en ambiente de ingeniería"
                className="w-full h-[500px] object-cover shadow-strong"
              />
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-garet font-normal mb-6 uppercase" style={{color: '#003249'}}>
                Tu proyecto. Nuestro caudal.
              </h2>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                En un mundo donde la eficiencia y la sostenibilidad son fundamentales, no basta solo con la experiencia; se necesita una visión de futuro.
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                En Qaudal, combinamos la profundidad del conocimiento tradicional en ingeniería y arquitectura con la innovación de las tecnologías inteligentes, lo que nos permite ir más allá del análisis convencional.
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                Utilizamos Big Data, inteligencia artificial y Machine Learning para diseñar soluciones precisas que resuelvan desafíos complejos y transformen tus proyectos.
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#003249'}}>
                <strong>Nos especializamos en el flujo de la vida: el agua, el saneamiento, las energías renovables y la protección del medio ambiente.</strong>
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                Nuestra experiencia abarca la totalidad del ciclo de vida de un proyecto, desde la ejecución de estudios y diagnósticos hasta los diseños conceptuales y proyectos ejecutivos.
              </p>
            </div>
          </div>

          {/* Pilares Section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Solidez */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md" style={{backgroundColor: '#003249'}}>
                  <span className="text-white font-garet font-normal text-sm uppercase">Solidez</span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{color: '#737373'}}>
                  Más de XX años de experiencia en proyectos de ingeniería y ambiente.
                </p>
              </div>

              {/* Innovación */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md" style={{backgroundColor: '#007EA7'}}>
                  <span className="text-white font-garet font-normal text-sm uppercase">Innovación</span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{color: '#737373'}}>
                  Big Data, IA y Machine Learning aplicados al saneamiento y la energía.
                </p>
              </div>

              {/* Sostenibilidad */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md" style={{backgroundColor: '#737373'}}>
                  <span className="text-white font-garet font-normal text-sm uppercase">Sostenibilidad</span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{color: '#737373'}}>
                  Diseño de soluciones que cuidan los recursos y el medioambiente.
                </p>
              </div>

              {/* Resultados */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md" style={{backgroundColor: '#003249'}}>
                  <span className="text-white font-garet font-normal text-sm uppercase">Resultados</span>
                </div>
                <p className="text-sm font-light leading-relaxed" style={{color: '#737373'}}>
                  Proyectos que generan impacto real y medible.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-center mt-20">
            <p className="text-xs md:text-sm font-garet uppercase tracking-wider" style={{color: '#007EA7'}}>
              Nos ocupamos de tus proyectos para que vos te ocupes de crecer
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="text-center mt-16 space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <a
              href="/como-trabajamos"
              className="inline-block bg-[#003249] hover:bg-[#003249]/90 text-white px-8 py-3 font-light transition-colors"
            >
              ¿Cómo Trabajamos?
            </a>
            <a
              href="/servicios"
              className="inline-block bg-[#007EA7] hover:bg-[#007EA7]/90 text-white px-8 py-3 font-light transition-colors"
            >
              Nuestros Servicios
            </a>
            <a
              href="/por-que-qaudal"
              className="inline-block bg-[#737373] hover:bg-[#737373]/90 text-white px-8 py-3 font-light transition-colors"
            >
              ¿Por qué Qaudal?
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Empresa;