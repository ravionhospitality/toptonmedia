export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  relatedService: string
  date: string
  readMinutes: number
  heroImage: string
  excerpt: string
  quickAnswer?: string
  keywords: string[]
  content: BlogSection[]
  faqs: { question: string; answer: string }[]
}

export interface BlogSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}
