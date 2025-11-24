import { blogPost } from '../data/content'
import SectionHeading from './SectionHeading'

const BlogSection = () => {
  return (
    <section id="blog" className="section">
      <div className="shell">
        <SectionHeading eyebrow="Blog" title="Latest Post" />

        <article className="blog-card">
          <div className="blog-card__meta">
            <span>{blogPost.category}</span>
            <span>{blogPost.date}</span>
          </div>
          <h3>{blogPost.title}</h3>
          <p>{blogPost.subtitle}</p>
          <a className="btn btn--ghost" href="#contact">
            Discuss the write-up
          </a>
        </article>
      </div>
    </section>
  )
}

export default BlogSection


