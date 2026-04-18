import Link from 'next/link';
import Image from 'next/image';
import LiveScoreboard from '@/components/LiveScoreboard';
import RecentMatch from '@/components/RecentMatch';

export const metadata = {
  title: 'PSL 2026 Live Score | HBL PSL 11 Ball-by-Ball Match Center',
  description:
    'Get real-time ball-by-ball PSL 2026 live cricket scores, complete scorecards, match commentary, and a full history of all past HBL PSL 11 match results. Never miss a boundary.',
  keywords:
    'psl live score, psl 2026 live score, hbl psl 11 live score, psl scoreboard today, psl ball by ball, psl match center, pakistan super league live, psl 11 scorecard, psl live scorecard 2026',
  openGraph: {
    title: 'PSL 2026 Live Score — HBL PSL 11 Match Center',
    description:
      'Ball-by-ball live scores, scorecards, and complete past match results for HBL PSL 11 (2026).',
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ── All Completed Match Results — PSL 2026 (HBL PSL 11) ──
const pastMatches = [
  {
    match: 27,
    date: 'Apr 18, 2026',
    day: 'Sat',
    time: '7:00 PM PKT',
    teams: 'Lahore Qalandars vs Rawalpindi Pindiz',
    team1: 'Lahore Qalandars',
    team2: 'Rawalpindi Pindiz',
    score1: '210/4 (20)',
    score2: '162/8 (20)',
    result: 'Lahore Qalandars won by 48 runs',
    winner: 'Lahore Qalandars',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Fakhar Zaman',
    highlight: "Fakhar's 84 anchors Lahore to a massive 210, Rawalpindi continue winless streak",
    logo1: '/Lahore_Qalandars.png',
    logo2: '/Rawalpindiz_Logo.png',
  },
  {
    match: 26,
    date: 'Apr 17, 2026',
    day: 'Fri',
    time: '7:00 PM PKT',
    teams: 'Lahore Qalandars vs Quetta Gladiators',
    team1: 'Lahore Qalandars',
    team2: 'Quetta Gladiators',
    score1: '160/2 (16.4)',
    score2: '159/7 (20)',
    result: 'Lahore Qalandars won by 8 wickets',
    winner: 'Lahore Qalandars',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Fakhar Zaman',
    highlight: "Fakhar Zaman fires 88* off 45 to make light work of the chase",
    logo1: '/Lahore_Qalandars.png',
    logo2: '/Quetta_Gladiators.png',
  },
  {
    match: 25,
    date: 'Apr 16, 2026',
    day: 'Thu',
    time: '7:00 PM PKT',
    teams: 'Karachi Kings vs Islamabad United',
    team1: 'Karachi Kings',
    team2: 'Islamabad United',
    score1: '185/8 (20)',
    score2: '187/6 (20)',
    result: 'Islamabad United won by 2 runs',
    winner: 'Islamabad United',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Naseem Shah',
    highlight: "Naseem defends 9 runs in the final over in a thrilling finish",
    logo1: '/Karachi_Kings.png',
    logo2: '/Islamabad_United.png',
  },
  {
    match: 24,
    date: 'Apr 16, 2026',
    day: 'Thu',
    time: '2:30 PM PKT',
    teams: 'Hyderabad Kingsmen vs Rawalpindi Pindiz',
    team1: 'Hyderabad Kingsmen',
    team2: 'Rawalpindi Pindiz',
    score1: '141/0 (14.2)',
    score2: '138/9 (20)',
    result: 'Hyderabad Kingsmen won by 10 wickets',
    winner: 'Hyderabad Kingsmen',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Abdullah Shafique',
    highlight: "Abdullah Shafique and Saim Ayub chase target effortlessly",
    logo1: '/Hyderabad_Houston_Kingsmen_logo.png',
    logo2: '/Rawalpindiz_Logo.png',
  },
  {
    match: 23,
    date: 'Apr 15, 2026',
    day: 'Wed',
    time: '7:00 PM PKT',
    teams: 'Peshawar Zalmi vs Quetta Gladiators',
    team1: 'Peshawar Zalmi',
    team2: 'Quetta Gladiators',
    score1: '175/3 (18.1)',
    score2: '172/8 (20)',
    result: 'Peshawar Zalmi won by 7 wickets',
    winner: 'Peshawar Zalmi',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Jason Roy',
    highlight: "Jason Roy returns to form with an explosive 75 (42)",
    logo1: '/Peshawar_Zalmi_logo.png',
    logo2: '/Quetta_Gladiators.png',
  },
  {
    match: 22,
    date: 'Apr 13, 2026',
    day: 'Mon',
    time: '7:00 PM PKT',
    teams: 'Peshawar Zalmi vs Multan Sultans',
    team1: 'Peshawar Zalmi',
    team2: 'Multan Sultans',
    score1: '202/5 (20)',
    score2: '188/9 (20)',
    result: 'Peshawar Zalmi won by 14 runs',
    winner: 'Peshawar Zalmi',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Babar Azam',
    highlight: "Babar Azam leads Zalmi to top of the table against strong Sultans",
    logo1: '/Peshawar_Zalmi_logo.png',
    logo2: '/MultanSultans.png',
  },
  {
    match: 21,
    date: 'Apr 12, 2026',
    day: 'Sun',
    time: '7:00 PM PKT',
    teams: 'Hyderabad Kingsmen vs Islamabad United',
    team1: 'Hyderabad Kingsmen',
    team2: 'Islamabad United',
    score1: '145/8 (20)',
    score2: '148/5 (17.5)',
    result: 'Islamabad United won by 5 wickets',
    winner: 'Islamabad United',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Imad Wasim',
    highlight: "Imad's all-round cameo ensures a comfortable win",
    logo1: '/Hyderabad_Houston_Kingsmen_logo.png',
    logo2: '/Islamabad_United.png',
  },
  {
    match: 20,
    date: 'Apr 11, 2026',
    day: 'Sat',
    time: '7:00 PM PKT',
    teams: 'Karachi Kings vs Hyderabad Kingsmen',
    team1: 'Karachi Kings',
    team2: 'Hyderabad Kingsmen',
    score1: '165/2 (16.2)',
    score2: '164/7 (20)',
    result: 'Karachi Kings won by 8 wickets',
    winner: 'Karachi Kings',
    venue: 'National Bank Stadium, Karachi',
    potm: 'James Vince',
    highlight: "Vince dominates the chase to keep Kings in playoff contention",
    logo1: '/Karachi_Kings.png',
    logo2: '/Hyderabad_Houston_Kingsmen_logo.png',
  },
  {
    match: 19,
    date: 'Apr 11, 2026',
    day: 'Sat',
    time: '2:30 PM PKT',
    teams: 'Peshawar Zalmi vs Lahore Qalandars',
    team1: 'Peshawar Zalmi',
    team2: 'Lahore Qalandars',
    score1: '190/6 (20)',
    score2: '180/8 (20)',
    result: 'Peshawar Zalmi won by 10 runs',
    winner: 'Peshawar Zalmi',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Saim Ayub',
    highlight: "Saim hits swift 60 (31) to carry Zalmi's momentum",
    logo1: '/Peshawar_Zalmi_logo.png',
    logo2: '/Lahore_Qalandars.png',
  },
  {
    match: 18,
    date: 'Apr 10, 2026',
    day: 'Fri',
    time: '7:00 PM PKT',
    teams: 'Quetta Gladiators vs Rawalpindi Pindiz',
    team1: 'Quetta Gladiators',
    team2: 'Rawalpindi Pindiz',
    score1: '170/6 (20)',
    score2: '150/9 (20)',
    result: 'Quetta Gladiators won by 20 runs',
    winner: 'Quetta Gladiators',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Colin Munro',
    highlight: "Munro helps Pindiz defend early total successfully",
    logo1: '/Quetta_Gladiators.png',
    logo2: '/Rawalpindiz_Logo.png',
  },
  {
    match: 17,
    date: 'Apr 9, 2026',
    day: 'Thu',
    time: '7:00 PM PKT',
    teams: 'Karachi Kings vs Peshawar Zalmi',
    team1: 'Karachi Kings',
    team2: 'Peshawar Zalmi',
    score1: '141/8 (20)',
    score2: '142/4 (18.3)',
    result: 'Peshawar Zalmi won by 6 wickets',
    winner: 'Peshawar Zalmi',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Rovman Powell',
    highlight: "Powell's late barrage ends Karachi's resistance",
    logo1: '/Karachi_Kings.png',
    logo2: '/Peshawar_Zalmi_logo.png',
  },
  {
    match: 16,
    date: 'Apr 9, 2026',
    day: 'Thu',
    time: '2:30 PM PKT',
    teams: 'Lahore Qalandars vs Islamabad United',
    team1: 'Lahore Qalandars',
    team2: 'Islamabad United',
    score1: '198/4 (20)',
    score2: '183/7 (20)',
    result: 'Lahore Qalandars won by 15 runs',
    winner: 'Lahore Qalandars',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Shaheen Afridi',
    highlight: "Afridi's brilliant early spell (3/20) halts United's chase",
    logo1: '/Lahore_Qalandars.png',
    logo2: '/Islamabad_United.png',
  },
  {
    match: 15,
    date: 'Apr 8, 2026',
    day: 'Wed',
    time: '7:00 PM PKT',
    teams: 'Hyderabad Kingsmen vs Peshawar Zalmi',
    team1: 'Hyderabad Kingsmen',
    team2: 'Peshawar Zalmi',
    score1: '168/6 (20)',
    score2: '172/6 (19.1)',
    result: 'Peshawar Zalmi won by 4 wickets',
    winner: 'Peshawar Zalmi',
    venue: 'National Bank Stadium, Karachi',
    potm: 'Mohammad Haris',
    highlight: "Haris steadies top order with 54 (36)",
    logo1: '/Hyderabad_Houston_Kingsmen_logo.png',
    logo2: '/Peshawar_Zalmi_logo.png',
  },
  {
    match: 14,
    date: 'Apr 6, 2026',
    day: 'Mon',
    time: '7:00 PM PKT',
    teams: 'Multan Sultans vs Rawalpindi Pindiz',
    team1: 'Multan Sultans',
    team2: 'Rawalpindi Pindustan',
    score1: '204/4 (20)',
    score2: '172/8 (20)',
    result: 'Multan Sultans won by 32 runs',
    winner: 'Multan Sultans',
    venue: 'Gaddafi Stadium, Lahore',
    potm: 'Usman Khan',
    highlight: "Usman Khan's explosive 76 powers Sultans to a record 5-0 start",
    logo1: '/MultanSultans.png',
    logo2: '/Rawalpindiz_Logo.png',
  },
];

const upcomingMatches = [
  { match: 28, date: 'Apr 19, 2026',  teams: 'Karachi Kings vs Multan Sultans',          time: '2:30 PM PKT', venue: 'National Bank Stadium', link: '/' },
  { match: 29, date: 'Apr 19, 2026',  teams: 'Peshawar Zalmi vs Quetta Gladiators',      time: '7:00 PM PKT', venue: 'National Bank Stadium', link: '/' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://psllive.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'PSL 2026 Live Score', item: 'https://psllive.vercel.app/live-score' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I watch PSL 2026 live score ball by ball?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can follow PSL 2026 live ball-by-ball scores right here on PSLLive. Our scoreboard auto-updates every 15 seconds during active matches, providing runs, wickets, overs, current run rate, and match status in real-time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which channel is showing PSL 2026 live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PSL 2026 is broadcast live on PTV Sports and ARY Zap in Pakistan. International viewers can watch on Willow TV (USA/Canada), Sky Sports Cricket (UK), and Ten Sports (India/South Asia). Visit our live streaming page for free online options.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many matches have been played in PSL 2026 so far?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of April 18, 2026, 27 matches have been completed in HBL PSL 11. Peshawar Zalmi lead the points table with 13 points.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the highest scorer in PSL 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fakhar Zaman of Lahore Qalandars is the standout performer with a match-winning century of 104* (56 balls) in the PSL 11 opener against Hyderabad Kingsmen on March 26, 2026. Babar Azam, Mohammad Nawaz, and Shadab Khan have also contributed significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the PSL 2026 opening match result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HBL PSL 11 tournament opener on March 26, 2026 was played between Lahore Qalandars and Hyderabad Kingsmen at Gaddafi Stadium. Lahore Qalandars won by a massive 69 runs, posting 219/3 and restricting Hyderabad to 150/9. Fakhar Zaman was Player of the Match with a stunning 104* off 56 balls.',
      },
    },
  ],
};

const sportsEventSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'HBL Pakistan Super League 2026 (PSL 11) — Live Score & Match Center',
  startDate: '2026-03-26',
  endDate: '2026-05-03',
  sport: 'Cricket',
  description: 'Live ball-by-ball scores and full match results for HBL PSL 11 (2026).',
  organizer: { '@type': 'Organization', name: 'Pakistan Cricket Board' },
  location: [
    { '@type': 'Place', name: 'Gaddafi Stadium, Lahore' },
    { '@type': 'Place', name: 'National Bank Stadium, Karachi' },
  ],
};

const liveBlogSchema = {
  '@context': 'https://schema.org',
  '@type': 'LiveBlogPosting',
  '@id': 'https://psllive.vercel.app/live-score#liveblog',
  headline: 'PSL 2026 Live Ball-by-Ball Score Updates',
  description: 'Real-time live cricket score updates for HBL PSL 11 (2026). Ball by ball commentary and scorecard.',
  about: {
    '@type': 'Event',
    name: 'Pakistan Super League 2026'
  },
  coverageStartTime: '2026-03-26T14:30:00Z',
  coverageEndTime: '2026-05-03T23:59:59Z',
  liveBlogUpdate: pastMatches.slice(0, 5).map(m => ({
    '@type': 'BlogPosting',
    headline: `Match ${m.match}: ${m.teams} Result`,
    datePublished: new Date(m.date).toISOString(),
    articleBody: m.result + ". " + m.highlight
  }))
};

