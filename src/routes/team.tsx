import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createFileRoute('/team')({
  component: TeamPage,
})

const TEAM = [
  {
    name: 'Temitope Bamidele',
    role: 'CEO & Chief Growth Officer',
    bio: 'Performance marketer with 4+ years scaling brands across fintech, edtech, hospitality, and retail. Grew FxBud from 600 to 2,100+ users in 4 months. Closed ₦33M+ in B2B deals. MBA candidate in Global Marketing.',
    specialties: ['Meta & TikTok Ads', 'Growth Strategy', 'B2B Sales', 'Fintech Marketing'],
    initials: 'TB',
    color: 'bg-maroon',
  },
  {
    name: 'Chidi Okonkwo',
    role: 'Head of Paid Media',
    bio: 'Former media buyer at two top Lagos digital agencies. Managed over ₦500M in Meta ad spend across FMCG, real estate, and retail. Expert in creative testing frameworks and campaign architecture.',
    specialties: ['Meta Ads', 'Google Ads', 'Media Planning', 'Creative Testing'],
    initials: 'CO',
    color: 'bg-charcoal',
  },
  {
    name: 'Adaeze Nwosu',
    role: 'Growth Strategist',
    bio: 'Growth strategist specialising in B2C acquisition funnels. Built growth systems for 3 Nigerian fintech startups. Strong background in user psychology and behavioural economics applied to digital campaigns.',
    specialties: ['Funnel Design', 'User Acquisition', 'A/B Testing', 'Analytics'],
    initials: 'AN',
    color: 'bg-maroon',
  },
  {
    name: 'Seun Adeyemi',
    role: 'Content & SEO Lead',
    bio: 'Content strategist and SEO specialist with a track record of ranking Nigerian B2B and B2C brands on page one. Writes copy that converts and structures content that competes in SERPs.',
    specialties: ['SEO Strategy', 'Content Marketing', 'Copywriting', 'Editorial Planning'],
    initials: 'SA',
    color: 'bg-charcoal',
  },
  {
    name: 'Blessing Ekwueme',
    role: 'Creative Director',
    bio: 'Visual creative and brand strategist who has directed ad creative for over 40 Nigerian brands. Produces high-converting video and static ad content for Meta, TikTok, and out-of-home campaigns.',
    specialties: ['Ad Creative', 'Brand Identity', 'Video Production', 'Visual Strategy'],
    initials: 'BE',
    color: 'bg-maroon',
  },
  {
    name: 'Kolade Fashola',
    role: 'Performance Analyst',
    bio: 'Data analyst turned marketing strategist. Builds attribution models, campaign dashboards, and performance reporting systems that give clients real-time visibility into their growth numbers.',
    specialties: ['Data Analytics', 'Attribution', 'Dashboard Build', 'GA4 & Meta Pixel'],
    initials: 'KF',
    color: 'bg-charcoal',
  },
  {
    name: 'Ngozi Amaechi',
    role: 'Email & Lifecycle Manager',
    bio: 'Lifecycle marketing specialist with 5 years building email sequences, retention flows, and automated onboarding systems that turn first-time buyers into loyal customers.',
    specialties: ['Email Automation', 'Lifecycle Flows', 'Klaviyo & Mailchimp', 'Retention Strategy'],
    initials: 'NA',
    color: 'bg-maroon',
  },
  {
    name: 'Tunde Ologunde',
    role: 'TikTok & Social Specialist',
    bio: "TikTok-native strategist who's built organic and paid social programmes for consumer brands across Nigeria and Ghana. Understands the nuances of African Gen Z content culture.",
    specialties: ['TikTok Strategy', 'Organic Social', 'Influencer Coordination', 'Short-form Video'],
    initials: 'TO',
    color: 'bg-charcoal',
  },
  {
    name: 'Funmilayo Adesanya',
    role: 'Client Success Manager',
    bio: 'Keeps client relationships honest and strategic. With a background in account management at two Lagos agencies, Funmi ensures deliverables are on time, on brief, and actually moving the metrics that matter.',
    specialties: ['Client Relations', 'Project Management', 'Reporting', 'Strategy QA'],
    initials: 'FA',
    color: 'bg-maroon',
  },
]

const CULTURE = [
  {
    title: 'Results-first culture',
    desc: "Every team member is evaluated on outcomes, not activity. If it doesn't move a client's revenue, we rethink it.",
  },
  {
    title: 'Learning in public',
    desc: "We share what we learn — inside the team and sometimes outside it. The best thinking gets better when it's tested.",
  },
  {
    title: 'No ego, just execution',
    desc: "The best idea wins regardless of who brings it. We're a small team, which means everyone's voice matters.",
  },
]

function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1">

        {/* Header */}
        <section className="bg-charcoal pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">The Team</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-ivory max-w-4xl">
              The people who make <span className="text-gold italic">the numbers move.</span>
            </h1>
            <p className="mt-8 text-lg text-ivory/60 max-w-xl leading-relaxed">
              Nine specialists. One obsession. Every member of this team was hired to make your growth targets feel inevitable.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-sand hover:shadow-lg transition-shadow group">
                <div className={`${member.color} h-36 flex items-center justify-center`}>
                  <span className="font-display text-5xl font-semibold text-ivory/20 group-hover:text-ivory/40 transition-colors">{member.initials}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-charcoal">{member.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-maroon mt-1 mb-4">{member.role}</p>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 border-t border-sand pt-5">
                    {member.specialties.map(s => (
                      <span key={s} className="px-2.5 py-1 rounded-full bg-sand/60 text-charcoal/70 text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culture */}
        <section className="bg-maroon/5 border-t border-sand py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon mb-5">How we work together</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal tracking-tight mb-16 max-w-2xl">
              Culture built around client results.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {CULTURE.map((c, i) => (
                <div key={c.title} className="relative pt-8 border-t-2 border-sand">
                  <span className="absolute -top-4 left-0 font-mono text-xs text-gold bg-ivory px-2 py-1 border border-sand rounded-full">0{i + 1}</span>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{c.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-charcoal py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-5">We're growing</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory tracking-tight max-w-2xl mx-auto">
              Think you belong on this team?
            </h2>
            <p className="mt-6 text-ivory/60 max-w-lg mx-auto">
              We hire for results-orientation, intellectual honesty, and craft. If that's you, send us a note.
            </p>
            <a
              href="mailto:careers@toptonmedia.com"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Say hello <ArrowRight size={15} />
            </a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
