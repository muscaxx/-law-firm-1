const articles = [
  {
    category: "Ticaret Hukuku",
    date: "18 Haziran 2026",
    datetime: "2026-06-18",
    title:
      "6102 Sayılı TTK Kapsamında Anonim Şirketlerde Pay Devri: Güncel Yargıtay Kararları Işığında Değerlendirme",
    excerpt:
      "Yargıtay'ın son dönem kararları, anonim şirketlerde nama yazılı payların devri sürecinde uygulanması gereken usul kurallarını yeniden tartışmaya açmıştır. Bu yazıda güncel içtihat doğrultusunda dikkat edilmesi gereken başlıca noktaları ele alıyoruz.",
  },
  {
    category: "İş Hukuku",
    date: "4 Haziran 2026",
    datetime: "2026-06-04",
    title:
      "Uzaktan Çalışma Düzenlemelerinde İşverenin Yükümlülükleri: 2025 Yönetmelik Değişiklikleri",
    excerpt:
      "Uzaktan çalışmayı düzenleyen yönetmelikte yapılan son değişiklikler, işverenlerin yükümlülüklerini ve çalışanların haklarını somut biçimde etkilemektedir. Hangi düzenlemeler geçerli, hangi riskler öne çıkıyor?",
  },
  {
    category: "Gayrimenkul Hukuku",
    date: "27 Mayıs 2026",
    datetime: "2026-05-27",
    title:
      "Kentsel Dönüşümde Kat Maliklerinin Hakları: Riskli Alan Kararına İtiraz Süreçleri",
    excerpt:
      "Riskli alan ya da riskli yapı kararına muhatap kalan kat malikleri, hangi hukuki yollara başvurabilir? İdari itiraz, yürütmeyi durdurma ve tazminat talebi süreçleri ayrıntılı biçimde inceleniyor.",
  },
];

export default function Articles() {
  return (
    <section
      className="section articles-section"
      id="makaleler"
      aria-label="Makaleler ve Hukuki Görüşler"
    >
      <div className="container">
        <div className="articles-header reveal">
          <div className="articles-header-left">
            <p className="section-eyebrow">MAKALELER &amp; HUKUKİ GÖRÜŞLER</p>
            <h2 className="section-title">
              Güncel Hukuki
              <br />
              Değerlendirmeler
            </h2>
          </div>
          <a href="#makaleler" className="articles-all-link">
            Tüm Makaleler
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="articles-grid">
          {articles.map((a) => (
            <article className="article-card reveal" aria-label={`Makale: ${a.title}`} key={a.title}>
              <div className="article-card-meta">
                <span className="article-category">{a.category}</span>
                <time className="article-date" dateTime={a.datetime}>
                  {a.date}
                </time>
              </div>
              <h3 className="article-card-title">{a.title}</h3>
              <p className="article-card-excerpt">{a.excerpt}</p>
              <a href="#makaleler" className="article-read-more">
                Devamını Oku
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
