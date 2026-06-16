import { TICKER_ITEMS } from '../lib/site-data'

export function ResultsTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="bg-charcoal overflow-hidden border-y border-gold/15">
      <div className="marquee-track py-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center px-8 flex-shrink-0">
            <span className="font-mono text-sm text-gold/90 tabular whitespace-nowrap">
              {item}
            </span>
            <span className="mx-8 w-1 h-1 rounded-full bg-ivory/20" />
          </div>
        ))}
      </div>
    </div>
  )
}
