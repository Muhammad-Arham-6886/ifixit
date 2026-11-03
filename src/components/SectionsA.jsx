import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiCheckCircle, FiTool, FiShield, FiClock, FiLayers, FiAward } from 'react-icons/fi'
import { TbStethoscope, TbClipboardList, TbTool, TbChecklist, TbDatabase, TbClockPlay } from 'react-icons/tb'
import { Reveal, SplitHeading, SubTitle, Counter, WipeImg, ParallaxImg } from './motion'
import { services } from '../data'

/* ---------------- About ---------------- */
export function About({ showButton = true }) {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-images">
          <WipeImg src="/images/about1.jpg" alt="Technician removing screws from a phone" className="about-img-1" />
          <WipeImg src="/images/about2.jpg" alt="Technician showing a broken smartphone" className="about-img-2" delay={0.3} />
          <motion.div
            className="about-exp"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.6 }}
          >
            <strong>
              <Counter to={15} suffix="+" />
            </strong>
            <span>Years of experience</span>
          </motion.div>
        </div>
        <div className="about-content">
          <SubTitle>About Us</SubTitle>
          <SplitHeading text="Your trusted partner in device repair solutions" accent={['trusted', 'partner']} />
          <Reveal delay={0.1}>
            <p className="lead">
              We are a leading provider of accessible, affordable device repairs. From cracked screens to dead logic
              boards, our certified technicians bring phones, tablets and laptops back to life — fast.
            </p>
          </Reveal>
          <div className="about-highlights">
            <Reveal from="up" delay={0.15} className="highlight">
              <span className="hl-icon"><FiTool /></span>
              <div>
                <h5>Custom repair solutions</h5>
                <p>Tailored fixes for every brand and model.</p>
              </div>
            </Reveal>
            <Reveal from="up" delay={0.25} className="highlight">
              <span className="hl-icon"><FiAward /></span>
              <div>
                <h5>Save up to 70%</h5>
                <p>Compared with buying new devices.</p>
              </div>
            </Reveal>
          </div>
          <ul className="check-list">
            {['Enhanced device performance', 'Support for local businesses', 'Reduction of electronic waste', 'Promotion of device longevity'].map(
              (t, i) => (
                <Reveal as="li" from="left" delay={0.1 * i} key={t}>
                  <FiCheckCircle /> {t}
                </Reveal>
              ),
            )}
          </ul>
          {showButton && (
            <Reveal delay={0.2}>
              <Link to="/about" className="btn btn-dark">
                Discover More <FiArrowUpRight />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Services ---------------- */

export function Services() {
  return (
    <section id="services" className="section services bg-soft">
      <div className="container">
        <div className="section-head center">
          <SubTitle>Our Services</SubTitle>
          <SplitHeading text="Your one-stop solution for all gadget repair needs" accent={['one-stop', 'solution']} />
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.12} className="service-card">
              <div className="service-img">
                <img src={s.img} alt={s.title} loading="lazy" />
                <span className="service-icon">{s.icon}</span>
              </div>
              <div className="service-body">
                <span className="service-no">0{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
                <Link to={`/services/${s.slug}`} className="read-more">
                  Read More <FiArrowUpRight />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="trust-bar">
          <div className="trust-avatars">
            {[1, 2, 3, 4].map((n) => (
              <img key={n} src={`/images/team${n}.jpg`} alt="" />
            ))}
          </div>
          <strong>
            Trusted by <Counter to={10000} suffix="+" /> customers
          </strong>
          <ul>
            <li><FiClock /> Same-Day Repairs</li>
            <li><FiLayers /> All Brands Covered</li>
            <li><FiShield /> 90-Day Warranty</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Why Choose Us ---------------- */
const tabs = {
  Quality: 'Every repair passes a 30-point inspection, using OEM-grade parts and calibrated tools so your device performs like new.',
  Reliability: 'Clear timelines, real-time tracking and a 90-day warranty — we do what we promise, when we promise it.',
  Sustainability: 'Repairing instead of replacing keeps tonnes of e-waste out of landfill and resources in circulation.',
  Innovation: 'Microsoldering stations, thermal imaging and advanced diagnostics let us fix what others call unfixable.',
}

export function WhyChoose() {
  const [tab, setTab] = useState('Quality')
  return (
    <section className="section why">
      <div className="container why-grid">
        <div className="why-content">
          <SubTitle>Why Choose Us</SubTitle>
          <SplitHeading text="Why customers trust our repair services" accent={['trust']} />
          <Reveal>
            <p className="lead">
              Certified technicians, advanced tools, genuine parts and quick turnaround — everything you need for a
              repair you never have to think about again.
            </p>
          </Reveal>
          <div className="why-features">
            <Reveal from="left" className="why-feature">
              <span className="hl-icon"><TbDatabase /></span>
              <div>
                <h5>Protection from data loss</h5>
                <p>At IFix It, we believe in the power of expert repair — your files stay safe.</p>
              </div>
            </Reveal>
            <Reveal from="left" delay={0.15} className="why-feature">
              <span className="hl-icon"><TbClockPlay /></span>
              <div>
                <h5>Extend device lifespan instantly</h5>
                <p>At IFix It, we believe in the power of expert repair — get years more use.</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="tabs">
            <div className="tab-btns">
              {Object.keys(tabs).map((t) => (
                <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                  {t}
                  {t === tab && <motion.span layoutId="tab-pill" className="tab-pill" />}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={tab}
                className="tab-text"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {tabs[tab]}
              </motion.p>
            </AnimatePresence>
          </Reveal>
        </div>
        <div className="why-visual">
          <ParallaxImg src="/images/why.jpg" alt="Technician fixing a computer motherboard" className="why-img" strength={60} />
          <Reveal from="right" delay={0.3} className="why-stat">
            <strong>
              <Counter to={50} suffix="%" />
            </strong>
            <span>Cost Savings vs Replacement</span>
            <div className="bar">
              <motion.span initial={{ width: 0 }} whileInView={{ width: '50%' }} viewport={{ once: true }} transition={{ duration: 2, ease: 'easeOut' }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- How it works ---------------- */
const steps = [
  { title: 'Device Diagnosis', icon: <TbStethoscope />, text: 'We run a thorough diagnostic to find the exact issue — free of charge.' },
  { title: 'Repair Planning', icon: <TbClipboardList />, text: 'You get a clear quote, timeline and parts list before any work begins.' },
  { title: 'Expert Repair', icon: <TbTool />, text: 'Certified technicians repair your device using genuine parts.' },
  { title: 'Quality Testing', icon: <TbChecklist />, text: 'Every function is stress-tested so it leaves our bench working perfectly.' },
]

export function HowItWorks() {
  return (
    <section className="section how dark-section">
      <div className="how-bg">
        <ParallaxImg src="/images/circuit.jpg" alt="" strength={120} />
      </div>
      <div className="container">
        <div className="section-head center">
          <SubTitle light>How It Works</SubTitle>
          <SplitHeading text="How we diagnose and deliver excellence" accent={['excellence']} className="light" />
        </div>
        <div className="steps">
          <motion.div
            className="steps-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.25 * i} className="step">
              <div className="step-icon">
                {s.icon}
                <span className="step-no">0{i + 1}</span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
