import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import communicationBackground from "@/assets/communication-background.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nombre es requerido").max(100, "Nombre muy largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muy largo"),
  company: z.string().trim().max(100, "Nombre de empresa muy largo").optional(),
  phone: z.string().trim().min(1, "Teléfono es requerido").max(20, "Teléfono muy largo"),
  message: z.string().trim().max(1000, "Mensaje muy largo").optional()
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const validatedData = contactSchema.parse(formData);
      
      // Create mailto link for fedravillamil@yahoo.com
      const subject = encodeURIComponent(`Solicitud de Cotización - ${validatedData.name}`);
      const body = encodeURIComponent(`
Nombre: ${validatedData.name}
Email: ${validatedData.email}
Empresa: ${validatedData.company || 'No especificada'}
Teléfono: ${validatedData.phone}
Mensaje: ${validatedData.message || 'Sin mensaje adicional'}

Esta es una solicitud de cotización enviada desde el sitio web de Qaudal.
      `);
      
      const mailtoLink = `mailto:fedravillamil@yahoo.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Cotización enviada",
        description: "Tu solicitud ha sido enviada. Nos contactaremos contigo en las próximas 24 horas.",
      });
      
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error en el formulario",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar la solicitud. Intenta nuevamente.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="scroll-mt-28 md:scroll-mt-32">
      {/* Header with gradient and background */}
      <div className="relative py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={communicationBackground} 
            alt="Contacto" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003249]/95 via-[#007EA7]/85 to-[#003249]/95"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-16 h-px mx-auto mb-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}></div>
          <h2 className="text-4xl md:text-5xl font-garet font-normal text-white uppercase">
            Contacta a un asesor
          </h2>
          <div className="w-16 h-px mx-auto mt-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}></div>
        </div>
      </div>

      {/* Subtitle outside header */}
      <div className="container mx-auto px-4 pt-6 pb-4">
        <div className="text-center">
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Estamos listos para transformar la gestión de tus instalaciones. 
            Contactanos para una consulta gratuita.
          </p>
        </div>
      </div>

      <div className="bg-white py-8">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="service-card border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-garet font-normal" style={{color: '#737373'}}>
                  Solicitar Asesoramiento Gratuito
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-light mb-2 block" style={{color: '#737373'}}>
                      Nombre y Apellido *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-muted focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-light mb-2 block" style={{color: '#737373'}}>
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-muted focus:border-accent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-light mb-2 block" style={{color: '#737373'}}>
                      Empresa
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-muted focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-light mb-2 block" style={{color: '#737373'}}>
                      Teléfono *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-muted focus:border-accent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-light mb-2 block" style={{color: '#737373'}}>
                    Contanos sobre tu proyecto
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-muted focus:border-accent resize-none"
                    placeholder="Describí brevemente qué servicios te interesan y las características de tu empresa..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group font-medium px-8 py-4 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50" 
                  style={{backgroundColor: '#003249', color: 'white'}}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>

          {/* Contact Information and Map */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="service-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-garet font-normal mb-4" style={{color: '#737373'}}>
                  Información de Contacto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1 text-sm" style={{color: '#737373'}}>Arq. Daniela Figiacone</div>
                      <div className="font-light text-sm" style={{color: '#737373'}}>Tel: 11.6094.1504</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1 text-sm" style={{color: '#737373'}}>Ing. Alejandro Corea</div>
                      <div className="font-light text-sm" style={{color: '#737373'}}>Tel: 11.5020.5543</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1 text-sm" style={{color: '#737373'}}>Email</div>
                      <div className="font-light text-sm" style={{color: '#737373'}}>info@qaudal.com.ar</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1 text-sm" style={{color: '#737373'}}>Oficinas</div>
                      <div className="font-light text-sm" style={{color: '#737373'}}>Ciudad Autónoma de Buenos Aires</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="service-card border-0">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.55984284622!2d-58.543312!3d-34.615695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e8!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Qaudal en Buenos Aires"
                />
              </CardContent>
            </Card>

            <Card className="service-card border-0">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#003249'}}>
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-sm" style={{color: '#737373'}}>
                      Respuesta Garantizada
                    </h3>
                    <p className="font-light leading-relaxed text-sm" style={{color: '#737373'}}>
                      Nos contactaremos contigo en las próximas <strong>24 horas</strong> para 
                      agendar una reunión y comenzar a trabajar en tu proyecto.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactForm;