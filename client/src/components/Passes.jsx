import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Wifi, WifiOff, Zap, ZapOff } from 'lucide-react'
import { passes, naira } from '../data/site'
import Reveal, { SectionHeading } from './Reveal'
import Chip from './Chip'

const periods = ['Hourly', 'Daily', 'Weekly', 'Monthly']

export default function Passes() {
  const [period, setPeriod] = useState('Daily')
  return (
    <section id="passes" className="mb-24 scroll-mt-28">
      <div className="glass rounded-3xl p-6 sm:p-10">
        <SectionHeading
          title="Short-term passes"
          lead="Pick full infrastructure — WiFi and power backup — or a bare desk for quiet offline work. Installments accepted on recurring passes."
          action={<PeriodToggle period={period} setPeriod={setPeriod} />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PassCard data={passes.regular} period={period} featured icons={[<Wifi key="w" size={14} />, <Zap key="z" size={14} />]} />
          <PassCard data={passes.bare} period={period} icons={[<WifiOff key="w" size={14} />, <ZapOff key="z" size={14} />]} />
        </div>

        <Reveal className="mt-6 rounded-2xl bg-indigo-900 text-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center shrink-0"><Clock size={18} className="text-indigo-200" /></div>
            <div>
              <h4 className="font-bold text-sm">Power backup schedule</h4>
              <p className="text-xs text-indigo-200">The generator runs 4 hours a day when PHCN drops: 2 hours in the morning and 2 in the afternoon.</p>
            </div>
          </div>
          <a className="btn !py-2 !px-4 bg-white text-indigo-900 hover:bg-indigo-50 text-xs shrink-0" href="#reserve">Reserve a desk</a>
        </Reveal>
      </div>
    </section>
  )
}

function PeriodToggle({ period, setPeriod }) {
  return (
    <div className="relative inline-flex p-1 rounded-full bg-indigo-50/80 ring-1 ring-indigo-100 text-xs font-semibold self-start" role="tablist" aria-label="Billing period">
      {periods.map((p) => (
        <button
          key={p} role="tab" aria-selected={period === p}
          onClick={() => setPeriod(p)}
          className={`relative z-10 px-3.5 py-1.5 rounded-full transition-colors ${period === p ? 'text-white' : 'text-slate-600 hover:text-indigo-700'}`}
        >
          {period === p && <motion.span layoutId="period-pill" className="absolute inset-0 rounded-full bg-indigo-600 -z-10" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
          {p}
        </button>
      ))}
    </div>
  )
}

function PassCard({ data, period, featured, icons }) {
  const current = data.prices.find((p) => p.period === period)
  const unit = { Hourly: 'per hour', Daily: 'per day', Weekly: 'per week', Monthly: 'per month' }[period]
  return (
    <div className={`rounded-2xl p-6 ${featured ? 'bg-gradient-to-br from-white/95 to-indigo-50/50 ring-1 ring-indigo-200' : 'bg-white/70 ring-1 ring-slate-200'}`}>
      <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200/70">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{data.name}</h3>
          <p className={`text-xs mt-0.5 flex items-center gap-1.5 ${featured ? 'text-indigo-700' : 'text-slate-500'}`}>{icons} {data.note}</p>
        </div>
        <Chip tone={featured ? 'indigo' : 'slate'}>{data.tag}</Chip>
      </div>

      <div className="flex items-baseline gap-2 pt-5 h-20">
        <AnimatePresence mode="wait">
          <motion.span
            key={period}
            className="text-4xl font-extrabold text-slate-900 tabular-nums"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            {naira(current.amount)}
          </motion.span>
        </AnimatePresence>
        <span className="text-sm text-slate-500">{unit}</span>
      </div>

      <ul className="grid grid-cols-4 gap-2 text-center text-[11px] text-slate-500 mt-1">
        {data.prices.map((p) => (
          <li key={p.period} className={`rounded-lg py-1.5 ${p.period === period ? 'bg-white ring-1 ring-indigo-200 text-slate-900 font-semibold' : ''}`}>
            <div>{p.period}</div><div className="tabular-nums">{naira(p.amount)}</div>
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500 mt-4 leading-relaxed">{data.blurb}</p>
    </div>
  )
}
