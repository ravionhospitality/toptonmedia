import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-sand">
      {faqs.map((faq, i) => {
        const open = openIndex === i
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              aria-expanded={open}
            >
              <span className="font-display text-base sm:text-lg font-medium text-charcoal group-hover:text-maroon transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-maroon transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
            >
              <p className="text-charcoal/65 leading-relaxed pr-8">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
