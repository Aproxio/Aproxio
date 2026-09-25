import React from 'react';
import { Link } from 'react-router-dom';

const FounderNote: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-t border-hairline">
      <div className="grid   gap-12 items-center">
        
        {/* Founder Portrait & Caption */}
        {/* <div className="lg:col-span-5 flex flex-col group cursor-pointer">
          <div className="aspect-[4/5] bg-surface-container overflow-hidden border border-hairline group-hover:border-text-primary transition-colors relative shadow-sm">
            <img 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-108 transition-all duration-700 ease-out" 
              alt="Founder & Group CEO" 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
          </div>
          <div className="pt-4 flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-text-tertiary">Founder & Group CEO</span>
            <span className="font-body-md text-sm text-text-secondary">Office of the CEO</span>
          </div>
        </div> */}

        {/* Letter Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block pb-2">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-tertiary">Founder's Dispatch</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary font-medium tracking-tight mt-2">
              "We run on uncomfortable truth and relentless execution."
            </h2>
            <div className="w-12 h-[3px] bg-primary mt-3"></div>
          </div>

          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
            Aproxio was created because we realized that the next century of enterprise cannot be built through bureaucratic hierarchy. It requires sovereign operating units that behave with the speed of an insurgent and the financial discipline of an enduring institution.
          </p>

          <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            When you remove the comfort of corporate consensus, you force intellectual honesty. Every line of code, every warehouse design, every delivery routing decision is a direct consequence of clear personal responsibility.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <Link 
              to="/culture" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-canvas font-label-md text-label-md uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Read Institutional Ethos <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link 
              to="/investors" 
              className="font-label-md text-label-md text-text-primary underline underline-offset-4 hover:text-text-secondary transition-colors"
            >
              View Shareholder Letters
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderNote;
