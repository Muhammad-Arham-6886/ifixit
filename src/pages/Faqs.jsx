import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus, FiPhoneCall, FiMail } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { CTA } from '../components/SectionsB'
import { Reveal, SplitHeading, SubTitle } from '../components/motion'
import { faqs, contact } from '../data'

const cats = ['All', ...new Set(faqs.map((f) => f.cat))]

export default function FaqsPage() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(0)
  const list = cat === 'All' ? faqs : faqs.filter((f) => f.cat === cat)

  return (
    <>
      <PageBanner title="FAQs" img="/images/contact.jpg" crumbs={[{ label: 'Pages' }]} />
      <section className="section">
        <div className="container faq-page">
          <aside className="faq-aside">
            <SubTitle>FAQs</SubTitle>
            <SplitHeading text="Frequently asked questions" accent={['questions']} />
            <Reveal className="faq-help">
              <h4>Still need help?</h4>
              <p>Our support team is available 24/7 to answer any question.</p>
              <a href={contact.phoneHref}>
                <FiPhoneCall /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`}>
                <FiMail /> {contact.email}
              </a>
            </Reveal>
          </aside>
          <div>
            <Reveal className="faq-cats">
              {cats.map((c) => (
                <button
                  key={c}
                  className={c === cat ? 'active' : ''}
                  onClick={() => {
                    setCat(c)
                    setOpen(0)
                  }}
                >
                  {c}
                  {c === cat && <motion.span layoutId="faq-pill" className="tab-pill" />}
                </button>
              ))}
            </Reveal>
            <motion.div layout className="accordion">
              <AnimatePresence mode="popLayout">
                {list.map((f, i) => (
                  <motion.div
                    layout
                    key={f.q}
                    className={`acc-item ${open === i ? 'open' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
