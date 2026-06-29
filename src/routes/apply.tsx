import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { seoMeta, seoLinks } from '../lib/seo'
import { CONTACT } from '../lib/site-data'
import { supabase } from '../lib/supabase'
import { generateDiagnosticReport, type DiagnosticReport } from '../lib/revenue-diagnostic'

export const Route = createFileRoute('/apply')({
  head: () => ({
    meta: seoMeta({
      title: 'Quick Survey to Work With Topton Media | Growth Marketing Agency Lagos',
      description: 'Quick qualifier to see if we are the right growth partner for your business. Honest questions, honest answers.',
      path: '/apply',
    }),
    links: seoLinks('/apply'),
  }),
  component: ApplyPage,
})

const QUESTIONS = [
  {
    id: 'budget',
    question: 'What is your current monthly advertising budget across all digital channels?',
    options: [
      "Under $500 (~₦800,000)/month — I'm just starting",
      '$500–$1,500 (~₦800k–₦2.4M)/month',
      '$1,500–$3,000 (~₦2.4M–₦4.8M)/month',
      '$3,000–$10,000 (~₦4.8M–₦16M)/month',
      '$10,000+ (~₦16M+)/month',
    ],
  },
  {
    id: 'revenue',
    question: 'What is your current monthly revenue?',
    options: [
      'Under ₦2,000,000/month',
      '₦2,000,000–₦5,000,000/month',
      '₦5,000,000–₦15,000,000/month',
      '₦15,000,000–₦40,000,000/month',
      '₦40,000,000+/month',
    ],
  },
  {
    id: 'goal',
    question: 'What is your primary growth goal in the next 90 days?',
    options: [
      'Get more leads / enquiries',
      'Increase app installs or sign-ups',
      'Grow e-commerce revenue',
      'Build brand awareness and credibility',
      'Enter a new market (Nigeria or international)',
    ],
  },
  {
    id: 'stage',
    question: 'What stage is your business at?',
    options: [
      'Pre-launch / idea stage',
      'Early stage — less than 12 months in',
      'Growing — 1–3 years, some revenue',
      'Established — 3+ years, stable revenue',
      'Scale-up — significant revenue, ready to grow fast',
    ],
  },
  {
    id: 'tried',
    question: 'Have you run paid advertising before?',
    options: [
      'No, never tried it',
      'Yes, but results were disappointing',
      'Yes, it worked but we want to scale further',
      'Yes, currently running but not optimised',
    ],
  },
  {
    id: 'timeline',
    question: 'How soon are you looking to start?',
    options: [
      'Immediately — within this week',
      'Within the next month',
      '1–3 months from now',
      'Just exploring for now',
    ],
  },
  {
    id: 'team',
    question: 'Do you have an in-house marketing team?',
    options: [
      'No — marketing is currently just me or nobody',
      'One person handling everything',
      'Small team of 2–3 people',
      'Dedicated marketing team of 4+',
    ],
  },
  {
    id: 'challenge',
    question: 'What is your biggest marketing challenge right now?',
    options: [
      'Not enough leads or customers',
      'High cost per lead or acquisition',
      'Inconsistent results from campaigns',
      'No clear strategy or direction',
      "Tracking — I can't tell what's working",
    ],
  },
  {
    id: 'industry',
    question: 'What industry are you in?',
    options: [
      'Fintech / Financial services',
      'E-commerce / Retail',
      'Real estate / Property',
      'Healthcare / Wellness',
      'Education / Training',
      'Hospitality / Food & Beverage',
      'B2B services / SaaS',
      'Other',
    ],
  },
  {
    id: 'acquisition',
    question: 'How do you currently get most of your clients?',
    options: [
      'Paid ads (Meta, Google, TikTok)',
      'Referrals / word of mouth',
      'Organic social media',
      'Cold outreach / sales team',
      'A mix of several channels',
    ],
  },
  {
    id: 'name',
    question: 'Almost done — what should we call you?',
    type: 'text',
    placeholder: 'Your name',
  },
  {
    id: 'phone',
    question: 'What is your phone number?',
    type: 'text',
    placeholder: 'Your phone number',
  },
  {
    id: 'email',
    question: 'And the best email to send your growth blueprint to?',
    type: 'email',
    placeholder: 'your@email.com',
  },
]

