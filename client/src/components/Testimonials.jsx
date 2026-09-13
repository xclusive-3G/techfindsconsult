import { Star, MessageCircle } from 'lucide-react'
import { testimonials, chatReviews } from '../data/site'
import Reveal, { SectionHeading } from './Reveal'
import Chip from './Chip'

export default function Testimonials() {
  return (
    <section id="reviews" className="mb-24 scroll-mt-28">
      <SectionHeading
        align="center"
        title="What students say"
        lead="How instructors and a reliable workspace turned tech journeys into job-ready skills in Akure."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {testimonials.map((t) => (
          <article key={t.name} className="glass rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-amber-500" aria-label="5 out of 5 stars">{[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div>
                <Chip tone={t.status.includes('graduate') ? 'emerald' : 'indigo'} className="!text-[10px]">{t.status.includes('graduate') ? 'Graduate' : 'Current student'}</Chip>
              </div>
              <blockquote className="text-sm text-slate-700 leading-relaxed mb-5">“{t.quote}”</blockquote>
            </div>
            <footer className="pt-4 border-t border-indigo-100/70 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${t.from} flex items-center justify-center text-white font-bold text-xs shrink-0`}>{t.initials}</div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">{t.name}</p>
                <p className="text-[11px] text-indigo-600 font-medium truncate">{t.track}</p>
              </div>
            </footer>
          </article>
        ))}
      </div>

      <Reveal className="mt-12 pt-8 border-t border-indigo-100/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Unedited WhatsApp feedback</h3>
            <p className="text-sm text-slate-600 mt-1">Screenshots from active participants after daily class sessions, shared as sent.</p>
          </div>
          <Chip tone="white">Graphic Design & Cybersecurity tracks</Chip>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chatReviews.map((c) => (
            <figure key={c.title} className="glass rounded-3xl p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-indigo-100/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><MessageCircle size={15} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{c.title}</h4>
                    <p className="text-[11px] text-slate-500">Instructor rated {c.rating}/10</p>
                  </div>
                </div>
                <Chip tone="emerald" className="!text-[10px]">Verified chat</Chip>
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-900 ring-1 ring-slate-200/60 flex items-center justify-center">
                <img src={c.img} alt={`WhatsApp feedback — ${c.title}`} loading="lazy" className="w-full max-h-96 object-contain" />
              </div>
              <figcaption className="pt-3 px-1 text-xs italic text-slate-700">“{c.quote}”</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
