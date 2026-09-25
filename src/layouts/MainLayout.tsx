import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Scrollbar from '../components/Scrollbar/Scrollbar';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (scrollToHash()) return;

      const timer = window.setTimeout(() => {
        scrollToHash();
      }, 120);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname, hash]);

  return null;
};

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-text-primary selection:bg-text-primary selection:text-canvas">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1 w-full pt-20">
        <Outlet />
      </div>
      <Footer />
      <Scrollbar />
    </div>
  );
};

export default MainLayout;
