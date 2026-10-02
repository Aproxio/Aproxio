import React from 'react';
import Hero from '../components/Hero/Hero';
import FounderNote from '../components/FounderNote/FounderNote';
import Businesses from '../components/Businesses/Businesses';

const HomePage: React.FC = () => {
  return (
    <main className="w-full bg-canvas min-h-screen">
      <Hero />

      <div className="page-frame">
        <Businesses />
        <FounderNote />
      </div>
    </main>
  );
};

export default HomePage;
