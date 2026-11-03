import PageBanner from '../components/PageBanner'
import { About, WhyChoose, HowItWorks } from '../components/SectionsA'
import { Benefits, Testimonials, Marquee, CTA } from '../components/SectionsB'
import { Team } from '../components/SectionsC'
import { Reveal, SplitHeading, SubTitle, Counter } from '../components/motion'
import { TbTarget, TbEye, TbHeartHandshake } from 'react-icons/tb'

const values = [
  { icon: <TbTarget />, title: 'Our Mission', text: 'Make expert repairs fast, affordable and transparent, so every device gets a second life.' },
  { icon: <TbEye />, title: 'Our Vision', text: 'A world where repairing is the obvious first choice, and electronic waste keeps shrinking.' },
  { icon: <TbHeartHandshake />, title: 'Our Promise', text: 'Honest quotes, genuine parts and a 90-day warranty on everything we touch.' },
]

const milestones = [
  { n: 15, s: '+', l: 'Years in business' },
  { n: 25, s: 'k+', l: 'Devices repaired' },
  { n: 40, s: '+', l: 'Certified technicians' },
  { n: 98, s: '%', l: 'First-time fix rate' },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" img="/images/about1.jpg" />
      <About showButton={false} />
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head center">
            <SubTitle>What Drives Us</SubTitle>
            <SplitHeading text="Repairing devices, building trust since 2011" accent={['trust']} />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.15} className="value-card">
                <span className="hl-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="milestones">
            {milestones.map((m, i) => (
              <Reveal key={m.l} delay={i * 0.1} className="milestone">
                <strong>
                  <Counter to={m.n} suffix={m.s} />
                </strong>
                <span>{m.l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <WhyChoose />
      <HowItWorks />
      <Marquee />
      <Benefits />
      <Team />
      <Testimonials />
      <CTA title="Ready to get your device fixed today?" />
    </>
  )
}
