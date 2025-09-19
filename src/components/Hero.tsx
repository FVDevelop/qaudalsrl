import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Instalaciones profesionales gestionadas por Innosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-6xl">
          {/* Facility Management - left aligned with translucent box */}
          <div className="flex justify-start">
            <div className="bg-black/30 p-8 text-left backdrop-blur-sm max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-garet mb-8 tracking-wide leading-tight text-white uppercase font-normal">
                Gestión de Instalaciones
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal">
                  FACILITY MANAGMENT
                </span>
              </h1>
              
              <p className="text-base md:text-xl mb-12 max-w-4xl font-light leading-relaxed opacity-95 text-white">
                Soluciones integrales para la gestión de tus espacios. Desde el mantenimiento técnico 
                hasta la gestión de servicios, optimizamos cada aspecto de tu infraestructura.
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