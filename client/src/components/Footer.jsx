import { site, nav } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-indigo-100 py-12 px-4 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo className="h-9" />
          <span className="text-xs text-slate-500">{site.tagline}</span>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
          {nav.map((n) => <li key={n.href}><a className="hover:text-indigo-600 transition" href={n.href}>{n.label}</a></li>)}
        </ul>
        <div className="text-xs text-slate-500 text-center md:text-right">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Empowering ideas. Delivering impact. FUTA Northgate, Akure.</p>
        </div>
      </div>
    </footer>
  )
}
