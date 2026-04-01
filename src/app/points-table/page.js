import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'PSL 2026 Points Table | HBL PSL 11 Current Standings & Rankings',
  description:
    'Live updated PSL 2026 points table and standings for HBL PSL 11. Check who leads the Pakistan Super League table — wins, losses, net run rate, and playoff qualification scenarios after every match.',
  keywords:
    'psl 2026 points table, psl 11 standings, pakistan super league 2026 table, psl points table today, psl 11 points table, hbl psl 2026 standings, psl table 2026, psl ranking 2026, psl playoff qualification 2026, psl nrr 2026',
  openGraph: {
    title: 'PSL 2026 Points Table — HBL PSL 11 Current Standings',
    description:
      'Live PSL 2026 rankings updated after every match. Who leads the table? Check NRR, wins, losses, and playoff scenarios.',
    type: 'article',
  },
};

// ── Updated with Accurate PSL Standings as of April 1, 2026 ──
const standings = [
  {
    pos: 1,
    team: 'Karachi Kings',
    shortName: 'KK',
    img: '/Karachi_Kings.png',
    p: 2, w: 2, l: 0, nr: 0, pts: 4, nrr: '+0.524',
    nrrNum: 0.524,
    form: ['W', 'W'],
    qualified: true,
    color: '#C8102E',
    squad: '/karachi-kings-squad',
  },
  {
    pos: 2,
    team: 'Peshawar Zalmi',
    shortName: 'PZ',
    img: '/Peshawar_Zalmi_logo.png',
    p: 2, w: 1, l: 0, nr: 1, pts: 3, nrr: '+0.674',
    nrrNum: 0.674,
    form: ['W', 'NR'],
    qualified: true,
    color: '#f59e0b',
    squad: '/peshawar-zalmi-squad',
  },
  {
    pos: 3,
    team: 'Lahore Qalandars',
    shortName: 'LQ',
    img: '/Lahore_Qalandars.png',
    p: 2, w: 1, l: 1, nr: 0, pts: 2, nrr: '+1.567',
    nrrNum: 1.567,
    form: ['W', 'L'],
    qualified: true,
    color: '#003087',
    squad: '/lahore-qalandars-squad',
  },
  {
    pos: 4,
    team: 'Multan Sultans',
    shortName: 'MS',
    img: '/MultanSultans.png',
    p: 1, w: 1, l: 0, nr: 0, pts: 2, nrr: '+0.825',
    nrrNum: 0.825,
    form: ['W'],
    qualified: true,
    color: '#78350f',
    squad: '/multan-sultans-squad',
  },
  {
    pos: 5,
    team: 'Quetta Gladiators',
    shortName: 'QG',
    img: '/Quetta_Gladiators.png',
    p: 2, w: 1, l: 1, nr: 0, pts: 2, nrr: '+0.650',
    nrrNum: 0.650,
    form: ['L', 'W'],
    qualified: false,
    color: '#1a0533',
    squad: '/quetta-gladiators-squad',
  },
  {
    pos: 6,
    team: 'Islamabad United',
    shortName: 'IU',
    img: '/Islamabad_United.png',
    p: 2, w: 0, l: 1, nr: 1, pts: 1, nrr: '-0.825',
    nrrNum: -0.825,
    form: ['L', 'NR'],
    qualified: false,
    color: '#c41e3a',
    squad: '/islamabad-united-squad',
  },
  {
    pos: 7,
    team: 'Rawalpindi Pindiz',
    shortName: 'RWP',
    img: '/Rawalpindiz_Logo.png',
    p: 1, w: 0, l: 1, nr: 0, pts: 0, nrr: '-0.674',
    nrrNum: -0.674,
    form: ['L'],
    qualified: false,
    color: '#0c4a6e',
    squad: '/rawalpindi-pindiz-squad',
  },
  {
    pos: 8,
    team: 'Hyderabad Kingsmen',
    shortName: 'HHK',
    img: '/Hyderabad_Houston_Kingsmen_logo.png',
    p: 2, w: 0, l: 2, nr: 0, pts: 0, nrr: '-2.725',
    nrrNum: -2.725,
    form: ['L', 'L'],
    qualified: false,
    color: '#92400e',
    squad: '/hyderabad-kingsmen-squad',
  },
];

