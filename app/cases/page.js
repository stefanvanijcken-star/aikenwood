import Navbar from '../components/Navbar'
import CaseCard from '../components/CaseCard'
import { cases } from '../data/cases'

export default function Cases() {
  const rows = []
  for (let i = 0; i < cases.length; i += 2) {
    rows.push(cases.slice(i, i + 2))
  }

  return (
    <>
      <Navbar />
      <main className="px-section" style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        <div className="page-header">
          <h3 style={{ margin: 0 }}>Our Work</h3>
          <p style={{ margin: 0, maxWidth: '420px', textAlign: 'right' }}>
            Explore how we help ambitious companies build brands that stand out, earn trust and grow.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {rows.map((row, i) => (
            <div key={i} className="case-cards-row">
              {row.map((c) => (
                <CaseCard key={c.slug} c={c} />
              ))}
              {row.length === 1 && <div style={{ flex: 1 }} />}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
