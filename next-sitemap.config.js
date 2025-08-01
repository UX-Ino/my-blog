/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ino-code.vercel.app',
  generateRobotsText: true, // robots.txt 파일 생성
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/server-sitemap-index.xml'], // 제외할 경로
  alternateRefs: [
    {
      href: 'https://ino-code.vercel.app',
      hreflang: 'ko',
    },
  ],
  // 추가 robots.txt 규칙
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: ['https://ino-code.vercel.app/sitemap.xml'],
  },
};
