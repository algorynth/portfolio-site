import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'GMD Studios | Yazılım Çözümleri',
  description: 'GMD Studios - Mobil, web ve masaüstü platformlarda profesyonel yazılım çözümleri. Her ölçekte projeye özel yaklaşım.',
  keywords: 'yazılım, mobil uygulama, web geliştirme, masaüstü yazılım, API, GMD Studios',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
