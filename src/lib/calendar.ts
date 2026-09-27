import type { DatedEvent } from './events'

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

function icsText(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
}

function parseClock(part: string | undefined): [number, number] | null {
  const match = part?.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
  if (!match) return null
  let hour = Number(match[1]) % 12
  if (/pm/i.test(match[3] ?? '')) hour += 12
  return [hour, Number(match[2])]
}

function laterClock(start: [number, number], hours: number): [number, number] {
  return [(start[0] + hours) % 24, start[1]]
}

export function downloadEventIcs(event: DatedEvent) {
  const [startPart, endPart] = event.time.split(/–|—|-/)
  const start = parseClock(startPart) ?? [12, 0]
  const end = parseClock(endPart) ?? laterClock(start, 3)
  const stamp = `${event.dt.getFullYear()}${pad(event.dt.getMonth() + 1)}${pad(event.dt.getDate())}`
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Lagos Flame & Grill//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}@lagosflame.com`,
    `DTSTART;TZID=America/Vancouver:${stamp}T${pad(start[0])}${pad(start[1])}00`,
    `DTEND;TZID=America/Vancouver:${stamp}T${pad(end[0])}${pad(end[1])}00`,
    `SUMMARY:${icsText(`Lagos Flame & Grill — ${event.title}`)}`,
    `LOCATION:${icsText(event.address)}`,
    `DESCRIPTION:${icsText(event.description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `lagos-flame-${event.id}.ics`
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
