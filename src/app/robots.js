export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      Disallow: '/api/',
    },
    sitemap: 'https://psllive.vercel.app/sitemap.xml',
  };
}
