import Link from 'next/link';

export const metadata = {
  title: 'Where to Watch PSL 2026 Live | PSL Live Streaming Guide – Tamasha, A Sports & More',
  description:
    'Complete guide to watching HBL PSL 11 (2026) live. Free & paid streaming platforms in Pakistan and globally — Tamasha, Tapmad, A Sports, Geo Super, Willow TV, Sky Sports and more. Updated for every match.',
  keywords:
    'psl live, psl live streaming, psl match today live, tamasha live, psl 2026 live stream, watch psl online, a sports live, geo super psl, psl live score, where to watch psl 2026, psl live in uk, psl live in usa, tapmad tv, psl 2026 broadcast rights',
  openGraph: {
    title: 'Where to Watch PSL 2026 Live — Complete Streaming Guide',
    description:
      'Every platform, channel, and streaming service broadcasting HBL PSL 11 (2026) live in Pakistan and worldwide.',
    type: 'article',
  },
};

export default function PslLivePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I watch PSL 2026 live for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tamasha app is the official free streaming platform for PSL 2026 in Pakistan. You can watch all matches live without a subscription. PTV Sports also broadcasts selected PSL 2026 matches on cable TV.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which TV channels broadcast PSL 2026 in Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PSL 2026 is broadcast live on A Sports, Geo Super, and PTV Sports in Pakistan. These channels are available on major cable and satellite TV providers.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to watch PSL 2026 live in the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UK viewers can watch PSL 2026 live on Sky Sports Cricket and via the Sky Go / NOW TV platforms online.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to watch PSL 2026 live in the USA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the USA, PSL 2026 is available on Willow TV (cable and streaming). Fans can subscribe to Willow TV via their website or through cable providers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Tapmad TV available for PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Tapmad TV is an official paid premium streaming platform for PSL 2026 in Pakistan, offering HD quality streams, multiple camera views, and on-demand highlights.',
        },
      },
      {
        '@type': 'Question',
        name: 'What time do PSL 2026 matches start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PSL 2026 afternoon matches start at 2:30 PM PKT and evening matches start at 7:00 PM PKT.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Where to Watch PSL 2026 Live — Complete Streaming Guide',
    datePublished: '2026-03-26T00:00:00Z',
    dateModified: '2026-03-29T00:00:00Z',
    author: { '@type': 'Organization', name: 'PSL Live' },
    publisher: { '@type': 'Organization', name: 'PSL Live', url: 'https://psllive.vercel.app' },
    description: 'Every official platform and TV channel broadcasting HBL PSL 11 (2026) in Pakistan and globally.',
  };

  const platforms = [
    {
      name: 'Tamasha',
      category: 'Free · Pakistan',
      badge: 'FREE',
      badgeBg: '#16a34a',
      icon: '📱',
      coverage: 'All PSL 2026 matches live in Pakistan',
      details: 'Official free OTT streaming app by Jazz. Available on Android, iOS, and Smart TVs. No subscription needed — just create an account.',
      link: 'https://tamasha.com',
      linkLabel: 'Go to Tamasha.com',
      color: '#16a34a',
      bgColor: '#f0fdf4',
      borderColor: '#bbf7d0',
    },
    {
      name: 'Tapmad TV',
      category: 'Premium · Pakistan',
      badge: 'PAID',
      badgeBg: '#7c3aed',
      icon: '📺',
      coverage: 'All PSL 2026 matches in HD',
      details: 'Pakistan\'s leading premium OTT platform offering HD live streams, multiple camera angles, expert commentary options, and full match replays. Monthly and annual plans available.',
      link: 'https://tapmad.com',
      linkLabel: 'Go to Tapmad.com',
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      borderColor: '#ddd6fe',
    },
    {
      name: 'A Sports',
      category: 'Cable TV · Pakistan',
      badge: 'TV',
      badgeBg: '#d97706',
      icon: '📡',
      coverage: 'All PSL 2026 matches on cable',
      details: 'Available on major Pakistani cable providers (PTCL, Nayatel, StormFiber). A Sports is one of the primary broadcasters for PSL 2026 with expert pre/post-match analysis.',
      link: 'https://asports.tv',
      linkLabel: 'Go to ASports.tv',
      color: '#d97706',
      bgColor: '#fffbeb',
      borderColor: '#fde68a',
    },
    {
      name: 'Geo Super',
      category: 'Cable TV · Pakistan',
      badge: 'TV',
      badgeBg: '#0891b2',
      icon: '📡',
      coverage: 'Selected PSL 2026 matches',
      details: 'GEO Network\'s sports channel, widely available across Pakistan on cable and satellite. Stream via the Geo TV website or the Geo app for digital viewers.',
      link: 'https://geo.tv/super',
      linkLabel: 'Go to Geo.tv/super',
      color: '#0891b2',
      bgColor: '#f0f9ff',
      borderColor: '#bae6fd',
    },
    {
      name: 'PTV Sports',
      category: 'Free TV · Pakistan',
      badge: 'FREE',
      badgeBg: '#064e3b',
      icon: '📺',
      coverage: 'Selected matches free-to-air',
      details: 'Pakistan Television Network\'s sports channel. Available free on all cable, satellite (PAKSAT), and terrestrial networks. Also streams on ptvsports.com.pk.',
      link: 'https://ptvsports.com.pk',
      linkLabel: 'Go to PTVSports.com.pk',
      color: '#064e3b',
      bgColor: '#ecfdf5',
      borderColor: '#6ee7b7',
    },
    {
      name: 'Sky Sports Cricket',
      category: 'UK & Ireland',
      badge: "INT'L",
      badgeBg: '#1d4ed8',
      icon: '🇬🇧',
      coverage: 'Live PSL 2026 in the UK',
      details: 'Official UK broadcaster for PSL 2026. Available on Sky Sports packages. Stream via Sky Go, the Sky Sports app, or NOW Sports streaming pass without a satellite dish.',
      link: 'https://www.skysports.com',
      linkLabel: 'Go to SkySports.com',
      color: '#1d4ed8',
      bgColor: '#eff6ff',
      borderColor: '#bfdbfe',
    },
    {
      name: 'Willow TV',
      category: 'USA & Canada',
      badge: "INT'L",
      badgeBg: '#b91c1c',
      icon: '🇺🇸',
      coverage: 'Live PSL 2026 in North America',
      details: 'The leading cricket streaming service in the USA and Canada. Willow TV is available via cable providers (Dish, FiOS, DirecTV) and through Willow TV on Sling TV.',
      link: 'https://www.willow.tv',
      linkLabel: 'Go to Willow.tv',
      color: '#b91c1c',
      bgColor: '#fef2f2',
      borderColor: '#fecaca',
    },
    {
      name: 'SuperSport',
      category: 'Africa & Middle East',
      badge: "INT'L",
      badgeBg: '#ca8a04',
      icon: '🌍',
      coverage: 'Live PSL 2026 in Africa',
      details: 'SuperSport broadcasts PSL live across sub-Saharan Africa through DStv. Also available via the SuperSport Golf & Cricket app for stream-on-demand subscribers.',
      link: 'https://supersport.com',
      linkLabel: 'Go to SuperSport.com',
      color: '#ca8a04',
      bgColor: '#fefce8',
      borderColor: '#fde68a',
    },
    {
      name: 'FanCode',
      category: 'India',
      badge: "INT'L",
      badgeBg: '#9333ea',
      icon: '🇮🇳',
      coverage: 'PSL 2026 streaming for India',
      details: 'FanCode has acquired rights to stream PSL in India. Available on iOS and Android — affordable match passes or season passes available for Indian fans.',
      link: 'https://fancode.com',
      linkLabel: 'Go to FanCode.com',
      color: '#9333ea',
      bgColor: '#fdf4ff',
      borderColor: '#e9d5ff',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #111827 0%, #0A3258 40%, #008A37 100%)',
        color: 'white',
        padding: '4.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(0,138,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(10,50,88,0.4) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <p style={{ color: '#c7fa3b', fontWeight: '700', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            HBL PSL 11 · 2026 · Official Streaming Guide
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.15', color: 'white', marginBottom: '1rem' }}>
            📺 Where to Watch<br />
            <span style={{ color: '#c7fa3b' }}>PSL 2026 Live</span>
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: '0.9', marginBottom: '0.75rem' }}>
            Free & paid streaming platforms · Pakistan and worldwide
          </p>
          <p style={{ fontSize: '0.95rem', color: '#a7f3d0', marginBottom: '2rem' }}>
            Tamasha (Free) · Tapmad · A Sports · Geo Super · Sky Sports · Willow TV · FanCode
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/live-score" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: 'bold' }}>
              🔴 PSL Live Score
            </Link>
            <Link href="/psl-11-2026-schedule" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
              📅 Match Schedule
            </Link>
            <Link href="/points-table" className="btn" style={{ backgroundColor: '#008A37', color: 'white' }}>
              🏆 Points Table
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>

        {/* ── Quick Platform Grid ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>🚀 PSL 2026 — At a Glance: Where to Watch</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
            {[
              { name: 'Tamasha', badge: 'FREE · PK', bg: '#f0fdf4', color: '#16a34a', href: 'https://tamasha.com' },
              { name: 'Tapmad TV', badge: 'PAID · PK', bg: '#f5f3ff', color: '#7c3aed', href: 'https://tapmad.com' },
              { name: 'A Sports', badge: 'TV · PK', bg: '#fffbeb', color: '#d97706', href: 'https://asports.tv' },
              { name: 'Geo Super', badge: 'TV · PK', bg: '#f0f9ff', color: '#0891b2', href: 'https://geo.tv/super' },
              { name: 'PTV Sports', badge: 'FREE · PK', bg: '#ecfdf5', color: '#065f46', href: 'https://ptvsports.com.pk' },
              { name: 'Sky Sports', badge: 'UK', bg: '#eff6ff', color: '#1d4ed8', href: 'https://www.skysports.com' },
              { name: 'Willow TV', badge: 'USA', bg: '#fef2f2', color: '#b91c1c', href: 'https://www.willow.tv' },
              { name: 'SuperSport', badge: 'Africa', bg: '#fefce8', color: '#ca8a04', href: 'https://supersport.com' },
              { name: 'FanCode', badge: 'India', bg: '#fdf4ff', color: '#9333ea', href: 'https://fancode.com' },
            ].map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '0.85rem', backgroundColor: p.bg, border: `1px solid ${p.color}30`, borderRadius: '0.75rem', textDecoration: 'none', textAlign: 'center', transition: 'transform 0.15s' }}>
                <p style={{ color: p.color, fontWeight: '800', fontSize: '0.9rem', margin: '0 0 0.25rem' }}>{p.name}</p>
                <span style={{ fontSize: '0.7rem', color: '#6b7280', fontWeight: '600' }}>{p.badge}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Intro Article ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>How to Watch HBL PSL 11 (2026) Live — The Complete Guide</h2>
          <p>
            The <strong>HBL Pakistan Super League 2026</strong> — the tournament's <strong>11th edition</strong> — is one of the most exciting T20 cricket competitions on the planet. Whether you're in Pakistan, the UK, USA, India, or anywhere else in the world, there are multiple official and legal ways to catch every ball of the <Link href="/psl-11-2026-schedule">44-match PSL 2026 season</Link> live.
          </p>
          <p>
            This guide covers every major broadcast partner, streaming platform, and TV channel carrying PSL 2026 coverage. We'll tell you exactly what's free, what requires a subscription, and how to access each platform from your specific region. We also link directly to the official platform websites so you can get watching immediately.
          </p>
          <p>
            With <strong>8 franchises</strong>, two brand-new expansion teams (<Link href="/rawalpindi-pindiz-squad">Rawalpindi Pindiz</Link> and <Link href="/hyderabad-kingsmen-squad">Hyderabad Kingsmen</Link>), and world-class stars like Shaheen Afridi, Fakhar Zaman, and David Warner, PSL 2026 is unmissable cricket. Don't miss a match — use this guide to set up your stream before the next game.
          </p>
        </article>

        {/* ── Pakistan Platforms ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🇵🇰 PSL 2026 Live Streaming in Pakistan</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            Pakistani fans have the most options for watching PSL 2026 live — including completely free, high-quality streaming. Here's every official platform available in Pakistan:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {platforms.filter(p => ['Tamasha', 'Tapmad TV', 'A Sports', 'Geo Super', 'PTV Sports'].includes(p.name)).map((p, i) => (
              <div key={i} style={{ border: `2px solid ${p.borderColor}`, borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: p.bgColor, display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '120px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{p.icon}</div>
                  <span style={{ backgroundColor: p.badgeBg, color: 'white', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.7rem', fontWeight: '800' }}>{p.badge}</span>
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                    <h3 style={{ color: p.color, margin: 0, fontSize: '1.2rem' }}>{p.name}</h3>
                    <span style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '600' }}>{p.category}</span>
                  </div>
                  <p style={{ color: '#1f2937', fontWeight: '700', margin: '0 0 0.35rem', fontSize: '0.9rem' }}>
                    ✅ {p.coverage}
                  </p>
                  <p style={{ color: '#4b5563', margin: '0 0 0.75rem', fontSize: '0.9rem', lineHeight: '1.6' }}>{p.details}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: p.badgeBg, color: 'white', padding: '0.45rem 1rem', borderRadius: '0.375rem', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none' }}>
                    🔗 {p.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── International Platforms ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🌍 PSL 2026 Live Streaming — International Platforms</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            Living outside Pakistan? Here's how fans in the UK, USA, India, Africa, and the rest of the world can watch every PSL 2026 match live:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {platforms.filter(p => ['Sky Sports Cricket', 'Willow TV', 'SuperSport', 'FanCode'].includes(p.name)).map((p, i) => (
              <div key={i} style={{ border: `2px solid ${p.borderColor}`, borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: p.bgColor }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: p.color, margin: 0, fontSize: '1.1rem' }}>{p.name}</h3>
                    <span style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: '600' }}>{p.category}</span>
                  </div>
                  <span style={{ marginLeft: 'auto', backgroundColor: p.badgeBg, color: 'white', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.7rem', fontWeight: '800' }}>{p.badge}</span>
                </div>
                <p style={{ color: '#374151', fontWeight: '700', fontSize: '0.875rem', margin: '0 0 0.4rem' }}>✅ {p.coverage}</p>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6', margin: '0 0 1rem' }}>{p.details}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: p.badgeBg, color: 'white', padding: '0.4rem 0.85rem', borderRadius: '0.375rem', fontWeight: '700', fontSize: '0.8rem', textDecoration: 'none' }}>
                  🔗 {p.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Broadcast Rights Table ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>📋 PSL 2026 Broadcasting Rights — Country by Country</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <thead>
                <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Region / Country</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Platform / Channel</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Cost</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'center' }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { region: '🇵🇰 Pakistan', platform: 'Tamasha', cost: 'Free', type: 'App/Web' },
                  { region: '🇵🇰 Pakistan', platform: 'Tapmad TV', cost: 'Paid', type: 'App/Web' },
                  { region: '🇵🇰 Pakistan', platform: 'A Sports', cost: 'Cable TV', type: 'TV' },
                  { region: '🇵🇰 Pakistan', platform: 'Geo Super', cost: 'Cable TV', type: 'TV' },
                  { region: '🇵🇰 Pakistan', platform: 'PTV Sports', cost: 'Free to Air', type: 'TV' },
                  { region: '🇬🇧 United Kingdom', platform: 'Sky Sports Cricket', cost: 'Subscription', type: 'TV/App' },
                  { region: '🇺🇸 USA & Canada', platform: 'Willow TV', cost: 'Subscription', type: 'Cable/App' },
                  { region: '🌍 Africa', platform: 'SuperSport (DStv)', cost: 'Subscription', type: 'TV/App' },
                  { region: '🇮🇳 India', platform: 'FanCode', cost: 'Paid (Match Pass)', type: 'App/Web' },
                  { region: '🇦🇺 Australia', platform: 'Foxtel / Kayo Sports', cost: 'Subscription', type: 'TV/App' },
                  { region: '🌏 Rest of World', platform: 'VPN + Tamasha', cost: 'Free (VPN req.)', type: 'App' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f9fafb' : 'white', borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '700', color: '#1f2937' }}>{row.region}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#374151' }}>{row.platform}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>
                      <span style={{
                        padding: '0.15rem 0.6rem',
                        borderRadius: '1rem',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        backgroundColor: row.cost === 'Free' || row.cost === 'Free to Air' ? '#dcfce7' : '#fef9c3',
                        color: row.cost === 'Free' || row.cost === 'Free to Air' ? '#15803d' : '#854d0e',
                      }}>
                        {row.cost}
                      </span>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Streaming Tips ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>💡 Tips for the Best PSL 2026 Streaming Experience</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {[
              {
                icon: '📱',
                title: 'Use the Tamasha App',
                desc: 'For Pakistani fans, Tamasha is the #1 free option. Install it on your Phone or Smart TV before match day. The app handles millions of concurrent streams.',
              },
              {
                icon: '🌐',
                title: 'VPN for Abroad Access',
                desc: 'If you\'re travelling internationally, a VPN connected to a Pakistan server can unlock Tamasha\'s free PSL stream. Use reputable VPN services like NordVPN or ExpressVPN.',
              },
              {
                icon: '📶',
                title: 'Strong Internet Connection',
                desc: 'PSL HD streaming requires at least 5–8 Mbps. For 4K streams, 25+ Mbps is recommended. Use WiFi rather than mobile data for evening prime-time matches.',
              },
              {
                icon: '⏰',
                title: 'Check Match Times (PKT)',
                desc: 'Afternoon matches start at 2:30 PM PKT (9:30 AM UTC) and evening matches kick off at 7:00 PM PKT (2:00 PM UTC). Set reminders so you never miss the toss.',
              },
              {
                icon: '📺',
                title: 'Cast to Your TV',
                desc: 'Both Tamasha and Tapmad support Chromecast and AirPlay. Cast directly from your phone to a big screen TV for the complete stadium experience at home.',
              },
              {
                icon: '🔔',
                title: 'Enable Push Notifications',
                desc: 'Enable push notifications on your preferred cricket app (Tamasha, Cricbuzz, ESPN Cricinfo) to receive live match start alerts, wicket notifications, and score updates.',
              },
            ].map((tip, i) => (
              <div key={i} style={{ padding: '1.25rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', backgroundColor: '#f9fafb' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                <h3 style={{ color: '#0A3258', fontSize: '1rem', margin: '0 0 0.4rem' }}>{tip.title}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* ── PSL 2026 Live Score ── */}
        <section style={{
          background: 'linear-gradient(135deg, #111827 0%, #1e3a5f 100%)',
          color: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          marginBottom: '3rem',
          textAlign: 'center',
        }}>
          <h2 style={{ color: '#c7fa3b', marginTop: 0 }}>🔴 PSL 2026 Live Score — Real-Time Updates</h2>
          <p style={{ color: '#d1d5db', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Can't watch the stream? Our live score page delivers ball-by-ball updates, wicket alerts, run rates, and match statistics in real time — straight from Gaddafi Stadium and National Bank Stadium.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/live-score" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: 'bold' }}>
              🔴 Go to Live Score
            </Link>
            <Link href="/psl-11-2026-schedule" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid #c7fa3b', color: '#c7fa3b' }}>
              📅 Match Schedule
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>❓ PSL 2026 Streaming — Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {[
              { q: 'Where can I watch PSL 2026 live for free in Pakistan?', a: 'Tamasha is the official free streaming platform for PSL 2026 in Pakistan. It\'s available on iOS, Android, and Smart TVs. Simply download the app and create a free account. PTV Sports also broadcasts selected matches for free on TV.' },
              { q: 'Which TV channels broadcast PSL 2026 in Pakistan?', a: 'PSL 2026 is on A Sports, Geo Super, and PTV Sports on cable/satellite TV in Pakistan. A Sports and Geo Super provide comprehensive match coverage with expert commentary.' },
              { q: 'How to watch PSL 2026 live in the UK?', a: 'UK viewers can watch PSL 2026 on Sky Sports Cricket. You can stream via Sky Go with an existing subscription, or purchase a NOW Sports Day/Month pass without a full Sky subscription.' },
              { q: 'How to watch PSL 2026 in the USA?', a: 'Willow TV is the official PSL 2026 broadcaster for the USA and Canada. It\'s available via Dish Network, DirecTV, FiOS, and through Sling TV\'s World Sports add-on. Stream on willowcricket.com.' },
              { q: 'Is there a free way to watch PSL 2026 outside Pakistan?', a: 'International viewers can access Tamasha\'s free stream by using a VPN connected to a Pakistani server. Alternatively, check if your country has a free broadcaster — PTV Sports is available via some satellite providers globally.' },
              { q: 'What is Tapmad TV and is it worth it for PSL 2026?', a: 'Tapmad TV is Pakistan\'s leading premium sports streaming service. It offers pristine HD streams, multiple simultaneous streams, commentary in multiple languages, and on-demand replay of all PSL 2026 matches. Excellent value for serious cricket fans.' },
              { q: 'Can I watch PSL 2026 live in India?', a: 'Yes. FanCode has acquired PSL 2026 broadcast rights for India. You can subscribe to a match or season pass on the FanCode app (iOS and Android).' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem 1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#f9fafb' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: '#0A3258' }}>{item.q}</h3>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '0.95rem' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
          <h2>🔗 Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {[
              { href: '/psl-11-2026-schedule', label: '📅 Full PSL 2026 Schedule' },
              { href: '/live-score', label: '🔴 PSL 2026 Live Score' },
              { href: '/points-table', label: '🏆 PSL 2026 Points Table' },
              { href: '/lahore-qalandars-vs-karachi-kings', label: '⚔️ LQ vs KK — Match 6 Preview' },
              { href: '/quetta-gladiators-vs-hyderabad-kingsmen', label: '⚔️ QG vs HK — Match 5 Preview' },
              { href: '/hbl-psl-2026', label: 'ℹ️ HBL PSL 2026 Overview' },
              { href: '/news', label: '📰 PSL 2026 Latest News' },
              { href: '/gaddafi-stadium-psl-schedule', label: '🏟️ Gaddafi Stadium Fixtures' },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="team-card" style={{ display: 'block', padding: '0.85rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: 'white', color: '#0A3258', fontWeight: '600', fontSize: '0.9rem' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
