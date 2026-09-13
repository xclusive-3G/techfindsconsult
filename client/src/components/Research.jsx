import { BarChart3, Printer, Users, Lightbulb } from 'lucide-react'
import { services } from '../data/site'
import Reveal from './Reveal'

const icons = { BarChart3, Printer, Users, Lightbulb }

export default function Research() {
  return (
    <section id="research" className="mb-24 scroll-mt-28">
      <div className="glass-ink rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="orb w-72 h-72 bg-indigo-600/25 -bottom-20 -right-20 animate-drift" />
        <Reveal className="relative z-10 max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Research desk and ICT services</h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Beyond desks, TechFinds supports undergraduate and postgraduate scholars, startups and institutions with field research, documentation, meeting space and product advisory.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {services.map((s) => {
            const Icon = icons[s.icon]
            return (
              <div key={s.name} className="bg-white/5 ring-1 ring-white/10 p-5 rounded-2xl backdrop-blur-md hover:bg-white/[.08] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-4"><Icon size={18} /></div>
                <h3 className="font-bold text-slate-100 mb-1">{s.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
