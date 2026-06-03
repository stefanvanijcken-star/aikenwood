import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import FeaturedWork from './components/home/FeaturedWork'
import BrandingProcess from './components/home/BrandingProcess'
import InsightsSection from './components/home/InsightsSection'
import SelectedWork from './components/home/SelectedWork'
import CTA from './components/home/CTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <BrandingProcess />
      <InsightsSection />
      <SelectedWork />
      <CTA />
    </main>
  )
}