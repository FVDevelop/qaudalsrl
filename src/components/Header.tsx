import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Twitter, Instagram, MessageCircle } from "lucide-react";
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent font-light text-foreground/80 hover:text-primary">
                    Empresa
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/empresa"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Quienes Somos</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Conoce nuestra empresa y trayectoria
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/como-trabajamos"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Como Trabajamos</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Nuestra metodología integral
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/por-que-qaudal"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Por que Elegirnos</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Ventajas de trabajar con nosotros
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/servicios" className={`transition-colors font-light ${
              location.pathname === "/servicios" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Servicios
            </Link>
            
            <Link to="/sectores" className={`transition-colors font-light ${
              location.pathname === "/sectores" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Sectores
            </Link>
            
            <Link to="/noticias" className={`transition-colors font-light ${
              location.pathname === "/noticias" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Noticias
            </Link>
            
            <Link to="/faqs" className={`transition-colors font-light ${
              location.pathname === "/faqs" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              FAQ's
            </Link>
            
            <Link to="/#contacto" className={`transition-colors font-light ${
              isActive("/#contacto") ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
            }`}>
              Contacto
            </Link>
          </nav>

          {/* Social Media Icons - Separated */}
          <div className="hidden md:flex items-center space-x-3 ml-4">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <MessageCircle size={18} />
            </a>
            
            <Button asChild className="bg-[#003249] hover:bg-[#003249]/90 text-white ml-4">
              <Link to="/#contacto">Solicitar Cotización</Link>
            </Button>
          </div>

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
                Quienes Somos
              </Link>
              <Link to="/como-trabajamos" className={`transition-colors font-light ${
                location.pathname === "/como-trabajamos" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Como Trabajamos
              </Link>
              <Link to="/por-que-qaudal" className={`transition-colors font-light ${
                location.pathname === "/por-que-qaudal" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Por que Elegirnos
              </Link>
              <Link to="/servicios" className={`transition-colors font-light ${
                location.pathname === "/servicios" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Servicios
              </Link>
              <Link to="/sectores" className={`transition-colors font-light ${
                location.pathname === "/sectores" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Sectores
              </Link>
              <Link to="/noticias" className={`transition-colors font-light ${
                location.pathname === "/noticias" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                Noticias
              </Link>
              <Link to="/faqs" className={`transition-colors font-light ${
                location.pathname === "/faqs" ? "text-[#003249]" : "text-foreground/80 hover:text-primary"
              }`} onClick={() => setIsMenuOpen(false)}>
                FAQ's
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