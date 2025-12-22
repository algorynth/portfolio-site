'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', message: '' });
  };

  const features = [
    { icon: '📱', title: 'Mobil Uygulamalar', desc: 'iOS ve Android için native ve cross-platform mobil uygulama geliştirme.' },
    { icon: '🌐', title: 'Web Uygulamaları', desc: 'Modern ve responsive web siteleri ve web uygulamaları geliştiriyoruz.' },
    { icon: '🖥️', title: 'Masaüstü Yazılımlar', desc: 'Windows, macOS ve Linux için masaüstü uygulamalar.' },
    { icon: '☁️', title: 'Backend & API', desc: 'Güvenli ve ölçeklenebilir backend sistemleri ve API geliştirme.' },
    { icon: '🔧', title: 'Özel Yazılım', desc: 'İşletmenize özel yazılım çözümleri ve entegrasyonlar.' },
    { icon: '🤝', title: 'Danışmanlık', desc: 'Yazılım projeleriniz için teknik danışmanlık ve rehberlik.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <p className="hero-subtitle fade-in-up">💻 Profesyonel Yazılım Çözümleri</p>
          <h1 className="fade-in-up delay-1">Fikirlerinizi<br />Yazılıma Dönüştürüyoruz</h1>
          <p className="hero-description fade-in-up delay-2">
            GMD Studios olarak, mobil, web ve masaüstü platformlarda ihtiyaçlarınıza özel yazılım çözümleri sunuyoruz. Her ölçekte projeye profesyonel yaklaşım.
          </p>
          <div className="hero-buttons fade-in-up delay-3">
            <Link href="/apps" className="btn btn-primary">
              <span>🚀</span> Projelerimiz
            </Link>
            <Link href="/team" className="btn btn-secondary">
              <span>👥</span> Ekibimizi Tanıyın
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="container">
          <div className="section-header">
            <h2>Hizmetlerimiz</h2>
            <p>Yazılım ihtiyaçlarınız için kapsamlı çözümler sunuyoruz</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="card feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured App Section */}
      <section id="featured-app" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Öne Çıkan Proje</h2>
            <p>Son projelerimizden birini keşfedin</p>
          </div>

          <div className="card app-card" style={{ maxWidth: '900px', margin: '0 auto', padding: 0, overflow: 'hidden' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
            }}>
              <img
                src="/gym_tracker_1.png"
                alt="Gym Tracker - Antrenman Takibi"
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', boxShadow: '0 8px 20px rgba(0,0,0,0.25)' }}
              />
              <img
                src="/gym_tracker_2.png"
                alt="Gym Tracker - İlerleme"
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', boxShadow: '0 8px 20px rgba(0,0,0,0.25)' }}
              />
              <img
                src="/gym_tracker_3.png"
                alt="Gym Tracker - Şablonlar"
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', boxShadow: '0 8px 20px rgba(0,0,0,0.25)' }}
              />
            </div>
            <div className="app-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="app-badge" style={{ background: 'var(--success)', color: 'white' }}>✓ Yayında</span>
                <span className="app-badge">Mobil Uygulama</span>
              </div>
              <h3 className="app-title">💪 Gym Tracker</h3>
              <p className="app-description">
                Fitness yolculuğunuzu profesyonelce takip edin. Antrenmanlarınızı planlayın, ilerlemenizi izleyin ve hedeflerinize ulaşın.
              </p>
              <ul className="app-features">
                <li>Detaylı antrenman takibi</li>
                <li>İlerleme grafikleri ve istatistikler</li>
                <li>Hazır antrenman şablonları</li>
                <li>Tamamen ücretsiz</li>
              </ul>
              <div className="app-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mobileappscoop.gymtracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>▶️</span> Google Play&apos;de İndir
                </a>
                <Link href="/apps" className="btn btn-secondary">Tüm Projeler</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h2>İletişime Geçin</h2>
            <p>Projeniz için teklif alın veya sorularınızı iletin</p>
          </div>

          <div className="contact-container card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Adınızı girin"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="E-posta adresinizi girin"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Projenizi veya ihtiyaçlarınızı açıklayın"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
