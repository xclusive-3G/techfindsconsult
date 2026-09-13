import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import { site, nav } from '../data/site'
import Chip from './Chip'
import useOpenStatus from '../hooks/useOpenStatus'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#overview')
  const status = useOpenStatus()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight the section in view
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="w-full bg-white/70 backdrop-blur-md border-b border-indigo-100/70 py-2 px-4 text-xs font-medium text-slate-600 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Chip tone={status.isOpen ? 'emerald' : 'slate'} pulse={status.isOpen} className="text-[10px] uppercase tracking-wide">
              {status.isOpen ? 'Open now' : 'Closed'}
            </Chip>
            <span className="hidden sm:inline-flex items-center gap-1 truncate"><MapPin size={12} className="text-indigo-500" />{site.addressShort}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1"><Clock size={12} className="text-indigo-500" />{site.hours}</span>
            <a className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold" href={`tel:${site.phones[0].tel}`}>
              <Phone size={12} />{site.phones[0].display}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 px-4 pt-3 pb-2">
        <nav
          className={`max-w-7xl mx-auto glass rounded-full pl-4 pr-2 py-2 flex items-center justify-between transition-all duration-300 ${scrolled ? 'shadow-glass-lg' : ''}`}
          aria-label="Primary"
        >
          <a className="flex items-center gap-3 shrink-0" href="#overview" aria-label="TechFinds home">
            <Logo />
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
            {nav.map((n) => (
              <li key={n.href} className="relative">
                <a
                  href={n.href}
                  className={`relative z-10 px-3.5 py-1.5 rounded-full transition-colors ${active === n.href ? 'text-indigo-700' : 'hover:text-indigo-600'}`}
                >
                  {n.label}
                </a>
                {active === n.href && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white shadow-sm" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a className="btn-ink !px-5 !py-2.5 text-xs md:text-sm" href="#reserve">Book a desk</a>
            <button
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-slate-800 hover:bg-white transition"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute top-3 right-3 left-3 glass rounded-3xl p-6 bg-white/90"
              initial={{ y: -20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog" aria-label="Menu"
            >
              <div className="flex items-center justify-between mb-4">
                <Logo className="h-9" />
                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100" onClick={() => setOpen(false)} aria-label="Close menu"><X size={20} /></button>
              </div>
              <ul className="divide-y divide-slate-100">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-semibold text-slate-800 hover:text-indigo-600">{n.label}</a>
                  </li>
                ))}
              </ul>
              <a className="btn-primary w-full mt-4" href="#reserve" onClick={() => setOpen(false)}>Book a desk</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
