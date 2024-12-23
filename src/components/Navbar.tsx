import React from 'react';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <MapPin className="h-6 w-6 text-[#1e3a8a]" />
            <span className="ml-2 text-xl font-semibold text-[#1e3a8a]">Markaz Consultancy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2">About</button>
            <button onClick={() => scrollToSection('scholarships')} className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2">Scholarships</button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2">Packages</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2">Testimonials</button>
            <button onClick={() => scrollToSection('contact-page')} className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2">Contact</button>
            <button 
              onClick={() => scrollToSection('contact-page')} 
              className="bg-[#1e3a8a] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;