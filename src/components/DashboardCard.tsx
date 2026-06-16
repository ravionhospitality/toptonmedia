import { ArrowUpRight } from 'lucide-react'

const METRICS = [
  { label: 'ROAS',  value: '4.2x',    delta: '+38%' },
  { label: 'CAC',   value: '\u20a61,240', delta: '-22%' },
  { label: 'Leads', value: '1,847',   delta: '+64%' },
]

export function DashboardCard() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />

      <div className="relative bg-cardbrown border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <span className="font-[Space_Grotesk] text-[11px] uppercase tracking-[0.12em] text-gold/80">
            Campaign Performance
          </span>
          <span className="flex items-center gap-1.5 font-[Space_Grotesk] text-[11px] text-ivory/40">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Live
          </span>
        </div>

        <div className="space-y-5">
          {METRICS.map(metric => (
            <div key={metric.label} className="flex items-center justify-between">
              <span className="text-sm text-ivory/60">{metric.label}</span>
              <div className="flex items-center gap-3">
                <span className="font-[Space_Grotesk] text-2xl sm:text-3xl text-ivory tabular">
                  {metric.value}
                </span>
                <span className="flex items-center gap-0.5 font-[Space_Grotesk] text-xs text-gold tabular">
                  <ArrowUpRight size={12} />
                  {metric.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-ivory/10">
          <div className="flex items-end gap-1 h-12">
            {[40, 65, 50, 75, 60, 85, 70, 95, 80, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gold/30 rounded-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
