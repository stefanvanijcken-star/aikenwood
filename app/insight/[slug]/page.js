import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { insights } from '../../data/insights'

function toISODate(ddmmyyyy) {
  const [dd, mm, yyyy] = ddmmyyyy.split('-')
  return new Date(`${yyyy}-${mm}-${dd}`).toISOString()
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const insight = insights.find(i => i.slug === slug)
  if (!insight) return {}
  const description = insight.body.split('\n\n')[0].slice(0, 160)
  return {
    title: insight.title.replace(/\.$/, ''),
    description,
    openGraph: {
      title: insight.title,
      description,
      images: [{ url: insight.featuredImage, width: 1200, height: 630, alt: insight.title }],
      type: 'article',
      publishedTime: toISODate(insight.publishedAt),
      authors: [insight.author],
    },
    alternates: { canonical: `https://aikenwood.com/insight/${slug}` },
  }
}

export default async function InsightPage({ params }) {
  const { slug } = await params
  const insight = insights.find(i => i.slug === slug)
  if (!insight) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.body.split('\n\n')[0].slice(0, 200),
    image: `https://aikenwood.com${insight.featuredImage}`,
    datePublished: toISODate(insight.publishedAt),
    author: {
      '@type': 'Person',
      name: 'Stefan van IJcken',
      jobTitle: 'Brand Strategist',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aikenwood',
      url: 'https://aikenwood.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <div className="px-section">
        <div className="hero-image-wrap">
          <Image src={insight.featuredImage} alt={insight.title} fill style={{ objectFit: 'cover' }} priority />
        </div>
      </div>

      <div className="px-section" style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        <h1 className="text-h3" style={{ margin: 0, maxWidth: '1000px' }}>{insight.title}</h1>
        <div className="insight-meta">
          <span style={{ fontSize: '18px', lineHeight: '140%', color: '#959595' }}>
            Published on: {insight.publishedAt}
          </span>
          <span style={{ fontSize: '18px', lineHeight: '140%', color: '#959595' }}>
            Written by: {insight.author}
          </span>
        </div>
      </div>

      <div className="px-section" style={{
        paddingBottom: '48px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div className="insight-body-wrap">
          {insight.body.split('\n\n').map((paragraph, i) => (
            <p key={i} style={{ margin: 0, fontSize: '18px', lineHeight: '140%' }}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  )
}
