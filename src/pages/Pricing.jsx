import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { Pricing } from '../components/SectionsC'
import { FAQ } from '../components/SectionsB'
import { Reveal, SplitHeading, SubTitle } from '../components/motion'
import { services, faqs } from '../data'

export default function PricingPage() {
  return (
    <>
      <PageBanner title="Pricing Plan" img="/images/benefits.jpg" crumbs={[{ label: 'Pages' }]} />
      <Pricing />
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <SubTitle>Repair Prices</SubTitle>
            <SplitHeading text="Popular repairs starting prices" accent={['starting', 'prices']} />
          </div>
          <div className="price-table-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.12} className="price-table">
                <div className="price-table-head">
                  <span className="hl-icon">{s.icon}</span>
                  <h4>{s.title}</h4>
                </div>
                <ul>
                  {s.repairs.slice(0, 4).map((r) => (
                    <li key={r.name}>
                      <span>{r.name}</span>
                      <b>from ${r.price}</b>
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${s.slug}`} className="read-more">
                  View All Prices <FiArrowUpRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FAQ items={faqs.filter((f) => f.cat === 'Pricing' || f.cat === 'Warranty').concat(faqs[0])} />
    </>
  )
}
