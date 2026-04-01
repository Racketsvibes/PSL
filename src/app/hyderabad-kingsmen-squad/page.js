import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Hyderabad Kingsmen Squad PSL 11 (2026) | Official Players List & Captain',
  description: 'Official Hyderabad Kingsmen squad for PSL 2026. Marnus Labuschagne leads the new Hyderabad franchise with Saim Ayub, Glenn Maxwell, and Kusal Perera.',
  keywords: 'hyderabad kingsmen squad 2026, hk psl 11 players, marnus labuschagne hyderabad, psl 11 squads, hyderabad kingsmen captain 2026',
};

const squad = {
  platinum: [
    { name: 'Marnus Labuschagne', role: 'Batter', variety: 'Right-handed', country: 'Australia', status: 'Captain', img: '/Hyderabad_Houston_Kingsmen_logo.png' },
    { name: 'Saim Ayub', role: 'Batter', variety: 'Aggressive Opener', country: 'Pakistan', status: 'Domestic' },
  ],
  diamond: [
    { name: 'Glenn Maxwell', role: 'All-Rounder', variety: 'Off-spin', country: 'Australia', status: 'Overseas' },
    { name: 'Kusal Perera', role: 'Wicketkeeper', variety: 'Left-handed', country: 'Sri Lanka', status: 'Overseas' },
    { name: 'Sharjeel Khan', role: 'Batter', variety: 'Power Hitter', country: 'Pakistan', status: 'Domestic' },
    { name: 'Maheesh Theekshana', role: 'Bowler', variety: 'Mystery Spin', country: 'Sri Lanka', status: 'Overseas' },
  ],
  gold: [
    { name: 'Riley Meredith', role: 'Bowler', variety: 'Right-arm Fast', country: 'Australia', status: 'Overseas' },
    { name: 'Mohammad Taha', role: 'All-Rounder', variety: 'Left-arm Spin', country: 'Pakistan', status: 'Domestic' },
    { name: 'Khushi Shah', role: 'Batter', variety: 'Solid', country: 'Pakistan', status: 'Domestic' },
    { name: 'Mohammad Abbas', role: 'Bowler', variety: 'Fast-Medium', country: 'Pakistan', status: 'Domestic' },
  ],
  silver: [
    { name: 'Jhye Richardson', role: 'Bowler', variety: 'Right-arm Fast', country: 'Australia', status: 'Overseas' },
    { name: 'Raza Hasan', role: 'Bowler', variety: 'Left-arm Spin', country: 'Pakistan', status: 'Domestic' },
    { name: 'Rameez Aziz', role: 'Batter', variety: 'Left-handed', country: 'Pakistan', status: 'Domestic' },
    { name: 'Dinesh Chandimal', role: 'Wicketkeeper', variety: 'Right-handed', country: 'Sri Lanka', status: 'Overseas' },
    { name: 'Saud Shakeel', role: 'Batter', variety: 'Solid', country: 'Pakistan', status: 'Domestic' },
  ],
  emerging: [
    { name: 'Ali Haider', role: 'Batter', variety: 'Aggressive', country: 'Pakistan', status: 'Local' },
    { name: 'Umar Eman', role: 'Bowler', variety: 'Spin', country: 'Pakistan', status: 'Local' },
  ],
  supplementary: [
    { name: 'Imran Tahir', role: 'Bowler', variety: 'Leg-spin', country: 'South Africa', status: 'Overseas' },
    { name: 'Sohail Khan', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Local' },
  ]
};

export default function HyderabadKingsmenSquadPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Hyderabad Kingsmen',
    sport: 'Cricket',
    coach: { '@type': 'Person', name: 'Jason Gillespie' },
    homeLocation: { '@type': 'Place', name: 'Niaz Stadium, Hyderabad (Interim)' },
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
      { "@type": "ListItem", "position": 2, "name": "Hyderabad Kingsmen Squad", "item": "https://psllive.vercel.app/hyderabad-kingsmen-squad" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #4B2E0E 0%, #634015 50%, #C5A059 100%)',
        color: 'white',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(197,160,89,0.15) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <Image src="/Hyderabad_Houston_Kingsmen_logo.png" alt="Hyderabad Kingsmen Official Logo" width={140} height={140} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }} priority />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Hyderabad <span style={{ color: '#C5A059' }}>Kingsmen Squad 2026</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '2rem', fontWeight: '500' }}>
            The Royal Force for HBL PSL 11 — Led by Marnus Labuschagne
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              🏟️ Venue: Niaz Stadium
            </span>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              👤 Coach: Jason Gillespie
            </span>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
        
        {/* ── Team Intro ── */}
        <section style={{
          backgroundColor: '#fef3c7',
          border: '1px solid #fde68a',
          borderRadius: '1rem',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
          color: '#92400e'
        }}>
          <h2 style={{ color: '#4B2E0E', marginTop: 0, fontSize: '1.75rem' }}>👑 Rise of the Kingsmen</h2>
          <div style={{ color: '#78350f', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              The <strong>Hyderabad Kingsmen</strong> enter the Pakistan Super League arena for the first time in 2026 (PSL 11) with a squad that radiates royalty and tactical brilliance. Moving into the league with the captaincy of Australian batting genius <strong>Marnus Labuschagne</strong>, the Kingsmen have successfully combined legendary power hitting with elite mystery spin.
            </p>
            <p>
              With the sensational <strong>Saim Ayub</strong> at the top of the order and the world-class all-round talent of <strong>Glenn Maxwell</strong>, the Hyderabad side is built for explosive T20 cricket. Their bowling is led by the rapid pace of <strong>Riley Meredith</strong> and the mystery variations of <strong>Maheesh Theekshana</strong>, ensuring they are championship contenders from day one.
            </p>
          </div>
        </section>

        {/* ── Squad Breakdown ── */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '3rem', color: '#0f172a' }}>Official Player Roster — PSL 11</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Category: Platinum & Diamond core */}
            <div>
              <h3 style={{ borderLeft: '4px solid #4B2E0E', paddingLeft: '1rem', color: '#1e293b', marginBottom: '1.5rem' }}>🌟 Platinum & Diamond Core</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {[...squad.platinum, ...squad.diamond].map((player, i) => (
                  <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: player.status === 'Captain' ? '#C5A059' : '#4B2E0E', color: player.status === 'Captain' ? '#4B2E0E' : 'white', padding: '0.2rem 0.8rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '0 0 0 0.75rem' }}>
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
              <div style={{ backgroundColor: '#fdf4ff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #fae8ff' }}>
                <h3 style={{ color: '#701a75', marginTop: 0, fontSize: '1.1rem' }}>🧩 Supplementary</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.supplementary.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#4a044e' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Quick Crawl Section ── */}
        <section style={{ backgroundColor: '#4B2E0E', padding: '4rem 2rem', borderRadius: '1.5rem', color: 'white', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ color: '#C5A059', marginTop: 0 }}>Discover PSL 11 (2026)</h2>
             <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0.5rem auto' }}>Explore other team squads, match schedules, and official tournament updates.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#C5A059', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Other Team Squads</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/lahore-qalandars-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore Qalandars Squad</Link></li>
                <li><Link href="/karachi-kings-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Karachi Kings Squad</Link></li>
                <li><Link href="/quetta-gladiators-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Quetta Gladiators Squad</Link></li>
                <li><Link href="/islamabad-united-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Islamabad United Squad</Link></li>
                <li><Link href="/multan-sultans-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Multan Sultans Squad</Link></li>
                <li><Link href="/peshawar-zalmi-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Peshawar Zalmi Squad</Link></li>
                <li><Link href="/rawalpindi-pindiz-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Rawalpindi Pindiz Squad</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#C5A059', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Official Guides</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/psl-11-2026-schedule" style={{ color: '#e2e8f0', textDecoration: 'none' }}>PSL 2026 Timetable</Link></li>
                <li><Link href="/live-score" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Live Ball-by-Ball Score</Link></li>
                <li><Link href="/points-table" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Latest Points Standings</Link></li>
                <li><Link href="/psl-live" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Streaming Channels Information</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#C5A059', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tournament News</h3>
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
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the captain of Hyderabad Kingsmen in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The world-class Australian batter Marnus Labuschagne is the inaugural captain for Hyderabad Kingsmen in PSL 11 (2026).</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the head coach of Hyderabad Kingsmen?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The tactical genius Jason Gillespie, former Australian fast bowler, is the head coach for Hyderabad Kingsmen.</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>What is the home ground for Hyderabad Kingsmen?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The Niaz Stadium in Hyderabad is the official home ground for the franchise, which is undergoing renovation for PSL matches.</p>
             </details>
          </div>
        </section>

      </div>
    </>
  );
}
