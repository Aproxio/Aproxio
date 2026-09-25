import React from 'react';
import ImpactSection from '../components/ImpactSection/ImpactSection';

const ImpactPage: React.FC = () => {
  return (
    <main className="w-full pt-16 bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <ImpactSection />
      </div>
    </main>
  );
};

export default ImpactPage;
