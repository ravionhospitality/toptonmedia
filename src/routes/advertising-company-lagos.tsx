import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/advertising-company-lagos')({
  component: AdvertisingCompanyLagos,
})

function AdvertisingCompanyLagos() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Advertising Company in Lagos — We Grow Your Revenue</h1>
        <p className="text-xl text-ivory/80 mb-8">Performance marketing, brand campaigns, paid media, creative services. Results-driven. Transparent reporting.</p>
        <a href="https://zcal.co/i/gABtQS4_" className="px-8 py-4 bg-gold text-charcoal font-bold rounded-lg inline-block hover:bg-gold-bright">
          Book Free Strategy Call
        </a>
      </section>
    </div>
  )
}
