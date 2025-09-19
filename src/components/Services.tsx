import { 
  Building, 
  Zap, 
  Shield, 
  Monitor, 
  PenTool, 
  TreePine,
  Sparkles,
  Coffee,
  Recycle,
  Sun,
  GraduationCap,
  Cog,
  Users,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import espaciosVerdesImage from "@/assets/espacios-verdes.jpg";
import limpiezaEmpresarialImage from "@/assets/limpieza-empresarial.jpg";
import cateringDiarioImage from "@/assets/catering-diario.jpg";
import gestionResiduosImage from "@/assets/gestion-residuos.jpg";
import capacitacionesImage from "@/assets/capacitaciones.jpg";
import gestionTecnicaImage from "@/assets/gestion-tecnica.jpg";
import servicesSolarTechImage from "@/assets/services-solar-tech.jpg";
import gestionTecnologicaItImage from "@/assets/gestion-tecnologica-it.jpg";
import gestionEspaciosImage from "@/assets/gestion-espacios.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState("metodologia");

  const generalServices = [
    {
      image: gestionTecnicaImage,
      title: "Gestión Técnica",
      description: "Optimización integral de sistemas HVAC, eléctricos y de automatización para máxima eficiencia operativa."
    },
    {
      image: gestionEspaciosImage,
      title: "Gestión de Espacios", 
      description: "Administración completa de espacios de trabajo, optimización de layouts y gestión de ocupación."
    },
    {
      image: gestionTecnologicaItImage,
      title: "Gestión Tecnológica",
      description: "Soluciones tecnológicas avanzadas y sistemas de automatización para optimizar la operación empresarial."
    }
  ];

  const detailedServices = [
    {
      id: "metodologia",
      icon: Cog,
      title: "Metodología y Procesos",
      description: "Desarrollo e implementación de metodologías específicas para optimizar procesos operativos.",
      details: [
        "Diseño de metodologías personalizadas",
        "Optimización de procesos operativos", 
        "Aseguramiento de eficiencia",
        "Continuidad en todas las áreas de gestión"
      ]
    },
    {
      id: "mantenimiento",
      icon: Building,
      title: "Mantenimiento Edilicio y Climatización",
      description: "Mantenimiento preventivo y correctivo de instalaciones.",
      details: [
        "Mantenimiento preventivo de instalaciones",
        "Servicios correctivos especializados",
        "Gestión de sistemas de climatización",
        "Mantenimiento de infraestructura crítica"
      ]
    },
    {
      id: "instalaciones",
      icon: Zap,
      title: "Gestión de Instalaciones y Energía",
      description: "Optimización energética y gestión eficiente de recursos.",
      details: [
        "Gestión integral de instalaciones",
        "Optimización de eficiencia energética",
        "Gestión de recursos sustentables",
        "Reducción de costos operativos"
      ]
    },
    {
      id: "seguridad",
      icon: Shield,
      title: "Seguridad, Higiene y Calidad",
      description: "Protocolos de seguridad y control de calidad integral.",
      details: [
        "Implementación de protocolos de seguridad",
        "Gestión de higiene laboral",
        "Sistemas de control de calidad",
        "Entornos de trabajo seguros y eficientes"
      ]
    },
    {
      id: "tecnologia",
      icon: Monitor,
      title: "Gestión Tecnológica y Seguridad Electrónica",
      description: "Sistemas de seguridad avanzados y gestión tecnológica.",
      details: [
        "Soluciones tecnológicas avanzadas",
        "Sistemas de seguridad electrónica",
        "Protección de instalaciones",
        "Optimización tecnológica"
      ]
    },
    {
      id: "espacios",
      icon: PenTool,
      title: "Diseño y Gestión de Espacios",
      description: "Optimización de espacios de trabajo y diseño funcional.",
      details: [
        "Diseño estratégico de espacios",
        "Gestión optimizada de áreas de trabajo",
        "Mejora de productividad",
        "Bienestar organizacional"
      ]
    }
  ];

  const complementaryServices = [
    { 
      icon: TreePine, 
      title: "Espacios Verdes", 
      description: "Mantenimiento profesional de jardines y áreas verdes corporativas.",
      image: espaciosVerdesImage,
      details: [
        "Diseño y mantenimiento de jardines",
        "Poda y cuidado de plantas",
        "Sistemas de riego automatizados",
        "Paisajismo corporativo"
      ]
    },
    { 
      icon: Sparkles, 
      title: "Limpieza Empresarial", 
      description: "Servicios de limpieza profesional especializada para empresas.",
      image: limpiezaEmpresarialImage,
      details: [
        "Limpieza diaria de oficinas",
        "Servicios de deep cleaning",
        "Limpieza de cristales y fachadas",
        "Desinfección especializada"
      ]
    },
    { 
      icon: Coffee, 
      title: "Catering Diario", 
      description: "Servicios de alimentación y catering para empresas.",
      image: cateringDiarioImage,
      details: [
        "Servicio de desayunos y almuerzos",
        "Coffee breaks y eventos",
        "Menús saludables personalizados",
        "Gestión de comedores empresariales"
      ]
    },
    { 
      icon: Recycle, 
      title: "Gestión de Residuos", 
      description: "Control integral de residuos, plagas y logística empresarial.",
      image: gestionResiduosImage,
      details: [
        "Clasificación y reciclaje",
        "Control de plagas",
        "Servicios de mudanza",
        "Logística integral"
      ]
    },
    { 
      icon: Sun, 
      title: "ENERGÍA SUSTENTABLE", 
      description: "Innosphere ayuda a las empresas a optimizar el consumo energético de sus edificios mediante soluciones sustentables.",
      image: servicesSolarTechImage,
      details: [
        "Integración de energías renovables",
        "Optimización del consumo energético",
        "Eficiencia operativa avanzada",
        "Reducción significativa de costos"
      ]
    },
    { 
      icon: GraduationCap, 
      title: "Capacitaciones", 
      description: "Formación especializada para equipos de trabajo y desarrollo profesional.",
      image: capacitacionesImage,
      details: [
        "Capacitación en seguridad laboral",
        "Formación técnica especializada",
        "Desarrollo de competencias",
        "Certificaciones profesionales"
      ]
    }
  ];

  return (
    <section id="servicios" className="relative">
      {/* Absolute background image - contained to this section only */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/industrial-facilities-background.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* NUESTROS SERVICIOS GENERALES */}
      <div id="servicios-generales" className="relative z-10 container mx-auto px-4 py-12 bg-white/95 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
            Nuestros Servicios Generales
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Soluciones integrales para cada necesidad de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {generalServices.map((service, index) => (
            <Card key={index} className="service-card border-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-garet font-normal mb-4 uppercase" style={{color: '#737373'}}>
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed" style={{color: '#737373'}}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SERVICIOS DETALLADOS */}
      <div id="servicios-detallados" className="relative z-10 py-12 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
              Servicios Detallados
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
              Soluciones especializadas diseñadas para optimizar cada aspecto de tu infraestructura
            </p>
          </div>

          <Accordion 
            type="single" 
            collapsible 
            value={selectedService}
            onValueChange={setSelectedService}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {detailedServices.map((service) => (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                className="bg-white border border-gray-200"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center" style={{backgroundColor: '#007EA7'}}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-garet font-normal uppercase" style={{color: '#737373'}}>
                        {service.title}
                      </h3>
                      <p className="font-light text-base mt-1" style={{color: '#737373'}}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-2">
                  <div className="grid grid-cols-1 gap-4">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 flex-shrink-0" style={{backgroundColor: '#003249'}}></div>
                        <span className="font-light text-base" style={{color: '#737373'}}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* SERVICIOS COMPLEMENTARIOS */}
      <div id="servicios-complementarios" className="relative z-10 container mx-auto px-4 py-12 bg-white/95 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
            Servicios Complementarios
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Servicios adicionales que potencian tu operación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complementaryServices.map((service, index) => (
            <Card key={index} className="service-card border-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center shadow-medium" style={{backgroundColor: '#007EA7'}}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-garet font-normal mb-3 uppercase" style={{color: '#737373'}}>
                  {service.title}
                </h3>
                
                <p className="font-light leading-relaxed text-sm mb-4" style={{color: '#737373'}}>
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 flex-shrink-0" style={{backgroundColor: '#003249'}}></div>
                      <span className="font-light text-sm" style={{color: '#737373'}}>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;