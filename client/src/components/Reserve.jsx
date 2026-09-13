import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2, MessageCircle, Mail, MapPin, AlertCircle } from 'lucide-react'
import { site, packageOptions } from '../data/site'
import { SectionHeading } from './Reveal'

const today = new Date().toISOString().slice(0, 10)
const initial = { name: '', email: '', phone: '', pkg: packageOptions[0], startDate: '', notes: '' }

function validate(form) {
  if (form.name.trim().length < 2) return 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Enter a valid email address.'
  if (!/^\+?[\d\s()-]{7,20}$/.test(form.phone)) return 'Enter a valid phone or WhatsApp number.'
  if (!form.pkg) return 'Choose a package.'
  if (!/^\d{4}-\d{2}-\d{2}$/.test(form.startDate)) return 'Choose a start date.'
  return ''
}

function buildWhatsappUrl(form) {
  const number = site.phones[0].tel.slice(1)
  const text = encodeURIComponent(
    `Hello TechFinds, I just reserved a desk.\nName: ${form.name}\nPackage: ${form.pkg}\nStart: ${form.startDate}`,
  )
  return `https://wa.me/${number}?text=${text}`
}

export default function Reserve() {
  const [form, setForm] = useState(initial)
  const [state, setState] = useState({ status: 'idle', error: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    const validationError = validate(form)
    if (validationError) { setState({ status: 'error', error: validationError }); return }
    setState({ status: 'loading', error: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `Desk reservation — ${form.name}`,
          from_name: 'TechFinds website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          package: form.pkg,
          preferred_start_date: form.startDate,
          notes: form.notes || '—',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error(data.message || 'Reservation could not be sent. Try again or message us on WhatsApp.')
      setState({ status: 'success', error: '', whatsapp: buildWhatsappUrl(form) })
    } catch (err) {
      setState({ status: 'error', error: err.message })
    }
  }

  return (
    <section id="reserve" className="mb-14 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 glass rounded-3xl p-7 sm:p-9 shadow-glass-lg">
          <SectionHeading
            title="Reserve a desk"
            lead="Send a reservation request and the desk team confirms on WhatsApp."
          />
          <AnimatePresence mode="wait">
            {state.status === 'success' ? (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-emerald-50 ring-1 ring-emerald-200 p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center mb-3"><Check size={22} strokeWidth={3} /></div>
                <h3 className="font-bold text-slate-900">Reservation received</h3>
                <p className="text-sm text-slate-600 mt-1">Thanks, {form.name.split(' ')[0]}. The desk team has been notified and will confirm on {form.phone}. You can also open the chat now.</p>
                <a className="btn-primary mt-5 !bg-emerald-600 hover:!bg-emerald-700 !shadow-emerald-500/25" href={state.whatsapp || `https://wa.me/${site.phones[0].tel.slice(1)}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={16} /> Continue on WhatsApp
                </a>
                <button className="block mx-auto mt-3 text-xs text-slate-500 hover:text-indigo-600" onClick={() => { setForm(initial); setState({ status: 'idle', error: '' }) }}>Make another reservation</button>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4" onSubmit={submit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full name"><input className="field" required value={form.name} onChange={set('name')} placeholder="e.g. Adeola Johnson" autoComplete="name" /></Field>
                  <Field label="Phone / WhatsApp"><input className="field" required type="tel" value={form.phone} onChange={set('phone')} placeholder="+234 800 000 0000" autoComplete="tel" /></Field>
                </div>
                <Field label="Email address"><input className="field" required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" autoComplete="email" /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Package">
                    <select className="field" value={form.pkg} onChange={set('pkg')}>{packageOptions.map((o) => <option key={o}>{o}</option>)}</select>
                  </Field>
                  <Field label="Preferred start date"><input className="field" required type="date" min={today} value={form.startDate} onChange={set('startDate')} /></Field>
                </div>
                <Field label="Requirements or skill track of interest">
                  <textarea className="field" rows={3} value={form.notes} onChange={set('notes')} placeholder="Family skill registration, thesis printing, team reservation…" />
                </Field>
                {state.status === 'error' && (
                  <p role="alert" className="flex items-start gap-2 text-xs text-red-700 bg-red-50 ring-1 ring-red-200 rounded-xl p-3"><AlertCircle size={14} className="mt-0.5 shrink-0" />{state.error}</p>
                )}
                <button type="submit" disabled={state.status === 'loading'} className="btn-primary w-full disabled:opacity-70">
                  {state.status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : 'Send reservation request'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="glass rounded-3xl p-7">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Talk to the desk team</h3>
            <div className="space-y-3 text-sm">
              {site.phones.map((p) => (
                <a key={p.tel} className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 hover:bg-white ring-1 ring-slate-100 transition" href={`https://wa.me/${p.tel.slice(1)}`} target="_blank" rel="noreferrer">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0"><MessageCircle size={18} /></div>
                  <div><span className="text-xs text-slate-500 font-medium">{p.label}</span><p className="font-bold text-slate-900">{p.display}</p></div>
                </a>
              ))}
              <a className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 hover:bg-white ring-1 ring-slate-100 transition" href={`mailto:${site.email}`}>
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><Mail size={18} /></div>
                <div className="min-w-0"><span className="text-xs text-slate-500 font-medium">Email</span><p className="font-bold text-slate-900 text-xs sm:text-sm truncate">{site.email}</p></div>
              </a>
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0"><MapPin size={18} /></div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 mb-1">Find us</h4>
                <p className="text-sm font-semibold text-slate-900 leading-relaxed">{site.address}</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Hours</span><span className="font-bold text-indigo-700">{site.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-700 mb-1">{label}</span>
      {children}
    </label>
  )
}
