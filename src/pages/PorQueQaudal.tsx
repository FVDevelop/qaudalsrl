import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap, Shield } from "lucide-react";
import whyQaudalBackground from "@/assets/why-qaudal-background.jpg";

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
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${whyQaudalBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-6xl font-garet mb-8 uppercase font-normal text-white">
            ¿Por qué Qaudal?
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed text-white/90">
            Nuestra propuesta diferencial en consultoría e ingeniería integral
          </p>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <Card key={index} className="bg-white border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div 
                      className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                      style={{backgroundColor: reason.color}}
                    >
                      <reason.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-garet font-normal mb-4 uppercase" style={{color: '#737373'}}>
                      {reason.title}
                    </h3>
                    <p className="font-light leading-relaxed" style={{color: '#737373'}}>
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default PorQueQaudal;