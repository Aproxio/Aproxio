import React from 'react';
import InvestorsSection from '../components/InvestorsSection/InvestorsSection';

const InvestorsPage: React.FC = () => {
  return (
    <main className="w-full bg-canvas min-h-screen">
      <div className="page-frame">
        <InvestorsSection />
      </div>
    </main>
  );
};

export default InvestorsPage;
