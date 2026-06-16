export const CONTACT = {
  companyName: 'Topton Media',
  legalName: 'Topton Global Consult Limited',
  website: 'https://toptonmedia.com',
  email: 'info@toptonmedia.com',
  phone: '+234 704 014 7477',
  phoneIntl: '+2347040147477',
  whatsapp: 'https://wa.me/2347040147477',
  location: 'Lagos, Nigeria',
  discoveryCallUrl: 'https://zcal.co/i/gABtQS4_',
  social: {
    instagram: 'https://www.instagram.com/toptonmedia',
    linkedin: 'https://www.linkedin.com/company/toptonmedia',
    twitter: 'https://twitter.com/toptonmedia',
    tiktok: 'https://www.tiktok.com/@toptonmedia',
    facebook: 'https://www.facebook.com/toptonmedia',
  },
  logo: 'https://i.imgur.com/yuWmsVc.png',
}

export const TICKER_ITEMS = [
  '\u2191 312% ROAS Achieved',
  '\u20a60 \u2192 \u20a612M Revenue in 90 Days',
  '5,000 New Users Acquired',
  '3x Lead Volume for B2B Client',
  '40+ Brands Grown',
  'Trusted in Lagos, Abuja & Beyond',
]

export const STATS = [
  { value: '40+', label: 'Brands Grown' },
  { value: '\u20a6500M+', label: 'Revenue Generated' },
  { value: '4.2x', label: 'Average ROAS' },
  { value: '8+', label: 'Years Experience' },
]

export const HOW_WE_WORK = [
  { step: 1, title: 'Diagnose', description: 'We audit your current marketing, data, and funnel before touching a budget.' },
  { step: 2, title: 'Strategise', description: 'We build a custom growth plan based on your market, margin, and goals.' },
  { step: 3, title: 'Execute', description: 'Campaigns launch with full tracking in place from day one.' },
  { step: 4, title: 'Scale', description: 'We double down on what works. Every week.' },
]

export interface RetainerPackage {
  name: string
  priceNgn: string
  priceGbp: string
  includes: string
  popular?: boolean
}

export const RETAINER_PACKAGES: RetainerPackage[] = [
  { name: 'Starter', priceNgn: '\u20a6250K', priceGbp: 'GBP 125', includes: 'Social media (2 platforms) + monthly report + 1 strategy call' },
  { name: 'Growth', priceNgn: '\u20a6500K', priceGbp: 'GBP 250', includes: 'Social + email + basic SEO + content calendar + 2 strategy calls' },
  { name: 'Pro', priceNgn: '\u20a61M', priceGbp: 'GBP 500', includes: 'Full digital marketing + 4 videos/month + paid ads + bi-weekly calls', popular: true },
  { name: 'Enterprise', priceNgn: '\u20a62.5M+', priceGbp: 'GBP 1,250+', includes: 'Full service: strategy, production, media buying, PR, weekly calls' },
  { name: 'Bespoke', priceNgn: '\u20a65M+', priceGbp: 'GBP 2,500+', includes: 'Custom for banks, fintechs, international brands; includes print and gifting' },
]

export interface TeamMember {
  name: string
  role: string
  bio: string
  skills: string[]
}

