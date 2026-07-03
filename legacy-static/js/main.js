/* ==========================================================================
   MagicMond — interactions: reveal-on-scroll, nav, USP ticker, case carousel
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Reveal on scroll (.reveal, .reveal-scale, .words)
     --------------------------------------------------------------------- */
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

  // Wrap each word of .words headings so lines rise in one by one
  document.querySelectorAll(".words").forEach((el) => {
    el.querySelectorAll(".w-src").forEach((chunk, i) => {
      const wrapper = document.createElement("span");
      wrapper.className = "w";
      const inner = document.createElement("span");
      inner.style.setProperty("--d", i * 0.08 + "s");
      inner.innerHTML = chunk.innerHTML;
      wrapper.appendChild(inner);
      chunk.replaceWith(wrapper);
    });
  });

  document
    .querySelectorAll(".reveal, .reveal-scale, .words")
    .forEach((el) => io.observe(el));

  /* ---------------------------------------------------------------------
     Mobile nav
     --------------------------------------------------------------------- */
  // Smooth-scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  if (toggle) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---------------------------------------------------------------------
     USP vertical ticker — center item highlighted, auto-advances
     --------------------------------------------------------------------- */
  const ticker = document.querySelector(".usp__ticker");
  if (ticker) {
    const list = ticker.querySelector(".usp__list");
    const baseItems = [...list.children];
    // Triple the list so it can loop seamlessly
    for (let r = 0; r < 2; r++) {
      baseItems.forEach((li) => list.appendChild(li.cloneNode(true)));
    }
    const items = [...list.children];
    const n = baseItems.length;
    let idx = n; // start in the middle copy

    const step = () => {
      const itemH = items[0].offsetHeight + 10; // row height + gap
      const center = ticker.offsetHeight / 2 - itemH / 2;
      items.forEach((li, i) => li.classList.toggle("active", i === idx));
      list.style.transform = `translateY(${center - idx * itemH}px)`;
    };

    step();
    setInterval(() => {
      idx += 1;
      step();
      if (idx >= n * 2) {
        // jump back to the equivalent item in the middle copy, no animation
        setTimeout(() => {
          list.style.transition = "none";
          idx -= n;
          step();
          void list.offsetHeight; // reflow
          list.style.transition = "";
        }, 720);
      }
    }, 2000);
    window.addEventListener("resize", step);
  }

  /* ---------------------------------------------------------------------
     Case studies carousel — arrows, dots, swipe, autoplay
     --------------------------------------------------------------------- */
  const cases = document.querySelector(".cases");
  if (cases) {
    const track = cases.querySelector(".cases__track");
    const slides = [...track.children];
    const dots = [...cases.querySelectorAll(".cases__dot")];
    let cur = 0;
    let timer;

    const go = (i) => {
      cur = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${cur * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle("active", j === cur));
    };
    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => go(cur + 1), 5000);
    };

    cases.querySelector(".cases__nav--prev").addEventListener("click", () => { go(cur - 1); restart(); });
    cases.querySelector(".cases__nav--next").addEventListener("click", () => { go(cur + 1); restart(); });
    dots.forEach((d, j) => d.addEventListener("click", () => { go(j); restart(); }));

    // touch swipe
    let x0 = null;
    track.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    track.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) { go(cur + (dx < 0 ? 1 : -1)); restart(); }
      x0 = null;
    }, { passive: true });

    go(0);
    restart();
  }
})();
