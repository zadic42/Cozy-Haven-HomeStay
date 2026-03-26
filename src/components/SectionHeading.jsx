import React from 'react';

const SectionHeading = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <span className={`block text-sm uppercase tracking-[0.2em] mb-4 font-semibold ${light ? 'text-accent' : 'text-accent'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      <div className="flex justify-center items-center">
        <div className={`h-px w-12 ${light ? 'bg-white/30' : 'bg-gray-300'}`}></div>
        <div className={`h-2 w-2 rounded-full mx-3 ${light ? 'bg-accent' : 'bg-accent'}`}></div>
        <div className={`h-px w-12 ${light ? 'bg-white/30' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  );
};

export default SectionHeading;
