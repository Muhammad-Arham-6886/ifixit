import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight, FiPlus, FiMinus, FiPlay, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaStar, FaQuoteRight } from 'react-icons/fa6'
import { TbAsterisk } from 'react-icons/tb'
import { Reveal, SplitHeading, SubTitle, Counter, ParallaxImg } from './motion'
import { lockScroll } from '../smoothScroll'
import { projects as works, faqs as allFaqs, testimonials as allTestimonials } from '../data'

/* ---------------- Latest Work (horizontal scroll) ---------------- */

export function Projects() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const [dist, setDist] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -dist])

  useEffect(() => {
    const measure = () => trackRef.current && setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 48))
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-sticky">
        <div className="container projects-head">
          <div>
            <SubTitle>Latest Work</SubTitle>
            <SplitHeading text="Our recently completed latest Works" accent={['latest', 'Works']} />
          </div>
          <Reveal from="right">
            <Link to="/contact" className="btn btn-dark">
              Start Your Project <FiArrowUpRight />
            </Link>
          </Reveal>
        </div>
        <motion.div className="projects-track" ref={trackRef} style={{ x }}>
          {works.map((w, i) => (
            <Link to={`/projects/${w.slug}`} className="project-card" key={w.slug}>
              <img src={w.img} alt={w.title} loading="lazy" />
              <div className="project-info">
                <div className="project-tags">
                  {w.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <h4>{w.title}</h4>
                <span className="project-arrow">
                  <FiArrowUpRight />
                </span>
              </div>
              <span className="project-no">0{i + 1}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- CTA ---------------- */
export function CTA({ title = 'Still Have a questions?', btnText = 'Book A Repair', btnTo = '/book-a-repair' }) {
  return (
    <section className="cta">
      <ParallaxImg src="/images/cta.jpg" alt="" className="cta-bg" strength={100} />
      <div className="cta-shade" />
      <div className="container cta-inner">
        <div>
          <SplitHeading text={title} className="light" accent={['questions', 'today', 'team']} />
          <Reveal>
            <p>Our technicians are ready to help. Get a free consultation and an honest quote today.</p>
          </Reveal>
        </div>
        <Reveal from="zoom">
          <Link to={btnTo} className="btn btn-primary btn-lg">
            {btnText} <FiArrowUpRight />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- FAQ + marquee ---------------- */

export function FAQ({ items = allFaqs.slice(0, 4) }) {
  const faqs = items
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq">
      <div className="container faq-grid">
        <div className="faq-left">
          <SubTitle>FAQs</SubTitle>
          <SplitHeading text="Have questions in your mind? get the answers now" accent={['answers']} />
          <Reveal>
            <p className="lead">Can’t find what you’re looking for? Call our support team any time, 24/7.</p>
          </Reveal>
          <ParallaxImg src="/images/contact.jpg" alt="Repairman using magnifier on a smartphone" className="faq-img" strength={50} />
        </div>
        <div className="accordion">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.1} className={`acc-item ${open === i ? 'open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="acc-icon">{open === i ? <FiMinus /> : <FiPlus />}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="acc-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Marquee() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])
  const items = Array.from({ length: 8 }, (_, i) => (i % 2 ? 'Affordable Prices' : 'Expert Technicians'))
  return (
    <div className="marquee" ref={ref}>
      <motion.div className="marquee-row" style={{ x: x1 }}>
        {items.map((t, i) => (
          <span key={i}>
            {t} <TbAsterisk />
          </span>
        ))}
      </motion.div>
      <motion.div className="marquee-row outline" style={{ x: x2 }}>
        {items.map((t, i) => (
          <span key={i}>
            {t} <TbAsterisk />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ---------------- Benefits ---------------- */
export function Benefits() {
  const [video, setVideo] = useState(false)
  useEffect(() => {
    lockScroll(video)
    return () => lockScroll(false)
  }, [video])
  return (
    <section className="section benefits dark-section">
      <ParallaxImg src="/images/benefits.jpg" alt="" className="benefits-bg" strength={100} />
      <div className="benefits-shade" />
      <div className="container benefits-inner">
        <div className="benefits-left">
          <SubTitle light>Our Benefits</SubTitle>
          <SplitHeading text="Benefits of Choosing Professional Repair" className="light" accent={['Professional']} />
          <Reveal>
            <p>State-of-the-art diagnostics and genuine parts that meet the highest quality standards — every time.</p>
          </Reveal>
          <Reveal className="video-btn-wrap">
            <button className="video-btn" onClick={() => setVideo(true)} aria-label="Watch the video">
              <FiPlay />
              <span className="ripple" />
              <span className="ripple r2" />
            </button>
            <span>WATCH THE VIDEO</span>
          </Reveal>
        </div>
        <div className="benefits-counters">
          {[
            { n: 12, s: 'k+', l: 'Devices Repaired' },
            { n: 35, s: '+', l: 'Service Centers' },
            { n: 4.9, s: '/5', l: 'Customer Rating', d: 1 },
          ].map((c, i) => (
            <Reveal key={c.l} delay={i * 0.15} className="b-counter">
              <strong>
                <Counter to={c.n} suffix={c.s} decimals={c.d || 0} />
              </strong>
              <span>{c.l}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {video && (
          <motion.div className="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideo(false)}>
            <motion.div className="video-frame" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setVideo(false)} aria-label="Close video">
                <FiX />
              </button>
              <iframe
                src="https://www.youtube.com/embed/hu2CqwFM-0A?autoplay=1"
                title="Repair video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ---------------- Testimonials ---------------- */

export function Testimonials({ items = allTestimonials.slice(0, 3) }) {
  const testimonials = items
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const go = (d) => {
    setDir(d)
    setI((p) => (p + d + testimonials.length) % testimonials.length)
  }
  useEffect(() => {
    const t = setInterval(() => go(1), 6000)
    return () => clearInterval(t)
  }, [i])
  const t = testimonials[i]
  return (
    <section className="section testimonials bg-soft">
      <div className="container testi-grid">
        <div>
          <SubTitle>Testimonials</SubTitle>
          <SplitHeading text="Client feedback & success stories" accent={['success', 'stories']} />
          <Reveal className="testi-rating">
            <strong>4.9</strong>
            <div>
              <div className="stars">
                {[...Array(5)].map((_, k) => (
                  <FaStar key={k} />
                ))}
              </div>
              <span>Based on 2,500+ reviews</span>
            </div>
          </Reveal>
          <div className="testi-nav">
            <button onClick={() => go(-1)} aria-label="Previous"><FiChevronLeft /></button>
            <button onClick={() => go(1)} aria-label="Next"><FiChevronRight /></button>
          </div>
        </div>
        <Reveal from="right" className="testi-card-wrap">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              className="testi-card"
              custom={dir}
              initial={{ opacity: 0, x: dir * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -80 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <FaQuoteRight className="quote" />
              <div className="stars">
                {[...Array(5)].map((_, k) => (
                  <FaStar key={k} />
                ))}
              </div>
              <p>“{t.text}”</p>
              <div className="testi-author">
                <img src={t.img} alt={t.name} />
                <div>
                  <h5>{t.name}</h5>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="testi-dots">
            {testimonials.map((_, k) => (
              <button key={k} className={k === i ? 'active' : ''} onClick={() => { setDir(k > i ? 1 : -1); setI(k) }} aria-label={`Testimonial ${k + 1}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
