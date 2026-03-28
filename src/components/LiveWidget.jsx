"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
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
};

const getAbbreviation = (name) => {
  if (!name) return 'TBD';
  const parts = name.split(' ');
  if (parts.length > 1) {
    return parts[0][0] + parts[1][0];
  }
  return name.substring(0, 2).toUpperCase();
};

export default function LiveWidget() {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await fetch('/api/live');
        const json = await res.json();
        
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          setMatch(json.data[0]);
        } else {
          setMatch(null);
        }
      } catch (err) {
        console.error("Widget Fetch Error:", err);
      }
    };

    fetchScores();
    const interval = setInterval(fetchScores, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!match) return null;

  const localTeam = match.localteam?.name;
  const visitorTeam = match.visitorteam?.name;
  const localRuns = match.runs?.find(r => r.team_id === match.localteam_id);
  const visitorRuns = match.runs?.find(r => r.team_id === match.visitorteam_id);

  // We determine who is batting based on who has overs, or we just display both scores compactly.
  // If a team hasn't batted, it will be blank or 0/0.
  
  return (
    <Link href="/live-score" className="header-live-widget top-bar-widget" aria-label="Live Match Score">
      <div className="live-teams">
        <div className="team-info">
          <Image src={LOGO_MAP[localTeam] || "/psl-logo.jpg"} alt={localTeam || 'Team'} width={24} height={24} className="team-icon" />
          <span className="team-name">{getAbbreviation(localTeam)}</span>
        </div>
        
        <div className="score-details">
          {localRuns ? 
            <><span className="current-score">{localRuns.score}/{localRuns.wickets}</span> <span className="overs">({localRuns.overs})</span></> 
          : <span className="current-score">...</span>}
        </div>
        
        <span className="vs-text">v</span>
        
        <div className="score-details">
          {visitorRuns ? 
            <><span className="current-score">{visitorRuns.score}/{visitorRuns.wickets}</span> <span className="overs">({visitorRuns.overs})</span></> 
          : null}
        </div>
        
        <div className="team-info">
          <span className="team-name">{getAbbreviation(visitorTeam)}</span>
          <Image src={LOGO_MAP[visitorTeam] || "/psl-logo.jpg"} alt={visitorTeam || 'Team'} width={24} height={24} className="team-icon" />
        </div>
      </div>
      <span className="live-indicator">LIVE</span>
    </Link>
  );
}
