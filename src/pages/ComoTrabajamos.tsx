import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Search, PenTool, Calendar, HardHat, Play, Settings, ArrowRight, ArrowDown } from 'lucide-react';

// Import background images
import diagnosticoBackground from '@/assets/diagnostico-background.jpg';
import ingenieriaBackground from '@/assets/ingenieria-background.jpg';
import planObraBackground from '@/assets/plan-obra-background.jpg';
import ejecucionBackground from '@/assets/ejecucion-background.jpg';
import puestaMarchaBackground from '@/assets/puesta-marcha-background.jpg';
import operacionBackground from '@/assets/operacion-background.jpg';

const ComoTrabajamos = () => {
  const workflowSteps = [
    {
      icon: Search,
      title: "Diagnóstico",
      color: "#9AD1D4",
      gradient: "from-[#9AD1D4] to-[#80CED7]",
      background: diagnosticoBackground,
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
      background: ingenieriaBackground,
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
      background: planObraBackground,
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
      background: ejecucionBackground,
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
      background: puestaMarchaBackground,
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
      background: operacionBackground,
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

      {/* Workflow Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop and Tablet View - 3x2 Grid */}
          <div className="hidden md:block">
            {/* First Row */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {workflowSteps.slice(0, 3).map((step, index) => (
                <div key={step.title} className="relative">
                  <Card className="h-[400px] overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${step.background})` }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    
                    <CardContent className="relative z-10 p-6 h-full flex flex-col">
                      {/* Top Section - Circle */}
                      <div className="flex justify-center mb-6">
                        <div 
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white text-center mb-4 font-garet uppercase">
                        {step.title}
                      </h3>
                      
                      {/* Bottom Section - Bullets */}
                      <div className="flex-1">
                        <ul className="space-y-2">
                          {step.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start text-white/90 text-sm font-garet">
                              <span className="w-2 h-2 rounded-full bg-white/80 mt-2 mr-3 flex-shrink-0"></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow to next step */}
                  {index < 2 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-primary bg-background rounded-full p-1 shadow-lg" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Connecting Arrow between rows */}
            <div className="flex justify-center mb-8">
              <ArrowDown className="w-8 h-8 text-primary bg-background rounded-full p-1 shadow-lg" />
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-3 gap-8">
              {workflowSteps.slice(3).map((step, index) => (
                <div key={step.title} className="relative">
                  <Card className="h-[400px] overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${step.background})` }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    
                    <CardContent className="relative z-10 p-6 h-full flex flex-col">
                      {/* Top Section - Circle */}
                      <div className="flex justify-center mb-6">
                        <div 
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white text-center mb-4 font-garet uppercase">
                        {step.title}
                      </h3>
                      
                      {/* Bottom Section - Bullets */}
                      <div className="flex-1">
                        <ul className="space-y-2">
                          {step.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start text-white/90 text-sm font-garet">
                              <span className="w-2 h-2 rounded-full bg-white/80 mt-2 mr-3 flex-shrink-0"></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow to next step */}
                  {index < 2 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-primary bg-background rounded-full p-1 shadow-lg" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Vertical Stack */}
          <div className="block md:hidden space-y-6">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <Card className="h-[350px] overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${step.background})` }}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  
                  <CardContent className="relative z-10 p-6 h-full flex flex-col">
                    {/* Top Section - Circle */}
                    <div className="flex justify-center mb-4">
                      <div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white text-center mb-4 font-garet uppercase">
                      {step.title}
                    </h3>
                    
                    {/* Bottom Section - Bullets */}
                    <div className="flex-1">
                      <ul className="space-y-2">
                        {step.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start text-white/90 text-sm font-garet">
                            <span className="w-2 h-2 rounded-full bg-white/80 mt-2 mr-3 flex-shrink-0"></span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow to next step */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center mt-4 mb-2">
                    <ArrowDown className="w-8 h-8 text-primary bg-background rounded-full p-1 shadow-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default ComoTrabajamos;