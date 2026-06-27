"use client";

import { useEffect } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ClientEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* --- Smooth scroll (header yüksekliği telafili) --- */
    const header = document.getElementById("site-header");
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const onAnchorClick = (e: MouseEvent) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = header?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchorClick));
    cleanups.push(() => anchors.forEach((a) => a.removeEventListener("click", onAnchorClick)));

    /* --- Scroll reveal --- */
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (prefersReducedMotion()) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else {
      const revealObs = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      reveals.forEach((el) => revealObs.observe(el));
      cleanups.push(() => revealObs.disconnect());
    }

    /* --- Hero istatistik sayacı --- */
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>(".hero-stat-number[data-target]")
    );
    const animate = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const suffix = el.getAttribute("data-suffix") || "";
      if (prefersReducedMotion()) {
        el.textContent = target + suffix;
        return;
      }
      const duration = 1500;
      const start = performance.now();
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(easeOut(progress) * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const counterObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObs.observe(el));
    cleanups.push(() => counterObs.disconnect());

    /* --- Aktif nav linki --- */
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link"));
    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: "-72px 0px 0px 0px" }
    );
    sections.forEach((s) => navObs.observe(s));
    cleanups.push(() => navObs.disconnect());

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
