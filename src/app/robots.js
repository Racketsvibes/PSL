export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://psllive-lemon.vercel.app/sitemap.xml',
  };
}
