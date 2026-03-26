import React from 'react';
import { Phone, MessageCircle, MoreHorizontal } from 'lucide-react';

const FloatingContact = () => {
  const phoneNumber = "8891359456";
  const whatsappNumber = "918891359456";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end group">
      {/* Hidden Buttons (Shown on Group Hover) */}
      <div className="flex flex-col gap-3 mb-3 opacity-0 translate-y-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="bg-white text-[#166534] p-4 rounded-full shadow-2xl hover:bg-[#166534] hover:text-white transition-all duration-300"
          title="Call Us"
        >
          <Phone size={24} />
        </a>
        
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#25D366] p-4 rounded-full shadow-2xl hover:bg-[#25D366] hover:text-white transition-all duration-300"
          title="WhatsApp Us"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Main Floating Button (3 Dots) */}
      <button className="bg-accent text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
        <MoreHorizontal size={30} />
      </button>
    </div>
  );
};

export default FloatingContact;
