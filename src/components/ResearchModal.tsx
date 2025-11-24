import { useEffect } from 'react'

type ResearchPaper = {
  title: string
  meta: string
  pdfLink: string
  summaryLink: string
}

type ResearchModalProps = {
  isOpen: boolean
  onClose: () => void
  papers: ResearchPaper[]
}

const ResearchModal = ({ isOpen, onClose, papers }: ResearchModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="research-modal-title">
        <header className="modal__header">
          <div>
            <p className="section-heading__eyebrow">Research Archive</p>
            <h3 id="research-modal-title">The receipts</h3>
          </div>
          <button className="modal__close" type="button" aria-label="Close modal" onClick={onClose}>
            ×
          </button>
        </header>

        <div className="modal__body">
          {papers.map((paper) => (
            <article className="modal-paper" key={paper.title}>
              <div>
                <h4>{paper.title}</h4>
                <p className="modal-paper__meta">{paper.meta}</p>
              </div>
              <div className="modal-paper__actions">
                <a className="btn" href={paper.pdfLink} target="_blank" rel="noreferrer">
                  View PDF
                </a>
                <a className="btn btn--ghost" href={paper.summaryLink} target="_blank" rel="noreferrer">
                  Summary
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResearchModal


