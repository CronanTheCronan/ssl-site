import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MissionStrip } from './components/MissionStrip'
import { Nav } from './components/Nav'
import { Products } from './components/Products'
import { Values } from './components/Values'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Products />
        <MissionStrip />
        <Values />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
