import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import HomePage from '../website/pages/HomePage';
import InfraEdgePage from '../website/pages/InfraEdgePage';
import SportsPage from '../website/pages/SportsPage';
import ConsultationPage from '../website/pages/ConsultationPage';
import CaseStudyPage from '../website/pages/CaseStudyPage';
import NewCaseStudyPage from '../website/pages/NewCaseStudyPage';
import { caseStudies } from '../data/case-studies.data';
import { onsiteCaseStudy, onsiteStripImages } from '../data/case-studies/onsiteData';
import { shriYamunaCaseStudy, shriYamunaStripImages } from '../data/case-studies/shri-yamuna.data';
import { astrovedanshCaseStudy, astrovedanshStripImages } from '../data/case-studies/astrovedansh.data';
import { shoemonkiesCaseStudy, shoemonkiesStripImages } from '../data/case-studies/shoemonkies.data';

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
      // New reusable case study pages
      {
        path: `/${onsiteCaseStudy.slug}`,
        element: <NewCaseStudyPage study={onsiteCaseStudy} stripImages={onsiteStripImages} />,
      },
      {
        path: `/${shriYamunaCaseStudy.slug}`,
        element: <NewCaseStudyPage study={shriYamunaCaseStudy} stripImages={shriYamunaStripImages} />,
      },
      {
        path: `/${astrovedanshCaseStudy.slug}`,
        element: <NewCaseStudyPage study={astrovedanshCaseStudy} stripImages={astrovedanshStripImages} />,
      },
      {
        path: `/${shoemonkiesCaseStudy.slug}`,
        element: <NewCaseStudyPage study={shoemonkiesCaseStudy} stripImages={shoemonkiesStripImages} />,
      },
      // Legacy case study pages
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

