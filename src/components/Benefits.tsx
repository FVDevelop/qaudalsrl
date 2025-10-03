import { Award, CheckCircle2, Star, Trophy, Shield, Zap } from "lucide-react";
import benefitsHeroBackground from "@/assets/benefits-hero-background.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Award,
      title: "Menores costos operativos",
      description: "por optimización y eficiencia energética.",
      highlight: "Eficiencia energética"
    },
    {
      icon: Shield,
      title: "Mayor confiabilidad y continuidad",
      description: "de servicio por mantenimiento planificado.",
      highlight: "Continuidad garantizada"
    },
    {
      icon: CheckCircle2,
      title: "Tiempos de ejecución más cortos",
      description: "por gestión integral del ciclo de vida.",
      highlight: "Gestión integral"
    },
    {
      icon: Trophy,
      title: "Reducción de riesgos",
      description: "técnicos, ambientales y regulatorios.",
      highlight: "Mitigación de riesgos"
    },
    {
      icon: Star,
      title: "Escalabilidad de soluciones",
      description: "y tecnologías según demanda.",
      highlight: "Crecimiento adaptable"
    },
    {
      icon: Zap,
      title: "Mejoras operativas",
      description: "de los sistemas.",
      highlight: "Mejora continua"
    }
  ];

  return (
    <section id="beneficios" className="py-section scroll-mt-28 md:scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-garet mb-8 uppercase font-normal section-title" style={{color: '#737373'}}>
            Por qué elegirnos?
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#007EA7'}}>
            Consultoría e ingeniería integral con alcance Argentina y exterior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-0 text-center group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {benefit.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg font-garet font-normal mb-3 uppercase" style={{color: '#737373'}}>
                  {benefit.title}
                </h3>
                
                <p className="font-light leading-relaxed text-base" style={{color: '#003249'}}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;