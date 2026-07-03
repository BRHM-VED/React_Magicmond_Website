import { useEffect, useRef, useState } from "react";

/**
 * Vertical ticker controller (USP section): items are tripled for a
 * seamless loop; the centered item is highlighted and the list advances
 * every `intervalMs`.
 */
export function useTicker(itemCount: number, intervalMs = 2000) {
  const [index, setIndex] = useState(itemCount); // start in the middle copy
  const [animated, setAnimated] = useState(true);
  const viewportRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  // jump back to the middle copy without animation once past the last copy
  useEffect(() => {
    if (index >= itemCount * 2) {
      const t = setTimeout(() => {
        setAnimated(false);
        setIndex((i) => i - itemCount);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      }, 720);
      return () => clearTimeout(t);
    }
  }, [index, itemCount]);

  useEffect(() => {
    const compute = () => {
      const viewport = viewportRef.current;
      const list = listRef.current;
      if (!viewport || !list || !list.children.length) return;
      const item = list.children[0] as HTMLElement;
      const itemH = item.offsetHeight + 10; // row + gap
      const center = viewport.offsetHeight / 2 - item.offsetHeight / 2;
      setOffset(center - index * itemH);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [index]);

  return { index, animated, offset, viewportRef, listRef };
}
