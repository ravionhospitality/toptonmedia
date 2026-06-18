import type { BlogPost } from './blog-types'
import { BLOG_POSTS_BATCH_1 } from './blog-posts-batch1'
import { BLOG_POSTS_BATCH_2 } from './blog-posts-batch2'
import { BLOG_POSTS_BATCH_3 } from './blog-posts-batch3'
import { BLOG_POSTS_BATCH_4 } from './blog-posts-batch4'
import { BLOG_POSTS_BATCH_5 } from './blog-posts-batch5'
import { BLOG_POSTS_BATCH_6 } from './blog-posts-batch6'

export const BLOG_POSTS: BlogPost[] = [
  ...BLOG_POSTS_BATCH_1,
  ...BLOG_POSTS_BATCH_2,
  ...BLOG_POSTS_BATCH_3,
  ...BLOG_POSTS_BATCH_4,
  ...BLOG_POSTS_BATCH_5,
  ...BLOG_POSTS_BATCH_6,
]

export const BLOG_CATEGORIES = [
  'All',
  'User Acquisition',
  'Lead Generation',
  'Performance Marketing',
  'Web Design & CRO',
  'Social Media Management',
  'PR & Communications',
  'Market Activations',
  'Printing Services',
  'Branded Corporate Gifts',
  'Brand Strategy & Creative',
  'Media Production',
  'Training & Workshops',
  'Africa Market Entry',
  'Email & CRM Marketing',
  'SEO',
] as const

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}

export function getPostsByService(serviceSlug: string): BlogPost[] {
  return BLOG_POSTS.filter(p => p.relatedService === serviceSlug)
}

export function getRelatedPosts(currentSlug: string, serviceSlug: string, limit = 3): BlogPost[] {
  return BLOG_POSTS
    .filter(p => p.slug !== currentSlug && p.relatedService === serviceSlug)
    .slice(0, limit)
}
