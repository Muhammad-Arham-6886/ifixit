import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiCheck, FiSmartphone, FiTool, FiCalendar, FiAlertCircle } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { FAQ } from '../components/SectionsB'
import { Reveal, SplitHeading, SubTitle } from '../components/motion'
import { findRepair, stages } from '../tracking'

export default function TrackRepair() {
  const [params, setParams] = useSearchParams()
  const [id, setId] = useState(params.get('id') || '')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const search = (value) => {
    const r = findRepair(value)
    if (!r) {
      setResult(null)
      setError('Tracking IDs look like IFX-12345. Please check your confirmation email.')
      return
    }
    setError('')
    setResult(r)
    setParams({ id: r.id }, { replace: true })
  }

  useEffect(() => {
    if (params.get('id')) search(params.get('id'))
    // run once for IDs passed in from the booking page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PageBanner title="Track Your Repair" img="/images/work3.jpg" crumbs={[{ label: 'Pages' }]} />
      <section className="section bg-soft">
        <div className="container track-wrap">
          <div className="section-head center">
            <SubTitle>Real-Time Tracking</SubTitle>
            <SplitHeading text="Check the status of your repair" accent={['status']} />
            <Reveal>
              <p className="lead">Enter the tracking ID from your booking confirmation (for example IFX-24817).</p>
            </Reveal>
          </div>

          <Reveal className="track-form-wrap">
            <form
              className="track-form"
              onSubmit={(e) => {
                e.preventDefault()
                search(id)
              }}
            >
              <FiSearch />
              <input value={id} onChange={(e) => setId(e.target.value)} placeholder="IFX-12345" aria-label="Tracking ID" />
              <button className="btn btn-primary" type="submit">
                Track Now
              </button>
            </form>
            <AnimatePresence>
              {error && (
                <motion.p className="form-error" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <FiAlertCircle /> {error}
                </motion.p>
              )}
            </AnimatePresence>
            <p className="track-hint">
              No booking yet? <Link to="/book-a-repair">Book a repair</Link> and you’ll get a tracking ID instantly.
            </p>
          </Reveal>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={result.id + result.stage}
                className="track-result"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="track-head">
                  <div>
                    <small>Tracking ID</small>
                    <strong>{result.id}</strong>
                  </div>
                  <span className={`status-pill ${result.stage === stages.length - 1 ? 'done' : ''}`}>{stages[result.stage].title}</span>
                </div>
                <div className="track-meta">
                  <span><FiSmartphone /> {result.device}</span>
                  <span><FiTool /> {result.issue}</span>
                  <span><FiCalendar /> {result.date}</span>
                </div>
                <div className="timeline">
                  <div className="timeline-line">
                    <motion.span
                      initial={{ height: 0 }}
                      animate={{ height: `${(result.stage / (stages.length - 1)) * 100}%` }}
                      transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
                    />
                  </div>
                  {stages.map((s, i) => (
                    <motion.div
                      key={s.title}
                      className={`tl-item ${i <= result.stage ? 'done' : ''} ${i === result.stage ? 'current' : ''}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.25 }}
                    >
                      <span className="tl-dot">{i <= result.stage ? <FiCheck /> : i + 1}</span>
                      <div>
                        <h5>{s.title}</h5>
                        <p>{s.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <FAQ />
    </>
  )
}
