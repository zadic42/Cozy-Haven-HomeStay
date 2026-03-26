import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-light p-10 mt-8 relative border-t-2 border-accent">
      <div className="flex mb-6 text-accent">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="font-serif text-xl italic leading-relaxed text-gray-700 mb-8 break-words">
        "{testimonial.text}"
      </p>
      <div className="flex justify-between items-end">
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm text-dark">{testimonial.name}</h4>
          <span className="text-sm text-gray-500">{testimonial.location}</span>
        </div>
        <span className="text-sm text-gray-400">{testimonial.date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
