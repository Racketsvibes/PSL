export const metadata = {
  title: 'HBL PSL 2026 Details | Schedule, Teams & Venues',
  description: 'Comprehensive guide to the HBL PSL 2026 tournament. Find all details regarding the participating teams, match schedules, venues, and live streaming options.',
  keywords: 'hbl psl 2026, psl 11 schedule, psl 2026 teams, psl 2026 venues, pakistan super league 2026',
};

export default function Psl2026OverviewPage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <article className="content-wrapper">
        <h1>HBL PSL 2026: The Ultimate Tournament Guide</h1>

        <section style={{ marginBottom: '2rem' }}>
          <p>The Pakistan Super League returns for its highly anticipated 11th edition, <strong>HBL PSL 2026</strong>. Reaffirming its status as one of the most exciting T20 franchise leagues globally, this year promises unyielding competition with expanded rosters, cutting-edge venues, and fierce rivalries.</p>
        </section>

        <h2>Participating Teams</h2>
        <section style={{ marginBottom: '2rem' }}>
          <p>The core franchises remain intact, but massive shifts during the PSL draft have repositioned several teams. Explore the deep-dive analyses on our designated team pages:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li><strong><a href="/lahore-qalandars-squad">Lahore Qalandars</a></strong>: Defending the fortress under the fiery pace of Shaheen Afridi.</li>
            <li><strong><a href="/quetta-gladiators-squad">Quetta Gladiators</a></strong>: Revamped and hungry for the title led by Saud Shakeel.</li>
            <li><strong>Islamabad United</strong>: The perennial title contenders aiming to add another trophy.</li>
            <li><strong>Karachi Kings</strong>: Revitalized and relying on immense home-crowd support.</li>
            <li><strong>Multan Sultans</strong>: The statistical dominators of the group stages.</li>
            <li><strong>Peshawar Zalmi</strong>: Infused with high-octane batting talent and fan-favorite superstars.</li>
          </ul>
          <p>Keep track of how they all stack up on our <a href="/points-table">PSL Points Table</a>.</p>
        </section>

        <h2>Venues & Format</h2>
        <section style={{ marginBottom: '2rem' }}>
          <p>In 2026, the PCB has prioritized maximizing local attendance by rotating the matches across iconic stadiums in Pakistan. Key venues include:</p>
          <ul>
            <li><strong>Gaddafi Stadium, Lahore</strong></li>
            <li><strong>National Stadium, Karachi</strong></li>
            <li><strong>Rawalpindi Cricket Stadium</strong></li>
            <li><strong>Multan Cricket Stadium</strong></li>
          </ul>
          <p>The format remains the standard double round-robin, ensuring every team faces the others twice—once at home and once away. The top four teams advance to the grueling highly-pressured Playoff Stage: Qualifier, Eliminator 1, Eliminator 2, and the Grand Final.</p>
        </section>

        <h2>Broadcasting and Live Action</h2>
        <section style={{ marginBottom: '2rem' }}>
          <p>If you're looking to catch the matches live, the PCB has maintained diverse broadcasting avenues.</p>
          <p>For matches involving your favorite specific franchises, such as our detailed schedule for <a href="/where-to-watch-quetta-vs-lahore">Quetta vs Lahore</a>, television viewers can tune into <strong>A Sports, PTV Sports, Geo Super, and Ten Sports</strong>. Digital viewers within Pakistan have unrestricted access via the <strong>Tamasha App</strong>.</p>
          <p>For international fans, streaming rights have been distributed heavily across Willow TV (NA), Sky Sports (UK), and Tapmad (Global). Make sure to check out our complete <a href="/psl-live">PSL Live Streaming Guide</a> for explicit regional breakdowns.</p>
        </section>

        <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#eff6ff', border: '1px solid #3b82f6', borderRadius: '0.5rem', textAlign: 'center' }}>
          <h3 style={{ color: '#1d4ed8', marginBottom: '1rem' }}>Never Miss a Match</h3>
          <p>Keep this page bookmarked, or head directly to our live tracking portals to stay continually updated on the latest scores and standings.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/psl-live" className="btn">PSL Live Portal</a>
            <a href="/points-table" className="btn" style={{ backgroundColor: '#008236' }}>View Standings</a>
          </div>
        </section>

      </article>
    </div>
  );
}
