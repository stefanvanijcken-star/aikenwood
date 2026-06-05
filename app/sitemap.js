import { cases } from './data/cases'
import { insights } from './data/insights'

export default function sitemap() {
  const base = 'https://aikenwood.com'
  const now = new Date()

  return [
    { url: base,                  lastModified: now, changeFrequency: 'monthly', priority: 1   },
    { url: `${base}/cases`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/insights`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/contact`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    ...cases.map(c => ({
      url: `${base}/case/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...insights.map(i => ({
      url: `${base}/insight/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]
}
