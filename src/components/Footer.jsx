import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Camera, Hash, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Description */}
          <div>
            <div className="mb-6 flex items-baseline">
              <span className="font-serif text-3xl font-bold tracking-widest text-white">Cozy Haven</span>
              <span className="text-brandGreen ml-2 text-sm uppercase tracking-widest">HomeStay</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the pinnacle of luxury and tranquility. Your perfect escape awaits at Cozy Haven HomeStay, where every moment is crafted for perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition duration-300">
                <Users size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition duration-300">
                <Camera size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition duration-300">
                <Hash size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Rooms', 'Activities', 'Gallery', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-accent transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-brandGreen mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Kakkavayal, Wayanad</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-brandGreen mr-3 flex-shrink-0" />
                <span className="text-gray-400">8891359456, 04936-292577</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-brandGreen mr-3 flex-shrink-0" />
                <span className="text-gray-400">cozy.homestay24@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-transparent border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent text-white px-4 py-3 font-semibold uppercase tracking-wider hover:bg-white hover:text-dark transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Cozy Haven HomeStay. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-accent transition">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
