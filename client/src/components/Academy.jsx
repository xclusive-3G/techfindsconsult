import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { tracks, gallery } from '../data/site'
import Reveal, { SectionHeading } from './Reveal'
import Chip from './Chip'

const groups = ['All', 'Data', 'Engineering', 'Design', 'Business']

export default function Academy() {
  const [group, setGroup] = useState('All')
  const list = group === 'All' ? tracks : tracks.filter((t) => t.group === group)

  return (
    <section id="academy" className="mb-24 scroll-mt-28">
      <SectionHeading
        title="14 tech tracks, taught hands-on"
        lead="Mentored, project-based training at FUTA Northgate — you build real work from the first week. Free for family members on Gold and Platinum memberships."
        action={
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter tracks">
            {groups.map((g) => (
              <button key={g} role="tab" aria-selected={group === g} onClick={() => setGroup(g)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${group === g ? 'bg-slate-900 text-white' : 'bg-white/70 text-slate-600 ring-1 ring-slate-200 hover:bg-white'}`}>
                {g}
              </button>
            ))}
          </div>
        }
      />

      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {list.map((t) => (
              <motion.article
                key={t.name} layout
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="glass p-5 rounded-2xl hover:bg-white/90 transition-colors"
              >
                <Chip tone={{ Data: 'blue', Engineering: 'indigo', Design: 'purple', Business: 'amber' }[t.group]} className="mb-3">{t.group}</Chip>
                <h3 className="font-bold text-slate-900">{t.name}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{t.tools}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <Gallery />
    </section>
  )
}

function Gallery() {
  return (
    <div className="mt-20" id="gallery">
      <SectionHeading
        title="Inside the bootcamp"
        lead="Daily sessions at FUTA Northgate: real mentors, individual desk stations, and collaborative problem solving."
        action={
          <div className="flex flex-wrap gap-2">
            <Chip tone="emerald" pulse>Cohort in session</Chip>
            <Chip tone="indigo">100% practical labs</Chip>
          </div>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {gallery.map((g) => (
          <figure key={g.title} className={`${g.span} glass rounded-3xl p-4 sm:p-5 group`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900">
              <img alt={g.title} loading="lazy" src={g.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/75 backdrop-blur text-white text-[11px] font-medium ring-1 ring-white/20">{g.tag}</span>
            </div>
            <figcaption className="pt-4 px-1">
              <h3 className="text-base font-bold text-slate-900">{g.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{g.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
