import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap, Shield } from "lucide-react";
import consultingProfessionals from "@/assets/consulting-professionals.jpg";

const PorQueQaudal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reasons = [
    {
      icon: Target,
      title: "Cobertura end‑to‑end",
      description: "estudio → diseño → obra → operación → mejora.",
      color: "#007EA7"
    },
    {
      icon: Users,
      title: "Multidisciplina",
      description: "hidráulica, eléctrica, control/automatización, ambiente, energía.",
      color: "#003249"
    },
    {
      icon: CheckCircle,
      title: "Flexibilidad de contratación",
      description: "ejecución propia o en alianza con terceros habilitados.",
      color: "#007EA7"
    },
    {
      icon: Zap,
      title: "Enfoque en eficiencia",
      description: "optimización de energía, M&V y mejora continua.",
      color: "#003249"
    },
    {
      icon: Shield,
      title: "Cumplimiento normativo",
      description: "y buenas prácticas en HSE.",
      color: "#007EA7"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Header Section with Image */}
      <div className="relative pt-28 md:pt-32 pb-6">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${consultingProfessionals})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal text-white">
              Por que <strong>Qaudal</strong>
            </h1>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed mb-2 text-white">
              Nuestra propuesta diferencial en consultoría e ingeniería integral
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-0 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={consultingProfessionals} 
                alt="Profesionales de consultoría e ingeniería en Qaudal"
                className="w-full h-[600px] object-cover shadow-strong"
              />
            </div>
            
            {/* Right - Reasons Cards */}
            <div className="order-1 lg:order-2 space-y-6">
              {reasons.map((reason, index) => (
                <Card 
                  key={index} 
                  className="bg-white border-0 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    marginLeft: index % 2 === 0 ? '0' : '2rem',
                    marginRight: index % 2 === 0 ? '2rem' : '0',
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0"
                        style={{backgroundColor: reason.color}}
                      >
                        <reason.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-garet font-normal mb-2 uppercase" style={{color: '#737373'}}>
                          {reason.title}
                        </h3>
                        <p className="text-sm font-light leading-relaxed" style={{color: '#737373'}}>
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default PorQueQaudal;