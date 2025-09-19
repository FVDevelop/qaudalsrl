import { BadgeDollarSign, Cog, RefreshCcw, GraduationCap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: BadgeDollarSign,
      title: "Reducción de Costos",
      description: "Optimizamos recursos y procesos para reducir significativamente los costos operativos de tu empresa.",
      highlight: "Hasta 30% de ahorro"
    },
    {
      icon: "operational-continuity",
      title: "Continuidad Operativa Garantizada",
      description: "Protocolos de contingencia y mantenimiento preventivo que aseguran el funcionamiento ininterrumpido.",
      highlight: "99.9% uptime"
    },
    {
      icon: GraduationCap,
      title: "Personal Altamente Capacitado",
      description: "Equipo especializado con formación continua en las últimas tecnologías del sector.",
      highlight: "Personal experto"
    }
  ];

  return (
    <section id="beneficios" className="py-section bg-white scroll-mt-28 md:scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-garet mb-8 uppercase font-normal section-title" style={{color: '#737373'}}>
            Por qué elegir Innosphere?
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#007EA7'}}>
            Nos ocupamos de todo para que vos te enfoques en lo importante
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="service-card border-0 text-center group rounded-none">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-none flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                  {benefit.icon === "operational-continuity" ? (
                    <div className="relative">
                      <Cog className="h-10 w-10 text-white" />
                      <RefreshCcw className="h-6 w-6 text-white absolute -top-1 -right-1 animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                  ) : (
                    <benefit.icon className="h-10 w-10 text-white" />
                  )}
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    benefit.highlight === "Próximamente" 
                      ? "bg-accent/10 text-accent border border-accent/20 rotate-2 shadow-md" 
                      : "bg-accent/10 text-accent"
                  }`}>
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
              Más que un proveedor, somos tu socio estratégico
            </h3>
            <p className="text-lg font-light leading-relaxed mb-8" style={{color: '#737373'}}>
              Entendemos que cada empresa tiene desafíos únicos. Por eso, desarrollamos 
              soluciones a medida que se adaptan a tu sector, tamaño y objetivos específicos.
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