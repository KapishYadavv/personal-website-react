import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'My Work', href: '/my-work' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'YT', href: 'https://www.youtube.com/@KapishVC' },
  { label: 'IG', href: 'https://instagram.com/_kapishh' },
  { label: 'X', href: 'https://x.com/KapishVC' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kapish-yadav/' },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="shell footer__stack">
        <p className="footer__brand">Kapish • 2025</p>
        <nav className="footer__nav" aria-label="Footer navigation">
          {footerLinks.map((link, index) => (
            <span key={link.href} className="footer__nav-item">
              {link.href.startsWith('/') ? <Link to={link.href}>{link.label}</Link> : <a href={link.href}>{link.label}</a>}
              {index < footerLinks.length - 1 ? <span className="footer__separator">•</span> : null}
            </span>
          ))}
        </nav>
        <div className="footer__social" aria-label="Social links">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
        <p className="footer__copyright">Copyright © 2025 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer


//YIPPPE SITE DONE (FOR NOW)