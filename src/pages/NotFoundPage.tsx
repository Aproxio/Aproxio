import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <main className="w-full bg-canvas min-h-[calc(100dvh-5rem)] flex items-center justify-center">
      <div className="max-w-[600px] mx-auto px-6 text-center py-16 sm:py-24">
        <span className="font-display text-7xl font-bold text-text-primary tracking-tighter">404</span>
        <h1 className="font-headline-md text-3xl font-medium text-text-primary mt-4 mb-2">
          Dispatch Not Found
        </h1>
        <p className="font-body-md text-text-secondary mb-8">
          The requested operating route does not exist or has been relocated within the group ecosystem.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-canvas font-label-md text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
        >
          Return to Core <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
