import { createRootRoute, Outlet, HeadContent, Scripts } from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { ORGANIZATION_SCHEMA } from '../lib/seo'
import { NotFoundPage } from '../components/NotFoundPage'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Topton Media — Growth & Performance Marketing Agency, Lagos' },
      {
        name: 'description',
        content: 'Topton Media is a growth and performance marketing agency in Lagos, Nigeria — paid media, SEO, web design, branding, printing, and corporate gifting for ambitious brands.',
      },
      { name: 'google-site-verification', content: '5ORRZxdNS_570vfFy7Eip3iwYSHFOhuu4Ikt1qebmBo' },
      { name: 'keywords', content: 'performance marketing agency Lagos, growth marketing Nigeria, paid media management, SEO services Lagos, user acquisition strategy, lead generation Nigeria, web design CRO, conversion rate optimization, social media management Lagos, digital marketing agency, brand strategy consulting, PR communications Nigeria, market activations Lagos, printing services corporate, corporate gifting Lagos, email marketing automation, digital marketing training, Africa market entry strategy, B2B marketing Nigeria, ecommerce marketing, funnel optimization, Facebook ads Nigeria, Google ads management, TikTok marketing, Instagram growth strategy, LinkedIn B2B marketing, marketing automation tools, website speed optimization, mobile-first design, content marketing strategy, influencer marketing Lagos, crisis communications, brand identity design, logo design services, video production Lagos, photography services, brand guidelines, media buying, advertising agency, creative agency Lagos, marketing consultant, business growth strategy, customer acquisition cost, return on ad spend, marketing ROI, digital transformation, online visibility, search engine optimization, technical SEO, local SEO Lagos, international SEO' },
      { name: 'theme-color', content: '#7B0D2A' },
      { property: 'og:image', content: 'https://toptonmedia.com/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { httpEquiv: 'content-language', content: 'en-ng' },
      { name: 'geo.position', content: '6.5244;3.3792' },
      { name: 'ICBM', content: '6.5244, 3.3792' },
      { name: 'geo.placename', content: 'Lagos, Nigeria' },
      { name: 'geo.region', content: 'NG-LA' },
    ],
    links: [
      { rel: 'alternate', hrefLang: 'en-ng', href: 'https://toptonmedia.com/' },
      { rel: 'alternate', hrefLang: 'en-gb', href: 'https://toptonmedia.com/en-gb' },
      { rel: 'alternate', hrefLang: 'en-us', href: 'https://toptonmedia.com/en-us' },
      { rel: 'alternate', hrefLang: 'en-gh', href: 'https://toptonmedia.com/en-gh' },
      { rel: 'alternate', hrefLang: 'en-ke', href: 'https://toptonmedia.com/en-ke' },
      { rel: 'alternate', hrefLang: 'en', href: 'https://toptonmedia.com/' },
      { rel: 'alternate', hrefLang: 'x-default', href: 'https://toptonmedia.com/' },
      { rel: 'preload', href: 'https://i.imgur.com/yuWmsVc.png', as: 'image', fetchPriority: 'high' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500&family=Space+Grotesk:wght@500&display=swap' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
      { rel: 'dns-prefetch', href: 'https://imgur.com' },
      { rel: 'preconnect', href: 'https://ahjhwqcrxcljmenoqyex.supabase.co' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500&family=Space+Grotesk:wght@500&display=swap' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: 'https://i.imgur.com/yuWmsVc.png' },
      { rel: 'alternate', type: 'application/rss+xml', title: 'Topton Media Blog RSS Feed', href: 'https://toptonmedia.com/rss.xml' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(ORGANIZATION_SCHEMA),
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
