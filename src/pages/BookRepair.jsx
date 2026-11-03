import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiCheck, FiCopy, FiTruck, FiHome, FiPackage } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { HowItWorks } from '../components/SectionsA'
import { Reveal, SplitHeading, SubTitle } from '../components/motion'
import { services } from '../data'
import { saveBooking } from '../tracking'

const steps = ['Device', 'Issue', 'Schedule', 'Details']
const methods = [
  { id: 'store', icon: <FiHome />, title: 'Walk-in / Drop-off', text: 'Bring it to our store' },
  { id: 'pickup', icon: <FiTruck />, title: 'Free Pickup', text: 'We collect from your door' },
  { id: 'mail', icon: <FiPackage />, title: 'Mail-in', text: 'Ship it with a prepaid label' },
]
const times = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM']

export default function BookRepair() {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [form, setForm] = useState({ service: '', issue: '', model: '', notes: '', method: 'store', date: '', time: '', name: '', email: '', phone: '' })
  const [booking, setBooking] = useState(null)
  const [error, setError] = useState('')

  const service = services.find((s) => s.slug === form.service)
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const valid = [
    () => form.service,
    () => form.issue && form.model.trim(),
    () => form.date && form.time,
    () => form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.phone.trim(),
  ]
  const messages = ['Please choose your device type.', 'Please pick an issue and enter your device model.', 'Please choose a date and a time slot.', 'Please enter your name, a valid email and phone number.']

  const go = (d) => {
    if (d > 0 && !valid[step]()) return setError(messages[step])
    setError('')
    setDir(d)
    if (d > 0 && step === steps.length - 1) {
      setBooking(saveBooking({ ...form, serviceTitle: service.title }))
      return
    }
    setStep((s) => s + d)
  }

  const today = new Date().toISOString().slice(0, 10)

  return (
    <>
      <PageBanner title="Book A Repair" img="/images/cta.jpg" crumbs={[{ label: 'Pages' }]} />
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <SubTitle>Online Booking</SubTitle>
            <SplitHeading text="Book your repair in under 2 minutes" accent={['2', 'minutes']} />
          </div>

          <Reveal className="wizard">
            {booking ? (
              <motion.div className="booking-done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <motion.span className="done-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
                  <FiCheck />
                </motion.span>
                <h3>Your repair is booked!</h3>
                <p>
                  Thanks {booking.name.split(' ')[0]} — we’ve reserved <b>{booking.date}</b> at <b>{booking.time}</b> for your{' '}
                  {booking.serviceTitle.toLowerCase()} ({booking.issue}).
                </p>
                <div className="tracking-id">
                  <small>Your tracking ID</small>
                  <strong>{booking.id}</strong>
                  <button onClick={() => navigator.clipboard?.writeText(booking.id)} aria-label="Copy tracking ID">
                    <FiCopy />
                  </button>
                </div>
                <div className="done-actions">
                  <Link to={`/track-your-repair?id=${booking.id}`} className="btn btn-primary">
                    Track This Repair <FiArrowRight />
                  </Link>
                  <Link to="/" className="btn btn-outline">
                    Back To Home
                  </Link>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="wizard-steps">
                  <motion.div className="wizard-progress" animate={{ width: `${(step / (steps.length - 1)) * 100}%` }} />
                  {steps.map((s, i) => (
                    <div key={s} className={`ws ${i <= step ? 'on' : ''}`}>
                      <span>{i < step ? <FiCheck /> : i + 1}</span>
                      <small>{s}</small>
                    </div>
                  ))}
                </div>

                <div className="wizard-body">
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                      key={step}
                      custom={dir}
                      initial={{ opacity: 0, x: dir * 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: dir * -60 }}
                      transition={{ duration: 0.35 }}
                    >
                      {step === 0 && (
                        <>
                          <h4>What needs fixing?</h4>
                          <div className="choice-grid">
                            {services.map((s) => (
                              <button
                                key={s.slug}
                                className={`choice ${form.service === s.slug ? 'active' : ''}`}
                                onClick={() => {
                                  set('service', s.slug)
                                  set('issue', '')
                                }}
                              >
                                <span className="choice-icon">{s.icon}</span>
                                {s.title}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      {step === 1 && service && (
                        <>
                          <h4>What’s wrong with your {service.title.replace(' Repair', '').toLowerCase()}?</h4>
                          <div className="issue-grid">
                            {service.repairs.map((r) => (
                              <button key={r.name} className={`issue ${form.issue === r.name ? 'active' : ''}`} onClick={() => set('issue', r.name)}>
                                <span>{r.name}</span>
                                <b>from ${r.price}</b>
                              </button>
                            ))}
                          </div>
                          <div className="form-row">
                            <input placeholder="Brand & model (e.g. iPhone 15 Pro)" value={form.model} onChange={(e) => set('model', e.target.value)} />
                          </div>
                          <textarea rows="3" placeholder="Anything else we should know? (optional)" value={form.notes} onChange={(e) => set('notes', e.target.value)} />
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <h4>How and when?</h4>
                          <div className="choice-grid three">
                            {methods.map((m) => (
                              <button key={m.id} className={`choice ${form.method === m.id ? 'active' : ''}`} onClick={() => set('method', m.id)}>
                                <span className="choice-icon">{m.icon}</span>
                                {m.title}
                                <small>{m.text}</small>
                              </button>
                            ))}
                          </div>
                          <div className="form-row">
                            <label>
                              Preferred date
                              <input type="date" min={today} value={form.date} onChange={(e) => set('date', e.target.value)} />
                            </label>
                          </div>
                          <div className="time-grid">
                            {times.map((t) => (
                              <button key={t} className={`time ${form.time === t ? 'active' : ''}`} onClick={() => set('time', t)}>
                                {t}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <h4>Your contact details</h4>
                          <div className="form-row two">
                            <input placeholder="Full name" value={form.name} onChange={(e) => set('name', e.target.value)} />
                            <input placeholder="Phone number" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                          </div>
                          <div className="form-row">
                            <input type="email" placeholder="Email address" value={form.email} onChange={(e) => set('email', e.target.value)} />
                          </div>
                          <div className="summary">
                            <h5>Booking summary</h5>
                            <p>
                              <span>Device</span>
                              <b>{service?.title} — {form.model}</b>
                            </p>
                            <p>
                              <span>Issue</span>
                              <b>{form.issue}</b>
                            </p>
                            <p>
                              <span>When</span>
                              <b>
                                {form.date} · {form.time}
                              </b>
                            </p>
                            <p>
                              <span>Method</span>
                              <b>{methods.find((m) => m.id === form.method).title}</b>
                            </p>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p className="form-error" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="wizard-nav">
                  <button className="btn btn-outline" onClick={() => go(-1)} disabled={step === 0}>
                    <FiArrowLeft /> Back
                  </button>
                  <button className="btn btn-primary" onClick={() => go(1)}>
                    {step === steps.length - 1 ? 'Confirm Booking' : 'Continue'} <FiArrowRight />
                  </button>
                </div>
              </>
            )}
          </Reveal>
        </div>
      </section>
      <HowItWorks />
    </>
  )
}
