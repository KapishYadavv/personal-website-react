import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="shell hero__grid">
        <div className="hero__text">
          <p className="hero__eyebrow">Quant dev • fintech founder • builder</p>
          <h1>
            Hi! I’m Kapish,
            <span className="hero__highlight"> Quant Dev & Fintech Founder.</span>
          </h1>
          <p className="hero__description">
            I build trading tools, research rabbit holes, and content dumps. If something feels too extra for high school,
            I probably shipped it anyway.
          </p>
          <div className="hero__actions">
            <Link className="btn" to="/about">
              About Me
            </Link>
            <a className="btn btn--ghost" href="#research">
              Research Papers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


