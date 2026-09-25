import React from 'react';
import CultureSection from '../components/CultureSection/CultureSection';

const CulturePage: React.FC = () => {
  return (
    <main className="w-full pt-16 bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <CultureSection />
      </div>
    </main>
  );
};

export default CulturePage;
