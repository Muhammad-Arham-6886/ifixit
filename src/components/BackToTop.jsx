import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { scrollToTop } from '../smoothScroll'

// Floating back-to-top button; its ring fills as the page is scrolled
export default function BackToTop() {
  const [show, setShow] = useState(false)
  const { scrollYProgress } = useScroll()
  const ring = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const on = () => setShow(window.scrollY > 500)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="back-to-top"
          onClick={() => scrollToTop()}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.4, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 40 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <svg className="btt-svg" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="25" className="btt-track" />
            <motion.circle cx="28" cy="28" r="25" className="btt-ring" style={{ pathLength: ring }} />
          </svg>
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
