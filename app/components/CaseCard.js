'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CaseCard({ c }) {
  const [hovered, setHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Link
        href={`/case/${c.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="case-card-link"
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '24px',
          display: 'block',
          cursor: 'none',
          overflow: 'visible',
          zIndex: hovered ? 100 : 'auto',
        }}
      >
        {hovered && (
          <div style={{
            position: 'absolute',
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 100,
          }}>
            <Image src="/arrow-ne.svg" alt="Open" width={80} height={80} style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
        )}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '24px', overflow: 'hidden' }}>
          <Image src={c.featuredImage} alt={c.client} fill style={{ objectFit: 'cover' }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#000000',
            opacity: hovered ? 0.15 : 0,
            transition: 'opacity 0.25s ease',
          }} />
        </div>
      </Link>

      <Link
        href={`/case/${c.slug}`}
        style={{
          paddingTop: '24px',
          paddingBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '18px', lineHeight: '100%', fontWeight: '500' }}>{c.client}</span>
          <h3 style={{ margin: 0 }}>{c.tagline}</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {c.tags.map((tag, index) => (
            <span key={tag} style={{
              fontSize: '14px',
              lineHeight: '140%',
              color: '#959595',
              border: '1px solid #959595',
              borderRadius: index === 0 ? '0px' : '44px',
              padding: '4px 16px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}
