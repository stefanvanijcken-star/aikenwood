import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { insights } from '../data/insights'

function InsightCard({ insight }) {
  return (
    <Link
      href={`/insight/${insight.slug}`}
      className="card-hover"
      style={{
        flex: 1,
        backgroundColor: '#F3F3F3',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '211px', borderRadius: '24px 24px 0 0', overflow: 'hidden' }}>
        <Image src={insight.featuredImage} alt={insight.title} fill style={{ objectFit: 'cover' }} />
        <div className="card-overlay" style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000000',
          transition: 'opacity 0.25s ease',
        }} />
      </div>
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: 0 }}>{insight.title}</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '14px',
            lineHeight: '140%',
            color: '#959595',
            border: '1px solid #959595',
            borderRadius: '0px',
            padding: '4px 16px',
          }}>
            {insight.category}
          </span>
          <span style={{
            fontSize: '14px',
            lineHeight: '140%',
            color: '#959595',
            border: '1px solid #959595',
            borderRadius: '44px',
            padding: '4px 16px',
          }}>
            {insight.readTime}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function Insights() {
  const rows = []
  for (let i = 0; i < insights.length; i += 3) {
    rows.push(insights.slice(i, i + 3))
  }

  return (
    <>
      <Navbar />
      <main className="px-section" style={{
        paddingTop: '56px',
        paddingBottom: '56px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        <h3 style={{ margin: 0 }}>Insights</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {rows.map((row, i) => (
            <div key={i} className="insight-cards-row">
              {row.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
