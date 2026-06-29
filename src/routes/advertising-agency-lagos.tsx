import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/advertising-agency-lagos')({
  component: AdvertisingAgencyLagos,
})

function AdvertisingAgencyLagos() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Advertising Agency in Lagos — Creative + Performance</h1>
        <p className="text-xl text-ivory/80 mb-8">We blend creative storytelling with performance metrics. Ads that sell, not just ads that look pretty.</p>
        <a href="https://zcal.co/i/gABtQS4_" className="px-8 py-4 bg-gold text-charcoal font-bold rounded-lg inline-block hover:bg-gold-bright">
          Book Free Strategy Call
        </a>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Full-Service Advertising</h2>
        <p className="text-lg text-ivory/80">Creative development, paid media, analytics & optimization, transparent reporting.</p>
      </section>
    </div>
  )
}
