import { directionsUrl, site, type SiteEvent } from '../data/site'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] as const
const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const

export type DatedEvent = SiteEvent & { dt: Date }

export function parseEventDate(date: string): Date {
  const [y, m, d] = date.split('-').map(Number)
  return new Date(y, (m ?? 1) - 1, d ?? 1)
}

export function datedEvents(): DatedEvent[] {
  return site.events.map((event) => ({ ...event, dt: parseEventDate(event.date) }))
}

export function splitEvents(now = new Date()) {
  const today = new Date(now)
  today.setHours(0, 0, 0, 0)
  const all = datedEvents()
  return {
    upcoming: all.filter((e) => e.dt >= today).sort((a, b) => a.dt.getTime() - b.dt.getTime()),
    past: all.filter((e) => e.dt < today).sort((a, b) => b.dt.getTime() - a.dt.getTime()),
  }
}

export function eventShort(dt: Date): string {
  return `${MONTHS[dt.getMonth()]} ${dt.getDate()}`
}

export function eventDay(dt: Date): string {
  return String(dt.getDate()).padStart(2, '0')
}

export function eventMonth(dt: Date): string {
  return MONTHS[dt.getMonth()]
}

export function eventWeekday(dt: Date): string {
  return WEEKDAYS[dt.getDay()]
}

export function eventFullDate(dt: Date): string {
  return dt.toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

export function eventPlace(event: SiteEvent): string {
  return event.address.length > 0 ? event.address : event.location
}

export function eventDirections(event: SiteEvent): string {
  return event.directionsUrl || directionsUrl(eventPlace(event))
}
