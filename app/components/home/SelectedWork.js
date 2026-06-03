'use client'
import CaseCard from '../CaseCard'
import { cases } from '../../data/cases'

export default function SelectedWork() {
  const selected = cases.slice(0, 4)
  const rows = [selected.slice(0, 2), selected.slice(2, 4)]

  return (
    <section className="px-section" style={{
      paddingTop: '56px',
      paddingBottom: '56px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
    }}>
      <h3>Selected Work</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {rows.map((row, i) => (
          <div key={i} className="case-cards-row">
            {row.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
