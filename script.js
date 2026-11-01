/* ============================================================
   Lilla Butik — page behaviour
   Progressive enhancement only: everything works without JS.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menüyü aç");
      nav.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      if (toggle.getAttribute("aria-expanded") === "true") {
        close();
        return;
      }
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Menüyü kapat");
      nav.classList.add("is-open");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) close();
    });
  }

  /* ---------- Header border on scroll ---------- */
  const header = document.querySelector(".site-header");

  if (header) {
    const sync = () => header.classList.toggle("is-scrolled", window.scrollY > 6);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  const revealables = document.querySelectorAll("[data-reveal]");

  if (revealables.length) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      revealables.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
      );

      revealables.forEach((el) => observer.observe(el));
    }
  }

  /* ---------- Highlight the section currently in view ---------- */
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((pair) => pair.section);

  if (sections.length) {
    let ticking = false;

    const sync = () => {
      ticking = false;
      const probe = window.scrollY + 140;
      let current = null;
      let bestTop = -Infinity;

      // Pick the section closest to the top of the viewport, by document
      // position rather than menu order — the menu and the page differ.
      sections.forEach((pair) => {
        const top = pair.section.getBoundingClientRect().top + window.scrollY;
        if (top <= probe && top > bestTop) {
          bestTop = top;
          current = pair;
        }
      });

      // Nothing reached yet (top of the page): clear the highlight.
      sections.forEach((pair) => {
        pair.link.classList.toggle("is-active", pair === current);
      });
    };

    const request = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
  }

  /* ---------- Footer year ---------- */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
