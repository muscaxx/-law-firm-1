import type { ReactNode } from "react";

type Practice = { title: string; text: string; icon: ReactNode };

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const practices: Practice[] = [
  {
    title: "Ticaret ve Şirketler Hukuku",
    text: "Şirket kuruluşu, birleşme ve devralma süreçleri, ticari sözleşmeler ve kurumsal yönetişim konularında müvekkillerimize stratejik hukuki destek sağlıyoruz. Ortaklık anlaşmazlıklarından uluslararası ticaret işlemlerine kadar geniş bir alanda danışmanlık sunuyoruz.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Ceza Hukuku",
    text: "Soruşturma aşamasından yargılama sürecine kadar sanıkların haklarını etkin biçimde savunuyor; ekonomik suçlar, dolandırıcılık, zimmet ve görevi kötüye kullanma davalarında uzman temsil hizmeti veriyoruz.",
    icon: (
      <svg {...iconProps}>
        <line x1="12" y1="3" x2="12" y2="21"></line>
        <path d="M3 6l9-3 9 3"></path>
        <path d="M3 6l4.5 9a4.5 4.5 0 0 0 9 0L21 6"></path>
        <line x1="3" y1="21" x2="21" y2="21"></line>
      </svg>
    ),
  },
  {
    title: "İş ve Sosyal Güvenlik Hukuku",
    text: "İşçi-işveren uyuşmazlıkları, iş sözleşmelerinin hazırlanması, haksız fesih, kıdem ve ihbar tazminatı davaları ile toplu iş hukuku alanlarında hem işverenler hem çalışanlar adına hizmet sunuyoruz.",
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Aile ve Miras Hukuku",
    text: "Boşanma, velayet, nafaka ve mal paylaşımı davalarının yanı sıra miras planlaması, vasiyetname hazırlanması ve miras uyuşmazlıklarının çözümünde müvekkillerimizi temsil ediyoruz.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    title: "Gayrimenkul ve İnşaat Hukuku",
    text: "Tapu devri, kat mülkiyeti, kira uyuşmazlıkları, inşaat sözleşmeleri ve kentsel dönüşüm süreçlerinde hukuki danışmanlık ve dava takibi hizmeti sunuyoruz.",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <line x1="9" y1="7" x2="15" y2="7"></line>
        <line x1="9" y1="12" x2="15" y2="12"></line>
        <line x1="9" y1="17" x2="13" y2="17"></line>
      </svg>
    ),
  },
  {
    title: "İcra ve İflas Hukuku",
    text: "Alacak tahsili, ilamlı ve ilamsız icra takipleri, haciz işlemleri ile iflas ve konkordato süreçlerinde hızlı ve etkin çözümler üretiyoruz.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      className="section practice-section"
      id="uzmanlik-alanlari"
      aria-label="Uzmanlık Alanları"
    >
      <div className="container">
        <div className="section-header section-header--center reveal">
          <p className="section-eyebrow">UZMANLIK ALANLARIMIZ</p>
          <h2 className="section-title">
            Hukuki İhtiyaçlarınıza
            <br />
            Kapsamlı Yanıtlar
          </h2>
          <p className="section-intro">
            Büromuz, kurumsal yapılardan bireysel davalara uzanan geniş bir yelpazede
            uzmanlaşmış avukatlarıyla hizmet vermektedir.
          </p>
        </div>

        <div className="practice-grid">
          {practices.map((p) => (
            <article className="practice-card reveal" aria-label={p.title} key={p.title}>
              <div className="practice-card-icon" aria-hidden="true">
                {p.icon}
              </div>
              <h3 className="practice-card-title">{p.title}</h3>
              <p className="practice-card-text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
