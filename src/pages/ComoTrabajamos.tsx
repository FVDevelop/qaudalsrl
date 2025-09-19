import { 
  Search, 
  PenTool, 
  Calendar, 
  HardHat, 
  Play, 
  Settings,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const ComoTrabajamos = () => {
  const workflowSteps = [
    {
      icon: Search,
      title: "Diagnóstico",
      description: "Relevamiento, datos base, riesgos y oportunidades",
      details: "Análisis exhaustivo de la situación actual, recolección de datos técnicos y operativos, identificación de riesgos potenciales y evaluación de oportunidades de mejora para establecer una línea base sólida.",
      color: "#9AD1D4",
      gradient: "from-[#9AD1D4] to-[#80CED7]"
    },
    {
      icon: PenTool,
      title: "Ingeniería",
      description: "Alternativas, diseño y documentación técnica",
      details: "Desarrollo de alternativas de solución, diseño detallado de sistemas y procesos, elaboración de planos técnicos, especificaciones y documentación completa para la implementación del proyecto.",
      color: "#80CED7",
      gradient: "from-[#80CED7] to-[#007EA7]"
    },
    {
      icon: Calendar,
      title: "Plan de obra",
      description: "Cronograma, presupuesto, contrataciones",
      details: "Planificación detallada del proyecto con cronograma de actividades, elaboración de presupuesto integral, gestión de contrataciones y definición de recursos necesarios para la ejecución exitosa.",
      color: "#007EA7",
      gradient: "from-[#007EA7] to-[#005577]"
    },
    {
      icon: HardHat,
      title: "Ejecución",
      description: "Dirección/inspección, aseguramiento de calidad",
      details: "Dirección técnica de obra, inspección continua de procesos, control de calidad en todas las etapas, coordinación de equipos de trabajo y supervisión del cumplimiento de especificaciones técnicas.",
      color: "#005577",
      gradient: "from-[#005577] to-[#003249]"
    },
    {
      icon: Play,
      title: "Puesta en marcha",
      description: "Comisionamiento y capacitación",
      details: "Comisionamiento de sistemas y equipos, pruebas de funcionamiento, ajustes operativos, capacitación del personal técnico y operativo, y transferencia de conocimiento para la operación autónoma.",
      color: "#003249",
      gradient: "from-[#003249] to-[#737373]"
    },
    {
      icon: Settings,
      title: "Operación y mejora",
      description: "Monitoreo, M&V, mantenimiento y optimización",
      details: "Monitoreo continuo de performance, medición y verificación de resultados, implementación de planes de mantenimiento preventivo y correctivo, optimización de procesos y mejora continua del sistema.",
      color: "#737373",
      gradient: "from-[#737373] to-[#9AD1D4]"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
            Cómo Trabajamos
          </h1>
          <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Nuestro proceso integral garantiza la excelencia desde el diagnóstico inicial 
            hasta la operación y mejora continua de cada proyecto.
          </p>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Desktop Flow - Horizontal */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-16">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-4 hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-center max-w-xs">
                      <h3 className="text-lg font-garet font-normal mb-2 uppercase" style={{color: '#003249'}}>
                        {step.title}
                      </h3>
                      <p className="text-sm font-light" style={{color: '#737373'}}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow (except for last item) */}
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight 
                      className="h-8 w-8 mx-6 text-[#007EA7] animate-pulse" 
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step, index) => (
                <Card key={index} className="service-card border-0 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mr-4`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-garet font-normal uppercase" style={{color: '#003249'}}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="font-light leading-relaxed text-sm" style={{color: '#737373'}}>
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tablet Flow - 2 Rows */}
          <div className="hidden md:block lg:hidden">
            <div className="space-y-12">
              {/* First Row - 3 steps */}
              <div className="flex items-center justify-between">
                {workflowSteps.slice(0, 3).map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-3 hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center max-w-xs">
                        <h3 className="text-base font-garet font-normal mb-2 uppercase" style={{color: '#003249'}}>
                          {step.title}
                        </h3>
                        <p className="text-xs font-light" style={{color: '#737373'}}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < 2 && (
                      <ArrowRight className="h-6 w-6 mx-4 text-[#007EA7]" />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Connecting Arrow Down */}
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 rotate-90 text-[#007EA7] animate-pulse" />
              </div>
              
              {/* Second Row - 3 steps */}
              <div className="flex items-center justify-between">
                {workflowSteps.slice(3).map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-3 hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center max-w-xs">
                        <h3 className="text-base font-garet font-normal mb-2 uppercase" style={{color: '#003249'}}>
                          {step.title}
                        </h3>
                        <p className="text-xs font-light" style={{color: '#737373'}}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < 2 && (
                      <ArrowRight className="h-6 w-6 mx-4 text-[#007EA7]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Details Cards for Tablet */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflowSteps.map((step, index) => (
                <Card key={index} className="service-card border-0 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mr-4`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-garet font-normal uppercase" style={{color: '#003249'}}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="font-light leading-relaxed text-sm" style={{color: '#737373'}}>
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="block md:hidden">
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Step */}
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg mb-4 hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-garet font-normal mb-2 uppercase" style={{color: '#003249'}}>
                      {step.title}
                    </h3>
                    <p className="text-sm font-light mb-4" style={{color: '#737373'}}>
                      {step.description}
                    </p>
                    
                    {/* Detail Card */}
                    <Card className="service-card border-0 w-full max-w-sm">
                      <CardContent className="p-4">
                        <p className="font-light leading-relaxed text-xs" style={{color: '#737373'}}>
                          {step.details}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Arrow Down (except for last item) */}
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="h-8 w-8 rotate-90 mt-6 text-[#007EA7] animate-pulse" />
                  )}
                </div>
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

export default ComoTrabajamos;