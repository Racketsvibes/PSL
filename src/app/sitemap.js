export default function sitemap() {
  const baseUrl = 'https://your-domain.com'; // Replace with actual domain when configured
  
  const coreRoutes = [
    '',
    '/hbl-psl-2026',
    '/psl-live',
    '/points-table',
    '/psl-11-2026-schedule',
    '/where-to-watch-quetta-vs-lahore',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const squadRoutes = [
    '/lahore-qalandars-squad',
    '/quetta-gladiators-squad',
    '/islamabad-united-squad',
    '/karachi-kings-squad',
    '/multan-sultans-squad',
    '/peshawar-zalmi-squad',
    '/rawalpindi-pindiz-squad',
    '/hyderabad-kingsmen-squad'
  ];

  const newSeoPages = [
    '/peshawar-zalmi-vs-rawalpindi-pindiz',
    '/multan-sultans-vs-islamabad-united',
    '/why-no-crowd-in-psl-2026',
    '/psl-11-behind-closed-doors-reason',
    '/psl-2026-venue-changes',
    '/gaddafi-stadium-psl-schedule',
    '/national-bank-stadium-karachi-psl-matches',
    '/psl-11-refund-policy'
  ];

  const allRoutes = [...coreRoutes, ...squadRoutes, ...newSeoPages];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }));
}
