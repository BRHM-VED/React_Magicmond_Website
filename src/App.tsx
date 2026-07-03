import { Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import InfraEdge from './pages/InfraEdge';
import Sports from './pages/Sports';
import Consultation from './pages/Consultation';
import CaseStudy from './pages/CaseStudy';
import { caseStudies } from './data/caseStudiesData';

export default function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      {/* Pages wrapped in ScrollManager and PageTransition via MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/infraedge" element={<InfraEdge />} />
        <Route path="/sports" element={<Sports />} />
        {caseStudies.map((cs) => (
          <Route key={cs.slug} path={`/${cs.slug}`} element={<CaseStudy study={cs} />} />
        ))}
        {/* Fallback catches */}
        <Route path="*" element={<Home />} />
      </Route>
      {/* Consultation has a custom nav/footer and handles its own layout flow */}
      <Route path="/0-1-consultation" element={<Consultation />} />
    </Routes>
  );
}
