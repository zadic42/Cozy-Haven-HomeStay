import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppBtn from '../components/WhatsAppBtn';
import { rooms } from '../data/rooms';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RoomDetailsPage = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  if (!room) {
    return <div className="min-h-screen flex items-center justify-center pt-24">Room not found</div>;
  }

  return (
    <div className="font-sans">
      <Navbar />

      <section className="pt-32 pb-12 bg-dark px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/rooms" className="text-gray-400 hover:text-white flex items-center transition mb-8 uppercase text-sm tracking-widest">
            <ArrowLeft size={16} className="mr-2" /> Back to Rooms
          </Link>
        </div>
      </section>

      <section className="py-12 bg-light px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Info */}
          <div className="lg:w-2/3">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="mb-10 lg:h-[500px] h-[300px]"
            >
              {room.gallery.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`${room.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-dark">{room.name}</h1>
            <p className="text-2xl font-serif text-accent mb-8">${room.price} <span className="text-sm font-sans text-gray-500">/ night</span></p>

            <div className="bg-white luxury-shadow p-8 mb-10">
              <h3 className="text-xl font-serif mb-4 text-dark border-b pb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{room.description}</p>
            </div>

            <div className="bg-white luxury-shadow p-8">
              <h3 className="text-xl font-serif mb-4 text-dark border-b pb-2">Room Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle2 size={18} className="text-accent mr-3" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white luxury-shadow p-8 sticky top-32">
              <h3 className="text-2xl font-serif mb-6 text-center border-b pb-4">Book Your Stay</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Check In</label>
                  <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full border border-gray-300 p-3 outline-none focus:border-accent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Check Out</label>
                  <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full border border-gray-300 p-3 outline-none focus:border-accent" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Guests</label>
                  <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full border border-gray-300 p-3 outline-none focus:border-accent bg-transparent">
                    {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
              </div>

              <WhatsAppBtn 
                roomName={room.name}
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
              />
              <p className="text-xs text-center text-gray-400 mt-4">You will be redirected to WhatsApp to confirm your booking.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomDetailsPage;
