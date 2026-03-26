import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './Button';

const WhatsAppBtn = ({ roomName = '', checkIn = '', checkOut = '', guests = '', phoneNumber = '918891359456', className = '' }) => {
  const handleBooking = () => {
    let message = "Hi, I would like to inquire about booking a room.";
    if (roomName) {
      message = `Hi, I want to book ${roomName}`;
      if (checkIn && checkOut) message += ` from ${checkIn} to ${checkOut}`;
      if (guests) message += ` for ${guests} guests`;
      message += ".";
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button 
      variant="primary" 
      onClick={handleBooking} 
      className={`w-full ${className}`}
    >
      <MessageCircle size={18} className="mr-2" /> Book via WhatsApp
    </Button>
  );
};

export default WhatsAppBtn;
