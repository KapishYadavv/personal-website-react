import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import VelmorExchangePage from './pages/VelmorExchangePage'
import MyWorkPage from './pages/MyWorkPage'

const ScrollManager = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      }
    }
  }, [location])
//why are you reading this? lil bro you peaking using devtools huh 
  return null
}

const App = () => {
  return (
    <div className="app-shell">
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/velmor-exchange" element={<VelmorExchangePage />} />
          <Route path="/my-work" element={<MyWorkPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
