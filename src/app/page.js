import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'PSL Live 2026 | Streaming, Scores, Squads & Match Updates',
  description: 'Your ultimate destination for HBL PSL 11 (2026) live streaming, points table, real-time match scores, authentic squad rosters, and exclusive cricket news.',
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is the PSL 2026 final?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The grand final takes place on May 3, 2026, at Gaddafi Stadium, Lahore."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy tickets for PSL 11?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As PSL 11 is strictly behind closed doors, no public tickets are available."
        }
      },
      {
        "@type": "Question",
        "name": "Where to stream matches live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can stream all games live exclusively on Tamasha app, Tapmad, and Willow TV globally."
        }
      },
      {
        "@type": "Question",
        "name": "Which teams are playing in PSL 11?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 8 franchises are: Lahore Qalandars, Karachi Kings, Quetta Gladiators, Islamabad United, Multan Sultans, Peshawar Zalmi, Rawalpindi Pindiz, and Hyderabad Kingsmen."
        }
      },
      {
        "@type": "Question",
        "name": "Why are matches only in Lahore and Karachi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For severe logistical and austerity measures stemming from a regional fuel crisis, the venues were reduced strictly to two major locations."
        }
      },
      {
        "@type": "Question",
        "name": "Who won PSL 10?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The defending champions context is built directly into current rivalry dynamics leading up to PSL 11."
        }
      },
      {
        "@type": "Question",
        "name": "Will there be an opening ceremony in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the grand opening ceremony was officially canceled due to security and austerity allocations."
        }
      },
      {
        "@type": "Question",
        "name": "What time do PSL 2026 matches start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Day matches start at 2:30 PM (PKT) and night matches begin at 7:00 PM (PKT)."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #0A3258 0%, #008236 100%)', color: 'white', padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.2rem', lineHeight: '1.2' }}>Experience the Thrill of <br/><span style={{ color: '#c7fa3b' }}>HBL PSL 11 (2026)</span></h1>
          
          <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', display: 'inline-block', padding: '0.75rem 1.5rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '2rem' }}>
            <p style={{ margin: 0, color: '#e2e8f0', fontWeight: '600', letterSpacing: '1px', fontSize: '0.95rem' }}>
              🗓️ <strong>TOURNAMENT DATES:</strong> MARCH 26 - MAY 3, 2026
            </p>
          </div>

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
              { name: 'Lahore Qalandars', link: '/lahore-qalandars-squad', cap: 'Shaheen Afridi', logo: '/Lahore_Qalandars.png' },
              { name: 'Quetta Gladiators', link: '/quetta-gladiators-squad', cap: 'Saud Shakeel', logo: '/Quetta_Gladiators.png' },
              { name: 'Islamabad United', link: '/islamabad-united-squad', cap: 'Shadab Khan', logo: '/Islamabad_United.png' },
              { name: 'Karachi Kings', link: '/karachi-kings-squad', cap: 'David Warner', logo: '/Karachi_Kings.png' },
              { name: 'Multan Sultans', link: '/multan-sultans-squad', cap: 'Mohammad Rizwan', logo: '/MultanSultans.png' },
              { name: 'Peshawar Zalmi', link: '/peshawar-zalmi-squad', cap: 'Babar Azam', logo: '/Peshawar_Zalmi_logo.png' },
              { name: 'Rawalpindi Pindiz', link: '/rawalpindi-pindiz-squad', cap: 'Mohammad Rizwan', logo: '/Rawalpindiz_Logo.png' },
              { name: 'Hyderabad Kingsmen', link: '/hyderabad-kingsmen-squad', cap: 'Marnus Labuschagne', logo: '/Hyderabad_Houston_Kingsmen_logo.png' },
            ].map((team, idx) => (
              <Link href={team.link} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }} className="team-card">
                  <div style={{ flexShrink: 0, width: '80px', height: '80px', position: 'relative' }}>
                     <Image src={team.logo} alt={`${team.name} Official Logo PSL 2026`} fill style={{ objectFit: 'contain' }} sizes="80px" />
                  </div>
                  <div>
                    <h3 style={{ color: '#0A3258', marginBottom: '0.4rem', fontSize: '1.2rem' }}>{team.name}</h3>
                    <p style={{ color: '#008236', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>Capt: {team.cap}</p>
                  </div>
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

        {/* Latest Tournament News */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#111827' }}>Latest PSL Updates</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             <Link href="/why-no-crowd-in-psl-2026" className="team-card" style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <h3 style={{ color: '#0A3258', marginBottom: '0.5rem' }}>Why No Crowd in PSL 2026?</h3>
                <p style={{ color: '#4b5563', margin: 0 }}>Read the official PCB statement on why matches are behind closed doors.</p>
             </Link>
             <Link href="/psl-11-behind-closed-doors-reason" className="team-card" style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <h3 style={{ color: '#008236', marginBottom: '0.5rem' }}>Behind Closed Doors Context</h3>
                <p style={{ color: '#4b5563', margin: 0 }}>Exploring the economic and security reasons restricting crowds.</p>
             </Link>
             <Link href="/psl-2026-venue-changes" className="team-card" style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <h3 style={{ color: '#b91c1c', marginBottom: '0.5rem' }}>2026 Venue Changes</h3>
                <p style={{ color: '#4b5563', margin: 0 }}>Learn why matches were moved exclusively to Lahore and Karachi stadiums.</p>
             </Link>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#111827' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0A3258' }}>When is the PSL 2026 final?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>The grand final takes place on May 3, 2026, at Gaddafi Stadium, Lahore.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0A3258' }}>Where can I buy tickets for PSL 11?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>As PSL 11 is strictly behind closed doors, no public tickets are available.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0A3258' }}>Where to stream matches live?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>You can stream all games live exclusively on Tamasha app, Tapmad, and Willow TV globally.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0A3258' }}>Which teams are playing in PSL 11?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>The 8 teams: Lahore Qalandars, Karachi Kings, Quetta Gladiators, Islamabad United, Multan Sultans, Peshawar Zalmi, and the new franchises Rawalpindi Pindiz and Hyderabad Kingsmen.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0A3258' }}>Why are matches only in Lahore and Karachi?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>Due to massive austerity logistics and security needs, the PCB reduced the 6 original cities down to just Gaddafi Stadium and National Bank Stadium.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0A3258' }}>Will there be an opening ceremony in 2026?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>No, the opening ceremony was entirely scrubbed to minimize crowd liabilities and save energy grid resources.</p>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: '#f9fafb' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0A3258' }}>What time do PSL 2026 matches start?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>The standard times for PSL 11 are 2:30 PM (PKT) for day games, and 7:00 PM (PKT) for night games under standard lighting.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
