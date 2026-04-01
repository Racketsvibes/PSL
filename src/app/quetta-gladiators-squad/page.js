import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Quetta Gladiators Squad PSL 11 (2026) | Official Players List & Captain',
  description: 'Official Quetta Gladiators squad for PSL 2026. Saud Shakeel leads the Gladiators with Rilee Rossouw, Abrar Ahmed, and Alzarri Joseph. Full player roster.',
  keywords: 'quetta gladiators squad 2026, qg psl 11 players, saud shakeel quetta gladiators, psl 11 squads, quetta gladiators captain 2026',
};

const squad = {
  platinum: [
    { name: 'Rilee Rossouw', role: 'Batter', variety: 'Left-handed', country: 'South Africa', status: 'Domestic', img: '/Quetta_Gladiators.png' },
    { name: 'Alzarri Joseph', role: 'Bowler', variety: 'Right-arm Fast', country: 'West Indies', status: 'Overseas' },
  ],
  diamond: [
    { name: 'Saud Shakeel', role: 'Batter', variety: 'Left-handed', country: 'Pakistan', status: 'Captain' },
    { name: 'Abrar Ahmed', role: 'Bowler', variety: 'Leg-spin/Mystery', country: 'Pakistan', status: 'Domestic' },
    { name: 'Jason Roy', role: 'Batter', variety: 'Opener', country: 'England', status: 'Overseas' },
    { name: 'Wanindu Hasaranga', role: 'All-Rounder', variety: 'Leg-spin', country: 'Sri Lanka', status: 'Overseas' },
  ],
  gold: [
    { name: 'Mohammad Hasnain', role: 'Bowler', variety: 'Right-arm Fast', country: 'Pakistan', status: 'Domestic' },
    { name: 'Sarfaraz Ahmed', role: 'Wicketkeeper', variety: 'Right-handed', country: 'Pakistan', status: 'Domestic' },
    { name: 'Laurie Evans', role: 'Batter', variety: 'Right-handed', country: 'England', status: 'Overseas' },
    { name: 'Ben McDermott', role: 'Wicketkeeper', variety: 'Power Hitter', country: 'Australia', status: 'Overseas' },
  ],
  silver: [
    { name: 'Tom Curran', role: 'All-Rounder', variety: 'Fast-Medium', country: 'England', status: 'Overseas' },
    { name: 'Will Smeed', role: 'Batter', variety: 'Right-handed', country: 'England', status: 'Overseas' },
    { name: 'Omair Yousuf', role: 'Batter', variety: 'Top-order', country: 'Pakistan', status: 'Domestic' },
    { name: 'Ahmad Salamkheil', role: 'Bowler', variety: 'Left-arm Spin', country: 'Afghanistan', status: 'Overseas' },
  ],
  emerging: [
    { name: 'Khawaja Nafay', role: 'Batter', variety: 'Aggressive', country: 'Pakistan', status: 'Local' },
    { name: 'Adil Naz', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Local' },
  ],
  supplementary: [
    { name: 'Bismillah Khan', role: 'Wicketkeeper', variety: 'Local', country: 'Pakistan', status: 'Local' },
    { name: 'Usman Tariq', role: 'Bowler', variety: 'Spin', country: 'Pakistan', status: 'Local' },
  ]
};

export default function QuettaSquadPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Quetta Gladiators',
    sport: 'Cricket',
    coach: { '@type': 'Person', name: 'Shane Watson' },
    homeLocation: { '@type': 'Place', name: 'Gaddafi Stadium, Lahore (Interim)' },
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
      { "@type": "ListItem", "position": 2, "name": "Quetta Gladiators Squad", "item": "https://psllive.vercel.app/quetta-gladiators-squad" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1a0533 0%, #301934 50%, #FDB913 100%)',
        color: 'white',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(253,185,19,0.15) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <Image src="/Quetta_Gladiators.png" alt="Quetta Gladiators Official Logo" width={140} height={140} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }} priority />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Quetta Gladiators <span style={{ color: '#FDB913' }}>Squad 2026</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '2rem', fontWeight: '500' }}>
            Purple Force Roster for HBL PSL 11 — Led by Saud Shakeel
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              🏟️ Venue: Gaddafi Stadium
            </span>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              👤 Coach: Shane Watson
            </span>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
        
        {/* ── Team Intro ── */}
        <section style={{
          backgroundColor: '#faf5ff',
          border: '1px solid #e9d5ff',
          borderRadius: '1rem',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#581c87', marginTop: 0, fontSize: '1.75rem' }}>⚔️ The Purple Force Returns</h2>
          <div style={{ color: '#6b21a8', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              The <strong>Quetta Gladiators</strong> enter PSL 11 (2026) with a renewed sense of purpose. Transitioning under the calm yet clinical leadership of <strong>Saud Shakeel</strong>, the franchise has successfully blended explosive overseas firepower with Pakistan's most lethal spin bowling options.
            </p>
            <p>
              With the return of <strong>Rilee Rossouw</strong> and the arrival of West Indian pace star <strong>Alzarri Joseph</strong>, the Gladiators' squad is designed for versatility. <strong>Abrar Ahmed</strong>'s "mystery" spin and <strong>Sarfaraz Ahmed</strong>'s tactical acumen ensure that Quetta remains a nightmare opponent on any surface.
            </p>
          </div>
        </section>

        {/* ── Squad Breakdown ── */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '3rem', color: '#0f172a' }}>Official Player Roster — PSL 11</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Category: Platinum & Diamond core */}
            <div>
              <h3 style={{ borderLeft: '4px solid #7c3aed', paddingLeft: '1rem', color: '#1e293b', marginBottom: '1.5rem' }}>🌟 Platinum & Diamond Core</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {[...squad.platinum, ...squad.diamond].map((player, i) => (
                  <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: player.status === 'Captain' ? '#C8102E' : '#2e1065', color: 'white', padding: '0.2rem 0.8rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '0 0 0 0.75rem' }}>
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
              <div style={{ backgroundColor: '#f5f3ff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #ddd6fe' }}>
                <h3 style={{ color: '#5b21b6', marginTop: 0, fontSize: '1.1rem' }}>🌱 Emerging Talent</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.emerging.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#2e1065' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: '#fffbeb', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #fde68a' }}>
                <h3 style={{ color: '#92400e', marginTop: 0, fontSize: '1.1rem' }}>🧩 Supplementary</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.supplementary.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#78350f' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Quick Crawl Section ── */}
        <section style={{ backgroundColor: '#1a0533', padding: '4rem 2rem', borderRadius: '1.5rem', color: 'white', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ color: '#FDB913', marginTop: 0 }}>Discover PSL 11 (2026)</h2>
             <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0.5rem auto' }}>Explore other team squads, match schedules, and official tournament updates.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FDB913', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Other Team Squads</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/lahore-qalandars-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore Qalandars Squad</Link></li>
                <li><Link href="/karachi-kings-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Karachi Kings Squad</Link></li>
                <li><Link href="/islamabad-united-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Islamabad United Squad</Link></li>
                <li><Link href="/multan-sultans-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Multan Sultans Squad</Link></li>
                <li><Link href="/peshawar-zalmi-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Peshawar Zalmi Squad</Link></li>
                <li><Link href="/rawalpindi-pindiz-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Rawalpindi Pindiz Squad</Link></li>
                <li><Link href="/hyderabad-kingsmen-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Hyderabad Kingsmen Squad</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FDB913', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Official Guides</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/psl-11-2026-schedule" style={{ color: '#e2e8f0', textDecoration: 'none' }}>PSL 2026 Timetable</Link></li>
                <li><Link href="/live-score" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Live Ball-by-Ball Score</Link></li>
                <li><Link href="/points-table" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Latest Points Standings</Link></li>
                <li><Link href="/psl-live" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Streaming Channels Information</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FDB913', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tournament News</h3>
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
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the captain of Quetta Gladiators in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The elegant left-handed batter Saud Shakeel takes over as the official captain for Quetta Gladiators in PSL 11 (2026).</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the head coach of Quetta Gladiators?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The legendary Shane Watson is the head coach for Quetta Gladiators in the 2026 season.</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>How many PSL titles has Quetta Gladiators won?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>Quetta Gladiators won their first and only PSL title in 2019, defeating Peshawar Zalmi in the final at Karachi.</p>
             </details>
          </div>
        </section>

      </div>
    </>
  );
}
