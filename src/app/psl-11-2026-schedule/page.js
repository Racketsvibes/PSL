import Image from 'next/image';

export const metadata = {
  title: 'HBL PSL 11 (2026) Schedule | Full Match Timetable',
  description: 'View the complete and official HBL PSL 11 (2026) match schedule. Never miss a game with our detailed calendar and printable schedule image.',
  keywords: 'psl 11 schedule, psl 2026 schedule, pakistan super league timetable, hbl psl calendar',
};

export default function PslSchedulePage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <article className="content-wrapper">
        <h1>HBL PSL 11 (2026) Official Schedule</h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          The Pakistan Super League returns for its 11th edition with an action-packed double round-robin format starring all 8 franchises across major stadiums in Pakistan. Below is the official tournament timetable.
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

        <h2>Tournament Format</h2>
        <section style={{ marginBottom: '2rem' }}>
           <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li><strong>League Stage:</strong> Each team will play against the others twice.</li>
            <li><strong>Playoffs:</strong> The top 4 teams advance. Includes the Qualifier, Eliminator 1, and Eliminator 2.</li>
            <li><strong>Finals:</strong> The grand finale to crown the PSL 11 Champions!</li>
          </ul>
        </section>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/points-table" className="btn">View Current Standings</a>
          <a href="/hbl-psl-2026" className="btn" style={{ marginLeft: '1rem', backgroundColor: '#0A3258' }}>Tournament Details</a>
        </div>
      </article>
    </div>
  );
}
