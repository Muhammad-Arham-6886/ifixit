import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhoneCall, FiMail, FiMapPin, FiClock, FiArrowUpRight, FiCheck } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { Reveal, SplitHeading, SubTitle } from '../components/motion'
import { contact } from '../data'

const cards = [
  { icon: <FiPhoneCall />, title: 'Call Us', lines: [contact.phone, 'Available 24/7'], href: contact.phoneHref },
  { icon: <FiMail />, title: 'Email Us', lines: [contact.email, 'Replies within 30 min'], href: `mailto:${contact.email}` },
  { icon: <FiMapPin />, title: 'Visit Us', lines: [contact.address] },
  { icon: <FiClock />, title: 'Opening Hours', lines: [contact.hours, 'Sunday: Closed'] },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageBanner title="Contact" img="/images/support.jpg" />
      <section className="section">
        <div className="container">
          <div className="contact-cards">
            {cards.map((c, i) => {
              const Tag = c.href ? 'a' : 'div'
              return (
                <Reveal key={c.title} delay={i * 0.1}>
                  <Tag className="contact-card" href={c.href}>
                    <span className="hl-icon">{c.icon}</span>
                    <h4>{c.title}</h4>
                    {c.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </Tag>
                </Reveal>
              )
            })}
          </div>

          <div className="contact-page-grid">
            <div>
              <SubTitle>Get In Touch</SubTitle>
              <SplitHeading text="Send us a message, we reply fast" accent={['reply', 'fast']} />
              <Reveal>
                <p className="lead">Questions about a repair, a quote or a business account? Drop us a line.</p>
              </Reveal>
              <Reveal className="light-form-wrap">
                {sent ? (
                  <motion.div className="form-success dark" initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <FiCheck />
                    <p>Message sent! We’ll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form
                    className="light-form two"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSent(true)
                    }}
                  >
                    <input required placeholder="Your Name" />
                    <input required type="email" placeholder="Email Address" />
                    <input placeholder="Phone Number" />
                    <input placeholder="Subject" />
                    <textarea required rows="5" placeholder="Your message" />
                    <button className="btn btn-primary" type="submit">
                      Send Message <FiArrowUpRight />
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
            <Reveal from="right" className="map-wrap">
              <iframe
                title="IFix It location"
                src="https://www.google.com/maps?q=Shiloh%2C%20Hawaii&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
