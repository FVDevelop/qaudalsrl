import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import carouselAgua from "@/assets/carousel-agua.jpg";
import carouselSaneamiento from "@/assets/carousel-saneamiento.jpg";
import carouselEnergia from "@/assets/carousel-energia.jpg";
import carouselObras from "@/assets/carousel-obras.jpg";

const Hero = () => {
  const carouselImages = [
    { src: carouselAgua, alt: "Soluciones integrales en agua y tratamiento" },
    { src: carouselSaneamiento, alt: "Sistemas de saneamiento y depuración" },
    { src: carouselEnergia, alt: "Energías renovables y eficiencia energética" },
    { src: carouselObras, alt: "Obras de infraestructura y construcción" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          className="w-full h-full"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-screen -ml-0">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 h-full">
                <div className="h-full w-full relative">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-6xl">
          {/* Facility Management - left aligned with translucent box */}
          <div className="flex justify-start">
            <div className="bg-black/30 p-8 text-left backdrop-blur-sm max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-garet mb-8 tracking-wide leading-tight text-white uppercase font-normal">
                Consultora especializada en agua, saneamiento, energía y medioambiente
              </h1>
              
              <p className="text-lg md:text-xl mb-12 max-w-4xl font-light leading-relaxed opacity-95 text-white">
                Integramos experiencia técnica y tecnologías inteligentes para diseñar soluciones sostenibles e innovadoras que generan impacto real.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
                <Link to="/#contacto">
                  <Button 
                    size="lg" 
                    className="bg-[#003249] text-white hover:bg-[#003249]/90 px-10 py-4 text-base font-medium"
                    asChild
                  >
                    <span>Solicitar Cotización</span>
                  </Button>
                </Link>
                
                <Link to="/empresa">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="btn-outline-elegant px-10 py-4 text-base"
                    asChild
                  >
                    <span>Conocer Más</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;