import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import InfraEdgePage from '../pages/InfraEdgePage';
import SportsPage from '../pages/SportsPage';
import ConsultationPage from '../pages/ConsultationPage';
import CaseStudyPage from '../pages/CaseStudyPage';
import { caseStudies } from '../data/case-studies.data';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/infraedge',
        element: <InfraEdgePage />,
      },
      {
        path: '/sports',
        element: <SportsPage />,
      },
      ...caseStudies.map((cs) => ({
        path: `/${cs.slug}`,
        element: <CaseStudyPage study={cs} />,
      })),
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
  {
    path: '/0-1-consultation',
    element: <ConsultationPage />,
  },
]);
