import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Lahore Qalandars vs Karachi Kings | PSL 2026 Match 6 Preview – March 29',
  description:
    'Full preview of Lahore Qalandars vs Karachi Kings, Match 6 of HBL PSL 11 (2026) on Sunday, March 29, 2026 at 7:00 PM PKT at Gaddafi Stadium, Lahore. Head-to-head record, key players, squads, and live streaming guide.',
  keywords:
    'lahore qalandars vs karachi kings, lq vs kk psl 2026, match 6 psl 2026, psl live today, gaddafi stadium lahore, karachi kings vs lahore qalandars, psl el clasico',
  openGraph: {
    title: 'Lahore Qalandars vs Karachi Kings – PSL 2026 Match 6 | March 29',
    description:
      'The biggest El Clásico rivalry in PSL cricket. Match 6 of HBL PSL 11 at Gaddafi Stadium on March 29, 2026 at 7:00 PM PKT.',
    type: 'article',
    publishedTime: '2026-03-28T17:00:00Z',
  },
};

export default function LahoreVsKarachiPage() {
  const matchSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'Lahore Qalandars vs Karachi Kings – PSL 2026 Match 6',
    startDate: '2026-03-29T14:00:00Z',
    endDate: '2026-03-29T18:30:00Z',
    location: {
      '@type': 'Place',
      name: 'Gaddafi Stadium',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressCountry: 'PK',
      },
    },
    competitor: [
      { '@type': 'SportsTeam', name: 'Lahore Qalandars' },
      { '@type': 'SportsTeam', name: 'Karachi Kings' },
    ],
    sport: 'Cricket',
    description:
      'Match 6 of HBL PSL 11 (2026). Lahore Qalandars face Karachi Kings in the iconic PSL El Clásico at Gaddafi Stadium, Lahore on March 29, 2026.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is Lahore Qalandars vs Karachi Kings PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The match is on Sunday, March 29, 2026 at 7:00 PM PKT (2:00 PM UTC) at Gaddafi Stadium, Lahore.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where to watch Lahore Qalandars vs Karachi Kings live?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can watch live on Tamasha (free in Pakistan), Tapmad (premium), A Sports, and Geo Super on TV. International fans can use Willow TV.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the head-to-head record between Lahore and Karachi in PSL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In 22 PSL meetings, Karachi Kings lead with 14 wins against Lahore Qalandars\' 8 wins.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the captain of Lahore Qalandars in PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shaheen Shah Afridi captains Lahore Qalandars in PSL 11 (2026).',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the captain of Karachi Kings in PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'David Warner captains the Karachi Kings in PSL 11 (2026).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the win probability for LQ vs KK PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lahore Qalandars are favourites with a 55.4% win probability vs Karachi Kings at 44.6%, based on pre-match analysis.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'Lahore Qalandars vs Karachi Kings – PSL 2026 Match 6 Preview',
    description:
      'Full preview of Lahore Qalandars vs Karachi Kings, Match 6 of HBL PSL 11 on March 29, 2026 at Gaddafi Stadium.',
    datePublished: '2026-03-28T17:00:00Z',
    dateModified: '2026-03-29T07:00:00Z',
    author: { '@type': 'Organization', name: 'PSL Live' },
    publisher: {
      '@type': 'Organization',
      name: 'PSL Live',
      url: 'https://psllive.vercel.app',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://psllive.vercel.app/lahore-qalandars-vs-karachi-kings',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(matchSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── Hero Banner ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #003087 45%, #C8102E 100%)',
          color: 'white',
          padding: '4.5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(200,16,46,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,48,135,0.3) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ maxWidth: '950px', position: 'relative' }}>
          <p
            style={{
              color: '#c7fa3b',
              fontWeight: '700',
              letterSpacing: '2px',
              fontSize: '0.9rem',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
            }}
          >
            HBL PSL 11 · Match 6 of 44 · Sunday, March 29, 2026
          </p>

          {/* Team Logos + VS */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/Lahore_Qalandars.png"
                alt="Lahore Qalandars Logo"
                width={90}
                height={90}
                style={{ objectFit: 'contain' }}
              />
              <p style={{ color: 'white', fontWeight: '800', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                Lahore Qalandars
              </p>
            </div>
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#c7fa3b',
                textShadow: '0 0 20px rgba(199,250,59,0.5)',
              }}
            >
              VS
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/Karachi_Kings.png"
                alt="Karachi Kings Logo"
                width={90}
                height={90}
                style={{ objectFit: 'contain' }}
              />
              <p style={{ color: 'white', fontWeight: '800', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                Karachi Kings
              </p>
            </div>
          </div>

          <h1
            style={{
              fontSize: '2.6rem',
              fontWeight: '800',
              lineHeight: '1.2',
              color: 'white',
              marginBottom: '1rem',
            }}
          >
            Lahore Qalandars vs Karachi Kings
          </h1>

          <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '0.75rem' }}>
            🏟️ Gaddafi Stadium, Lahore &nbsp;|&nbsp; 🕑 7:00 PM PKT (2:00 PM UTC) &nbsp;|&nbsp; 🏏 T20
          </p>
          <p
            style={{
              display: 'inline-block',
              background: 'rgba(199,250,59,0.15)',
              border: '1px solid #c7fa3b',
              borderRadius: '2rem',
              padding: '0.3rem 1rem',
              fontSize: '0.9rem',
              color: '#c7fa3b',
              fontWeight: '600',
              marginBottom: '2rem',
            }}
          >
            🔥 The PSL El Clásico — Pakistan's biggest T20 rivalry
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/psl-live"
              className="btn"
              style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: 'bold' }}
            >
              📺 Watch Live
            </Link>
            <Link
              href="/psl-11-2026-schedule"
              className="btn"
              style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}
            >
              📅 Full Schedule
            </Link>
            <Link
              href="/live-score"
              className="btn"
              style={{ backgroundColor: '#C8102E', color: 'white' }}
            >
              🔴 Live Score
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>

        {/* ── Match Details Card ── */}
        <section
          style={{
            backgroundColor: '#eff6ff',
            padding: '2rem',
            borderRadius: '0.75rem',
            borderLeft: '4px solid #3b82f6',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{ color: '#1d4ed8', marginTop: 0 }}>📍 PSL 2026 Match Details</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px' }}>
              <tbody>
                {[
                  ['Tournament', 'Pakistan Super League (PSL) 2026 — 11th Edition'],
                  ['Match Number', '6th Match of the Season'],
                  ['Date & Time', 'Sunday, March 29, 2026 at 7:00 PM PKT (2:00 PM UTC)'],
                  ['Venue', 'Gaddafi Stadium, Lahore'],
                  ['Format', 'T20 · Match 6 of 44'],
                  ['Win Probability', 'Lahore Qalandars: 55.4% | Karachi Kings: 44.6%'],
                  ['Head-to-Head', '22 Matches — Karachi Kings lead (14 wins vs 8)'],
                  ['Top Performer', 'Fakhar Zaman — 681 runs (all-time H2H top scorer)'],
                  ['Live Streaming', 'Tamasha (free), Tapmad, A Sports, Geo Super'],
                ].map(([label, value], idx) => (
                  <tr
                    key={idx}
                    style={{ borderBottom: '1px solid #dbeafe', backgroundColor: idx % 2 === 0 ? '#f0f7ff' : 'white' }}
                  >
                    <td
                      style={{
                        padding: '0.85rem 1rem',
                        fontWeight: '700',
                        color: '#1d4ed8',
                        width: '35%',
                        fontSize: '0.95rem',
                      }}
                    >
                      {label}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#1f2937', fontSize: '0.95rem' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Intro Article ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>
            The PSL El Clásico is Back — Lahore Qalandars vs Karachi Kings, March 29, 2026
          </h2>
          <p>
            When <strong>Lahore Qalandars</strong> and <strong>Karachi Kings</strong> step onto the field at{' '}
            <Link href="/gaddafi-stadium-psl-schedule">Gaddafi Stadium</Link> on the evening of March 29, 2026,
            Pakistani cricket fans will witness what is widely regarded as the greatest rivalry in the{' '}
            <Link href="/hbl-psl-2026">HBL Pakistan Super League</Link> — the PSL El Clásico. This is{' '}
            <strong>Match 6 of the 44-match PSL 11</strong> season, and the atmosphere, despite the matches being{' '}
            <Link href="/why-no-crowd-in-psl-2026">played behind closed doors</Link>, will be electric.
          </p>
          <p>
            The defending <strong>PSL champions, Lahore Qalandars</strong>, arrive at this fixture brimming with
            confidence after a commanding 69-run victory over Hyderabad Kingsmen in their tournament opener on March
            26, 2026. Led by the fearsome pace of <strong>Shaheen Shah Afridi</strong> and the explosive batting of{' '}
            <strong>Fakhar Zaman</strong>, Lahore showcased exactly why they are the team to beat in PSL 11.
          </p>
          <p>
            Karachi Kings, on the other hand, enter this fixture on the back of a 14-run defeat against Quetta
            Gladiators in their season opener on March 27. Under the leadership of Australian legend{' '}
            <strong>David Warner</strong>, Karachi will need to dig deep and rediscover the swagger and ruthlessness
            that has seen them win the PSL title twice. The head-to-head record — with Karachi leading 14–8 across
            all 22{' '}
            <Link href="/psl-11-2026-schedule">PSL meetings</Link> — gives the Kings fans reason to believe a
            turnaround is possible.
          </p>
          <p>
            At stake is not just local bragging rights. With the{' '}
            <Link href="/points-table">PSL 2026 Points Table</Link> condensed into a brutally competitive league
            phase, this match carries enormous strategic weight. A win here could establish Lahore as early
            frontrunners for the top-two playoff spot, while a Karachi victory would signal a stunning comeback
            narrative — the hallmark of every great El Clásico.
          </p>
        </article>

        {/* ── Win Probability Banner ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>📊 Win Probability — March 29, 2026</h2>
          <div
            style={{
              background: 'linear-gradient(135deg, #0A3258, #1a5276)',
              borderRadius: '1rem',
              padding: '2rem',
              color: 'white',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <p style={{ color: '#c7fa3b', fontWeight: '800', fontSize: '2.2rem', margin: 0 }}>55.4%</p>
                <p style={{ margin: 0, fontWeight: '600', opacity: '0.85' }}>Lahore Qalandars</p>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: '#a7f3d0' }}>Defending Champions</p>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#c7fa3b', fontWeight: '700' }}>VS</div>
              <div>
                <p style={{ color: '#f87171', fontWeight: '800', fontSize: '2.2rem', margin: 0 }}>44.6%</p>
                <p style={{ margin: 0, fontWeight: '600', opacity: '0.85' }}>Karachi Kings</p>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', color: '#fca5a5' }}>2× PSL Champions</p>
              </div>
            </div>
            {/* Probability bar */}
            <div style={{ borderRadius: '0.5rem', overflow: 'hidden', height: '14px', background: 'rgba(255,255,255,0.1)' }}>
              <div
                style={{
                  width: '55.4%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #c7fa3b, #008A37)',
                  borderRadius: '0.5rem 0 0 0.5rem',
                }}
              />
            </div>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center' }}>
              Pre-match win probability based on recent form, head-to-head record, and venue data.
            </p>
          </div>
        </section>

        {/* ── Head-to-Head Record ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🆚 Head-to-Head Record — The PSL El Clásico</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            Historically known as the "El Clásico of PSL," the Lahore Qalandars vs Karachi Kings rivalry is the most
            watched and fiercely contested fixture in Pakistan Super League history. With roots dating back to the
            inaugural edition of the PSL, this matchup has consistently delivered drama, big scores, and stunning
            finishes.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              { label: 'Total Matches', value: '22', icon: '🏏', color: '#0A3258' },
              { label: 'Karachi Kings Wins', value: '14', icon: '👑', color: '#C8102E' },
              { label: 'Lahore Qalandars Wins', value: '8', icon: '🦅', color: '#008A37' },
              { label: 'Top Scorer', value: 'Fakhar Zaman', icon: '⭐', color: '#7c3aed', sub: '681 runs' },
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  border: `2px solid ${stat.color}`,
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  backgroundColor: 'white',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <p style={{ color: stat.color, fontWeight: '800', fontSize: '1.6rem', margin: 0 }}>{stat.value}</p>
                {stat.sub && (
                  <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: '0.1rem 0 0' }}>{stat.sub}</p>
                )}
                <p style={{ color: '#374151', fontWeight: '600', fontSize: '0.9rem', margin: '0.4rem 0 0' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Notable H2H Moments */}
          <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: '#0A3258' }}>📋 Notable Rivalry Moments</h3>
            <ul style={{ lineHeight: '2', color: '#374151', paddingLeft: '1.25rem' }}>
              <li>
                <strong>Most Recent Encounter:</strong> May 22, 2025 (PSL 10 Eliminator 1) — Lahore Qalandars won
                by 6 wickets chasing 190/8, with Fakhar Zaman top-scoring.
              </li>
              <li>
                <strong>Highest Team Total in Rivalry:</strong> Lahore Qalandars posted 201/6 against Karachi in PSL
                2025 — the highest score ever recorded in this head-to-head.
              </li>
              <li>
                <strong>PSL 2026 Opener Form:</strong> Lahore crushed Hyderabad Kingsmen by 69 runs (Mar 26).
                Karachi lost narrowly to Quetta Gladiators by 14 runs (Mar 27).
              </li>
              <li>
                <strong>Second Meeting:</strong> LQ vs KK will meet again on{' '}
                <strong>April 23, 2026</strong> (Match 35) at Gaddafi Stadium at 7:00 PM PKT.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Upcoming Fixtures Table ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>📆 Upcoming PSL 2026 Fixtures — LQ vs KK</h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '500px',
                backgroundColor: 'white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Date</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Match #</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Venue</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Time (PKT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: 'Mar 29, 2026', match: '6', venue: 'Gaddafi Stadium, Lahore', time: '7:00 PM', highlight: true },
                  { date: 'Apr 23, 2026', match: '35', venue: 'Gaddafi Stadium, Lahore', time: '7:00 PM', highlight: false },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      backgroundColor: row.highlight ? '#eff6ff' : 'white',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    <td style={{ padding: '1rem', fontWeight: row.highlight ? '700' : '400', color: '#1f2937' }}>
                      {row.date}{row.highlight && <span style={{ marginLeft: '0.5rem', backgroundColor: '#008A37', color: 'white', fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', fontWeight: '700' }}>TODAY</span>}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '700', color: '#0A3258' }}>
                      Match {row.match}
                    </td>
                    <td style={{ padding: '1rem', color: '#374151' }}>
                      <Link href="/gaddafi-stadium-psl-schedule">{row.venue}</Link>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#374151', fontWeight: '600' }}>
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Recent Form ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>📈 Current Season Form (PSL 2026)</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '1rem',
            }}
          >
            {/* Lahore */}
            <div
              style={{
                background: 'linear-gradient(135deg, #003087 0%, #001a4e 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '0.75rem',
                borderTop: '4px solid #c7fa3b',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Image
                  src="/Lahore_Qalandars.png"
                  alt="Lahore Qalandars"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
                <h3 style={{ color: '#fff', margin: 0, fontSize: '1.3rem' }}>Lahore Qalandars</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span
                  style={{
                    background: '#008A37',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                  }}
                >
                  W
                </span>
                <span style={{ color: '#d1d5db' }}>
                  Beat Hyderabad Kingsmen by <strong style={{ color: 'white' }}>69 runs</strong>
                </span>
              </div>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.95rem' }}>
                A dominant all-round display — Shaheen Afridi led the bowling attack with clinical precision while
                Fakhar Zaman anchored an impressive batting performance. The champions look sharp, organized, and
                ready to defend their title.
              </p>
              <Link
                href="/lahore-qalandars-squad"
                style={{ color: '#c7fa3b', display: 'inline-block', marginTop: '1rem', fontWeight: '600' }}
              >
                View Full Squad →
              </Link>
            </div>

            {/* Karachi */}
            <div
              style={{
                background: 'linear-gradient(135deg, #8B0000 0%, #450000 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '0.75rem',
                borderTop: '4px solid #ff6b6b',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Image
                  src="/Karachi_Kings.png"
                  alt="Karachi Kings"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
                <h3 style={{ color: '#fff', margin: 0, fontSize: '1.3rem' }}>Karachi Kings</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span
                  style={{
                    background: '#c41e3a',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                  }}
                >
                  L
                </span>
                <span style={{ color: '#d1d5db' }}>
                  Lost vs Quetta Gladiators by <strong style={{ color: 'white' }}>14 runs</strong>
                </span>
              </div>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.95rem' }}>
                An opening-match defeat to the Quetta Gladiators leaves David Warner's side under pressure to deliver
                a strong performance tonight. The batting lineup will need to fire collectively, and their bowling will
                need to find a way past Lahore's explosive top order.
              </p>
              <Link
                href="/karachi-kings-squad"
                style={{ color: '#ff6b6b', display: 'inline-block', marginTop: '1rem', fontWeight: '600' }}
              >
                View Full Squad →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Key Players ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>⭐ Key Players to Watch</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            Both squads are packed with match-winners. These are the players most likely to decide the outcome of
            this PSL El Clásico on March 29, 2026.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '620px',
                backgroundColor: 'white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Team</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Player</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Role</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Stats / Reason to Watch</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    team: '🦅 Lahore Qalandars',
                    player: 'Fakhar Zaman',
                    role: 'Opener / Batter',
                    stat: '681 runs in H2H vs Karachi — the all-time top scorer in this rivalry',
                  },
                  {
                    team: '🦅 Lahore Qalandars',
                    player: 'Shaheen Shah Afridi (c)',
                    role: 'Pace Bowler / Captain',
                    stat: 'PSL 2026 title defence leader — devastating new-ball bowler',
                  },
                  {
                    team: '🦅 Lahore Qalandars',
                    player: 'Shai Hope',
                    role: 'Wicketkeeper-Batter',
                    stat: 'High-quality finisher adding solidity to the middle order',
                  },
                  {
                    team: '👑 Karachi Kings',
                    player: 'David Warner (c)',
                    role: 'Opener / Batter',
                    stat: 'Australian Test legend and fearless big-match player — needs a measured innings today',
                  },
                  {
                    team: '👑 Karachi Kings',
                    player: 'Shan Masood',
                    role: 'Batter',
                    stat: 'Experienced Pakistan captain anchoring the Karachi middle order',
                  },
                  {
                    team: '👑 Karachi Kings',
                    player: 'Tim Southee',
                    role: 'Pace Bowler',
                    stat: 'New Zealand veteran capable of dismantling batting lineups at crucial junctures',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{ backgroundColor: idx % 2 === 0 ? '#f9fafb' : 'white', borderBottom: '1px solid #e5e7eb' }}
                  >
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: '#0A3258', fontSize: '0.9rem' }}>
                      {row.team}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '700' }}>{row.player}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#008A37', fontWeight: '600' }}>{row.role}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#4b5563', fontSize: '0.9rem' }}>{row.stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Team Squads ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🏏 Team Squads — PSL 2026</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '1rem',
            }}
          >
            <div
              style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: 'white' }}
            >
              <h3 style={{ color: '#003087', marginTop: 0, borderBottom: '2px solid #003087', paddingBottom: '0.5rem' }}>
                🦅 Lahore Qalandars
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
                <li>
                  <strong>Shaheen Shah Afridi</strong> (Captain)
                </li>
                <li>Fakhar Zaman</li>
                <li>Shai Hope (wk)</li>
                <li>Abdullah Shafique</li>
                <li>Rashid Khan</li>
                <li>Harry Brook</li>
                <li>Haris Rauf</li>
                <li>Zaman Khan</li>
              </ul>
              <Link href="/lahore-qalandars-squad" className="btn" style={{ marginTop: '1rem', display: 'inline-block', backgroundColor: '#003087' }}>
                Full Squad
              </Link>
            </div>
            <div
              style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: 'white' }}
            >
              <h3 style={{ color: '#C8102E', marginTop: 0, borderBottom: '2px solid #C8102E', paddingBottom: '0.5rem' }}>
                👑 Karachi Kings
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
                <li>
                  <strong>David Warner</strong> (Captain)
                </li>
                <li>Shan Masood</li>
                <li>Mohammad Haris (wk)</li>
                <li>Irfan Khan</li>
                <li>Tim Southee</li>
                <li>Mir Hamza</li>
                <li>Waqas Maqsood</li>
                <li>Jahandad Khan</li>
              </ul>
              <Link
                href="/karachi-kings-squad"
                className="btn"
                style={{ marginTop: '1rem', display: 'inline-block', backgroundColor: '#C8102E' }}
              >
                Full Squad
              </Link>
            </div>
          </div>
        </section>

        {/* ── Where to Watch ── */}
        <section
          style={{
            backgroundColor: '#111827',
            color: 'white',
            padding: '2.5rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{ color: '#c7fa3b', marginTop: 0 }}>📺 Where to Watch Lahore vs Karachi Live</h2>
          <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
            Don't miss a single ball of this El Clásico showdown at Gaddafi Stadium on March 29, 2026 at 7:00 PM
            PKT. Here's how to watch live:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {[
              { platform: 'Tamasha', detail: 'Free Streaming · Pakistan', badge: 'FREE' },
              { platform: 'Tapmad TV', detail: 'Premium Subscription', badge: 'PAID' },
              { platform: 'A Sports', detail: 'Cable TV · Pakistan', badge: 'TV' },
              { platform: 'Geo Super', detail: 'Cable TV · Pakistan', badge: 'TV' },
              { platform: 'Willow TV', detail: 'International Streaming', badge: "INT'L" },
              { platform: 'SuperSport', detail: 'South Africa & Africa', badge: 'INTL' },
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    backgroundColor: '#008A37',
                    color: 'white',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                  }}
                >
                  {p.badge}
                </span>
                <p style={{ fontWeight: '700', fontSize: '1.05rem', margin: '0.5rem 0 0.2rem' }}>{p.platform}</p>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/psl-live"
            style={{ color: '#c7fa3b', fontWeight: '700', display: 'inline-block', marginTop: '1.5rem' }}
          >
            → Complete PSL 2026 Streaming Guide
          </Link>
        </section>

        {/* ── Match Prediction ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>🔮 Match Prediction — Who Will Win?</h2>
          <p>
            Given Lahore Qalandars' devastating form in their PSL 2026 opener and their home conditions familiarity
            at <Link href="/gaddafi-stadium-psl-schedule">Gaddafi Stadium</Link>, the defending champions enter this
            El Clásico as the <strong>clear favourites at 55.4% win probability</strong>. Shaheen Afridi's bowling
            attack is arguably the most complete in the tournament, and Fakhar Zaman — the all-time top scorer
            against Karachi in PSL history with 681 runs — poses a serious, perhaps irresistible, threat with the
            bat.
          </p>
          <p>
            However, Karachi Kings have consistently defied the odds in PSL, and their head-to-head dominance (14
            wins vs 8) is not statistical noise — it reflects a mental toughness and tactical adaptability that makes
            them genuinely dangerous. David Warner's ability to accelerate in the powerplay and Tim Southee's
            craftiness with the old ball could tilt the match in Karachi's favour if they start well.
          </p>
          <p>
            <strong>Our prediction:</strong> A tight, high-quality contest, but Lahore Qalandars hold the edge at
            home on the back of superior recent form. Follow the{' '}
            <Link href="/live-score">PSL 2026 Live Score</Link> for ball-by-ball updates as this epic rivalry
            unfolds.
          </p>
        </article>

        {/* ── FAQs ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>❓ Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {[
              {
                q: 'When is Lahore Qalandars vs Karachi Kings PSL 2026?',
                a: 'The match is on Sunday, March 29, 2026 at 7:00 PM PKT (2:00 PM UTC) at Gaddafi Stadium, Lahore.',
              },
              {
                q: 'Where to watch Lahore vs Karachi PSL live?',
                a: 'Watch live on Tamasha (free in Pakistan), Tapmad (premium), A Sports, and Geo Super on TV. International fans can stream on Willow TV.',
              },
              {
                q: 'What is the head-to-head record between Lahore and Karachi in PSL?',
                a: 'Out of 22 total PSL meetings, Karachi Kings lead with 14 wins while Lahore Qalandars have won 8 matches.',
              },
              {
                q: 'Who is the captain of Lahore Qalandars in PSL 2026?',
                a: 'Shaheen Shah Afridi captains Lahore Qalandars in HBL PSL 11 (2026).',
              },
              {
                q: 'Who is the captain of Karachi Kings in PSL 2026?',
                a: 'David Warner captains the Karachi Kings in PSL 11 (2026).',
              },
              {
                q: 'Will there be a second LQ vs KK match in PSL 2026?',
                a: 'Yes. The second meeting between Lahore Qalandars and Karachi Kings in PSL 2026 is scheduled for April 23, 2026 (Match 35) at Gaddafi Stadium, Lahore at 7:00 PM PKT.',
              },
              {
                q: 'What is the win probability for Lahore vs Karachi on March 29?',
                a: 'Lahore Qalandars are pre-match favourites with a 55.4% win probability versus Karachi Kings at 44.6%.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem 1.5rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  backgroundColor: '#f9fafb',
                }}
              >
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: '#0A3258' }}>{item.q}</h3>
                <p style={{ margin: 0, color: '#4b5563' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Articles ── */}
        <section style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem', marginBottom: '2rem' }}>
          <h2>🔗 Related Articles</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            {[
              { href: '/lahore-qalandars-squad', label: '🦅 Lahore Qalandars Full Squad 2026' },
              { href: '/karachi-kings-squad', label: '👑 Karachi Kings Full Squad 2026' },
              { href: '/psl-11-2026-schedule', label: '📅 Full PSL 2026 Schedule' },
              { href: '/points-table', label: '🏆 PSL 2026 Points Table' },
              { href: '/gaddafi-stadium-psl-schedule', label: '🏟️ Gaddafi Stadium PSL Matches' },
              { href: '/psl-live', label: '📺 Live Streaming Guide' },
              { href: '/live-score', label: '🔴 PSL 2026 Live Score' },
              { href: '/quetta-gladiators-vs-hyderabad-kingsmen', label: '⚔️ Quetta vs Hyderabad Preview' },
              { href: '/hbl-psl-2026', label: 'ℹ️ HBL PSL 2026 Overview' },
              { href: '/news', label: '📰 All PSL 2026 News' },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '0.85rem 1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  backgroundColor: 'white',
                  textDecoration: 'none',
                  color: '#0A3258',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                }}
                className="team-card"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
