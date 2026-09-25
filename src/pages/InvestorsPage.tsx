import React from 'react';
import InvestorsSection from '../components/InvestorsSection/InvestorsSection';

const InvestorsPage: React.FC = () => {
  return (
    <main className="w-full bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <InvestorsSection />
      </div>
    </main>
  );
};

export default InvestorsPage;
