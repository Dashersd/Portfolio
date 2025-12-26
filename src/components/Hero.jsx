import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      const headerOffset = 80
      const elementPosition = portfolioSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4"
            >
              Helman Dashelle M. Dacuma
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl text-cyan-500 mb-6"
            >
              System Developer
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className="text-base md:text-lg text-gray-300 mb-8 space-y-4 max-w-2xl leading-relaxed"
            >
              <p>
                I am a dedicated System Developer passionate about building strong, scalable, 
                and easy-to-use web applications. I specialize in creating high-performance systems 
                that solve complex technical challenges.
              </p>
              
              <p>
                My approach focuses on clean and simple solutions, ensuring that every project 
                I work on is easy to maintain, efficient, and user-focused. I enjoy turning 
                complex requirements into simple solutions.
              </p>
              
              <p>
                Whether it's building a new system from scratch or improving existing 
                applications, I bring attention to detail and a commitment to excellence 
                to every project. I'm always eager to learn new things that can make 
                my work better.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <button
                onClick={scrollToPortfolio}
                className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-lg font-semibold 
                         hover:bg-cyan-400 transition-all duration-300 glow-cyan-hover
                         animate-pulse hover:animate-none cursor-pointer"
              >
                View My Work
              </button>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Helman_Dashelle_Dacuma_CV.pdf"
                className="px-8 py-3 rounded-lg font-semibold border border-cyan-500 text-cyan-500
                         hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300
                         glow-cyan-hover"
              >
                Download CV
              </a>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-center"
          >
            <img
              src="/Profile.png"
              alt="Helman Dashelle M. Dacuma"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-cyan-500 object-cover shadow-lg shadow-cyan-500/20"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

