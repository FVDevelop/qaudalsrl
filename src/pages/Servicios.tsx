import { useEffect } from "react";
import { 
  FileText, 
  PenTool, 
  Settings, 
  Building, 
  ClipboardCheck, 
  FileCheck,
  Shield,
  Sun,
  Package
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import renewableEnergyBackground from '@/assets/renewable-energy-background.png';

// Import service images
import consultoriaEstudiosImage from "@/assets/consultoria-estudios.jpg";
import ingenieriaProyectosImage from "@/assets/ingenieria-proyectos.jpg";
import operacionMejoraImage from "@/assets/operacion-mejora.jpg";
import construccionMontajeImage from "@/assets/construccion-montaje.jpg";
import direccionInspeccionImage from "@/assets/direccion-inspeccion.jpg";
import gestionContratacionesImage from "@/assets/gestion-contrataciones.jpg";
import ambienteSeguridadImage from "@/assets/ambiente-seguridad.jpg";
import energiaSustentableImage from "@/assets/energia-sustentable.jpg";
import comercioEquiposImage from "@/assets/comercio-equipos.jpg";

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Consultoría, estudios y planificación",
      description: "Investigación y evaluación integral para el aprovechamiento de recursos hídricos y planificación de proyectos.",
      image: consultoriaEstudiosImage,
      details: [
        "Investigación y evaluación para el aprovechamiento de recursos hídricos",
        "Estudios hidrogeológicos",
        "Estudios técnico–económico–financieros para planificación y proyectos de obras sanitarias, riego y drenaje",
        "Asesoramiento integral en obras de saneamiento",
        "Análisis estadístico de datos para optimización de sistemas",
        "Estudios de calidad de agua y efluentes"
      ]
    },
    {
      icon: PenTool,
      title: "Ingeniería y proyectos",
      description: "Diseño, cálculo y optimización de sistemas de agua, saneamiento, energía y automatización industrial.",
      image: ingenieriaProyectosImage,
      details: [
        "Redes y sistemas de agua potable, cloacales, riego y drenaje pluvial",
        "Plantas de tratamiento con múltiples tecnologías",
        "Instalaciones eléctricas de MT/BT, fuerza motriz e iluminación",
        "Sistemas de control y automatización eléctricos, electrónicos, neumáticos",
        "Comunicaciones y procesos industriales",
        "Energías renovables: parques solares y eólicos, integración de recursos distribuidos"
      ]
    },
    {
      icon: Settings,
      title: "Operación y mejora de sistemas",
      description: "Gestión operativa especializada y optimización continua de sistemas de agua, saneamiento y energía.",
      image: operacionMejoraImage,
      details: [
        "Operación de sistemas de agua, saneamiento, riego y drenaje",
        "Optimización operativa y gestión de la energía",
        "Estrategias de mantenimiento y planes de mejora",
        "Monitoreo y control de procesos",
        "Gestión de la eficiencia energética",
        "Implementación de mejoras tecnológicas"
      ]
    },
    {
      icon: Building,
      title: "Construcción, montaje y obras",
      description: "Ejecución integral de obras civiles e infraestructura de servicios con gestión directa o mediante terceros.",
      image: construccionMontajeImage,
      details: [
        "Obras civiles e infraestructura de servicios (agua, cloacas, electricidad, drenaje pluvial)",
        "Cómputos métricos, especificaciones y planes de inversión",
        "Ejecución directa o mediante terceros habilitados",
        "Cumplimiento de normativa vigente",
        "Gestión de cronogramas y recursos",
        "Control de calidad en obra"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Dirección, inspección y control de obras",
      description: "Supervisión técnica integral y administración de la ejecución como representante del comitente.",
      image: direccionInspeccionImage,
      details: [
        "Dirección e inspección técnica; administración de la ejecución",
        "Contralor como representante del comitente",
        "Control de calidad en campo; informes técnicos, ambientales y sociales",
        "Certificación y seguimiento de curva de inversiones",
        "Supervisión de subcontratistas",
        "Verificación de planes de trabajo"
      ]
    },
    {
      icon: FileCheck,
      title: "Gestión de contrataciones y licitaciones",
      description: "Asesoramiento integral en procesos de licitación y contratación para proyectos de infraestructura.",
      image: gestionContratacionesImage,
      details: [
        "Desarrollo de licitaciones, contrataciones y concursos de precios",
        "Participación como contratista titular",
        "Participación como contratista subtitular en forma asociada",
        "Servicios como subcontratista para provisión y proyecto",
        "Dirección y/o mano de obra, materiales, maquinarias",
        "Suministro de equipos, instrumental y vehículos"
      ]
    },
    {
      icon: Shield,
      title: "Ambiente, seguridad e higiene",
      description: "Consultoría ambiental integral con estudios especializados y monitoreo continuo.",
      image: ambienteSeguridadImage,
      details: [
        "Consultoría ambiental integral; estudios de impacto y pasivos ambientales",
        "Auditorías ambientales y laboratorio especializado",
        "Instalación de equipos de monitoreo",
        "Seguridad e higiene industrial",
        "Muestreo y monitoreo de olores para evaluar áreas problemáticas",
        "Cartografía de niveles de ruido"
      ]
    },
    {
      icon: Sun,
      title: "Energía sustentable y eficiencia",
      description: "Proyectos integrales de energía renovable, auditorías energéticas y sistemas de eficiencia.",
      image: energiaSustentableImage,
      details: [
        "Proyectos de energía sustentable, auditorías y eficiencia energética",
        "Diseño, implementación, operación y mantenimiento de generación renovable",
        "Sistemas solares, eólicos, biomasa, cogeneración y gestión de la demanda",
        "Medición y verificación (M&V) de ahorros",
        "Recuperación y reúso de agua e integración con sistemas hidráulicos",
        "Comercialización e instalación de equipos y tecnologías vinculadas"
      ]
    },
    {
      icon: Package,
      title: "Comercio de equipos y tecnología",
      description: "Importación, exportación y comercialización de equipos especializados para proyectos de ingeniería.",
      image: comercioEquiposImage,
      details: [
        "Importación y exportación de insumos y equipos especializados",
        "Compra y venta de maquinarias para proyectos de agua y saneamiento",
        "Tecnologías vinculadas a energías renovables",
        "Equipos de control y automatización",
        "Instrumental de medición y monitoreo",
        "Asesoramiento técnico en selección de equipos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={renewableEnergyBackground}
            alt="Renewable Energy Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet uppercase font-normal text-white">
            Servicios
          </h1>
        </div>
      </section>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-5 pb-5">
        <div className="text-center">
          <p className="text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Soluciones integrales para agua, saneamiento y energía
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <section className="py-8 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Link to="/empresa#como-trabajamos">
              <Button 
                className="w-full sm:w-auto transition-all duration-300 rounded-none px-8 py-3 text-white hover:opacity-90"
                style={{
                  backgroundColor: '#003249'
                }}
              >
                Como Trabajamos
              </Button>
            </Link>
            <Link to="/#contacto">
              <Button 
                className="w-full sm:w-auto transition-all duration-300 rounded-none px-8 py-3 text-white hover:opacity-90"
                style={{
                  backgroundColor: '#003249'
                }}
              >
                Contactar a un especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4" style={{color: '#003249'}}>
                    {service.title}
                  </h3>
                  
                  <p className="font-light leading-relaxed text-base mb-6" style={{color: '#737373'}}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 flex-shrink-0" style={{backgroundColor: '#003249'}}></div>
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


      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Servicios;