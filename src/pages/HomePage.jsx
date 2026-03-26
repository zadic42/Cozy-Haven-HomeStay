import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import SectionHeading from '../components/SectionHeading';
import ActivityCard from '../components/ActivityCard';
import PlaceCard from '../components/PlaceCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

import { rooms } from '../data/rooms';
import { activities } from '../data/activities';
import { places } from '../data/places';
import { testimonials } from '../data/testimonials';

const slides = [
  {
    image: "/assets/hero.png",
    subtitle: "Welcome to Paradise",
    title: "Experience Ultimate Luxury"
  },
  {
    image: "/assets/room.png",
    subtitle: "Escape the Ordinary",
    title: "A Haven of Tranquility"
  },
  {
    image: "/assets/beach.png",
    subtitle: "Discover Nature",
    title: "Where Ocean Meets Soul"
  }
];

const HomePage = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  const handleQuickBook = (e) => {
    e.preventDefault();
    const message = `Hi, I am looking to book a stay from ${checkIn} to ${checkOut} for ${guests} guests. Please share availability.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Swiper
          modules={[EffectFade, Autoplay, Navigation]}
          effect="fade"
          speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation
          loop
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <motion.span 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                    className="text-white tracking-[0.4em] uppercase text-sm md:text-md mb-6 font-semibold"
                  >
                    {slide.subtitle}
                  </motion.span>
                  <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                  >
                    <Button variant="outline" onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}>
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating Booking Form */}
        <div id="booking-form" className="absolute bottom-0 left-0 w-full transform translate-y-1/2 z-20 hidden md:block px-4">
          <div className="max-w-6xl mx-auto bg-white luxury-shadow p-6 flex items-center">
            <form className="w-full flex justify-between items-center gap-4" onSubmit={handleQuickBook}>
              <div className="flex-1">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Check In</label>
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required className="w-full border-b border-gray-300 focus:border-accent outline-none py-2 text-dark font-medium" />
              </div>
              <div className="flex-1">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Check Out</label>
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required className="w-full border-b border-gray-300 focus:border-accent outline-none py-2 text-dark font-medium" />
              </div>
              <div className="flex-1">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Guests</label>
                <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full border-b border-gray-300 focus:border-accent outline-none py-2 text-dark font-medium bg-transparent">
                  {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <div className="flex-none pt-6">
                <Button type="submit" variant="primary">Check Availability</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 md:py-32 bg-light px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Signature Rooms" subtitle="Luxury Accommodation" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* About/Experience */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-16">
            <span className="text-accent uppercase tracking-widest text-sm mb-4 block font-semibold">The Cozy Haven Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Elevate Your Senses in Absolute Harmony.</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              At Cozy Haven, we believe in the art of hospitality. Nestled between the roaring ocean and verdant mountains, our sanctuary is designed for those who seek the extraordinary. From personalized butler services to curated culinary journeys, every detail is orchestrated to create unforgettable memories.
            </p>
            <Button variant="outline">Discover Our Story</Button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img src="/assets/spa.png" alt="Spa and Wellness" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 border-2 border-accent z-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Curated Activities" subtitle="Adventure awaits" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-light px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Guest Experiences" subtitle="What They Say" />
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="pb-12"
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
