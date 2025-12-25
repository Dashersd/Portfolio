import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Portfolio = () => {
  // Sample projects - replace with actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      description: 'Full-stack e-commerce solution with real-time inventory management',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management System',
      tech: ['React.js', 'Firebase', 'Tailwind CSS'],
      description: 'Collaborative task management with real-time updates',
      link: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      tech: ['React.js', 'D3.js', 'REST API'],
      description: 'Data visualization dashboard with interactive charts',
      link: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="portfolio" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-12"
        >
          Portfolio
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-cyan-500/30 
                       hover:shadow-2xl transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-cyan-500 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 
                         transition-colors font-semibold"
              >
                View Case Study
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

