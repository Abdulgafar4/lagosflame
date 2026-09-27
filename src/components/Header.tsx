import { IconClose, IconFlame, IconMenu } from './Icons'
import type { NavTarget, View } from '../data/site'

const links: { label: string; target: NavTarget }[] = [
  { label: 'Menu', target: 'menu' },
  { label: 'Events', target: 'events' },
  { label: 'Catering', target: 'catering' },
  { label: 'Our story', target: 'story' },
  { label: 'Contact', target: 'contact' },
]

type HeaderProps = {
  view: View
  scrolled: boolean
  menuOpen: boolean
  onToggleMenu: () => void
  onGo: (target: NavTarget) => void
}

export function Header({ view, scrolled, menuOpen, onToggleMenu, onGo }: HeaderProps) {
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${view === 'home' && !scrolled ? 'on-hero' : ''}`}>
      <div className="site-header-inner">
        <button className="brand" type="button" onClick={() => onGo('home')} aria-label="Lagos Flame & Grill home">
          <span className="brand-mark">
            <IconFlame size={22} />
          </span>
          <span>
            <span className="brand-name">Lagos Flame</span>
            <span className="brand-tag">Taste Lagos • Feel The Flame</span>
          </span>
        </button>
        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <button key={link.target} className={`nav-link ${view === link.target ? 'active' : ''}`} type="button" onClick={() => onGo(link.target)}>
              {link.label}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" type="button" onClick={onToggleMenu} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`} aria-label="Mobile">
        {links.map((link) => (
          <button key={link.target} type="button" onClick={() => onGo(link.target)}>
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
