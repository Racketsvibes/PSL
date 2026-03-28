export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://psllive.vercel.app/sitemap.xml',
    host: 'https://psllive.vercel.app',
  };
}
