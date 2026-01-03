import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'algorynth | Yazılım Çözümleri',
  description: 'algorynth - Mobil, web ve masaüstü platformlarda profesyonel yazılım çözümleri. Her ölçekte projeye özel yaklaşım.',
  keywords: 'yazılım, mobil uygulama, web geliştirme, masaüstü yazılım, API, algorynth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

