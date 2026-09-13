import { useState } from 'react'
import { site } from '../data/site'

// Shows the brand image; falls back to a wordmark if the image can't load.
export default function Logo({ className = 'h-9 md:h-10' }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <span className={`${className} inline-flex items-center gap-2 font-extrabold text-slate-900 tracking-tight`}>
        <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 text-white text-xs flex items-center justify-center">TF</span>
        TechFinds
      </span>
    )
  }
  return <img alt={site.name} className={`${className} w-auto object-contain`} src={site.logo} onError={() => setFailed(true)} />
}
