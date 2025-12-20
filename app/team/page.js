export const metadata = {
    title: 'Ekibimiz | GMD Studios',
    description: 'GMD Studios ekibini tanıyın. Yazılım çözümleri sunan tutkulu profesyoneller.',
};

export default function TeamPage() {
    const values = [
        { icon: '🎯', title: 'Çözüm Odaklılık', desc: 'Her projeye ihtiyaca özel çözümler üretiyoruz.' },
        { icon: '🚀', title: 'Yenilikçilik', desc: 'Sürekli öğreniyor ve güncel teknolojileri uyguluyoruz.' },
        { icon: '🤝', title: 'Şeffaflık', desc: 'Müşterilerimizle ve birbirimizle açık iletişim kuruyoruz.' },
        { icon: '💡', title: 'Kalite', desc: 'Her projemizde en yüksek standartları hedefliyoruz.' },
    ];

    return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1 className="fade-in-up">Ekibimiz</h1>
                    <p className="fade-in-up delay-1">
                        Tutkulu, yaratıcı ve çözüm odaklı. Yazılım projelerinizi hayata geçiren insanlarla tanışın.
                    </p>
                </div>
            </header>

            <section>
                <div className="container">
                    <div className="section-header">
                        <h2>Arkamızdaki İnsanlar</h2>
                        <p>Projelerinizi gerçeğe dönüştüren takımımız</p>
                    </div>

                    <div className="team-grid">
                        <div className="card team-card">
                            <div className="team-avatar">👨‍💻</div>
                            <h3 className="team-name">Bedir</h3>
                            <p className="team-role">Kurucu & Lead Developer</p>
                            <p className="team-bio">
                                Yazılım geliştirme konusunda uzman. Mobil, web ve masaüstü platformlarda kullanıcı deneyimini ön planda tutan, yenilikçi çözümler üreten bir yazılım geliştirici.
                            </p>
                            <div className="team-social">
                                <a href="#" aria-label="GitHub">🔗</a>
                                <a href="#" aria-label="LinkedIn">💼</a>
                                <a href="#" aria-label="Twitter">🐦</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2>Değerlerimiz</h2>
                        <p>Bizi yönlendiren temel ilkeler</p>
                    </div>

                    <div className="features-grid">
                        {values.map((value, index) => (
                            <div className="card feature-card" key={index}>
                                <div className="feature-icon">{value.icon}</div>
                                <h3 className="feature-title">{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
