import { useEffect, useState } from 'react'
import { EventModal } from './components/EventModal'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { IconPhone } from './components/Icons'
import { site, type NavTarget, type View } from './data/site'
import { datedEvents, splitEvents } from './lib/events'
import { CateringPage } from './pages/CateringPage'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'

const scrollTargets = new Set(['events', 'story', 'contact', 'social'])
const { upcoming, past } = splitEvents()
const events = datedEvents()

const titles: Record<View, string> = {
  home: 'Lagos Flame & Grill Ltd. — Nigerian Food Truck in Chilliwack, BC',
  menu: 'Menu — Lagos Flame & Grill',
  catering: 'Catering — Lagos Flame & Grill',
}

function viewFromHash(): View {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'menu') return 'menu'
  if (hash === 'catering') return 'catering'
  return 'home'
}

function scrollToHash() {
  const id = window.location.hash.replace('#', '')
  if (!scrollTargets.has(id)) return
  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

export default function App() {
  const [view, setView] = useState<View>(() => (typeof window === 'undefined' ? 'home' : viewFromHash()))
  const [scrolled, setScrolled] = useState(false)
  const [heat, setHeat] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [eventId, setEventId] = useState<string | null>(null)
  const activeEvent = events.find((event) => event.id === eventId) ?? null

  function go(target: NavTarget) {
    setMenuOpen(false)
    if (target === 'menu' || target === 'catering') {
      setView(target)
      window.location.hash = target
      window.scrollTo({ top: 0 })
      return
    }
    setView('home')
    window.location.hash = target === 'home' ? '' : target
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.setTimeout(scrollToHash, 50)
  }

  useEffect(() => {
    const onHash = () => {
      setMenuOpen(false)
      setView(viewFromHash())
      scrollToHash()
    }
    window.addEventListener('hashchange', onHash)
    scrollToHash()
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(top > 12)
      setHeat(max > 0 ? Math.min(100, (top / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [view])

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('in')
        }
      },
      { threshold: 0.16 },
    )
    nodes.forEach((node) => {
      node.classList.add('reveal')
      io.observe(node)
    })
    return () => io.disconnect()
  }, [view])

  useEffect(() => {
    document.title = titles[view]
  }, [view])

  useEffect(() => {
    if (!eventId) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setEventId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [eventId])

  return (
    <div className="grain">
      <div className="heat" style={{ width: `${heat}%` }} />
      <Header view={view} scrolled={scrolled} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} onGo={go} />
      {view === 'home' && <HomePage upcoming={upcoming} past={past} onGo={go} onOpenEvent={setEventId} />}
      {view === 'menu' && <MenuPage />}
      {view === 'catering' && <CateringPage />}
      <Footer onGo={go} />
      <div className="call-bar">
        <span>The grill is on</span>
        <a href={site.business.phoneHref}>
          <IconPhone size={18} /> {site.business.phone}
        </a>
      </div>
      {activeEvent && <EventModal event={activeEvent} onClose={() => setEventId(null)} />}
    </div>
  )
}
