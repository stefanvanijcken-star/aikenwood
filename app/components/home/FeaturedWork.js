'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cases } from '../../data/cases'

export default function FeaturedWork() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [cursorType, setCursorType] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const timerRef = useRef(null)
  const progressRef = useRef(null)
  const containerRef = useRef(null)

  const startTimer = (index) => {
    clearInterval(timerRef.current)
    clearInterval(progressRef.current)
    setProgress(0)

    let elapsed = 0
    progressRef.current = setInterval(() => {
      elapsed += 50
      setProgress(elapsed / 6000)
      if (elapsed >= 6000) {
        clearInterval(progressRef.current)
      }
    }, 50)

    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % cases.length
        startTimer(next)
        return next
      })
      clearInterval(timerRef.current)
    }, 6000)
  }

  useEffect(() => {
    startTimer(0)
    return () => {
      clearInterval(timerRef.current)
      clearInterval(progressRef.current)
    }
  }, [])

  const goTo = (index) => {
    setCurrent(index)
    startTimer(index)
  }

  const prev = () => goTo((current - 1 + cases.length) % cases.length)
  const next = () => goTo((current + 1) % cases.length)

  const activeCase = cases[current]

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <section className="px-section" style={{ paddingTop: '40px', paddingBottom: '56px' }}>

      <h3 style={{ marginBottom: '32px' }}>Featured Work</h3>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursorType(null)}
        className="featured-work-container"
        style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          cursor: 'none',
          backgroundColor: '#000000',
        }}
      >
        {/* Afbeelding met zoom animatie */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={activeCase.featuredImage}
              alt={activeCase.client}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.24) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        {/* Custom cursor */}
        {cursorType && (
          <div style={{
            position: 'absolute',
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 10,
            color: '#ffffff',
            fontSize: '64px',
            fontWeight: '500',
            lineHeight: '100%',
            userSelect: 'none',
          }}>
            {cursorType === 'prev' && 'Prev'}
            {cursorType === 'next' && 'Next'}
            {cursorType === 'open' && (
              <Image src="/arrow-ne.svg" alt="Open" width={120} height={120} style={{ filter: 'invert(1)' }} />
            )}
          </div>
        )}

        {/* Klikzones */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', zIndex: 5 }}>
          <div
            style={{ flex: 1, cursor: 'none' }}
            onMouseEnter={() => setCursorType('prev')}
            onClick={prev}
          />
          <Link
            href={`/case/${activeCase.slug}`}
            style={{ flex: 1, display: 'block', cursor: 'none' }}
            onMouseEnter={() => setCursorType('open')}
          />
          <div
            style={{ flex: 1, cursor: 'none' }}
            onMouseEnter={() => setCursorType('next')}
            onClick={next}
          />
        </div>

        {/* Slide indicators */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '24px',
          right: '24px',
          display: 'flex',
          gap: '8px',
          pointerEvents: 'none',
          zIndex: 6,
        }}>
          {cases.map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '6px',
                borderRadius: '29px',
                backgroundColor: 'rgba(255,255,255,0.32)',
                backdropFilter: 'blur(5px)',
                overflow: 'hidden',
              }}
            >
              {i === current && (
                <div style={{
                  height: '100%',
                  width: `${progress * 100}%`,
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  borderRadius: '29px',
                  transition: 'width 50ms linear',
                }} />
              )}
              {i < current && (
                <div style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  borderRadius: '29px',
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Case info linksonder */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          pointerEvents: 'none',
          zIndex: 6,
        }}>
          <motion.span
            key={`client-${current}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ fontSize: '18px', lineHeight: '100%', fontWeight: '500', color: '#ffffff' }}
          >
            {activeCase.client}
          </motion.span>
          <motion.span
            key={`tagline-${current}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="featured-tagline"
          >
            {activeCase.tagline}
          </motion.span>
        </div>

      </div>
    </section>
  )
}
