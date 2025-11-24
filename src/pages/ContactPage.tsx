import { contactInfo } from '../data/content'

const iconPaths = {
  location: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.75c-3.35 0-6.25 2.67-6.25 6.12 0 4.78 6.25 12.38 6.25 12.38s6.25-7.6 6.25-12.38c0-3.45-2.9-6.12-6.25-6.12Zm0 8.4a2.28 2.28 0 1 1 0-4.56 2.28 2.28 0 0 1 0 4.56Z"
        fill="currentColor"
      />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8.17 3.3c.38-.73 1.25-1.03 2.03-.76l1.73.6c.77.27 1.2 1.09 1 1.88l-.53 2.07c-.16.63.05 1.3.53 1.72l1.94 1.71c.5.44 1.21.56 1.83.32l1.96-.75c.8-.31 1.7.02 2.08.78l.86 1.68c.41.8.13 1.78-.62 2.28-3.02 2.02-6.96 4.4-14.54-3.18C2.77 7.68 5.15 3.74 7.17.72c.5-.75 1.49-1.03 2.28-.62l1.68.86c.76.38 1.09 1.28.78 2.08l-.75 1.96c-.24.62-.12 1.33.32 1.83l1.71 1.94c.42.48 1.09.69 1.72.53l2.07-.53c.79-.2 1.61.23 1.88 1l.6 1.73c.27.78-.03 1.65-.76 2.03l-2.05 1.05"
        fill="currentColor"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.25 6.5c0-.97.78-1.75 1.75-1.75h12c.97 0 1.75.78 1.75 1.75v11c0 .97-.78 1.75-1.75 1.75h-12c-.97 0-1.75-.78-1.75-1.75v-11Zm1.75-.25a.25.25 0 0 0-.25.25v.34l6.05 4.03 6.05-4.03v-.34a.25.25 0 0 0-.25-.25h-11.6Zm11.85 2.4-4.82 3.21a1.5 1.5 0 0 1-1.66 0L6.55 8.65v7.1c0 .14.11.25.25.25h11.6c.14 0 .25-.11.25-.25V8.65Z"
        fill="currentColor"
      />
    </svg>
  ),
}

const ContactDetail = ({
  icon,
  label,
  value,
  href,
}: {
  icon: 'location' | 'phone' | 'email'
  label: string
  value: string
  href?: string
}) => (
  <div className="contact-detail">
    <span className="icon-badge">{iconPaths[icon]}</span>
    <div>
      <p className="contact-detail__label">{label}</p>
      {href ? (
        <a href={href} className="contact-detail__value">
          {value}
        </a>
      ) : (
        <p className="contact-detail__value">{value}</p>
      )}
    </div>
  </div>
)

const ContactPage = () => {
  return (
    <div className="page">
      <section className="page-header">
        <p className="section-heading__eyebrow">Contact</p>
        <h1>Contact Me</h1>
        <p>Let’s build the next financial operating system.</p>
      </section>

      <section className="page-section contact-page-grid">
        <div className="page-card">
          <h2>Reach out directly</h2>
          <ContactDetail icon="location" label="Location" value={contactInfo.location} />
          <ContactDetail icon="phone" label="Phone" value={contactInfo.phone} />
          <ContactDetail icon="email" label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
        </div>

        <form className="page-card contact-form">
          <h2>Send a message</h2>
          <label>
            Name
            <input type="text" name="name" placeholder="Full name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} placeholder="What should we build together?" required />
          </label>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="page-section contact-cta">
        <div className="page-card contact-cta__card">
          <p className="section-heading__eyebrow">Collaboration</p>
          <h2>Ready for fintech experiments, research drafts, or build weeks.</h2>
          <p>
            Whether it’s a deep tech thesis, market-structure research, or media collab, I’m always up for something
            ambitious. Drop a note and I’ll get back fast.
          </p>
          <a className="btn" href={`mailto:${contactInfo.email}`}>
            Email Kapish
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage









