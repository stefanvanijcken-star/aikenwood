'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const isValid = agreed && form.firstName && form.lastName && form.email && form.message

  const handleSubmit = async () => {
    if (!isValid) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    height: '40px',
    border: 'none',
    borderBottom: '1px solid #959595',
    backgroundColor: '#ffffff',
    fontSize: '18px',
    lineHeight: '140%',
    fontFamily: 'inherit',
    outline: 'none',
    padding: '0',
  }

  const labelStyle = {
    fontSize: '18px',
    lineHeight: '140%',
    color: '#959595',
  }

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="px-section" style={{
        paddingTop: '56px',
        paddingBottom: '56px',
      }}>
        <div className="page-header">
          <h3 style={{ margin: 0 }}>Contact</h3>
          <p style={{ margin: 0, maxWidth: '620px' }}>
            {"Whether you're building a new brand, repositioning an existing one or preparing for your next stage of growth, we'd love to hear from you."}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-section contact-split" style={{
        paddingTop: '56px',
        paddingBottom: '56px',
      }}>

        {/* Links: contact info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={labelStyle}>Email</span>
            <a href="mailto:hello@aikenwood.com" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#000000', textDecoration: 'none' }}>
              hello@aikenwood.com
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={labelStyle}>Phone</span>
            <a href="tel:+31653633797" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#000000', textDecoration: 'none' }}>
              +31 6 53633797
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={labelStyle}>LinkedIn</span>
            <a href="https://www.linkedin.com/company/aikenwood/" target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: '18px', lineHeight: '140%', color: '#000000', textDecoration: 'none' }}>
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Rechts: formulier of succes */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {submitted ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              minHeight: '300px',
            }}>
              <h4 style={{ margin: 0 }}>Your message has successfully been sent.</h4>
              <p style={{ margin: 0, color: '#959595' }}>
                We strive to respond to your message within 2-4 business days.
              </p>
            </div>
          ) : (
            <>
              {/* Naam rij */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={labelStyle}>First name</span>
                  <input name="firstName" value={form.firstName} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={labelStyle}>Last name</span>
                  <input name="lastName" value={form.lastName} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={labelStyle}>Email</span>
                <input name="email" value={form.email} onChange={handleChange} style={inputStyle} />
              </div>

              {/* Company + job */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span className="contact-label-align" style={labelStyle}>Company name (optional)</span>
                  <input name="company" value={form.company} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span className="contact-label-align" style={labelStyle}>Job title (optional)</span>
                  <input name="jobTitle" value={form.jobTitle} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

              {/* Bericht */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={labelStyle}>Write your message here</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    minHeight: '160px',
                    border: 'none',
                    borderBottom: '1px solid #959595',
                    backgroundColor: '#F3F3F3',
                    fontSize: '18px',
                    lineHeight: '140%',
                    fontFamily: 'inherit',
                    outline: 'none',
                    padding: '12px',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Checkbox */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  style={{
                    width: '24px',
                    height: '24px',
                    border: '1px solid #959595',
                    borderRadius: '4px',
                    accentColor: '#000000',
                    flexShrink: 0,
                    cursor: 'pointer',
                  }}
                />
                <span style={{ fontSize: '18px', lineHeight: '140%' }}>
                  I understand and agree to the{' '}
                  <a href="#" style={{ color: '#000000' }}>terms of submission</a>
                  {' '}&{' '}
                  <a href="#" style={{ color: '#000000' }}>data processing</a>.
                </span>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="btn-pill"
                disabled={!isValid || loading}
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  fontSize: '18px',
                  lineHeight: '140%',
                  padding: '8px 24px',
                  borderRadius: '44px',
                  border: 'none',
                  cursor: isValid && !loading ? 'pointer' : 'not-allowed',
                  opacity: isValid && !loading ? 1 : 0.4,
                  transition: 'opacity 0.2s ease',
                  fontFamily: 'inherit',
                }}
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
