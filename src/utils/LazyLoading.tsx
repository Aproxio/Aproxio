import React, { Suspense, ComponentType } from 'react';

const FallbackLoader: React.FC = () => (
  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-canvas">
    <div className="relative flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-hairline border-t-primary rounded-full animate-spin"></div>
      <div className="absolute w-2 h-2 bg-primary rounded-full"></div>
    </div>
    <span className="font-label-sm text-[11px] tracking-widest uppercase text-text-tertiary mt-4">
      Loading dispatch...
    </span>
  </div>
);

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <Suspense fallback={<FallbackLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
