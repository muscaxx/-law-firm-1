const team = [
  {
    name: "Av. Mehmet Şenoğlu",
    title: "Kurucu Ortak",
    expertise: "Ticaret Hukuku, Şirketler Hukuku, Tahkim",
    monogram: "MŞ",
    photoClass: "",
  },
  {
    name: "Av. Elif Arslan",
    title: "Ortak",
    expertise: "Ceza Hukuku, İdare Hukuku",
    monogram: "EA",
    photoClass: " team-card-photo--ea",
  },
  {
    name: "Av. Burak Şahin",
    title: "Ortak",
    expertise: "İş Hukuku, Sosyal Güvenlik Hukuku",
    monogram: "BS",
    photoClass: " team-card-photo--bs",
  },
  {
    name: "Av. Selin Yüksel",
    title: "Kıdemli Avukat",
    expertise: "Aile Hukuku, Gayrimenkul Hukuku",
    monogram: "SY",
    photoClass: " team-card-photo--sy",
  },
];

export default function Team() {
  return (
    <section className="section team-section" id="ekibimiz" aria-label="Ekibimiz">
      <div className="container">
        <div className="section-header section-header--center reveal">
          <p className="section-eyebrow">EKİBİMİZ</p>
          <h2 className="section-title">
            Alanında Uzman,
            <br />
            Deneyimli Avukatlar
          </h2>
          <p className="section-intro">
            Büromuzun her avukatı, kendi uzmanlık alanında derinlemesine deneyime sahiptir.
            Müvekkillerimiz, davalarını en yetkin ellere teslim ettiklerini bilir.
          </p>
        </div>

        <div className="team-grid">
          {team.map((m) => (
            <article
              className="team-card reveal"
              aria-label={`${m.name} - ${m.title}`}
              key={m.name}
            >
              <div className={`team-card-photo${m.photoClass}`} aria-hidden="true">
                <span className="team-monogram">{m.monogram}</span>
              </div>
              <div className="team-card-info">
                <h3 className="team-card-name">{m.name}</h3>
                <p className="team-card-title">{m.title}</p>
                <p className="team-card-expertise">{m.expertise}</p>
                <a
                  href="https://linkedin.com/company/senoglu-hukuk"
                  className="team-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} LinkedIn profili`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
