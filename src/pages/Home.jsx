import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <Portfolio />
      <Blog />
      <About />
      <Contact />
    </main>
  )
}

export default Home

