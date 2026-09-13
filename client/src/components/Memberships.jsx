import { Check, Sparkles } from 'lucide-react'
import { memberships, naira } from '../data/site'
import Reveal, { SectionHeading } from './Reveal'
import Chip from './Chip'

const accents = {
  slate: { ring: '', chip: 'slate', check: 'text-indigo-600', btn: 'btn-ink' },
  amber: { ring: '', chip: 'amber', check: 'text-amber-600', btn: 'btn-ink hover:!bg-amber-600' },
  indigo: { ring: 'ring-2 ring-indigo-400 bg-white/85 md:-translate-y-3', chip: 'indigo', check: 'text-emerald-600', btn: 'btn-primary' },
}

export default function Memberships() {
  return (
    <section id="memberships" className="mb-24 scroll-mt-28">
      <SectionHeading
        align="center"
        title="Annual executive memberships"
        lead="For teams, corporations and full-time builders who need a permanent premium desk, networking, family education perks and installment flexibility."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {memberships.map((m, i) => <Plan key={m.id} m={m} delay={i * 0.08} />)}
      </div>
    </section>
  )
}

function Plan({ m, delay }) {
  const a = accents[m.accent]
  return (
    <Reveal delay={delay} className={`relative glass rounded-3xl p-7 flex flex-col ${a.ring}`}>
      {m.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[11px] font-extrabold text-indigo-800 bg-white ring-1 ring-indigo-200 shadow-md">
            <Sparkles size={12} /> Most popular
          </span>
        </div>
      )}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-3">
          <h3 className={`font-extrabold text-slate-900 ${m.featured ? 'text-3xl' : 'text-2xl'}`}>{m.name}</h3>
          <Chip tone={a.chip}>{m.featured ? 'Complete suite' : m.accent === 'amber' ? 'Executive' : 'Core desk'}</Chip>
        </div>
        <p className="text-xs text-slate-500">{m.summary}</p>
        <div className="my-6">
          <div className="flex items-baseline gap-1">
            <span className={`font-extrabold text-slate-900 tabular-nums ${m.featured ? 'text-4xl' : 'text-3xl'}`}>{naira(m.price)}</span>
            <span className="text-xs font-semibold text-slate-500">/ year</span>
          </div>
          <p className={`text-[11px] font-semibold mt-1 ${m.featured ? 'text-emerald-600' : 'text-indigo-600'}`}>✓ {m.highlight}</p>
        </div>
        <ul className="space-y-3 text-sm text-slate-700 border-t border-slate-200/70 pt-5">
          {m.perks.map((p, i) => (
            <li key={p} className={`flex items-start gap-2.5 ${i < 2 && m.accent !== 'slate' ? 'font-semibold text-slate-900' : ''}`}>
              <Check size={16} className={`${a.check} mt-0.5 shrink-0`} strokeWidth={2.5} /><span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <a className={`${a.btn} w-full mt-8 text-xs`} href="#reserve">{m.featured ? 'Claim Platinum membership' : `Select ${m.name}`}</a>
    </Reveal>
  )
}
