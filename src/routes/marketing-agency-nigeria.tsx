import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/marketing-agency-nigeria')({
  component: MarketingAgencyNigeria,
})

function MarketingAgencyNigeria() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Marketing Agency in Nigeria — Revenue-Focused Results</h1>
            <p className="text-xl text-ivory/80 mb-8">We don't run campaigns. We build revenue machines for ambitious brands across Nigeria, Ghana, Kenya, UK, and US.</p>
            <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright">
              Book Free Strategy Call
            </a>
          </div>
          <div className="bg-ivory/10 h-96 rounded-lg flex items-center justify-center">
            <p className="text-ivory/50">Hero Image</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Why Nigeria Needs Different Marketing</h2>
        <p className="text-lg text-ivory/80 mb-6">Most agencies copy-paste strategies from London or New York. They don't work here. Nigeria's market is unique.</p>
        <ul className="space-y-4 text-ivory/80">
          <li>• <strong>Payment infrastructure:</strong> Different from Western markets (Flutterwave, Paystack)</li>
          <li>• <strong>Consumer behavior:</strong> WhatsApp-first, cash-on-delivery dominant</li>
          <li>• <strong>Competition:</strong> 40 million SMEs fighting for attention</li>
          <li>• <strong>Opportunity:</strong> 122 million internet users, growing middle class</li>
        </ul>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gold/30 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Performance Marketing</h3>
            <p className="text-ivory/70">Paid media on Meta, Google, TikTok. Real-time optimization for ROAS.</p>
          </div>
          <div className="border border-gold/30 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Lead Generation</h3>
            <p className="text-ivory/70">B2B outbound campaigns. LinkedIn + Google + email nurture.</p>
          </div>
          <div className="border border-gold/30 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">SEO</h3>
            <p className="text-ivory/70">Ranking for competitive keywords. Local citation building.</p>
          </div>
          <div className="border border-gold/30 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">User Acquisition</h3>
            <p className="text-ivory/70">App install campaigns. Retention optimization.</p>
          </div>
          <div className="border border-gold/30 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Web Design & CRO</h3>
            <p className="text-ivory/70">Fast, mobile-first design. Conversion rate optimization.</p>
          </div>
          <div className="border border-gold/30 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Brand Strategy</h3>
            <p className="text-ivory/70">Positioning. Content marketing. Thought leadership.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="bg-gold/10 border border-gold/30 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Revenue Machine?</h2>
          <p className="text-lg text-ivory/80 mb-8">Let's discuss your marketing strategy.</p>
          <a href="https://zcal.co/i/gABtQS4_" className="inline-block px-8 py-4 bg-gold text-charcoal font-bold rounded-lg hover:bg-gold-bright">
            Schedule a Free Call
          </a>
        </div>
      </section>
    </div>
  )
}