function isQualified(answers: Record<string, string>): boolean {
  const budget = answers.budget ?? ''
  const stage = answers.stage ?? ''
  const notQualified =
    budget.includes('just starting') ||
    stage.includes('Pre-launch') ||
    (budget.includes('just starting') && stage.includes('Early stage'))
  return !notQualified
}

function ApplyPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [textVal, setTextVal] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [qualified, setQualified] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [report, setReport] = useState<DiagnosticReport | null>(null)

  const q = QUESTIONS[step]
  const total = QUESTIONS.length
  const progress = ((step) / total) * 100

  function selectOption(option: string) {
    const updated = { ...answers, [q.id]: option }
    setAnswers(updated)
    if (step < total - 1) {
      setTimeout(() => setStep(s => s + 1), 280)
    }
  }

  function handleText() {
    if (!textVal.trim()) return
    const updated = { ...answers, [q.id]: textVal.trim() }
    setAnswers(updated)
    setTextVal('')
    if (step < total - 1) {
      setStep(s => s + 1)
    } else {
      handleSubmit(updated)
    }
  }

  async function handleSubmit(finalAnswers: Record<string, string>) {
    setSubmitting(true)
    const qual = isQualified(finalAnswers)

    const diagnosticReport = generateDiagnosticReport({
      name: finalAnswers.name ?? 'there',
      industry: finalAnswers.industry ?? 'Other',
      monthlySpendRange: finalAnswers.budget ?? '',
      challenge: finalAnswers.challenge ?? '',
      teamAnswer: finalAnswers.team ?? '',
      acquisitionMethod: finalAnswers.acquisition,
    })

    await supabase.from('contact_submissions').insert({
      name: finalAnswers.name ?? 'Unknown',
      email: finalAnswers.email ?? '',
      message: JSON.stringify({ answers: finalAnswers, report: diagnosticReport }, null, 2),
      service: finalAnswers.goal ?? 'Qualifier form',
      budget: finalAnswers.budget ?? '',
      source: 'qualifier_form',
      status: qual ? 'qualified' : 'new',
    })

    setQualified(qual)
    setReport(diagnosticReport)
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitting) return (
    <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-charcoal/60 text-sm">Diagnosing your revenue leak…</p>
      </div>
    </div>
  )

  if (submitted && report) return (
    <div className="min-h-screen bg-[#FAF6F0] px-5 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-8">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
              report.severity_level === 'critical'
                ? 'bg-red-600/10 text-red-700'
                : report.severity_level === 'high'
                ? 'bg-orange-600/10 text-orange-700'
                : 'bg-yellow-600/10 text-yellow-700'
            }`}
          >
            {report.severity_label}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal text-center leading-tight mb-10">
          {report.headline}
        </h1>

        <div className="bg-white border border-charcoal/10 rounded-2xl shadow-sm p-6 sm:p-9 mb-8">

          <div className="space-y-6 mb-8">
            <div className="border-b border-charcoal/10 pb-5">
              <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">Monthly Spend</p>
              <p className="text-charcoal font-bold text-lg">{report.monthly_spend_range}</p>
            </div>

            <div className="border-b border-charcoal/10 pb-5">
              <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">In-House Cost</p>
              <p className="text-charcoal font-bold text-lg mb-2">
                {report.in_house_cost > 0 ? `₦${report.in_house_cost.toLocaleString('en-NG')}/mo` : 'None'}
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">{report.in_house_cost_breakdown}</p>
            </div>

            <div className="border-b border-charcoal/10 pb-5">
              <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">Clients You're Missing</p>
              <p className="text-charcoal font-bold text-lg mb-2">{report.additional_clients_needed}/month</p>
              <p className="text-charcoal/60 text-sm leading-relaxed">{report.additional_clients_breakdown}</p>
            </div>

            <div className="pb-1">
              <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">Assumed Client Value</p>
              <p className="text-charcoal font-bold text-lg mb-2">₦{report.assumed_client_value.toLocaleString('en-NG')}</p>
              <p className="text-charcoal/60 text-sm leading-relaxed">{report.assumed_client_value_breakdown}</p>
            </div>
          </div>

          <div className="border-t border-charcoal/10 pt-7 text-center mb-7 bg-[#FAF6F0] rounded-xl -mx-2 px-2 py-6">
            <p className="text-[10px] uppercase tracking-widest text-[#7B0D2A] font-bold mb-2">Total Monthly Revenue Leak</p>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#7B0D2A]">{report.total_leak_range}</p>
          </div>

          <div className="border-t border-charcoal/10 pt-6 mb-6">
            <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-3 font-bold">How We Calculated This</p>
            <p className="text-charcoal/75 leading-relaxed text-sm">{report.how_we_calculated_this}</p>
          </div>

          <p className="text-charcoal/75 leading-relaxed text-sm mb-5">{report.reality_check_paragraph}</p>
          <p className="text-charcoal/75 leading-relaxed text-sm">{report.recommendation_paragraph}</p>
        </div>

        <div className="text-center">
          <a
            href={CONTACT.discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-charcoal font-bold hover:opacity-90 transition-opacity shadow-md"
          >
            {report.cta_text}
          </a>
          <p className="mt-6 text-xs text-charcoal/40">No obligation. 30 minutes. Clear next steps either way.</p>
        </div>

      </div>
    </div>
  )

  if (submitted) return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <h1 className="font-display text-3xl font-bold text-ivory mb-4">
          Thanks for being honest.
        </h1>
        <p className="text-ivory/60 leading-relaxed mb-8">
          Based on where you are right now, a full-service retainer might not be the right fit yet — but that doesn't mean we can't help. We'll send you some resources to help you get ready, and we'd love to hear from you when the time is right.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-ivory font-semibold hover:border-gold transition-colors"
        >
          Explore Topton Media →
        </a>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 text-center">
        <a href="/">
          <img src={CONTACT.logo} alt="Topton Media" className="h-8 w-auto mx-auto" />
        </a>
      </div>

      {/* Hero text */}
      <div className="px-6 pt-6 pb-4 text-center max-w-2xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7B0D2A] mb-3">
          Quick Survey to Work With Topton Media
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.15] text-charcoal">
          Are you the kind of Business we{' '}
          <span className="text-[#C9A84C]">build empires</span> with?
        </h1>
        <p className="mt-4 text-charcoal/60 leading-relaxed">
          Quick questions. Honest answers only. If you're a fit, we'll unlock your private revenue leak report on the next page.
        </p>
      </div>

      {/* Progress bar */}
      <div className="px-6 max-w-2xl mx-auto w-full mt-2">
        <div className="flex items-center justify-between text-xs text-charcoal/40 mb-1.5">
          <span className="uppercase tracking-widest font-semibold">Qualifier</span>
          <span>{step + 1} / {total}</span>
        </div>
        <div className="w-full h-1 bg-charcoal/10 rounded-full">
          <div
            className="h-1 bg-[#C9A84C] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="flex-1 flex items-start justify-center px-6 pt-6 pb-12">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-7 sm:p-9">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-3 flex items-center gap-1.5">
            <span>✦</span> Question {step + 1} of {total - 2}
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-6 leading-snug">
            {q.question}
          </h2>

          {q.type === 'text' || q.type === 'email' ? (
            <div className="space-y-3">
              <input
                type={q.type}
                value={textVal}
                onChange={e => setTextVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleText()}
                placeholder={q.placeholder}
                autoFocus
                className="w-full border border-charcoal/20 rounded-xl px-4 py-3.5 text-charcoal text-base focus:outline-none focus:border-[#C9A84C]"
              />
              <button
                onClick={handleText}
                disabled={!textVal.trim()}
                className="w-full py-3.5 rounded-xl bg-charcoal text-ivory font-semibold text-sm disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                {step === total - 1 ? 'Get My Revenue Leak Report →' : 'Continue →'}
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {q.options?.map(opt => (
                <button
                  key={opt}
                  onClick={() => selectOption(opt)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${
                    answers[q.id] === opt
                      ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-charcoal'
                      : 'border-charcoal/15 bg-white text-charcoal/80 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${answers[q.id] === opt ? 'border-[#C9A84C] bg-[#C9A84C]' : 'border-charcoal/25'}`} />
                    {opt}
                  </span>
                </button>
              ))}
            </div>
          )}

          {step > 0 && (
            <button
              onClick={() => setStep(s => s - 1)}
              className="mt-5 text-xs text-charcoal/40 hover:text-charcoal transition-colors"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
