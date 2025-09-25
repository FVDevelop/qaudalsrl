import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Search, PenTool, Calendar, HardHat, Play, Settings, ArrowRight, ArrowDown } from 'lucide-react';

// Import images
import heroConsultingBackground from '@/assets/hero-consulting-background.jpg';
import metodologiaQaudal from '@/assets/metodologia-qaudal.png';
import workersTeam from '@/assets/workers-engineering-team.jpg';

const ComoTrabajamos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workflowSteps = [
    {
      icon: Search,
      title: "Diagnóstico",
      color: "#9AD1D4",
      gradient: "from-[#9AD1D4] to-[#80CED7]",
      bullets: [
        "Relevamiento de condiciones existentes",
        "Recolección de datos técnicos y operativos",
        "Identificación de riesgos y oportunidades",
        "Análisis de normativas aplicables",
        "Evaluación de recursos disponibles"
      ]
    },
    {
      icon: PenTool,
      title: "Ingeniería",
      color: "#80CED7",
      gradient: "from-[#80CED7] to-[#007EA7]",
      bullets: [
        "Desarrollo de alternativas técnicas",
        "Diseño detallado de sistemas",
        "Elaboración de planos y especificaciones",
        "Cálculos estructurales y de proceso",
        "Documentación técnica completa"
      ]
    },
    {
      icon: Calendar,
      title: "Plan de obra",
      color: "#007EA7",
      gradient: "from-[#007EA7] to-[#005577]",
      bullets: [
        "Elaboración de cronograma detallado",
        "Presupuesto integral del proyecto",
        "Gestión de contrataciones",
        "Definición de recursos necesarios",
        "Planificación logística"
      ]
    },
    {
      icon: HardHat,
      title: "Ejecución",
      color: "#005577",
      gradient: "from-[#005577] to-[#003249]",
      bullets: [
        "Dirección técnica de obra",
        "Inspección y control de calidad",
        "Coordinación de equipos de trabajo",
        "Supervisión de cumplimiento normativo",
        "Gestión de cambios y contingencias"
      ]
    },
    {
      icon: Play,
      title: "Puesta en marcha",
      color: "#003249",
      gradient: "from-[#003249] to-[#737373]",
      bullets: [
        "Comisionamiento de sistemas",
        "Pruebas de funcionamiento",
        "Ajustes operativos",
        "Capacitación del personal",
        "Transferencia de conocimiento"
      ]
    },
    {
      icon: Settings,
      title: "Operación y mejora",
      color: "#737373",
      gradient: "from-[#737373] to-[#9AD1D4]",
      bullets: [
        "Monitoreo continuo de performance",
        "Medición y verificación (M&V)",
        "Mantenimiento preventivo y correctivo",
        "Optimización de procesos",
        "Mejora continua del sistema"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroConsultingBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal text-white">
            Cómo Trabajamos
          </h1>
          <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed text-white/90">
            Metodología integral para proyectos de agua, saneamiento y energía
          </p>
        </div>
      </section>

      {/* Methodology Images Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Methodology Diagram */}
            <div className="flex justify-center">
              <img 
                src={metodologiaQaudal} 
                alt="Metodología Qaudal - Diagrama de procesos integrados para proyectos de agua, saneamiento y energía"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            
            {/* Right: Team Photo */}
            <div className="flex justify-center">
              <img 
                src={workersTeam} 
                alt="Equipo de ingenieros trabajando en metodología colaborativa para proyectos de infraestructura hídrica"
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
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