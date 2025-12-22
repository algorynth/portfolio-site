import Link from 'next/link';

export const metadata = {
    title: 'Projeler | GMD Studios',
    description: 'GMD Studios tarafından geliştirilen yazılım projeleri. Mobil uygulamalar, web projeleri ve daha fazlası.',
};

export default function AppsPage() {
    const gymTrackerFeatures = [
        { icon: '📊', title: 'Detaylı Takip', desc: 'Set, tekrar, ağırlık takibi' },
        { icon: '🔥', title: 'Kalori Hesaplama', desc: 'Günlük kalori ve makro' },
        { icon: '📈', title: 'İlerleme Grafiği', desc: 'Görsel ilerleme takibi' },
        { icon: '📋', title: 'Hazır Şablonlar', desc: 'Push, Pull, Leg programları' },
    ];

    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1 className="fade-in-up">Projelerimiz</h1>
                    <p className="fade-in-up delay-1">
                        Farklı platformlarda geliştirdiğimiz yazılım çözümleri
                    </p>
                </div>
            </header>

            <section id="gym-tracker">
                <div className="container">
                    <div className="section-header">
                        <h2>Mobil Uygulamalar</h2>
                        <p>iOS ve Android için geliştirdiğimiz uygulamalar</p>
                    </div>

                    <div className="app-grid">
                        <div className="card app-card" style={{ gridColumn: '1 / -1', maxWidth: '1100px', margin: '0 auto', padding: 0 }}>
                            {/* App Screenshots Gallery */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '1rem',
                                padding: '2rem',
                                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                                borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
                            }}>
                                <img
                                    src="/gym_tracker_1.png"
                                    alt="Gym Tracker - Antrenman Takibi"
                                    style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                                />
                                <img
                                    src="/gym_tracker_2.png"
                                    alt="Gym Tracker - İlerleme Grafikleri"
                                    style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                                />
                                <img
                                    src="/gym_tracker_3.png"
                                    alt="Gym Tracker - Antrenman Şablonları"
                                    style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                                />
                            </div>

                            <div className="app-content">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <span className="app-badge" style={{ background: 'var(--success)', color: 'white' }}>✓ Yayında</span>
                                    <span className="app-badge">Mobil Uygulama</span>
                                    <span className="app-badge" style={{ background: 'var(--primary-light)' }}>Android</span>
                                </div>
                                <h3 className="app-title" style={{ fontSize: '2rem' }}>💪 Gym Tracker</h3>
                                <p className="app-description" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    Fitness yolculuğunuzu profesyonelce takip edin! Gym Tracker, antrenmanlarınızı planlamanıza,
                                    ilerlemenizi takip etmenize ve hedeflerinize ulaşmanıza yardımcı olan kapsamlı bir fitness uygulamasıdır.
                                    Spor salonunda veya evde, her antrenmanınızı kaydedin ve gelişiminizi görsel olarak takip edin.
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
                                    {gymTrackerFeatures.map((feature, index) => (
                                        <div className="card" key={index} style={{ padding: '1.25rem', textAlign: 'center', background: 'var(--bg-primary)' }}>
                                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{feature.title}</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem' }}>
                                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>🎯 Temel Özellikler</h4>
                                    <ul className="app-features" style={{ columns: 2, columnGap: '2rem' }}>
                                        <li>Özelleştirilebilir antrenman programları</li>
                                        <li>250+ egzersiz kütüphanesi</li>
                                        <li>Kilo ve vücut ölçüsü takibi</li>
                                        <li>Detaylı ilerleme grafikleri</li>
                                        <li>Push/Pull/Leg hazır şablonları</li>
                                        <li>Offline çalışma desteği</li>
                                        <li>Koyu ve açık tema seçenekleri</li>
                                        <li>Tamamen ücretsiz, reklamsız</li>
                                    </ul>
                                </div>

                                <div className="app-links" style={{ gap: '1rem' }}>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.mobileappscoop.gymtracker"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
                                    >
                                        <span>▶️</span> Google Play&apos;de İndir
                                    </a>
                                    <a href="#" className="btn btn-secondary" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                                        <span>🍎</span> App Store (Yakında)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Yakında Gelecekler</h2>
                        <p>Üzerinde çalıştığımız yeni projeler</p>
                    </div>

                    <div className="app-grid">
                        <div className="card app-card" style={{ opacity: 0.7, padding: 0 }}>
                            <div className="app-image">🍎</div>
                            <div className="app-content">
                                <span className="app-badge">Geliştiriliyor</span>
                                <h3 className="app-title">Nutrition Buddy</h3>
                                <p className="app-description">
                                    Beslenme takibi ve sağlıklı yemek tarifleri. Besin değerlerini takip edin ve sağlıklı yaşam hedeflerinize ulaşın.
                                </p>
                            </div>
                        </div>

                        <div className="card app-card" style={{ opacity: 0.7, padding: 0 }}>
                            <div className="app-image">🧘</div>
                            <div className="app-content">
                                <span className="app-badge">Planlanıyor</span>
                                <h3 className="app-title">Mindful Minutes</h3>
                                <p className="app-description">
                                    Meditasyon ve mental sağlık uygulaması. Günlük stres yönetimi ve zihinsel sağlığınız için rehberiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
