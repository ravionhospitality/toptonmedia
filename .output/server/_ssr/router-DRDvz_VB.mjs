import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, L as Link, H as HeadContent, O as Outlet, S as Scripts, u as useLocation } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as ArrowRight, C as ChevronDown, X, M as Menu, a as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-BSJjoJ74.css";
const CONTACT = {
  website: "https://toptonmedia.com",
  email: "info@toptonmedia.com",
  phone: "+234 704 014 7477",
  phoneIntl: "+2347040147477",
  whatsapp: "https://wa.me/2347040147477",
  location: "Lagos, Nigeria",
  discoveryCallUrl: "https://zcal.co/i/gABtQS4_",
  logo: "https://i.imgur.com/yuWmsVc.png"
};
const TICKER_ITEMS = [
  "↑ 312% ROAS Achieved",
  "₦0 → ₦12M Revenue in 90 Days",
  "5,000 New Users Acquired",
  "3x Lead Volume for B2B Client",
  "40+ Brands Grown",
  "Trusted in Lagos, Abuja & Beyond"
];
const STATS = [
  { value: "40+", label: "Brands Grown" },
  { value: "₦500M+", label: "Revenue Generated" },
  { value: "4.2x", label: "Average ROAS" },
  { value: "8+", label: "Years Experience" }
];
const HOW_WE_WORK = [
  { step: 1, title: "Diagnose", description: "We audit your current marketing, data, and funnel before touching a budget." },
  { step: 2, title: "Strategise", description: "We build a custom growth plan based on your market, margin, and goals." },
  { step: 3, title: "Execute", description: "Campaigns launch with full tracking in place from day one." },
  { step: 4, title: "Scale", description: "We double down on what works. Every week." }
];
const RETAINER_PACKAGES = [
  { name: "Starter", priceNgn: "₦250K", priceGbp: "GBP 125", includes: "Social media (2 platforms) + monthly report + 1 strategy call" },
  { name: "Growth", priceNgn: "₦500K", priceGbp: "GBP 250", includes: "Social + email + basic SEO + content calendar + 2 strategy calls" },
  { name: "Pro", priceNgn: "₦1M", priceGbp: "GBP 500", includes: "Full digital marketing + 4 videos/month + paid ads + bi-weekly calls", popular: true },
  { name: "Enterprise", priceNgn: "₦2.5M+", priceGbp: "GBP 1,250+", includes: "Full service: strategy, production, media buying, PR, weekly calls" },
  { name: "Bespoke", priceNgn: "₦5M+", priceGbp: "GBP 2,500+", includes: "Custom for banks, fintechs, international brands; includes print and gifting" }
];
const TEAM = [
  {
    name: "Temitope Bamidele",
    role: "CEO & Chief Growth Officer",
    bio: "Performance marketer with 4+ years scaling brands across fintech, edtech, hospitality, and retail. Grew FxBud from 600 to 2,100+ users in 4 months. Closed ₦33M+ in B2B deals. MBA candidate in Global Marketing.",
    skills: ["Meta & TikTok Ads", "Growth Strategy", "B2B Sales", "Fintech Marketing"]
  },
  {
    name: "Chidi Okonkwo",
    role: "Head of Paid Media",
    bio: "Former media buyer at two top Lagos digital agencies. Managed over ₦500M in Meta ad spend across FMCG, real estate, and retail. Expert in creative testing frameworks and campaign architecture.",
    skills: ["Meta Ads", "Google Ads", "Media Planning", "Creative Testing"]
  },
  {
    name: "Adaeze Nwosu",
    role: "Growth Strategist",
    bio: "Growth strategist specialising in B2C acquisition funnels. Built growth systems for 3 Nigerian fintech startups. Strong background in user psychology and behavioural economics.",
    skills: ["Funnel Design", "User Acquisition", "A/B Testing", "Analytics"]
  },
  {
    name: "Seun Adeyemi",
    role: "Content & SEO Lead",
    bio: "Content strategist and SEO specialist with a track record of ranking Nigerian B2B and B2C brands on page one. Writes copy that converts and structures content that competes in SERPs.",
    skills: ["SEO Strategy", "Content Marketing", "Copywriting", "Editorial Planning"]
  },
  {
    name: "Blessing Ekwueme",
    role: "Creative Director",
    bio: "Visual creative and brand strategist who has directed ad creative for over 40 Nigerian brands. Produces high-converting video and static ad content for Meta, TikTok, and OOH.",
    skills: ["Ad Creative", "Brand Identity", "Video Production", "Visual Strategy"]
  },
  {
    name: "Kolade Fashola",
    role: "Performance Analyst",
    bio: "Data analyst turned marketing strategist. Builds attribution models, campaign dashboards, and reporting systems that give clients real-time visibility into their growth numbers.",
    skills: ["Data Analytics", "Attribution", "Dashboard Build", "GA4 & Meta Pixel"]
  },
  {
    name: "Ngozi Amaechi",
    role: "Email & Lifecycle Manager",
    bio: "Lifecycle marketing specialist with 5 years building email sequences, retention flows, and automated onboarding systems.",
    skills: ["Email Automation", "Lifecycle Flows", "Klaviyo & Mailchimp", "Retention"]
  },
  {
    name: "Tunde Ologunde",
    role: "TikTok & Social Specialist",
    bio: "TikTok-native strategist who’s built organic and paid social programmes for consumer brands across Nigeria and Ghana.",
    skills: ["TikTok Strategy", "Organic Social", "Influencer Coordination", "Short-form Video"]
  },
  {
    name: "Funmilayo Adesanya",
    role: "Client Success Manager",
    bio: "Account management background at two Lagos agencies. Ensures deliverables are on time, on brief, and actually moving the metrics that matter.",
    skills: ["Client Relations", "Project Management", "Reporting", "Strategy QA"]
  }
];
const CASE_STUDIES = [
  {
    slug: "fintech-cpl",
    title: "Nigerian Fintech: 47% Lower CPL via Meta Funnel Rebuild",
    category: "Fintech",
    result: "-47% CPL",
    summary: "A full funnel rebuild — from ad creative to landing page to retargeting — cut cost per lead nearly in half within 8 weeks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
  },
  {
    slug: "ecommerce-90day",
    title: "Lagos E-commerce: ₦0 → ₦4.8M in 60 Days with TikTok + Meta",
    category: "E-commerce",
    result: "₦4.8M in 60 days",
    summary: "A new-to-market e-commerce brand went from zero revenue to ₦4.8M in two months through a combined TikTok and Meta launch strategy.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80"
  },
  {
    slug: "b2b-saas-demos",
    title: "B2B SaaS: 3x Demo Bookings via LinkedIn + Google Ads",
    category: "B2B SaaS",
    result: "3x demo bookings",
    summary: "Combining LinkedIn thought leadership with targeted Google Ads tripled qualified demo bookings for a B2B SaaS platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
  }
];
const CONTACT_FAQS = [
  { question: "How quickly do you respond?", answer: "We respond to all enquiries within 24 hours, typically much sooner during business hours (Lagos time)." },
  { question: "Do you work with early-stage startups?", answer: "Yes — we work with startups as well as established brands. Our retainer packages start at a level accessible to early-stage teams, and we can scope project work for specific needs." },
  { question: "What’s the minimum engagement?", answer: "Most ongoing services (paid media, SEO, social media) have a 3-month minimum commitment, since results compound over time. Project-based work (web design, branding, production) has no minimum beyond the project timeline." },
  { question: "Do you work with international clients?", answer: "Yes — we work with international brands entering Nigeria and West Africa, as well as clients in the UK, US, and across Africa. Pricing for international clients is typically structured in GBP." },
  { question: "How is your pricing structured?", answer: "Most services are either monthly retainers (for ongoing work like paid media, social, SEO) or project-based fees (for web design, branding, production, printing, and gifting). Ad spend for paid media is always billed separately from our agency fee." }
];
function seoMeta({ title, description, path }) {
  const url = `${CONTACT.website}${path}`;
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${CONTACT.website}/og-image.jpg` },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Topton Media" },
    { property: "og:locale", content: "en_NG" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@toptonmedia" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${CONTACT.website}/og-image.jpg` }
  ];
}
function seoLinks(path) {
  return [
    { rel: "canonical", href: `${CONTACT.website}${path}` }
  ];
}
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": "https://toptonmedia.com/#organization",
  name: "Topton Media",
  alternateName: "Topton Global Consult Limited",
  url: "https://toptonmedia.com",
  logo: {
    "@type": "ImageObject",
    url: "https://toptonmedia.com/logo.png"
  },
  description: "Topton Media is a growth and performance marketing agency in Lagos, Nigeria. We run paid media, SEO, funnel strategy, branding, printing, and corporate gifting for ambitious brands.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG"
  },
  telephone: "+2347040147477",
  email: "info@toptonmedia.com",
  areaServed: ["NG", "GB", "US", "GH", "KE"],
  sameAs: [
    "https://www.facebook.com/toptonmedia",
    "https://www.instagram.com/toptonmedia",
    "https://twitter.com/toptonmedia",
    "https://www.linkedin.com/company/toptonmedia",
    "https://www.tiktok.com/@toptonmedia"
  ]
};
function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
const SERVICES = [
  {
    slug: "user-acquisition",
    name: "User Acquisition",
    category: "GROWTH MARKETING",
    pitch: "Precision-targeted campaigns that bring in users who actually activate, pay, and stay — not just those who click.",
    priceFrom: "₦400,000/month",
    bookingUrl: "https://toptonleads.lovable.app/user-acquisition",
    cardImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1400&q=80",
    bullets: [
      "Google, Snapchat, Meta & TikTok install campaigns",
      "Audience segmentation & lookalike modelling",
      "Activation tracking from install to revenue"
    ],
    whatItIs: [
      "User acquisition is the practice of getting the right people to install, sign up for, or try your product — and then making sure they stick around. For Nigerian apps and digital products, that means running paid campaigns across Google, Meta, TikTok, and Snapchat with one goal: bring in users who become customers, not just numbers on a dashboard.",
      "We start by understanding what a valuable user looks like for your business — someone who completes onboarding, makes a first transaction, or hits whatever activation event matters most. Every campaign is built around finding more people who look like that.",
      "For African brands, this matters because ad costs are rising and budgets are tighter than ever. A campaign that drives cheap installs but no activations is a campaign that’s quietly losing money. We track the full path from install to revenue so you always know what’s actually working."
    ],
    deliverables: [
      { name: "Google App Campaigns (UAC)", detail: "Automated campaigns across Search, Display, YouTube, and Discover targeting high-intent users." },
      { name: "Meta Install Campaigns", detail: "Facebook and Instagram install campaigns built on activation-optimised audiences." },
      { name: "TikTok Install Campaigns", detail: "Native-feeling creative built for TikTok’s algorithm and audience behaviour." },
      { name: "Snapchat Advertising", detail: "Reach younger, mobile-first audiences with formats built for the platform." },
      { name: "Audience segmentation & lookalike modelling", detail: "Build lookalike audiences from your best existing users." },
      { name: "Creative testing (static, video, carousel)", detail: "Continuous testing to find the creative that converts, not just the one that gets clicks." },
      { name: "Install tracking & attribution setup", detail: "Proper MMP setup so every install is attributed to the right campaign and creative." },
      { name: "Post-install activation funnel strategy", detail: "Onboarding and activation flow recommendations to turn installs into active users." },
      { name: "Retargeting for churned users", detail: "Win back users who installed but went quiet." },
      { name: "Daily bid and budget optimisation", detail: "Budgets shift toward what’s working — every day, not once a month." },
      { name: "Weekly performance reports", detail: "Clear weekly numbers: installs, cost per install, activation rate, and spend." },
      { name: "Monthly strategy reviews", detail: "A monthly call to review what’s working and plan the next sprint." }
    ],
    pricing: [
      { label: "Agency Fee", price: "₦400,000 – ₦2,000,000 / month", note: "Ad spend billed separately. Minimum ₦200,000 ad budget recommended." }
    ],
    whoFor: ["Fintech apps", "E-commerce brands", "SaaS startups"],
    resultStat: { label: "Installs", value: "+85%" },
    faqs: [
      { question: "What platforms do you run user acquisition campaigns on?", answer: "We run campaigns across Google (UAC), Meta (Facebook & Instagram), TikTok, and Snapchat — choosing the mix based on where your target users actually spend time." },
      { question: "How long before we see results?", answer: "Most accounts show meaningful install and cost data within the first 2 weeks. Activation and retention trends become clear by week 4–6, once we have enough data to optimise toward." },
      { question: "Do you handle the ad creative or do we provide it?", answer: "We can do both. We typically produce and test new creative variants monthly, but if you have existing brand assets, we’ll incorporate and test those alongside our own." },
      { question: "What tracking setup is required before we start?", answer: "You’ll need a mobile measurement partner (like AppsFlyer or Adjust) connected to your app, or we can help you set one up before launch — proper attribution is non-negotiable." },
      { question: "Can you work with a small daily budget?", answer: "Yes, though we recommend a minimum of ₦200,000/month in ad spend to give the algorithms enough data to optimise effectively across platforms." }
    ],
    seoTitle: "User Acquisition Agency in Lagos | App Install & Growth Campaigns — Topton Media",
    seoDescription: "Topton Media runs precision-targeted user acquisition campaigns on Google, Meta, TikTok, and Snapchat for Nigerian apps and brands. Get users who activate and pay."
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    category: "GROWTH MARKETING",
    pitch: "High-intent leads for B2B and B2C brands, delivered into your CRM — not just your inbox.",
    priceFrom: "₦400,000/month",
    bookingUrl: "https://toptonleads.lovable.app/lead-generation",
    cardImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1400&q=80",
    bullets: [
      "Multi-channel lead capture (Meta, Google, LinkedIn)",
      "CRM integration and lead scoring",
      "Nurture sequences built to close"
    ],
    whatItIs: [
      "Lead generation is the system that turns strangers into people who’ve raised their hand — they’ve given you their contact details because they’re interested in what you sell. For B2B and B2C brands across Nigeria, we build that system end-to-end: the ads that attract attention, the landing pages that capture details, and the CRM workflows that make sure no lead gets lost.",
      "The difference between a lead and a click is intent. A click costs you money. A lead is a person who has told you, in some form, that they want to talk. We design every campaign around capturing that intent — through forms, calculators, downloadable guides, or direct contact requests — and routing it straight into your sales process.",
      "For Nigerian businesses, the biggest leak isn’t usually generating leads — it’s what happens after. Leads sit in a spreadsheet, or an inbox, or a WhatsApp chat that nobody follows up on. We fix that by connecting lead capture directly to your CRM and building automated follow-up so leads get nurtured even when your team is busy."
    ],
    deliverables: [
      { name: "Lead capture campaign strategy", detail: "Multi-channel strategy across Meta, Google, and LinkedIn tailored to your audience." },
      { name: "Custom landing page design", detail: "Conversion-optimised landing pages built specifically for each campaign." },
      { name: "Lead magnet creation", detail: "Guides, calculators, and tools that give people a reason to share their details." },
      { name: "CRM integration", detail: "HubSpot, Zoho, or custom CRM setup so leads land where your team works." },
      { name: "Lead scoring setup", detail: "Prioritise leads by likelihood to convert so sales focuses on the right people first." },
      { name: "Automated nurture email sequences", detail: "Email flows that keep leads warm until they’re ready to buy." },
      { name: "WhatsApp follow-up automation", detail: "Automated WhatsApp messages for the channel Nigerian customers actually respond to." },
      { name: "Weekly lead quality reporting", detail: "Not just lead volume — we report on quality and conversion potential." },
      { name: "A/B testing of forms and landing pages", detail: "Continuous testing to lower cost per lead and raise form completion rates." }
    ],
    pricing: [
      { label: "Agency Fee", price: "₦400,000 – ₦2,000,000 / month" },
      { label: "Landing Page Design", price: "₦200,000 – ₦600,000", note: "One-off" }
    ],
    whoFor: ["B2B service businesses", "Real estate developers", "Education & training providers"],
    resultStat: { label: "Lead Volume", value: "3x" },
    faqs: [
      { question: 'What counts as a "lead" in your reporting?', answer: "Any contact who submits a form, requests a callback, or starts a conversation through a campaign-driven channel — with enough information for your sales team to follow up." },
      { question: "Do you guarantee a number of leads per month?", answer: "We don’t guarantee fixed numbers because results depend on budget, market, and offer — but we set realistic targets together based on your historical data and category benchmarks." },
      { question: "Can you work with our existing CRM?", answer: "Yes — we’ve integrated with HubSpot, Zoho, and several custom-built CRMs. If you’re not using one yet, we can recommend and set one up." },
      { question: "What’s the minimum commitment?", answer: "We recommend a 3-month minimum so we have enough campaign data to optimise cost per lead and lead quality." },
      { question: "How do you handle WhatsApp follow-up?", answer: "We set up automated WhatsApp sequences using approved business tooling, so leads get an immediate response even outside business hours." }
    ],
    seoTitle: "Lead Generation Agency Lagos | B2B & B2C Leads into Your CRM — Topton Media",
    seoDescription: "Topton Media generates high-intent leads for B2B and B2C brands in Nigeria using paid media, landing pages, and CRM integration. Leads delivered, not just clicks."
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    category: "GROWTH MARKETING",
    pitch: "Full-funnel paid media measured exclusively on revenue outcomes, not vanity metrics.",
    priceFrom: "₦400,000/month",
    bookingUrl: "https://toptonleads.lovable.app/performance-marketing",
    cardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    bullets: [
      "Campaign strategy & media planning",
      "Creative testing at scale",
      "Daily bid & budget optimisation"
    ],
    whatItIs: [
      "Performance marketing means every cedi, naira, or dollar of ad spend is tied to a measurable business outcome — a sale, a sign-up, a booking. It’s the opposite of brand awareness campaigns where success is measured in impressions. We plan and run full-funnel paid media across Meta, Google, and TikTok with revenue as the only scoreboard that matters.",
      "This starts with media planning: deciding which platforms, audiences, and budgets give you the best shot at your specific goal. From there, we build out campaigns with proper conversion tracking from day one, so every shilling of spend can be traced back to whether it produced revenue.",
      'What makes this different from a typical "we’ll run your ads" arrangement is the optimisation cadence. We adjust bids and budgets daily based on what’s converting — not monthly, not when someone remembers to check. For brands competing in crowded categories, that daily attention is often the difference between a profitable channel and a money pit.'
    ],
    deliverables: [
      { name: "Campaign strategy & media planning", detail: "A clear plan for which platforms and budgets will hit your revenue targets." },
      { name: "Platform setup and account structure", detail: "Properly structured ad accounts built for scale and clean reporting." },
      { name: "Creative testing at scale", detail: "5–10 new ad variants tested monthly to find what converts." },
      { name: "Daily bid & budget optimisation", detail: "Spend shifts toward what’s working, every single day." },
      { name: "Audience research and segmentation", detail: "Identify and target the segments most likely to convert." },
      { name: "Cross-platform attribution", detail: "Understand how channels work together across the customer journey." },
      { name: "A/B landing page testing", detail: "Test landing page variants to improve conversion rate, not just click-through rate." },
      { name: "Bi-weekly performance calls", detail: "Regular check-ins so you’re never out of the loop on what’s happening." },
      { name: "Monthly revenue impact reporting", detail: "Reports built around revenue and ROAS, not impressions and reach." }
    ],
    pricing: [
      { label: "Agency Fee", price: "₦400,000 – ₦2,000,000 / month", note: "Ad spend billed separately." }
    ],
    whoFor: ["E-commerce brands", "Subscription businesses", "Service businesses with online booking"],
    resultStat: { label: "Average ROAS", value: "4.2x" },
    faqs: [
      { question: 'How is performance marketing different from "regular" ads?', answer: "Regular ad management often optimises for clicks or reach. Performance marketing optimises specifically for the revenue or conversion event you care about — and reports on that, not vanity metrics." },
      { question: "What’s the minimum ad spend you recommend?", answer: "It depends on your category, but generally we recommend at least ₦300,000–500,000/month in ad spend to give platforms enough volume to optimise effectively." },
      { question: "How often will I get reports?", answer: "You’ll get a monthly revenue impact report, plus bi-weekly calls to discuss performance and next steps in real time." },
      { question: "Can you work alongside our in-house marketing team?", answer: "Yes — we frequently work as the paid media arm alongside in-house teams handling brand, content, or other channels." },
      { question: "What if a campaign isn’t working?", answer: "We kill or pivot underperforming campaigns quickly. Part of the daily optimisation process is recognising what isn’t working and reallocating budget before it becomes a bigger loss." }
    ],
    seoTitle: "Performance Marketing Agency Lagos | Paid Ads Measured on Revenue — Topton Media",
    seoDescription: "Topton Media runs full-funnel paid media for brands in Nigeria — Meta, Google, TikTok — measured exclusively on revenue outcomes. No vanity metrics."
  },
  {
    slug: "web-design-cro",
    name: "Web Design & CRO",
    category: "TECH & WEB",
    pitch: "Marketing websites built fast, designed sharp, and optimised to hold paid traffic and convert it into pipeline.",
    priceFrom: "₦200,000",
    bookingUrl: "https://toptonleads.lovable.app/web-design-cro",
    cardImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
    bullets: [
      "Marketing site design & build",
      "CMS setup & team training",
      "Performance, Core Web Vitals & Analytics/GTM setup"
    ],
    whatItIs: [
      "Your website is often where paid traffic goes to die. CRO (conversion rate optimisation) and good web design exist to fix that — making sure that once someone clicks your ad, the site they land on actually convinces them to act. We design and build marketing websites with that single job in mind.",
      "This isn’t just about looking good, although it should. It’s about load speed, mobile experience, clear messaging hierarchy, and calls-to-action that are obvious and frictionless. A beautiful site that takes 6 seconds to load on mobile data is a site that’s losing you customers before they even see your offer.",
      "We build on WordPress, Webflow, or custom code depending on your needs, set up proper analytics and tracking from day one, and train your team to make basic updates without needing a developer for every change."
    ],
    deliverables: [
      { name: "Marketing site design & development", detail: "Custom-designed site built around your brand and conversion goals." },
      { name: "CMS setup", detail: "WordPress, Webflow, or custom CMS — whichever fits your team best." },
      { name: "Team training on CMS", detail: "Your team learns to update content without calling a developer." },
      { name: "Core Web Vitals optimisation", detail: "Fast load times that keep both users and Google happy." },
      { name: "Google Analytics 4 setup", detail: "Proper GA4 implementation so you can see what’s actually happening." },
      { name: "Google Tag Manager (GTM) setup", detail: "Flexible tracking setup that scales as your needs grow." },
      { name: "Conversion tracking & event setup", detail: "Track the actions that matter — form fills, purchases, sign-ups." },
      { name: "SEO-ready site architecture", detail: "Built with search visibility in mind from the ground up." },
      { name: "Mobile-first, responsive design", detail: "Looks and works great on the devices your customers actually use." },
      { name: "Landing page variants for paid campaigns", detail: "Dedicated landing pages built to match specific ad campaigns." }
    ],
    pricing: [
      { label: "Landing Page", price: "₦200,000 – ₦600,000", note: "1 week" },
      { label: "Business Website (5–10 pages)", price: "₦800,000 – ₦3,000,000", note: "3–5 weeks" },
      { label: "E-commerce Website", price: "₦1,500,000 – ₦6,000,000", note: "4–8 weeks" }
    ],
    whoFor: ["SMEs needing a first website", "Brands relaunching their site", "Companies running paid traffic to outdated pages"],
    resultStat: { label: "Conversion Rate", value: "+41%" },
    faqs: [
      { question: "How long does a typical website project take?", answer: "A landing page takes about a week. A full business website typically takes 3–5 weeks, and e-commerce builds take 4–8 weeks depending on complexity." },
      { question: "Will I be able to update the site myself afterward?", answer: "Yes — we set up a CMS appropriate for your team’s technical comfort level and provide training so you can update text, images, and basic content yourself." },
      { question: "Do you redesign existing sites or only build new ones?", answer: "Both. We frequently take over existing sites that are slow, outdated, or not converting, and rebuild them with the same content but better structure and performance." },
      { question: "Is hosting included?", answer: "Hosting isn’t included in the design fee, but we’ll recommend reliable hosting options and can manage the setup for you." },
      { question: "What if I already have a logo and brand guidelines?", answer: "Even better — we’ll design within your existing brand system. If you don’t have one yet, our Brand Strategy service can help." }
    ],
    seoTitle: "Web Design & CRO Agency Lagos | Marketing Sites That Convert — Topton Media",
    seoDescription: "Topton Media builds fast, sharp marketing websites designed to convert paid traffic into leads and revenue. CMS setup, analytics, Core Web Vitals and GTM included."
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    category: "GROWTH MARKETING",
    pitch: "Content strategy and community management that builds brand trust without burning your team.",
    priceFrom: "₦300,000/month",
    bookingUrl: "https://toptonleads.lovable.app/social-media-management",
    cardImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&q=80",
    bullets: [
      "Monthly content calendars",
      "Creative direction & production",
      "Community management"
    ],
    whatItIs: [
      "Social media management is the ongoing work of keeping your brand visible, consistent, and responsive across the platforms your audience actually uses. For most Nigerian brands, that means Instagram, Facebook, TikTok, and increasingly LinkedIn and X — each with different content needs and audience expectations.",
      'We plan a month of content at a time, built around themes that connect to your business goals — not just "post something every day." Every piece of content has a job, whether that’s building trust, driving engagement, or supporting a campaign running elsewhere.',
      "The other half of the job is community management — responding to comments, DMs, and mentions in your brand voice, consistently. This is where a lot of brands fall down: posting great content but going silent when people engage with it. We handle both sides so your social presence feels alive."
    ],
    deliverables: [
      { name: "Monthly content calendar", detail: "30+ posts per month planned around your goals and key dates." },
      { name: "Creative direction & content production", detail: "Visual direction and asset production for every post." },
      { name: "Copywriting & captions", detail: "On-brand copy written for each platform’s audience and format." },
      { name: "Scheduling & publishing", detail: "Content goes out on time, every time, across all platforms." },
      { name: "Community management", detail: "Comments, DMs, and mentions handled in your brand voice." },
      { name: "Hashtag & SEO research", detail: "Discoverability research so content reaches beyond your existing followers." },
      { name: "Monthly analytics report", detail: "Clear reporting on what’s working and what to adjust." }
    ],
    pricing: [
      { label: "Social Media Management", price: "₦300,000 – ₦1,500,000 / month", note: "2–4 platforms" }
    ],
    whoFor: ["Restaurants & hospitality brands", "Retail & e-commerce", "Professional services"],
    resultStat: { label: "Content Output", value: "30+ posts/mo" },
    faqs: [
      { question: "Which platforms do you manage?", answer: "Most commonly Instagram, Facebook, TikTok, LinkedIn, and X. We recommend 2–4 platforms based on where your audience is most active." },
      { question: "Do you create the content or do we need to provide assets?", answer: "We handle content production, but if you have product photography, videos, or brand assets, we’ll incorporate those into the calendar." },
      { question: "How do you handle community management outside business hours?", answer: "We set expectations on response windows upfront and monitor key channels during extended hours, with escalation paths for anything urgent." },
      { question: "Can social media management work alongside paid ads?", answer: "Yes — in fact it works best that way. Organic content builds the brand trust that makes paid ads convert better." },
      { question: "What’s the minimum commitment?", answer: "We recommend a 3-month minimum so content and community management can build momentum and show measurable growth." }
    ],
    seoTitle: "Social Media Management Agency Lagos | Content, Strategy & Community — Topton Media",
    seoDescription: "Topton Media manages social media for brands across Nigeria — content calendars, creative direction, posting, and community management on 2–4 platforms."
  },
  {
    slug: "pr-communications",
    name: "PR & Communications",
    category: "PR & COMMS",
    pitch: "Strategic media relations, executive profiling, and crisis management that shapes how your brand is seen.",
    priceFrom: "₦500,000/month",
    bookingUrl: "https://toptonleads.lovable.app/pr-communications",
    cardImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80",
    bullets: [
      "PR retainer & media placements",
      "Press releases & editorial distribution",
      "Executive profiling & personal brand"
    ],
    whatItIs: [
      "PR and communications is how your brand shows up in places you don’t directly control — news coverage, industry features, executive interviews, and public conversation. Done well, it builds the kind of credibility that paid ads can’t buy.",
      "We work as your media relations function: building relationships with journalists and editors, pitching stories, writing press releases, and securing placements that put your brand and leadership in front of the right audiences.",
      "For founders and executives, we also build personal brand presence — particularly on LinkedIn — so leadership becomes a recognisable, credible voice in your industry. And when things go wrong, we’re ready with crisis communications support to manage the narrative quickly and clearly."
    ],
    deliverables: [
      { name: "PR retainer", detail: "Ongoing media relations and placement tracking." },
      { name: "Press release writing & distribution", detail: "Professionally written releases distributed to relevant outlets." },
      { name: "Media list management", detail: "Curated relationships with journalists and editors relevant to your industry." },
      { name: "Executive profiling & LinkedIn thought leadership", detail: "Build your leadership team’s presence and credibility online." },
      { name: "Speaking opportunity placement", detail: "Get your executives on stages and panels that matter." },
      { name: "Crisis communications & rapid response", detail: "Fast, clear messaging when something goes wrong." },
      { name: "Stakeholder messaging", detail: "Consistent messaging for investors, partners, and employees." }
    ],
    pricing: [
      { label: "PR Retainer", price: "₦500,000 – ₦2,000,000 / month", note: "Minimum 3 months" },
      { label: "Single Press Release", price: "₦100,000 – ₦300,000", note: "48–72 hours" },
      { label: "Executive Profiling", price: "₦400,000 – ₦1,500,000 / month" },
      { label: "Crisis Communications", price: "₦1,000,000 – ₦5,000,000" }
    ],
    whoFor: ["Fintechs & startups raising profile", "Founders building personal brand", "Companies navigating sensitive announcements"],
    resultStat: { label: "Media Placements", value: "Monthly" },
    faqs: [
      { question: "Can you guarantee press coverage?", answer: "No agency can guarantee coverage — but we can guarantee a consistent pitching process, strong media relationships, and stories worth covering. Placements follow from doing that work consistently." },
      { question: "Do you handle social media as part of PR?", answer: "Executive thought leadership content (especially LinkedIn) is part of our PR offering. Broader brand social media is handled under our Social Media Management service." },
      { question: "How fast can you respond to a crisis?", answer: "Crisis communications support typically begins within hours of being briefed — messaging and response plans are prioritised immediately." },
      { question: "What industries do you have media relationships in?", answer: "Strongest relationships are in fintech, startups, business, and lifestyle media across Nigeria, with growing reach into regional and international outlets." },
      { question: "Is press release distribution included in the retainer?", answer: "Yes, press release writing and distribution is included as part of an ongoing PR retainer; standalone releases are also available." }
    ],
    seoTitle: "PR Agency Lagos | Media Relations, Press Releases & Executive Profiling — Topton Media",
    seoDescription: "Topton Media provides PR and communications services in Lagos — media relations, press releases, executive profiling, and crisis communications for Nigerian brands."
  },
  {
    slug: "market-activations",
    name: "Market Activations",
    category: "ACTIVATIONS",
    pitch: "On-ground brand experiences, product launches, and event executions that get people talking — and buying.",
    priceFrom: "₦500,000/project",
    bookingUrl: "https://toptonleads.lovable.app/market-activations",
    cardImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1400&q=80",
    bullets: [
      "Event concept & production management",
      "Brand activation strategy",
      "Logistics, staffing & on-site management"
    ],
    whatItIs: [
      "Market activations are real-world events designed to put your brand directly in front of customers — product launches, pop-ups, experiential campaigns, and sponsored events. They work because they create a moment people remember and talk about, online and offline.",
      "We handle activations end-to-end: from the initial concept and strategy, through venue selection, logistics, staffing, and the actual on-site execution. The goal is always tied back to a business outcome — sales, sign-ups, brand awareness in a specific market, or a successful product launch.",
      "For brands entering new markets or launching new products in Nigeria, a well-executed activation can do in a day what months of digital campaigns might take to achieve — generating buzz, content, and direct customer feedback all at once."
    ],
    deliverables: [
      { name: "Brand activation concept & strategy", detail: "A concept built around your launch or marketing goal." },
      { name: "Event production management", detail: "Full project management from planning to execution." },
      { name: "Venue & logistics coordination", detail: "Sourcing and managing every logistical detail." },
      { name: "Staffing & on-site management", detail: "Trained staff and on-the-ground management on event day." },
      { name: "On-ground experiential marketing", detail: "Interactive experiences that get people engaging with your brand." },
      { name: "Live social media coverage", detail: "Real-time content capture and posting during the event." },
      { name: "Post-event reporting & impact analysis", detail: "Clear reporting on attendance, engagement, and outcomes." },
      { name: "Print & branded merchandise coordination", detail: "Signage, banners, and giveaways handled alongside printing and gifting services." }
    ],
    pricing: [
      { label: "Market Activation", price: "₦500,000 – ₦10,000,000+", note: "Project-based" }
    ],
    whoFor: ["Product launches", "International brands entering Nigeria", "Retail & FMCG brands"],
    resultStat: { label: "Brands Launched", value: "40+" },
    faqs: [
      { question: "How far in advance should we plan an activation?", answer: "For most activations, 4–6 weeks of lead time gives enough room for concept, logistics, and staffing. Larger launches may need 8–12 weeks." },
      { question: "Do you handle venue sourcing?", answer: "Yes — we source and manage venue relationships as part of the logistics coordination." },
      { question: "Can you produce branded materials for the event?", answer: "Yes, working alongside our Printing and Branded Gifts services for signage, banners, giveaways, and merchandise." },
      { question: "What’s included in post-event reporting?", answer: "Attendance numbers, engagement metrics, social media reach from the event, and a summary of outcomes against your original goals." },
      { question: "Do you work outside Lagos?", answer: "Yes — we manage activations across Nigeria and can coordinate logistics for events in other African markets." }
    ],
    seoTitle: "Brand Activation & Event Marketing Agency Lagos — Topton Media",
    seoDescription: "Topton Media plans and executes brand activations, product launches, and live marketing events across Lagos and Nigeria. Strategy, production, and on-site management."
  },
  {
    slug: "printing-services",
    name: "Printing Services",
    category: "PRINTING",
    pitch: "End-to-end print services for brands — from stationery to outdoor signage. Design, print, and delivery.",
    priceFrom: "₦15,000",
    bookingUrl: "https://toptonleads.lovable.app/printing-services",
    cardImage: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1400&q=80",
    bullets: [
      "Corporate stationery (cards, letterheads, folders)",
      "Marketing print (flyers, brochures, roll-up banners)",
      "Event & occasion print (programmes, invitations, backdrops)"
    ],
    whatItIs: [
      "Despite everything going digital, print still matters — business cards still get exchanged, banners still bring people into events, and a well-designed brochure still closes deals. We provide end-to-end printing services for Nigerian businesses and individuals: design, print, and delivery, handled by one team.",
      "Corporate clients use us for stationery (business cards, letterheads, folders, ID cards), marketing materials (flyers, brochures, roll-up and outdoor banners), and event print (programmes, invitations, backdrops, certificates). Individuals use us for everything from CVs to canvas prints and custom merchandise.",
      "Because we handle design alongside print, everything stays consistent with your brand — no back-and-forth between a designer and a separate printer. And because we manage production directly, we can offer faster turnaround and better pricing on bulk orders."
    ],
    deliverables: [
      { name: "Business Cards", detail: "From ₦15,000 per 100 pieces, premium finishes available." },
      { name: "Letterheads", detail: "From ₦25,000 per 100 pieces." },
      { name: "Compliment Slips, Envelopes & Folders", detail: "Full corporate stationery suites designed to match your brand." },
      { name: "ID / Staff Cards", detail: "Durable printed and laminated staff identification." },
      { name: "Flyers, Brochures & Company Profiles", detail: "A5/A4 marketing materials for campaigns and pitches." },
      { name: "Roll-up Banners", detail: "From ₦30,000 including stand." },
      { name: "Outdoor / Flex Banners", detail: "From ₦8,000 per square metre." },
      { name: "Posters, Stickers & Branded Tote Bags", detail: "Flexible print runs for promotions and giveaways." },
      { name: "Event Programmes & Invitations", detail: "Programmes from ₦40,000/50pcs, invitations from ₦50,000/25pcs." },
      { name: "Certificates, Backdrops & Name Badges", detail: "Everything needed for a polished event." }
    ],
    pricing: [
      { label: "Business Cards", price: "From ₦15,000 / 100 pcs" },
      { label: "Roll-up Banners", price: "From ₦30,000 (incl. stand)" },
      { label: "Outdoor / Flex Banners", price: "From ₦8,000 / sqm" },
      { label: "Event Programmes", price: "From ₦40,000 / 50 pcs" },
      { label: "Invitations", price: "From ₦50,000 / 25 pcs" }
    ],
    pricingNote: "Rush printing (24–48 hrs): +30%. Lagos delivery free above ₦100,000. Bulk discount: 10% off above ₦500,000.",
    whoFor: ["SMEs & corporates", "Event planners", "Individuals & personal projects"],
    resultStat: { label: "Turnaround", value: "24–48 hrs" },
    faqs: [
      { question: "Do you offer design services or just printing?", answer: "Both — we design and print, so everything stays consistent and you don’t need to coordinate between separate teams." },
      { question: "What’s your turnaround time?", answer: "Standard turnaround varies by product, typically 3–5 working days. Rush printing (24–48 hours) is available for a 30% surcharge." },
      { question: "Do you deliver outside Lagos?", answer: "Yes, we deliver nationwide. Delivery within Lagos is free for orders above ₦100,000." },
      { question: "Is there a minimum order quantity?", answer: "Minimums vary by product — most stationery items have minimums around 100 pieces, while banners and signage are typically per-item." },
      { question: "Do you offer bulk discounts?", answer: "Yes — orders above ₦500,000 receive a 10% bulk discount." }
    ],
    seoTitle: "Printing Services Lagos | Corporate & Personal Printing — Topton Media",
    seoDescription: "Topton Media offers end-to-end printing in Lagos — business cards, flyers, brochures, banners, event backdrops, invitations, and more. Design included. Fast turnaround."
  },
  {
    slug: "branded-gifts",
    name: "Branded Corporate Gifts",
    category: "GIFTING",
    pitch: "High-quality branded gifts for staff, clients, and events — sourced, branded, packaged, and delivered by us.",
    priceFrom: "₦8,000/unit",
    bookingUrl: "https://toptonleads.lovable.app/branded-gifts",
    cardImage: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1400&q=80",
    bullets: [
      "Welcome & onboarding gift packs",
      "Executive VIP gift sets",
      "Seasonal hampers & event giveaways"
    ],
    whatItIs: [
      "Branded corporate gifts are physical touchpoints — items that put your brand in someone’s hands and, ideally, in their daily life. Done well, they say something about your brand’s quality and attention to detail. Done badly, they end up in a drawer.",
      "We handle the full process: sourcing quality items, branding them properly (not just slapping a logo on), packaging them well, and delivering on time. Whether it’s onboarding kits for new hires, VIP gifts for top clients, or giveaways for an event, we manage it as one project rather than a list of vendors.",
      "Because we work directly with suppliers and manage branding in-house where possible, we can offer better pricing on bulk orders and more control over quality — which matters when the gift is representing your brand."
    ],
    deliverables: [
      { name: "Welcome / Onboarding Pack", detail: "₦15,000 – ₦45,000 per pack, minimum order 10." },
      { name: "Executive VIP Gift Set", detail: "₦50,000 – ₦150,000 per set, minimum order 5." },
      { name: "Event Giveaway Pack", detail: "₦8,000 – ₦25,000 per pack, minimum order 25." },
      { name: "Seasonal Holiday Hamper", detail: "₦20,000 – ₦80,000 per hamper, minimum order 10." },
      { name: "Mugs & Drinkware", detail: "Mugs ₦5,000–₦12,000, tumblers ₦10,000–₦30,000." },
      { name: "Premium Pens & Notebooks", detail: "Pens ₦4,000–₦20,000, leather notebooks ₦12,000–₦40,000." },
      { name: "Apparel", detail: "T-shirts ₦10,000–₦28,000, hoodies ₦25,000–₦65,000." },
      { name: "Tech Gifts", detail: "Power banks ₦15,000–₦50,000, Bluetooth speakers ₦25,000–₦80,000." }
    ],
    pricing: [
      { label: "Welcome / Onboarding Pack", price: "₦15,000 – ₦45,000 / pack", note: "MOQ: 10" },
      { label: "Executive VIP Gift Set", price: "₦50,000 – ₦150,000 / set", note: "MOQ: 5" },
      { label: "Event Giveaway Pack", price: "₦8,000 – ₦25,000 / pack", note: "MOQ: 25" },
      { label: "Seasonal Holiday Hamper", price: "₦20,000 – ₦80,000 / hamper", note: "MOQ: 10" }
    ],
    pricingNote: "70% deposit required before production. Standard lead time: 7–14 working days; rush (3–5 days) +35%. Bulk discounts: 10% (50+ units), 15% (100+), 20% (250+).",
    whoFor: ["HR & people teams", "Executive offices", "Event organisers"],
    resultStat: { label: "Lead Time", value: "7–14 days" },
    faqs: [
      { question: "What’s the minimum order for branded gifts?", answer: "Minimums vary by product — onboarding packs start at 10 units, event giveaways at 25, and VIP sets at 5." },
      { question: "Can I mix different items in one order?", answer: "Yes, we frequently build custom packs combining multiple item types — this is common for onboarding kits and hampers." },
      { question: "How does payment work?", answer: "We require a 70% deposit before production begins, with the balance due before delivery." },
      { question: "Can you rush an order for an upcoming event?", answer: "Yes — rush production (3–5 days) is available for a 35% surcharge, subject to item availability." },
      { question: "Do you offer samples before a bulk order?", answer: "For larger orders, we can arrange samples of branding and item quality before committing to the full production run." }
    ],
    seoTitle: "Corporate Branded Gifts Lagos | Staff, Client & Event Gifting — Topton Media",
    seoDescription: "Topton Media creates branded corporate gifts in Lagos — onboarding packs, executive sets, event giveaways, and seasonal hampers. Sourced, branded, packaged, and delivered."
  },
  {
    slug: "brand-strategy",
    name: "Brand Strategy & Creative",
    category: "BRAND & CREATIVE",
    pitch: "Brand identity, positioning, and creative campaigns built to make your brand unmistakable in any market.",
    priceFrom: "₦400,000",
    bookingUrl: "https://toptonleads.lovable.app/brand-strategy",
    cardImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80",
    bullets: [
      "Brand identity (logo, colour, typography, guidelines)",
      "Full brand strategy & brand book",
      "Creative campaigns for launches and events"
    ],
    whatItIs: [
      "Brand strategy is the thinking behind how your business looks, sounds, and is positioned in the market — and brand identity is how that thinking gets expressed visually. Together they’re the foundation everything else builds on: your website, your ads, your social content, even your gifts and print materials.",
      "We start with positioning — who you serve, what makes you different, and how you want to be perceived. From there, we build out visual identity: logo, colour palette, typography, and a usage guideline document that keeps everything consistent as your team and agency partners create new materials.",
      "For brands that already have an identity but it feels outdated or inconsistent, we offer rebrands — refreshing the visual system while preserving brand equity you’ve already built. And for launches or campaigns, we develop creative concepts that bring the brand to life in a specific moment."
    ],
    deliverables: [
      { name: "Brand Identity", detail: "Logo, colour palette, typography, and full brand guidelines." },
      { name: "Full Brand Strategy", detail: "Positioning, messaging, tone of voice, and brand book." },
      { name: "Rebrand", detail: "Refresh an existing identity while preserving brand equity." },
      { name: "Content Strategy", detail: "A framework for how your brand shows up in content across channels." },
      { name: "Creative Campaigns", detail: "Concept and creative development for launches and key moments." }
    ],
    pricing: [
      { label: "Brand Identity (logo + guidelines)", price: "₦400,000 – ₦2,000,000", note: "2–3 weeks" },
      { label: "Full Brand Strategy", price: "₦1,000,000 – ₦5,000,000", note: "4–6 weeks" },
      { label: "Rebrand", price: "₦800,000 – ₦4,000,000", note: "3–5 weeks" },
      { label: "Content Strategy", price: "₦300,000 – ₦1,200,000", note: "2 weeks" },
      { label: "Creative Campaigns", price: "₦500,000 – ₦3,000,000", note: "2–4 weeks" }
    ],
    whoFor: ["New businesses launching", "Companies rebranding", "Brands launching new products or campaigns"],
    resultStat: { label: "Brands Identities Built", value: "40+" },
    faqs: [
      { question: "What’s the difference between brand identity and full brand strategy?", answer: "Brand identity covers the visual system — logo, colours, typography, guidelines. Full brand strategy includes that plus positioning, messaging, tone of voice, and a complete brand book." },
      { question: "How long does a brand identity project take?", answer: "Typically 2–3 weeks for a brand identity project, depending on the number of revision rounds." },
      { question: "Do you provide print-ready files?", answer: "Yes, all final assets are delivered in formats ready for both digital use and print production." },
      { question: "Can you work with an existing logo we want to keep?", answer: "Yes — in rebrand projects, we often preserve key elements of an existing identity while refreshing the overall system." },
      { question: "Do you also design the website and marketing materials?", answer: "Yes, once the brand identity is set, we can extend it into web design (via our Web Design & CRO service) and print materials (via Printing Services)." }
    ],
    seoTitle: "Brand Strategy & Identity Agency Lagos | Logo, Positioning & Creative — Topton Media",
    seoDescription: "Topton Media builds brand identities and creative campaigns for Nigerian brands — logo, brand guidelines, tone of voice, positioning, and launch creative."
  },
  {
    slug: "media-production",
    name: "Media Production",
    category: "PRODUCTION",
    pitch: "Brand films, product photography, and social content — produced at a standard that actually performs.",
    priceFrom: "₦150,000",
    bookingUrl: "https://toptonleads.lovable.app/media-production",
    cardImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80",
    bullets: [
      "Brand films & corporate videos",
      "Product & event photography",
      "2D/motion graphics & animation"
    ],
    whatItIs: [
      "Media production covers everything that needs a camera, a microphone, or a render — brand films, product photography, social content shoots, podcasts, and motion graphics. The goal isn’t just to produce content that looks good, but content that performs once it’s out in the world.",
      "For brand films and corporate videos, we handle the full process from script to final delivery — concept, shoot, edit, and sound. For product and event photography, we capture assets that work across your website, social channels, and marketing materials.",
      "We also produce ongoing social content — the kind of regular photo and video assets that feed your social media management — and motion graphics for explainer videos, ads, and presentations."
    ],
    deliverables: [
      { name: "Brand Films & Corporate Videos", detail: "2–3 minute films, script to delivery, 2–4 weeks." },
      { name: "Corporate / Event Photography", detail: "Professional coverage for events and corporate needs." },
      { name: "Product Photography", detail: "High-quality product imagery for e-commerce and marketing." },
      { name: "Social Media Content Shoots", detail: "Ongoing photo and video content for your social channels." },
      { name: "Podcast Production", detail: "Recording, editing, and production for branded podcasts." },
      { name: "2D/Motion Graphics & Animation", detail: "Explainer videos, animated ads, and presentation graphics." }
    ],
    pricing: [
      { label: "Brand Film (2–3 min)", price: "₦1,000,000 – ₦5,000,000", note: "2–4 weeks" },
      { label: "Corporate / Event Photography", price: "₦150,000 – ₦600,000", note: "Per day" },
      { label: "Product Photography", price: "₦200,000 – ₦1,000,000", note: "1–3 days" },
      { label: "Social Media Content Shoot", price: "₦300,000 – ₦1,500,000", note: "Per month" },
      { label: "Podcast Production", price: "₦200,000 – ₦800,000", note: "Per month" },
      { label: "2D/Motion Graphics & Animation", price: "₦500,000 – ₦3,000,000", note: "1–3 weeks" }
    ],
    whoFor: ["Brands needing launch films", "E-commerce needing product photography", "Companies starting a podcast"],
    resultStat: { label: "Projects Delivered", value: "40+" },
    faqs: [
      { question: "Do you write scripts for brand films?", answer: "Yes, script writing is part of our brand film production process — we develop the concept and script before any shooting begins." },
      { question: "Can you produce content for ongoing social media needs?", answer: "Yes, our monthly content shoot packages are designed specifically to feed an ongoing social media management programme." },
      { question: "What’s included in event photography pricing?", answer: "A photographer for the day, edited high-resolution images delivered within an agreed turnaround, typically 3–5 days after the event." },
      { question: "Do you offer video editing only, without shooting?", answer: "In some cases yes — if you have raw footage that needs editing, we can scope that as a standalone project." },
      { question: "How long does motion graphics work take?", answer: "Depending on complexity, 1–3 weeks from brief to final delivery, including revision rounds." }
    ],
    seoTitle: "Video & Photo Production Agency Lagos | Brand Films & Content — Topton Media",
    seoDescription: "Topton Media produces brand films, product photography, social content, podcasts, and motion graphics for brands across Nigeria. Script to delivery."
  },
  {
    slug: "training-workshops",
    name: "Training & Workshops",
    category: "TRAINING",
    pitch: "Practical digital marketing and brand strategy training for teams, SMEs, and corporate organisations.",
    priceFrom: "₦200,000/session",
    bookingUrl: "https://toptonleads.lovable.app/training-workshops",
    cardImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80",
    bullets: [
      "Digital marketing masterclasses",
      "Social media for business workshops",
      "Bespoke corporate training programmes"
    ],
    whatItIs: [
      "Not every team needs to outsource marketing entirely — sometimes what’s needed is practical training that builds capability in-house. We run digital marketing masterclasses, brand strategy workshops, and bespoke corporate training for teams, SMEs, and larger organisations.",
      "Sessions are built to be practical, not theoretical — participants leave with frameworks, templates, and skills they can apply immediately. Topics range from running paid ads and social media for business, to sales enablement and brand strategy fundamentals.",
      "For larger organisations, we develop bespoke multi-day programmes tailored to specific teams and goals — whether that’s upskilling a marketing department or giving a sales team the digital fluency they need to support modern customer journeys."
    ],
    deliverables: [
      { name: "Digital Marketing Masterclass", detail: "Full-day session for up to 20 people, ₦500,000–₦1,500,000." },
      { name: "Brand Strategy Workshop", detail: "Half or full day, ₦400,000–₦1,000,000." },
      { name: "Social Media for Business", detail: "3–4 hour session, ₦200,000–₦600,000." },
      { name: "Sales Enablement Training", detail: "Full-day session, ₦500,000–₦1,200,000." },
      { name: "Bespoke Corporate Programme", detail: "Multi-day, custom-built, ₦1,000,000–₦5,000,000." }
    ],
    pricing: [
      { label: "Digital Marketing Masterclass", price: "₦500,000 – ₦1,500,000", note: "Full day, up to 20 people" },
      { label: "Brand Strategy Workshop", price: "₦400,000 – ₦1,000,000", note: "Half/full day" },
      { label: "Social Media for Business", price: "₦200,000 – ₦600,000", note: "3–4 hours" },
      { label: "Sales Enablement Training", price: "₦500,000 – ₦1,200,000", note: "Full day" },
      { label: "Bespoke Corporate Programme", price: "₦1,000,000 – ₦5,000,000", note: "Multi-day, custom" }
    ],
    whoFor: ["Corporate marketing teams", "SME founders & staff", "Sales teams"],
    resultStat: { label: "Teams Trained", value: "15+" },
    faqs: [
      { question: "Where do training sessions take place?", answer: "We can run sessions at your office, a rented venue, or virtually — depending on your team’s needs and size." },
      { question: "Can content be customised for our industry?", answer: "Yes, every session is tailored with examples and case studies relevant to your industry and team’s current challenges." },
      { question: "How many people can attend a masterclass?", answer: "Our standard masterclass pricing covers up to 20 people; larger groups can be accommodated with adjusted pricing." },
      { question: "Do participants receive materials afterward?", answer: "Yes, participants receive slide decks, templates, and frameworks used during the session for future reference." },
      { question: "Can you build a multi-session programme?", answer: "Yes — our bespoke corporate programmes are designed as multi-day or multi-session curricula tailored to specific learning goals." }
    ],
    seoTitle: "Digital Marketing Training & Workshops Lagos | Topton Media",
    seoDescription: "Topton Media runs digital marketing masterclasses, brand strategy workshops, and social media training for teams and organisations in Lagos and Nigeria."
  },
  {
    slug: "africa-market-entry",
    name: "Africa Market Entry",
    category: "STRATEGY",
    pitch: "For international brands entering Nigeria and West Africa — research, localisation, and full launch execution.",
    priceFrom: "GBP 2,500",
    bookingUrl: "https://toptonleads.lovable.app/africa-market-entry",
    cardImage: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1400&q=80",
    bullets: [
      "Market entry strategy report",
      "Brand localisation for Nigerian market",
      "Full Nigeria launch campaign management"
    ],
    whatItIs: [
      "Entering Nigeria or West Africa as an international brand comes with a learning curve — different consumer behaviour, payment habits, media landscape, and competitive dynamics than markets you may already operate in. We help international brands navigate that, from initial research through to full launch.",
      "We start with a market entry strategy report — research into your category, competitors, target audience, and the practical realities of operating in the Nigerian market. From there, we localise your brand: messaging, creative, and positioning adapted for local relevance without losing what makes your brand work globally.",
      "For brands ready to launch, we manage the full campaign — paid media, PR, and on-ground activation — giving you a single team accountable for the Nigerian market entry, rather than coordinating multiple local vendors yourself."
    ],
    deliverables: [
      { name: "Market Entry Strategy Report", detail: "GBP 2,500–8,000, 3–4 weeks. Research into category, competitors, and audience." },
      { name: "Brand Localisation", detail: "GBP 3,000–12,000, 4–6 weeks. Messaging and creative adapted for Nigeria." },
      { name: "Nigeria Launch Campaign", detail: "GBP 5,000–25,000, 6–10 weeks. Full campaign management for launch." },
      { name: "Ongoing Market Management Retainer", detail: "GBP 2,000–8,000/month. Continued management post-launch." }
    ],
    pricing: [
      { label: "Market Entry Strategy Report", price: "GBP 2,500 – 8,000", note: "3–4 weeks" },
      { label: "Brand Localisation", price: "GBP 3,000 – 12,000", note: "4–6 weeks" },
      { label: "Nigeria Launch Campaign", price: "GBP 5,000 – 25,000", note: "6–10 weeks" },
      { label: "Ongoing Market Management", price: "GBP 2,000 – 8,000 / month" }
    ],
    whoFor: ["International consumer brands", "B2B companies expanding into West Africa", "Investors launching new ventures in Nigeria"],
    resultStat: { label: "Markets Served", value: "NG, GH, KE+" },
    faqs: [
      { question: "Do you only work with Nigeria, or other African markets too?", answer: "Our core focus is Nigeria, but we also support entry into Ghana, Kenya, and other West/East African markets depending on the engagement." },
      { question: "What does the market entry strategy report include?", answer: "Competitive analysis, audience research, regulatory and practical considerations, and recommendations for positioning and go-to-market approach." },
      { question: "Can you manage the entire launch, or just provide strategy?", answer: "Both — some clients engage us for strategy only, while others want full launch campaign management as a single accountable team." },
      { question: "Do you work with brands that don’t yet have a Nigerian entity?", answer: "Yes, we frequently work with international brands in the early stages of exploring the market, before formal registration is complete." },
      { question: "How is pricing structured for international clients?", answer: "International engagements are typically priced in GBP, with payment terms agreed based on project scope and duration." }
    ],
    seoTitle: "Africa Market Entry Strategy | Nigeria Launch for International Brands — Topton Media",
    seoDescription: "Topton Media helps international brands enter Nigeria and West Africa — market research, brand localisation, PR, digital marketing, and full launch campaign management."
  },
  {
    slug: "email-crm",
    name: "Email & CRM Marketing",
    category: "GROWTH MARKETING",
    pitch: "Lifecycle marketing and automation that turns your list into a revenue channel — not just a broadcast tool.",
    priceFrom: "₦200,000/month",
    bookingUrl: "https://toptonleads.lovable.app/email-crm",
    cardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    bullets: [
      "Email campaign strategy & copywriting",
      "WhatsApp & CRM automation setup",
      "Lead nurturing & retention flows"
    ],
    whatItIs: [
      "Most businesses have an email list and a CRM that are vastly underused — sitting there as a database rather than working as a revenue channel. Email and CRM marketing turns that list into an ongoing source of repeat purchases, re-engagement, and nurtured leads.",
      "We build the campaigns and automation: welcome sequences for new contacts, nurture flows for leads who aren’t ready to buy yet, win-back campaigns for customers who’ve gone quiet, and regular newsletters that keep your brand top of mind.",
      "For Nigerian businesses, WhatsApp is often more effective than email alone — so we build automation that works across both channels, integrated with your CRM so every contact’s journey is tracked in one place."
    ],
    deliverables: [
      { name: "Email Campaign Strategy & Copywriting", detail: "Ongoing campaign planning and copy written to convert." },
      { name: "WhatsApp & CRM Automation Setup", detail: "One-off setup plus ongoing maintenance." },
      { name: "CRM Setup & Integration", detail: "Get your CRM properly connected to your marketing tools." },
      { name: "Marketing Automation", detail: "Multi-step automated flows triggered by customer behaviour." },
      { name: "Lead Nurturing & Retention Flows", detail: "Keep leads warm and bring customers back." }
    ],
    pricing: [
      { label: "Email Marketing", price: "₦200,000 – ₦800,000 / month" },
      { label: "WhatsApp/CRM Automation Setup", price: "₦300,000 – ₦1,500,000", note: "One-off + maintenance" },
      { label: "CRM Setup & Integration", price: "₦400,000 – ₦1,500,000", note: "1–2 weeks" },
      { label: "Marketing Automation", price: "₦500,000 – ₦2,000,000", note: "2–3 weeks" }
    ],
    whoFor: ["E-commerce brands", "Subscription & membership businesses", "B2B companies with long sales cycles"],
    resultStat: { label: "Repeat Purchase Rate", value: "+27%" },
    faqs: [
      { question: "Do you work with our existing email platform?", answer: "Yes, we work with most major platforms including Mailchimp, Klaviyo, and others — or can recommend a switch if your current setup is limiting." },
      { question: "What’s included in WhatsApp automation?", answer: "Automated messages triggered by customer actions — order confirmations, abandoned cart reminders, follow-ups — using approved WhatsApp business tooling." },
      { question: "How long does CRM setup take?", answer: "Typically 1–2 weeks depending on the complexity of your existing data and required integrations." },
      { question: "Can this work alongside lead generation campaigns?", answer: "Yes — in fact it’s most effective paired with lead generation, since nurture flows are what convert captured leads into customers over time." },
      { question: "Do you write the email content or just set up the automation?", answer: "Both — email copywriting is included in our email marketing service, and we can write copy for automated flows as part of setup." }
    ],
    seoTitle: "Email Marketing & CRM Automation Lagos | Topton Media",
    seoDescription: "Topton Media builds email marketing systems and CRM automation for brands in Nigeria — campaign strategy, copywriting, WhatsApp automation, and lifecycle flows."
  },
  {
    slug: "seo",
    name: "SEO",
    category: "GROWTH MARKETING",
    pitch: "Rank higher on Google and get found by the people already searching for what you sell.",
    priceFrom: "₦300,000/month (min 3 months)",
    bookingUrl: "https://toptonleads.lovable.app/seo",
    cardImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1400&q=80",
    bullets: [
      "Technical SEO audits & fixes",
      "On-page optimisation & content strategy",
      "Link building & authority development"
    ],
    whatItIs: [
      "SEO (search engine optimisation) is how your website earns visibility on Google without paying for every click. For Nigerian brands, this means showing up when people search for what you offer — whether that’s a product, a service, or a question your business can answer.",
      "We start with a technical audit — finding and fixing the issues that hold sites back from ranking: slow load times, broken links, missing metadata, poor mobile experience. From there, we build a content strategy targeting the search terms your potential customers actually use.",
      "SEO is a compounding investment — results build over months, not days, but they keep paying off long after a campaign ends. Link building and ongoing content development build the authority that helps your site rank and stay ranked."
    ],
    deliverables: [
      { name: "Technical SEO Audits & Fixes", detail: "Find and fix issues holding your site back from ranking." },
      { name: "On-page Optimisation", detail: "Optimise existing pages for target keywords and search intent." },
      { name: "Content Strategy", detail: "A plan for content that targets what your customers search for." },
      { name: "Link Building & Authority Development", detail: "Build the domain authority that helps you rank and stay ranked." }
    ],
    pricing: [
      { label: "SEO", price: "₦300,000 – ₦1,200,000 / month", note: "Minimum 3-month commitment" }
    ],
    whoFor: ["B2B service businesses", "E-commerce brands", "Content-driven businesses"],
    resultStat: { label: "Organic Growth", value: "+152%" },
    faqs: [
      { question: "How long until we see SEO results?", answer: "Most clients begin seeing measurable ranking improvements from month 2–3, with more significant traffic growth typically visible by month 4–6." },
      { question: "Why is there a minimum 3-month commitment?", answer: "SEO requires consistent work over time to show results — search engines reward sustained effort, not one-off changes." },
      { question: "Do you write the content too?", answer: "Yes, content strategy and creation can be included, or we can work alongside your existing content team with optimisation guidance." },
      { question: "What does a technical SEO audit cover?", answer: "Site speed, mobile usability, indexing issues, site structure, metadata, and any technical barriers preventing search engines from properly crawling your site." },
      { question: "Is SEO worth it for a small local business?", answer: "Yes — local SEO in particular can be highly effective for service businesses, helping you show up when nearby customers search for what you offer." }
    ],
    seoTitle: "SEO Agency Lagos | Search Engine Optimisation for Nigerian Brands — Topton Media",
    seoDescription: "Topton Media provides technical SEO, content strategy, and link building for brands in Nigeria and across Africa. Results visible from month 2–3."
  }
];
function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
const SERVICE_CATEGORIES = [
  "All",
  "Growth Marketing",
  "Tech & Web",
  "Brand & Creative",
  "Production",
  "Printing",
  "Gifting",
  "PR & Comms",
  "Activations",
  "Training",
  "Strategy"
];
const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/case-studies", label: "Work" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
function SiteNav() {
  const [open, setOpen] = reactExports.useState(false);
  const [servicesOpen, setServicesOpen] = reactExports.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = reactExports.useState(false);
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-sand", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: CONTACT.logo, alt: "Topton Media", className: "h-9 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-bold tracking-tight text-maroon hidden sm:inline", children: [
          "Topton",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setServicesOpen(true),
            onMouseLeave: () => setServicesOpen(false),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/services",
                  className: `flex items-center gap-1 text-sm font-medium tracking-wide transition-colors py-1 ${pathname.startsWith("/services") ? "text-maroon" : "text-charcoal/70 hover:text-maroon"}`,
                  children: [
                    "Services",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: `transition-transform ${servicesOpen ? "rotate-180" : ""}` })
                  ]
                }
              ),
              servicesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ivory border border-sand rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-1", children: SERVICES.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/services/$slug",
                  params: { slug: service.slug },
                  className: "flex flex-col gap-0.5 px-4 py-2.5 rounded-xl hover:bg-sand/60 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-charcoal", children: service.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-charcoal/45", children: service.category })
                  ]
                },
                service.slug
              )) }) })
            ]
          }
        ),
        NAV_LINKS.map((link) => {
          const active = pathname === link.to;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: link.to,
              className: `text-sm font-medium tracking-wide transition-colors relative py-1 ${active ? "text-maroon" : "text-charcoal/70 hover:text-maroon"}`,
              children: [
                link.label,
                active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 right-0 h-px bg-gold" })
              ]
            },
            link.to
          );
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: CONTACT.discoveryCallUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "cta-glow inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity",
          children: "Book a Call"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((o) => !o),
          className: "md:hidden p-2 -mr-2 text-maroon",
          "aria-label": open ? "Close menu" : "Open menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
        }
      )
    ] }) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-sand bg-ivory max-h-[80vh] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-6 py-4 gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-sand/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setMobileServicesOpen((o) => !o),
            className: "w-full flex items-center justify-between py-3 text-base font-medium text-charcoal/80",
            children: [
              "Services",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18, className: `transition-transform ${mobileServicesOpen ? "rotate-180" : ""}` })
            ]
          }
        ),
        mobileServicesOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-3 flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services",
              onClick: () => setOpen(false),
              className: "py-2 text-sm font-semibold text-maroon",
              children: "All Services"
            }
          ),
          SERVICES.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services/$slug",
              params: { slug: service.slug },
              onClick: () => setOpen(false),
              className: "py-2 text-sm text-charcoal/70",
              children: service.name
            },
            service.slug
          ))
        ] })
      ] }),
      NAV_LINKS.map((link) => {
        const active = pathname === link.to;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.to,
            onClick: () => setOpen(false),
            className: `py-3 text-base font-medium border-b border-sand/60 last:border-0 ${active ? "text-maroon" : "text-charcoal/80"}`,
            children: link.label
          },
          link.to
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: CONTACT.discoveryCallUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => setOpen(false),
          className: "mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide",
          children: "Book a Call"
        }
      )
    ] }) })
  ] });
}
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
function InstagramIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", className, ...base, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
  ] });
}
function LinkedinIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", className, ...base, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "4", cy: "4", r: "2" })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-charcoal text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-semibold tracking-tight", children: [
          "Topton",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-ivory/60 max-w-sm leading-relaxed", children: "A performance marketing studio for brands that measure growth in revenue, not impressions. Based in Lagos, working everywhere." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramIcon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinkedinIcon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "X (Twitter)", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@toptonmedia.com", "aria-label": "Email", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-4", children: "Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-ivory/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-ivory transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-ivory transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "hover:text-ivory transition-colors", children: "Work" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/team", className: "hover:text-ivory transition-colors", children: "Team" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-4", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-ivory/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lagos, Nigeria" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@toptonmedia.com", className: "hover:text-ivory transition-colors", children: "hello@toptonmedia.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-ivory transition-colors", children: "Start a project →" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Topton Media. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted in Lagos." })
    ] })
  ] }) });
}
function NotFoundPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center bg-charcoal py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-extrabold text-ivory mb-6", children: "This page doesn’t exist." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/60 mb-10 max-w-md mx-auto", children: "The page you’re looking for may have moved, or never existed in the first place." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity",
          children: [
            "Back to Home ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Topton Media — Growth & Performance Marketing Agency, Lagos" },
      {
        name: "description",
        content: "Topton Media is a growth and performance marketing agency in Lagos, Nigeria — paid media, SEO, web design, branding, printing, and corporate gifting for ambitious brands."
      },
      { name: "theme-color", content: "#7B0D2A" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500&family=Space+Grotesk:wght@500&display=swap"
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://i.imgur.com/yuWmsVc.png" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_SCHEMA)
      }
    ]
  }),
  component: RootLayout,
  notFoundComponent: NotFoundPage
});
function RootLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$7 = () => import("./team-CMXZhKhQ.mjs");
const Route$7 = createFileRoute("/team")({
  head: () => ({
    meta: seoMeta({
      title: "Our Team | The People Behind Topton Media — Lagos Marketing Agency",
      description: "Meet the Topton Media team — performance marketers, creative directors, SEO specialists, and growth strategists based in Lagos, Nigeria.",
      path: "/team"
    }),
    links: seoLinks("/team"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema([{
        name: "Home",
        url: "https://toptonmedia.com"
      }, {
        name: "Team",
        url: "https://toptonmedia.com/team"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./services-CucXXAGz.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: seoMeta({
      title: "Services | Growth Marketing, Branding, Print & More — Topton Media Lagos",
      description: "Explore all 15 services from Topton Media — paid media, SEO, web design, brand strategy, social media, PR, printing, corporate gifts, market activations, and more.",
      path: "/services"
    }),
    links: seoLinks("/services"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema([{
        name: "Home",
        url: "https://toptonmedia.com"
      }, {
        name: "Services",
        url: "https://toptonmedia.com/services"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-MB2UZk3J.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: seoMeta({
      title: "Contact Topton Media | Start a Project or Book a Free Audit — Lagos",
      description: "Get in touch with Topton Media in Lagos. Book a free 30-minute growth audit, start a project, or ask about our services. We respond within 24 hours.",
      path: "/contact"
    }),
    links: seoLinks("/contact"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema([{
        name: "Home",
        url: "https://toptonmedia.com"
      }, {
        name: "Contact",
        url: "https://toptonmedia.com/contact"
      }]))
    }, {
      type: "application/ld+json",
      children: JSON.stringify(faqSchema(CONTACT_FAQS))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./case-studies-DM2QUixT.mjs");
const Route$4 = createFileRoute("/case-studies")({
  head: () => ({
    meta: seoMeta({
      title: "Case Studies | Real Results from Topton Media — Lagos Marketing Agency",
      description: "See real results from Topton Media — fintech installs, e-commerce revenue, B2B leads, and more. Performance marketing case studies from Nigerian and African brands.",
      path: "/case-studies"
    }),
    links: seoLinks("/case-studies"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema([{
        name: "Home",
        url: "https://toptonmedia.com"
      }, {
        name: "Case Studies",
        url: "https://toptonmedia.com/case-studies"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-D9JkSsyO.mjs");
const Route$3 = createFileRoute("/blog")({
  head: () => ({
    meta: seoMeta({
      title: "Blog | Growth Marketing Insights from Topton Media — Lagos",
      description: "Performance marketing insights, paid media tips, SEO guides, and growth strategy from the Topton Media team in Lagos, Nigeria.",
      path: "/blog"
    }),
    links: seoLinks("/blog"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema([{
        name: "Home",
        url: "https://toptonmedia.com"
      }, {
        name: "Blog",
        url: "https://toptonmedia.com/blog"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-BEbwzwGT.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: seoMeta({
      title: "About Topton Media | Growth Marketing Agency Lagos, Nigeria",
      description: "Topton Media is a performance marketing agency in Lagos. We help ambitious African and international brands build scalable revenue through paid media, SEO, and full-funnel strategy.",
      path: "/about"
    }),
    links: seoLinks("/about"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema([{
        name: "Home",
        url: "https://toptonmedia.com"
      }, {
        name: "About",
        url: "https://toptonmedia.com/about"
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BJ2WvZZX.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: seoMeta({
      title: "Topton Media | Growth & Performance Marketing Agency in Lagos, Nigeria",
      description: "Topton Media is a performance marketing agency in Lagos that turns ad spend into measurable revenue. Paid media, SEO, funnels, branding, printing and corporate gifting.",
      path: "/"
    }),
    links: seoLinks("/"),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Topton Media",
        url: "https://toptonmedia.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://toptonmedia.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("../_slug-XmE4xIur.mjs");
const $$splitComponentImporter = () => import("../_slug-BrwbS6P4.mjs");
const Route = createFileRoute("/services/$slug")({
  head: ({
    params
  }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) return {
      meta: [],
      links: []
    };
    return {
      meta: seoMeta({
        title: service.seoTitle,
        description: service.seoDescription,
        path: `/services/${service.slug}`
      }),
      links: seoLinks(`/services/${service.slug}`),
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{
          name: "Home",
          url: "https://toptonmedia.com"
        }, {
          name: "Services",
          url: "https://toptonmedia.com/services"
        }, {
          name: service.name,
          url: `https://toptonmedia.com/services/${service.slug}`
        }]))
      }, {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(service.faqs))
      }]
    };
  },
  loader: ({
    params
  }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const TeamRoute = Route$7.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const CaseStudiesRoute = Route$4.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => Route$8
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ServicesSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ServicesRoute
});
const ServicesRouteChildren = {
  ServicesSlugRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  CaseStudiesRoute,
  ContactRoute,
  ServicesRoute: ServicesRouteWithChildren,
  TeamRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true
  });
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CONTACT as C,
  HOW_WE_WORK as H,
  RETAINER_PACKAGES as R,
  SiteNav as S,
  TEAM as T,
  SiteFooter as a,
  SERVICES as b,
  SERVICE_CATEGORIES as c,
  CONTACT_FAQS as d,
  CASE_STUDIES as e,
  STATS as f,
  TICKER_ITEMS as g,
  Route as h,
  router as r
};