const recentResults = [
  { match: 7, date: 'Mar 31', teams: 'Islamabad United vs Peshawar Zalmi', result: 'Match Abandoned', venue: 'Gaddafi Stadium', link: '/', highlight: false },
  { match: 6, date: 'Mar 29', teams: 'Lahore Qalandars vs Karachi Kings', result: 'KK won by 4 wkts', venue: 'Gaddafi Stadium', link: '/lahore-qalandars-vs-karachi-kings', highlight: false },
  { match: 5, date: 'Mar 29', teams: 'Quetta Gladiators vs Hyderabad Kingsmen', result: 'QG won by 39 runs', venue: 'Gaddafi Stadium', link: '/', highlight: false },
  { match: 4, date: 'Mar 28', teams: 'Multan Sultans vs Islamabad United', result: 'MS won by 5 wkts', venue: 'Gaddafi Stadium', link: '/', highlight: false },
  { match: 3, date: 'Mar 28', teams: 'Peshawar Zalmi vs Rawalpindi Pindiz', result: 'PZ won by 22 runs', venue: 'Gaddafi Stadium', link: '/', highlight: false },
  { match: 2, date: 'Mar 27', teams: 'Quetta Gladiators vs Karachi Kings', result: 'KK won by 14 runs', venue: 'Gaddafi Stadium', link: '/', highlight: false },
  { match: 1, date: 'Mar 26', teams: 'Lahore Qalandars vs Hyderabad Kingsmen', result: 'LQ won by 69 runs', venue: 'Gaddafi Stadium', link: '/', highlight: false },
];

