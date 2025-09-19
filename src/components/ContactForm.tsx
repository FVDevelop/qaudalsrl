import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos contactaremos contigo en las próximas 24 horas.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-section bg-white scroll-mt-28 md:scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-garet font-normal mb-8 uppercase section-title" style={{color: '#737373'}}>
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#737373'}}>
            Estamos listos para transformar la gestión de tus instalaciones. 
            Contactanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="service-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-garet font-normal" style={{color: '#737373'}}>
                Solicitar Asesoramiento Gratuito
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
                
                <Button type="submit" className="w-full group font-medium px-8 py-4 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" style={{backgroundColor: '#003249', color: 'white'}}>
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="service-card border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-garet font-normal mb-6" style={{color: '#737373'}}>
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1" style={{color: '#737373'}}>Arq. Daniela Figiacone</div>
                      <div className="font-light" style={{color: '#737373'}}>Tel: 11.6094.1504</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1" style={{color: '#737373'}}>Ing. Alejandro Corea</div>
                      <div className="font-light" style={{color: '#737373'}}>Tel: 11.5020.5543</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1" style={{color: '#737373'}}>Email</div>
                      <div className="font-light" style={{color: '#737373'}}>info@innosphere.com.ar</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#007EA7'}}>
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1" style={{color: '#737373'}}>Oficinas</div>
                      <div className="font-light" style={{color: '#737373'}}>Ciudad Autónoma de Buenos Aires</div>
                      <Button variant="link" className="p-0 h-auto font-light" style={{color: '#007EA7'}}>
                        Ver ubicación en el mapa
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#003249'}}>
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2" style={{color: '#737373'}}>
                      Respuesta Garantizada
                    </h3>
                    <p className="font-light leading-relaxed" style={{color: '#737373'}}>
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
    </section>
  );
};

export default ContactForm;