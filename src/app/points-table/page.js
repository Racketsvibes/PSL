export const metadata = {
  title: 'PSL 11 (2026) Points Table | Current Standings',
  description: 'Check the latest authentic PSL 11 (2026) points table and standings, constantly updated to show which team is leading the Pakistan Super League.',
};

export default function PointsTablePage() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <article className="content-wrapper">
        <h1>PSL 11 (2026) Points Table & Standings</h1>
        
        <p>The Pakistan Super League 2026 has expanded to include eight franchises, generating massive excitement spanning across Lahore and Karachi. Below are the current official tournament standings following the opening week of play.</p>
        
        <h2>Current Standings</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', border: '1px solid #e5e7eb', textAlign: 'center' }}>
          <thead>
            <tr style={{ backgroundColor: '#0A3258', color: 'white' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Team</th>
              <th style={{ padding: '0.75rem' }}>Played</th>
              <th style={{ padding: '0.75rem' }}>Won</th>
              <th style={{ padding: '0.75rem' }}>Lost</th>
              <th style={{ padding: '0.75rem' }}>Points</th>
              <th style={{ padding: '0.75rem' }}>NRR</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#f0fdf4' }}>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}><strong>Lahore Qalandars</strong></td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>2</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', color: 'green' }}>+3.450</td>
            </tr>
            <tr style={{ backgroundColor: '#f0fdf4' }}>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}><strong>Rawalpindi Pindiz</strong></td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>2</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', color: 'green' }}>+1.700</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}>Islamabad United</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0.000</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}>Multan Sultans</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0.000</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}>Quetta Gladiators</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0.000</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}>Karachi Kings</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0.000</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}>Peshawar Zalmi</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', color: 'red' }}>-1.700</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', textAlign: 'left' }}>Hyderabad Kingsmen</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>0</td>
              <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', color: 'red' }}>-3.450</td>
            </tr>
          </tbody>
        </table>

         <div style={{ marginTop: '2rem' }}>
          <p><strong>Note:</strong> The top four teams will advance to the PSL playoffs scheduled for May.</p>
          <a href="/psl-live" className="btn">Watch Live Matches</a>
        </div>
      </article>
    </div>
  );
}
