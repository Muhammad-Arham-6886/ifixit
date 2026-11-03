import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { FiPhoneCall, FiMenu, FiX, FiChevronDown, FiMail, FiClock, FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import Logo from './Logo'
import { nav, contact } from '../data'
import { lockScroll } from '../smoothScroll'

export function Preloader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        >
          <div className="preloader-text">
            {'IFix It'.split('').map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 1, 0.15] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.12 }}
              >
                {l === ' ' ? ' ' : l}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const isActive = (n, path) => (n.to ? (n.to === '/' ? path === '/' : path.startsWith(n.to)) : n.sub.some((s) => path === s.to))

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [side, setSide] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const { pathname } = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const on = () => setSticky(window.scrollY > 120)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    lockScroll(side || mobile)
  }, [side, mobile])

  // Close any open menus after navigating
  useEffect(() => {
    setMobile(false)
    setSide(false)
  }, [pathname])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className={`header ${sticky ? 'is-sticky' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="logo-link" aria-label="IFix It home">
            <Logo light={!sticky} />
          </Link>
          <nav className="main-nav">
            <ul>
              {nav.map((n) => (
                <li key={n.label} className={`${n.sub ? 'has-sub' : ''} ${isActive(n, pathname) ? 'active' : ''}`}>
                  {n.to ? (
                    <Link to={n.to}>{n.label}</Link>
                  ) : (
                    <a role="button" tabIndex={0}>
                      {n.label} <FiChevronDown />
                    </a>
                  )}
                  {n.sub && (
                    <ul className="dropdown">
                      {n.sub.map((s) => (
                        <li key={s.to}>
                          <NavLink to={s.to}>{s.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-right">
            <a href={contact.phoneHref} className="header-call">
              <span className="call-icon">
                <FiPhoneCall />
              </span>
              <span>
                <small>Call us:</small>
                <strong>{contact.phone}</strong>
              </span>
            </a>
            <Link to="/contact" className="btn btn-primary header-btn">
              Let's Talk <FiArrowUpRight />
            </Link>
            <button className="side-toggle" onClick={() => setSide(true)} aria-label="Open info panel">
              <span />
              <span />
              <span />
            </button>
            <button className="mobile-toggle" onClick={() => setMobile(true)} aria-label="Open menu">
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {side && (
          <>
            <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSide(false)} />
            <motion.aside
              className="side-panel"
              data-lenis-prevent
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
            >
              <button className="close-btn" onClick={() => setSide(false)} aria-label="Close">
                <FiX />
              </button>
              <Logo />
              <h4>About Us</h4>
              <p>
                We repair phones, tablets, laptops and every gadget in between, with certified technicians, genuine
                parts and a 90-day warranty on every job.
              </p>
              <Link to="/book-a-repair" className="btn btn-primary">
                Book A Repair <FiArrowUpRight />
              </Link>
              <h4>Contact Us</h4>
              <ul className="side-contact">
                <li><FiPhoneCall /> {contact.phone}</li>
                <li><FiMail /> {contact.email}</li>
                <li><FiClock /> {contact.hours}</li>
                <li><FiMapPin /> {contact.address}</li>
              </ul>
              <div className="socials">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="X"><FaXTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobile && (
          <motion.div
            className="mobile-menu"
            data-lenis-prevent
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.45 }}
          >
            <div className="mobile-top">
              <Logo light />
              <button className="close-btn" onClick={() => setMobile(false)} aria-label="Close menu">
                <FiX />
              </button>
            </div>
            <ul>
              {nav.map((n, i) => (
                <motion.li key={n.label} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.06 }}>
                  {n.to ? (
                    <Link to={n.to}>{n.label}</Link>
                  ) : (
                    <>
                      <button className="mobile-sub-btn" onClick={() => setOpenSub(openSub === n.label ? null : n.label)}>
                        {n.label}
                        <FiChevronDown style={{ transform: openSub === n.label ? 'rotate(180deg)' : 'none' }} />
                      </button>
                      <AnimatePresence initial={false}>
                        {openSub === n.label && (
                          <motion.ul className="mobile-sub" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                            {n.sub.map((s) => (
                              <li key={s.to}>
                                <Link to={s.to}>{s.label}</Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mobile-call">
              <small>Call Anytime</small>
              <strong>{contact.phone}</strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
