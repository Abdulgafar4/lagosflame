import { dishImage, images, socialPhotos, storyPhotos } from '../data/images'
import { cityLine, directionsUrl, site, type NavTarget } from '../data/site'
import { eventDay, eventMonth, eventShort, type DatedEvent } from '../lib/events'
import { IconArrow, IconFlame, IconMail, IconMap, IconPhone } from '../components/Icons'
import { Photo } from '../components/Photo'

type HomePageProps = {
  upcoming: DatedEvent[]
  past: DatedEvent[]
  onGo: (target: NavTarget) => void
  onOpenEvent: (id: string) => void
}

const why = [
  { title: 'Open flame, real suya', body: 'Chicken, beef and asun come off a live grill — smoky, spicy, and finished with yaji the Lagos way.' },
  { title: 'Party plates, street pace', body: 'Jollof, loaded fries and wraps built for a crowd. Fast enough for a lunch line, generous enough for a night market.' },
  { title: 'We come to you', body: 'The truck rolls across the Fraser Valley. Book us for weddings, offices, festivals and backyard parties.' },
]

export function HomePage({ upcoming, past, onGo, onOpenEvent }: HomePageProps) {
  return (
    <div className="page-enter">
      <Hero onGo={onGo} />
      <Marquee />
      <Philosophy />
      <SignatureDishes />
      <Events upcoming={upcoming} past={past} onGo={onGo} onOpenEvent={onOpenEvent} />
      <Why />
      <CateringTeaser onGo={onGo} />
      <Story />
      <Truck />
      <Social />
      <Location />
      <Contact />
    </div>
  )
}

