import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import qaudalLogo from "@/assets/qaudal-logo-transp.png";
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
                src={qaudalLogo} 
                alt="Qaudal Logo"
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
            
            <Link to="/servicios" className={`transition-colors font-light ${
              location.pathname === "/servicios" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Servicios
            </Link>
            
            <Link to="/como-trabajamos" className={`transition-colors font-light ${
              location.pathname === "/como-trabajamos" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Cómo Trabajamos
            </Link>
            
            <Link to="/#beneficios" className={`transition-colors font-light ${
              isActive("/#beneficios") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              ¿Por qué Elegirnos?
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
              <Link to="/servicios" className={`transition-colors font-light ${
                location.pathname === "/servicios" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Servicios
              </Link>
              <Link to="/como-trabajamos" className={`transition-colors font-light ${
                location.pathname === "/como-trabajamos" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Cómo Trabajamos
              </Link>
              <Link to="/#beneficios" className={`transition-colors font-light ${
                isActive("/#beneficios") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                ¿Por qué Elegirnos?
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