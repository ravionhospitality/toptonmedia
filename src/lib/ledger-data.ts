export interface LedgerEntry {
  label: string
  value: string
  delta: string
  positive: boolean
}

export const LEDGER_ENTRIES: LedgerEntry[] = [
  { label: 'Installs',        value: '20K',    delta: '+85%',    positive: true  },
  { label: 'Non-organic',     value: '7,031',  delta: '+524%',   positive: true  },
  { label: 'Organic Reach',   value: '12.49K', delta: '+33%',    positive: true  },
  { label: 'Revenue',         value: '$148.8K', delta: '-11%',   positive: false },
  { label: 'ROAS (D7)',       value: '3.4x',   delta: '+257%',   positive: true  },
  { label: 'Active Users',    value: '9,378',  delta: '+23%',    positive: true  },
  { label: 'Attributions',    value: '9,237',  delta: '+152%',   positive: true  },
  { label: 'Sign-ups',        value: '4,070',  delta: '+18%',    positive: true  },
  { label: 'Cost per Install', value: '$0.42', delta: '-31%',    positive: true  },
  { label: 'Retargeting',     value: '4',      delta: '-20%',    positive: false },
]
