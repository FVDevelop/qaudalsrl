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
      {/* Hero Section with Carousel */}
      <section className="relative pt-32 pb-20">
        <Carousel 
          className="w-full h-[70vh]" 
          plugins={[Autoplay({ delay: 5000 })]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative w-full h-[70vh] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <h1 className="text-4xl md:text-5xl font-garet mb-8 uppercase font-normal">
                        Consultora especializada en agua, saneamiento, energía y medioambiente
                      </h1>
                      <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
                        Integramos experiencia técnica y tecnologías inteligentes para diseñar soluciones sostenibles e innovadoras que generan impacto real.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

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
          
          {/* Tagline */}
          <div className="text-center mt-20">
            <p className="text-xs md:text-sm font-garet uppercase tracking-wider" style={{color: '#007EA7'}}>
              Nos ocupamos de tus proyectos para que vos te ocupes de crecer
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Empresa;