function Hero({ onGo }: { onGo: (target: NavTarget) => void }) {
  const embers = [8, 22, 36, 51, 67, 79, 91].map((left, i) => ({
    left: `${left}%`,
    delay: `${i * 0.7}s`,
    duration: `${7 + (i % 3)}s`,
  }))

  return (
    <section className="hero">
      <div className="hero-photo">
        <Photo src={images.heroSuya} alt="Suya grilling over an open flame" washed={false} />
      </div>
      <div className="hero-shade" />
      {embers.map((ember) => (
        <span key={ember.left} className="ember" style={{ left: ember.left, animationDelay: ember.delay, animationDuration: ember.duration }} />
      ))}
      <div className="hero-copy">
        <p className="eyebrow">
          <IconFlame size={16} /> Chilliwack, BC
        </p>
        <h1>Taste Lagos. Feel the flame.</h1>
        <p className="hero-lead">Nigerian suya, smoky jollof and street plates from the truck — grilled live, served hot.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" type="button" onClick={() => onGo('menu')}>
            See the menu <IconArrow size={18} />
          </button>
          <button className="btn btn-on-dark" type="button" onClick={() => onGo('events')}>
            Find the truck
          </button>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Chicken Suya', 'Beef Suya', 'Asun', 'Jollof', 'Loaded Fries', 'Suya Wrap', 'Dodo']
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <span key={copy}>
            {items.map((item) => (
              <span key={`${copy}-${item}`}>✦ {item}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

function Philosophy() {
  return (
    <section className="section split" data-reveal>
      <div>
        <p className="kicker">The philosophy</p>
        <h2 className="display display-lg" style={{ margin: '0.4rem 0 1rem' }}>
          Fire first. Flavour after.
        </h2>
        <p className="lede">
          Lagos Flame & Grill is a Nigerian food truck built around the grill. Suya stays on the flame until the spice blooms, jollof stays smoky, and every plate is meant to be eaten standing up with your people.
        </p>
      </div>
      <Photo src={images.flameGrill} alt="Meat grilling over charcoal" radius="32px" />
    </section>
  )
}

function SignatureDishes() {
  return (
    <section className="section" data-reveal>
      <div className="section-head">
        <div>
          <p className="kicker">Signature plates</p>
          <h2 className="display display-lg" style={{ margin: '0.35rem 0 0' }}>
            What we grill
          </h2>
        </div>
        <p className="lede">The dishes people come back for — off the flame, into a box, gone in minutes.</p>
      </div>
      <div className="dish-grid">
        {site.signature.map((dish) => (
          <article key={dish.id} className="dish-card">
            <Photo src={dishImage[dish.id]} alt={dish.name} />
            <div className="dish-card-body">
              <span className="pill">{dish.tag}</span>
              <h3 className="display" style={{ fontSize: '1.55rem', margin: '0 0 0.4rem' }}>
                {dish.name}
              </h3>
              <p style={{ margin: 0, color: 'var(--color-muted)' }}>{dish.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Events({
  upcoming,
  past,
  onGo,
  onOpenEvent,
}: {
  upcoming: DatedEvent[]
  past: DatedEvent[]
  onGo: (target: NavTarget) => void
  onOpenEvent: (id: string) => void
}) {
  return (
    <section id="events" className="section" data-reveal>
      <div className="section-head">
        <div>
          <p className="kicker">On the road</p>
          <h2 className="display display-lg" style={{ margin: '0.35rem 0 0' }}>
            Find the truck
          </h2>
        </div>
        <button className="btn btn-ghost" type="button" onClick={() => onGo('catering')}>
          Book catering
        </button>
      </div>
      {upcoming.length === 0 ? (
        <p className="lede">No public stops posted yet. Call or email and we will tell you where the grill is headed next.</p>
      ) : (
        <div className="event-grid">
          {upcoming.map((event) => (
            <button key={event.id} className="event-card" type="button" onClick={() => onOpenEvent(event.id)}>
              <div className="event-cal">
                <span className="kicker" style={{ color: 'inherit', opacity: 0.8 }}>
                  {eventMonth(event.dt)}
                </span>
                <span className="day">{eventDay(event.dt)}</span>
              </div>
              <div className="event-body">
                <h3 className="display" style={{ fontSize: '1.4rem', margin: '0 0 0.35rem' }}>
                  {event.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--color-muted)' }}>
                  {event.time} · {event.location}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
      {past.length > 0 && (
        <p style={{ marginTop: '1.4rem', color: 'var(--color-muted)' }}>
          Recently: {past.map((event) => `${event.title} (${eventShort(event.dt)})`).join(' · ')}
        </p>
      )}
    </section>
  )
}

function Why() {
  return (
    <section className="section" data-reveal>
      <p className="kicker">Why the truck</p>
      <h2 className="display display-lg" style={{ margin: '0.35rem 0 1.4rem' }}>
        Built for a line
      </h2>
      <div className="why-grid">
        {why.map((item) => (
          <article key={item.title} className="why-card">
            <h3 className="display" style={{ fontSize: '1.55rem', margin: '0 0 0.5rem' }}>
              {item.title}
            </h3>
            <p style={{ margin: 0, color: 'var(--color-muted)' }}>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CateringTeaser({ onGo }: { onGo: (target: NavTarget) => void }) {
  return (
    <section className="band">
      <div className="section split" data-reveal>
        <Photo src={images.cateringSpread} alt="Catering spread of Nigerian dishes" radius="32px" />
        <div>
          <p className="kicker">Catering</p>
          <h2 className="display display-lg" style={{ margin: '0.35rem 0 0.8rem' }}>
            Bring the flame to your event
          </h2>
          <p className="lede">
            Weddings, offices, festivals and backyard parties. The truck can grill on-site or we can drop off a full Nigerian spread.
          </p>
          <div className="hero-actions" style={{ marginTop: '1.2rem' }}>
            <button className="btn btn-primary" type="button" onClick={() => onGo('catering')}>
              Plan an event <IconArrow size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section id="story" className="section split" data-reveal>
      <div>
        <p className="kicker">Our story</p>
        <h2 className="display display-lg" style={{ margin: '0.35rem 0 0.8rem' }}>
          Lagos heat, Fraser Valley roads
        </h2>
        <p className="lede">
          We started this truck to cook the food we grew up with — suya from the flame, jollof that tastes like a party, plantain that never sits too long. Chilliwack is home base. The valley is the route.
        </p>
      </div>
      <div className="mosaic">
        {storyPhotos.map((photo) => (
          <div key={photo.id} style={{ gridColumn: `span ${photo.cols}`, gridRow: `span ${photo.rows}` }}>
            <Photo src={photo.src} alt={photo.alt} radius={photo.radius} />
          </div>
        ))}
      </div>
    </section>
  )
}

function Truck() {
  return (
    <section className="section" data-reveal>
      <div className="section-head">
        <div>
          <p className="kicker">The truck</p>
          <h2 className="display display-lg" style={{ margin: '0.35rem 0 0' }}>
            Follow the smoke
          </h2>
        </div>
      </div>
      <Photo src={images.truck} alt="The Lagos Flame & Grill food truck" radius="32px" />
    </section>
  )
}

function Social() {
  return (
    <section id="social" className="section" data-reveal>
      <div className="section-head">
        <div>
          <p className="kicker">From the grill</p>
          <h2 className="display display-lg" style={{ margin: '0.35rem 0 0' }}>
            Plates we posted
          </h2>
        </div>
      </div>
      <div className="social-grid">
        {socialPhotos.map((photo) => (
          <Photo key={photo.alt} src={photo.src} alt={photo.alt} radius={photo.round ? '999px' : '24px'} />
        ))}
      </div>
    </section>
  )
}

function Location() {
  const query = encodeURIComponent(`${site.business.street}, ${cityLine()}`)
  return (
    <section className="section split" data-reveal>
      <div>
        <p className="kicker">Home base</p>
        <h2 className="display display-lg" style={{ margin: '0.35rem 0 0.8rem' }}>
          Chilliwack, BC
        </h2>
        <p className="lede">
          {site.business.street}
          <br />
          {cityLine()}
        </p>
        <div className="hero-actions" style={{ marginTop: '1.1rem' }}>
          <a className="btn btn-primary" href={directionsUrl()} target="_blank" rel="noreferrer">
            <IconMap size={18} /> Get directions
          </a>
        </div>
      </div>
      <div className="map-wrap">
        <iframe title="Lagos Flame & Grill map" src={`https://maps.google.com/maps?q=${query}&z=14&output=embed`} loading="lazy" />
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section" data-reveal>
      <p className="kicker">Talk to us</p>
      <h2 className="display display-lg" style={{ margin: '0.35rem 0 1.2rem' }}>
        Book the grill
      </h2>
      <div className="why-grid">
        <a className="contact-card" href={site.business.phoneHref} style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconPhone />
          <h3 className="display" style={{ fontSize: '1.4rem', margin: '0.7rem 0 0.3rem' }}>
            Call
          </h3>
          <p style={{ margin: 0 }}>{site.business.phone}</p>
        </a>
        <a className="contact-card" href={`mailto:${site.business.emails[0]}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconMail />
          <h3 className="display" style={{ fontSize: '1.4rem', margin: '0.7rem 0 0.3rem' }}>
            Email
          </h3>
          <p style={{ margin: 0 }}>{site.business.emails[0]}</p>
        </a>
        <div className="hours-card">
          <IconFlame />
          <h3 className="display" style={{ fontSize: '1.4rem', margin: '0.7rem 0 0.3rem' }}>
            Hours
          </h3>
          <p style={{ margin: 0, color: 'var(--color-muted)' }}>Follow events for service days. Private bookings by request.</p>
        </div>
      </div>
    </section>
  )
}
