const steps = [
  {
    title: '1. Research',
    description: 'Understand your market, audience, and competitors.',
  },
  {
    title: '2. Strategy',
    description: "Define your brand's purpose, positioning, and value proposition.",
  },
  {
    title: '3. Identity Design',
    description: 'Create the visual and verbal elements of your brand, such as the logo, colors, and messaging.',
  },
  {
    title: '4. Touchpoints',
    description: 'Apply the brand consistently across websites, packaging, marketing, and customer experiences.',
  },
  {
    title: '5. Brand Management',
    description: 'Maintain consistency, measure performance, and evolve the brand over time.',
  },
]

export default function BrandingProcess() {
  return (
    <section
      className="px-section process-layout"
      style={{
        backgroundColor: '#000000',
        paddingTop: '56px',
        paddingBottom: '56px',
      }}
    >
      {/* Links: titel + subtekst */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '254px' }}>
        <h3 style={{ color: '#ffffff', margin: 0 }}>The Branding Process</h3>
        <p style={{ color: '#ffffff', margin: 0 }}>
          A strong brand is built through five key steps:
        </p>
      </div>

      {/* Rechts: stappen */}
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '880px', flex: 1 }}>
        {steps.map((step, i) => (
          <div
            key={i}
            className="process-step"
            style={{
              padding: '33px 12px 32px',
              borderTop: '1px solid #2e2e2e',
            }}
          >
            <h4 style={{ color: '#ffffff', margin: 0, flex: 1 }}>{step.title}</h4>
            <p style={{ color: '#ffffff', margin: 0, flex: 1 }}>{step.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
