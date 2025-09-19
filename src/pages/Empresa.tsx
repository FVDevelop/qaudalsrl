import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import companyImage from "@/assets/quienes-somos-image.jpg";

const Empresa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="relative pt-28 md:pt-32 pb-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
              Empresa
            </h1>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed mb-2" style={{color: '#737373'}}>
              Especialistas en Facility Management con compromiso hacia la excelencia operativa
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-0 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Company Description */}
          <div className="space-y-4 mb-16">
            <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
              Somos una consultora de Facility Management que brinda
              soluciones personalizadas, ágiles y cercanas.
              Combinamos diagnóstico técnico, experiencia operativa y
              tecnología para ofrecer un servicio eficiente, adaptado a las
              necesidades reales de empresas, industrias, desarrollos y
              espacios en crecimiento.
            </p>
            
            <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
              Nuestro enfoque integral permite anticipar riesgos, asegurar la
              continuidad operativa y optimizar el uso de recursos, generando
              así un ahorro de costos sostenido y una mejora continua en la gestión.
            </p>
          </div>
          
          {/* Mission and Vision with Overlapping Image */}
          <div className="relative">
            {/* Background Image */}
            <div className="relative h-[420px] md:h-[520px] mb-8">
              <img 
                src={companyImage} 
                alt="Equipo profesional de Innosphere en ambiente empresarial"
                className="w-full h-full object-contain object-left shadow-strong"
              />
            </div>
            
            {/* Overlapping Content Cards */}
            <div className="relative grid grid-cols-1 gap-8 px-4 lg:absolute lg:inset-y-0 lg:right-4 lg:my-auto lg:w-[520px] lg:z-10 lg:-mt-8">
              <div className="bg-card p-8 shadow-strong">
                <h2 className="text-2xl font-garet font-normal mb-4 uppercase" style={{color: '#737373'}}>Misión</h2>
                <p className="font-light leading-relaxed" style={{color: '#737373'}}>
                  Optimizar y mantener espacios de trabajo seguros, eficientes y sostenibles, 
                  integrando servicios de Facility Management que potencien la productividad 
                  y el crecimiento de nuestros clientes.
                </p>
              </div>
              
              <div className="bg-[#003249] p-8 shadow-strong text-white">
                <h2 className="text-2xl font-garet font-normal mb-4 uppercase text-white">Visión</h2>
                <p className="font-light leading-relaxed text-white">
                  Ser el socio estratégico de referencia en Facility Management Integrado, 
                  innovando con procesos, tecnología y talento para transformar espacios en 
                  activos que generan valor.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-center mt-20">
            <p className="text-xs md:text-sm font-garet uppercase tracking-wider" style={{color: '#007EA7'}}>
              Nos ocupamos de tus espacios para que vos te ocupes de crecer
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