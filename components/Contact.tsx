"use client";

import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"fullName" | "email" | "subject" | "message" | "kvkk", string>>;

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const clear = (key: keyof Errors) =>
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("full-name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const kvkk = data.get("kvkk") === "on";

    const next: Errors = {};
    if (!fullName) next.fullName = "Ad soyad alanı zorunludur.";
    if (!email) next.email = "E-posta alanı zorunludur.";
    else if (!isValidEmail(email)) next.email = "Geçerli bir e-posta adresi giriniz.";
    if (!subject) next.subject = "Lütfen bir konu seçiniz.";
    if (!message) next.message = "Mesaj alanı zorunludur.";
    if (!kvkk) next.kvkk = "Aydınlatma Metni'ni kabul etmeniz gerekmektedir.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(".has-error")?.focus();
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setSuccess(true);
    form.reset();
  }

  const inputClass = (key: keyof Errors) => `form-input${errors[key] ? " has-error" : ""}`;

  return (
    <section className="section contact-section" id="iletisim" aria-label="İletişim ve Randevu">
      <div className="container contact-container">
        <div className="contact-form-wrapper reveal">
          <p className="section-eyebrow">BİZE ULAŞIN</p>
          <h2 className="section-title">
            Randevu Alın veya
            <br />
            Bilgi İsteyin
          </h2>
          <p className="contact-intro">
            Hukuki durumunuzu değerlendirmek için büromuzla iletişime geçin. Her başvuru, ilgili
            alandaki uzman avukatımız tarafından incelenir ve 24 saat içinde geri dönüş sağlanır.
          </p>

          <form className="contact-form" noValidate aria-label="İletişim formu" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="full-name" className="form-label">
                Ad Soyad <span className="required" aria-label="zorunlu alan">*</span>
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className={inputClass("fullName")}
                placeholder="Adınız ve soyadınız"
                autoComplete="name"
                aria-required="true"
                onInput={() => clear("fullName")}
              />
              <span className="form-error" role="alert" aria-live="polite">
                {errors.fullName}
              </span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  E-posta <span className="required" aria-label="zorunlu alan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={inputClass("email")}
                  placeholder="ornek@email.com"
                  autoComplete="email"
                  aria-required="true"
                  onInput={() => clear("email")}
                />
                <span className="form-error" role="alert" aria-live="polite">
                  {errors.email}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="+90 (___) ___ __ __"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Hukuki Konu <span className="required" aria-label="zorunlu alan">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                className={`${inputClass("subject")} form-select`}
                aria-required="true"
                defaultValue=""
                onChange={() => clear("subject")}
              >
                <option value="">Konu seçiniz...</option>
                <option value="ticaret">Ticaret / Şirketler Hukuku</option>
                <option value="ceza">Ceza Hukuku</option>
                <option value="is">İş Hukuku</option>
                <option value="aile">Aile / Miras Hukuku</option>
                <option value="gayrimenkul">Gayrimenkul Hukuku</option>
                <option value="icra">İcra / İflas</option>
                <option value="diger">Diğer</option>
              </select>
              <span className="form-error" role="alert" aria-live="polite">
                {errors.subject}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mesajınız <span className="required" aria-label="zorunlu alan">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className={`${inputClass("message")} form-textarea`}
                placeholder="Hukuki durumunuzu kısaca açıklayınız..."
                rows={5}
                aria-required="true"
                onInput={() => clear("message")}
              ></textarea>
              <span className="form-error" role="alert" aria-live="polite">
                {errors.message}
              </span>
            </div>

            <div className="form-group form-checkbox-group">
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  id="kvkk"
                  name="kvkk"
                  className="form-checkbox"
                  aria-required="true"
                  onChange={() => clear("kvkk")}
                />
                <span className="form-checkbox-text">
                  Kişisel verilerimin işlenmesine ilişkin{" "}
                  <a href="#" className="kvkk-link">
                    Aydınlatma Metni
                  </a>
                  &apos;ni okudum ve kabul ediyorum.
                </span>
              </label>
              <span className="form-error" role="alert" aria-live="polite">
                {errors.kvkk}
              </span>
            </div>

            <button type="submit" className="btn btn-submit" disabled={submitting}>
              {submitting ? "Gönderiliyor..." : "Gönder"}
            </button>

            {success && (
              <div className="form-success" role="status" aria-live="polite">
                Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.
              </div>
            )}
          </form>
        </div>

        <div className="contact-info reveal">
          <div className="contact-info-item">
            <div className="contact-info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">Adres</p>
              <p className="contact-info-text">
                Büyükdere Caddesi No: 127, Kat: 8<br />
                Esentepe, Şişli / İstanbul 34394
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.42 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">Telefon</p>
              <p className="contact-info-text">
                <a href="tel:+902125554200" className="contact-info-link">
                  +90 (212) 555 42 00
                </a>
                <br />
                Pazartesi – Cuma, 09:00 – 18:00
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">E-posta</p>
              <p className="contact-info-text">
                <a href="mailto:info@senoglu-hukuk.com.tr" className="contact-info-link">
                  info@senoglu-hukuk.com.tr
                </a>
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">Çalışma Saatleri</p>
              <p className="contact-info-text">
                Pazartesi – Cuma: 09:00 – 18:00<br />
                Cumartesi: Randevuyla
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">LinkedIn</p>
              <p className="contact-info-text">
                <a
                  href="https://linkedin.com/company/senoglu-hukuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  linkedin.com/company/senoglu-hukuk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
