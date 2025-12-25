import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const Blog = () => {
  // Sample blog posts - replace with actual blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to architect React applications that scale with your business needs and handle complex state management.',
      date: '2024-01-15',
      category: 'React.js',
      link: '#',
    },
    {
      id: 2,
      title: 'System Architecture Best Practices',
      excerpt: 'Exploring modern system design patterns and how to implement them in full-stack applications for optimal performance.',
      date: '2024-01-10',
      category: 'Architecture',
      link: '#',
    },
    {
      id: 3,
      title: 'Performance Optimization Techniques',
      excerpt: 'Deep dive into performance optimization strategies for web applications, from code splitting to lazy loading.',
      date: '2024-01-05',
      category: 'Performance',
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

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section id="blog" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-4"
        >
          Blog
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Insights, tutorials, and thoughts on system development, React.js, and modern web technologies.
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-cyan-500/30 
                       hover:shadow-2xl transition-all duration-300 border border-gray-700
                       flex flex-col"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-gray-700 text-cyan-500 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-3">
                {post.title}
              </h3>
              
              <p className="text-gray-400 mb-4 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>{formatDate(post.date)}</span>
                </div>
                
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 
                           transition-colors font-semibold text-sm"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog

