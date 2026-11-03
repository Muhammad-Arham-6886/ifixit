import { FaStar, FaQuoteRight } from 'react-icons/fa6'
import PageBanner from '../components/PageBanner'
import { CTA } from '../components/SectionsB'
import { Reveal, SplitHeading, SubTitle, Counter } from '../components/motion'
import { testimonials } from '../data'

const stats = [
  { n: 4.9, s: '/5', l: 'Average rating', d: 1 },
  { n: 2500, s: '+', l: 'Verified reviews' },
  { n: 97, s: '%', l: 'Would recommend us' },
]

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title="Testimonials" img="/images/about2.jpg" crumbs={[{ label: 'Pages' }]} />
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <SubTitle>Testimonials</SubTitle>
            <SplitHeading text="What our happy customers say about us" accent={['happy', 'customers']} />
          </div>
          <div className="review-stats">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.12} className="review-stat">
                <strong>
                  <Counter to={s.n} suffix={s.s} decimals={s.d || 0} />
                </strong>
                <span>{s.l}</span>
              </Reveal>
            ))}
          </div>
          <div className="reviews-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.12} className="review-card">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Join thousands of happy customers today" />
    </>
  )
}
