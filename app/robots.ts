import { MetadataRoute } from 'next'
import { feedConfig } from '@/lib/feedConfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${feedConfig.siteUrl}/sitemap.xml`,
  }
} 