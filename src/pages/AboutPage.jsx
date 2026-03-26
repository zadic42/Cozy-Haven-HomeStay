import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

const AboutPage = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <section className="bg-dark text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="About Cozy Haven Homestay" subtitle="Our Story" light={true} />
        </div>
      </section>

      <section className="py-24 bg-light px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-dark leading-tight">A Legacy of Luxury <br />& Unmatched Comfort</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2010, Cozy Haven Homestay was born from a vision to create a sanctuary where untouched natural beauty meets refined luxury. Nestled exclusively between pristine beaches and emerald mountains, it stands as a testament to world-class hospitality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What sets us apart is not just our stunning architecture or our opulent suites, but our unwavering commitment to providing tailored experiences. Whether you're seeking a serene hideaway or an adventurous expedition, our dedicated staff ensures absolute perfection.
              </p>
            </div>
            <div>
              <img src="/assets/hero.png" alt="Resort staff" className="w-full h-auto luxury-shadow" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-dark mb-4">Why Choose Us</h2>
            <div className="h-1 w-16 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <img src="/assets/dining.png" alt="Dining" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 luxury-shadow" />
              <h3 className="text-2xl font-serif text-dark mb-4">Exquisite Dining</h3>
              <p className="text-gray-600">Savor delicacies prepared by our Michelin-star chefs using fresh, locally sourced ingredients.</p>
            </div>
            <div>
              <img src="/assets/spa.png" alt="Spa" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 luxury-shadow" />
              <h3 className="text-2xl font-serif text-dark mb-4">Wellness & Spa</h3>
              <p className="text-gray-600">Rejuvenate your body and mind with our holistic treatments blending ancient and modern techniques.</p>
            </div>
            <div>
              <img src="/assets/room.png" alt="Rooms" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 luxury-shadow" />
              <h3 className="text-2xl font-serif text-dark mb-4">Lavish Suites</h3>
              <p className="text-gray-600">Every room is masterfully designed to offer panoramic views and unparalleled comfort.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
