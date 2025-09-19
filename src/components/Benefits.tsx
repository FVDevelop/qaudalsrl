import { TrendingDown, Shield, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import benefitsHeroBackground from "@/assets/benefits-hero-background.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Menores Costos Operativos",
      description: "Menores costos operativos por optimización y eficiencia energética.",
      highlight: "Eficiencia energética"
    },
    {
      icon: Shield,
      title: "Mayor Confiabilidad",
      description: "Mayor confiabilidad y continuidad de servicio por mantenimiento planificado.",
      highlight: "Continuidad garantizada"
    },
    {
      icon: Clock,
      title: "Tiempos Optimizados",
      description: "Tiempos de ejecución más cortos por gestión integral del ciclo de vida.",
      highlight: "Gestión integral"
    },
    {
      icon: ShieldCheck,
      title: "Reducción de Riesgos",
      description: "Reducción de riesgos técnicos, ambientales y regulatorios.",
      highlight: "Mitigación de riesgos"
    },
    {
      icon: ArrowUpRight,
      title: "Escalabilidad",
      description: "Escalabilidad de soluciones y tecnologías según demanda.",
      highlight: "Crecimiento adaptable"
    }
  ];

  return (
    <section id="beneficios" className="py-section scroll-mt-28 md:scroll-mt-32 relative">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={benefitsHeroBackground} 
          alt="Infrastructure and Engineering Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-garet mb-8 uppercase font-normal section-title" style={{color: '#737373'}}>
            Por qué elegirnos?
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#007EA7'}}>
            Consultoría e ingeniería integral con alcance Argentina y exterior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* First row: 3 items */}
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="bg-white border-0 text-center group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-none flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent">
                    {benefit.highlight}
                  </span>
                </div>
                
                <h3 className="text-xl font-garet font-normal mb-4 uppercase" style={{color: '#737373'}}>
                  {benefit.title}
                </h3>
                
                <p className="font-light leading-relaxed" style={{color: '#003249'}}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Second row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {benefits.slice(3, 5).map((benefit, index) => (
            <Card key={index + 3} className="bg-white border-0 text-center group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-none flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent">
                    {benefit.highlight}
                  </span>
                </div>
                
                <h3 className="text-xl font-garet font-normal mb-4 uppercase" style={{color: '#737373'}}>
                  {benefit.title}
                </h3>
                
                <p className="font-light leading-relaxed" style={{color: '#003249'}}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-card rounded-none p-8 shadow-medium">
            <h3 className="text-2xl md:text-3xl font-garet font-normal text-foreground mb-6" style={{color: '#737373'}}>
              Más que un consultor, somos tu socio de ingeniería
            </h3>
            <p className="text-lg font-light leading-relaxed mb-8" style={{color: '#737373'}}>
              Trabajamos con equipo propio o en sociedad con terceros, adaptándonos a las necesidades específicas 
              de cada proyecto de agua, saneamiento, energía y obras de infraestructura.
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-3xl font-light mb-2" style={{color: '#007EA7'}}>24/7</div>
                <div className="font-light" style={{color: '#737373'}}>Soporte disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;