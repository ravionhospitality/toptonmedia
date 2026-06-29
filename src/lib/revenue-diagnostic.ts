// Revenue Diagnostic Engine
// Pure calculation + template logic — no external API calls, no cost.

export interface DiagnosticInput {
  name: string
  industry: string
  monthlySpendRange: string // raw label from the form, e.g. "$1,500–$3,000 (~₦2.4M–₦4.8M)/month"
  challenge: string
  teamAnswer: string // raw label from the form
  acquisitionMethod?: string
}

export interface DiagnosticReport {
  severity_label: string
  severity_level: 'critical' | 'high' | 'moderate'
  headline: string
  monthly_spend_range: string
  in_house_cost: number
  in_house_cost_breakdown: string
  revenue_leak_amount: number
  additional_clients_needed: number
  additional_clients_breakdown: string
  assumed_client_value: number
  assumed_client_value_breakdown: string
  total_leak_range: string
  how_we_calculated_this: string
  reality_check_paragraph: string
  recommendation_paragraph: string
  cta_text: string
}

// ---- Helpers ----

function nairaMidpointFromSpendLabel(label: string): number {
  // Pulls the ₦ range out of labels like "$1,500–$3,000 (~₦2.4M–₦4.8M)/month"
  // and returns the midpoint in naira.
  const match = label.match(/₦([\d.]+)M[–-]₦([\d.]+)M/)
  if (match) {
    const low = parseFloat(match[1]) * 1_000_000
    const high = parseFloat(match[2]) * 1_000_000
    return (low + high) / 2
  }
  const singleMatch = label.match(/₦([\d.]+)M\+/)
  if (singleMatch) {
    // "10,000+ (~₦16M+)" — treat as a floor, assume 1.4x as a reasonable midpoint
    return parseFloat(singleMatch[1]) * 1_000_000 * 1.4
  }
  const underMatch = label.match(/Under.*₦([\d,]+)/)
  if (underMatch) {
    return parseFloat(underMatch[1].replace(/,/g, '')) * 0.6
  }
  // Fallback — assume a modest spend if parsing fails
  return 800_000
}

function inHouseCostFromTeamLabel(label: string): number {
  if (label.includes('No —')) return 0
  if (label.includes('One person')) return 350_000
  if (label.includes('2–3')) return 950_000
  if (label.includes('4+')) return 1_800_000
  return 0
}

function clientValueFromIndustry(industry: string): number {
  const map: Record<string, number> = {
    'Fintech / Financial services': 750_000,
    'Real estate / Property': 2_500_000,
    'B2B services / SaaS': 1_200_000,
    'Healthcare / Wellness': 350_000,
    'Education / Training': 280_000,
    'Hospitality / Food & Beverage': 220_000,
    'E-commerce / Retail': 180_000,
  }
  return map[industry] ?? 500_000
}

function assumedCurrentRevenue(spendMidpoint: number): number {
  // Without an explicit "current revenue" answer, we assume the business is
  // currently converting at only ~18% of its true 7x potential. In plain terms:
  // for every ₦100 they SHOULD be making from their spend, they're only seeing
  // about ₦18 of it. The other ₦82 is the leak — money already being spent,
  // already attracting traffic, but evaporating before it becomes revenue.
  const revenuePotential = spendMidpoint * 7
  return revenuePotential * 0.18
}

function severityFromLeak(leak: number): { level: DiagnosticReport['severity_level']; label: string } {
  if (leak >= 8_000_000) return { level: 'critical', label: 'REVENUE LEAK: SEVERE — NEEDS IMMEDIATE ATTENTION' }
  if (leak >= 3_000_000) return { level: 'high', label: 'REVENUE LEAK: HIGH — ACTIVE BLEEDING DETECTED' }
  return { level: 'moderate', label: 'REVENUE LEAK: MODERATE — SLOW BLEED IDENTIFIED' }
}

function formatNaira(amount: number): string {
  return `₦${Math.round(amount).toLocaleString('en-NG')}`
}

function inHouseCostBreakdown(label: string, cost: number): string {
  if (cost === 0) {
    return "You told us marketing is currently just you or nobody dedicated — so there's no in-house salary cost added here. The leak above is purely from underperforming spend."
  }
  if (label.includes('One person')) {
    return `We estimate ${formatNaira(cost)}/month for one person handling marketing — a realistic blended cost of salary, tools, and their time, whether or not the campaigns they're running are actually working.`
  }
  if (label.includes('2–3')) {
    return `We estimate ${formatNaira(cost)}/month for a small team of 2–3 people — combined salaries, software, and ad-platform access. This is money you're paying every month regardless of output.`
  }
  if (label.includes('4+')) {
    return `We estimate ${formatNaira(cost)}/month for a marketing team of 4 or more — combined salaries, tools, and overhead. At this size, even small inefficiencies get expensive fast.`
  }
  return `Estimated monthly cost of your current marketing setup: ${formatNaira(cost)}.`
}

