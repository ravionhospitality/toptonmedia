import { createRootRoute, Outlet, HeadContent, Scripts } from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Topton Media — Performance Marketing Studio, Lagos' },
      {
        name: 'description',
        content: 'Topton Media is a performance marketing studio helping ambitious brands turn ad spend into measurable revenue. Paid media, growth strategy, and creative that converts.',
      },
      { name: 'theme-color', content: '#7B0D2A' },
      { property: 'og:title', content: 'Topton Media — Performance Marketing Studio' },
      { property: 'og:description', content: 'We turn ad spend into measurable revenue. Paid media, growth strategy, and creative that converts.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: RootLayout,
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
