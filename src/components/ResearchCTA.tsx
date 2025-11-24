import { useState } from 'react'
import ResearchModal from './ResearchModal'

const researchPapers = [
  {
    title: 'Support and Resistance Reexamined: A Quantitative Analysis of Pattern Illusions in Random Market Data',
    meta: 'PDF · 5 pages',
    pdfLink:
      'https://download.ssrn.com/2025/10/1/5552703.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLWVhc3QtMSJHMEUCIGBbJ1fln8kJWDSB5KQhzxK8HLW6jGYP9wkl51L%2BAI2SAiEArCBmpxfWNjuDJLf51v8AFP%2BtQH9RRu2sCG6T1uiIZnQqxgUI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgwzMDg0NzUzMDEyNTciDCD5TBeNvxBt6vUNoiqaBURVMxt1Pim6hU7mkm5yN5GI8vK2XG3UZuOvtFuU4W5XvD9xfP9e16b0veblYstVBlvc11L2U0qZxrMDPgpnNeEkgZIQXZwBnRAPeJbNu2UCxRK35gkqzmVkYxIe%2B39YHhVgEZx%2Fhq8Qsrl1C8O536adJxtA08zOluHfCP33S1Fy7s6ZxcnLoX3l%2F15CkP%2FuQSebyx1vzPLZmMiXJetJfuiugm%2FZVf9Hsc%2FxSoa9IEK9rnZgKZ8rg8tNW2b5wYfWVL7CzsKYpchqahhCeiAqHKJsKFmfKpxXjto16DgMHN8eX4fFIKNslkdxH4cdSP%2B%2BTLoQX2rmzNycIvwQ1x5WGS5mqUYNXCYB%2B9KIg%2BFJE6yEn84DY3o5S0E5Z9S3E88MLuROPKtHvL0OhCX9o8p8KZwU%2BmJi3xQaNXq9T%2FERcdACpHupKcKV0hCKNtqV9Cdu6bNYqolqmpwmBfQFrI2l6St%2B1EwD4LFBihtsaujFEiHrHvLaFzXdOtVgb0BeAqHBib9QVVQuR%2FidwDNMqbAqzKRWcctRiBCHMKzGfF%2BTVnfjMwLnYcbjXNUmnB6ipWKIc8%2BJzPXc2%2FEm%2BaQTqgIuNv%2BmvmvnSPQ5uGfVeERfN2KhoC4FSAe%2BKqDWQ4j5G9lRFlpgrXHLPhIcpcWVCVpUKfWQ%2BKBk9jZwR4XC6XxVXK07A%2F03hb2fRq7Gl9Hx02CXK3ey8Y2nKnfMvNS8UDzrbBCsqUsKUPkMLf%2BSH3KPgW6AF26at0uEaBWK7GIaHbKa8Pw9UnG3Az1z%2FdSVbB%2BdB%2F7tUVKvNw7WTXXWr%2BowHEVJkoyvzx%2FV5WofsWR2fExEJIGKtWsTatxwmm%2BaK6Gmz5MkQQ8F88tShm7dNBOSCEqP6mOFmxCeyf3OZzC1i%2FbIBjqxAbgBI%2FkdASJ1ht%2BlHwSQc1zVWBmvbN23gIbxGIea6DfQeKGl37YG6gUQ%2FYMNjq%2BHVG3HRb4hOKwoaZecOY04WouV%2BySXkjkYJ%2BP26mL%2BXOQXhnMHcM6wS2ANmTQRjqXfXQmYd4FCovz1ZeFYdG5RN7FiuWwUpTLASwysmjF1MJDKm2BoX6D8pJIim7JHmELhPl4PAQOUfGGfHltPbEbWeFahaHkvmgIx6gf4pwxdpnrfwg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251119T101634Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUPUUPRWE2ZSL7SJZ%2F20251119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5f984326a59b49bae7add072e15a0644f79577bd382d36b66a077d148a68c352&abstractId=5552703',
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







