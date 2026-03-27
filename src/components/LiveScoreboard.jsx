"use client";
import { useEffect, useState } from 'react';

export default function LiveScoreboard() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await fetch('/api/live');
        const json = await res.json();
        
        if (json.data && Array.isArray(json.data)) {
          setMatches(json.data);
        } else {
          setMatches([]);
        }
      } catch (err) {
        console.error("Scoreboard Render Error:", err);
        setError('Failed to securely establish live database connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchScores(); // Initial fetch
    const interval = setInterval(fetchScores, 15000); // Auto-poll silently every 15 seconds
    
    return () => clearInterval(interval); // Cleanup on dismount
  }, []);

  if (loading) return <div style={{ padding: '3rem', textAlign: 'center', color: '#6b7280', fontSize: '1.2rem' }}>Connecting to Live Match Interface...</div>;
  if (error) return <div style={{ padding: '3rem', textAlign: 'center', color: '#ef4444', fontSize: '1.2rem' }}>{error}</div>;

  if (matches.length === 0) {
    return (
      <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', padding: '3rem 2rem', borderRadius: '1rem', marginTop: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#374151', margin: 0 }}>No Live Matches Currently in Progress</h2>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>The API scoreboard will automatically activate visually exactly when the coin toss completes.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem', textAlign: 'left' }}>
      {matches.map((match) => {
        // Safe data extraction mapping
        const localTeam = match.localteam?.name || 'Local Team';
        const visitorTeam = match.visitorteam?.name || 'Visitor Team';
        const note = match.note || 'Match underway securely';
        
        // Find individual innings/runs data explicitly
        const localRuns = match.runs?.find(r => r.team_id === match.localteam_id);
        const visitorRuns = match.runs?.find(r => r.team_id === match.visitorteam_id);

        return (
          <div key={match.id} style={{ background: '#ffffff', border: '2px solid #e5e7eb', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            
            {/* Header Block */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontWeight: 'bold', color: '#0A3258' }}>{match.league?.name || 'Live Domestic Match'}</span>
              <span style={{ backgroundColor: '#ef4444', color: '#ffffff', padding: '0.2rem 0.8rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 'bold' }}>
                LIVE
              </span>
            </div>
            
            {/* Score Grid Block */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#111827' }}>{localTeam}</h3>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0A3258', margin: '0.5rem 0 0 0' }}>
                  {localRuns ? `${localRuns.score}/${localRuns.wickets} (${localRuns.overs})` : 'Yet to bat / TBD'}
                </p>
              </div>
              
              <div style={{ flex: '0 0 60px', textAlign: 'center', fontSize: '1.2rem', color: '#9ca3af', fontWeight: 'bold' }}>
                VS
              </div>
              
              <div style={{ textAlign: 'right', flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#111827' }}>{visitorTeam}</h3>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0A3258', margin: '0.5rem 0 0 0' }}>
                  {visitorRuns ? `${visitorRuns.score}/${visitorRuns.wickets} (${visitorRuns.overs})` : 'Yet to bat / TBD'}
                </p>
              </div>
            </div>
            
            {/* Footer Status Block */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#0369a1', fontWeight: 500, fontSize: '1.1rem' }}>
              {note}
            </div>
          </div>
        );
      })}
    </div>
  );
}
