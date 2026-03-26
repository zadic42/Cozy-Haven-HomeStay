import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import PlaceCard from '../components/PlaceCard';
import { places } from '../data/places';

const PlacesPage = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <section className="bg-dark text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Explore The Area" subtitle="Nearby Attractions" light={true} />
        </div>
      </section>

      <section className="py-24 bg-light px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-5xl mx-auto space-y-12">
          {places.map(place => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlacesPage;
