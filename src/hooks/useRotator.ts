import { useEffect, useState } from "react";

/** Cycles through a word list on an interval (consultation hero). */
export function useRotator(words: string[], intervalMs = 2200) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);
  return words[index];
}
