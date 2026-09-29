import { Sparkles, ShieldCheck, Users2 } from 'lucide-react'
import { founder, faculty } from '../data/site'
import Reveal, { SectionHeading } from './Reveal'
import Chip from './Chip'

const tagTones = {
  'Video & Motion': 'purple',
  'Biostatistics & Data': 'blue',
  'Web & Growth': 'emerald',
  'Graphic Design': 'amber',
  'Data Analytics': 'blue',
  'Software Dev': 'indigo',
  'UI/UX Design': 'purple',
}

export default function Leadership() {
  return (
    <section id="faculty" className="mb-24 scroll-mt-28">
      <Chip tone="indigo" className="mb-4 !text-[10px] uppercase tracking-wide">TechFinds Consult Leadership & Faculty</Chip>
      <SectionHeading
        title="Founder & certified elite instructors"
        lead="Learn directly from industry practitioners, FUTA first-class scholars, international researchers, and enterprise engineers guiding hands-on skill delivery in Akure."
        action={
          <div className="flex flex-wrap gap-2">
            <Chip tone="emerald" pulse>100% Verified Practitioners</Chip>
            <Chip tone="white">1-on-1 Mentorship Model</Chip>
          </div>
        }
      />

      <Reveal className="glass rounded-3xl p-6 sm:p-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900 ring-1 ring-indigo-100/70">
              <img src={founder.img} alt={founder.name} loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/75 backdrop-blur text-white text-[11px] font-medium ring-1 ring-white/20">
                <Sparkles size={12} className="text-amber-300" /> {founder.badge}
              </span>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-3">
              <Chip tone="indigo">{founder.roleTags[0]}</Chip>
              <Chip tone="white">{founder.roleTags[1]}</Chip>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{founder.name}</h3>
            <p className="text-sm font-medium text-indigo-600 mt-1">{founder.subtitle}</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">{founder.bio}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {founder.stats.map((s) => (
                <div key={s.label} className="rounded-xl p-3 bg-white/70 ring-1 ring-slate-200/60">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{s.label}</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((f) => (
          <article key={f.name} className="glass rounded-3xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/5] bg-slate-900">
              <img src={f.img} alt={f.name} loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/75 backdrop-blur text-white text-[11px] font-medium ring-1 ring-white/20">
                {f.badge}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 leading-snug">{f.name}</h3>
                  <p className="text-xs font-medium text-indigo-600 mt-0.5">{f.title}</p>
                </div>
                <Chip tone={tagTones[f.tag] || 'slate'} className="shrink-0 !text-[10px]">{f.tag}</Chip>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mt-3 flex-1">{f.bio}</p>
              <div className="pt-3 mt-3 border-t border-indigo-100/70 flex items-center justify-between gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-slate-500 min-w-0">
                  <Users2 size={12} className="text-indigo-500 shrink-0" />
                  <span className="truncate">{f.skill}</span>
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 shrink-0">
                  <ShieldCheck size={12} /> {f.credential}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
