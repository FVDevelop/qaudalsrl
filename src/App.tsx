import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Empresa from "./pages/Empresa";
import Servicios from "./pages/Servicios";
import ComoTrabajamos from "./pages/ComoTrabajamos";
import PorQueQaudal from "./pages/PorQueQaudal";
import Sectores from "./pages/Sectores";
import Noticias from "./pages/Noticias";
import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/quienes-somos" element={<Empresa />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
          <Route path="/por-que-qaudal" element={<PorQueQaudal />} />
          <Route path="/sectores" element={<Sectores />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/faqs" element={<Faqs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
