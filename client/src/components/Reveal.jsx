import { motion, useReducedMotion } from 'framer-motion'

// Section-level reveal. Used on headers and a few hero elements only — not on every card.
export default function Reveal({ children, className = '', delay = 0, y = 18 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ title, lead, action, align = 'left' }) {
  return (
    <Reveal className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10 ${align === 'center' ? 'text-center md:justify-center' : ''}`}>
      <div className={align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{title}</h2>
        {lead && <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">{lead}</p>}
      </div>
      {action}
    </Reveal>
  )
}
