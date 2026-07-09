import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollManager from '../hooks/ScrollManager';
import PageTransition from '../common/PageTransition';
import { FormDialog, FormBottomSheet } from '../common/booking-form';
import { CALENDLY } from '../utils/constants/constants';

export function MainLayout() {
  const location = useLocation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (anchor && anchor.getAttribute('href') === CALENDLY) {
        e.preventDefault();
        setIsFormOpen(true);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <>
      <ScrollManager />
      <PageTransition key={location.pathname}>
        <Outlet />
      </PageTransition>

      {/* Booking Form Dialog for Desktop */}
      <FormDialog isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Booking Form Bottom Sheet for Mobile */}
      <FormBottomSheet isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
export default MainLayout;
