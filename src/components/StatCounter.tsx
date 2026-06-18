import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string
  label: string
}

function parseValue(val: string) {
  const match = val.match(/[\d.]+/)
  return match ? parseFloat(match[0]) : 0
}

function formatValue(val: string, current: number) {
  const prefix = val.match(/^[^\d]*/)?.[0] ?? ''
  const suffix = val.match(/[^\d.]+$/)?.[0] ?? ''
  const num = parseValue(val)
  const isDecimal = val.includes('.')
  const displayed = isDecimal ? current.toFixed(1) : Math.floor(current).toString()
  return `${prefix}${displayed}${suffix}`
}

export function StatCounter({ value, label }: Props) {
  const target = parseValue(value)
  const [current, setCurrent] = useState(target) // start at final value for SSR
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current || target === 0) return
    hasAnimated.current = true
    setCurrent(0)
    const duration = 1800
    const start = performance.now()
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(eased * target)
      if (progress < 1) requestAnimationFrame(tick)
      else setCurrent(target)
    }
    requestAnimationFrame(tick)
  }, [target])

  return (
    <div className="text-center">
      <p className="font-display text-4xl sm:text-5xl font-extrabold text-gold mb-2">
        {formatValue(value, current)}
      </p>
      <p className="text-sm text-ivory/60 uppercase tracking-widest font-[Space_Grotesk]">{label}</p>
    </div>
  )
}
