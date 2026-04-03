import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Quetta Gladiators vs Multan Sultans | PSL 2026 Match 13 Preview – April 5',
  description:
    'Detailed preview of Quetta Gladiators vs Multan Sultans, Match 13 of HBL PSL 11 (2026) on Sunday, April 5, 2026 at 7:00 PM PKT. Venue guide, next match details, squads, and live streaming.',
  keywords:
    'quetta gladiators vs multan sultans, qg vs ms psl 2026, match 13 psl 2026, psl live today, gaddafi stadium lahore, multan sultans vs quetta gladiators, psl match preview',
  openGraph: {
    title: 'Quetta Gladiators vs Multan Sultans – PSL 2026 Match 13 | April 5',
    description:
      'The Purple Force takes on the unbeaten Sultans. Match 13 of HBL PSL 11 at Gaddafi Stadium on April 5, 2026 at 7:00 PM PKT.',
    type: 'article',
    publishedTime: '2026-04-04T17:00:00Z',
  },
};

export default function QuettaVsMultanPage() {
  const matchSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'Quetta Gladiators vs Multan Sultans – PSL 2026 Match 13',
    startDate: '2026-04-05T14:00:00Z',
    endDate: '2026-04-05T18:30:00Z',
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
      { '@type': 'SportsTeam', name: 'Quetta Gladiators' },
      { '@type': 'SportsTeam', name: 'Multan Sultans' },
    ],
    sport: 'Cricket',
    description:
      'Match 13 of HBL PSL 11 (2026). Quetta Gladiators face Multan Sultans at Gaddafi Stadium, Lahore on April 5, 2026. Detailed preview and venue analysis.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is Quetta Gladiators vs Multan Sultans PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The match is on Sunday, April 5, 2026 at 7:00 PM PKT (2:00 PM UTC) at Gaddafi Stadium, Lahore.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the record of Multan Sultans in PSL 11 so far?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multan Sultans are currently unbeaten in PSL 2026 with 3 consecutive wins, placing them at the top of the points table.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who are the captains for QG vs MS today?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Saud Shakeel captains Quetta Gladiators, while Ashton Turner leads Multan Sultans.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(matchSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero Banner ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a0533 0%, #301934 45%, #001f3f 100%)',
          color: 'white',
          padding: '4.5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(253,185,19,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(199,250,59,0.2) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ maxWidth: '950px', position: 'relative' }}>
          <p
            style={{
              color: '#FDB913',
              fontWeight: '700',
              letterSpacing: '2px',
              fontSize: '0.9rem',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
            }}
          >
            HBL PSL 11 · Match 13 of 44 · Sunday, April 5, 2026
          </p>

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
              <Image src="/Quetta_Gladiators.png" alt="QG Logo" width={90} height={90} style={{ objectFit: 'contain' }} />
              <p style={{ color: 'white', fontWeight: '800', fontSize: '1.1rem', marginTop: '0.5rem' }}>Quetta Gladiators</p>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FDB913' }}>VS</div>
            <div style={{ textAlign: 'center' }}>
              <Image src="/MultanSultans.png" alt="MS Logo" width={90} height={90} style={{ objectFit: 'contain' }} />
              <p style={{ color: 'white', fontWeight: '800', fontSize: '1.1rem', marginTop: '0.5rem' }}>Multan Sultans</p>
            </div>
          </div>

          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'white', marginBottom: '1rem', lineHeight: '1.2' }}>
            Quetta Gladiators vs Multan Sultans Preview
          </h1>

          <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '2rem' }}>
            🏟️ Gaddafi Stadium, Lahore &nbsp;|&nbsp; 🕑 7:00 PM PKT &nbsp;|&nbsp; 🏏 Tournament Blockbuster
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#FDB913', color: '#1a0533', fontWeight: 'bold' }}>📺 Watch Live</Link>
            <Link href="/live-score" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#001f3f', fontWeight: 'bold' }}>🔴 Live Score</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        
        {/* ── Match Info Table ── */}
        <section style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '1rem', border: '1px solid #e5e7eb', marginBottom: '3rem' }}>
          <h2 style={{ color: '#1a0533', marginTop: 0 }}>📍 Match & Venue Information</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '550px' }}>
              <tbody>
                {[
                  ['Match', 'Match 13 — Quetta Gladiators vs Multan Sultans'],
                  ['Date', 'Sunday, April 5, 2026'],
                  ['Time', '7:00 PM PKT | 2:00 PM GMT'],
                  ['Venue', 'Gaddafi Stadium, Lahore'],
                  ['Pitch Type', 'Batting Friendly · High Scoring'],
                  ['Avg 1st Innings', '182 Runs (Last 5 PSL Matches)'],
                  ['Captain (QG)', 'Saud Shakeel'],
                  ['Captain (MS)', 'Ashton Turner'],
                  ['Weather', 'Clear Sky · 28°C'],
                ].map(([label, value], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '700', color: '#301934', width: '35%' }}>{label}</td>
                    <td style={{ padding: '1rem', color: '#1f2937' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Detailed Venue Guide ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🏟️ Venue Guide: Gaddafi Stadium, Lahore</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
            <div style={{ backgroundColor: '#eff6ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #dbeafe' }}>
               <h3 style={{ marginTop: 0, color: '#1e40af' }}>Pitch Analysis</h3>
               <p style={{ fontSize: '0.95rem', color: '#1e3a8a', lineHeight: '1.6' }}>
                 The Gaddafi Stadium pitch has been a paradise for batters in PSL 2026. With short boundaries and a quick outfield, teams batting first will target a minimum of <strong>190+</strong>. Spinners might find grip as the match progresses, but the evening dew will make it difficult for bowlers to control the ball in the second innings.
               </p>
            </div>
            <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #dcfce7' }}>
               <h3 style={{ marginTop: 0, color: '#166534' }}>Historical Stats at Venue</h3>
               <ul style={{ fontSize: '0.9rem', color: '#14532d', lineHeight: '1.8' }}>
                 <li><strong>Highest PSL Score:</strong> 245/3 (Multan Sultans vs Quetta, 2025)</li>
                 <li><strong>Lowest Defended Score:</strong> 155/7</li>
                 <li><strong>Toss Factor:</strong> 65% of matches won by the team chasing.</li>
                 <li><strong>Recent Form:</strong> Lahore Qalandars won here by defending 188 on Apr 3.</li>
               </ul>
            </div>
          </div>
        </section>

        {/* ── Storyline ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2>The Sultans Unbeaten Streak vs The Purple Force's Desperation</h2>
          <p>
            As the <strong>PSL 2026</strong> enters its second week, the spotlight shifts back to Lahore for a high-intensity clash. <strong>Multan Sultans</strong> arrive as the most clinical side of the tournament, lead by the tactical Ashton Turner and the evergreen Steve Smith. Their 3-0 record is a testament to their balanced squad and "cool under pressure" approach.
          </p>
          <p>
            On the other hand, <strong>Quetta Gladiators</strong> find themselves in a mid-table scramble. Despite the individual brilliance of <strong>Saud Shakeel</strong> and the pace of <strong>Alzarri Joseph</strong>, the Gladiators have struggled to finish games. This Match 13 is pivotal for their campaign — a win against the league leaders would signal their title intent.
          </p>
        </article>

        {/* ── Next Match Context ── */}
        <section style={{ backgroundColor: '#111827', color: 'white', padding: '2.5rem', borderRadius: '1rem', marginBottom: '3rem' }}>
           <h2 style={{ color: '#FDB913', marginTop: 0 }}>⏭️ Next Match Details</h2>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                 <h4 style={{ color: '#c7fa3b', marginBottom: '0.5rem' }}>For Multan Sultans</h4>
                 <p style={{ margin: 0, fontSize: '0.9rem' }}>Multan face the expansion team <strong>Rawalpindi Pindustan</strong> on April 6 at Gaddafi Stadium. A win tonight would keep them comfortably at the top entering that clash.</p>
              </div>
              <div>
                 <h4 style={{ color: '#c7fa3b', marginBottom: '0.5rem' }}>For Quetta Gladiators</h4>
                 <p style={{ margin: 0, fontSize: '0.9rem' }}>Quetta has a short break before facing <strong>Peshawar Zalmi</strong> on April 8. They will be desperate to avoid a 1-3 start to the season.</p>
              </div>
           </div>
        </section>

        {/* ── Squads ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🏏 Predicted Playing XIs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
            <div style={{ border: '1px solid #d1d5db', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#301934', borderBottom: '2px solid #FDB913', paddingBottom: '0.5rem' }}>Quetta Gladiators</h3>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                <li>Saud Shakeel (c)</li>
                <li>Jason Roy</li>
                <li>Rilee Rossouw</li>
                <li>Sarfaraz Ahmed (wk)</li>
                <li>Mohammad Hasnain</li>
                <li>Abrar Ahmed</li>
                <li>Alzarri Joseph</li>
                <li>Khawaja Nafay</li>
              </ul>
            </div>
            <div style={{ border: '1px solid #d1d5db', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#001f3f', borderBottom: '2px solid #c7fa3b', paddingBottom: '0.5rem' }}>Multan Sultans</h3>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                <li>Ashton Turner (c)</li>
                <li>Shan Masood</li>
                <li>Steve Smith</li>
                <li>David Miller</li>
                <li>Iftikhar Ahmed</li>
                <li>Usama Mir</li>
                <li>Tabraiz Shamsi</li>
                <li>Mohammad Ali</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
