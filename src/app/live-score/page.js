import Link from 'next/link';

export const metadata = {
  title: 'HBL PSL 11 (2026) Live Score & Match Center',
  description: 'Get real-time, ball-by-ball live cricket scores, fast updates, structured match commentary, and complete scorecard metrics for the Pakistan Super League 2026.',
  keywords: 'psl live score, psl 11 scoreboard, fast psl score updates, psl 2026 match center',
};

export default function LiveScorePage() {
  return (
    <div className="container" style={{ padding: '4rem 0', minHeight: '60vh' }}>
      <article className="content-wrapper" style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#0A3258', marginBottom: '1.5rem', fontSize: '2.5rem' }}>PSL 2026 Live Match Center</h1>
        
        <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '3rem 2rem', borderRadius: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#166534', marginTop: 0 }}>Tournament Starts on March 26, 2026</h2>
          <p style={{ fontSize: '1.2rem', color: '#15803d', margin: 0 }}>
            Our real-time, ball-by-ball live scoreboard API interface will dynamically activate exactly when the first ball is bowled at Gaddafi Stadium.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
          <Link href="/psl-11-2026-schedule" className="btn" style={{ backgroundColor: '#2563eb', color: '#fff' }}>View Full Schedule</Link>
          <Link href="/psl-live" className="btn" style={{ backgroundColor: '#0284c7', color: '#fff' }}>Find Live Streaming</Link>
        </div>
      </article>
    </div>
  );
}
