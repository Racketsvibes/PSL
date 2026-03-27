import Link from 'next/link';

export const metadata = {
  title: 'PSL Live 2026 - Live Score, Streaming & Match Coverage',
  description: 'Welcome to your ultimate source for PSL Live. Get live scores, psl streaming options, and match breakdowns such as Quetta Gladiators vs Lahore Qalandars.',
};

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to PSL Live 2026</h1>
          <p>Your Ultimate Guide for Pakistan Super League Live Streaming, Live Scores, and Match Insights</p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/psl-live" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.25rem' }}>
              Watch PSL Live 🔴
            </Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured PSL Coverage</h2>
        <div className="grid-2">
          <div className="card">
            <h3><Link href="/psl-live">Comprehensive PSL Live Guide</Link></h3>
            <p>Looking for the <strong>PSL match today live</strong>, or checking the latest <strong>PSL live score</strong>? We have gathered all the information on how you can catch the Pakistan Super League action live on Tamasha and other platforms.</p>
            <p>From <strong>psl live streaming</strong> to upcoming match schedules, everything you need for the upcoming PSL 2026 is right here.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/psl-live" className="btn">Read the Full Guide</Link>
            </div>
          </div>

          <div className="card">
            <h3><Link href="/where-to-watch-quetta-vs-lahore">Where to Watch Quetta Gladiators vs Lahore Qalandars</Link></h3>
            <p>The rivalry is back! Get ready for the much-anticipated clash. Find out exactly <strong>where to watch quetta gladiators vs lahore qalandars</strong> live. We dive deep into Quetta vs Lahore stats, players, head-to-head records, and the final showdown predictions.</p>
            <p>Want the inside scoop before you watch? Explore the complete <strong>qg vs lah</strong> breakdown.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/where-to-watch-quetta-vs-lahore" className="btn">View Match Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
