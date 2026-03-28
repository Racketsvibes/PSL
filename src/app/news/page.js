import Link from 'next/link';

export const metadata = {
  title: 'PSL 2026 News & Match Previews | HBL PSL 11 Latest Updates',
  description: 'All the latest PSL 2026 news, match previews, venue updates, live streaming guides, and squad analysis for HBL Pakistan Super League 11.',
  keywords: 'psl 2026 news, psl 11 latest news, psl match preview, pakistan super league 2026, psl news today',
};

const newsItems = [
  // Match Previews & Results
  {
    category: '⚔️ Match Previews & Results',
    color: '#1d4ed8',
    bgColor: '#eff6ff',
    borderColor: '#3b82f6',
    articles: [
      {
        href: '/lahore-qalandars-vs-karachi-kings',
        title: 'Lahore Qalandars vs Karachi Kings – PSL 2026 Match 6 | El Clásico Preview',
        desc: 'The biggest rivalry in PSL history: Match 6 on March 29 at 7:00 PM PKT, Gaddafi Stadium. Head-to-head, key players, squads & live streaming guide.',
        badge: 'LIVE NOW',
        badgeColor: '#C8102E',
        date: 'Mar 29, 2026',
      },
      {
        href: '/quetta-gladiators-vs-hyderabad-kingsmen',
        title: 'Quetta Gladiators vs Hyderabad Kingsmen – PSL 2026 Match 5',
        desc: 'Full preview: March 29 at Gaddafi Stadium. Key players, squads, recent form, and where to watch live.',
        badge: 'NEW',
        badgeColor: '#008A37',
        date: 'Mar 29, 2026',
      },
      {
        href: '/multan-sultans-vs-islamabad-united',
        title: 'Multan Sultans vs Islamabad United – PSL 2026 Match 4',
        desc: 'In-depth analysis of the March 28 primetime blockbuster at Gaddafi Stadium. Head-to-head stats and squad updates.',
        badge: 'PREVIEW',
        badgeColor: '#0A3258',
        date: 'Mar 28, 2026',
      },
      {
        href: '/peshawar-zalmi-vs-rawalpindi-pindiz',
        title: 'Peshawar Zalmi vs Rawalpindi Pindiz – PSL 2026 Match 3',
        desc: 'Babar Azam leads Zalmi against the new franchise Rawalpindi Pindiz. Full match guide.',
        badge: 'PREVIEW',
        badgeColor: '#0A3258',
        date: 'Mar 28, 2026',
      },
      {
        href: '/where-to-watch-quetta-vs-lahore',
        title: 'Quetta Gladiators vs Lahore Qalandars – Broadcaster Guide',
        desc: 'Discover every platform and channel streaming this fierce rivalry live in Pakistan and globally.',
        badge: 'GUIDE',
        badgeColor: '#7c3aed',
        date: 'Mar 27, 2026',
      },
    ],
  },
  // Venues & Schedule
  {
    category: '🏟️ Venues & Schedule',
    color: '#b45309',
    bgColor: '#fffbeb',
    borderColor: '#f59e0b',
    articles: [
      {
        href: '/psl-11-2026-schedule',
        title: 'HBL PSL 11 (2026) Full Official Schedule',
        desc: 'Complete 44-match timetable with dates, venues, and match times across Lahore and Karachi.',
        badge: 'SCHEDULE',
        badgeColor: '#b45309',
        date: 'Mar 26, 2026',
      },
      {
        href: '/gaddafi-stadium-psl-schedule',
        title: 'Gaddafi Stadium PSL 2026 Matches – Lahore',
        desc: 'All PSL 11 matches being played at the iconic Gaddafi Stadium in Lahore with full fixture list.',
        badge: 'VENUE',
        badgeColor: '#b45309',
        date: 'Mar 26, 2026',
      },
      {
        href: '/national-bank-stadium-karachi-psl-matches',
        title: 'National Bank Stadium Karachi – PSL 2026 Fixtures',
        desc: 'Full list of all PSL 11 matches hosted at the National Bank Stadium in Karachi.',
        badge: 'VENUE',
        badgeColor: '#b45309',
        date: 'Mar 26, 2026',
      },
      {
        href: '/psl-2026-venue-changes',
        title: 'Why PSL 2026 Venues Were Reduced to Just Two Cities',
        desc: 'The real story behind the controversial decision to host all PSL 11 matches only in Lahore and Karachi.',
        badge: 'EXCLUSIVE',
        badgeColor: '#dc2626',
        date: 'Mar 26, 2026',
      },
    ],
  },
  // Live Streaming & Scores
  {
    category: '📺 Live Streaming & Scores',
    color: '#065f46',
    bgColor: '#f0fdf4',
    borderColor: '#34d399',
    articles: [
      {
        href: '/psl-live',
        title: 'How to Watch PSL 2026 Live – Complete Streaming Guide',
        desc: 'Every broadcaster and streaming platform to watch HBL PSL 11 live, from Tamasha to Willow TV internationally.',
        badge: 'GUIDE',
        badgeColor: '#065f46',
        date: 'Mar 26, 2026',
      },
      {
        href: '/live-score',
        title: 'PSL 2026 Live Score – Real-Time Updates',
        desc: 'Ball-by-ball live score updates for all PSL 11 matches as they happen.',
        badge: 'LIVE',
        badgeColor: '#dc2626',
        date: 'Ongoing',
      },
      {
        href: '/points-table',
        title: 'PSL 2026 Points Table – Current Standings',
        desc: 'The latest HBL PSL 11 standings including net run rate, wins, losses, and qualification scenarios.',
        badge: 'LIVE',
        badgeColor: '#dc2626',
        date: 'Ongoing',
      },
    ],
  },
  // PSL News & Analysis
  {
    category: '📰 PSL News & Analysis',
    color: '#6d28d9',
    bgColor: '#f5f3ff',
    borderColor: '#8b5cf6',
    articles: [
      {
        href: '/why-no-crowd-in-psl-2026',
        title: 'Why Is There No Crowd in PSL 2026?',
        desc: 'The official PCB statement and the full reasons why PSL 11 is being played behind closed doors.',
        badge: 'ANALYSIS',
        badgeColor: '#6d28d9',
        date: 'Mar 26, 2026',
      },
      {
        href: '/psl-11-behind-closed-doors-reason',
        title: 'PSL 11 Behind Closed Doors – Full Context',
        desc: 'Exploring the economic, security, and logistical reasons restricting fans from attending PSL 2026 matches.',
        badge: 'ANALYSIS',
        badgeColor: '#6d28d9',
        date: 'Mar 26, 2026',
      },
      {
        href: '/psl-11-refund-policy',
        title: 'PSL 2026 Ticket Refund Policy – What You Need to Know',
        desc: 'How to claim a full refund for PSL 11 tickets after matches moved behind closed doors.',
        badge: 'INFO',
        badgeColor: '#0A3258',
        date: 'Mar 26, 2026',
      },
      {
        href: '/hbl-psl-2026',
        title: 'HBL PSL 2026 – Complete Tournament Overview',
        desc: 'Everything you need to know about the 11th edition of the Pakistan Super League — teams, format, venues, and history.',
        badge: 'OVERVIEW',
        badgeColor: '#008A37',
        date: 'Mar 26, 2026',
      },
    ],
  },
  // Squad & Player Analysis
  {
    category: '🏏 Squad & Player Analysis',
    color: '#1e40af',
    bgColor: '#eff6ff',
    borderColor: '#60a5fa',
    articles: [
      {
        href: '/quetta-gladiators-squad',
        title: 'Quetta Gladiators Full Squad – PSL 2026',
        desc: 'Complete roster with player profiles for the Quetta Gladiators in HBL PSL 11.',
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
      {
        href: '/hyderabad-kingsmen-squad',
        title: 'Hyderabad Kingsmen Full Squad – PSL 2026',
        desc: "The new expansion franchise's full player roster including Marnus Labuschagne and Glenn Maxwell.",
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
      {
        href: '/lahore-qalandars-squad',
        title: 'Lahore Qalandars Full Squad – PSL 2026',
        desc: 'Shaheen Afridi leads the Qalandars. Full squad breakdown and key player stats.',
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
      {
        href: '/karachi-kings-squad',
        title: 'Karachi Kings Full Squad – PSL 2026',
        desc: 'David Warner captains Karachi Kings. Full player list and squad analysis for PSL 11.',
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
      {
        href: '/islamabad-united-squad',
        title: 'Islamabad United Full Squad – PSL 2026',
        desc: 'Shadab Khan leads United. Full squad roster with retained players and new signings.',
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
      {
        href: '/multan-sultans-squad',
        title: 'Multan Sultans Full Squad – PSL 2026',
        desc: 'Mohammad Rizwan captains the Sultans. Complete PSL 11 roster analysis.',
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
      {
        href: '/peshawar-zalmi-squad',
        title: 'Peshawar Zalmi Full Squad – PSL 2026',
        desc: 'Babar Azam leads Zalmi. Full squad list and key player breakdown for PSL 11.',
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
      {
        href: '/rawalpindi-pindiz-squad',
        title: 'Rawalpindi Pindiz Full Squad – PSL 2026',
        desc: "Complete roster for PSL 11's newest expansion franchise from Rawalpindi.",
        badge: 'SQUAD',
        badgeColor: '#1e40af',
        date: 'Mar 26, 2026',
      },
    ],
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0A3258 0%, #008A37 100%)',
        color: 'white',
        padding: '4rem 1.5rem 3rem',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ color: '#c7fa3b', fontWeight: '700', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            HBL PSL 11 · 2026
          </p>
          <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
            PSL 2026 News &amp; Updates
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: '0.9', maxWidth: '650px', margin: '0 auto' }}>
            Your one-stop hub for all PSL 11 match previews, squad analysis, venue guides, live streaming, and the latest cricket news.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.5rem' }}>

        {newsItems.map((section, sIdx) => (
          <section key={sIdx} style={{ marginBottom: '4rem' }}>
            {/* Section Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '0.75rem',
              borderBottom: `3px solid ${section.borderColor}`,
            }}>
              <h2 style={{ color: section.color, margin: 0, fontSize: '1.6rem' }}>{section.category}</h2>
            </div>

            {/* Article Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}>
              {section.articles.map((article, aIdx) => (
                <Link
                  key={aIdx}
                  href={article.href}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  className="team-card"
                >
                  <div style={{
                    border: `1px solid ${section.borderColor}`,
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    backgroundColor: section.bgColor,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    transition: 'all 0.2s',
                  }}>
                    {/* Badge + Date */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.7rem',
                        backgroundColor: article.badgeColor,
                        color: 'white',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '0.25rem',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                      }}>
                        {article.badge}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      color: section.color,
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      lineHeight: '1.4',
                      margin: 0,
                    }}>
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      color: '#4b5563',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      margin: 0,
                      flexGrow: 1,
                    }}>
                      {article.desc}
                    </p>

                    {/* Read More */}
                    <span style={{
                      color: article.badgeColor,
                      fontWeight: '600',
                      fontSize: '0.9rem',
                    }}>
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

      </div>
    </>
  );
}
