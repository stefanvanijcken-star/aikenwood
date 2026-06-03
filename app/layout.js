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
        {children}
        <Footer />
      </body>
    </html>
  )
}