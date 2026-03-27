import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'PSL Live Streaming & Scores | Pakistan Super League',
  description: 'Get comprehensive coverage of PSL matches, live streaming updates, scores, and exclusive details on Quetta Gladiators vs Lahore Qalandars.',
  keywords: 'psl live, psl live score, where to watch quetta gladiators vs lahore qalandars, psl match today live',
  openGraph: {
    title: 'PSL Live Streaming & Scores',
    description: 'Get comprehensive coverage of PSL matches and live streaming options.',
    siteName: 'PSL Live',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
