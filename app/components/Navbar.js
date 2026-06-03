'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({ dark = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const color = dark ? '#ffffff' : '#000000'
  const bg = dark ? '#000000' : '#ffffff'
  const linkClass = dark ? 'nav-link-dark' : 'nav-link'

  const links = [
    { label: 'Work', href: '/cases' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="px-section" style={{
      paddingTop: '32px',
      paddingBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: bg,
      position: 'relative',
      zIndex: 50,
    }}>
      {/* Logo */}
      <Link href="/">
        <Image
          src="/aikenwood-typemark.svg"
          alt="Aikenwood"
          height={24}
          width={160}
          style={{ height: '24px', width: '160px', display: 'block', filter: dark ? 'invert(1)' : 'none' }}
        />
      </Link>

      {/* Desktop links */}
      <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={linkClass}
            style={{ fontSize: '18px', lineHeight: '140%', color, textDecoration: 'none', display: 'inline-block' }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="nav-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: color, transition: 'transform 0.3s ease', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
        <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: color, transition: 'opacity 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: color, transition: 'transform 0.3s ease', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: bg,
          padding: '24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          zIndex: 49,
        }}>
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '24px', lineHeight: '100%', color, textDecoration: 'none', fontWeight: '500' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
