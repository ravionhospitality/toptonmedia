import { createFileRoute } from '@tanstack/react-router'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'

export const Route = createFileRoute('/b2b-lead-generation-agency-in-nigeria')({
  head: () => ({
    meta: seoMeta({
      title: 'B2B Lead Generation Agency in Nigeria | Qualified Leads — Topton Media',
      description: 'Topton Media generates real, qualified B2B leads that convert to deals for Nigerian companies — not just clicks or form fills.',
      path: '/b2b-lead-generation-agency-in-nigeria',
    }),
    links: seoLinks('/b2b-lead-generation-agency-in-nigeria'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'B2B Lead Generation Agency Nigeria', url: 'https://toptonmedia.com/b2b-lead-generation-agency-in-nigeria' },
      ])),
    }],
  }),
  component: B2BLeadGeneration,
})

function B2BLeadGeneration() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">B2B Lead Generation Agency in Nigeria — Qualified Leads for Your Sales Team</h1>
            <p className="text-xl text-ivory/80 mb-8">Not just clicks. Not just form fills. Real, qualified leads that convert to deals. We specialize in B2B lead generation for Nigerian companies.</p>
            <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition mr-4">
              Book Free Strategy Call
            </a>
            <a href="/advertising-company-lagos" className="inline-block px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition">
              View All Services
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
              alt="B2B professionals collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: The B2B Problem */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Why B2B Lead Generation Is Different</h2>
        <p className="text-lg text-ivory/80 mb-8">B2B is NOT just B2C with bigger budgets. It's fundamentally different:</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Limited Audience</h3>
            <p className="text-ivory/70">Much smaller addressable market compared to B2C. You can't just "reach anyone." You need to reach the RIGHT decision-makers.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Longer Sales Cycles</h3>
            <p className="text-ivory/70">3-12 months from lead to close. Not 3 days like B2C. You need nurturing, not just conversion.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Committee Buying</h3>
            <p className="text-ivory/70">Multiple stakeholders involved. CFO, CTO, VP, CEO. One person won't close the deal. You need to convince the committee.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Low Volume, High Value</h3>
            <p className="text-ivory/70">You don't need 1,000 leads. You need 20 qualified leads that close. One deal is worth ₦5-50M. Different game entirely.</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
            alt="B2B business meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 2: Channels */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">B2B Lead Generation Channels</h2>
        <p className="text-lg text-ivory/80 mb-12">We generate B2B leads through multiple channels, each optimized for Nigerian B2B market:</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">LinkedIn</h3>
            <p className="text-ivory/70 mb-4"><strong>Best for:</strong> Enterprise, professional services, SaaS, recruiting</p>
            <p className="text-ivory/70 mb-4"><strong>Volume:</strong> 50-100 leads/month</p>
            <p className="text-ivory/70 mb-4"><strong>Cost:</strong> ₦1,500-3,000 per lead</p>
            <p className="text-ivory/70"><strong>Our approach:</strong> Sponsored content, InMail, lead gen forms targeting exact job titles</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Google Ads</h3>
            <p className="text-ivory/70 mb-4"><strong>Best for:</strong> Search intent (people actively looking)</p>
            <p className="text-ivory/70 mb-4"><strong>Volume:</strong> 20-50 leads/month</p>
            <p className="text-ivory/70 mb-4"><strong>Cost:</strong> ₦2,000-5,000 per lead</p>
            <p className="text-ivory/70"><strong>Our approach:</strong> Search ads on B2B keywords + landing pages</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Email Outreach</h3>
            <p className="text-ivory/70 mb-4"><strong>Best for:</strong> Direct engagement, relationship building</p>
            <p className="text-ivory/70 mb-4"><strong>Volume:</strong> 10-30 leads/month</p>
            <p className="text-ivory/70 mb-4"><strong>Cost:</strong> ₦500-1,500 per lead</p>
            <p className="text-ivory/70"><strong>Our approach:</strong> Personalized research + cold email + nurture sequences</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Webinars & Events</h3>
            <p className="text-ivory/70 mb-4"><strong>Best for:</strong> Lead magnets, thought leadership</p>
            <p className="text-ivory/70 mb-4"><strong>Volume:</strong> 30-80 leads/month</p>
            <p className="text-ivory/70 mb-4"><strong>Cost:</strong> ₦1,000-3,000 per lead</p>
            <p className="text-ivory/70"><strong>Our approach:</strong> Host webinar + promote + convert attendees to leads</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Our B2B Lead Generation Process</h2>
        <p className="text-lg text-ivory/80 mb-12">We follow a 6-step framework proven to generate qualified B2B leads:</p>
        
        <div className="space-y-8 mb-12">
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">1</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Audience Definition</h3>
              <p className="text-ivory/70">Who is your ideal customer? Company size, industry, location, pain points, decision-makers? We create a detailed buyer profile.</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">2</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Channel Selection</h3>
              <p className="text-ivory/70">Which channels reach your audience? LinkedIn? Google? Email? Events? We pick the best combination for your budget.</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">3</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Lead Magnet Creation</h3>
              <p className="text-ivory/70">What makes your audience want to engage? E-book? Webinar? Consultation? We build the lead magnet and landing page.</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">4</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Campaign Launch</h3>
              <p className="text-ivory/70">LinkedIn campaigns, Google Ads, email outreach, event promotion. All targeting your ideal customer.</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">5</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Lead Nurturing</h3>
              <p className="text-ivory/70">Automated email sequences educate prospects. Week 1: Intro. Week 2: Value (helpful content). Week 3: Soft pitch. Week 4: Hard ask (meeting).</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">6</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Handoff to Sales</h3>
              <p className="text-ivory/70">Lead scoring, CRM integration, sales team training. We make sure your sales team can actually close these leads.</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
            alt="B2B lead generation workflow"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 4: Case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">B2B Leads Generated</h2>
        
        <div className="space-y-12">
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">SaaS Company — HR Management Software</h3>
                <p className="text-ivory/70 mb-4"><strong>Goal:</strong> 50 qualified leads/month for enterprise sales</p>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Enterprise buying takes 6+ months. Need high-quality leads.</p>
                <p className="text-ivory/70 mb-4"><strong>Solution:</strong> LinkedIn + Google Ads + webinar strategy</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 68 leads/month (36% above target)</li>
                  <li>• 12 pilot conversions</li>
                  <li>• 2.4x ROAS</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="SaaS lead metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Logistics Company — B2B Partnerships</h3>
                <p className="text-ivory/70 mb-4"><strong>Goal:</strong> Enterprise partnerships (5+ per year)</p>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Need high-value deals, not volume.</p>
                <p className="text-ivory/70 mb-4"><strong>Solution:</strong> LinkedIn + email outreach + partnerships</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 3 partnerships closed</li>
                  <li>• ₦20M+ in new business</li>
                  <li>• Timeline: 6 months</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
                  alt="Partnership metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Consulting Firm — Enterprise Engagements</h3>
                <p className="text-ivory/70 mb-4"><strong>Goal:</strong> 30 qualified leads for ₦2M+ engagements</p>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> High-value deals, needs thought leadership positioning.</p>
                <p className="text-ivory/70 mb-4"><strong>Solution:</strong> Thought leadership + email + webinars</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 35 leads generated</li>
                  <li>• 8 engagements closed</li>
                  <li>• ₦15M+ pipeline opened</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Consulting engagements"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Why B2B Matters */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-ivory/5 rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-8">Why One B2B Lead ≠ One B2C Lead</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-gold mb-2">3-10x</p>
            <p className="text-ivory/70">More valuable than B2C lead (higher transaction value)</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gold mb-2">6-12mo</p>
            <p className="text-ivory/70">Longer customer lifetime vs. one-time purchase</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gold mb-2">₦2-50M+</p>
            <p className="text-ivory/70">Per deal size vs. typical B2C purchase</p>
          </div>
        </div>

        <p className="text-lg text-ivory/80 mt-12 border-l-4 border-gold pl-6">
          <strong>If you're spending on generic lead gen, you're wasting money.</strong> You need B2B-specific strategies. You need decision-maker targeting. You need long-term nurturing. You need us.
        </p>
      </section>

      {/* SECTION 6: Related Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Our Other Services</h2>
        <p className="text-lg text-ivory/80 mb-12">B2B lead generation is our specialty, but we also offer:</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <a href="/marketing-agency-nigeria" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Performance Marketing</h3>
            <p className="text-ivory/70">Full marketing strategy from discovery to scaling campaigns.</p>
          </a>
          
          <a href="/advertising-agency-lagos" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Advertising Agency Lagos</h3>
            <p className="text-ivory/70">Creative + strategy + paid media for Lagos brands.</p>
          </a>
          
          <a href="/advertising-companies-in-ikeja" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Ikeja Services</h3>
            <p className="text-ivory/70">Specialized advertising for Ikeja business community.</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gold/10 border border-gold/30 p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-gold">Generate B2B Leads for Your Business</h2>
          <p className="text-lg text-ivory/80 mb-8">Let's build a lead generation strategy that works for your sales team and closes deals.</p>
          <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-10 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition text-lg">
            Schedule Your Free Strategy Call
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gold/20">
        <p className="text-lg text-ivory/80 mb-4">
          <strong>B2B Specialists</strong> • 50+ companies • Proven lead generation framework
        </p>
        <p className="text-ivory/60">
          We don't just generate leads. We generate QUALIFIED leads. Leads that actually convert to customers.
        </p>
      </section>
    </div>
  )
}
