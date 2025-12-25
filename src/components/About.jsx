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
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a dedicated System Developer passionate about building strong, scalable, 
                and easy-to-use web applications. I specialize in creating high-performance systems 
                that solve complex technical challenges.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My approach focuses on clean and simple solutions, ensuring that every project 
                I work on is easy to maintain, efficient, and user-focused. I enjoy turning 
                complex requirements into simple solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether it's building a new system from scratch or improving existing 
                applications, I bring attention to detail and a commitment to excellence 
                to every project. I'm always eager to learn new things that can make 
                my work better.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

