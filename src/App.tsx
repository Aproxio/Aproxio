import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loadable from './utils/LazyLoading';

const HomePage = Loadable(lazy(() => import('./pages/HomePage')));
const CulturePage = Loadable(lazy(() => import('./pages/CulturePage')));
const CareersPage = Loadable(lazy(() => import('./pages/CareersPage')));
const InvestorsPage = Loadable(lazy(() => import('./pages/InvestorsPage')));
const ImpactPage = Loadable(lazy(() => import('./pages/ImpactPage')));
const ContactPage = Loadable(lazy(() => import('./pages/ContactPage')));
const NotFoundPage = Loadable(lazy(() => import('./pages/NotFoundPage')));

const App: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'home', element: <HomePage /> },
        { path: 'culture', element: <CulturePage /> },
        { path: 'careers', element: <CareersPage /> },
        { path: 'investors', element: <InvestorsPage /> },
        { path: 'impact', element: <ImpactPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: '404', element: <NotFoundPage /> },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};

export default App;
