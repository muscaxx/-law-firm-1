"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#uzmanlik-alanlari", label: "Uzmanlık Alanları" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#makaleler", label: "Makaleler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky scroll gölgesi
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü açıkken body scroll kilidi + Escape ile kapatma
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}`}
        id="site-header"
        role="banner"
      >
        <div className="container nav-container">
          <a href="#" className="logo" aria-label="Şenoğlu Hukuk Bürosu - Ana Sayfa">
            <span className="logo-name">ŞENOĞLU</span>
            <span className="logo-subtitle">Hukuk Bürosu</span>
          </a>

          <nav className="nav-links" aria-label="Ana navigasyon">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a href="#iletisim" className="btn btn-nav">
              Randevu Alın
            </a>
          </nav>

          <button
            className="hamburger"
            id="hamburger"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil navigasyon menüsü"
      >
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
        <nav className="mobile-menu-panel" aria-label="Mobil navigasyon">
          <button
            className="mobile-menu-close"
            aria-label="Menüyü kapat"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="mobile-logo">
            <span className="logo-name">ŞENOĞLU</span>
            <span className="logo-subtitle">Hukuk Bürosu</span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="btn btn-primary mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Randevu Alın
          </a>
        </nav>
      </div>
    </>
  );
}
