import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Passes from './components/Passes'
import Memberships from './components/Memberships'
import Academy from './components/Academy'
import Testimonials from './components/Testimonials'
import Research from './components/Research'
import Reserve from './components/Reserve'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Ambient orbs */}
      <div aria-hidden className="orb w-96 h-96 bg-purple-300/40 -top-20 -right-10 animate-drift" />
      <div aria-hidden className="orb w-[450px] h-[450px] bg-indigo-200/50 top-[700px] -left-40 animate-drift-slow" />
      <div aria-hidden className="orb w-96 h-96 bg-blue-200/40 bottom-[1200px] -right-16 animate-drift" />

      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-14 pb-20">
        <Hero />
        <About />
        <Passes />
        <Memberships />
        <Academy />
        <Testimonials />
        <Research />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}
