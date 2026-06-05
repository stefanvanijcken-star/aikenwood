export const metadata = {
  title: 'Aikenwood | Brand Strategy Consultancy',
  description: 'Aikenwood is a brand strategy consultancy that helps ambitious companies build brands that stand out, earn trust and drive long-term growth.',
  openGraph: {
    title: 'Aikenwood | Brand Strategy Consultancy',
    description: 'Aikenwood is a brand strategy consultancy that helps ambitious companies build brands that stand out, earn trust and drive long-term growth.',
    url: 'https://aikenwood.com',
    type: 'website',
  },
  alternates: { canonical: 'https://aikenwood.com' },
}

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