import { useRef, useState, type MouseEvent } from 'react'
import { Photo } from '../components/Photo'
import { formatPrice, site } from '../data/site'

type MenuId = (typeof site.menu)[number]['id']
type MenuItem = (typeof site.menu)[number]['items'][number]
type Preview = { name: string; src: string; top: number }

function itemPhoto(item: MenuItem): string | undefined {
  return 'photo' in item ? item.photo : undefined
}

export function MenuPage() {
  const [active, setActive] = useState<MenuId>(site.menu[0].id)
  const [preview, setPreview] = useState<Preview | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  function showPhoto(event: MouseEvent<HTMLElement>, item: MenuItem) {
    const photo = itemPhoto(item)
    const list = listRef.current
    if (!photo || !list) {
      setPreview(null)
      return
    }
    const listBox = list.getBoundingClientRect()
    setPreview({
      name: item.name,
      src: photo,
      top: event.clientY - listBox.top,
    })
  }

  return (
    <div className="page-enter section" style={{ paddingTop: '7.5rem' }}>
      <p className="kicker">The menu</p>
      <h1 className="display display-lg" style={{ margin: '0.35rem 0 0.6rem' }}>
        Off the flame
      </h1>
      <p className="lede" style={{ marginBottom: '2rem' }}>
        Prices marked with $ are confirmed at the window. Combos and market specials change with the stop.
      </p>
      <div className="menu-layout">
        <nav className="menu-nav" aria-label="Menu sections">
          {site.menu.map((section) => (
            <button
              key={section.id}
              type="button"
              className={active === section.id ? 'active' : ''}
              onClick={() => {
                setActive(section.id)
                document.getElementById(`menu-${section.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {section.title}
            </button>
          ))}
        </nav>
        <div ref={listRef} className="menu-list" onMouseLeave={() => setPreview(null)}>
          {site.menu.map((section) => (
            <section key={section.id} id={`menu-${section.id}`} style={{ marginBottom: '2.4rem' }}>
              <p className="kicker">{section.sub}</p>
              <h2 className="display display-md" style={{ margin: '0.25rem 0 0.6rem' }}>
                {section.title}
              </h2>
              {section.items.map((item) => {
                const photo = itemPhoto(item)
                return (
                  <div
                    key={item.name}
                    className={`menu-item ${photo ? 'has-photo' : ''}`}
                    onMouseEnter={(event) => showPhoto(event, item)}
                    onMouseMove={(event) => showPhoto(event, item)}
                  >
                    {photo ? (
                      <span className="menu-item-thumb">
                        <Photo src={photo} alt="" />
                      </span>
                    ) : null}
                    <div className="menu-item-copy">
                      <strong>{item.name}</strong>
                      {item.desc ? <p style={{ margin: '0.25rem 0 0', color: 'var(--color-muted)' }}>{item.desc}</p> : null}
                    </div>
                    <span className="menu-price">{formatPrice(item.price)}</span>
                  </div>
                )
              })}
            </section>
          ))}
          {preview && (
            <div className="menu-hover-photo" style={{ top: preview.top }} aria-hidden>
              <Photo src={preview.src} alt={preview.name} radius="28px" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
