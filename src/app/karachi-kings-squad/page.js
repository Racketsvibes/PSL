import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Karachi Kings Squad PSL 11 (2026) | Official Players List & Captain',
  description: 'Official Karachi Kings squad for PSL 2026. David Warner leads the Kings with star players like Moeen Ali, Adam Zampa, and Hasan Ali. Full player analysis and roster.',
  keywords: 'karachi kings squad 2026, kk psl 11 players, david warner karachi kings, psl 11 squads, karachi kings captain 2026',
};

const squad = {
  platinum: [
    { name: 'David Warner', role: 'Batter', variety: 'Left-handed', country: 'Australia', status: 'Captain', img: '/Karachi_Kings.png' },
    { name: 'Moeen Ali', role: 'All-Rounder', variety: 'Off-spin', country: 'England', status: 'Overseas' },
  ],
  diamond: [
    { name: 'Adam Zampa', role: 'Bowler', variety: 'Leg-spin', country: 'Australia', status: 'Overseas' },
    { name: 'Reeza Hendricks', role: 'Batter', variety: 'Right-handed', country: 'South Africa', status: 'Overseas' },
    { name: 'Hasan Ali', role: 'Bowler', variety: 'Right-arm Fast', country: 'Pakistan', status: 'Local' },
    { name: 'Azam Khan', role: 'Wicketkeeper', variety: 'Power Hitter', country: 'Pakistan', status: 'Local' },
  ],
  gold: [
    { name: 'Salman Ali Agha', role: 'All-Rounder', variety: 'Off-spin', country: 'Pakistan', status: 'Local' },
    { name: 'Khushdil Shah', role: 'All-Rounder', variety: 'Left-arm Spin', country: 'Pakistan', status: 'Local' },
    { name: 'Mir Hamza', role: 'Bowler', variety: 'Left-arm Fast', country: 'Pakistan', status: 'Local' },
  ],
  silver: [
    { name: 'Mohammad Abbas Afridi', role: 'Bowler', variety: 'Right-arm Medium', country: 'Pakistan', status: 'Local' },
    { name: 'Muhammad Waseem', role: 'Batter', variety: 'Opener', country: 'Pakistan', status: 'Local' },
    { name: 'Haroon Arshad', role: 'All-Rounder', variety: 'Medium-Fast', country: 'Pakistan', status: 'Local' },
    { name: 'Shahid Aziz', role: 'Bowler', variety: 'Spin', country: 'Pakistan', status: 'Local' },
    { name: 'Ihsanullah', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Local' },
  ],
  emerging: [
    { name: 'Saad Baig', role: 'Wicketkeeper', variety: 'Top-order', country: 'Pakistan', status: 'Local' },
    { name: 'Rizwanullah', role: 'Batter', variety: 'Aggressive', country: 'Pakistan', status: 'Local' },
    { name: 'Mohammad Hamza Sohail', role: 'All-Rounder', variety: 'Spin', country: 'Pakistan', status: 'Local' },
  ],
  supplementary: [
    { name: 'Aqib Ilyas', role: 'Batter', variety: 'Solid', country: 'Oman/Overseas', status: 'Overseas' },
    { name: 'Khuzaima Bin Tanveer', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Local' },
  ]
};

export default function KarachiSquadPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Karachi Kings',
    sport: 'Cricket',
    coach: { '@type': 'Person', name: 'Ravi Bopara' },
    homeLocation: { '@type': 'Place', name: 'National Bank Stadium, Karachi' },
    member: Object.values(squad).flat().map(p => ({
      '@type': 'OrganizationRole',
      member: { '@type': 'Person', name: p.name },
      roleName: p.role
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://psllive.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Karachi Kings Squad", "item": "https://psllive.vercel.app/karachi-kings-squad" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001f3f 0%, #004080 50%, #C8102E 100%)',
        color: 'white',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(200,16,46,0.15) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <Image src="/Karachi_Kings.png" alt="Karachi Kings Official Logo" width={140} height={140} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))' }} priority />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Karachi Kings <span style={{ color: '#FDB913' }}>Squad 2026</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '2rem', fontWeight: '500' }}>
            Official Roster for HBL PSL 11 — Led by David Warner
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              🏟️ Venue: National Bank Stadium
            </span>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              👤 Coach: Ravi Bopara
            </span>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
        
        {/* ── Team Intro ── */}
        <section style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '1rem',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#001f3f', marginTop: 0, fontSize: '1.75rem' }}>👑 Rebuilding the Kingdom</h2>
          <div style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              The Karachi Kings enter PSL 2026 with a bold new vision. Moving away from past domestic frustrations, the franchise has anchored its future on the aggressive leadership of Australian legend <strong>David Warner</strong>. Supported by the versatile <strong>Moeen Ali</strong> and world-class spinner <strong>Adam Zampa</strong>, the Kings have built a squad that prioritizes experience and clinical execution.
            </p>
            <p>
              With <strong>Hasan Ali</strong> leading the local pace attack and <strong>Azam Khan</strong> providing legendary power in the middle order, Karachi fans are optimistic about a deep playoff run. The team returns to the National Bank Stadium, aiming to turn their home ground into an impenetrable fortress once again.
            </p>
          </div>
        </section>

        {/* ── Squad Breakdown ── */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '3rem', color: '#0f172a' }}>Official Player Roster — PSL 11</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Category: Platinum & Diamond */}
            <div>
              <h3 style={{ borderLeft: '4px solid #FDB913', paddingLeft: '1rem', color: '#1e293b', marginBottom: '1.5rem' }}>🌟 Platinum & Diamond Core</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {[...squad.platinum, ...squad.diamond].map((player, i) => (
                  <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: player.status === 'Captain' ? '#C8102E' : '#0f172a', color: 'white', padding: '0.2rem 0.8rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '0 0 0 0.75rem' }}>
                      {player.status}
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: '#0f172a' }}>{player.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>{player.role} · {player.variety}</p>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>🗺️ {player.country}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Gold & Silver */}
            <div>
              <h3 style={{ borderLeft: '4px solid #64748b', paddingLeft: '1rem', color: '#1e293b', marginBottom: '1.5rem' }}>⚡ Gold & Silver Depth</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '0.75rem', overflow: 'hidden' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
                      <th style={{ padding: '1rem' }}>Player</th>
                      <th style={{ padding: '1rem' }}>Role</th>
                      <th style={{ padding: '1rem' }}>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...squad.gold, ...squad.silver].map((player, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1rem', fontWeight: '600' }}>{player.name}</td>
                        <td style={{ padding: '1rem', color: '#64748b' }}>{player.role} ({player.variety})</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ backgroundColor: squad.gold.includes(player) ? '#fef3c7' : '#f1f5f9', color: squad.gold.includes(player) ? '#92400e' : '#475569', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '700' }}>
                            {squad.gold.includes(player) ? 'GOLD' : 'SILVER'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category: Emerging & Supp */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ backgroundColor: '#fff7ed', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #ffedd5' }}>
                <h3 style={{ color: '#9a3412', marginTop: 0, fontSize: '1.1rem' }}>🌱 Emerging Talent</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.emerging.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#431407' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: '#f0fdfa', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #ccfbf1' }}>
                <h3 style={{ color: '#0f766e', marginTop: 0, fontSize: '1.1rem' }}>🧩 Supplementary</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.supplementary.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#134e4a' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Internal Links & Quick Indexing ── */}
        <section style={{ backgroundColor: '#0f172a', padding: '4rem 2rem', borderRadius: '1.5rem', color: 'white', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ color: '#FDB913', marginTop: 0 }}>Discover PSL 11 (2026)</h2>
             <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0.5rem auto' }}>Explore other team squads, match schedules, and official tournament updates.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {/* Column 1: Team Squads */}
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FDB913', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Other Team Squads</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/lahore-qalandars-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore Qalandars Squad</Link></li>
                <li><Link href="/quetta-gladiators-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Quetta Gladiators Squad</Link></li>
                <li><Link href="/islamabad-united-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Islamabad United Squad</Link></li>
                <li><Link href="/multan-sultans-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Multan Sultans Squad</Link></li>
                <li><Link href="/peshawar-zalmi-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Peshawar Zalmi Squad</Link></li>
                <li><Link href="/rawalpindi-pindiz-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Rawalpindi Pindiz Squad</Link></li>
                <li><Link href="/hyderabad-kingsmen-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Hyderabad Kingsmen Squad</Link></li>
              </ul>
            </div>

            {/* Column 2: Key Guides */}
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FDB913', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Official Guides</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/psl-11-2026-schedule" style={{ color: '#e2e8f0', textDecoration: 'none' }}>PSL 2026 Timetable</Link></li>
                <li><Link href="/live-score" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Live Ball-by-Ball Score</Link></li>
                <li><Link href="/points-table" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Latest Points Standings</Link></li>
                <li><Link href="/psl-live" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Streaming Channels Information</Link></li>
                <li><Link href="/lahore-qalandars-vs-karachi-kings" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore vs Karachi Match Preview</Link></li>
              </ul>
            </div>

            {/* Column 3: News & Policy */}
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FDB913', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tournament News</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/why-no-crowd-in-psl-2026" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Official No-Crowd Statement</Link></li>
                <li><Link href="/psl-11-behind-closed-doors-reason" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Closed Doors Logistics</Link></li>
                <li><Link href="/psl-2026-venue-changes" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Venue Shift Analysis</Link></li>
                <li><Link href="/psl-11-refund-policy" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Draft Ticket Refund Policy</Link></li>
                <li><Link href="/gaddafi-stadium-psl-schedule" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore Matches Venue Guide</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the captain of Karachi Kings in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>Australian Test legend David Warner has been appointed as the official captain for Karachi Kings in PSL 11 (2026).</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is coaching Karachi Kings in PSL 11?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>Former England all-rounder Ravi Bopara is the head coach for Karachi Kings in the 2026 season.</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>What is the home ground for Karachi Kings?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The National Bank Stadium (formerly National Stadium) in Karachi serves as the official home ground for the franchise.</p>
             </details>
          </div>
        </section>

      </div>
    </>
  );
}
