import { site, type NavTarget } from '../data/site'

type FooterProps = {
  onGo: (target: NavTarget) => void
}

export function Footer({ onGo }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="display" style={{ fontSize: '1.6rem', margin: 0 }}>
            {site.business.shortName}
          </p>
          <p style={{ margin: '0.4rem 0 0', opacity: 0.75 }}>{site.business.tagline}</p>
        </div>
        <div style={{ display: 'flex', gap: '1.1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button type="button" onClick={() => onGo('menu')}>
            Menu
          </button>
          <button type="button" onClick={() => onGo('events')}>
            Events
          </button>
          <button type="button" onClick={() => onGo('catering')}>
            Catering
          </button>
          <a href={site.business.phoneHref}>{site.business.phone}</a>
        </div>
      </div>
      <p style={{ maxWidth: 1280, margin: '1.4rem auto 0', opacity: 0.55, fontSize: '0.85rem' }}>© {year} {site.business.name}. All rights reserved.</p>
    </footer>
  )
}
