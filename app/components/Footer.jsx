import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>algorynth</h3>
                        <p>Mobil, web ve masaüstü platformlarda profesyonel yazılım çözümleri sunan genç ve dinamik bir ekip.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Sayfalar</h4>
                        <ul>
                            <li><Link href="/">Ana Sayfa</Link></li>
                            <li><Link href="/apps">Projeler</Link></li>
                            <li><Link href="/team">Ekip</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Hizmetler</h4>
                        <ul>
                            <li><Link href="/#features">Mobil Uygulama</Link></li>
                            <li><Link href="/#features">Web Geliştirme</Link></li>
                            <li><Link href="/#features">Özel Yazılım</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>İletişim</h4>
                        <ul>
                            <li><a href="mailto:contact@gmdstudios.com">contact@gmdstudios.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 algorynth. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
