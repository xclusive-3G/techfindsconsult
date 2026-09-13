import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, Zap, Wifi, CheckCircle2 } from 'lucide-react'
import Chip from './Chip'
import useOpenStatus from '../hooks/useOpenStatus'
import useCountUp from '../hooks/useCountUp'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="overview" className="mb-20 scroll-mt-32">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        variants={reduce ? undefined : container}
        initial="hidden" animate="show"
      >
        <div className="lg:col-span-6 space-y-6">
          <motion.div variants={item}>
            <Chip tone="white" className="!px-3.5 !py-1.5 text-indigo-700">
              <span className="w-2 h-2 rounded-full bg-indigo-600" /> <span className="sm:hidden">FUTA Northgate, Akure</span><span className="hidden sm:inline">TechFinds Consult Limited · FUTA Northgate hub</span>
            </Chip>
          </motion.div>
          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.08]">
            A workspace in Akure where the power stays on and the WiFi keeps up.
          </motion.h1>
          <motion.p variants={item} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Hot desks, annual memberships and a 14-track tech academy at FUTA Northgate — built for freelancers, remote teams, researchers and students who need daily PHCN plus guaranteed generator backup and 100 Mbps+ internet.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
            <a className="btn-primary" href="#passes">See workspace passes <ArrowRight size={16} /></a>
            <a className="btn-glass" href="#academy"><BookOpen size={16} className="text-indigo-600" /> Explore the academy</a>
          </motion.div>
          <motion.ul variants={item} className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 pt-1">
            {['Hourly, daily, weekly & monthly passes', 'Installment plans on memberships', 'Free family training on Gold & Platinum'].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-indigo-500" />{t}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div variants={item} className="lg:col-span-6">
          <FacilityPanel />
        </motion.div>
      </motion.div>

      <StatStrip />
    </section>
  )
}

/* The one bold moment on the page: a live facility panel. Open/closed status is computed
   from Lagos time, and the power timeline shows the daily PHCN + generator guarantee. */
function FacilityPanel() {
  const status = useOpenStatus()
  const reduce = useReducedMotion()
  return (
    <div className="relative rounded-3xl p-5 sm:p-6 glass shadow-glass-lg">
      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-white text-xs font-bold shadow-md">TF</div>
          <div>
            <p className="text-xs font-bold text-slate-800">Facility status</p>
            <p className="text-[11px] text-slate-500">Akure · {status.time}</p>
          </div>
        </div>
        <Chip tone={status.isOpen ? 'emerald' : 'slate'} pulse={status.isOpen}>{status.label}</Chip>
      </div>

      <div className="glass-ink rounded-2xl p-5 sm:p-6 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-indigo-500/15 blur-2xl" />
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/30 ring-1 ring-indigo-400/30 flex items-center justify-center"><Zap size={15} className="text-indigo-300" /></div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">Daily power guarantee</h3>
              <p className="text-[11px] text-slate-400">PHCN all day + 4 hours generator when supply drops (2h morning, 2h afternoon)</p>
            </div>
          </div>
          <span className="px-2.5 py-1 text-[11px] bg-indigo-950 text-indigo-300 rounded-md ring-1 ring-indigo-800 shrink-0">Active</span>
        </div>

        <PowerTimeline reduce={reduce} />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 border-t border-white/10">
          <Metric label="Hot desk" value="₦1,500" suffix="/hr" />
          <Metric label="Network" value="100 Mbps+" tone="text-emerald-400" icon={<Wifi size={13} className="text-emerald-400" />} />
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[11px] text-slate-400">Hours</span>
            <p className="text-xs font-semibold text-slate-200 mt-1">Mon–Sat, 8 AM – 4 PM</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {[['Desks', 'Dedicated', 'bg-indigo-500'], ['Mentorship', '1-on-1', 'bg-blue-500'], ['Location', 'FUTA Gate', 'bg-purple-500']].map(([k, v, c]) => (
          <div key={k} className="glass-subtle p-3 rounded-2xl text-center">
            <span className="text-[11px] text-slate-500 font-medium">{k}</span>
            <p className="text-sm sm:text-base font-bold text-indigo-900 mt-0.5">{v}</p>
            <div className={`h-1 w-8 ${c} rounded-full mx-auto mt-1.5`} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Metric({ label, value, suffix, tone = 'text-white', icon }) {
  return (
    <div>
      <span className="text-[11px] text-slate-400 flex items-center gap-1">{icon}{label}</span>
      <p className={`text-xl font-bold ${tone} mt-0.5`}>{value}{suffix && <span className="text-xs text-indigo-300 font-normal"> {suffix}</span>}</p>
    </div>
  )
}

function PowerTimeline({ reduce }) {
  const hours = ['8', '10', '12', '2', '4']
  return (
    <div className="pt-5 pb-1">
      <div className="flex justify-between text-[10px] text-slate-500 mb-1.5 px-0.5">{hours.map((h) => <span key={h}>{h}</span>)}</div>
      <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500/70 to-indigo-400/70"
          initial={reduce ? { width: '100%' } : { width: 0 }} animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6 }}
        />
        {/* Generator windows: 2h morning + 2h afternoon within the 8-hour day */}
        {[{ l: '12.5%', d: 1.6 }, { l: '62.5%', d: 1.85 }].map((w) => (
          <motion.div
            key={w.l}
            className="absolute inset-y-0 w-1/4 bg-emerald-400/90"
            style={{ left: w.l }}
            initial={reduce ? { scaleX: 1 } : { scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: w.d }}
          />
        ))}
      </div>
      <div className="flex items-center gap-4 mt-2 text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-indigo-400/80" /> PHCN supply</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" /> Generator backup guarantee (2h + 2h)</span>
      </div>
    </div>
  )
}

function StatStrip() {
  const stats = [
    { label: 'Hot desk entry', value: 1500, prefix: '₦', suffix: '/hr', chip: ['WiFi + gen', 'indigo'] },
    { label: 'Academy tracks', value: 14, chip: ['Hands-on', 'blue'] },
    { label: 'Generator backup daily', value: 4, suffix: 'h', chip: ['2h + 2h split', 'purple'] },
    { label: 'Open days a week', value: 6, chip: ['8 AM – 4 PM', 'slate'] },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {stats.map((s) => <Stat key={s.label} {...s} />)}
    </div>
  )
}

function Stat({ label, value, prefix = '', suffix = '', chip }) {
  const [ref, n] = useCountUp(value)
  return (
    <div ref={ref} className="glass rounded-2xl p-4 flex items-center justify-between gap-2">
      <div className="min-w-0">
        <span className="text-xs text-slate-500 font-semibold">{label}</span>
        <p className="text-xl font-extrabold text-slate-900 mt-0.5 tabular-nums">
          {prefix}{n.toLocaleString('en-NG')}<span className="text-xs font-medium text-slate-500">{suffix}</span>
        </p>
      </div>
      <Chip tone={chip[1]} className="shrink-0">{chip[0]}</Chip>
    </div>
  )
}
