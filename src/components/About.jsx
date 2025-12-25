import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">About Me</h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                I'm currently pursuing my Bachelor of Science in Information Technology at 
                Saint Columban College, where I've been developing my skills in system 
                development and software engineering. My journey has taken me from 
                designing wireframes to building full-stack applications.
              </p>
              
              <p className="leading-relaxed">
                As a freelance System Developer, I've worked on various projects including 
                web-based systems. I specialize in creating 
                user-friendly interfaces and robust back-end solutions that solve 
                real-world challenges.
              </p>
              
              <p className="leading-relaxed">
                What sets me apart is my attention to detail and my commitment to creating 
                solutions that are not only functional but also intuitive and maintainable. 
                I believe in writing clean code and following best practices to ensure 
                long-term success for every project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

