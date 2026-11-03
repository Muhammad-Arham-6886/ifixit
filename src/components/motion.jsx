import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, animate } from 'framer-motion'

const dirs = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: -70 },
  right: { x: 70 },
  zoom: { scale: 0.85 },
  none: {},
}

// Fades + slides children in once they scroll into view
export function Reveal({ children, from = 'up', delay = 0, duration = 0.8, className, as = 'div', ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...dirs[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Heading whose words rise up one after another
export function SplitHeading({ text, as = 'h2', className = '', accent }) {
  const Tag = motion[as]
  const words = text.split(' ')
  return (
    <Tag
      className={`split-heading ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.06 }}
    >
      {words.map((w, i) => (
        <span className="word-mask" key={i}>
          <motion.span
            className={accent && accent.includes(w.replace(/[.,?]/g, '')) ? 'accent' : undefined}
            variants={{
              hidden: { y: '110%', rotate: 4 },
              show: { y: '0%', rotate: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export function SubTitle({ children, light }) {
  return (
    <Reveal from="up" className={`sub-title ${light ? 'light' : ''}`}>
      <span className="sub-dot" />
      {children}
    </Reveal>
  )
}

// Counts up from 0 when visible
export function Counter({ to, suffix = '', duration = 2.2, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setVal(v) })
    return () => c.stop()
  }, [inView, to, duration])
  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

// Image that drifts vertically against the scroll direction
export function ParallaxImg({ src, alt = '', className = '', strength = 80 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])
  return (
    <div ref={ref} className={`parallax-wrap ${className}`}>
      <motion.img src={src} alt={alt} style={{ y, scale: 1.25 }} loading="lazy" />
    </div>
  )
}

// Image revealed by a wipe as it enters view (observer sits on the unclipped wrapper)
export function WipeImg({ src, alt = '', className = '', delay = 0 }) {
  const ease = [0.77, 0, 0.18, 1]
  return (
    <motion.div className={`wipe-img ${className}`} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
      <motion.div
        className="wipe-inner"
        variants={{ hidden: { clipPath: 'inset(0 100% 0 0)' }, show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.2, delay, ease } } }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          variants={{ hidden: { scale: 1.3 }, show: { scale: 1, transition: { duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] } } }}
        />
      </motion.div>
    </motion.div>
  )
}
