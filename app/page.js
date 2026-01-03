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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-float opacity-70"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-float-reverse opacity-70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 tracking-wide border border-blue-100 animate-slideDown shadow-sm">
            💻 PROFESYONEL YAZILIM ÇÖZÜMLERİ
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-8 tracking-tight animate-slideDown" style={{ animationDelay: '0.1s' }}>
            Fikirlerinizi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Yazılıma Dönüştürüyoruz
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-slideDown" style={{ animationDelay: '0.2s' }}>
            algorynth olarak, mobil, web ve masaüstü platformlarda modern, ölçeklenebilir ve özel yazılım çözümleri sunuyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slideDown" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/apps"
              className="group relative px-8 py-4 bg-blue-600 !text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center min-w-[200px]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>Projelerimiz</span>
              </span>
            </Link>

            <Link
              href="/team"
              className="group px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg shadow-sm hover:shadow-md hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
            >
              <span className="text-2xl">👥</span>
              <span>Ekibimizi Tanıyın</span>
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
