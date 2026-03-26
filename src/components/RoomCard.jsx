import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Wind, Coffee, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

// Helper to map string to icon component
const getIcon = (iconName) => {
  switch(iconName) {
    case 'wifi': return <Wifi size={16} />;
    case 'wind': return <Wind size={16} />;
    case 'coffee': return <Coffee size={16} />;
    case 'droplet': return <Droplet size={16} />;
    default: return null;
  }
};

const RoomCard = ({ room }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white luxury-shadow overflow-hidden group"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2">
          <span className="font-serif text-lg font-bold">${room.price}</span>
          <span className="text-sm text-gray-500"> / night</span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-serif mb-3 hover:text-accent transition">{room.name}</h3>
        
        {/* Short Features */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 border-b border-gray-100 pb-6">
          {room.amenities && room.amenities.slice(0, 3).map((amenity, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-accent mr-2">{getIcon(amenity.icon)}</span>
              {amenity.name}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link 
            to={`/rooms/${room.id}`}
            className="text-sm uppercase tracking-wider font-semibold text-dark hover:text-accent transition flex items-center"
          >
            Explore <ArrowRight size={16} className="ml-2" />
          </Link>
          
          <Link 
            to={`/rooms/${room.id}`}
            className="px-6 py-2 bg-dark text-white text-sm uppercase tracking-wider hover:bg-accent transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
