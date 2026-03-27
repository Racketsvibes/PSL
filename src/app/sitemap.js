export default function sitemap() {
  const baseUrl = 'https://psllive.vercel.app'; // Accurate Vercel Deployment URL
  
  const coreRoutes = [
    '',
    '/hbl-psl-2026',
    '/psl-live',
    '/points-table',
    '/psl-11-2026-schedule',
    '/live-score',
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

  return allRoutes.map((route) => {
    let priority = 0.8;
    let changeFreq = 'daily';
    let lastMod = new Date();

    if (route === '') {
      priority = 1.0;
    }

    if (['/about', '/contact', '/privacy-policy', '/terms-of-service'].includes(route)) {
      priority = 0.5;
      lastMod = new Date('2026-03-27');
      changeFreq = 'monthly';
    } else if (route === '/psl-live' || route === '/points-table' || route === '/live-score') {
      changeFreq = 'always';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: lastMod,
      changeFrequency: changeFreq,
      priority: priority,
    };
  });
}
