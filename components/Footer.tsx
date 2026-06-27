const pages = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#uzmanlik-alanlari", label: "Uzmanlık Alanları" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#makaleler", label: "Makaleler" },
  { href: "#iletisim", label: "İletişim" },
  { href: "#", label: "Kariyer" },
];

const areas = [
  "Ticaret Hukuku",
  "Ceza Hukuku",
  "İş Hukuku",
  "Aile Hukuku",
  "Gayrimenkul Hukuku",
  "İcra & İflas",
];

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-col footer-col--brand">
          <a href="#" className="footer-logo" aria-label="Şenoğlu Hukuk Bürosu - Ana Sayfa">
            <span className="footer-logo-name">ŞENOĞLU</span>
            <span className="footer-logo-sub">Hukuk Bürosu</span>
          </a>
          <p className="footer-desc">
            1998&apos;den bu yana İstanbul&apos;da hukuki mükemmellik anlayışıyla hizmet vermektedir.
          </p>
          <p className="footer-baro">İstanbul Barosu Sicil No: 12345</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">SAYFALAR</h4>
          <nav aria-label="Footer sayfalar navigasyonu">
            <ul className="footer-links">
              {pages.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="footer-link">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">UZMANLIK ALANLARI</h4>
          <nav aria-label="Footer uzmanlık alanları navigasyonu">
            <ul className="footer-links">
              {areas.map((a) => (
                <li key={a}>
                  <a href="#uzmanlik-alanlari" className="footer-link">
                    {a}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-heading">İLETİŞİM</h4>
          <address className="footer-address">
            <p className="footer-contact-line">
              Büyükdere Cad. No: 127, Kat: 8<br />
              Esentepe, Şişli / İstanbul
            </p>
            <p className="footer-contact-line">
              <a href="tel:+902125554200" className="footer-link">
                +90 (212) 555 42 00
              </a>
            </p>
            <p className="footer-contact-line">
              <a href="mailto:info@senoglu-hukuk.com.tr" className="footer-link">
                info@senoglu-hukuk.com.tr
              </a>
            </p>
          </address>
          <div className="footer-social" aria-label="Sosyal medya bağlantıları">
            <a
              href="https://linkedin.com/company/senoglu-hukuk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4l16 16M4 20L20 4"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            © 2026 Şenoğlu Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
          <nav className="footer-legal" aria-label="Yasal bağlantılar">
            <a href="#" className="footer-legal-link">
              Gizlilik Politikası
            </a>
            <span className="footer-legal-sep" aria-hidden="true">
              |
            </span>
            <a href="#" className="footer-legal-link">
              Kullanım Koşulları
            </a>
            <span className="footer-legal-sep" aria-hidden="true">
              |
            </span>
            <a href="#" className="footer-legal-link">
              KVKK
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
