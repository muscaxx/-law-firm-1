const stats = [
  { number: "1998", label: "Kuruluş Yılı" },
  { number: "500+", label: "Tamamlanan Dava" },
  { number: "8", label: "Uzman Avukat" },
  { number: "200+", label: "Aktif Müvekkil" },
];

export default function About() {
  return (
    <section className="section about-section" id="hakkimizda" aria-label="Hakkımızda">
      <div className="container about-container">
        <div className="about-text reveal">
          <p className="section-eyebrow">HAKKIMIZDA</p>
          <h2 className="section-title">
            İstanbul&apos;un Köklü
            <br />
            Hukuk Bürosu
          </h2>
          <p className="about-lead">
            Şenoğlu Hukuk Bürosu, 1998 yılında Av. Mehmet Şenoğlu tarafından İstanbul&apos;da
            kurulmuştur. Kuruluşundan bu yana büromuz; ticaret hukuku, şirketler hukuku, iş
            hukuku ve ceza hukuku başta olmak üzere geniş bir uzmanlık yelpazesinde hizmet
            vermektedir.
          </p>
          <p className="about-body">
            Müvekkillerimizin hukuki süreçlerini yalnızca bir davadan ibaret olarak değil, uzun
            vadeli çıkarlarının korunması gereken bir bütün olarak ele alıyoruz. Dürüstlük,
            şeffaflık ve mesleki yetkinlik, büromuzun kurulduğu günden bu yana tavizsiz biçimde
            koruduğu temel değerlerdir.
          </p>
          <a href="#ekibimiz" className="about-link">
            Büromuzu daha yakından tanıyın
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="about-stats reveal">
          {stats.map((s) => (
            <div className="about-stat-card" key={s.label}>
              <span className="about-stat-number">{s.number}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
