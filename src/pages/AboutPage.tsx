const introParagraphs = [
  'Hi, I’m Kapish, also known as Kapishh online. I am a quant dev, fintech founder, and full-time builder who got into markets way earlier than any kid probably should have. I like taking hard problems in finance and tech, breaking them apart, and then shipping something that solves the annoying parts.',
  'I started exploring the stock market at 13. By 16, I was consistently profitable in options trading and managing capital with actual discipline. What began as random curiosity slowly turned into the foundation for Velmor, my long-term project focused on quantitative research, trading systems, and next-generation fintech tools.',
  'I build things across both worlds. Trading models, dashboards, analytics platforms, microstructure experiments, content, and full-blown simulated exchanges. If a problem feels too advanced for someone my age, I usually take that as a personal invitation to try.',
]

const careItems = [
  {
    title: 'Code',
    body:
      'I write whatever I need. Python for models. React for dashboards. Scripts for stress tests. Tools that make my workflow cleaner. Build fast, fix faster, and ship things that feel fun to use.',
  },
  {
    title: 'Markets',
    body:
      'Charts have been part of my life since middle school. I started with basic trading, moved into options, then into volatility, spreads, and market structure. I am obsessed with understanding why price moves the way it does and how to model that behavior without relying on hype.',
  },
  {
    title: 'Quant Research',
    body:
      'Microstructure, volatility, liquidity, pricing anomalies. The less mainstream the problem, the more I want to play with it. My research papers are my long-form breakdowns of these ideas. They are my receipts, experiments, and frameworks for anyone who wants to see how I think.',
  },
  {
    title: 'Building Things That Scale',
    body:
      'Projects like Velmor Minimex, my in-house simulated exchange, exist because I wanted a place to stress-test strategies the way real trading engines do. I like creating tools that feel like they came from an actual fintech lab, even if I built them from a bedroom.',
  },
  {
    title: 'Content and Teaching',
    body:
      'Younger me struggled to understand markets because everything online was either boring, confusing, or made for clicks. So I create content for people who are curious but overwhelmed. I explain ideas the way I wish someone had explained them to me.',
  },
]

const aboutSections = [
  {
    title: 'Why I Build',
    paragraphs: [
      'I grew up in a middle class family in India. Limited resources taught me to be scrappy, curious, and disciplined. I learned early on that you can outwork your circumstances if you keep building and keep learning.',
      'My projects are a mix of obsession, ambition, and the belief that teenagers are allowed to think big. I want to create tools, strategies, and systems that stand on their own. Not hype. Not shortcuts. Actual work.',
    ],
  },
  {
    title: 'My Long-Term Vision',
    paragraphs: [
      'I am building toward a complete trading ecosystem under Velmor. The goal is simple. Use data, research, and engineering to create the kind of quant infrastructure I wish existed. Systems that are clean, scalable, and transparent.',
      'In the future, I want Velmor to stand as a global quantitative research and trading firm. A place where experiments, models, and real-world execution come together to form something bigger than just trades.',
    ],
  },
  {
    title: 'The Real Me Outside the Nerd Stuff',
    paragraphs: [
      'I grew up gaming. Garry’s Mod, Scrap Mechanic, Just Cause 3, Forza Horizon, Dying Light, Human Fall Flat. These games shaped my love for tinkering and systems. I still geek out over PC builds, niche tools, and anything that lets me create something new.',
      'I like building with people. I like learning new things. And I like documenting the chaos along the way.',
      'If you’re here, welcome. This site is my workbench. Part research journal, part project dump, part highlight reel of the things I am trying to understand. Hope you find something here worth exploring.',
    ],
  },
]

const AboutPage = () => {
  return (
    <div className="page">
      <section className="page-header about-intro">
        <h1>About Me</h1>
        {introParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="page-section about-centered">
        <div className="rich-text">
          <h2>What I Care About</h2>
          {careItems.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {aboutSections.map((section) => (
        <section className="page-section about-centered" key={section.title}>
          <div className="rich-text">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default AboutPage


