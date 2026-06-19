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
      { name: 'theme-color', content: '#7B0D2A' },
      { property: 'og:image', content: 'https://toptonmedia.com/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    links: [
      { rel: 'preload', href: 'https://i.imgur.com/yuWmsVc.png', as: 'image' },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500&family=Space+Grotesk:wght@500&display=swap',
      },
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
