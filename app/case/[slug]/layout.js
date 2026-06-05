import { cases } from '../../data/cases'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const c = cases.find(c => c.slug === slug)
  if (!c) return {}
  return {
    title: `${c.client} - ${c.industry} Brand Strategy`,
    description: c.description,
    openGraph: {
      title: `${c.client} | Aikenwood`,
      description: c.description,
      images: [{ url: c.featuredImage, width: 1200, height: 630, alt: c.client }],
      type: 'website',
    },
    alternates: { canonical: `https://aikenwood.com/case/${slug}` },
  }
}

export default function CaseLayout({ children }) {
  return <>{children}</>
}
