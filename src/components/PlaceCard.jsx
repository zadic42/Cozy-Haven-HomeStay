import React from 'react';
import { MapPin } from 'lucide-react';

const PlaceCard = ({ place }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white luxury-shadow overflow-hidden group">
      <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
        <img 
          src={place.image} 
          alt={place.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
        <div className="flex items-center text-accent text-sm font-semibold tracking-wider uppercase mb-3">
          <MapPin size={16} className="mr-2" />
          {place.distance} Away
        </div>
        <h3 className="text-3xl font-serif mb-4 text-dark">{place.title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {place.description}
        </p>
      </div>
    </div>
  );
};

export default PlaceCard;
