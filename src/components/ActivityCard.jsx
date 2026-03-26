import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivityCard = ({ activity }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group overflow-hidden h-[400px] cursor-pointer"
    >
      <img 
        src={activity.image} 
        alt={activity.title} 
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300"></div>

      <div className="absolute bottom-0 left-0 w-full p-8 text-white transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
        <h3 className="text-2xl font-serif mb-2">{activity.title}</h3>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" /> {activity.duration}
          </div>
          <div className="flex items-center">
            <TrendingUp size={14} className="mr-1" /> {activity.difficulty}
          </div>
        </div>

        <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
          {activity.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
