import React, { useState, useEffect } from 'react';

const Scrollbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center hover:bg-neutral-800 transition-all transform hover:-translate-y-1 cursor-pointer"
    >
      <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
    </button>
  );
};

export default Scrollbar;
