export const site = {
  business: {
    name: 'Lagos Flame & Grill Ltd.',
    shortName: 'Lagos Flame & Grill',
    tagline: 'Taste Lagos • Feel The Flame',
    street: '9833 Corbould St',
    city: 'Chilliwack',
    region: 'BC',
    postal: 'V2P 4B8',
    country: 'Canada',
    phone: '+1 778-319-0194',
    phoneHref: 'tel:+17783190194',
    emails: ['Info@lagosflame.com', 'Info@lagosflamegrill.com'],
  },
  social: {
    instagram: { url: '', handle: '' },
    facebook: { url: '', handle: '' },
    tiktok: { url: '', handle: '' },
  },
  signature: [
    { id: 'chicken-suya', name: 'Chicken Suya', desc: 'Spicy grilled chicken skewers, onions, tomatoes and authentic yaji spice.', tag: 'Open flame' },
    { id: 'beef-suya', name: 'Beef Suya', desc: 'Tender beef suya with authentic Lagos yaji, onions and our signature flame.', tag: 'The original' },
    { id: 'asun', name: 'Asun', desc: 'Smoky grilled goat meat, spicy peppers and onions.', tag: 'Smoky + spicy' },
    { id: 'jollof-suya', name: 'Jollof + Chicken Suya', desc: 'Smoky party jollof, chicken suya sticks and sweet fried plantain.', tag: 'Party plate' },
    { id: 'loaded-fries', name: 'Suya Loaded Fries', desc: 'Crispy fries, suya meat, onions and flame sauce.', tag: 'Street favourite' },
    { id: 'suya-wrap', name: 'Suya Wrap', desc: 'Suya meat, cabbage, onions and flame sauce wrapped together.', tag: 'On the go' },
  ],
  menu: [
    {
      id: 'flame',
      title: 'The Flame',
      sub: 'Suya Spot',
      items: [
        { name: 'Chicken Suya', desc: 'Spicy grilled chicken skewers, onions, tomatoes, yaji spice', price: null, photo: '/images/chicken-suya.jpg' },
        { name: 'Beef Suya', desc: 'Tender beef suya, authentic Lagos yaji, onions', price: null, photo: '/images/beef-suya.jpg' },
        { name: 'Asun', desc: 'Smoky grilled goat meat, spicy peppers, onions', price: null, photo: '/images/asun.jpg' },
        { name: 'Mixed Suya Platter', desc: 'Chicken, beef, goat + 2 sides', price: null, photo: '/images/hero-suya.jpg' },
      ],
    },
    {
      id: 'rice',
      title: 'Rice & Mains',
      sub: 'From the pot',
      items: [
        { name: 'Jollof Rice + Chicken Suya', desc: '', price: null, photo: '/images/jollof-suya.jpg' },
        { name: 'Jollof Rice + Beef Suya', desc: '', price: null, photo: '/images/jollof-suya.jpg' },
        { name: 'Fried Rice + Grilled Chicken', desc: '', price: null, photo: '/images/chicken-suya.jpg' },
        { name: 'Jollof + Fried Rice Combo', desc: 'With meat', price: 23, photo: '/images/catering-spread.jpg' },
      ],
    },
    {
      id: 'wraps',
      title: 'Wraps & Loaded Fries',
      sub: 'Handhelds',
      items: [
        { name: 'Suya Wrap', desc: 'Tortilla, suya meat, cabbage, onions, flame sauce', price: null, photo: '/images/suya-wrap.jpg' },
        { name: 'Suya Loaded Fries', desc: 'Fries, suya meat, onions, flame sauce', price: null, photo: '/images/loaded-fries.jpg' },
      ],
    },
    {
      id: 'sides',
      title: 'Sides',
      sub: 'Sweet + golden',
      items: [{ name: 'Fried Plantain (Dodo)', desc: '', price: null, photo: '/images/plantain.jpg' }],
    },
    {
      id: 'drinks',
      title: 'Drinks',
      sub: 'Cool down',
      items: [
        { name: 'Drink', desc: '', price: null },
        { name: 'Bottled Water / Pop', desc: '', price: null },
      ],
    },
  ],
  events: [
    { id: 'e1', title: 'Harvest Night Market', date: '2026-10-03', time: '4:00 PM – 9:00 PM', location: 'Chilliwack, BC', address: '9833 Corbould St, Chilliwack, BC V2P 4B8', description: 'Come taste the flame. Suya off the grill all evening, jollof by the scoop and dodo while it lasts.', food: ['Chicken Suya', 'Beef Suya', 'Jollof + Chicken Suya', 'Fried Plantain'], directionsUrl: '', eventUrl: '' },
    { id: 'e2', title: 'Fraser Valley Food Truck Fest', date: '2026-10-17', time: '11:00 AM – 6:00 PM', location: 'Abbotsford, BC', address: 'Abbotsford, BC', description: 'The whole valley in one parking lot. Find the smoke and follow it to us.', food: ['Chicken Suya', 'Asun', 'Suya Loaded Fries', 'Suya Wrap'], directionsUrl: '', eventUrl: '' },
    { id: 'e3', title: 'Community Culture Day', date: '2026-11-07', time: '12:00 PM – 5:00 PM', location: 'Langley, BC', address: 'Langley, BC', description: 'Music, family and a proper taste of Lagos. Bring your people.', food: ['Beef Suya', 'Jollof Rice + Beef Suya', 'Fried Rice + Grilled Chicken', 'Fried Plantain'], directionsUrl: '', eventUrl: '' },
    { id: 'e4', title: 'Winter Lights Market', date: '2026-12-05', time: '3:00 PM – 8:00 PM', location: 'Chilliwack, BC', address: 'Chilliwack, BC', description: 'Warm hands, warm plate. The grill stays hot all night.', food: ['Mixed Suya Platter', 'Suya Wrap', 'Jollof + Fried Rice Combo'], directionsUrl: '', eventUrl: '' },
    { id: 'e0', title: 'Summer Farmers Market', date: '2026-08-22', time: '9:00 AM – 2:00 PM', location: 'Chilliwack, BC', address: 'Chilliwack, BC', description: 'Thank you for coming out.', food: [], directionsUrl: '', eventUrl: '' },
  ],
  catering: {
    categories: ['Weddings', 'Corporate Events', 'Private Parties', 'Festivals', 'Farmers Markets', 'Community Events'],
    eventTypes: ['Wedding', 'Corporate event', 'Private party', 'Festival', 'Farmers market', 'Community event', 'Other'],
    services: ['Food truck on-site', 'Drop-off catering', 'Buffet setup', 'Not sure yet'],
    budgets: ['Under $1,000', '$1,000 – $2,500', '$2,500 – $5,000', '$5,000+', 'Not sure yet'],
  },
} as const

export type SignatureId = (typeof site.signature)[number]['id']
export type SiteEvent = (typeof site.events)[number]
export type NavTarget = 'home' | 'menu' | 'events' | 'catering' | 'story' | 'contact' | 'social'
export type View = 'home' | 'menu' | 'catering'

export function formatPrice(price: number | null): string {
  if (price == null) return '$'
  return Number.isInteger(price) ? `$${price}` : `$${price.toFixed(2)}`
}

export function fullAddress(): string {
  const b = site.business
  return `${b.street}, ${b.city}, ${b.region} ${b.postal}, ${b.country}`
}

export function cityLine(): string {
  const b = site.business
  return `${b.city}, ${b.region} ${b.postal}`
}

export function directionsUrl(destination = fullAddress()): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
}
