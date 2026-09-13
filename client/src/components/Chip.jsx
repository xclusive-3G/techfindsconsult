const tones = {
  indigo: 'bg-indigo-100 text-indigo-700',
  emerald: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
  purple: 'bg-purple-100 text-purple-700',
  blue: 'bg-blue-100 text-blue-700',
  amber: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  slate: 'bg-slate-100 text-slate-700',
  white: 'bg-white/80 text-slate-700 ring-1 ring-slate-200',
}

export default function Chip({ tone = 'indigo', pulse, children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${tones[tone]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  )
}
