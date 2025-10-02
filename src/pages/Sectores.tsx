import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Wheat, Zap, Building, Shield } from "lucide-react";
import renewableEnergyBackground from "@/assets/renewable-energy-background.png";

// Import sector images
import serviciosSanitariosImage from "@/assets/servicios-sanitarios.jpg";
import agroIndustrialImage from "@/assets/agro-industrial.jpg";
import energiaRenovablesImage from "@/assets/energia-renovables.jpg";
import infraestructuraUrbanaImage from "@/assets/infraestructura-urbana.jpg";
import industriasHSEImage from "@/assets/industrias-hse.jpg";

const Sectores = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors = [
    {
      icon: Droplets,
      title: "Servicios sanitarios y obras hidráulicas",
      description: "Diseño y ejecución de sistemas de agua potable, saneamiento y obras hidráulicas integrales.",
      image: serviciosSanitariosImage,
      color: "#007EA7"
    },
    {
      icon: Wheat,
      title: "Agro/industrial (riego, procesos, efluentes)",
      description: "Soluciones para riego agrícola, procesos industriales y tratamiento de efluentes.",
      image: agroIndustrialImage,
      color: "#003249"
    },
    {
      icon: Zap,
      title: "Energía y renovables",
      description: "Proyectos de energía sustentable, eficiencia energética y sistemas renovables.",
      image: energiaRenovablesImage,
      color: "#007EA7"
    },
    {
      icon: Building,
      title: "Infraestructura urbana y civil",
      description: "Desarrollo de infraestructura urbana y obras civiles de gran escala.",
      image: infraestructuraUrbanaImage,
      color: "#003249"
    },
    {
      icon: Shield,
      title: "Industrias con requerimientos de ambiente, seguridad e higiene",
      description: "Consultoría especializada en HSE para industrias con altos estándares ambientales.",
      image: industriasHSEImage,
      color: "#007EA7"
    }
  ];

  return (
    <div className="min-h-screen">
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
            Sectores
          </h1>
        </div>
      </section>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-5 pb-5">
        <div className="text-center">
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Industrias y mercados donde aplicamos nuestras soluciones especializadas
          </p>
        </div>
      </div>

      {/* Sectors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sectors.map((sector, index) => (
              <Card key={index} className="sector-card border-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div 
                    className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center shadow-medium rounded-full"
                    style={{backgroundColor: sector.color}}
                  >
                    <sector.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4" style={{color: '#003249'}}>
                    {sector.title}
                  </h3>
                  
                  <p className="font-light leading-relaxed text-base" style={{color: '#737373'}}>
                    {sector.description}
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

export default Sectores;