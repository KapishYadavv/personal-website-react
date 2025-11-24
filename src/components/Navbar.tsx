import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

type NavLink = {
  label: string
  href: string
  kind: 'route' | 'hash'
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/', kind: 'route' },
  { label: 'About', href: '/about', kind: 'route' },
  { label: 'My Work', href: '/my-work', kind: 'route' },
  { label: 'Contact', href: '/contact', kind: 'route' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleClose = () => setIsOpen(false)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (link: NavLink) => {
    if (link.kind === 'hash') {
      navigate('/')
      setTimeout(() => scrollToSection(link.href), 100)
    } else {
      navigate(link.href)
    }
    handleClose()
  }

  useEffect(() => {
    handleClose()
  }, [location.pathname])

  return (
    <header className="nav">
      <div className="shell">
        <div className="nav__content">
          <Link className="nav__logo" to="/">
            Kapish
          </Link>
          <button className="nav__toggle" type="button" aria-label="Toggle navigation" onClick={handleToggle}>
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav__panel ${isOpen ? 'nav__panel--open' : ''}`}>
            <ul className="nav__menu">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button className="nav__link" type="button" onClick={() => handleNavClick(link)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <Link className="btn nav__cta" to="/velmor-exchange" onClick={handleClose}>
              Velmor Exchange
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar


