import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import ActivityCard from '../components/ActivityCard';
import { activities } from '../data/activities';

const ActivitiesPage = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <section className="bg-dark text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Activities & Leisure" subtitle="Adventure Or Relaxation" light={true} />
        </div>
      </section>

      <section className="py-24 bg-light px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ActivitiesPage;
