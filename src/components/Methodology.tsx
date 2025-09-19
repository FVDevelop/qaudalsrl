import { 
  Search, 
  PenTool, 
  Play, 
  BarChart3 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import flowWhiteboardImage from "@/assets/flow-whiteboard.jpg";

const Methodology = () => {
  const steps = [
    {
      icon: Search,
      title: "ESTUDIOS Y EVALUACIÓN",
      description: "Investigación integral de recursos hídricos, estudios hidrogeológicos y análisis técnico-económico.",
      detail: "Estudios especializados y planificación",
      bgColor: "#9AD1D4"
    },
    {
      icon: PenTool,
      title: "DISEÑO Y PROYECTO",
      description: "Desarrollo de ingeniería, cálculos, optimización y documentación técnica completa del proyecto.",
      detail: "Ingeniería detallada y documentación",
      bgColor: "#80CED7"
    },
    {
      icon: Play,
      title: "CONSTRUCCIÓN Y MONTAJE",
      description: "Ejecución de obras civiles e infraestructura con dirección técnica y control de calidad.",
      detail: "Construcción y puesta en marcha",
      bgColor: "#007EA7"
    },
    {
      icon: BarChart3,
      title: "OPERACIÓN Y MEJORA",
      description: "Gestión operativa, mantenimiento especializado y optimización continua de los sistemas.",
      detail: "Operación y mejora continua",
      bgColor: "#003249"
    }
  ];

  return (
    <section id="metodologia" className="py-section bg-white scroll-mt-28 md:scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-garet mb-8 uppercase font-normal section-title" style={{color: '#737373'}}>
            Metodología y Procesos
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed text-muted-foreground">
            Desde estudios hasta operación: un enfoque integral para proyectos de agua, saneamiento y energía
          </p>
        </div>

        {/* Image and Overlapping Cards Layout */}
        <div className="grid grid-cols-12 gap-8 relative">
          {/* Background Image - 50% width */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative h-[480px] lg:h-[560px] overflow-hidden">
              <img 
                src={flowWhiteboardImage} 
                alt="Equipo trabajando en metodología y procesos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Overlapping Cards */}
          <div className="col-span-12 lg:col-span-6 lg:-ml-20 z-10 flex flex-col justify-center space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-strong relative group bg-[#CCDBDC] rounded-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{backgroundColor: step.bgColor}}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-garet font-normal uppercase mb-2" style={{color: '#737373'}}>
                        {step.title}
                      </h3>
                      
                      <p className="font-light leading-relaxed text-base md:text-lg" style={{color: '#737373'}}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;