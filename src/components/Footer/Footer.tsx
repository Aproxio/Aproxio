import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import aproxioLogo from '../../images/aproxio-logo.png';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToBusinesses = (e: React.MouseEvent) => {
    e.preventDefault();
    const scrollToSection = () => {
      const target =
        document.getElementById('projects') || document.getElementById('businesses');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    if (location.pathname === '/' || location.pathname === '/home') {
      scrollToSection();
      return;
    }

    navigate('/#projects');
  };

  return (
    <footer className="w-full bg-surface-muted border-t border-hairline mt-16 lg:mt-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10 lg:pt-16 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link to="/" className="inline-block select-none">
              <img
                src={aproxioLogo}
                alt="aproxio"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm font-body-md text-[14px] text-text-secondary leading-relaxed">
              Building products that endure — under one home called Aproxio.
            </p>
            {/* <p className="mt-4 font-mono text-[11px] tracking-wider uppercase text-text-tertiary">
              Gurugram · Bengaluru · New Delhi
            </p> */}
          </div>

          {/* Businesses */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-[13px] font-semibold text-text-primary mb-4 tracking-wide uppercase">
              Businesses
            </h3>
            <ul className="space-y-3 text-[15px] text-text-secondary">
              <li>
                <a
                  href="/#projects"
                  onClick={goToBusinesses}
                  className="hover:text-text-primary transition-colors capitalize cursor-pointer"
                >
                  Aproxio
                </a>
              </li>
            </ul>
          </div>

          {/* Company — live routes only */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-[13px] font-semibold text-text-primary mb-4 tracking-wide uppercase">
              Company
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
                <Link to="/impact" className="hover:text-text-primary transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-[13px] font-semibold text-text-primary mb-4 tracking-wide uppercase">
              Connect
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

        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-text-tertiary">
          <span>© 2026 Aproxio Ltd.</span>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-text-primary transition-colors">
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:text-text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
