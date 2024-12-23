import React from 'react';
import GlowingText from './GlowingText';

const Hero = () => {
  return (
    <div id="hero" className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Students studying"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/90 rounded-xl p-8 backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              50% Paid Scholarships
            </h1>
            <div className="mt-6">
              <button className="bg-[#1e3a8a] px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-900 transition-colors">
                <GlowingText text="Grab the Opportunity to study in India!! With 50% Paid Scholarships" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;