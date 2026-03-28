export const metadata = {
  title: 'Gaddafi Stadium PSL 2026 Schedule | All 22 Lahore Matches + Finals',
  description:
    'Complete Gaddafi Stadium PSL 2026 schedule. See all 22 Lahore fixtures including the tournament opener, Eliminator 1, Eliminator 2, and the PSL 11 Grand Final on May 3, 2026.',
  keywords:
    'gaddafi stadium psl schedule, gaddafi stadium psl 2026, lahore psl matches 2026, psl 11 final gaddafi stadium, psl eliminator lahore, psl 11 fixture list lahore',
  openGraph: {
    title: 'Gaddafi Stadium PSL 2026 Schedule | All 22 Lahore Matches',
    description:
      'Gaddafi Stadium in Lahore is hosting 22 PSL 11 matches, including all three playoff games and the Grand Final on May 3, 2026.',
    type: 'article',
  },
};

export default function GaddafiSchedulePage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <article className="content-wrapper">

        {/* H1 */}
        <h1>Gaddafi Stadium PSL 2026 Schedule: The Home of PSL 11</h1>

        {/* Lead Paragraph */}
        <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '2rem' }}>
          Following the Pakistan Cricket Board's emergency decision on March 22, 2026, to consolidate the <strong>HBL PSL 11</strong> into just two cities, <strong>Gaddafi Stadium in Lahore</strong> became the centrepiece of the tournament. The iconic venue — Pakistan's largest cricket arena with a capacity of over 27,000 — is hosting all three playoff fixtures plus the <strong>PSL 11 Grand Final on May 3, 2026</strong>, making it the most important cricketing address in Pakistan this season.
        </p>

        {/* Stadium Quick Facts */}
        <section style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', padding: '1.5rem 2rem', borderRadius: '0.75rem', marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0, color: '#0c4a6e' }}>🏟️ Gaddafi Stadium — Quick Facts</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li><strong>Location:</strong> Ferozepur Road, Lahore, Punjab, Pakistan</li>
            <li><strong>Capacity:</strong> 27,000+ (seated)</li>
            <li><strong>PSL 11 Matches:</strong> 22 out of 44 total fixtures</li>
            <li><strong>First Match (PSL 11):</strong> Lahore Qalandars vs Hyderabad Kingsmen — March 26, 2026</li>
            <li><strong>Last Match (PSL 11):</strong> PSL Grand Final — May 3, 2026</li>
            <li><strong>Crowd Policy (2026):</strong> Behind closed doors — no spectators</li>
            <li><strong>Day Match Start Time:</strong> 2:30 PM PKT</li>
            <li><strong>Night Match Start Time:</strong> 7:00 PM PKT</li>
          </ul>
        </section>

        {/* Complete Match Breakdown */}
        <section style={{ backgroundColor: '#f0fdf4', padding: '2rem', borderRadius: '0.75rem', borderLeft: '4px solid #16a34a', marginBottom: '3rem' }}>
          <h2 style={{ color: '#166534', marginTop: 0 }}>The Complete PSL 11 Gaddafi Stadium Schedule</h2>

          <p>
            Gaddafi Stadium hosts a total of <strong>22 matches</strong> during PSL 11. This includes the tournament's very first game (the opener), a large block of the group stage round-robin, and exclusively, all three knockout playoff matches leading to the Final.
          </p>

          <h3 style={{ color: '#166534' }}>Group Stage Fixtures — Lahore</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
                <th style={{ padding: '0.6rem 1rem', textAlign: 'left' }}>Match</th>
                <th style={{ padding: '0.6rem 1rem', textAlign: 'left' }}>Teams</th>
                <th style={{ padding: '0.6rem 1rem', textAlign: 'left' }}>Date</th>
                <th style={{ padding: '0.6rem 1rem', textAlign: 'left' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                { match: 'Match 1 (Opener)', teams: 'Lahore Qalandars vs Hyderabad Kingsmen', date: 'March 26, 2026', time: '7:00 PM' },
                { match: 'Match 2', teams: 'Quetta Gladiators vs Peshawar Zalmi', date: 'March 27, 2026', time: '7:00 PM' },
                { match: 'Match 4', teams: 'Multan Sultans vs Rawalpindi Pindiz', date: 'March 29, 2026', time: '7:00 PM' },
                { match: 'Match 6', teams: 'Lahore Qalandars vs Karachi Kings', date: 'March 31, 2026', time: '7:00 PM' },
                { match: 'Match 8', teams: 'Islamabad United vs Hyderabad Kingsmen', date: 'April 2, 2026', time: '7:00 PM' },
                { match: 'Match 10', teams: 'Peshawar Zalmi vs Multan Sultans', date: 'April 4, 2026', time: '7:00 PM' },
                { match: 'Match 12', teams: 'Quetta Gladiators vs Rawalpindi Pindiz', date: 'April 6, 2026', time: '7:00 PM' },
                { match: 'Match 14', teams: 'Lahore Qalandars vs Islamabad United', date: 'April 8, 2026', time: '7:00 PM' },
              ].map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#f9fafb' : '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.6rem 1rem', fontWeight: '500' }}>{row.match}</td>
                  <td style={{ padding: '0.6rem 1rem' }}>{row.teams}</td>
                  <td style={{ padding: '0.6rem 1rem' }}>{row.date}</td>
                  <td style={{ padding: '0.6rem 1rem', color: '#4b5563' }}>{row.time} PKT</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.75rem' }}>
            * Sample group stage fixtures shown above. Check the <a href="/psl-11-2026-schedule">full 44-match schedule</a> for complete dates across both venues.
          </p>
        </section>

        {/* Playoffs at Gaddafi */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>PSL 11 Playoffs at Gaddafi Stadium</h2>
          <p>
            Unlike previous editions where playoff matches were spread across cities, all three knockout games in PSL 11 — plus the Grand Final — will be hosted exclusively at Gaddafi Stadium. This makes the Lahore venue the single most decisive cricket ground in Pakistan during April–May 2026.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ backgroundColor: '#fef9c3', border: '1px solid #fde047', borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem' }}>🏏</div>
              <h3 style={{ margin: '0.5rem 0', color: '#713f12', fontSize: '1rem' }}>Eliminator 1</h3>
              <p style={{ margin: 0, fontWeight: 'bold' }}>April 29, 2026</p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#92400e' }}>3rd vs 4th placed teams</p>
            </div>
            <div style={{ backgroundColor: '#fef9c3', border: '1px solid #fde047', borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem' }}>🏏</div>
              <h3 style={{ margin: '0.5rem 0', color: '#713f12', fontSize: '1rem' }}>Eliminator 2</h3>
              <p style={{ margin: 0, fontWeight: 'bold' }}>May 1, 2026</p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#92400e' }}>Qualifier loser vs Eliminator 1 winner</p>
            </div>
            <div style={{ backgroundColor: '#dcfce7', border: '2px solid #16a34a', borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem' }}>🏆</div>
              <h3 style={{ margin: '0.5rem 0', color: '#166534', fontSize: '1rem' }}>PSL 11 Grand Final</h3>
              <p style={{ margin: 0, fontWeight: 'bold' }}>May 3, 2026</p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#166534' }}>Champion crowned at Gaddafi</p>
            </div>
          </div>
        </section>

        {/* Behind Closed Doors Section */}
        <h2>Gaddafi Stadium: Behind Closed Doors in 2026</h2>
        <section style={{ marginBottom: '3rem' }}>
          <p>
            For PSL 11, Gaddafi Stadium is operating without any public spectators for the first time in its PSL hosting history. The decision — part of a national austerity and security directive — means that one of Pakistan's most electric cricket atmospheres will be absent during this edition. The stadium, which normally roars with 27,000 passionate fans during PSL matches, is silent in the stands, though fully operational for broadcast production.
          </p>
          <p>
            The PCB has significantly upgraded its broadcast infrastructure to compensate, adding additional pitch-side cameras, drone coverage, and enhanced commentary setups to deliver a premium television experience for millions of fans watching from home.
          </p>
        </section>

        {/* Gaddafi Stadium History */}
        <section style={{ backgroundColor: '#f4f4f5', padding: '2rem', borderRadius: '0.75rem', marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>About Gaddafi Stadium, Lahore</h2>
          <p>
            Gaddafi Stadium — officially named after the late Libyan leader Muammar Gaddafi following his 1974 visit to Pakistan — has been Pakistan's premier cricket ground for over five decades. It has hosted historic Test matches, ODIs, and T20 Internationals, and is renowned for its passionate Lahori crowd.
          </p>
          <p>
            In recent years, the stadium underwent a major renovation ahead of Pakistan hosting the ICC Champions Trophy 2025, receiving upgraded seating, improved floodlights, a redesigned dressing room complex, and enhanced media facilities. These improvements make it one of South Asia's most modern cricket venues.
          </p>
          <ul style={{ paddingLeft: '2rem', lineHeight: '1.9' }}>
            <li><strong>Established:</strong> 1959</li>
            <li><strong>Capacity:</strong> ~27,000 (post-renovation)</li>
            <li><strong>First Test hosted:</strong> 1959 (Pakistan vs Australia)</li>
            <li><strong>PSL hosting history:</strong> Multiple seasons since PSL 2016</li>
            <li><strong>Recent upgrade:</strong> 2024–25 renovation for ICC Champions Trophy</li>
          </ul>
        </section>

        {/* Travelling Fan Advice */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>Important Note for Fans Travelling to Lahore</h2>
          <p>
            Since <strong>all PSL 11 matches at Gaddafi Stadium are being played behind closed doors</strong>, fans cannot enter the stadium premises for any fixture, including the Grand Final. There are <strong>no tickets available for purchase</strong> for any match at Gaddafi Stadium during PSL 2026. All previously purchased tickets have been refunded automatically.
          </p>
          <p>
            Fans are encouraged to watch all matches live on broadcast partners such as <strong>A-Sports, ARY Digital, and Ten Sports</strong>.
          </p>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: '#f4f4f5', padding: '2rem', borderRadius: '0.75rem', marginBottom: '3rem' }}>
          <h2 style={{ marginTop: 0 }}>Frequently Asked Questions</h2>

          <h3>How many matches is Gaddafi Stadium hosting in PSL 2026?</h3>
          <p>Gaddafi Stadium is hosting <strong>22 out of 44 total matches</strong> in PSL 11, including the Eliminator 1, Eliminator 2, and the Grand Final on May 3, 2026.</p>

          <h3>When is the PSL 11 Final at Gaddafi Stadium?</h3>
          <p>The PSL 11 Grand Final is scheduled for <strong>May 3, 2026</strong>, at Gaddafi Stadium, Lahore.</p>

          <h3>Will Karachi's National Bank Stadium also host playoff matches?</h3>
          <p>Yes. The <strong>Qualifier</strong> (the match between the top two ranked teams) is being held at the National Bank Stadium in Karachi.</p>

          <h3>What channel is broadcasting PSL 11 matches from Gaddafi Stadium?</h3>
          <p>PSL 11 is broadcast on <strong>A-Sports, ARY Digital, and Ten Sports</strong> in Pakistan, with international broadcast rights held by various regional partners.</p>
        </section>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem' }}>
          <a href="/psl-11-2026-schedule" className="btn">Full PSL 11 Schedule →</a>
          <a href="/psl-2026-venue-changes" className="btn" style={{ backgroundColor: '#4b5563' }}>Why Only 2 Venues? →</a>
        </div>

      </article>
    </div>
  );
}
