import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/marketing-agency-nigeria')({
  component: MarketingAgencyNigeria,
})

function MarketingAgencyNigeria() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Performance Marketing Agency in Nigeria — Revenue-Focused Results</h1>
            <p className="text-xl text-ivory/80 mb-8">We don't run campaigns. We build revenue machines for ambitious brands across Nigeria, Ghana, Kenya, UK, and US.</p>
            <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition">
              Book Free Strategy Call
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
              alt="Marketing team collaborating in Lagos office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: Why Nigeria Needs Different Marketing */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Why Nigeria Needs Different Marketing</h2>
        <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
          Most agencies copy-paste strategies from London or New York. They don't work here. Nigeria's market is fundamentally different, and that's why most international agencies fail.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Payment Infrastructure</h3>
            <p className="text-ivory/70">Different from Western markets. Flutterwave, Paystack, and cash-on-delivery dominate. Stripe doesn't work here. Your payment strategy needs to match Nigerian consumer behavior.</p>
          </div>
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Consumer Behavior</h3>
            <p className="text-ivory/70">WhatsApp-first platforms, cash-on-delivery dominant, mobile-only audiences. Nigerians research on WhatsApp, decide on Instagram, and buy through Paystack. Traditional funnel doesn't apply.</p>
          </div>
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Competition Intensity</h3>
            <p className="text-ivory/70">40 million SMEs fighting for attention. Your competitor isn't another agency—it's every other business trying to reach the same 122 million internet users.</p>
          </div>
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Opportunity Scale</h3>
            <p className="text-ivory/70">122 million internet users, growing middle class, 75% mobile penetration. The market is massive but requires a completely different approach than Western markets.</p>
          </div>
        </div>

        <p className="text-lg text-ivory/80 mb-6">
          <strong>Our approach:</strong> We understand Nigeria's market inside-out. Every strategy we build is tailored for Nigerian consumers, Nigerian payment systems, Nigerian platforms, and Nigerian competition.
        </p>
        <p className="text-lg text-ivory/80">
          We don't transplant campaigns from abroad. We build from first principles, designed specifically for how Nigerians shop, pay, and share.
        </p>
      </section>

      {/* SECTION 2: What We've Built */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Real Results for Real Brands</h2>
        
        <div className="space-y-12">
          {/* Case Study 1 */}
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Fintech App — User Acquisition</h3>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Acquire 10,000 users at less than ₦200 CAC (Customer Acquisition Cost)</p>
                <p className="text-ivory/70 mb-4"><strong>Our Solution:</strong> TikTok organic seeding + Meta paid retargeting + SMS nurture sequence</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 15,000 users acquired</li>
                  <li>• ₦150 CAC (25% below target)</li>
                  <li>• 4.2x ROAS</li>
                  <li>• Timeline: 3 months</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
                  alt="Fintech app growth metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">B2B SaaS — Lead Generation</h3>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Generate 50 qualified leads/month for enterprise sales team</p>
                <p className="text-ivory/70 mb-4"><strong>Our Solution:</strong> LinkedIn sponsored content + Google Ads on intent keywords + email nurture funnel</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 75 leads/month (50% above target)</li>
                  <li>• 22% conversion to pilot</li>
                  <li>• 3.1x ROAS</li>
                  <li>• Timeline: 4 months</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="B2B lead generation dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">E-commerce Brand — Revenue Growth</h3>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Improve ROAS from 2x to 3x+, increase profit margins</p>
                <p className="text-ivory/70 mb-4"><strong>Our Solution:</strong> Creative testing framework + audience segmentation + email automation for repeat purchases</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 3.8x ROAS (improved from 2x)</li>
                  <li>• 40% revenue growth</li>
                  <li>• 60% reduction in CAC</li>
                  <li>• Timeline: 2 months</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
                  alt="E-commerce revenue growth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Services for Nigerian Brands</h2>
        <p className="text-lg text-ivory/80 mb-12">We offer a complete suite of marketing services, all designed specifically for Nigerian market conditions:</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">Performance Marketing</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Paid media on Meta, Google, TikTok</li>
              <li>• Real-time bid optimization</li>
              <li>• Multiplatform campaign management</li>
              <li>• Daily performance monitoring</li>
              <li>• Creative rotation & testing</li>
            </ul>
          </div>
          
          <div className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">Lead Generation</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• B2B outbound campaigns</li>
              <li>• LinkedIn + Google + email</li>
              <li>• Sales funnel optimization</li>
              <li>• Lead scoring & qualification</li>
              <li>• CRM integration</li>
            </ul>
          </div>
          
          <div className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">SEO & Local Search</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Ranking for competitive keywords</li>
              <li>• Local citation building</li>
              <li>• Technical SEO audits</li>
              <li>• Google Business Profile optimization</li>
              <li>• Link building strategy</li>
            </ul>
          </div>
          
          <div className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">User Acquisition (Apps)</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• App install campaigns</li>
              <li>• Retention optimization</li>
              <li>• LTV improvement</li>
              <li>• Cost per install reduction</li>
              <li>• User quality optimization</li>
            </ul>
          </div>
          
          <div className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">Web Design & CRO</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Fast, mobile-first design</li>
              <li>• Conversion rate optimization</li>
              <li>• A/B testing framework</li>
              <li>• Landing page design</li>
              <li>• User experience optimization</li>
            </ul>
          </div>
          
          <div className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">Brand Strategy & Content</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Positioning for competitive markets</li>
              <li>• Content marketing strategy</li>
              <li>• Thought leadership</li>
              <li>• Brand storytelling</li>
              <li>• Messaging framework</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Why Choose Topton Media</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-4">✓ Revenue Focus</h3>
            <p className="text-ivory/70">We measure success by your revenue, not vanity metrics like impressions or followers. If it doesn't impact your bottom line, we don't do it.</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-4">✓ Lagos-Based</h3>
            <p className="text-ivory/70">We understand Nigeria's market deeply because we live here. We know the platforms, the payment systems, the competition, and the consumers.</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-4">✓ Transparent Reporting</h3>
            <p className="text-ivory/70">Real dashboards, real numbers, real reporting. You see exactly where your money goes and what results it's generating. No black boxes.</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-4">✓ Fast Results</h3>
            <p className="text-ivory/70">Results in 30-60 days, not "trust the process for 6+ months." We optimize aggressively and scale what works immediately.</p>
          </div>
        </div>

        <div className="border-l-4 border-gold pl-8 py-4">
          <p className="text-lg text-ivory/80">
            <strong>Comparison:</strong> Most agencies optimize for engagement. We optimize for revenue. Most agencies take months to show results. We show results in weeks. Most agencies are offshore. We're in Lagos, understanding your market.
          </p>
        </div>
      </section>

      {/* SECTION 5: Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <p className="text-lg text-ivory/80 mb-12">Our proven 4-phase framework has worked for 50+ brands across Nigeria and beyond:</p>
        
        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">1</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Discovery (Week 1)</h3>
              <p className="text-ivory/70 mb-3">We audit your market, competitors, and current performance. We define what success looks like for you: CAC target, LTV, ROAS, ARR. We build a comprehensive strategy tailored to your business.</p>
              <p className="text-ivory/70 text-sm">Deliverable: Strategy document + competitive analysis</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">2</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Setup (Week 2-3)</h3>
              <p className="text-ivory/70 mb-3">We build campaigns from scratch: ad creative, landing pages, email sequences. We configure tracking (GA4, attribution, CRM integration). Then we launch everything together for maximum impact.</p>
              <p className="text-ivory/70 text-sm">Deliverable: Live campaigns across all channels</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">3</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Optimize (Week 4-12)</h3>
              <p className="text-ivory/70 mb-3">Daily monitoring and optimizations. A/B testing creative, audience, messaging. Weekly reporting showing what's working and why. Monthly strategy adjustments based on performance data.</p>
              <p className="text-ivory/70 text-sm">Deliverable: Weekly reports + optimization recommendations</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">4</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Scale (Month 4+)</h3>
              <p className="text-ivory/70 mb-3">Increase budget to winners. Expand to new channels and audiences. Build lookalike audiences. Refine targeting. Improve unit economics and ROAS month-over-month.</p>
              <p className="text-ivory/70 text-sm">Deliverable: Scaled campaigns + improved metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: What Makes Us Different */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-ivory/5 rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-12">What Sets Topton Media Apart</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gold">
                <th className="pb-4 text-gold font-bold">Aspect</th>
                <th className="pb-4 text-gold font-bold">Topton Media</th>
                <th className="pb-4 text-ivory/60 font-bold">Most Agencies</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Focus</td>
                <td className="py-4 text-ivory/80">Revenue & profit</td>
                <td className="py-4 text-ivory/50">Traffic & impressions</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Location</td>
                <td className="py-4 text-ivory/80">Lagos-based, on the ground</td>
                <td className="py-4 text-ivory/50">International, offshore</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Transparency</td>
                <td className="py-4 text-ivory/80">Real dashboards, real numbers</td>
                <td className="py-4 text-ivory/50">Black box reporting</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Timeline</td>
                <td className="py-4 text-ivory/80">30-60 days for results</td>
                <td className="py-4 text-ivory/50">6-12 months "trust the process"</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Communication</td>
                <td className="py-4 text-ivory/80">Weekly meetings, daily updates</td>
                <td className="py-4 text-ivory/50">Monthly check-ins</td>
              </tr>
              <tr>
                <td className="py-4 font-bold">Cost</td>
                <td className="py-4 text-ivory/80">Performance-based, scalable</td>
                <td className="py-4 text-ivory/50">Fixed retainer, ₦2-5M+/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gold/10 border border-gold/30 p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-gold">Ready to Build Your Revenue Machine?</h2>
          <p className="text-lg text-ivory/80 mb-8">Let's discuss your marketing strategy and how we can grow your business to 3-5x ROAS.</p>
          <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-10 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition text-lg">
            Schedule Your Free Strategy Call
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gold/20">
        <p className="text-lg text-ivory/80 mb-4">
          <strong>Trusted by 50+ brands</strong> • Average ROAS: 3-5x • Results in 30-60 days
        </p>
        <p className="text-ivory/60">
          From fintech startups to established B2B companies, we've helped ambitious brands across Nigeria, Ghana, Kenya, UK, and US achieve sustainable growth through performance marketing.
        </p>
      </section>
    </div>
  )
}
