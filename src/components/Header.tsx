import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import innosphereLogo from "@/assets/innospherelogo-transp.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const isActive = (path: string) => {
    if (path === "/empresa" && location.pathname === "/empresa") return true;
    if (path.startsWith("/#") && location.hash === path.substring(1)) return true;
    if (path === "servicios" && (location.hash.startsWith("#servicios") || location.hash === "#servicios")) return true;
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isServicesOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-1 md:py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="inline-flex items-center">
              <img 
                src={innosphereLogo} 
                alt="Innosphere Logo"
                className="h-20 md:h-24 w-auto object-contain shrink-0 block"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/empresa" className={`transition-colors font-light ${
              isActive("/empresa") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Empresa
            </Link>
            
            {/* Custom Services Menu */}
            <div className="relative group" ref={servicesRef}>
              <button 
                className={`transition-colors font-light flex items-center gap-1 ${
                  isActive("servicios") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Servicios
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border shadow-lg z-[60] rounded-none"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  style={{ width: 'calc(100vw - 2rem)', maxWidth: '900px' }}
                >
                  <div className="grid grid-cols-3 divide-x divide-gray-200">
                    <Link 
                      to="/#servicios-generales" 
                      className="p-6 hover:bg-gray-50 transition-colors group text-center block"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <h3 className="font-medium text-[#003249] mb-2 group-hover:text-[#007EA7]">
                        Servicios Generales
                      </h3>
                      <p className="text-sm text-gray-600 font-light">
                        Soluciones integrales para tu empresa
                      </p>
                    </Link>
                    
                    <Link 
                      to="/#servicios-detallados" 
                      className="p-6 hover:bg-gray-50 transition-colors group text-center block"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <h3 className="font-medium text-[#003249] mb-2 group-hover:text-[#007EA7]">
                        Servicios Detallados
                      </h3>
                      <p className="text-sm text-gray-600 font-light">
                        Servicios especializados por área
                      </p>
                    </Link>
                    
                    <Link 
                      to="/#servicios-complementarios" 
                      className="p-6 hover:bg-gray-50 transition-colors group text-center block"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <h3 className="font-medium text-[#003249] mb-2 group-hover:text-[#007EA7]">
                        Servicios Complementarios
                      </h3>
                      <p className="text-sm text-gray-600 font-light">
                        Servicios adicionales y de apoyo
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/#metodologia" className={`transition-colors font-light ${
              isActive("/#metodologia") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Metodología
            </Link>
            <Link to="/#beneficios" className={`transition-colors font-light ${
              isActive("/#beneficios") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Beneficios
            </Link>
            <Link to="/#contacto" className={`transition-colors font-light ${
              isActive("/#contacto") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Contacto
            </Link>
            <Button asChild className="bg-[#003249] hover:bg-[#003249]/90 text-white">
              <Link to="/#contacto">Solicitar Cotización</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/empresa" className={`transition-colors font-light ${
                isActive("/empresa") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Empresa
              </Link>
              <Link to="/#servicios" className={`transition-colors font-light ${
                isActive("servicios") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Servicios
              </Link>
              <Link to="/#metodologia" className={`transition-colors font-light ${
                isActive("/#metodologia") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Metodología
              </Link>
              <Link to="/#beneficios" className={`transition-colors font-light ${
                isActive("/#beneficios") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Beneficios
              </Link>
              <Link to="/#contacto" className={`transition-colors font-light ${
                isActive("/#contacto") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
              <Button asChild className="bg-[#003249] hover:bg-[#003249]/90 text-white w-full">
                <Link to="/#contacto" onClick={() => setIsMenuOpen(false)}>Solicitar Cotización</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;