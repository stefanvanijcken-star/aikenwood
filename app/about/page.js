import Navbar from '../components/Navbar'

export const metadata = {
  title: 'About',
  description: 'Learn about Aikenwood, a brand strategy consultancy dedicated to helping ambitious companies build brands that lead markets.',
  openGraph: {
    title: 'About | Aikenwood',
    description: 'Learn about Aikenwood, a brand strategy consultancy dedicated to helping ambitious companies build brands that lead markets.',
    url: 'https://aikenwood.com/about',
    type: 'website',
  },
  alternates: { canonical: 'https://aikenwood.com/about' },
}

export default function About() {
  return (
    <>
      <Navbar />
      <main className="px-section" style={{ paddingTop: '56px' }}>
        <h1 className="text-h3">About</h1>
      </main>
    </>
  )
}
