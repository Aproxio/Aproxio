import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Scrollbar from '../components/Scrollbar/Scrollbar';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

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
