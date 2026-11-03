import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// One shared Lenis instance: slower, eased wheel scrolling so scroll-linked animations glide
let lenis = null

export function startSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return lenis
  lenis = new Lenis({
    duration: 1.6, // seconds a wheel "flick" takes to settle — higher feels slower
    easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart: quick start, long soft stop
    wheelMultiplier: 0.8, // each wheel tick moves a bit less than native
    touchMultiplier: 1.2,
    smoothWheel: true,
    autoRaf: true,
  })
  return lenis
}

export function stopSmoothScroll() {
  lenis?.destroy()
  lenis = null
}

// Falls back to native scrolling when Lenis is off (reduced motion)
export function scrollToTop({ immediate = false } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate, duration: 1.8 })
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}

// Pause page scrolling while overlays (menus, modals) are open
export function lockScroll(locked) {
  if (!lenis) return
  locked ? lenis.stop() : lenis.start()
}
