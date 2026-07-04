import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import HomePage from '../website/pages/HomePage';
import InfraEdgePage from '../website/pages/InfraEdgePage';
import SportsPage from '../website/pages/SportsPage';
import ConsultationPage from '../website/pages/ConsultationPage';
import CaseStudyPage from '../website/pages/CaseStudyPage';
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
