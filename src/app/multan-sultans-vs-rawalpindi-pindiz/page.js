import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Multan Sultans vs Rawalpindi Pindiz | PSL 2026 Match 14 Preview – April 6',
  description:
    'Full preview of Multan Sultans vs Rawalpindi Pindustan, Match 14 of HBL PSL 11 (2026) on Monday, April 6, 2026 at 7:00 PM PKT at Gaddafi Stadium. Head-to-head, next match details, squads, and live streaming.',
  keywords:
    'multan sultans vs rawalpindi pindiz, ms vs rp psl 2026, match 14 psl 2026, psl live today, gaddafi stadium lahore, rawalpindi pindiz vs multan sultans, psl expansion team match',
  openGraph: {
    title: 'Multan Sultans vs Rawalpindi Pindiz – PSL 2026 Match 14 | April 6',
    description:
      'The League Leaders vs The New Force. Match 14 of HBL PSL 11 at Gaddafi Stadium on April 6, 2026 at 7:00 PM PKT.',
    type: 'article',
    publishedTime: '2026-04-05T17:00:00Z',
  },
};

export default function MultanVsPindizPage() {
  const matchSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'Multan Sultans vs Rawalpindi Pindiz – PSL 2026 Match 14',
    startDate: '2026-04-06T14:00:00Z',
    endDate: '2026-04-06T18:30:00Z',
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
      { '@type': 'SportsTeam', name: 'Multan Sultans' },
      { '@type': 'SportsTeam', name: 'Rawalpindi Pindustan' },
    ],
    sport: 'Cricket',
    description:
      'Match 14 of HBL PSL 11 (2026). Multan Sultans face the expansion team Rawalpindi Pindiz at Gaddafi Stadium, Lahore on April 6, 2026.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is Multan Sultans vs Rawalpindi Pindiz PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The match is on Monday, April 6, 2026 at 7:00 PM PKT (2:00 PM UTC) at Gaddafi Stadium, Lahore.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the captain of Rawalpindi Pindiz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The legendary Mohammad Rizwan captains the Rawalpindi Pindustan franchise in PSL 11 (2026).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this the first time Multan Sultans and Rawalpindi Pindiz meet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this is the first historical meeting between the established Multan Sultans and the PSL 11 expansion franchise, Rawalpindi Pindiz.',
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
          background: 'linear-gradient(135deg, #001f3f 0%, #171D3A 45%, #E0115F 100%)',
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
              'radial-gradient(circle at 10% 90%, rgba(199,250,59,0.2) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(224,17,95,0.2) 0%, transparent 50%)',
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
            HBL PSL 11 · Match 14 of 44 · Monday, April 6, 2026
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
              <Image src="/MultanSultans.png" alt="MS Logo" width={90} height={90} style={{ objectFit: 'contain' }} />
              <p style={{ color: 'white', fontWeight: '800', fontSize: '1.1rem', marginTop: '0.5rem' }}>Multan Sultans</p>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#c7fa3b' }}>VS</div>
            <div style={{ textAlign: 'center' }}>
               <div style={{ width: '100px', height: '100px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>🏙️</div>
               <p style={{ color: 'white', fontWeight: '800', fontSize: '1.1rem', marginTop: '1rem' }}>Rawalpindi Pindustan</p>
            </div>
          </div>

          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'white', marginBottom: '1rem', lineHeight: '1.2' }}>
            Multan Sultans vs Rawalpindi Pindiz Preview
          </h1>

          <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '2rem' }}>
             🏟️ Gaddafi Stadium, Lahore &nbsp;|&nbsp; 🕑 7:00 PM PKT &nbsp;|&nbsp; 🏏 The Battle of Speed & Strategy
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#001f3f', fontWeight: 'bold' }}>📺 Watch Live</Link>
            <Link href="/live-score" className="btn" style={{ backgroundColor: '#E0115F', color: 'white', fontWeight: 'bold' }}>🔴 Live Score</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>
        
        {/* ── Match Info Table ── */}
        <section style={{ backgroundColor: '#eff6ff', padding: '2rem', borderRadius: '1rem', border: '1px solid #dbeafe', marginBottom: '3rem' }}>
          <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>📍 Match & Venue Information</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '550px' }}>
              <tbody>
                {[
                  ['Match', 'Match 14 — Multan Sultans vs Rawalpindi Pindustan'],
                  ['Date', 'Monday, April 6, 2026'],
                  ['Time', '7:00 PM PKT | 2:00 PM GMT'],
                  ['Venue', 'Gaddafi Stadium, Lahore'],
                  ['Pitch Analysis', 'Evening Match · Dewey Conditions · Batters Paradise'],
                  ['Impact Players', 'Ashton Turner vs Mohammad Rizwan'],
                  ['Broadcast', 'Tamasha, Tapmad, A Sports, Geo Super'],
                  ['Historical Meeting', '1st Ever Match Between the Two Teams'],
                ].map(([label, value], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #dbeafe', backgroundColor: idx % 2 === 0 ? '#f0f7ff' : '#ffffff' }}>
                    <td style={{ padding: '1rem', fontWeight: '700', color: '#1e40af', width: '35%' }}>{label}</td>
                    <td style={{ padding: '1rem', color: '#1f2937' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Storyline ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2>Battle of the Captains — Turner's Tactics vs Rizwan's Resilience</h2>
          <p>
            When <strong>Multan Sultans</strong> and <strong>Rawalpindi Pindustan</strong> clash on the evening of April 6, 2026, it won't just be about the points. It's the first encounter between one of the PSL's most successful franchises and the bold new expansion team that has already made headlines with its record-breaking signings.
          </p>
          <p>
            <strong>Multan Sultans</strong> arrive as the finished product — a team that knows how to win under pressure and exploit the smallest mistakes. Their middle order, featuring Ashton Turner and Steve Smith, is designed to rebuild or accelerate as needed.
          </p>
          <p>
            <strong>Rawalpindi Pindustan (Pindiz)</strong>, led by the former Multan captain <strong>Mohammad Rizwan</strong>, will be looking to prove a point. With the ferocious pace of <strong>Naseem Shah</strong> and the experience of <strong>Mohammad Amir</strong>, they possess a bowling attack capable of rattling even the calmest batters.
          </p>
        </article>

        {/* ── Next Match Flow ── */}
        <section style={{ backgroundColor: '#0f172a', color: 'white', padding: '2.5rem', borderRadius: '1rem', marginBottom: '3rem' }}>
           <h2 style={{ color: '#E0115F', marginTop: 0 }}>⏭️ Next Match Details & Impact</h2>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                 <h4 style={{ color: '#c7fa3b', marginBottom: '0.5rem' }}>Standings Impact</h4>
                 <p style={{ margin: 0, fontSize: '0.9rem' }}>A win for Pindiz would catapult them into the top 4, while a Sultans victory could essentially guarantee their place in the playoffs even before the second half of the league phase.</p>
              </div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                 <h4 style={{ color: '#c7fa3b', marginBottom: '0.5rem' }}>Upcoming Fixtures</h4>
                 <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Multan Sultans ⏭️</strong> vs Peshawar Zalmi (April 11).<br /><strong>Rawalpindi Pindiz ⏭️</strong> vs Karachi Kings (April 9).</p>
              </div>
           </div>
        </section>

        {/* ── Key Tactical Face-Offs ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>⚔️ Tactical Match-ups to Watch</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
               <thead>
                  <tr style={{ backgroundColor: '#171D3A', color: 'white' }}>
                     <th style={{ padding: '0.75rem', textAlign: 'left' }}>The Battle</th>
                     <th style={{ padding: '0.75rem', textAlign: 'left' }}>Why It Matters</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td style={{ padding: '1rem', fontWeight: '700' }}>Ashton Turner vs Mohammad Amir</td>
                     <td style={{ padding: '1rem', color: '#4b5563' }}>Amir's ability to swing the ball early vs Turner's aggressive middle-order play.</td>
                  </tr>
                  <tr>
                     <td style={{ padding: '1rem', fontWeight: '700' }}>Steve Smith vs Naseem Shah</td>
                     <td style={{ padding: '1rem', color: '#4b5563' }}>The ultimate test of precision. Smith's unorthodox technique vs Naseem's raw 150kph+ speed.</td>
                  </tr>
                  <tr>
                     <td style={{ padding: '1rem', fontWeight: '700' }}>Mohammad Rizwan vs Tabraiz Shamsi</td>
                     <td style={{ padding: '1rem', color: '#4b5563' }}>Rizwan is a master of spin, but Shamsi's mystery left-arm chinaman has troubled him in the past.</td>
                  </tr>
               </tbody>
            </table>
          </div>
        </section>

        {/* ── Predicted Playing XIs ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🏏 Predicted Playing XIs — PSL 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', background: '#f8fafc' }}>
              <h3 style={{ color: '#001f3f', borderBottom: '2px solid #c7fa3b', paddingBottom: '0.5rem' }}>Multan Sultans</h3>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                <li>Ashton Turner (c)</li>
                <li>Shan Masood</li>
                <li>Steve Smith</li>
                <li>David Miller</li>
                <li>Mohammad Nawaz</li>
                <li>Josh Philippe (wk)</li>
                <li>Usama Mir</li>
                <li>Mohammad Ali</li>
              </ul>
            </div>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', background: '#fff1f2' }}>
              <h3 style={{ color: '#171D3A', borderBottom: '2px solid #E0115F', paddingBottom: '0.5rem' }}>Rawalpindi Pindustan</h3>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                <li>Mohammad Rizwan (c/wk)</li>
                <li>Daryl Mitchell</li>
                <li>James Vince</li>
                <li>Kamran Ghulam</li>
                <li>Naseem Shah</li>
                <li>Mohammad Amir</li>
                <li>Fazalhaq Farooqi</li>
                <li>Asif Ali</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
