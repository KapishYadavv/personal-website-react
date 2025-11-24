import { differentiators } from '../data/content'
import SectionHeading from './SectionHeading'

const Differentiators = () => {
  return (
    <section className="section section--alt">
      <div className="shell">
        <SectionHeading
          eyebrow="How am I different?"
          title="Intuition trained by markets, shipped with design thinking"
        />

        <div className="diff-grid">
          {differentiators.map((item) => (
            <article className="diff-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators






//uh im too tired to update title here 

