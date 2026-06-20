// src/lib/services-db.ts
//
// Live Supabase-backed replacement for static service lookups.
// Converts snake_case DB rows -> the same camelCase ServiceData shape
// the rest of the site already expects, so SiteNav, cards, detail pages,
// SEO helpers etc. don't need to change at all.

import { supabase } from './supabase'
import type { ServiceData } from './services'

interface DbServiceRow {
  id: string
  slug: string
  name: string
  category: string
  pitch: string
  price_from: string
  booking_url: string
  card_image: string
  hero_image: string
  bullets: string[]
  what_it_is: string[]
  deliverables: { name: string; detail: string }[]
  pricing: { label: string; price: string; note?: string }[]
  pricing_note: string | null
  who_for: string[]
  result_stat: { label: string; value: string }
  faqs: { question: string; answer: string }[]
  seo_title: string
  seo_description: string
  featured_on_home: boolean
}

function mapRow(row: DbServiceRow): ServiceData {
  return {
    slug: row.slug,
    name: row.name,
    category: row.category,
    pitch: row.pitch,
    priceFrom: row.price_from,
    bookingUrl: row.booking_url,
    cardImage: row.card_image,
    heroImage: row.hero_image,
    bullets: row.bullets ?? [],
    whatItIs: row.what_it_is ?? [],
    deliverables: row.deliverables ?? [],
    pricing: row.pricing ?? [],
    pricingNote: row.pricing_note ?? undefined,
    whoFor: row.who_for ?? [],
    resultStat: row.result_stat ?? { label: '', value: '' },
    faqs: row.faqs ?? [],
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    featuredOnHome: row.featured_on_home,
  }
}

export async function fetchAllServices(): Promise<ServiceData[]> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('name')

  if (error) {
    console.error('Failed to fetch services:', error)
    return []
  }
  return (data as DbServiceRow[]).map(mapRow)
}

export async function fetchServiceBySlug(slug: string): Promise<ServiceData | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) return null
  return mapRow(data as DbServiceRow)
}
