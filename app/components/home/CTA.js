export default function CTA() {
  return (
    <section className="px-section" style={{
      paddingTop: '28px',
      paddingBottom: '56px',
    }}>
      <div className="cta-box">
        <h1 style={{
          color: '#ffffff',
          margin: 0,
          maxWidth: '800px',
          flex: 1,
        }}>
          {"Let's build a brand people remember."}
        </h1>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'stretch',
          gap: '8px',
          flexShrink: 0,
        }}>
          <a href="mailto:hello@aikenwood.com"
          className="btn-pill btn-pill-light"
          style={{
            fontSize: '18px',
            lineHeight: '140%',
            fontWeight: '400',
            padding: '8px 24px',
            borderRadius: '44px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>hello@aikenwood.com</a>
        </div>
      </div>
    </section>
  )
}
