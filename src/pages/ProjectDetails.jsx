import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiUser, FiFolder, FiCalendar, FiClock, FiCheckCircle } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { CTA } from '../components/SectionsB'
import { Reveal, SplitHeading, SubTitle, WipeImg, ParallaxImg } from '../components/motion'
import { projects } from '../data'

const results = ['Device fully restored and tested', 'Original data preserved', 'Covered by 90-day warranty', 'Delivered on schedule']

export default function ProjectDetails() {
  const { slug } = useParams()
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx === -1) return <Navigate to="/" replace />
  const p = projects[idx]
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  const info = [
    { icon: <FiUser />, label: 'Client', value: p.client },
    { icon: <FiFolder />, label: 'Category', value: p.category },
    { icon: <FiCalendar />, label: 'Date', value: p.date },
    { icon: <FiClock />, label: 'Duration', value: p.duration },
  ]

  return (
    <>
      <PageBanner title="Project Details" img={p.img} crumbs={[{ label: 'Projects' }]} />
      <section className="section">
        <div className="container">
          <ParallaxImg src={p.img} alt={p.title} className="project-hero-img" strength={70} />
          <div className="project-info-bar">
            {info.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.1} className="pi-item">
                <span className="hl-icon">{it.icon}</span>
                <div>
                  <small>{it.label}</small>
                  <strong>{it.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="project-body">
            <div>
              <SubTitle>{p.tags.join(' · ')}</SubTitle>
              <SplitHeading text={p.title} accent={p.title.split(' ').slice(-1)} />
              <Reveal>
                <h3 className="details-subhead">The Challenge</h3>
                <p className="lead">{p.challenge}</p>
                <h3 className="details-subhead">Our Solution</h3>
                <p className="lead">{p.solution}</p>
              </Reveal>
              <div className="benefit-list">
                {results.map((r, i) => (
                  <Reveal key={r} delay={(i % 2) * 0.1} className="benefit-item">
                    <FiCheckCircle /> {r}
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="project-gallery">
              {p.gallery.map((g, i) => (
                <WipeImg key={g + i} src={g} alt={`${p.title} photo ${i + 1}`} delay={i * 0.15} className={`pg-${i}`} />
              ))}
            </div>
          </div>

          <div className="post-nav">
            <Link to={`/projects/${prev.slug}`}>
              <motion.span whileHover={{ x: -6 }} className="pn-arrow">
                <FiArrowLeft />
              </motion.span>
              <div>
                <small>Previous Project</small>
                <strong>{prev.title}</strong>
              </div>
            </Link>
            <Link to={`/projects/${next.slug}`} className="next">
              <div>
                <small>Next Project</small>
                <strong>{next.title}</strong>
              </div>
              <motion.span whileHover={{ x: 6 }} className="pn-arrow">
                <FiArrowRight />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
      <CTA title="Have a similar device problem? Let's fix it today" />
    </>
  )
}
