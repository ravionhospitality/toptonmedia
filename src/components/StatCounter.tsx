import { useEffect, useState } from 'react'
import { useReveal } from '../lib/useReveal'

interface StatCounterProps {
  value: string
  label: string
}

// Parses values like "40+", "₦500M+", "4.2x", "8+"
function parseValue(value: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = value.match(/^([^\d.]*)([\d.]+)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: value, decimals: 0 }
  const [, prefix, numStr, suffix] = match
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return { prefix, number: parseFloat(numStr), suffix, decimals }
}

export function StatCounter({ value, label }: StatCounterProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [current, setCurrent] = useState(0)
  const { prefix, number, suffix, decimals } = parseValue(value)

  useEffect(() => {
    if (!visible) return
    const duration = 1400
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(number * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [visible, number])

  const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl sm:text-5xl font-extrabold text-ivory tabular">
        {prefix}{display}{suffix}
      </p>
      <p className="mt-2 text-sm text-ivory/60">{label}</p>
    </div>
  )
}
