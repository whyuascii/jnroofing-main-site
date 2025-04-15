import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-verde-600">
            Dura Verde Roofing
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#services" className="font-medium hover:text-verde-600 transition-colors">
            Services
          </a>
          <a href="#about" className="font-medium hover:text-verde-600 transition-colors">
            About
          </a>
          <a href="#gallery" className="font-medium hover:text-verde-600 transition-colors">
            Gallery
          </a>
          <a href="#testimonials" className="font-medium hover:text-verde-600 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="font-medium hover:text-verde-600 transition-colors">
            Contact
          </a>
          <a href="tel:+14073000474" className="btn-primary flex items-center">
            <Phone className="w-4 h-4 mr-2" /> Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 hover:text-verde-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#gallery"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="tel:+14073000474"
              className="btn-primary flex items-center justify-center"
              onClick={toggleMenu}
            >
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
