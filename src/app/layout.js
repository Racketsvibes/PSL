import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveWidget from '@/components/LiveWidget';
import Script from 'next/script';

export const metadata = {
  title: 'PSL Live Streaming & Scores | Pakistan Super League',
  description: 'Get comprehensive coverage of PSL matches, live streaming updates, scores, and exclusive details on Quetta Gladiators vs Lahore Qalandars.',
  keywords: 'psl live, psl live score, where to watch quetta gladiators vs lahore qalandars, psl match today live',
  verification: {
    google: 'xZGj4aLHKeyq9Xx01DC0vBUOBNJMDohKVK7R8uWk1zE',
  },
  metadataBase: new URL('https://psllive.vercel.app'),
  alternates: {
    canonical: '/',
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
    "url": "https://psllive.vercel.app/",
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
        {/* Google Analytics */}
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
        {/* Ad Network — popunder/banner loader */}
        <Script
          id="ad-network-loader"
          strategy="afterInteractive"
          src="https://pl29001918.profitablecpmratenetwork.com/93/e6/08/93e6084be46971ae06e5f7b32468c45d.js"
        />
        {/* Ad Network — invoke banner */}
        <Script
          id="ad-network-invoke"
          strategy="afterInteractive"
          data-cfasync="false"
          src="https://pl29001919.profitablecpmratenetwork.com/3cd6091f42a516070e4b1349e3ae7468/invoke.js"
        />
        <div id="container-3cd6091f42a516070e4b1349e3ae7468"></div>
        <div className="top-bar-container">
          <div className="fixture-ticker" aria-label="PSL 2026 Fixture Schedule">
            <div className="fixture-ticker-track">
              {/* Fixtures duplicated for seamless loop */}
            {[
              { match: 'Quetta Gladiators vs Hyderabad Kingsmen', venue: 'Gaddafi Stadium, Lahore', time: 'Mar 29 · 2:30 PM PKT' },
              { match: 'Lahore Qalandars vs Karachi Kings', venue: 'Gaddafi Stadium, Lahore', time: 'Mar 29 · 7:00 PM PKT' },
              { match: 'Islamabad United vs Peshawar Zalmi', venue: 'Gaddafi Stadium, Lahore', time: 'Mar 31 · 7:00 PM PKT' },
              { match: 'Multan Sultans vs Hyderabad Kingsmen', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 1 · 7:00 PM PKT' },
              { match: 'Quetta Gladiators vs Islamabad United', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 2 · 2:30 PM PKT' },
              { match: 'Rawalpindi Pindiz vs Karachi Kings', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 2 · 7:00 PM PKT' },
              { match: 'Lahore Qalandars vs Multan Sultans', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 3 · 7:00 PM PKT' },
              { match: 'Hyderabad Kingsmen vs Peshawar Zalmi', venue: 'National Bank Stadium, Karachi', time: 'Apr 8 · 7:00 PM PKT' },
              { match: 'Karachi Kings vs Peshawar Zalmi', venue: 'National Bank Stadium, Karachi', time: 'Apr 9 · 7:00 PM PKT' },
              { match: 'PSL 2026 Final', venue: 'Gaddafi Stadium, Lahore', time: 'May 3 · 7:00 PM PKT' },
            ].concat([
              { match: 'Quetta Gladiators vs Hyderabad Kingsmen', venue: 'Gaddafi Stadium, Lahore', time: 'Mar 29 · 2:30 PM PKT' },
              { match: 'Lahore Qalandars vs Karachi Kings', venue: 'Gaddafi Stadium, Lahore', time: 'Mar 29 · 7:00 PM PKT' },
              { match: 'Islamabad United vs Peshawar Zalmi', venue: 'Gaddafi Stadium, Lahore', time: 'Mar 31 · 7:00 PM PKT' },
              { match: 'Multan Sultans vs Hyderabad Kingsmen', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 1 · 7:00 PM PKT' },
              { match: 'Quetta Gladiators vs Islamabad United', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 2 · 2:30 PM PKT' },
              { match: 'Rawalpindi Pindiz vs Karachi Kings', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 2 · 7:00 PM PKT' },
              { match: 'Lahore Qalandars vs Multan Sultans', venue: 'Gaddafi Stadium, Lahore', time: 'Apr 3 · 7:00 PM PKT' },
              { match: 'Hyderabad Kingsmen vs Peshawar Zalmi', venue: 'National Bank Stadium, Karachi', time: 'Apr 8 · 7:00 PM PKT' },
              { match: 'Karachi Kings vs Peshawar Zalmi', venue: 'National Bank Stadium, Karachi', time: 'Apr 9 · 7:00 PM PKT' },
              { match: 'PSL 2026 Final', venue: 'Gaddafi Stadium, Lahore', time: 'May 3 · 7:00 PM PKT' },
            ]).map((fixture, idx) => (
              <span key={idx} className="fixture-ticker-item">
                🏏 <span className="ticker-match">{fixture.match}</span>
                <span className="ticker-separator">|</span>
                <span className="ticker-meta">🏟️ {fixture.venue}</span>
                <span className="ticker-separator">|</span>
                <span className="ticker-meta">🕑 {fixture.time}</span>
                <span className="ticker-separator">★</span>
              </span>
            ))}
            </div>
          </div>
          <LiveWidget />
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
