import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ClarityInit from './Clarity';
import CookieBanner from "./components/CookieBanner";
import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Aikenwood',
  description: 'Building brands that lead markets.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
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