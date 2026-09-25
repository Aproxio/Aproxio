import React from 'react';
import InvestorsSection from '../components/InvestorsSection/InvestorsSection';

const InvestorsPage: React.FC = () => {
  return (
    <main className="w-full pt-16 bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <InvestorsSection />
      </div>
    </main>
  );
};

export default InvestorsPage;
