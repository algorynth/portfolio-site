export const metadata = {
    title: 'Ekibimiz | algorynth',
    description: 'algorynth ekibini tanıyın. Yazılım çözümleri sunan tutkulu profesyoneller.',
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
                            <img src="/bedir.jpg" alt="Bedir Tuğra Karaabalı" className="team-avatar" style={{ objectFit: 'cover' }} />
                            <h3 className="team-name">Bedir Tuğra Karaabalı</h3>
                            <p className="team-role">Full Stack Yazılım Mühendisi</p>
                            <p className="team-bio">
                                Bilgisayar Mühendisi. Mobil, web ve masaüstü platformlarda kullanıcı deneyimini ön planda tutan, yenilikçi çözümler üreten bir yazılım geliştirici. Makine öğrenimi, ön uç geliştirme ve web teknolojileri konularında uzman.
                            </p>
                            <div className="team-social">
                                <a href="https://github.com/bdrtr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🔗</a>
                                <a href="https://www.linkedin.com/in/bdrtr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
                            </div>
                        </div>

                        <div className="card team-card">
                            <img src="/osman.jpg" alt="Osman Bayram" className="team-avatar" style={{ objectFit: 'cover' }} />
                            <h3 className="team-name">Osman Bayram</h3>
                            <p className="team-role">Data Scientist & ML Specialist</p>
                            <p className="team-bio">
                                Bahçeşehir Üniversitesi mezunu. N Kolay'da Dijital Ürün Yönetimi ve IT Koordinasyonunda çalışan, makine öğrenimi ve yapay zeka konularında uzman veri bilimci. Kaggle Notebooks Expert. Veri analizi ve modelleme alanında geniş tecrübeye sahip.
                            </p>
                            <div className="team-social">
                                <a href="https://github.com/osbm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🔗</a>
                                <a href="https://www.linkedin.com/in/osbm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
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
