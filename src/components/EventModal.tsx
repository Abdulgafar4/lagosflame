import { useEffect, useRef } from 'react'
import { images, eventImage } from '../data/images'
import { downloadEventIcs } from '../lib/calendar'
import { eventDirections, eventFullDate, eventPlace, type DatedEvent } from '../lib/events'
import { IconCalendar, IconClose, IconMap } from './Icons'
import { Photo } from './Photo'

type EventModalProps = {
  event: DatedEvent
  onClose: () => void
}

export function EventModal({ event, onClose }: EventModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    dialogRef.current?.focus()
  }, [])

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-photo" style={{ position: 'relative' }}>
          <Photo src={eventImage[event.id] ?? images.eventCrowd} alt={event.title} />
          <button className="icon-btn" type="button" onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 12, right: 12 }}>
            <IconClose size={18} />
          </button>
        </div>
        <div className="modal-body">
          <p className="kicker">{eventFullDate(event.dt)}</p>
          <h3 id="event-title" className="display display-md" style={{ margin: '0.35rem 0 0.6rem' }}>
            {event.title}
          </h3>
          <p style={{ margin: '0 0 0.4rem', color: 'var(--color-muted)' }}>{event.time}</p>
          <p style={{ margin: '0 0 1rem', color: 'var(--color-muted)' }}>{eventPlace(event)}</p>
          <p style={{ margin: '0 0 1.2rem' }}>{event.description}</p>
          {event.food.length > 0 && (
            <p style={{ margin: '0 0 1.2rem', color: 'var(--color-muted)' }}>
              On the grill: {event.food.join(' · ')}
            </p>
          )}
          <div className="hero-actions">
            <a className="btn btn-primary" href={eventDirections(event)} target="_blank" rel="noreferrer">
              <IconMap size={18} /> Directions
            </a>
            <button className="btn btn-ghost" type="button" onClick={() => downloadEventIcs(event)}>
              <IconCalendar size={18} /> Add to calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
