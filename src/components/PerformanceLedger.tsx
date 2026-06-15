import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { LEDGER_ENTRIES } from '../lib/ledger-data'

export function PerformanceLedger() {
  // Duplicate the list so the scroll loop is seamless
  const entries = [...LEDGER_ENTRIES, ...LEDGER_ENTRIES]

  return (
    <div className="relative h-[420px] sm:h-[480px] overflow-hidden rounded-2xl border border-gold/20 bg-charcoal">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal z-10 pointer-events-none" />

      <div className="px-5 pt-5 pb-2 flex items-center justify-between border-b border-ivory/10 relative z-20 bg-charcoal">
        <span className="font-mono text-[11px] uppercase tracking-widest text-gold/80">
          Live Performance Ledger
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-ivory/40">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Updated continuously
        </span>
      </div>

      <div className="ledger-track">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-5 py-4 border-b border-ivory/5"
          >
            <span className="font-body text-sm text-ivory/70">{entry.label}</span>
            <div className="flex items-center gap-3 font-mono">
              <span className="text-base text-ivory tabular-nums">{entry.value}</span>
              <span
                className={`flex items-center gap-0.5 text-xs tabular-nums ${
                  entry.positive ? 'text-gold' : 'text-ivory/40'
                }`}
              >
                {entry.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {entry.delta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
