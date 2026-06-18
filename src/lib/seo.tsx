import { CONTACT } from './site-data'

interface SeoConfig {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
}

export function seoMeta({ title, description, path, image, type = 'website', publishedTime }: SeoConfig) {
  const url = `${CONTACT.website}${path}`
  const ogImage = image || `${CONTACT.website}/og-image.jpg`
  return [
    { title },
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },

    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: title },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'Topton Media' },
    { property: 'og:locale', content: 'en_NG' },
    ...(type === 'article' && publishedTime ? [
      { property: 'article:published_time', content: publishedTime },
      { property: 'article:publisher', content: 'https://www.facebook.com/toptonmedia' },
    ] : []),

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@toptonmedia' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ]
}

export function seoLinks(path: string) {
  return [
    { rel: 'canonical', href: `${CONTACT.website}${path}` },
  ]
}

// ─── Organization schema (used site-wide in __root.tsx) ──────────────────
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  '@id': 'https://toptonmedia.com/#organization',
  name: 'Topton Media',
  alternateName: 'Topton Global Consult Limited',
  url: 'https://toptonmedia.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://i.imgur.com/yuWmsVc.png',
  },
  image: 'https://i.imgur.com/yuWmsVc.png',
  description: 'Topton Media is a growth and performance marketing agency in Lagos, Nigeria. We run paid media, SEO, funnel strategy, branding, printing, and corporate gifting for ambitious brands.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  telephone: '+2347040147477',
  email: 'info@toptonmedia.com',
  areaServed: ['NG', 'GB', 'US', 'GH', 'KE'],
  knowsAbout: [
    'Performance Marketing', 'SEO', 'User Acquisition', 'Lead Generation',
    'Web Design', 'Social Media Management', 'Brand Strategy', 'PR',
  ],
  sameAs: [
    'https://www.facebook.com/toptonmedia',
    'https://www.instagram.com/toptonmedia',
    'https://twitter.com/toptonmedia',
    'https://www.linkedin.com/company/toptonmedia',
    'https://www.tiktok.com/@toptonmedia',
  ],
}

// ─── LocalBusiness schema (stronger local/AIO signal than Organization alone) ──
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://toptonmedia.com/#localbusiness',
  name: 'Topton Media',
  image: 'https://i.imgur.com/yuWmsVc.png',
  url: 'https://toptonmedia.com',
  telephone: '+2347040147477',
  email: 'info@toptonmedia.com',
  priceRange: '₦₦-₦₦₦₦',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
  },
}

export function jsonLdScript(data: object, id: string) {
  return { type: 'application/ld+json', id, children: JSON.stringify(data) }
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
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

// ─── Service schema — strong AIO signal for /services/$slug pages ────────
export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  priceFrom?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@type': 'Organization', name: 'Topton Media', '@id': 'https://toptonmedia.com/#organization' },
    areaServed: { '@type': 'Country', name: 'Nigeria' },
    ...(opts.priceFrom ? { offers: { '@type': 'Offer', priceCurrency: 'NGN', price: opts.priceFrom } } : {}),
  }
}

// ─── Article schema with Speakable — helps AI Overview extraction ────────
export function articleSchema(opts: {
  headline: string
  description: string
  image: string
  datePublished: string
  url: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    url: opts.url,
    keywords: opts.keywords?.join(', '),
    author: { '@type': 'Organization', name: 'Topton Media', url: 'https://toptonmedia.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Topton Media',
      logo: { '@type': 'ImageObject', url: 'https://i.imgur.com/yuWmsVc.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-excerpt', '.quick-answer'],
    },
  }
}

// ─── ContactPage schema for /contact ──────────────────────────────────────
export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Topton Media',
    url: 'https://toptonmedia.com/contact',
    about: { '@type': 'Organization', name: 'Topton Media', '@id': 'https://toptonmedia.com/#organization' },
  }
}
