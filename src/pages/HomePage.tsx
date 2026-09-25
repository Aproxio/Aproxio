import React from 'react';
import Hero from '../components/Hero/Hero';
import Businesses from '../components/Businesses/Businesses';
import FounderNote from '../components/FounderNote/FounderNote';

const HomePage: React.FC = () => {
  return (
    <main className="w-full bg-canvas min-h-screen">
      <Hero />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <Businesses />
        <FounderNote />
      </div>
    </main>
  );
};

export default HomePage;
