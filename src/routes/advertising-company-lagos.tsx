import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/advertising-company-lagos')({
  component: AdvertisingCompanyLagos,
})

function AdvertisingCompanyLagos() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Advertising Company in Lagos — We Grow Your Revenue</h1>
            <p className="text-xl text-ivory/80 mb-8">Performance marketing, brand campaigns, paid media, creative services. Results-driven. Transparent reporting. Full-service solutions for ambitious brands.</p>
            <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition mr-4">
              Book Free Strategy Call
            </a>
            <a href="/marketing-agency-nigeria" className="inline-block px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition">
              Learn About Our Process
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
              alt="Professional advertising team in Lagos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: Full-Service */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Full-Service Advertising Company</h2>
        <p className="text-lg text-ivory/80 mb-12">We're not a one-trick pony. We handle EVERYTHING an advertising company should handle:</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Creative Services</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Strategic copywriting (10+ variations)</li>
              <li>• Professional graphic design</li>
              <li>• Video production (TikTok, Instagram Reels, YouTube)</li>
              <li>• Motion graphics & animation</li>
              <li>• Brand identity design</li>
            </ul>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Paid Media Management</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Meta (Facebook, Instagram, Threads)</li>
              <li>• Google (Search, Display, YouTube, Pmax)</li>
              <li>• TikTok Ads & organic seeding</li>
              <li>• LinkedIn for B2B campaigns</li>
              <li>• Programmatic advertising</li>
            </ul>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Landing Page & Web Design</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• High-converting page design</li>
              <li>• Conversion rate optimization (CRO)</li>
              <li>• A/B testing framework</li>
              <li>• Fast loading times</li>
              <li>• Mobile-first approach</li>
            </ul>
          </div>
          
          <div className="bg-ivory/5 p-8 rounded-lg border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-4">Email & SMS Automation</h3>
            <ul className="space-y-3 text-ivory/70">
              <li>• Automated email sequences</li>
              <li>• SMS campaign management</li>
              <li>• Customer retention automation</li>
              <li>• Abandoned cart recovery</li>
              <li>• Personalization at scale</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop" 
            alt="Full-service advertising dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 2: Real Results */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Real Results for Real Companies</h2>
        <p className="text-lg text-ivory/80 mb-12">50+ brands trusted Topton Media with their advertising. Here's what we've delivered:</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-ivory/5 p-8 rounded-lg text-center">
            <p className="text-5xl font-bold text-gold mb-2">50+</p>
            <p className="text-ivory/70">Brands worked with</p>
          </div>
          <div className="bg-ivory/5 p-8 rounded-lg text-center">
            <p className="text-5xl font-bold text-gold mb-2">3-5x</p>
            <p className="text-ivory/70">Average ROAS</p>
          </div>
          <div className="bg-ivory/5 p-8 rounded-lg text-center">
            <p className="text-5xl font-bold text-gold mb-2">30-60</p>
            <p className="text-ivory/70">Days to first results</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
            alt="Campaign results and metrics"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 3: Process */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Our Advertising Process</h2>
        <p className="text-lg text-ivory/80 mb-12">We follow a proven framework that works. Every time.</p>
        
        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">1</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Discovery & Strategy</h3>
              <p className="text-ivory/70">We audit your market, analyze competitors, understand your current performance, and define what success looks like for YOU.</p>
              <p className="text-ivory/70 text-sm mt-2"><strong>Deliverable:</strong> Comprehensive strategy document</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">2</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Creative Development & Build</h3>
              <p className="text-ivory/70">We create compelling ad creative, write persuasive copy, design landing pages, and set up tracking. Everything is tested before launch.</p>
              <p className="text-ivory/70 text-sm mt-2"><strong>Deliverable:</strong> Ready-to-launch campaigns</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">3</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Launch & Optimize</h3>
              <p className="text-ivory/70">We launch campaigns across all channels simultaneously. Then we monitor, test, and optimize daily to improve performance.</p>
              <p className="text-ivory/70 text-sm mt-2"><strong>Deliverable:</strong> Weekly performance reports</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center text-2xl">4</div>
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">Scale & Refine</h3>
              <p className="text-ivory/70">Once we find what works, we scale budget to winners. We expand to new audiences, improve messaging, and boost ROAS month-over-month.</p>
              <p className="text-ivory/70 text-sm mt-2"><strong>Deliverable:</strong> Increasing revenue & ROAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Related Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Our Other Specialized Services</h2>
        <p className="text-lg text-ivory/80 mb-12">We also offer these focused services for specific business needs:</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <a href="/marketing-agency-nigeria" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Performance Marketing</h3>
            <p className="text-ivory/70">General performance marketing strategy, channel optimization, ROAS improvement.</p>
          </a>
          
          <a href="/advertising-agency-lagos" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ Agency in Lagos</h3>
            <p className="text-ivory/70">Lagos-specific advertising services for your Lagos-based business.</p>
          </a>
          
          <a href="/b2b-lead-generation-agency-in-nigeria" className="border border-gold/30 p-8 rounded-lg hover:border-gold transition">
            <h3 className="text-xl font-bold text-gold mb-4">→ B2B Lead Generation</h3>
            <p className="text-ivory/70">Specialized lead generation for B2B companies across Nigeria.</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gold/10 border border-gold/30 p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4 text-gold">Ready to Grow Your Business?</h2>
          <p className="text-lg text-ivory/80 mb-8">Let's discuss your advertising strategy and build a plan that works for you.</p>
          <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-10 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright transition text-lg">
            Schedule Your Free Call
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gold/20">
        <p className="text-lg text-ivory/80 mb-4">
          <strong>Trusted by 50+ brands</strong> • Lagos-based • Transparent reporting
        </p>
        <p className="text-ivory/60">
          We're not the biggest agency in Lagos. We're the one that delivers results. Ask our clients.
        </p>
      </section>
    </div>
  )
}
