import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/advertising-agencies-in-ikeja')({
  component: AdvertisingAgenciesIkeja,
})

function AdvertisingAgenciesIkeja() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Advertising Agencies in Ikeja — Local Expertise, Global Results</h1>
            <p className="text-xl text-ivory/80 mb-8">We're based in Lagos but specialize in growing Ikeja businesses. We know your market, your competition, your customers, and your payment systems.</p>
            <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition mr-4">
              Book Free Strategy Call
            </a>
            <a href="/advertising-company-lagos" className="inline-block px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition">
              See Our Full Services
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
              alt="Ikeja business district with modern offices"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Why Ikeja Businesses Need Local Advertising</h2>
        <p className="text-lg text-ivory/80 mb-8">Ikeja is Lagos' business hub with 10,000+ registered businesses. It's where decisions are made, deals are struck, and the future of Nigeria's commerce is being written. But it's also CROWDED.</p>
        
        <div className="rounded-lg overflow-hidden h-96 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
            alt="Professional Ikeja business team meeting"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-lg text-ivory/80 mb-8">You need an advertising agency that understands Ikeja specifically:</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Business Types in Ikeja</h3>
            <p className="text-ivory/70">Tech startups, logistics companies, manufacturing, professional services, retail, e-commerce, import/export. Ikeja has all of them competing for the same customers.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Ikeja Buyer Behavior</h3>
            <p className="text-ivory/70">Quick decision-makers, B2B focus, ROI-driven. Ikeja professionals don't have time for fluff. They want results, not vanity metrics.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Media Consumption</h3>
            <p className="text-ivory/70">LinkedIn, Google Search, WhatsApp Business, industry forums. Ikeja professionals are on LinkedIn during working hours and email-checking constantly.</p>
          </div>
          
          <div className="border-l-4 border-gold pl-6">
            <h3 className="text-xl font-bold text-gold mb-3">Local Competition</h3>
            <p className="text-ivory/70">30+ agencies competing for Ikeja business. What works here is different from what works in Island or Mainland.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Ikeja-Specific Strategy */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Our Ikeja-Specific Strategy</h2>
        <p className="text-lg text-ivory/80 mb-8">We don't use a generic Lagos strategy for Ikeja. We build specifically for Ikeja businesses:</p>
        
        <div className="space-y-8 mb-12">
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">LinkedIn + Google Ads (B2B)</h3>
            <p className="text-ivory/70">Target decision-makers in Ikeja companies with relevant messaging. We build campaigns that speak to what Ikeja professionals care about: ROI, efficiency, growth.</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Reputation & Local Authority</h3>
            <p className="text-ivory/70">Google Business Profile optimization, review generation, thought leadership positioning. We make you THE agency Ikeja businesses trust.</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Direct Outreach & Relationships</h3>
            <p className="text-ivory/70">Email campaigns, phone outreach, partnerships with Ikeja business networks. We build real relationships with Ikeja businesses.</p>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Industry-Specific Content</h3>
            <p className="text-ivory/70">We create content that speaks to Ikeja industries: tech, logistics, manufacturing, professional services. Not generic marketing content.</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
            alt="Business strategy dashboard metrics"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 3: Case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Ikeja Success Stories</h2>
        
        <div className="space-y-12">
          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Tech Startup (Ikeja GRA)</h3>
                <p className="text-ivory/70 mb-4"><strong>Business:</strong> B2B SaaS platform for logistics companies</p>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Generate 20 qualified B2B leads/month</p>
                <p className="text-ivory/70 mb-4"><strong>Our Solution:</strong> LinkedIn + Google Ads + webinar strategy</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 28 leads/month (40% above target)</li>
                  <li>• 5 pilot deals closed</li>
                  <li>• 2.9x ROAS</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Tech startup metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Manufacturing Company (Ikeja Industrial Estate)</h3>
                <p className="text-ivory/70 mb-4"><strong>Business:</strong> Industrial equipment supplier</p>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Increase B2B sales pipeline, get enterprise contracts</p>
                <p className="text-ivory/70 mb-4"><strong>Our Solution:</strong> Google Ads + industry partnerships + thought leadership</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 40% increase in inquiries</li>
                  <li>• 2 enterprise contracts signed</li>
                  <li>• ₦50M+ pipeline opened</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
                  alt="Manufacturing company pipeline"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-gold/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-4">Professional Services (Accounting Firm)</h3>
                <p className="text-ivory/70 mb-4"><strong>Business:</strong> Tax & accounting services for SMEs</p>
                <p className="text-ivory/70 mb-4"><strong>Challenge:</strong> Attract high-value accounting clients</p>
                <p className="text-ivory/70 mb-4"><strong>Our Solution:</strong> Google + LinkedIn + referral program</p>
                <p className="text-ivory/70 mb-4"><strong>Result:</strong></p>
                <ul className="space-y-2 text-ivory/70 ml-4">
                  <li>• 15 new clients acquired</li>
                  <li>• Avg. ₦2M+ annual fees/client</li>
                  <li>• ₦30M+ annual revenue from campaign</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Professional services clients"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Local Matters */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-ivory/5 rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-8">Why Local Agency > Big International Agency</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gold">
                <th className="pb-4 text-gold font-bold">Aspect</th>
                <th className="pb-4 text-gold font-bold">Local Agency (Topton)</th>
                <th className="pb-4 text-ivory/60 font-bold">Big International</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Response Time</td>
                <td className="py-4 text-ivory/80">Hours</td>
                <td className="py-4 text-ivory/50">Days</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Market Understanding</td>
                <td className="py-4 text-ivory/80">Deep, current</td>
                <td className="py-4 text-ivory/50">Generic, outdated</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Relationship</td>
                <td className="py-4 text-ivory/80">Personal partnership</td>
                <td className="py-4 text-ivory/50">Transactional</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Flexibility</td>
                <td className="py-4 text-ivory/80">Very flexible</td>
                <td className="py-4 text-ivory/50">Rigid processes</td>
              </tr>
              <tr className="border-b border-gold/20">
                <td className="py-4 font-bold">Cost</td>
                <td className="py-4 text-ivory/80">Affordable, scalable</td>
                <td className="py-4 text-ivory/50">Expensive (₦2-5M+/month)</td>
              </tr>
              <tr>
                <td className="py-4 font-bold">Language</td>
                <td className="py-4 text-ivory/80">English + Pidgin</td>
                <td className="py-4 text-ivory/50">English only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Our Full Range of Services</h2>
        <p className="text-lg text-ivory/80 mb-8">Beyond advertising, we offer complete marketing solutions for Ikeja businesses:</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <a href="/marketing-agency-nigeria" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Performance Marketing</h3>
            <p className="text-ivory/70">Paid media optimization across all platforms. ROI-focused campaigns.</p>
          </a>
          
          <a href="/b2b-lead-generation-agency-in-nigeria" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Lead Generation</h3>
            <p className="text-ivory/70">B2B lead generation specifically for Ikeja companies.</p>
          </a>
          
          <a href="/advertising-company-lagos" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Full-Service Advertising</h3>
            <p className="text-ivory/70">Creative + strategy + media buying + optimization.</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gold/10 border border-gold/30 p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-gold">Grow Your Ikeja Business</h2>
          <p className="text-lg text-ivory/80 mb-8">Let's discuss your advertising strategy and how we can help your Ikeja business dominate.</p>
          <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-10 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition text-lg">
            Schedule Your Free Strategy Call
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gold/20">
        <p className="text-lg text-ivory/80">
          <strong>Trusted by 50+ brands</strong> • Serving Ikeja since 2020 • Average ROAS: 3.5x
        </p>
      </section>
    </div>
  )
}
