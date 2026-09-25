import React from 'react';
import { Link } from 'react-router-dom';
import aproxioLogo from '../../images/aproxio-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-muted border-t border-hairline mt-space-3xl">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        
        {/* Main Grid matching the exact screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Logo Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block select-none group">
              <img 
                src={aproxioLogo} 
                alt="aproxio" 
                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-102" 
              />
            </Link>
          </div>

          {/* Upcoming projects Column */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-medium text-text-primary mb-4 tracking-tight">
              Upcoming projects
            </h3>
            <ul className="space-y-3 text-[15px] text-text-secondary">
              <li>
                <a href="#projects" className="hover:text-text-primary transition-colors">
                  Aproxio Fleet
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-text-primary transition-colors">
                  Aproxio Core
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-text-primary transition-colors">
                  CleanGrid Microgrids
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-text-primary transition-colors">
                  Horizon Retail OS
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-text-primary transition-colors">
                  Vault Automated Hubs
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-medium text-text-primary mb-4 tracking-tight">
              About
            </h3>
            <ul className="space-y-3 text-[15px] text-text-secondary">
              <li>
                <Link to="/culture" className="hover:text-text-primary transition-colors">
                  Culture
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/investors" className="hover:text-text-primary transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-text-primary transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <span className="hover:text-text-primary transition-colors cursor-pointer">
                  Blog
                </span>
              </li>
              <li>
                <span className="hover:text-text-primary transition-colors cursor-pointer">
                  Brand resources
                </span>
              </li>
            </ul>
          </div>

          {/* Get in touch Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-medium text-text-primary mb-4 tracking-tight">
              Get in touch
            </h3>
            <ul className="space-y-3 text-[15px] text-text-secondary">
              <li>
                <Link to="/contact" className="hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="mt-20 pt-8 border-t border-hairline flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-text-tertiary">
          <span>© 2026 Aproxio Ltd.</span>
          <Link to="#" className="hover:text-text-primary transition-colors">
            Privacy policy
          </Link>
          <Link to="#" className="hover:text-text-primary transition-colors">
            Terms
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
