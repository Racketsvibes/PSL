import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'HBL PSL 2026 Live | Scores, Points Table, Schedule & Squads',
  description: 'Official HBL PSL 11 (2026) fan portal. Get real-time ball-by-ball live scores, updated points table, full 44-match schedule, and all 8 franchise squads. Your home for Pakistan Super League 2026.',
  keywords: 'psl live 2026, psl 11 live score, psl points table 2026, psl 2026 schedule, psl 11 squads, pakistan super league 2026 streaming',
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which teams are playing in PSL 11?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 8 franchises are: Lahore Qalandars, Karachi Kings, Quetta Gladiators, Islamabad United, Multan Sultans, Peshawar Zalmi, and the two major expansions: Rawalpindi Pindiz and Hyderabad Kingsmen."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the PSL 2026 final being held?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The PSL 11 Grand Final will be held on May 3, 2026, at the Gaddafi Stadium in Lahore."
        }
      },
      {
        "@type": "Question",
        "name": "How many matches are in PSL 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are total 44 matches in PSL 2026, including the group stage and playoffs."
        }
      }
    ]
  };

  const tournamentSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "HBL Pakistan Super League 2026",
    "startDate": "2026-03-26",
    "endDate": "2026-05-03",
    "location": [
      { "@type": "Place", "name": "Gaddafi Stadium, Lahore" },
      { "@type": "Place", "name": "National Bank Stadium, Karachi" }
    ],
    "organizer": { "@type": "Organization", "name": "PCB" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tournamentSchema) }} />

      {/* ── Premium Hero Section ── */}
      <section style={{ 
        background: 'linear-gradient(rgba(10, 50, 88, 0.8), rgba(0, 130, 54, 0.8)), url("/psl-hero.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white', 
        padding: '6rem 1.5rem', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1 }} />
        
        <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#c7fa3b', color: '#0A3258', padding: '0.4rem 1.25rem', borderRadius: '2rem', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
             <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0A3258', animation: 'pulse 1.5s infinite' }} /> NEXT MATCH - APRIL 8
          </div>
          
          <h1 style={{ fontSize: '3.75rem', fontWeight: '900', marginBottom: '1.25rem', lineHeight: '1.1', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            The New Era of <br/><span style={{ color: '#c7fa3b' }}>HBL PSL 11 (2026)</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            Experience the expanded 8-team phenomenon. Tracking every ball, every boundary, and every standing as the Pindiz and Kingsmen take on the PSL giants.
          </p>

          {/* Today Match Quick Widget */}
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            backdropFilter: 'blur(10px)', 
            borderRadius: '1.5rem', 
            padding: '1.5rem 2.5rem', 
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'left'
          }}>
             <div style={{ textAlign: 'center' }}>
                <Image src="/Hyderabad_Houston_Kingsmen_logo.png" alt="HK" width={50} height={50} style={{ objectFit: 'contain' }} />
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem', fontWeight: '700' }}>HK</p>
             </div>
             <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: '900', margin: 0, opacity: '0.4' }}>VS</p>
                <Link href="/live-score" style={{ color: '#c7fa3b', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 'bold' }}>MATCH CENTER</Link>
             </div>
             <div style={{ textAlign: 'center' }}>
                <Image src="/Peshawar_Zalmi_logo.png" alt="PZ" width={50} height={50} style={{ objectFit: 'contain' }} />
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem', fontWeight: '700' }}>PZ</p>
             </div>
             <div style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <p style={{ fontSize: '0.7rem', opacity: '0.7', textTransform: 'uppercase', margin: 0 }}>Start Time</p>
                <p style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>7:00 PM PKT</p>
             </div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/psl-live" className="btn" style={{ padding: '0.85rem 2rem', backgroundColor: '#c7fa3b', color: '#0A3258', border: 'none', fontWeight: '900', borderRadius: '0.5rem' }}>📺 WATCH LIVE</Link>
            <Link href="/psl-11-2026-schedule" className="btn" style={{ padding: '0.85rem 2rem', backgroundColor: 'white', color: '#0A3258', border: 'none', fontWeight: '800', borderRadius: '0.5rem' }}>🗓️ FULL FIXTURES</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        
        {/* ── Key Navigation Grid ── */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {[
            { title: 'Live Scoreboard', desc: 'Real-time ball-by-ball updates and commentary.', link: '/live-score' },
            { title: 'Points Table', desc: 'Track playoff qualifications and NRR standings.', link: '/points-table' },
            { title: 'Full Schedule', desc: '44 matches, 39 days, 2 historic cities.', link: '/psl-11-2026-schedule' },
            { title: 'Live Streaming', desc: 'Where to watch PSL online & on TV.', link: '/psl-live' },
          ].map((item, i) => (
            <Link href={item.link} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ 
                padding: '2rem', 
                backgroundColor: 'white', 
                border: '2px solid #f1f5f9', 
                borderRadius: '1.25rem', 
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.02)'
              }} className="hover-lift">
                <h3 style={{ fontSize: '1.35rem', color: '#0A3258', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', color: '#008236', fontWeight: '700', fontSize: '0.85rem' }}>EXPLORE &rarr;</div>
              </div>
            </Link>
          ))}
        </section>

        {/* ── Quick Data Snapshot (Standings & Stats) ── */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
          
          {/* Top 4 Standings Snippet */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
               <h2 style={{ fontSize: '1.75rem', margin: 0 }}>🏆 League Standings</h2>
               <Link href="/points-table" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0A3258' }}>VIEW ALL</Link>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#f8fafc', color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', textAlign: 'left' }}>
                  <tr>
                    <th style={{ padding: '0.75rem 1rem' }}>Team</th>
                    <th style={{ padding: '0.75rem 1rem' }}>W</th>
                    <th style={{ padding: '0.75rem 1rem' }}>L</th>
                    <th style={{ padding: '0.75rem 1rem' }}>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Multan Sultans', wins: 5, loss: 0, pts: 10 },
                    { name: 'Karachi Kings', wins: 3, loss: 0, pts: 6 },
                    { name: 'Islamabad United', wins: 2, loss: 1, pts: 5 },
                    { name: 'Peshawar Zalmi', wins: 1, loss: 0, pts: 3 },
                  ].map((team, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: '700', fontSize: '0.95rem' }}>{team.name}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>{team.wins}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>{team.loss}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#008236', fontWeight: '900' }}>{team.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tournament Pulse Stats */}
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>📈 Tournament Pulse</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
               {[
                 { label: 'Total Runs', val: '3,850+', color: '#eff6ff', icon: '🏏' },
                 { label: 'Wickets', val: '154+', color: '#fef2f2', icon: '☝️' },
                 { label: 'Boundaries (6s)', val: '182', color: '#fffbeb', icon: '🔥' },
                 { label: 'Matches Played', val: '14 / 44', color: '#f0fdf4', icon: '🏟️' },
               ].map((stat, i) => (
                 <div key={i} style={{ padding: '1.5rem', backgroundColor: stat.color, borderRadius: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#0f172a' }}>{stat.val}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* ── All 8 Teams Grid ── */}
        <section style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '0.75rem' }}>The Elite Eight Franchises</h2>
            <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Explore the star-studded rosters and captains for the most competitive season in PSL history.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Lahore Qalandars', link: '/lahore-qalandars-squad', color: '#008236', logo: '/Lahore_Qalandars.png' },
              { name: 'Karachi Kings', link: '/karachi-kings-squad', color: '#001f3f', logo: '/Karachi_Kings.png' },
              { name: 'Islamabad United', link: '/islamabad-united-squad', color: '#c41e3a', logo: '/Islamabad_United.png' },
              { name: 'Multan Sultans', link: '/multan-sultans-squad', color: '#004d00', logo: '/MultanSultans.png' },
              { name: 'Peshawar Zalmi', link: '/peshawar-zalmi-squad', color: '#ffd700', logo: '/Peshawar_Zalmi_logo.png' },
              { name: 'Quetta Gladiators', link: '/quetta-gladiators-squad', color: '#301934', logo: '/Quetta_Gladiators.png' },
              { name: 'Rawalpindi Pindiz', link: '/rawalpindi-pindiz-squad', color: '#0A1128', logo: '/Rawalpindiz_Logo.png' },
              { name: 'Hyderabad Kingsmen', link: '/hyderabad-kingsmen-squad', color: '#4B2E0E', logo: '/Hyderabad_Houston_Kingsmen_logo.png' },
            ].map((team, idx) => (
              <Link href={team.link} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '1rem', 
                  textAlign: 'center',
                  transition: 'transform 0.2s ease'
                }} className="hover-grow">
                   <div style={{ width: '80px', height: '80px', margin: '0 auto 1.25rem', position: 'relative' }}>
                      <Image src={team.logo} alt={team.name} fill style={{ objectFit: 'contain' }} sizes="80px" />
                   </div>
                   <p style={{ margin: 0, fontWeight: '800', color: '#0f172a' }}>{team.name}</p>
                   <div style={{ marginTop: '0.75rem', width: '30px', height: '3px', backgroundColor: team.color, margin: '0.75rem auto 0' }} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Deep Tournment Analysis & Knowledge ── */}
        <section style={{ backgroundColor: '#f8fafc', borderRadius: '2rem', padding: '5rem 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '900', color: '#0A3258', marginBottom: '1.5rem', lineHeight: '1.2' }}>Comprehensive HBL PSL 11 Tournament Structure</h2>
            <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
              The 2026 season marks an extraordinarily historic milestone throughout the tournament's history, expanding into an action-packed 8-team format. This expansion brings high-impact international stars into new rivalry clusters like the Pindiz and Kingsmen.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
               {[
                 { h: 'The Expansion Stage', p: 'Introduction of Hyderabad Kingsmen and Rawalpindiz franchises.' },
                 { h: 'The Twin Venue Model', p: 'Exclusively hosted at Gaddafi Stadium and National Bank Stadium.' },
                 { h: 'Direct Indexing Coverage', p: 'Verified ball-by-ball data feeds and squad rosters.' },
               ].map((item, i) => (
                 <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ backgroundColor: '#c7fa3b', width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '800', color: '#0A3258' }}>✓</div>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: '#0A3258' }}>{item.h}</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>{item.p}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '450px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
             <Image src="/psl-stadium.jpg" alt="PSL Stadium Atmosphere" fill style={{ objectFit: 'cover' }} priority />
             <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
                <h4 style={{ margin: 0 }}>Gaddafi Stadium, Lahore</h4>
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: '0.8' }}>Hosting the Grand Final — May 3, 2026</p>
             </div>
          </div>
        </section>

        {/* ── Broadcast & FAQ ── */}
        <section style={{ padding: '6rem 0', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', textAlign: 'center', marginBottom: '3rem' }}>Broadcasters & Fan Guide</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             {[
               { q: 'Where can I stream PSL Live in Pakistan?', a: 'Tamasha app and Tapmad are the official digital streaming partners in Pakistan. Live broadcasting is available on Ten Sports and A-Sports.' },
               { q: 'How many matches are being played in PSL 11?', a: 'The tournament features a record 44 matches across the group stage and playoffs.' },
               { q: 'Why are there only two host cities in 2026?', a: 'To optimize logistics and grid security, the PCB concentrated all matches in Lahore and Karachi.' },
               { q: 'Who are the defending champions?', a: 'The Lahore Qalandars entered the 2026 season as the team to beat after their consistent performances in the previous editions.' },
             ].map((faq, i) => (
                <details key={i} style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem' }}>
                   <summary style={{ fontWeight: '800', fontSize: '1.1rem', color: '#0A3258', cursor: 'pointer' }}>{faq.q}</summary>
                   <p style={{ marginTop: '1rem', color: '#475569', lineHeight: '1.7' }}>{faq.a}</p>
                </details>
             ))}
          </div>
        </section>

      </div>
      
      {/* ── CSS Animations Shorthand ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(10, 50, 88, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(10, 50, 88, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(10, 50, 88, 0); }
        }
        .hover-lift:hover { transform: translateY(-5px); border-color: #c7fa3b !important; }
        .hover-grow:hover { transform: scale(1.05); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border-color: #008236 !important; }
      `}} />
    </>
  );
}
