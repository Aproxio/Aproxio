import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import aproxioLogo from '../../images/aproxio-logo.png';
import { NavItem } from '../../types';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Culture', path: '/culture' },
    { label: 'Careers', path: '/careers' },
    // { label: 'Investors', path: '/investors' },
    { label: 'Impact', path: '/impact' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-canvas/90 backdrop-blur-md border-b border-hairline transition-all">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          
          {/* Aproxio Logo */}
          <Link to="/" className="flex items-center select-none group">
            <img 
              src={aproxioLogo} 
              alt="aproxio" 
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-102" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 text-[15px] transition-colors ${
                    active
                      ? 'text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary font-normal'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3b82f6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              aria-label="Toggle Menu" 
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center text-text-primary p-2 hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navItems={navItems}
        isActive={isActive}
      />
    </>
  );
};

export default Navbar;
