import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}

export default Home

