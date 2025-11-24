import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const featuredBuilds = [
  {
    title: 'Velmor500: Raspberry Pi Stock Exchange',
    subtitle: 'My mini Nasdaq. Full matching engine, 500 parody stocks, real-time charts.',
    cta: 'Open Velmor Exchange',
    href: '/velmor-exchange',
  },
  {
    title: 'Velmor Tech: Fintech SaaS',
    subtitle: 'Tools for traders, built the way I want to use them. Official grown-up company.',
    cta: 'See Product',
    href: '#',
  },
  {
    title: 'Quant Research',
    subtitle: 'Microstructure, volatility, execution… the rabbit holes I never escaped.',
    cta: 'View Research',
    href: '/#research',
  },
]

const projectCards = [
  { title: 'Bid-Ask Quoter', tag: 'live book sim', href: 'https://github.com/KapishYadavv/TickerGo', label: 'View' },
  { title: 'Volatility Surface Tool', tag: 'iv/hv visualizer', href: 'https://github.com/KapishYadavv/interpolated-volatility-surface', label: 'View' },
  { title: 'Unity Game (Age 14)', tag: 'first C# build', href: '#', label: 'View Screenshots' }, 
  { title: 'Crypto Spread Checker', tag: 'arb watcher', href: 'https://github.com/KapishYadavv', label: 'GitHub' },
  { title: 'Orderbook Simulator', tag: 'full LOB model', href: 'https://github.com/KapishYadavv', label: 'GitHub' },
  { title: 'Heatmap Generator', tag: 'python viz', href: 'https://github.com/KapishYadavv', label: 'GitHub' },
  { title: 'Backtesting Engine', tag: 'event driven', href: 'https://github.com/KapishYadavv', label: 'GitHub' },
  { title: 'Overpriced Options Finder', tag: 'IV > HV', href: 'https://github.com/KapishYadavv', label: 'GitHub' },
]

const sideQuests = [
  { title: 'Water App', subtitle: 'drink water digitally lol', href: 'https://water.kapishh.fun', label: 'Try it' },
  { title: 'Grass Counter', subtitle: 'number goes negative when you lie (you never touch grass RAH)', href: 'https://grass.kapishh.fun', label: 'Try it' },
  { title: 'Is The Market Manipulated?', subtitle: 'screen says YES and shakes (the wise cat said yes so i say yes)', href: '#', label: 'Try it' },
  { title: 'Should You Trade Today?', subtitle: 'test it yourself :)', href: 'https://trade.kapishh.fun', label: 'Try it' },
]

const stats = [
  { value: 4000, label: 'hours building', suffix: '+' },
  { value: 80, label: 'videos shipped', suffix: '+' },
  { value: 1.1, label: 'estimated ARR', prefix: '$', suffix: 'M', decimals: 1 },
  { value: 40, label: 'subscribers', suffix: 'k' },
  { value: 2, label: 'research papers' },
  { value: 500, label: 'github commits', suffix: '+' },
]

const AnimatedStat = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  active,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  active: boolean
}) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!active) {
      setDisplayValue(0)
      return
    }
    let frameId: number
    let start: number | null = null
    const duration = 1200

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(value * eased)
      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [value, active])

  const formattedNumber =
    decimals > 0
      ? Number(displayValue.toFixed(decimals)).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(displayValue).toLocaleString()

  return (
    <p className="stats-card__value">
      {prefix}
      {formattedNumber}
      {suffix}
    </p>
  )
}

const MyWorkPage = () => {
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page workboard">
      <section className="workboard-hero">
        <p className="section-heading__eyebrow">Workboard</p>
        <h1>Everything I’m tinkering with</h1>
        <p>Trading toys, SaaS builds, late-night jokes, and the stuff that accidentally turned into companies.</p>
      </section>

      <section className="workboard-section">
        <SectionHeading eyebrow="Featured Builds" title="Top shelf experiments" />
        <div className="workboard-feature-row">
          {featuredBuilds.map((build) => (
            <article className="workboard-feature" key={build.title}>
              <div>
                <h3>{build.title}</h3>
                <p>{build.subtitle}</p>
              </div>
              <a className="btn" href={build.href}>
                {build.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="workboard-section">
        <SectionHeading eyebrow="Everything Else I Build" title="Project grid" />
        <div className="workboard-grid">
          {projectCards.map((project) => (  // brb grabbing another coffee wait who am i talking to
            <article className="workboard-card" key={project.title}>
              <div>
                <p className="workboard-card__tag">{project.tag}</p>
                <h4>{project.title}</h4>
              </div>
              <a className="btn btn--ghost" href={project.href}>
                {project.label}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="workboard-section">
        <SectionHeading eyebrow="Side quests (2AM builds)" title="Stuff I ship for fun" />
        <div className="workboard-grid sidequests">
          {sideQuests.map((quest) => (
            <article className="workboard-card" key={quest.title}>
              <h4>{quest.title}</h4>
              <p>{quest.subtitle}</p>
              <a className="btn btn--ghost" href={quest.href}>
                {quest.label}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="workboard-section" ref={statsRef}>
        <SectionHeading eyebrow="Stats" title="Real numbers, not vibes" />
        <div className="workboard-grid stats-grid">
          {stats.map((stat) => (
            <article className="workboard-card stats-card" key={stat.label}>
              <AnimatedStat
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
                active={statsActive}
              />
              <p className="stats-card__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workboard-section">
        <div className="workboard-callout">
          <div>
            <p className="section-heading__eyebrow">The Vault </p>
            <h3>Docs, logs, prototypes, screenshots, and things you probably shouldn’t see.</h3>
          </div>
          <a className="btn" href="/velmor-exchange">
            Open The Vault (not finished yet)
          </a>
        </div>
      </section>
    </div>
  )
}

export default MyWorkPage