function additionalClientsBreakdown(clients: number, clientValue: number, leak: number): string {
  return `We divide your total monthly leak (${formatNaira(leak)}) by the average value of one client in your industry (${formatNaira(clientValue)}). That's how many paying customers you're missing out on every single month — not leads, not clicks, actual paying clients that should be in your business right now.`
}

function clientValueBreakdown(industry: string, value: number): string {
  return `Based on typical customer value in the ${industry} space, we use ${formatNaira(value)} as the average revenue a single new client is worth to a business like yours. This number anchors every other calculation in this report.`
}

// ---- Reality check paragraph templates, keyed by challenge ----

const CHALLENGE_TEMPLATES: Record<string, (name: string, teamLabel: string) => string> = {
  'Not enough leads or customers': (name, team) =>
    `${name}, here's the simplest way to say it: you are paying for traffic, but that traffic isn't turning into customers — and that gap is where your money is disappearing. ${
      team.includes('No —')
        ? "Right now, nobody is watching this every single day, which means the budget keeps running on autopilot toward audiences that were never going to buy in the first place."
        : 'Your current setup is running campaigns, but there is no system in place to catch which audiences are dead weight and kill them fast enough before they burn more cash.'
    } This is not about working harder or posting more. It is a structural leak — the kind that keeps draining money every single month until someone closes the gap between "people see your ad" and "people pay you."`,

  'High cost per lead or acquisition': (name) =>
    `${name}, in plain terms: you are paying full price every time someone even looks at your offer, when a properly built system would get you the same customer for a fraction of that cost. Most of that overspend comes from one thing — you keep buying brand-new, cold attention instead of capturing the people who already showed interest and almost bought. That's the leak. It's not a "spend more" problem. It's a "you're leaving cheap, ready-to-buy customers on the table" problem, and every month it continues, you're quietly paying a tax for infrastructure that simply doesn't exist yet.`,

  'Inconsistent results from campaigns': (name) =>
    `${name}, let's be direct: a good month followed by a bad month is not luck running out — it's proof that there is no real system underneath your campaigns. When results swing wildly, it almost always means nobody is testing creative on a schedule, nobody is refreshing tired audiences before they go stale, and decisions are only being made after the damage is already visible in the numbers. That inconsistency you're feeling is the leak itself — money flowing in unpredictably because nothing is built to make it flow in reliably.`,

  'No clear strategy or direction': (name) =>
    `${name}, here's what's really happening: money is leaving your account every month with no map guiding where it should go or what it's supposed to achieve. Spend without strategy doesn't fail with a loud crash — it fails quietly, a little bit every month, until one day the totals are simply undeniable. Without a defined channel plan and a 90-day target tied directly to revenue, every naira you spend is essentially a guess dressed up as a marketing budget. That guesswork, repeated every month, is the leak.`,

  "Tracking — I can't tell what's working": (name) =>
    `${name}, this is, honestly, the most expensive version of this problem to have — not because the money is wasted, but because you cannot even see where it's being wasted. Without real tracking, you are making spending decisions blind: increasing budget on channels that might be doing nothing, and starving the one channel that's actually working because you can't prove it's the one carrying you. That blindness is the leak. You don't have a marketing problem right now — you have a visibility problem, and visibility problems are quietly the most expensive kind there is.`,
}

function defaultChallengeTemplate(name: string): string {
  return `${name}, in the simplest terms possible: the gap between what you're spending and what you should be making back is almost never about how hard you or your team are working. It's a structural issue in how campaigns are built, tracked, and improved week after week — and structural problems don't fix themselves. They compound, quietly, every single month they go unaddressed.`
}

