import { useState, type FormEvent } from 'react'
import { images } from '../data/images'
import { site } from '../data/site'
import { IconArrow, IconCheck } from '../components/Icons'
import { Photo } from '../components/Photo'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  guests: '',
  eventType: '',
  service: '',
  budget: '',
  notes: '',
}

export function CateringPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  function update(field: keyof typeof emptyForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Catering inquiry — ${form.eventType || 'Event'}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Date: ${form.date}`,
        `Guests: ${form.guests}`,
        `Event: ${form.eventType}`,
        `Service: ${form.service}`,
        `Budget: ${form.budget}`,
        '',
        form.notes,
      ].join('\n'),
    )
    window.location.href = `mailto:${site.business.emails[0]}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="page-enter">
      <section className="section split" style={{ paddingTop: '7.5rem' }}>
        <div>
          <p className="kicker">Catering</p>
          <h1 className="display display-lg" style={{ margin: '0.35rem 0 0.8rem' }}>
            Feed the room
          </h1>
          <p className="lede">
            Tell us the date, the headcount and how you want the truck. We will come back with a menu that fits the night.
          </p>
          <ul style={{ margin: '1.2rem 0 0', padding: 0, listStyle: 'none', color: 'var(--color-muted)' }}>
            {site.catering.categories.map((category) => (
              <li key={category} style={{ padding: '0.25rem 0' }}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <Photo src={images.cateringGuests} alt="Guests around a catering table" radius="32px" />
      </section>

      <section className="section" data-reveal>
        {sent ? (
          <div className="contact-card" style={{ maxWidth: 640 }}>
            <IconCheck />
            <h2 className="display display-md" style={{ margin: '0.6rem 0 0.4rem' }}>
              Inquiry started
            </h2>
            <p className="lede">Your email app should be open with the details. If it did not, write us at {site.business.emails[0]}.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ maxWidth: 720 }}>
            <div className="steps" aria-hidden>
              {[1, 2, 3].map((n) => (
                <span key={n} className={`step-dot ${step >= n ? 'on' : ''}`}>
                  {n}
                </span>
              ))}
            </div>

            {step === 1 && (
              <div>
                <h2 className="display display-md" style={{ margin: '0 0 1rem' }}>
                  What kind of night?
                </h2>
                <div className="choice-grid">
                  {site.catering.eventTypes.map((type) => (
                    <button key={type} type="button" className={`choice ${form.eventType === type ? 'on' : ''}`} onClick={() => update('eventType', type)}>
                      {type}
                    </button>
                  ))}
                </div>
                <div className="hero-actions" style={{ marginTop: '1.3rem' }}>
                  <button className="btn btn-primary" type="button" disabled={!form.eventType} onClick={() => setStep(2)}>
                    Next <IconArrow size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="display display-md" style={{ margin: '0 0 1rem' }}>
                  How should we serve it?
                </h2>
                <div className="choice-grid">
                  {site.catering.services.map((service) => (
                    <button key={service} type="button" className={`choice ${form.service === service ? 'on' : ''}`} onClick={() => update('service', service)}>
                      {service}
                    </button>
                  ))}
                </div>
                <p className="kicker" style={{ margin: '1.4rem 0 0.7rem' }}>
                  Budget
                </p>
                <div className="choice-grid">
                  {site.catering.budgets.map((budget) => (
                    <button key={budget} type="button" className={`choice ${form.budget === budget ? 'on' : ''}`} onClick={() => update('budget', budget)}>
                      {budget}
                    </button>
                  ))}
                </div>
                <div className="hero-actions" style={{ marginTop: '1.3rem' }}>
                  <button className="btn btn-ghost" type="button" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button className="btn btn-primary" type="button" disabled={!form.service || !form.budget} onClick={() => setStep(3)}>
                    Next <IconArrow size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="display display-md" style={{ margin: '0 0 1rem' }}>
                  Your details
                </h2>
                <div className="field">
                  <label htmlFor="cat-name">Name</label>
                  <input id="cat-name" className="input" required value={form.name} onChange={(e) => update('name', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="cat-email">Email</label>
                  <input id="cat-email" className="input" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="cat-phone">Phone</label>
                  <input id="cat-phone" className="input" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="cat-date">Event date</label>
                  <input id="cat-date" className="input" type="date" value={form.date} onChange={(e) => update('date', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="cat-guests">Guests</label>
                  <input id="cat-guests" className="input" inputMode="numeric" value={form.guests} onChange={(e) => update('guests', e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="cat-notes">Notes</label>
                  <textarea id="cat-notes" className="input" rows={4} value={form.notes} onChange={(e) => update('notes', e.target.value)} />
                </div>
                <div className="hero-actions" style={{ marginTop: '1.3rem' }}>
                  <button className="btn btn-ghost" type="button" onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button className="btn btn-primary" type="submit">
                    Send inquiry <IconArrow size={18} />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </section>
    </div>
  )
}
