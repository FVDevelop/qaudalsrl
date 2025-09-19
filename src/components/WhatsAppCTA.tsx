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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Contactanos por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppCTA;