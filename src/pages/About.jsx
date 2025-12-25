import { motion } from 'framer-motion'

const About = () => {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 text-center">
              Helman Dashelle M. Dacuma: System Developer | React.js Specialist | Full-Stack Enthusiast
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a dedicated System Developer passionate about building robust, scalable, 
                and intuitive web applications. With a strong foundation in React.js and 
                full-stack development, I specialize in creating high-performance systems 
                that solve complex technical challenges.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My approach combines clean code architecture with modern development practices, 
                ensuring that every project I work on is maintainable, efficient, and user-focused. 
                I thrive on turning complex requirements into elegant solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether it's architecting a new system from the ground up or optimizing existing 
                applications, I bring a detail-oriented mindset and a commitment to excellence 
                to every project. I'm always eager to learn new technologies and methodologies 
                that can enhance the quality and performance of my work.
              </p>
              
              <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
                <h2 className="text-2xl font-bold text-cyan-500 mb-4">Technical Expertise</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• React.js & Modern JavaScript (ES6+)</li>
                  <li>• System Architecture & Design Patterns</li>
                  <li>• Full-Stack Development</li>
                  <li>• RESTful APIs & GraphQL</li>
                  <li>• Database Design & Optimization</li>
                  <li>• Performance Optimization & Scalability</li>
                  <li>• Git Version Control & CI/CD</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default About

