import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CONTACT } from "./router-BffqhL8K.mjs";
import { s as supabase } from "./supabase-DaC1xxvQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/@supabase/node-fetch.mjs";
import "http";
import "url";
import "https";
import "zlib";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "punycode";
import "../_libs/tr46.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/supabase__storage-js.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
function nairaMidpointFromSpendLabel(label) {
  const match = label.match(/₦([\d.]+)M[–-]₦([\d.]+)M/);
  if (match) {
    const low = parseFloat(match[1]) * 1e6;
    const high = parseFloat(match[2]) * 1e6;
    return (low + high) / 2;
  }
  const singleMatch = label.match(/₦([\d.]+)M\+/);
  if (singleMatch) {
    return parseFloat(singleMatch[1]) * 1e6 * 1.4;
  }
  const underMatch = label.match(/Under.*₦([\d,]+)/);
  if (underMatch) {
    return parseFloat(underMatch[1].replace(/,/g, "")) * 0.6;
  }
  return 8e5;
}
function inHouseCostFromTeamLabel(label) {
  if (label.includes("No —")) return 0;
  if (label.includes("One person")) return 35e4;
  if (label.includes("2–3")) return 95e4;
  if (label.includes("4+")) return 18e5;
  return 0;
}
function clientValueFromIndustry(industry) {
  const map = {
    "Fintech / Financial services": 75e4,
    "Real estate / Property": 25e5,
    "B2B services / SaaS": 12e5,
    "Healthcare / Wellness": 35e4,
    "Education / Training": 28e4,
    "Hospitality / Food & Beverage": 22e4,
    "E-commerce / Retail": 18e4
  };
  return map[industry] ?? 5e5;
}
function assumedCurrentRevenue(spendMidpoint) {
  const revenuePotential = spendMidpoint * 7;
  return revenuePotential * 0.18;
}
function severityFromLeak(leak) {
  if (leak >= 8e6) return { level: "critical", label: "REVENUE LEAK: SEVERE — NEEDS IMMEDIATE ATTENTION" };
  if (leak >= 3e6) return { level: "high", label: "REVENUE LEAK: HIGH — ACTIVE BLEEDING DETECTED" };
  return { level: "moderate", label: "REVENUE LEAK: MODERATE — SLOW BLEED IDENTIFIED" };
}
function formatNaira(amount) {
  return `₦${Math.round(amount).toLocaleString("en-NG")}`;
}
function inHouseCostBreakdown(label, cost) {
  if (cost === 0) {
    return "You told us marketing is currently just you or nobody dedicated — so there's no in-house salary cost added here. The leak above is purely from underperforming spend.";
  }
  if (label.includes("One person")) {
    return `We estimate ${formatNaira(cost)}/month for one person handling marketing — a realistic blended cost of salary, tools, and their time, whether or not the campaigns they're running are actually working.`;
  }
  if (label.includes("2–3")) {
    return `We estimate ${formatNaira(cost)}/month for a small team of 2–3 people — combined salaries, software, and ad-platform access. This is money you're paying every month regardless of output.`;
  }
  if (label.includes("4+")) {
    return `We estimate ${formatNaira(cost)}/month for a marketing team of 4 or more — combined salaries, tools, and overhead. At this size, even small inefficiencies get expensive fast.`;
  }
  return `Estimated monthly cost of your current marketing setup: ${formatNaira(cost)}.`;
}
function additionalClientsBreakdown(clients, clientValue, leak) {
  return `We divide your total monthly leak (${formatNaira(leak)}) by the average value of one client in your industry (${formatNaira(clientValue)}). That's how many paying customers you're missing out on every single month — not leads, not clicks, actual paying clients that should be in your business right now.`;
}
function clientValueBreakdown(industry, value) {
  return `Based on typical customer value in the ${industry} space, we use ${formatNaira(value)} as the average revenue a single new client is worth to a business like yours. This number anchors every other calculation in this report.`;
}
const CHALLENGE_TEMPLATES = {
  "Not enough leads or customers": (name, team) => `${name}, here's the simplest way to say it: you are paying for traffic, but that traffic isn't turning into customers — and that gap is where your money is disappearing. ${team.includes("No —") ? "Right now, nobody is watching this every single day, which means the budget keeps running on autopilot toward audiences that were never going to buy in the first place." : "Your current setup is running campaigns, but there is no system in place to catch which audiences are dead weight and kill them fast enough before they burn more cash."} This is not about working harder or posting more. It is a structural leak — the kind that keeps draining money every single month until someone closes the gap between "people see your ad" and "people pay you."`,
  "High cost per lead or acquisition": (name) => `${name}, in plain terms: you are paying full price every time someone even looks at your offer, when a properly built system would get you the same customer for a fraction of that cost. Most of that overspend comes from one thing — you keep buying brand-new, cold attention instead of capturing the people who already showed interest and almost bought. That's the leak. It's not a "spend more" problem. It's a "you're leaving cheap, ready-to-buy customers on the table" problem, and every month it continues, you're quietly paying a tax for infrastructure that simply doesn't exist yet.`,
  "Inconsistent results from campaigns": (name) => `${name}, let's be direct: a good month followed by a bad month is not luck running out — it's proof that there is no real system underneath your campaigns. When results swing wildly, it almost always means nobody is testing creative on a schedule, nobody is refreshing tired audiences before they go stale, and decisions are only being made after the damage is already visible in the numbers. That inconsistency you're feeling is the leak itself — money flowing in unpredictably because nothing is built to make it flow in reliably.`,
  "No clear strategy or direction": (name) => `${name}, here's what's really happening: money is leaving your account every month with no map guiding where it should go or what it's supposed to achieve. Spend without strategy doesn't fail with a loud crash — it fails quietly, a little bit every month, until one day the totals are simply undeniable. Without a defined channel plan and a 90-day target tied directly to revenue, every naira you spend is essentially a guess dressed up as a marketing budget. That guesswork, repeated every month, is the leak.`,
  "Tracking — I can't tell what's working": (name) => `${name}, this is, honestly, the most expensive version of this problem to have — not because the money is wasted, but because you cannot even see where it's being wasted. Without real tracking, you are making spending decisions blind: increasing budget on channels that might be doing nothing, and starving the one channel that's actually working because you can't prove it's the one carrying you. That blindness is the leak. You don't have a marketing problem right now — you have a visibility problem, and visibility problems are quietly the most expensive kind there is.`
};
function defaultChallengeTemplate(name) {
  return `${name}, in the simplest terms possible: the gap between what you're spending and what you should be making back is almost never about how hard you or your team are working. It's a structural issue in how campaigns are built, tracked, and improved week after week — and structural problems don't fix themselves. They compound, quietly, every single month they go unaddressed.`;
}
const RECOMMENDATION_TEMPLATES = [
  (name) => `${name}, here is the part that matters most: closing this gap is not about hiring "an agency to run some ads." It's about plugging in the actual growth infrastructure — the testing systems, the tracking, the creative pipeline — that should already be sitting underneath the money you're spending right now. We exist specifically to install that infrastructure and stop this exact leak. And if you already have a team in place, we don't sideline them — part of how we work includes training your existing staff so the skills stay inside your business long after the engagement starts paying for itself.`,
  (name) => `${name}, what you need next isn't a bigger budget — it's a system that finally turns the money you're already spending into a measurable, repeatable revenue engine. That's the entire difference between a business that leaks money every month and one that compounds it. We build and install that system, and we train your in-house team alongside the rollout, so the capability doesn't leave when the engagement ends — it becomes a permanent upgrade to how your business operates.`,
  (name) => `${name}, the fix here is structural, and it's exactly the kind of problem we were built to solve: replacing scattered, reactive campaign management with one accountable growth system, built around your real revenue targets — not impressions, not likes, not vanity numbers. We stop leaks like this one for a living, and we bring your existing team up to speed in the process, so this isn't just a one-time fix — it's a lasting capability inside your business.`
];
function buildExplainer(spendMidpoint, revenuePotential, currentEstimate, inHouseCost, leak) {
  return `Here's the simple math behind this number. Your current monthly spend sits around ${formatNaira(spendMidpoint)}. A properly built growth system typically returns about 7x what's spent — so at your level, that spend should be generating roughly ${formatNaira(revenuePotential)} a month. Right now, our estimate puts your actual return closer to ${formatNaira(currentEstimate)} — meaning most of that potential is slipping away before it ever becomes revenue.${inHouseCost > 0 ? ` On top of that, your current in-house marketing setup costs you about ${formatNaira(inHouseCost)} a month — money spent regardless of whether it's producing results, which we count as part of the leak.` : ""} Add it together, and you get a real, monthly number: ${formatNaira(leak)} that should be landing in your account but currently isn't.`;
}
function generateDiagnosticReport(input) {
  const spendMidpoint = nairaMidpointFromSpendLabel(input.monthlySpendRange);
  const inHouseCost = inHouseCostFromTeamLabel(input.teamAnswer);
  const assumedClientValue = clientValueFromIndustry(input.industry);
  const revenuePotential = spendMidpoint * 7;
  const currentRevenueEstimate = assumedCurrentRevenue(spendMidpoint);
  const baseLeak = Math.max(revenuePotential - currentRevenueEstimate, 0) + inHouseCost;
  const additionalClientsNeeded = Math.max(Math.round(baseLeak / assumedClientValue), 1);
  const leakLow = baseLeak * 0.995;
  const leakHigh = baseLeak * 1.005;
  const { level, label } = severityFromLeak(baseLeak);
  CHALLENGE_TEMPLATES[input.challenge] ?? defaultChallengeTemplate;
  const realityCheck = CHALLENGE_TEMPLATES[input.challenge] ? CHALLENGE_TEMPLATES[input.challenge](input.name, input.teamAnswer) : defaultChallengeTemplate(input.name);
  const recIndex = input.name.length % RECOMMENDATION_TEMPLATES.length;
  const recommendation = RECOMMENDATION_TEMPLATES[recIndex](input.name);
  const howWeCalculatedThis = buildExplainer(spendMidpoint, revenuePotential, currentRevenueEstimate, inHouseCost, baseLeak);
  const inHouseBreakdown = inHouseCostBreakdown(input.teamAnswer, inHouseCost);
  const clientsBreakdown = additionalClientsBreakdown(additionalClientsNeeded, assumedClientValue, baseLeak);
  const clientValueBreakdownText = clientValueBreakdown(input.industry, assumedClientValue);
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
    cta_text: "I Want to Stop the Revenue Leak Now →"
  };
}
const QUESTIONS = [{
  id: "budget",
  question: "What is your current monthly advertising budget across all digital channels?",
  options: ["Under $500 (~₦800,000)/month — I'm just starting", "$500–$1,500 (~₦800k–₦2.4M)/month", "$1,500–$3,000 (~₦2.4M–₦4.8M)/month", "$3,000–$10,000 (~₦4.8M–₦16M)/month", "$10,000+ (~₦16M+)/month"]
}, {
  id: "revenue",
  question: "What is your current monthly revenue?",
  options: ["Under ₦2,000,000/month", "₦2,000,000–₦5,000,000/month", "₦5,000,000–₦15,000,000/month", "₦15,000,000–₦40,000,000/month", "₦40,000,000+/month"]
}, {
  id: "goal",
  question: "What is your primary growth goal in the next 90 days?",
  options: ["Get more leads / enquiries", "Increase app installs or sign-ups", "Grow e-commerce revenue", "Build brand awareness and credibility", "Enter a new market (Nigeria or international)"]
}, {
  id: "stage",
  question: "What stage is your business at?",
  options: ["Pre-launch / idea stage", "Early stage — less than 12 months in", "Growing — 1–3 years, some revenue", "Established — 3+ years, stable revenue", "Scale-up — significant revenue, ready to grow fast"]
}, {
  id: "tried",
  question: "Have you run paid advertising before?",
  options: ["No, never tried it", "Yes, but results were disappointing", "Yes, it worked but we want to scale further", "Yes, currently running but not optimised"]
}, {
  id: "timeline",
  question: "How soon are you looking to start?",
  options: ["Immediately — within this week", "Within the next month", "1–3 months from now", "Just exploring for now"]
}, {
  id: "team",
  question: "Do you have an in-house marketing team?",
  options: ["No — marketing is currently just me or nobody", "One person handling everything", "Small team of 2–3 people", "Dedicated marketing team of 4+"]
}, {
  id: "challenge",
  question: "What is your biggest marketing challenge right now?",
  options: ["Not enough leads or customers", "High cost per lead or acquisition", "Inconsistent results from campaigns", "No clear strategy or direction", "Tracking — I can't tell what's working"]
}, {
  id: "industry",
  question: "What industry are you in?",
  options: ["Fintech / Financial services", "E-commerce / Retail", "Real estate / Property", "Healthcare / Wellness", "Education / Training", "Hospitality / Food & Beverage", "B2B services / SaaS", "Other"]
}, {
  id: "acquisition",
  question: "How do you currently get most of your clients?",
  options: ["Paid ads (Meta, Google, TikTok)", "Referrals / word of mouth", "Organic social media", "Cold outreach / sales team", "A mix of several channels"]
}, {
  id: "name",
  question: "Almost done — what should we call you?",
  type: "text",
  placeholder: "Your name"
}, {
  id: "phone",
  question: "What is your phone number?",
  type: "text",
  placeholder: "Your phone number"
}, {
  id: "email",
  question: "And the best email to send your growth blueprint to?",
  type: "email",
  placeholder: "your@email.com"
}];
function isQualified(answers) {
  const budget = answers.budget ?? "";
  const stage = answers.stage ?? "";
  const notQualified = budget.includes("just starting") || stage.includes("Pre-launch") || budget.includes("just starting") && stage.includes("Early stage");
  return !notQualified;
}
function ApplyPage() {
  const [step, setStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState({});
  const [textVal, setTextVal] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [qualified, setQualified] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [report, setReport] = reactExports.useState(null);
  const q = QUESTIONS[step];
  const total = QUESTIONS.length;
  const progress = step / total * 100;
  function selectOption(option) {
    const updated = {
      ...answers,
      [q.id]: option
    };
    setAnswers(updated);
    if (step < total - 1) {
      setTimeout(() => setStep((s) => s + 1), 280);
    }
  }
  function handleText() {
    if (!textVal.trim()) return;
    const updated = {
      ...answers,
      [q.id]: textVal.trim()
    };
    setAnswers(updated);
    setTextVal("");
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      handleSubmit(updated);
    }
  }
  async function handleSubmit(finalAnswers) {
    setSubmitting(true);
    const qual = isQualified(finalAnswers);
    const diagnosticReport = generateDiagnosticReport({
      name: finalAnswers.name ?? "there",
      industry: finalAnswers.industry ?? "Other",
      monthlySpendRange: finalAnswers.budget ?? "",
      challenge: finalAnswers.challenge ?? "",
      teamAnswer: finalAnswers.team ?? "",
      acquisitionMethod: finalAnswers.acquisition
    });
    await supabase.from("contact_submissions").insert({
      name: finalAnswers.name ?? "Unknown",
      email: finalAnswers.email ?? "",
      message: JSON.stringify({
        answers: finalAnswers,
        report: diagnosticReport
      }, null, 2),
      service: finalAnswers.goal ?? "Qualifier form",
      budget: finalAnswers.budget ?? "",
      source: "qualifier_form",
      status: qual ? "qualified" : "new"
    });
    setQualified(qual);
    setReport(diagnosticReport);
    setSubmitting(false);
    setSubmitted(true);
  }
  if (submitting) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#FAF6F0] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 text-sm", children: "Diagnosing your revenue leak…" })
  ] }) });
  if (submitted && report) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#FAF6F0] px-5 sm:px-6 py-12 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${report.severity_level === "critical" ? "bg-red-600/10 text-red-700" : report.severity_level === "high" ? "bg-orange-600/10 text-orange-700" : "bg-yellow-600/10 text-yellow-700"}`, children: report.severity_label }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-charcoal text-center leading-tight mb-10", children: report.headline }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-charcoal/10 rounded-2xl shadow-sm p-6 sm:p-9 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-charcoal/10 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-charcoal/40 mb-1", children: "Monthly Spend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal font-bold text-lg", children: report.monthly_spend_range })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-charcoal/10 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-charcoal/40 mb-1", children: "In-House Cost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal font-bold text-lg mb-2", children: report.in_house_cost > 0 ? `₦${report.in_house_cost.toLocaleString("en-NG")}/mo` : "None" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 text-sm leading-relaxed", children: report.in_house_cost_breakdown })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-charcoal/10 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-charcoal/40 mb-1", children: "Clients You're Missing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-charcoal font-bold text-lg mb-2", children: [
            report.additional_clients_needed,
            "/month"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 text-sm leading-relaxed", children: report.additional_clients_breakdown })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-charcoal/40 mb-1", children: "Assumed Client Value" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-charcoal font-bold text-lg mb-2", children: [
            "₦",
            report.assumed_client_value.toLocaleString("en-NG")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 text-sm leading-relaxed", children: report.assumed_client_value_breakdown })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-charcoal/10 pt-7 text-center mb-7 bg-[#FAF6F0] rounded-xl -mx-2 px-2 py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-[#7B0D2A] font-bold mb-2", children: "Total Monthly Revenue Leak" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl sm:text-4xl font-extrabold text-[#7B0D2A]", children: report.total_leak_range })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-charcoal/10 pt-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-charcoal/40 mb-3 font-bold", children: "How We Calculated This" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/75 leading-relaxed text-sm", children: report.how_we_calculated_this })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/75 leading-relaxed text-sm mb-5", children: report.reality_check_paragraph }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/75 leading-relaxed text-sm", children: report.recommendation_paragraph })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: CONTACT.discoveryCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-charcoal font-bold hover:opacity-90 transition-opacity shadow-md", children: report.cta_text }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-charcoal/40", children: "No obligation. 30 minutes. Clear next steps either way." })
    ] })
  ] }) });
  if (submitted) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-charcoal flex items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg w-full text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-ivory mb-4", children: "Thanks for being honest." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/60 leading-relaxed mb-8", children: "Based on where you are right now, a full-service retainer might not be the right fit yet — but that doesn't mean we can't help. We'll send you some resources to help you get ready, and we'd love to hear from you when the time is right." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-ivory font-semibold hover:border-gold transition-colors", children: "Explore Topton Media →" })
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#FAF6F0] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pt-8 pb-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: CONTACT.logo, alt: "Topton Media", className: "h-8 w-auto mx-auto" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-6 pb-4 text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-[#7B0D2A] mb-3", children: "Quick Survey to Work With Topton Media" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl font-extrabold leading-[1.15] text-charcoal", children: [
        "Are you the kind of Business we",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C9A84C]", children: "build empires" }),
        " with?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-charcoal/60 leading-relaxed", children: "Quick questions. Honest answers only. If you're a fit, we'll unlock your private revenue leak report on the next page." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 max-w-2xl mx-auto w-full mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-charcoal/40 mb-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-widest font-semibold", children: "Qualifier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          step + 1,
          " / ",
          total
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1 bg-charcoal/10 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-[#C9A84C] rounded-full transition-all duration-500", style: {
        width: `${progress}%`
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-start justify-center px-6 pt-6 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl bg-white rounded-2xl shadow-lg p-7 sm:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-3 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }),
        " Question ",
        step + 1,
        " of ",
        total - 2
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl sm:text-2xl font-bold text-charcoal mb-6 leading-snug", children: q.question }),
      q.type === "text" || q.type === "email" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: q.type, value: textVal, onChange: (e) => setTextVal(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleText(), placeholder: q.placeholder, autoFocus: true, className: "w-full border border-charcoal/20 rounded-xl px-4 py-3.5 text-charcoal text-base focus:outline-none focus:border-[#C9A84C]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleText, disabled: !textVal.trim(), className: "w-full py-3.5 rounded-xl bg-charcoal text-ivory font-semibold text-sm disabled:opacity-40 hover:opacity-90 transition-opacity", children: step === total - 1 ? "Get My Revenue Leak Report →" : "Continue →" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: q.options?.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => selectOption(opt), className: `w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${answers[q.id] === opt ? "border-[#C9A84C] bg-[#C9A84C]/10 text-charcoal" : "border-charcoal/15 bg-white text-charcoal/80 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-4 h-4 rounded-full border-2 flex-shrink-0 ${answers[q.id] === opt ? "border-[#C9A84C] bg-[#C9A84C]" : "border-charcoal/25"}` }),
        opt
      ] }) }, opt)) }),
      step > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep((s) => s - 1), className: "mt-5 text-xs text-charcoal/40 hover:text-charcoal transition-colors", children: "← Back" })
    ] }) })
  ] });
}
export {
  ApplyPage as component
};
