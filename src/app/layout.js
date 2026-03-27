import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'PSL Live Streaming & Scores | Pakistan Super League',
  description: 'Get comprehensive coverage of PSL matches, live streaming updates, scores, and exclusive details on Quetta Gladiators vs Lahore Qalandars.',
  keywords: 'psl live, psl live score, where to watch quetta gladiators vs lahore qalandars, psl match today live',
  verification: {
    google: 'xZGj4aLHKeyq9Xx01DC0vBUOBNJMDohKVK7R8uWk1zE',
  },
  other: {
    'google-adsense-account': 'ca-pub-8638783199172001',
  },
  openGraph: {
    title: 'PSL Live Streaming & Scores',
    description: 'Get comprehensive coverage of PSL matches and live streaming options.',
    siteName: 'PSL Live',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PSL Live 2026",
    "url": "https://psllive-lemon.vercel.app/",
    "description": "Your ultimate destination for HBL PSL 11 (2026) live streaming, points table, and real-time match scores."
  };

  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="9A28B5EAA881497F8AC75521B1B08EC4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XSPCXP9J40" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XSPCXP9J40');
            `,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
