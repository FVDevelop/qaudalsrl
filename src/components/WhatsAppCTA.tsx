import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  const phoneNumber = "541160941504";
  const message = "Hola, me interesa conocer más sobre los servicios de Innosphere.";
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="whatsapp-cta"
      aria-label="Contactanos por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      Contáctanos ahora
    </button>
  );
};

export default WhatsAppCTA;