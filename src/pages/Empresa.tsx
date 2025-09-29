import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Users, Zap, Shield, Award } from 'lucide-react';
import MethodologyDiagram from '@/components/MethodologyDiagram';
import workersImage from "@/assets/workers-engineering-team.jpg";
import carouselAgua from "@/assets/carousel-agua.jpg";
import carouselSaneamiento from "@/assets/carousel-saneamiento.jpg";
import carouselEnergia from "@/assets/carousel-energia.jpg";
import carouselObras from "@/assets/carousel-obras.jpg";
import waterTreatmentBackground from '@/assets/water-treatment-background.png';
import consultingProfessionals from '@/assets/consulting-professionals.jpg';
import construccionMontaje from '@/assets/construccion-montaje.jpg';
import gestionTecnologica from '@/assets/gestion-tecnologica-it.jpg';
import energiaRenovables from '@/assets/energia-renovables.jpg';
import ambienteSeguridad from '@/assets/ambiente-seguridad.jpg';

const Empresa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const casosTypicos = [
    {
      title: "Rediseño/expansión de plantas",
      subtitle: "de tratamiento y redes",
      image: carouselAgua
    },
    {
      title: "Estaciones de bombeo",
      subtitle: "y sistemas de impulsión",
      image: construccionMontaje
    },
    {
      title: "Implementación de SCADA",
      subtitle: "automatización y telemetría",
      image: gestionTecnologica
    },
    {
      title: "Programas de eficiencia energética",
      subtitle: "con M&V",
      image: energiaRenovables
    },
    {
      title: "Monitoreo ambiental",
      subtitle: "(olores, ruido) y gestión de pasivos",
      image: ambienteSeguridad
    }
  ];

  const reasons = [
    {
      icon: Target,
      title: "Cobertura end‑to‑end",
      description: "estudio → diseño → obra → operación → mejora.",
      color: "#007EA7"
    },
    {
      icon: Users,
      title: "Multidisciplina",
      description: "hidráulica, eléctrica, control/automatización, ambiente, energía.",
      color: "#003249"
    },
    {
      icon: CheckCircle,
      title: "Flexibilidad de contratación",
      description: "ejecución propia o en alianza con terceros habilitados.",
      color: "#007EA7"
    },
    {
      icon: Zap,
      title: "Enfoque en eficiencia",
      description: "optimización de energía, M&V y mejora continua.",
      color: "#003249"
    },
    {
      icon: Shield,
      title: "Cumplimiento normativo",
      description: "y buenas prácticas en HSE.",
      color: "#007EA7"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Header Section with Gradient Background */}
      <section className="relative pt-32 pb-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={waterTreatmentBackground}
            alt="Water Treatment Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-6 uppercase font-normal text-white">
            Quienes Somos
          </h1>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>
      </section>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="text-center">
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#007EA7'}}>
            Un flujo constante de soluciones para la gestión del agua, saneamiento y energía
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          {/* Tu proyecto. Nuestro caudal Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={workersImage} 
                alt="Equipo profesional de Qaudal en ambiente de ingeniería"
                className="w-full h-[500px] object-cover shadow-strong"
              />
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-garet font-normal mb-6 uppercase" style={{color: '#003249'}}>
                Tu proyecto. Nuestro caudal.
              </h2>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                En un mundo donde la eficiencia y la sostenibilidad son fundamentales, no basta solo con la experiencia; se necesita una visión de futuro.
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                En <strong>Qaudal</strong>, combinamos la profundidad del conocimiento tradicional en ingeniería y arquitectura con la innovación de las tecnologías inteligentes, lo que nos permite ir más allá del análisis convencional.
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                Utilizamos Big Data, inteligencia artificial y Machine Learning para diseñar soluciones precisas que resuelvan desafíos complejos y transformen tus proyectos.
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#003249'}}>
                <strong>Nos especializamos en el flujo de la vida: el agua, el saneamiento, las energías renovables y la protección del medio ambiente.</strong>
              </p>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#737373'}}>
                Nuestra experiencia abarca la totalidad del ciclo de vida de un proyecto, desde la ejecución de estudios y diagnósticos hasta los diseños conceptuales y proyectos ejecutivos.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm font-garet uppercase tracking-wider" style={{color: '#007EA7'}}>
              Nos ocupamos de tus proyectos para que vos te ocupes de crecer
            </p>
          </div>
        </div>
      </div>

      {/* Cómo Trabajamos Section */}
      <section className="relative py-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={waterTreatmentBackground}
            alt="Water Treatment Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="section-title text-4xl md:text-5xl font-garet mb-6 uppercase font-normal text-white">
            Como Trabajamos
          </h2>
          <p className="text-xl max-w-5xl mx-auto font-light leading-relaxed text-white/90">
            En Qaudal aplicamos una metodología integral que nos permite abordar cada proyecto 
            desde una perspectiva 360°. Nuestro enfoque combina experiencia técnica multidisciplinaria 
            con las mejores prácticas de la industria, garantizando soluciones eficientes y sostenibles 
            en agua, saneamiento, energía y obras civiles.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>
      </section>

      {/* Diagrama de Metodología */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-4xl font-garet font-normal uppercase mb-4" style={{color: '#003249'}}>
              Nuestra Metodología
            </h3>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
              Proceso integral que garantiza la excelencia en cada etapa del proyecto
            </p>
          </div>
          <div className="flex justify-center">
            <MethodologyDiagram />
          </div>
        </div>
      </section>

      {/* Casos Típicos */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-garet font-normal uppercase mb-4" style={{color: '#003249'}}>
              Casos Típicos
            </h3>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
              Ejemplos representativos de nuestras soluciones especializadas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casosTypicos.map((caso, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow rounded-none border-0">
                <div className="relative h-40">
                  <img 
                    src={caso.image}
                    alt={`${caso.title} ${caso.subtitle}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg mb-2" style={{color: '#003249'}}>
                    {caso.title}
                  </h4>
                  <p className="text-sm font-light" style={{color: '#737373'}}>
                    {caso.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={waterTreatmentBackground} 
              alt="Por que Qaudal" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-garet font-normal mb-6 text-white uppercase">
              Por Qué Qaudal
            </h2>
          </div>
        </div>

        {/* Subtitle outside header */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <div className="text-center">
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light" style={{color: '#007EA7'}}>
              Nuestra propuesta de valor diferencial para tu organización
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Column 1: Diferenciales */}
            <div>
              <h3 className="text-2xl md:text-3xl font-garet font-normal mb-8 uppercase text-center" style={{color: '#737373'}}>
                Diferenciales
              </h3>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <Card key={index} className="bg-white border-0 group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 flex-shrink-0">
                          <reason.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-garet font-normal mb-2" style={{color: '#737373'}}>
                            {reason.title}
                          </h4>
                          <p className="font-light leading-relaxed text-sm" style={{color: '#003249'}}>
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Column 2: Beneficios para tu organización */}
            <div>
              <h3 className="text-2xl md:text-3xl font-garet font-normal mb-8 uppercase text-center" style={{color: '#737373'}}>
                Beneficios para tu organización
              </h3>
              <div className="space-y-6">
                <Card className="bg-white border-0 group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 flex-shrink-0">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-garet font-normal mb-2" style={{color: '#737373'}}>
                          Menores costos operativos
                        </h4>
                        <p className="font-light leading-relaxed text-sm" style={{color: '#003249'}}>
                          por optimización y eficiencia energética.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 flex-shrink-0">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-garet font-normal mb-2" style={{color: '#737373'}}>
                          Mayor confiabilidad y continuidad
                        </h4>
                        <p className="font-light leading-relaxed text-sm" style={{color: '#003249'}}>
                          de servicio por mantenimiento planificado.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-garet font-normal mb-2" style={{color: '#737373'}}>
                          Tiempos de ejecución más cortos
                        </h4>
                        <p className="font-light leading-relaxed text-sm" style={{color: '#003249'}}>
                          por gestión integral del ciclo de vida.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 flex-shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-garet font-normal mb-2" style={{color: '#737373'}}>
                          Reducción de riesgos
                        </h4>
                        <p className="font-light leading-relaxed text-sm" style={{color: '#003249'}}>
                          técnicos, ambientales y regulatorios.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-garet font-normal mb-2" style={{color: '#737373'}}>
                          Escalabilidad de soluciones
                        </h4>
                        <p className="font-light leading-relaxed text-sm" style={{color: '#003249'}}>
                          y tecnologías según demanda.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 group rounded-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007EA7] to-[#007EA7]/80 rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 flex-shrink-0">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-garet font-normal mb-2" style={{color: '#737373'}}>
                          Mejoras operativas
                        </h4>
                        <p className="font-light leading-relaxed text-sm" style={{color: '#003249'}}>
                          de los sistemas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Empresa;