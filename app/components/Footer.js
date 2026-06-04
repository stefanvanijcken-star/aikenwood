import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="px-section" style={{ backgroundColor: '#000000', color: '#ffffff', paddingTop: '56px', paddingBottom: '56px' }}>
      <div className="footer-row">

        {/* Links: logo + contact */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/">
            <Image src="/aikenwood-typemark.svg" alt="Aikenwood" height={24} width={160} style={{ height: '24px', width: '160px', display: 'block', filter: 'invert(1)' }} />
          </Link>
          <a href="mailto:hello@aikenwood.com" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '24px', display: 'inline-block', width: 'fit-content' }}>
            hello@aikenwood.com
          </a>
          <a href="tel:+31653633797" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content' }}>
            +31 6 53633797
          </a>
        </div>

        {/* Rechts: link kolommen */}
        <div className="footer-links">

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '24px', lineHeight: '120%', fontWeight: '500' }}>Explore</span>
            <Link href="/cases" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '16px', display: 'inline-block', width: 'fit-content' }}>Work</Link>
            <Link href="/insights" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content' }}>Insights</Link>
            <Link href="/contact" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content' }}>Contact</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '24px', lineHeight: '120%', fontWeight: '500' }}>Social</span>
            <a href="https://www.linkedin.com/company/aikenwood/" target="_blank" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '16px', display: 'inline-block', width: 'fit-content' }}>LinkedIn</a>
            <a href="https://www.instagram.com/aikenwood/" target="_blank" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content' }}>Instagram</a>
            <a href="#" className="text-link" target="_blank" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content' }}>Behance</a>
            <a href="#" className="text-link" target="_blank" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content' }}>Dribbble</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '24px', lineHeight: '120%', fontWeight: '500' }}>Legal</span>
            <a href="/public/privacy_statement.pdf" target="_blank" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '16px', display: 'inline-block', width: 'fit-content' }}>Privacy Policy</a>
            <a href="#" className="text-link" target="_blank" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content', maxWidth: '100px' }}>Terms & Conditions</a>
            <a href="#" className="text-link" target="_blank" style={{ fontSize: '18px', lineHeight: '140%', color: '#919191', marginTop: '12px', display: 'inline-block', width: 'fit-content' }}>Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  )
}
