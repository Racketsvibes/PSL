import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'PSL Live 2026 | Streaming, Scores, Squads & Match Updates',
  description: 'Your ultimate destination for HBL PSL 11 (2026) live streaming, points table, real-time match scores, authentic squad rosters, and exclusive cricket news.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #0A3258 0%, #008236 100%)', color: 'white', padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.2rem', lineHeight: '1.2' }}>Experience the Thrill of <br/><span style={{ color: '#c7fa3b' }}>HBL PSL 11 (2026)</span></h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', margin: '0 auto 2rem auto', opacity: '0.9', lineHeight: '1.6' }}>
            Get instant access to live streaming guides, real-time points tables, official match schedules, and exclusive coverage of the biggest T20 league in Pakistan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', border: 'none', fontWeight: 'bold' }}>Watch Live Action</Link>
            <Link href="/points-table" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>Current Standings</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 0' }}>
        
        {/* Latest Tournament Coverage */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="team-card" style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ color: '#008236', fontSize: '1.5rem', marginBottom: '1rem' }}>📅 Official Match Schedule</h2>
            <p style={{ marginBottom: '1.5rem', color: '#4b5563', lineHeight: '1.7' }}>Don't miss a single boundary. Explore the complete 44-match timetable, including venues and timings for the entire HBL PSL 2026 tournament spanning from Karachi to Lahore.</p>
            <Link href="/psl-11-2026-schedule" className="btn">View Full Schedule</Link>
          </div>
          
          <div className="team-card" style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ color: '#0A3258', fontSize: '1.5rem', marginBottom: '1rem' }}>🏆 Epic Rivalries</h2>
            <p style={{ marginBottom: '1.5rem', color: '#4b5563', lineHeight: '1.7' }}>Dive into our comprehensive guide for the most anticipated clash of the year: Quetta Gladiators vs Lahore Qalandars. Discover exactly which apps and broadcasters are showing the match.</p>
            <Link href="/where-to-watch-quetta-vs-lahore" className="btn" style={{ backgroundColor: '#0A3258' }}>Broadcaster Guide</Link>
          </div>

          <div className="team-card" style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ color: '#f59e0b', fontSize: '1.5rem', marginBottom: '1rem' }}>📺 PSL Live Streams</h2>
            <p style={{ marginBottom: '1.5rem', color: '#4b5563', lineHeight: '1.7' }}>Whether you are watching from within Pakistan or internationally, uncover the securest methods to catch the action. Detailed breakdowns on Tamasha, Tapmad, and Willow TV capabilities.</p>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#f59e0b', color: '#fff' }}>Streaming Options</Link>
          </div>
        </div>

        {/* 8 Team Franchises Grid */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '0.5rem' }}>The 8 Elite Franchises</h2>
            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Explore the authentic, detailed player rosters and star captains aiming for the PSL 11 trophy.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Lahore Qalandars', link: '/lahore-qalandars-squad', cap: 'Shaheen Afridi' },
              { name: 'Quetta Gladiators', link: '/quetta-gladiators-squad', cap: 'Saud Shakeel' },
              { name: 'Islamabad United', link: '/islamabad-united-squad', cap: 'Shadab Khan' },
              { name: 'Karachi Kings', link: '/karachi-kings-squad', cap: 'David Warner' },
              { name: 'Multan Sultans', link: '/multan-sultans-squad', cap: 'Mohammad Rizwan' },
              { name: 'Peshawar Zalmi', link: '/peshawar-zalmi-squad', cap: 'Babar Azam' },
              { name: 'Rawalpindi Pindiz', link: '/rawalpindi-pindiz-squad', cap: 'Mohammad Rizwan' },
              { name: 'Hyderabad Kingsmen', link: '/hyderabad-kingsmen-squad', cap: 'Marnus Labuschagne' },
            ].map((team, idx) => (
              <Link href={team.link} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', backgroundColor: '#f9fafb' }} className="team-card">
                  <h3 style={{ color: '#0A3258', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{team.name}</h3>
                  <p style={{ color: '#008236', fontSize: '0.95rem', margin: 0, fontWeight: '500' }}>Capt: {team.cap}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Deep SEO Text Block */}
        <section style={{ backgroundColor: '#f0fdf4', padding: '4rem 3rem', borderRadius: '1.5rem', border: '1px solid #bbf7d0', marginBottom: '2rem' }}>
          <h2 style={{ color: '#166534', marginBottom: '1.5rem', fontSize: '2.2rem', textAlign: 'center' }}>Comprehensive HBL PSL 2026 Coverage</h2>
          <div style={{ color: '#15803d', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Welcome to the ultimate digital portal heavily tailored for everything related to the <strong>HBL Pakistan Super League (PSL 11)</strong>. The 2026 edition marks an extraordinarily historic milestone throughout the tournament's history, expanding seamlessly into an action-packed 8-team structural format directly stemming from the inclusion of highly anticipated expansion squads like the <em>Rawalpindi Pindiz</em> and the <em>Hyderabad Kingsmen</em>. This fast-paced T20 spectacle brings the world's most aggressive batsmen, fierce fast-bowlers, and uniquely adaptive all-rounders straight to standard-defying stadiums extending from the iconic Gaddafi Stadium in Lahore all the way to the historic National Stadium in Karachi.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Whether you're consistently searching for accurate, buffer-free <strong>live streaming options</strong>, instantaneous scoreboard developments, or hyper-authentic player squad analysis, our platform bridges the experiential void perfectly. Fans securely anchoring themselves toward dominant setups such as the <strong>Peshawar Zalmi</strong> and <strong>Multan Sultans</strong> can dive profoundly into squad breakdowns encompassing drafts and retention mechanisms. For data-orientated enthusiasts aggressively tracking movement, consistently monitor our real-time <strong>points table</strong> ensuring you understand the precise tournament math necessary for playoff qualification.
            </p>
            <p>
              Don't remain out of the loop simply due to restrictive broadcasting blackouts. We categorically track every facet of the tournament specifically around localized geography so you can maintain a proactive stance dynamically identifying precisely which broadcasters, or robust premium mobile applications—like <em>Tamasha</em> and <em>Tapmad</em>—bring the unparalleled 2026 PSL phenomenon effortlessly into your living room environment or portable devices safely and legally.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
