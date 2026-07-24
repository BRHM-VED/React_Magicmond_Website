import { useEffect, useState } from "react";

/** True when viewport is at least `minWidth` (default: Tailwind `md`, 768px). */
export function useIsDesktop(minWidth = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [minWidth]);

  return isDesktop;
}
export default useIsDesktop;
