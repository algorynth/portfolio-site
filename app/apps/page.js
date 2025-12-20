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
                        <div className="card app-card" style={{ gridColumn: '1 / -1', maxWidth: '900px', margin: '0 auto', padding: 0 }}>
                            <div className="app-image" style={{ height: '250px', fontSize: '6rem' }}>💪</div>
                            <div className="app-content">
                                <span className="app-badge">Mobil Uygulama</span>
                                <h3 className="app-title">Gym Tracker</h3>
                                <p className="app-description">
                                    Fitness yolculuğunuzu profesyonelce takip edin. Antrenmanlarınızı planlayın,
                                    ilerlemenizi izleyin ve hedeflerinize ulaşın. Gym Tracker, spor salonunda
                                    veya evde antrenman yapan herkes için mükemmel bir yol arkadaşıdır.
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                                    {gymTrackerFeatures.map((feature, index) => (
                                        <div className="card" key={index} style={{ padding: '1rem', textAlign: 'center' }}>
                                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                                            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{feature.title}</h4>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <ul className="app-features">
                                    <li>Özelleştirilebilir antrenman programları</li>
                                    <li>Egzersiz kütüphanesi ile hızlı ekleme</li>
                                    <li>Kilo ve vücut ölçüsü takibi</li>
                                    <li>Offline çalışma desteği</li>
                                    <li>Koyu ve açık tema seçenekleri</li>
                                </ul>

                                <div className="app-links">
                                    <a href="#" className="btn btn-primary">
                                        <span>📱</span> Google Play&apos;de İndir
                                    </a>
                                    <a href="#" className="btn btn-secondary">
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
