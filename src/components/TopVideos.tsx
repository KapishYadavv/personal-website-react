import { topVideos } from '../data/content'
import SectionHeading from './SectionHeading'

const TopVideos = () => {
  return (
    <section className="section section--alt">
      <div className="shell">
        <SectionHeading eyebrow="Top Educational Videos" title="Hottest drops for Gen Z quants" />
        <div className="videos-grid">
          {topVideos.map((video) => (
            <article className="video-card" key={video.title}>
              <div>
                <p className="video-card__duration">{video.duration}</p>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
              <a className="btn btn--ghost" href={video.link} target="_blank" rel="noreferrer">
                Watch
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopVideos


