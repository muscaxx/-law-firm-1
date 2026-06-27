import type { ReactNode } from "react";

const ic = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Bireysel Yaklaşım",
    text: "Her davayı ve müvekkili, kendine özgü koşullarıyla değerlendiriyoruz.",
    icon: (
      <svg {...ic}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    title: "Gizlilik Taahhüdü",
    text: "Müvekkil-avukat sırrı ve kişisel verilerin korunması önceliğimizdir.",
    icon: (
      <svg {...ic}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    title: "Zamanında Bilgilendirme",
    text: "Sürecinizin her adımından sizi haberdar tutuyoruz.",
    icon: (
      <svg {...ic}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    title: "İspatlı Deneyim",
    text: "25 yıl ve 500'ü aşkın tamamlanan dava ile güvenilir bir geçmiş.",
    icon: (
      <svg {...ic}>
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="section why-section" aria-label="Neden Şenoğlu Hukuk Bürosu">
      <div className="container why-container">
        <div className="why-text reveal">
          <p className="section-eyebrow section-eyebrow--gold">NEDEN ŞENOĞLU HUKUK BÜROSU</p>
          <h2 className="section-title section-title--white">
            Hukuki Süreçleriniz
            <br />
            Emin Ellerde
          </h2>
          <p className="why-description">
            Her müvekkil, farklı bir hukuki sürecin içinde kendine has bir pozisyondadır. Biz bunu
            biliyoruz. Dosyanızı standart bir şablona değil, sizin koşullarınıza göre ele alıyoruz.
            İstanbul Barosu&apos;na kayıtlı uzman avukatlarımız, her aşamada yanınızda.
          </p>
          <blockquote className="why-quote">
            &quot;Güven, uzun soluklu müvekkil ilişkilerinin tek gerçek temelidir.&quot;
            <cite>— Av. Mehmet Şenoğlu, Kurucu Ortak</cite>
          </blockquote>
        </div>

        <div className="why-features">
          {features.map((f) => (
            <div className="why-feature reveal" key={f.title}>
              <div className="why-feature-icon" aria-hidden="true">
                {f.icon}
              </div>
              <div className="why-feature-content">
                <h3 className="why-feature-title">{f.title}</h3>
                <p className="why-feature-text">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
