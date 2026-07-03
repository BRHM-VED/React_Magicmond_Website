import { useCallback, useEffect, useRef, useState } from "react";

/** Carousel controller: current index, prev/next/goto, autoplay and swipe. */
export function useCarousel(count: number, autoplayMs = 5000) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();
  const touchX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), autoplayMs);
  }, [count, autoplayMs]);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  const next = useCallback(() => { goTo(index + 1); restart(); }, [goTo, index, restart]);
  const prev = useCallback(() => { goTo(index - 1); restart(); }, [goTo, index, restart]);
  const select = useCallback((i: number) => { goTo(i); restart(); }, [goTo, restart]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  }, []);
  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
      touchX.current = null;
    },
    [next, prev]
  );

  return { index, next, prev, select, onTouchStart, onTouchEnd };
}
