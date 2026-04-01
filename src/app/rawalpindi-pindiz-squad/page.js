import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Rawalpindi Pindiz Squad PSL 11 (2026) | Official Players List & Captain',
  description: 'Official Rawalpindi Pindiz squad for PSL 2026. Mohammad Rizwan leads the new Pindiz franchise with record-signing Naseem Shah, Mohammad Amir, and Daryl Mitchell.',
  keywords: 'rawalpindi pindiz squad 2026, rp psl 11 players, mohammad rizwan pindiz, psl 11 squads, rawalpindi pindiz captain 2026',
};

const squad = {
  platinum: [
    { name: 'Mohammad Rizwan', role: 'Wicketkeeper', variety: 'Right-handed', country: 'Pakistan', status: 'Captain', img: '/Peshawar_Zalmi_logo.png' },
    { name: 'Naseem Shah', role: 'Bowler', variety: 'Right-arm Fast', country: 'Pakistan', status: 'Domestic (PKR 86.5M)' },
  ],
  diamond: [
    { name: 'Mohammad Amir', role: 'Bowler', variety: 'Left-arm Fast', country: 'Pakistan', status: 'Domestic' },
    { name: 'Daryl Mitchell', role: 'All-Rounder', variety: 'Medium-Fast', country: 'New Zealand', status: 'Overseas' },
    { name: 'Sam Billings', role: 'Wicketkeeper', variety: 'Right-handed', country: 'England', status: 'Overseas' },
    { name: 'Fazalhaq Farooqi', role: 'Bowler', variety: 'Left-arm Fast', country: 'Afghanistan', status: 'Overseas' },
  ],
  gold: [
    { name: 'Kamran Ghulam', role: 'Batter', variety: 'Right-handed', country: 'Pakistan', status: 'Domestic' },
    { name: 'Amad Butt', role: 'All-Rounder', variety: 'Fast-Medium', country: 'Pakistan', status: 'Domestic' },
    { name: 'Asif Ali', role: 'Batter', variety: 'Power Hitter', country: 'Pakistan', status: 'Domestic' },
    { name: 'Zeeshan Zamir', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Domestic' },
  ],
  silver: [
    { name: 'Tymal Mills', role: 'Bowler', variety: 'Left-arm Fast', country: 'England', status: 'Overseas' },
    { name: 'Dilshan Madushanka', role: 'Bowler', variety: 'Left-arm Fast', country: 'Sri Lanka', status: 'Overseas' },
    { name: 'Muhammad Akhlaq', role: 'Batter', variety: 'Right-handed', country: 'Pakistan', status: 'Domestic' },
    { name: 'Arafat Minhas', role: 'All-Rounder', variety: 'Left-arm Spin', country: 'Pakistan', status: 'Domestic' },
    { name: 'Shahnawaz Dahani', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Domestic' },
  ],
  emerging: [
    { name: 'Shamyl Hussain', role: 'Batter', variety: 'Top-order', country: 'Pakistan', status: 'Local' },
    { name: 'Ali Asfand', role: 'Bowler', variety: 'Spin', country: 'Pakistan', status: 'Local' },
  ],
  supplementary: [
    { name: 'James Vince', role: 'Batter', variety: 'Right-handed', country: 'England', status: 'Overseas' },
    { name: 'Arshad Iqbal', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Local' },
  ]
};

export default function RawalpindiPindizSquadPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Rawalpindi Pindiz',
    sport: 'Cricket',
    coach: { '@type': 'Person', name: 'Inzamam-ul-Haq' },
    homeLocation: { '@type': 'Place', name: 'Rawalpindi Cricket Stadium' },
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
      { "@type": "ListItem", "position": 2, "name": "Rawalpindi Pindiz Squad", "item": "https://psllive.vercel.app/rawalpindi-pindiz-squad" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1128 0%, #171D3A 50%, #E0115F 100%)',
        color: 'white',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(224,17,95,0.1) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <div style={{ width: '140px', height: '140px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🏙️</div>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Rawalpindi <span style={{ color: '#E0115F' }}>Pindiz Squad 2026</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '2rem', fontWeight: '500' }}>
            The Newest Force for HBL PSL 11 — Led by Mohammad Rizwan
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              🏟️ Venue: Pindi Cricket Stadium
            </span>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: '600' }}>
              👤 Coach: Inzamam-ul-Haq
            </span>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
        
        {/* ── Team Intro ── */}
        <section style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '1rem',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.2)',
          color: '#e2e8f0'
        }}>
          <h2 style={{ color: '#E0115F', marginTop: 0, fontSize: '1.75rem' }}>📢 Pindi Boyz are Here</h2>
          <div style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Making their historical debut in PSL 11 (2026), the <strong>Rawalpindi Pindiz</strong> have built a squad that mirrors the aggressive and defiant spirit of "The City of Speed." Their auction strategy was defined by a massive PKR 86.5 million investment in Pakistan's speed sensation, <strong>Naseem Shah</strong>.
            </p>
            <p>
              Leading the side is the remarkably consistent <strong>Mohammad Rizwan</strong>, who brings his elite wicketkeeping and captaincy experience to the new franchise. With the veteran lethal left-arm pace of <strong>Mohammad Amir</strong> and the all-round mastery of New Zealander <strong>Daryl Mitchell</strong>, the Pindiz are entering the league not just to compete, but to conquer.
            </p>
          </div>
        </section>

        {/* ── Squad Breakdown ── */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '3rem', color: '#0f172a' }}>Official Player Roster — PSL 11</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Category: Platinum & Diamond Core */}
            <div>
              <h3 style={{ borderLeft: '4px solid #E0115F', paddingLeft: '1rem', color: '#1e293b', marginBottom: '1.5rem' }}>🌟 Platinum & Diamond Core</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {[...squad.platinum, ...squad.diamond].map((player, i) => (
                  <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: player.status === 'Captain' ? '#0A1128' : '#E0115F', color: 'white', padding: '0.2rem 0.8rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '0 0 0 0.75rem' }}>
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
                          <span style={{ backgroundColor: squad.gold.includes(player) ? '#fef2f2' : '#f1f5f9', color: squad.gold.includes(player) ? '#991b1b' : '#475569', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '700' }}>
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
              <div style={{ backgroundColor: '#fff1f2', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #fecdd3' }}>
                <h3 style={{ color: '#be123c', marginTop: 0, fontSize: '1.1rem' }}>🌱 Emerging Talent</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.emerging.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#881337' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #bae6fd' }}>
                <h3 style={{ color: '#0369a1', marginTop: 0, fontSize: '1.1rem' }}>🧩 Supplementary</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.supplementary.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#0c4a6e' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Quick Crawl Section ── */}
        <section style={{ backgroundColor: '#0A1128', padding: '4rem 2rem', borderRadius: '1.5rem', color: 'white', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ color: '#E0115F', marginTop: 0 }}>Discover PSL 11 (2026)</h2>
             <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0.5rem auto' }}>Explore other team squads, match schedules, and official tournament updates.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#E0115F', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Other Team Squads</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/lahore-qalandars-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore Qalandars Squad</Link></li>
                <li><Link href="/karachi-kings-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Karachi Kings Squad</Link></li>
                <li><Link href="/quetta-gladiators-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Quetta Gladiators Squad</Link></li>
                <li><Link href="/islamabad-united-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Islamabad United Squad</Link></li>
                <li><Link href="/multan-sultans-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Multan Sultans Squad</Link></li>
                <li><Link href="/peshawar-zalmi-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Peshawar Zalmi Squad</Link></li>
                <li><Link href="/hyderabad-kingsmen-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Hyderabad Kingsmen Squad</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#E0115F', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Official Guides</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/psl-11-2026-schedule" style={{ color: '#e2e8f0', textDecoration: 'none' }}>PSL 2026 Timetable</Link></li>
                <li><Link href="/live-score" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Live Ball-by-Ball Score</Link></li>
                <li><Link href="/points-table" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Latest Points Standings</Link></li>
                <li><Link href="/psl-live" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Streaming Channels Information</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#E0115F', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tournament News</h3>
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
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the captain of Rawalpindi Pindiz in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>Mohammad Rizwan, one of the world's best wicketkeeper-batters, is the inaugural captain for Rawalpindi Pindiz in PSL 11 (2026).</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the head coach of Rawalpindi Pindiz?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The legendary Inzamam-ul-Haq, former Pakistan captain and great, is the head coach for Rawalpindi Pindiz.</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Which player was the record signing for Pindiz?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>Naseem Shah was the highest-paid signing in the franchise's history at the 2026 auction, joining for PKR 86.5 million.</p>
             </details>
          </div>
        </section>

      </div>
    </>
  );
}
