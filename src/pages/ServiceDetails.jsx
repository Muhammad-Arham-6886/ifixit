import { Link, NavLink, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheckCircle, FiPhoneCall, FiDownload } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { HowItWorks } from '../components/SectionsA'
import { FAQ } from '../components/SectionsB'
import { Reveal, SplitHeading, SubTitle, WipeImg } from '../components/motion'
import { services, serviceBenefits, faqs, contact } from '../data'

export default function ServiceDetails() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  if (!s) return <Navigate to="/" replace />
  const others = services.filter((x) => x.slug !== slug).slice(0, 2)

  return (
    <>
      <PageBanner title={s.title} img={s.banner} crumbs={[{ label: 'Services' }]} />
      <section className="section">
        <div className="container details-grid">
          <aside className="sidebar">
            <Reveal from="left" className="widget">
              <h4 className="widget-title">All Services</h4>
              <ul className="service-list">
                {services.map((x) => (
                  <li key={x.slug}>
                    <NavLink to={`/services/${x.slug}`}>
                      <span>
                        {x.icon} {x.title}
                      </span>
                      <FiArrowUpRight />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal from="left" delay={0.15} className="widget widget-help" style={{ backgroundImage: 'url(/images/support.jpg)' }}>
              <div>
                <span className="hl-icon">
                  <FiPhoneCall />
                </span>
                <h4>Need help with your {s.title.toLowerCase()}?</h4>
                <p>Call us any time — free diagnosis and quote.</p>
                <a href={contact.phoneHref} className="btn btn-primary">
                  {contact.phone}
                </a>
              </div>
            </Reveal>
            <Reveal from="left" delay={0.25} className="widget widget-download">
              <h4 className="widget-title">Price Guide</h4>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <FiDownload /> {s.title} Prices.pdf
              </a>
            </Reveal>
          </aside>

          <div className="details-main">
            <WipeImg src={s.img} alt={s.title} className="details-hero-img" />
            <SubTitle>{s.title}</SubTitle>
            <SplitHeading text={`Professional ${s.title.toLowerCase()} you can rely on`} accent={['rely', 'on']} />
            <Reveal>
              <p className="lead">{s.intro}</p>
              <p>
                Every job starts with a free diagnostic so you know exactly what is wrong and what it will cost before
                we pick up a screwdriver. We only use genuine or OEM-grade parts, and every repair is backed by our
                90-day warranty.
              </p>
            </Reveal>

            <div className="benefit-list">
              {serviceBenefits.map((b, i) => (
                <Reveal key={b} from="up" delay={(i % 2) * 0.1} className="benefit-item">
                  <FiCheckCircle /> {b}
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="details-subhead">
              Common repairs & starting prices
            </Reveal>
            <div className="repair-table">
              {s.repairs.map((r, i) => (
                <motion.div
                  key={r.name}
                  className="repair-row"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span className="repair-no">0{i + 1}</span>
                  <span className="repair-name">{r.name}</span>
                  <span className="repair-price">from ${r.price}</span>
                  <Link to="/book-a-repair" className="repair-book" aria-label={`Book ${r.name}`}>
                    <FiArrowUpRight />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="details-two-img">
              {others.map((o, i) => (
                <WipeImg key={o.slug} src={o.img} alt={o.title} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <FAQ items={faqs.slice(0, 4)} />
    </>
  )
}
