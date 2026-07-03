import { useEffect } from "react";

/**
 * Scroll-reveal controller. Wraps each `.w-src` chunk of `.words` headings
 * for the word-rise animation and marks `.reveal` / `.reveal-scale` /
 * `.words` elements with `.in` when they enter the viewport — same behavior
 * (and CSS classes) as the original site.
 */
export function useReveal() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".words").forEach((el) => {
      el.querySelectorAll<HTMLElement>(".w-src").forEach((chunk, i) => {
        const wrapper = document.createElement("span");
        wrapper.className = "w";
        const inner = document.createElement("span");
        inner.style.setProperty("--d", `${i * 0.08}s`);
        inner.innerHTML = chunk.innerHTML;
        wrapper.appendChild(inner);
        chunk.replaceWith(wrapper);
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-scale, .words").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
