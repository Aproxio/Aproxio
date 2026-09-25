import React from 'react';
import CareersSection from '../components/CareersSection/CareersSection';

const CareersPage: React.FC = () => {
  return (
    <main className="w-full pt-16 bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <CareersSection />
      </div>
    </main>
  );
};

export default CareersPage;
