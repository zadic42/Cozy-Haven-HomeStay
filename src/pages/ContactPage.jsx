import React from 'react';
import { MapPin, Phone, Mail, Camera, Hash, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. Our team will contact you shortly.');
  };

  return (
    <div className="font-sans">
      <Navbar />

      <section className="bg-dark text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Contact Us" subtitle="Get In Touch" light={true} />
        </div>
      </section>

      <section className="py-24 bg-light px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info Sidebar */}
            <div>
              <h3 className="text-3xl font-serif text-dark mb-8">Reach Out to Us</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Whether you’re planning a bespoke event, looking to book your next getaway, or simply have a few questions, our concierge team is available 24/7 to assist you.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full luxury-shadow mr-4">
                    <MapPin className="text-brandGreen" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-serif text-lg">Location</h4>
                    <p className="text-gray-600 mt-1">Kakkavayal, Wayanad</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full luxury-shadow mr-4">
                    <Phone className="text-brandGreen" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-serif text-lg">Phone</h4>
                    <p className="text-gray-600 mt-1">8891359456<br />04936-292577</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full luxury-shadow mr-4">
                    <Mail className="text-brandGreen" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-serif text-lg">Email</h4>
                    <p className="text-gray-600 mt-1">cozy.homestay24@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-dark font-serif text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4 text-accent">
                  <a href="#" className="bg-white p-3 rounded-full luxury-shadow hover:-translate-y-1 transition duration-300"><Camera size={20} /></a>
                  <a href="#" className="bg-white p-3 rounded-full luxury-shadow hover:-translate-y-1 transition duration-300"><Hash size={20} /></a>
                  <a href="#" className="bg-white p-3 rounded-full luxury-shadow hover:-translate-y-1 transition duration-300"><Users size={20} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white luxury-shadow p-10">
              <h3 className="text-2xl font-serif text-dark mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input type="text" required className="w-full border-b border-gray-300 py-2 focus:border-accent outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input type="text" required className="w-full border-b border-gray-300 py-2 focus:border-accent outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" required className="w-full border-b border-gray-300 py-2 focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                  <input type="text" required className="w-full border-b border-gray-300 py-2 focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea rows="4" required className="w-full border-b border-gray-300 py-2 focus:border-accent outline-none resize-none"></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full mt-4">Send Message</Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed (Placeholder Image for this static version) */}
      <section className="h-96 w-full bg-gray-200">
        <img
          src="/assets/beach.png"
          alt="Map Location"
          className="w-full h-full object-cover grayscale opacity-70"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
