import Link from 'next/link';
import LiveScoreboard from '@/components/LiveScoreboard';

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
        <LiveScoreboard />

        <div style={{ textAlign: 'left', marginTop: '3rem', padding: '2.5rem', backgroundColor: '#ffffff', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ color: 'var(--brand-blue)', fontSize: '1.8rem', marginBottom: '1rem' }}>Welcome to the PSL 2026 Live Match Center</h2>
          <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Stay on top of the action with ball-by-ball updates throughout the <strong>HBL Pakistan Super League 11 (2026)</strong>. Whether it's the high-voltage clash between the Lahore Qalandars and Karachi Kings, or the debut matches of the new Hyderabad Kingsmen, our live scoreboard guarantees you won't miss a single boundary, hat-trick, or dramatic finish.
          </p>
          <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Keep this tab open while you watch to track the current run rate, player partnerships, and detailed batting or bowling figures. To check what's up next, simply head over to our schedule page or jump into the live stream to catch the visuals as they unfold, pitch-side.
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
