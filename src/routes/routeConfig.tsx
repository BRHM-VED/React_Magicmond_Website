/**
 * Shared route definitions used by both the browser router (createBrowserRouter)
 * and the SSR static router (createStaticRouter) during prerendering.
 *
 * IMPORTANT: Keep this file free of any browser-only globals — it is imported
 * by the Node.js prerender script as well.
 */
import type { RouteObject } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import HomePage from '../website/pages/HomePage';
import InfraEdgePage from '../website/pages/InfraEdgePage';
import SportsPage from '../website/pages/SportsPage';
import ItServicesPage from '../website/pages/ItServicesPage';
import NewCaseStudyPage from '../website/pages/NewCaseStudyPage';
import ThankYouPage from '../website/pages/ThankYouPage';
import NotFoundPage from '../website/pages/NotFoundPage';
import { onsiteCaseStudy, onsiteStripImages } from '../data/case-studies/onsiteData';
import { shriYamunaCaseStudy, shriYamunaStripImages } from '../data/case-studies/shri-yamuna.data';
import { astrovedanshCaseStudy, astrovedanshStripImages } from '../data/case-studies/astrovedansh.data';
import { shoemonkiesCaseStudy, shoemonkiesStripImages } from '../data/case-studies/shoemonkies.data';
import { reidiusCaseStudy, reidiusStripImages } from '../data/case-studies/reidius.data';

export const routeConfig: RouteObject[] = [
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
      {
        path: '/it-services',
        element: <ItServicesPage />,
      },
      {
        path: '/thank-you',
        element: <ThankYouPage />,
      },
      // Reusable case study pages
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
      {
        path: `/${reidiusCaseStudy.slug}`,
        element: <NewCaseStudyPage study={reidiusCaseStudy} stripImages={reidiusStripImages} />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

/** All routes that should be prerendered at build time. */
export const prerenderRoutes: string[] = [
  '/',
  '/infraedge',
  '/sports',
  '/it-services',
  '/thank-you',
  `/${onsiteCaseStudy.slug}`,
  `/${shriYamunaCaseStudy.slug}`,
  `/${astrovedanshCaseStudy.slug}`,
  `/${shoemonkiesCaseStudy.slug}`,
  `/${reidiusCaseStudy.slug}`,
];
