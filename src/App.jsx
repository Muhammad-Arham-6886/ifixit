import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header, { Preloader } from './components/Header'
import BackToTop from './components/BackToTop'
import { Footer } from './components/SectionsC'
import Home from './pages/Home'
import AboutPage from './pages/About'
import TeamPage from './pages/Team'
import PricingPage from './pages/Pricing'
import TestimonialsPage from './pages/Testimonials'
import FaqsPage from './pages/Faqs'
import BookRepair from './pages/BookRepair'
import TrackRepair from './pages/TrackRepair'
import ContactPage from './pages/Contact'
import ServiceDetails from './pages/ServiceDetails'
import ProjectDetails from './pages/ProjectDetails'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'
import { services, projects, posts } from './data'
import { startSmoothScroll, stopSmoothScroll, scrollToTop, lockScroll } from './smoothScroll'

const titles = {
  '/': 'Expert Device Repair',
  '/about': 'About Us',
  '/team': 'Our Team',
  '/pricing': 'Pricing Plan',
  '/testimonials': 'Testimonials',
  '/faqs': 'FAQs',
  '/book-a-repair': 'Book A Repair',
  '/track-your-repair': 'Track Your Repair',
  '/contact': 'Contact',
}

export default function App() {
  const [ready, setReady] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    startSmoothScroll()
    return stopSmoothScroll
  }, [])

  // No scrolling behind the preloader
  useEffect(() => {
    lockScroll(!ready)
  }, [ready])

  useEffect(() => {
    const [, section, slug] = location.pathname.split('/')
    const item =
      (section === 'services' && services.find((s) => s.slug === slug)) ||
      (section === 'projects' && projects.find((p) => p.slug === slug)) ||
      (section === 'blog' && posts.find((p) => p.slug === slug))
    const page = titles[location.pathname] || item?.title || 'Page Not Found'
    document.title = `${page} – IFix It`
  }, [location.pathname])

  return (
    <>
      <Preloader done={ready} />
      <Header />
      {/* Jump to top once the old page has faded out, so the new one starts at its banner */}
      <AnimatePresence mode="wait" onExitComplete={() => scrollToTop({ immediate: true })}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home ready={ready} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/book-a-repair" element={<BookRepair />} />
            <Route path="/track-your-repair" element={<TrackRepair />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </>
  )
}
