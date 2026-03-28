"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

const LOGO_MAP = {
  'Peshawar Zalmi': '/Peshawar_Zalmi_logo.png',
  'Rawalpindiz': '/Rawalpindiz_Logo.png',
  'Quetta Gladiators': '/Quetta_Gladiators.png',
  'Hyderabad Kingsmen': '/Hyderabad_Houston_Kingsmen_logo.png',
  'Lahore Qalandars': '/Lahore_Qalandars.png',
  'Islamabad United': '/Islamabad_United.png',
  'Karachi Kings': '/Karachi_Kings.png',
  'Multan Sultans': '/MultanSultans.png',
  'Rawalpindi Pindiz': '/Rawalpindiz_Logo.png',
};

export default function RecentMatch() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await fetch('/api/recent');
        const json = await res.json();
        
        if (json.data && Array.isArray(json.data)) {
          setMatches(json.data);
        } else {
          setMatches([]);
        }
      } catch (err) {
        console.error("Recent Match Render Error:", err);
        setError('Failed to securely fetch recent match data.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecent();
  }, []);

  if (loading) return null; // Silently load
  if (error) return null; // Fail gracefully
  if (matches.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem', textAlign: 'left' }}>
      <h2 style={{ fontSize: '1.75rem', color: '#0A3258', borderBottom: '2px solid #008A37', paddingBottom: '0.5rem', marginBottom: '-0.5rem', display: 'inline-block', width: 'max-content' }}>Previous Match Result</h2>
      {matches.map((match) => {
        const localTeam = match.localteam?.name || 'Local Team';
        const visitorTeam = match.visitorteam?.name || 'Visitor Team';
        const note = match.note || 'Match Concluded';
        
        const localRuns = match.runs?.find(r => r.team_id === match.localteam_id);
        const visitorRuns = match.runs?.find(r => r.team_id === match.visitorteam_id);

        return (
          <div key={match.id} style={{ background: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '1rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            
            {/* Header Block */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontWeight: 'bold', color: '#64748b' }}>{match.league?.name || 'PSL 2026 Match'}</span>
              <span style={{ backgroundColor: '#94a3b8', color: '#ffffff', padding: '0.2rem 0.8rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 'bold' }}>
                FINISHED
              </span>
            </div>
            
            {/* Score Grid Block */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'left', flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Image src={LOGO_MAP[localTeam] || '/psl-logo.jpg'} alt={localTeam} width={48} height={48} style={{ objectFit: 'contain', opacity: 0.9 }} />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#334155' }}>{localTeam}</h3>
                  <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#475569', margin: '0.5rem 0 0 0' }}>
                    {localRuns ? `${localRuns.score}/${localRuns.wickets} (${localRuns.overs})` : 'TBD'}
                  </p>
                </div>
              </div>
              
              <div style={{ flex: '0 0 60px', textAlign: 'center', fontSize: '1.2rem', color: '#cbd5e1', fontWeight: 'bold' }}>
                VS
              </div>
              
              <div style={{ textAlign: 'right', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#334155' }}>{visitorTeam}</h3>
                  <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#475569', margin: '0.5rem 0 0 0' }}>
                    {visitorRuns ? `${visitorRuns.score}/${visitorRuns.wickets} (${visitorRuns.overs})` : 'TBD'}
                  </p>
                </div>
                <Image src={LOGO_MAP[visitorTeam] || '/psl-logo.jpg'} alt={visitorTeam} width={48} height={48} style={{ objectFit: 'contain', opacity: 0.9 }} />
              </div>
            </div>
            
            {/* Footer Status Block - Matches Request Layout */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ color: '#0369a1', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                {note}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                {match.league?.name || 'T20'} {match.round ? `· Match ${match.round}` : '· PSL 2026'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