const RECOMMENDATION_TEMPLATES = [
  (name: string) =>
    `${name}, here is the part that matters most: closing this gap is not about hiring "an agency to run some ads." It's about plugging in the actual growth infrastructure — the testing systems, the tracking, the creative pipeline — that should already be sitting underneath the money you're spending right now. We exist specifically to install that infrastructure and stop this exact leak. And if you already have a team in place, we don't sideline them — part of how we work includes training your existing staff so the skills stay inside your business long after the engagement starts paying for itself.`,
  (name: string) =>
    `${name}, what you need next isn't a bigger budget — it's a system that finally turns the money you're already spending into a measurable, repeatable revenue engine. That's the entire difference between a business that leaks money every month and one that compounds it. We build and install that system, and we train your in-house team alongside the rollout, so the capability doesn't leave when the engagement ends — it becomes a permanent upgrade to how your business operates.`,
  (name: string) =>
    `${name}, the fix here is structural, and it's exactly the kind of problem we were built to solve: replacing scattered, reactive campaign management with one accountable growth system, built around your real revenue targets — not impressions, not likes, not vanity numbers. We stop leaks like this one for a living, and we bring your existing team up to speed in the process, so this isn't just a one-time fix — it's a lasting capability inside your business.`,
]

function buildExplainer(spendMidpoint: number, revenuePotential: number, currentEstimate: number, inHouseCost: number, leak: number): string {
  return `Here's the simple math behind this number. Your current monthly spend sits around ${formatNaira(spendMidpoint)}. A properly built growth system typically returns about 7x what's spent — so at your level, that spend should be generating roughly ${formatNaira(revenuePotential)} a month. Right now, our estimate puts your actual return closer to ${formatNaira(currentEstimate)} — meaning most of that potential is slipping away before it ever becomes revenue.${inHouseCost > 0 ? ` On top of that, your current in-house marketing setup costs you about ${formatNaira(inHouseCost)} a month — money spent regardless of whether it's producing results, which we count as part of the leak.` : ''} Add it together, and you get a real, monthly number: ${formatNaira(leak)} that should be landing in your account but currently isn't.`
}

export function generateDiagnosticReport(input: DiagnosticInput): DiagnosticReport {
  const spendMidpoint = nairaMidpointFromSpendLabel(input.monthlySpendRange)
  const inHouseCost = inHouseCostFromTeamLabel(input.teamAnswer)
  const assumedClientValue = clientValueFromIndustry(input.industry)

  const revenuePotential = spendMidpoint * 7
  const currentRevenueEstimate = assumedCurrentRevenue(spendMidpoint)

  const baseLeak = Math.max(revenuePotential - currentRevenueEstimate, 0) + inHouseCost
  const additionalClientsNeeded = Math.max(Math.round(baseLeak / assumedClientValue), 1)

  const leakLow = baseLeak * 0.995
  const leakHigh = baseLeak * 1.005

  const { level, label } = severityFromLeak(baseLeak)

  const template = CHALLENGE_TEMPLATES[input.challenge] ?? defaultChallengeTemplate
  const realityCheck = CHALLENGE_TEMPLATES[input.challenge]
    ? CHALLENGE_TEMPLATES[input.challenge](input.name, input.teamAnswer)
    : defaultChallengeTemplate(input.name)

  const recIndex = input.name.length % RECOMMENDATION_TEMPLATES.length
  const recommendation = RECOMMENDATION_TEMPLATES[recIndex](input.name)

  const howWeCalculatedThis = buildExplainer(spendMidpoint, revenuePotential, currentRevenueEstimate, inHouseCost, baseLeak)
  const inHouseBreakdown = inHouseCostBreakdown(input.teamAnswer, inHouseCost)
  const clientsBreakdown = additionalClientsBreakdown(additionalClientsNeeded, assumedClientValue, baseLeak)
  const clientValueBreakdownText = clientValueBreakdown(input.industry, assumedClientValue)

  return {
    severity_label: label,
    severity_level: level,
    headline: `${input.name}, your business is losing ${formatNaira(leakLow)} – ${formatNaira(leakHigh)} every single month — and it's avoidable`,
    monthly_spend_range: input.monthlySpendRange,
    in_house_cost: inHouseCost,
    in_house_cost_breakdown: inHouseBreakdown,
    revenue_leak_amount: Math.round(baseLeak),
    additional_clients_needed: additionalClientsNeeded,
    additional_clients_breakdown: clientsBreakdown,
    assumed_client_value: assumedClientValue,
    assumed_client_value_breakdown: clientValueBreakdownText,
    total_leak_range: `${formatNaira(leakLow)} – ${formatNaira(leakHigh)}`,
    how_we_calculated_this: howWeCalculatedThis,
    reality_check_paragraph: realityCheck,
    recommendation_paragraph: recommendation,
    cta_text: 'I Want to Stop the Revenue Leak Now →',
  }
}
