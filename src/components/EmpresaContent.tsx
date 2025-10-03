import { Card, CardContent } from '@/components/ui/card';
import MethodologyDiagram from '@/components/MethodologyDiagram';
import workersImage from "@/assets/workers-engineering-team.jpg";
import carouselAgua from "@/assets/carousel-agua.jpg";
import construccionMontaje from '@/assets/construccion-montaje.jpg';
import gestionTecnologica from '@/assets/gestion-tecnologica-it.jpg';
import energiaRenovables from '@/assets/energia-renovables.jpg';
import ambienteSeguridad from '@/assets/ambiente-seguridad.jpg';
import waterTreatmentBackground from '@/assets/water-treatment-background.png';

const EmpresaContent = () => {
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

  return (
    <>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          {/* Tu proyecto. Nuestro caudal Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={workersImage} 
                alt="Equipo profesional de Qaudal en ambiente de ingeniería"
                className="w-full h-[500px] object-cover shadow-strong"
              />
            </div>
            
            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-garet font-normal mb-4 uppercase" style={{color: '#003249'}}>
                Tu proyecto. Nuestro caudal.
              </h2>
              
              <p className="text-lg font-light leading-relaxed" style={{color: '#003249'}}>
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
                Nuestra experiencia abarca la totalidad del ciclo de vida de un proyecto, desde la ejecución de estudios y diagnósticos hasta los diseños conceptuales y proyectos ejecutivos. Trabajamos con personal propio y especialistas externos, con alcance en Argentina y el exterior.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-8">
            {/*<p className="text-sm md:text-base font-garet font-semibold uppercase tracking-wider" style={{color: '#007EA7'}}>*/}
              <p className="text-sm md:text-xl font-garet font-semibold uppercase tracking-wider" style={{color: '#007EA7'}}>  
              Nos ocupamos de tus proyectos para que vos te ocupes de crecer
            </p>
          </div>
        </div>
      </div>

      {/* Cómo Trabajamos Section */}
      <section id="como-trabajamos" className="relative py-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden scroll-mt-28 md:scroll-mt-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={waterTreatmentBackground}
            alt="Water Treatment Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="section-title text-4xl md:text-5xl font-garet uppercase font-normal text-white">
            Como Trabajamos
          </h2>
        </div>
      </section>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-5 pb-5">
        <div className="text-center">
          <p className="text-xl max-w-5xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            En <strong>Qaudal</strong> aplicamos una metodología integral que nos permite abordar cada proyecto 
            desde una perspectiva 360°. Nuestro enfoque combina experiencia técnica multidisciplinaria 
            con las mejores prácticas de la industria, garantizando soluciones eficientes y sostenibles.
           </p>
        </div>
      </div>

      {/* Diagrama de Metodología */}
      <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-4xl font-garet font-normal uppercase mb-4" style={{color: '#003249'}}>
              Nuestra Metodología
            </h3>
            <p className="text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
              Proceso integral que garantiza la excelencia en cada etapa del proyecto
            </p>
          </div>
          <div className="flex justify-center">
            <MethodologyDiagram />
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="py-8 flex justify-center bg-white">
        <div 
          className="h-1 w-3/4 max-w-4xl"
          style={{
            background: 'linear-gradient(to right, #003249, #007EA7, #003249)'
          }}
        />
      </div>

      {/* Casos Típicos */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-garet font-normal uppercase mb-4" style={{color: '#003249'}}>
              Casos Típicos
            </h3>
            <p className="text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
              Ejemplos representativos de nuestras soluciones especializadas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <p className="text-base font-light" style={{color: '#737373'}}>
                    {caso.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Qaudal Section with Header */}
      <section className="relative py-12 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={waterTreatmentBackground}
            alt="Por Qué Qaudal Background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="section-title text-4xl md:text-5xl font-garet uppercase font-normal text-white">
            Por Qué Qaudal
          </h2>
        </div>
      </section>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-5 pb-5">
        <div className="text-center">
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Esta es nuestra propuesta de valor para tu organización
          </p>
        </div>
      </div>

      {/* Two Large Cards Layout */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Diferenciales */}
            <Card className="bg-white border-0 shadow-lg rounded-none overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-garet font-normal mb-6 uppercase text-center" style={{color: '#003249'}}>
                  Diferenciales
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Cobertura end‑to‑end
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        estudio → diseño → obra → operación → mejora.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Multidisciplina
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        hidráulica, eléctrica, control/automatización, ambiente, energía.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Flexibilidad de contratación
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        ejecución propia o en alianza con terceros habilitados.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Enfoque en eficiencia
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        optimización de energía, M&V y mejora continua.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Cumplimiento normativo
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        y buenas prácticas en HSE.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Beneficios para tu organización */}
            <Card className="bg-white border-0 shadow-lg rounded-none overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-garet font-normal mb-6 uppercase text-center" style={{color: '#003249'}}>
                  Beneficios
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Menores costos operativos
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        por optimización y eficiencia energética.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Mayor confiabilidad y continuidad
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        de servicio por mantenimiento planificado.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Tiempos de ejecución más cortos
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        por gestión integral del ciclo de vida.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Reducción de riesgos
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        técnicos, ambientales y regulatorios.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Escalabilidad de soluciones
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        y tecnologías según demanda.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#007EA7'}}></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{color: '#003249'}}>
                        Mejoras operativas
                      </h4>
                      <p className="font-light text-base leading-relaxed" style={{color: '#737373'}}>
                        de los sistemas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmpresaContent;