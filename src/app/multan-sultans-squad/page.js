import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Multan Sultans Squad PSL 11 (2026) | Official Players List & Captain',
  description: 'Official Multan Sultans squad for PSL 2026. Ashton Turner leads the Sultans with Shan Masood, Steve Smith, and Mohammad Nawaz. Full player roster.',
  keywords: 'multan sultans squad 2026, ms psl 11 players, ashton turner multan sultans, psl 11 squads, multan sultans captain 2026',
};

const squad = {
  platinum: [
    { name: 'Shan Masood', role: 'Batter', variety: 'Left-handed', country: 'Pakistan', status: 'Domestic', img: '/MultanSultans.png' },
    { name: 'Mohammad Nawaz', role: 'All-Rounder', variety: 'Left-arm Spin', country: 'Pakistan', status: 'Domestic' },
  ],
  diamond: [
    { name: 'Ashton Turner', role: 'Batter', variety: 'Right-handed', country: 'Australia', status: 'Captain' },
    { name: 'Steve Smith', role: 'Batter', variety: 'Right-handed', country: 'Australia', status: 'Overseas' },
    { name: 'Tabraiz Shamsi', role: 'Bowler', variety: 'Left-arm Chinaman', country: 'South Africa', status: 'Overseas' },
    { name: 'Usama Mir', role: 'Bowler', variety: 'Leg-spin', country: 'Pakistan', status: 'Domestic' },
  ],
  gold: [
    { name: 'Peter Siddle', role: 'Bowler', variety: 'Right-arm Fast', country: 'Australia', status: 'Overseas' },
    { name: 'Josh Philippe', role: 'Wicketkeeper', variety: 'Right-handed', country: 'Australia', status: 'Overseas' },
    { name: 'David Miller', role: 'Batter', variety: 'Power Hitter', country: 'South Africa', status: 'Overseas' },
    { name: 'Iftikhar Ahmed', role: 'All-Rounder', variety: 'Off-spin', country: 'Pakistan', status: 'Domestic' },
  ],
  silver: [
    { name: 'Tayyab Tahir', role: 'Batter', variety: 'Right-handed', country: 'Pakistan', status: 'Domestic' },
    { name: 'Mohammad Ali', role: 'Bowler', variety: 'Right-arm Fast', country: 'Pakistan', status: 'Domestic' },
    { name: 'Faisal Akram', role: 'Bowler', variety: 'Left-arm Spin', country: 'Pakistan', status: 'Domestic' },
    { name: 'Reeza Hendricks', role: 'Batter', variety: 'Right-handed', country: 'South Africa', status: 'Overseas' },
  ],
  emerging: [
    { name: 'Yasir Khan', role: 'Batter', variety: 'Power Hitter', country: 'Pakistan', status: 'Local' },
    { name: 'Aftab Ibrahim', role: 'All-Rounder', variety: 'Fast', country: 'Pakistan', status: 'Local' },
  ],
  supplementary: [
    { name: 'Chris Jordan', role: 'Bowler', variety: 'Death Specialist', country: 'England', status: 'Overseas' },
    { name: 'Aftab Alam', role: 'Bowler', variety: 'Fast', country: 'Afghanistan', status: 'Overseas' },
  ]
};

export default function MultanSultansSquadPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Multan Sultans',
    sport: 'Cricket',
    coach: { '@type': 'Person', name: 'Abdul Rehman' },
    homeLocation: { '@type': 'Place', name: 'Multan Cricket Stadium' },
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
      { "@type": "ListItem", "position": 2, "name": "Multan Sultans Squad", "item": "https://psllive.vercel.app/multan-sultans-squad" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001f3f 0%, #004d00 50%, #c7fa3b 100%)',
        color: 'white',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(199,250,59,0.1) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <Image src="/MultanSultans.png" alt="Multan Sultans Official Logo" width={140} height={140} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))' }} priority />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Multan Sultans <span style={{ color: '#c7fa3b' }}>Squad 2026</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '2rem', fontWeight: '500' }}>
            The Sultans Roster for HBL PSL 11 — Led by Ashton Turner
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              🏟️ Venue: Multan Cricket Stadium
            </span>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              👤 Coach: Abdul Rehman
            </span>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
        
        {/* ── Team Intro ── */}
        <section style={{
          backgroundColor: '#f1f5f9',
          border: '1px solid #e2e8f0',
          borderRadius: '1rem',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#0f172a', marginTop: 0, fontSize: '1.75rem' }}>🕌 The Sultans of the South</h2>
          <div style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              The <strong>Multan Sultans</strong> continue their journey in PSL 11 (2026) with a squad that emphasizes clinical efficiency and tactical flexibility. Transitioning to the captaincy of Australian middle-order powerhouse <strong>Ashton Turner</strong>, the Sultans have successfully integrated legendary experience with modern T20 dynamism.
            </p>
            <p>
              With the addition of Australian great <strong>Steve Smith</strong> and the retained brilliance of <strong>Shan Masood</strong> and <strong>Mohammad Nawaz</strong>, Multan's batting lineup is one of the most formidable in the tournament. Their bowling remains anchored by the mystery spin of <strong>Tabraiz Shamsi</strong> and the lethal pace of <strong>Mohammad Ali</strong>.
            </p>
          </div>
        </section>

        {/* ── Squad Breakdown ── */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '3rem', color: '#0f172a' }}>Official Player Roster — PSL 11</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Category: Platinum & Diamond Core */}
            <div>
              <h3 style={{ borderLeft: '4px solid #c7fa3b', paddingLeft: '1rem', color: '#1e293b', marginBottom: '1.5rem' }}>🌟 Platinum & Diamond Core</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {[...squad.platinum, ...squad.diamond].map((player, i) => (
                  <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: player.status === 'Captain' ? '#c7fa3b' : '#0f172a', color: player.status === 'Captain' ? '#0f172a' : 'white', padding: '0.2rem 0.8rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '0 0 0 0.75rem' }}>
                      {player.status}
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: '#0f172a' }}>{player.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>{player.role} · {player.variety}</p>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>🗺️ {player.country}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Gold & Silver depth */}
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
              <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #bae6fd' }}>
                <h3 style={{ color: '#0369a1', marginTop: 0, fontSize: '1.1rem' }}>🌱 Emerging Talent</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.emerging.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#0c4a6e' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #bbf7d0' }}>
                <h3 style={{ color: '#166534', marginTop: 0, fontSize: '1.1rem' }}>🧩 Supplementary</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.supplementary.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#14532d' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Quick Crawl Section ── */}
        <section style={{ backgroundColor: '#0f172a', padding: '4rem 2rem', borderRadius: '1.5rem', color: 'white', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ color: '#c7fa3b', marginTop: 0 }}>Discover PSL 11 (2026)</h2>
             <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0.5rem auto' }}>Explore other team squads, match schedules, and official tournament updates.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#c7fa3b', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Other Team Squads</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/lahore-qalandars-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore Qalandars Squad</Link></li>
                <li><Link href="/karachi-kings-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Karachi Kings Squad</Link></li>
                <li><Link href="/quetta-gladiators-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Quetta Gladiators Squad</Link></li>
                <li><Link href="/islamabad-united-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Islamabad United Squad</Link></li>
                <li><Link href="/peshawar-zalmi-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Peshawar Zalmi Squad</Link></li>
                <li><Link href="/rawalpindi-pindiz-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Rawalpindi Pindiz Squad</Link></li>
                <li><Link href="/hyderabad-kingsmen-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Hyderabad Kingsmen Squad</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#c7fa3b', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Official Guides</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/psl-11-2026-schedule" style={{ color: '#e2e8f0', textDecoration: 'none' }}>PSL 2026 Timetable</Link></li>
                <li><Link href="/live-score" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Live Ball-by-Ball Score</Link></li>
                <li><Link href="/points-table" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Latest Points Standings</Link></li>
                <li><Link href="/psl-live" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Streaming Channels Information</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#c7fa3b', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tournament News</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/why-no-crowd-in-psl-2026" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Official No-Crowd Statement</Link></li>
                <li><Link href="/psl-2026-venue-changes" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Venue Shift Analysis</Link></li>
                <li><Link href="/psl-11-refund-policy" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Draft Ticket Refund Policy</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the captain of Multan Sultans in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The Australian batter Ashton Turner has been appointed as the official captain for Multan Sultans in PSL 11 (2026).</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is coaching Multan Sultans in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>Abdul Rehman serves as the head coach for Multan Sultans in the 2026 season.</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>What is the home ground for Multan Sultans?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The Multan Cricket Stadium, known for its electric atmosphere, is the official home ground for the franchise.</p>
             </details>
          </div>
        </section>

      </div>
    </>
  );
}
