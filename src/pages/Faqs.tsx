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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="section-title text-4xl md:text-5xl font-garet mb-8 uppercase font-normal" style={{color: '#737373'}}>
            Preguntas Frecuentes
          </h1>
          <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Respuestas a las consultas más comunes sobre nuestros servicios
          </p>
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