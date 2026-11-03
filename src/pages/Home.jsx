import Hero from '../components/Hero'
import { About, Services, WhyChoose, HowItWorks } from '../components/SectionsA'
import { Projects, CTA, FAQ, Marquee, Benefits, Testimonials } from '../components/SectionsB'
import { Team, Pricing, Contact, Blog } from '../components/SectionsC'

export default function Home({ ready }) {
  return (
    <>
      <Hero ready={ready} />
      <About />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Projects />
      <CTA />
      <FAQ />
      <Marquee />
      <Benefits />
      <Testimonials />
      <Team />
      <Pricing />
      <Contact />
      <Blog />
    </>
  )
}
