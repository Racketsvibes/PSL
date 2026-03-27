export const metadata = {
  title: 'National Bank Stadium Karachi Matches | HBL PSL 2026 Schedule',
  description: 'View the complete breakdown of the 22 HBL PSL 11 (2026) matches hosted at the National Bank Stadium in Karachi, including dates, timings, and team matchups.',
  keywords: 'national bank stadium karachi psl matches, karachi psl 11 schedule, psl 2026 karachi venue',
};

export default function KarachiStadiumPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How many PSL matches is Karachi hosting?", "acceptedAnswer": { "@type": "Answer", "text": "22 matches." } },
      { "@type": "Question", "name": "Will Karachi Kings play at National Stadium?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 9 home matches." } },
      { "@type": "Question", "name": "Why are matches not played in Multan?", "acceptedAnswer": { "@type": "Answer", "text": "Logistical limits." } }
    ]
  };

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="content-wrapper">
        <h1>National Bank Stadium Karachi: The PSL 11 Stronghold</h1>
        
        <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: '1.7', marginBottom: '2rem' }}>
          Due to significant venue reductions for the HBL Pakistan Super League 2026, the <strong>National Bank Stadium in Karachi</strong> has been elevated into one of only two active venues for the entire tournament. Sharing the load equally with Lahore, this historic ground will securely host exactly half of the league phase—amounting to <strong>22 grueling, high-pressure matches</strong> played consistently behind closed doors.
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#0A3258' }}>The Middle Stage Battleground</h2>
          <p>
            Unlike Gaddafi Stadium which handles both the opening and the absolute finals, Karachi specifically dominates the critical "middle stage" of the tournament. The comprehensive Karachi schedule dictates that practically all crucial movement on the <strong>Points Table</strong> occurs rigorously on this specific pitch between <strong>April 8 and April 26</strong>.
          </p>
          <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderLeft: '4px solid #3b82f6', borderRadius: '0.5rem', margin: '1.5rem 0' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1e3a8a' }}>Key Karachi Match Highlights</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li><strong>Karachi Opener:</strong> Hyderabad Kingsmen vs Peshawar Zalmi (April 8, 7:00 PM)</li>
              <li><strong>The Hometown Heroes:</strong> Karachi Kings will play 9 distinct times securely on their home turf.</li>
              <li><strong>Double Header Weekends:</strong> Features 4 massive weekend double-headers maximizing TV broadcast ratings.</li>
              <li><strong>Karachi Finale:</strong> Islamabad United vs Multan Sultans exactly on April 26, effectively concluding the stadium\'s PSL 11 duties.</li>
            </ul>
          </div>
        </section>

        <h2>Pitch Conditions & Strategic Impact</h2>
        <section style={{ marginBottom: '3rem' }}>
          <p>
            The National Bank Stadium historically boasts massive batting tracks uniquely catering to opening batsmen. Without physical crowd density, away teams historically perform more calmly.
          </p>
        </section>

        {/* FAQs */}
        <section style={{ marginTop: '5rem', borderTop: '2px solid #e5e7eb', paddingTop: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#111827' }}>Karachi Matches FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0A3258' }}>How many PSL matches is Karachi hosting?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>Karachi is hosting 22 matches.</p>
            </div>
            <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0A3258' }}>Will Karachi Kings play at National Stadium?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>Yes, they have 9 home matches.</p>
            </div>
            <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#0A3258' }}>Why are matches not played in Multan?</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>Multan was stripped due to strict logistics.</p>
            </div>
          </div>
        </section>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
           <a href="/psl-11-2026-schedule" className="btn">View Full 44-Match Schedule</a>
        </div>

      </article>
    </div>
  );
}
