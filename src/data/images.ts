import type { SignatureId } from './site'

export const images = {
  heroSuya: '/images/hero-suya.jpg',
  flameGrill: '/images/flame-grill.jpg',
  chickenSuya: '/images/chicken-suya.jpg',
  beefSuya: '/images/beef-suya.jpg',
  asun: '/images/asun.jpg',
  jollofSuya: '/images/jollof-suya.jpg',
  loadedFries: '/images/loaded-fries.jpg',
  suyaWrap: '/images/suya-wrap.jpg',
  cateringSpread: '/images/catering-spread.jpg',
  cateringGuests: '/images/catering-guests.jpg',
  truck: '/images/truck-hero.jpg',
  plantain: '/images/plantain.jpg',
  eventCrowd: '/images/event-crowd.jpg',
} as const

export const dishImage: Record<SignatureId, string> = {
  'chicken-suya': images.chickenSuya,
  'beef-suya': images.beefSuya,
  asun: images.asun,
  'jollof-suya': images.jollofSuya,
  'loaded-fries': images.loadedFries,
  'suya-wrap': images.suyaWrap,
}

export const eventImage: Record<string, string> = {
  e1: images.eventCrowd,
  e2: images.truck,
  e3: images.cateringSpread,
  e4: images.heroSuya,
  e0: images.flameGrill,
}

export const storyPhotos = [
  { id: 'story-grill', src: images.flameGrill, alt: 'Suya grilling over charcoal', rows: 2, cols: 2, radius: '32px' },
  { id: 'story-food', src: images.jollofSuya, alt: 'Jollof and suya', rows: 1, cols: 1, radius: '999px' },
  { id: 'story-people', src: images.cateringGuests, alt: 'Guests at the truck', rows: 1, cols: 1, radius: '32px' },
  { id: 'story-truck', src: images.truck, alt: 'The Lagos Flame & Grill truck', rows: 1, cols: 2, radius: '32px' },
  { id: 'story-community', src: images.eventCrowd, alt: 'Community gathering', rows: 1, cols: 1, radius: '32px' },
  { id: 'story-events', src: images.eventCrowd, alt: 'Outdoor event', rows: 1, cols: 1, radius: '999px' },
] as const

export const socialPhotos = [
  { src: images.heroSuya, alt: 'Suya over the flame', round: false },
  { src: images.jollofSuya, alt: 'Jollof plate', round: true },
  { src: images.chickenSuya, alt: 'Chicken suya', round: false },
  { src: images.loadedFries, alt: 'Suya loaded fries', round: false },
  { src: images.suyaWrap, alt: 'Suya wrap', round: true },
  { src: images.plantain, alt: 'Fried plantain', round: false },
  { src: images.truck, alt: 'The food truck', round: false },
  { src: images.asun, alt: 'Asun', round: true },
] as const
