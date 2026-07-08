import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to top on route change, or to the anchor when the URL has a hash. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout ensures the DOM has fully rendered and settled
      const timer = setTimeout(() => {
        const el = document.querySelector(hash) as HTMLElement;
        if (el) {
          const topOffset = window.innerWidth >= 768 ? 120 : 110;
          const originalPosition = el.style.position;
          el.style.position = 'relative';
          const rect = el.getBoundingClientRect();
          el.style.position = originalPosition;

          const offset = rect.top + window.scrollY - topOffset;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
