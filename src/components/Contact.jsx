import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, Github, Instagram } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-12 text-center">
            Get In Touch
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                             text-gray-100 focus:outline-none focus:border-cyan-500 
                             focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                             text-gray-100 focus:outline-none focus:border-cyan-500 
                             focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                             text-gray-100 focus:outline-none focus:border-cyan-500 
                             focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-gray-900 px-8 py-3 rounded-lg 
                           font-semibold hover:bg-cyan-400 transition-all duration-300 
                           glow-cyan-hover"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-gray-100 mb-6">
                  Contact Details
                </h2>
                
                <div className="space-y-4">
                  <a
                    href="mailto:helmandacuma5@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-500 
                             transition-colors group"
                  >
                    <Mail className="text-cyan-500 group-hover:text-cyan-400" size={24} />
                    <span className="text-lg">helmandacuma5@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:+639975640228"
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-500 
                             transition-colors group"
                  >
                    <Phone className="text-cyan-500 group-hover:text-cyan-400" size={24} />
                    <span className="text-lg">+63 997 564 0228</span>
                  </a>
                  
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-500 
                             transition-colors group"
                  >
                    <Github className="text-cyan-500 group-hover:text-cyan-400" size={24} />
                    <span className="text-lg">GitHub</span>
                  </a>
                  
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-500 
                             transition-colors group"
                  >
                    <Instagram className="text-cyan-500 group-hover:text-cyan-400" size={24} />
                    <span className="text-lg">Instagram</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your visions. Feel free to reach out through any of the 
                  channels above, and I'll get back to you as soon as possible.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

