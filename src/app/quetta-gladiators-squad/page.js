import Image from 'next/image';

export const metadata = {
  title: 'Quetta Gladiators Squad PSL 11 (2026) | Full Player List',
  description: 'Authentic and complete Quetta Gladiators squad for PSL 11 2026. See the full player list captained by Saud Shakeel.',
};

export default function QuettaSquadPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <article className="content-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Image src="/Quetta_Gladiators.png" alt="Quetta Gladiators Official Logo PSL 2026 HBL" width={180} height={180} style={{ objectFit: 'contain' }} priority />
        </div>
        <h1 style={{ textAlign: 'center' }}>Quetta Gladiators Squad - PSL 11 (2026)</h1>
        
        <p>Looking to claim the title in PSL 2026, the Quetta Gladiators are leaning heavily into a mix of emerging local stars and established international talent. This year, the team is captained by <strong>Saud Shakeel</strong> and coached by legacy figures including Sarfaraz Ahmed.</p>
        
        <h2>Full Player List</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', border: '1px solid #e5e7eb' }}>
          <thead>
            <tr style={{ backgroundColor: '#008236', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '0.75rem' }}>Player Name</th>
              <th style={{ padding: '0.75rem' }}>Role</th>
              <th style={{ padding: '0.75rem' }}>Category/Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}><strong>Saud Shakeel</strong></td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Batter</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Captain / Domestic</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Rilee Rossouw</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Batter</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Platinum (Overseas)</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Abrar Ahmed</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Bowler</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Diamond</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Wasim Akram Jr.</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>All-Rounder</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Local</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Ben McDermott</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Wicketkeeper</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Overseas</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Alzarri Joseph</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Bowler</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Overseas</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Tom Curran</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>All-Rounder</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Overseas</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Bismillah Khan</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Wicketkeeper</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Domestic</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Ahmed Daniyal</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Bowler</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Domestic</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Khawaja Nafay</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Batter</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Emerging</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Spencer Johnson</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Bowler</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Overseas</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Jahandad Khan</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>All-Rounder</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Domestic</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Usman Tariq</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Bowler</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Domestic</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Arafat Minhas</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>All-Rounder</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Local</td></tr>
            <tr><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Sam Harper</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Wicketkeeper</td><td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Overseas</td></tr>
          </tbody>
        </table>

        <div style={{ marginTop: '2rem' }}>
          <a href="/where-to-watch-quetta-vs-lahore" className="btn">Back to Match Hub</a>
        </div>
      </article>
    </div>
  );
}
