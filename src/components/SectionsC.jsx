import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheck, FiPhoneCall, FiMail, FiMapPin, FiSend, FiCalendar } from 'react-icons/fi'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { SiApple, SiSamsung, SiSony, SiDell, SiLenovo, SiHuawei, SiXiaomi } from 'react-icons/si'
import { Reveal, SplitHeading, SubTitle, Counter, WipeImg } from './motion'
import Logo from './Logo'
import { team, plans, planFeatures as featureNames, posts, services, contact as info } from '../data'

/* ---------------- Team ---------------- */

export function Team({ showBanner = true }) {
  return (
    <section className="section team">
      <div className="container">
        <div className="team-head">
          <div>
            <SubTitle>Our Team</SubTitle>
            <SplitHeading text="Meet the team behind your device repairs" accent={['team']} />
          </div>
          <div className="team-stats">
            {[
              { n: 10, s: '+', l: 'Years of experience' },
              { n: 500, s: '+', l: 'Devices repaired daily' },
              { n: 99, s: '%', l: 'Satisfaction rate' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1} className="t-stat">
                <strong>
                  <Counter to={s.n} suffix={s.s} />
                </strong>
                <span>{s.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.12} className="team-card">
              <div className="team-img">
                <img src={m.img} alt={m.name} loading="lazy" />
                <div className="team-social">
                  <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="X"><FaXTwitter /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                </div>
              </div>
              <div className="team-info">
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
        {showBanner && (
          <Reveal className="team-banner">
            <span>Experience Expert Gadget Repairing –</span>
            <Link to="/team" className="btn btn-primary">
              View All Member <FiArrowUpRight />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

/* ---------------- Pricing ---------------- */

export function Pricing() {
  const [yearly, setYearly] = useState(false)
  return (
    <section id="pricing" className="section pricing bg-soft">
      <div className="container">
        <div className="section-head center">
          <SubTitle>Pricing Plan</SubTitle>
          <SplitHeading text="Simple transparent pricing" accent={['transparent']} />
          <Reveal className="billing-toggle">
            <span className={!yearly ? 'on' : ''}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className={yearly ? 'yearly' : ''} aria-label="Toggle billing period">
              <motion.span layout transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
            </button>
            <span className={yearly ? 'on' : ''}>Yearly <em>-20%</em></span>
          </Reveal>
        </div>
        <div className="pricing-grid">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.15} className={`price-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <span className="ribbon">Recommended</span>}
              <h4>{p.name}</h4>
              <p className="plan-sub">Perfect for occasional repairs</p>
              <div className="price">
                <sup>$</sup>
                <motion.strong key={yearly ? 'y' : 'm'} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                  {yearly ? Math.round(p.price * 12 * 0.8) : p.price}
                </motion.strong>
                <span>/{yearly ? 'year' : 'month'}</span>
              </div>
              <ul>
                {featureNames.map((f, k) => (
                  <li key={f} className={p.features[k] ? '' : 'off'}>
                    <FiCheck /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/book-a-repair" className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'}`}>
                Get Started <FiArrowUpRight />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="pricing-notes">
          <span><FiCheck /> Get 30 Day Free Trial</span>
          <span><FiCheck /> No Any Hidden Fees Pay</span>
          <span><FiCheck /> You Can Cancel Anytime</span>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Contact ---------------- */
export function Contact({ showBrands = true }) {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <SubTitle>Contact Us</SubTitle>
          <SplitHeading text="Get in touch for expert device repair services" accent={['expert']} />
          <Reveal from="left" className="info-item">
            <span className="hl-icon"><FiPhoneCall /></span>
            <div>
              <small>24/7 Support</small>
              <strong>{info.phone}</strong>
            </div>
          </Reveal>
          <Reveal from="left" delay={0.1} className="info-item">
            <span className="hl-icon"><FiMail /></span>
            <div>
              <small>Email Us</small>
              <strong>{info.email}</strong>
            </div>
          </Reveal>
          <WipeImg src="/images/about2.jpg" alt="Technician holding a repaired phone" className="contact-img" />
        </div>
        <Reveal from="right" className="contact-form-wrap">
          <motion.div
            className="plane"
            animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiSend />
          </motion.div>
          <h3>
            Schedule a Free <span className="accent">Effective</span> Consultation
          </h3>
          {sent ? (
            <motion.div className="form-success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <FiCheck />
              <p>Thanks! We’ll get back to you within 30 minutes.</p>
            </motion.div>
          ) : (
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <input required placeholder="Your Name" />
              <input required type="email" placeholder="Email Address" />
              <input placeholder="Phone Number" />
              <select defaultValue="">
                <option value="" disabled>
                  Select Device
                </option>
                <option>Phone</option>
                <option>Tablet</option>
                <option>Laptop</option>
                <option>Smart Watch</option>
                <option>Game Console</option>
                <option>Drone</option>
              </select>
              <div className="date-field">
                <FiCalendar />
                <input type="date" aria-label="Preferred date" />
              </div>
              <textarea rows="4" placeholder="Describe the issue" />
              <button type="submit" className="btn btn-primary">
                Book Appointment <FiArrowUpRight />
              </button>
            </form>
          )}
        </Reveal>
      </div>
      {showBrands && (
      <div className="container brands">
        <Reveal as="h5">Trusted By Leading Brands</Reveal>
        <div className="brands-track">
          <div className="brands-row">
            {[...Array(2)].flatMap((_, k) =>
              [SiApple, SiSamsung, SiSony, SiDell, SiLenovo, SiHuawei, SiXiaomi].map((B, j) => (
                <span key={`${k}-${j}`}>
                  <B />
                </span>
              )),
            )}
          </div>
        </div>
      </div>
      )}
    </section>
  )
}

/* ---------------- Blog ---------------- */

export function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <div className="section-head center">
          <SubTitle>Blog & Articles</SubTitle>
          <SplitHeading text="Check out latest news update & articles" accent={['news']} />
        </div>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15} className="post-card">
              <div className="post-img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="post-cat">{p.cat}</span>
              </div>
              <div className="post-body">
                <span className="post-date">
                  <FiCalendar /> {p.date}
                </span>
                <h4>
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </h4>
                <Link to={`/blog/${p.slug}`} className="read-more">
                  Read More <FiArrowUpRight />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Logo light />
          <div className="newsletter">
            <h4>Subscribe for the latest repair tips & insights</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">
                Subscribe <FiArrowUpRight />
              </button>
            </form>
            <small>Stay tuned and subscribe to our newsletter</small>
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <p className="footer-about">
              Expert repairs, fast turnaround and trusted results for every phone, tablet, laptop and gadget you own.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="X"><FaXTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              {[
                ['About Us', '/about'],
                ['Our Team', '/team'],
                ['Book A Repair', '/book-a-repair'],
                ['Track Your Repair', '/track-your-repair'],
                ['Pricing Plan', '/pricing'],
                ['FAQs', '/faqs'],
                ['Contact', '/contact'],
              ].map(([l, to]) => (
                <li key={l}><Link to={to}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Get in Touch</h5>
            <ul className="footer-contact">
              <li><FiMapPin /> {info.address}</li>
              <li><FiMail /> {info.email}</li>
              <li><FiPhoneCall /> {info.phone}</li>
            </ul>
          </div>
        </div>
        <motion.div
          className="footer-big"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          IFix It
        </motion.div>
        <div className="footer-bottom">
          <span>
            © Copyright 2026 IFix It · Images by{' '}
            <a href="https://www.magnific.com/" target="_blank" rel="noreferrer">Magnific</a>
          </span>
          <div>
            <Link to="/faqs">Terms & Condition</Link>
            <Link to="/faqs">Privacy Policy</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <span className="credit">
            Designed with <span className="heart" role="img" aria-label="love">❤️</span> By{' '}
            <a href="http://voxdigitalagency.co/" target="_blank" rel="noreferrer">
              Vox Digital Agency
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
