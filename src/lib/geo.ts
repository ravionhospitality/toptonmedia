export type Region = 'NG' | 'GB' | 'US' | 'GH' | 'KE'

export interface RegionConfig {
  currency: string
  currencySymbol: string
  currencyCode: string
  locale: string
  countryCode: string
  countryName: string
  priceMultiplier: number
  defaultPrice: number
}

export const REGION_CONFIGS: Record<Region, RegionConfig> = {
  NG: {
    currency: 'Nigerian Naira',
    currencySymbol: '₦',
    currencyCode: 'NGN',
    locale: 'en-NG',
    countryCode: 'NG',
    countryName: 'Nigeria',
    priceMultiplier: 1,
    defaultPrice: 500000,
  },
  GB: {
    currency: 'British Pound',
    currencySymbol: '£',
    currencyCode: 'GBP',
    locale: 'en-GB',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    priceMultiplier: 0.0025,
    defaultPrice: 1250,
  },
  US: {
    currency: 'US Dollar',
    currencySymbol: '$',
    currencyCode: 'USD',
    locale: 'en-US',
    countryCode: 'US',
    countryName: 'United States',
    priceMultiplier: 0.0065,
    defaultPrice: 3250,
  },
  GH: {
    currency: 'Ghanaian Cedi',
    currencySymbol: 'GH₵',
    currencyCode: 'GHS',
    locale: 'en-GH',
    countryCode: 'GH',
    countryName: 'Ghana',
    priceMultiplier: 0.082,
    defaultPrice: 41000,
  },
  KE: {
    currency: 'Kenyan Shilling',
    currencySymbol: 'KES',
    currencyCode: 'KES',
    locale: 'en-KE',
    countryCode: 'KE',
    countryName: 'Kenya',
    priceMultiplier: 0.0078,
    defaultPrice: 3900,
  },
}

export function detectRegionFromHeaders(headers: Headers | Record<string, string>): Region {
  const getHeader = (key: string) => {
    if (headers instanceof Headers) {
      return headers.get(key)
    }
    return Object.entries(headers).find(([k]) => k.toLowerCase() === key.toLowerCase())?.[1]
  }

  const cfCountry = getHeader('cf-ipcountry')
  if (cfCountry && cfCountry in REGION_CONFIGS) {
    return cfCountry as Region
  }

  const vercelCountry = getHeader('x-vercel-ip-country')
  if (vercelCountry && vercelCountry in REGION_CONFIGS) {
    return vercelCountry as Region
  }

  return 'NG'
}

export function formatPrice(price: number, region: Region): string {
  const config = REGION_CONFIGS[region]
  const localePrice = price * config.priceMultiplier
  
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.currencyCode,
    minimumFractionDigits: region === 'NG' ? 0 : 2,
  }).format(localePrice)
}

export function getRegionSlug(region: Region): string {
  if (region === 'NG') return ''
  return `/${region.toLowerCase()}`
}

export function getRegionalUrl(path: string, region: Region): string {
  const slug = getRegionSlug(region)
  return `https://toptonmedia.com${slug}${path}`
}