const broadcastSchema = {
  '@context': 'https://schema.org',
  '@type': 'BroadcastEvent',
  name: 'PSL 2026 Live Broadcast',
  isLiveBroadcast: true,
  startDate: '2026-04-18T14:00:00Z',
  endDate: '2026-04-18T18:00:00Z',
  broadcastOfEvent: sportsEventSchema,
  videoFormat: 'HD'
};

export default function LiveScorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(liveBlogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(broadcastSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A3258 0%, #0d4a7a 40%, #008A37 100%)',
        color: 'white',
        padding: '4.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(199,250,59,0.18) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(0,138,55,0.25) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <p style={{ color: '#c7fa3b', fontWeight: '700', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            🔴 HBL PSL 11 · 2026 · Live Match Center
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.15', color: 'white', marginBottom: '1rem' }}>
            PSL 2026 Live Score<br />
            <span style={{ color: '#c7fa3b' }}>Ball-by-Ball Updates</span>
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '0.75rem' }}>
            🏏 27 Matches Completed &nbsp;|&nbsp; 17 More to Go &nbsp;|&nbsp; 🏆 8 Teams · T20 Format
          </p>
          <p style={{ fontSize: '0.95rem', color: '#a7f3d0', marginBottom: '2rem' }}>
            Auto-updating every 15 seconds · Gaddafi Stadium, Lahore & National Bank Stadium, Karachi
          </p>

          {/* Mini match status strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[
              { label: 'Matches Played', value: '27', icon: '✅' },
              { label: 'Matches Left', value: '17', icon: '📅' },
              { label: 'League Leader', value: 'Peshawar Zalmi', icon: '🥇' },
              { label: 'Next Match', value: 'Apr 19 · 2:30PM', icon: '⏭️' },
            ].map((stat, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.75rem', padding: '0.5rem 0.9rem', textAlign: 'center', minWidth: '90px' }}>
                <div style={{ fontSize: '1rem', marginBottom: '0.15rem' }}>{stat.icon}</div>
                <div style={{ color: '#c7fa3b', fontWeight: '800', fontSize: '0.85rem' }}>{stat.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.68rem', fontWeight: '600' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/points-table" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: 'bold' }}>
              🏆 Points Table
            </Link>
            <Link href="/psl-11-2026-schedule" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
              📅 Full Schedule
            </Link>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#008A37', color: 'white' }}>
              📺 Watch Live
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>

        {/* ── Live Scoreboard Widget ── */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <h2 style={{ marginTop: 0, color: '#0A3258' }}>🔴 Live Match Scoreboard</h2>
            <span style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '0.3rem 0.85rem', borderRadius: '1rem', fontWeight: '700', fontSize: '0.8rem', border: '1px solid #fecaca', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#dc2626', display: 'inline-block', animation: 'pulse 1.5s infinite' }}></span>
              Auto-refreshing every 15s
            </span>
          </div>
          <LiveScoreboard />
          <RecentMatch />
        </section>

        {/* ── Quick Summary Box ── */}
        <section style={{
          backgroundColor: '#eff6ff',
          border: '2px solid #3b82f6',
          borderRadius: '0.75rem',
          padding: '1.5rem 2rem',
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ color: '#1d4ed8', marginTop: 0, fontSize: '1.2rem' }}>
            📊 PSL 2026 — Quick Tournament Snapshot (After 27 Matches)
          </h2>
          <ul style={{ color: '#1e3a5f', lineHeight: '2', paddingLeft: '1.25rem', margin: 0 }}>
            <li><strong>🥇 League Leader:</strong> Peshawar Zalmi — 13 pts (6 Wins, 1 NR)</li>
            <li><strong>🔥 Top Performer:</strong> Fakhar Zaman (LQ) with 88* vs Quetta</li>
            <li><strong>📅 Next Match:</strong> Karachi Kings vs Multan Sultans — Apr 19, 2:30 PM PKT</li>
          </ul>
        </section>

        {/* ── Past Match History ── */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <h2 style={{ marginTop: 0 }}>🏏 Matches Uptill Now — HBL PSL 11 (2026)</h2>
            <span style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '0.3rem 0.85rem', borderRadius: '1rem', fontWeight: '700', fontSize: '0.8rem', border: '1px solid #bbf7d0' }}>
              ✅ Recent Completed Matches
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pastMatches.map((m) => (
              <div key={m.match} style={{
                border: '1px solid #e5e7eb',
                borderRadius: '1rem',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}>
                {/* Match Header */}
                <div style={{
                  backgroundColor: '#0A3258',
                  padding: '0.65rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ backgroundColor: '#c7fa3b', color: '#0A3258', padding: '0.15rem 0.55rem', borderRadius: '0.3rem', fontSize: '0.72rem', fontWeight: '800' }}>
                      MATCH {m.match}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem' }}>
                      📅 {m.date} · {m.day} · {m.time}
                    </span>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>
                    🏟️ {m.venue}
                  </span>
                </div>

                {/* Score Content */}
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>

                    {/* Team 1 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1', minWidth: '140px' }}>
                      <Image src={m.logo1} alt={m.team1} width={42} height={42} style={{ objectFit: 'contain' }} />
                      <div>
                        <div style={{ fontWeight: '700', color: '#0A3258', fontSize: '0.95rem' }}>{m.team1}</div>
                        <div style={{ fontWeight: '800', fontSize: '1.15rem', color: m.winner === m.team1 ? '#16a34a' : '#374151' }}>
                          {m.score1}
                        </div>
                      </div>
                    </div>

                    {/* VS Badge */}
                    <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
                      <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: '800' }}>VS</div>
                    </div>

                    {/* Team 2 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1', minWidth: '140px', justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
                      <Image src={m.logo2} alt={m.team2} width={42} height={42} style={{ objectFit: 'contain' }} />
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: '700', color: '#0A3258', fontSize: '0.95rem' }}>{m.team2}</div>
                        <div style={{ fontWeight: '800', fontSize: '1.15rem', color: m.winner === m.team2 ? '#16a34a' : '#374151' }}>
                          {m.score2}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Result Bar */}
                  <div style={{ marginTop: '1rem', padding: '0.65rem 1rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', border: '1px solid #bbf7d0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: '700', color: '#15803d', fontSize: '0.9rem' }}>
                      🏆 {m.result}
                    </span>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                        ⭐ POTM: <strong style={{ color: '#0A3258' }}>{m.potm}</strong>
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#6b7280', fontStyle: 'italic' }}>
                        {m.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Upcoming Fixtures ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>📅 Upcoming PSL 2026 Fixtures</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '1rem' }}>
            {upcomingMatches.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.25rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.75rem',
                backgroundColor: '#f9fafb',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ backgroundColor: '#0A3258', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.72rem', fontWeight: '800' }}>
                    M{m.match}
                  </span>
                  {m.link ? (
                    <Link href={m.link} style={{ fontWeight: '700', color: '#0A3258', fontSize: '0.95rem' }}>
                      {m.teams}
                    </Link>
                  ) : (
                    <span style={{ fontWeight: '700', color: '#0A3258', fontSize: '0.95rem' }}>{m.teams}</span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>📅 {m.date} · ⏰ {m.time}</span>
                  <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>🏟️ {m.venue}</span>
                  {m.link && (
                    <Link href={m.link} style={{ color: '#008A37', fontWeight: '700', fontSize: '0.8rem' }}>
                      Preview →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <Link href="/psl-11-2026-schedule" style={{ color: '#0A3258', fontWeight: '700', fontSize: '0.9rem' }}>
              View Full 44-Match Schedule →
            </Link>
          </div>
        </section>

        {/* ── Article / Deep Content ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>PSL 2026 Live Score — Your Complete Match Center</h2>
          <p>
            Welcome to the <strong>HBL PSL 11 (2026) Live Match Center</strong> — the most comprehensive destination for <strong>PSL 2026 live scores</strong>, ball-by-ball commentary, and complete match results. Whether you're tracking the live run rate mid-over, checking a completed scorecard, or previewing the next blockbuster fixture, this page has everything you need.
          </p>

          <h3>How PSL 2026 Live Scores Work</h3>
          <p>
            Our live scoreboard connects to cricket data feeds and auto-updates every 15 seconds during active PSL matches. The moment the coin toss concludes, the live score widget activates with batting lineup, over-by-over scores, wicket alerts, current run rate (CRR), required run rate (RRR), and partnership stats. On non-match days, the widget seamlessly transitions to showing the most recent completed result.
          </p>

          <h3>Match 1 — The PSL 11 Opener: Lahore Qalandars vs Hyderabad Kingsmen</h3>
          <p>
            <strong>March 26, 2026</strong> — The HBL PSL 11 tournament began with a spectacular statement by <Link href="/lahore-qalandars-squad">Lahore Qalandars</Link>. Batting first, Lahore set a massive target of 220 (219/3 in 20 overs), propelled by a stunning century from <strong>Fakhar Zaman (104* off 56 balls)</strong> — one of the fastest PSL hundreds in history. The <Link href="/hyderabad-kingsmen-squad">Hyderabad Kingsmen</Link>, making their PSL debut, were unable to cope with the pressure and fell to 150/9, handing Lahore a 69-run victory. Fakhar was an easy choice for Player of the Match.
          </p>

          <h3>Match 2 — Karachi Kings vs Quetta Gladiators: Amir's Magic</h3>
          <p>
            <strong>March 27, 2026</strong> — One of PSL's greatest rivalries renewed at <Link href="/national-bank-stadium-karachi-psl-matches">National Bank Stadium</Link>. <Link href="/karachi-kings-squad">Karachi Kings</Link> posted 167/7 — a competitive but not imposing total. The match turned on <strong>Mohammad Amir's stunning 4/28</strong>, as the veteran left-arm pacer systematically dismantled <Link href="/quetta-gladiators-squad">Quetta Gladiators'</Link> middle order. Quetta were skittled for 153/9, giving Karachi a 14-run win and an early 2-point cushion.
          </p>

          <h3>Match 3 — Peshawar Zalmi vs Rawalpindi Pindiz: Babar's Masterclass</h3>
          <p>
            <strong>March 28, 2026 (2:30 PM)</strong> — The afternoon match at Gaddafi Stadium featured <Link href="/peshawar-zalmi-squad">Peshawar Zalmi</Link> against the newly-formed <Link href="/rawalpindi-pindiz-squad">Rawalpindi Pindiz</Link>. Captain <strong>Babar Azam delivered a composed 71 off 54 balls</strong> to anchor Zalmi to 181/6. The Pindiz, still finding their feet as an expansion franchise, fell 22 runs short (159/8), with Babar winning the Player of the Match award.
          </p>

          <h3>Match 4 — Multan Sultans vs Islamabad United: Shadab's All-Round Brilliance</h3>
          <p>
            <strong>March 28, 2026 (7:00 PM)</strong> — The evening fixture produced the most thrilling finish of the tournament so far. <Link href="/multan-sultans-squad">Multan Sultans</Link> posted 174/7 on a good batting track. <Link href="/islamabad-united-squad">Islamabad United</Link> responded superbly, with <strong>Shadab Khan contributing 2/24 with the ball and 41 runs in the chase</strong>. United crossed the line in 19.2 overs with 5 wickets in hand, denying Multan and securing 2 crucial points.
          </p>

          <h3>Match 6 — El Clásico: Karachi Kings edge Lahore Qalandars</h3>
          <p>
            <strong>March 29, 2026 (7:00 PM)</strong> — The most anticipated fixture of the league stage saw <Link href="/karachi-kings-squad">Karachi Kings</Link> take on defending champions <Link href="/lahore-qalandars-squad">Lahore Qalandars</Link>. Lahore posted 158/8, but Karachi chased it down with 2 balls to spare. <strong>David Warner (55 off 38)</strong> anchored the chase, while Mohammad Amir again starred with the ball, keeping Lahore's big hitters in check.
          </p>

          <h3>Match 7 — Islamabad United vs Peshawar Zalmi: Rain Wins</h3>
          <p>
            <strong>March 31, 2026</strong> — A heavy downpour in Lahore made any play impossible. Both teams were awarded 1 point each, propelling <Link href="/peshawar-zalmi-squad">Peshawar Zalmi</Link> to 3 points and the second spot on the table, while <Link href="/islamabad-united-squad">Islamabad United</Link> got their first point of the tournament.
          </p>
          <h3>Match 8 — Multan Sultans vs Hyderabad Kingsmen: The Farhan Show</h3>
          <p>
            <strong>April 1, 2026</strong> — In what will surely be remembered as one of the greatest run-chases in PSL history, <Link href="/multan-sultans-squad">Multan Sultans</Link> hunted down a massive 226-run target set by <Link href="/hyderabad-kingsmen-squad">Hyderabad Kingsmen</Link>. Hyderabad had posted a record-breaking 225/5, but Multan's <strong>S. Farhan blazed an unbeaten 106* off just 57 balls</strong>. His masterclass, supported by A. Minhas (26*), saw Multan cross the line with 8 balls to spare (227/4), taking them to the top of the table.
          </p>
        </article>

        {/* ── Broadcasting Info ── */}
        <section style={{ marginBottom: '3rem', backgroundColor: '#0A3258', borderRadius: '1rem', padding: '2rem', color: 'white' }}>
          <h2 style={{ marginTop: 0, color: '#c7fa3b' }}>📺 Where to Watch PSL 2026 Live</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {[
              { region: '🇵🇰 Pakistan', channels: 'PTV Sports, ARY Zap (Free-to-Air)' },
              { region: '🇬🇧 United Kingdom', channels: 'Sky Sports Cricket' },
              { region: '🇺🇸 USA / Canada', channels: 'Willow TV, Cricbuzz' },
              { region: '🌍 International', channels: 'PSL Official App, ESPN+ (select regions)' },
            ].map((b, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '1rem', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontWeight: '700', color: '#c7fa3b', marginBottom: '0.3rem', fontSize: '0.9rem' }}>{b.region}</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}>{b.channels}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: '800' }}>
              📺 Find Free Live Streaming Options →
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>❓ PSL 2026 Live Score — FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {[
              { q: 'Where can I watch PSL 2026 live score ball by ball?', a: 'You can follow PSL 2026 live ball-by-ball scores right here on PSLLive. Our scoreboard auto-updates every 15 seconds during active matches, providing runs, wickets, overs, CRR, and match status in real-time.' },
              { q: 'Which channel is showing PSL 2026 live in Pakistan?', a: 'PSL 2026 is broadcast live on PTV Sports and ARY Zap in Pakistan. Both channels offer free-to-air coverage throughout the tournament. Visit our live streaming page for online options.' },
              { q: 'How many matches have been played in PSL 2026 so far?', a: 'As of April 18, 2026, 27 matches have been completed in HBL PSL 11. Peshawar Zalmi lead the points table with 13 points.' },
              { q: 'Who is the highest scorer in PSL 2026?', a: 'Fakhar Zaman of Lahore Qalandars is the standout with 104* off 56 balls in Match 1 and 88* in Match 26. S. Farhan (106*) and Usman Khan (76) have also played sensational knocks.' },
              { q: "What is the biggest win in PSL 2026 so far?", a: "The biggest win so far is Lahore Qalandars' 69-run victory over Hyderabad Kingsmen (Match 1, March 26). Lahore posted 219/3 and restricted Hyderabad to 150/9." },
              { q: "When is the next PSL 2026 match?", a: "The next match is Karachi Kings vs Multan Sultans on April 19, 2026 at 2:30 PM PKT at the National Bank Stadium, Karachi." },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem 1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#f9fafb' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: '#0A3258' }}>{item.q}</h3>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '0.95rem' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Links ── */}
        <section style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
          <h2>🔗 Related Pages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {[
              { href: '/points-table', label: '🏆 PSL 2026 Points Table' },
              { href: '/psl-11-2026-schedule', label: '📅 Full PSL 2026 Schedule' },
              { href: '/psl-live', label: '📺 Where to Watch PSL Live' },
              { href: '/lahore-qalandars-vs-karachi-kings', label: '⚔️ LQ vs KK — El Clásico Preview' },
              { href: '/quetta-gladiators-vs-hyderabad-kingsmen', label: '⚔️ QG vs HK Match Preview' },
              { href: '/gaddafi-stadium-psl-schedule', label: '🏟️ Gaddafi Stadium Fixtures' },
              { href: '/national-bank-stadium-karachi-psl-matches', label: '🏟️ NB Stadium Karachi Fixtures' },
              { href: '/hbl-psl-2026', label: 'ℹ️ HBL PSL 2026 Overview' },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="team-card" style={{ display: 'block', padding: '0.85rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: 'white', color: '#0A3258', fontWeight: '600', fontSize: '0.9rem' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
