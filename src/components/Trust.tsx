import { Award, Shield, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Trust = () => {
  const trustFactors = [
    {
      icon: Award,
      title: "Certificaciones ISO",
      description: "ISO 9001, ISO 14001 y certificaciones de seguridad laboral",
      items: ["ISO 9001:2015", "ISO 14001:2015", "OHSAS 18001"]
    },
    {
      icon: Clock,
      title: "15+ Años de Experiencia",
      description: "Trayectoria sólida en el mercado argentino",
      items: ["Desde 2008", "200+ proyectos", "Crecimiento sostenido"]
    },
    {
      icon: Globe,
      title: "Cobertura Nacional",
      description: "Servicios en CABA, GBA y principales ciudades del país",
      items: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"]
    },
    {
      icon: Shield,
      title: "Garantía Total",
      description: "Respaldo integral en todos nuestros servicios",
      items: ["Seguro de responsabilidad", "Personal capacitado", "Equipamiento certificado"]
    }
  ];

  return (
    <section className="py-section section-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-garet mb-6 uppercase font-normal" style={{color: '#737373'}}>
            Confianza respaldada por resultados
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Más de una década construyendo relaciones sólidas basadas en la excelencia, 
            la innovación y el compromiso con nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <Card key={index} className="service-card border-0 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-medium">
                  <factor.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-lg font-garet font-normal uppercase mb-4" style={{color: '#737373'}}>
                  {factor.title}
                </h3>
                
                <p className="font-light leading-relaxed mb-6" style={{color: '#737373'}}>
                  {factor.description}
                </p>
                
                <div className="space-y-2">
                  {factor.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-accent bg-accent/10 rounded-lg py-2 px-3">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="bg-card p-8 md:p-12 shadow-medium text-center">
          <h3 className="text-2xl md:text-3xl font-garet font-normal mb-6 uppercase" style={{color: '#737373'}}>
            Nuestro compromiso es tu tranquilidad
          </h3>
          
          <p className="text-lg font-light leading-relaxed mb-8 max-w-3xl mx-auto" style={{color: '#737373'}}>
            Cada día trabajamos para superar las expectativas de nuestros clientes, 
            ofreciendo soluciones que no solo resuelven problemas actuales, sino que 
            anticipan necesidades futuras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;