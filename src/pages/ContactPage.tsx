import React from 'react';
import ContactSection from '../components/ContactSection/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <main className="w-full pt-16 bg-canvas min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <ContactSection />
      </div>
    </main>
  );
};

export default ContactPage;
