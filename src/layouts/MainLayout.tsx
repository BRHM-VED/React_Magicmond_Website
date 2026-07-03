import { Outlet, useLocation } from 'react-router-dom';
import ScrollManager from '../hooks/ScrollManager';
import { PageTransition } from '../components/common/PageTransition';

export function MainLayout() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <PageTransition key={location.pathname}>
        <Outlet />
      </PageTransition>
    </>
  );
}
export default MainLayout;
