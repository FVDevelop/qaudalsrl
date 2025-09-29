import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import waterTreatmentBackground from '@/assets/water-treatment-background.png';

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "¿Qué servicios ofrece **Qaudal**?",
      answer: "**Qaudal** ofrece servicios integrales en ingeniería de agua, saneamiento y energía, incluyendo consultoría, diseño, construcción, operación y mantenimiento de infraestructura."
    },
    {
      question: "¿En qué sectores trabajan?",
      answer: "Trabajamos con diversos sectores incluyendo industrias, municipios, servicios sanitarios, desarrollos inmobiliarios y proyectos de infraestructura urbana."
    },
    {
      question: "¿Cómo es el proceso de trabajo de **Qaudal**?",
      answer: "Nuestro proceso incluye 6 etapas: Diagnóstico, Ingeniería, Plan de obra, Ejecución, Puesta en marcha, y Operación y mejora continua."
    },
    {
      question: "¿Realizan proyectos de eficiencia energética?",
      answer: "Sí, implementamos programas de eficiencia energética con medición y verificación (M&V) para optimizar el consumo y reducir costos operativos."
    },
    {
      question: "¿Ofrecen servicios de monitoreo ambiental?",
      answer: "Sí, realizamos monitoreo ambiental incluyendo control de olores, ruido y gestión de pasivos ambientales."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient Background */}
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
            Preguntas Frecuentes
          </h1>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium" style={{color: '#003249'}}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-light pt-2" style={{color: '#737373'}}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Faqs;