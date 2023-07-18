import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white-400 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-black text-4xl font-bold mb-4">Welcome to Education.com</h1>
        <p className="text-black text-lg mb-8">Discover amazing adventures and places</p>
        <button className="bg-pink-400 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
