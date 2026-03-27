import Image from 'next/image';

export const metadata = {
  title: 'HBL PSL 11 (2026) Schedule | Full Match Timetable',
  description: 'View the complete and official HBL PSL 11 (2026) match schedule in both text format and image. Never miss a game with our detailed calendar.',
  keywords: 'psl 11 schedule, psl 2026 schedule, pakistan super league timetable, hbl psl calendar',
};

const scheduleData = [
  { date: 'MAR 26', match: 'MATCH 1', teams: 'LAHORE QALANDARS vs HYDERABAD KINGSMEN', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'MAR 27', match: 'MATCH 2', teams: 'QUETTA GLADIATORS vs KARACHI KINGS', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'MAR 28', match: 'MATCH 3', teams: 'PESHAWAR ZALMI vs RAWALPINDIZ', venue: 'LAHORE', time: '2:30 PM' },
  { date: 'MAR 28', match: 'MATCH 4', teams: 'MULTAN SULTANS vs ISLAMABAD UNITED', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'MAR 29', match: 'MATCH 5', teams: 'QUETTA GLADIATORS vs HYDERABAD KINGSMEN', venue: 'LAHORE', time: '2:30 PM' },
  { date: 'MAR 29', match: 'MATCH 6', teams: 'LAHORE QALANDARS vs KARACHI KINGS', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'MAR 31', match: 'MATCH 7', teams: 'ISLAMABAD UNITED vs PESHAWAR ZALMI', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 1', match: 'MATCH 8', teams: 'MULTAN SULTANS vs HYDERABAD KINGSMEN', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 2', match: 'MATCH 9', teams: 'QUETTA GLADIATORS vs ISLAMABAD UNITED', venue: 'LAHORE', time: '2:30 PM' },
  { date: 'APR 2', match: 'MATCH 10', teams: 'RAWALPINDIZ vs KARACHI KINGS', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 3', match: 'MATCH 11', teams: 'LAHORE QALANDARS vs MULTAN SULTANS', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 4', match: 'MATCH 12', teams: 'RAWALPINDIZ vs ISLAMABAD UNITED', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 5', match: 'MATCH 13', teams: 'QUETTA GLADIATORS vs MULTAN SULTANS', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 6', match: 'MATCH 14', teams: 'MULTAN SULTANS vs RAWALPINDIZ', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 8', match: 'MATCH 15', teams: 'HYDERABAD KINGSMEN vs PESHAWAR ZALMI', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 9', match: 'MATCH 16', teams: 'LAHORE QALANDARS vs ISLAMABAD UNITED', venue: 'KARACHI', time: '2:30 PM' },
  { date: 'APR 9', match: 'MATCH 17', teams: 'KARACHI KINGS vs PESHAWAR ZALMI', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 10', match: 'MATCH 18', teams: 'QUETTA GLADIATORS vs RAWALPINDIZ', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 11', match: 'MATCH 19', teams: 'PESHAWAR ZALMI vs LAHORE QALANDARS', venue: 'KARACHI', time: '2:30 PM' },
  { date: 'APR 11', match: 'MATCH 20', teams: 'KARACHI KINGS vs HYDERABAD KINGSMEN', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 12', match: 'MATCH 21', teams: 'HYDERABAD KINGSMEN vs ISLAMABAD UNITED', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 13', match: 'MATCH 22', teams: 'PESHAWAR ZALMI vs MULTAN SULTANS', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 15', match: 'MATCH 23', teams: 'PESHAWAR ZALMI vs QUETTA GLADIATORS', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 16', match: 'MATCH 24', teams: 'HYDERABAD KINGSMEN vs RAWALPINDIZ', venue: 'KARACHI', time: '2:30 PM' },
  { date: 'APR 16', match: 'MATCH 25', teams: 'KARACHI KINGS vs ISLAMABAD UNITED', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 17', match: 'MATCH 26', teams: 'LAHORE QALANDARS vs QUETTA GLADIATORS', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 18', match: 'MATCH 27', teams: 'LAHORE QALANDARS vs RAWALPINDIZ', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 19', match: 'MATCH 28', teams: 'KARACHI KINGS vs MULTAN SULTANS', venue: 'KARACHI', time: '2:30 PM' },
  { date: 'APR 19', match: 'MATCH 29', teams: 'PESHAWAR ZALMI vs QUETTA GLADIATORS', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 21', match: 'MATCH 30', teams: 'LAHORE QALANDARS vs QUETTA GLADIATORS', venue: 'LAHORE', time: '2:30 PM' },
  { date: 'APR 21', match: 'MATCH 31', teams: 'RAWALPINDIZ vs MULTAN SULTANS', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 22', match: 'MATCH 32', teams: 'KARACHI KINGS vs PESHAWAR ZALMI', venue: 'LAHORE', time: '2:30 PM' },
  { date: 'APR 22', match: 'MATCH 33', teams: 'HYDERABAD KINGSMEN vs MULTAN SULTANS', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 23', match: 'MATCH 34', teams: 'RAWALPINDIZ vs ISLAMABAD UNITED', venue: 'KARACHI', time: '2:30 PM' },
  { date: 'APR 23', match: 'MATCH 35', teams: 'LAHORE QALANDARS vs KARACHI KINGS', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 24', match: 'MATCH 36', teams: 'HYDERABAD KINGSMEN vs ISLAMABAD UNITED', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 25', match: 'MATCH 37', teams: 'QUETTA GLADIATORS vs KARACHI KINGS', venue: 'LAHORE', time: '2:30 PM' },
  { date: 'APR 25', match: 'MATCH 38', teams: 'LAHORE QALANDARS vs PESHAWAR ZALMI', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'APR 26', match: 'MATCH 39', teams: 'HYDERABAD KINGSMEN vs RAWALPINDIZ', venue: 'KARACHI', time: '2:30 PM' },
  { date: 'APR 26', match: 'MATCH 40', teams: 'ISLAMABAD UNITED vs MULTAN SULTANS', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 28', match: 'MATCH 41', teams: 'QUALIFIER', venue: 'KARACHI', time: '7:00 PM' },
  { date: 'APR 29', match: 'MATCH 42', teams: 'ELIMINATOR 1', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'MAY 1', match: 'MATCH 43', teams: 'ELIMINATOR 2', venue: 'LAHORE', time: '7:00 PM' },
  { date: 'MAY 3', match: 'MATCH 44', teams: 'FINAL', venue: 'LAHORE', time: '7:00 PM' },
];

export default function PslSchedulePage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <article className="content-wrapper">
        <h1>HBL PSL 11 (2026) Official Schedule</h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          The Pakistan Super League returns for its 11th edition starring all 8 franchises across major stadiums in Pakistan. Below is the official tournament timetable.
        </p>

        <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '819px', margin: '0 auto', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', borderRadius: '0.5rem', overflow: 'hidden' }}>
            {/* The provided schedule image */}
            <Image 
              src="/psl-schedule.jpeg" 
              alt="HBL PSL 11 2026 Full Official Schedule and Match Timetable" 
              width={819}
              height={1024}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
          <p style={{ marginTop: '1rem', color: '#4b5563', fontSize: '0.9rem' }}>
            ↑ Official HBL PSL 11 Match Schedule. Save this image to your device to keep track of the tournament!
          </p>
        </section>

        <h2>Text Format Schedule</h2>
        <section style={{ marginBottom: '3rem', overflowX: 'auto' }}>
          <table style={{ minWidth: '800px', width: '100%', borderCollapse: 'collapse', marginTop: '1rem', border: '1px solid #111827', textAlign: 'center', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#c7fa3b', color: '#0A3258' }}>
                <th style={{ padding: '0.75rem', border: '1px solid #111827' }}>DATE</th>
                <th style={{ padding: '0.75rem', border: '1px solid #111827' }}>MATCH</th>
                <th style={{ padding: '0.75rem', border: '1px solid #111827' }}>TEAMS</th>
                <th style={{ padding: '0.75rem', border: '1px solid #111827' }}>VENUE</th>
                <th style={{ padding: '0.75rem', border: '1px solid #111827' }}>TIME</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => {
                const isOddGroup = Math.floor(index / 2) % 2 === 0;
                // Alternate row color banding loosely based on image
                const rowStyle = index % 2 === 0 ? { backgroundColor: '#0f172a', color: 'white' } : { backgroundColor: '#1e293b', color: 'white' };
                // Highlight playoffs with distinct style
                if (index >= 40) {
                     rowStyle.backgroundColor = '#1e3a8a';
                     rowStyle.color = '#fff';
                     rowStyle.fontWeight = 'bold';
                     rowStyle.borderTop = '2px solid #3b82f6';
                }
                
                return (
                  <tr key={index} style={rowStyle}>
                    <td style={{ padding: '0.5rem', border: '1px solid #334155' }}>{item.date}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #334155' }}>{item.match}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #334155', fontWeight: 'bold' }}>{item.teams}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #334155' }}>{item.venue}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #334155' }}>{item.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.85rem', textAlign: 'right' }}>Matches 41-44 denote the playoff stages, culminating in the Final.</p>
        </section>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/points-table" className="btn">View Current Standings</a>
          <a href="/hbl-psl-2026" className="btn" style={{ marginLeft: '1rem', backgroundColor: '#0A3258' }}>Tournament Details</a>
        </div>
      </article>
    </div>
  );
}
