'use client'
import { use, useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { cases } from '../../data/cases'

export default function CasePage({ params }) {
  const { slug } = use(params)
  const [expanded, setExpanded] = useState(false)
  const c = cases.find(c => c.slug === slug)
  if (!c) notFound()

  const sections = c.sections || []

  return (
    <main style={{ backgroundColor: '#000000' }}>
      <Navbar dark />

      {/* Hero afbeelding */}
      <div className="px-section">
        <div className="hero-image-wrap">
          <Image src={c.featuredImage} alt={c.client} fill style={{ objectFit: 'cover' }} priority />
        </div>
      </div>

      {/* Content */}
      <div className="case-content-split">

        {/* Links: titel + meta */}
        <div className="case-half" style={{ gap: '16px' }}>
          <h2 style={{ color: '#ffffff', margin: 0 }}>{c.client}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h4 style={{ color: '#ffffff', margin: 0 }}>Industry</h4>
            <p style={{ color: '#919191', margin: 0 }}>{c.industry}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h4 style={{ color: '#ffffff', margin: 0 }}>What We Did</h4>
            <p style={{ color: '#919191', margin: 0 }}>{c.services.join(', ')}</p>
          </div>
        </div>

        {/* Rechts: body tekst */}
        <div className="case-half" style={{ gap: '32px' }}>

          <h4 style={{ color: '#ffffff', margin: 0 }}>{c.description}</h4>

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {(expanded ? sections : sections.slice(0, c.previewSections || 1)).map((section, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {section.title && (
                    <h4 style={{ color: '#ffffff', margin: 0 }}>{section.title}</h4>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {section.body.split('\n\n').map((paragraph, j) => (
                      <p key={j} style={{ color: '#ffffff', margin: 0 }}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!expanded && sections.length > (c.previewSections || 1) && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '120px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)',
                pointerEvents: 'none',
              }} />
            )}
          </div>

          {sections.length > (c.previewSections || 1) && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="btn-dark"
              style={{
                alignSelf: 'flex-start',
                backgroundColor: '#353535',
                border: 'none',
                color: '#ffffff',
                fontSize: '18px',
                lineHeight: '140%',
                padding: '8px 24px',
                borderRadius: '44px',
                cursor: 'pointer',
              }}
            >
              {expanded ? 'Close' : 'More info'}
            </button>
          )}
        </div>
      </div>

      {/* Grote afbeelding */}
      {c.images[0] && (
        <div className="px-section" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <div className="hero-image-wrap">
            <Image src={c.images[0]} alt="" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      )}

      {/* Twee afbeeldingen */}
      {(c.images[1] || c.images[2]) && (
        <div className="px-section side-images-row" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          {c.images[1] && (
            <div className="side-image-wrap">
              <Image src={c.images[1]} alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          )}
          {c.images[2] && (
            <div className="side-image-wrap">
              <Image src={c.images[2]} alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          )}
        </div>
      )}

      {/* Nog twee afbeeldingen */}
      {(c.images[3] || c.images[4]) && (
        <div className="px-section side-images-row" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          {c.images[3] && (
            <div className="side-image-wrap">
              <Image src={c.images[3]} alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          )}
          {c.images[4] && (
            <div className="side-image-wrap">
              <Image src={c.images[4]} alt="" fill style={{ objectFit: 'cover' }} />
            </div>
          )}
        </div>
      )}

    </main>
  )
}
