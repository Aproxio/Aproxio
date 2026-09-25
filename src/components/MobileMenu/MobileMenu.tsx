import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  isActive: (path: string) => boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems, isActive }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-canvas">
      {/* Drawer Header */}
      <div className="h-16 px-margin-mobile border-b border-hairline-subtle flex items-center justify-between">
        <span className="font-title text-title font-medium text-text-primary tracking-tight">Menu</span>
        <button 
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-text-primary hover:bg-surface-container rounded-full transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Drawer Links */}
      <div className="flex-1 flex flex-col px-margin-mobile py-8 space-y-6 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`text-2xl font-headline-md tracking-tight transition-colors py-2 border-b border-hairline ${
                active 
                  ? 'text-text-primary font-semibold underline underline-offset-8' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Drawer Footer */}
      <div className="p-margin-mobile border-t border-hairline-subtle bg-surface-muted">
        <p className="font-label-sm text-label-sm uppercase tracking-wider text-text-tertiary">
          Aproxio Institutional Group
        </p>
        <p className="text-xs text-text-secondary mt-1">
          Gurugram • Bengaluru • New Delhi
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
