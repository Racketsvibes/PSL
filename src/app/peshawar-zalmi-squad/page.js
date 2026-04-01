import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Peshawar Zalmi Squad PSL 11 (2026) | Official Players List & Captain',
  description: 'Official Peshawar Zalmi squad for PSL 2026. Babar Azam leads the Yellow Storm with Iftikhar Ahmed, Mohammad Haris, and Shahnawaz Dahani. Full player roster.',
  keywords: 'peshawar zalmi squad 2026, pz psl 11 players, babar azam peshawar zalmi, psl 11 squads, peshawar zalmi captain 2026',
};

const squad = {
  platinum: [
    { name: 'Babar Azam', role: 'Batter', variety: 'Right-handed', country: 'Pakistan', status: 'Captain', img: '/Peshawar_Zalmi_logo.png' },
    { name: 'Iftikhar Ahmed', role: 'All-Rounder', variety: 'Power Hitter', country: 'Pakistan', status: 'Domestic' },
  ],
  diamond: [
    { name: 'Mohammad Haris', role: 'Wicketkeeper', variety: 'Aggressive', country: 'Pakistan', status: 'Domestic' },
    { name: 'Shahnawaz Dahani', role: 'Bowler', variety: 'Right-arm Fast', country: 'Pakistan', status: 'Domestic' },
    { name: 'Aamir Jamal', role: 'All-Rounder', variety: 'Fast-Medium', country: 'Pakistan', status: 'Domestic' },
    { name: 'Michael Bracewell', role: 'All-Rounder', variety: 'Off-spin', country: 'New Zealand', status: 'Overseas' },
  ],
  gold: [
    { name: 'Kusal Mendis', role: 'Wicketkeeper', variety: 'Right-handed', country: 'Sri Lanka', status: 'Overseas' },
    { name: 'Naveen-ul-Haq', role: 'Bowler', variety: 'Right-arm Fast', country: 'Afghanistan', status: 'Overseas' },
    { name: 'Noor Ahmad', role: 'Bowler', variety: 'Left-arm Chinaman', country: 'Afghanistan', status: 'Overseas' },
    { name: 'Saim Ayub', role: 'Batter', variety: 'Opener', country: 'Pakistan', status: 'Domestic' },
  ],
  silver: [
    { name: 'Tom Kohler-Cadmore', role: 'Batter', variety: 'Power Hitter', country: 'England', status: 'Overseas' },
    { name: 'Luke Wood', role: 'Bowler', variety: 'Left-arm Fast', country: 'England', status: 'Overseas' },
    { name: 'Arif Yaqoob', role: 'Bowler', variety: 'Leg-spin', country: 'Pakistan', status: 'Domestic' },
    { name: 'Umair Afridi', role: 'Bowler', variety: 'Left-arm Fast', country: 'Pakistan', status: 'Domestic' },
    { name: 'Rovman Powell', role: 'Batter', variety: 'Power Hitter', country: 'West Indies', status: 'Overseas' },
  ],
  emerging: [
    { name: 'Haseebullah Khan', role: 'Wicketkeeper', variety: 'Top-order', country: 'Pakistan', status: 'Local' },
    { name: 'Mehran Mumtaz', role: 'Bowler', variety: 'Spin', country: 'Pakistan', status: 'Local' },
  ],
  supplementary: [
    { name: 'Lungi Ngidi', role: 'Bowler', variety: 'Fast', country: 'South Africa', status: 'Overseas' },
    { name: 'Khurram Shahzad', role: 'Bowler', variety: 'Fast', country: 'Pakistan', status: 'Local' },
  ]
};

export default function PeshawarZalmiSquadPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Peshawar Zalmi',
    sport: 'Cricket',
    coach: { '@type': 'Person', name: 'Darren Sammy' },
    homeLocation: { '@type': 'Place', name: 'Arbab Niaz Stadium, Peshawar (Interim)' },
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
      { "@type": "ListItem", "position": 2, "name": "Peshawar Zalmi Squad", "item": "https://psllive.vercel.app/peshawar-zalmi-squad" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #FFD700 0%, #FFCC00 50%, #000000 100%)',
        color: 'black',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(0,0,0,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <div style={{ marginBottom: '1.5rem' }}>
             <Image src="/Peshawar_Zalmi_logo.png" alt="Peshawar Zalmi Official Logo" width={140} height={140} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.2))' }} priority />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Peshawar Zalmi <span style={{ color: '#000' }}>Squad 2026</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.8', marginBottom: '2rem', fontWeight: '600' }}>
            The Yellow Storm Roster for HBL PSL 11 — Led by Babar Azam
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.9rem', fontWeight: '700' }}>
              🏟️ Venue: Arbab Niaz Stadium
            </span>
            <span style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '0.5rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(0,0,0,0.1)', fontSize: '0.9rem', fontWeight: '700' }}>
              👤 Coach: Darren Sammy
            </span>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1000px' }}>
        
        {/* ── Team Intro ── */}
        <section style={{
          backgroundColor: '#fffdf0',
          border: '1px solid #fef08a',
          borderRadius: '1rem',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#854d0e', marginTop: 0, fontSize: '1.75rem' }}>⚡ The Yellow Storm Unleashed</h2>
          <div style={{ color: '#713f12', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              The <strong>Peshawar Zalmi</strong> franchise returns for PSL 11 (2026) with their most aggressive lineup yet. Anchored by the world's most consistent batter, <strong>Babar Azam</strong>, the Zalmi have prioritized explosive "Zalmi-style" cricket. The addition of <strong>Iftikhar Ahmed</strong> (Ifti-Mania) provides the middle-order muscle that fans have been craving.
            </p>
            <p>
              Under the charismatic mentorship of <strong>Darren Sammy</strong>, Peshawar has developed a young, fast, and fearless core. With <strong>Mohammad Haris</strong> behind the stumps and the pace trio of <strong>Dahani</strong>, <strong>Jamal</strong>, and <strong>Naveen-ul-Haq</strong>, the Yellow Storm is ready to capture their second PSL crown.
            </p>
          </div>
        </section>

        {/* ── Squad Breakdown ── */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '3rem', color: '#0f172a' }}>Official Player Roster — PSL 11</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Category: Platinum & Diamond core */}
            <div>
              <h3 style={{ borderLeft: '4px solid #FFD700', paddingLeft: '1rem', color: '#1e293b', marginBottom: '1.5rem' }}>🌟 Platinum & Diamond Core</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {[...squad.platinum, ...squad.diamond].map((player, i) => (
                  <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: player.status === 'Captain' ? '#000' : '#FFD700', color: player.status === 'Captain' ? '#FFD700' : '#000', padding: '0.2rem 0.8rem', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '0 0 0 0.75rem' }}>
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
              <div style={{ backgroundColor: '#fffbeb', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #fde68a' }}>
                <h3 style={{ color: '#854d0e', marginTop: 0, fontSize: '1.1rem' }}>🌱 Emerging Talent</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.emerging.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#422006' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #f3f4f6' }}>
                <h3 style={{ color: '#111827', marginTop: 0, fontSize: '1.1rem' }}>🧩 Supplementary</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {squad.supplementary.map((p, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: '#374151' }}>
                      <strong>{p.name}</strong> <span style={{ opacity: 0.7 }}>— {p.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── Quick Crawl Section ── */}
        <section style={{ backgroundColor: '#000', padding: '4rem 2rem', borderRadius: '1.5rem', color: 'white', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ color: '#FFD700', marginTop: 0 }}>Discover PSL 11 (2026)</h2>
             <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0.5rem auto' }}>Explore other team squads, match schedules, and official tournament updates.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FFD700', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Other Team Squads</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/lahore-qalandars-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Lahore Qalandars Squad</Link></li>
                <li><Link href="/karachi-kings-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Karachi Kings Squad</Link></li>
                <li><Link href="/quetta-gladiators-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Quetta Gladiators Squad</Link></li>
                <li><Link href="/islamabad-united-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Islamabad United Squad</Link></li>
                <li><Link href="/multan-sultans-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Multan Sultans Squad</Link></li>
                <li><Link href="/rawalpindi-pindiz-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Rawalpindi Pindiz Squad</Link></li>
                <li><Link href="/hyderabad-kingsmen-squad" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Hyderabad Kingsmen Squad</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FFD700', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Official Guides</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <li><Link href="/psl-11-2026-schedule" style={{ color: '#e2e8f0', textDecoration: 'none' }}>PSL 2026 Timetable</Link></li>
                <li><Link href="/live-score" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Live Ball-by-Ball Score</Link></li>
                <li><Link href="/points-table" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Latest Points Standings</Link></li>
                <li><Link href="/psl-live" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Streaming Channels Information</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#FFD700', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tournament News</h3>
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
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is the captain of Peshawar Zalmi in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The world-famous batting star Babar Azam continues his leadership as the captain of Peshawar Zalmi in PSL 11 (2026).</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>Who is coaching Peshawar Zalmi in 2026?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>The double World Cup-winning captain from West Indies, Darren Sammy, is the head coach for Peshawar Zalmi.</p>
             </details>
             <details style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem' }}>
                <summary style={{ fontWeight: '700', cursor: 'pointer', color: '#0f172a' }}>How many PSL titles has Peshawar Zalmi won?</summary>
                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: '1.6' }}>Peshawar Zalmi won their only PSL title in 2017, defeating Quetta Gladiators in the final held in Lahore.</p>
             </details>
          </div>
        </section>

      </div>
    </>
  );
}
