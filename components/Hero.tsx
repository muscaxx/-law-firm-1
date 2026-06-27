export default function Hero() {
  return (
    <section className="hero" aria-label="Ana başlık">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="section-eyebrow hero-eyebrow">İSTANBUL BAROSU | EST. 1998</p>
          <h1 className="hero-title">
            Hukuki Süreçlerinizde
            <br />
            Güvenilir Çözüm Ortağınız
          </h1>
          <p className="hero-description">
            Şenoğlu Hukuk Bürosu, 25 yılı aşkın deneyimiyle kurumsal ve bireysel
            müvekkillerine ticaret, iş, ceza, aile ve gayrimenkul hukuku alanlarında
            kapsamlı hukuki danışmanlık hizmeti sunmaktadır.
          </p>
          <div className="hero-buttons">
            <a href="#iletisim" className="btn btn-accent">
              Randevu Alın
            </a>
            <a href="#uzmanlik-alanlari" className="btn btn-outline-white">
              Uzmanlık Alanlarımız
            </a>
          </div>
        </div>

        <div className="hero-stats" aria-label="Büro istatistikleri">
          <div className="hero-stat">
            <span className="hero-stat-number" data-target="500" data-suffix="+">
              0
            </span>
            <span className="hero-stat-label">Tamamlanan Dava</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number" data-target="25" data-suffix="+">
              0
            </span>
            <span className="hero-stat-label">Yıllık Deneyim</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number" data-target="8" data-suffix="">
              0
            </span>
            <span className="hero-stat-label">Uzman Avukat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
