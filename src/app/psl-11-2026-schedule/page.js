import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'HBL PSL 11 (2026) Full Schedule | Complete 44-Match Timetable & Fixtures',
  description:
    'Official HBL PSL 2026 schedule with all 44 matches. Dates, times, venues, teams and live streaming info for Pakistan Super League 11. Updated daily — never miss a PSL 2026 match.',
  keywords:
    'psl 2026 schedule, hbl psl 2026 schedule, psl 11 schedule, psl fixture 2026, pakistan super league 2026 timetable, psl 2026 match dates, psl 11 fixture list, psl match today, psl schedule pdf',
  openGraph: {
    title: 'HBL PSL 11 (2026) Full Schedule — All 44 Matches',
    description:
      'Complete Pakistan Super League 2026 fixture list with dates, venues, and match times. Gaddafi Stadium and National Bank Stadium hosts.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://psllive.vercel.app/psl-11-2026-schedule',
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

const scheduleData = [
  { date: 'Mar 26, 2026', day: 'Thu', match: 1,  teams: 'Lahore Qalandars vs Hyderabad Kingsmen',   venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Lahore Qalandars won by 69 runs' },
  { date: 'Mar 27, 2026', day: 'Fri', match: 2,  teams: <span>Quetta Gladiators vs <Link href="/karachi-kings-squad">Karachi Kings</Link></span>,        venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Karachi Kings won by 14 runs' },
  { date: 'Mar 28, 2026', day: 'Sat', match: 3,  teams: 'Peshawar Zalmi vs Rawalpindi Pindiz',       venue: 'Lahore',   time: '2:30 PM PKT', status: 'completed', result: 'Peshawar Zalmi won by 22 runs' },
  { date: 'Mar 28, 2026', day: 'Sat', match: 4,  teams: 'Multan Sultans vs Islamabad United',        venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Multan Sultans won by 5 wkts' },
  { date: 'Mar 29, 2026', day: 'Sun', match: 5,  teams: 'Quetta Gladiators vs Hyderabad Kingsmen',  venue: 'Lahore',   time: '2:30 PM PKT', status: 'completed', result: 'Quetta Gladiators won by 39 runs' },
  { date: 'Mar 29, 2026', day: 'Sun', match: 6,  teams: <span>Lahore Qalandars vs <Link href="/karachi-kings-squad">Karachi Kings</Link></span>,         venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Karachi Kings won by 4 wkts', link: '/lahore-qalandars-vs-karachi-kings' },
  { date: 'Mar 31, 2026', day: 'Tue', match: 7,  teams: 'Islamabad United vs Peshawar Zalmi',       venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Match Abandoned (No Result)' },
  { date: 'Apr 1, 2026',  day: 'Wed', match: 8,  teams: 'Multan Sultans vs Hyderabad Kingsmen',     venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Multan Sultans won by 6 wkts' },
  { date: 'Apr 2, 2026',  day: 'Thu', match: 9,  teams: 'Quetta Gladiators vs Islamabad United',    venue: 'Lahore',   time: '2:30 PM PKT', status: 'completed', result: 'Islamabad United won by 8 wickets' },
  { date: 'Apr 2, 2026',  day: 'Thu', match: 10, teams: <span>Rawalpindi Pindiz vs <Link href="/karachi-kings-squad">Karachi Kings</Link></span>,       venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Karachi Kings won by 5 wickets' },
  { date: 'Apr 3, 2026',  day: 'Fri', match: 11, teams: 'Lahore Qalandars vs Multan Sultans',       venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Multan Sultans won by 4 wickets' },
  { date: 'Apr 4, 2026',  day: 'Sat', match: 12, teams: 'Rawalpindi Pindustan vs Islamabad United',    venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Islamabad United won by 6 wickets' },
  { date: 'Apr 5, 2026',  day: 'Sun', match: 13, teams: 'Quetta Gladiators vs Multan Sultans',      venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Multan Sultans won by 6 wickets' },
  { date: 'Apr 6, 2026',  day: 'Mon', match: 14, teams: 'Multan Sultans vs Rawalpindi Pindiz',      venue: 'Lahore',   time: '7:00 PM PKT', status: 'completed', result: 'Multan Sultans won by 32 runs' },
  { date: 'Apr 8, 2026',  day: 'Wed', match: 15, teams: 'Hyderabad Kingsmen vs Peshawar Zalmi',     venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Peshawar Zalmi won by 4 wkts' },
  { date: 'Apr 9, 2026',  day: 'Thu', match: 16, teams: 'Lahore Qalandars vs Islamabad United',     venue: 'Karachi',  time: '2:30 PM PKT', status: 'completed', result: 'Lahore Qalandars won by 15 runs' },
  { date: 'Apr 9, 2026',  day: 'Thu', match: 17, teams: 'Karachi Kings vs Peshawar Zalmi',          venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Peshawar Zalmi won by 6 wkts' },
  { date: 'Apr 10, 2026', day: 'Fri', match: 18, teams: 'Quetta Gladiators vs Rawalpindi Pindiz',   venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Quetta Gladiators won by 20 runs' },
  { date: 'Apr 11, 2026', day: 'Sat', match: 19, teams: 'Peshawar Zalmi vs Lahore Qalandars',       venue: 'Karachi',  time: '2:30 PM PKT', status: 'completed', result: 'Peshawar Zalmi won by 10 runs' },
  { date: 'Apr 11, 2026', day: 'Sat', match: 20, teams: 'Karachi Kings vs Hyderabad Kingsmen',      venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Karachi Kings won by 8 wkts' },
  { date: 'Apr 12, 2026', day: 'Sun', match: 21, teams: 'Hyderabad Kingsmen vs Islamabad United',   venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Islamabad United won by 5 wkts' },
  { date: 'Apr 13, 2026', day: 'Mon', match: 22, teams: 'Peshawar Zalmi vs Multan Sultans',         venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Peshawar Zalmi won by 14 runs' },
  { date: 'Apr 15, 2026', day: 'Wed', match: 23, teams: 'Peshawar Zalmi vs Quetta Gladiators',      venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Peshawar Zalmi won by 7 wkts' },
  { date: 'Apr 16, 2026', day: 'Thu', match: 24, teams: 'Hyderabad Kingsmen vs Rawalpindi Pindiz',  venue: 'Karachi',  time: '2:30 PM PKT', status: 'completed', result: 'Hyderabad Kingsmen won by 10 wkts' },
  { date: 'Apr 16, 2026', day: 'Thu', match: 25, teams: 'Karachi Kings vs Islamabad United',        venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Islamabad United won by 2 runs' },
  { date: 'Apr 17, 2026', day: 'Fri', match: 26, teams: 'Lahore Qalandars vs Quetta Gladiators',    venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Lahore Qalandars won by 8 wkts' },
  { date: 'Apr 18, 2026', day: 'Sat', match: 27, teams: 'Lahore Qalandars vs Rawalpindi Pindiz',    venue: 'Karachi',  time: '7:00 PM PKT', status: 'completed', result: 'Lahore Qalandars won by 48 runs' },
  { date: 'Apr 19, 2026', day: 'Sun', match: 28, teams: 'Karachi Kings vs Multan Sultans',          venue: 'Karachi',  time: '2:30 PM PKT', status: 'upcoming' },
  { date: 'Apr 19, 2026', day: 'Sun', match: 29, teams: 'Peshawar Zalmi vs Quetta Gladiators',      venue: 'Karachi',  time: '7:00 PM PKT', status: 'upcoming' },
  { date: 'Apr 21, 2026', day: 'Tue', match: 30, teams: 'Lahore Qalandars vs Quetta Gladiators',    venue: 'Lahore',   time: '2:30 PM PKT', status: 'upcoming' },
  { date: 'Apr 21, 2026', day: 'Tue', match: 31, teams: 'Rawalpindi Pindiz vs Multan Sultans',      venue: 'Karachi',  time: '7:00 PM PKT', status: 'upcoming' },
  { date: 'Apr 22, 2026', day: 'Wed', match: 32, teams: 'Karachi Kings vs Peshawar Zalmi',          venue: 'Lahore',   time: '2:30 PM PKT', status: 'upcoming' },
  { date: 'Apr 22, 2026', day: 'Wed', match: 33, teams: 'Hyderabad Kingsmen vs Multan Sultans',     venue: 'Karachi',  time: '7:00 PM PKT', status: 'upcoming' },
  { date: 'Apr 23, 2026', day: 'Thu', match: 34, teams: 'Rawalpindi Pindiz vs Islamabad United',    venue: 'Karachi',  time: '2:30 PM PKT', status: 'upcoming' },
  { date: 'Apr 23, 2026', day: 'Thu', match: 35, teams: 'Lahore Qalandars vs Karachi Kings',        venue: 'Lahore',   time: '7:00 PM PKT', status: 'upcoming', link: '/lahore-qalandars-vs-karachi-kings' },
  { date: 'Apr 24, 2026', day: 'Fri', match: 36, teams: 'Hyderabad Kingsmen vs Islamabad United',   venue: 'Karachi',  time: '7:00 PM PKT', status: 'upcoming' },
  { date: 'Apr 25, 2026', day: 'Sat', match: 37, teams: 'Quetta Gladiators vs Karachi Kings',       venue: 'Lahore',   time: '2:30 PM PKT', status: 'upcoming' },
  { date: 'Apr 25, 2026', day: 'Sat', match: 38, teams: 'Lahore Qalandars vs Peshawar Zalmi',       venue: 'Lahore',   time: '7:00 PM PKT', status: 'upcoming' },
  { date: 'Apr 26, 2026', day: 'Sun', match: 39, teams: 'Hyderabad Kingsmen vs Rawalpindi Pindiz',  venue: 'Karachi',  time: '2:30 PM PKT', status: 'upcoming' },
  { date: 'Apr 26, 2026', day: 'Sun', match: 40, teams: 'Islamabad United vs Multan Sultans',       venue: 'Karachi',  time: '7:00 PM PKT', status: 'upcoming' },
  { date: 'Apr 28, 2026', day: 'Tue', match: 41, teams: '🏆 Qualifier',                             venue: 'Karachi',  time: '7:00 PM PKT', status: 'playoff' },
  { date: 'Apr 29, 2026', day: 'Wed', match: 42, teams: '⚡ Eliminator 1',                          venue: 'Lahore',   time: '7:00 PM PKT', status: 'playoff' },
  { date: 'May 1, 2026',  day: 'Fri', match: 43, teams: '⚡ Eliminator 2',                          venue: 'Lahore',   time: '7:00 PM PKT', status: 'playoff' },
  { date: 'May 3, 2026',  day: 'Sun', match: 44, teams: '🏆 GRAND FINAL',                           venue: 'Lahore',   time: '7:00 PM PKT', status: 'final' },
];

export default function PslSchedulePage() {
    organizer: { '@type': 'Organization', name: 'Pakistan Cricket Board (PCB)' },
    eventStatus: 'https://schema.org/EventScheduled',
  };

  const matchItemsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PSL 2026 Match Fixtures',
    itemListElement: scheduleData.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Match ${m.match}: ${typeof m.teams === 'string' ? m.teams : m.match}`,
      url: `https://psllive.vercel.app/psl-11-2026-schedule#match-${m.match}`
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://psllive.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "PSL 2026 Schedule", "item": "https://psllive.vercel.app/psl-11-2026-schedule" }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When does PSL 2026 start and end?',
        acceptedAnswer: { '@type': 'Answer', text: 'HBL PSL 11 (2026) runs from March 26, 2026 to May 3, 2026, with 44 matches across Lahore and Karachi.' },
      },
      {
        '@type': 'Question',
        name: 'How many teams are in PSL 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'PSL 2026 features 8 teams: Lahore Qalandars, Karachi Kings, Multan Sultans, Quetta Gladiators, Peshawar Zalmi, Islamabad United, Rawalpindi Pindiz, and Hyderabad Kingsmen (two expansion franchises).' },
      },
      {
        '@type': 'Question',
        name: 'Where are PSL 2026 matches being played?',
        acceptedAnswer: { '@type': 'Answer', text: 'All PSL 2026 matches are played at Gaddafi Stadium in Lahore and National Bank Stadium in Karachi. The PSL 2026 Final will be held at Gaddafi Stadium, Lahore.' },
      },
      {
        '@type': 'Question',
        name: 'When is the PSL 2026 Final?',
        acceptedAnswer: { '@type': 'Answer', text: 'The HBL PSL 11 Final is scheduled for Sunday, May 3, 2026 at 7:00 PM PKT at Gaddafi Stadium, Lahore.' },
      },
      {
        '@type': 'Question',
        name: 'How many matches are in PSL 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'PSL 11 (2026) features a total of 44 matches: 40 league stage matches plus 4 playoff matches (Qualifier, Eliminator 1, Eliminator 2, and Final).' },
      },
      {
        '@type': 'Question',
        name: 'What time do PSL 2026 matches start?',
        acceptedAnswer: { '@type': 'Answer', text: 'PSL 2026 matches start at either 2:30 PM PKT for afternoon games or 7:00 PM PKT for evening games. Day matches run around 5-6 hours including breaks.' },
      },
    ],
  };

  const getRowStyle = (status) => {
    switch (status) {
      case 'completed': return { bg: '#f0fdf4', border: '#bbf7d0', textColor: '#166534', badge: 'RESULT', badgeBg: '#16a34a' };
      case 'today':     return { bg: '#fff7ed', border: '#fed7aa', textColor: '#9a3412', badge: 'TODAY', badgeBg: '#f97316' };
      case 'playoff':   return { bg: '#eff6ff', border: '#bfdbfe', textColor: '#1e40af', badge: 'PLAYOFF', badgeBg: '#3b82f6' };
      case 'final':     return { bg: '#fdf4ff', border: '#e9d5ff', textColor: '#6b21a8', badge: 'FINAL', badgeBg: '#9333ea' };
      default:          return { bg: '#ffffff', border: '#e5e7eb', textColor: '#1f2937', badge: null, badgeBg: null };
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scheduleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(matchItemsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A3258 0%, #008A37 60%, #c7fa3b 100%)',
        color: 'white',
        padding: '4.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(199,250,59,0.2) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(0,138,55,0.3) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <p style={{ color: '#c7fa3b', fontWeight: '700', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            HBL PSL 11 · 2026 · Official Tournament Schedule
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.15', color: 'white', marginBottom: '1rem' }}>
            PSL 2026 Full Schedule<br />
            <span style={{ color: '#c7fa3b' }}>All 44 Matches</span>
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '0.75rem' }}>
            🗓️ March 26 – May 3, 2026 &nbsp;|&nbsp; 🏟️ Lahore & Karachi &nbsp;|&nbsp; 🏏 8 Teams · T20 Format
          </p>
          <p style={{ fontSize: '0.95rem', color: '#a7f3d0', marginBottom: '2rem' }}>
            Gaddafi Stadium (Lahore) · National Bank Stadium (Karachi)
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/live-score" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: 'bold' }}>
              🔴 Live Score
            </Link>
            <Link href="/points-table" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
              🏆 Points Table
            </Link>
            <Link href="/psl-live" className="btn" style={{ backgroundColor: '#008A37', color: 'white' }}>
              📺 Watch Live
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>

        {/* ── Quick Stats ── */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🏏', label: 'Total Matches', value: '44' },
              { icon: '👥', label: 'Teams', value: '8' },
              { icon: '🏟️', label: 'Venues', value: '2' },
              { icon: '📅', label: 'Duration', value: '39 Days' },
              { icon: '🏆', label: 'Edition', value: 'PSL 11' },
              { icon: '🎯', label: 'Format', value: 'T20' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.25rem 1rem', border: '2px solid #e5e7eb', borderRadius: '0.75rem', backgroundColor: 'white' }}>
                <div style={{ fontSize: '1.75rem' }}>{s.icon}</div>
                <p style={{ color: '#0A3258', fontWeight: '800', fontSize: '1.5rem', margin: '0.35rem 0 0.2rem' }}>{s.value}</p>
                <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: 0, fontWeight: '600' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Schedule Image ── */}
        <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ marginTop: 0 }}>📷 Official PSL 2026 Schedule Poster</h2>
          <div style={{ position: 'relative', width: '100%', maxWidth: '819px', margin: '1rem auto 0', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', borderRadius: '0.75rem', overflow: 'hidden' }}>
            <Image
              src="/psl-schedule.jpeg"
              alt="HBL PSL 11 2026 Full Official Schedule and Match Timetable Poster"
              width={819}
              height={1024}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
          <p style={{ marginTop: '0.75rem', color: '#6b7280', fontSize: '0.875rem' }}>
            ↑ Official HBL PSL 11 (2026) Match Schedule — Save this image to keep track of all fixtures.
          </p>
        </section>

        {/* ── Full Schedule Table ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>📋 Complete PSL 2026 Fixture List — All 44 Matches</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            The complete HBL PSL 11 match schedule from Match 1 (March 26) to the Grand Final (May 3, 2026).
            All times in <strong>PKT (Pakistan Standard Time)</strong>.
          </p>

          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
            {[
              { label: 'Completed', bg: '#dcfce7', color: '#166534', border: '#bbf7d0' },
              { label: 'Today', bg: '#ffedd5', color: '#9a3412', border: '#fed7aa' },
              { label: 'Upcoming', bg: '#ffffff', color: '#374151', border: '#e5e7eb' },
              { label: 'Playoff', bg: '#dbeafe', color: '#1e40af', border: '#bfdbfe' },
              { label: 'Final', bg: '#f3e8ff', color: '#6b21a8', border: '#e9d5ff' },
            ].map((l, i) => (
              <span key={i} style={{ padding: '0.25rem 0.75rem', backgroundColor: l.bg, color: l.color, border: `1px solid ${l.border}`, borderRadius: '1rem', fontSize: '0.8rem', fontWeight: '700' }}>
                {l.label}
              </span>
            ))}
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 4px', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', borderRadius: '0.5rem 0 0 0.5rem', width: '40px' }}>#</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Date</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Match</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Venue</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Time (PKT)</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', borderRadius: '0 0.5rem 0.5rem 0' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item) => {
                  const style = getRowStyle(item.status);
                  return (
                    <tr key={item.match} style={{ backgroundColor: style.bg }}>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: '700', color: '#9ca3af', fontSize: '0.85rem', border: `1px solid ${style.border}`, borderRight: 'none', borderRadius: '0.5rem 0 0 0.5rem' }}>
                        {item.match}
                      </td>
                      <td style={{ padding: '0.75rem 1rem', border: `1px solid ${style.border}`, borderLeft: 'none', borderRight: 'none' }}>
                        <div style={{ fontWeight: '700', color: style.textColor, fontSize: '0.9rem' }}>{item.date}</div>
                        <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{item.day}</div>
                      </td>
                      <td style={{ padding: '0.75rem 1rem', border: `1px solid ${style.border}`, borderLeft: 'none', borderRight: 'none' }}>
                        {item.link ? (
                          <Link href={item.link} style={{ fontWeight: '700', color: '#0A3258', fontSize: '0.95rem', textDecoration: 'underline' }}>
                            {item.teams}
                          </Link>
                        ) : (
                          <span style={{ fontWeight: item.status === 'final' || item.status === 'playoff' ? '800' : '600', color: style.textColor, fontSize: '0.95rem' }}>
                            {item.teams}
                          </span>
                        )}
                        {item.result && (
                          <div style={{ fontSize: '0.78rem', color: '#16a34a', fontWeight: '600', marginTop: '0.2rem' }}>✓ {item.result}</div>
                        )}
                      </td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', border: `1px solid ${style.border}`, borderLeft: 'none', borderRight: 'none' }}>
                        <span style={{
                          padding: '0.2rem 0.6rem',
                          borderRadius: '1rem',
                          fontSize: '0.8rem',
                          fontWeight: '700',
                          backgroundColor: item.venue === 'Lahore' ? '#eff6ff' : '#fdf4ff',
                          color: item.venue === 'Lahore' ? '#1d4ed8' : '#7e22ce',
                          border: `1px solid ${item.venue === 'Lahore' ? '#bfdbfe' : '#d8b4fe'}`,
                        }}>
                          🏟️ {item.venue}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: '600', fontSize: '0.9rem', color: style.textColor, border: `1px solid ${style.border}`, borderLeft: 'none', borderRight: 'none' }}>
                        {item.time}
                      </td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', border: `1px solid ${style.border}`, borderLeft: 'none', borderRadius: '0 0.5rem 0.5rem 0' }}>
                        {style.badge && (
                          <span style={{ backgroundColor: style.badgeBg, color: 'white', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.5px' }}>
                            {style.badge}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '0.75rem', color: '#6b7280', fontSize: '0.8rem', textAlign: 'right' }}>
            Matches 41–44 are the playoff stages: Qualifier, Eliminator 1, Eliminator 2, and Grand Final.
          </p>
        </section>

        {/* ── Venue Split ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🏟️ PSL 2026 Venue Split — Lahore & Karachi</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            HBL PSL 11 (2026) is being hosted across just two iconic venues in Pakistan — a significant change from previous editions where matches were spread across 5–6 cities. Read the full story behind <Link href="/psl-2026-venue-changes">why PSL 2026 venues were reduced</Link>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ border: '2px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#eff6ff' }}>
              <h3 style={{ color: '#1d4ed8', marginTop: 0 }}>🏟️ Gaddafi Stadium, Lahore</h3>
              <ul style={{ color: '#374151', lineHeight: '2', paddingLeft: '1.25rem' }}>
                <li>Capacity: ~27,000 (restricted in 2026)</li>
                <li>Hosts all early league stage matches</li>
                <li>PSL 2026 Grand Final venue (May 3)</li>
                <li>Matches played at 2:30 PM and 7:00 PM PKT</li>
              </ul>
              <Link href="/gaddafi-stadium-psl-schedule" style={{ color: '#1d4ed8', fontWeight: '700', display: 'inline-block', marginTop: '0.75rem' }}>
                View Gaddafi Stadium Schedule →
              </Link>
            </div>
            <div style={{ border: '2px solid #d8b4fe', borderRadius: '0.75rem', padding: '1.5rem', backgroundColor: '#fdf4ff' }}>
              <h3 style={{ color: '#7e22ce', marginTop: 0 }}>🏟️ National Bank Stadium, Karachi</h3>
              <ul style={{ color: '#374151', lineHeight: '2', paddingLeft: '1.25rem' }}>
                <li>Capacity: ~34,228 (restricted in 2026)</li>
                <li>Hosts mid-tournament games (Apr 8–Apr 26)</li>
                <li>Traditionally Karachi Kings' home ground</li>
                <li>Qualifier (Apr 28) at this venue</li>
              </ul>
              <Link href="/national-bank-stadium-karachi-psl-matches" style={{ color: '#7e22ce', fontWeight: '700', display: 'inline-block', marginTop: '0.75rem' }}>
                View NB Stadium Schedule →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Tournament Format ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>📖 HBL PSL 11 (2026) — Tournament Format Explained</h2>
          <p>
            The <strong>HBL Pakistan Super League 2026 (PSL 11)</strong> is the most expansive edition in the tournament's history, featuring <strong>8 franchises</strong> for the first time, including two brand-new expansion teams — <Link href="/rawalpindi-pindiz-squad">Rawalpindi Pindiz</Link> and <Link href="/hyderabad-kingsmen-squad">Hyderabad Kingsmen</Link>. The tournament runs across <strong>39 days</strong> from March 26 to May 3, 2026.
          </p>
          <h3>League Stage (Matches 1–40)</h3>
          <p>
            In the league phase, each of the 8 teams plays a series of round-robin fixtures. The top 4 teams on the <Link href="/points-table">PSL 2026 Points Table</Link> at the end of the league stage qualify for the playoffs. Two points are awarded for a win, zero for a loss, and one each for a no-result (tie or abandoned match). Net Run Rate (NRR) serves as the primary tiebreaker.
          </p>
          <h3>Playoff Structure (Matches 41–44)</h3>
          <ul style={{ lineHeight: '2', color: '#374151', paddingLeft: '1.5rem' }}>
            <li><strong>Match 41 — Qualifier (Apr 28, Karachi):</strong> 1st vs 2nd — winner goes directly to the Final.</li>
            <li><strong>Match 42 — Eliminator 1 (Apr 29, Lahore):</strong> 3rd vs 4th — loser is eliminated.</li>
            <li><strong>Match 43 — Eliminator 2 (May 1, Lahore):</strong> Qualifier loser vs Eliminator 1 winner — loser is eliminated.</li>
            <li><strong>Match 44 — Grand Final (May 3, Lahore, Gaddafi Stadium, 7:00 PM PKT):</strong> Qualifier winner vs Eliminator 2 winner.</li>
          </ul>
          <h3>8 Teams in PSL 2026</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
            {[
              { team: 'Lahore Qalandars', href: '/lahore-qalandars-squad', emoji: '🦅' },
              { team: 'Karachi Kings', href: '/karachi-kings-squad', emoji: '👑' },
              { team: 'Multan Sultans', href: '/multan-sultans-squad', emoji: '⚔️' },
              { team: 'Quetta Gladiators', href: '/quetta-gladiators-squad', emoji: '🏹' },
              { team: 'Peshawar Zalmi', href: '/peshawar-zalmi-squad', emoji: '🔥' },
              { team: 'Islamabad United', href: '/islamabad-united-squad', emoji: '💎' },
              { team: 'Rawalpindi Pindiz', href: '/rawalpindi-pindiz-squad', emoji: '⚡' },
              { team: 'Hyderabad Kingsmen', href: '/hyderabad-kingsmen-squad', emoji: '🏰' },
            ].map((t, i) => (
              <Link key={i} href={t.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 0.85rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: 'white', color: '#0A3258', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.2s' }} className="team-card">
                <span>{t.emoji}</span>{t.team}
              </Link>
            ))}
          </div>
        </article>

        {/* ── Key Match Previews ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🔥 Key Match Previews — PSL 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { href: '/lahore-qalandars-vs-karachi-kings', title: 'Lahore Qalandars vs Karachi Kings', date: 'Mar 29 · Match 6', badge: 'EL CLÁSICO', badgeBg: '#C8102E', desc: 'The biggest PSL rivalry — Fakhar Zaman vs David Warner at Gaddafi Stadium.' },
              { href: '/quetta-gladiators-vs-hyderabad-kingsmen', title: 'Quetta Gladiators vs Hyderabad Kingsmen', date: 'Mar 29 · Match 5', badge: 'PREVIEW', badgeBg: '#1d4ed8', desc: 'Quetta seek redemption after Day 1 defeat. Hyderabad desperate for first win.' },
              { href: '/multan-sultans-vs-islamabad-united', title: 'Multan Sultans vs Islamabad United', date: 'Mar 28 · Match 4', badge: 'RESULT', badgeBg: '#16a34a', desc: 'Islamabad United won by 5 wickets in a thrilling Lahore encounter.' },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="team-card" style={{ display: 'block', padding: '1.25rem', border: '1px solid #e5e7eb', borderRadius: '0.75rem', backgroundColor: 'white', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ backgroundColor: card.badgeBg, color: 'white', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.7rem', fontWeight: '800' }}>{card.badge}</span>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{card.date}</span>
                </div>
                <h3 style={{ color: '#0A3258', fontSize: '1rem', fontWeight: '700', margin: '0 0 0.5rem' }}>{card.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{card.desc}</p>
                <span style={{ color: '#008A37', fontWeight: '600', fontSize: '0.875rem', display: 'inline-block', marginTop: '0.75rem' }}>Read Preview →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>❓ PSL 2026 Schedule — FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {[
              { q: 'When does PSL 2026 start and end?', a: 'HBL PSL 11 starts on March 26, 2026 and the Grand Final is on May 3, 2026 — a 39-day tournament.' },
              { q: 'How many teams are in PSL 2026?', a: 'PSL 2026 features 8 teams for the first time, including two new expansion franchises: Rawalpindi Pindiz and Hyderabad Kingsmen.' },
              { q: 'Where are PSL 2026 matches being played?', a: 'All 44 PSL 2026 matches are played at Gaddafi Stadium in Lahore and National Bank Stadium in Karachi only.' },
              { q: 'When is the PSL 2026 Final?', a: 'The PSL 11 Grand Final is on Sunday, May 3, 2026 at 7:00 PM PKT at Gaddafi Stadium, Lahore.' },
              { q: 'What time do PSL 2026 matches start?', a: 'Afternoon games start at 2:30 PM PKT and evening/night games start at 7:00 PM PKT.' },
              { q: 'Why are there only 2 venues for PSL 2026?', a: 'Due to logistical and security considerations, the PCB centralized all PSL 11 matches in Lahore and Karachi only. Read our full analysis on the venue changes.' },
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
              { href: '/live-score', label: '🔴 PSL 2026 Live Score' },
              { href: '/psl-live', label: '📺 Where to Watch PSL Live' },
              { href: '/gaddafi-stadium-psl-schedule', label: '🏟️ Gaddafi Stadium Fixtures' },
              { href: '/national-bank-stadium-karachi-psl-matches', label: '🏟️ NB Stadium Karachi Fixtures' },
              { href: '/hbl-psl-2026', label: 'ℹ️ HBL PSL 2026 Overview' },
              { href: '/news', label: '📰 PSL 2026 Latest News' },
              { href: '/psl-2026-venue-changes', label: '🔄 PSL 2026 Venue Changes' },
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
