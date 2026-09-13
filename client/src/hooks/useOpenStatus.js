import { useEffect, useState } from 'react'

// Lagos is UTC+1 all year (no DST). Hub opens Mon–Sat 08:00–16:00.
const OPEN = 8, CLOSE = 16

function compute() {
  const now = new Date()
  const lagos = new Date(now.getTime() + (now.getTimezoneOffset() + 60) * 60000)
  const day = lagos.getDay() // 0 = Sun
  const h = lagos.getHours() + lagos.getMinutes() / 60
  const isOpen = day !== 0 && h >= OPEN && h < CLOSE
  let label
  if (isOpen) label = `Open · closes ${CLOSE - 12}:00 PM`
  else if (day === 0) label = 'Closed Sundays · opens Mon 8:00 AM'
  else if (h < OPEN) label = 'Opens today at 8:00 AM'
  else label = day === 6 ? 'Closed · opens Mon 8:00 AM' : 'Closed · opens tomorrow 8:00 AM'
  const time = lagos.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit', hour12: true })
  return { isOpen, label, time }
}

export default function useOpenStatus() {
  const [state, setState] = useState(compute)
  useEffect(() => {
    const id = setInterval(() => setState(compute()), 30000)
    return () => clearInterval(id)
  }, [])
  return state
}
