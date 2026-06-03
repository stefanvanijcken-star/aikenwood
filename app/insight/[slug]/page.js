import { use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { insights } from '../../data/insights'

export default function InsightPage({ params }) {
  const { slug } = use(params)
  const insight = insights.find(i => i.slug === slug)
  if (!insight) notFound()

  return (
    <>
      <Navbar />

      {/* Hero afbeelding */}
      <div className="px-section">
        <div className="hero-image-wrap">
          <Image src={insight.featuredImage} alt={insight.title} fill style={{ objectFit: 'cover' }} priority />
        </div>
      </div>

      {/* Titel + meta */}
      <div className="px-section" style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        <h3 style={{ margin: 0, maxWidth: '1000px' }}>{insight.title}</h3>
        <div className="insight-meta">
          <span style={{ fontSize: '18px', lineHeight: '140%', color: '#959595' }}>
            Published on: {insight.publishedAt}
          </span>
          <span style={{ fontSize: '18px', lineHeight: '140%', color: '#959595' }}>
            Written by: {insight.author}
          </span>
        </div>
      </div>

      {/* Body tekst */}
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
