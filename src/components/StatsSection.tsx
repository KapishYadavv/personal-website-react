import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/content'
import SectionHeading from './SectionHeading'

type Stat = {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
}

const AnimatedValue = ({ stat, active }: { stat: Stat; active: boolean }) => {
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
      setDisplayValue(stat.value * eased)
      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [stat.value, active])

  const formatted =
    stat.decimals && stat.decimals > 0
      ? Number(displayValue.toFixed(stat.decimals)).toLocaleString(undefined, {
          minimumFractionDigits: stat.decimals,
          maximumFractionDigits: stat.decimals,
        })
      : Math.round(displayValue).toLocaleString()

  return (
    <p className="stat-card__value">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </p>
  )
}

const StatsSection = () => {
  const [active, setActive] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="section" ref={sectionRef}>
      <div className="shell">
        <SectionHeading eyebrow="My Work" title="Momentum backed by reps" align="center" />
        <div className="stats-grid">
          {stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <AnimatedValue stat={item} active={active} />
              <p className="stat-card__label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

