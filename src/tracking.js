// Demo tracking store: bookings live in localStorage; unknown IDs get a stable fake status.
const KEY = 'ifixit-bookings'

export const stages = [
  { title: 'Device Received', text: 'Your device has been checked in and logged.' },
  { title: 'Diagnosis', text: 'A technician is running a full diagnostic.' },
  { title: 'Repair In Progress', text: 'Parts are being replaced and repaired.' },
  { title: 'Quality Testing', text: 'Every function is being stress-tested.' },
  { title: 'Ready For Pickup', text: 'Your device is ready — come and collect it!' },
]

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

export function saveBooking(data) {
  const id = 'IFX-' + Math.floor(10000 + Math.random() * 90000)
  const booking = { ...data, id, created: Date.now() }
  localStorage.setItem(KEY, JSON.stringify({ ...load(), [id]: booking }))
  return booking
}

export function findRepair(rawId) {
  const id = rawId.trim().toUpperCase()
  if (!/^IFX-\d{5}$/.test(id)) return null
  const booking = load()[id]
  if (booking) {
    // Fresh bookings advance one stage every 2 minutes so the demo visibly moves
    const stage = Math.min(stages.length - 1, Math.floor((Date.now() - booking.created) / 120000))
    return { id, device: `${booking.serviceTitle} — ${booking.model}`, issue: booking.issue, date: booking.date, stage }
  }
  const n = Number(id.slice(4))
  const devices = ['iPhone 15 Pro', 'Samsung Galaxy S24', 'MacBook Air M2', 'iPad Pro 11"', 'PlayStation 5', 'Apple Watch S9']
  const issues = ['Screen replacement', 'Battery replacement', 'Charging port repair', 'Logic board repair', 'HDMI port replacement']
  return { id, device: devices[n % devices.length], issue: issues[n % issues.length], date: 'Received 2 days ago', stage: n % stages.length }
}
