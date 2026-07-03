import { useEffect, useState, type ReactNode } from 'react';

/**
 * Smooth route-change transition.
 *
 * The router remounts this component on every navigation (it is keyed by
 * `location.pathname` in AppRoutes). React state drives the animation:
 * the page mounts hidden, then — after the browser has painted the first
 * frame — `ready` flips to true and the page fades/rises in via a CSS
 * transition. Respects the user's reduced-motion preference.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // double rAF: guarantees the hidden state is painted first,
    // so the transition always runs (no flash, no skipped frames)
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, []);

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div
      style={
        reduceMotion
          ? undefined
          : {
              opacity: ready ? 1 : 0,
              transform: ready ? 'none' : 'translateY(12px)',
              transition:
                'opacity .45s ease, transform .55s cubic-bezier(.21, .47, .32, .98)',
              willChange: ready ? 'auto' : 'opacity, transform',
            }
      }
    >
      {children}
    </div>
  );
}
export default PageTransition;
