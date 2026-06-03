import Link from 'next/link'

export default function Hero() {
  return (
    <section className="px-section" style={{ paddingTop: '56px', paddingBottom: '56px' }}>

      <h1 style={{ maxWidth: '800px' }}>
        Building brands that lead markets.
      </h1>

      <div style={{
        height: '2px',
        backgroundColor: 'rgba(0,0,0,0.33)',
        marginTop: '40px',
        marginBottom: '40px'
      }} />

      <div className="hero-bottom">
        <p className="hero-desc">
          Aikenwood is a brand strategy consultancy that helps companies grow through strategic branding.
        </p>
        <Link
          href="/contact"
          className="btn-pill"
          style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            fontSize: '18px',
            lineHeight: '140%',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '8px',
            paddingBottom: '8px',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Start a project
        </Link>
      </div>

    </section>
  )
}
