import { useState } from 'react'
import ResearchModal from './ResearchModal'

const researchPapers = [
  {
    title: 'Support and Resistance Reexamined: A Quantitative Analysis of Pattern Illusions in Random Market Data',
    meta: 'PDF · 5 pages',
    pdfLink:
      '',
    summaryLink: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5552703',
  },
  {
    title: 'Institutional Volatility Cap via Long-Dated OI Spikes in Nifty',
    meta: 'PDF · 3 pages',
    pdfLink: '#',
    summaryLink: '#',
  },

]

const ResearchCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="research" className="section research">
        <div className="shell research__grid">
          <div>
            <p className="section-heading__eyebrow">Research Papers</p>
            <h2>Microstructure deep dives + fintech operating manuals</h2>
            <p>These are my lab notes; order books, volatility caps, pricing stress tests, and whatever else I’m experimenting on.</p>
          </div>
          <div className="research__panel">
            <p>Proof-of-work memos, liquidity experiments, and frameworks packaged for admissions & collaborators.</p>
            <button className="btn" type="button" onClick={() => setIsModalOpen(true)}>
              View All My Research Papers
            </button>
          </div>
        </div>
      </section>
      <ResearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} papers={researchPapers} />
    </>
  )
}

export default ResearchCTA







