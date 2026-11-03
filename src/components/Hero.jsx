import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight, FiCheck, FiActivity, FiDollarSign, FiEye, FiCpu } from 'react-icons/fi'
import { TbCertificate, TbShieldCheck } from 'react-icons/tb'
import { Counter } from './motion'

const features = [
  { icon: <FiActivity />, text: 'Real time service tracking' },
  { icon: <FiDollarSign />, text: 'Instant repair cost estimates' },
  { icon: <FiEye />, text: 'Transparent pricing no hidden' },
  { icon: <FiCpu />, text: 'Advanced diagnostic tools used' },
]

const lines = ['Expert repairs.', 'fast turnaround.', 'trusted results.']

export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const anim = ready ? 'show' : 'hidden'

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ y: imgY, scale: imgScale }}>
        <img src="/images/hero.jpg" alt="Technician repairing a smartphone motherboard" />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-grid-lines" />

      <div className="container hero-inner">
        <motion.div className="hero-content" style={{ y: textY, opacity: fade }}>
          <motion.div
            className="sub-title light"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="sub-dot" /> Welcome to IFix It
          </motion.div>
          <motion.h1 initial="hidden" animate={anim} transition={{ staggerChildren: 0.18, delayChildren: 0.3 }}>
            {lines.map((l, i) => (
              <span className="line-mask" key={l}>
                <motion.span
                  className={i === 1 ? 'accent' : undefined}
                  variants={{
                    hidden: { y: '110%' },
                    show: { y: '0%', transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 40 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link to="/track-your-repair" className="btn btn-primary btn-lg">
              Track Your Repair <FiArrowUpRight />
            </Link>
            <p>
              Professional computer and mobile repairs that restore your devices quickly, affordably and reliably.
            </p>
          </motion.div>

          <motion.div
            className="hero-badges"
            initial={{ opacity: 0, y: 40 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="badge-item">
              <TbCertificate />
              <div>
                <strong>ISO 9001 Certified</strong>
                <span>Quality management system</span>
              </div>
            </div>
            <div className="badge-item">
              <TbShieldCheck />
              <div>
                <strong>UL Listed</strong>
                <span>Electrical safety</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-counter"
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ delay: 1.3, type: 'spring', stiffness: 120, damping: 14 }}
        >
          <svg className="spin-text" viewBox="0 0 200 200">
            <defs>
              <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#circle">• FAST • RELIABLE • CERTIFIED • GENUINE PARTS </textPath>
            </text>
          </svg>
          <div className="hero-counter-inner">
            <strong>
              <Counter to={25} suffix="k+" />
            </strong>
            <span>Successful Repairs</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-features">
        <div className="container hero-features-inner">
          {features.map((f, i) => (
            <motion.div
              className="hero-feature"
              key={f.text}
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 + i * 0.12 }}
            >
              <span className="hf-icon">{f.icon}</span>
              <span>{f.text}</span>
              <FiCheck className="hf-check" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
