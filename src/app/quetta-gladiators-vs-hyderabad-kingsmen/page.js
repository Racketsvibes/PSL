import Link from 'next/link';

export const metadata = {
  title: 'Quetta Gladiators vs Hyderabad Kingsmen | PSL 2026 Match 5 Preview',
  description: 'Full preview of Quetta Gladiators vs Hyderabad Kingsmen, Match 5 of HBL PSL 11 (2026) on March 29, 2026 at Gaddafi Stadium, Lahore. Key players, squads, and live streaming guide.',
  keywords: 'quetta gladiators vs hyderabad kingsmen, psl 2026 match 5, march 29 psl match, psl live today, gaddafi stadium lahore',
};

export default function QuettaVsHyderabadPage() {
  const matchSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Quetta Gladiators vs Hyderabad Kingsmen – PSL 2026 Match 5",
    "startDate": "2026-03-29T09:30:00Z",
    "endDate": "2026-03-29T14:00:00Z",
    "location": {
      "@type": "Place",
      "name": "Gaddafi Stadium",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressCountry": "PK"
      }
    },
    "competitor": [
      { "@type": "SportsTeam", "name": "Quetta Gladiators" },
      { "@type": "SportsTeam", "name": "Hyderabad Kingsmen" }
    ],
    "sport": "Cricket",
    "description": "Match 5 of HBL PSL 11 (2026). Quetta Gladiators take on Hyderabad Kingsmen at Gaddafi Stadium, Lahore on March 29, 2026."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is Quetta Gladiators vs Hyderabad Kingsmen PSL 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The match is on Sunday, March 29, 2026 at 2:30 PM PKT (9:30 AM GMT) at Gaddafi Stadium, Lahore."
        }
      },
      {
        "@type": "Question",
        "name": "Where to watch Quetta vs Hyderabad PSL live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can watch the match live on Tamasha (free in Pakistan), Tapmad (premium), A Sports, and Geo Super on TV."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the captain of Hyderabad Kingsmen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marnus Labuschagne is the captain of Hyderabad Kingsmen in PSL 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the captain of Quetta Gladiators in PSL 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saud Shakeel captains the Quetta Gladiators in PSL 11 (2026)."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(matchSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #1a0533 0%, #0A3258 50%, #008A37 100%)',
        color: 'white',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ color: '#c7fa3b', fontWeight: '700', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            HBL PSL 11 · Match 5 · March 29, 2026
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2', color: 'white', marginBottom: '1rem' }}>
            Quetta Gladiators<br />
            <span style={{ color: '#c7fa3b' }}>vs</span><br />
            Hyderabad Kingsmen
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '2rem' }}>
            🏟️ Gaddafi Stadium, Lahore &nbsp;|&nbsp; 🕑 2:30 PM PKT (9:30 AM GMT) &nbsp;|&nbsp; 🏏 T20
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: 'bold' }}>
              📺 Watch Live
            </Link>
            <Link href="/psl-11-2026-schedule" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
              📅 Full Schedule
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>

        {/* Match Details Card */}
        <section style={{ backgroundColor: '#eff6ff', padding: '2rem', borderRadius: '0.75rem', borderLeft: '4px solid #3b82f6', marginBottom: '3rem' }}>
          <h2 style={{ color: '#1d4ed8', marginTop: 0 }}>📍 Match Details</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '1.05rem' }}>
            <li>📅 <strong>Date:</strong> Sunday, March 29, 2026</li>
            <li>🕑 <strong>Time:</strong> 2:30 PM PKT — 9:30 AM GMT</li>
            <li>🏟️ <strong>Venue:</strong> <Link href="/gaddafi-stadium-psl-schedule">Gaddafi Stadium, Lahore</Link></li>
            <li>🏏 <strong>Format:</strong> T20 · <Link href="/psl-11-2026-schedule">HBL PSL 11 — Match 5 of 44</Link></li>
            <li>📺 <strong>Live on:</strong> Tamasha, Tapmad, A Sports, Geo Super</li>
          </ul>
        </section>

        {/* Intro Article */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>Preview: Gladiators Look to Rebound After Karachi Kings Defeat</h2>
          <p>
            The <strong>Quetta Gladiators</strong> return to action at <Link href="/gaddafi-stadium-psl-schedule">Gaddafi Stadium</Link> looking to bounce back after suffering a 14-run defeat to the Karachi Kings on March 27, 2026. Meanwhile, the newly-formed <strong>Hyderabad Kingsmen</strong> — one of two expansion franchises in <Link href="/hbl-psl-2026">HBL PSL 11 (2026)</Link> — are desperate to claim their maiden victory after being heavily beaten by the Lahore Qalandars by 69 runs in their opening match on March 26.
          </p>
          <p>
            This afternoon encounter offers both sides an urgent opportunity to get their campaign back on track. For Quetta, the baggage of back-to-back losses would be a severe psychological setback, while for Hyderabad — a franchise still finding its feet in <Link href="/hbl-psl-2026">Pakistan's elite T20 competition</Link> — a win here could completely transform the mood of their squad and fan base.
          </p>
          <p>
            This match is also strategically significant in the context of the <Link href="/points-table">PSL 2026 Points Table</Link>. With the league phase being condensed and highly competitive, every single point is already critical at this early stage of the tournament. That ruthless edge, combined with the talent on display from both sides, makes this the most eagerly anticipated afternoon match of the tournament so far.
          </p>
        </article>

        {/* Recent Form */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>📊 Recent Form (PSL 2026)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ backgroundColor: '#1a0533', color: 'white', padding: '2rem', borderRadius: '0.75rem', borderTop: '4px solid #c41e3a' }}>
              <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.3rem' }}>🦅 Quetta Gladiators</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ background: '#c41e3a', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontWeight: 'bold', fontSize: '0.85rem' }}>L</span>
                <span style={{ color: '#d1d5db' }}>Lost vs Karachi Kings by <strong style={{ color: 'white' }}>14 runs</strong></span>
              </div>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.95rem' }}>
                Despite strong batting performances from Hasan Nawaz and Rilee Rossouw, Quetta's bowling attack was unable to restrict a resurgent Karachi Kings lineup in their PSL 2026 opener on March 27.
              </p>
              <Link href="/quetta-gladiators-squad" style={{ color: '#c7fa3b', display: 'inline-block', marginTop: '1rem', fontWeight: '600' }}>
                View Full Squad →
              </Link>
            </div>
            <div style={{ backgroundColor: '#0c2340', color: 'white', padding: '2rem', borderRadius: '0.75rem', borderTop: '4px solid #f59e0b' }}>
              <h3 style={{ color: '#fff', marginTop: 0, fontSize: '1.3rem' }}>👑 Hyderabad Kingsmen</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ background: '#c41e3a', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontWeight: 'bold', fontSize: '0.85rem' }}>L</span>
                <span style={{ color: '#d1d5db' }}>Lost vs Lahore Qalandars by <strong style={{ color: 'white' }}>69 runs</strong></span>
              </div>
              <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.95rem' }}>
                A heavy opening-match defeat against the title-favourite <Link href="/lahore-qalandars-squad" style={{ color: '#c7fa3b' }}>Lahore Qalandars</Link> on March 26 leaves Hyderabad already under significant pressure to show what their squad is truly capable of in PSL 11.
              </p>
              <Link href="/hyderabad-kingsmen-squad" style={{ color: '#c7fa3b', display: 'inline-block', marginTop: '1rem', fontWeight: '600' }}>
                View Full Squad →
              </Link>
            </div>
          </div>
        </section>

        {/* Key Players */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>⭐ Key Players to Watch</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>These players could be the difference-makers in this crucial afternoon clash at Gaddafi Stadium.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <thead>
                <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Team</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Player</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Role</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Recent Stats / Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { team: '🦅 Quetta Gladiators', player: 'Hasan Nawaz', role: 'Batter', stat: '357 runs in last 10 matches | Avg: 71.40 | SR: 169.19', highlight: true },
                  { team: '🦅 Quetta Gladiators', player: 'Rilee Rossouw', role: 'Batter', stat: '207 runs in last 9 matches | SR: 168.29 — explosive opener', highlight: true },
                  { team: '🦅 Quetta Gladiators', player: 'Saud Shakeel (c)', role: 'Batter / Captain', stat: 'Experienced Pakistan Test captain anchoring Quetta's middle-order', highlight: true },
                  { team: '👑 Hyderabad Kingsmen', player: 'Marnus Labuschagne (c)', role: 'Top-Order Batter', stat: 'Scored 26 runs in opening match — needs a big knock today', highlight: false },
                  { team: '👑 Hyderabad Kingsmen', player: 'Saim Ayub', role: 'All-Rounder', stat: 'High score of 121 in recent pre-season warm-ups — devastating in full flow', highlight: false },
                  { team: '👑 Hyderabad Kingsmen', player: 'Glenn Maxwell', role: 'All-Rounder', stat: 'World-class big-hitter who can change a match in a single over', highlight: false },
                ].map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f9fafb' : 'white', borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '600', color: '#0A3258', fontSize: '0.9rem' }}>{row.team}</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: '700' }}>{row.player}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#008A37', fontWeight: '600' }}>{row.role}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#4b5563', fontSize: '0.9rem' }}>{row.stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Team Squads */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🏏 Team Squads — PSL 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: 'white' }}>
              <h3 style={{ color: '#0A3258', marginTop: 0, borderBottom: '2px solid #0A3258', paddingBottom: '0.5rem' }}>🦅 Quetta Gladiators</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
                <li><strong>Saud Shakeel</strong> (Captain)</li>
                <li>Rilee Rossouw</li>
                <li>Hasan Nawaz</li>
                <li>Bismillah Khan (wk)</li>
                <li>Tom Curran</li>
                <li>Abrar Ahmed</li>
              </ul>
              <Link href="/quetta-gladiators-squad" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>Full Squad</Link>
            </div>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: 'white' }}>
              <h3 style={{ color: '#f59e0b', marginTop: 0, borderBottom: '2px solid #f59e0b', paddingBottom: '0.5rem' }}>👑 Hyderabad Kingsmen</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
                <li><strong>Marnus Labuschagne</strong> (Captain)</li>
                <li>Saim Ayub</li>
                <li>Glenn Maxwell</li>
                <li>Kusal Perera (wk)</li>
                <li>Riley Meredith</li>
                <li>Mohammad Ali</li>
              </ul>
              <Link href="/hyderabad-kingsmen-squad" className="btn" style={{ marginTop: '1rem', display: 'inline-block', backgroundColor: '#f59e0b' }}>Full Squad</Link>
            </div>
          </div>
        </section>

        {/* Where to Watch */}
        <section style={{ backgroundColor: '#111827', color: 'white', padding: '2.5rem', borderRadius: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#c7fa3b', marginTop: 0 }}>📺 Where to Watch Live</h2>
          <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
            Don't miss a single ball of this crucial March 29 showdown. Here's where you can tune in:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { platform: 'Tamasha', detail: 'Free · In Pakistan', badge: 'FREE' },
              { platform: 'Tapmad', detail: 'Premium Subscription', badge: 'PAID' },
              { platform: 'A Sports', detail: 'Cable TV · Pakistan', badge: 'TV' },
              { platform: 'Geo Super', detail: 'Cable TV · Pakistan', badge: 'TV' },
              { platform: 'Willow TV', detail: 'International Streaming', badge: 'INT\'L' },
            ].map((p, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.07)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '0.7rem', backgroundColor: '#008A37', color: 'white', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', fontWeight: '700', letterSpacing: '0.5px' }}>{p.badge}</span>
                <p style={{ fontWeight: '700', fontSize: '1.1rem', margin: '0.5rem 0 0.2rem' }}>{p.platform}</p>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
          <Link href="/psl-live" style={{ color: '#c7fa3b', fontWeight: '700', display: 'inline-block', marginTop: '1.5rem' }}>
            → Full Streaming Guide for PSL 2026
          </Link>
        </section>

        {/* Future Meetings */}
        <section style={{ backgroundColor: '#eff6ff', padding: '2rem', borderRadius: '0.75rem', borderLeft: '4px solid #3b82f6', marginBottom: '3rem' }}>
          <h2 style={{ color: '#1d4ed8', marginTop: 0 }}>📆 Future Meetings</h2>
          <p>
            This is not the only time these two franchises will meet in <Link href="/psl-11-2026-schedule">PSL 2026</Link>. A second league-stage clash between Quetta Gladiators and Hyderabad Kingsmen is scheduled for <strong>April 19, 2026</strong>, this time at the <Link href="/national-bank-stadium-karachi-psl-matches">National Bank Stadium in Karachi</Link>. The outcome of today's match could significantly shape the strategic importance of that reverse fixture.
          </p>
        </section>

        {/* FAQs */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>❓ Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {[
              { q: 'When is Quetta Gladiators vs Hyderabad Kingsmen?', a: 'The match is on Sunday, March 29, 2026 at 2:30 PM PKT at Gaddafi Stadium, Lahore.' },
              { q: 'Where to watch Quetta vs Hyderabad live?', a: 'Watch live on Tamasha (free), Tapmad (paid), A Sports, and Geo Super on TV. International fans can stream on Willow TV.' },
              { q: 'What is the head-to-head record between Quetta and Hyderabad?', a: 'As a newly formed expansion franchise in PSL 2026, Hyderabad Kingsmen have no prior head-to-head record against Quetta Gladiators. This is their inaugural meeting.' },
              { q: 'Who will win Quetta vs Hyderabad today?', a: 'Quetta Gladiators are considered slight favourites given their experience, but Hyderabad's explosive batting lineup featuring Glenn Maxwell and Saim Ayub could surprise. Check our live score page for ball-by-ball updates.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem 1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#f9fafb' }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: '#0A3258' }}>{item.q}</h3>
                <p style={{ margin: 0, color: '#4b5563' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem', marginBottom: '2rem' }}>
          <h2>🔗 Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {[
              { href: '/quetta-gladiators-squad', label: '🦅 Quetta Gladiators Full Squad' },
              { href: '/hyderabad-kingsmen-squad', label: '👑 Hyderabad Kingsmen Full Squad' },
              { href: '/psl-11-2026-schedule', label: '📅 Full PSL 2026 Schedule' },
              { href: '/points-table', label: '🏆 PSL 2026 Points Table' },
              { href: '/gaddafi-stadium-psl-schedule', label: '🏟️ Gaddafi Stadium PSL Matches' },
              { href: '/psl-live', label: '📺 Live Streaming Guide' },
              { href: '/multan-sultans-vs-islamabad-united', label: '⚔️ Multan vs Islamabad Preview' },
              { href: '/hbl-psl-2026', label: 'ℹ️ HBL PSL 2026 Overview' },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} style={{
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
