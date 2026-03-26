import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Activities', path: '/activities' },
    { name: 'Places', path: '/places' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen 
          ? 'glass-effect text-dark py-4' 
          : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className={`font-serif text-2xl font-bold tracking-widest ${isScrolled || isOpen ? 'text-dark' : 'text-white'}`}>
              Cozy Haven
            </span>
            <span className="text-accent ml-2 text-sm uppercase tracking-widest mt-1">HomeStay</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm uppercase tracking-wider font-medium hover:text-accent transition duration-300 ${
                  location.pathname === link.path ? 'text-accent' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/rooms"
              className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition duration-300 uppercase text-sm tracking-wider font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 text-base font-medium uppercase tracking-wider ${
                  location.pathname === link.path ? 'text-accent bg-gray-50' : 'text-dark hover:text-accent hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/rooms"
              className="block mt-4 text-center px-4 py-3 bg-accent text-white uppercase tracking-wider text-sm font-bold"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
