import { createFileRoute } from '@tanstack/react-router'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'

export const Route = createFileRoute('/advertising-agency-lagos')({
  head: () => ({
    meta: seoMeta({
      title: 'Advertising Agency in Lagos | Creative + Performance — Topton Media',
      description: 'Topton Media is an advertising agency in Lagos blending creative storytelling with performance metrics. Ads that sell, not just ads that look pretty.',
      path: '/advertising-agency-lagos',
    }),
    links: seoLinks('/advertising-agency-lagos'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'Advertising Agency Lagos', url: 'https://toptonmedia.com/advertising-agency-lagos' },
      ])),
    }],
  }),
  component: AdvertisingAgencyLagos,
})

function AdvertisingAgencyLagos() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Advertising Agency in Lagos — Creative + Performance</h1>
            <p className="text-xl text-ivory/80 mb-8">We blend creative storytelling with performance metrics. Ads that sell, not just ads that look pretty.</p>
            <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition">
              Book Free Strategy Call
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
              alt="Creative advertising campaign in Lagos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">From Concept to Campaign to ROI</h2>
        <p className="text-lg text-ivory/80 mb-8">We handle everything a full-service advertising agency should handle:</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Creative Development</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Strategic copywriting (10+ variations)</li>
              <li>• Professional design & motion graphics</li>
              <li>• Video production (TikTok, Instagram Reels, YouTube)</li>
              <li>• A/B testing messaging + visuals</li>
              <li>• Platform-specific format optimization</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Paid Media Management</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Meta (Facebook, Instagram, Threads)</li>
              <li>• Google (Search, Display, YouTube, Pmax)</li>
              <li>• TikTok Ads & organic seeding</li>
              <li>• LinkedIn for B2B campaigns</li>
              <li>• Programmatic advertising</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Analytics & Optimization</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Real-time bid management</li>
              <li>• Creative rotation & performance testing</li>
              <li>• Audience optimization & expansion</li>
              <li>• Daily optimization for KPI improvement</li>
              <li>• Attribution tracking setup</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Reporting & Strategy</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Weekly performance dashboards</li>
              <li>• Monthly strategy adjustments</li>
              <li>• What worked, what didn't, why</li>
              <li>• Next month's recommendations</li>
              <li>• Competitive analysis updates</li>
            </ul>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
            alt="Advertising metrics dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Why Lagos Brands Choose Us</h2>
        <p className="text-lg text-ivory/80 mb-8">Lagos advertising is crowded. You need someone who understands the market deeply:</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Local Platforms</h3>
            <p className="text-ivory/70">WhatsApp Business marketing, Nairabox, Paystack integration, Flutterwave payments. We know the platforms Nigerians actually use, not just the international ones.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Local Consumer Behavior</h3>
            <p className="text-ivory/70">How Lagos consumers research on WhatsApp, decide on Instagram, and pay via Paystack. We understand the entire journey, not just the ad impression.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Local Competition</h3>
            <p className="text-ivory/70">What your 100+ local competitors are doing. What messaging works in Lagos vs. what falls flat. We track local market trends constantly.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Local Media</h3>
            <p className="text-ivory/70">Best radio stations, print publications, outdoor billboard locations. We have relationships with local media outlets and can negotiate better rates.</p>
          </div>
        </div>
        
        <p className="text-lg text-ivory/80"><strong>We live in Lagos. We know this market inside-out.</strong></p>
      </section>

      {/* SECTION 3: Campaign Examples */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Campaign Examples</h2>
        
        <div className="space-y-12">
          {/* Example 1 */}
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Consumer Brand Launch — Awareness + Sales</h3>
                <p className="text-ivory/70 mb-4"><strong>Goal:</strong> Launch new product, drive first 1,000 sales in 30 days</p>
                <p className="text-ivory/70 mb-4"><strong>Approach:</strong> TikTok organic seeding + Meta paid + influencer partnerships</p>
                <p className="text-ivory/70 mb-4"><strong>Results:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 8,500 sales (8.5x goal)</li>
                  <li>• 3.2x ROAS</li>
                  <li>• 2.1M impressions</li>
                  <li>• Timeline: 4 weeks</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Product launch campaign metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Restaurant Chain — Foot Traffic Campaign</h3>
                <p className="text-ivory/70 mb-4"><strong>Goal:</strong> Increase foot traffic by 30%, promote new locations</p>
                <p className="text-ivory/70 mb-4"><strong>Approach:</strong> Geo-targeted Meta ads + Instagram location tags + WhatsApp Business promo</p>
                <p className="text-ivory/70 mb-4"><strong>Results:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 45% foot traffic increase</li>
                  <li>• 2.8x ROAS</li>
                  <li>• ₦500K budget → ₦1.4M revenue</li>
                  <li>• Timeline: 6 weeks</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
                  alt="Restaurant promotion metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Fashion Brand — Seasonal Campaign</h3>
                <p className="text-ivory/70 mb-4"><strong>Goal:</strong> Drive ₦5M sales during peak season (December)</p>
                <p className="text-ivory/70 mb-4"><strong>Approach:</strong> TikTok + Instagram + Facebook retargeting + email automation</p>
                <p className="text-ivory/70 mb-4"><strong>Results:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• ₦7.2M sales (44% above target)</li>
                  <li>• 3.6x ROAS</li>
                  <li>• 25,000 units sold</li>
                  <li>• Timeline: 4 weeks</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Seasonal campaign performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Performance Matters */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-ivory/5 rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-8">Why Performance Metrics Matter</h2>
        <p className="text-lg text-ivory/80 mb-8">Too many agencies optimize for the wrong things:</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-charcoal p-6 rounded-lg border border-red-500/30">
            <h3 className="text-xl font-bold text-red-400 mb-4">What Most Agencies Do</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>✗ Optimize for likes</li>
              <li>✗ Maximize engagement</li>
              <li>✗ Increase reach/impressions</li>
              <li>✗ Grow follower count</li>
            </ul>
          </div>
          
          <div className="bg-charcoal p-6 rounded-lg border border-gold/30">
            <h3 className="text-xl font-bold text-gold mb-4">What We Optimize For</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>✓ Revenue per campaign</li>
              <li>✓ Customer acquisition cost</li>
              <li>✓ Return on ad spend (ROAS)</li>
              <li>✓ Profit margin improvement</li>
            </ul>
          </div>
        </div>
        
        <p className="text-lg text-ivory/80 border-l-4 border-gold pl-6">
          <strong>We measure what matters:</strong> Your business metric. Whether it's revenue (e-commerce), leads (B2B, services), or app installs, we obsess over the number that impacts your bottom line.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gold/10 border border-gold/30 p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-gold">Start Your Advertising Campaign Today</h2>
          <p className="text-lg text-ivory/80 mb-8">Let's create ads that actually sell.</p>
          <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-10 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition text-lg">
            Book Your Free Strategy Call
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gold/20">
        <p className="text-lg text-ivory/80">
          <strong>Trusted by 50+ brands</strong> • Average ROAS: 3.5x • Campaigns running daily
        </p>
      </section>
    </div>
  )
}
