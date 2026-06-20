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
  linkedin?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Temitope Bamidele',
    role: 'CEO & Chief Growth Officer',
    bio: 'Growth and performance marketing leader with 10+ years of experience scaling brands across fintech, edtech, hospitality, and retail. Holds an MBA in International Marketing, with a track record of building growth teams and go-to-market strategies that compound.',
    skills: ['Growth Leadership', 'Strategic Planning', 'Team Building', 'Go-to-Market Strategy'],
    linkedin: 'https://www.linkedin.com/in/bamidele-samuel/',
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
    name: 'Ayomide Olugbemiga',
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
  relatedService: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'fintech-cpl',
    title: 'Nigerian Fintech: 47% Lower CPL via Meta Funnel Rebuild',
    category: 'User Acquisition',
    result: '-47% CPL',
    summary: 'A full funnel rebuild \u2014 from ad creative to landing page to retargeting \u2014 cut cost per lead nearly in half within 8 weeks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    relatedService: 'user-acquisition',
  },
  {
    slug: 'b2b-saas-leads',
    title: 'B2B SaaS: 3x Qualified Leads via LinkedIn + Landing Page Rebuild',
    category: 'Lead Generation',
    result: '3x qualified leads',
    summary: 'Combining LinkedIn thought leadership with a redesigned landing page and CRM nurture flow tripled qualified leads for a B2B SaaS platform.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80',
    relatedService: 'lead-generation',
  },
  {
    slug: 'ecommerce-90day',
    title: 'Lagos E-commerce: \u20a60 \u2192 \u20a64.8M in 60 Days with TikTok + Meta',
    category: 'Performance Marketing',
    result: '\u20a64.8M in 60 days',
    summary: 'A new-to-market e-commerce brand went from zero revenue to \u20a64.8M in two months through a combined TikTok and Meta launch strategy.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    relatedService: 'performance-marketing',
  },
  {
    slug: 'hospitality-booking-site',
    title: 'Hospitality Brand: 41% Higher Booking Conversion After Site Rebuild',
    category: 'Web Design & CRO',
    result: '+41% conversion',
    summary: 'A slow, outdated booking site was rebuilt for speed and clarity, raising the on-site booking conversion rate by 41% within a month of launch.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    relatedService: 'web-design-cro',
  },
  {
    slug: 'restaurant-social-growth',
    title: 'Restaurant Group: 5x Instagram Engagement in 90 Days',
    category: 'Social Media Management',
    result: '5x engagement',
    summary: 'A consistent content calendar and active community management grew engagement fivefold across a 3-location restaurant group\u2019s Instagram.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
    relatedService: 'social-media-management',
  },
  {
    slug: 'fintech-launch-pr',
    title: 'Fintech Launch: 12 Media Placements in First 30 Days',
    category: 'PR & Communications',
    result: '12 media placements',
    summary: 'A coordinated press strategy around a fintech product launch secured coverage across 12 Nigerian business and tech outlets in the first month.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
    relatedService: 'pr-communications',
  },
  {
    slug: 'retail-launch-activation',
    title: 'Retail Brand Launch: 2,000+ Attendees at Lagos Pop-Up Activation',
    category: 'Market Activations',
    result: '2,000+ attendees',
    summary: 'A weekend pop-up activation introduced a new retail brand to the Lagos market, driving over 2,000 attendees and strong social content reach.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80',
    relatedService: 'market-activations',
  },
  {
    slug: 'corporate-rebrand-print',
    title: 'Corporate Rebrand: Full Stationery Rollout for 200+ Staff in 10 Days',
    category: 'Printing Services',
    result: '10-day rollout',
    summary: 'Following a corporate rebrand, we delivered fully branded stationery, ID cards, and signage for a 200+ person organisation within 10 working days.',
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1200&q=80',
    relatedService: 'printing-services',
  },
  {
    slug: 'bank-onboarding-gifts',
    title: 'Bank Onboarding Kits: 500-Unit Rollout for New Hire Programme',
    category: 'Branded Corporate Gifts',
    result: '500 units delivered',
    summary: 'A Nigerian bank\u2019s HR team needed consistent onboarding kits at scale \u2014 we sourced, branded, and delivered 500 units ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1200&q=80',
    relatedService: 'branded-gifts',
  },
  {
    slug: 'startup-rebrand',
    title: 'Startup Rebrand: New Identity Drove 30% Increase in Inbound Enquiries',
    category: 'Brand Strategy & Creative',
    result: '+30% inbound enquiries',
    summary: 'A complete brand identity refresh \u2014 logo, messaging, and guidelines \u2014 helped a B2B startup look as credible as the enterprise clients it was pitching.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    relatedService: 'brand-strategy',
  },
  {
    slug: 'brand-film-launch',
    title: 'Brand Film: 250,000+ Organic Views on Product Launch Video',
    category: 'Media Production',
    result: '250K+ organic views',
    summary: 'A 2-minute brand film produced for a product launch was shared organically across social platforms, passing 250,000 views without paid promotion.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80',
    relatedService: 'media-production',
  },
  {
    slug: 'sales-team-training',
    title: 'Sales Enablement Training: 22% Lift in Close Rate for B2B Team',
    category: 'Training & Workshops',
    result: '+22% close rate',
    summary: 'A full-day sales enablement workshop equipped a 15-person B2B sales team with a digital-first pitch framework, lifting close rates within the quarter.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    relatedService: 'training-workshops',
  },
  {
    slug: 'uk-brand-nigeria-entry',
    title: 'UK Consumer Brand: Successful Nigeria Market Entry in 10 Weeks',
    category: 'Africa Market Entry',
    result: 'Launched in 10 weeks',
    summary: 'A UK consumer brand entered the Nigerian market with localised messaging, a launch campaign, and on-ground PR \u2014 fully executed within 10 weeks.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80',
    relatedService: 'africa-market-entry',
  },
  {
    slug: 'subscription-retention-email',
    title: 'Subscription Business: 27% Higher Repeat Purchase via Lifecycle Email',
    category: 'Email & CRM Marketing',
    result: '+27% repeat purchase',
    summary: 'A full lifecycle email programme \u2014 welcome, nurture, and win-back flows \u2014 raised repeat purchase rate by 27% for a subscription business.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    relatedService: 'email-crm',
  },
  {
    slug: 'b2b-organic-growth',
    title: 'B2B Service Brand: 152% Organic Traffic Growth in 6 Months',
    category: 'SEO',
    result: '+152% organic traffic',
    summary: 'A technical SEO overhaul plus a targeted content strategy grew organic traffic by 152% for a B2B service brand within six months.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80',
    relatedService: 'seo',
  },
]

export const CONTACT_FAQS = [
  { question: 'How quickly do you respond?', answer: 'We respond to all enquiries within 24 hours, typically much sooner during business hours (Lagos time).' },
  { question: 'Do you work with early-stage startups?', answer: 'Yes \u2014 we work with startups as well as established brands. Our retainer packages start at a level accessible to early-stage teams, and we can scope project work for specific needs.' },
  { question: 'What\u2019s the minimum engagement?', answer: 'Most ongoing services (paid media, SEO, social media) have a 3-month minimum commitment, since results compound over time. Project-based work (web design, branding, production) has no minimum beyond the project timeline.' },
  { question: 'Do you work with international clients?', answer: 'Yes \u2014 we work with international brands entering Nigeria and West Africa, as well as clients in the UK, US, and across Africa. Pricing for international clients is typically structured in GBP.' },
  { question: 'How is your pricing structured?', answer: 'Most services are either monthly retainers (for ongoing work like paid media, social, SEO) or project-based fees (for web design, branding, production, printing, and gifting). Ad spend for paid media is always billed separately from our agency fee.' },
]