export default function PointsTablePage() {
  const tableSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'HBL Pakistan Super League 2026 (PSL 11) — Points Table',
    startDate: '2026-03-26',
    endDate: '2026-05-03',
    sport: 'Cricket',
    description: 'Current PSL 2026 standings showing team positions, wins, losses, points, and net run rate after 7 matches of the Pakistan Super League 11.',
    organizer: { '@type': 'Organization', name: 'Pakistan Cricket Board' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is top of the PSL 2026 points table?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Karachi Kings lead the PSL 2026 points table with 4 points from 2 wins in 2 matches. Peshawar Zalmi follows in 2nd place with 3 points, while Lahore Qalandars, Multan Sultans, and Quetta Gladiators are on 2 points each.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many teams qualify for the PSL 2026 playoffs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The top 4 teams in the PSL 2026 points table at the end of the league stage qualify for the playoffs. The Qualifier is on April 28, Eliminator 1 on April 29, Eliminator 2 on May 1, and the Grand Final on May 3, 2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Net Run Rate (NRR) in PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Net Run Rate (NRR) is the average runs scored per over minus the average runs conceded per over. It is the primary tiebreaker in the PSL 2026 points table when two or more teams are level on points.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many points do teams get for a win in PSL 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Teams receive 2 points for a win and 0 points for a loss in PSL 2026. In the event of a tie or no result (rain), each team receives 1 point.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the PSL 2026 playoff and final?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The PSL 2026 playoffs begin on April 28, 2026. The Qualifier is in Karachi (Apr 28), Eliminator 1 in Lahore (Apr 29), Eliminator 2 in Lahore (May 1), and the Grand Final at Gaddafi Stadium, Lahore on May 3, 2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many matches are in the PSL 2026 league stage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There are 40 league stage matches in PSL 2026 (Matches 1–40), followed by 4 playoff matches, totalling 44 matches in HBL PSL 11.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://psllive.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'PSL 2026 Points Table', item: 'https://psllive.vercel.app/points-table' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A3258 0%, #1a5276 40%, #008A37 100%)',
        color: 'white',
        padding: '4.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(199,250,59,0.15) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(0,138,55,0.2) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <p style={{ color: '#c7fa3b', fontWeight: '700', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            HBL PSL 11 · 2026 · Live Updated
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.15', color: 'white', marginBottom: '1rem' }}>
            PSL 2026 Points Table<br />
            <span style={{ color: '#c7fa3b' }}>Current Standings</span>
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '0.5rem' }}>
            🏆 8 Teams · 44 Matches · Top 4 Qualify for Playoffs
          </p>
          <p style={{ fontSize: '0.95rem', color: '#a7f3d0', marginBottom: '2rem' }}>
            Updated after Match 7 · March 31, 2026
          </p>

          {/* Mini leader board strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {standings.slice(0, 4).map((t, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.75rem', padding: '0.5rem 0.85rem', textAlign: 'center', minWidth: '80px' }}>
                <div style={{ color: '#c7fa3b', fontSize: '0.7rem', fontWeight: '700' }}>#{t.pos}</div>
                <div style={{ color: 'white', fontWeight: '800', fontSize: '0.85rem' }}>{t.shortName}</div>
                <div style={{ color: '#a7f3d0', fontSize: '0.75rem' }}>{t.pts} pts</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/live-score" className="btn" style={{ backgroundColor: '#c7fa3b', color: '#0A3258', fontWeight: 'bold' }}>
              🔴 Live Score
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

        {/* ── Feature snippet summary box ── */}
        <section style={{
          backgroundColor: '#eff6ff',
          border: '2px solid #3b82f6',
          borderRadius: '0.75rem',
          padding: '1.5rem 2rem',
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ color: '#1d4ed8', marginTop: 0, fontSize: '1.2rem' }}>
            📊 PSL 2026 Points Table — Quick Summary (After 7 Matches)
          </h2>
          <ul style={{ color: '#1e3a5f', lineHeight: '2', paddingLeft: '1.25rem', margin: 0 }}>
            <li><strong>🥇 #1 Leader:</strong> Karachi Kings — 4 pts (P2, W2, NRR: +0.524)</li>
            <li><strong>🥈 2nd Place:</strong> Peshawar Zalmi — 3 pts (P2, W1, NR1)</li>
            <li><strong>Joint 3rd–5th:</strong> Lahore Qalandars (+1.567 NRR), Multan Sultans (+0.825), Quetta Gladiators (+0.650) — all on 2 pts</li>
            <li><strong>Bottom:</strong> Hyderabad Kingsmen — 0 pts from 2 matches (NRR: -2.725)</li>
            <li><strong>Playoff spots:</strong> Top 4 teams qualify. Playoffs start April 28, 2026.</li>
          </ul>
        </section>

        {/* ── Main Points Table ── */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <h2 style={{ marginTop: 0 }}>🏆 HBL PSL 11 (2026) — Live Points Table</h2>
            <span style={{ backgroundColor: '#dcfce7', color: '#16a34a', padding: '0.3rem 0.85rem', borderRadius: '1rem', fontWeight: '700', fontSize: '0.8rem', border: '1px solid #bbf7d0' }}>
              ✅ Updated: After Match 7 · Mar 31, 2026
            </span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 5px', minWidth: '680px' }}>
              <thead>
                <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', width: '40px', borderRadius: '0.5rem 0 0 0.5rem' }}>Pos</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Team</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>P</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>W</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>L</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>NR</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '800' }}>Pts</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>NRR</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', borderRadius: '0 0.5rem 0.5rem 0' }}>Form</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team, idx) => {
                  const isPlayoffLine = idx === 3;
                  const rowBg = idx < 4 ? (idx === 0 ? '#f0fff4' : '#f9fafb') : '#ffffff';
                  return (
                    <>
                      {isPlayoffLine && (
                        <tr key="divider">
                          <td colSpan={9} style={{ padding: '0.25rem 1rem' }}>
                            <div style={{ borderTop: '2px dashed #f97316', position: 'relative' }}>
                              <span style={{ position: 'absolute', right: 0, top: '-10px', backgroundColor: '#fff7ed', color: '#c2410c', fontSize: '0.7rem', fontWeight: '800', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', border: '1px solid #fed7aa' }}>
                                ← PLAYOFF ZONE ↑ · ELIMINATION ZONE ↓
                              </span>
                            </div>
                          </td>
                        </tr>
                      )}
                      <tr key={team.pos} style={{ backgroundColor: rowBg, boxShadow: idx < 4 ? '0 1px 3px rgba(0,0,0,0.05)' : 'none' }}>
                        {/* Position */}
                        <td style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '800', fontSize: '1.1rem', color: idx === 0 ? '#c7fa3b' : '#94a3b8', backgroundColor: '#0A3258', borderRadius: '0.5rem 0 0 0.5rem' }}>
                          {team.pos}
                        </td>
                        {/* Team */}
                        <td style={{ padding: '0.85rem 1rem', borderTop: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}`, borderBottom: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}` }}>
                          <Link href={team.squad} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                            <Image src={team.img} alt={`${team.team} logo`} width={36} height={36} style={{ objectFit: 'contain' }} />
                            <div>
                              <div style={{ fontWeight: '700', color: '#0A3258', fontSize: '0.95rem' }}>{team.team}</div>
                              {idx < 4 && <div style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: '700' }}>✓ Playoff contender</div>}
                            </div>
                          </Link>
                        </td>
                        {/* Stats */}
                        {[team.p, team.w, team.l, team.nr].map((val, vi) => (
                          <td key={vi} style={{ padding: '0.85rem 1rem', textAlign: 'center', color: '#374151', fontWeight: '500', borderTop: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}`, borderBottom: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}` }}>
                            {val}
                          </td>
                        ))}
                        {/* Points */}
                        <td style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '800', fontSize: '1.1rem', color: team.pts > 0 ? '#0A3258' : '#9ca3af', borderTop: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}`, borderBottom: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}` }}>
                          {team.pts}
                        </td>
                        {/* NRR */}
                        <td style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700', color: team.nrrNum >= 0 ? '#16a34a' : '#dc2626', borderTop: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}`, borderBottom: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}` }}>
                          {team.nrr}
                        </td>
                        {/* Form */}
                        <td style={{ padding: '0.85rem 1rem', textAlign: 'center', borderTop: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}`, borderBottom: `1px solid ${idx < 4 ? '#e0f2fe' : '#f3f4f6'}`, borderRadius: '0 0.5rem 0.5rem 0' }}>
                          <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center' }}>
                            {team.form.map((f, fi) => (
                              <span key={fi} style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: f === 'W' ? '#16a34a' : '#dc2626', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: '800' }}>
                                {f}
                              </span>
                            ))}
                            {team.form.length === 0 && <span style={{ color: '#9ca3af', fontSize: '0.8rem' }}>—</span>}
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', padding: '0.75rem 1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb', fontSize: '0.8rem', color: '#6b7280' }}>
            <span><strong>P</strong> = Played</span>
            <span><strong>W</strong> = Won</span>
            <span><strong>L</strong> = Lost</span>
            <span><strong>NR</strong> = No Result</span>
            <span><strong>Pts</strong> = Points (2 per win)</span>
            <span><strong>NRR</strong> = Net Run Rate (tiebreaker)</span>
            <span style={{ color: '#16a34a', fontWeight: '700' }}>● W = Win</span>
            <span style={{ color: '#dc2626', fontWeight: '700' }}>● L = Loss</span>
          </div>
        </section>

        {/* ── Recent Match Results ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🏏 Recent Match Results — PSL 2026</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
            {recentResults.map((r, i) => (
              <Link key={i} href={r.link} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  border: r.highlight ? '2px solid #f97316' : '1px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  backgroundColor: r.highlight ? '#fff7ed' : '#f9fafb',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                      backgroundColor: r.highlight ? '#f97316' : '#0A3258',
                      color: 'white', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '800',
                    }}>
                      {r.highlight ? '🔴 LIVE' : `M${r.match}`}
                    </span>
                    <span style={{ fontWeight: '700', color: '#0A3258', fontSize: '0.95rem' }}>{r.teams}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>📅 {r.date} · 🏟️ {r.venue}</span>
                    <span style={{
                      fontWeight: '700', fontSize: '0.85rem',
                      color: r.highlight ? '#c2410c' : '#16a34a',
                    }}>
                      {r.result}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Playoff Scenario ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>🎯 PSL 2026 Playoff Qualification — Scenarios</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
            The <strong>top 4 teams</strong> in the <Link href="/psl-11-2026-schedule">PSL 2026 league stage</Link> qualify for the playoffs. With 40 league matches to play, the battle for the top four is heating up rapidly after the first week of action. Here's the current qualification picture:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #bbf7d0', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#15803d', marginTop: 0, fontSize: '1.05rem' }}>🟢 Strong Position</h3>
              <ul style={{ color: '#374151', lineHeight: '2', paddingLeft: '1.25rem', margin: 0, fontSize: '0.9rem' }}>
                <li><strong>Karachi Kings</strong> — Leaders, 2/2 wins, 4 pts</li>
                <li><strong>Peshawar Zalmi</strong> — 3 pts, unbeaten (W1, NR1)</li>
                <li><strong>Lahore Qalandars</strong> — 2 pts, best NRR among 2-pt teams (+1.567)</li>
                <li><strong>Multan Sultans</strong> — 2 pts, won only match played (+0.825)</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#fef2f2', border: '2px solid #fecaca', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#dc2626', marginTop: 0, fontSize: '1.05rem' }}>🔴 Must Improve</h3>
              <ul style={{ color: '#374151', lineHeight: '2', paddingLeft: '1.25rem', margin: 0, fontSize: '0.9rem' }}>
                <li><strong>Quetta Gladiators</strong> — 2 pts but just outside top 4 on NRR (+0.650)</li>
                <li><strong>Rawalpindi Pindiz</strong> — 0 pts from 1 match (NRR: -0.674)</li>
                <li><strong>Islamabad United</strong> — 0 pts from 1 match (NRR: -0.825)</li>
                <li><strong>Hyderabad Kingsmen</strong> — 0 pts from 2 matches, heavy NRR deficit (-2.725)</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#eff6ff', border: '2px solid #bfdbfe', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h3 style={{ color: '#1d4ed8', marginTop: 0, fontSize: '1.05rem' }}>📅 Playoffs Schedule</h3>
              <ul style={{ color: '#374151', lineHeight: '2', paddingLeft: '1.25rem', margin: 0, fontSize: '0.9rem' }}>
                <li><strong>Qualifier:</strong> Apr 28, 7PM · Karachi</li>
                <li><strong>Eliminator 1:</strong> Apr 29, 7PM · Lahore</li>
                <li><strong>Eliminator 2:</strong> May 1, 7PM · Lahore</li>
                <li><strong>🏆 FINAL:</strong> May 3, 7PM · Gaddafi Stadium</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── PSL 2026 Article ── */}
        <article className="content-wrapper" style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>PSL 2026 Points Table — Form Guide & Analysis</h2>
          <p>
            The <strong>HBL PSL 11 (2026) points table</strong> is shaping up to be one of the most competitive in Pakistan Super League history. For the first time, PSL features <strong>8 franchises</strong> — including two expansion teams (<Link href="/rawalpindi-pindiz-squad">Rawalpindi Pindiz</Link> and <Link href="/hyderabad-kingsmen-squad">Hyderabad Kingsmen</Link>) — meaning the playoff race is significantly more congested. Every single match and every single run carries enormous weight in the standings.
          </p>
          <h3>Karachi Kings — Perfect Start at the Top</h3>
          <p>
            <Link href="/karachi-kings-squad">Karachi Kings</Link> are the early leaders with a perfect record of 2 wins from 2 matches, giving them the sole lead on 4 points at the top of the <strong>PSL 2026 points table</strong>. Their victories over Quetta Gladiators (by 14 runs) and another opponent have put them in pole position. With an NRR of +0.524, they are the team to beat in the early stages of the tournament.
          </p>
          <h3>Lahore Qalandars — Defending Champions Bounce Back</h3>
          <p>
            <Link href="/lahore-qalandars-squad">Lahore Qalandars</Link>, the <strong>PSL 2026 title holders</strong>, started their defence with a dominant 69-run victory over Hyderabad Kingsmen — one of the biggest winning margins of the tournament so far. Despite a subsequent loss, they sit on 2 points with the best NRR (+1.567) among all teams on 2 points, keeping them firmly in playoff contention.
          </p>
          <h3>NRR — The Critical Tiebreaker</h3>
          <p>
            With five teams (Lahore Qalandars, Multan Sultans, Peshawar Zalmi, Quetta Gladiators) all on 2 points, <strong>Net Run Rate (NRR)</strong> is already proving decisive in shaping the <strong>PSL 11 standings</strong>. NRR is calculated as the average runs per over scored minus the average runs per over conceded across all league games. Hyderabad Kingsmen are currently carrying a substantial NRR burden of -2.725 that will be very difficult to recover from.
          </p>
          <h3>The Expansion Franchises — A Different Class?</h3>
          <p>
            The two expansion franchises have had contrasting fortunes. <Link href="/rawalpindi-pindiz-squad">Rawalpindi Pindiz</Link> have played one match, losing narrowly with an NRR of -0.674. <Link href="/hyderabad-kingsmen-squad">Hyderabad Kingsmen</Link> have played two matches, losing both, and sit at the bottom of the table with a heavy NRR deficit of -2.725. Both franchises will need to find their footing quickly in what is a fiercely competitive tournament.
          </p>
        </article>

        {/* ── Team form cards ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>📊 Team-by-Team Form Guide</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {standings.map((team, i) => (
              <Link key={i} href={team.squad} className="team-card" style={{ textDecoration: 'none', display: 'block', padding: '1.25rem', border: `2px solid ${team.color}30`, borderRadius: '0.75rem', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Image src={team.img} alt={team.team} width={40} height={40} style={{ objectFit: 'contain' }} />
                  <div>
                    <div style={{ fontWeight: '800', color: '#0A3258', fontSize: '0.9rem' }}>{team.team}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>#{team.pos} in table</div>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <div style={{ fontWeight: '900', fontSize: '1.4rem', color: team.pts > 0 ? team.color : '#9ca3af' }}>{team.pts}</div>
                    <div style={{ fontSize: '0.65rem', color: '#9ca3af' }}>pts</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#6b7280' }}>
                  <span>P: {team.p} · W: {team.w} · L: {team.l}</span>
                  <span style={{ color: team.nrrNum >= 0 ? '#16a34a' : '#dc2626', fontWeight: '700' }}>NRR: {team.nrr}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.3rem', marginTop: '0.5rem' }}>
                  {team.form.map((f, fi) => (
                    <span key={fi} style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: f === 'W' ? '#16a34a' : '#dc2626', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: '800' }}>{f}</span>
                  ))}
                  {team.form.length === 0 && <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>No matches yet</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Scoring System ── */}
        <section style={{ marginBottom: '3rem', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '2rem' }}>
          <h2 style={{ marginTop: 0 }}>📋 PSL 2026 Points Scoring System</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { outcome: '✅ Win', points: '+2 Points', detail: 'Full 2 points awarded to the winning team', bg: '#f0fdf4', border: '#bbf7d0', color: '#15803d' },
              { outcome: '❌ Loss', points: '0 Points', detail: 'No points are awarded for a defeat', bg: '#fef2f2', border: '#fecaca', color: '#dc2626' },
              { outcome: '🌧️ No Result', points: '+1 Point each', detail: 'One point each in case of rain/tie', bg: '#fefce8', border: '#fde68a', color: '#ca8a04' },
              { outcome: '📊 Tiebreaker', points: 'Net Run Rate', detail: 'NRR decides when teams are level on points', bg: '#eff6ff', border: '#bfdbfe', color: '#1d4ed8' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: '0.5rem', padding: '1rem' }}>
                <div style={{ fontWeight: '800', color: item.color, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.outcome}</div>
                <div style={{ fontWeight: '700', color: '#1f2937', marginBottom: '0.25rem' }}>{item.points}</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>❓ PSL 2026 Points Table — FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {[
              { q: 'Who is top of the PSL 2026 points table?', a: 'Karachi Kings lead the PSL 2026 points table with 4 points from 2 matches. Peshawar Zalmi is in second with 3 points after their match against Islamabad United was abandoned.' },
              { q: 'How many teams qualify for the PSL 2026 playoffs?', a: 'The top 4 teams in the PSL 2026 league standings at the end of 40 league matches qualify for the playoffs. The Qualifier match is on April 28, 2026.' },
              { q: 'What is Net Run Rate (NRR) in PSL?', a: 'NRR (Net Run Rate) is the average run rate scored minus the average run rate conceded across all matches. It is used as the primary tiebreaker when two or more teams have the same number of points in the PSL standings.' },
              { q: 'How many points do you get for winning a PSL match?', a: 'Each team earns 2 points for a win and 0 for a loss. In the event of a tie or no result due to rain, both teams receive 1 point each.' },
              { q: 'When does the PSL 2026 league stage end?', a: 'The PSL 2026 league stage runs from March 26 to April 26, 2026, covering 40 matches. The playoff stage then begins on April 28, 2026.' },
              { q: 'When is the PSL 2026 Final?', a: 'The HBL PSL 11 Grand Final is scheduled for Sunday, May 3, 2026 at 7:00 PM PKT at Gaddafi Stadium, Lahore.' },
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
              { href: '/psl-11-2026-schedule', label: '📅 Full PSL 2026 Schedule' },
              { href: '/live-score', label: '🔴 PSL 2026 Live Score' },
              { href: '/psl-live', label: '📺 Where to Watch Live' },
              { href: '/lahore-qalandars-vs-karachi-kings', label: '⚔️ LQ vs KK — El Clásico Preview' },
              { href: '/quetta-gladiators-vs-hyderabad-kingsmen', label: '⚔️ QG vs HK Match Preview' },
              { href: '/gaddafi-stadium-psl-schedule', label: '🏟️ Gaddafi Stadium Fixtures' },
              { href: '/hbl-psl-2026', label: 'ℹ️ HBL PSL 2026 Overview' },
              { href: '/news', label: '📰 PSL 2026 News & Updates' },
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
