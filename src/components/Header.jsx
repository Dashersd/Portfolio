import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navLinks = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-gray-100 hover:text-cyan-500 transition-colors"
          >
            HD
          </Link>
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="relative text-gray-100 pb-1 transition-colors duration-200
                             after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full
                             after:origin-left after:scale-x-0 after:bg-cyan-500 after:transition-transform
                             after:duration-200 hover:after:scale-x-100"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header

