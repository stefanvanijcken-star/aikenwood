import Script from 'next/script'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ClarityInit from './Clarity';
import CookieBanner from "./components/CookieBanner";
import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  metadataBase: new URL('https://aikenwood.com'),
  title: {
    template: '%s | Aikenwood',
    default: 'Aikenwood | Brand Strategy Consultancy',
  },
  description: 'Aikenwood is a brand strategy consultancy that helps ambitious companies build brands that stand out, earn trust and drive long-term growth.',
  openGraph: {
    type: 'website',
    siteName: 'Aikenwood',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aikenwood',
  description: 'Brand strategy consultancy helping ambitious companies build brands that lead markets.',
  url: 'https://aikenwood.com',
  email: 'hello@aikenwood.com',
  telephone: '+31653633797',
  serviceType: ['Brand Strategy', 'Visual Identity', 'Brand Management', 'Research', 'Brand Touchpoints'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PTNWYHRWQG" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PTNWYHRWQG');
        `}</Script>
        <ClarityInit />
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}