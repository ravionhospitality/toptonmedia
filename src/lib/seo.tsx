import { CONTACT } from './site-data'

interface SeoConfig {
  title: string
  description: string
  path: string
}

export function seoMeta({ title, description, path }: SeoConfig) {
  const url = `${CONTACT.website}${path}`
  return [
    { title },
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },

    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: `${CONTACT.website}/og-image.jpg` },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Topton Media' },
    { property: 'og:locale', content: 'en_NG' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@toptonmedia' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `${CONTACT.website}/og-image.jpg` },
  ]
}

export function seoLinks(path: string) {
  return [
    { rel: 'canonical', href: `${CONTACT.website}${path}` },
  ]
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  '@id': 'https://toptonmedia.com/#organization',
  name: 'Topton Media',
  alternateName: 'Topton Global Consult Limited',
  url: 'https://toptonmedia.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://toptonmedia.com/logo.png',
  },
  description: 'Topton Media is a growth and performance marketing agency in Lagos, Nigeria. We run paid media, SEO, funnel strategy, branding, printing, and corporate gifting for ambitious brands.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  telephone: '+2347040147477',
  email: 'info@toptonmedia.com',
  areaServed: ['NG', 'GB', 'US', 'GH', 'KE'],
  sameAs: [
    'https://www.facebook.com/toptonmedia',
    'https://www.instagram.com/toptonmedia',
    'https://twitter.com/toptonmedia',
    'https://www.linkedin.com/company/toptonmedia',
    'https://www.tiktok.com/@toptonmedia',
  ],
}

export function jsonLdScript(data: object, id: string) {
  return {
    type: 'application/ld+json',
    id,
    children: JSON.stringify(data),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
