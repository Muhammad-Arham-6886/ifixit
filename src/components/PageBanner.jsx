import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'

// Dark title banner used at the top of every inner page
export default function PageBanner({ title, img = '/images/hero.jpg', crumbs = [] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <section className="page-banner" ref={ref}>
      <motion.div className="page-banner-bg" style={{ y }}>
        <img src={img} alt="" />
      </motion.div>
      <div className="page-banner-shade" />
      <div className="hero-grid-lines" />
      <motion.div className="container page-banner-inner" style={{ opacity: fade }}>
        <h1>
          <span className="line-mask">
            <motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
              {title}
            </motion.span>
          </span>
        </h1>
        <motion.ul className="breadcrumb" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {crumbs.map((c) => (
            <li key={c.label}>
              <FiChevronRight />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
            </li>
          ))}
          <li>
            <FiChevronRight />
            <span className="current">{title}</span>
          </li>
        </motion.ul>
      </motion.div>
    </section>
  )
}