export const TEAM: TeamMember[] = [
  {
    name: 'Temitope Bamidele',
    role: 'CEO & Chief Growth Officer',
    bio: 'Performance marketer with 4+ years scaling brands across fintech, edtech, hospitality, and retail. Grew FxBud from 600 to 2,100+ users in 4 months. Closed \u20a633M+ in B2B deals. MBA candidate in Global Marketing.',
    skills: ['Meta & TikTok Ads', 'Growth Strategy', 'B2B Sales', 'Fintech Marketing'],
  },
  {
    name: 'Chidi Okonkwo',
    role: 'Head of Paid Media',
    bio: 'Former media buyer at two top Lagos digital agencies. Managed over \u20a6500M in Meta ad spend across FMCG, real estate, and retail. Expert in creative testing frameworks and campaign architecture.',
    skills: ['Meta Ads', 'Google Ads', 'Media Planning', 'Creative Testing'],
  },
  {
    name: 'Adaeze Nwosu',
    role: 'Growth Strategist',
    bio: 'Growth strategist specialising in B2C acquisition funnels. Built growth systems for 3 Nigerian fintech startups. Strong background in user psychology and behavioural economics.',
    skills: ['Funnel Design', 'User Acquisition', 'A/B Testing', 'Analytics'],
  },
  {
    name: 'Seun Adeyemi',
    role: 'Content & SEO Lead',
    bio: 'Content strategist and SEO specialist with a track record of ranking Nigerian B2B and B2C brands on page one. Writes copy that converts and structures content that competes in SERPs.',
    skills: ['SEO Strategy', 'Content Marketing', 'Copywriting', 'Editorial Planning'],
  },
  {
    name: 'Blessing Ekwueme',
    role: 'Creative Director',
    bio: 'Visual creative and brand strategist who has directed ad creative for over 40 Nigerian brands. Produces high-converting video and static ad content for Meta, TikTok, and OOH.',
    skills: ['Ad Creative', 'Brand Identity', 'Video Production', 'Visual Strategy'],
  },
  {
    name: 'Kolade Fashola',
    role: 'Performance Analyst',
    bio: 'Data analyst turned marketing strategist. Builds attribution models, campaign dashboards, and reporting systems that give clients real-time visibility into their growth numbers.',
    skills: ['Data Analytics', 'Attribution', 'Dashboard Build', 'GA4 & Meta Pixel'],
  },
  {
    name: 'Ngozi Amaechi',
    role: 'Email & Lifecycle Manager',
    bio: 'Lifecycle marketing specialist with 5 years building email sequences, retention flows, and automated onboarding systems.',
    skills: ['Email Automation', 'Lifecycle Flows', 'Klaviyo & Mailchimp', 'Retention'],
  },
  {
    name: 'Tunde Ologunde',
    role: 'TikTok & Social Specialist',
    bio: 'TikTok-native strategist who\u2019s built organic and paid social programmes for consumer brands across Nigeria and Ghana.',
    skills: ['TikTok Strategy', 'Organic Social', 'Influencer Coordination', 'Short-form Video'],
  },
  {
    name: 'Funmilayo Adesanya',
    role: 'Client Success Manager',
    bio: 'Account management background at two Lagos agencies. Ensures deliverables are on time, on brief, and actually moving the metrics that matter.',
    skills: ['Client Relations', 'Project Management', 'Reporting', 'Strategy QA'],
  },
]

export interface CaseStudy {
  slug: string
  title: string
  category: string
  result: string
  summary: string
  image: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'fintech-cpl',
    title: 'Nigerian Fintech: 47% Lower CPL via Meta Funnel Rebuild',
    category: 'Fintech',
    result: '-47% CPL',
    summary: 'A full funnel rebuild \u2014 from ad creative to landing page to retargeting \u2014 cut cost per lead nearly in half within 8 weeks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  },
  {
    slug: 'ecommerce-90day',
    title: 'Lagos E-commerce: \u20a60 \u2192 \u20a64.8M in 60 Days with TikTok + Meta',
    category: 'E-commerce',
    result: '\u20a64.8M in 60 days',
    summary: 'A new-to-market e-commerce brand went from zero revenue to \u20a64.8M in two months through a combined TikTok and Meta launch strategy.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
  },
  {
    slug: 'b2b-saas-demos',
    title: 'B2B SaaS: 3x Demo Bookings via LinkedIn + Google Ads',
    category: 'B2B SaaS',
    result: '3x demo bookings',
    summary: 'Combining LinkedIn thought leadership with targeted Google Ads tripled qualified demo bookings for a B2B SaaS platform.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  },
]

export const CONTACT_FAQS = [
  { question: 'How quickly do you respond?', answer: 'We respond to all enquiries within 24 hours, typically much sooner during business hours (Lagos time).' },
  { question: 'Do you work with early-stage startups?', answer: 'Yes \u2014 we work with startups as well as established brands. Our retainer packages start at a level accessible to early-stage teams, and we can scope project work for specific needs.' },
  { question: 'What\u2019s the minimum engagement?', answer: 'Most ongoing services (paid media, SEO, social media) have a 3-month minimum commitment, since results compound over time. Project-based work (web design, branding, production) has no minimum beyond the project timeline.' },
  { question: 'Do you work with international clients?', answer: 'Yes \u2014 we work with international brands entering Nigeria and West Africa, as well as clients in the UK, US, and across Africa. Pricing for international clients is typically structured in GBP.' },
  { question: 'How is your pricing structured?', answer: 'Most services are either monthly retainers (for ongoing work like paid media, social, SEO) or project-based fees (for web design, branding, production, printing, and gifting). Ad spend for paid media is always billed separately from our agency fee.' },
]
