import Chip from './Chip'
import Reveal, { SectionHeading } from './Reveal'

const capabilities = [
  'Digital skills training',
  'Data collection',
  'Data science',
  'Machine learning',
  'Software development',
  'Web design',
  'Innovation',
  'Co-working space',
  'IT/Research support',
]

export default function About() {
  return (
    <section id="about" className="mb-20 scroll-mt-28">
      <div className="glass rounded-3xl p-8 sm:p-12">
        <SectionHeading
          title="About TechFinds Consult Limited"
          lead="An IT company driving innovation and research across the tech ecosystem."
        />
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              TechFinds Consult Limited is an IT company that drives innovation and research through digital skills training, data collection, data science, machine learning, software development, web design, innovation, co-working space, and IT/Research support. TechFinds Consult is committed to raising tech gurus and innovators that would make a positive impact to the global tech space.
            </p>
            <p>
              The organization teaches tech enthusiasts and newbies digital courses both online and in-person at our tech hub in Akure, Ondo State, and mentors them until they start getting gigs home and abroad. The organization is not only limited to teaching high-demand tech skills — we also offer freelancers and tech newbies a room to hone their skills by employing co-working space at our tech hub for networking and growth at a pocket-friendly price.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap content-start gap-2">
            {capabilities.map((c) => <Chip key={c}>{c}</Chip>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
