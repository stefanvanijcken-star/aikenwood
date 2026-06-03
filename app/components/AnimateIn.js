'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimateIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}