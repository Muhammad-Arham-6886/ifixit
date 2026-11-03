import PageBanner from '../components/PageBanner'
import { Team } from '../components/SectionsC'
import { CTA } from '../components/SectionsB'
import { Reveal, SplitHeading, SubTitle } from '../components/motion'
import { TbCertificate, TbMicroscope, TbUsers } from 'react-icons/tb'

const perks = [
  { icon: <TbCertificate />, title: 'Certified Experts', text: 'Every technician is manufacturer-trained and certified for the devices they repair.' },
  { icon: <TbMicroscope />, title: 'Board-Level Skills', text: 'Microsoldering, thermal imaging and component diagnostics are part of daily work.' },
  { icon: <TbUsers />, title: 'Customer First', text: 'We explain every repair in plain language — no jargon, no surprise costs.' },
]

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" img="/images/why.jpg" crumbs={[{ label: 'Pages' }]} />
      <Team showBanner={false} />
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <SubTitle>Why Our Team</SubTitle>
            <SplitHeading text="Skilled hands you can trust with your devices" accent={['trust']} />
          </div>
          <div className="values-grid">
            {perks.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.15} className="value-card">
                <span className="hl-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Want to join our expert repair team?" btnText="Contact Us" btnTo="/contact" />
    </>
  )
}
