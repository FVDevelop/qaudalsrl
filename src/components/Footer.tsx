import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import qaudalLogo from "@/assets/qaudal-logo-transp.png";

const Footer = () => {
  const quickLinks = [
    { name: "Quienes Somos", href: "/empresa" },
    { name: "Servicios", href: "/servicios" },
    { name: "Como Trabajamos", href: "/como-trabajamos" },
    { name: "Sectores", href: "/sectores" },
    { name: "Noticias", href: "/noticias" },
    { name: "FAQ's", href: "/faqs" },
    { name: "Contacto", href: "/#contacto" }
  ];

  const services = [
    "Agua y Saneamiento",
    "Energía Sustentable",
    "Obras Civiles",
    "Consultoría Técnica",
    "Gestión de Proyectos"
  ];

  return (
    <footer style={{ backgroundColor: '#004B6B' }} className="text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center w-fit leading-none">
              <img 
                src={qaudalLogo} 
                alt="Qaudal Logo"
                className="block h-16 md:h-20 w-auto object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
              />
            </div>
            <p className="text-white/80 font-light leading-relaxed">
              Soluciones integrales en agua, saneamiento, energía y obras civiles. 
              Transformamos infraestructura con tecnología y eficiencia sustentable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-none flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin className="h-5 w-5" strokeLinecap="square" strokeLinejoin="miter" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-none flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="h-5 w-5" strokeLinecap="square" strokeLinejoin="miter" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors font-light"
                >
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors font-light"
                >
                  Trabajá con nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-light mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80 font-light">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeLinecap="square" strokeLinejoin="miter" />
                <div className="text-white/80 font-light">
                  <div>Arq. Daniela Figiacone</div>
                  <div>11.6094.1504</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeLinecap="square" strokeLinejoin="miter" />
                <div className="text-white/80 font-light">
                  <div>Ing. Alejandro Corea</div>
                  <div>11.5020.5543</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeLinecap="square" strokeLinejoin="miter" />
                <div className="text-white/80 font-light">
                  info@qaudal.com.ar
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" strokeLinecap="square" strokeLinejoin="miter" />
                <div className="text-white/80 font-light">
                  Ciudad Autónoma de Buenos Aires, Argentina
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 font-light text-sm">
            © 2024. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;