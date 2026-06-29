import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/b2b-lead-generation-agency-in-nigeria')({
  component: B2BLeadGeneration,
})

function B2BLeadGeneration() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">B2B Lead Generation Agency in Nigeria — Qualified Leads for Your Sales Team</h1>
        <p className="text-xl text-ivory/80 mb-8">Not just clicks. Not just form fills. Real, qualified leads that convert to deals.</p>
        <a href="https://zcal.co/i/gABtQS4_" className="px-8 py-4 bg-gold text-charcoal font-bold rounded-lg inline-block hover:bg-gold-bright">
          Book Free Strategy Call
        </a>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">B2B Lead Generation Channels</h2>
        <p className="text-lg text-ivory/80">LinkedIn, Google Ads, Email Outreach, Webinars & Events, Partnerships & Referrals.</p>
      </section>
    </div>
  )
}
