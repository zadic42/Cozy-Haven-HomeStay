import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import SectionHeading from '../components/SectionHeading';
import { rooms } from '../data/rooms';

const RoomsPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Header */}
      <section className="bg-dark text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Our Accommodations" subtitle="A Sanctuary of Comfort" light={true} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-light px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomsPage;
