import { whatIDoCards } from '../data/content'
import SectionHeading from './SectionHeading'

const WhatIDo = () => {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="What I Do"
          title="Code, markets, creation: all in one place"
          description="Just... build, trade, and explain whatever obsession I’m currently stuck on."
        />

        <div className="card-grid">
          {whatIDoCards.map((card) => (
            <article className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo


